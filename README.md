# Hoogbouwcasus VGGM 2026 – webapp

Interactieve, statische webapp voor een fictieve hoogbouwcasus. De app is gebouwd uit het inhoudelijke scenario dat is samengesteld uit de aangeleverde VGGM-presentatie (2020/2021) en het VRR-handboek (2024).

## Belangrijke ontwerpafspraken

- Het gebouw is fictief.
- De smokestopper is in deze casus beschikbaar binnen de lage-druksystemen.
- VRICOL wordt uitsluitend als **didactisch vergelijkingsmodel** gebruikt, niet als VGGM-inzetprocedure.
- Beslissingen binnen liggen bij manschappen, mits veilig en verantwoord en gedeeld/getoetst met de bevelvoerder.
- Nare uitkomsten kunnen optreden als logisch gevolg van keuzes/combinaties.
- Tijdens het spelen worden geen punten of goed/fout-signalen getoond.

## Lokaal openen

Open `index.html` in een moderne browser. Er is geen server of installatie nodig.

## Publiceren op GitHub Pages

1. Maak in GitHub een nieuwe repository, bijvoorbeeld `hoogbouw-casus`.
2. Upload **alle vier** de appbestanden uit deze map naar de root van de repository: `index.html`, `styles.css`, `scenario.js`, `app.js`.
3. Ga naar **Settings → Pages**.
4. Kies bij **Build and deployment**: `Deploy from a branch`.
5. Kies branch `main` en map `/ (root)` en klik **Save**.
6. GitHub toont daarna de Pages-URL.

`scenario.js` bevat de inhoud. Daardoor kunnen later andere casussen of een OvD-module worden toegevoegd zonder de interface volledig opnieuw te bouwen.

## Versie met uitgebreide nabespreking
Na ieder keuzemoment toont de app eerst het operationele gevolg. Daarna kan de deelnemer een korte duiding openen of direct kiezen voor **Verdiepende uitleg nu bekijken**. Na afloop bevat de nabespreking per gemaakte keuze de volledige VRR-gebaseerde duiding en een vergelijking met de twee alternatieven. VRICOL wordt uitsluitend als didactisch vergelijkingsmodel gebruikt.

## Versie 3 – uitgebreide keuzemomenten
Keuzemomenten 1 t/m 3 zijn inhoudelijk gereviewd en tonen nu dezelfde uitgebreide casusbeschrijving en verdiepende nabespreking als in de inhoudelijke review: rijkere situatie, uitgebreider operationeel gevolg, bronduiding, afweging van alternatieven, beoordeling en de gevolgen die de casus onthoudt. De overige momenten blijven voorlopig op de eerdere v2-uitwerking totdat ze inhoudelijk zijn doorgelopen.


## Versie 4
Keuzemomenten 4 t/m 18 hebben nu dezelfde uitgebreide situatieschets, operationele gevolgen en VRR-gebaseerde verdiepende nabespreking als keuzemomenten 1 t/m 3.

## Nieuw in v5 – beeld en vormgeving
- Bij alle 18 keuzemomenten staat een relevante afbeelding uit het aangeleverde VGGM-lesmateriaal.
- Relevante begrippen tonen eveneens bronbeelden uit de PowerPoint.
- Afbeeldingen zijn aanklikbaar voor vergroting.
- De interface heeft een vernieuwde hero, scenario-cards, keuzekaarten en verdiepende uitleg.
- De map `assets/vggm/` moet samen met de vier webbestanden naar GitHub worden geüpload.
- Zie `AFBEELDINGEN.md` voor de koppeling tussen beelden, keuzemomenten en PowerPoint-slides.


## v6 – VGGM/BPBB-systemen
Deze versie voegt een tweede didactische laag toe naast de VRR-bronduiding. Per keuzemoment worden relevante VGGM/BPBB-systemen zichtbaar als aanklikbare chips: RSTV, kenmerkenschema, kwadrantenmodel, CAN, FABCM, deurcontrole, anti-ventilatie, rookgaskoeling/straalpijptechniek, laag voortbewegen, snelle toevoer, snelle aanval, O-bundel, smokestopper en hoogtetas. De middelen zijn voor deze fictieve casus als beschikbaar gemodelleerd; dit document stelt geen regionaal beleid vast.


## v8 – BPBB-systemen uit train-de-trainerdocument
Toegevoegd: snelle lijn, snelle toevoer, transporttas, droge stijgleiding binnen, verdeelstuk buitenom, LD op hoogte, klepel/straalpijp, Do’s & Don’ts LD/O-bundels en O-bundel oprollen. Inclusief afbeeldingen uit het BPBB-document.
