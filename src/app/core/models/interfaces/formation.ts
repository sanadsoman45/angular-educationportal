export default interface Formation {
  id: number;
  titre: string;
  description: string;
  chargeHoraire: number;
  niveau: string;
  programme: string;
  tags: string[];
  categories: string[];
}
