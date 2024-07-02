import { client } from "../sanity/lib/client"
import { Experience, PageInfo, Project, Skill, Social } from "./types";
const allDataQuery = `{
    "experiences": *[_type == "experience"] {
      ...,
      technologies[]->
    },
    "pageInfo": *[_type == "pageInfo"][0] {
      ...,
      socials[]->
    },
    "projects": *[_type == "project"] {
      ...,
      technologies[]->
    },
    "skills": *[_type == "skill"],
    "socials": *[_type == "social"]
  }`;
  
  // Create a single function to fetch all data
  export async function fetchAllData() {
    const data = await client.fetch(allDataQuery);
    return data;
  }
  
  // Individual data access functions
  export function getExperiences(data: any): Experience[] {
    return data.experiences;
  }
  
  export function getPageInfo(data: any): PageInfo {
    return data.pageInfo;
  }
  
  export function getProjects(data: any): Project[] {
    return data.projects;
  }
  
  export function getSkills(data: any): Skill[] {
    return data.skills;
  }
  
  export function getSocials(data: any): Social[] {
    return data.socials;
  }