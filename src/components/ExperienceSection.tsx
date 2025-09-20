import React from 'react';
import SectionHeading from './SectionHeading';
import { Calendar, Users, Briefcase, Download, CheckCircle } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: 'Relationship Manager',
      type: 'Internship',
      company: 'State Bank of India | Saharsa',
      date: 'Jun 2023 - Jul 2023',
      icon: <Briefcase size={30} className="text-green-500 dark:text-green-400" />,
      achievements: [
        'Collected and processed customer feedback, using analytical tools to generate actionable insights for improving digital banking services',
        'Managed Savings Accounts KYC journey, ensuring compliance with regulatory norms and improving onboarding efficiency',
        'Assisted in the Loan Against Property (LAP) LOS journey, supporting documentation, loan processing, and operational flow improvements',
        'Tech Stack used: CBS, LOS, KYC, MS Excel, Data'
      ],
      certificate: '/SBI Certificates.pdf' // Place your certificate in public folder
    },
    {
      title: 'Business Development Executive (Intern)',
      type: 'Internship',
      company: 'Gyaanik | Work From Home',
      date: 'Jun 2025 - Jul 2025',
      icon: <Briefcase size={30} className="text-purple-500 dark:text-purple-400" />,
      achievements: [
        'Conducted client outreach through cold calls and email campaigns to generate leads',
        'Performed market research to identify potential clients and business opportunities',
        'Maintained and updated client database to track communication and progress',
        'Assisted in preparing proposals and presentations for prospective clients',
        'Gained practical experience in business development strategies and CRM tools'
      ],
      certificate: '/Internship_Certificate.pdf' // Place your certificate in public folder
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50 dark:bg-dark-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Experience & Training" 
          subtitle="My professional journey and learning experiences."
        />
        
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-dark-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 md:p-8 flex flex-col md:flex-row md:items-start gap-6"
            >
              {/* Icon */}
              <div className="flex-shrink-0 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-dark-700">
                {exp.icon}
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="flex items-center justify-between flex-wrap mb-2 gap-2">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${exp.type === 'Course' ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300' : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'}`}>
                    {exp.type}
                  </span>
                </div>

                <div className="flex items-center text-gray-700 dark:text-gray-300 mb-4 gap-4 flex-wrap">
                  <span className="flex items-center gap-1">
                    <Users size={16} /> {exp.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={16} /> {exp.date}
                  </span>
                </div>

                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Key Achievements:</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {exp.achievements.map((achieve, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-indigo-500 dark:text-indigo-400" />
                      <span>{achieve}</span>
                    </li>
                  ))}
                </ul>

                {/* Download certificate button */}
                {exp.certificate && (
                  <div className="mt-4">
                    <a
                      href={exp.certificate}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                    >
                      <Download size={18} />
                      <span>Download Certificate</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
