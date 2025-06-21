.then(res => res.text())
.then(data => {
  document.getElementById("nav-placeholder").innerHTML = data;

  // ✅ 修正抓法（你用的是 class="hamburger" 和 id="nav-menu"）
  const toggleBtn = document.querySelector(".hamburger");
  const navLinks = document.getElementById("nav-menu");
  const dropdown = document.querySelector('.dropdown');

  // 漢堡選單開關
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // 手機版下拉選單
  if (dropdown) {
    dropdown.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("open");
    });
  }

  // 點空白處關掉下拉選單
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown.open").forEach(drop => {
      drop.classList.remove("open");
    });
  });
});
