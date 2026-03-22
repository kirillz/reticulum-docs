// Announcement Banner Script
(function() {
  const BANNER_KEY = 'meshcore-banner-closed';

  function closeMeshcoreBanner() {
    var banner = document.getElementById('meshcore-banner');
    if (banner) {
      banner.classList.add('hidden');
      localStorage.setItem(BANNER_KEY, 'true');
    }
  }
  window.closeMeshcoreBanner = closeMeshcoreBanner;

  function initBanner() {
    var banner = document.getElementById('meshcore-banner');
    if (banner) {
      // Проверяем, закрыт ли баннер
      var isClosed = localStorage.getItem(BANNER_KEY);
      if (!isClosed) {
        // Баннер должен быть виден - убираем класс hidden
        banner.classList.remove('hidden');
      } else {
        // Баннер закрыт - добавляем класс hidden
        banner.classList.add('hidden');
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBanner);
  } else {
    initBanner();
  }
})();
