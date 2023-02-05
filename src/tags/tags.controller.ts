import { Controller, Get, Param } from '@nestjs/common';
import { ReportTemplatesService } from '../report-templates/report-templates.service';

@Controller('tags')
export class TagsController {
  constructor(
    private readonly reportTemplatesService: ReportTemplatesService,
  ) {}

  @Get()
  findAllTags() {
    return this.reportTemplatesService.findAllTags();
  }

  @Get('tags/:tag')
  findByTag(@Param('tag') tag: string) {
    return this.reportTemplatesService.findByTag(tag);
  }
}
