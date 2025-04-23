// Optional: All links open in new tab
document.querySelectorAll('a').forEach(link => {
    link.setAttribute('target', '_blank');
  });
  
  // Optional: Alert on email click (just an example)
  const emailLink = document.querySelector('.email-link');
  if (emailLink) {
    emailLink.addEventListener('click', () => {
      alert('Opening your default email app...');
    });
  }
  
  // Optional: Add hover effect or interaction later here
  