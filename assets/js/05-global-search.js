/* === GLOBAL SEARCH — Fuse.js fuzzy search across CONTENT + CATALOGUE ===
   Работает с существующим overlay #search-overlay */

(function(){
  'use strict';

  var fuse = null;
  var allItems = [];

  function buildIndex() {
    allItems = [];
    var i, j;
    var lg = (typeof lang !== 'undefined') ? lang : 'en';

    /* === Каталог: 21 товар === */
    if (typeof CATALOGUE !== 'undefined' && CATALOGUE) {
      for (i = 0; i < CATALOGUE.length; i++) {
        var item = CATALOGUE[i];
        var divLabel = item.div === 'mine'
          ? {en:'Mine Division', es:'División Minería', pl:'Dział Górnictwo'}[lg]
          : item.div === 'recycling'
          ? {en:'Recycling Division', es:'División Reciclaje', pl:'Dział Recykling'}[lg]
          : 'Construction Division';
        allItems.push({
          type: 'equipment',
          title: item['title_' + lg] || item.title_en || '',
          subtitle: divLabel,
          desc: item['short_' + lg] || item['desc_' + lg] || '',
          url: 'pages/equipment.html?id=' + item.id,
          tag: divLabel,
          icon: item.div === 'mine' ? '⚒️' : item.div === 'recycling' ? '♻️' : '🏗️'
        });
      }
    }

    /* === Разделы сайта (из CONTENT.divisions + services) === */
    if (typeof CONTENT !== 'undefined' && CONTENT.divisions) {
      for (i = 0; i < CONTENT.divisions.length; i++) {
        var d = CONTENT.divisions[i];
        allItems.push({
          type: 'section',
          title: d['name_' + lg] || d.name_en || '',
          subtitle: {en:'Division', es:'División', pl:'Dział'}[lg],
          desc: (d.services || []).map(function(s){ return s['title_' + lg] || s.title_en; }).join(' · '),
          url: '#divsec-' + d.id,
          tag: d.cls,
          icon: '📂'
        });
        if (d.services) {
          for (j = 0; j < d.services.length; j++) {
            var s = d.services[j];
            allItems.push({
              type: 'service',
              title: s['title_' + lg] || s.title_en || '',
              subtitle: d['name_' + lg] || d.name_en,
              desc: s['desc_' + lg] || s.desc_en || '',
              url: '#svc-' + s.id,
              tag: d.cls,
              icon: '🔧'
            });
          }
        }
      }
    }

    /* === Статические страницы === */
    var uiStrings = (typeof UI !== 'undefined' && UI[lg]) ? UI[lg] : {};
    allItems.push({
      type: 'page',
      title: uiStrings['ui.about'] || 'About Us',
      subtitle: 'MCR Planet',
      desc: 'Engineering, geology, innovation',
      url: '#about',
      icon: '📖'
    });
    allItems.push({
      type: 'page',
      title: uiStrings['ui.contact'] || 'Contacts',
      subtitle: 'MCR Planet',
      desc: 'Get in touch, email, company info',
      url: '#contact',
      icon: '📧'
    });
    allItems.push({
      type: 'page',
      title: {en:'Privacy Policy', es:'Política de Privacidad', pl:'Polityka Prywatności'}[lg],
      subtitle: 'Legal',
      desc: 'GDPR, cookies, data processing',
      url: 'pages/privacy.html',
      icon: '📜'
    });
    allItems.push({
      type: 'page',
      title: {en:'Terms of Service', es:'Términos del Servicio', pl:'Warunki Korzystania'}[lg],
      subtitle: 'Legal',
      desc: 'Terms, conditions',
      url: 'pages/terms.html',
      icon: '📜'
    });

    /* Инициализация Fuse */
    if (typeof Fuse !== 'undefined') {
      fuse = new Fuse(allItems, {
        keys: [
          { name: 'title', weight: 3 },
          { name: 'subtitle', weight: 1.2 },
          { name: 'desc', weight: 1 }
        ],
        threshold: 0.4,
        distance: 80,
        includeScore: true,
        minMatchCharLength: 2
      });
    }
  }

  /* Рендер результатов */
  function renderResults(query) {
    var box = document.getElementById('search-results');
    if (!box) return;
    if (!query || query.length < 2) {
      box.innerHTML = '';
      return;
    }
    if (!fuse) {
      buildIndex();
      if (!fuse) {
        box.innerHTML = '<div class="search-empty">Fuse.js not loaded</div>';
        return;
      }
    }
    var results = fuse.search(query).slice(0, 10);
    if (!results.length) {
      var empty = {en:'Nothing found', es:'Nada encontrado', pl:'Nic nie znaleziono'}[lang || 'en'] || 'Nothing found';
      box.innerHTML = '<div class="search-empty">' + empty + '</div>';
      return;
    }
    var html = '';
    for (var i = 0; i < results.length; i++) {
      var item = results[i].item;
      html += '<div class="search-item" data-url="' + escapeAttr(item.url) + '" data-type="' + item.type + '">' +
        '<span class="search-item-icon">' + item.icon + '</span>' +
        '<span class="search-item-tag">' + escapeHtml(item.subtitle) + '</span>' +
        '<span class="search-item-name">' + escapeHtml(item.title) + '</span>' +
        '</div>';
    }
    box.innerHTML = html;
    /* Клик по результату */
    var items = box.querySelectorAll('.search-item');
    for (var j = 0; j < items.length; j++) {
      items[j].addEventListener('click', function(){
        var url = this.getAttribute('data-url');
        closeSearch();
        if (url.indexOf('#') === 0) {
          /* Якорь — scroll */
          var target = document.querySelector(url);
          if (target) target.scrollIntoView({behavior: 'smooth', block: 'start'});
        } else {
          window.location.href = url;
        }
      });
    }
  }

  function escapeHtml(s) {
    return String(s || '').replace(/[&<>"']/g, function(c){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
    });
  }
  function escapeAttr(s) { return escapeHtml(s); }

  function openSearch() {
    var ov = document.getElementById('search-overlay');
    if (ov) ov.className = 'open';
    var inp = document.getElementById('search-input');
    if (inp) setTimeout(function(){ inp.focus(); }, 50);
    /* Ленивая инициализация индекса */
    if (!fuse && typeof Fuse !== 'undefined') buildIndex();
  }
  function closeSearch() {
    var ov = document.getElementById('search-overlay');
    if (ov) ov.className = '';
    var inp = document.getElementById('search-input');
    if (inp) inp.value = '';
    var box = document.getElementById('search-results');
    if (box) box.innerHTML = '';
  }

  /* Перестраиваем индекс при смене языка */
  var _origSetLang = window.setLang;
  if (typeof _origSetLang === 'function') {
    window.setLang = function(l){
      var r = _origSetLang.apply(this, arguments);
      buildIndex();
      return r;
    };
  }

  /* Инициализация */
  function init() {
    /* Хоткей Ctrl+K / Cmd+K */
    document.addEventListener('keydown', function(e){
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      }
      if (e.key === 'Escape') closeSearch();
    });
    /* Клик по overlay-фону закрывает */
    var ov = document.getElementById('search-overlay');
    if (ov) {
      ov.addEventListener('click', function(e){
        if (e.target === ov) closeSearch();
      });
    }
    /* Input — live search */
    var inp = document.getElementById('search-input');
    if (inp) {
      inp.addEventListener('input', function(){
        renderResults(inp.value.trim());
      });
    }
    /* Кнопка-лупа в nav открывает глобальный поиск */
    var navSearch = document.getElementById('nav-search-input');
    if (navSearch) {
      /* Перехватываем фокус — открываем глобальный overlay вместо старого поиска */
      /* Но не ломаем старое поведение — только если пусто */
      navSearch.addEventListener('focus', function(){
        /* Ничего не делаем, чтобы не мешать старому поведению */
      });
    }
    /* Мобильная лупа */
    var mobSearchBtn = document.getElementById('mob-search-btn');
    if (mobSearchBtn) {
      /* Старое поведение остаётся, глобальный поиск доступен через Ctrl+K */
    }

    /* Плейсхолдер поиска по языку */
    function updatePlaceholder() {
      var inp2 = document.getElementById('search-input');
      if (!inp2) return;
      var lg = (typeof lang !== 'undefined') ? lang : 'en';
      var ph = {
        en: 'Search everything... (Ctrl+K)',
        es: 'Buscar todo... (Ctrl+K)',
        pl: 'Szukaj wszędzie... (Ctrl+K)'
      };
      inp2.placeholder = ph[lg] || ph.en;
    }
    updatePlaceholder();
    setInterval(updatePlaceholder, 2000); /* обновлять плейсхолдер при смене языка */
  }

  /* Экспортируем */
  window.openGlobalSearch = openSearch;
  window.closeGlobalSearch = closeSearch;
  window.rebuildSearchIndex = buildIndex;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* Когда CONTENT и CATALOGUE уже готовы — билдим индекс */
  setTimeout(function(){
    if (typeof Fuse !== 'undefined' && typeof CONTENT !== 'undefined') buildIndex();
  }, 800);
})();
