/**
 * Add-to-cart buttons and header badge.
 */
(function (global) {
  'use strict';

  function base() {
    return global.__SITE_BASE__ || '';
  }

  function checkoutUrl() {
    return base() + 'engineering/rfq.html';
  }

  function flashMessage(el, text) {
    if (!el) return;
    var prev = el.getAttribute('data-cart-flash');
    if (prev) el.removeAttribute('data-cart-flash');
    el.setAttribute('data-cart-flash', text);
    el.textContent = text;
    setTimeout(function () {
      if (el.getAttribute('data-cart-flash') === text) {
        el.removeAttribute('data-cart-flash');
        el.textContent = 'Add to Cart';
      }
    }, 1600);
  }

  function updateBadge() {
    var badge = document.getElementById('cartCount');
    if (!badge || !global.SciEngQuoteCart) return;
    var n = global.SciEngQuoteCart.count();
    badge.textContent = String(n);
    badge.hidden = n <= 0;
    badge.setAttribute('aria-label', n + ' item' + (n === 1 ? '' : 's') + ' in cart');
  }

  function handleAddClick(btn) {
    if (!global.SciEngQuoteCart) return;
    global.SciEngQuoteCart.addItem({
      productId: btn.getAttribute('data-product-id') || '',
      sku: btn.getAttribute('data-sku') || '',
      name: btn.getAttribute('data-name') || '',
      variantLabel: btn.getAttribute('data-variant-label') || '',
      qty: parseInt(btn.getAttribute('data-qty') || '1', 10) || 1,
    });
    flashMessage(btn, 'Added ✓');
    updateBadge();
  }

  function bindRoot(root) {
    if (!root) return;
    root.querySelectorAll('[data-add-to-cart]').forEach(function (btn) {
      if (btn.__cartBound) return;
      btn.__cartBound = true;
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        handleAddClick(btn);
      });
    });
  }

  function init(root) {
    bindRoot(root || document);
    updateBadge();
  }

  document.addEventListener('quote-cart-updated', updateBadge);
  document.addEventListener('site-chrome-ready', function () {
    init(document);
  });

  global.SciEngCartUI = {
    init: init,
    updateBadge: updateBadge,
    checkoutUrl: checkoutUrl,
  };
})(typeof window !== 'undefined' ? window : globalThis);
