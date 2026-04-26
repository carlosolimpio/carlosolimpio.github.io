const sidebarMarkup = `
  <aside class="sidebar">
    <div class="sidebar__brand">
      <img class="profile-photo" src="assets/eu_ae.jpg" alt="Portrait of Carlos Olimpio">
      <h1>Carlos Olimpio</h1>
      <nav class="nav" aria-label="Main navigation">
        <a class="nav__link" data-page="about" href="index.html">About Me</a>
        <a class="nav__link" data-page="resume" href="resume.html">Resume</a>
      </nav>
    </div>

    <div class="sidebar__contacts">
      <p class="sidebar__label">Contact</p>
      <a class="contact-link" href="mailto:carlossolimpio@gmail.com">
        <span class="contact-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25zm1.75-.25a.25.25 0 0 0-.25.25v.2l7.5 5.14 7.5-5.14v-.2a.25.25 0 0 0-.25-.25zm14.75 2.26-6.94 4.75a1 1 0 0 1-1.12 0L4.5 8.76v8.49c0 .14.11.25.25.25h14.5a.25.25 0 0 0 .25-.25z"/>
          </svg>
        </span>
        <span>carlossolimpio@gmail.com</span>
      </a>
      <a class="contact-link" href="https://github.com/carlosolimpio" target="_blank" rel="noreferrer">
        <span class="contact-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256 0-1.123.404-2.336 1.078-3.144-.292-.741-.247-2.314.09-2.965.898-.112 2.111.36 2.83 1.01.853-.269 1.752-.404 2.853-.404 1.1 0 1.999.135 2.807.382.696-.629 1.932-1.1 2.83-.988.315.606.36 2.179.067 2.942.72.854 1.101 2 1.101 3.167 0 2.763-2.089 4.852-5.098 5.234.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786 4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1 5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313-.247-.607-.517-.966-1.034-1.033-.27-.023-.359-.135-.359-.27 0-.27.45-.471.898-.471.652 0 1.213.404 1.797 1.235.45.651.921.943 1.483.943.561 0 .92-.202 1.437-.719.382-.381.674-.718.944-.943"/>
          </svg>
        </span>
        <span>/carlosolimpio</span>
      </a>
      <a class="contact-link" href="https://www.linkedin.com/in/carlosolimpio" target="_blank" rel="noreferrer">
        <span class="contact-icon" aria-hidden="true">
          <svg viewBox="0 0 16 16" focusable="false">
            <path d="M14.5455 0H1.45455C0.650909 0 0 0.650909 0 1.45455V14.5455C0 15.3491 0.650909 16 1.45455 16H14.5455C15.3491 16 16 15.3491 16 14.5455V1.45455C16 0.650909 15.3491 0 14.5455 0ZM5.05746 13.0909H2.912V6.18764H5.05746V13.0909ZM3.96291 5.20073C3.27127 5.20073 2.712 4.64 2.712 3.94982C2.712 3.25964 3.272 2.69964 3.96291 2.69964C4.65236 2.69964 5.21309 3.26036 5.21309 3.94982C5.21309 4.64 4.65236 5.20073 3.96291 5.20073ZM13.0938 13.0909H10.9498V9.73382C10.9498 8.93309 10.9353 7.90327 9.83491 7.90327C8.71855 7.90327 8.54691 8.77527 8.54691 9.67564V13.0909H6.40291V6.18764H8.46109V7.13091H8.49018C8.77673 6.58836 9.47636 6.016 10.52 6.016C12.6924 6.016 13.0938 7.44582 13.0938 9.30473V13.0909V13.0909Z"/>
          </svg>
        </span>
        <span>in/carlosolimpio</span>
      </a>
    </div>
  </aside>
`;

function mountSidebar() {
  const root = document.querySelector("[data-sidebar-root]");
  if (!root) return;

  root.innerHTML = sidebarMarkup;

  const currentPage = root.getAttribute("data-page");
  const activeLink = root.querySelector(`.nav__link[data-page="${currentPage}"]`);
  if (activeLink) {
    activeLink.classList.add("nav__link--active");
    activeLink.setAttribute("aria-current", "page");
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountSidebar);
} else {
  mountSidebar();
}
