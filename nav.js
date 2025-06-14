document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu   = document.getElementById('nav-menu');

  // 開關主選單
    hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

  // 手機下拉（旅途誌）開關
    const dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
});
});
// 點畫面其他地方，關閉展開的 submenu
document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown.open').forEach(drop => {
    drop.classList.remove('open');
  });
});
