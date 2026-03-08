import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaJava,
    FaPython,
    FaDocker,
    FaAws,
    FaGitAlt,
    FaLinux,
} from 'react-icons/fa';
import {
    SiTypescript,
    SiJavascript,
    SiCplusplus,
    SiDart,
    SiSpringboot,
    SiFastapi,
    SiFlutter,
    SiPostgresql,
    SiReact,
} from 'react-icons/si';
import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
    name: 'Nafisa Tabassum',
    title: 'Full Stack Software Engineer',
    location: 'London, UK',
    summary:
        'Full-stack software engineer passionate about solving complex problems and building scalable production systems across mobile, web, and backend.',
    about: [
        "I'm a full-stack software engineer with a passion for building scalable, production-ready systems that solve real-world problems. Currently based in London with full UK work authorization, I bring experience across mobile, web, and backend development.",
        "At Celloscope, I've contributed to multiple production platforms, including a health platform showcased at CES and an AI-driven interview screening system. I led frontend development across Android, iOS, and web, built 85% of reusable UI components, and contributed to ~39% of backend services using microservices architecture.",
        "I'm particularly proud of being selected as a Generation Google Scholar — the only Bangladeshi woman among 15,000+ applicants across Asia-Pacific. I've also competed internationally, earning 1st and 2nd place finishes at DravidianLangTech@EACL 2024.",
        'Beyond building features, I care deeply about engineering excellence: implementing CI/CD pipelines that reduced deployment time by 70%, improving code maintainability to cut development time by 19%, and integrating AWS services that send 1000+ daily notifications reliably.',
    ],
    email: 'tnafisa18@gmail.com',
    resumeUrl: '/resume.pdf',
    socials: [
        {
            name: 'GitHub',
            url: 'https://github.com/Mussabat',
            icon: FaGithub,
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/nafisa-tabassum-67426621b',
            icon: FaLinkedin,
        },
        {
            name: 'Email',
            url: 'mailto:tnafisa18@gmail.com',
            icon: FaEnvelope,
        },
    ],
    skills: [
        {
            category: 'Languages',
            skills: [
                { name: 'Java', icon: FaJava },
                { name: 'Python', icon: FaPython },
                { name: 'TypeScript', icon: SiTypescript },
                { name: 'JavaScript', icon: SiJavascript },
                { name: 'Dart', icon: SiDart },
                { name: 'C++', icon: SiCplusplus },
            ],
        },
        {
            category: 'Backend',
            skills: [
                { name: 'Spring Boot', icon: SiSpringboot },
                { name: 'FastAPI', icon: SiFastapi },
                { name: 'Microservices' },
                { name: 'REST APIs' },
            ],
        },
        {
            category: 'Frontend & Mobile',
            skills: [
                { name: 'Flutter', icon: SiFlutter },
                { name: 'React', icon: SiReact },
                { name: 'State Management' },
                { name: 'API Integration' },
            ],
        },
        {
            category: 'DevOps & Cloud',
            skills: [
                { name: 'Docker', icon: FaDocker },
                { name: 'AWS', icon: FaAws },
                { name: 'CI/CD' },
                { name: 'Linux', icon: FaLinux },
            ],
        },
        {
            category: 'Database & Tools',
            skills: [
                { name: 'PostgreSQL', icon: SiPostgresql },
                { name: 'Git', icon: FaGitAlt },
                { name: 'Agile' },
            ],
        },
    ],
    experiences: [
        {
            title: 'Junior Software Engineer',
            company: 'Celloscope',
            location: 'Remote',
            period: 'July 2024 – January 2026',
            responsibilities: [
                'Built production mobile and web platforms including a health platform showcased at CES',
                'Developed an AI-driven interview screening system using microservices architecture',
                'Led frontend development across Android, iOS, and web platforms',
                'Built reusable UI architecture accounting for 85% of all UI components',
                'Implemented scalable state management solutions across mobile applications',
                'Built and maintained backend REST APIs using Spring Boot and FastAPI',
                'Contributed to ~39% of backend services in the microservices ecosystem',
                'Implemented CI/CD pipelines, reducing deployment time by 70%',
                'Integrated AWS services (Amazon SES) sending 1000+ notifications daily',
                'Managed staging and production deployments ensuring 99.9% uptime',
                'Collaborated cross-functionally with product, design, QA, and DevOps teams',
                'Improved codebase maintainability, reducing development time by 19%',
            ],
        },
    ],
    projects: [
        {
            title: 'StudyMatch',
            description:
                'A mobile application connecting students with study partners based on shared interests and academic goals. Features real-time matching, chat functionality, and study group coordination.',
            techStack: ['Flutter', 'GoRouter', 'BLoC', 'Supabase', 'PostgreSQL'],
            githubUrl: 'https://github.com/Mussabat',
        },
        {
            title: 'Wisely',
            description:
                'Ethical investment discovery mobile application helping users find and track socially responsible investment opportunities. Provides detailed company ESG ratings and personalized recommendations.',
            techStack: ['Flutter', 'State Management', 'REST APIs'],
            githubUrl: 'https://github.com/Mussabat',
        },
        {
            title: 'Twitter Clone API',
            description:
                'Backend REST API replicating core Twitter features including tweets, follows, likes, and timeline generation. Built with modern async patterns and comprehensive test coverage.',
            techStack: ['Python', 'FastAPI', 'PostgreSQL', 'JWT', 'Docker'],
            githubUrl: 'https://github.com/Mussabat',
        },
    ],
    achievements: [
        {
            title: '1st Place – DravidianLangTech@EACL 2024 Shared Task 5',
            description:
                'Won first place in international NLP competition focusing on Dravidian language processing',
            year: '2024',
        },
        {
            title: '2nd Place – DravidianLangTech@EACL 2024 Shared Task 1',
            description:
                'Secured second place in sentiment analysis task for under-resourced languages',
            year: '2024',
        },
        {
            title: 'Generation Google Scholarship',
            description:
                'Selected as one of 55 scholars from over 15,000+ applicants across Asia-Pacific region. Only Bangladeshi woman selected.',
            year: '2023',
        },
        {
            title: 'Grace Hopper Celebration Scholarship',
            description:
                "Awarded scholarship to attend the world's largest gathering of women technologists",
            year: '2023',
        },
        {
            title: 'Google Code Jam I/O for Women – Rank 381 / 1812',
            description:
                'Competed in prestigious global programming competition, placing in top 25%',
            year: '2022',
        },
    ],
};
