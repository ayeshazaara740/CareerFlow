// Shared internal-page navigation component.
document.addEventListener('DOMContentLoaded', () => {
  // Keep the logo and wordmark consistent even when individual pages use older header markup.
  document.querySelectorAll('.brand').forEach((brand) => {
    brand.href = 'index.html';
    brand.setAttribute('aria-label', 'CareerFlow home');
    brand.innerHTML = '<img class="brand-logo" src="assets/images/logo.svg" alt="CareerFlow logo"><span class="brand-name">CareerFlow</span>';
  });
  if (location.pathname.toLowerCase().endsWith('/index.html') || location.pathname === '/') return;
  const header = document.querySelector('.site-header, header');
  if (!header || document.querySelector('.back-home-wrap')) return;
  const wrapper = document.createElement('div');
  wrapper.className = 'back-home-wrap';
  wrapper.innerHTML = '<div class="container"><a class="back-home" href="index.html" aria-label="Back to Home"><span aria-hidden="true">←</span><span>Back to Home</span></a></div>';
  header.insertAdjacentElement('afterend', wrapper);
});
