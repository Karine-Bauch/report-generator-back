import { Injectable, NotFoundException } from '@nestjs/common';
import { ReportTemplate } from './entities/report-template.entity';
import { reportTemplatesDatas } from 'src/data/report-templates';
import { Configuration, OpenAIApi, CreateCompletionRequest } from 'openai';

@Injectable()
export class ReportTemplatesService {
  private reportTemplates: ReportTemplate[] = reportTemplatesDatas;
  private readonly openAiApi: OpenAIApi;
  constructor() {
    const configuration = new Configuration({
      organization: process.env.OPENAI_ORGANIZATION,
      apiKey: process.env.OPENAI_API_KEY,
    });

    this.openAiApi = new OpenAIApi(configuration);
  }

  findAll(): ReportTemplate[] {
    return this.reportTemplates;
  }

  findOne(id: string): ReportTemplate {
    const reportTemplate = this.reportTemplates.find(
      (reportTemplate) => reportTemplate.id === +id,
    );
    if (!reportTemplate) {
      throw new NotFoundException(`ReportTemplate #${id} not found`);
    }
    return reportTemplate;
  }

  findAllTags(): string[] {
    const allTags = this.reportTemplates.reduce((acc, curr) => {
      curr.tags.forEach((tag) => {
        if (!acc.includes(tag)) {
          acc.push(tag);
        }
      });
      return acc;
    }, []);

    return allTags;
  }

  findByTag(tag: string): any {
    const reportTemplates = this.reportTemplates.filter((reportTemplate) =>
      reportTemplate.tags.includes(tag),
    );

    if (reportTemplates.length <= 0) {
      throw new NotFoundException(`ReportTemplate #${tag} not found`);
    }
    return reportTemplates;
  }

  async generateReport(id: string, surgeryDatas: any) {
    const template = await this.findOne(id);
    const prompt = `
      ${template.content}.
      Réécris ce compte-rendu opératoire pour ${surgeryDatas.infos} en respectant exactement le contenu et la mise en page
    `;
    // console.log('prompt: ', prompt, 'id: ', id);

    try {
      const params: CreateCompletionRequest = {
        prompt: prompt,
        model: 'text-davinci-003',
        temperature: 0.6,
        max_tokens: 1000,
      };

      const response = await this.openAiApi.createCompletion(params);
      const newReport = await response.data;

      return newReport;
    } catch (error) {
      console.log(error);
    }
  }
}
