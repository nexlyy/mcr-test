/* === SEARCH (MAIN + MOBILE) === */
function initSearch() {
  var input    = document.getElementById('nav-search-input');
  var clearBtn = document.getElementById('nav-search-clear');
  if (!input) return;

  /* Создаём дропдаун */
  var wrap = document.getElementById('nav-search-wrap');
  var dropdown = document.createElement('div');
  dropdown.id = 'nav-search-dropdown';
  wrap.appendChild(dropdown);

  function doSearch(q) {
    dropdown.innerHTML = '';
    if (!q) { dropdown.className = ''; if(clearBtn) clearBtn.style.display='none'; return; }
    if(clearBtn) clearBtn.style.display = '';
    var found = 0;
    for (var i = 0; i < CONTENT.divisions.length; i++) {
      var div = CONTENT.divisions[i];
      for (var j = 0; j < div.services.length; j++) {
        var s = div.services[j];
        var title = s['title_' + lang] || '';
        var desc  = s['desc_'  + lang] || '';
        if (title.toLowerCase().indexOf(q) >= 0 || desc.toLowerCase().indexOf(q) >= 0) {
          found++;
          (function(sId, dId, t, dName) {
            var item = document.createElement('div');
            item.className = 'search-item';
            var tag = document.createElement('span'); tag.className = 'search-item-tag'; tag.textContent = dName;
            var nm  = document.createElement('span'); nm.className  = 'search-item-name';  nm.textContent = t;
            item.appendChild(tag); item.appendChild(nm);
            item.addEventListener('mousedown', function(e) {
              e.preventDefault();
              dropdown.className = ''; input.value = '';
              if(clearBtn) clearBtn.style.display='none';
              clickService(sId, dId);
            });
            dropdown.appendChild(item);
          })(s.id, div.id, title, div['name_' + lang] || '');
        }
      }
    }
    if (!found) {
      var em = document.createElement('div');
      em.className = 'search-empty';
      em.textContent = (lang === 'es') ? 'Sin resultados para "'+input.value+'"' : (lang === 'pl') ? 'Brak wyników dla "'+input.value+'"' : 'No results for "'+input.value+'"';
      dropdown.appendChild(em);
    }
    dropdown.className = 'open';
  }

  input.addEventListener('input', function() { doSearch(input.value.trim().toLowerCase()); });
  input.addEventListener('blur',  function() { setTimeout(function(){ dropdown.className=''; },150); });
  input.addEventListener('focus', function() { if(input.value.trim()) doSearch(input.value.trim().toLowerCase()); });
  if (clearBtn) {
    clearBtn.addEventListener('click', function() {
      input.value = ''; dropdown.className = ''; clearBtn.style.display='none'; input.focus();
    });
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { dropdown.className=''; input.blur(); }
  });
}

/* ══ ХЛЕБНЫЕ КРОШКИ ══ */
var bcCurrentService = '';
function updateBreadcrumb() {
  var bc = document.getElementById('breadcrumb');
  var bcSvc = document.getElementById('bc-service');
  var bcSec = document.getElementById('bc-section');
  if (!bc) return;
  var sy = window.pageYOffset || 0;
  if (sy < 200) { bc.className = ''; bcCurrentService = ''; return; }
  var secs = document.querySelectorAll('.svc-section');
  var current = null;
  for (var i = 0; i < secs.length; i++) {
    if (secs[i].getBoundingClientRect().top <= 140) current = secs[i];
  }
  if (current) {
    var titleEl = current.querySelector('.svc-title');
    var tagEl   = current.querySelector('.svc-tag');
    var title = titleEl ? titleEl.textContent : '';
    var tag   = tagEl   ? tagEl.textContent   : '';
    /* Определяем раздел по классу тега */
    var divCls = '';
    if (tagEl) {
      if (tagEl.className.indexOf('mine') >= 0)         divCls = 'div-mine';
      else if (tagEl.className.indexOf('construction') >= 0) divCls = 'div-construction';
      else if (tagEl.className.indexOf('recycling') >= 0)    divCls = 'div-recycling';
    }
    if (bcSec) bcSec.textContent = tag;
    if (bcSvc) bcSvc.textContent = title;
    bcCurrentService = title;
    bc.className = 'show ' + divCls;
  } else {
    bc.className = ''; bcCurrentService = '';
  }
}


/* ══ МОДАЛЬНОЕ ОКНО ══ */
var _origClickSvc = clickService;
clickService = function(svcId, divId) {
  var svc = null, divObj = null;
  for (var i = 0; i < CONTENT.divisions.length; i++) {
    if (CONTENT.divisions[i].id === divId) {
      divObj = CONTENT.divisions[i];
      for (var j = 0; j < divObj.services.length; j++) {
        if (divObj.services[j].id === svcId) { svc = divObj.services[j]; break; }
      }
      break;
    }
  }
  if (!svc || !divObj) { _origClickSvc(svcId, divId); return; }
  var overlay = document.getElementById('modal-overlay');
  if (!overlay) { _origClickSvc(svcId, divId); return; }
  var tag   = document.getElementById('modal-tag');
  var title = document.getElementById('modal-title');
  var desc  = document.getElementById('modal-desc');
  var pts   = document.getElementById('modal-points');
  var btn   = document.getElementById('modal-read-more');
  if (tag)   tag.textContent   = divObj['name_'  + lang] || '';
  if (title) title.textContent = svc['title_' + lang]    || '';
  if (desc)  desc.textContent  = svc['desc_'  + lang]    || '';
  if (pts) {
    pts.innerHTML = '';
    var points = svc['points_' + lang] || [];
    for (var k = 0; k < points.length; k++) {
      var li = document.createElement('li'); li.textContent = points[k]; pts.appendChild(li);
    }
  }
  if (btn) {
    btn.onclick = function() { overlay.className = ''; _origClickSvc(svcId, divId); };
  }
  overlay.className = 'open';
};
function initModal() {
  var overlay = document.getElementById('modal-overlay');
  var closeBtn = document.getElementById('modal-close');
  if (!overlay) return;
  if (closeBtn) closeBtn.addEventListener('click', function() { overlay.className = ''; });
  overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.className = ''; });
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') overlay.className = ''; });
}

/* ══ COOKIE BANNER ══ */
function initCookie() {
  var banner = document.getElementById('cookie-banner');
  var accept = document.getElementById('cookie-accept');
  var decline = document.getElementById('cookie-decline');
  if (!banner) return;
  try { if (localStorage.getItem('mcr_cookie')) return; } catch(e) {}
  setTimeout(function() { banner.className = 'show'; }, 2500);
  function dismiss(val) {
    banner.className = '';
    try { localStorage.setItem('mcr_cookie', val); } catch(e) {}
  }
  if (accept)  accept.addEventListener('click',  function() { dismiss('1'); });
  if (decline) decline.addEventListener('click', function() { dismiss('0'); });
}

/* ══ FAB СОЦСЕТИ ══ */
function initFab() {
  var toggle = document.getElementById('fab-toggle');
  if (!toggle) return;
  var btns = document.querySelectorAll('#social-fab .fab-btn');
  var open = false;
  toggle.addEventListener('click', function() {
    open = !open;
    toggle.className = open ? 'fab-toggle open' : 'fab-toggle';
    for (var i = btns.length - 1; i >= 0; i--) {
      (function(btn, delay) {
        setTimeout(function() {
          if (open) {
            btn.className = btn.className + ' show';
          } else {
            btn.className = btn.className.replace(' show', '');
          }
        }, delay);
      })(btns[i], (btns.length - 1 - i) * 60);
    }
  });
}

/* ══ ОБНОВЛЁННЫЙ SCROLL — добавляем breadcrumb ══ */
var _origOnScrollMain = onScrollMain;
onScrollMain = function() {
  _origOnScrollMain();
  updateBreadcrumb();
};

/* ══ ИНИЦИАЛИЗАЦИЯ НОВЫХ ФИШЕК ══ */
function initNewFeatures() {
  initSearch();
  initMobSearch();
  initModal();
  initCatModal();
  initCookie();
  initFab();
}




/* ══ SMOOTH SECTION COLOR TRANSITION ══ */
var currentTintClass = '';
function updateHeroTint() {
  var tint = document.getElementById('hero-tint');
  if (!tint) return;
  /* Ищем активный раздел аккордеона */
  var secs = document.querySelectorAll('.svc-section');
  var active = null;
  for (var i = 0; i < secs.length; i++) {
    var rect = secs[i].getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= 0) {
      active = secs[i]; break;
    }
  }
  var divCls = '';
  if (active) {
    var tag = active.querySelector('.svc-tag');
    if (tag) {
      if (tag.className.indexOf('mine') >= 0)         divCls = 'mine';
      else if (tag.className.indexOf('construction') >= 0) divCls = 'construction';
      else if (tag.className.indexOf('recycling') >= 0)    divCls = 'recycling';
      else if (tag.className.indexOf('new') >= 0)          divCls = 'new';
    }
  }
  if (divCls !== currentTintClass) {
    currentTintClass = divCls;
    tint.className = 'hero-tint' + (divCls ? ' ' + divCls : '');
    tint.style.opacity = divCls ? '1' : '0';
  }
}



/* ══ PDF ВИЗИТКА ══ */
function generatePDF() {
  /* Загружаем jsPDF динамически */
  if (window.jspdf) { buildPDF(); return; }
  var script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
  script.onload = function() { buildPDF(); };
  script.onerror = function() { showToast('PDF error — no internet'); };
  document.head.appendChild(script);
}

function buildPDF() {
  var jsPDF = window.jspdf ? window.jspdf.jsPDF : null;
  if (!jsPDF) { showToast('PDF library error'); return; }
  var doc = new jsPDF({ orientation:'portrait', unit:'mm', format:'a4' });
  var W = doc.internal.pageSize.getWidth();

  /* Фон */
  doc.setFillColor(10, 10, 10);
  doc.rect(0, 0, W, 297, 'F');

  /* Золотая верхняя линия */
  doc.setDrawColor(201, 168, 76);
  doc.setLineWidth(0.8);
  doc.line(20, 18, W - 20, 18);

  /* MCR */
  doc.setTextColor(201, 168, 76);
  doc.setFontSize(38);
  doc.setFont('helvetica','bold');
  doc.text('MCR', 20, 40);

  /* PLANET */
  doc.setTextColor(240, 237, 230);
  doc.setFontSize(22);
  doc.setFont('helvetica','normal');
  doc.text('PLANET', 20, 52);

  /* Tagline */
  doc.setTextColor(130, 120, 100);
  doc.setFontSize(7.5);
  doc.setFont('helvetica','normal');
  doc.text('ENGINEERING  \u00b7  GEOLOGY  \u00b7  INNOVATION', 20, 62);

  /* Разделитель */
  doc.setDrawColor(50, 48, 44);
  doc.setLineWidth(0.3);
  doc.line(20, 68, W - 20, 68);

  /* Directions */
  var dirs = [
    {name:'Mine',        color:[201,168,76]},
    {name:'Construction',color:[74,127,165]},
    {name:'Recycling',   color:[90,158,111]}
  ];
  var dx = 20;
  for (var d = 0; d < dirs.length; d++) {
    doc.setFillColor(dirs[d].color[0], dirs[d].color[1], dirs[d].color[2]);
    doc.circle(dx + 2, 74.5, 1.8, 'F');
    doc.setTextColor(dirs[d].color[0], dirs[d].color[1], dirs[d].color[2]);
    doc.setFontSize(7); doc.setFont('helvetica','bold');
    doc.text(dirs[d].name.toUpperCase(), dx + 6.5, 75.5);
    dx += 44;
  }

  /* Контакты */
  var c = CONTENT && CONTENT.contacts ? CONTENT.contacts : {};
  var contacts = [
    { label:'COMPANY', value: c.company || 'MCR Planet' },
    { label:'EMAIL',   value: c.email   || 'info@mcrplanet.com' },

  ];

  var y = 92;
  for (var i = 0; i < contacts.length; i++) {
    /* Label */
    doc.setTextColor(100, 95, 85);
    doc.setFontSize(6.5); doc.setFont('helvetica','bold');
    doc.text(contacts[i].label, 20, y);
    /* Value */
    doc.setTextColor(240, 237, 230);
    doc.setFontSize(10); doc.setFont('helvetica','normal');
    doc.text(contacts[i].value, 20, y + 6);
    y += 18;
  }

  /* Нижняя линия + копирайт */
  doc.setDrawColor(201, 168, 76);
  doc.setLineWidth(0.5);
  doc.line(20, 270, W - 20, 270);
  doc.setTextColor(100, 95, 85);
  doc.setFontSize(6.5); doc.setFont('helvetica','normal');
  doc.text('\u00a9 2026 MCR Planet. All rights reserved.', 20, 276);
  doc.text('nexlyy.github.io/mcr', W - 20, 276, { align:'right' });

  doc.save('MCR-Planet-Contact.pdf');
  showToast('PDF downloaded!');
}



/* ══ МОБИЛЬНЫЙ ПОИСК ══ */
function initMobSearch() {
  var btn      = document.getElementById('mob-search-btn');
  var overlay  = document.getElementById('mob-search-overlay');
  var field    = document.getElementById('mob-search-field');
  var cancel   = document.getElementById('mob-search-cancel');
  var results  = document.getElementById('mob-search-results');
  if (!btn || !overlay) return;

  btn.addEventListener('click', function() {
    overlay.className = 'open';
    setTimeout(function(){ if(field) field.focus(); }, 150);
  });

  function closeSearch() {
    overlay.className = '';
    results.className = '';
    if (field) field.value = '';
    results.innerHTML = '';
  }

  if (cancel) cancel.addEventListener('click', closeSearch);

  if (field) {
    field.addEventListener('input', function() {
      var q = field.value.trim().toLowerCase();
      results.innerHTML = '';
      if (!q) { results.className = ''; return; }
      var found = 0;
      for (var i = 0; i < CONTENT.divisions.length; i++) {
        var div = CONTENT.divisions[i];
        for (var j = 0; j < div.services.length; j++) {
          var s = div.services[j];
          var title = s['title_' + lang] || '';
          var desc  = s['desc_'  + lang] || '';
          if (title.toLowerCase().indexOf(q) >= 0 || desc.toLowerCase().indexOf(q) >= 0) {
            found++;
            (function(sId, dId, t, dName) {
              var item = document.createElement('div');
              item.className = 'search-item';
              var tag = document.createElement('span'); tag.className='search-item-tag'; tag.textContent=dName;
              var nm  = document.createElement('span'); nm.className='search-item-name';  nm.textContent=t;
              item.appendChild(tag); item.appendChild(nm);
              item.addEventListener('click', function() {
                closeSearch();
                clickService(sId, dId);
              });
              results.appendChild(item);
            })(s.id, div.id, title, div['name_' + lang] || '');
          }
        }
      }
      if (!found) {
        var em = document.createElement('div'); em.className='search-empty';
        em.textContent = lang==='pl' ? 'Brak wyników dla "'+field.value+'"' : lang==='es' ? 'Sin resultados' : 'No results for "'+field.value+'"';
        results.appendChild(em);
      }
      results.className = 'open';
    });
  }
}




var currentFilter = 'all';

/* ══ КАТАЛОГ ══ */

