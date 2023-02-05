import { Module } from '@nestjs/common';
import { ReportTemplatesController } from './report-templates.controller';
import { TagsController } from '../tags/tags.controller';
import { ReportTemplatesService } from './report-templates.service';

@Module({
  controllers: [ReportTemplatesController, TagsController],
  providers: [ReportTemplatesService],
})
export class ReportTemplatesModule {}
