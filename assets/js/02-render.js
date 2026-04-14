/* === RENDERING, ACCORDEONS, FORM, EMAILJS HANDLER === */
function renderGrid() {
  var grid = document.getElementById('divGrid');
  if (!grid) return;
  grid.innerHTML = '';
  var i, j, div, s, card, numEl, dotEl, nameEl, ul, li, tip;
  for (i = 0; i < CONTENT.divisions.length; i++) {
    div = CONTENT.divisions[i];
    card = document.createElement('div');
    card.className = 'div-card';
    card.setAttribute('data-div', div.cls);
    numEl = document.createElement('div'); numEl.className = 'div-num'; numEl.textContent = div.num;
    dotEl = document.createElement('div'); dotEl.className = 'div-dot';
    nameEl = document.createElement('h3'); nameEl.className = 'div-name'; nameEl.textContent = div['name_' + lang];
    ul = document.createElement('ul'); ul.className = 'div-services';
    for (j = 0; j < div.services.length; j++) {
      s = div.services[j];
      li = document.createElement('li');
      li.textContent = s['title_' + lang];
      var tipText = TIPS[lang] && TIPS[lang][s.id] ? TIPS[lang][s.id] : (TIPS['en'][s.id] || '');
      if (tipText) { tip = document.createElement('span'); tip.className = 'svc-tip'; tip.textContent = tipText; li.appendChild(tip); }
      (function(sId, dId) {
        li.addEventListener('click', function(e) { e.stopPropagation(); clickService(sId, dId); });
      })(s.id, div.id);
      ul.appendChild(li);
    }
    card.appendChild(numEl); card.appendChild(dotEl); card.appendChild(nameEl); card.appendChild(ul);
    /* Кнопка каталога снизу карточки для mine и recycling */
    if (div.cls === 'mine' || div.cls === 'recycling') {
      var catCardBtn = document.createElement('button');
      catCardBtn.className = 'catalog-card-btn';
      (function(cls) { catCardBtn.addEventListener('click', function(e) { e.stopPropagation(); showCatalog(cls); }); })(div.cls);
      var catLabelsCard = {en:'View Catalogue', es:'Ver Cat\u00e1logo', pl:'Katalog Produkt\u00f3w'};
      catCardBtn.textContent = catLabelsCard[lang] || 'View Catalogue';
      card.appendChild(catCardBtn);
    }
    grid.appendChild(card);
  }
}


/* ── RENDER SECTIONS ── */
function renderSections() {
  var container = document.getElementById('sectionsContainer');
  if (!container) return;
  container.innerHTML = '';
  var i, j, k, div, s, pts;
  var wrap, hdr, dot, num, name, arrowWrap, hint, body, sec, inner, left, svcNum, tag, title, line, back, bDiv, desc, ul, li, sep;
  for (i = 0; i < CONTENT.divisions.length; i++) {
    div = CONTENT.divisions[i];
    wrap = document.createElement('div');
    wrap.className = accOpen[div.id] ? 'div-section open' : 'div-section';
    wrap.id = 'divsec-' + div.id;
    hdr = document.createElement('div'); hdr.className = 'div-section-header';
    (function(id) { hdr.addEventListener('click', function() { toggleAcc(id); }); })(div.id);
    dot = document.createElement('div'); dot.className = 'dsh-dot ' + div.cls;
    num = document.createElement('span'); num.className = 'dsh-num'; num.textContent = div.num;
    name = document.createElement('span'); name.className = 'dsh-name ' + div.cls; name.textContent = div['name_' + lang];
    arrowWrap = document.createElement('div'); arrowWrap.className = 'dsh-arrow';
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns,'svg'); svg.setAttribute('width','13'); svg.setAttribute('height','8'); svg.setAttribute('viewBox','0 0 13 8'); svg.setAttribute('fill','none'); svg.setAttribute('stroke','currentColor'); svg.setAttribute('stroke-width','1.6'); svg.setAttribute('stroke-linecap','round'); svg.setAttribute('stroke-linejoin','round');
    var pl = document.createElementNS(ns,'polyline'); pl.setAttribute('points','1,1 6.5,7 12,1'); svg.appendChild(pl);
    arrowWrap.appendChild(svg);
    hdr.appendChild(dot); hdr.appendChild(num); hdr.appendChild(name); hdr.appendChild(arrowWrap);
    wrap.appendChild(hdr);
    hint = document.createElement('div'); hint.className = 'dsh-hint'; hint.id = 'acchint-' + div.id;
    var hintParts = [];
    for (j = 0; j < div.services.length; j++) { hintParts.push(div.services[j]['title_' + lang]); }
    hint.textContent = hintParts.join(' \u00b7 ');
    if (accOpen[div.id]) { hint.style.display = 'none'; }
    wrap.appendChild(hint);
    body = document.createElement('div'); body.className = 'div-section-body'; body.id = 'accbody-' + div.id;
    body.style.height = accOpen[div.id] ? 'auto' : '0px';
    body.style.overflow = 'hidden';
    body.style.webkitTransition = 'height .45s cubic-bezier(.4,0,.2,1)';
    body.style.transition = 'height .45s cubic-bezier(.4,0,.2,1)';
    for (j = 0; j < div.services.length; j++) {
      s = div.services[j]; pts = s['points_' + lang] || [];
      sec = document.createElement('section'); sec.className = 'svc-section'; sec.id = 'svc-' + s.id;
      inner = document.createElement('div'); inner.className = 'svc-inner';
      left = document.createElement('div'); left.className = 'svc-left';
      svcNum = document.createElement('div'); svcNum.className = 'svc-num'; svcNum.textContent = s.num;
      tag = document.createElement('p'); tag.className = 'svc-tag ' + div.cls; tag.textContent = div['name_' + lang];
      title = document.createElement('h2'); title.className = 'svc-title'; title.textContent = s['title_' + lang];
      line = document.createElement('div'); line.className = 'svc-line ' + div.cls;
      back = document.createElement('button'); back.className = 'svc-back';
      back.textContent = '\u2191 ' + (UI[lang]['ui.back'] || 'Back');
      back.addEventListener('click', scrollToOverview);
      /* Кнопка каталога для mine и recycling */
      if (div.cls === 'mine' || div.cls === 'recycling') {
        var catBtnSvc = document.createElement('button');
        catBtnSvc.className = 'catalog-btn';
        (function(cls){ catBtnSvc.addEventListener('click', function(){ showCatalog(cls); }); })(div.cls);
        var catLabelsSvc = {en:'View Catalogue',es:'Ver Cat\u00e1logo',pl:'Katalog Produkt\u00f3w'};
        catBtnSvc.textContent = catLabelsSvc[lang] || 'View Catalogue';
      }
      left.appendChild(svcNum); left.appendChild(tag); left.appendChild(title); left.appendChild(line); left.appendChild(back);
      if (div.cls === 'mine' || div.cls === 'recycling') { left.appendChild(catBtnSvc); }
      bDiv = document.createElement('div'); bDiv.className = 'svc-body';
      desc = document.createElement('p'); desc.className = 'svc-desc'; desc.textContent = s['desc_' + lang] || '';
      bDiv.appendChild(desc);
      if (pts.length > 0) {
        ul = document.createElement('ul'); ul.className = 'svc-points';
        for (k = 0; k < pts.length; k++) { li = document.createElement('li'); li.textContent = pts[k]; ul.appendChild(li); }
        bDiv.appendChild(ul);
      }
      inner.appendChild(left); inner.appendChild(bDiv); sec.appendChild(inner); body.appendChild(sec);
    }
    wrap.appendChild(body); container.appendChild(wrap);
    sep = document.createElement('div'); sep.className = 'sep'; container.appendChild(sep);
  }
}

function renderAbout() {
  var a = CONTENT.about, el;
  el = document.getElementById('about-title'); if(el) el.innerHTML = a['title_' + lang];
  el = document.getElementById('about-p1');    if(el) el.innerHTML = a['p1_' + lang];
  el = document.getElementById('about-p2');    if(el) el.innerHTML = a['p2_' + lang];
  el = document.getElementById('about-p3');    if(el) el.innerHTML = a['p3_' + lang];
  var statsEl = document.getElementById('about-stats');
  if (!statsEl) return;
  statsEl.innerHTML = '';
  for (var i = 0; i < a.stats.length; i++) {
    var d = document.createElement('div'); d.className = 'stat';
    var n = document.createElement('div'); n.className = 'stat-n'; n.textContent = a.stats[i].n;
    var l = document.createElement('div'); l.className = 'stat-l'; l.textContent = a.stats[i]['l_' + lang];
    d.appendChild(n); d.appendChild(l); statsEl.appendChild(d);
  }
}

/* ── RENDER CONTACTS ── */
function renderContacts() {
  var c = CONTENT.contacts;
  var e1=document.getElementById('c-company'), e2=document.getElementById('c-email'),
      e3=document.getElementById('c-phone'),   e4=document.getElementById('contact-title');
  if(e1) e1.textContent = c.company;
  if(e2) e2.textContent = c.email;
  if(e3) e3.textContent = c.phone;
  var titles = { en:"Get in Touch", es:"Contáctenos", pl:"Skontaktuj Się" };
  if(e4) e4.innerHTML = titles[lang];
}

/* ── APPLY UI ── */
function applyUI() {
  var t = UI[lang], els = document.querySelectorAll('[data-i18n]'), i, k;
  for (i = 0; i < els.length; i++) {
    k = els[i].getAttribute('data-i18n');
    if (t[k] !== undefined) els[i].innerHTML = t[k];
  }
  /* Re-apply theme so that the Dark/Light Mode label gets re-translated */
  if (typeof setTheme === 'function') {
    try { setTheme(!!isLight); } catch(e){}
  }
  /* Переводим placeholder */
  var ph = document.getElementById('nav-search-input');
  if (ph && t['ui.searchph']) ph.placeholder = t['ui.searchph'];
  /* Переводим кнопку Read full section */
  var rmBtn = document.getElementById('modal-read-more');
  if (rmBtn && t['ui.readmore']) rmBtn.textContent = t['ui.readmore'];
  /* Переводим side-nav метки */
  var sideLabels = {
    en:['Our Expertise','Mine · Construction · Recycling','About Us'],
    es:['Nuestra Especialidad','Minería · Construcción · Reciclaje','Sobre Nosotros'],
    pl:['Nasza Specjalizacja','Górnictwo · Budownictwo · Recykling','O Nas']
  };
  var sdEls = document.querySelectorAll('#side-nav .sd-lbl');
  var sdLbls = sideLabels[lang] || sideLabels.en;
  for (var sdi = 0; sdi < sdEls.length && sdi < sdLbls.length; sdi++) {
    sdEls[sdi].textContent = sdLbls[sdi];
  }
}

/* ── SET LANGUAGE ── */
function setLang(l) {
  lang = l;
  var ids = ['en','es','pl'], i;
  for (i = 0; i < ids.length; i++) {
    var db = document.getElementById('btn-' + ids[i]);
    var mb = document.getElementById('mbtn-' + ids[i]);
    if (db) { db.className = (ids[i] === l) ? 'lang-btn active' : 'lang-btn'; }
    if (mb) { mb.className = (ids[i] === l) ? 'active' : ''; }
  }
  renderGrid(); renderSections(); renderAbout(); renderContacts(); applyUI();
  /* Обновляем кнопки языка в overlay каталога */
  var catMap = {en:'cat-btn-en', es:'cat-btn-es', pl:'cat-btn-pl'};
  for (var cl in catMap) {
    var cb2 = document.getElementById(catMap[cl]);
    if (cb2) cb2.className = (cl === l) ? 'lang-btn active' : 'lang-btn';
  }
}

/* ── MOBILE MENU ── */
function toggleMenu() {
  var b = document.getElementById('burger'), n = document.getElementById('mobileNav');
  if (!b || !n) return;
  var open = n.className.indexOf('open') >= 0;
  if (open) { n.className='mobile-nav'; b.className='burger'; document.body.style.overflow=''; }
  else { n.className='mobile-nav open'; b.className='burger open'; document.body.style.overflow='hidden'; }
}
function closeMenu() {
  var b=document.getElementById('burger'), n=document.getElementById('mobileNav');
  if(b) b.className='burger'; if(n) n.className='mobile-nav'; document.body.style.overflow='';
}

/* ── HIDE LOADING ── надёжный способ для iOS ── */
function hideLoading() {
  var loading = document.getElementById('loading');
  if (!loading) return;
  /* Fade + принудительное скрытие */
  loading.className = 'fade';
  /* iOS: через 200мс точно скрываем */
  setTimeout(function() {
    if (loading) {
      loading.style.opacity = '0';
      loading.style.pointerEvents = 'none';
      loading.style.display = 'none';
    }
  }, 200);
}

/* ── INIT ── */
function safeInit() {
  var i, ids;
  /* Авто-определение языка */
  lang = detectLang();

  /* Аккордеоны */
  for (i = 0; i < CONTENT.divisions.length; i++) { accOpen[CONTENT.divisions[i].id] = true; }

  /* Рендер */
  renderGrid(); renderSections(); renderAbout(); renderContacts(); applyUI();
  /* Обновим active класс кнопок языка сразу при загрузке */
  var _langIds = ['en','es','pl'];
  for (var _li = 0; _li < _langIds.length; _li++) {
    var _db = document.getElementById('btn-' + _langIds[_li]);
    var _mb = document.getElementById('mbtn-' + _langIds[_li]);
    if (_db) _db.className = (_langIds[_li] === lang) ? 'lang-btn active' : 'lang-btn';
    if (_mb) _mb.className = (_langIds[_li] === lang) ? 'active' : '';
  }

  /* Theme */
  var desktopCb = document.getElementById('themeCheckbox');
  var mobileCb  = document.getElementById('mobileThemeCheckbox');
  if (desktopCb) {
    desktopCb.addEventListener('change', function() {
      setTheme(this.checked);
      if (mobileCb) { mobileCb.checked = this.checked; }
    });
  }
  if (mobileCb) {
    mobileCb.addEventListener('change', function() {
      setTheme(this.checked);
      if (desktopCb) { desktopCb.checked = this.checked; }
    });
  }

  /* Lang */
  ids = ['en','es','pl'];
  for (i = 0; i < ids.length; i++) {
    (function(ll) {
      var db = document.getElementById('btn-' + ll);
      var mb = document.getElementById('mbtn-' + ll);
      if (db) db.addEventListener('click', function() { setLang(ll); });
      if (mb) mb.addEventListener('click', function() { setLang(ll); });
    })(ids[i]);
  }

  /* Burger */
  var burger = document.getElementById('burger');
  if (burger) burger.addEventListener('click', toggleMenu);

  /* Mobile links */
  var mlinks = document.querySelectorAll('.mobile-nav a');
  for (i = 0; i < mlinks.length; i++) { mlinks[i].addEventListener('click', closeMenu); }

  /* Nav smooth scroll */
  var navLinks = document.querySelectorAll('.nav-center a');
  for (i = 0; i < navLinks.length; i++) {
    (function(a) {
      a.addEventListener('click', function(e) {
        var href = a.getAttribute('href');
        if (href && href.charAt(0) === '#') {
          e.preventDefault();
          var target = document.getElementById(href.substring(1));
          if (target) goTo(target);
        }
      });
    })(navLinks[i]);
  }

  /* Скрыть loading */
  hideLoading();
  /* Запускаем все фишки */
  initAllFeatures();
  window._siteReady = true;
}

window.addEventListener('resize', function() { if (window.innerWidth > 768) closeMenu(); });

/* ── SAFE BOOT — работает на iOS file:// ── */
function runInit() {
  try {
    safeInit();
  } catch(e) {
    /* Показать ошибку прямо на экране для отладки */
    var loading = document.getElementById('loading');
    if (loading) {
      loading.style.background = '#0a0a0a';
      loading.style.display = 'flex';
      loading.style.opacity = '1';
      loading.style.flexDirection = 'column';
      loading.style.padding = '30px';
      loading.innerHTML = '<div style="color:#c9a84c;font-family:monospace;font-size:14px;word-break:break-all;text-align:left;max-width:90vw;">ERROR: ' + e.message + '<br><br>' + (e.stack||'') + '</div>';
    }
  }
}

/* runInit() оставлен как фолбэк — boot() ниже вызовет safeInit() один раз */

/* ══════════════════════════════════════
   АВТО-ЯЗЫК
   ══════════════════════════════════════ */
function detectLang() {
  var SITE_VER = 'v3'; /* меняй при каждом деплое чтобы сбросить старые настройки */
  var saved = null;
  try {
    /* Если версия сайта изменилась — сбрасываем старый выбор языка */
    if (localStorage.getItem('mcr_site_ver') !== SITE_VER) {
      localStorage.removeItem('mcr_lang');
      localStorage.removeItem('mcr_lang_manual');
      localStorage.setItem('mcr_site_ver', SITE_VER);
    }
    var manualChoice = localStorage.getItem('mcr_lang_manual');
    if (manualChoice === '1') {
      saved = localStorage.getItem('mcr_lang');
    }
  } catch(e) {}
  if (saved && ['en','es','pl'].indexOf(saved) >= 0) return saved;
  var bl = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  if (bl.indexOf('es') === 0) return 'es';
  if (bl.indexOf('pl') === 0) return 'pl';
  if (bl.indexOf('pl') === 0) return 'pl';
  return 'en';
}

/* ══════════════════════════════════════
   PRELOADER
   ══════════════════════════════════════ */
function runPreloader(onDone) {
  var pre = document.getElementById('preloader');
  if (!pre) { onDone(); return; }
  var letters = pre.querySelectorAll('.pre-letter');
  var grp = pre.querySelector('.pre-group');
  var bar = document.getElementById('pre-bar-fill');
  var idx = 0;
  function next() {
    if (idx >= letters.length) {
      if (grp) {
        grp.style.webkitTransition = grp.style.transition = 'opacity .45s ease, -webkit-transform .45s ease, transform .45s ease';
        grp.style.opacity = '1';
        grp.style.webkitTransform = grp.style.transform = 'translateY(0)';
      }
      setTimeout(function() {
        if (bar) bar.style.width = '100%';
        setTimeout(function() {
          pre.className = 'exit';
          setTimeout(function() {
            pre.style.display = 'none';
            onDone();
          }, 650);
        }, 750);
      }, 300);
      return;
    }
    var l = letters[idx];
    l.style.webkitTransition = l.style.transition = 'opacity .38s ease, -webkit-transform .38s ease, transform .38s ease';
    l.style.opacity = '1';
    l.style.webkitTransform = l.style.transform = 'translateY(0)';
    idx++;
    setTimeout(next, 110);
  }
  setTimeout(next, 180);
}

/* ══════════════════════════════════════
   CURSOR
   ══════════════════════════════════════ */
function initCursor() {
  var dot  = document.getElementById('cur-dot');
  var ring = document.getElementById('cur-ring');
  if (!dot || !ring) return;
  /* Показываем курсор только на устройствах с мышью */
  if (window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  } else {
    /* Телефон/планшет — скрываем курсор и возвращаем стандартный */
    dot.style.display  = 'none';
    ring.style.display = 'none';
    document.body.style.cursor = 'auto';
    return;
  }
  var mx=0, my=0, rx=0, ry=0;
  document.addEventListener('mousemove', function(e) {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx+'px'; dot.style.top = my+'px';
    dot.className = 'on';
    ring.className = 'on';
  });
  function animRing() {
    rx += (mx-rx)*0.11; ry += (my-ry)*0.11;
    ring.style.left = rx+'px'; ring.style.top = ry+'px';
    window.requestAnimationFrame(animRing);
  }
  window.requestAnimationFrame(animRing);
  document.addEventListener('mousedown', function() { dot.classList.add('click'); ring.classList.add('click'); });
  document.addEventListener('mouseup',   function() { dot.classList.remove('click'); ring.classList.remove('click'); });
  document.addEventListener('mouseleave', function() { dot.className=''; ring.className=''; });
}

/* ══════════════════════════════════════
   TYPING EFFECT
   ══════════════════════════════════════ */
var typingTimer = null;
var TAGLINE_TEXT = {
  en: 'Engineering · Geology · Innovation',
  es: 'Ingeniería · Geología · Innovación',
  pl: 'Inżynieria · Geologia · Innowacja'
};
function startTyping() {
  var el = document.querySelector('.hero-tagline');
  if (!el) return;
  if (typingTimer) clearInterval(typingTimer);
  var text = TAGLINE_TEXT[lang] || TAGLINE_TEXT['en'];
  el.textContent = '';
  var cur = document.createElement('span');
  cur.className = 'tcur'; el.appendChild(cur);
  var i = 0;
  typingTimer = setInterval(function() {
    if (i < text.length) { el.insertBefore(document.createTextNode(text[i]), cur); i++; }
    else { clearInterval(typingTimer); setTimeout(function(){ if(cur.parentNode) cur.style.display='none'; }, 1000); }
  }, 52);
}

/* ══════════════════════════════════════
   MARQUEE
   ══════════════════════════════════════ */
var MQ_WORDS = {
  en: ['Mine','Construction','Recycling','MCR Planet','Geological Services','Engineering','Sustainability','Innovation','Bioremediation','Land Reclamation','Cross-Border Projects'],
  es: ['Minería','Construcción','Reciclaje','MCR Planet','Servicios Geológicos','Ingeniería','Sostenibilidad','Innovación','Biorremediación','Recuperación de Tierras','Proyectos Transfronterizos'],
  pl: ['Górnictwo','Budownictwo','Recykling','MCR Planet','Usługi Geologiczne','Inżynieria','Zrównoważony Rozwój','Innowacja','Bioremediacja','Rekultywacja Terenów','Projekty Transgraniczne']
};
function insertMarquee() {
  var existing = document.querySelector('.mq-wrap');
  var sep = document.querySelector('.sep');
  if (!sep) return;
  var words = MQ_WORDS[lang] || MQ_WORDS['en'];
  var html = '<div class="mq-track">';
  var full = words.concat(words);
  for (var i=0;i<full.length;i++) html += '<span class="mq-item">'+full[i]+'<span class="mq-dot">\u00b7</span></span>';
  html += '</div>';
  if (existing) {
    existing.innerHTML = html;
  } else {
    var w = document.createElement('div');
    w.className = 'mq-wrap'; w.innerHTML = html;
    sep.parentNode.insertBefore(w, sep.nextSibling);
  }
}

/* ══════════════════════════════════════
   TOOLTIPS
   ══════════════════════════════════════ */
var TIPS = {
  en: {geo:'Surveys to assess deposit potential & reduce risks',exp:'Full-cycle from planning to geological documentation',res:'Independent reserve assessment per JORC & CRIRSCO',adv:'Strategic consulting for launching mining projects',cbp:'End-to-end international mining project management',ant:'Extracting resources from industrial waste & tailings',phy:'Mineral extraction using hyperaccumulator plants',ind:'Turnkey design & construction of industrial facilities',eng:'Engineering support at all project stages',tec:'Partnerships with technology leaders',eqp:'Selection & procurement of industrial equipment',wst:'Modern waste processing for maximum resource recovery',req:'Specialised equipment for all recycling material types',irt:'Advanced recycling tech including pellet production',sus:'ESG strategy & zero-waste programme implementation',bio:'Alternative fuel production from waste biomass',lan:'Ecological restoration of industrial territories',nwp:'Innovative projects — contact us to discuss'},
  es: {geo:'Evaluación del potencial de yacimientos y reducción de riesgos',exp:'Ciclo completo desde planificación hasta documentación geológica',res:'Evaluación independiente de reservas según JORC y CRIRSCO',adv:'Consultoría estratégica para lanzar proyectos mineros',cbp:'Gestión integral de proyectos mineros internacionales',ant:'Extracción de recursos de residuos industriales y estériles',phy:'Extracción de minerales usando plantas hiperacumuladoras',ind:'Diseño y construcción llave en mano de instalaciones industriales',eng:'Soporte de ingeniería en todas las etapas del proyecto',tec:'Asociaciones con líderes tecnológicos',eqp:'Selección y adquisición de equipos industriales',wst:'Procesamiento moderno de residuos para máxima recuperación',req:'Equipos especializados para todos los tipos de reciclaje',irt:'Tecnologías avanzadas de reciclaje incluyendo producción de pellets',sus:'Estrategia ESG e implementación de programa cero residuos',bio:'Producción de combustible alternativo de biomasa residual',lan:'Restauración ecológica de territorios industriales',nwp:'Proyectos innovadores — contáctenos para discutir'},
  pl: {geo:'Ocena potencjału złóż i redukcja ryzyka inwestycyjnego',exp:'Pełny cykl od planowania do dokumentacji geologicznej',res:'Niezależna ocena zasobów wg JORC i CRIRSCO',adv:'Doradztwo strategiczne przy uruchamianiu projektów górniczych',cbp:'Kompleksowe zarządzanie międzynarodowymi projektami górniczymi',ant:'Wydobycie zasobów z odpadów przemysłowych i hałd',phy:'Wydobycie minerałów z użyciem roślin hiperakumulujących',ind:'Projektowanie i budowa obiektów przemysłowych pod klucz',eng:'Wsparcie inżynieryjne na wszystkich etapach projektu',tec:'Partnerstwa z liderami technologicznymi',eqp:'Dobór i zakup sprzętu przemysłowego',wst:'Nowoczesne przetwarzanie odpadów dla maksymalnego odzysku',req:'Specjalistyczny sprzęt dla wszystkich typów recyklingu',irt:'Zaawansowane technologie recyklingu w tym produkcja pelletów',sus:'Strategia ESG i wdrożenie programu zero odpadów',bio:'Produkcja paliwa alternatywnego z biomasy odpadowej',lan:'Ekologiczna rekultywacja terenów przemysłowych',nwp:'Innowacyjne projekty — skontaktuj się z nami'}
};

/* ══════════════════════════════════════
   ПЕРЕОПРЕДЕЛЯЕМ renderGrid С TOOLTIPS
   ══════════════════════════════════════ */
var _origRG = renderGrid;
renderGrid = function() {
  var grid = document.getElementById('divGrid');
  if (!grid) return;
  grid.innerHTML = '';
  var i,j,div,s,card,numEl,dotEl,nameEl,ul,li,tip;
  for (i=0;i<CONTENT.divisions.length;i++) {
    div = CONTENT.divisions[i];
    card = document.createElement('div'); card.className='div-card rv'; card.setAttribute('data-div',div.cls);
    numEl = document.createElement('div'); numEl.className='div-num'; numEl.textContent=div.num;
    dotEl = document.createElement('div'); dotEl.className='div-dot';
    nameEl = document.createElement('h3'); nameEl.className='div-name'; nameEl.textContent=div['name_'+lang];
    ul = document.createElement('ul'); ul.className='div-services';
    for (j=0;j<div.services.length;j++) {
      s = div.services[j];
      li = document.createElement('li'); li.textContent=s['title_'+lang];
      var tipText = TIPS[lang] && TIPS[lang][s.id] ? TIPS[lang][s.id] : (TIPS['en'][s.id] || ''); if (tipText) { tip=document.createElement('span'); tip.className='svc-tip'; tip.textContent=tipText; li.appendChild(tip); }
      (function(sId,dId){ li.addEventListener('click',function(e){e.stopPropagation();clickService(sId,dId);}); })(s.id,div.id);
      ul.appendChild(li);
    }
    card.appendChild(numEl); card.appendChild(dotEl); card.appendChild(nameEl); card.appendChild(ul);
    /* Кнопка каталога снизу карточки */
    if (div.cls === 'mine' || div.cls === 'recycling') {
      var catCardBtn = document.createElement('button');
      catCardBtn.className = 'catalog-card-btn';
      (function(cls){ catCardBtn.addEventListener('click', function(e){ e.stopPropagation(); showCatalog(cls); }); })(div.cls);
      var catLabelsCard = {en:'View Catalogue',es:'Ver Cat\u00e1logo',pl:'Katalog Produkt\u00f3w'};
      catCardBtn.textContent = catLabelsCard[lang] || 'View Catalogue';
      card.appendChild(catCardBtn);
    }
    grid.appendChild(card);
  }
};

/* ══════════════════════════════════════
   СЧЁТЧИК ЦИФР
   ══════════════════════════════════════ */
var counted = false;
function animCount(el, target, suf) {
  var s=0, dur=1500, st=null;
  var inf = !isFinite(target);
  function step(ts) {
    if(!st) st=ts;
    var p=Math.min((ts-st)/dur,1), e=1-Math.pow(1-p,3);
    el.textContent = inf ? (p>=1?'\u221e':Math.floor(e*99)+'') : Math.floor(e*target)+(p>=1?suf:'');
    if(p<1) window.requestAnimationFrame(step);
    else el.textContent = inf?'\u221e':target+suf;
  }
  window.requestAnimationFrame(step);
}
function tryCount() {
  if (counted) return;
  var el = document.getElementById('about-stats');
  if (!el) return;
  if (el.getBoundingClientRect().top < window.innerHeight*0.88) {
    counted = true;
    var ns = el.querySelectorAll('.stat-n');
    var data = [{v:3,s:''},{v:17,s:'+'},{v:3,s:''},{v:Infinity,s:''}];
    for (var i=0;i<ns.length;i++) { (function(n,d){ animCount(n,d.v,d.s); })(ns[i],data[i]||{v:0,s:''}); }
  }
}

/* ══════════════════════════════════════
   ПАРАЛЛАКС
   ══════════════════════════════════════ */
function doParallax() {
  var sy = window.pageYOffset||0;
  var g=document.querySelector('.hero-grid'), b=document.querySelector('.hero-bg');
  if(g) g.style.webkitTransform=g.style.transform='translateY('+(sy*.32)+'px)';
  if(b) b.style.webkitTransform=b.style.transform='translateY('+(sy*.18)+'px)';
}

/* ══════════════════════════════════════
   ПРОГРЕСС-БАР
   ══════════════════════════════════════ */
function doProgress() {
  var bar=document.getElementById('spbar'); if(!bar) return;
  var sy=window.pageYOffset||0, total=document.documentElement.scrollHeight-window.innerHeight;
  bar.style.width=(total>0?(sy/total*100):0)+'%';
}

/* ══════════════════════════════════════
   SIDE NAV + СКРЫВАЮЩИЙСЯ НАВБАР
   ══════════════════════════════════════ */
var lastSY=0, navEl=document.querySelector('nav');
function doNav() {
  var sn=document.getElementById('side-nav'); if(!sn) return;
  var sy=window.pageYOffset||0;
  sn.className = sy>300 ? 'vis' : '';
  var secs=['overview','sections','about'], act='overview';
  for(var i=0;i<secs.length;i++){var e=document.getElementById(secs[i]);if(e&&e.getBoundingClientRect().top<=120)act=secs[i];}
  var dots=sn.querySelectorAll('.sd');
  for(var j=0;j<dots.length;j++) dots[j].className=dots[j].getAttribute('data-t')===act?'sd act':'sd';
  if(sy<80){if(navEl)navEl.className=navEl.className.replace(' hn','');}
  else if(sy>lastSY+8){if(navEl&&navEl.className.indexOf('hn')<0)navEl.className+=' hn';}
  else if(sy<lastSY-6){if(navEl)navEl.className=navEl.className.replace(' hn','');}
  lastSY=sy;
}

/* ══════════════════════════════════════
   BACK TO TOP
   ══════════════════════════════════════ */
var bttEl=document.getElementById('btt');
function doBTT() {
  if(!bttEl) return;
  bttEl.className = (window.pageYOffset||0)>600 ? 'vis' : '';
}

/* ══════════════════════════════════════
   REVEAL АНИМАЦИИ
   ══════════════════════════════════════ */
function doReveal() {
  var els=document.querySelectorAll('.rv:not(.rvd)');
  for(var i=0;i<els.length;i++){
    if(els[i].getBoundingClientRect().top<window.innerHeight*.92) els[i].classList.add('rvd');
  }
}
function addReveal() {
  var tgts=document.querySelectorAll('.overview,.svc-section,.about,.contact,.stat,.div-card');
  for(var i=0;i<tgts.length;i++) tgts[i].classList.add('rv');
}

/* ══════════════════════════════════════
   ЯКОРНЫЕ URL
   ══════════════════════════════════════ */
function doAnchor() {
  var secs=['overview','about','contact'], cur='';
  for(var i=0;i<secs.length;i++){var e=document.getElementById(secs[i]);if(e&&e.getBoundingClientRect().top<=120)cur=secs[i];}
  if(cur){try{window.history.replaceState(null,'','#'+cur);}catch(e){}}
}

/* ══════════════════════════════════════
   COPY CONTACTS
   ══════════════════════════════════════ */
var toastT=null;
function showToast(m) {
  var t=document.getElementById('toast'); if(!t) return;
  t.textContent=m; t.className='show';
  if(toastT) clearTimeout(toastT);
  toastT=setTimeout(function(){t.className='';},2000);
}
function copyStr(s) {
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(s).then(function(){showToast('Copied!');});}
  else{var ta=document.createElement('textarea');ta.value=s;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();try{document.execCommand('copy');showToast('Copied!');}catch(e){}document.body.removeChild(ta);}
}
function initCopy() {
  var email=document.getElementById('c-email'), phone=document.getElementById('c-phone');
  function mk(el){
    if(!el) return;
    var v=el.textContent; el.className='c-val copy-val';
    var ic=document.createElement('span'); ic.className='copy-ic'; ic.textContent=' \u29c9'; el.appendChild(ic);
    el.addEventListener('click',function(){copyStr(v);});
  }
  mk(email); mk(phone);
}

/* ══════════════════════════════════════
   ВАЛИДАЦИЯ ФОРМЫ
   ══════════════════════════════════════ */
function initValidation() {
  var inps=document.querySelectorAll('.f-input,.f-textarea');
  for(var i=0;i<inps.length;i++) {
    (function(inp){
      var msg=document.createElement('div'); msg.className='f-msg';
      if(inp.parentNode) inp.parentNode.appendChild(msg);
      inp.addEventListener('blur',function(){
        var v=inp.value.trim();
        if(!v){inp.className=(inp.tagName==='TEXTAREA'?'f-textarea':'f-input');msg.textContent='';return;}
        var base=inp.tagName==='TEXTAREA'?'f-textarea':'f-input';
        if(inp.type==='email'){var ok=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);inp.className=base+(ok?' ok':' err');msg.className='f-msg'+(ok?' ok':' err');msg.textContent=ok?'\u2713 Valid':'\u2715 Invalid email';}
        else{var ok2=v.length>=2;inp.className=base+(ok2?' ok':' err');msg.className='f-msg'+(ok2?' ok':' err');msg.textContent=ok2?'':'\u2715 Required';}
      });
      inp.addEventListener('focus',function(){inp.className=(inp.tagName==='TEXTAREA'?'f-textarea':'f-input');msg.textContent='';});
    })(inps[i]);
  }
  var btn=document.querySelector('.f-btn');
  if(btn){btn.addEventListener('click',function(ev){
    if(ev && ev.preventDefault) ev.preventDefault();
    var ok=true;
    var nm=document.querySelector('.f-input[name="from_name"]');
    var em=document.querySelector('.f-input[name="from_email"]');
    var dr=document.querySelector('.f-input[name="direction"]');
    var ms=document.querySelector('.f-textarea[name="message"]');
    var hp=document.querySelector('input[name="website"]');
    var consent=document.getElementById('f-consent-cb');
    var consentLbl=document.getElementById('f-consent-label');

    /* Honeypot — если бот заполнил скрытое поле, тихо игнорим */
    if(hp && hp.value){ console.warn('Honeypot triggered'); return; }

    [nm,em].forEach(function(e){if(e&&!e.value.trim()){e.className='f-input err';ok=false;}});
    if(em && em.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value.trim())){em.className='f-input err';ok=false;}

    /* Согласие GDPR */
    if(consent && !consent.checked){
      if(consentLbl) consentLbl.className='f-consent err';
      ok=false;
    } else if(consentLbl) {
      consentLbl.className='f-consent';
    }

    /* hCaptcha токен */
    var hcToken = '';
    try { hcToken = (window.hcaptcha && window._hcaptchaWidgetId !== undefined) ? window.hcaptcha.getResponse(window._hcaptchaWidgetId) : ''; } catch(e){}
    if(!hcToken){
      var capWrap = document.querySelector('.f-captcha');
      if(capWrap) capWrap.style.outline='1px solid #c0392b';
      setTimeout(function(){ if(capWrap) capWrap.style.outline=''; }, 2500);
      ok=false;
    }

    if(!ok) return;
    var ot=btn.textContent;
    var configured = window.emailjs && window.EMAILJS_PUBLIC_KEY && window.EMAILJS_PUBLIC_KEY.indexOf('YOUR_') !== 0
                     && window.EMAILJS_SERVICE_ID && window.EMAILJS_SERVICE_ID.indexOf('YOUR_') !== 0
                     && window.EMAILJS_TEMPLATE_ID && window.EMAILJS_TEMPLATE_ID.indexOf('YOUR_') !== 0;
    if(!configured){
      btn.textContent='\u26a0 EmailJS not configured';
      btn.style.background='#c0392b';btn.style.borderColor='#c0392b';btn.style.color='#fff';
      console.warn('EmailJS keys not set. Edit window.EMAILJS_* in <head> of index.html');
      setTimeout(function(){btn.textContent=ot;btn.style.background='';btn.style.borderColor='';btn.style.color='';},3500);
      return;
    }
    btn.disabled = true;
    btn.textContent='Sending...';
    var params = {
      from_name: nm ? nm.value.trim() : '',
      from_email: em ? em.value.trim() : '',
      direction: dr ? dr.value.trim() : '',
      message: ms ? ms.value.trim() : '',
      'h-captcha-response': hcToken
    };
    emailjs.send(window.EMAILJS_SERVICE_ID, window.EMAILJS_TEMPLATE_ID, params)
      .then(function(){
        btn.textContent='\u2713 Sent!';
        btn.style.background='#5a9e6f';btn.style.borderColor='#5a9e6f';btn.style.color='#fff';
        if(nm)nm.value='';if(em)em.value='';if(dr)dr.value='';if(ms)ms.value='';
        if(consent) consent.checked = false;
        document.querySelectorAll('.f-input,.f-textarea').forEach(function(el){
          el.className = el.tagName==='TEXTAREA' ? 'f-textarea' : 'f-input';
        });
        document.querySelectorAll('.f-msg').forEach(function(m){ m.textContent=''; });
        try { if(window.hcaptcha && window._hcaptchaWidgetId !== undefined) window.hcaptcha.reset(window._hcaptchaWidgetId); } catch(e){}
        setTimeout(function(){
          btn.textContent=ot;btn.style.background='';btn.style.borderColor='';btn.style.color='';
          btn.disabled=false;
        },3000);
      })
      .catch(function(err){
        console.error('EmailJS error:', err);
        btn.textContent='\u2715 Failed';
        btn.style.background='#c0392b';btn.style.borderColor='#c0392b';btn.style.color='#fff';
        try { if(window.hcaptcha && window._hcaptchaWidgetId !== undefined) window.hcaptcha.reset(window._hcaptchaWidgetId); } catch(e){}
        setTimeout(function(){
          btn.textContent=ot;btn.style.background='';btn.style.borderColor='';btn.style.color='';
          btn.disabled=false;
        },3500);
      });
  });}

/* ══ hCaptcha render & theme sync ══ */
function renderHCaptcha(){
  var c = document.getElementById('hcaptcha-container');
  if(!c || !window.hcaptcha || c._rendered) return;
  c._rendered = true;
  var theme = (document.documentElement.className === 'light') ? 'light' : 'dark';
  try {
    window._hcaptchaWidgetId = window.hcaptcha.render('hcaptcha-container', {
      sitekey: window.HCAPTCHA_SITE_KEY,
      theme: theme,
      size: 'normal'
    });
  } catch(e) { console.warn('hCaptcha render failed:', e); }
}
window.hcaptchaOnLoad = renderHCaptcha;
(function pollHCaptcha(){
  if(window.hcaptcha && document.getElementById('hcaptcha-container')){ renderHCaptcha(); return; }
  setTimeout(pollHCaptcha, 200);
})();
/* Перерисовать капчу при смене темы */
(function(){
  if(typeof setTheme === 'function' && !setTheme._hcWrapped){
    var _orig = setTheme;
    window.setTheme = function(light){
      var r = _orig.apply(this, arguments);
      try {
        var c = document.getElementById('hcaptcha-container');
        if(c && window.hcaptcha && window._hcaptchaWidgetId !== undefined){
          window.hcaptcha.remove(window._hcaptchaWidgetId);
          c._rendered = false;
          renderHCaptcha();
        }
      } catch(e){}
      return r;
    };
    window.setTheme._hcWrapped = true;
  }
})();

}

/* ══════════════════════════════════════
   МАГНИТНЫЕ КНОПКИ
   ══════════════════════════════════════ */
function initMagnetic() {
  var btns=[];
  for(var i=0;i<btns.length;i++){
    (function(b){
      b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect(),dx=(e.clientX-r.left-r.width/2)*.28,dy=(e.clientY-r.top-r.height/2)*.28;b.style.webkitTransform=b.style.transform='translate('+dx+'px,'+dy+'px)';});
      b.addEventListener('mouseleave',function(){b.style.webkitTransform=b.style.transform='translate(0,0)';});
    })(btns[i]);
  }
}

/* ══════════════════════════════════════
   ПАМЯТЬ НАСТРОЕК
   ══════════════════════════════════════ */
function savePrefs() {
  try{
    localStorage.setItem('mcr_lang', lang);
    localStorage.setItem('mcr_lang_manual', '1'); /* пометка: выбрано вручную */
    localStorage.setItem('mcr_theme', isLight ? '1' : '0');
  }catch(e){}
}
function loadPrefs() {
  try{
    var th=localStorage.getItem('mcr_theme');
    if(th==='1'){setTheme(true);var c1=document.getElementById('themeCheckbox'),c2=document.getElementById('mobileThemeCheckbox');if(c1)c1.checked=true;if(c2)c2.checked=true;}
  }catch(e){}
}

/* ══════════════════════════════════════
   ПАТЧИМ setLang и setTheme
   ══════════════════════════════════════ */
/* патч setLang перенесён в boot-секцию */
var _oST=setTheme; setTheme=function(lt){_oST(lt);savePrefs();};

/* ══════════════════════════════════════
   ГЛАВНЫЙ SCROLL HANDLER
   ══════════════════════════════════════ */
function onScrollMain() {
  doProgress(); doParallax(); doNav(); doBTT(); tryCount(); doReveal(); doAnchor(); updateHeroTint();

}

/* ══════════════════════════════════════
   SIDE NAV КЛИКИ
   ══════════════════════════════════════ */
function initSideNav() {
  var sn=document.getElementById('side-nav'); if(!sn) return;
  var dots=sn.querySelectorAll('.sd');
  for(var i=0;i<dots.length;i++){
    (function(d){d.addEventListener('click',function(){var t=document.getElementById(d.getAttribute('data-t'));if(t)goTo(t);});})(dots[i]);
  }
}

/* ══════════════════════════════════════
   BACK TO TOP КЛИК
   ══════════════════════════════════════ */
function initBTT() {
  var b=document.getElementById('btt');
  if(b) b.addEventListener('click',function(){smoothScrollTo(0);});
}

/* ══════════════════════════════════════
   ГЛАВНАЯ ИНИЦИАЛИЗАЦИЯ ФИШЕК
   ══════════════════════════════════════ */
function initAllFeatures() {
  initCursor();
  insertMarquee();
  initSideNav();
  initBTT();
  initCopy();
  initValidation();
  initMagnetic();
  addReveal();
  loadPrefs();
  window.addEventListener('scroll', onScrollMain, {passive:true});
  onScrollMain();
  setTimeout(doReveal, 200);
  initNewFeatures();
}

/* ══════════════════════════════════════
   АВТО-ЯЗЫК + ПАТЧ safeInit + BOOT
   ══════════════════════════════════════ */
var _origSafeInit = safeInit;
safeInit = function() {
  lang = detectLang();
  _origSafeInit();
};

var _origSetLangF = setLang;
setLang = function(l) {
  _origSetLangF(l); savePrefs(); insertMarquee();
  if(window._siteReady){
    setTimeout(function(){ window._typingDone=true; startTyping(); },150);
    addReveal(); setTimeout(doReveal,100);
  }
  /* Обновляем каталог если он открыт */
  var catOverlay = document.getElementById('catalog-overlay');
  if (catOverlay && catOverlay.className === 'open') {
    if (typeof renderCatalogue === 'function') renderCatalogue();
    if (typeof catSyncUI === 'function') catSyncUI();
  }
};
var _origSetThemeF = setTheme;
setTheme = function(lt) { _origSetThemeF(lt); savePrefs(); };

function boot() {
  /* Если пришли с ?contact=1 — НЕ скроллим в самый верх (потом сами проскроллим к форме) */
  var params = new URLSearchParams(window.location.search);
  var goContact = params.get('contact') === '1';
  var interest = params.get('interest') || '';

  if (!goContact) {
    window.scrollTo(0, 0);
  }
  if (window.history && window.history.scrollRestoration) {
    window.history.scrollRestoration = 'manual';
  }
  var ld = document.getElementById('loading');
  if (ld) ld.style.display = 'none';
  runPreloader(function() {
    safeInit();
    setTimeout(function(){ if(!window._typingDone){ window._typingDone=true; startTyping(); }}, 400);

    /* Обработка #catalog / #catalog-mine / #catalog-recycling хеша */
    var catHash = window.location.hash || '';
    if (catHash === '#catalog' || catHash.indexOf('#catalog-') === 0) {
      var filter = 'all';
      if (catHash === '#catalog-mine') filter = 'mine';
      else if (catHash === '#catalog-recycling') filter = 'recycling';
      setTimeout(function(){
        if (typeof showCatalog === 'function') showCatalog(filter);
      }, 600);
    }

    /* Обработка прихода с страницы оборудования: скролл к форме + предзаполнение */
    if (goContact) {
      setTimeout(function(){
        var contactSection = document.getElementById('contact');
        if (contactSection && typeof goTo === 'function') goTo(contactSection);
        if (interest) {
          var dirInput = document.querySelector('.f-input[name="direction"]');
          if (dirInput) {
            dirInput.value = interest;
            dirInput.classList.add('ok');
          }
        }
        /* Очищаем URL чтобы при F5 не было повторного скролла */
        try { window.history.replaceState({}, '', window.location.pathname + window.location.hash); } catch(e){}
      }, 800);
    }
  });
}

window.addEventListener('resize', function() { if (window.innerWidth > 768) closeMenu(); });

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

/* ══ ПОИСК ══ */
