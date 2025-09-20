import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import CertificatesSection from './components/CertificatesSection';
import AchievementsSection from './components/AchievementsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [darkMode, setDarkMode] = useState(false); // Always start in light mode

  useEffect(() => {
    // Check if user saved a preference in localStorage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    // Apply dark/light mode classes
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save user preference
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 text-dark-900 dark:text-white transition-colors duration-300">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificatesSection />
        <AchievementsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6">
        <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
}

export default App;
