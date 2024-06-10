export interface Skill {
  title: string;
  icon: string;
}

export interface Urls {
  [key: string]: string;
}

export interface Proyect {
  id: number;
  title: string;
  content?: string;
  description: string;
  skills?: Skill[];
  thumbnail?: string;
  urls?: Urls;
  date_release?: string;
}