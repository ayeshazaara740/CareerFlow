// One search/filter pipeline for the Jobs page. Every field is evaluated together.
function normalise(value) {
  return String(value || '').toLowerCase().replace(/\s+/g, ' ').trim();
}

function searchableJobText(job) {
  return normalise([
    job.title, job.company, job.role, job.category, job.description,
    ...(job.skills || []), ...(job.tags || []), job.type, job.mode, job.location
  ].join(' '));
}

function getFilteredJobs() {
  const search = normalise(document.getElementById('job-search')?.value);
  const role = document.getElementById('role-filter')?.value || '';
  const location = document.getElementById('location-filter')?.value || '';
  const experience = document.getElementById('experience-filter')?.value || '';
  const salary = Number(document.getElementById('salary-filter')?.value || 0);
  const type = document.getElementById('type-filter')?.value || '';
  const mode = document.getElementById('mode-filter')?.value || '';
  const sort = document.getElementById('sort-select')?.value || 'latest';
  const terms = search.split(' ').filter(Boolean);

  const matches = getStoredJobs().filter((job) => {
    const haystack = searchableJobText(job);
    return terms.every((term) => haystack.includes(term))
      && (!role || job.role === role)
      && (!location || job.location === location)
      && (!experience || job.experience === experience)
      && (!salary || salaryMinINR(job.salary) >= salary)
      && (!type || job.type === type)
      && (!mode || job.mode === mode);
  });
  return matches.sort((a, b) => sort === 'salary-desc' ? salaryMinINR(b.salary) - salaryMinINR(a.salary) : sort === 'salary-asc' ? salaryMinINR(a.salary) - salaryMinINR(b.salary) : sort === 'company' ? a.company.localeCompare(b.company) : new Date(b.posted) - new Date(a.posted));
}

function fillOptions(id, label, values) {
  const select = document.getElementById(id); if (!select) return;
  select.innerHTML = `<option value="">${label}</option>` + values.sort().map((value) => `<option value="${value}">${value}</option>`).join('');
}

function initialiseFilters() {
  if (!document.getElementById('jobs-list')) return;
  const jobs = getStoredJobs();
  fillOptions('role-filter', 'All Roles', [...new Set(jobs.map((job) => job.role))]);
  fillOptions('location-filter', 'All Locations', [...new Set(jobs.map((job) => job.location))]);
  fillOptions('experience-filter', 'All Experience', [...new Set(jobs.map((job) => job.experience))]);
  fillOptions('type-filter', 'Employment Type', [...new Set(jobs.map((job) => job.type))]);
  fillOptions('mode-filter', 'Work Mode', [...new Set(jobs.map((job) => job.mode))]);
  const input = document.getElementById('job-search');
  const landingSearch = sessionStorage.getItem('careerflow-search') || new URLSearchParams(location.search).get('q');
  if (input && landingSearch) { input.value = landingSearch; sessionStorage.removeItem('careerflow-search'); }
  ['job-search','role-filter','location-filter','experience-filter','salary-filter','type-filter','mode-filter','sort-select'].forEach((id) => {
    const control = document.getElementById(id);
    if (control) control.addEventListener('input', () => window.renderJobsList?.());
    if (control) control.addEventListener('change', () => window.renderJobsList?.());
  });
}

initialiseFilters();
