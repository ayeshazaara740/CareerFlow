// CareerFlow - Comprehensive Jobs Dataset with 1000+ positions and 500+ internships
const COMPANIES_DATA = [
  { name: 'CloudTech Labs', logo: 'CTL', rating: 4.8 },
  { name: 'Vertex AI', logo: 'VAI', rating: 4.9 },
  { name: 'DataFlow Systems', logo: 'DFS', rating: 4.7 },
  { name: 'Signal Forge', logo: 'SF', rating: 4.6 },
  { name: 'NeuralNet Inc', logo: 'NNI', rating: 4.8 },
  { name: 'QuantumShift', logo: 'QS', rating: 4.5 },
  { name: 'CodeCraft Studios', logo: 'CCS', rating: 4.7 },
  { name: 'ByteWave Technologies', logo: 'BWT', rating: 4.6 },
  { name: 'Pulse Health', logo: 'PH', rating: 4.8 },
  { name: 'SecureVault', logo: 'SV', rating: 4.9 },
  { name: 'CloudNine Hosting', logo: 'CNH', rating: 4.5 },
  { name: 'DevOps Dynamics', logo: 'DD', rating: 4.7 },
  { name: 'Design Co', logo: 'DC', rating: 4.8 },
  { name: 'NextGen Marketing', logo: 'NGM', rating: 4.6 },
  { name: 'FinanceHub', logo: 'FH', rating: 4.7 },
  { name: 'TechStart Inc', logo: 'TSI', rating: 4.5 },
  { name: 'GameStudio Pro', logo: 'GSP', rating: 4.8 },
  { name: 'RoboTech Solutions', logo: 'RTS', rating: 4.6 },
  { name: 'EduLearn Platform', logo: 'ELP', rating: 4.7 },
  { name: 'Lumen Cloud', logo: 'LC', rating: 4.8 },
];

const LOCATIONS = [
  'Bangalore, India', 'Hyderabad, India', 'Pune, India', 'Mumbai, India', 'Delhi, India',
  'Gurgaon, India', 'Chennai, India', 'Ahmedabad, India', 'Kolkata, India', 'Jaipur, India',
  'Remote', 'San Francisco, CA', 'New York, NY', 'London, UK', 'Berlin, Germany',
  'Toronto, Canada', 'Austin, TX', 'Seattle, WA', 'Sydney, Australia', 'Singapore'
];

const CATEGORIES = {
  'Software Engineering': ['JavaScript', 'Python', 'Java', 'C++', 'Git', 'REST APIs'],
  'Frontend Development': ['React', 'Vue.js', 'HTML/CSS', 'JavaScript', 'Figma'],
  'Backend Development': ['Node.js', 'Python', 'Java', 'Database', 'AWS'],
  'AI & Machine Learning': ['Python', 'TensorFlow', 'PyTorch', 'SQL', 'Statistics'],
  'Data Science': ['Python', 'SQL', 'Statistics', 'Tableau', 'Data Visualization'],
  'Cybersecurity': ['Network Security', 'Cryptography', 'Penetration Testing'],
  'DevOps & Cloud': ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
  'Design': ['Figma', 'UI/UX', 'User Research', 'Prototyping'],
  'Product Management': ['Product Strategy', 'Analytics', 'User Research'],
  'Marketing': ['SEO', 'Analytics', 'Content Writing', 'Google Analytics'],
  'Finance': ['Excel', 'Financial Analysis', 'Accounting'],
  'Game Development': ['Unity', 'Unreal', 'C#', 'Game Design'],
  'Robotics & Embedded': ['C/C++', 'Embedded Systems', 'Hardware'],
  'Healthcare': ['Healthcare IT', 'Medical Data', 'Compliance'],
  'Education': ['Teaching', 'Curriculum Design', 'Learning Technology']
};

function buildSalary(category, experience, type) {
  if (type === 'Internship') return { minINR: 10000 + Math.floor(Math.random() * 15000), maxINR: 25000 + Math.floor(Math.random() * 10000), currency: 'INR', period: 'month' };
  const ranges = { 'Fresher':[300000,600000], '0-1 years':[400000,750000], '1-3 years':[600000,1200000], '3-5 years':[1000000,2000000], '5+ years':[2000000,4500000], '7+ years':[3500000,8000000] };
  const range = ranges[experience] || ranges['1-3 years'];
  const premium = /AI|Machine Learning|Data Science/.test(category) ? 1.15 : 1;
  return { minINR: Math.round(range[0] * premium / 10000) * 10000, maxINR: Math.round(range[1] * premium / 10000) * 10000, currency: 'INR', period: 'year' };
}
function salaryMinINR(salary) { return typeof salary === 'number' ? salary * 85 : Number(salary?.minINR || 0); }
function generateJob(index, category, title, company, location, salary, type, mode) {
  const now = new Date();
  const postedDaysAgo = Math.floor(Math.random() * 30);
  const postedDate = new Date(now.getTime() - postedDaysAgo * 24 * 60 * 60 * 1000);
  const experience = ['Fresher', '0-1 years', '1-3 years', '3-5 years', '5+ years', '7+ years'][Math.floor(Math.random() * 6)];
  
  return {
    id: `job-${index}`,
    title,
    company,
    role: category,
    location,
    experience,
    salary: buildSalary(category, experience, type),
    type,
    mode,
    category,
    posted: postedDate.toISOString().split('T')[0],
    description: `Join ${company} as a ${title} and make an impact. We are building innovative solutions in ${category}.`,
    responsibilities: [
      `Lead ${title.toLowerCase()} initiatives and drive technical excellence`,
      'Collaborate with cross-functional teams to deliver solutions',
      'Mentor junior team members and share knowledge',
      'Participate in architecture and design discussions'
    ],
    requirements: [
      'Professional experience in the field',
      'Strong problem-solving skills',
      'Experience with modern practices and technologies',
      'Excellent communication and teamwork'
    ],
    benefits: [
      'Competitive salary and equity',
      'Flexible work arrangements',
      'Professional development budget',
      'Health and wellness benefits',
      'Remote-first culture'
    ],
    skills: CATEGORIES[category] || ['Technical Skills'],
    logo: company.split(' ').map(w => w[0]).join('').substring(0, 2)
  };
}

function generateFullJobsDataset() {
  const jobs = [];
  const jobTitles = {
    'Software Engineering': ['Senior Software Engineer', 'Full Stack Developer', 'Software Architect', 'Principal Engineer', 'Lead Engineer', 'Software Engineer', 'Junior Software Engineer'],
    'Frontend Development': ['React Developer', 'Frontend Engineer', 'UI Developer', 'Senior Frontend Engineer', 'Frontend Architect', 'Web Developer', 'Junior Frontend Developer'],
    'Backend Development': ['Backend Engineer', 'Node.js Developer', 'Python Developer', 'Java Developer', 'API Developer', 'Database Engineer', 'Junior Backend Developer'],
    'AI & Machine Learning': ['ML Engineer', 'Data Scientist', 'AI Engineer', 'NLP Engineer', 'Computer Vision Engineer', 'Junior ML Engineer', 'ML Research Scientist'],
    'Data Science': ['Data Scientist', 'Data Engineer', 'Analytics Engineer', 'Data Analyst', 'Senior Data Scientist', 'Junior Data Analyst'],
    'Cybersecurity': ['Security Engineer', 'Cybersecurity Analyst', 'Penetration Tester', 'Security Architect', 'Threat Analyst', 'Junior Security Engineer'],
    'DevOps & Cloud': ['DevOps Engineer', 'Cloud Architect', 'AWS Engineer', 'Infrastructure Engineer', 'SRE', 'Junior DevOps Engineer'],
    'Design': ['Product Designer', 'UI/UX Designer', 'Design Lead', 'UX Researcher', 'Visual Designer', 'Interaction Designer', 'Junior Designer'],
    'Product Management': ['Product Manager', 'Senior PM', 'Technical PM', 'Associate PM', 'Product Owner', 'Junior PM'],
    'Marketing': ['Growth Manager', 'Content Strategist', 'Product Marketing Manager', 'Digital Marketer', 'Marketing Analyst', 'Junior Marketer'],
    'Finance': ['Financial Analyst', 'Accountant', 'Finance Manager', 'Investment Analyst', 'Risk Analyst', 'Junior Analyst'],
    'Game Development': ['Game Developer', 'Unity Developer', 'Game Designer', 'Graphics Programmer', 'Senior Game Developer'],
    'Robotics & Embedded': ['Embedded Systems Engineer', 'Robotics Engineer', 'Firmware Engineer', 'Hardware Engineer', 'Mechanical Engineer'],
    'Healthcare': ['Healthcare IT Specialist', 'Medical Data Analyst', 'Health IT Manager', 'Healthcare Developer', 'Clinical Data Manager'],
    'Education': ['Teacher', 'Instructor', 'Course Developer', 'Learning Specialist', 'Educational Content Creator']
  };

  let jobIndex = 0;
  const types = ['Full-time', 'Part-time', 'Contract'];
  const modes = ['Remote', 'Hybrid', 'Onsite'];
  const salaryRanges = { 'Fresher': 50000, '0-1 years': 70000, '1-3 years': 100000, '3-5 years': 140000, '5+ years': 180000, '7+ years': 250000 };

  // Generate 1000+ full-time and part-time jobs
  for (const [category, titles] of Object.entries(jobTitles)) {
    for (let i = 0; i < 70; i++) {
      const title = titles[Math.floor(Math.random() * titles.length)];
      const company = COMPANIES_DATA[jobIndex % COMPANIES_DATA.length].name;
      const location = LOCATIONS[jobIndex % LOCATIONS.length];
      const type = types[jobIndex % 2];
      const mode = modes[Math.floor(jobIndex / 2) % 3];
      const baseSalary = salaryRanges['3-5 years'];
      
      jobs.push(generateJob(jobIndex++, category, title, company, location, baseSalary, type, mode));
    }
  }

  // Generate 500+ internships
  const internshipTitles = [
    'Software Engineering Intern', 'Frontend Development Intern', 'Backend Development Intern',
    'Data Science Intern', 'Machine Learning Intern', 'DevOps Intern', 'Design Intern',
    'Product Management Intern', 'Marketing Intern', 'Finance Intern', 'Cybersecurity Intern',
    'Game Development Intern', 'Robotics Intern', 'Healthcare IT Intern', 'Education Intern'
  ];

  for (let i = 0; i < 500; i++) {
    const title = internshipTitles[i % internshipTitles.length];
    const category = title.replace(' Intern', '');
    const company = COMPANIES_DATA[jobIndex % COMPANIES_DATA.length].name;
    const location = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
    const mode = LOCATIONS.some(l => l.includes(location)) ? 'Hybrid' : 'Remote';

    jobs.push({
      id: `job-intern-${i}`,
      title,
      company,
      role: 'Internship',
      location,
      experience: '0-1 years',
      salary: buildSalary(category, 'Fresher', 'Internship'),
      type: 'Internship',
      mode,
      category: category.includes('Intern') ? category.replace(' Intern', '') : category,
      posted: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      description: `Join ${company} as an intern and kickstart your career in ${category}.`,
      responsibilities: ['Support project delivery', 'Learn from mentors', 'Contribute to team projects', 'Participate in discussions'],
      requirements: ['Currently enrolled or recently graduated', 'Enthusiasm to learn', 'Basic knowledge in field'],
      benefits: ['Competitive stipend', 'Mentorship', 'Flexible hours', 'Certificate'],
      skills: CATEGORIES[category] || ['Technical Skills'],
      logo: company.split(' ').map(w => w[0]).join('').substring(0, 2)
    });
    
    jobIndex++;
  }

  return jobs;
}

const JOBS_SEED = generateFullJobsDataset();

const APP_DATA = {
  companies: COMPANIES_DATA.map(c => ({ name: c.name, role: c.logo, rating: c.rating })),
  categories: Object.keys(CATEGORIES).map(cat => ({ name: cat, count: `${Math.floor(Math.random() * 200) + 50} roles` }))
};
