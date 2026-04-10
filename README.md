# MCR Planet — корпоративный сайт

## Структура проекта

```
FIXED-mcr-planet-test/
├── index.html                 ~380 строк (разметка + теги подключения)
├── README.md                  ← этот файл
├── assets/
│   ├── css/
│   │   ├── base.css           ~110 строк (переменные, reset, шрифты, темы)
│   │   ├── layout.css         ~290 строк (nav, hero, секции, footer)
│   │   ├── components.css     ~270 строк (формы, кнопки, карточки)
│   │   └── catalog.css        ~310 строк (каталог-overlay, поиск, модалка)
│   └── js/
│       ├── 01-translations.js ~440 строк (CONTENT, UI, theme, lang, scroll utils)
│       ├── 02-render.js       ~900 строк (render*, accordeons, form, EmailJS)
│       ├── 03-search.js       ~410 строк (поиск главный + мобильный)
│       └── 04-catalog.js      ~430 строк (CATALOGUE, рендер, hCaptcha, поиск каталога)
├── pages/
│   ├── privacy.html           ← Privacy Policy на 3 языках (EN/ES/PL)
│   └── terms.html             ← Terms of Service на 3 языках
├── content/                   ← старые .txt справочники для ручного редактирования
└── media/
    ├── hero-bg.jpg            ← фон главного экрана
    └── cursor.png
```

JS файлы подключаются через `<script defer>` в порядке `01 → 02 → 03 → 04`. Каждый файл независим синтаксически (валидируется через `node --check`), но порядок выполнения важен — менять не нужно.

---

## Локальное открытие

**Двойной клик по `index.html` НЕ работает** — браузер блокирует загрузку JS/CSS из-за CORS на `file://`. Нужен локальный сервер:

```bash
cd FIXED-mcr-planet-test
python3 -m http.server 8000
```

Открой http://localhost:8000

Альтернатива: расширение **Live Server** в VS Code → правый клик по `index.html` → Go Live.

---

## Деплой на GitHub Pages

### Через веб-интерфейс
1. Создай репозиторий (например `mcr`) → Public
2. Add file → Upload files → перетащи **содержимое** папки `FIXED-mcr-planet-test/` (т.е. `index.html`, `assets/`, `pages/`, `media/`, `content/`, `README.md`) — НЕ саму папку!
3. Commit
4. Settings → Pages → Source: Deploy from branch → `main` / `(root)` → Save
5. Через 1-2 минуты ссылка появится сверху Pages-секции
6. **После любого обновления — Ctrl+F5** в браузере, иначе старые файлы кешируются

### Через git
```bash
cd FIXED-mcr-planet-test
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin https://github.com/<login>/mcr.git
git push -u origin main
```

---

## Что нужно настроить (3 сервиса)

В `index.html` в `<head>` есть блок инициализации с тремя секциями:

```js
window.EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY_HERE";
window.EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID_HERE";
window.EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID_HERE";
window.HCAPTCHA_SITE_KEY   = "10000000-ffff-ffff-ffff-000000000001"; // тестовый!
window.UMAMI_WEBSITE_ID    = "YOUR_UMAMI_WEBSITE_ID_HERE";
```

### 1) EmailJS — отправка формы на почту

1. Регистрация: https://www.emailjs.com (Free = 200 писем/мес)
2. **Email Services** → Add → Gmail → скопируй `service_xxxxx`
3. **Email Templates** → Create → переменные `{{from_name}}`, `{{from_email}}`, `{{direction}}`, `{{message}}`. **To Email** = твой ящик. Скопируй `template_xxxxx`
4. **Account → General** → Public Key
5. **Account → Security → Allowed Domains** → добавь `nexlyy.github.io` и (когда будет) `mcrplanet.com` — иначе кто угодно сможет спамить через твой ключ

### 2) hCaptcha — защита формы от ботов

Сейчас стоит **тестовый ключ** `10000000-ffff-ffff-ffff-000000000001` — он всегда «успешен» при любой галочке. Это нормально для разработки, но **на проде нужно заменить**:

1. Регистрация: https://www.hcaptcha.com → Sign Up
2. Add Site → введи домен (`mcrplanet.com` или `nexlyy.github.io`)
3. Скопируй **Site Key** → вставь в `window.HCAPTCHA_SITE_KEY`

Капча автоматически переключает тему (light/dark) при переключении темы сайта — это уже встроено в код.

### 3) Umami Cloud — аналитика без cookies

1. Регистрация: https://cloud.umami.is (Free план: 10K просмотров/мес, 1 сайт)
2. Add Website → введи домен
3. Скопируй **Website ID** (UUID) → вставь в `window.UMAMI_WEBSITE_ID`
4. Готово — данные начнут собираться, **никакого баннера и cookies не нужно** (Umami GDPR-clean из коробки)

Если в будущем захочешь перейти на платный Plausible или другой провайдер — нужно будет заменить только один тег `<script>` в `<head>`.

---

## Privacy Policy и Terms — что заменить

Открой `pages/privacy.html` и `pages/terms.html`, найди (Ctrl+F) **`TBD`** — все плейсхолдеры подсвечены золотой полосой и помечены `[... — TBD]`. Заменить нужно:

- `[COMPANY LEGAL NAME — TBD]` / `[NOMBRE LEGAL — TBD]` / `[NAZWA PRAWNA — TBD]` — юридическое название (например `MCR Planet Sp. z o.o.`)
- `[REGISTERED ADDRESS — TBD]` — адрес регистрации
- `[NIP — TBD]` — польский налоговый номер
- `[KRS — TBD]` — номер в реестре (если spółka)
- `[DATA CONTROLLER EMAIL — TBD]` — email на который пользователи могут писать запросы про свои данные (право доступа, удаления и т.п.)
- `[CONTACT EMAIL — TBD]` — общий контактный email

Все эти плейсхолдеры повторяются в каждом из трёх языковых блоков (EN/ES/PL) — заменяй везде.

> **Важно**: текст шаблонов составлен по структуре GDPR + типичных требований польского законодательства, но **это не замена юридической консультации**. Перед публикацией на боевом домене (`mcrplanet.com`) рекомендую дать прочитать юристу.

---

## Fluid typography

В `assets/css/base.css` стоит:
```css
html { font-size: clamp(15px, 1.05vw, 22px); }
```

- На телефоне (~400px): ~15px
- На лаптопе (1440px): ~15px
- На мониторе 24" (1920px): ~20px
- На 4K / 33": потолок 22px

Все размеры шрифтов в `rem` масштабируются автоматически.

---

## Защита от спама — что включено

1. **hCaptcha** — обязательная проверка перед отправкой формы. Без галочки кнопка Send блокируется.
2. **Honeypot поле** — невидимое поле `name="website"` в форме. Боты заполняют его автоматически → форма тихо игнорится без отправки.
3. **EmailJS Allowed Domains** — нужно настроить вручную в EmailJS dashboard (см. выше).
4. **GDPR consent checkbox** — пользователь обязан явно согласиться с Privacy Policy перед отправкой.

---

## Редактирование текстов

Тексты сайта лежат в `assets/js/01-translations.js`:
- **`CONTENT`** — секции (about, разделы, сервисы, контакты)
- **`UI`** — интерфейсные строки (кнопки, лейблы формы, навигация)

Каталог оборудования — в `assets/js/04-catalog.js`, объект **`CATALOGUE`**.

Открой нужный файл в VS Code → Ctrl+F → найди фразу → измени → Ctrl+S → Ctrl+F5 в браузере.
