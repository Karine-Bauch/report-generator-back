import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ReportTemplate } from './entities/report-template.entity';

@Injectable()
export class ReportTemplatesService {
  private reportTemplates: ReportTemplate[] = [
    {
      id: 1,
      name: 'brochage en croix',
      content: `COMPTE RENDU OPERATOIRE
      Le 
      
      M
      Chirurgien: Dr. 
      Anesthésiste: Dr.
      
      Diagnostic : Fracture base 1er phalange du 3eme doigt gauche
      Intervention : Ostéosynthèse de fracture articulaire d’un os de la main, sous contrôle scopique à foyer ouvert.
      Ccam: MDCA014, YYYY012
      
      Rappel Clinique: 
      Patient de 34 ans, droitier, fumeur, fait occasionnellement des remplacements de gardiennage, agression en sorti de restaurant le 30/08/2020, fracture comminutive et complexe de P1 G3
      
      Intervention
      Anesthésie locorégionale, décubitus dorsal, table à bras
      Garrot à la racine du bras; 250 mmHg; 40 min
      Réduction première de la fracture: traction de l’axe
      Incision en regard du bord ulnaire de P1
      Mise en place d’un davier de Muller
      Réduction laborieuse car fracture très comminutive
      Ostéosynthèse de la fracture par un brochage perpendiculaire au trait de fracture 2 broches de 12/10e.
      Mise en place d’une broche 10/10e sur le bord ulnaire de la base de P1
      Contrôles scopiques satisfaisants
      Lavage, hémostase.
      Pansement sec, attelle intrinsèque plus de Thomine
      
      Suites postopératoires :
      Immobilisation dans une attelle relais pas une attelle thermoformée
      Mobilisation digitale non autorisée
      Antalgiques, antibioprophylaxie AUGMENTIN 48h
      Pansement dans 2 jours puis tous les 2 jours jusqu'à cicatrisation complète
      Ablation fils à J+12
      Arrêt de travail 6 semaines
      Consultation de contrôle à J+8.
      `,
    },
  ];

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

  create(createReportTemplateDto: any) {
    this.reportTemplates.push(createReportTemplateDto);
  }

  update(id: string, updateReportTemplateDto: any) {
    const existingReportTemplate = this.findOne(id);
    if (existingReportTemplate) {
      // update the existing entity
    } else {
      throw new NotFoundException(`ReportTemplate #${id} not found`);
    }
    return existingReportTemplate;
  }

  remove(id: string) {
    const reportTemplateIndex = this.reportTemplates.findIndex(
      (reportTemplate) => reportTemplate.id === +id,
    );
    if (reportTemplateIndex >= 0) {
      this.reportTemplates.splice(reportTemplateIndex, 1);
    }
  }
}
