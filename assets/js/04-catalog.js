/* === CATALOGUE DATA, RENDER, HCAPTCHA, MOBILE SEARCH === */
/* CATALOGUE загружается из catalog-data.js */
if (typeof CATALOGUE === "undefined") { var CATALOGUE = { mine: [], recycling: [] }; }


var currentFilter = 'all';

function renderCatalogue() {
  var content = document.getElementById('cat-content');
  if (!content) return;
  var cl = (typeof lang !== 'undefined') ? lang : 'en';
  /* Переводим заголовок и описание */
  var catTitles = {en:'Equipment Catalogue', es:'Catálogo de Equipos', pl:'Katalog Sprzętu'};
  var catDescs = {
    en:'Comprehensive supply of industrial equipment and processing technologies for mining waste reprocessing, recycling, and biofuel production. Select a category to explore our solutions.',
    es:'Suministro integral de equipos industriales y tecnologías de procesamiento para el reprocesamiento de residuos mineros, reciclaje y producción de biocombustibles. Seleccione una categoría.',
    pl:'Kompleksowa dostawa sprzętu przemysłowego i technologii przetwarzania do przeróbki odpadów górniczych, recyklingu i produkcji biopaliw. Wybierz kategorię.'
  };
  var catFilterLabels = {en:['All Equipment','Mine Division','Recycling Division'], es:['Todo el Equipo','División Minería','División Reciclaje'], pl:['Cały Sprzęt','Dział Górnictwo','Dział Recykling']};
  var comingSoonText = {en:'Equipment catalogue is being prepared. Please contact us for specific inquiries.', es:'El catálogo de equipos está en preparación. Contáctenos para consultas específicas.', pl:'Katalog sprzętu jest w przygotowaniu. Skontaktuj się z nami w sprawie zapytań.'};
  var catTitleEl = document.querySelector('#catalog-overlay .cat-title');
  var catDescEl  = document.querySelector('#catalog-overlay .cat-desc');
  if (catTitleEl) catTitleEl.textContent = catTitles[cl] || catTitles.en;
  if (catDescEl)  catDescEl.textContent  = catDescs[cl]  || catDescs.en;
  var filters = document.querySelectorAll('#catalog-overlay .cat-filter');
  var labels = catFilterLabels[cl] || catFilterLabels.en;
  for (var fi = 0; fi < filters.length && fi < labels.length; fi++) {
    filters[fi].textContent = labels[fi];
  }
  content.innerHTML = '';
  var divNamesMap = {mine:{en:'Mine Division',es:'División Minería',pl:'Dział Górnictwo'}, recycling:{en:'Recycling Division',es:'División Reciclaje',pl:'Dział Recykling'}};
  var divColors = {mine:'mine', recycling:'recycling'};
  var hasContent = false;
  Object.keys(CATALOGUE).forEach(function(div) {
    if (currentFilter !== 'all' && currentFilter !== div) return;
    var items = CATALOGUE[div] || [];
    if (items.length === 0 && currentFilter === 'all') return;
    if (items.length > 0) hasContent = true;
    var divName = (divNamesMap[div] && divNamesMap[div][cl]) || divNamesMap[div].en;
    var head = document.createElement('div');
    head.className = 'cat-section-head';
    var htitle = document.createElement('h2');
    htitle.className = 'cat-section-title';
    var dot = document.createElement('span');
    dot.className = 'cat-section-dot ' + divColors[div];
    htitle.appendChild(dot);
    htitle.appendChild(document.createTextNode(divName));
    head.appendChild(htitle);
    content.appendChild(head);
    var grid = document.createElement('div');
    grid.className = 'cat-grid';
    items.forEach(function(item) {
      var itemTitle = item['title_' + cl] || item.title_en || '';
      var itemDesc  = item['short_' + cl] || item.short_en || item['desc_'  + cl] || item.desc_en  || '';
      var itemImg   = (item.images && item.images[0]) || item.image || '';
      /* Короткий teaser: первое предложение или 110 символов */
      var teaser = itemDesc;
      var dotIdx = teaser.indexOf('. ');
      if (dotIdx > 30 && dotIdx < 140) teaser = teaser.substr(0, dotIdx + 1);
      else if (teaser.length > 130) teaser = teaser.substr(0, 130).replace(/\s+\S*$/, '') + '…';

      /* Карточка как ссылка <a> — это даёт SEO, шаринг и shift+click "open in new tab" */
      var card = document.createElement('a');
      card.className = 'cat-card ' + div;
      card.setAttribute('data-id', item.id || '');
      card.setAttribute('href', 'pages/equipment.html?id=' + encodeURIComponent(item.id || ''));

      /* Превью-картинка */
      var imgWrap = document.createElement('div');
      imgWrap.className = 'cat-card-img';
      if (itemImg) {
        var img = document.createElement('img');
        img.src = itemImg;
        img.alt = itemTitle;
        img.loading = 'lazy';
        imgWrap.appendChild(img);
      } else {
        imgWrap.classList.add('cat-card-img-empty');
        imgWrap.textContent = 'MCR Planet';
      }

      var tag = document.createElement('div');
      tag.className = 'cat-card-tag ' + div;
      tag.textContent = divName;

      var t = document.createElement('h3');
      t.className = 'cat-card-title';
      t.textContent = itemTitle;

      var d = document.createElement('p');
      d.className = 'cat-card-desc';
      d.textContent = teaser;

      var viewLabels = {en:'View Details →', es:'Ver Detalles →', pl:'Zobacz Szczegóły →'};
      var link = document.createElement('span');
      link.className = 'cat-card-link';
      link.textContent = viewLabels[cl] || viewLabels.en;

      card.appendChild(imgWrap);
      var body = document.createElement('div');
      body.className = 'cat-card-body';
      body.appendChild(tag);
      body.appendChild(t);
      body.appendChild(d);
      body.appendChild(link);
      if (item.partner && (item.partner[cl] || item.partner.en)) {
        var partner = document.createElement('div');
        partner.className = 'cat-card-partner';
        partner.innerHTML = item.partner[cl] || item.partner.en;
        body.appendChild(partner);
      }
      card.appendChild(body);

      grid.appendChild(card);
    });
    content.appendChild(grid);
  });
  /* Заглушка если нет контента */
  if (!hasContent) {
    var emptyDiv = document.createElement('div');
    emptyDiv.style.cssText = 'padding:60px 52px;text-align:center;color:var(--text-3);font-family:"Nunito",sans-serif;font-size:.9rem;line-height:1.8;';
    var emptyIcon = document.createElement('div');
    emptyIcon.style.cssText = 'font-size:2rem;margin-bottom:16px;opacity:.4;';
    emptyIcon.textContent = '⚙';
    var emptyText = document.createElement('p');
    emptyText.textContent = comingSoonText[cl] || comingSoonText.en;
    var emptyBtn = document.createElement('button');
    emptyBtn.style.cssText = 'margin-top:24px;background:transparent;border:1px solid var(--gold);color:var(--gold);font-family:"Nunito",sans-serif;font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;padding:12px 24px;cursor:pointer;';
    var contactLabel = {en:'Contact Us', es:'Contáctenos', pl:'Skontaktuj Się'};
    emptyBtn.textContent = contactLabel[cl] || contactLabel.en;
    emptyBtn.addEventListener('click', function() {
      hideCatalog();
      setTimeout(function() { var c = document.getElementById('contact'); if (c && typeof goTo === 'function') goTo(c); }, 500);
    });
    emptyDiv.appendChild(emptyIcon);
    emptyDiv.appendChild(emptyText);
    emptyDiv.appendChild(emptyBtn);
    content.appendChild(emptyDiv);
  }
}


// Restore scroll position
if (window.history && window.history.scrollRestoration) {
  window.history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);


var CATALOG_FILTER = 'all';

function showCatalog(divFilter) {
  var overlay = document.getElementById('catalog-overlay');
  if (!overlay) return;
  currentFilter = divFilter || 'all';
  CATALOG_FILTER = currentFilter;
  /* Обновим кнопки фильтров */
  var filters = overlay.querySelectorAll('.cat-filter');
  for (var fi = 0; fi < filters.length; fi++) {
    filters[fi].className = filters[fi].getAttribute('data-filter') === currentFilter ? 'cat-filter active' : 'cat-filter';
    /* Переинициализируем listener */
    (function(btn) {
      btn.onclick = function() {
        currentFilter = btn.getAttribute('data-filter');
        var allBtns = overlay.querySelectorAll('.cat-filter');
        for (var bi = 0; bi < allBtns.length; bi++) { allBtns[bi].className = 'cat-filter'; }
        btn.className = 'cat-filter active';
        renderCatalogue();
      };
    })(filters[fi]);
  }
  renderCatalogue();
  overlay.className = 'open';
  document.body.classList.add('catalog-open');
  document.body.style.overflow = 'hidden';
  overlay.scrollTo(0, 0);
  /* Синхронизируем тему и язык в overlay каталога */
  if (typeof catSyncUI === 'function') catSyncUI();
}

function hideCatalog() {
  var overlay = document.getElementById('catalog-overlay');
  if (!overlay) return;
  overlay.className = '';
  document.body.classList.remove('catalog-open');
  document.body.style.overflow = '';
  catCloseMenu();
}




/* ══ КАТАЛОГ — МОДАЛЬНОЕ ОКНО КАРТОЧКИ ══ */
function showCatModal(itemOrTitle, divNameOrDesc, legacyPoints, legacyDivName, legacyImg) {
  var overlay = document.getElementById('cat-modal-overlay');
  var tagEl   = document.getElementById('cat-modal-tag');
  var titleEl = document.getElementById('cat-modal-title');
  var descEl  = document.getElementById('cat-modal-desc');
  var ptsEl   = document.getElementById('cat-modal-points');
  var imgEl   = document.getElementById('cat-modal-img');
  var phEl    = document.getElementById('cat-modal-placeholder');
  var reqBtn  = document.getElementById('cat-modal-req');
  var thumbsEl= document.getElementById('cat-modal-thumbs');
  var specsEl = document.getElementById('cat-modal-specs');
  var partnerEl=document.getElementById('cat-modal-partner');
  if (!overlay) return;
  var cl = (typeof lang !== 'undefined') ? lang : 'en';

  /* Поддержка обоих сигнатур: новая (item, divName) и старая (title, desc, points, divName, img) */
  var item, divName, title, desc, points, images, specs, partner;
  if (typeof itemOrTitle === 'object' && itemOrTitle !== null) {
    item = itemOrTitle;
    divName = divNameOrDesc || '';
    title = item['title_'+cl] || item.title_en || '';
    desc  = item['desc_'+cl]  || item.desc_en  || '';
    points= item['points_'+cl]|| item.points_en|| [];
    images= item.images || (item.image ? [item.image] : []);
    specs = item.specs || null;
    partner = item.partner || null;
  } else {
    title = itemOrTitle || '';
    desc  = divNameOrDesc || '';
    points= legacyPoints || [];
    divName = legacyDivName || '';
    images = legacyImg ? [legacyImg] : [];
    specs = null;
    partner = null;
  }

  if (tagEl)   tagEl.textContent   = divName;
  if (titleEl) titleEl.textContent = title;
  if (descEl)  descEl.textContent  = desc;

  if (ptsEl) {
    ptsEl.innerHTML = '';
    points.forEach(function(pt) {
      var li = document.createElement('li'); li.textContent = pt; ptsEl.appendChild(li);
    });
  }

  /* Главное изображение */
  if (imgEl && phEl) {
    if (images.length > 0) {
      imgEl.src = images[0];
      imgEl.className = 'has-img';
      phEl.style.display = 'none';
    } else {
      imgEl.className = '';
      imgEl.src = '';
      phEl.style.display = '';
    }
  }

  /* Миниатюры галереи */
  if (thumbsEl) {
    thumbsEl.innerHTML = '';
    if (images.length > 1) {
      images.forEach(function(src, idx) {
        var th = document.createElement('img');
        th.src = src;
        th.alt = '';
        if (idx === 0) th.className = 'active';
        th.addEventListener('click', function(){
          if (imgEl) imgEl.src = src;
          thumbsEl.querySelectorAll('img').forEach(function(t){ t.classList.remove('active'); });
          th.classList.add('active');
        });
        thumbsEl.appendChild(th);
      });
    }
  }

  /* Таблица характеристик */
  if (specsEl) {
    specsEl.innerHTML = '';
    if (specs && specs.headers_en && specs.rows) {
      var sTitle = document.createElement('div');
      sTitle.className = 'specs-title';
      sTitle.textContent = specs['title_'+cl] || specs.title_en || '';
      specsEl.appendChild(sTitle);

      var tbl = document.createElement('table');
      var thead = document.createElement('thead');
      var trh = document.createElement('tr');
      var headers = specs['headers_'+cl] || specs.headers_en;
      headers.forEach(function(h) {
        var th = document.createElement('th');
        th.textContent = h;
        trh.appendChild(th);
      });
      thead.appendChild(trh);
      tbl.appendChild(thead);

      var tbody = document.createElement('tbody');
      specs.rows.forEach(function(row) {
        var tr = document.createElement('tr');
        var labelTd = document.createElement('td');
        labelTd.textContent = row['label_'+cl] || row.label_en || '';
        tr.appendChild(labelTd);
        var unitTd = document.createElement('td');
        unitTd.textContent = row.unit || '';
        tr.appendChild(unitTd);
        (row.values || []).forEach(function(v) {
          var td = document.createElement('td');
          td.textContent = v;
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
      tbl.appendChild(tbody);
      specsEl.appendChild(tbl);
    }
  }

  /* Блок партнёра */
  if (partnerEl) {
    if (partner && (partner[cl] || partner.en)) {
      var lbls = {en:'Technology Partner', es:'Socio Tecnológico', pl:'Partner Technologiczny'};
      partnerEl.innerHTML = '<strong>'+(lbls[cl]||lbls.en)+'</strong>' + (partner[cl] || partner.en);
      partnerEl.style.display = '';
    } else {
      partnerEl.innerHTML = '';
      partnerEl.style.display = 'none';
    }
  }

  /* Кнопка запроса */
  var reqLabels = {en:'Request Information →', es:'Solicitar Información →', pl:'Zapytaj o Ofertę →'};
  if (reqBtn) {
    reqBtn.textContent = reqLabels[cl] || reqLabels.en;
    reqBtn.onclick = function() {
      hideCatModal();
      hideCatalog();
      setTimeout(function() {
        var contactSection = document.getElementById('contact');
        if (contactSection && typeof goTo === 'function') goTo(contactSection);
      }, 500);
    };
  }
  overlay.className = 'open';
}

function hideCatModal() {
  var overlay = document.getElementById('cat-modal-overlay');
  if (overlay) overlay.className = '';
}

/* Инициализация модального окна каталога — вызывается из initNewFeatures */

/* ══ СИНХРОНИЗАЦИЯ UI КАТАЛОГА ══ */
function catSyncUI() {
  var cl = (typeof lang !== 'undefined') ? lang : 'en';
  var isDark = !document.documentElement.classList.contains('light');
  var icon = isDark ? '☾' : '☀';
  var modeLabel = isDark ? 'Dark Mode' : 'Light Mode';

  /* Тема — десктоп */
  var t1 = document.getElementById('cat-theme-thumb');
  var cb1 = document.getElementById('cat-theme-cb');
  if (t1) t1.textContent = icon;
  if (cb1) cb1.checked = !isDark;

  /* Тема — мобильный */
  var t2 = document.getElementById('catMobileThemeThumb');
  var cb2 = document.getElementById('catMobileThemeCheckbox');
  var lbl = document.getElementById('catMobileThemeLabel');
  if (t2) t2.textContent = icon;
  if (cb2) cb2.checked = !isDark;
  if (lbl) lbl.textContent = modeLabel;

  /* Язык — десктоп */
  ['en','es','pl'].forEach(function(l) {
    var b = document.getElementById('cat-btn-' + l);
    if (b) b.className = (l === cl) ? 'lang-btn active' : 'lang-btn';
  });

  /* Язык — мобильный */
  ['en','es','pl'].forEach(function(l) {
    var b = document.getElementById('cat-mbtn-' + l);
    if (b) b.className = (l === cl) ? 'active' : '';
  });
}

function catToggleMenu() {
  var b = document.getElementById('cat-burger');
  var n = document.getElementById('catMobileNav');
  if (!b || !n) return;
  var isOpen = n.className.indexOf('open') >= 0;
  if (isOpen) {
    n.className = 'mobile-nav';
    b.className = 'burger';
    document.body.style.overflow = '';
  } else {
    catSyncUI();
    n.className = 'mobile-nav open';
    b.className = 'burger open';
    document.body.style.overflow = 'hidden';
  }
}

function catCloseMenu() {
  var b = document.getElementById('cat-burger');
  var n = document.getElementById('catMobileNav');
  if (b) b.className = 'burger';
  if (n) n.className = 'mobile-nav';
  document.body.style.overflow = '';
}

/* МОБИЛЬНЫЙ ПОИСК КАТАЛОГА */
function catOpenMobSearch(){
  var ov = document.getElementById('cat-mob-search-overlay');
  var f = document.getElementById('cat-mob-search-field');
  if(!ov) return;
  ov.classList.add('open');
  var phs = {en:'Search equipment...',es:'Buscar equipos...',pl:'Szukaj sprzętu...'};
  var sc = {en:'Cancel',es:'Cancelar',pl:'Anuluj'};
  var cl = (typeof lang !== 'undefined') ? lang : 'en';
  if(f){ f.placeholder = phs[cl] || phs.en; }
  var cb = document.getElementById('cat-mob-search-cancel');
  if(cb) cb.textContent = sc[cl] || sc.en;
  setTimeout(function(){ if(f) f.focus(); }, 200);
}
function catCloseMobSearch(){
  var ov = document.getElementById('cat-mob-search-overlay');
  var rs = document.getElementById('cat-mob-search-results');
  var f = document.getElementById('cat-mob-search-field');
  if(ov) ov.classList.remove('open');
  if(rs){ rs.classList.remove('open'); rs.innerHTML=''; }
  if(f) f.value = '';
}
function catRunMobSearch(q){
  var rs = document.getElementById('cat-mob-search-results');
  if(!rs) return;
  q = (q||'').trim().toLowerCase();
  if(q.length < 1){ rs.classList.remove('open'); rs.innerHTML=''; return; }
  if(typeof CATALOGUE === 'undefined'){ rs.innerHTML=''; rs.classList.remove('open'); return; }
  var cl = (typeof lang !== 'undefined') ? lang : 'en';
  var divLabels = {mine:{en:'Mine',es:'Minería',pl:'Górnictwo'},recycling:{en:'Recycling',es:'Reciclaje',pl:'Recykling'}};
  var emptyMsg = {en:'No results',es:'Sin resultados',pl:'Brak wyników'};
  var hits = [];
  Object.keys(CATALOGUE).forEach(function(div){
    (CATALOGUE[div]||[]).forEach(function(item){
      var titleField = item['title_'+cl] || item.title_en || item.title || '';
      var descField  = item['desc_'+cl]  || item.desc_en  || item.desc  || '';
      var ptsField   = item['points_'+cl]|| item.points_en|| item.points || [];
      var hay = (titleField + ' ' + descField + ' ' + (ptsField||[]).join(' ')).toLowerCase();
      if(hay.indexOf(q) > -1){ hits.push({div:div, item:item, title:titleField}); }
    });
  });
  if(!hits.length){
    rs.innerHTML = '<div class="cat-srch-empty">'+(emptyMsg[cl]||emptyMsg.en)+'</div>';
  } else {
    var html = '';
    hits.forEach(function(h){
      var lab = (divLabels[h.div][cl] || divLabels[h.div].en);
      html += '<div class="cat-srch-item" data-div="'+h.div+'" data-id="'+(h.item.id||'')+'">'
            + '<span class="cat-srch-tag">'+lab+'</span>'
            + '<span class="cat-srch-name">'+h.title+'</span>'
            + '</div>';
    });
    rs.innerHTML = html;
    rs.querySelectorAll('.cat-srch-item').forEach(function(el){
      el.addEventListener('click', function(){
        var divName = el.getAttribute('data-div');
        catCloseMobSearch();
        var btn = document.querySelector('#catalog-overlay .cat-filter[data-filter="'+divName+'"]');
        if(btn){ btn.click(); }
      });
    });
    rs.classList.add('open');
  }
}
(function(){
  function bind(){
    var f = document.getElementById('cat-mob-search-field');
    if(!f || f._bound) return;
    f._bound = true;
    f.addEventListener('input', function(){ catRunMobSearch(this.value); });
    f.addEventListener('keydown', function(e){ if(e.key === 'Escape') catCloseMobSearch(); });
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', bind);
  } else { bind(); }
})();
(function(){
  if(typeof hideCatalog === 'function' && !window._hideCatalogWrapped){
    window._hideCatalogWrapped = true;
    var _oh = hideCatalog;
    window.hideCatalog = function(){ try{catCloseMobSearch();}catch(e){} return _oh.apply(this, arguments); };
  }
})();


function initCatModal() {
  /* ── Модальное окно карточки ── */
  var overlay = document.getElementById('cat-modal-overlay');
  var closeBtn = document.getElementById('cat-modal-close');
  if (overlay) overlay.addEventListener('click', function(e) { if (e.target === overlay) hideCatModal(); });
  if (closeBtn) closeBtn.addEventListener('click', hideCatModal);
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') hideCatModal(); });

  /* ── Бургер каталога ── */
  var catBurger = document.getElementById('cat-burger');
  if (catBurger) catBurger.addEventListener('click', catToggleMenu);

  /* ── Тема десктоп ── */
  var catLabel = document.getElementById('cat-theme-label');
  var catCb = document.getElementById('cat-theme-cb');
  if (catLabel) catLabel.addEventListener('click', function(e) {
    if (e.target === catCb) return;
    setTheme(!document.documentElement.classList.contains('light'));
    catSyncUI();
  });
  if (catCb) catCb.addEventListener('change', function() {
    setTheme(this.checked); catSyncUI();
  });

  /* ── Тема мобильная ── */
  var catMobCb = document.getElementById('catMobileThemeCheckbox');
  if (catMobCb) catMobCb.addEventListener('change', function() {
    setTheme(this.checked); catSyncUI();
  });

  /* ── Язык десктоп ── */
  ['en','es','pl'].forEach(function(l) {
    var btn = document.getElementById('cat-btn-' + l);
    if (btn) btn.addEventListener('click', function() { setLang(l); catSyncUI(); });
  });

  /* ── Язык мобильный ── */
  ['en','es','pl'].forEach(function(l) {
    var btn = document.getElementById('cat-mbtn-' + l);
    if (btn) btn.addEventListener('click', function() {
      setLang(l); catSyncUI(); catCloseMenu();
    });
  });
}



/* ══ ЗАЩИТА КОДА ══ */
(function() {
  /* Отключаем правый клик */
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
  });

  /* Отключаем горячие клавиши DevTools и просмотра кода */
  /* DevTools hotkeys enabled */

  /* Детектор открытия DevTools через изменение размера окна */
  var devToolsOpen = false;
  var threshold = 160;
  setInterval(function() {
    var widthDiff  = window.outerWidth  - window.innerWidth;
    var heightDiff = window.outerHeight - window.innerHeight;
    if (widthDiff > threshold || heightDiff > threshold) {
      if (!devToolsOpen) {
        devToolsOpen = true;
        /* Мягкое предупреждение */
        console.clear();
        console.log('%c⚠ MCR Planet', 'color:#c9a84c;font-size:20px;font-weight:bold;');
        console.log('%cЭта страница защищена. Копирование контента запрещено.', 'color:#888;font-size:14px;');
      }
    } else {
      devToolsOpen = false;
    }
  }, 1000);
})();



/* ══ БУРГЕР КАТАЛОГА ══ */

/* FIX: actually invoke initCatModal so catalog theme/lang/burger handlers attach */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function(){
    try { if (typeof initCatModal === 'function') initCatModal(); } catch(e){}
  });
} else {
  try { if (typeof initCatModal === 'function') initCatModal(); } catch(e){}
}
