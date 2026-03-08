import { IconType } from 'react-icons';

export interface Social {
    name: string;
    url: string;
    icon: IconType;
}

export interface Skill {
    name: string;
    icon?: IconType;
}

export interface SkillCategory {
    category: string;
    skills: Skill[];
}

export interface Experience {
    title: string;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
}

export interface Project {
    title: string;
    description: string;
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
    imageUrl?: string;
    category?: string;
}

export interface Achievement {
    title: string;
    description: string;
    year?: string;
}

export interface Volunteer {
    role: string;
    organization: string;
    period: string;
    description: string;
}

export interface Publication {
    title: string;
    authors: string;
    journal: string;
    year: string;
    citations: number;
    url: string;
    pdfUrl?: string;
    abstract: string;
}

export interface PortfolioData {
    name: string;
    title: string;
    location: string;
    summary: string;
    about: string[];
    socials: Social[];
    email: string;
    resumeUrl: string;
    skills: SkillCategory[];
    experiences: Experience[];
    projects: Project[];
    achievements: Achievement[];
    volunteering: Volunteer[];
    publications: Publication[];
}
