import React from 'react';
import SectionHeading from './SectionHeading';
import { Award, ExternalLink, Download } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link: string;       // For viewing online
  pdf?: string;       // For downloadable PDF
}

const CertificatesSection: React.FC = () => {
  const certificates: Certificate[] = [
    {
      title: "International Logistics & Transportation in Supply Chain",
      issuer: "Udemy",
      date: "August 2025",
      link: "https://www.udemy.com/certificate/UC-89764761-deec-42fc-a728-089bf3eebc09/",
      pdf: "/operations.pdf"
    },
    {
      title: "Starting Your Career as a Financial Analyst",
      issuer: "LinkedIn",
      date: "April 2023",
      link: "https://www.linkedin.com/learning/certificates/5e47da659fba09c7d2e35fccc994fcf0502dc3538f287158d1097b319b8abac7",
      pdf: "/financial.pdf"
    },
    {
      title: "MS Excel",
      issuer: "Lernx",
      date: "Nov 2023",
      link: "https://ms-excel.tiiny.site/png/MS-Excel-Certificate",
      pdf: "MSEXCEL.pdf"
    },
    {
      title: "Income Tax (India) - Rules, Regulations, Filing of Returns",
      issuer: "Udemy",
      date: "Nov 2022",
      link: "http://ude.my/UC-ce90ca55-b255-4de0-9f61-4eae27dc4cff",
      pdf: "/income.pdf"
    },
  ];

  return (
    <section 
      id="certificates" 
      className="py-16 md:py-24 bg-gray-50 dark:bg-dark-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Certificates" 
          subtitle="Professional certifications and courses I've completed."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((certificate, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 
                         hover:shadow-2xl transition-all duration-300 flex flex-col 
                         border border-gray-200 dark:border-dark-700"
            >
              {/* Icon and Title */}
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full 
                                flex items-center justify-center mr-4 flex-shrink-0">
                  <Award size={24} className="text-indigo-500 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white">
                  {certificate.title}
                </h3>
              </div>
              
              {/* Details */}
              <div className="mb-4 text-dark-700 dark:text-gray-300 text-sm space-y-1">
                <p><span className="font-medium">Issuer:</span> {certificate.issuer}</p>
                <p><span className="font-medium">Date:</span> {certificate.date}</p>
              </div>
              
              {/* Buttons */}
              <div className="mt-auto pt-4 flex gap-3 flex-wrap">
                <a 
                  href={certificate.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 
                             px-3 py-2 bg-indigo-100 text-indigo-700 
                             dark:bg-indigo-900/40 dark:text-indigo-300 
                             rounded-lg text-sm font-medium hover:bg-indigo-200 
                             dark:hover:bg-indigo-800 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>View Online</span>
                </a>
                
                {certificate.pdf && (
                  <a 
                    href={certificate.pdf} 
                    download 
                    className="flex items-center justify-center gap-2 
                               px-3 py-2 bg-green-100 text-green-700 
                               dark:bg-green-900/40 dark:text-green-300 
                               rounded-lg text-sm font-medium hover:bg-green-200 
                               dark:hover:bg-green-800 transition-colors"
                  >
                    <Download size={16} />
                    <span>Download PDF</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
