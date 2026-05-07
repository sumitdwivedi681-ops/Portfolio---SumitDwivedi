import React from 'react';
import { Eye, Download } from 'lucide-react';

const ResumeFloating: React.FC = () => {
  const resumeUrl = "/SumitCV.pdf";

  return (
    <div className="resume-floating">
      <a 
        href={resumeUrl} 
        target="_blank" 
        rel="noreferrer" 
        className="floating-btn" 
        data-tooltip="View Resume"
      >
        <Eye size={24} />
      </a>
      <a 
        href={resumeUrl} 
        download="Sumit_Dwivedi_CV.pdf" 
        className="floating-btn" 
        data-tooltip="Download Resume"
      >
        <Download size={24} />
      </a>
    </div>
  );
};

export default ResumeFloating;
