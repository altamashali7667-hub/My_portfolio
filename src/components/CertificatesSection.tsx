import React from 'react';
import SectionHeading from './SectionHeading';
import { Award, ExternalLink } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

const CertificatesSection: React.FC = () => {
  const certificates: Certificate[] = [
    {
      "title": "LambdaTest Certified Professional",
      "issuer": "LambdaTest",
      "date": "Feb 2025",
      "link": "https://media.licdn.com/dms/image/v2/D562DAQE8Pv48ul8xyA/profile-treasury-image-shrink_800_800/B56ZXHcktsGUAY-/0/1742807912111?e=1746133200&v=beta&t=ZI1WZMHkNOBfqIZhEk2XkZaqtjwi9sHfTwB5N2VUqb4"
    },
    {
      "title": "Oracle Certified Professional",
      "issuer": "Oracle",
      "date": "Feb 2025",
      "link": "https://catalog-education.oracle.com/ords/certview/sharebadge?id=575A8A3F7B8331290A1973057B5856DA94F7B7E4172FA585AB646A16253CDF46"
    },
    {
      "title": "Instagram auth Clone Backend using Node.JS, Express & JS",
      "issuer": "Devtown",
      "date": "May 2024",
      "link": "https://www.cert.devtown.in/verify/Z1FDMQ6"
    },
  ];

  return (
    <section id="certificates" className="py-16 md:py-24 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 dark:bg-gradient-to-r dark:from-indigo-700 dark:via-purple-800 dark:to-pink-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Certificates" 
          subtitle="Professional certifications and courses I've completed."
          //titleClass="text-white dark:text-indigo-100"
          //subtitleClass="text-indigo-200 dark:text-purple-300"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((certificate, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-dark-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Award size={20} className="text-indigo-500 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white">{certificate.title}</h3>
              </div>
              
              <div className="mb-4 text-dark-700 dark:text-gray-300 text-sm">
                <p><span className="font-medium">Issuer:</span> {certificate.issuer}</p>
                <p><span className="font-medium">Date:</span> {certificate.date}</p>
              </div>
              
              <div className="mt-auto pt-4">
                <a 
                  href={certificate.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors text-sm"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
