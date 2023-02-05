import { Module } from '@nestjs/common';
import { ReportTemplatesController } from './report-templates.controller';
import { TagsController } from '../tags/tags.controller';
import { ReportTemplatesService } from './report-templates.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ReportTemplatesController, TagsController],
  providers: [ReportTemplatesService],
})
export class ReportTemplatesModule {}
