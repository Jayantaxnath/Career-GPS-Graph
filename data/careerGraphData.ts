export interface Node {
  id: string;
  type: 'role' | 'skill' | 'internship';
  sector?: 'IT' | 'Finance' | 'Engineering';
}

export interface Link {
  source: string;
  target: string;
  type?: 'pathway' | 'similarity';
}

export interface GraphData {
  nodes: Node[];
  links: Link[];
}

export const graphData: GraphData = {
  nodes: [
    // ---------------- IT Sector ----------------
    // Data Career Path
    { id: 'Junior Data Analyst', type: 'role', sector: 'IT' },
    { id: 'Data Analyst', type: 'role', sector: 'IT' },
    { id: 'Data Scientist', type: 'role', sector: 'IT' },
    { id: 'Data Engineer', type: 'role', sector: 'IT' },
    { id: 'Machine Learning Engineer', type: 'role', sector: 'IT' },
    { id: 'AI Engineer', type: 'role', sector: 'IT' },
    { id: 'ML Ops Engineer', type: 'role', sector: 'IT' },
    { id: 'Cloud Architect', type: 'role', sector: 'IT' },
    { id: 'Data Platform Engineer', type: 'role', sector: 'IT' },
    { id: 'Frontend Developer', type: 'role', sector: 'IT' },
    { id: 'Backend Developer', type: 'role', sector: 'IT' },
    { id: 'Full Stack Developer', type: 'role', sector: 'IT' },
    { id: 'Software Architect', type: 'role', sector: 'IT' },

    // IT Skills
    { id: 'Excel', type: 'skill', sector: 'IT' },
    { id: 'SQL', type: 'skill', sector: 'IT' },
    { id: 'Python', type: 'skill', sector: 'IT' },
    { id: 'R Programming', type: 'skill', sector: 'IT' },
    { id: 'Data Visualization', type: 'skill', sector: 'IT' },
    { id: 'Machine Learning', type: 'skill', sector: 'IT' },
    { id: 'Statistics', type: 'skill', sector: 'IT' },
    { id: 'ETL', type: 'skill', sector: 'IT' },
    { id: 'Big Data', type: 'skill', sector: 'IT' },
    { id: 'Spark', type: 'skill', sector: 'IT' },
    { id: 'HTML/CSS', type: 'skill', sector: 'IT' },
    { id: 'JavaScript', type: 'skill', sector: 'IT' },
    { id: 'React', type: 'skill', sector: 'IT' },
    { id: 'Node.js', type: 'skill', sector: 'IT' },
    { id: 'Database Design', type: 'skill', sector: 'IT' },
    { id: 'Docker', type: 'skill', sector: 'IT' },
    { id: 'Kubernetes', type: 'skill', sector: 'IT' },
    { id: 'Cloud Computing', type: 'skill', sector: 'IT' },
    { id: 'Deep Learning', type: 'skill', sector: 'IT' },
    { id: 'Natural Language Processing', type: 'skill', sector: 'IT' },
    { id: 'Computer Vision', type: 'skill', sector: 'IT' },
    { id: 'TensorFlow', type: 'skill', sector: 'IT' },
    { id: 'PyTorch', type: 'skill', sector: 'IT' },
    { id: 'AWS', type: 'skill', sector: 'IT' },
    { id: 'Azure', type: 'skill', sector: 'IT' },
    { id: 'GCP', type: 'skill', sector: 'IT' },
    { id: 'Data Pipelines', type: 'skill', sector: 'IT' },
    { id: 'Kafka', type: 'skill', sector: 'IT' },
    { id: 'Airflow', type: 'skill', sector: 'IT' },

    // ---------------- Finance Sector ----------------
    { id: 'Financial Analyst', type: 'role', sector: 'Finance' },
    { id: 'Senior Financial Analyst', type: 'role', sector: 'Finance' },
    { id: 'Investment Banking Analyst', type: 'role', sector: 'Finance' },
    { id: 'Portfolio Manager', type: 'role', sector: 'Finance' },
    { id: 'Risk Manager', type: 'role', sector: 'Finance' },

    // Finance Skills
    { id: 'Financial Modeling', type: 'skill', sector: 'Finance' },
    { id: 'Valuation', type: 'skill', sector: 'Finance' },
    { id: 'Accounting', type: 'skill', sector: 'Finance' },
    { id: 'Excel', type: 'skill', sector: 'Finance' },
    { id: 'Risk Management', type: 'skill', sector: 'Finance' },
    { id: 'Economics', type: 'skill', sector: 'Finance' },
    { id: 'Financial Analysis', type: 'skill', sector: 'Finance' },
    { id: 'DCF Modeling', type: 'skill', sector: 'Finance' },
    { id: 'Equity Research', type: 'skill', sector: 'Finance' },
    { id: 'Credit Analysis', type: 'skill', sector: 'Finance' },
    { id: 'Mergers & Acquisitions', type: 'skill', sector: 'Finance' },
    { id: 'Capital Markets', type: 'skill', sector: 'Finance' },
    { id: 'Financial Reporting', type: 'skill', sector: 'Finance' },
    { id: 'Bloomberg Terminal', type: 'skill', sector: 'Finance' },
    { id: 'PowerBI', type: 'skill', sector: 'Finance' },
    { id: 'Tableau', type: 'skill', sector: 'Finance' },

    // ---------------- Engineering Sector ----------------
    { id: 'Software Engineer', type: 'role', sector: 'Engineering' },
    { id: 'Senior Software Engineer', type: 'role', sector: 'Engineering' },
    { id: 'DevOps Engineer', type: 'role', sector: 'Engineering' },
    { id: 'System Architect', type: 'role', sector: 'Engineering' },

    // Engineering Skills
    { id: 'System Design', type: 'skill', sector: 'Engineering' },
    { id: 'Cloud Computing', type: 'skill', sector: 'Engineering' },
    { id: 'Docker', type: 'skill', sector: 'Engineering' },
    { id: 'Kubernetes', type: 'skill', sector: 'Engineering' },
    { id: 'CI/CD', type: 'skill', sector: 'Engineering' },

    // ---------------- Internships ----------------
    { id: 'Data Analytics Intern', type: 'internship', sector: 'IT' },
    { id: 'Software Dev Intern', type: 'internship', sector: 'IT' },
    { id: 'AI Research Intern', type: 'internship', sector: 'IT' },
    { id: 'Cloud Engineering Intern', type: 'internship', sector: 'IT' },
    { id: 'Data Platform Intern', type: 'internship', sector: 'IT' },
    { id: 'Finance Intern', type: 'internship', sector: 'Finance' },
    { id: 'Engineering Intern', type: 'internship', sector: 'Engineering' },
  ],

  links: [
    // ---------------- IT Data Path - Fixed: skills → role progression ----------------
    { source: 'Excel', target: 'Junior Data Analyst', type: 'pathway' },
    { source: 'SQL', target: 'Junior Data Analyst', type: 'pathway' },
    { source: 'Junior Data Analyst', target: 'Data Analyst', type: 'pathway' },
    { source: 'Python', target: 'Data Analyst', type: 'pathway' },
    { source: 'Data Analyst', target: 'Data Scientist', type: 'pathway' },
    { source: 'Machine Learning', target: 'Data Scientist', type: 'pathway' },
    { source: 'Statistics', target: 'Data Scientist', type: 'pathway' },
    { source: 'Data Analyst', target: 'Data Engineer', type: 'pathway' },
    { source: 'ETL', target: 'Data Engineer', type: 'pathway' },
    { source: 'Big Data', target: 'Data Engineer', type: 'pathway' },
    { source: 'Spark', target: 'Data Engineer', type: 'pathway' },

    // AI/ML Path - Fixed: skills → role progression
    { source: 'Python', target: 'AI Engineer', type: 'pathway' },
    { source: 'Machine Learning', target: 'AI Engineer', type: 'pathway' },
    { source: 'Deep Learning', target: 'AI Engineer', type: 'pathway' },
    { source: 'Natural Language Processing', target: 'AI Engineer', type: 'pathway' },
    { source: 'Computer Vision', target: 'AI Engineer', type: 'pathway' },
    { source: 'TensorFlow', target: 'AI Engineer', type: 'pathway' },
    { source: 'PyTorch', target: 'AI Engineer', type: 'pathway' },
    { source: 'AI Engineer', target: 'ML Ops Engineer', type: 'pathway' },
    { source: 'Data Engineer', target: 'ML Ops Engineer', type: 'pathway' },
    { source: 'ML Ops Engineer', target: 'Cloud Architect', type: 'pathway' },

    // Cloud & Data Engineering Path - Fixed: skills → role progression
    { source: 'AWS', target: 'Cloud Architect', type: 'pathway' },
    { source: 'Azure', target: 'Cloud Architect', type: 'pathway' },
    { source: 'GCP', target: 'Cloud Architect', type: 'pathway' },
    { source: 'Data Pipelines', target: 'Data Platform Engineer', type: 'pathway' },
    { source: 'Kafka', target: 'Data Platform Engineer', type: 'pathway' },
    { source: 'Airflow', target: 'Data Platform Engineer', type: 'pathway' },
    { source: 'Cloud Architect', target: 'Data Platform Engineer', type: 'pathway' },

    // Software Development Path
    { source: 'Frontend Developer', target: 'HTML/CSS', type: 'pathway' },
    { source: 'Frontend Developer', target: 'JavaScript', type: 'pathway' },
    { source: 'Frontend Developer', target: 'React', type: 'pathway' },
    { source: 'Backend Developer', target: 'Node.js', type: 'pathway' },
    { source: 'Backend Developer', target: 'Database Design', type: 'pathway' },
    { source: 'Frontend Developer', target: 'Full Stack Developer', type: 'pathway' },
    { source: 'Backend Developer', target: 'Full Stack Developer', type: 'pathway' },
    { source: 'Full Stack Developer', target: 'Software Architect', type: 'pathway' },
    { source: 'Software Architect', target: 'Docker', type: 'pathway' },
    { source: 'Software Architect', target: 'Kubernetes', type: 'pathway' },
    { source: 'Software Architect', target: 'Cloud Computing', type: 'pathway' },

    // Finance Path - Fixed: skills → role progression
    { source: 'Excel', target: 'Financial Analyst', type: 'pathway' },
    { source: 'Financial Modeling', target: 'Financial Analyst', type: 'pathway' },
    { source: 'Accounting', target: 'Financial Analyst', type: 'pathway' },
    { source: 'Financial Analyst', target: 'Senior Financial Analyst', type: 'pathway' },
    
    // Senior Financial Analyst Skills
    { source: 'Financial Analysis', target: 'Senior Financial Analyst', type: 'pathway' },
    { source: 'DCF Modeling', target: 'Senior Financial Analyst', type: 'pathway' },
    { source: 'Financial Reporting', target: 'Senior Financial Analyst', type: 'pathway' },
    { source: 'PowerBI', target: 'Senior Financial Analyst', type: 'pathway' },
    
    { source: 'Senior Financial Analyst', target: 'Investment Banking Analyst', type: 'pathway' },
    
    // Investment Banking Analyst Skills  
    { source: 'Valuation', target: 'Investment Banking Analyst', type: 'pathway' },
    { source: 'Equity Research', target: 'Investment Banking Analyst', type: 'pathway' },
    { source: 'Credit Analysis', target: 'Investment Banking Analyst', type: 'pathway' },
    { source: 'Mergers & Acquisitions', target: 'Investment Banking Analyst', type: 'pathway' },
    { source: 'Capital Markets', target: 'Investment Banking Analyst', type: 'pathway' },
    { source: 'Risk Management', target: 'Portfolio Manager', type: 'pathway' },
    { source: 'Economics', target: 'Portfolio Manager', type: 'pathway' },

    // Engineering Path - Fixed: skills → role progression
    { source: 'JavaScript', target: 'Software Engineer', type: 'pathway' },
    { source: 'Python', target: 'Software Engineer', type: 'pathway' },
    { source: 'System Design', target: 'Software Engineer', type: 'pathway' },
    { source: 'Software Engineer', target: 'Senior Software Engineer', type: 'pathway' },
    { source: 'Senior Software Engineer', target: 'DevOps Engineer', type: 'pathway' },
    { source: 'Cloud Computing', target: 'DevOps Engineer', type: 'pathway' },
    { source: 'Docker', target: 'DevOps Engineer', type: 'pathway' },
    { source: 'Kubernetes', target: 'DevOps Engineer', type: 'pathway' },
    { source: 'CI/CD', target: 'DevOps Engineer', type: 'pathway' },

    // Internship Connections - Fixed direction: role → internship
    { source: 'Junior Data Analyst', target: 'Data Analytics Intern', type: 'pathway' },
    { source: 'Frontend Developer', target: 'Software Dev Intern', type: 'pathway' },
    { source: 'Backend Developer', target: 'Software Dev Intern', type: 'pathway' },
    { source: 'AI Engineer', target: 'AI Research Intern', type: 'pathway' },
    { source: 'Cloud Architect', target: 'Cloud Engineering Intern', type: 'pathway' },
    { source: 'Data Platform Engineer', target: 'Data Platform Intern', type: 'pathway' },
    { source: 'Financial Analyst', target: 'Finance Intern', type: 'pathway' },
    { source: 'Software Engineer', target: 'Engineering Intern', type: 'pathway' },

    // Similarities
    { source: 'Python', target: 'Machine Learning', type: 'similarity' },
    { source: 'Deep Learning', target: 'Machine Learning', type: 'similarity' },
    { source: 'PyTorch', target: 'TensorFlow', type: 'similarity' },
    { source: 'AWS', target: 'Azure', type: 'similarity' },
    { source: 'AWS', target: 'GCP', type: 'similarity' },
    { source: 'ETL', target: 'Data Pipelines', type: 'similarity' },
    { source: 'Docker', target: 'Cloud Computing', type: 'similarity' },
    { source: 'Data Visualization', target: 'Financial Modeling', type: 'similarity' },
    
    // Finance Skills Similarities
    { source: 'Financial Modeling', target: 'DCF Modeling', type: 'similarity' },
    { source: 'Financial Analysis', target: 'Financial Reporting', type: 'similarity' },
    { source: 'PowerBI', target: 'Tableau', type: 'similarity' },
    { source: 'Excel', target: 'Financial Modeling', type: 'similarity' },
    
    // Investment Banking Skills Similarities
    { source: 'Valuation', target: 'Equity Research', type: 'similarity' },
    { source: 'Mergers & Acquisitions', target: 'Capital Markets', type: 'similarity' },
  ],
};
