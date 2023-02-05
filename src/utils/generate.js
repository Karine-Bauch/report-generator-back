export const generate = (template, surgeryDatas) => {
  return ` ${template}
  Réécris ce compte-rendu opératoire pour ${surgeryDatas} en respectant exactement le contenu et la mise en page en commençant par COMPTE RENDU OPÉRATOIRE.`;
};
