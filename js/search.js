// Lightweight autocomplete shared by homepage and jobs search.
function attachAutocomplete(input) {
  if (!input || input.dataset.autocomplete) return;
  input.dataset.autocomplete = 'true';
  const box = document.createElement('div'); box.className = 'autocomplete'; box.hidden = true;
  input.parentElement.style.position = 'relative'; input.parentElement.appendChild(box);
  const popular = ['Python', 'AI', 'React', 'Frontend', 'Backend', 'Internship', 'Hyderabad'];
  const update = () => {
    const query = String(input.value).trim().toLowerCase();
    const values = query ? getStoredJobs().flatMap((job) => [job.title, job.company, job.category, ...(job.skills || [])]).filter((value) => String(value).toLowerCase().includes(query)) : popular;
    const suggestions = [...new Set(values)].slice(0, 7);
    box.innerHTML = suggestions.map((item) => `<button type="button">${item}</button>`).join(''); box.hidden = !suggestions.length;
  };
  input.addEventListener('input', update); input.addEventListener('focus', update);
  box.addEventListener('click', (event) => { if (!event.target.matches('button')) return; input.value = event.target.textContent; box.hidden = true; input.dispatchEvent(new Event('input')); });
  document.addEventListener('click', (event) => { if (event.target !== input && !box.contains(event.target)) box.hidden = true; });
}
attachAutocomplete(document.getElementById('job-search'));
attachAutocomplete(document.getElementById('hero-search-input'));
