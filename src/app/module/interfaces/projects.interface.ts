import { LinksInterface } from "./links.interface";

export interface ProjectsInterface {
  id: string;
  title: string;
  desc: string;
  link: LinksInterface;
  image: string;
  type: string;
  tecnologies: string[];
}
