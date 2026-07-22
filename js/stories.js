// Candidate stories use the uploaded portraits and remain readable without external services.
const CANDIDATE_STORIES = [
  { image:'assets/candidate%20-%20Copy/anna.jpeg', name:'Anna Mehta', role:'Frontend Engineer', company:'CloudTech Labs', quote:'CareerFlow made it easy to focus on roles that matched my skills. I moved from discovery to interview in a single week.' },
  { image:'assets/candidate%20-%20Copy/jordan.jpeg', name:'Jordan Pereira', role:'Product Analyst', company:'DataFlow Systems', quote:'The clear job details and simple application process helped me apply with confidence and stay organised throughout.' },
  { image:'assets/candidate%20-%20Copy/mina.jpeg', name:'Mina Kapoor', role:'Machine Learning Engineer', company:'Vertex AI', quote:'I found a role that aligned with my growth goals. The experience feels polished, practical, and genuinely candidate-first.' }
];
function renderCandidateStories() { const root = document.getElementById('candidate-stories'); if (!root) return; root.innerHTML = CANDIDATE_STORIES.map((story) => `<article class="glass-card testimonial-card candidate-story"><img src="${story.image}" alt="${story.name}" loading="lazy" decoding="async" class="candidate-photo"><div class="candidate-rating" aria-label="5 out of 5 stars">★★★★★</div><p>“${story.quote}”</p><strong>${story.name}</strong><span>${story.role} · ${story.company}</span></article>`).join(''); }
renderCandidateStories();
