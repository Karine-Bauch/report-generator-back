import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ReportTemplatesService } from './report-templates.service';
import { CreateReportTemplateDto } from './dto/create-report-template.dto';
import { UpdateReportTemplateDto } from './dto/update-report-template.dto';

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

  @Post()
  create(@Body() createReportTemplateDto: CreateReportTemplateDto) {
    return this.reportTemplatesService.create(createReportTemplateDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReportTemplateDto: UpdateReportTemplateDto,
  ) {
    return this.reportTemplatesService.update(id, updateReportTemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reportTemplatesService.remove(id);
  }
}
