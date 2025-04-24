import React from 'react';
import SectionHeading from './SectionHeading';
import { Calendar, Users, Code, CheckCircle } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 dark:bg-gradient-to-r dark:from-indigo-700 dark:via-purple-800 dark:to-pink-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Experience & Training" 
          subtitle="My professional journey and learning experiences."
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-dark-800 rounded-lg shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
              <div className="flex-shrink-0 hidden md:block">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                  <Code size={30} className="text-indigo-500 dark:text-indigo-400" />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Full Stack Development Course</h3>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm">
                    Course
                  </span>
                </div>
                
                <div className="flex items-center text-gray-700 dark:text-gray-300 mb-4">
                  <span className="flex items-center mr-4">
                    <Users size={16} className="mr-1" />
                    Devtown
                  </span>
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    May 2024
                  </span>
                </div>
                
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Key Achievements:</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="mr-2 text-indigo-500 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>Built responsive user interfaces with React, HTML, CSS, and JavaScript</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="mr-2 text-indigo-500 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>Developed backend services using Node.js, Express, and integrated databases like MongoDB and MySQL</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="mr-2 text-indigo-500 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>Implemented JWT and OAuth for secure authentication and authorization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="mr-2 text-indigo-500 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>Worked on deploying applications using platforms like Heroku and Vercel</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="mr-2 text-indigo-500 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>Collaborated using Git for version control and Agile project management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
