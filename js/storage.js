const STORAGE_KEYS = {
  jobs: 'careerflow-jobs',
  jobsVersion: 'careerflow-jobs-version',
  applications: 'careerflow-applications',
  saved: 'careerflow-saved-jobs'
};

function getStoredJobs() {
  const raw = localStorage.getItem(STORAGE_KEYS.jobs);
  if (!raw || localStorage.getItem(STORAGE_KEYS.jobsVersion) !== '3') {
    localStorage.setItem(STORAGE_KEYS.jobs, JSON.stringify(JOBS_SEED));
    localStorage.setItem(STORAGE_KEYS.jobsVersion, '3');
    return JOBS_SEED;
  }
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : JOBS_SEED;
  } catch (error) {
    console.warn('Unable to parse stored jobs', error);
    return JOBS_SEED;
  }
}

function saveJobs(jobs) {
  localStorage.setItem(STORAGE_KEYS.jobs, JSON.stringify(jobs));
}

function getSavedJobs() {
  const raw = localStorage.getItem(STORAGE_KEYS.saved);
  if (!raw) return [];
  try { const parsed = JSON.parse(raw); return Array.isArray(parsed) ? parsed : []; } catch { return []; }
}

function saveSavedJobs(ids) {
  localStorage.setItem(STORAGE_KEYS.saved, JSON.stringify(ids));
}

function getApplications() {
  const raw = localStorage.getItem(STORAGE_KEYS.applications);
  if (!raw) return [];
  try { const parsed = JSON.parse(raw); return Array.isArray(parsed) ? parsed : []; } catch { return []; }
}

function saveApplications(applications) {
  localStorage.setItem(STORAGE_KEYS.applications, JSON.stringify(applications));
}

function createJob(data) {
  return {
    ...data,
    id: data.id || `job-${Date.now()}`,
    posted: data.posted || new Date().toISOString().slice(0, 10)
  };
}
