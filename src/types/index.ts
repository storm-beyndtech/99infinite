export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  publishedAt: string;
  isPublished: boolean;
  views: number;
  createdAt: string;
  updatedAt: string;
}

export interface TeamMember {
  _id: string;
  name: string;
  position: string;
  department: string;
  email?: string;
  phone?: string;
  bio: string;
  image?: string;
  linkedIn?: string;
  twitter?: string;
  expertise: string[];
  yearsExperience: number;
  isActive: boolean;
  order: number;
}

export interface Financing {
  _id: string;
  title: string;
  slug: string;
  description: string;
  amount: string;
  type: string;
  property: {
    type: string;
    location: string;
    units?: number;
    squareFootage?: number;
  };
  terms: {
    rate?: string;
    term?: string;
    ltv?: string;
    leverage?: string;
  };
  status: string;
  completedDate: string;
  featured: boolean;
  images: string[];
  tags: string[];
}

export interface Podcast {
  _id: string;
  title: string;
  slug: string;
  description: string;
  episodeNumber: number;
  guest?: {
    name: string;
    title: string;
    company: string;
    bio: string;
  };
  audioUrl: string;
  duration: string;
  transcript?: string;
  publishedAt: string;
  isPublished: boolean;
  featuredImage?: string;
  tags: string[];
  listens: number;
}

export interface MarketRate {
  _id: string;
  rateName: string;
  displayName: string;
  currentRate: number;
  previousRate?: number;
  change?: number;
  changePercent?: number;
  lastUpdated: string;
  source: string;
  description?: string;
  category: string;
  order: number;
  isActive: boolean;
  historicalData: Array<{
    date: string;
    rate: number;
  }>;
}

export interface User {
  _id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}