import { Module } from '@nestjs/common';
import { ReportTemplatesController } from './report-templates.controller';
import { ReportTemplatesService } from './report-templates.service';

@Module({
  controllers: [ReportTemplatesController],
  providers: [ReportTemplatesService],
})
export class ReportTemplatesModule {}
