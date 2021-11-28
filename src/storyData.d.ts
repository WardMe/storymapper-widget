export type StoryData = {
    title : string;
    date?: string;
    description?: string;
    link?: string;
    tags?: string[];
    userImpact: string | number;
    userValue: string | number;
    usability: string | number;
    ethicality: string | number;
    feasability: string | number;
    viability: string | number;
    score: string | number;
  }