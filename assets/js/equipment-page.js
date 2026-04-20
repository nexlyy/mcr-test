/* === EQUIPMENT PAGE LOGIC ===
   Reads ?id=xxx from URL, finds item in CATALOGUE, populates page.
   Handles language switching, theme, lightbox.
*/

(function(){
  'use strict';

  /* ─── Текущий язык + тема (читаем из localStorage) ─── */
  var lang = 'en';
  try {
    var saved = localStorage.getItem('mcr_lang');
    if (saved && ['en','es','pl'].indexOf(saved) >= 0) lang = saved;
  } catch(e){}

  try {
    var th = localStorage.getItem('mcr_theme');
    if (th === '1' || th === 'light') document.documentElement.className = 'light';
  } catch(e){}

  /* ─── Тексты UI страницы (на 3 языках) ─── */
  var T = {
    en: {
      catalogue: 'Catalogue',
      mine: 'Mine Division',
      recycling: 'Recycling Division',
      construction: 'Construction Division',
      features: 'Key Features',
      specs: 'Technical Specifications',
      partner: 'Technology Partner',
      cta_title: 'Interested in this equipment?',
      cta_desc: 'Contact our team for a personalized quote, technical consultation, or to request a site visit.',
      cta_btn: 'Request Information →',
      not_found: 'Equipment not found',
      not_found_link: '← Back to catalogue',
      back: 'Back to catalogue',
      back_short: '← Back',
      zoom_hint: 'Click to enlarge'
    },
    es: {
      catalogue: 'Catálogo',
      mine: 'División Minería',
      recycling: 'División Reciclaje',
      construction: 'División Construcción',
      features: 'Características Clave',
      specs: 'Especificaciones Técnicas',
      partner: 'Socio Tecnológico',
      cta_title: '¿Interesado en este equipo?',
      cta_desc: 'Contacte a nuestro equipo para obtener una cotización personalizada, consulta técnica o solicitar una visita.',
      cta_btn: 'Solicitar Información →',
      not_found: 'Equipo no encontrado',
      not_found_link: '← Volver al catálogo',
      back: 'Volver al catálogo',
      back_short: '← Volver',
      zoom_hint: 'Click para ampliar'
    },
    pl: {
      catalogue: 'Katalog',
      mine: 'Dział Górnictwo',
      recycling: 'Dział Recykling',
      construction: 'Dział Budownictwo',
      features: 'Kluczowe Cechy',
      specs: 'Specyfikacje Techniczne',
      partner: 'Partner Technologiczny',
      cta_title: 'Zainteresowany tym sprzętem?',
      cta_desc: 'Skontaktuj się z naszym zespołem, aby otrzymać spersonalizowaną wycenę, konsultację techniczną lub umówić wizytę.',
      cta_btn: 'Zapytaj o Ofertę →',
      not_found: 'Sprzęt nie znaleziony',
      not_found_link: '← Powrót do katalogu',
      back: 'Powrót do katalogu',
      back_short: '← Powrót',
      zoom_hint: 'Kliknij aby powiększyć'
    }
  };

  /* ─── Получить ID из URL ─── */
  function getParam(name){
    var m = new RegExp('[?&]'+name+'=([^&]+)').exec(window.location.search);
    return m ? decodeURIComponent(m[1]) : null;
  }

  /* ─── Найти позицию в CATALOGUE ─── */
  function findItem(id){
    if (!window.CATALOGUE || !id) return null;
    var divisions = Object.keys(window.CATALOGUE);
    for (var i=0; i<divisions.length; i++) {
      var div = divisions[i];
      var arr = window.CATALOGUE[div] || [];
      for (var j=0; j<arr.length; j++) {
        if (arr[j].id === id) return { item: arr[j], division: div };
      }
    }
    return null;
  }

  /* ─── Рендер страницы ─── */
  function render(){
    var t = T[lang] || T.en;
    var id = getParam('id');
    var found = findItem(id);

    /* Обновляем lang атрибут html для accessibility */
    document.documentElement.lang = lang;

    /* === Если не найдено === */
    if (!found) {
      document.getElementById('eq-root').innerHTML =
        '<div class="eq-not-found">' +
        '<h2>'+ t.not_found +'</h2>' +
        '<a href="../index.html#catalog">'+ t.not_found_link +'</a>' +
        '</div>';
      document.title = t.not_found + ' — MCR Planet';
      return;
    }

    var item = found.item;
    var divName = found.division; /* mine | recycling | construction */
    var divLabel = t[divName] || divName;

    /* === Поля item на текущем языке === */
    var title  = item['title_'+lang] || item.title_en || item.title || '';
    var desc   = item['desc_'+lang]  || item.desc_en  || item.desc  || '';
    var points = item['points_'+lang] || item.points_en || item.points || [];
    var images = item.images || (item.image ? [item.image] : []);

    /* === Нормализация путей картинок (страница в /pages/, картинки в /media/) === */
    var normImages = images.map(function(src){
      if (/^https?:/.test(src)) return src;
      if (src.indexOf('../') === 0) return src;
      return '../' + src; /* media/... → ../media/... */
    });

    document.title = title + ' — MCR Planet';

    /* === Хлебные крошки — клики ведут в каталог с нужным фильтром === */
    var catalogHref = '../index.html#catalog';
    var divHref     = '../index.html#catalog-' + divName; /* mine | recycling */
    document.getElementById('eq-crumbs').innerHTML =
      '<a href="../index.html">MCR Planet</a>' +
      '<span class="sep">/</span>' +
      '<a href="'+ catalogHref +'" id="eq-crumbs-catalog">'+ t.catalogue +'</a>' +
      '<span class="sep">/</span>' +
      '<a href="'+ divHref +'" id="eq-crumbs-div">'+ divLabel +'</a>' +
      '<span class="sep">/</span>' +
      '<span class="current">'+ title +'</span>';

    /* === Side back button: локализованный "← Back" / "← Volver" / "← Powrót" === */
    var backBtnEl = document.getElementById('eq-back-btn');
    if (backBtnEl) backBtnEl.textContent = t.back_short || '← Back';
    /* Global handler used by the side back button */
    window.eqGoBack = function(){
      /* The catalog card click set a hash like #catalog-mine on the index page
         before navigating, so history.back() restores that state naturally */
      if (window.history.length > 1) {
        window.history.back();
      } else {
        /* Fallback: direct navigation to catalog with correct division */
        window.location.href = '../index.html#catalog-' + (divName || 'all');
      }
    };

    /* === Hero: галерея + заголовок === */
    var galleryHtml = '<div class="eq-main-img" id="eq-main-img">';
    if (normImages.length) {
      galleryHtml += '<img src="'+ normImages[0] +'" alt="'+ escapeAttr(title) +'" id="eq-main-img-tag">';
      galleryHtml += '<div class="eq-zoom-hint">'+ t.zoom_hint +'</div>';
    } else {
      galleryHtml += '<div style="color:var(--text-3);font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;">MCR Planet · Equipment</div>';
    }
    galleryHtml += '</div>';

    if (normImages.length > 1) {
      galleryHtml += '<div class="eq-thumbs">';
      normImages.forEach(function(src, i){
        galleryHtml += '<img src="'+ src +'" alt="" data-idx="'+ i +'"' + (i===0?' class="active"':'') + '>';
      });
      galleryHtml += '</div>';
    }

    document.getElementById('eq-gallery').innerHTML = galleryHtml;

    /* Заголовок и описание */
    document.getElementById('eq-tag').textContent = divLabel;
    document.getElementById('eq-title').textContent = title;
    document.getElementById('eq-lead').textContent = desc;
    document.getElementById('eq-cta-top').textContent = t.cta_btn;

    /* === Features === */
    document.getElementById('eq-features-title').textContent = t.features;
    var ulHtml = '';
    points.forEach(function(p){
      ulHtml += '<li>'+ escapeText(p) +'</li>';
    });
    document.getElementById('eq-features').innerHTML = ulHtml;

    /* === Specs === */
    var specsBlock = document.getElementById('eq-specs-block');
    if (item.specs && item.specs.headers_en && item.specs.rows) {
      var sp = item.specs;
      var headers = sp['headers_'+lang] || sp.headers_en;
      var sTitle  = sp['title_'+lang]   || sp.title_en || t.specs;

      var html = '<h2 class="eq-section-title">'+ escapeText(sTitle) +'</h2>';
      html += '<div class="eq-specs-wrap"><table class="eq-specs-table"><thead><tr>';
      headers.forEach(function(h){ html += '<th>'+ escapeText(h) +'</th>'; });
      html += '</tr></thead><tbody>';
      sp.rows.forEach(function(row){
        html += '<tr>';
        var label = row['label_'+lang] || row.label_en || '';
        html += '<td>'+ escapeText(label) +'</td>';
        html += '<td>'+ escapeText(row.unit || '') +'</td>';
        (row.values || []).forEach(function(v){
          html += '<td>'+ escapeText(v) +'</td>';
        });
        html += '</tr>';
      });
      html += '</tbody></table></div>';
      specsBlock.innerHTML = html;
      specsBlock.style.display = '';
    } else {
      specsBlock.innerHTML = '';
      specsBlock.style.display = 'none';
    }

    /* === Partner === */
    var partnerBlock = document.getElementById('eq-partner-block');
    if (item.partner && (item.partner[lang] || item.partner.en)) {
      partnerBlock.innerHTML =
        '<span class="eq-partner-label">'+ t.partner +'</span>' +
        (item.partner[lang] || item.partner.en);
      partnerBlock.style.display = '';
    } else {
      partnerBlock.innerHTML = '';
      partnerBlock.style.display = 'none';
    }

    /* === Bottom CTA === */
    document.getElementById('eq-cta-title').textContent = t.cta_title;
    document.getElementById('eq-cta-desc').textContent = t.cta_desc;
    document.getElementById('eq-cta-btn').textContent = t.cta_btn;

    /* === Bind gallery thumbs === */
    var mainImg = document.getElementById('eq-main-img-tag');
    document.querySelectorAll('.eq-thumbs img').forEach(function(thumb){
      thumb.addEventListener('click', function(){
        var idx = +this.getAttribute('data-idx');
        if (mainImg) mainImg.src = normImages[idx];
        document.querySelectorAll('.eq-thumbs img').forEach(function(t){ t.classList.remove('active'); });
        this.classList.add('active');
      });
    });

    /* === Lightbox === */
    var mainImgWrap = document.getElementById('eq-main-img');
    if (mainImgWrap) {
      mainImgWrap.addEventListener('click', function(){
        var src = mainImg ? mainImg.src : '';
        if (!src) return;
        var lb = document.getElementById('eq-lightbox');
        document.getElementById('eq-lightbox-img').src = src;
        lb.classList.add('open');
      });
    }

    /* === CTA-кнопки → переход на главную к форме контактов === */
    var ctaTargets = [document.getElementById('eq-cta-top'), document.getElementById('eq-cta-btn')];
    ctaTargets.forEach(function(btn){
      if (!btn) return;
      btn.setAttribute('href', '../index.html?contact=1&interest=' + encodeURIComponent(title) + '#contact');
    });
  }

  /* ─── Helpers ─── */
  function escapeText(s){
    if (s == null) return '';
    return String(s).replace(/[<>&]/g, function(ch){
      return {'<':'&lt;','>':'&gt;','&':'&amp;'}[ch];
    });
  }
  function escapeAttr(s){
    return escapeText(s).replace(/"/g, '&quot;');
  }

  /* ─── Переключатель языка ─── */
  window.eqSetLang = function(l){
    if (['en','es','pl'].indexOf(l) < 0) return;
    lang = l;
    try { localStorage.setItem('mcr_lang', l); } catch(e){}
    document.querySelectorAll('.eq-nav-right .lang-btn').forEach(function(b){
      b.classList.toggle('active', b.getAttribute('data-lang') === l);
    });
    render();
  };

  /* ─── Тема ─── */
  window.eqToggleTheme = function(){
    var isLight = document.documentElement.className === 'light';
    document.documentElement.className = isLight ? '' : 'light';
    try { localStorage.setItem('mcr_theme', isLight ? '0' : '1'); } catch(e){}
  };

  /* ─── Lightbox close ─── */
  window.eqCloseLightbox = function(){
    var lb = document.getElementById('eq-lightbox');
    if (lb) lb.classList.remove('open');
  };

  /* ─── Init when DOM ready and CATALOGUE loaded ─── */
  function init(){
    /* Активная кнопка языка */
    document.querySelectorAll('.eq-nav-right .lang-btn').forEach(function(b){
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
    /* Esc закрывает лайтбокс */
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape') window.eqCloseLightbox();
    });
    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
