import React from 'react';
import SectionHeading from './SectionHeading';
import { ExternalLink, FileText } from 'lucide-react';

interface Project {
  title: string;
  timeline: string;
  contributions: string[];
  techStack: string[];
  pdfLink: string;
  image?: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
     {
    title: 'LBO (Leveraged Buyout) Financial Model',
    timeline: 'Jan 2025 - Feb 2025',
    contributions: [
      'Built a comprehensive LBO model to analyze acquisition feasibility using debt and equity financing',
      'Performed target company valuation using EBITDA multiples and DCF methodology',
      'Created 5-year cash flow projections incorporating revenue growth, margins, and capital expenditure',
      'Modeled debt repayment schedules, leverage ratios, and interest coverage to assess financial sustainability',
      'Calculated equity investor returns (IRR & MOIC) under base, upside, and downside scenarios',
      'Conducted sensitivity analysis on revenue growth, exit multiples, and cost of capital to evaluate deal risks'
    ],
    techStack: ['Excel', 'Financial Modeling', 'Valuation', 'DCF', 'Scenario Analysis'],
    pdfLink: '/My LBO.pdf', // <-- stored in public folder
    image: 'https://images.pexels.com/photos/6802046/pexels-photo-6802046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
  title: 'Currency Exhibition – Global Money Week',
  timeline: 'Sep 2024',
  contributions: [
    'Organized and led a campus-wide exhibition showcasing currencies from around the world to promote financial literacy',
    'Researched historical and modern currency features, including security elements and denominations',
    'Prepared informative presentations and visual displays for students, faculty, and department heads',
    'Collaborated with faculty and staff to ensure smooth event execution and engagement',
    'Collected participant feedback to measure knowledge improvement and event effectiveness',
    'Developed educational insights on currency history, global trade, and financial awareness'
  ],
  techStack: ['Event Management', 'MS PowerPoint', 'Research', 'Financial Literacy Tools'],
  pdfLink: '/Currency.pdf', // Place your PDF in public folder
  image: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Example image
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
                href={project.pdfLink}
                download
                className="flex items-center justify-center gap-2 text-dark-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors py-2"
              >
                <FileText size={18} />
                <span>Download PDF</span>
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