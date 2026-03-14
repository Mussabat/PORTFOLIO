import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Publications } from './components/Publications';
import { Volunteering } from './components/Volunteering';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';
import { portfolioData } from './data/portfolio';

function App() {
    const [loading, setLoading] = useState(true);

    if (loading) {
        return <LoadingScreen onLoadComplete={() => setLoading(false)} />;
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>{`${portfolioData.name} | ${portfolioData.title}`}</title>
                <meta name="description" content={portfolioData.summary} />
                <meta
                    name="keywords"
                    content="Full Stack Developer, Software Engineer, React, TypeScript, Java, Python, Flutter, AWS, Docker, London"
                />
                <meta name="author" content={portfolioData.name} />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={`${portfolioData.name} | ${portfolioData.title}`}
                />
                <meta property="og:description" content={portfolioData.summary} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content={`${portfolioData.name} | ${portfolioData.title}`}
                />
                <meta name="twitter:description" content={portfolioData.summary} />

                {/* Additional SEO */}
                <link rel="canonical" href="https://nafisatabassum.dev" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#0ea5e9" />
            </Helmet>

            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Achievements />
                    <Publications />
                    <Volunteering />
                    <Testimonials />
                    <Blog />
                </main>
                <Footer />
            </div>
        </HelmetProvider>
    );
}

export default App;
