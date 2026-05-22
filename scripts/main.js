// Main initialization
document.addEventListener('DOMContentLoaded', function() {
  // Render header
  const headerContainer = document.getElementById('header');
  if (headerContainer) {
    headerContainer.innerHTML = createHeader();
  }
  
  // Render lectures container
  const lecturesContainer = document.getElementById('lectures-container');
  if (lecturesContainer) {
    lecturesContainer.innerHTML = createLecturesContainer();
  }
  
  // Render footer
  const footerContainer = document.getElementById('footer');
  if (footerContainer) {
    footerContainer.innerHTML = createFooter();
  }
});