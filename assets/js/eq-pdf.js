/* === PDF BROCHURE GENERATOR ===
   Создаёт стилизованную PDF-брошюру текущего оборудования
   через jsPDF. Вызывается кнопкой "Download PDF" на странице equipment.html */

(function(){
  'use strict';

  /* Локализация кнопки и текстов */
  var PDF_STRINGS = {
    en: {
      btn: 'Download PDF',
      title: 'Equipment Brochure',
      division: 'Division',
      features: 'Key Features',
      specs: 'Technical Specifications',
      partner: 'Technology Partner',
      contact: 'Contact MCR Planet',
      website: 'Website',
      email: 'Email',
      generated: 'Generated on',
      page: 'Page'
    },
    es: {
      btn: 'Descargar PDF',
      title: 'Folleto del Equipo',
      division: 'División',
      features: 'Características Clave',
      specs: 'Especificaciones Técnicas',
      partner: 'Socio Tecnológico',
      contact: 'Contactar con MCR Planet',
      website: 'Sitio web',
      email: 'Email',
      generated: 'Generado el',
      page: 'Página'
    },
    pl: {
      btn: 'Pobierz PDF',
      title: 'Broszura Sprzętu',
      division: 'Dział',
      features: 'Kluczowe Cechy',
      specs: 'Specyfikacje Techniczne',
      partner: 'Partner Technologiczny',
      contact: 'Kontakt z MCR Planet',
      website: 'Strona',
      email: 'Email',
      generated: 'Wygenerowano',
      page: 'Strona'
    }
  };

  /* Обновить текст кнопки при смене языка */
  function updateBtnLabel() {
    var lg = getLang();
    var lbl = document.getElementById('eq-pdf-label');
    if (lbl) lbl.textContent = PDF_STRINGS[lg].btn;
  }

  function getLang() {
    try {
      var saved = localStorage.getItem('mcr_lang');
      if (saved && PDF_STRINGS[saved]) return saved;
    } catch(e){}
    return 'en';
  }

  function getCurrentItem() {
    /* Парсим ID из URL */
    var match = /[?&]id=([^&]+)/.exec(window.location.search);
    if (!match) return null;
    var id = decodeURIComponent(match[1]);
    if (typeof CATALOGUE === 'undefined' || !CATALOGUE) return null;
    for (var i = 0; i < CATALOGUE.length; i++) {
      if (CATALOGUE[i].id === id) return CATALOGUE[i];
    }
    return null;
  }

  function getImageAsDataURL(src, cb) {
    var img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function(){
      try {
        var canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        cb(canvas.toDataURL('image/jpeg', 0.85), img.naturalWidth, img.naturalHeight);
      } catch(e){ cb(null); }
    };
    img.onerror = function(){ cb(null); };
    img.src = src;
  }

  window.eqGeneratePDF = function(){
    /* Проверка что jsPDF загружен */
    if (typeof window.jspdf === 'undefined') {
      alert('PDF library not loaded. Please refresh the page.');
      return;
    }
    var item = getCurrentItem();
    if (!item) { alert('Equipment not found'); return; }
    var lg = getLang();
    var T = PDF_STRINGS[lg];

    var title = item['title_' + lg] || item.title_en || '';
    var desc = item['desc_' + lg] || item.desc_en || '';
    var points = item['points_' + lg] || item.points_en || [];
    var specs = item.specs || null;
    var partner = item.partner ? (item.partner[lg] || item.partner.en) : '';
    var divLabel = item.div === 'mine'
      ? {en:'Mine Division', es:'División Minería', pl:'Dział Górnictwo'}[lg]
      : item.div === 'recycling'
      ? {en:'Recycling Division', es:'División Reciclaje', pl:'Dział Recykling'}[lg]
      : 'Construction Division';
    var imgSrc = (item.images && item.images[0]) || item.image || null;

    /* Сигнализируем пользователю что идёт генерация */
    var btn = document.getElementById('eq-pdf-btn');
    if (btn) { btn.disabled = true; var origLabel = document.getElementById('eq-pdf-label'); if (origLabel) origLabel.textContent = '⏳...'; }

    function restoreBtn() {
      if (btn) { btn.disabled = false; }
      updateBtnLabel();
    }

    /* Сначала загружаем картинку, потом строим PDF */
    var buildPDF = function(imgData, imgW, imgH){
      try {
        var jsPDF = window.jspdf.jsPDF;
        var doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
        var pageW = doc.internal.pageSize.getWidth();  // 210
        var pageH = doc.internal.pageSize.getHeight(); // 297
        var margin = 18;
        var contentW = pageW - margin * 2;
        var y = margin;

        var GOLD = [201, 168, 76];
        var DARK = [10, 10, 10];
        var TEXT = [40, 40, 40];
        var GREY = [130, 130, 130];

        /* ── HEADER: золотая полоса ── */
        doc.setFillColor(DARK[0], DARK[1], DARK[2]);
        doc.rect(0, 0, pageW, 28, 'F');
        doc.setFillColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.rect(0, 26, pageW, 2, 'F');
        /* Логотип MCR PLANET */
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(18);
        doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.text('MCR PLANET', margin, 17);
        /* Подзаголовок бранда */
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(200, 200, 200);
        doc.text('Engineering · Geology · Innovation', margin, 22);
        /* Правый верх: тип документа */
        doc.setFontSize(7);
        doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.text(T.title.toUpperCase(), pageW - margin, 17, { align: 'right' });

        y = 42;

        /* ── DIVISION TAG ── */
        doc.setFontSize(8);
        doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.setFont('helvetica', 'bold');
        doc.text(divLabel.toUpperCase(), margin, y);
        y += 8;

        /* ── TITLE ── */
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(22);
        doc.setTextColor(DARK[0], DARK[1], DARK[2]);
        var titleLines = doc.splitTextToSize(title, contentW);
        doc.text(titleLines, margin, y);
        y += titleLines.length * 9;
        y += 3;

        /* Золотая линия */
        doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.setLineWidth(0.8);
        doc.line(margin, y, margin + 20, y);
        y += 8;

        /* ── IMAGE ── */
        if (imgData && imgW && imgH) {
          var maxImgH = 80;
          var ratio = imgW / imgH;
          var imgDispW = contentW;
          var imgDispH = imgDispW / ratio;
          if (imgDispH > maxImgH) {
            imgDispH = maxImgH;
            imgDispW = imgDispH * ratio;
          }
          try {
            doc.addImage(imgData, 'JPEG', margin, y, imgDispW, imgDispH);
            y += imgDispH + 8;
          } catch(e){
            /* fallback: пропускаем картинку */
            y += 3;
          }
        }

        /* ── DESCRIPTION ── */
        if (desc) {
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(10);
          doc.setTextColor(TEXT[0], TEXT[1], TEXT[2]);
          var descLines = doc.splitTextToSize(desc, contentW);
          /* Новая страница если мало места */
          if (y + descLines.length * 5 > pageH - 30) {
            doc.addPage(); y = margin;
          }
          doc.text(descLines, margin, y);
          y += descLines.length * 5 + 6;
        }

        /* ── KEY FEATURES ── */
        if (points && points.length) {
          if (y + 30 > pageH - 30) { doc.addPage(); y = margin; }
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(12);
          doc.setTextColor(DARK[0], DARK[1], DARK[2]);
          doc.text(T.features, margin, y);
          y += 6;
          doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
          doc.setLineWidth(0.5);
          doc.line(margin, y - 2, margin + 16, y - 2);
          y += 3;
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(10);
          doc.setTextColor(TEXT[0], TEXT[1], TEXT[2]);
          for (var i = 0; i < points.length; i++) {
            var bullet = '—  ' + points[i];
            var pLines = doc.splitTextToSize(bullet, contentW - 3);
            if (y + pLines.length * 5 > pageH - 30) { doc.addPage(); y = margin; }
            doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
            doc.text('—', margin, y);
            doc.setTextColor(TEXT[0], TEXT[1], TEXT[2]);
            var textLines = doc.splitTextToSize(points[i], contentW - 6);
            doc.text(textLines, margin + 5, y);
            y += textLines.length * 5 + 1;
          }
          y += 4;
        }

        /* ── SPECS TABLE ── */
        if (specs && specs.headers && specs.rows && specs.rows.length) {
          if (y + 40 > pageH - 30) { doc.addPage(); y = margin; }
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(12);
          doc.setTextColor(DARK[0], DARK[1], DARK[2]);
          doc.text(T.specs, margin, y);
          y += 6;
          doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
          doc.line(margin, y - 2, margin + 16, y - 2);
          y += 4;

          /* Таблица */
          var colW = contentW / specs.headers.length;
          /* Header row */
          doc.setFillColor(240, 237, 230);
          doc.rect(margin, y - 4, contentW, 7, 'F');
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(8);
          doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
          for (var h = 0; h < specs.headers.length; h++) {
            doc.text(String(specs.headers[h]).toUpperCase(), margin + 2 + colW * h, y);
          }
          y += 5;
          /* Rows */
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(9);
          doc.setTextColor(TEXT[0], TEXT[1], TEXT[2]);
          for (var r = 0; r < specs.rows.length; r++) {
            if (y + 6 > pageH - 30) { doc.addPage(); y = margin; }
            if (r % 2 === 0) {
              doc.setFillColor(250, 248, 244);
              doc.rect(margin, y - 3, contentW, 6, 'F');
            }
            var row = specs.rows[r];
            for (var c = 0; c < row.length; c++) {
              var cellVal = String(row[c] || '');
              /* Обрезаем если длинно */
              if (cellVal.length > 28) cellVal = cellVal.substring(0, 26) + '..';
              doc.text(cellVal, margin + 2 + colW * c, y);
            }
            y += 6;
          }
          y += 6;
        }

        /* ── CONTACT BOX (на всех последних страницах) ── */
        if (y + 35 > pageH - 25) { doc.addPage(); y = margin; }
        doc.setFillColor(DARK[0], DARK[1], DARK[2]);
        doc.rect(margin, y, contentW, 30, 'F');
        doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.setLineWidth(1);
        doc.line(margin, y, margin + contentW, y);

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.text(T.contact, margin + 5, y + 8);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(230, 230, 230);
        doc.text(T.website + ': mcrplanet.com', margin + 5, y + 16);
        doc.text(T.email + ': info@mcrplanet.com', margin + 5, y + 22);

        /* ── FOOTER на каждой странице ── */
        var totalPages = doc.internal.getNumberOfPages();
        for (var p = 1; p <= totalPages; p++) {
          doc.setPage(p);
          doc.setFontSize(7);
          doc.setFont('helvetica', 'normal');
          doc.setTextColor(GREY[0], GREY[1], GREY[2]);
          var footerY = pageH - 8;
          var date = new Date();
          var dateStr = date.getFullYear() + '-' +
                        String(date.getMonth() + 1).padStart(2, '0') + '-' +
                        String(date.getDate()).padStart(2, '0');
          doc.text(T.generated + ' ' + dateStr, margin, footerY);
          doc.text(T.page + ' ' + p + ' / ' + totalPages, pageW - margin, footerY, { align: 'right' });
          /* Золотая линия */
          doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
          doc.setLineWidth(0.3);
          doc.line(margin, footerY - 3, pageW - margin, footerY - 3);
        }

        /* Сохраняем */
        var safeName = (title || 'equipment').toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '')
          .substring(0, 50);
        doc.save('MCR-Planet-' + safeName + '.pdf');
      } catch(err) {
        console.error('PDF generation error:', err);
        alert('PDF generation failed: ' + err.message);
      } finally {
        restoreBtn();
      }
    };

    if (imgSrc) {
      getImageAsDataURL(imgSrc, function(data, w, h){
        buildPDF(data, w, h);
      });
    } else {
      buildPDF(null);
    }
  };

  /* Обновлять текст кнопки при смене языка */
  function init(){
    updateBtnLabel();
    /* Хук на eqSetLang если есть */
    if (typeof window.eqSetLang === 'function') {
      var orig = window.eqSetLang;
      window.eqSetLang = function(l){
        var r = orig.apply(this, arguments);
        setTimeout(updateBtnLabel, 50);
        return r;
      };
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
