document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById("toggle");
  const navLinks = document.getElementById("nav-menu");
  const dropdown = document.getElementById("dropdown_btn");

  // 點漢堡 → 展開選單
  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // 點 dropdown → 開啟下拉
  dropdown.addEventListener("click", (e) => {
    e.stopPropagation(); // 不讓事件冒泡
    dropdown.classList.toggle("open");
  });

  // 點空白 → 關閉 dropdown
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown.open").forEach(drop => {
      drop.classList.remove("open");
    });
  });
});

