import { ReportTemplate } from '../report-templates/entities/report-template.entity';

export const reportTemplatesDatas: ReportTemplate[] = [
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
    Consultation de contrôle à J+8.`,
    tags: ['fracture', 'main', 'doigt'],
  },
  {
    id: 2,
    name: 'extenseur + lambeau',
    content: `COMPTE RENDU OPERATOIRE
    Le 
    
    M.
    Chirurgien: Dr.
    Anesthésiste: Dr.
    
    Diagnostic : Perte de substance cutanée. Section de l’extenseur de l’index
    Intervention Réparation de plaie de l'appareil extenseur d'un doigt avec suture de plaie d'une articulation, sur un rayon de la main. Réparation de perte de substance par lambeau local cutané à pédicule vasculaire anatomique.
    Codage: QZMA004, MJMA002
    
    Rappel Clinique: Plaie par disqueuse de l’index droit bord radial avec une perte de substance importante
    
    Intervention
    Anesthésie locorégionale, décubitus dorsal, table à bras
    Garrot à la racine du bras; 250 mmHg; 25 min
    Parage de la plaie
    L’exploration retrouve: 
    Une section longitudinale de l’appareil extenseur avec ouverture de la capsule articulaire IPP
    Pas d’atteinte de la face palmaire
    On réalise
    Lavage abondant de l’articulation avec un cathlon
    Suture de la capsule et de l’appareil extenseur au PDS 4/0
    Fermeture de la plaie
    La flexion de l’IPP n’est pas permise au delà de 15° dû à la perte de substance cutanée
    Réalisation d’un lambeau de couverture par un lambeau local cutané à pédicule vasculaire anatomique
    La zone de prise de lambeau est laissé en cicatrisation dirigée
    Fermeture sans tension par l’ethilon 5/0 permettant la flexion du doigt
    Pansement Adaptic
    
    Soins postopératoires :
    
    Mobilisation immédiate autorisée
    Antalgiques
    Antibioprophylaxie AUGMENTIN 1g x 3/j pendant 2 jours
    Pansement dans 2 jours puis tous les jours jusqu'à cicatrisation complète
    Ablation fils à J+12
    Arrêt de travail 6 semaines
    Consultation de contrôle à J+8.`,
    tags: ['main', 'extenseur', 'lambeau'],
  },
  {
    id: 3,
    name: 'extyenseur + artic',
    content: `COMPTE RENDU OPERATOIRE
    Le 
    
    M
    Chirurgien: Dr. 
    Anesthésiste: Dr. 
    
    Diagnostic : Section partielle de l’appareil extenseur avec plaie articulaire IPP 3eme doigt droit 
    Intervention : Réparation de plaie de l'appareil extenseur d'un doigt avec suture de plaie d'une articulation, sur un rayon de la main. Parage de plaie. 
    Ccam: MJMA002
    
    Rappel clinique:Patient de 20ans, droitier, non fumeur plaie par plaque de feraille il y a 4 jours, accident de travail, plaie face dorsale IPP D3 zone 3 
    
    Intervention:
    Anesthésie loco-régionale, décubitus dorsal, table à brasGarrot à la racine du membre 250 mmHg :  pendant 25 min
    Parage de la plaie, agrandissement
    A l’exploration:
    Section partielle totale de l’extenseur et plaie articulaire
    Pas de lésion cartilagineuse.  
    On réalise:
    Lavage de l’articulation au sérum physiologique à l’aide d’un cathlon
    Suture de l’articulation et de l’extenseur au PDS 4/0 
    Lavage, hémostase
    Fermeture ethilon 5/0. 
    Pansement Adaptic
    
    Soins postopératoires :
    Mobilisation immédiate autorisée et recommandée
    Antalgiques
    Antibioprophylaxie AUGMENTIN 1g x 3/j pendant 2 jours
    Pansement dans 2 jours puis tous les 2 jours jusqu'à cicatrisation complète
    Ablation fils à J+12
    Arrêt de travail 6 semaines
    Consultation de contrôle à J+7.`,
    tags: ['main', 'extenseur', 'articulation'],
  },
  {
    id: 4,
    name: 'flech NA incomplet',
    content: `COMPTE RENDU OPERATOIRE
    Le 
    
    Mme 
    Chirurgien: Dr. 
    Anesthésiste: Dr. 
    
    Diagnostic : Plaie par couteau à huitre main droite 
    Intervention Suture de plaies de tendon des muscles fléchisseurs des doigts, d’un nerf et d’une artère digitaux palmaires, sur un rayon de la main
    Codage: MJCA003
    
    Rappel Clinique: 
    Patient de 39 ans, gauchère, non fumeuse, ne travaille pas. Plaie par couteau à huitre main droite en regard du 5eme rayon, déficit du 4eme doigt
    
    Intervention
    Anesthésie locorégionale, décubitus dorsal, table à bras
    Garrot à la racine du bras; 250 mmHg; 35 min
    Parage de la plaie
    Agrandissement de la plaie
    L’exploration retrouve: 
    Tendons fléchisseurs du 5eme rayon intact
    Section partielle  du nerf 30% et de l’artère 20% collatérale radiale
    Section partielle du fléchisseurs profond du 4eme doigt, le flechisseur supérficiel est intact
    On réalise: 
    Suture du FDP au PDS 3.0
    Suture de l’artère à l’Ethilon 9.0 sous loupes grossissantes
    Suture du nerf à l’Ethilon 9.0 sous loupes grossissantes
    Lavage, hémostase
    Fermeture ethilon 5/0 points séparées sur la peau.
    Pansement Adaptic
    Immobilisation 
    
    Soins postopératoires :
    Immobilisation attelle DURAN en flexion poignet et MCP, relais par une attelle thermoformée
    Début kiné protocole DURAN
    Antalgiques
    Antibioprophylaxie AUGMENTIN 1g x 3/j pendant 2 jours
    Pansement dans 2 jours puis tous les 2 jours jusqu'à cicatrisation complète
    Ablation fils à J+12
    Arrêt de travail 8 semaines
    Consultation de contrôle à J+7.`,
    tags: ['main', 'flechisseurs', 'nerf', 'artère'],
  },
  {
    id: 5,
    name: 'panaris',
    content: `COMPTE RENDU OPERATOIRE
    Le 
    
    M. 
    Chirurgien: Dr. 
    Anesthésiste: Dr. 
    
    Diagnostic : Panaris 4eme doigt droit
    Intervention : Excision d’un panaris profond de la pulpe du doigt, excision partielle de tablette unguéale
    Codage: MJFA003, QZFA020
    
    Rappel Clinique: 24ans, droitier, non fumeur, consultant, panaris collecté évoluant depuis 30/12, pulsatile, collectée, mis sous AUGMENTIN il y a 2 jours
    
    Intervention
    Anesthésie locorégionale, décubitus dorsal, table à bras
    Garrot à la racine du bras; 250 mmHg; 15 min
    Excision des tissus pathologiques
    Issue de pus franc
    Prélèvement bactériologique
    Excision partielle de tablette unguéale
    Lavage au sérum physiologique
    Cicatrisation dirigée
    Pansement humide
    
    Soins postopératoires :
    
    Mobilisation immédiate autorisée et recommandée
    Antalgiques
    Pansement dans 1 jours puis tous les jours jusqu'à cicatrisation complète
    Pas d’arrêt de travail 
    Consultation de contrôle à J+7.`,
    tags: ['main', 'panaris', 'doigt'],
  },
  {
    id: 6,
    name: 'phlegmon-panaris',
    content: `COMPTE RENDU OPERATOIRE
    Le 
    
    Mme
    Chirurgien: Dr.
    Anesthésiste: Dr. 
    
    Diagnostic : Infection palmaire type phlegmon du majeur gauche
    Intervention: Évacuation d'un phlegmon de gaine synoviale digitale ou digitocarpienne, par abord direct. Excision de lésion infectieuse diffuse de la peau et des tissus mous sur moins de 50 cm²
    Codage: MJJA001, QZFA038
    
    Rappel Clinique: 
    60 ans, droitière, non fumeuse
    Début le 13/01, piqure pulpaire avec un composant éléctronique, au 4eme doigt droit
    Evolution vers une collection et une infection de la gaine
    
    Intervention
    Anesthésie locorégionale, décubitus dorsal, table à bras
    Garrot à la racine du bras; 250 mmHg; 30 min
    Parage des collections
    On retrouve une collection purulente : Prélèvement
    Incision en palmaire IPD et proximal au niveau poulie A1
    L’exploration retrouve:
    Liquide est clair
    Les paquets collatéraux sont intacts 
    Les tendons fléchisseurs sont intacts
    On réalise:
    Lavage de la gaine antérograde à l’aide d’un cathlon
    Pas de fermeture cutanée
    Cicatrisation dirigée
    Pansement
    
    Suites postopératoires :
    Mobilisation immédiate autorisée et recommandée
    Antalgiques,
    Antibioprophylaxie AUGMENTIN 1g x 3/j pendant 15 jours
    Pansement dans 2 jours puis tous les jours jusqu'à cicatrisation complète
    Accident de travail 3 semaines
    Consultation de contrôle à J+15.
    `,
    tags: ['main', 'plaie'],
  },
  {
    id: 7,
    name: 'poignet plaque',
    content: `COMPTE RENDU OPERATOIRE
    Le 
    
    Mme 
    Chirurgien: Dr. 
    Anesthésiste: Dr. 
    
    Diagnostic : Fracture extrémité inferieure radius GAUCHE
    Intervention: Désinsertion du brachio radialis, ostéosynthèse radius distal à foyer ouvert par une plaque MEDARTIS,
    Codage: PCPA003 + MCCA005 + YYYY012
    
    Rappel Clinique: 
    Patiente de 61 ans, droitière, chute par maladresse. Fracture en X du poignet GAUCHE
    
    Intervention
    Anesthésie locorégionale, décubitus dorsal, table à bras
    Garrot à la racine du bras; 250 mmHg; 33 min
    Voie d’abord de Henry. 
    Abord de la fracture
    La réduction est laborieuse et difficile, elle nécessite une désinsertion du brachio radialis pour permettre la réduction
    Mise en place de la plaque Medartis avec une vis corticale pour permettre l’ostéosynthèse du radius distal
    L’os est porotique
    Contrôle scopique satisfaisant
    Mise en place de 5 vis verrouillées en épiphysaire et une vis supplémentaire en proximal.
    Mise en place de 2 vis cortical en proximal compte tenu de la qualité osseuse
    Le contrôle scopique est satisfaisant sur la face et le profil
    Fermeture Monocryl 4/0
    Immobilisation dans une attelle antérieure
    
    Soins postopératoires :
    Mobilisation des doigts immédiate autorisée
    Immobilisation attelle 4 semaines
    Antalgiques
    Pansement tous les 2 jours jusqu'à cicatrisation complète
    Ablation des extrémités du surjet à J+12
    Cs de contrôle à J+21 + radiographie.`,
    tags: ['poignet', 'plaque'],
  },
];
