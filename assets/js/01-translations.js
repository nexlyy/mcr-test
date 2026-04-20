/* === TRANSLATIONS, THEME, LANG, SCROLL UTILS === */
/* ════════════════════════════════════════
   ЧТО МЕНЯТЬ: текст между кавычками " "
   ОТКРЫТЬ В БЛОКНОТЕ → Ctrl+F → найти текст
   → изменить → Ctrl+S → F5 в браузере
   ════════════════════════════════════════ */
var CONTENT = {
  hero: {
    tagline: "Engineering · Geology · Innovation",
    subtitle: "Mine · Construction · Recycling"
  },
  about: {
    title_en:"MCR Planet is a universe where science and engineering deliver perfect solutions.",
    title_es:"MCR Planet es un universo donde la ciencia y la ingeniería ofrecen soluciones perfectas.",
    title_pl:"MCR Planet to wszechświat, w którym nauka i inżynieria dostarczają doskonałych rozwiązań.",
    p1_en:"<strong>MCR Planet</strong> is an engineering-geological company focused on solving complex problems at the intersection of scientific and applied disciplines.",
    p1_es:"<strong>MCR Planet</strong> es una empresa de ingeniería geológica enfocada en resolver problemas complejos en la intersección de las disciplinas científicas y aplicadas.",
    p1_pl:"<strong>MCR Planet</strong> to firma inżynieryjno-geologiczna skupiona na rozwiązywaniu złożonych problemów na styku dyscyplin naukowych i stosowanych.",
    p2_en:"Our core specialisation is the development and implementation of engineering-geological solutions for standard and non-standard projects combining geology, ecology, beneficiation and construction.",
    p2_es:"Nuestra especialización principal es el desarrollo e implementación de soluciones ingeniero-geológicas para proyectos estándar y no estándar que combinan geología, ecología, beneficiación y construcción.",
    p2_pl:"Naszą podstawową specjalizacją jest opracowywanie i wdrażanie rozwiązań inżynieryjno-geologicznych dla projektów standardowych i niestandardowych łączących geologię, ekologię, wzbogacanie i budownictwo.",
    p3_en:"We work with both natural and anthropogenic minerals, including the processing and economic utilisation of man-made formations and mining industry waste. Our approach is based on combining a scientific base with engineering practice.",
    p3_es:"Trabajamos tanto con minerales naturales como antropogénicos, incluyendo el procesamiento y la utilización económica de formaciones artificiales y residuos de la industria minera. Nuestro enfoque se basa en combinar una base científica con la práctica de ingeniería.",
    p3_pl:"Pracujemy zarówno z minerałami naturalnymi, jak i antropogenicznymi, w tym z przetwarzaniem i ekonomicznym wykorzystaniem formacji sztucznych i odpadów przemysłu wydobywczego. Nasze podejście opiera się na łączeniu bazy naukowej z praktyką inżynierską.",
    stats: [
      {n:"3",   l_en:"Core Divisions",      l_es:"Divisiones Principales", l_pl:"Główne Dywizje"},
      {n:"17+", l_en:"Services & Solutions", l_es:"Servicios y Soluciones",  l_pl:"Usługi i Rozwiązania"},
      {n:"3",   l_en:"Languages",            l_es:"Idiomas",                 l_pl:"Języki"},
      {n:"∞",   l_en:"Potential Projects",   l_es:"Proyectos Potenciales",   l_pl:"Potencjalne Projekty"}
    ]
  },
  contacts: {
    company:"MCR Planet",
    email:"info@mcrplanet.com",
    phone:"+XX XXX XXX XX XX"
  },
  divisions: [
    {
      id: "mine", cls: "mine", num: "01",
      name_en: "Mine", name_es: "Minería", name_pl: "Górnictwo",
      services: [
        {
          id:"geo", num:"01",
          title_en:"Geological Services", title_es:"Servicios Geológicos", title_pl:"Usługi Geologiczne",
          desc_en:"Comprehensive geological and geotechnical surveys for both mining and civil construction — from deposit assessment for industrial clients to site investigations for private developers. We reduce investment risks and ensure regulatory compliance across all project scales.",
          desc_es:"Estudios geológicos y geotécnicos integrales para minería y construcción civil — desde la evaluación de yacimientos para clientes industriales hasta investigaciones de terreno para promotores privados. Reducimos los riesgos de inversión y garantizamos el cumplimiento normativo.",
          desc_pl:"Kompleksowe badania geologiczne i geotechniczne zarówno dla górnictwa, jak i budownictwa — od oceny złóż dla klientów przemysłowych po badania podłoża dla deweloperów prywatnych. Redukujemy ryzyko inwestycyjne i zapewniamy zgodność z przepisami.",
          points_en:["Geological mapping and structural analysis (mining deposits and construction sites)", "Geophysical surveys including georadar investigations — for both deep exploration and shallow utility detection", "Laboratory sample analysis and petrographic studies (ore, waste rock, soils, and foundation materials)", "Waste rock, tailings, and spoil tip characterisation — geochemistry, acid rock drainage potential, and hazard classification", "Engineering geology for residential and commercial construction — soil mechanics, foundation design parameters, and slope stability", "Investment risk assessment and feasibility reporting (for mining projects) — or geotechnical reports for building permits", "Geological documentation and regulatory compliance packages (mining licenses or construction approvals)", "Geotechnical assessment for waste dump, tailings storage facility siting — and for building foundation design"],
          points_es:["Cartografía geológica y análisis estructural (yacimientos mineros y obras de construcción)", "Investigaciones geofísicas incluyendo georadar — para exploración profunda y detección de servicios superficiales", "Análisis de muestras en laboratorio y estudios petrográficos (mineral, roca estéril, suelos y materiales de cimentación)", "Caracterización de estériles, relaves y escombreras — geoquímica, potencial de drenaje ácido y clasificación de peligros", "Geología de ingeniería para construcción residencial y comercial — mecánica de suelos, parámetros de diseño de cimentaciones y estabilidad de taludes", "Evaluación de riesgos de inversión e informes de viabilidad (proyectos mineros) o informes geotécnicos para permisos de construcción", "Documentación geológica y paquetes de cumplimiento normativo (licencias mineras o aprobaciones de construcción)", "Evaluación geotécnica para ubicación de escombreras y balsas de relaves — y para el diseño de cimentaciones de edificios"],
          points_pl:["Kartowanie geologiczne i analiza strukturalna (złoża górnicze i place budów)", "Badania geofizyczne z georadarem — dla głębokiej eksploracji i płytkiej detekcji mediów", "Laboratoryjne analizy próbek i badania petrograficzne (rudy, skały płonne, grunty i materiały fundamentowe)", "Charakterystyka odpadów, odpadów skalnych i hałd — geochemia, potencjał kwaśnego drenażu i klasyfikacja zagrożeń", "Geologia inżynierska dla budownictwa mieszkaniowego i komercyjnego — mechanika gruntów, parametry projektowania fundamentów i stateczność skarp", "Ocena ryzyka inwestycyjnego i raporty wykonalności (projekty górnicze) lub raporty geotechniczne do pozwoleń na budowę", "Dokumentacja geologiczna i pakiety zgodności regulacyjnej (koncesje górnicze lub pozwolenia budowlane)", "Ocena geotechniczna dla lokalizacji składowisk i stawów osadowych — oraz projektowania fundamentów budynków"]
        },
        {
          id:"exp", num:"02",
          title_en:"Exploration Support", title_es:"Apoyo a la Exploración", title_pl:"Wsparcie Eksploracji",
          desc_en:"Full-cycle support for exploration and site investigations — serving both civil construction (residential, commercial, infrastructure) and industrial mining (greenfield projects, technogenic deposits, tailings, waste dumps, spoil tips). From manual drilling for house foundations to mechanical drilling for resource definition. All documentation prepared in compliance with Polish standards (PN, PN-EN, Eurocode) and local regulatory requirements.",
          desc_es:"Apoyo integral para trabajos de exploración e investigaciones de terreno — tanto para construcción civil como para minería industrial. Toda la documentación preparada conforme a las normas polacas (PN, PN-EN, Eurocódigo) y requisitos reglamentarios locales.",
          desc_pl:"Kompleksowe wsparcie prac eksploracyjnych i badań podłoża — zarówno dla budownictwa, jak i przemysłu wydobywczego. Cała dokumentacja przygotowana zgodnie z normami polskimi (PN, PN-EN, Eurokod) i lokalnymi przepisami.",
          points_en:["Exploration and site investigation programme design — drill hole layout, sampling density, and budget for civil or industrial projects", "Field works management and supervision — manual auger drilling (civil), core drilling, reverse circulation, and trenching (industrial)", "Borehole logging and geophysical surveys — shallow utility detection (civil) or deep exploration wells (industrial)", "Laboratory sample preparation and analysis — soil mechanics for foundations (civil) or ore grade and waste geochemistry (industrial)", "QA/QC protocols — certified blanks, standards, and duplicates for reliable, auditable data", "Data correlation, interpretation, and 3D modelling — foundation models for construction or geological block models for mining", "Process optimisation and operational efficiency — real-time grade control (industrial) or cost-effective site investigation workflows (civil)", "Full documentation package — geotechnical reports for building permits (civil) or resource reports for mining license applications (industrial)"],
          points_es:["Diseño del programa de exploración — distribución de sondeos, densidad de muestreo y presupuesto", "Gestión y supervisión de trabajos de campo — sondeos manuales, perforación a rotación, RC y calicatas", "Registro de sondeos y prospección geofísica — detección superficial de servicios o pozos de exploración profunda", "Preparación y análisis de muestras en laboratorio — mecánica de suelos para cimentaciones o ley del mineral y geoquímica de estériles", "Protocolos de QA/QC — blancos, estándares y duplicados certificados para datos fiables y auditables", "Correlación, interpretación y modelización 3D de datos — modelos de cimentación para construcción o modelos de bloques geológicos para minería", "Optimización de procesos y eficiencia operacional — control de ley en tiempo real o flujos de trabajo rentables", "Paquete completo de documentación — informes geotécnicos para permisos de construcción o informes de recursos para solicitudes de licencias mineras"],
          points_pl:["Projektowanie programu eksploracji — rozmieszczenie otworów, gęstość próbkowania i budżet", "Zarządzanie i nadzór prac terenowych — wiercenia ręczne, rdzeniowe, RC i wykopy", "Profilowanie otworów i badania geofizyczne — płytka detekcja mediów lub głębokie otwory eksploracyjne", "Przygotowanie i analiza próbek laboratoryjnych — mechanika gruntów dla fundamentów lub gatunek rudy i geochemia odpadów", "Protokoły QA/QC — certyfikowane blanki, standardy i duplikaty dla wiarygodnych danych", "Korelacja, interpretacja i modelowanie 3D — modele fundamentów dla budownictwa lub blokowe modele geologiczne dla górnictwa", "Optymalizacja procesów i efektywność operacyjna — kontrola gatunku w czasie rzeczywistym lub efektywne kosztowo badania", "Pełny pakiet dokumentacji — raporty geotechniczne do pozwoleń budowlanych lub raporty zasobowe do wniosków o koncesje"]
        },
        {
          id:"res", num:"03",
          title_en:"Resource Verification", title_es:"Verificación de Recursos", title_pl:"Weryfikacja Zasobów",
          desc_en:"Independent assessment and confirmation of mineral reserves, technogenic deposits (tailings, waste dumps, spoil tips), and construction raw material stocks. We provide credible, audit-ready reports for investors, banks, insurance companies, and regulatory authorities — serving both industrial mining and civil construction sectors.",
          desc_es:"Evaluación independiente y confirmación de reservas minerales, depósitos tecnogénicos y existencias de materias primas para construcción. Informes auditables para inversores, bancos, aseguradoras y autoridades regulatorias.",
          desc_pl:"Niezależna ocena i potwierdzenie zasobów mineralnych, złóż antropogenicznych i zapasów surowców budowlanych. Wiarygodne raporty dla inwestorów, banków, ubezpieczycieli i organów regulacyjnych.",
          points_en:["Independent reserve estimation in compliance with Polish standards and EU reporting guidelines", "Independent audit of existing geological and exploration data", "Third-party verification for bank financing, insurance, or regulatory approval", "Cross-validation using alternative methodologies (geostatistics, comparative drilling, laboratory re-testing)", "Verification of construction raw material stocks — sand, gravel, clay, crushed stone for civil projects", "Technogenic deposit verification — tailings, waste dumps, and spoil tips with residual value assessment", "Certified reporting for mining license applications and environmental permitting"],
          points_es:["Estimación independiente de reservas conforme a normas polacas y directrices de informes de la UE", "Auditoría independiente de datos geológicos y de exploración existentes", "Verificación de terceros para financiación bancaria, seguros o aprobación regulatoria", "Validación cruzada mediante metodologías alternativas (geoestadística, perforación comparativa)", "Verificación de existencias de materias primas para construcción — arena, grava, arcilla, piedra triturada", "Verificación de depósitos tecnogénicos — relaves, escombreras y depósitos de carbón con evaluación de valor residual", "Informes certificados para solicitudes de licencias mineras y permisos ambientales"],
          points_pl:["Niezależne szacowanie zasobów zgodnie z normami polskimi i wytycznymi UE", "Niezależny audyt istniejących danych geologicznych i eksploracyjnych", "Weryfikacja strony trzeciej dla finansowania bankowego, ubezpieczeń lub zgody regulacyjnej", "Wzajemna walidacja przy użyciu alternatywnych metodologii (geostatystyka, wiercenia porównawcze)", "Weryfikacja zapasów surowców budowlanych — piasek, żwir, glina, kruszywo", "Weryfikacja złóż antropogenicznych — odpady, hałdy i zwałowiska z oceną wartości rezydualnej", "Certyfikowane raporty do wniosków o koncesje górnicze i pozwolenia środowiskowe"]
        },
        {
          id:"adv", num:"04",
          title_en:"Mining Entry Advisory", title_es:"Consultoría de Entrada Minera", title_pl:"Doradztwo Wejścia Górniczego",
          desc_en:"Strategic consulting for the launch of new mining and quarrying projects — from regulatory navigation and permitting to operational setup and team formation. Serving both industrial mineral mining (ore, tailings, waste dumps, spoil tips) and civil construction raw materials (sand, gravel, clay, crushed stone).",
          desc_es:"Consultoría estratégica para el lanzamiento de nuevos proyectos de minería y canteras — desde la navegación regulatoria y permisos hasta la puesta en marcha operativa y formación de equipos.",
          desc_pl:"Doradztwo strategiczne przy uruchamianiu nowych projektów górniczych i kamieniołomów — od regulacji i uzyskiwania pozwoleń po operacyjne przygotowanie i budowę zespołu.",
          points_en:["Regulatory framework analysis and permitting strategy — including concessions, environmental decisions, and mining license applications (WUG, OUG, PIG-PIB)", "Business model and project structure development — CAPEX/OPEX modelling, royalty structures, and joint venture frameworks", "Asset due diligence and technical audit — verification of existing data, reserve estimates, and infrastructure condition", "Operational readiness assessment and roadmap — from site preparation to first production", "Team formation support — recruiting key personnel (mine manager, geologist, HSE officer, equipment operators) and defining roles", "Partner and investor introduction support — local and international, including debt financing and equipment leasing options", "Specialised advisory for technogenic deposits — tailings, waste dumps, and spoil tips with residual value potential"],
          points_es:["Análisis del marco regulatorio y estrategia de permisos — incluyendo concesiones, resoluciones ambientales y solicitudes de licencias", "Desarrollo de modelo de negocio y estructura del proyecto — modelización CAPEX/OPEX, estructuras de regalías y marcos de joint venture", "Due diligence de activos y auditoría técnica — verificación de datos existentes, estimaciones de reservas y condición de infraestructuras", "Evaluación de preparación operacional y hoja de ruta — desde la preparación del terreno hasta la primera producción", "Apoyo a la formación de equipos — contratación de personal clave y definición de roles", "Apoyo para introducción a socios e inversores — locales e internacionales, incluidas opciones de financiación de deuda y arrendamiento de equipos", "Asesoramiento especializado para depósitos tecnogénicos — relaves, escombreras con potencial de valor residual"],
          points_pl:["Analiza ram regulacyjnych i strategia uzyskiwania pozwoleń — w tym koncesje, decyzje środowiskowe i wnioski o licencje górnicze", "Opracowanie modelu biznesowego i struktury projektu — modelowanie CAPEX/OPEX, struktury tantiem i ramy joint venture", "Due diligence aktywów i audyt techniczny — weryfikacja istniejących danych, szacunków zasobów i stanu infrastruktury", "Ocena gotowości operacyjnej i plan działania — od przygotowania terenu do pierwszej produkcji", "Wsparcie w budowaniu zespołu — rekrutacja kluczowego personelu i definiowanie ról", "Wsparcie we wprowadzaniu do partnerów i inwestorów — lokalnych i międzynarodowych", "Specjalistyczne doradztwo dla złóż antropogenicznych — odpady, hałdy z potencjałem wartości rezydualnej"]
        },
        {
          id:"cbp", num:"05",
          title_en:"Cross-Border Projects", title_es:"Proyectos Transfronterizos", title_pl:"Projekty Transgraniczne",
          desc_en:"End-to-end management of complex international mining and quarrying projects — combining exploration, extraction, and operation across multiple jurisdictions. Serving both industrial mineral projects (ore, tailings, waste dumps, spoil tips) and civil construction raw materials (sand, gravel, clay, crushed stone). We bridge regulatory, logistical, and cultural gaps.",
          desc_es:"Gestión integral de proyectos internacionales complejos de minería y canteras — combinando exploración, extracción y operación en múltiples jurisdicciones. Salvamos barreras regulatorias, logísticas y culturales.",
          desc_pl:"Kompleksowe zarządzanie złożonymi międzynarodowymi projektami górniczymi — łączące eksplorację, wydobycie i operacje w wielu jurysdykcjach. Pokonujemy bariery regulacyjne, logistyczne i kulturowe.",
          points_en:["Multi-jurisdiction project coordination — synchronising exploration, permitting, and construction across borders", "Cross-border regulatory compliance — mining licenses, environmental permits, customs, and tax treaties", "International logistics for equipment, samples, and materials — including customs clearance and hazardous goods handling", "International technical team mobilisation — visas, work permits, accommodation, and site integration", "Technology transfer and localisation — adapting foreign technologies to local conditions, standards, and workforce skills", "Documentation and language support — certified translations, legalisation, apostille, and cross-border contract structuring", "Specialised cross-border advisory for technogenic deposits — tailings, waste dumps, and spoil tips with international investment or off-take agreements"],
          points_es:["Coordinación de proyectos multijurisdiccionales — sincronizando exploración, permisos y construcción", "Cumplimiento normativo transfronterizo — licencias mineras, permisos ambientales, aduanas y tratados fiscales", "Logística internacional para equipos, muestras y materiales — incluyendo despacho aduanero", "Movilización de equipos técnicos internacionales — visados, permisos de trabajo, alojamiento", "Transferencia de tecnología y localización — adaptando tecnologías extranjeras a condiciones locales", "Apoyo de documentación e idiomas — traducciones certificadas, legalización, apostilla", "Asesoramiento transfronterizo especializado para depósitos tecnogénicos"],
          points_pl:["Koordynacja projektów wielojurysdykcyjnych — synchronizacja eksploracji, pozwoleń i budowy", "Transgranyczna zgodność regulacyjna — licencje górnicze, pozwolenia środowiskowe, cła i traktaty podatkowe", "Logistyka międzynarodowa dla sprzętu, próbek i materiałów — w tym odprawa celna", "Mobilizacja międzynarodowych zespołów technicznych — wizy, zezwolenia na pracę, zakwaterowanie", "Transfer technologii i lokalizacja — adaptacja zagranicznych technologii do lokalnych warunków", "Wsparcie dokumentacyjne i językowe — tłumaczenia certyfikowane, legalizacja, apostille", "Specjalistyczne doradztwo transgraniczne dla złóż antropogenicznych"]
        },
        {
          id:"ant", num:"06",
          title_en:"Anthropogenic Mining", title_es:"Minería Antropogénica", title_pl:"Górnictwo Antropogeniczne",
          desc_en:"Extraction of valuable resources from industrial waste streams — tailings storage facilities, waste rock dumps, and coal spoil tips. We turn environmental liabilities into economic assets, supporting circular economy and ESG compliance.",
          desc_es:"Extracción de recursos valiosos de residuos industriales — instalaciones de almacenamiento de relaves, vertederos de roca estéril y escombreras de carbón. Convertimos pasivos ambientales en activos económicos.",
          desc_pl:"Wydobycie cennych zasobów z odpadów przemysłowych — stawów osadowych, hałd skalnych i zwałowisk węglowych. Przekształcamy zobowiązania środowiskowe w aktywa ekonomiczne.",
          points_en:["Waste characterisation and resource evaluation — tailings, waste rock, and spoil tips (grade, mineralogy, geochemistry)", "Secondary resource extraction technology selection — flotation, leaching, gravity separation, magnetic separation, or bioleaching", "Environmental impact mitigation during reprocessing — dust suppression, water recirculation, and neutralisation of acid-generating materials", "Legal and regulatory classification — transitioning waste status to secondary raw material (end-of-waste criteria, permitting)", "Economic model for waste-to-resource conversion — CAPEX/OPEX, revenue from recovered minerals, and co-product sales (briquettes, aggregates)", "Post-processing site management — tailings dry stacking, land rehabilitation, and closure of former storage facilities", "Integration with briquetting and agglomeration — converting residual material into saleable products (fuel briquettes, construction aggregates, backfill)"],
          points_es:["Caracterización de residuos y evaluación de recursos — relaves, roca estéril y escombreras", "Selección de tecnología de extracción secundaria — flotación, lixiviación, separación gravimétrica, magnética o biolixiviación", "Mitigación del impacto ambiental durante el reprocesamiento — supresión de polvo, recirculación de agua y neutralización", "Clasificación legal y regulatoria — transitando el estado de residuo a materia prima secundaria", "Modelo económico para la conversión de residuo en recurso — CAPEX/OPEX y ventas de coproductos", "Gestión posterior al procesamiento — apilamiento en seco de relaves y rehabilitación del terreno", "Integración con briquetado y aglomeración — convirtiendo material residual en productos comercializables"],
          points_pl:["Charakterystyka odpadów i ocena zasobów — odpady, skały płonne i hałdy", "Dobór technologii wydobycia wtórnego — flotacja, ługowanie, grawitacja, separacja magnetyczna lub bioługowanie", "Łagodzenie wpływu środowiskowego podczas przeróbki — tłumienie pyłu, recyrkulacja wody i neutralizacja", "Prawna i regulacyjna klasyfikacja — zmiana statusu odpadu na surowiec wtórny", "Model ekonomiczny konwersji odpadu na zasób — CAPEX/OPEX i sprzedaż produktów ubocznych", "Zarządzanie terenem po przeróbce — suche składowanie odpadów i rekultywacja", "Integracja z brykietowaniem i aglomeracją — przekształcanie materiału resztkowego w produkty handlowe"]
        },
        {
          id:"phy", num:"07",
          title_en:"Bioremediation & Biomass Valorisation", title_es:"Biorremediación y Valorización de Biomasa", title_pl:"Bioremediacja i Waloryzacja Biomasy",
          desc_en:"Integrated plant-based solutions for contaminated sites, tailings, waste dumps, and spoil tips — combining soil and air remediation with biomass production for energy, wood processing, and recovery of rare earth elements (REE) and other valuable components.",
          desc_es:"Soluciones integradas basadas en plantas para sitios contaminados, relaves, vertederos y escombreras — combinando remediación del suelo y el aire con producción de biomasa para energía, procesamiento de madera y recuperación de tierras raras (REE).",
          desc_pl:"Zintegrowane rozwiązania roślinne dla terenów skażonych, stawów osadowych, hałd i zwałowisk — łączące remediację gleby i powietrza z produkcją biomasy na potrzeby energii, przetwórstwa drewna i odzysku pierwiastków ziem rzadkich (REE).",
          points_en:["Site assessment for bioremediation and biomass potential — soil contamination, metal content (including REE), climate, and timeline", "Hyperaccumulator and fast-growing species selection — for REE recovery (willow, miscanthus, ferns), biomass yield, and wood quality", "Cultivation and plantation management — including phytostabilisation, phytoextraction, and optimisation for multiple outputs", "Rare earth elements (REE) recovery from plant biomass — neodymium, lanthanum, cerium, praseodymium, and other critical raw materials", "Biomass conversion to biofuel — wood pellets, briquettes, chips, or syngas for heat and power generation", "Wood harvesting for timber and wood processing — construction lumber, pallets, furniture blanks, or engineered wood products", "Air quality improvement and soil cleansing — capture of airborne particulates, heavy metal immobilisation, and gradual soil restoration", "Post-project land use planning — agricultural return, reforestation, carbon credit certification, or preparation for civil construction", "Carbon credit certification and trading — verified emission reductions (carbon sequestration in biomass and soil) for compliance or voluntary carbon markets"],
          points_es:["Evaluación del sitio para biorremediación y potencial de biomasa — contaminación del suelo, contenido metálico (incluido REE), clima y cronograma", "Selección de especies hiperacumuladoras y de crecimiento rápido — para recuperación de REE, rendimiento de biomasa y calidad de madera", "Cultivo y gestión de plantaciones — incluyendo fitoestabilización, fitoextracción y optimización para múltiples productos", "Recuperación de tierras raras (REE) de biomasa vegetal — neodimio, lantano, cerio, praseodimio y otros materiales críticos", "Conversión de biomasa en biocombustible — pellets de madera, briquetas, astillas o gas de síntesis para generación de calor y energía", "Cosecha de madera para procesamiento — madera de construcción, paletas o productos de madera de ingeniería", "Mejora de la calidad del aire y limpieza del suelo — captura de partículas, inmovilización de metales pesados y restauración gradual del suelo", "Planificación del uso del terreno posterior al proyecto — retorno agrícola, reforestación o preparación para construcción civil", "Certificación y comercio de créditos de carbono — reducciones de emisiones verificadas para mercados de carbono de cumplimiento o voluntarios"],
          points_pl:["Ocena terenu pod kątem bioremediacji i potencjału biomasy — skażenie gleby, zawartość metali (w tym REE), klimat i harmonogram", "Dobór gatunków hiperakumulujących i szybkorosnących — dla odzysku REE, plonów biomasy i jakości drewna", "Uprawa i zarządzanie plantacjami — w tym fitostabilizacja, fitoekstrakcja i optymalizacja dla wielu produktów", "Odzysk pierwiastków ziem rzadkich (REE) z biomasy roślinnej — neodym, lantan, cer, prazeodym i inne materiały krytyczne", "Konwersja biomasy na biopaliwo — pelety drzewne, brykiety, zrębki lub gaz syntezowy do produkcji ciepła i energii", "Pozyskiwanie drewna do przetwórstwa — drewno konstrukcyjne, palety lub wyroby z drewna inżynierskiego", "Poprawa jakości powietrza i oczyszczanie gleby — wychwytywanie pyłów, immobilizacja metali ciężkich i stopniowa odbudowa gleby", "Planowanie użytkowania terenu po projekcie — powrót rolniczy, zalesianie lub przygotowanie pod budownictwo", "Certyfikacja i handel kredytami węglowymi — zweryfikowane redukcje emisji dla rynków carbon compliance lub dobrowolnych"]
        }
      ]
    },
    {
      id: "construction", cls: "construction", num: "02",
      name_en: "Construction", name_es: "Construcción", name_pl: "Budownictwo",
      services: [
        {
          id:"ind", num:"01",
          title_en:"Industrial Installations", title_es:"Instalaciones Industriales", title_pl:"Instalacje Przemysłowe",
          desc_en:"Design and full turnkey construction of industrial facilities — from initial concept to commissioning, tailored to the specific demands of mining and heavy industry.",
          desc_es:"Diseño y construcción llave en mano de instalaciones industriales — desde el concepto inicial hasta la puesta en marcha, adaptado a las demandas específicas de la minería y la industria pesada.",
          desc_pl:"Projektowanie i budowa obiektów przemysłowych pod klucz — od koncepcji do uruchomienia, dostosowane do wymagań górnictwa i przemysłu ciężkiego.",
          points_en:["Concept design and feasibility studies (CAPEX/OPEX, risk assessment)", "Detailed engineering, 3D modeling, and technical documentation", "Construction management, occupational safety, health, environmental protection, and quality control using non-destructive testing methods", "Commissioning, staff training, and handover support", "Post-commissioning warranty and operational maintenance", "Modular construction, IIoT integration, in-house logistics for heavy gear.", "Zero-accident culture, dust suppression, ESG compliance."],
          points_es:["Diseño conceptual y estudios de viabilidad (CAPEX/OPEX, evaluación de riesgos)", "Ingeniería detallada, modelado 3D y documentación técnica", "Gestión de construcción, seguridad laboral, salud, protección ambiental y control de calidad", "Puesta en marcha, formación de personal y apoyo para la entrega", "Garantía post-puesta en marcha y mantenimiento operacional", "Construcción modular, integración IIoT, logística interna para equipos pesados", "Cultura cero accidentes, supresión de polvo, cumplimiento ESG"],
          points_pl:["Projekt koncepcyjny i studia wykonalności (CAPEX/OPEX, ocena ryzyka)", "Szczegółowe inżynieria, modelowanie 3D i dokumentacja techniczna", "Zarządzanie budową, BHP, ochrona środowiska i kontrola jakości z badaniami nieniszczącymi", "Uruchomienie, szkolenie personelu i wsparcie przy odbiorze", "Gwarancja po uruchomieniu i konserwacja operacyjna", "Budownictwo modułowe, integracja IIoT, własna logistyka ciężkiego sprzętu", "Kultura zerowej liczby wypadków, tłumienie pyłu, zgodność ESG"]
        },
        {
          id:"eng", num:"02",
          title_en:"Engineering Support", title_es:"Soporte de Ingeniería", title_pl:"Wsparcie Inżynieryjne",
          desc_en:"Continuous engineering support throughout all stages of project implementation — ensuring technical integrity, schedule adherence, and adaptive problem-solving.",
          desc_es:"Soporte continuo de ingeniería en todas las etapas de implementación del proyecto — garantizando integridad técnica, cumplimiento del cronograma y resolución adaptativa de problemas.",
          desc_pl:"Ciągłe wsparcie inżynieryjne na wszystkich etapach realizacji projektu — zapewniające integralność techniczną, dotrzymanie harmonogramu i adaptacyjne rozwiązywanie problemów.",
          points_en:["On-site and remote engineering supervision", "Technical risk identification and mitigation", "Change management and scope control", "Progress reporting and stakeholder communication", "Digital document management and on-site resolution of design discrepancies"],
          points_es:["Supervisión de ingeniería in situ y remota", "Identificación y mitigación de riesgos técnicos", "Gestión de cambios y control del alcance", "Informes de progreso y comunicación con partes interesadas", "Gestión digital de documentos y resolución in situ de discrepancias de diseño"],
          points_pl:["Nadzór inżynieryjny na miejscu i zdalny", "Identyfikacja i ograniczanie ryzyka technicznego", "Zarządzanie zmianami i kontrola zakresu", "Raporty postępu i komunikacja z interesariuszami", "Cyfrowe zarządzanie dokumentacją i rozwiązywanie rozbieżności projektowych na miejscu"]
        },
        {
          id:"tec", num:"03",
          title_en:"Technology Partnerships", title_es:"Asociaciones Tecnológicas", title_pl:"Partnerstwa Technologiczne",
          desc_en:"Strategic collaboration with leading technology providers to integrate advanced solutions into industrial construction and operations.",
          desc_es:"Colaboración estratégica con los principales proveedores de tecnología para integrar soluciones avanzadas en la construcción y operaciones industriales.",
          desc_pl:"Strategiczna współpraca z wiodącymi dostawcami technologii w celu integracji zaawansowanych rozwiązań w budownictwie i operacjach przemysłowych.",
          points_en:["Identification and vetting of best‑in‑class technology partners for each project scope", "Structuring of joint ventures, licensing agreements, and technology access contracts", "Seamless integration and on‑site adaptation of partner technologies", "Comprehensive training and hands‑on knowledge transfer for client teams", "Access to exclusive technologies and preferential pricing through long‑term partnerships"],
          points_es:["Identificación y evaluación de los mejores socios tecnológicos para cada alcance de proyecto", "Estructuración de joint ventures, acuerdos de licencia y contratos de acceso tecnológico", "Integración perfecta y adaptación in situ de tecnologías de socios", "Formación integral y transferencia práctica de conocimientos para equipos de clientes", "Acceso a tecnologías exclusivas y precios preferenciales a través de asociaciones a largo plazo"],
          points_pl:["Identyfikacja i weryfikacja najlepszych partnerów technologicznych dla każdego zakresu projektu", "Strukturyzacja joint venture, umów licencyjnych i kontraktów dostępu do technologii", "Płynna integracja i adaptacja technologii partnerskich na miejscu", "Kompleksowe szkolenia i praktyczny transfer wiedzy dla zespołów klientów", "Dostęp do ekskluzywnych technologii i preferencyjnych cen poprzez długoterminowe partnerstwa"]
        },
        {
          id:"eqp", num:"04",
          title_en:"Tailings, Waste Rock & Spoil Tip Processing Equipment", title_es:"Equipos para Procesamiento de Relaves y Residuos", title_pl:"Sprzęt do Przeróbki Odpadów i Zwałowisk",
          desc_en:"Supply of equipment for reprocessing all types of mining waste — tailings storage facilities, waste rock dumps, and coal spoil tips — extracting residual valuable minerals, and converting residual material into briquettes, pellets, or aggregates for commercial use.",
          desc_es:"Suministro de equipos para el reprocesamiento de todo tipo de residuos mineros — instalaciones de almacenamiento de relaves, vertederos de roca estéril y escombreras de carbón — extrayendo minerales valiosos residuales y convirtiendo el material en briquetas, pellets o áridos.",
          desc_pl:"Dostawa sprzętu do przeróbki wszystkich typów odpadów górniczych — stawów osadowych, hałd skalnych i zwałowisk węglowych — wydobywającego resztkowe cenne minerały i przetwarzającego materiał w brykiety, pelety lub kruszywa.",
          points_en:["Waste stream analysis and recovery potential assessment for tailings, dumps, and spoil tips", "Selection of reprocessing equipment for fines, slimes, coarse waste rock, and coal spoil", "Procurement, logistics, and site delivery of complete waste treatment lines", "Installation supervision and performance testing with recovery rate verification", "After-sales support, wear parts supply, and process optimisation for maximum yield", "Briquetting, pelletising, and agglomeration equipment — converting residual waste into saleable products", "Binder mixing and dosing systems — precise formulation for strong, durable briquettes and pellets"],
          points_es:["Análisis de la corriente de residuos y evaluación del potencial de recuperación", "Selección de equipos de reprocesamiento para finos, lodos, roca estéril gruesa y carbón", "Adquisición, logística y entrega en obra de líneas completas de tratamiento de residuos", "Supervisión de instalación y pruebas de rendimiento con verificación de tasa de recuperación", "Soporte post-venta, suministro de piezas de desgaste y optimización de procesos", "Equipos de briquetado, peletización y aglomeración — convirtiendo residuos en productos comercializables", "Sistemas de mezcla y dosificación de aglomerantes — formulación precisa para briquetas y pellets duraderos"],
          points_pl:["Analiza strumienia odpadów i ocena potencjału odzysku", "Dobór sprzętu do przeróbki drobnych, szlamów, gruboziarnistych skał płonnych i węgla", "Zakup, logistyka i dostawa kompletnych linii przeróbki odpadów na plac budowy", "Nadzór montażu i testy wydajności z weryfikacją wskaźnika odzysku", "Wsparcie posprzedażowe, dostawa części zużywalnych i optymalizacja procesów", "Sprzęt do brykietowania, peletowania i aglomeracji — przekształcanie odpadów w produkty handlowe", "Systemy mieszania i dozowania spoiw — precyzyjna formulacja dla trwałych brykietów i peletów"]
        }
      ]
    },
    {
      id: "recycling", cls: "recycling", num: "03",
      name_en: "Recycling", name_es: "Reciclaje", name_pl: "Recykling",
      services: [
        {
          id:"wst", num:"01",
          title_en:"Waste Processing — Mining & Industrial Tailings", title_es:"Procesamiento de Relaves y Residuos Industriales", title_pl:"Przeróbka Odpadów Górniczych i Przemysłowych",
          desc_en:"Mechanical and physical processing of mining waste — tailings, waste rock, and spoil tips from coal, ferrous metals (Fe, Mn, Cr), base metals (Cu, Zn, Pb, Ni, Co), precious metals (Au, Ag, Pt, Pd), and rare earth elements (REE). Transforming low-grade stockpiles into marketable concentrates and secondary raw materials — including clean sand for construction and industry.",
          desc_es:"Procesamiento mecánico y físico de residuos mineros — relaves, roca estéril y escombreras de carbón, metales ferrosos, metales base, metales preciosos y tierras raras (REE). Transformando stockpiles de baja ley en concentrados comercializables.",
          desc_pl:"Mechaniczna i fizyczna przeróbka odpadów górniczych — odpadów, skał płonnych i zwałowisk węglowych, metali żelaznych, metali podstawowych, metali szlachetnych i pierwiastków ziem rzadkich (REE). Przekształcanie ubogich stockpili w konflikty rynkowe.",
          points_en:["Waste stream characterisation and liberation analysis — particle size, mineralogy, metal distribution (including trace precious metals and REE), clay content, and comminution behaviour", "Processing technology selection and design — crushing, grinding, screening, gravity separation, magnetic separation, flotation, sensor-based sorting, or hydrometallurgical extraction for REE", "Coal waste processing — recovery of middlings and fine coal from spoil tips for fuel or power generation", "Sand cleaning and desliming — removal of clay, silt, fine gangue, and residual reagents from technogenic sands to produce clean fractions for construction, glass industry, or foundry use", "Base and precious metals tailings processing — copper, zinc, lead, nickel, cobalt, plus gold, silver, platinum, palladium — recovering residual sulphides, oxides, and native metals", "Ferrous metals waste processing — iron, manganese, chromium — magnetic separation and gravity concentration for metallurgical feed", "Rare earth elements (REE) recovery from tailings — neodymium, lanthanum, cerium, praseodymium, scandium, yttrium — using gravity pre-concentration, flotation, or acid leaching", "Yield optimisation and quality control — grade-recovery curves, real-time monitoring, and concentrate certification", "Tailings dewatering and dry stacking — reducing water consumption and eliminating wet tailings dams", "Regulatory compliance and environmental monitoring — permits, discharge limits, dust control, and water recirculation"],
          points_es:["Caracterización de residuos y análisis de liberación — tamaño de partícula, mineralogía, distribución de metales, contenido de arcilla", "Selección y diseño de tecnología de procesamiento — trituración, molienda, cribado, separación gravimétrica, flotación o extracción hidrometalúrgica", "Procesamiento de residuos de carbón — recuperación de intermedios y carbón fino de escombreras", "Limpieza y deslamado de arena — eliminación de arcilla, limo y reactivos residuales de arenas tecnogénicas", "Procesamiento de relaves de metales base y preciosos — cobre, zinc, plomo, níquel, cobalto, oro, plata, platino, paladio", "Procesamiento de residuos de metales ferrosos — hierro, manganeso, cromo — separación magnética y concentración gravimétrica", "Recuperación de tierras raras (REE) de relaves — neodimio, lantano, cerio, praseodimio, escandio, itrio", "Optimización del rendimiento y control de calidad — curvas grado-recuperación y monitorización en tiempo real", "Deshidratación de relaves y apilamiento en seco — reduciendo el consumo de agua", "Cumplimiento regulatorio y monitoreo ambiental — permisos, límites de vertido y control de polvo"],
          points_pl:["Charakterystyka strumienia odpadów i analiza uwolnienia — rozmiar ziarna, mineralogia, rozkład metali, zawartość gliny", "Dobór i projektowanie technologii przeróbki — kruszenie, mielenie, przesiewanie, grawitacja, flotacja lub ekstrakcja hydrometalurgiczna", "Przeróbka odpadów węglowych — odzysk miałów i drobnego węgla ze zwałowisk", "Czyszczenie i odszlamowanie piasku — usuwanie gliny, mułu i resztkowych reagentów z piasków technogenicznych", "Przeróbka odpadów metali podstawowych i szlachetnych — miedź, cynk, ołów, nikiel, kobalt, złoto, srebro, platyna, pallad", "Przeróbka odpadów metali żelaznych — żelazo, mangan, chrom — separacja magnetyczna i koncentracja grawitacyjna", "Odzysk pierwiastków ziem rzadkich (REE) z odpadów — neodym, lantan, cer, prazeodym, skand, itr", "Optymalizacja wydajności i kontrola jakości — krzywe gatunek-odzysk i monitoring w czasie rzeczywistym", "Odwadnianie odpadów i suche składowanie — redukcja zużycia wody", "Zgodność regulacyjna i monitoring środowiskowy — pozwolenia, limity zrzutów i kontrola pyłu"]
        },
        {
          id:"req", num:"02",
          title_en:"Recycling Equipment & Processing Lines", title_es:"Equipos para Procesamiento de Relaves", title_pl:"Sprzęt do Przeróbki Odpadów Górniczych",
          desc_en:"Mechanical and physical processing of mining waste — tailings, waste rock, and spoil tips from coal, ferrous metals (Fe, Mn, Cr), base metals (Cu, Zn, Pb, Ni, Co), precious metals (Au, Ag, Pt, Pd), and rare earth elements (REE). Transforming low-grade stockpiles into marketable concentrates and secondary raw materials — including clean sand for construction and industry.",
          desc_es:"Procesamiento mecánico y físico de residuos mineros de todos los tipos — transformando stockpiles en concentrados comercializables y materias primas secundarias, incluyendo arena limpia para construcción e industria.",
          desc_pl:"Mechaniczna i fizyczna przeróbka wszystkich typów odpadów górniczych — przekształcanie stockpili w konflikty rynkowe i surowce wtórne, w tym czysty piasek do budownictwa i przemysłu.",
          points_en:["Waste stream characterisation and liberation analysis — particle size, mineralogy, metal distribution (including trace precious metals and REE), clay content, and comminution behaviour", "Processing technology selection and design — crushing, grinding, screening, gravity separation, magnetic separation, flotation, sensor-based sorting, or hydrometallurgical extraction for REE", "Coal waste processing — recovery of middlings and fine coal from spoil tips for fuel or power generation", "Sand cleaning and desliming — removal of clay, silt, fine gangue, and residual reagents from technogenic sands to produce clean fractions for construction, glass industry, or foundry use", "Base and precious metals tailings processing — copper, zinc, lead, nickel, cobalt, plus gold, silver, platinum, palladium — recovering residual sulphides, oxides, and native metals", "Ultra-fine particle processing — separation and recovery of valuable components (precious metals, REE, fine sulphides) from particles down to 0.001 mm (1 micron), maximising yield from historically unrecoverable fines", "Ferrous metals waste processing — iron, manganese, chromium — magnetic separation and gravity concentration for metallurgical feed", "Rare earth elements (REE) recovery from tailings — neodymium, lanthanum, cerium, praseodymium, scandium, yttrium — using gravity pre-concentration, flotation, or acid leaching", "Yield optimisation and quality control — grade-recovery curves, real-time monitoring, and concentrate certification", "Tailings dewatering and dry stacking — reducing water consumption and eliminating wet tailings dams", "Regulatory compliance and environmental monitoring — permits, discharge limits, dust control, and water recirculation"],
          points_es:["Caracterización del residuo y análisis de liberación — tamaño de partícula, mineralogía, distribución de metales, contenido de arcilla", "Selección y diseño de tecnología — trituración, molienda, cribado, separación gravimétrica, flotación", "Procesamiento de residuos de carbón — recuperación de intermedios y carbón fino", "Limpieza y deslamado de arena — producción de fracciones limpias para construcción, vidrio o fundición", "Procesamiento de relaves de metales base y preciosos — cobre, zinc, plomo, níquel, oro, plata, platino, paladio", "Tecnología de separación de partículas ultrafinas — recuperación de metales preciosos y REE de partículas hasta 0,001 mm", "Procesamiento de residuos de metales ferrosos — separación magnética y concentración gravimétrica", "Recuperación de REE de relaves — neodimio, lantano, cerio, praseodimio, escandio, itrio", "Optimización del rendimiento y control de calidad", "Deshidratación de relaves y apilamiento en seco", "Cumplimiento regulatorio y monitoreo ambiental"],
          points_pl:["Charakterystyka odpadu i analiza uwolnienia — rozmiar ziarna, mineralogia, rozkład metali, zawartość gliny", "Dobór i projektowanie technologii — kruszenie, mielenie, przesiewanie, grawitacja, flotacja", "Przeróbka odpadów węglowych — odzysk miałów i drobnego węgla", "Czyszczenie i odszlamowanie piasku — produkcja czystych frakcji do budownictwa, szkła lub odlewnictwa", "Przeróbka odpadów metali podstawowych i szlachetnych — miedź, cynk, ołów, nikiel, złoto, srebro, platyna, pallad", "Technologia separacji cząstek ultrarzadkich — odzysk metali szlachetnych i REE z cząstek do 0,001 mm", "Przeróbka odpadów metali żelaznych — separacja magnetyczna i koncentracja grawitacyjna", "Odzysk REE z odpadów — neodym, lantan, cer, prazeodym, skand, itr", "Optymalizacja wydajności i kontrola jakości", "Odwadnianie odpadów i suche składowanie", "Zgodność regulacyjna i monitoring środowiskowy"]
        },
        {
          id:"irt", num:"03",
          title_en:"Innovative Recycling Technologies", title_es:"Tecnologías Innovadoras de Reciclaje", title_pl:"Innowacyjne Technologie Recyklingu",
          desc_en:"Advanced proprietary and integrated technologies that increase profitability and environmental performance of mining waste processing — including ultra-fine particle separation (down to 0.001 mm), coal briquette production, sand cleaning, and energy-efficient beneficiation.",
          desc_es:"Tecnologías avanzadas que aumentan la rentabilidad y el rendimiento ambiental del procesamiento de residuos mineros — incluyendo separación de partículas ultrafinas (hasta 0,001 mm), producción de briquetas de carbón, limpieza de arena y beneficiación eficiente en energía.",
          desc_pl:"Zaawansowane technologie zwiększające rentowność i wydajność środowiskową przeróbki odpadów górniczych — w tym separacja cząstek ultrarzadkich (do 0,001 mm), produkcja brykietów węglowych, czyszczenie piasku i energooszczędne wzbogacanie.",
          points_en:["Ultra-fine particle separation technology — recovery of valuable components (precious metals, REE, fine sulphides) from particles as fine as 0.001 mm (1 micron), unlocking value from historically unrecoverable tailings and slimes", "Coal briquette and pellet production technology — converting fine coal waste and middlings into high-calorific, transportable fuel briquettes for industrial and municipal use", "Technogenic sand cleaning technology — upgrading contaminated mining sands to clean fractions for construction, glass, foundry, and filtration industries", "Energy-efficient beneficiation processes — reduced power consumption per tonne of feed compared to conventional methods, lowering operational costs and carbon footprint", "Digital process optimisation — real-time monitoring, AI-driven grade-recovery control, and predictive maintenance for maximum uptime and recovery", "Technology deployment at client facilities — turnkey installation, integration with existing lines, and full operator training", "Performance benchmarking and continuous improvement — tracking recovery rates, product quality, energy consumption, and equipment uptime, with ongoing process refinement"],
          points_es:["Tecnología de separación de partículas ultrafinas — recuperación de metales preciosos, REE y sulfuros finos de partículas tan finas como 0,001 mm (1 micrón)", "Tecnología de producción de briquetas y pellets de carbón — convirtiendo residuos de carbón fino en combustibles de alto poder calorífico", "Tecnología de limpieza de arena tecnogénica — actualizando arenas mineras contaminadas a fracciones limpias", "Procesos de beneficiación energéticamente eficientes — consumo de energía reducido por tonelada de alimentación", "Optimización de procesos digital — monitorización en tiempo real, control grado-recuperación impulsado por IA y mantenimiento predictivo", "Despliegue de tecnología en instalaciones del cliente — instalación llave en mano e integración con líneas existentes", "Benchmarking de rendimiento y mejora continua — seguimiento de tasas de recuperación, calidad del producto y tiempo de actividad"],
          points_pl:["Technologia separacji cząstek ultrarzadkich — odzysk metali szlachetnych, REE i drobnych siarczków z cząstek do 0,001 mm (1 mikrona)", "Technologia produkcji brykietów i peletów węglowych — przekształcanie drobnych odpadów węglowych w paliwa o wysokiej kaloryczności", "Technologia czyszczenia piasku technogenicznego — ulepszanie skażonych piasków górniczych do czystych frakcji", "Energooszczędne procesy wzbogacania — zmniejszone zużycie energii na tonę nadawy", "Cyfrowa optymalizacja procesów — monitoring w czasie rzeczywistym, sterowanie gatunek-odzysk przez AI i predykcyjne utrzymanie ruchu", "Wdrożenie technologii w obiektach klienta — montaż pod klucz i integracja z istniejącymi liniami", "Benchmarking wydajności i ciągłe doskonalenie — śledzenie wskaźników odzysku, jakości produktu i czasu pracy"]
        },
        {
          id:"sus", num:"04",
          title_en:"Sustainability Projects", title_es:"Proyectos de Sostenibilidad", title_pl:"Projekty Zrównoważonego Rozwoju",
          desc_en:"Sustainability and ESG projects for mining and industrial clients — reducing environmental footprint through waste valorisation, energy-efficient processing, and zero-waste implementation. We turn environmental liabilities into measurable ESG improvements.",
          desc_es:"Proyectos de sostenibilidad y ESG para clientes mineros e industriales — reduciendo la huella ambiental mediante la valorización de residuos, procesamiento eficiente en energía e implementación de cero residuos.",
          desc_pl:"Projekty zrównoważonego rozwoju i ESG dla klientów górniczych i przemysłowych — redukcja śladu środowiskowego poprzez waloryzację odpadów, energooszczędną przeróbkę i wdrożenie zero odpadów.",
          points_en:["Environmental impact assessment and ESG reporting — baseline studies, materiality assessments, and investor-grade sustainability reports aligned with EU standards", "Zero-waste programme design for mining operations — a three-stage approach: Stage 1 — Laboratory analysis: waste characterisation (geochemistry, mineralogy, particle size down to 0.001 mm), beneficiation tests (gravity, magnetic, flotation, leaching) Stage 2 — Feasibility assessment: technical and economic evaluation — recovery rates, product quality, energy consumption, market value Stage 3 — Implementation: process design and deployment for recovery of valuable components and conversion of residual fractions into saleable products (briquettes, clean sand, concentrates)", "Carbon footprint reduction strategies — through energy-efficient comminution, water recirculation, and replacement of virgin raw materials with secondary resources from mining waste", "Water stewardship and recirculation — reducing fresh water intake by up to 80% through closed-loop processing and efficient dewatering of tailings", "Remediation of contaminated sites — former tailings storage facilities, waste dumps, and spoil tips transformed into safe, usable land (agriculture, forestry, or construction)", "Stakeholder engagement and sustainability communication — community relations, regulatory reporting, and ESG communication for investors and lenders"],
          points_es:["Evaluación del impacto ambiental e informes ESG — estudios de referencia, evaluaciones de materialidad e informes de sostenibilidad para inversores alineados con estándares de la UE", "Programa de cero residuos — Etapa 1: análisis de laboratorio; Etapa 2: evaluación de viabilidad técnica y económica; Etapa 3: implementación del proceso", "Estrategias de reducción de huella de carbono — conminución eficiente en energía y sustitución de materias primas vírgenes por recursos secundarios", "Gestión del agua y recirculación — reduciendo la captación de agua dulce hasta en un 80%", "Remediación de sitios contaminados — antiguas instalaciones de relaves transformadas en terrenos seguros y utilizables", "Compromiso con las partes interesadas y comunicación de sostenibilidad — relaciones comunitarias, informes regulatorios y comunicación ESG"],
          points_pl:["Ocena wpływu środowiskowego i raportowanie ESG — badania bazowe, oceny materialności i raporty zrównoważonego rozwoju dla inwestorów", "Program zero odpadów — Etap 1: analiza laboratoryjna; Etap 2: ocena wykonalności technicznej i ekonomicznej; Etap 3: wdrożenie procesu", "Strategie redukcji śladu węglowego — energooszczędne kruszenie i zastąpienie pierwotnych surowców zasobami wtórnymi", "Gospodarka wodna i recyrkulacja — redukcja poboru słodkiej wody nawet o 80%", "Remediacja terenów skażonych — dawne obiekty składowania odpadów przekształcone w bezpieczne, użytkowe tereny", "Zaangażowanie interesariuszy i komunikacja zrównoważonego rozwoju — relacje społecznościowe, raportowanie regulacyjne i komunikacja ESG"]
        },
        {
          id:"bio", num:"05",
          title_en:"Biofuel Solutions", title_es:"Soluciones de Biocombustible", title_pl:"Rozwiązania Biopaliw",
          desc_en:"Production of solid biofuels from biomass grown on contaminated and post-mining lands — tailings, waste dumps, and spoil tips. We convert phytoremediation biomass into commercially viable energy carriers — wood pellets, briquettes, and chips for heat and power generation.",
          desc_es:"Producción de biocombustibles sólidos a partir de biomasa cultivada en terrenos contaminados y post-mineros — relaves, vertederos y escombreras. Convertimos biomasa de fitorremediación en portadores de energía comercialmente viables.",
          desc_pl:"Produkcja stałych biopaliw z biomasy uprawianej na terenach skażonych i pogórniczych — stawach osadowych, hałdach i zwałowiskach. Przekształcamy biomasę fitoremediacyną w komercyjnie opłacalne nośniki energii.",
          points_en:["Feedstock assessment and fuel yield analysis — biomass quality (moisture, ash content, calorific value), harvest volume, and seasonal availability", "Pellet and briquette fuel production systems — drying, grinding, compression, and cooling lines for wood pellets, industrial briquettes, and bio-coal", "Biomass pre-treatment for fuel quality — debarking, chipping, screening, and blending to meet ENplus or ISO 17225 standards for solid biofuels", "Laboratory testing of fuel properties — calorific value, ash melting behaviour, chlorine and sulphur content, and mechanical durability", "Off-take market identification and supply chain setup — connecting biomass producers with heat and power plants, cement kilns, or residential fuel distributors", "Integration with phytoremediation projects — turning environmental liabilities (contaminated sites) into revenue-generating biofuel feedstocks"],
          points_es:["Evaluación de materia prima y análisis de rendimiento de combustible — calidad de biomasa, volumen de cosecha y disponibilidad estacional", "Sistemas de producción de pellets y briquetas — secado, molienda, compresión y enfriamiento", "Pretratamiento de biomasa para calidad del combustible — descortezado, astillado, cribado y mezcla para cumplir normas ENplus o ISO 17225", "Pruebas de laboratorio de propiedades del combustible — valor calorífico, comportamiento de fusión de cenizas, contenido de cloro y azufre", "Identificación del mercado de compra y configuración de la cadena de suministro — conectando productores de biomasa con plantas de calor y energía", "Integración con proyectos de fitorremediación — convirtiendo pasivos ambientales en materias primas de biocombustible que generan ingresos"],
          points_pl:["Ocena surowca i analiza wydajności paliwa — jakość biomasy, wolumen zbioru i dostępność sezonowa", "Systemy produkcji peletów i brykietów — suszenie, mielenie, prasowanie i chłodzenie", "Wstępna obróbka biomasy dla jakości paliwa — korowarka, rębak, przesiewacz i blending do standardów ENplus lub ISO 17225", "Laboratoryjne badania właściwości paliwa — wartość opałowa, zachowanie popiołu, zawartość chloru i siarki", "Identyfikacja rynku odbioru i konfiguracja łańcucha dostaw — łączenie producentów biomasy z elektrociepłowniami", "Integracja z projektami fitoremediacyi — przekształcanie zobowiązań środowiskowych w dochodowe surowce biopaliw"]
        },
        {
          id:"lan", num:"06",
          title_en:"Land Reclamation", title_es:"Recuperación de Tierras", title_pl:"Rekultywacja Terenów",
          desc_en:"Ecological restoration and rehabilitation of territories impacted by mining and industrial activity — tailings storage facilities, waste dumps, spoil tips, quarries, and processing sites. Bringing degraded land back to agricultural, forestry, recreational, or construction use.",
          desc_es:"Restauración ecológica y rehabilitación de territorios afectados por la actividad minera e industrial — instalaciones de relaves, vertederos, escombreras, canteras y sitios de procesamiento. Devolviendo tierras degradadas al uso agrícola, forestal, recreativo o de construcción.",
          desc_pl:"Ekologiczna odbudowa i rehabilitacja terenów dotkniętych działalnością górniczą i przemysłową — stawów osadowych, hałd, zwałowisk, kamieniołomów i miejsc przeróbki. Przywracanie zdegradowanych terenów do użytkowania rolniczego, leśnego, rekreacyjnego lub budowlanego.",
          points_en:["Site contamination assessment and remediation planning — geochemistry, heavy metal distribution, acid rock drainage potential, and prioritisation of remediation actions", "Soil restoration and technogenic sand upgrading — removing contaminants, adjusting pH, improving structure, and producing clean soil substrates from processed mining sands", "Revegetation programmes using hyperaccumulator and fast-growing species — stabilising surfaces, extracting residual metals, and producing biomass for biofuel or timber", "Post-mining landscape rehabilitation — reshaping of waste dumps and spoil tips, slope stabilisation, erosion control, and water management", "Reclamation for construction use — former industrial sites and tailings facilities prepared for residential, commercial, or infrastructure development (civil segment)", "Reclamation for agriculture and forestry — restoring topsoil, planting cover crops, and establishing productive land uses", "Long-term monitoring and ecological compliance — water quality, soil stability, vegetation health, and regulatory reporting", "Carbon credit certification for reforestation — verified carbon removal from restored forests and grasslands on former mining lands"],
          points_es:["Evaluación de contaminación del sitio y planificación de remediación — geoquímica, distribución de metales pesados y priorización de acciones", "Restauración del suelo y mejora de arena tecnogénica — eliminación de contaminantes, ajuste de pH y mejora de estructura", "Programas de revegetación con especies hiperacumuladoras y de crecimiento rápido", "Rehabilitación del paisaje post-minero — remodelación de vertederos y escombreras, estabilización de taludes y control de erosión", "Reclamación para uso de construcción — antiguos sitios industriales preparados para desarrollo residencial, comercial o de infraestructura", "Reclamación para uso agrícola y forestal — restaurando el suelo superficial y estableciendo usos productivos del terreno", "Monitoreo a largo plazo y cumplimiento ecológico — calidad del agua, estabilidad del suelo, salud de la vegetación e informes regulatorios", "Certificación de créditos de carbono por reforestación — eliminación de carbono verificada de bosques restaurados en tierras mineras"],
          points_pl:["Ocena skażenia terenu i planowanie remediacji — geochemia, rozkład metali ciężkich i priorytyzacja działań", "Odbudowa gleby i ulepszanie piasku technogenicznego — usuwanie zanieczyszczeń, regulacja pH i poprawa struktury", "Programy zalesiania z gatunkami hiperakumulującymi i szybkorosnącymi", "Rehabilitacja krajobrazu pogórniczego — przekształcanie hałd i zwałowisk, stabilizacja skarp i kontrola erozji", "Rekultywacja pod zabudowę — dawne tereny przemysłowe przygotowane pod zabudowę mieszkaniową, komercyjną lub infrastrukturalną", "Rekultywacja pod użytkowanie rolnicze i leśne — odbudowa wierzchniej warstwy gleby i ustanawianie produktywnego użytkowania terenu", "Długoterminowy monitoring i zgodność ekologiczna — jakość wody, stabilność gleby, kondycja roślinności i raportowanie regulacyjne", "Certyfikacja kredytów węglowych za zalesianie — zweryfikowane usuwanie dwutlenku węgla z przywróconych lasów"]
        }
      ]
    }
  ]
};


var UI = {
  en: {
    "nav.directions":"Our Expertise","nav.about":"About Us","nav.contacts":"Contacts",
    "ui.scroll":"Scroll","ui.directions":"Our Expertise","ui.pillars":"",
    "ui.about":"About Us","ui.contact":"Get in Touch","ui.company":"Company",
    "ui.email":"Email","ui.phone":"Phone","ui.fname":"Your Name",
    "ui.femail":"Email Address","ui.fdir":"Area of Interest",
    "ui.fmsg":"Message","ui.fsend":"Send Message",
    "ui.back":"Back to Expertise","div.construction":"Construction","div.recycling":"Recycling",
    "hero.tagline":"Engineering · Geology · Innovation",
    "hero.sub":"Mine<br>&middot;<br>Construction<br>&middot;<br>Recycling",
    "ui.readmore":"Read full section →","ui.searchph":"Search services...","ui.darkMode":"Dark Mode","ui.lightMode":"Light Mode","ui.backToMcr":"Back to MCR Planet","ui.backShort":"← Back",
    "ui.consent":"I have read and agree to the <a href=\"pages/privacy.html\" target=\"_blank\">Privacy Policy</a> and consent to the processing of my personal data.",
    "footer.privacy":"Privacy Policy","footer.terms":"Terms of Service"
  },
  es: {
    "nav.directions":"Nuestra Especialidad","nav.about":"Sobre Nosotros","nav.contacts":"Contactos",
    "ui.scroll":"Desplazar","ui.directions":"Nuestra Especialidad","ui.pillars":"",
    "ui.about":"Sobre Nosotros","ui.contact":"Contáctenos","ui.company":"Empresa",
    "ui.email":"Correo","ui.phone":"Teléfono","ui.fname":"Su Nombre",
    "ui.femail":"Correo Electrónico","ui.fdir":"Área de Interés",
    "ui.fmsg":"Mensaje","ui.fsend":"Enviar Mensaje",
    "ui.back":"Volver a Especialidad","div.construction":"Construcción","div.recycling":"Reciclaje",
    "hero.tagline":"Ingeniería · Geología · Innovación",
    "hero.sub":"Minería<br>&middot;<br>Construcción<br>&middot;<br>Reciclaje",
    "ui.readmore":"Leer sección completa →","ui.searchph":"Buscar servicios...","ui.darkMode":"Modo Oscuro","ui.lightMode":"Modo Claro","ui.backToMcr":"Volver a MCR Planet","ui.backShort":"← Volver",
    "ui.consent":"He leído y acepto la <a href=\"pages/privacy.html\" target=\"_blank\">Política de Privacidad</a> y autorizo el tratamiento de mis datos personales.",
    "footer.privacy":"Política de Privacidad","footer.terms":"Términos de Servicio"
  },
  pl: {
    "nav.directions":"Nasza Specjalizacja","nav.about":"O Nas","nav.contacts":"Kontakt",
    "ui.scroll":"Przewiń","ui.directions":"Nasza Specjalizacja","ui.pillars":"",
    "ui.about":"O Nas","ui.contact":"Skontaktuj Się","ui.company":"Firma",
    "ui.email":"E-mail","ui.phone":"Telefon","ui.fname":"Twoje Imię",
    "ui.femail":"Adres E-mail","ui.fdir":"Obszar Zainteresowania",
    "ui.fmsg":"Wiadomość","ui.fsend":"Wyślij Wiadomość",
    "ui.back":"Powrót do Specjalizacji","div.construction":"Budownictwo","div.recycling":"Recykling",
    "hero.tagline":"Inżynieria · Geologia · Innowacja",
    "hero.sub":"Górnictwo<br>&middot;<br>Budownictwo<br>&middot;<br>Recykling",
    "ui.readmore":"Czytaj pełną sekcję →","ui.searchph":"Szukaj usług...","ui.darkMode":"Tryb Ciemny","ui.lightMode":"Tryb Jasny","ui.backToMcr":"Powrót do MCR Planet","ui.backShort":"← Powrót",
    "ui.consent":"Przeczytałem/am i akceptuję <a href=\"pages/privacy.html\" target=\"_blank\">Politykę Prywatności</a> oraz wyrażam zgodę na przetwarzanie moich danych osobowych.",
    "footer.privacy":"Polityka Prywatności","footer.terms":"Regulamin"
  }
};


/* Smooth scroll polyfill — works on all iOS */
function goToTop(e){
  if(e && e.preventDefault) e.preventDefault();
  if(typeof closeMenu === 'function') closeMenu();
  var ov = document.getElementById('catalog-overlay');
  if(ov && ov.className.indexOf('open') >= 0){
    if(typeof hideCatalog === 'function') hideCatalog();
    setTimeout(function(){ smoothScrollTo(0); }, 420);
    return false;
  }
  smoothScrollTo(0);
  return false;
}

function smoothScrollTo(targetY) {
  var startY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  var diff = targetY - startY;
  if (Math.abs(diff) < 2) return;
  var duration = 600;
  var startTime = null;
  function easeInOut(t) {
    return t < 0.5 ? 2*t*t : -1+(4-2*t)*t;
  }
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    var elapsed = timestamp - startTime;
    var progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + diff * easeInOut(progress));
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }
  if (window.requestAnimationFrame) {
    window.requestAnimationFrame(step);
  } else {
    window.scrollTo(0, targetY);
  }
}

var lang = 'en';
var accOpen = {};
var isLight = false;

/* ── THEME ── */
function setTheme(light) {
  isLight = light;
  document.documentElement.className = light ? 'light' : '';
  var icon = light ? '\u2600' : '\u263e';
  var t1 = document.getElementById('themeThumb');
  var t2 = document.getElementById('mobileThemeThumb');
  var t3 = document.getElementById('catMobileThemeThumb');
  var t4 = document.getElementById('cat-theme-thumb');
  if (t1) t1.innerHTML = icon;
  if (t2) t2.innerHTML = icon;
  if (t3) t3.innerHTML = icon;
  if (t4) t4.innerHTML = icon;
  /* Localised theme label — falls back to English if UI not yet loaded */
  var langKey = (typeof lang !== 'undefined' ? lang : 'en');
  var tr = (typeof UI !== 'undefined' && UI[langKey]) ? UI[langKey] : null;
  var label = light
    ? (tr && tr['ui.lightMode'] ? tr['ui.lightMode'] : 'Light Mode')
    : (tr && tr['ui.darkMode']  ? tr['ui.darkMode']  : 'Dark Mode');
  var lbl  = document.getElementById('mobileThemeLabel');
  var lbl2 = document.getElementById('catMobileThemeLabel');
  if (lbl)  lbl.textContent  = label;
  if (lbl2) lbl2.textContent = label;
  /* Keep catalog checkboxes in sync visually */
  var catCb = document.getElementById('cat-theme-cb');
  if (catCb) catCb.checked = light;
  var catMobCb = document.getElementById('catMobileThemeCheckbox');
  if (catMobCb) catMobCb.checked = light;
}


/* ══ ЯКОРНЫЕ URL ══ */
function updateAnchor() {
  var secs = ['overview','about','contact'];
  var cur = '';
  for (var i = 0; i < secs.length; i++) {
    var el = document.getElementById(secs[i]);
    if (el && el.getBoundingClientRect().top <= 120) cur = secs[i];
  }
  if (cur) {
    try { window.history.replaceState(null, '', '#' + cur); } catch(e) {}
  }
}

/* ── SCROLL — использует polyfill вместо behavior:'smooth' ── */
function goTo(el) {
  if (!el) return;
  var top = el.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop) - 76;
  smoothScrollTo(top < 0 ? 0 : top);
}
function scrollToOverview() { goTo(document.getElementById('overview')); }

/* ── CLICK SERVICE FROM GRID ── */
function clickService(svcId, divId) {
  closeMenu();
  if (!accOpen[divId]) {
    openAcc(divId);
    setTimeout(function() { goTo(document.getElementById('svc-' + svcId)); }, 520);
  } else {
    goTo(document.getElementById('svc-' + svcId));
  }
}

/* ── ACCORDION ── */
function openAcc(divId) {
  accOpen[divId] = true;
  var sec  = document.getElementById('divsec-' + divId);
  var body = document.getElementById('accbody-' + divId);
  var hint = document.getElementById('acchint-' + divId);
  if (!sec || !body) return;
  sec.className = 'div-section open';
  if (hint) { hint.style.display = 'none'; }
  /* Убедимся что стартуем с 0 для анимации */
  body.style.transition = 'none';
  body.style.height = '0px';
  body.style.overflow = 'hidden';
  /* reflow — браузер видит height:0 */
  void body.offsetHeight;
  /* Теперь включаем transition и анимируем до полной высоты */
  body.style.transition = '';
  var target = body.scrollHeight;
  body.style.height = target + 'px';
  var timer = setTimeout(function() {
    if (accOpen[divId]) {
      body.style.height = 'auto';
      body.style.overflow = '';
      if (typeof doReveal === 'function') doReveal();
    }
  }, 500);
  body.addEventListener('transitionend', function onEnd() {
    clearTimeout(timer);
    if (accOpen[divId]) {
      body.style.height = 'auto';
      body.style.overflow = '';
      if (typeof doReveal === 'function') doReveal();
    }
    body.removeEventListener('transitionend', onEnd);
  });
}
function closeAcc(divId) {
  accOpen[divId] = false;
  var sec  = document.getElementById('divsec-' + divId);
  var body = document.getElementById('accbody-' + divId);
  var hint = document.getElementById('acchint-' + divId);
  if (!sec || !body) return;
  /* Если height:auto — фиксируем пиксельное значение для анимации */
  if (body.style.height === 'auto' || body.style.height === '') {
    body.style.transition = 'none';
    body.style.height = body.offsetHeight + 'px';
    void body.offsetHeight; /* reflow */
    body.style.transition = '';
  }
  body.style.overflow = 'hidden';
  /* reflow */
  void body.offsetHeight;
  /* Анимируем к 0 */
  body.style.height = '0px';
  sec.className = 'div-section';
  if (hint) { hint.style.display = ''; }
  setTimeout(function() {
    /* Принудительно показываем соседние секции */
    if (typeof doReveal === 'function') doReveal();
    /* Показываем секции которые ещё не видны */
    var allRv = document.querySelectorAll('#sections .rv:not(.rvd)');
    for (var ri = 0; ri < allRv.length; ri++) {
      if (allRv[ri].getBoundingClientRect().top < window.innerHeight * 1.5) {
        allRv[ri].classList.add('rvd');
      }
    }
  }, 460);
}


function toggleAcc(divId) {
  if (accOpen[divId]) { closeAcc(divId); } else { openAcc(divId); }
}

/* ── RENDER GRID — createElement, без innerHTML ── */
