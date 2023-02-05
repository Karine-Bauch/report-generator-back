import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ReportTemplate } from './entities/report-template.entity';
import { reportTemplatesDatas } from 'src/data/report-templates';
import { HttpService } from '@nestjs/axios';
import { catchError, lastValueFrom, map } from 'rxjs';
import { Configuration, OpenAIApi, CreateCompletionRequest } from 'openai';
import generatePrompt from '../utils/generate';

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
    const prompt = generatePrompt(template.content, surgeryDatas.infos);
    console.log('prompt: ', prompt, 'id: ', id);

    try {
      const params: CreateCompletionRequest = {
        prompt: prompt,
        model: 'text-davinci-003',
        temperature: 0.9,
        max_tokens: 200,
      };

      const response = await this.openAiApi.createCompletion(params);
      const newReport = await response.data.choices[0].text;

      return newReport;
    } catch (error) {
      console.log(error);
    }

    // const template = await this.findOne(id);
    // console.log(surgeryDatas);

    // const request = this.httpService
    //   .post('localhost:3000/src/utils/generatePrompt.js', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       template: template.content,
    //       surgeryDatas: surgeryDatas.infos,
    //     }),
    //   })
    //   .pipe(map((response) => response.data))
    //   .pipe(
    //     catchError(() => {
    //       throw new ForbiddenException('API not available');
    //     }),
    //   );

    // const reportGenerated = await lastValueFrom(request);
    // return reportGenerated;

    // return `This action generates a report with
    // template: ${template.content}
    // surgeryDatas: ${surgeryDatas.infos}`;
  }
}
