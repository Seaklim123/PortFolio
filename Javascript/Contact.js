// Optional JS if you want to alert when someone clicks a contact link
document.querySelectorAll('.contact-info a').forEach(link => {
  link.addEventListener('click', () => {
    console.log('User clicked:', link.href);
  });
});
