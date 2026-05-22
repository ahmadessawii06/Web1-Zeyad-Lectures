// Component generation functions
function createHeader() {
  return `
    <header>
      <h1>
        <i class="fas fa-star"></i> Web1 Lectures - Eng.
        <a class="line" target="_blank" href="https://github.com/zeiadhabbab">Zeyad Habbab</a>
        2025/2026
        <i class="fas fa-star"></i>
      </h1>
      <h1>
        <i class="fas fa-copyright"></i>By:
        <a class="line" href="https://github.com/ahmadessawii06" target="_blank">Ahmad Essawii</a>
        <i class="fas fa-copyright"></i>
      </h1>
     
      <div class="resource-row">
        <span class="resource-badge slides">
          <i class="fas fa-file-powerpoint"></i>
          <a target="_blank" href="https://drive.google.com/drive/folders/174jcAmJw1S_D28iR47UDNnyEXZGvj_tz?usp=sharing">Slides (Git+HTML+CSS)</a>
        </span>
        <span class="resource-badge jsfund">
          <i class="fas fa-book-open"></i>
          <a target="_blank" href="https://ahmadessawii06.github.io/JavaScript-Fundamentals/">JS Fundamentals</a>
        </span>
        <span class="resource-badge react">
          <i class="fab fa-react"></i>
          <a target="_blank" href="https://react.dev/learn">React.dev</a>
        </span>
      </div>
    </header>
  `;
}

function createLectureColumn(category, data) {
  const lecturesHTML = data.lectures.map(lecture => `
    <div class="lecture-card ${category}">
      <div class="lecture-header">
        <span class="lecture-number">${lecture.number}</span>
      </div>
      <div class="action-container">
        <button class="watch-btn" onclick="window.open('${lecture.url}', '_blank')">
          <i class="fas fa-play-circle"></i> Watch Lecture
        </button>
      </div>
    </div>
  `).join('');

  return `
    <div class="lecture-column">
      <div class="column-header"><i class="${data.icon}"></i> ${data.title}</div>
      ${lecturesHTML}
    </div>
  `;
}

function createLecturesContainer() {
  let html = '<div class="lectures-container">';
  
  for (const [category, data] of Object.entries(lecturesData)) {
    html += createLectureColumn(category, data);
  }
  
  html += '</div>';
  return html;
}

function createFooter() {
  return `
    <div class="footer">
      <p>
        Designed by <strong>AhmadEssawii</strong> · Git, HTML, CSS, JavaScript
        · An-Najah National University
      </p>
      <p><i class="far fa-copyright"></i> 2026 All rights reserved</p>
    </div>
  `;
}