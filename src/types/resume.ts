export interface PersonalInfo {
  name: string;
  designation?: string;
  phone?: string;
  location: string;
  email?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface Education {
  title: string;
  year: string;
}

export interface SkillGroup {
  heading: string;
  skills: string[];
}

export interface ProjectEntry {
  name: string;
  description: string;
  stats?: string;
  features: string[];
  githubLink?: string;
  websiteLink?: string;
}

export interface ExperienceEntry {
  userRole: string;
  company: string;
  location: string;
  from: string;
  to: string;
  achievements: string[];
}

export interface ResumeData {
  slug: string;
  personalInfo: PersonalInfo;
  profile: string;
  projectsHeading?: string;
  education: Education[];
  skills: SkillGroup[];
  projects: ProjectEntry[];
  experience: ExperienceEntry[];
}
