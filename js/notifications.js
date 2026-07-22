function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.dataset.type = type;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2400);
}
