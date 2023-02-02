import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportTemplatesModule } from './report-templates/report-templates.module';

@Module({
  imports: [ReportTemplatesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
