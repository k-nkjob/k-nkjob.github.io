const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuButton.classList.toggle("active", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}

const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// Work 04 is injected here so the existing Work 01-03 markup/design remains untouched.
const worksGrid = document.querySelector(".works-grid");

if (worksGrid && !document.querySelector("[data-work='04']")) {
  const work04Styles = document.createElement("link");
  work04Styles.rel = "stylesheet";
  work04Styles.href = "work04.css?v=1";
  document.head.appendChild(work04Styles);

  const work04 = document.createElement("article");
  work04.className = "work-card";
  work04.dataset.work = "04";
  work04.innerHTML = `
    <div class="work-image work04-completed-visual">
      <span class="work04-number">04</span><span class="work04-status">COMPLETED</span>
      <div class="store-work-art" aria-hidden="true">
        <div class="storefront-art"><span class="store-window-art"></span></div>
        <div class="cart-art"></div>
        <span class="store-art-label">WP / WOO / PHP</span>
      </div>
    </div>
    <div class="work-content">
      <p class="work-type">WORDPRESS / E-COMMERCE</p>
      <h3>KNKJOB STORE</h3>
      <p>WordPress / WooCommerceで構築したECサイトです。バリエーション商品、SKU・在庫管理、カートを設定し、WooCommerce Hooksを使った専用PHPプラグインでパンくず、ECトップ、商品仕様、在庫表示、発送案内、レスポンシブUIをカスタマイズしました。</p>
      <div class="work-tags"><span>WordPress</span><span>WooCommerce</span><span>PHP</span><span>JavaScript</span><span>CSS</span><span>Responsive</span></div>
      <div class="work-links"><a href="https://knkjob-store.infinityfreeapp.com/" target="_blank" rel="noopener noreferrer">Live Demo ↗</a></div>
    </div>
  `;
  worksGrid.appendChild(work04);
}
