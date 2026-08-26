window.SCENARIO = {
  "meta": {
    "title": "Hoogbouwcasus – Arnhem Building",
    "subtitle": "Interactieve oefencasus voor bevelvoerder en manschappen",
    "status": "Concept • fictieve incidentontwikkeling",
    "building": "Arnhem Building • Arnhem • categorie 20–70 m",
    "hero": "assets/arnhem/plattegrond_7e_brandwerende_scheidingen.jpeg",
    "principles": [
      "Keuzes zijn bewust plausibel en geven niet vooraf prijs wat verwacht wordt.",
      "Na iedere keuze volgt eerst het operationele gevolg; de uitleg is daarna optioneel te openen.",
      "VRICOL wordt uitsluitend gebruikt als didactisch vergelijkingsmodel.",
      "VGGM/BPBB-systemen worden als tweede didactische laag toegepast naast de VRR-bronduiding: RSTV, kenmerkenschema, kwadrantenmodel, CAN, FABCM én de systemen uit Train de trainer BPBB 2026: snelle lijn, snelle toevoer, transporttas, droge stijgleiding binnen, verdeelstuk buitenom, O-bundels en hoogtetas.",
      "Beslissingen binnen liggen bij de manschappen, mits veilig en verantwoord en gedeeld/getoetst met de bevelvoerder.",
      "Alle nare uitkomsten zijn mogelijk wanneer keuzes en omstandigheden daar logisch toe leiden."
    ],
    "sourceNote": "Deze casus is een didactische toepassing op basis van de aangeleverde hoogbouwonderleggers. Objectdetails en incidentontwikkeling zijn deels fictief. De bron- en leerdoelduiding is bedoeld voor verdieping en nabespreking en vormt geen vastgesteld VGGM-inzetprotocol."
  },
  "nodes": [
    {
      "id": 1,
      "title": "Aankomst & eerste beeldvorming",
      "role": "Bevelvoerder",
      "roleNote": "Bepaal welke informatie je bij aankomst nodig hebt.",
      "situation": "Je bent bevelvoerder van de eerste TS en arriveert bij Arnhem Building in Arnhem. Tijdens het aanrijden is gemeld dat er sprake is van brand in het gebouw. Bij aankomst is vanaf buiten rook zichtbaar ter hoogte van de 7e verdieping.\n\nBij de entree word je opgevangen door een BHV'er. Hij vertelt dat de BHV-organisatie bezig is met de ontruiming van de 7e verdieping. Daarbij lijkt één medewerker te ontbreken.\n\nDe exacte locatie van de brand is op dit moment niet bekend. Ook is nog niet duidelijk waar de vermiste medewerker zich bevindt en wat de situatie op de overige verdiepingen is.\n\nDe eerste ploeg en de chauffeur/pompbediende wachten op jouw opdrachten. Je moet op basis van de informatie die nu beschikbaar is de eerste inzet organiseren.",
      "situationDetail": {
        "time": "T = 0 min",
        "observations": [
          "Rook is zichtbaar ter hoogte van de 7e verdieping.",
          "De BHV-organisatie is bezig met de 7e verdieping.",
          "De exacte brandlocatie en de situatie op andere verdiepingen zijn nog niet bekend."
        ],
        "prompt": "Hoe organiseer je je eerste beeldvorming?"
      },
      "choices": [
        {
          "id": "A",
          "text": "Gericht doorvragen: slachtofferlocatie, plattegrond, wat BHV op de 7e heeft gezien en status 8/9.",
          "consequence": "De BV krijgt de plattegrond en kan de exacte slachtofferlocatie laten aanwijzen. Over 8/9 blijkt BHV geen betrouwbaar beeld te hebben.",
          "rationale": "Sterke beeldvorming: de BHV heeft belangrijke informatie, maar biedt die niet vanzelf aan.",
          "label": "Operationeel gevolg",
          "quality": 1,
          "deepDive": "Sterke beeldvorming: de BHV heeft belangrijke informatie, maar biedt die niet vanzelf aan."
        },
        {
          "id": "B",
          "text": "Alleen vragen waar de brand vermoedelijk zit en de ploeg direct naar boven sturen.",
          "consequence": "Er ontstaat snel een verkenning op hoogte, maar slachtofferlocatie, plattegrond en de onbekende bezetting boven de brand blijven voorlopig buiten beeld.",
          "rationale": "Verdedigbaar vanuit snelheid, maar informatie die direct beschikbaar was wordt niet benut.",
          "label": "Operationeel gevolg",
          "quality": 0,
          "deepDive": "Verdedigbaar vanuit snelheid, maar informatie die direct beschikbaar was wordt niet benut."
        },
        {
          "id": "C",
          "text": "Zonder verdere uitvraag direct inzetten op de 7e verdieping.",
          "consequence": "De ploeg vertrekt met minimale objectinformatie. Belangrijke informatie moet later alsnog worden opgehaald of tijdens de verkenning worden ontdekt.",
          "rationale": "De hoogte en bekende vermissing maken het zinvol eerst beschikbare objectinformatie te benutten.",
          "label": "Operationeel gevolg",
          "quality": -1,
          "deepDive": "De hoogte en bekende vermissing maken het zinvol eerst beschikbare objectinformatie te benutten."
        }
      ],
      "sourceFrame": "Onderlegger: Concept Handboek Brandbestrijding Hoogbouw VGGM 2026, aangeleverde VGGM-lesstof en het Handboek Incidentbestrijding Hoogbouw VRR (2024). Deze Arnhem Building-casus is een didactische toepassing voor gebouwen van circa 20–70 meter. Objectdetails, brandveiligheidsvoorzieningen, tijden en incidentontwikkeling zijn voor de oefening deels fictief en vormen geen vastgesteld VGGM-inzetprotocol.",
      "systems": [
        "Kenmerkenschema",
        "RSTV"
      ],
      "media": {
        "src": "assets/arnhem/arnhem_aankomst.png",
        "caption": "Arnhem Building bij aankomst",
        "source": "Aangeleverde afbeelding"
      },
      "discussionQuestion": "Welke informatie heb je bij aankomst minimaal nodig om een veilige en gerichte inzet te kunnen starten?"
    },
    {
      "id": 2,
      "title": "Beschikbare objectinformatie",
      "role": "Bevelvoerder",
      "roleNote": "Gebruik alleen informatie die door gerichte uitvraag beschikbaar is gekomen.",
      "situation": "Na gerichte navraag blijkt dat de BHV'er aanvullende objectinformatie beschikbaar heeft. Hij kan een plattegrond van de 7e verdieping geven. Als je specifiek doorvraagt naar de vermiste medewerker, kan hij ook aangeven welke ruimte daarbij hoort. De betekenis van de ingetekende bouwkundige voorzieningen kan hij niet toelichten.",
      "choices": [
        {
          "id": "A",
          "text": "Plattegrond gebruiken om trappenhuis, route naar 7.14, droge stijgleiding en brand-/rookwerende scheidingen zelf te interpreteren.",
          "consequence": "De BV bouwt een ruimtelijk beeld op. De exacte brandlocatie blijft nog een vermoeden en moet door uitvraag/verkenning worden bevestigd.",
          "rationale": "De tekening bevat meer operationele informatie dan alleen de slachtofferlocatie.",
          "label": "Operationeel gevolg",
          "quality": 1,
          "deepDive": "De tekening bevat meer operationele informatie dan alleen de slachtofferlocatie."
        },
        {
          "id": "B",
          "text": "Alleen kantoor 7.14 markeren en de rest van de tekening later bekijken.",
          "consequence": "De reddingslocatie is duidelijk, maar bouwkundige en watertechnische informatie wordt nog niet benut.",
          "rationale": "De slachtofferlocatie is belangrijk, maar de route en voorzieningen bepalen of die redding veilig uitvoerbaar is.",
          "label": "Operationeel gevolg",
          "quality": 0,
          "deepDive": "De slachtofferlocatie is belangrijk, maar de route en voorzieningen bepalen of die redding veilig uitvoerbaar is."
        },
        {
          "id": "C",
          "text": "De plattegrond niet meenemen; de ploeg vindt de ruimte boven wel.",
          "consequence": "De ploeg moet in dichte rook zelf ruimtenummers en route reconstrueren.",
          "rationale": "Dit vergroot zoektijd en verlaagt het situatiebeeld zonder noodzaak.",
          "label": "Operationeel gevolg",
          "quality": -1,
          "deepDive": "Dit vergroot zoektijd en verlaagt het situatiebeeld zonder noodzaak."
        }
      ],
      "sourceFrame": "Onderlegger: Concept Handboek Brandbestrijding Hoogbouw VGGM 2026, aangeleverde VGGM-lesstof en het Handboek Incidentbestrijding Hoogbouw VRR (2024). Deze Arnhem Building-casus is een didactische toepassing voor gebouwen van circa 20–70 meter. Objectdetails, brandveiligheidsvoorzieningen, tijden en incidentontwikkeling zijn voor de oefening deels fictief en vormen geen vastgesteld VGGM-inzetprotocol.",
      "systems": [
        "Kenmerkenschema",
        "Compartimentering"
      ],
      "media": {
        "src": "assets/arnhem/plattegrond_7e_volledig.png",
        "caption": "Plattegrond 7e verdieping",
        "source": "Oefenplattegrond Arnhem Building"
      },
      "discussionQuestion": "Welke informatie kun je uit een plattegrond en van de BHV halen, en welke informatie moet je altijd zelf verifiëren?"
    },
    {
      "id": 3,
      "title": "Eerste tactische keuze",
      "role": "Bevelvoerder",
      "roleNote": "Kies een inzetdoel op basis van het beeld dat je tot nu toe hebt opgebouwd.",
      "situation": "De eerste ploeg bereikt de 7e verdieping. De exacte brandruimte wordt door waarneming en/of nadere uitvraag duidelijker. De route vanaf het trappenhuis richting de bekende locatie van de vermiste medewerker wordt door de brandsituatie bedreigd.",
      "choices": [
        {
          "id": "A",
          "text": "Offensief binnen: doel brandbestrijding met LD, zodat de route naar het slachtoffer beheersbaar wordt.",
          "consequence": "De ploeg richt zich op lokaliseren en beheersen van de brand. Redding volgt zodra de route veilig genoeg is.",
          "rationale": "Een logisch inzetdoel wanneer de brand de route naar het slachtoffer bedreigt. Betrouwbaar water blijft randvoorwaarde.",
          "label": "Operationeel gevolg",
          "quality": 1,
          "deepDive": "Een logisch inzetdoel wanneer de brand de route naar het slachtoffer bedreigt. Betrouwbaar water blijft randvoorwaarde."
        },
        {
          "id": "B",
          "text": "Defensief binnen: doel redding slachtoffer met LD als beschermende slagkracht.",
          "consequence": "De ploeg richt zich primair op het bereiken van 7.14, maar moet de brandbedreiging onderweg kunnen beheersen.",
          "rationale": "Ook redding vereist hier een geborgde watervoorziening; zonder water is deze keuze niet uitvoerbaar.",
          "label": "Operationeel gevolg",
          "quality": 1,
          "deepDive": "Ook redding vereist hier een geborgde watervoorziening; zonder water is deze keuze niet uitvoerbaar."
        },
        {
          "id": "C",
          "text": "Redding zonder eerst betrouwbare LD-watervoorziening te borgen.",
          "consequence": "De ploeg kan de bedreigde route niet verantwoord passeren en moet de inzet heroverwegen.",
          "rationale": "De brand ligt tussen trappenhuis en slachtoffer. Water is zowel voor eigen veiligheid als voor rookgaskoeling en brandbeheersing noodzakelijk.",
          "label": "Operationeel gevolg",
          "quality": -2,
          "deepDive": "De brand ligt tussen trappenhuis en slachtoffer. Water is zowel voor eigen veiligheid als voor rookgaskoeling en brandbeheersing noodzakelijk."
        }
      ],
      "sourceFrame": "Onderlegger: Concept Handboek Brandbestrijding Hoogbouw VGGM 2026, aangeleverde VGGM-lesstof en het Handboek Incidentbestrijding Hoogbouw VRR (2024). Deze Arnhem Building-casus is een didactische toepassing voor gebouwen van circa 20–70 meter. Objectdetails, brandveiligheidsvoorzieningen, tijden en incidentontwikkeling zijn voor de oefening deels fictief en vormen geen vastgesteld VGGM-inzetprotocol.",
      "systems": [
        "Kwadrantenmodel",
        "LD op hoogte",
        "Rookgaskoeling"
      ],
      "media": {
        "src": "assets/custom/kwadrantenmodel_user.jpg",
        "caption": "Kwadrantenmodel als tactisch denkkader",
        "source": "Aangeleverde afbeelding"
      },
      "discussionQuestion": "Welke factoren bepalen of je kiest voor offensief binnen of defensief binnen, en wanneer zou je die keuze heroverwegen?"
    },
    {
      "id": 4,
      "title": "Benodigde slagkracht",
      "role": "Bevelvoerder",
      "roleNote": "Bepaal welke capaciteit je nu en in de komende minuten nodig denkt te hebben.",
      "situation": "De eerste TS is bezig met een inzet op de 7e verdieping. Er is een vermissing gemeld en nog niet alle verdiepingen boven de brand zijn gecontroleerd. Welke extra capaciteit nodig is, wordt niet automatisch voor je georganiseerd.",
      "choices": [
        {
          "id": "A",
          "text": "Vroeg opschalen en extra TS'en organiseren; bij verdere taakgroei ook grote brand overwegen.",
          "consequence": "Extra capaciteit kan later worden ingezet voor ontruiming/evacuatie van 8/9 en rookvrij houden van het trappenhuis.",
          "rationale": "De casus bevat meerdere zelfstandige taken. Vroeg capaciteit organiseren voorkomt dat alle problemen op één TS landen.",
          "label": "Operationeel gevolg",
          "quality": 1,
          "deepDive": "De casus bevat meerdere zelfstandige taken. Vroeg capaciteit organiseren voorkomt dat alle problemen op één TS landen."
        },
        {
          "id": "B",
          "text": "Eerst de eerste verkenning afwachten en daarna pas beoordelen of extra TS'en nodig zijn.",
          "consequence": "De eerste minuten blijven overzichtelijk, maar extra eenheden komen later beschikbaar als meerdere taken tegelijk ontstaan.",
          "rationale": "Verdedigbaar, maar minder anticiperend.",
          "label": "Operationeel gevolg",
          "quality": 0,
          "deepDive": "Verdedigbaar, maar minder anticiperend."
        },
        {
          "id": "C",
          "text": "Geen opschaling zolang de brand nog in één ruimte lijkt te zitten.",
          "consequence": "Wanneer water-, rook- en ontruimingsproblemen tegelijk zichtbaar worden ontstaat capaciteitstekort.",
          "rationale": "Omvang van de brand is niet de enige maat voor benodigde slagkracht in hoogbouw.",
          "label": "Operationeel gevolg",
          "quality": -1,
          "deepDive": "Omvang van de brand is niet de enige maat voor benodigde slagkracht in hoogbouw."
        }
      ],
      "sourceFrame": "Onderlegger: Concept Handboek Brandbestrijding Hoogbouw VGGM 2026, aangeleverde VGGM-lesstof en het Handboek Incidentbestrijding Hoogbouw VRR (2024). Deze Arnhem Building-casus is een didactische toepassing voor gebouwen van circa 20–70 meter. Objectdetails, brandveiligheidsvoorzieningen, tijden en incidentontwikkeling zijn voor de oefening deels fictief en vormen geen vastgesteld VGGM-inzetprotocol.",
      "systems": [
        "CAN",
        "FABCM"
      ],
      "media": {
        "src": "assets/vggm/logistiek_materiaal.jpeg",
        "caption": "Hoogbouw vraagt vroeg om taak- en capaciteitsorganisatie",
        "source": "VGGM lesmateriaal"
      },
      "discussionQuestion": "Welke ontwikkelingen probeer je vóór te zijn wanneer je vroegtijdig opschaalt bij een hoogbouwbrand?"
    },
    {
      "id": 5,
      "title": "Terugmelding pompbediende",
      "role": "Bevelvoerder",
      "roleNote": "Reageer op een onverwacht probleem in de watervoorziening.",
      "situation": "Tijdens het voeden van de droge stijgleiding meldt de chauffeur/pompbediende: “BV, ik krijg de stijgleiding niet goed op druk. Ik blijf veel water leveren, maar de druk bouwt onvoldoende op.” De oorzaak is op dit moment onbekend.",
      "choices": [
        {
          "id": "A",
          "text": "Storing laten onderzoeken én parallel een alternatieve wateropbouw starten.",
          "consequence": "De casus laat beide sporen doorlopen. De eerste betrouwbare oplossing bepaalt wanneer de inzet met LD verantwoord verder kan.",
          "rationale": "Parallel werken benut tijd en houdt meerdere oplossingsrichtingen open.",
          "label": "Operationeel gevolg",
          "quality": 1,
          "deepDive": "Parallel werken benut tijd en houdt meerdere oplossingsrichtingen open."
        },
        {
          "id": "B",
          "text": "Alleen de storing in de droge stijgleiding laten zoeken.",
          "consequence": "Na circa 10 fictieve minuten kan de storing worden gevonden en opgelost.",
          "rationale": "Een geldige oplossing, maar zonder parallel alternatief is de inzet volledig afhankelijk van één spoor.",
          "label": "Operationeel gevolg",
          "quality": 0,
          "deepDive": "Een geldige oplossing, maar zonder parallel alternatief is de inzet volledig afhankelijk van één spoor."
        },
        {
          "id": "C",
          "text": "De ploeg ondanks onvoldoende druk laten doorgaan en later naar water kijken.",
          "consequence": "De ploeg mist de noodzakelijke blus- en beschermingscapaciteit voor de bedreigde route.",
          "rationale": "Onvoldoende water op hoogte is een harde randvoorwaarde voor deze binneninzet.",
          "label": "Operationeel gevolg",
          "quality": -2,
          "deepDive": "Onvoldoende water op hoogte is een harde randvoorwaarde voor deze binneninzet."
        }
      ],
      "sourceFrame": "Onderlegger: Concept Handboek Brandbestrijding Hoogbouw VGGM 2026, aangeleverde VGGM-lesstof en het Handboek Incidentbestrijding Hoogbouw VRR (2024). Deze Arnhem Building-casus is een didactische toepassing voor gebouwen van circa 20–70 meter. Objectdetails, brandveiligheidsvoorzieningen, tijden en incidentontwikkeling zijn voor de oefening deels fictief en vormen geen vastgesteld VGGM-inzetprotocol.",
      "systems": [
        "Droge stijgleiding binnen",
        "Hoogtetas",
        "LD op hoogte"
      ],
      "media": {
        "src": "assets/bpbb/droge_stijgleiding_binnen.png",
        "caption": "Werken met de droge stijgleiding en LD op hoogte",
        "source": "Train de trainer BPBB 2026"
      },
      "discussionQuestion": "Wat betekent het wegvallen van de geplande watervoorziening voor je inzetdoel en voor de veiligheid van de ingezette ploeg?"
    },
    {
      "id": 6,
      "title": "Onderzoek aan de stijgleiding",
      "role": "Manschappen",
      "roleNote": "Bepaal hoe je het drukverlies laat onderzoeken.",
      "situation": "Wanneer opdracht wordt gegeven de droge stijgleiding te controleren, blijkt het probleem niet direct bij de voeding beneden te zitten. Er is nader onderzoek in het gebouw nodig. Pas na systematische controle kan duidelijk worden waar het drukverlies ontstaat.",
      "choices": [
        {
          "id": "A",
          "text": "Verdiepingsaansluitingen systematisch controleren.",
          "consequence": "Op de 4e verdieping wordt na circa 10 fictieve minuten de oorzaak gevonden: een ontbrekend blinddeksel óf een openstaande afsluiter. Na herstel kan de leiding op druk komen.",
          "rationale": "Systematische controle sluit aan bij het drukverliesbeeld.",
          "label": "Operationeel gevolg",
          "quality": 1,
          "deepDive": "Systematische controle sluit aan bij het drukverliesbeeld."
        },
        {
          "id": "B",
          "text": "Alleen beneden voeding, pomp en koppelingen opnieuw controleren.",
          "consequence": "De pompbediende blijft hetzelfde drukverlies zien; de lekkage op de 4e verdieping blijft bestaan.",
          "rationale": "De klacht wijst erop dat water elders uit het systeem kan wegstromen.",
          "label": "Operationeel gevolg",
          "quality": -1,
          "deepDive": "De klacht wijst erop dat water elders uit het systeem kan wegstromen."
        },
        {
          "id": "C",
          "text": "De stijgleiding buiten gebruik verklaren zonder controle.",
          "consequence": "Een potentieel snel herstelbare gebouwvoorziening wordt niet meer benut.",
          "rationale": "Kan verdedigbaar zijn wanneer een alternatief sneller en zeker beschikbaar is, maar niet als automatische reflex.",
          "label": "Operationeel gevolg",
          "quality": 0,
          "deepDive": "Kan verdedigbaar zijn wanneer een alternatief sneller en zeker beschikbaar is, maar niet als automatische reflex."
        }
      ],
      "sourceFrame": "Onderlegger: Concept Handboek Brandbestrijding Hoogbouw VGGM 2026, aangeleverde VGGM-lesstof en het Handboek Incidentbestrijding Hoogbouw VRR (2024). Deze Arnhem Building-casus is een didactische toepassing voor gebouwen van circa 20–70 meter. Objectdetails, brandveiligheidsvoorzieningen, tijden en incidentontwikkeling zijn voor de oefening deels fictief en vormen geen vastgesteld VGGM-inzetprotocol.",
      "systems": [
        "Droge stijgleiding binnen",
        "Hoogtetas"
      ],
      "media": {
        "src": "assets/vggm/stijgleiding_afnamepunt.jpg",
        "caption": "Afnamepunt droge stijgleiding",
        "source": "VGGM lesmateriaal"
      },
      "discussionQuestion": "Hoe organiseer je het oplossen van een technisch probleem zonder dat de rest van de inzet daarop stilvalt?"
    },
    {
      "id": 7,
      "title": "Watervoorziening op hoogte",
      "role": "Bevelvoerder",
      "roleNote": "Bepaal hoe je betrouwbare watervoorziening voor de inzet organiseert.",
      "situation": "De inzetploeg heeft nog geen betrouwbare LD-watervoorziening op de brandverdieping. Je kunt wachten op herstel van de gebouwvoorziening of een alternatieve wateropbouw organiseren. De beschikbare hoogbouwsystemen uit de lesstof kunnen hierbij worden gebruikt.",
      "choices": [
        {
          "id": "A",
          "text": "Systeem 3 met transportslang/transporttas laten opbouwen.",
          "consequence": "Na circa 9 fictieve minuten is een alternatieve LD-watervoorziening beschikbaar.",
          "rationale": "Een passende oplossing wanneer de route en beschikbare middelen dit toelaten.",
          "label": "Operationeel gevolg",
          "quality": 1,
          "deepDive": "Een passende oplossing wanneer de route en beschikbare middelen dit toelaten."
        },
        {
          "id": "B",
          "text": "Systeem 4 buitenom laten opbouwen.",
          "consequence": "Na circa 9 fictieve minuten is buitenom een alternatieve watervoorziening beschikbaar.",
          "rationale": "Ook dit is een gelijkwaardige casusoplossing.",
          "label": "Operationeel gevolg",
          "quality": 1,
          "deepDive": "Ook dit is een gelijkwaardige casusoplossing."
        },
        {
          "id": "C",
          "text": "Geen alternatief opbouwen en volledig wachten op de storing.",
          "consequence": "De inzet blijft ongeveer 10 minuten afhankelijk van herstel van de stijgleiding.",
          "rationale": "Niet per definitie fout, maar minder robuust wanneer redding en rookontwikkeling tijdkritisch zijn.",
          "label": "Operationeel gevolg",
          "quality": 0,
          "deepDive": "Niet per definitie fout, maar minder robuust wanneer redding en rookontwikkeling tijdkritisch zijn."
        }
      ],
      "sourceFrame": "Onderlegger: Concept Handboek Brandbestrijding Hoogbouw VGGM 2026, aangeleverde VGGM-lesstof en het Handboek Incidentbestrijding Hoogbouw VRR (2024). Deze Arnhem Building-casus is een didactische toepassing voor gebouwen van circa 20–70 meter. Objectdetails, brandveiligheidsvoorzieningen, tijden en incidentontwikkeling zijn voor de oefening deels fictief en vormen geen vastgesteld VGGM-inzetprotocol.",
      "systems": [
        "Transporttas",
        "Verdeelstuk buitenom",
        "O-bundel",
        "LD op hoogte"
      ],
      "media": {
        "src": "assets/bpbb/transporttas_systeem3.png",
        "caption": "Systeem 3 – transporttas / transportslang",
        "source": "Train de trainer BPBB 2026"
      },
      "discussionQuestion": "Welke factoren bepalen welk alternatief voor watertransport op hoogte in deze situatie het meest geschikt is?"
    },
    {
      "id": 8,
      "title": "Extra verticale mogelijkheden",
      "role": "Bevelvoerder",
      "roleNote": "Bepaal of je aanvullende middelen vroegtijdig wilt organiseren.",
      "situation": "Naast de gebouwvoorziening en de beschikbare slangsystemen kan aanvullende verticale capaciteit een rol spelen. Een redvoertuig is niet automatisch gealarmeerd en moet, wanneer je dit nodig acht, door de bevelvoerder zelf worden aangevraagd.",
      "choices": [
        {
          "id": "A",
          "text": "Redvoertuig vroeg alarmeren en als mogelijke alternatieve verticale waterroute laten voorbereiden.",
          "consequence": "Bij uitval van de stijgleiding is het redvoertuig tijdig beschikbaar om als alternatief te worden benut.",
          "rationale": "Vroeg anticiperen creëert opties zonder de uiteindelijke tactiek al vast te leggen.",
          "label": "Operationeel gevolg",
          "quality": 1,
          "deepDive": "Vroeg anticiperen creëert opties zonder de uiteindelijke tactiek al vast te leggen."
        },
        {
          "id": "B",
          "text": "Redvoertuig pas alarmeren nadat het drukprobleem bekend is.",
          "consequence": "De circa 9 minuten opbouwtijd begint later; de alternatieve route komt dus later beschikbaar.",
          "rationale": "Nog steeds bruikbaar, maar het tijdvoordeel van anticiperen is verloren.",
          "label": "Operationeel gevolg",
          "quality": 0,
          "deepDive": "Nog steeds bruikbaar, maar het tijdvoordeel van anticiperen is verloren."
        },
        {
          "id": "C",
          "text": "Geen redvoertuig alarmeren.",
          "consequence": "Deze alternatieve route valt weg. De inzet is afhankelijk van systeem 3/4 of herstel van de stijgleiding.",
          "rationale": "Kan als andere oplossingen bewust zijn georganiseerd, maar beperkt de beschikbare opties.",
          "label": "Operationeel gevolg",
          "quality": 0,
          "deepDive": "Kan als andere oplossingen bewust zijn georganiseerd, maar beperkt de beschikbare opties."
        }
      ],
      "sourceFrame": "Onderlegger: Concept Handboek Brandbestrijding Hoogbouw VGGM 2026, aangeleverde VGGM-lesstof en het Handboek Incidentbestrijding Hoogbouw VRR (2024). Deze Arnhem Building-casus is een didactische toepassing voor gebouwen van circa 20–70 meter. Objectdetails, brandveiligheidsvoorzieningen, tijden en incidentontwikkeling zijn voor de oefening deels fictief en vormen geen vastgesteld VGGM-inzetprotocol.",
      "systems": [
        "Verdeelstuk buitenom",
        "LD op hoogte"
      ],
      "media": {
        "src": "assets/vggm/transitional_attack.png",
        "caption": "Redvoertuig als mogelijke externe/verticale inzetroute",
        "source": "VGGM lesmateriaal"
      },
      "discussionQuestion": "Welke middelen moet je vroegtijdig organiseren omdat de opbouwtijd later bepalend kan worden voor je handelingsmogelijkheden?"
    },
    {
      "id": 9,
      "title": "Rookontwikkeling bij het trappenhuis",
      "role": "Manschappen",
      "roleNote": "Herken wat de veranderende rookverspreiding betekent voor de inzet.",
      "situation": "Het trappenhuis was bij aankomst op de 7e verdieping rookvrij. Nadat de toegang naar de brandverdieping tijdens de inzet wordt gebruikt, meldt de ploeg dat langzaam rook het trappenhuis in begint te trekken.",
      "choices": [
        {
          "id": "A",
          "text": "Rookinstroom direct melden en een rookbeheersingsmaatregel organiseren.",
          "consequence": "Het probleem wordt een zelfstandige taak en kan worden beheerst voordat het trappenhuis sterk verrookt.",
          "rationale": "Het trappenhuis is zowel aanvalsroute als mogelijke evacuatieroute voor 8 en 9.",
          "label": "Operationeel gevolg",
          "quality": 1,
          "deepDive": "Het trappenhuis is zowel aanvalsroute als mogelijke evacuatieroute voor 8 en 9."
        },
        {
          "id": "B",
          "text": "De deur alleen zoveel mogelijk gesloten houden tijdens het oprukken.",
          "consequence": "De rookinstroom wordt beperkt, maar niet structureel opgelost wanneer veel beweging door de deur nodig blijft.",
          "rationale": "Goed deurmanagement helpt, maar kan aanvullende rookbeheersing nodig hebben.",
          "label": "Operationeel gevolg",
          "quality": 0,
          "deepDive": "Goed deurmanagement helpt, maar kan aanvullende rookbeheersing nodig hebben."
        },
        {
          "id": "C",
          "text": "Rookverspreiding accepteren zolang de aanval op de brand doorgaat.",
          "consequence": "Na 3–5 minuten verslechtert het trappenhuis duidelijk en worden route en ontruiming boven de brand bedreigd.",
          "rationale": "Rook in het trappenhuis is een zelfstandig operationeel probleem.",
          "label": "Operationeel gevolg",
          "quality": -2,
          "deepDive": "Rook in het trappenhuis is een zelfstandig operationeel probleem."
        }
      ],
      "sourceFrame": "Onderlegger: Concept Handboek Brandbestrijding Hoogbouw VGGM 2026, aangeleverde VGGM-lesstof en het Handboek Incidentbestrijding Hoogbouw VRR (2024). Deze Arnhem Building-casus is een didactische toepassing voor gebouwen van circa 20–70 meter. Objectdetails, brandveiligheidsvoorzieningen, tijden en incidentontwikkeling zijn voor de oefening deels fictief en vormen geen vastgesteld VGGM-inzetprotocol.",
      "systems": [
        "Deurcontrole",
        "Anti-ventilatie",
        "Smokestopper"
      ],
      "media": {
        "src": "assets/vggm/rookverspreiding_trappenhuis.png",
        "caption": "Rookverspreiding vanuit de brandverdieping naar het trappenhuis",
        "source": "VGGM lesmateriaal"
      },
      "discussionQuestion": "Welke gevolgen heeft rookverspreiding naar het trappenhuis voor zowel de brandweerinzet als de aanwezige personen in het gebouw?"
    },
    {
      "id": 10,
      "title": "Rookbeheersing",
      "role": "Bevelvoerder",
      "roleNote": "Kies een maatregel en beoordeel daarna het effect.",
      "situation": "De rookinstroom in het trappenhuis neemt toe zolang de verbinding met de 7e verdieping wordt gebruikt. Het trappenhuis is zowel inzetroute als mogelijke route voor personen op hoger gelegen verdiepingen.",
      "choices": [
        {
          "id": "A",
          "text": "Smokestopper bij de toegang naar de 7e verdieping inzetten en effect controleren.",
          "consequence": "De rookinstroom neemt sterk af en het trappenhuis blijft grotendeels bruikbaar.",
          "rationale": "Een passende deurgebonden rookbeheersingsmaatregel.",
          "label": "Operationeel gevolg",
          "quality": 1,
          "deepDive": "Een passende deurgebonden rookbeheersingsmaatregel."
        },
        {
          "id": "B",
          "text": "Trappenhuis gecontroleerd met een ventilator op overdruk brengen en effect controleren.",
          "consequence": "Bij correcte uitvoering wordt rookinstroom tegengegaan en kan een al verrookte situatie verbeteren.",
          "rationale": "Ventilatie is alleen sterk wanneer toevoer/afvoer en effect bewust worden beheerst.",
          "label": "Operationeel gevolg",
          "quality": 1,
          "deepDive": "Ventilatie is alleen sterk wanneer toevoer/afvoer en effect bewust worden beheerst."
        },
        {
          "id": "C",
          "text": "Ventilator plaatsen zonder vooraf de stromingsrichting en afvoer te beoordelen.",
          "consequence": "De rookbeweging kan onvoorspelbaar worden en de casus geeft geen gegarandeerde verbetering.",
          "rationale": "Ventilatie is geen automatische oplossing; effect moet worden gecontroleerd.",
          "label": "Operationeel gevolg",
          "quality": -1,
          "deepDive": "Ventilatie is geen automatische oplossing; effect moet worden gecontroleerd."
        }
      ],
      "sourceFrame": "Onderlegger: Concept Handboek Brandbestrijding Hoogbouw VGGM 2026, aangeleverde VGGM-lesstof en het Handboek Incidentbestrijding Hoogbouw VRR (2024). Deze Arnhem Building-casus is een didactische toepassing voor gebouwen van circa 20–70 meter. Objectdetails, brandveiligheidsvoorzieningen, tijden en incidentontwikkeling zijn voor de oefening deels fictief en vormen geen vastgesteld VGGM-inzetprotocol.",
      "systems": [
        "Smokestopper",
        "Anti-ventilatie"
      ],
      "media": {
        "src": "assets/custom/smokestopper_user.png",
        "caption": "Smokestopper als rookbeheersingsmiddel",
        "source": "Aangeleverde afbeelding"
      },
      "discussionQuestion": "Welke maatregel voor rookbeheersing kies je, en hoe controleer je vervolgens of die maatregel daadwerkelijk het gewenste effect heeft?"
    },
    {
      "id": 11,
      "title": "Nieuwe informatie over de vermiste medewerker",
      "role": "Bevelvoerder",
      "roleNote": "Gebruik nieuwe informatie zonder de nog gunstige omstandigheden onnodig te verslechteren.",
      "situation": "Tijdens de inzet komt aanvullende informatie beschikbaar via de ploeg en/of de BHV'er. Er is contact met de vermiste medewerker. De persoon bevindt zich nog in de eerder aangewezen ruimte; de deur is gesloten en de ruimte is op dat moment nog rookvrij.",
      "choices": [
        {
          "id": "A",
          "text": "Redding voorbereiden inclusief bescherming van het slachtoffer (vluchtmasker) en de deur pas openen wanneer de route daadwerkelijk gereed is.",
          "consequence": "De rookvrije situatie wordt zo lang mogelijk behouden en de ploeg heeft een plan voor transport door de verrookte gang.",
          "rationale": "Slachtoffer gevonden is niet hetzelfde als redding georganiseerd.",
          "label": "Operationeel gevolg",
          "quality": 1,
          "deepDive": "Slachtoffer gevonden is niet hetzelfde als redding georganiseerd."
        },
        {
          "id": "B",
          "text": "Zo snel mogelijk de deur openen en het slachtoffer naar buiten begeleiden.",
          "consequence": "De ruimte begint door de open verbinding met de gang te verroken. Zonder voorbereid vluchtmasker/route wordt de redding lastiger.",
          "rationale": "De reddingsdruk is begrijpelijk, maar deurmanagement en bescherming van het slachtoffer bepalen de uitvoerbaarheid.",
          "label": "Operationeel gevolg",
          "quality": -1,
          "deepDive": "De reddingsdruk is begrijpelijk, maar deurmanagement en bescherming van het slachtoffer bepalen de uitvoerbaarheid."
        },
        {
          "id": "C",
          "text": "De redding uitstellen totdat de gehele brand is geblust.",
          "consequence": "De brandbestrijding krijgt alle prioriteit; de slachtofferstatus blijft langer onzeker.",
          "rationale": "Kan tijd kopen voor een veilige route, maar mist de mogelijkheid om parallel gericht redding voor te bereiden.",
          "label": "Operationeel gevolg",
          "quality": 0,
          "deepDive": "Kan tijd kopen voor een veilige route, maar mist de mogelijkheid om parallel gericht redding voor te bereiden."
        }
      ],
      "sourceFrame": "Onderlegger: Concept Handboek Brandbestrijding Hoogbouw VGGM 2026, aangeleverde VGGM-lesstof en het Handboek Incidentbestrijding Hoogbouw VRR (2024). Deze Arnhem Building-casus is een didactische toepassing voor gebouwen van circa 20–70 meter. Objectdetails, brandveiligheidsvoorzieningen, tijden en incidentontwikkeling zijn voor de oefening deels fictief en vormen geen vastgesteld VGGM-inzetprotocol.",
      "systems": [
        "Deurcontrole",
        "Smokestopper"
      ],
      "media": {
        "src": "assets/arnhem/moment11_gang_rook.jpeg",
        "caption": "Gang op de brandverdieping onder rook",
        "source": "Aangeleverde afbeelding"
      },
      "discussionQuestion": "Hoe verandert betrouwbare informatie over de locatie en omstandigheden van een slachtoffer je afweging tussen redding en brandbestrijding?"
    },
    {
      "id": 12,
      "title": "Plattegrond opnieuw beoordelen",
      "role": "Bevelvoerder",
      "roleNote": "Koppel de feitelijke brandontwikkeling aan de objectinformatie die je eerder hebt gekregen.",
      "situation": "De brand is nog beperkt tot één ruimte. Op de eerder verkregen plattegrond zijn verschillende soorten scheidingen ingetekend. De BHV'er kan de betekenis daarvan niet uitleggen; de inzetorganisatie moet de tekening zelf interpreteren en de werking blijven toetsen aan het actuele beeld.",
      "choices": [
        {
          "id": "A",
          "text": "De scheidingen meenemen als indicatie dat compartimentering tijd kan kopen, maar de werking blijven toetsen aan het feitelijke brand- en rookbeeld.",
          "consequence": "De tactiek wordt gevoed door zowel objectinformatie als waarnemingen.",
          "rationale": "Compartimentering is waardevolle informatie, maar geen garantie dat de scheiding intact blijft.",
          "label": "Operationeel gevolg",
          "quality": 1,
          "deepDive": "Compartimentering is waardevolle informatie, maar geen garantie dat de scheiding intact blijft."
        },
        {
          "id": "B",
          "text": "Er volledig op vertrouwen dat de brand binnen het aangegeven compartiment blijft.",
          "consequence": "De inzet neemt meer tijd, terwijl de feitelijke werking van scheidingen niet wordt geverifieerd.",
          "rationale": "Preventieve voorzieningen ondersteunen beeldvorming maar vervangen geen verkenning.",
          "label": "Operationeel gevolg",
          "quality": -1,
          "deepDive": "Preventieve voorzieningen ondersteunen beeldvorming maar vervangen geen verkenning."
        },
        {
          "id": "C",
          "text": "De aangegeven scheidingen negeren omdat BHV ze niet kan uitleggen.",
          "consequence": "Een belangrijke bron van objectinformatie wordt niet benut.",
          "rationale": "Deelnemers moeten de tekening zelf kunnen interpreteren.",
          "label": "Operationeel gevolg",
          "quality": -1,
          "deepDive": "Deelnemers moeten de tekening zelf kunnen interpreteren."
        }
      ],
      "sourceFrame": "Onderlegger: Concept Handboek Brandbestrijding Hoogbouw VGGM 2026, aangeleverde VGGM-lesstof en het Handboek Incidentbestrijding Hoogbouw VRR (2024). Deze Arnhem Building-casus is een didactische toepassing voor gebouwen van circa 20–70 meter. Objectdetails, brandveiligheidsvoorzieningen, tijden en incidentontwikkeling zijn voor de oefening deels fictief en vormen geen vastgesteld VGGM-inzetprotocol.",
      "systems": [
        "Kenmerkenschema"
      ],
      "media": {
        "src": "assets/arnhem/plattegrond_7e_brandwerende_scheidingen.jpeg",
        "caption": "Brand- en rookwerende scheidingen op de oefenplattegrond",
        "source": "Aangeleverde plattegrond / didactische intekening"
      },
      "discussionQuestion": "Hoe kun je bouwkundige brand- en rookwerende voorzieningen tactisch benutten zonder er blind op te vertrouwen?",
      "mediaGallery": [
        {
          "src": "assets/arnhem/plattegrond_7e_volledig.png",
          "caption": "Plattegrond 7e verdieping",
          "source": "VGGM lesmateriaal"
        }
      ]
    },
    {
      "id": 13,
      "title": "Oprukken op de brandverdieping",
      "role": "Manschappen",
      "roleNote": "Pas je techniek aan op de rook- en warmtecondities die de ploeg aantreft.",
      "situation": "De gang op de 7e verdieping is gevuld met dichte, warme rook. De brandhaard is vanuit het trappenhuis niet direct zichtbaar. Richting de brand nemen de thermische omstandigheden toe.",
      "choices": [
        {
          "id": "A",
          "text": "Rookcondities lezen, passende rookgaskoeling uitvoeren en na iedere toepassing het effect beoordelen.",
          "consequence": "Temperatuur en rookgascondities worden beter beheersbaar en de ploeg kan gecontroleerd verder oprukken.",
          "rationale": "Rookgaskoeling is hier onderdeel van veilig oprukken, niet alleen een techniek op zichzelf.",
          "label": "Operationeel gevolg",
          "quality": 1,
          "deepDive": "Rookgaskoeling is hier onderdeel van veilig oprukken, niet alleen een techniek op zichzelf."
        },
        {
          "id": "B",
          "text": "Zo laag mogelijk snel doorlopen en pas water gebruiken wanneer vlammen zichtbaar worden.",
          "consequence": "De ploeg wint aanvankelijk tijd maar laat warme rookgassen boven zich onbeheerst.",
          "rationale": "Zichtbare vlammen zijn niet de enige indicatie voor thermische dreiging.",
          "label": "Operationeel gevolg",
          "quality": -1,
          "deepDive": "Zichtbare vlammen zijn niet de enige indicatie voor thermische dreiging."
        },
        {
          "id": "C",
          "text": "Continu veel water in de rooklaag geven zonder effectcontrole.",
          "consequence": "Zicht, stoomvorming en watergebruik kunnen verslechteren zonder dat de ploeg weet of de toepassing effectief is.",
          "rationale": "Techniek moet passen bij het rookbeeld en steeds worden geëvalueerd.",
          "label": "Operationeel gevolg",
          "quality": -1,
          "deepDive": "Techniek moet passen bij het rookbeeld en steeds worden geëvalueerd."
        }
      ],
      "sourceFrame": "Onderlegger: Concept Handboek Brandbestrijding Hoogbouw VGGM 2026, aangeleverde VGGM-lesstof en het Handboek Incidentbestrijding Hoogbouw VRR (2024). Deze Arnhem Building-casus is een didactische toepassing voor gebouwen van circa 20–70 meter. Objectdetails, brandveiligheidsvoorzieningen, tijden en incidentontwikkeling zijn voor de oefening deels fictief en vormen geen vastgesteld VGGM-inzetprotocol.",
      "systems": [
        "Rookgaskoeling",
        "Klepel / straalpijp",
        "Laag voortbewegen"
      ],
      "media": {
        "src": "assets/vggm/straalpijp.gif",
        "caption": "Straalpijptechniek en rookgaskoeling",
        "source": "VGGM lesmateriaal"
      },
      "discussionQuestion": "Waarop baseert een ploeg tijdens het oprukken de keuze wanneer en hoe rookgaskoeling wordt toegepast?"
    },
    {
      "id": 14,
      "title": "Verdiepingen boven de brand",
      "role": "Bevelvoerder",
      "roleNote": "Bepaal hoe je omgaat met nog onbekende bezetting boven de brand.",
      "situation": "Wanneer gericht wordt nagevraagd of de 8e en 9e verdieping zijn ontruimd, antwoordt de BHV'er dat hij dat niet weet: zijn organisatie is alleen bezig met de 7e verdieping. Pas wanneer deze verdiepingen worden gecontroleerd, ontstaat een betrouwbaar beeld.",
      "choices": [
        {
          "id": "A",
          "text": "Extra ploeg(en) opdracht geven 8 en 9 te controleren en te ontruimen/evacueren, met terugmelding per verdieping.",
          "consequence": "De onbekende populatie wordt actief in beeld gebracht en kan via het bruikbare trappenhuis worden begeleid.",
          "rationale": "Personen boven de brand zijn een zelfstandige taak, zeker wanneer het trappenhuis dreigt te verroken.",
          "label": "Operationeel gevolg",
          "quality": 1,
          "deepDive": "Personen boven de brand zijn een zelfstandige taak, zeker wanneer het trappenhuis dreigt te verroken."
        },
        {
          "id": "B",
          "text": "Alleen de 8e controleren en 9 later meenemen.",
          "consequence": "Er ontstaat gedeeltelijk beeld, maar de 9e blijft voorlopig onbekend.",
          "rationale": "Kan bij beperkte capaciteit tijdelijk verdedigbaar zijn, mits expliciet geprioriteerd en later opgepakt.",
          "label": "Operationeel gevolg",
          "quality": 0,
          "deepDive": "Kan bij beperkte capaciteit tijdelijk verdedigbaar zijn, mits expliciet geprioriteerd en later opgepakt."
        },
        {
          "id": "C",
          "text": "Aannemen dat hogere verdiepingen vanzelf ontruimen.",
          "consequence": "De aanwezigheid van meerdere personen op 8 en 9 blijft onbekend totdat de situatie verslechtert.",
          "rationale": "De BHV heeft deze verdiepingen niet ontruimd; zelfredzaamheid mag niet zonder controle worden aangenomen.",
          "label": "Operationeel gevolg",
          "quality": -2,
          "deepDive": "De BHV heeft deze verdiepingen niet ontruimd; zelfredzaamheid mag niet zonder controle worden aangenomen."
        }
      ],
      "sourceFrame": "Onderlegger: Concept Handboek Brandbestrijding Hoogbouw VGGM 2026, aangeleverde VGGM-lesstof en het Handboek Incidentbestrijding Hoogbouw VRR (2024). Deze Arnhem Building-casus is een didactische toepassing voor gebouwen van circa 20–70 meter. Objectdetails, brandveiligheidsvoorzieningen, tijden en incidentontwikkeling zijn voor de oefening deels fictief en vormen geen vastgesteld VGGM-inzetprotocol.",
      "systems": [
        "CAN",
        "FABCM"
      ],
      "media": {
        "src": "assets/arnhem/moment14.png",
        "caption": "Lift- en trapomgeving",
        "source": "Aangeleverde afbeelding"
      },
      "discussionQuestion": "Wanneer is voor jou voldoende zeker dat de verdiepingen boven de brand veilig zijn, en wie organiseert die controle?"
    },
    {
      "id": 15,
      "title": "Meerdere taken tegelijk",
      "role": "Bevelvoerder",
      "roleNote": "Stel prioriteiten wanneer de beschikbare capaciteit niet alle processen tegelijk kan afdekken.",
      "situation": "Afhankelijk van je eerdere keuzes lopen nu meerdere processen naast elkaar. Niet iedere taak is vanzelf van capaciteit voorzien. Problemen die niet worden belegd, blijven bestaan of ontwikkelen verder.",
      "choices": [
        {
          "id": "A",
          "text": "Prioriteiten expliciet maken en direct extra capaciteit organiseren voor de nog onbelegde taken.",
          "consequence": "De inzet blijft bestuurbaar en taken krijgen eigen verantwoordelijke capaciteit.",
          "rationale": "Opschaling is geen doel op zich; het gaat om voldoende slagkracht voor zelfstandige processen.",
          "label": "Operationeel gevolg",
          "quality": 1,
          "deepDive": "Opschaling is geen doel op zich; het gaat om voldoende slagkracht voor zelfstandige processen."
        },
        {
          "id": "B",
          "text": "De beschikbare ploegen meerdere taken tegelijk laten combineren.",
          "consequence": "Taken worden gestart maar terugmelding, voortgang en veiligheid worden minder voorspelbaar.",
          "rationale": "Kan kortstondig nodig zijn, maar is kwetsbaar bij een dynamisch hoogbouwincident.",
          "label": "Operationeel gevolg",
          "quality": -1,
          "deepDive": "Kan kortstondig nodig zijn, maar is kwetsbaar bij een dynamisch hoogbouwincident."
        },
        {
          "id": "C",
          "text": "Alle capaciteit op de brandverdieping houden totdat de brand uit is.",
          "consequence": "Rookbeheersing en ontruiming boven de brand blijven liggen en ontwikkelen verder.",
          "rationale": "De brand is niet het enige operationele probleem.",
          "label": "Operationeel gevolg",
          "quality": -2,
          "deepDive": "De brand is niet het enige operationele probleem."
        }
      ],
      "sourceFrame": "Onderlegger: Concept Handboek Brandbestrijding Hoogbouw VGGM 2026, aangeleverde VGGM-lesstof en het Handboek Incidentbestrijding Hoogbouw VRR (2024). Deze Arnhem Building-casus is een didactische toepassing voor gebouwen van circa 20–70 meter. Objectdetails, brandveiligheidsvoorzieningen, tijden en incidentontwikkeling zijn voor de oefening deels fictief en vormen geen vastgesteld VGGM-inzetprotocol.",
      "systems": [
        "CAN",
        "FABCM"
      ],
      "media": {
        "src": "assets/arnhem/moment15.png",
        "caption": "Coördinatie en taakverdeling",
        "source": "Aangeleverde afbeelding"
      },
      "discussionQuestion": "Hoe bepaal je welke processen prioriteit krijgen wanneer je niet voldoende capaciteit hebt om alles tegelijk uit te voeren?"
    },
    {
      "id": 16,
      "title": "Extra eenheden inzetten",
      "role": "Bevelvoerder",
      "roleNote": "Geef beschikbare extra eenheden bewust een taak op basis van het actuele beeld.",
      "situation": "Door eigen opschaling komen extra TS'en beschikbaar. Zij krijgen geen automatische opdracht van de oefenleiding. Je moet zelf bepalen welke nog openstaande processen prioriteit krijgen en hoe je de capaciteit verdeelt.",
      "choices": [
        {
          "id": "A",
          "text": "2e/3e TS verdelen over ontruiming 8/9 en rookbeheersing trappenhuis, passend bij het actuele beeld.",
          "consequence": "De ondersteunende processen krijgen eigen capaciteit en de eerste ploeg kan zich richten op brand/redding.",
          "rationale": "Een logische taakverdeling die de drie hoofdleerdoelen bij elkaar brengt.",
          "label": "Operationeel gevolg",
          "quality": 1,
          "deepDive": "Een logische taakverdeling die de drie hoofdleerdoelen bij elkaar brengt."
        },
        {
          "id": "B",
          "text": "Beide extra TS'en naar de 7e verdieping sturen voor extra aanvalskracht.",
          "consequence": "De brandinzet wordt sterker, maar ontruiming boven de brand en rookbeheersing blijven onderbezet.",
          "rationale": "Extra brandbestrijdingscapaciteit kan nuttig zijn, maar moet worden afgewogen tegen de zelfstandige neventaken.",
          "label": "Operationeel gevolg",
          "quality": -1,
          "deepDive": "Extra brandbestrijdingscapaciteit kan nuttig zijn, maar moet worden afgewogen tegen de zelfstandige neventaken."
        },
        {
          "id": "C",
          "text": "Eén extra TS zonder concrete opdracht stand-by houden.",
          "consequence": "Capaciteit is aanwezig maar wordt niet benut terwijl andere taken aantoonbaar openstaan.",
          "rationale": "In een grote inzet is duidelijke taaktoedeling essentieel.",
          "label": "Operationeel gevolg",
          "quality": -1,
          "deepDive": "In een grote inzet is duidelijke taaktoedeling essentieel."
        }
      ],
      "sourceFrame": "Onderlegger: Concept Handboek Brandbestrijding Hoogbouw VGGM 2026, aangeleverde VGGM-lesstof en het Handboek Incidentbestrijding Hoogbouw VRR (2024). Deze Arnhem Building-casus is een didactische toepassing voor gebouwen van circa 20–70 meter. Objectdetails, brandveiligheidsvoorzieningen, tijden en incidentontwikkeling zijn voor de oefening deels fictief en vormen geen vastgesteld VGGM-inzetprotocol.",
      "systems": [
        "CAN",
        "FABCM",
        "Smokestopper"
      ],
      "media": {
        "src": "assets/arnhem/moment16.png",
        "caption": "Extra eenheden bij de inzet",
        "source": "Aangeleverde afbeelding"
      },
      "discussionQuestion": "Hoe vertaal je het actuele incidentbeeld naar concrete opdrachten voor nieuw aangekomen eenheden?"
    }
  ],
  "glossary": {
    "Stack-effect": {
      "definition": "Door temperatuurverschil tussen binnen- en buitenlucht ontstaat in een hoog gebouw een verticale luchtstroming. Is het binnen warmer dan buiten, dan is doorgaans een opwaartse stroming aanwezig.",
      "operational": "Let op rook en CO boven én onder de brand, openstaande deuren en ramen, seizoen/buitentemperatuur en veranderingen in drukverhoudingen. Openingen kunnen rook en CO over meerdere verdiepingen transporteren.",
      "video": "https://youtu.be/CoTqobi4J40?si=yPRLE63CCivy4dAg"
    },
    "Reverse stack": {
      "definition": "Omgekeerde stack-richting. Wanneer het gebouw binnen koeler is dan buiten, kan de verticale luchtstroming juist neerwaarts gericht zijn.",
      "operational": "Rook en CO kunnen hierdoor ook onder de brandverdieping terechtkomen. Neem dit mee bij verkenning, CO-metingen en het kiezen van veilige vlucht- en inzetwegen.",
      "video": "https://youtu.be/CoTqobi4J40?si=yPRLE63CCivy4dAg"
    },
    "Coandă-effect": {
      "definition": "Rook en hete gassen die uit een opening treden, kunnen door de luchtstroming langs de gevel omhoog worden geleid en als het ware de gevel blijven volgen.",
      "operational": "Controleer niet alleen de brandverdieping, maar ook bovenliggende verdiepingen, ramen, gevelopeningen en luchtinlaten. Rookverspreiding langs de gevel kan hoger gelegen bouwlagen bedreigen.",
      "video": "https://youtu.be/wF3YgP4Ag04?si=14DGjZZjriKNb1zj"
    },
    "Wind Driven Fire": {
      "definition": "Winddruk op een opening in het brandcompartiment kan de brand sterk aanwakkeren en hete rookgassen krachtig door het compartiment richting gang, voorportaal of trappenhuis sturen.",
      "operational": "Beoordeel windrichting vroeg, beheers openingen, voorkom een ongecontroleerde flowpath en zorg voor voldoende koelend vermogen en back-up voordat wordt toegetreden.",
      "video": "https://youtu.be/5gOrR9IoB8Y?si=wDkTGTgQttDiKKJn"
    },
    "Flowpath": {
      "definition": "De route waarlangs lucht, rook en hete gassen zich bewegen tussen een toevoeropening en een afvoeropening, gestuurd door druk- en temperatuurverschillen.",
      "operational": "Iedere geopende deur, raam of andere opening kan de flowpath veranderen. Daardoor kan een veilige positie plotseling onderdeel worden van de uitstroomroute van hete rookgassen.",
      "video": "https://youtu.be/IbMCRldLu5M?si=liYGTdUR6RRFgZ2J"
    },
    "Wokkeltrappenhuis": {
      "definition": "Twee onafhankelijke trappen die in één schachtconstructie zijn vervlochten en brandwerend van elkaar zijn gescheiden.",
      "operational": "Bepaal expliciet welk trappenhuis voor inzet en welk voor ontvluchting/ontruiming wordt gebruikt."
    },
    "Bruggenhoofd": {
      "definition": "Een veilige operationele uitvalsbasis nabij de brand, van waaruit leiding, logistiek, communicatie, back-up en materiaal worden georganiseerd.",
      "operational": "Richt het bruggenhoofd in een rookvrije en beschermde ruimte in en organiseer van daaruit onder meer coördinatie, ademlucht, materiaal, registratie en logistiek. De aangeleverde VGGM-aandachtskaart is als uitklapbare bron toegevoegd.",
      "pdf": "assets/custom/bruggenhoofd_aandachtskaart.pdf"
    },
    "VRICOL": {
      "definition": "Verkenning, Redding, Interventie, Compartimentering, Ontruiming en Logistiek.",
      "operational": "In deze webcasus uitsluitend een didactisch vergelijkingsmodel om te toetsen of de inzet voldoende breed blijft. VRICOL wordt hier niet als VGGM-procedure gepresenteerd."
    },
    "Compartimentering": {
      "definition": "Het opdelen van een gebouw in brand- en/of rookwerend gescheiden delen om verspreiding van brand en rook te beperken.",
      "operational": "Gebruik gebouwinformatie om te herkennen welke scheidingen rookwerend of brandwerend zijn. Houd deuren in deze scheidingen gesloten en bewaak vooral de scheidingen rond vluchtwegen en trappenhuizen."
    },
    "WBDBO": {
      "definition": "Weerstand tegen BrandDoorslag en BrandOverslag. Een maat voor de tijd waarin brand zich niet van het ene naar het andere brandcompartiment mag uitbreiden.",
      "operational": "Gebruik de opgegeven WBDBO als beslisinformatie voor tijd, compartimentering en ontruiming, maar behandel de waarde niet als absolute garantie tijdens een incident."
    },
    "Brandweerlift": {
      "definition": "Lift met aangepaste bediening en voorzieningen voor gebruik door de brandweer tijdens brand.",
      "operational": "Controleer vóór gebruik op rook en water, houd de lift onder brandweerbeheer en gebruik hem alleen zolang de omstandigheden veilig blijven."
    },
    "Ontruimingslift": {
      "definition": "Een lift die specifiek is ontworpen om personen te ondersteunen bij ontvluchting of ontruiming.",
      "operational": "Een brandweerlift is niet automatisch een ontruimingslift. Controleer welk type lift aanwezig is en waarvoor die volgens het gebouwontwerp bedoeld is."
    },
    "Overdrukinstallatie": {
      "definition": "Een installatie die door middel van drukverschil probeert te voorkomen dat rook een trappenhuis of voorportaal binnendringt.",
      "operational": "Openstaande deuren, ventilatie en andere openingen kunnen het drukconcept verstoren. Controleer waar de overdruk daadwerkelijk aanwezig is en of de vluchtweg rookvrij blijft."
    },
    "Smokestopper": {
      "definition": "Middel om rookuitstroom via een deuropening te beperken terwijl gecontroleerde inzet mogelijk blijft.",
      "operational": "Ondersteunt deurmanagement en anti-ventilatie en helpt gang, voorportaal en vluchtweg rookarmer te houden."
    },
    "Commandoruimte": {
      "definition": "De centrale ruimte in het gebouw waar informatie en bediening van brandveiligheidsinstallaties samenkomen.",
      "operational": "Gebruik de commandoruimte voor informatie over BMI/BMC en meldlocaties, sprinklerstatus, brandweer- en ontruimingsliften, overdrukinstallatie, interne bluswatervoorziening/stijgleiding, noodstroom en interne communicatie/intercom. Koppel die informatie altijd aan actuele waarnemingen buiten en op hoogte."
    },
    "Offensief binnen": {
      "definition": "Inzet waarbij de brandweer het brandcompartiment binnengaat om de brand actief te bestrijden.",
      "operational": "Alleen passend wanneer risico, slagkracht en vlucht-/terugtrekmogelijkheden dit toelaten."
    },
    "Defensief binnen": {
      "definition": "Inzet vanuit een veiliger deel van het gebouw met focus op begrenzen, beschermen en voorbereiden.",
      "operational": "Bij scenario 2/3 kan dit nodig zijn voordat een offensieve binneninzet verantwoord is."
    },
    "Transitional attack": {
      "definition": "Een tactiek waarbij de brand eerst van buitenaf wordt beïnvloed of gekoeld, waarna wordt overgegaan naar een binneninzet.",
      "operational": "Alleen zinvol als bereik, effect en coördinatie duidelijk zijn. Externe koeling mag de daaropvolgende binneninzet niet onnodig vertragen of onduidelijk maken.",
      "video": "https://youtu.be/Qmw2DT4betA?si=vTfjhR5Ga34ASpRZ"
    },
    "Floor-below nozzle": {
      "definition": "Een tactiek waarbij vanaf de onderliggende verdieping water in de brandruimte of brandgevel wordt gebracht, bijvoorbeeld wanneer directe benadering van de brandverdieping lastig of onveilig is.",
      "operational": "Alleen bruikbaar als bouwkundige situatie, bereikbaarheid en coördinatie dit toelaten. Het is een middel om invloed op de brand te krijgen, niet automatisch een vervanging van verdere inzetvoorbereiding.",
      "video": "https://youtu.be/4B5mdCBNdj8?si=KwjRh7W9na3BsK3K"
    },
    "Basisprincipes": {
      "definition": "Basisprincipes brandbestrijding verbinden rondomverkenning, brandgedrag, koelend vermogen, openingen/toegangen en bereikbaarheid tot één operationeel beeld.",
      "operational": "Gebruik de basisprincipes als samenhangend denkraam: verken rondom, bepaal locatie en omvang, lees RSTV-signalen, beoordeel openingen en bereikbaarheid en stem koelend vermogen daarop af."
    },
    "Branddriehoek": {
      "definition": "Brand kan alleen blijven bestaan als brandstof, zuurstof en voldoende temperatuur gelijktijdig aanwezig zijn.",
      "operational": "Brandbestrijding beïnvloedt één of meer zijden van de driehoek: koelen, zuurstoftoevoer beperken of brandstof wegnemen/scheiden."
    },
    "RSTV": {
      "definition": "Gebruik RSTV-signalen om het brandbeeld dynamisch te lezen: rook, stroming, temperatuur en vlammen. In deze casus worden die waarnemingen steeds gekoppeld aan wind, openingen, verdieping en vluchtwegen.",
      "operational": "Gebruik veranderingen in rook, stroming, temperatuur en vlammen tijdens de hele inzet als signalen voor brandontwikkeling en veranderende ventilatiecondities."
    },
    "Kenmerkenschema": {
      "definition": "Gebruik kenmerken van brand, gebouw, mens, omgeving en interventie om het inzetdoel en de randvoorwaarden te bepalen. Bij hoogbouw wegen gebouwvoorzieningen, verticale verplaatsing, bewonersgedrag en rookverspreiding zwaar mee.",
      "operational": "Combineer mens-, gebouw-, brand-, omgevings- en interventiekenmerken om inzetdoel en randvoorwaarden te bepalen."
    },
    "Kwadrantenmodel": {
      "definition": "Gebruik het kwadrantenmodel om bewust te kiezen tussen offensief of defensief en binnen of buiten. De gekozen positie moet blijven passen bij het actuele brandbeeld en kan tijdens de inzet wijzigen.",
      "operational": "Maak bewust onderscheid tussen offensief binnen, defensief binnen, offensief buiten en defensief buiten en heroverweeg de positie wanneer het brandbeeld verandert."
    },
    "CAN": {
      "definition": "Gebruik CAN voor een korte, bruikbare terugmelding vanuit de ploeg: condities/waarnemingen, acties die worden uitgevoerd en wat nodig is. In deze casus voedt CAN de besluitvorming van de bevelvoerder zonder dat manschappen voor iedere veilige handeling toestemming hoeven af te wachten.",
      "operational": "Gebruik CAN voor een korte, bruikbare terugmelding vanuit de ploeg zodat de bevelvoerder het actuele beeld kan bijstellen."
    },
    "FABCM": {
      "definition": "FABCM ondersteunt commandovoering: Factfinding, Analyse, Besluitvorming, Communicatie en Monitoring. In deze casus wordt het vooral zichtbaar bij heroverwegingen: actief afwijkende feiten zoeken, betekenis geven, besluiten, opdrachten helder communiceren en controleren of het effect wordt bereikt.",
      "operational": "Gebruik Factfinding, Analyse, Besluitvorming, Communicatie en Monitoring om besluiten te onderbouwen en het effect ervan actief te volgen."
    },
    "Deurcontrole": {
      "definition": "Beoordeel vóór openen wat de deur, druk, warmte en rookstroming vertellen. Open zo beperkt en gecontroleerd mogelijk en koppel de uitkomst aan het inzetplan.",
      "operational": "Beheers de opening doelgericht en zo kort mogelijk. Koppel de waargenomen rook-, warmte- en drukstroming aan het inzetplan."
    },
    "Anti-ventilatie": {
      "definition": "Beperk ongewenste luchttoevoer en rookafvoer door openingen beheerst te houden. Bij winddruk en stack-effect is het voorkomen van een ongecontroleerde flowpath extra belangrijk.",
      "operational": "Beperk ongewenste luchttoevoer door openingen beheerst te houden; dit hangt direct samen met deurcontrole, flowpath en Wind Driven Fire."
    },
    "Rookgaskoeling": {
      "definition": "Stem de straalpijptechniek af op het brand- en rookbeeld. In het BPBB-train-de-trainerdocument wordt bij snelle lijn en snelle toevoer benoemd: tot aan de klepel circa 200 l/min en voorbij de klepel circa 450 l/min. Rookgaskoeling met 200 l/min wordt daarbij als voldoende benoemd. Gebruik 450 l/min dus niet automatisch voor rookgaskoeling als dat overkill is.",
      "operational": "Stem techniek en waterdebiet af op het rook- en brandbeeld; koelen is een doelgerichte handeling en geen automatisme."
    },
    "3D-puls": {
      "definition": "Straalpijptechniek waarbij korte, gerichte pulsen in de hete rooklaag worden gegeven om rookgassen te koelen met zo min mogelijk onnodige waterbelasting.",
      "operational": "Pas alleen toe wanneer de omstandigheden en het doel van rookgaskoeling hierom vragen; observeer voortdurend het effect."
    },
    "Boogmethode": {
      "definition": "Straalpijptechniek waarbij water in een gecontroleerde boog wordt ingebracht om een groter oppervlak of volume te koelen.",
      "operational": "Kies de methode passend bij afstand, brandbeeld, warmtebelasting en beschikbaar koelend vermogen."
    },
    "Massieve Aanval": {
      "definition": "Straalpijptechniek waarbij met een compacte/massieve straal veel koelend vermogen direct op de brand wordt gebracht.",
      "operational": "Gebruik wanneer snelle knockdown en direct koelend vermogen nodig zijn en de positie van de ploeg dit veilig toelaat."
    },
    "Laag voortbewegen": {
      "definition": "Bij hitte en slecht zicht beweegt de ploeg laag om onder de heetste rooklaag te blijven, het thermisch beeld beter te benutten en de terugweg beheersbaar te houden.",
      "operational": "Blijf onder de heetste rooklaag, behoud oriëntatie en bewaak de terugweg."
    },
    "Snelle lijn": {
      "definition": "Systeem uit het train-de-trainerdocument: snelle lijn bij TS binnen circa 20 meter van het brandadres, bijvoorbeeld bij TA, portiekflat of auto’s. Eerst volledig uitlopen, daarna rustig druk opbouwen op de straal. Bij invouwen moet alle lucht eruit, anders past de lijn niet goed terug in de TS.",
      "operational": "Gebruik het systeem volgens de bestaande BPBB-werkwijze; deze entry blijft inhoudelijk ongewijzigd."
    },
    "Snelle toevoer": {
      "definition": "Systeem uit het train-de-trainerdocument: snelle toevoer wanneer de afstand langer is dan circa 40 meter of wanneer mogelijk meerdere O-bundels nodig zijn, bijvoorbeeld bij woningen en portiekflats. Eerst volledig uitlopen, daarna rustig druk opbouwen op het verdeelstuk. Praktische werklijn: eerst vullen met circa 2,5 bar; als water op het verdeelstuk staat ophogen naar 8 bar.",
      "operational": "Gebruik het systeem volgens de bestaande BPBB-werkwijze; deze entry blijft inhoudelijk ongewijzigd."
    },
    "Snelle aanval": {
      "definition": "In deze fictieve casus is de snelle aanval beschikbaar voor een snelle opbouw van de LD-aanvalslijn vanaf het gekozen afnamepunt. Snelheid is alleen winst als voldoende koelend vermogen, back-up en een veilige route zijn geborgd.",
      "operational": "Snelheid is alleen winst als koelend vermogen, back-up en een veilige route zijn geborgd."
    },
    "O-bundel": {
      "definition": "Het BPBB-document benoemt: bundel uitvouwen tot O, rustig laten ontvouwen tot uiteindelijke druk van 8 bar. Binnenzijde is de straalpijpzijde; buitenzijde is de watertoevoer. Bij twee O-bundels: binnenzijde verlengbundel naar buitenzijde aanvalsbundel, zodat een ‘bril’ ontstaat. In deze casus helpt dit om compact op hoogte te werken zonder vluchtwegen onnodig te blokkeren.",
      "operational": "Compact slangmanagement op hoogte, met aandacht voor koppelen, ontvouwen, drukopbouw en behoud van vluchtwegen."
    },
    "Opruimen": {
      "definition": "Het document waarschuwt voor verkeerd opruimen: niet met vouwen over de grond trekken, want dat geeft lekkage. Slangen eerst onder druk strekken, daarna pas oprollen; voor O-bundels met plank/oprolsysteem of bundlewheel. Dit is vooral relevant bij logistiek en langdurige inzet: inzetgereed maken is onderdeel van het systeem, niet alleen opruimen achteraf.",
      "operational": "Zorg dat slangen na inzet opnieuw inzetgereed worden gemaakt zonder beschadiging; afbeelding, video en systeemkaart worden bij dit begrip niet getoond."
    },
    "Hoogtetas": {
      "definition": "Het train-de-trainerdocument benoemt als inhoud voor werken op hoogte: Y-verdeelstuk, koppelslang van circa 1 meter, slangophouders, blinddekselsleutels en touw. In deze casus wordt de hoogtetas onderdeel van de logistieke planning: wat moet direct mee, wat hoort op het bruggenhoofd en wat kan beneden blijven?",
      "operational": "Deze entry blijft inhoudelijk en visueel ongewijzigd."
    },
    "Transporttas": {
      "definition": "Systeem uit het document voor grote inzetdiepten, zoals appartementencomplex, verzorgingstehuis, panden met inpandige galerij en ziekenhuizen. Werkprincipe: bepaal waar de O-bundels komen, bouw vanaf de O-bundels op naar de TS, transporttas koppelen en uitlopen. Neem bij grote inzetdiepte voldoende transporttassen mee; het document noemt als aandachtspunt: schat de inzetdiepte in en neem voldoende transporttassen mee (#4).",
      "operational": "Deze entry blijft inhoudelijk en visueel ongewijzigd."
    },
    "Droge stijgleiding": {
      "definition": "Systeem uit het document voor hoogbouw tot 70 meter met een betrouwbare stijgleiding. Aandachtspunten: opstelplaats voertuig, taakverdeling nummers 1 t/m 4, werken met inhoud hoogtetas, O-bundels op galerij en beperkte ruimte. Houd vluchtwegen intact. Ontluchten van de stijgleiding kan via de pomp of via aangekoppeld verdeelstuk; via verdeelstuk is snel.",
      "operational": "Deze entry blijft inhoudelijk en visueel ongewijzigd."
    },
    "Verdeelstuk buitenom": {
      "definition": "Systeem uit het document voor hoogbouw tot ongeveer de 8e etage zonder droge stijgleiding, bijvoorbeeld appartementencomplex met galerij of woonflat met galerij. Hierbij wordt met de hoogtetas en O-bundels gewerkt; bij gebruik van een verlengbundel geldt: buitenzijde naar buitenzijde koppelen. Probeer vluchtwegen intact te houden.",
      "operational": "Deze entry blijft inhoudelijk en visueel ongewijzigd."
    },
    "LD op hoogte": {
      "definition": "Overkoepelende BPBB-laag uit het document: werken met O-bundels, snelle lijn, snelle toevoer en LD op hoogte. In deze hoogbouwcasus betekent dit dat het blussysteem niet los staat van routekeuze, stijgleiding, beperkte ruimte, vluchtwegbehoud, logistiek en ploegbelasting.",
      "operational": "Deze entry blijft inhoudelijk en visueel ongewijzigd."
    },
    "Do’s & Don’ts": {
      "definition": "Het document noemt praktische fouten en juiste werkwijzen: geen water op snelle lijn/sneller toevoer zolang die nog niet uit het voertuig is; niet met 8 bar direct vullen; niet drukloos met water slepen waardoor vouwen over de grond lek raken; snelle lijn/sneller toevoer eerst met circa 2,5 bar vullen en daarna naar 8 bar; rookgaskoeling tot aan de klepel met circa 200 l/min.",
      "operational": "Deze entry blijft inhoudelijk en visueel ongewijzigd."
    },
    "Vluchtmasker": {
      "definition": "Ademlucht-onafhankelijk hulpmiddel om een te redden persoon tijdens verplaatsing door een met rook bedreigde route tijdelijk tegen rook te beschermen.",
      "operational": "Bij een redding vanuit kantoor 7.14 moet de ploeg vooraf nadenken hoe het slachtoffer door de verrookte gang naar het trappenhuis wordt gebracht."
    },
    "Redvoertuig als stijgleiding": {
      "definition": "Didactische casusoptie waarbij het redvoertuig wordt benut als verticale route voor de alternatieve watervoorziening.",
      "operational": "Het redvoertuig moet door de bevelvoerder zelf worden gealarmeerd. Vroeg alarmeren voorkomt extra tijdverlies wanneer de droge stijgleiding faalt."
    }
  },
  "systemDefinitions": {
    "RSTV": {
      "title": "RSTV",
      "text": "Gebruik RSTV-signalen om het brandbeeld dynamisch te lezen: rook, stroming, temperatuur en vlammen. In deze casus worden die waarnemingen steeds gekoppeld aan wind, openingen, verdieping en vluchtwegen."
    },
    "Kenmerkenschema": {
      "title": "Kenmerkenschema",
      "text": "Gebruik kenmerken van brand, gebouw, mens, omgeving en interventie om het inzetdoel en de randvoorwaarden te bepalen. Bij hoogbouw wegen gebouwvoorzieningen, verticale verplaatsing, bewonersgedrag en rookverspreiding zwaar mee."
    },
    "Kwadrantenmodel": {
      "title": "Kwadrantenmodel",
      "text": "Gebruik het kwadrantenmodel om bewust te kiezen tussen offensief of defensief en binnen of buiten. De gekozen positie moet blijven passen bij het actuele brandbeeld en kan tijdens de inzet wijzigen."
    },
    "CAN": {
      "title": "CAN-terugmelding",
      "text": "Gebruik CAN voor een korte, bruikbare terugmelding vanuit de ploeg: condities/waarnemingen, acties die worden uitgevoerd en wat nodig is. In deze casus voedt CAN de besluitvorming van de bevelvoerder zonder dat manschappen voor iedere veilige handeling toestemming hoeven af te wachten."
    },
    "FABCM": {
      "title": "FABCM",
      "text": "FABCM ondersteunt commandovoering: Factfinding, Analyse, Besluitvorming, Communicatie en Monitoring. In deze casus wordt het vooral zichtbaar bij heroverwegingen: actief afwijkende feiten zoeken, betekenis geven, besluiten, opdrachten helder communiceren en controleren of het effect wordt bereikt."
    },
    "Deurcontrole": {
      "title": "Deurcontrole",
      "text": "Beoordeel vóór openen wat de deur, druk, warmte en rookstroming vertellen. Open zo beperkt en gecontroleerd mogelijk en koppel de uitkomst aan het inzetplan."
    },
    "Anti-ventilatie": {
      "title": "Anti-ventilatie",
      "text": "Beperk ongewenste luchttoevoer en rookafvoer door openingen beheerst te houden. Bij winddruk en stack-effect is het voorkomen van een ongecontroleerde flowpath extra belangrijk."
    },
    "Rookgaskoeling": {
      "title": "Rookgaskoeling / straalpijptechniek",
      "text": "Stem de straalpijptechniek af op het brand- en rookbeeld. In het BPBB-train-de-trainerdocument wordt bij snelle lijn en snelle toevoer benoemd: tot aan de klepel circa 200 l/min en voorbij de klepel circa 450 l/min. Rookgaskoeling met 200 l/min wordt daarbij als voldoende benoemd. Gebruik 450 l/min dus niet automatisch voor rookgaskoeling als dat overkill is."
    },
    "Klepel / straalpijp": {
      "title": "Klepel / straalpijp",
      "text": "Bij de snelle lijn en snelle toevoer wordt het klepelgebruik expliciet uitgelegd: tot aan de klepel circa 200 l/min; voorbij de klepel circa 450 l/min. In deze casus is dat relevant bij rookgaskoeling, koelend vermogen en voorkomen dat een kleine inzet ongemerkt een zware water-/logistieke belasting wordt."
    },
    "Laag voortbewegen": {
      "title": "Laag voortbewegen",
      "text": "Bij hitte en slecht zicht beweegt de ploeg laag om onder de heetste rooklaag te blijven, het thermisch beeld beter te benutten en de terugweg beheersbaar te houden."
    },
    "Snelle lijn": {
      "title": "Snelle lijn – systeem 1",
      "text": "Systeem uit het train-de-trainerdocument: snelle lijn bij TS binnen circa 20 meter van het brandadres, bijvoorbeeld bij TA, portiekflat of auto’s. Eerst volledig uitlopen, daarna rustig druk opbouwen op de straal. Bij invouwen moet alle lucht eruit, anders past de lijn niet goed terug in de TS."
    },
    "Snelle toevoer": {
      "title": "Snelle toevoer – systeem 2",
      "text": "Systeem uit het train-de-trainerdocument: snelle toevoer wanneer de afstand langer is dan circa 40 meter of wanneer mogelijk meerdere O-bundels nodig zijn, bijvoorbeeld bij woningen en portiekflats. Eerst volledig uitlopen, daarna rustig druk opbouwen op het verdeelstuk. Praktische werklijn: eerst vullen met circa 2,5 bar; als water op het verdeelstuk staat ophogen naar 8 bar."
    },
    "Snelle aanval": {
      "title": "Snelle aanval",
      "text": "In deze fictieve casus is de snelle aanval beschikbaar voor een snelle opbouw van de LD-aanvalslijn vanaf het gekozen afnamepunt. Snelheid is alleen winst als voldoende koelend vermogen, back-up en een veilige route zijn geborgd."
    },
    "O-bundel": {
      "title": "O-bundel",
      "text": "Het BPBB-document benoemt: bundel uitvouwen tot O, rustig laten ontvouwen tot uiteindelijke druk van 8 bar. Binnenzijde is de straalpijpzijde; buitenzijde is de watertoevoer. Bij twee O-bundels: binnenzijde verlengbundel naar buitenzijde aanvalsbundel, zodat een ‘bril’ ontstaat. In deze casus helpt dit om compact op hoogte te werken zonder vluchtwegen onnodig te blokkeren."
    },
    "O-bundel oprollen": {
      "title": "O-bundel oprollen / inzetgereed maken",
      "text": "Het document waarschuwt voor verkeerd opruimen: niet met vouwen over de grond trekken, want dat geeft lekkage. Slangen eerst onder druk strekken, daarna pas oprollen; voor O-bundels met plank/oprolsysteem of bundlewheel. Dit is vooral relevant bij logistiek en langdurige inzet: inzetgereed maken is onderdeel van het systeem, niet alleen opruimen achteraf."
    },
    "Transporttas": {
      "title": "Transporttas – systeem 3",
      "text": "Systeem uit het document voor grote inzetdiepten, zoals appartementencomplex, verzorgingstehuis, panden met inpandige galerij en ziekenhuizen. Werkprincipe: bepaal waar de O-bundels komen, bouw vanaf de O-bundels op naar de TS, transporttas koppelen en uitlopen. Neem bij grote inzetdiepte voldoende transporttassen mee; het document noemt als aandachtspunt: schat de inzetdiepte in en neem voldoende transporttassen mee (#4)."
    },
    "Droge stijgleiding binnen": {
      "title": "Droge stijgleiding – systeem 4 binnen",
      "text": "Systeem uit het document voor hoogbouw tot 70 meter met een betrouwbare stijgleiding. Aandachtspunten: opstelplaats voertuig, taakverdeling nummers 1 t/m 4, werken met inhoud hoogtetas, O-bundels op galerij en beperkte ruimte. Houd vluchtwegen intact. Ontluchten van de stijgleiding kan via de pomp of via aangekoppeld verdeelstuk; via verdeelstuk is snel."
    },
    "Verdeelstuk buitenom": {
      "title": "Verdeelstuk buitenom – systeem 4 buiten",
      "text": "Systeem uit het document voor hoogbouw tot ongeveer de 8e etage zonder droge stijgleiding, bijvoorbeeld appartementencomplex met galerij of woonflat met galerij. Hierbij wordt met de hoogtetas en O-bundels gewerkt; bij gebruik van een verlengbundel geldt: buitenzijde naar buitenzijde koppelen. Probeer vluchtwegen intact te houden."
    },
    "LD op hoogte": {
      "title": "LD op hoogte",
      "text": "Overkoepelende BPBB-laag uit het document: werken met O-bundels, snelle lijn, snelle toevoer en LD op hoogte. In deze hoogbouwcasus betekent dit dat het blussysteem niet los staat van routekeuze, stijgleiding, beperkte ruimte, vluchtwegbehoud, logistiek en ploegbelasting."
    },
    "Do’s & Don’ts LD/O-bundels": {
      "title": "Do’s & Don’ts LD/O-bundels",
      "text": "Het document noemt praktische fouten en juiste werkwijzen: geen water op snelle lijn/sneller toevoer zolang die nog niet uit het voertuig is; niet met 8 bar direct vullen; niet drukloos met water slepen waardoor vouwen over de grond lek raken; snelle lijn/sneller toevoer eerst met circa 2,5 bar vullen en daarna naar 8 bar; rookgaskoeling tot aan de klepel met circa 200 l/min."
    },
    "Smokestopper": {
      "title": "Smokestopper",
      "text": "De smokestopper is in deze casus beschikbaar. Hij ondersteunt deurmanagement en anti-ventilatie door rookuitstroom via de deuropening te beperken terwijl gecontroleerde inzet mogelijk blijft."
    },
    "Hoogtetas": {
      "title": "Hoogtetas",
      "text": "Het train-de-trainerdocument benoemt als inhoud voor werken op hoogte: Y-verdeelstuk, koppelslang van circa 1 meter, slangophouders, blinddekselsleutels en touw. In deze casus wordt de hoogtetas onderdeel van de logistieke planning: wat moet direct mee, wat hoort op het bruggenhoofd en wat kan beneden blijven?"
    }
  },
  "combinationRules": [],
  "robustChain": []
};
