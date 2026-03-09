export interface ScreenInfo {
  screenWidth: number;
  screenHeight: number;
  viewportWidth: number;
  viewportHeight: number;
  dpr: number;
  colorDepth: number;
}

export interface ResolutionData {
  slug: string;
  name: string;
  width: number;
  height: number;
  commonName: string;
  aspectRatio: string;
  totalPixels: string;
  ppi?: string;
  category: string;
  description: string;
  devices: string[];
  useCases: string[];
  faqs: FAQ[];
  related: string[];
}

export interface ComparisonData {
  slug: string;
  title: string;
  description: string;
  resA: {
    name: string;
    width: number;
    height: number;
    commonName: string;
  };
  resB: {
    name: string;
    width: number;
    height: number;
    commonName: string;
  };
  winners: {
    gaming: string;
    productivity: string;
    value: string;
    contentCreation: string;
  };
  content: string;
  faqs: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface MetricCardData {
  label: string;
  value: string;
  sublabel?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  content: string;
}
