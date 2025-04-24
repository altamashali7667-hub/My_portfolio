import React from 'react';
import SectionHeading from './SectionHeading';
import { Trophy, Code, Star } from 'lucide-react';

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AchievementsSection: React.FC = () => {
  const achievements: Achievement[] = [
    {
      icon: <Trophy size={24} className="text-indigo-500 dark:text-indigo-400" />,
      title: "Participated – Hackathon by Naukri.com",
      description: "Took part in a national-level hackathon organized by Naukri.com, where I collaborated with a team to develop a real-time job-matching solution.",
    },
    {
      icon: <Star size={24} className="text-indigo-500 dark:text-indigo-400" />,
      title: "Built & Deployed 5+ Full-Stack Projects",
      description: "Designed and deployed multiple full-stack applications using React, Node.js, and SQL/NoSQL databases, showcasing strong development and problem-solving skills.",
    }
    
  ];
  

  return (
    <section id="achievements" className="py-16 md:py-24 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Achievements" 
          subtitle="Notable accomplishments and recognition in my professional journey."
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-dark-900 dark:text-white">{achievement.title}</h3>
                    <p className="text-dark-700 dark:text-gray-300">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;