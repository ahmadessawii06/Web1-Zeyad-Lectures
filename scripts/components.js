// Component generation functions

function createHeader() {
  return `
    <header class="site-header">
      <div class="header-top">
        <div class="course-brand">
          <div class="course-icon">
            <i class="fas fa-graduation-cap"></i>
          </div>

          <div class="course-info">
            <h1>Web1  Lectures</h1>
            <p>
              Eng. <a href="https://github.com/zeiadhabbab"
                target="_blank" rel="noopener noreferrer">
                Zeyad Habbab
              </a>
              <span class="meta-dot">·</span>
              2025/2026
            </p>
          </div>
        </div>

        <span class="course-tag">WEB 1</span>
      </div>

      <div class="header-divider"></div>

      <div class="header-meta">
        <span class="developer-credit">
          <i class="fas fa-code"></i>
          Developed by
          <a href="https://github.com/ahmadessawii06"
            target="_blank" rel="noopener noreferrer">
            Ahmad Essawii
          </a>
        </span>

        <span class="resource-label">
          LEARNING RESOURCES
        </span>
      </div>

      <nav class="resource-row" aria-label="Course resources">
        <a class="resource-card slides"
          href="https://drive.google.com/drive/folders/174jcAmJw1S_D28iR47UDNnyEXZGvj_tz?usp=sharing"
          target="_blank" rel="noopener noreferrer">
          <span class="resource-icon">
            <i class="fas fa-file-powerpoint"></i>
          </span>
          <span class="resource-content">
            <strong>Slides</strong>
            <small>Git · GitHub · HTML · CSS</small>
          </span>
          <i class="fas fa-arrow-up-right-from-square resource-arrow"></i>
        </a>

        <a class="resource-card jsfund"
          href="https://ahmadessawii06.github.io/JavaScript-Fundamentals/"
          target="_blank" rel="noopener noreferrer">
          <span class="resource-icon">
            <i class="fas fa-book-open"></i>
          </span>
          <span class="resource-content">
            <strong>JavaScript Fundamentals</strong>
            <small>JavaScript learning</small>
          </span>
          <i class="fas fa-arrow-up-right-from-square resource-arrow"></i>
        </a>

        <a class="resource-card react"
          href="https://react.dev/learn"
          target="_blank" rel="noopener noreferrer">
          <span class="resource-icon">
            <i class="fab fa-react"></i>
          </span>
          <span class="resource-content">
            <strong>React</strong>
            <small>Official documentation</small>
          </span>
          <i class="fas fa-arrow-up-right-from-square resource-arrow"></i>
        </a>
      </nav>
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