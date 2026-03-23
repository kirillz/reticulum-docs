// Announcement Banner Script
(function() {
  const BANNER_KEY = 'meshcore-banner-closed';

  function closeMeshcoreBanner() {
    const banner = document.getElementById('meshcore-banner');
    if (banner) {
      banner.classList.add('hidden');
      try {
        localStorage.setItem(BANNER_KEY, 'true');
      } catch (e) {
        // localStorage недоступен — игнорируем
      }
    }
  }
  window.closeMeshcoreBanner = closeMeshcoreBanner;

  function initBanner() {
    const banner = document.getElementById('meshcore-banner');
    if (banner) {
      try {
        const isClosed = localStorage.getItem(BANNER_KEY);
        if (!isClosed) {
          banner.classList.remove('hidden');
        } else {
          banner.classList.add('hidden');
        }
      } catch (e) {
        // localStorage недоступен — показываем баннер
        banner.classList.remove('hidden');
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBanner);
  } else {
    initBanner();
  }
})();
