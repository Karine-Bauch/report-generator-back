import { Injectable, NotFoundException } from '@nestjs/common';
import { ReportTemplate } from './entities/report-template.entity';
import { reportTemplatesDatas } from 'src/data/report-templates';

@Injectable()
export class ReportTemplatesService {
  private reportTemplates: ReportTemplate[] = reportTemplatesDatas;

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
    console.log(surgeryDatas);

    //TODO: Modify Fetch with Axios to send request to openAI API
    const reportGenerated = await fetch('../utils/generatePrompt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        template: template.content,
        surgeryDatas: surgeryDatas.infos,
      }),
    });

    return reportGenerated;

    // return `This action generates a report with
    // template: ${template.content}
    // surgeryDatas: ${surgeryDatas.infos}`;
  }
}
