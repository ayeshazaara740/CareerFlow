// Focused job creation flow for the Admin Dashboard.
function resetForm() {
  const form = document.getElementById('job-form');
  if (form) form.reset();
  const id = document.getElementById('job-id');
  if (id) id.value = '';
}

function handleJobSubmit(event) {
  event.preventDefault();
  const salaryMin = Number(document.getElementById('job-salary').value);
  const payload = {
    title: document.getElementById('job-title').value.trim(), company: document.getElementById('job-company').value.trim(), role: document.getElementById('job-role').value.trim(), location: document.getElementById('job-location').value.trim(), experience: document.getElementById('job-experience').value.trim(),
    salary: { minINR: salaryMin, maxINR: Math.round(salaryMin * 1.3 / 10000) * 10000, currency: 'INR', period: 'year' },
    type: document.getElementById('job-type').value.trim(), mode: document.getElementById('job-mode').value.trim(), category: document.getElementById('job-category').value.trim(),
    skills: document.getElementById('job-skills').value.split(',').map((item) => item.trim()).filter(Boolean), description: document.getElementById('job-description-text').value.trim(),
    responsibilities: document.getElementById('job-responsibilities-text').value.split('\n').map((item) => item.trim()).filter(Boolean), requirements: document.getElementById('job-requirements-text').value.split('\n').map((item) => item.trim()).filter(Boolean), benefits: document.getElementById('job-benefits-text').value.split('\n').map((item) => item.trim()).filter(Boolean), logo: document.getElementById('job-company').value.trim().slice(0, 2).toUpperCase()
  };
  if (!payload.title || !payload.company || !payload.role || !payload.location || !payload.experience || !salaryMin || !payload.type || !payload.mode || !payload.category || !payload.skills.length || !payload.description) return showToast('Please complete all required job details.', 'error');
  saveJobs([createJob(payload), ...getStoredJobs()]);
  resetForm();
  showToast('New job created successfully.', 'success');
}

const jobForm = document.getElementById('job-form');
if (jobForm) { jobForm.addEventListener('submit', handleJobSubmit); document.getElementById('reset-form').addEventListener('click', resetForm); }
