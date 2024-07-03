// types.ts

// import { Image, Slug } from 'sanity';

export interface Experience {
  _id: string;
  _type: "experience";
  jobTitle: string;
  companyImage: Image;
  company: string;
  dateStarted: string; // ISO date string
  dateEnded: string | null; // ISO date string
  isCurrentlyWorkingHere: boolean;
  technologies: Skill[];
  points: string[];
}

export interface PageInfo {
  _id: string;
  _type: "pageInfo";
  name: string;
  role: string;
  heroImage: SanityImage;
  backgroundInformation: string;
  profilePic: Image;
  phoneNumber: string;
  email: string;
  address: string;
  socials: Social[];
}

export interface Project {
  _id: string;
  _type: "project";
  title: string;
  image: Image;
  summary: string;
  technologies: Skill[];
  linkToBuild: string;
}

export interface Skill {
  _id: string;
  _type: "skill";
  title: string;
  progress: number;
  image: Image;
}

export interface Social {
  _id: string;
  _type: "social";
  title: string;
  url: string;
}

// Sanity specific types
export interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Slug {
  _type: "slug";
  current: string;
}

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}