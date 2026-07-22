// Comprehensive CareerFlow Jobs Dataset - 1000+ Jobs and 500+ Internships
// Generated with realistic job titles, companies, locations, and details

const COMPANIES = [
  // Tech Companies
  { name: 'CloudTech Labs', logo: 'CTL', type: 'Tech' },
  { name: 'Vertex AI', logo: 'VAI', type: 'AI/ML' },
  { name: 'DataFlow Systems', logo: 'DFS', type: 'Data' },
  { name: 'Signal Forge', logo: 'SF', type: 'Engineering' },
  { name: 'NeuralNet Inc', logo: 'NNI', type: 'AI' },
  { name: 'QuantumShift', logo: 'QS', type: 'Tech' },
  { name: 'CodeCraft Studios', logo: 'CCS', type: 'Dev' },
  { name: 'ByteWave Technologies', logo: 'BWT', type: 'Tech' },
  { name: 'Pulse Health', logo: 'PH', type: 'Healthcare' },
  { name: 'SecureVault', logo: 'SV', type: 'Cybersecurity' },
  { name: 'CloudNine Hosting', logo: 'CNH', type: 'Cloud' },
  { name: 'DevOps Dynamics', logo: 'DD', type: 'DevOps' },
  { name: 'Design Co', logo: 'DC', type: 'Design' },
  { name: 'NextGen Marketing', logo: 'NGM', type: 'Marketing' },
  { name: 'FinanceHub', logo: 'FH', type: 'Finance' },
  { name: 'TechStart Inc', logo: 'TSI', type: 'Startup' },
  { name: 'GameStudio Pro', logo: 'GSP', type: 'Gaming' },
  { name: 'RoboTech Solutions', logo: 'RTS', type: 'Robotics' },
  { name: 'EduLearn Platform', logo: 'ELP', type: 'EdTech' },
  { name: 'Lumen Cloud', logo: 'LC', type: 'Cloud' },
];

const LOCATIONS = [
  // Indian Cities
  'Bangalore, India',
  'Hyderabad, India',
  'Pune, India',
  'Mumbai, India',
  'Delhi, India',
  'Gurgaon, India',
  'Chennai, India',
  'Ahmedabad, India',
  'Kolkata, India',
  'Jaipur, India',
  // International
  'Remote',
  'San Francisco, CA',
  'New York, NY',
  'London, UK',
  'Berlin, Germany',
  'Toronto, Canada',
  'Austin, TX',
  'Seattle, WA',
  'Sydney, Australia',
  'Singapore',
];

const JOB_TITLES_BY_CATEGORY = {
  'Software Engineering': [
    'Senior Software Engineer',
    'Full Stack Developer',
    'Backend Engineer',
    'Frontend Engineer',
    'Java Developer',
    'Python Developer',
    'Node.js Developer',
    'React Developer',
    'Software Architect',
    'Principal Engineer',
    'Staff Engineer',
    'DevOps Engineer',
    'Cloud Engineer',
    'Solutions Engineer',
  ],
  'AI & Machine Learning': [
    'Machine Learning Engineer',
    'AI Engineer',
    'Data Scientist',
    'NLP Engineer',
    'Computer Vision Engineer',
    'AI Research Scientist',
    'Deep Learning Engineer',
    'ML Operations Engineer',
  ],
  'Frontend Development': [
    'React Developer',
    'Vue.js Developer',
    'Frontend Engineer',
    'UI Developer',
    'Web Developer',
    'Angular Developer',
    'Senior Frontend Engineer',
  ],
  'Backend Development': [
    'Backend Engineer',
    'Node.js Developer',
    'Python Backend Developer',
    'Java Backend Engineer',
    'Go Developer',
    'Rust Developer',
    'API Developer',
    'Database Engineer',
  ],
  'Cybersecurity': [
    'Security Engineer',
    'Cybersecurity Analyst',
    'Penetration Tester',
    'Security Architect',
    'Threat Analyst',
    'Information Security Manager',
  ],
  'Cloud & DevOps': [
    'DevOps Engineer',
    'Cloud Architect',
    'AWS Engineer',
    'Kubernetes Engineer',
    'Infrastructure Engineer',
    'Site Reliability Engineer',
    'Cloud Operations Engineer',
  ],
  'Data Science': [
    'Data Scientist',
    'Data Engineer',
    'Analytics Engineer',
    'Data Analyst',
    'Business Analyst',
    'BI Developer',
  ],
  'Design': [
    'Product Designer',
    'UI/UX Designer',
    'Interaction Designer',
    'Visual Designer',
    'Design System Lead',
    'UX Researcher',
  ],
  'Marketing': [
    'Growth Marketing Manager',
    'Content Strategist',
    'Product Marketing Manager',
    'Digital Marketing Manager',
    'Marketing Analyst',
    'SEO Specialist',
  ],
  'Finance': [
    'Financial Analyst',
    'Accountant',
    'Finance Manager',
    'Investment Analyst',
    'Risk Analyst',
  ],
  'Game Development': [
    'Game Developer',
    'Graphics Programmer',
    'Game Designer',
    'Unity Developer',
    'Unreal Engine Developer',
  ],
  'Robotics & Embedded': [
    'Embedded Systems Engineer',
    'Robotics Engineer',
    'Firmware Engineer',
    'Hardware Engineer',
    'Mechanical Engineer',
    'Electrical Engineer',
  ],
  'Product Management': [
    'Product Manager',
    'Senior Product Manager',
    'Technical Product Manager',
    'Product Owner',
    'Associate Product Manager',
  ],
  'Other': [
    'Business Analyst',
    'HR Manager',
    'IT Manager',
    'Teacher',
    'Healthcare Professional',
    'Civil Engineer',
  ]
};

const SKILLS_BY_CATEGORY = {
  'Software Engineering': ['JavaScript', 'Python', 'Java', 'C++', 'Git', 'REST APIs', 'SQL', 'Microservices', 'System Design'],
  'AI & Machine Learning': ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'SQL', 'Statistics', 'Data Processing', 'Model Training'],
  'Frontend Development': ['React', 'Vue.js', 'HTML/CSS', 'JavaScript', 'Figma', 'UI Design', 'Responsive Design'],
  'Backend Development': ['Node.js', 'Python', 'Java', 'Database Design', 'APIs', 'Microservices', 'AWS'],
  'Cybersecurity': ['Network Security', 'Cryptography', 'Penetration Testing', 'SIEM', 'Firewalls'],
  'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Jenkins', 'GCP'],
  'Data Science': ['SQL', 'Python', 'Statistics', 'Tableau', 'Data Visualization', 'Machine Learning'],
  'Design': ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'UI Design', 'UX Design'],
  'Marketing': ['SEO', 'Analytics', 'Content Writing', 'Google Analytics', 'Social Media'],
};

function generateJobId() {
  return `job-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function generateJob(index, title, company, role, location, salary, type, mode) {
  const now = new Date();
  const postedDaysAgo = Math.floor(Math.random() * 30);
  const postedDate = new Date(now.getTime() - postedDaysAgo * 24 * 60 * 60 * 1000);
  
  return {
    id: generateJobId(),
    title,
    company,
    role,
    location,
    experience: ['0-1 years', '1-3 years', '3-5 years', '5+ years', '7+ years'][Math.floor(Math.random() * 5)],
    salary: salary + Math.floor(Math.random() * 30000),
    type,
    mode,
    category: role,
    posted: postedDate.toISOString().split('T')[0],
    description: `Join ${company} as a ${title} and make an impact. We're looking for talented professionals to help us build the future.`,
    responsibilities: [
      `Lead ${title.toLowerCase()} initiatives and drive technical excellence`,
      'Collaborate with cross-functional teams to deliver high-quality solutions',
      'Mentor junior team members and contribute to knowledge sharing',
      'Participate in code reviews and architectural discussions',
    ],
    requirements: [
      `Professional experience as a ${title.toLowerCase()}`,
      'Strong problem-solving and analytical skills',
      'Experience with modern development practices',
      'Excellent communication and teamwork abilities',
    ],
    benefits: [
      'Competitive salary and equity package',
      'Flexible work arrangements',
      'Professional development opportunities',
      'Health and wellness benefits',
      'Remote-first culture',
    ],
    skills: SKILLS_BY_CATEGORY[role] || ['Technical Skills', 'Communication'],
    logo: company.split(' ').map(w => w[0]).join(''),
  };
}

function generateFullJobsDataset() {
  const jobs = [];
  const jobTitles = Object.entries(JOB_TITLES_BY_CATEGORY);
  
  // Generate 1000+ jobs
  let jobIndex = 0;
  
  // Rotate through different combinations of roles, locations, salary ranges, and work types
  const salaryRanges = [80000, 120000, 160000, 200000, 250000];
  const workTypes = ['Full-time', 'Part-time', 'Contract'];
  const workModes = ['Remote', 'Hybrid', 'Onsite'];
  
  for (let i = 0; i < 1200; i++) {
    const [category, titles] = jobTitles[i % jobTitles.length];
    const title = titles[Math.floor(Math.random() * titles.length)];
    const company = COMPANIES[i % COMPANIES.length];
    const location = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
    const salary = salaryRanges[Math.floor(Math.random() * salaryRanges.length)];
    const type = workTypes[Math.floor(Math.random() * workTypes.length)];
    const mode = workModes[Math.floor(Math.random() * workModes.length)];
    
    jobs.push(generateJob(jobIndex++, title, company.name, category, location, salary, type, mode));
  }
  
  // Generate 500+ internships
  const internshipTitles = [
    'Software Engineering Intern',
    'Frontend Development Intern',
    'Backend Development Intern',
    'Data Science Intern',
    'Machine Learning Intern',
    'DevOps Intern',
    'Design Intern',
    'Product Management Intern',
    'Marketing Intern',
    'Business Analyst Intern',
    'Cybersecurity Intern',
    'Cloud Computing Intern',
    'Game Development Intern',
    'Robotics Intern',
  ];
  
  for (let i = 0; i < 600; i++) {
    const title = internshipTitles[i % internshipTitles.length];
    const company = COMPANIES[i % COMPANIES.length];
    const location = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
    const category = title.replace(' Intern', '');
    
    jobs.push({
      id: generateJobId(),
      title,
      company: company.name,
      role: 'Internship',
      location,
      experience: '0-1 years',
      salary: 30000,
      type: 'Internship',
      mode: LOCATIONS.includes(location) ? ['Remote', 'Hybrid', 'Onsite'][Math.floor(Math.random() * 3)] : 'Remote',
      category,
      posted: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      description: `Join ${company.name} as an intern and kickstart your career in ${category}. This is a great opportunity to learn and grow.`,
      responsibilities: [
        'Support project delivery and implementation',
        'Learn from experienced mentors and team members',
        'Contribute to code, design, or analysis',
        'Participate in team meetings and discussions',
      ],
      requirements: [
        'Currently enrolled in or recently graduated from a relevant degree program',
        'Enthusiasm to learn and grow',
        'Basic knowledge in the field',
        'Good communication skills',
      ],
      benefits: [
        'Competitive stipend',
        'Mentorship from experienced professionals',
        'Flexible hours',
        'Remote-first culture',
        'Certificate upon completion',
      ],
      skills: SKILLS_BY_CATEGORY[category] || ['Technical Skills', 'Learning'],
      logo: company.logo,
    });
  }
  
  return jobs;
}

// Merge with existing jobs or replace
const EXTENDED_JOBS_SEED = generateFullJobsDataset();
