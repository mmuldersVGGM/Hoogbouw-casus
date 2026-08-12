# Hoogbouwcasus VGGM 2026 – webapp

Interactieve, statische webapp voor een fictieve hoogbouwcasus. De app is gebouwd uit het inhoudelijke scenario dat is samengesteld uit de aangeleverde VGGM-presentatie (2020/2021) en het VRR-handboek (2024).

## Belangrijke ontwerpafspraken

- Het gebouw is fictief.
- De rookstopper is in deze casus beschikbaar binnen de lage-druksystemen.
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
