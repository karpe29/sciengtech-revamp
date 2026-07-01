/**
 * Client-side quote cart (localStorage).
 */
(function (global) {
  'use strict';

  var STORAGE_KEY = 'sciengtech-quote-cart';

  function read() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      var parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  function write(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    document.dispatchEvent(new CustomEvent('quote-cart-updated', { detail: { count: items.length } }));
  }

  function lineKey(item) {
    return String(item.productId || '') + '::' + String(item.sku || '');
  }

  function normalizeItem(item) {
    return {
      productId: String(item.productId || '').trim(),
      sku: String(item.sku || '').trim(),
      name: String(item.name || '').trim(),
      variantLabel: String(item.variantLabel || '').trim(),
      qty: Math.max(1, parseInt(item.qty, 10) || 1),
      addedAt: item.addedAt || Date.now(),
    };
  }

  function addItem(item) {
    var next = normalizeItem(item);
    if (!next.productId && !next.sku && !next.name) return read();

    var items = read();
    var key = lineKey(next);
    var found = false;

    items = items.map(function (existing) {
      if (lineKey(existing) !== key) return existing;
      found = true;
      return Object.assign({}, existing, next, { qty: existing.qty + next.qty });
    });

    if (!found) items.push(next);
    write(items);
    return items;
  }

  function removeItem(productId, sku) {
    var key = lineKey({ productId: productId, sku: sku });
    var items = read().filter(function (item) {
      return lineKey(item) !== key;
    });
    write(items);
    return items;
  }

  function updateQty(productId, sku, qty) {
    var key = lineKey({ productId: productId, sku: sku });
    var nextQty = Math.max(1, parseInt(qty, 10) || 1);
    var items = read().map(function (item) {
      if (lineKey(item) !== key) return item;
      return Object.assign({}, item, { qty: nextQty });
    });
    write(items);
    return items;
  }

  function clear() {
    write([]);
    return [];
  }

  function count() {
    return read().reduce(function (sum, item) {
      return sum + (item.qty || 1);
    }, 0);
  }

  function toBomText() {
    return read()
      .map(function (item) {
        var sku = item.sku || item.productId || '—';
        var label = item.name || item.productId || 'Item';
        var variant = item.variantLabel ? ' (' + item.variantLabel + ')' : '';
        return sku + ' × ' + item.qty + ' — ' + label + variant;
      })
      .join('\n');
  }

  global.SciEngQuoteCart = {
    read: read,
    addItem: addItem,
    removeItem: removeItem,
    updateQty: updateQty,
    clear: clear,
    count: count,
    toBomText: toBomText,
  };
})(typeof window !== 'undefined' ? window : globalThis);
