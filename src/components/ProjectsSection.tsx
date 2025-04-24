import React from 'react';
import SectionHeading from './SectionHeading';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  timeline: string;
  contributions: string[];
  techStack: string[];
  githubLink: string;
  image?: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
        title: 'University Management System',
        timeline: 'Nov 2024 - Nov 2024',
        contributions: [
          'Developed a full-featured university management system using Java and Swing for the desktop UI',
          'Integrated MySQL database with JDBC for smooth data handling and persistence',
          'Implemented role-based access control for admins, faculty, and students',
          'Added email functionality via SMTP server for password recovery and notifications',
          'Designed a scalable, normalized relational database schema for university operations'
        ],
      
        techStack: ['Java', 'Swing', 'JDBC', 'MySQL', 'SMTP'],
        githubLink: 'https://github.com/ayushdhardwivedi55/University-Management-System',
        image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },      
      {
        title: 'Prodigy InfoTech Internship',
        timeline: 'Jan 2025 – Feb 2025',
        contributions: [
          'Completed multiple Java-based tasks as part of the Prodigy InfoTech internship program',
          'Developed a simulated e-commerce checkout system using object-oriented programming in Java',
          'Created a basic login authentication system using Swing for GUI and Java logic for validation',
          'Implemented a compatibility testing module to ensure software consistency across different environments',
          'Enhanced understanding of Java fundamentals through hands-on projects and real-world scenarios'
        ],
      
        techStack: ['Java', 'TestNG', 'Selenium'],
        githubLink: 'https://github.com/ayushdhardwivedi55/ProdigyInternship',
        image: 'https://miro.medium.com/v2/resize:fit:1400/1*MF-5KU1BdjYxcY6837JMHA.jpeg'
      }
,      
{
  title: 'LambdaTest Selenium Automation Project',
  timeline: 'Jan 2025 – Feb 2025',
  contributions: [
    'Developed a Selenium-based test automation framework using Java, TestNG, and WebDriverManager',
    'Automated cross-browser testing on LambdaTest\'s cloud Selenium grid to improve test coverage and reliability',
    'Used Maven for dependency management and streamlined build processes',
    'Integrated LambdaTest with GitHub for efficient bug reporting and tracking during test runs'
  ],

  techStack: ['Java', 'Selenium WebDriver', 'TestNG', 'WebDriverManager', 'Maven', 'LambdaTest', 'GitHub'],
  githubLink: 'https://github.com/ayushdhardwivedi55/LambdaTest01',
  image: 'https://media.licdn.com/dms/image/v2/D4E12AQE5tKNledWwCw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1726662465210?e=2147483647&v=beta&t=D18tUblJ4o10fzjvsxYaOmS2_igUY-FXObraw19ZesQ'
}
,
{
  title: 'EazyDeals Price Tracking Application',
  timeline: 'Mar 2025 – Apr 2025',
  contributions: [
    'Developed a price tracking application using Next.js, enabling users to monitor product prices across various e-commerce platforms',
    'Implemented dynamic product search functionality with real-time price updates',
    'Designed a responsive user interface using Tailwind CSS for seamless user experience across devices',
    'Deployed the application on Vercel for fast and reliable hosting'
  ],
  techStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
  githubLink: 'https://github.com/ayushdhardwivedi55/eazydeals',
  //liveDemo: 'https://eazydealz-ayushdhardwivedi55s-projects.vercel.app/',
  image: '/Screenshot 2025-04-25 020641.png'
}

  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-white dark:bg-dark-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="My Projects" 
          subtitle="A selection of my recent software development and testing projects."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-dark-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {project.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6 flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-dark-900 dark:text-white2">{project.title}</h3>
                </div>
                <p className="text-sm text-primary-500 dark:text-primary-400 mb-4">{project.timeline}</p>
                
                <h4 className="font-medium text-dark-800 dark:text-gray-200 mb-2">Key Contributions:</h4>
                <ul className="list-disc list-inside mb-4 text-dark-700 dark:text-gray-300 text-sm space-y-1">
                  {project.contributions.map((contribution, i) => (
                    <li key={i}>{contribution}</li>
                  ))}
                </ul>
                
                <h4 className="font-medium text-dark-800 dark:text-gray-200 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-200 dark:bg-dark-700 text-dark-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-4 border-t border-gray-200 dark:border-dark-700 bg-gray-100 dark:bg-dark-850">
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-dark-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors py-2"
                >
                  <Github size={18} />
                  <span>View on GitHub</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;