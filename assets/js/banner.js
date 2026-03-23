/**
 * Announcement Banner Script
 * Shows/hides the announcement banner with localStorage persistence
 */
(function() {
  'use strict';

  const BANNER_KEY = 'meshcore-banner-closed';
  const BANNER_ID = 'meshcore-banner';

  /**
   * Close the banner and save preference
   */
  function closeBanner() {
    const banner = document.getElementById(BANNER_ID);
    if (!banner) return;

    banner.classList.add('hidden');
    safeStorageSet(BANNER_KEY, 'true');
  }

  /**
   * Initialize banner visibility
   */
  function initBanner() {
    const banner = document.getElementById(BANNER_ID);
    if (!banner) return;

    const isClosed = safeStorageGet(BANNER_KEY);
    banner.classList.toggle('hidden', isClosed);
  }

  /**
   * Safe localStorage get (handles disabled storage)
   */
  function safeStorageGet(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  /**
   * Safe localStorage set (handles disabled storage)
   */
  function safeStorageSet(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      // Storage disabled or full — ignore
    }
  }

  // Expose close function globally
  window.closeMeshcoreBanner = closeBanner;

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBanner);
  } else {
    initBanner();
  }
})();
