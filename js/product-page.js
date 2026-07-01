(function () {
  'use strict';

  function resolveProductId() {
    if (window.SciEngCatalog && window.SciEngCatalog.resolveProductIdFromLocation) {
      return window.SciEngCatalog.resolveProductIdFromLocation();
    }
    var params = new URLSearchParams(window.location.search);
    var id = params.get('id');
    if (id) return id.trim();
    var hash = (window.location.hash || '').replace(/^#/, '').trim();
    if (hash) return hash.indexOf('=') !== -1 ? (new URLSearchParams(hash).get('id') || hash) : hash;
    var match = window.location.pathname.match(/\/product\/([^/]+)\/?$/i);
    return match ? decodeURIComponent(match[1]) : null;
  }

  function renderNotFound() {
    document.title = 'Component Not Found | SciEngTech';
    var main = document.getElementById('productMain');
    if (!main) return;
    main.innerHTML =
      '<div class="wrap product-not-found"><h1>Specification not found</h1>' +
      '<p style="color:var(--text-muted);margin-bottom:24px">Browse the catalog or submit an RFQ.</p>' +
      '<div class="product-ctas" style="justify-content:center">' +
      '<a class="btn btn-ruby" href="' + (window.__SITE_BASE__ || '') + 'components.html">Browse Catalog</a></div></div>';
  }

  function renderProduct(product) {
    if (!window.SciEngProductDetail || typeof window.SciEngProductDetail.render !== 'function') {
      renderNotFound();
      return;
    }
    document.title = product.name.replace(/^['']|['']$/g, '') + ' | SciEngTech';
    var base = window.__SITE_BASE__ || '';
    var main = document.getElementById('productMain');
    main.innerHTML = window.SciEngProductDetail.render(product, base);
    window.SciEngProductDetail.initInteractions(main);
    if (window.SciEngCartUI) window.SciEngCartUI.init(main);
  }

  var id = resolveProductId();
  if (!id) {
    renderNotFound();
    return;
  }

  if (!window.SciEngCatalog || typeof window.SciEngCatalog.load !== 'function') {
    renderNotFound();
    return;
  }

  window.SciEngCatalog.load()
    .then(function () {
      var product = window.SciEngCatalog.getById(id);
      if (!product) {
        renderNotFound();
        return;
      }
      renderProduct(product);
    })
    .catch(function () {
      renderNotFound();
    });
})();
