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
import { FiServer, FiGlobe, FiLayers, FiRefreshCw, FiTrendingUp } from 'react-icons/fi';
import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
    name: 'Nafisa Tabassum',
    title: 'Full Stack Software Engineer',
    location: 'London, UK',
    summary:
        'Full-stack software engineer passionate about solving complex problems and building scalable production systems across mobile, web, and backend.',
    about: [
        "I'm a full-stack software engineer with a passion for building scalable, production-ready systems that solve real-world problems. Currently based in London with full UK work authorisation, I bring experience across mobile, web, and backend development.",
        "At Celloscope, I've contributed to multiple production platforms, including a health platform showcased at CES and an AI-driven interview screening system. I led frontend development across Android, iOS, and web, built 85% of reusable UI components, and contributed to ~39% of backend services using microservices architecture.",
        "I'm particularly proud of being selected as a Generation Google Scholar the only Bangladeshi woman among 15,000+ applicants across Asia-Pacific. I've also competed internationally, earning 1st and 2nd place finishes at DravidianLangTech@EACL 2024.",
        'Beyond building features, I care deeply about engineering excellence: implementing CI/CD pipelines that reduced deployment time by 70%, improving code maintainability to cut development time by 19%, and integrating AWS services that send 1000+ daily notifications reliably.',
    ],
    email: 'tnafisa18@gmail.com',
    resumeUrl: 'https://drive.google.com/file/d/1V_Gdhcf5evR0ooWCRPCx-X0POENJRuJN/view',
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
                { name: 'Microservices', icon: FiServer },
                { name: 'REST APIs', icon: FiGlobe },
            ],
        },
        {
            category: 'Frontend & Mobile',
            skills: [
                { name: 'Flutter', icon: SiFlutter },
                { name: 'React', icon: SiReact },
                { name: 'State Management', icon: FiLayers },
                { name: 'API Integration', icon: FiRefreshCw },
            ],
        },
        {
            category: 'DevOps & Cloud',
            skills: [
                { name: 'Docker', icon: FaDocker },
                { name: 'AWS', icon: FaAws },
                { name: 'CI/CD', icon: FiRefreshCw },
                { name: 'Linux', icon: FaLinux },
            ],
        },
        {
            category: 'Database & Tools',
            skills: [
                { name: 'PostgreSQL', icon: SiPostgresql },
                { name: 'Git', icon: FaGitAlt },
                { name: 'Agile', icon: FiTrendingUp },
            ],
        },
    ],
    experiences: [
        {
            title: 'Junior Software Engineer',
            company: 'Celloscope',
            location: 'Hybrid',
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
            title: 'Kellafotey',
            description:
                'Production-grade AI-driven interview screening platform built with microservices architecture. Designed database schema, implemented CI/CD pipelines, and developed core APIs supporting automated candidate evaluation and workflow management.',
            techStack: ['Spring Boot', 'PostgreSQL', 'Microservices', 'AWS SES', 'CI/CD', 'Keycloak'],
            liveUrl: 'https://kellafotey.celloscope.net/',
            category: 'Full Stack',
        },
        {
            title: 'Primefocus Health',
            description:
                'Mobile health platform (iOS & Android) showcased at CES, launched within 7 months. Led development of core screens, implemented push notifications, and optimised performance for production release at a major tech event.',
            techStack: ['Flutter', 'Push Notifications', 'REST APIs', 'State Management'],
            liveUrl: 'https://apps.apple.com/us/app/primefocus-health/id6748019074',
            category: 'Mobile',
        },
        {
            title: 'StudyMatch',
            description:
                'A mobile application connecting students with study partners based on shared interests and academic goals. Features real-time matching, chat functionality, and study group coordination.',
            techStack: ['Flutter', 'GoRouter', 'BLoC', 'Supabase', 'PostgreSQL'],
            githubUrl: 'https://github.com/Mussabat/study_match',
            category: 'Mobile',
        },
        {
            title: 'Wisely',
            description:
                'Ethical investment discovery mobile application helping users find and track socially responsible investment opportunities. Provides detailed company ESG ratings and personalized recommendations.',
            techStack: ['Flutter', 'State Management', 'REST APIs'],
            githubUrl: 'https://github.com/Mussabat/Wisely',
            category: 'Mobile',
        },
        {
            title: 'Twitter Clone API',
            description:
                'Backend REST API replicating core Twitter features including tweets, follows, likes, and timeline generation. Built with modern async patterns and comprehensive test coverage.',
            techStack: ['Python', 'FastAPI', 'PostgreSQL', 'JWT', 'Docker'],
            githubUrl: 'https://github.com/Mussabat/twitter-clone-api',
            category: 'Backend',
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
        {
            title: '12th Position – BdOSN CodeRace',
            description:
                'International Girls In ICT Day Celebration Contest organised by Bangladesh Open Source Network',
            year: '2022',
        },
        {
            title: "11th at National Girls' Programming Contest (NGPC)",
            description:
                'Team "CUET_Excalibur" competed in NGPC organised by Daffodil International University',
            year: '2021',
        },
        {
            title: "4th at Ada Lovelace National Girls' Programming Contest",
            description:
                'Team "CUET_Excalibur" placed 4th in the preliminary round organised by Bangladesh Open Source Network',
            year: '2021',
        },
        {
            title: 'Board Scholarship Awardee (Ranked 46th)',
            description:
                'Awarded scholarship in "Talent Pool" category by Board of Intermediate & Secondary Education, Dhaka for outstanding SSC examination results at Viqarunnisa Noon School and College',
            year: '2016',
        },
        {
            title: 'Shera Pathok (1st Prize)',
            description:
                'Awarded 1st prize in a national reading programme by Bishwo Shahitto Kendro. Selected from 25 lakh students across 14,000 educational institutions through evaluation test',
            year: '2015',
        },
    ],
    volunteering: [
        {
            role: 'Campus Ambassador',
            organization: 'National Girls Programming Contest (NGPC 2019)',
            period: 'Aug 2019 - Oct 2019',
            description: 'NGPC is a programming contest for the girls of high school and university students. Promoted the event and encouraged participation from female students.',
        },
        {
            role: 'Volunteer',
            organization: 'Bangladesh Open Source Network (BdOSN)',
            period: 'Dec 2021 - Feb 2022',
            description: 'Bangladesh Open Source Network (BdOSN) is a non-profit, voluntary organisation dedicated to promoting open source technologies and community engagement.',
        },
        {
            role: 'Open Source Contributor',
            organization: 'Hacktoberfest',
            period: 'Oct 2022',
            description: 'Contributed to open source projects during Hacktoberfest, focusing on Science and Technology initiatives and community-driven development.',
        },
    ],
    publications: [
        {
            title: 'Sandalphon@DravidianLangTech-EACL2024: Hate and offensive language detection in Telugu code-mixed text using transliteration-augmentation',
            authors: 'Nafisa Tabassum, Mosabbir Khan, Shawly Ahsan, Jawad Hossain, Mohammed Moshiul Hoque',
            journal: 'Proceedings of the Fourth Workshop on Speech, Vision, and Language Technologies for Dravidian Languages',
            year: '2024',
            citations: 5,
            url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-bwzjRwAAAAJ&citation_for_view=-bwzjRwAAAAJ:u-x6o8ySG0sC',
            pdfUrl: 'https://aclanthology.org/2024.dravidianlangtech-1.28.pdf',
            abstract: 'Hate and offensive language in online platforms pose significant challenges, necessitating automatic detection methods. This study investigates the effectiveness of transliteration-augmented datasets for Telugu code-mixed text. Experimental findings demonstrate the superiority of transformer models, particularly Telugu-BERT, achieving the highest f1-score of 0.77 on the augmented dataset, ranking 1st position in the leaderboard.',
        },
        {
            title: 'Punny_punctuators@DravidianLangTech-EACL2024: Transformer-based approach for detection and classification of fake news in Malayalam social media text',
            authors: 'Nafisa Tabassum, Sumaiya Aodhora, Rowshon Akter, Jawad Hossain, Shawly Ahsan, Mohammed Moshiul Hoque',
            journal: 'Proceedings of the Fourth Workshop on Speech, Vision, and Language Technologies for Dravidian Languages',
            year: '2024',
            citations: 10,
            url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-bwzjRwAAAAJ&citation_for_view=-bwzjRwAAAAJ:9yKSN-GCB0IC',
            pdfUrl: 'https://aclanthology.org/2024.dravidianlangtech-1.30.pdf',
            abstract: 'The alarming rise of fake news on social media poses a significant threat to public discourse and decision-making. This paper presents the participation of team Punny_Punctuators in the Fake News Detection in Dravidian Languages shared task at DravidianLangTech@EACL 2024. Malayalam-BERT achieved the best performance on both sub-tasks, which obtained us 2nd place with a macro f1-score of 0.87 for subtask-1 and 11th place with a macro f1-score of 0.17 for subtask-2.',
        },
        {
            title: 'Classifying textual sentiment using bidirectional encoder representations from transformers',
            authors: 'Shawly Ahsan, Fairooz Tasnia, Nafisa Tabassum, Avishek Das, Mohammed Moshiul Hoque, Nazmul Siddique',
            journal: '2023 26th International Conference on Computer and Information Technology (ICCIT)',
            year: '2023',
            citations: 3,
            url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-bwzjRwAAAAJ&citation_for_view=-bwzjRwAAAAJ:u5HHmVD_uO8C',
            pdfUrl: 'https://ieeexplore.ieee.org/abstract/document/10441046/',
            abstract: 'Textual sentiment analysis (TSA) has gained significant attention recently for its wide-ranging applications across various research domains and industries. This paper introduces an intelligent approach, leveraging transformer-based learning techniques by harnessing the potent capabilities of self-attention mechanisms for dealing with Bengali sentences containing ungrammatical structures or local dialects. Experimental results reveal that the Bangla BERT model outperforms the other baselines.',
        },
    ],
};
