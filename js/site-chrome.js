(function () {
  'use strict';

  var base = window.__SITE_BASE__ || '';

  function inject(id, url) {
    var el = document.getElementById(id);
    if (!el) return Promise.resolve();
    return fetch(base + url)
      .then(function (r) {
        if (!r.ok) throw new Error(url);
        return r.text();
      })
      .then(function (html) {
        el.innerHTML = html.replace(/\{\{BASE\}\}/g, base);
      })
      .catch(function () {
        /* offline or missing partial */
      });
  }

  function fixMegaFooter() {
    var foot = document.querySelector('.mega-footer span');
    if (foot && foot.textContent.indexOf('components/search') !== -1) {
      foot.textContent = 'Every component · Request Technical Quote';
    }
  }

  function isMobileNav() {
    return window.matchMedia('(max-width: 1024px)').matches;
  }

  function initMegaMenu() {
    var items = document.querySelectorAll('.nav-item.has-mega');
    if (!items.length) return;

    items.forEach(function (item) {
      var trigger = item.querySelector('.nav-trigger');
      var panel = item.querySelector('.mega-panel');
      if (!trigger || !panel) return;

      trigger.setAttribute('aria-haspopup', 'true');
      trigger.setAttribute('aria-expanded', 'false');

      var closeTimer;

      function open() {
        clearTimeout(closeTimer);
        items.forEach(function (other) {
          if (other !== item) {
            other.classList.remove('is-open');
            var otherTrigger = other.querySelector('.nav-trigger');
            if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          }
        });
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }

      function scheduleClose() {
        if (isMobileNav()) return;
        clearTimeout(closeTimer);
        closeTimer = setTimeout(function () {
          item.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        }, 150);
      }

      trigger.addEventListener('mouseenter', function () {
        if (!isMobileNav()) open();
      });
      panel.addEventListener('mouseenter', function () {
        if (!isMobileNav()) open();
      });
      trigger.addEventListener('mouseleave', scheduleClose);
      panel.addEventListener('mouseleave', scheduleClose);

      trigger.addEventListener('click', function () {
        if (item.classList.contains('is-open')) {
          item.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
          trigger.blur();
        } else {
          open();
        }
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      items.forEach(function (item) {
        item.classList.remove('is-open');
        var trigger = item.querySelector('.nav-trigger');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function initMobileNav() {
    var header = document.querySelector('.site-header');
    var toggle = document.getElementById('navMenuToggle');
    var backdrop = document.getElementById('mobileNavBackdrop');
    if (!header || !toggle) return;

    function closeNav() {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      document.body.classList.remove('mobile-nav-lock');
      if (backdrop) backdrop.hidden = true;
    }

    function openNav() {
      header.classList.add('nav-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
      document.body.classList.add('mobile-nav-lock');
      if (backdrop) backdrop.hidden = false;
    }

    toggle.addEventListener('click', function () {
      if (header.classList.contains('nav-open')) {
        closeNav();
      } else {
        openNav();
      }
    });

    if (backdrop) {
      backdrop.addEventListener('click', closeNav);
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('nav-open')) {
        closeNav();
      }
    });

    window.addEventListener('resize', function () {
      if (!isMobileNav()) closeNav();
    });

    header.querySelectorAll('.main-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (isMobileNav()) closeNav();
      });
    });
  }

  Promise.all([
    inject('site-header', 'partials/header.html'),
    inject('site-footer', 'partials/footer.html'),
    inject('site-search', 'partials/search-panel.html'),
  ]).then(function () {
    fixMegaFooter();
    initMegaMenu();
    initMobileNav();
    document.dispatchEvent(new CustomEvent('site-chrome-ready'));
    if (window.SciEngHeaderSearch && window.SciEngHeaderSearch.init) {
      window.SciEngHeaderSearch.init();
    }
  });
})();
