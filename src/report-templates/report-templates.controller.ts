import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReportTemplatesService } from './report-templates.service';

@Controller('report-templates')
export class ReportTemplatesController {
  constructor(
    private readonly reportTemplatesService: ReportTemplatesService,
  ) {}

  @Get()
  findAll() {
    return this.reportTemplatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reportTemplatesService.findOne(id);
  }

  @Post(':id/generate')
  generateReport(@Param('id') id: string, @Body() surgeryDatas: any) {
    return this.reportTemplatesService.generateReport(id, surgeryDatas);
  }
}
