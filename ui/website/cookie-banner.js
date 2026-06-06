// GDPR Cookie Consent Banner - MEOK AI Labs
(function() {
  'use strict';
  
  function setCookie(name, value, days) {
    var expires = '';
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '')  + expires + '; path=/; SameSite=Lax';
  }
  
  function getCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }
  
  function loadGA() {
    // Google Analytics or other tracking scripts here
    console.log('Analytics loaded after consent');
  }
  
  function showBanner() {
    var banner = document.getElementById('cookie-banner');
    if (banner) banner.style.display = 'block';
  }
  
  function hideBanner() {
    var banner = document.getElementById('cookie-banner');
    if (banner) banner.style.display = 'none';
  }
  
  window.acceptCookies = function() {
    setCookie('cookie_consent', 'accepted', 365);
    setCookie('ga_consent', 'granted', 365);
    hideBanner();
    loadGA();
  };
  
  window.rejectCookies = function() {
    setCookie('cookie_consent', 'rejected', 365);
    setCookie('ga_consent', 'denied', 365);
    hideBanner();
  };
  
  // Check if consent already given
  var consent = getCookie('cookie_consent');
  if (!consent) {
    document.addEventListener('DOMContentLoaded', showBanner);
  }
})();
