window.SCENARIO = {
  "meta": {
    "title": "Hoogbouwcasus – Rivierstaete",
    "subtitle": "Interactieve oefencasus voor bevelvoerder en manschappen",
    "status": "Concept • didactische oefentoepassing • geen vastgesteld VGGM-inzetprotocol",
    "building": "Fictief woongebouw van circa 76 meter / 21 bouwlagen",
    "principles": [
      "Keuzes zijn bewust plausibel en geven niet vooraf prijs wat verwacht wordt.",
      "Na iedere keuze volgt eerst het operationele gevolg; de uitleg is daarna optioneel te openen.",
      "VRICOL (Verkenning, Redding, Interventie, Compartimentering, Ontruiming en Logistiek) wordt uitsluitend gebruikt als didactisch vergelijkingsmodel.",
      "Object- en broninformatie ondersteunt de beeldvorming, maar actuele waarnemingen bepalen of aannames nog kloppen.",
      "Een maatregel is pas geslaagd wanneer het waargenomen effect overeenkomt met het beoogde effect."
    ],
    "sourceNote": "Bronmateriaal wordt gebruikt als inhoudelijke onderlegger en verwijzing. De webcasus is een didactische oefentoepassing en geen vastgesteld VGGM-inzetprotocol.",
    "hero": "assets/vggm/hoogbouw_overzicht.jpeg",
    "scenarioGuide": {
      "title": "Uitleg scenario’s bij hoogbouwbrand",
      "intro": "De scenario’s zijn een denkkader. Het incident kan tijdens de inzet veranderen; een ander scenario moet zichtbaar leiden tot een nieuwe beoordeling van prioriteiten, opdrachten en capaciteit.",
      "items": [
        {
          "title": "Scenario 1 – Brand beheersbaar binnen het compartiment",
          "text": "Brand en rook blijven in hoofdzaak beperkt en de aanwezige voorzieningen functioneren voldoende. Vluchtwegen zijn bruikbaar. Focus op gericht redden en brandbestrijden."
        },
        {
          "title": "Scenario 2 – Brand niet beheerst, maar nog binnen het compartiment",
          "text": "De brand is onvoldoende beheerst, maar brand en rook zijn nog grotendeels compartimentsgebonden. Organiseer eerst voldoende interventievoorwaarden, zoals watervoorziening, blusvermogen, back-up en bruikbare vluchtwegen, en voer van daaruit redding en brandbestrijding uit."
        },
        {
          "title": "Scenario 3 – Brand of rook buiten het compartiment",
          "text": "Rook of brand verspreidt zich buiten het oorspronkelijke compartiment en bedreigt andere delen van het gebouw of vluchtwegen. Bescherming van vluchtwegen, compartimentering, rookbeheersing en ontruiming krijgen nadrukkelijker gewicht. De brandbestrijding wordt hierop aangepast."
        },
        {
          "title": "Scenario 4 – Uitbreidende gevelbrand / meerdere verdiepingen bedreigd",
          "text": "De brand breidt via of langs de gevel uit en kan meerdere verdiepingen tegelijkertijd bedreigen. De inzet krijgt een gebouwbrede dimensie: veilige vluchtwegen behouden, grootschaliger ontruiming organiseren en branduitbreiding waar mogelijk beperken."
        }
      ]
    }
  },
  "nodes": [
    {
      "id": 1,
      "title": "Aankomst en eerste verdeling",
      "role": "Bevelvoerder",
      "roleNote": "Bepaal het eerste inzetkader en verdeel taken.",
      "situation": "Bij aankomst bij Rivierstaete zie je lichte grijze rook uit een geopend raam op de 14e verdieping. De wind is aan deze gevel duidelijk voelbaar. De beheerder meldt dat beide brandweerliften beschikbaar zijn. Een bewoner zegt dat mogelijk nog iemand in de brandwoning aanwezig is.",
      "choices": [
        {
          "id": "A",
          "text": "De aanvalsploeg direct met blus- en toetredingsmateriaal naar de 12e verdieping sturen; beneden objectinformatie blijven verzamelen.",
          "consequence": "De ploeg wint tijd richting mogelijke redding, maar gaat omhoog voordat inzettrappenhuis, stijgleiding en windinvloed volledig zijn bevestigd.",
          "rationale": "Verdedigbaar vanuit reddingsdruk, maar kwetsbaarder omdat belangrijke inzetvoorwaarden nog niet volledig zijn bevestigd.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Verdedigbaar vanuit reddingsdruk, maar kwetsbaarder omdat belangrijke inzetvoorwaarden nog niet volledig zijn bevestigd."
        },
        {
          "id": "B",
          "text": "Een eerste ploeg naar de 12e verdieping voor verkenning sturen en beneden parallel stijgleiding, inzettrappenhuis en objectinformatie bevestigen.",
          "consequence": "Er ontstaat snel een beeld op hoogte en beneden blijft capaciteit beschikbaar om kritieke voorzieningen te bevestigen.",
          "rationale": "Tijd en voorbereiding worden parallel georganiseerd.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Tijd en voorbereiding worden parallel georganiseerd."
        },
        {
          "id": "C",
          "text": "Eerst bluswatervoorziening en objectinformatie volledig organiseren en daarna pas verticaal verplaatsen.",
          "consequence": "De voorbereiding beneden wordt sterk, maar de feitelijke verkenning op hoogte en een mogelijke redding starten later.",
          "rationale": "Verdedigbaar wanneer de voorbereiding kort en doelgericht blijft, maar tijdverlies kan bij een slachtoffer zwaar wegen.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Verdedigbaar wanneer de voorbereiding kort en doelgericht blijft, maar tijdverlies kan bij een slachtoffer zwaar wegen."
        }
      ],
      "discussionQuestion": "Welke informatie bepaalt bij aankomst je eerste prioriteiten en welke informatie moet je nog actief organiseren?",
      "media": {
        "src": "assets/vggm/verkenning_gevel.jpeg",
        "caption": "Verkenning van rookgedrag aan de gevel",
        "source": "VGGM lesmateriaal – slide 67"
      },
      "systems": [
        "Kenmerkenschema",
        "RSTV"
      ]
    },
    {
      "id": 2,
      "title": "Gebruik van de brandweerlift",
      "role": "Bevelvoerder",
      "roleNote": "Bepaal hoe je de brandweerlift verantwoord inzet.",
      "situation": "De brandweerlift is beschikbaar en er is geen rook, water of technische storing gemeld. De brand bevindt zich op de 14e verdieping.",
      "choices": [
        {
          "id": "A",
          "text": "De brandweerlift gebruiken tot de 12e verdieping en de lift onder brandweerbeheer houden.",
          "consequence": "De ploeg bereikt de inzetverdieping met beperkte fysieke belasting en houdt ruimte voor beoordeling en organisatie vóór de brandverdieping.",
          "rationale": "Gebruik van een betrouwbare brandweerlift beperkt tijd en fysieke belasting; de -2-positie biedt ruimte voor verdere organisatie.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Gebruik van een betrouwbare brandweerlift beperkt tijd en fysieke belasting; de -2-positie biedt ruimte voor verdere organisatie."
        },
        {
          "id": "B",
          "text": "De brandweerlift gebruiken tot de 13e verdieping om één verdieping loopafstand te besparen.",
          "consequence": "De ploeg komt iets dichter bij de brand, maar levert afstand en organisatieruimte in.",
          "rationale": "De beperkte tijdwinst moet worden afgewogen tegen de kleinere marge tot rook, water en brandinvloed.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "De beperkte tijdwinst moet worden afgewogen tegen de kleinere marge tot rook, water en brandinvloed."
        },
        {
          "id": "C",
          "text": "De lift niet gebruiken en met materiaal via het trappenhuis naar boven gaan.",
          "consequence": "De ploeg blijft onafhankelijk van lifttechniek, maar gebruikt veel tijd en fysieke reserve voordat de inzet begint.",
          "rationale": "Logisch bij een onbetrouwbare lift; inefficiënt wanneer de lift aantoonbaar bruikbaar is.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Logisch bij een onbetrouwbare lift; inefficiënt wanneer de lift aantoonbaar bruikbaar is."
        }
      ],
      "discussionQuestion": "Welke voorwaarden moeten zijn ingevuld voordat je een lift operationeel inzet bij hoogbouwbrand?",
      "media": {
        "src": "assets/vggm/hoogbouw_object.png",
        "caption": "Hoogbouwobject en verticale bereikbaarheid",
        "source": "VGGM lesmateriaal – slide 31"
      },
      "systems": [
        "Kenmerkenschema"
      ]
    },
    {
      "id": 3,
      "title": "Keuze van het inzettrappenhuis op -2",
      "role": "Manschappen",
      "roleNote": "Kies een inzetroute en koppel die direct terug aan de bevelvoerder.",
      "situation": "Op de 12e verdieping zijn twee rookvrije trappenhuizen. In trappenhuis A is direct een afnamepunt zichtbaar. In trappenhuis B niet. Beide routes lijken bruikbaar.",
      "choices": [
        {
          "id": "A",
          "text": "Trappenhuis A als inzettrappenhuis kiezen en trappenhuis B zo veel mogelijk beschikbaar houden voor ontvluchting/ontruiming.",
          "consequence": "Waterafname en inzetroute worden logisch gekoppeld en de tweede vluchtweg blijft zo veel mogelijk vrij van de brandweerinzet.",
          "rationale": "De routekeuze combineert bluswater, inzetlogistiek en vluchtwegbescherming.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "De routekeuze combineert bluswater, inzetlogistiek en vluchtwegbescherming."
        },
        {
          "id": "B",
          "text": "Trappenhuis B kiezen omdat de route richting de woning korter lijkt.",
          "consequence": "Op een hogere verdieping blijkt de koppeling met de bluswatervoorziening minder logisch en ontstaat extra omloop.",
          "rationale": "Een kortere looproute is niet automatisch de beste inzetroute wanneer water en vluchtwegfunctie onvoldoende zijn meegewogen.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Een kortere looproute is niet automatisch de beste inzetroute wanneer water en vluchtwegfunctie onvoldoende zijn meegewogen."
        },
        {
          "id": "C",
          "text": "Beide trappenhuizen tegelijk gebruiken, één ploeg per trap.",
          "consequence": "Je krijgt sneller informatie over beide routes, maar beide trappenhuizen worden onderdeel van de brandweerinzet.",
          "rationale": "Dat maakt de scheiding tussen inzet- en vluchtstromen kwetsbaarder wanneer bewoners gaan ontruimen.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "Dat maakt de scheiding tussen inzet- en vluchtstromen kwetsbaarder wanneer bewoners gaan ontruimen."
        }
      ],
      "discussionQuestion": "Hoe borg je dat een vluchtweg bruikbaar blijft terwijl de brandweerinzet wordt opgebouwd?",
      "media": {
        "src": "assets/vggm/stijgleiding_afnamepunt.jpg",
        "caption": "Afnamepunt / stijgleiding als onderdeel van de routekeuze",
        "source": "VGGM lesmateriaal – slide 73"
      },
      "systems": [
        "Droge stijgleiding binnen",
        "Hoogtetas"
      ]
    },
    {
      "id": 4,
      "title": "Positie van het bruggenhoofd",
      "role": "Bevelvoerder",
      "roleNote": "Bepaal waar leiding, logistiek en back-up op hoogte stabiel kunnen worden georganiseerd.",
      "situation": "Op de 12e verdieping bevindt zich bij de lift een ruim voorportaal. De CO-meter geeft 0 ppm aan. Op de 13e verdieping is bij de deur naar de gang lichte rooklucht waarneembaar.",
      "choices": [
        {
          "id": "A",
          "text": "Het bruggenhoofd op de 12e verdieping inrichten en daar continu CO bewaken.",
          "consequence": "Een goed bereikbare basis op -2, gekoppeld aan lift, logistiek en inzetroute.",
          "rationale": "De locatie ligt buiten de huidige rookinvloed en biedt ruimte om leiding, logistiek en back-up te organiseren.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "De locatie ligt buiten de huidige rookinvloed en biedt ruimte om leiding, logistiek en back-up te organiseren."
        },
        {
          "id": "B",
          "text": "Het bruggenhoofd op de 13e verdieping inrichten om dichter bij de ingezette ploeg te blijven.",
          "consequence": "De aanvoerroute wordt korter, maar het bruggenhoofd ligt dichter bij de rookinvloed en kan bij verslechtering eerder worden bedreigd.",
          "rationale": "Dichter bij de brand is niet automatisch een betere basis wanneer de omstandigheden daar minder stabiel zijn.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Dichter bij de brand is niet automatisch een betere basis wanneer de omstandigheden daar minder stabiel zijn."
        },
        {
          "id": "C",
          "text": "Nog geen bruggenhoofd inrichten en eerst de brand- en slachtofferinformatie verder uitzoeken.",
          "consequence": "De focus ligt direct op brand en slachtoffer, maar leiding, back-up en logistiek op hoogte blijven voorlopig minder georganiseerd.",
          "rationale": "Een zeer klein incident kan dit tijdelijk verdragen; bij groeiende complexiteit wordt een vaste operationele basis steeds belangrijker.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "Een zeer klein incident kan dit tijdelijk verdragen; bij groeiende complexiteit wordt een vaste operationele basis steeds belangrijker."
        }
      ],
      "discussionQuestion": "Wanneer wordt logistiek in hoogbouw een zelfstandig inzetproces en hoe organiseer je dat?",
      "media": {
        "src": "assets/vggm/bruggenhoofd_schema.jpg",
        "caption": "Schematische weergave van het bruggenhoofd",
        "source": "VGGM lesmateriaal – slide 69"
      },
      "systems": [
        "Hoogtetas",
        "Transporttas"
      ],
      "deepDive": "Een bruggenhoofd is een basis voor leiding, logistiek, communicatie, materiaal en ondersteuning. De locatie moet niet alleen dichtbij zijn, maar vooral stabiel en bruikbaar blijven. Een rookvrije -2-positie met CO-monitoring biedt ruimte om de inzet te ondersteunen wanneer de omstandigheden op de brandverdieping verslechteren."
    },
    {
      "id": 5,
      "title": "Deurmanagement en smokestopper",
      "role": "Manschappen",
      "roleNote": "Beheers de deuropening en beperk onnodige rook- en luchtstroming.",
      "situation": "De ploeg bereikt de gang op de 14e verdieping. In de gang hangt rook, maar er is nog bruikbaar zicht. De voordeur van de brandwoning is gesloten en achter de deur is duidelijke warmte voelbaar.",
      "choices": [
        {
          "id": "A",
          "text": "De smokestopper plaatsen en de deur gecontroleerd openen zodra het blusmiddel inzetgereed is.",
          "consequence": "De rookuitstroom naar de gang blijft beperkt en de ploeg houdt controle over de deuropening.",
          "rationale": "Door de opening te beperken en pas te openen wanneer de inzet gereed is, worden rookverspreiding en ongewenste luchtstroming zo veel mogelijk beperkt.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Door de opening te beperken en pas te openen wanneer de inzet gereed is, worden rookverspreiding en ongewenste luchtstroming zo veel mogelijk beperkt."
        },
        {
          "id": "B",
          "text": "De deur kort openen voor een snelle observatie, direct weer sluiten en daarna de smokestopper plaatsen.",
          "consequence": "De ploeg krijgt snel informatie, maar zelfs een korte opening kan de lucht- en rookstroming merkbaar veranderen.",
          "rationale": "Verdedigbaar als verkenningsactie, maar kwetsbaarder omdat de opening wordt gemaakt voordat rookverspreiding wordt beperkt.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Verdedigbaar als verkenningsactie, maar kwetsbaarder omdat de opening wordt gemaakt voordat rookverspreiding wordt beperkt."
        },
        {
          "id": "C",
          "text": "De deur volledig openen om snel zicht en toegang te krijgen.",
          "consequence": "Rook en hete gassen stromen de gang in en het voorportaal raakt merkbaar meer met rook belast.",
          "rationale": "Een grotere opening versterkt de verbinding tussen brandruimte en gang en kan daarmee zowel rookverspreiding als luchttoevoer beïnvloeden.",
          "label": "Operationele duiding",
          "quality": -2,
          "deepDive": "Een grotere opening versterkt de verbinding tussen brandruimte en gang en kan daarmee zowel rookverspreiding als luchttoevoer beïnvloeden."
        }
      ],
      "discussionQuestion": "Welke signalen gebruik je om te bepalen hoe en wanneer je een deur naar een brandruimte opent?",
      "media": {
        "src": "assets/vggm/rook_gang.png",
        "caption": "Rookverspreiding in een verkeersruimte",
        "source": "VGGM lesmateriaal – slide 63"
      },
      "systems": [
        "Deurcontrole",
        "Smokestopper",
        "Anti-ventilatie"
      ],
      "deepDive": "Een deuropening verandert de stromingscondities. Deurmanagement gaat over wanneer, hoe ver en hoe lang een opening wordt gemaakt. Een smokestopper kan rookuitstroom beperken, maar vervangt niet de beoordeling van wind, druk en brandgedrag."
    },
    {
      "id": 6,
      "title": "Wind Driven Fire herkennen",
      "role": "Manschappen",
      "roleNote": "Herken veranderende omstandigheden, handel veilig en koppel de tactische betekenis terug aan de bevelvoerder.",
      "situation": "Buiten meldt de chauffeur dat de wind rechtstreeks op het geopende raam van de brandwoning staat. Binnen merkt de ploeg dat weinig rook via het raam wegtrekt en dat de hitte bij de deuropening sterk toeneemt.",
      "choices": [
        {
          "id": "A",
          "text": "De ploeg trekt zich terug achter de deur, laat extra koelend vermogen en back-up gereedmaken en beoordeelt de toetreding opnieuw.",
          "consequence": "De directe blootstelling aan de stroming wordt beperkt en de ploeg creëert tijd en ruimte om de inzet opnieuw te beoordelen.",
          "rationale": "Een verdedigbare keuze bij duidelijke aanwijzingen voor windgedreven brandgedrag.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Een verdedigbare keuze bij duidelijke aanwijzingen voor windgedreven brandgedrag."
        },
        {
          "id": "B",
          "text": "De deur verder openen om beter zicht te krijgen en snel door te stoten.",
          "consequence": "Bij het verder openen van de deur neemt de hete stroming richting de gang sterk toe en wordt de ploeg gedwongen terug te trekken.",
          "rationale": "De bereikbaarheid van het compartiment zegt niets over de veiligheid van de stromingscondities. Door verder te openen kan de blootstelling snel toenemen.",
          "label": "Operationele duiding",
          "quality": -2,
          "deepDive": "De bereikbaarheid van het compartiment zegt niets over de veiligheid van de stromingscondities. Door verder te openen kan de blootstelling snel toenemen."
        },
        {
          "id": "C",
          "text": "Van buiten proberen de brand met het redvoertuig te beïnvloeden terwijl de binnenploeg positie houdt.",
          "consequence": "Externe brandbeïnvloeding kan effect hebben, maar bereik, effect en coördinatie zijn nog onzeker. De binnenploeg blijft in de tussentijd blootgesteld aan de veranderende omstandigheden.",
          "rationale": "Een mogelijke tactische optie, maar alleen wanneer effect en afstemming voldoende duidelijk zijn.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Een mogelijke tactische optie, maar alleen wanneer effect en afstemming voldoende duidelijk zijn."
        }
      ],
      "discussionQuestion": "Welke signalen doen je vermoeden dat wind het brandgedrag beïnvloedt, en wanneer is dat voor jou reden om de inzet te heroverwegen?",
      "media": {
        "src": "assets/vggm/wdf_profiel.png",
        "caption": "Wind Driven Fire: ventilatieprofiel",
        "source": "VGGM lesmateriaal – slide 51"
      },
      "systems": [
        "RSTV",
        "Rookgaskoeling"
      ]
    },
    {
      "id": 7,
      "title": "Blusstrategie en benodigde slagkracht",
      "role": "Bevelvoerder",
      "roleNote": "Bepaal welk blusvermogen en welke back-up nodig zijn voor de verdere inzet.",
      "situation": "De brand blijkt verder ontwikkeld dan bij aankomst werd ingeschat. De stijgleiding is beschikbaar en de tweede TS kan aanvullende capaciteit leveren. De sprinkler heeft de brand niet onder controle gebracht en de windinvloed blijft relevant. De eerste ploeg vraagt om voldoende koelend vermogen en back-up.",
      "choices": [
        {
          "id": "A",
          "text": "Twee LD-aanvalsmogelijkheden opbouwen via de stijgleiding, met een primaire aanvalslijn en een volwaardige back-up voordat opnieuw wordt toegetreden.",
          "consequence": "Er is meer koelend vermogen en een volwaardige back-up beschikbaar, maar de opbouw kost extra tijd.",
          "rationale": "Deze keuze biedt meer reserve wanneer het brandbeeld ontwikkeld is of verder kan verslechteren.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Deze keuze biedt meer reserve wanneer het brandbeeld ontwikkeld is of verder kan verslechteren."
        },
        {
          "id": "B",
          "text": "Met één snel opgebouwde LD-aanvalslijn toetreden en de tweede lijn tijdens de inzet laten opbouwen.",
          "consequence": "De eerste ploeg kan eerder inzetten, maar heeft aanvankelijk minder reserve en back-up beschikbaar.",
          "rationale": "Verdedigbaar bij een aantoonbaar beheersbaar brandbeeld, maar kwetsbaarder wanneer de omstandigheden verder verslechteren.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Verdedigbaar bij een aantoonbaar beheersbaar brandbeeld, maar kwetsbaarder wanneer de omstandigheden verder verslechteren."
        },
        {
          "id": "C",
          "text": "Kiezen voor de lichtste en snelst inzetbare aanval, zonder vooraf een volwaardige tweede lijn of back-up op te bouwen.",
          "consequence": "De ploeg kan snel inzetten, maar het beschikbare koelend vermogen en de reserve kunnen onvoldoende blijken bij verdere brandontwikkeling of sterke windinvloed.",
          "rationale": "De omvang van het appartement zegt onvoldoende over het benodigde blusvermogen; brandontwikkeling, wind en stromingscondities zijn minstens zo bepalend.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "De omvang van het appartement zegt onvoldoende over het benodigde blusvermogen; brandontwikkeling, wind en stromingscondities zijn minstens zo bepalend."
        }
      ],
      "discussionQuestion": "Welke factoren bepalen hoeveel blusvermogen en back-up je op hoogte nodig hebt, en welk aanvalssysteem daarbij past?",
      "media": {
        "src": "assets/vggm/straalpijp.gif",
        "caption": "Koelend vermogen en straalpijptechniek",
        "source": "VGGM lesmateriaal – slide 55"
      },
      "systems": [
        "LD op hoogte",
        "Klepel / straalpijp"
      ]
    },
    {
      "id": 8,
      "title": "Scenarioherkenning",
      "role": "Bevelvoerder",
      "roleNote": "Bepaal welk scenario het beste past bij het actuele brand- en rookbeeld. VRICOL (Verkenning, Redding, Interventie, Compartimentering, Ontruiming en Logistiek) wordt alleen als didactisch vergelijkingsmodel gebruikt.",
      "situation": "De sprinkler is geactiveerd, maar de brand is niet onder controle. Rook blijft grotendeels beperkt tot de woning en de gang. De trappenhuizen zijn nog rookarm.",
      "choices": [
        {
          "id": "A",
          "text": "Het beeld behandelen als scenario 1 en kiezen voor een snelle offensieve binneninzet.",
          "consequence": "De inzet wordt snel voortgezet, maar de betekenis van het falen van de sprinkler wordt onderschat.",
          "rationale": "Dit beeld past onvoldoende bij scenario 1, omdat de sprinkler de brand aantoonbaar niet beheerst.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "Dit beeld past onvoldoende bij scenario 1, omdat de sprinkler de brand aantoonbaar niet beheerst."
        },
        {
          "id": "B",
          "text": "Het beeld behandelen als scenario 2: eerst defensief binnen organiseren en daarna offensief binnen optreden.",
          "consequence": "Bruggenhoofd, voldoende blusvermogen en bescherming van de vluchtweg worden eerst georganiseerd voordat verder offensief wordt opgetreden.",
          "rationale": "Dit sluit het beste aan bij het actuele beeld: de brand is niet beheerst, maar brand en rook zijn nog grotendeels compartimentsgebonden en de trappenhuizen zijn bruikbaar.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Dit sluit het beste aan bij het actuele beeld: de brand is niet beheerst, maar brand en rook zijn nog grotendeels compartimentsgebonden en de trappenhuizen zijn bruikbaar."
        },
        {
          "id": "C",
          "text": "Het beeld behandelen als scenario 3 en de inzet direct vooral op ontruiming en vluchtwegbescherming richten.",
          "consequence": "Veel capaciteit verschuift naar ontruiming terwijl de vluchtwegen nog bruikbaar zijn en de brand nog grotendeels compartimentsgebonden lijkt.",
          "rationale": "Voorzichtig, maar mogelijk disproportioneel; de brandbestrijding kan hierdoor vertragen.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Voorzichtig, maar mogelijk disproportioneel; de brandbestrijding kan hierdoor vertragen."
        }
      ],
      "discussionQuestion": "Welke waarnemingen maken voor jou het verschil tussen scenario 1, 2 en 3?",
      "media": {
        "src": "assets/vggm/kwadrantenmodel.png",
        "caption": "Tactische positionering en keuze van inzetstrategie",
        "source": "VGGM lesmateriaal – slide 67"
      },
      "systems": [
        "Kwadrantenmodel"
      ],
      "deepDive": "Scenario 1: brand beheersbaar binnen het compartiment en vluchtwegen bruikbaar. Scenario 2: brand niet beheerst, maar nog grotendeels compartimentsgebonden; organiseer eerst de benodigde interventievoorwaarden. Scenario 3: brand of rook buiten het compartiment en vluchtwegen bedreigd; rook- en vluchtwegbeheersing en ontruiming krijgen nadrukkelijker gewicht. Het scenario is een denkkader en moet worden herbeoordeeld wanneer het incident verandert."
    },
    {
      "id": 9,
      "title": "Mogelijk slachtoffer in de brandwoning",
      "role": "Bevelvoerder",
      "roleNote": "Weeg de urgentie van een mogelijke redding af tegen de voorwaarden voor een verantwoorde binneninzet.",
      "situation": "Een buurvrouw meldt dat de bewoner mogelijk al vóór de brand naar buiten is gegaan. Ze kan dit niet bevestigen. De brand is nog niet onder controle.",
      "choices": [
        {
          "id": "A",
          "text": "De reddingsactie direct laten voorgaan op het verder opbouwen van de interventievoorwaarden.",
          "consequence": "De ploeg gaat eerder richting de mogelijke slachtofferlocatie, terwijl blusvermogen en back-up nog niet volledig zijn georganiseerd.",
          "rationale": "De mogelijke tijdwinst voor het slachtoffer gaat ten koste van de veiligheidsmarge van de ploeg. Bij een ontwikkelde brand moet worden afgewogen of die extra blootstelling verantwoord is.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "De mogelijke tijdwinst voor het slachtoffer gaat ten koste van de veiligheidsmarge van de ploeg. Bij een ontwikkelde brand moet worden afgewogen of die extra blootstelling verantwoord is."
        },
        {
          "id": "B",
          "text": "Eerst de noodzakelijke interventievoorwaarden organiseren en daarna de gerichte zoek-/reddingsactie combineren met de brandbestrijding.",
          "consequence": "De ploeg treedt iets later toe, maar beschikt over meer blusvermogen, back-up en een betere terugtrekmogelijkheid.",
          "rationale": "Deze keuze past bij een situatie waarin de brand niet beheerst is en een reddingsactie niet los kan worden gezien van de brandbestrijding.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Deze keuze past bij een situatie waarin de brand niet beheerst is en een reddingsactie niet los kan worden gezien van de brandbestrijding."
        },
        {
          "id": "C",
          "text": "Geen gerichte reddingsactie meer plannen omdat niet zeker is dat de bewoner nog binnen is.",
          "consequence": "De beschikbare capaciteit blijft gericht op de brandbestrijding, maar de mogelijkheid dat zich nog iemand in de woning bevindt blijft bestaan.",
          "rationale": "Onzekerheid is geen bevestiging van afwezigheid.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "Onzekerheid is geen bevestiging van afwezigheid."
        }
      ],
      "discussionQuestion": "Hoe weeg je tijdwinst voor een mogelijk slachtoffer af tegen de veiligheidsmarge van de ingezette ploeg?",
      "media": {
        "src": "assets/vggm/toetreding_deur.jpeg",
        "caption": "Toetreding en reddingsdruk",
        "source": "VGGM lesmateriaal – slide 58"
      },
      "systems": [
        "Deurcontrole",
        "LD op hoogte"
      ]
    },
    {
      "id": 10,
      "title": "Rookmelding in het trappenhuis",
      "role": "Bevelvoerder",
      "roleNote": "Beoordeel rookverspreiding als mogelijk zelfstandig tactisch probleem.",
      "situation": "Een ploeg meldt lichte rook en een verhoogde CO-waarde op de 15e verdieping in het trappenhuis dat voor de brandweerinzet wordt gebruikt. Het andere trappenhuis is nog rookvrij.",
      "choices": [
        {
          "id": "A",
          "text": "Trappenhuisbescherming als zelfstandige taak organiseren, deuren en portalen controleren en de CO-waarden boven en onder de brand monitoren.",
          "consequence": "De rookverspreiding wordt als zelfstandig tactisch probleem aangepakt en de bruikbaarheid van het trappenhuis wordt actief bewaakt.",
          "rationale": "Past binnen VRICOL (Verkenning, Redding, Interventie, Compartimentering, Ontruiming en Logistiek): compartimentering en bescherming van de vlucht- en inzetroute krijgen expliciet aandacht.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Past binnen VRICOL (Verkenning, Redding, Interventie, Compartimentering, Ontruiming en Logistiek): compartimentering en bescherming van de vlucht- en inzetroute krijgen expliciet aandacht."
        },
        {
          "id": "B",
          "text": "De brandaanval versnellen vanuit de verwachting dat het wegnemen van de brandhaard ook het rookprobleem oplost.",
          "consequence": "De brandbestrijding houdt prioriteit, maar ondertussen kan de rook zich verder door het trappenhuis verspreiden.",
          "rationale": "Het bestrijden van de brand kan verdere rookproductie beperken, maar reeds aanwezige rookverspreiding blijft een zelfstandig probleem.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Het bestrijden van de brand kan verdere rookproductie beperken, maar reeds aanwezige rookverspreiding blijft een zelfstandig probleem."
        },
        {
          "id": "C",
          "text": "Het trappenhuis direct ventileren om de rook af te voeren.",
          "consequence": "Zonder inzicht in toevoer, afvoer en stromingsrichting kan de rookverspreiding veranderen of juist toenemen.",
          "rationale": "Ventilatie is geen automatische oplossing. Eerst moet duidelijk zijn welke lucht- en rookstroming ermee wordt veroorzaakt.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "Ventilatie is geen automatische oplossing. Eerst moet duidelijk zijn welke lucht- en rookstroming ermee wordt veroorzaakt."
        }
      ],
      "discussionQuestion": "Hoe bewaak je de bruikbaarheid van een trappenhuis wanneer er aanwijzingen zijn voor rook- of CO-verspreiding?",
      "media": {
        "src": "assets/vggm/rook_trappenhuis.png",
        "caption": "Rookverspreiding richting trappenhuis",
        "source": "VGGM lesmateriaal – slide 61"
      },
      "systems": [
        "Smokestopper",
        "Anti-ventilatie"
      ]
    },
    {
      "id": 11,
      "title": "Spontane ontruiming",
      "role": "Bevelvoerder",
      "roleNote": "Coördineer de spontane ontruiming en bewaak de scheiding tussen inzetroute en vluchtroute.",
      "situation": "Bewoners van de 16e en 17e verdieping komen zelfstandig naar beneden. Een deel gebruikt het inzettrappenhuis omdat dit voor hen de meest voor de hand liggende route is. Het andere trappenhuis is nog rookvrij.",
      "choices": [
        {
          "id": "A",
          "text": "De bewoners via het inzettrappenhuis laten doorlopen en de brandweerinzet hierop aanpassen.",
          "consequence": "Bewoners blijven direct in beweging, maar vluchtstromen, ploegen en materiaaltransport gaan dezelfde route gebruiken.",
          "rationale": "Dit kan tijdelijk werkbaar zijn zolang het trappenhuis aantoonbaar bruikbaar blijft, maar maakt de inzet kwetsbaarder door de vermenging van vlucht- en inzetstromen.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Dit kan tijdelijk werkbaar zijn zolang het trappenhuis aantoonbaar bruikbaar blijft, maar maakt de inzet kwetsbaarder door de vermenging van vlucht- en inzetstromen."
        },
        {
          "id": "B",
          "text": "De bewoners gecontroleerd naar het rookvrije trappenhuis laten oversteken en daarvoor personeel organiseren.",
          "consequence": "Vlucht- en inzetstromen worden weer gescheiden, maar hiervoor zijn personeel, communicatie en een aantoonbaar bruikbare route nodig.",
          "rationale": "Een sterke oplossing wanneer het tweede trappenhuis daadwerkelijk rookvrij en bruikbaar is.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Een sterke oplossing wanneer het tweede trappenhuis daadwerkelijk rookvrij en bruikbaar is."
        },
        {
          "id": "C",
          "text": "Bewoners terugsturen naar hun woning om de trappenhuizen vrij te houden.",
          "consequence": "De bewonersstroom stopt, maar bewoners worden teruggestuurd naar een situatie waarvan niet zeker is hoe brand en rook zich verder ontwikkelen.",
          "rationale": "Te absoluut. Spontane ontruiming is een gegeven waarmee de inzet moet omgaan; terugsturen is alleen verdedigbaar wanneer aantoonbaar duidelijk is dat verblijf in de woning veiliger is.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "Te absoluut. Spontane ontruiming is een gegeven waarmee de inzet moet omgaan; terugsturen is alleen verdedigbaar wanneer aantoonbaar duidelijk is dat verblijf in de woning veiliger is."
        }
      ],
      "discussionQuestion": "Hoe organiseer je spontane ontruiming zonder dat bewonersstromen de brandweerinzet of de bruikbaarheid van het inzettrappenhuis onnodig verstoren?",
      "media": {
        "src": "assets/vggm/hoogbouw_gevel.jpeg",
        "caption": "Bewonersstromen en ontruiming bij hoogbouw",
        "source": "VGGM lesmateriaal – slide 59"
      },
      "systems": [
        "CAN",
        "FABCM"
      ]
    },
    {
      "id": 12,
      "title": "Stack-effect: onverwachte CO",
      "role": "Bevelvoerder",
      "roleNote": "Onderzoek onverwachte verticale rook- en CO-verspreiding zonder te snel één verklaring vast te zetten.",
      "situation": "Op de 18e verdieping wordt CO gemeten, terwijl daar geen zichtbare rook aanwezig is. Buiten is het duidelijk koeler dan binnen. Op de begane grond staat een toegangsdeur langdurig open voor materiaaltransport.",
      "choices": [
        {
          "id": "A",
          "text": "Het gebruik van de open toegangsdeur beperken, materiaaltransport via een gecontroleerde toegang organiseren en de CO-waarden blijven monitoren.",
          "consequence": "Een mogelijke voeding van de verticale luchtstroming wordt beperkt. Uit vervolgmetingen moet blijken of de CO-verspreiding daadwerkelijk afneemt.",
          "rationale": "De combinatie van temperatuurverschil, een open toegang beneden en onverwachte CO hoger in het gebouw geeft aanleiding om stack-effect als mogelijke verklaring te onderzoeken.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "De combinatie van temperatuurverschil, een open toegang beneden en onverwachte CO hoger in het gebouw geeft aanleiding om stack-effect als mogelijke verklaring te onderzoeken."
        },
        {
          "id": "B",
          "text": "Beneden een extra ventilator plaatsen om de rook naar boven af te voeren.",
          "consequence": "De drukverhoudingen in het gebouw worden beïnvloed zonder dat duidelijk is waar de lucht en rook uiteindelijk naartoe worden verplaatst.",
          "rationale": "Ventileren zonder inzicht in toevoer en afvoer kan de verticale stroming juist versterken.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "Ventileren zonder inzicht in toevoer en afvoer kan de verticale stroming juist versterken."
        },
        {
          "id": "C",
          "text": "De CO-meting als meetafwijking beschouwen omdat er geen zichtbare rook aanwezig is.",
          "consequence": "Een mogelijke verticale verspreidingsroute wordt niet onderzocht en de omstandigheden op hogere verdiepingen kunnen ongemerkt verslechteren.",
          "rationale": "Het ontbreken van zichtbare rook betekent niet dat er geen verbrandingsproducten aanwezig zijn. Een onverwachte CO-meting vraagt daarom om verklaring en vervolgmetingen.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "Het ontbreken van zichtbare rook betekent niet dat er geen verbrandingsproducten aanwezig zijn. Een onverwachte CO-meting vraagt daarom om verklaring en vervolgmetingen."
        }
      ],
      "discussionQuestion": "Welke waarnemingen en metingen heb je nodig om stack-effect als verklaring voor onverwachte rook- of CO-verspreiding aannemelijker of juist minder waarschijnlijk te maken?",
      "media": {
        "src": "assets/vggm/stack_reverse.png",
        "caption": "Stack-effect en reverse stack-effect",
        "source": "VGGM lesmateriaal – slide 40"
      },
      "systems": [
        "RSTV"
      ],
      "deepDive": "Stack-effect ontstaat door temperatuur- en dichtheidsverschillen tussen de lucht binnen en buiten een hoog gebouw. Daardoor kan een verticale luchtstroming ontstaan. Een open buitendeur beneden kan onderdeel worden van zo'n stroming. CO op een verdieping waar geen zichtbare rook aanwezig is, is geen bewijs voor stack-effect, maar wel aanleiding om deze hypothese mee te nemen, openingen te beoordelen en de ontwikkeling met metingen te volgen."
    },
    {
      "id": 13,
      "title": "Communicatie verslechtert",
      "role": "Bevelvoerder",
      "roleNote": "Kies een betrouwbare communicatieroute en stem deze direct af met de bevelvoerder.",
      "situation": "Het C2000-contact tussen de 14e verdieping en buiten valt geregeld weg. Berichten komen vertraagd of onvolledig door. De intercom tussen de verdiepingen en de commandoruimte functioneert wel.",
      "choices": [
        {
          "id": "A",
          "text": "De intercom actief gebruiken en een vaste terugmeldroute via bruggenhoofd en commandoruimte organiseren.",
          "consequence": "Er ontstaat een tweede communicatieroute en terugmeldingen krijgen een vaste structuur.",
          "rationale": "Door tijdig een werkend alternatief te gebruiken, blijft kritieke informatie niet afhankelijk van één onbetrouwbare verbinding.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Door tijdig een werkend alternatief te gebruiken, blijft kritieke informatie niet afhankelijk van één onbetrouwbare verbinding."
        },
        {
          "id": "B",
          "text": "C2000 blijven gebruiken en pas bij volledig wegvallen overschakelen op een alternatief.",
          "consequence": "De ploeg blijft afhankelijk van een haperende verbinding; belangrijke meldingen kunnen daardoor vertraagd of onvolledig worden doorgegeven.",
          "rationale": "Zolang C2000 af en toe werkt lijkt dit werkbaar, maar juist kritieke informatie kan tijdens een uitvalmoment verloren gaan.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Zolang C2000 af en toe werkt lijkt dit werkbaar, maar juist kritieke informatie kan tijdens een uitvalmoment verloren gaan."
        },
        {
          "id": "C",
          "text": "Een manschap als fysieke boodschapper tussen bruggenhoofd en begane grond inzetten.",
          "consequence": "De informatie kan worden overgebracht, maar een manschap wordt aan de inzet onttrokken en berichten komen aanzienlijk trager door.",
          "rationale": "Een bruikbare noodoplossing wanneer technische verbindingen uitvallen, maar niet logisch zolang een werkende intercom beschikbaar is.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "Een bruikbare noodoplossing wanneer technische verbindingen uitvallen, maar niet logisch zolang een werkende intercom beschikbaar is."
        }
      ],
      "discussionQuestion": "Hoe voorkom je dat communicatieverlies leidt tot een verkeerd of verouderd incidentbeeld?",
      "media": {
        "src": "assets/vggm/aandachtskaart_bruggenhoofd.png",
        "caption": "Informatie- en terugmeldstructuur op hoogte",
        "source": "VGGM lesmateriaal – slide 23"
      },
      "systems": [
        "CAN",
        "FABCM"
      ],
      "deepDive": "Bij hoogbouw kan radiocommunicatie door hoogte en bouwconstructie minder betrouwbaar worden. Communicatie moet daarom niet afhankelijk blijven van één technisch middel. Belangrijker dan het exacte middel is dat duidelijk is wie met wie communiceert, via welke route terugmeldingen lopen en hoe kritieke informatie de bevelvoerder bereikt."
    },
    {
      "id": 14,
      "title": "Water in de liftschacht",
      "role": "Manschappen",
      "roleNote": "Beoordeel wat de waterinstroom betekent voor het verdere gebruik van de brandweerlift en meld dit aan de bevelvoerder.",
      "situation": "Op de 12e verdieping stroomt zichtbaar water richting de brandweerliftschacht. De lift functioneert nog normaal en het paneel geeft geen storing aan.",
      "choices": [
        {
          "id": "A",
          "text": "De brandweerlift niet meer gebruiken en direct alternatieve verticale logistiek organiseren.",
          "consequence": "Het verticale transport wordt trager en vraagt meer personele capaciteit, maar de inzet is niet langer afhankelijk van een lift die zichtbaar door water wordt bedreigd.",
          "rationale": "De zichtbare waterinstroom is relevante informatie over de betrouwbaarheid van de lift, ook wanneer nog geen technische storing wordt gemeld.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "De zichtbare waterinstroom is relevante informatie over de betrouwbaarheid van de lift, ook wanneer nog geen technische storing wordt gemeld."
        },
        {
          "id": "B",
          "text": "De lift blijven gebruiken zolang er geen storing op het paneel staat.",
          "consequence": "De verticale logistiek blijft snel, maar mensen en materiaal blijven afhankelijk van een lift waarvan de omstandigheden aantoonbaar veranderen.",
          "rationale": "Een storingsvrij paneel zegt alleen dat op dat moment geen storing wordt gedetecteerd. Het zichtbare water is aanvullende informatie die in de beoordeling moet worden meegenomen.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "Een storingsvrij paneel zegt alleen dat op dat moment geen storing wordt gedetecteerd. Het zichtbare water is aanvullende informatie die in de beoordeling moet worden meegenomen."
        },
        {
          "id": "C",
          "text": "De lift alleen nog voor materiaal gebruiken, niet voor mensen.",
          "consequence": "Het directe risico voor personeel wordt verminderd, maar de logistiek blijft afhankelijk van dezelfde bedreigde lift. Bij uitval kan ook essentieel materiaal vast komen te zitten.",
          "rationale": "Het niet meer vervoeren van personen verkleint het directe risico, maar lost de afhankelijkheid van een mogelijk onbetrouwbare voorziening niet op.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Het niet meer vervoeren van personen verkleint het directe risico, maar lost de afhankelijkheid van een mogelijk onbetrouwbare voorziening niet op."
        }
      ],
      "discussionQuestion": "Wanneer beschouw je een nog functionerende brandweerlift niet langer als betrouwbaar, en welke gevolgen heeft dat voor de rest van je inzet?",
      "media": {
        "src": "assets/vggm/hoogbouw_object.png",
        "caption": "Verticale bereikbaarheid als kritieke voorziening",
        "source": "VGGM lesmateriaal – slide 31"
      },
      "deepDive": "Een brandweerlift is een belangrijke logistieke voorziening, maar de bruikbaarheid moet tijdens de gehele inzet opnieuw worden beoordeeld. Een werkend bedieningspaneel is niet de enige informatiebron. Wanneer water, rook of brand de lift of liftschacht bedreigt, kan de betrouwbaarheid veranderen voordat een technische storing zichtbaar wordt. Uitval heeft directe gevolgen voor tijd, fysieke belasting en logistiek."
    },
    {
      "id": 15,
      "title": "Logistieke achterstand",
      "role": "Bevelvoerder",
      "roleNote": "Bepaal hoe je de logistiek organiseert zodat de inzet langdurig kan worden voortgezet.",
      "situation": "Na circa 25 minuten zijn meerdere ademluchtcilinders gebruikt en melden ploegen oplopende vermoeidheid. Het bruggenhoofd vraagt om reserve-ademlucht, drinken en aflossing. De inzet kan nog langere tijd duren.",
      "choices": [
        {
          "id": "A",
          "text": "De logistieke functie uitbreiden, schoon en vuil scheiden en reserve-ademlucht, drinken en aflossing vooruit organiseren.",
          "consequence": "De continuïteit van de inzet wordt beter geborgd en ploegen kunnen tijdig worden afgelost voordat vermoeidheid of materiaaltekort de inzet bepaalt.",
          "rationale": "Logistiek is binnen VRICOL (Verkenning, Redding, Interventie, Compartimentering, Ontruiming en Logistiek) een zelfstandige taak en bepaalt mede hoe lang de operationele inzet kan worden volgehouden.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Logistiek is binnen VRICOL (Verkenning, Redding, Interventie, Compartimentering, Ontruiming en Logistiek) een zelfstandige taak en bepaalt mede hoe lang de operationele inzet kan worden volgehouden."
        },
        {
          "id": "B",
          "text": "Eerst brandmeester maken; logistiek pas daarna herstellen.",
          "consequence": "Op korte termijn blijft meer capaciteit bij de brandbestrijding, maar het tekort aan ademlucht, aflossing of andere middelen kan later plotseling de inzet beperken.",
          "rationale": "Logistiek is geen proces voor ná brandmeester. Bij een langdurige inzet bepaalt het mede of ploegen inzetbaar blijven.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "Logistiek is geen proces voor ná brandmeester. Bij een langdurige inzet bepaalt het mede of ploegen inzetbaar blijven."
        },
        {
          "id": "C",
          "text": "Het materiaaltransport beperken en alleen aantoonbaar noodzakelijke middelen naar boven sturen.",
          "consequence": "De transportbelasting neemt af, maar een te krappe selectie kan leiden tot tekort aan ademlucht, back-up of andere essentiële middelen.",
          "rationale": "Prioriteren in materiaal is zinvol. De afweging moet gaan over wat waar en wanneer noodzakelijk is, niet simpelweg over zo weinig mogelijk meenemen.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Prioriteren in materiaal is zinvol. De afweging moet gaan over wat waar en wanneer noodzakelijk is, niet simpelweg over zo weinig mogelijk meenemen."
        }
      ],
      "discussionQuestion": "Hoe bepaal je welke logistieke behoefte je vooruit moet organiseren voor een langdurige inzet?",
      "media": {
        "src": "assets/vggm/logistiek_materiaal.jpeg",
        "caption": "Materiaal, fysieke belasting en aflossing",
        "source": "VGGM lesmateriaal – slide 74"
      },
      "systems": [
        "Hoogtetas",
        "Transporttas"
      ],
      "deepDive": "Logistiek in hoogbouw is meer dan materiaal naar boven brengen. Lange aanvoerroutes, ademluchtverbruik, fysieke belasting en aflossing bepalen mede hoe lang ploegen effectief inzetbaar blijven. Vooruit organiseren betekent inschatten wat later nodig is en dat tijdig dichter bij de inzet beschikbaar maken. Tegelijk vraagt verticaal transport personele capaciteit; niet alles hoeft boven te liggen."
    },
    {
      "id": 16,
      "title": "Incidentbeeld verslechtert",
      "role": "Bevelvoerder",
      "roleNote": "Beoordeel opnieuw welk scenario bij het actuele incidentbeeld past en wat dit betekent voor de prioriteiten.",
      "situation": "Rook verspreidt zich nu buiten het oorspronkelijke compartiment. Een deur naar de gang sluit niet goed en de CO-waarde in het inzettrappenhuis loopt op. De brand is nog niet volledig onder controle. Het incidentbeeld is veranderd. De vraag is niet of de eerdere tactiek ooit logisch was, maar of die tactiek nog past bij de huidige omstandigheden.",
      "choices": [
        {
          "id": "A",
          "text": "Herclassificeren naar scenario 3 en de inzet herordenen: rook- en vluchtwegbeheersing en ontruiming nadrukkelijk meenemen naast de interventie.",
          "consequence": "Capaciteit en aandacht verschuiven nadrukkelijk naar bescherming van vluchtwegen en aanwezige personen, terwijl de brandbestrijding opnieuw binnen dat totaalbeeld wordt georganiseerd.",
          "rationale": "De combinatie van rook buiten het compartiment en een bedreigde vluchtweg past bij scenario 3. Het actuele beeld vraagt daarom om herprioritering van de inzet.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "De combinatie van rook buiten het compartiment en een bedreigde vluchtweg past bij scenario 3. Het actuele beeld vraagt daarom om herprioritering van de inzet."
        },
        {
          "id": "B",
          "text": "De huidige aanval ongewijzigd voortzetten omdat er al voortgang is geboekt.",
          "consequence": "De brandbestrijding blijft maximaal gefocust, maar ondertussen kan de bruikbaarheid van de vluchtweg verder afnemen.",
          "rationale": "Eerdere voortgang is geen reden om nieuwe informatie te negeren. Het incidentbeeld is veranderd en moet opnieuw bepalend worden voor de tactiek.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "Eerdere voortgang is geen reden om nieuwe informatie te negeren. Het incidentbeeld is veranderd en moet opnieuw bepalend worden voor de tactiek."
        },
        {
          "id": "C",
          "text": "Alle binnenploegen terugtrekken en volledig defensief buiten gaan.",
          "consequence": "De directe blootstelling van de ploegen neemt sterk af, maar binnen nog beschikbare mogelijkheden voor redding, ontruiming en bescherming van vluchtwegen worden eveneens opgegeven.",
          "rationale": "Volledig defensief buiten kan noodzakelijk worden wanneer de binnenomstandigheden niet meer beheersbaar zijn. Uit de beschikbare informatie volgt nog niet automatisch dat dit punt is bereikt.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Volledig defensief buiten kan noodzakelijk worden wanneer de binnenomstandigheden niet meer beheersbaar zijn. Uit de beschikbare informatie volgt nog niet automatisch dat dit punt is bereikt."
        }
      ],
      "discussionQuestion": "Hoe bewaak je de samenhang tussen brandbestrijding, vluchtwegen en ontruiming?",
      "media": {
        "src": "assets/vggm/rook_deurzone.png",
        "caption": "Rook buiten het oorspronkelijke compartiment als omslagpunt",
        "source": "VGGM lesmateriaal – slide 60"
      },
      "systems": [
        "Kwadrantenmodel",
        "CAN",
        "FABCM"
      ],
      "deepDive": "Een tactische keuze blijft alleen geldig zolang het incidentbeeld waarop die keuze is gebaseerd nog klopt. Wanneer rook buiten het oorspronkelijke compartiment komt en een vluchtweg wordt bedreigd, verandert het incident kwalitatief. Binnen VRICOL (Verkenning, Redding, Interventie, Compartimentering, Ontruiming en Logistiek) krijgen daardoor andere processen meer gewicht. Herclassificeren moet zichtbaar leiden tot andere prioriteiten, opdrachten of capaciteitsverdeling."
    },
    {
      "id": 17,
      "title": "Branduitbreiding langs de gevel",
      "role": "Bevelvoerder",
      "roleNote": "Beoordeel wat de geveluitbreiding betekent voor de verdiepingen boven de brand en voor de gekozen tactiek.",
      "situation": "Buiten wordt gemeld dat vlammen langs de gevel omhoog trekken. Rook en hitte bereiken inmiddels ramen van hoger gelegen verdiepingen. Vanaf straatniveau kan de brand niet effectief worden bereikt. De brandontwikkeling beperkt zich daarmee niet langer tot alleen de oorspronkelijke brandverdieping.",
      "choices": [
        {
          "id": "A",
          "text": "Het incident herclassificeren naar scenario 4, de ontruiming gebouwbreed organiseren en de bescherming van de trappenhuizen nadrukkelijk prioriteren.",
          "consequence": "Meer capaciteit verschuift naar ontruiming en bescherming van de vluchtwegen. De brandbestrijding wordt opnieuw georganiseerd vanuit het doel om uitbreiding te beperken en tijd te winnen voor aanwezige personen.",
          "rationale": "Geveluitbreiding kan meerdere verdiepingen vrijwel gelijktijdig bedreigen. Daarmee past het beeld bij scenario 4 en is een lokale benadering rond alleen de brandverdieping niet meer voldoende.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Geveluitbreiding kan meerdere verdiepingen vrijwel gelijktijdig bedreigen. Daarmee past het beeld bij scenario 4 en is een lokale benadering rond alleen de brandverdieping niet meer voldoende."
        },
        {
          "id": "B",
          "text": "De geveluitbreiding eerst vanuit de brandverdieping proberen te stoppen en de ontruiming voorlopig gefaseerd voortzetten.",
          "consequence": "Succesvolle brandbestrijding kan verdere uitbreiding beperken, maar gedurende die poging kunnen meerdere hoger gelegen verdiepingen tegelijkertijd worden bedreigd.",
          "rationale": "Deze keuze kan verdedigbaar zijn wanneer de uitbreiding snel en aantoonbaar beïnvloedbaar is. De kwetsbaarheid zit in de tijd: zolang het effect onzeker is, kan de bedreiging voor hogere verdiepingen verder toenemen.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Deze keuze kan verdedigbaar zijn wanneer de uitbreiding snel en aantoonbaar beïnvloedbaar is. De kwetsbaarheid zit in de tijd: zolang het effect onzeker is, kan de bedreiging voor hogere verdiepingen verder toenemen."
        },
        {
          "id": "C",
          "text": "De ontruiming beperken tot de brandverdieping en enkele direct bovenliggende verdiepingen om de trappenhuizen niet direct maximaal te belasten.",
          "consequence": "De belasting van de trappenhuizen blijft aanvankelijk beperkt, maar aanwezige personen op hoger gelegen verdiepingen kunnen buiten het georganiseerde ontruimingsgebied komen te liggen terwijl de gevelbrand verder uitbreidt.",
          "rationale": "Bij een uitbreidende gevelbrand is niet alleen de afstand tot de oorspronkelijke brandverdieping bepalend. De uitbreiding kan meerdere verdiepingen via de gevel bedreigen en vraagt daarom om een gebouwbrede beoordeling.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "Bij een uitbreidende gevelbrand is niet alleen de afstand tot de oorspronkelijke brandverdieping bepalend. De uitbreiding kan meerdere verdiepingen via de gevel bedreigen en vraagt daarom om een gebouwbrede beoordeling."
        }
      ],
      "discussionQuestion": "Welke informatie bepaalt voor jou of geveluitbreiding reden is om over te gaan naar scenario 4, en wat verandert er dan concreet in je inzet?",
      "media": {
        "src": "assets/vggm/gevelbrand.jpeg",
        "caption": "Geveluitbreiding kan meerdere bouwlagen tegelijk bedreigen",
        "source": "VGGM lesmateriaal – slide 38"
      },
      "systems": [
        "CAN",
        "FABCM"
      ],
      "deepDive": "Bij scenario 4 breidt de brand zich via of langs de gevel uit en kunnen meerdere verdiepingen tegelijkertijd worden bedreigd. Het incident krijgt daarmee een gebouwbrede dimensie. Het primaire doel wordt het behouden van bruikbare vluchtwegen en het creëren van tijd voor ontruiming. Brandbestrijding blijft relevant wanneer daarmee uitbreiding aantoonbaar kan worden afgeremd."
    },
    {
      "id": 18,
      "title": "Integrale heroverweging",
      "role": "Bevelvoerder",
      "roleNote": "Beoordeel opnieuw of het actuele incidentbeeld, de gekozen tactiek en de beschikbare capaciteit nog bij elkaar passen.",
      "situation": "De inzet duurt inmiddels ruim 35 minuten. Meerdere ploegen zijn ingezet en de situatie is gedurende de inzet veranderd. De status van de brand, vluchtwegen, lift, logistiek, ontruiming en personele belasting vraagt opnieuw om een gezamenlijk beeld. Sommige problemen kunnen inmiddels zijn opgelost, terwijl andere zijn ontstaan of verslechterd.",
      "choices": [
        {
          "id": "A",
          "text": "Een expliciet heroverwegingsmoment organiseren en het totale incidentbeeld opnieuw beoordelen: brandontwikkeling en scenario, vluchtwegen, gebouwinformatie, ontruiming, logistiek en belasting van de ingezette ploegen.",
          "consequence": "Openstaande risico’s en taken worden opnieuw zichtbaar. Op basis daarvan kunnen prioriteiten, opdrachten, capaciteit en tactiek worden aangepast.",
          "rationale": "Bij een langdurige hoogbouwinzet kan een eerder juist besluit door veranderende omstandigheden niet meer passend zijn. Periodiek opnieuw beoordelen voorkomt dat de inzet ongemerkt blijft voortbouwen op een verouderd incidentbeeld.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Bij een langdurige hoogbouwinzet kan een eerder juist besluit door veranderende omstandigheden niet meer passend zijn. Periodiek opnieuw beoordelen voorkomt dat de inzet ongemerkt blijft voortbouwen op een verouderd incidentbeeld."
        },
        {
          "id": "B",
          "text": "Doorgaan volgens het bestaande plan zolang er geen nieuwe noodmelding komt.",
          "consequence": "De bestaande inzet blijft ongestoord doorlopen, maar geleidelijke veranderingen in rookverspreiding, personele belasting, logistiek of vluchtwegen kunnen buiten beeld blijven.",
          "rationale": "Het ontbreken van een noodmelding betekent niet dat het incidentbeeld onveranderd is. Bij een langdurige inzet moet ook zonder directe aanleiding bewust worden heroverwogen.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "Het ontbreken van een noodmelding betekent niet dat het incidentbeeld onveranderd is. Bij een langdurige inzet moet ook zonder directe aanleiding bewust worden heroverwogen."
        },
        {
          "id": "C",
          "text": "Automatisch alle binneninzet beëindigen omdat de inzet lang duurt.",
          "consequence": "De blootstelling van de binnenploegen stopt, maar mogelijk nog effectieve en verantwoorde brandbestrijdings-, reddings- en ontruimingsactiviteiten worden eveneens beëindigd.",
          "rationale": "Tijdsduur is aanleiding voor heroverweging, maar geen zelfstandige reden om een binneninzet automatisch te beëindigen. Het actuele risico en het verwachte effect van de inzet moeten bepalend blijven.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Tijdsduur is aanleiding voor heroverweging, maar geen zelfstandige reden om een binneninzet automatisch te beëindigen. Het actuele risico en het verwachte effect van de inzet moeten bepalend blijven."
        }
      ],
      "discussionQuestion": "Welke informatie heb je nodig om tijdens een langdurige hoogbouwinzet te bepalen of je de bestaande tactiek voortzet, aanpast of beëindigt?",
      "media": {
        "src": "assets/vggm/orientatie_object.jpg",
        "caption": "Heroriëntatie op object, omstandigheden en inzetstrategie",
        "source": "VGGM lesmateriaal – slide 76"
      },
      "systems": [
        "FABCM",
        "CAN"
      ],
      "deepDive": "Tijd is bij een langdurige hoogbouwinzet een belangrijke besluitvormingsfactor, maar geen automatische stopklok. Bouwkundige informatie, brandontwikkeling, rookverspreiding, vermoeidheid, ademlucht, logistiek en vluchtwegen veranderen tijdens de inzet. Een heroverweging brengt steeds drie vragen samen: wat is het actuele incidentbeeld, wat proberen we nu te bereiken en zijn onze mensen, middelen en tactiek daar nog passend voor?"
    }
  ],
  "glossary": {
    "VRICOL": {
      "definition": "Verkenning, Redding, Interventie, Compartimentering, Ontruiming en Logistiek.",
      "operational": "In deze webcasus uitsluitend een didactisch vergelijkingsmodel om te toetsen of de inzet voldoende breed blijft; geen vastgestelde VGGM-inzetprocedure."
    },
    "Stack-effect": {
      "definition": "Door temperatuur- en dichtheidsverschillen kan in een hoog gebouw een verticale luchtstroming ontstaan.",
      "operational": "Gebruik onverwachte rook- of CO-metingen, openingen en temperatuurverschillen als aanwijzingen; toets de hypothese met vervolgwaarnemingen.",
      "video": "https://youtu.be/CoTqobi4J40?si=yPRLE63CCivy4dAg"
    },
    "Reverse stack": {
      "definition": "Omgekeerde verticale luchtstroming, bijvoorbeeld wanneer de binnenlucht koeler is dan buiten.",
      "operational": "Rook en CO kunnen ook onder de brandverdieping terechtkomen.",
      "video": "https://youtu.be/CoTqobi4J40?si=yPRLE63CCivy4dAg"
    },
    "Wind Driven Fire": {
      "definition": "Winddruk op een opening kan brand en hete rookgassen krachtig door een compartiment sturen.",
      "operational": "Beoordeel windrichting, openingen, stroming en beschikbare koelende slagkracht voordat wordt toegetreden.",
      "video": "https://youtu.be/5gOrR9IoB8Y?si=wDkTGTgQttDiKKJn"
    },
    "Flowpath": {
      "definition": "De route waarlangs lucht, rook en hete gassen zich bewegen tussen toevoer- en afvoeropeningen.",
      "operational": "Iedere geopende deur of raam kan het stromingspad veranderen.",
      "video": "https://youtu.be/IbMCRldLu5M?si=liYGTdUR6RRFgZ2J"
    },
    "Bruggenhoofd": {
      "definition": "Een operationele uitvalsbasis nabij de brand voor leiding, logistiek, communicatie, back-up en materiaal.",
      "operational": "Kies een locatie die rookvrij en bereikbaar blijft en bewaak de omstandigheden tijdens de inzet.",
      "pdf": "assets/custom/bruggenhoofd_aandachtskaart.pdf"
    },
    "Compartimentering": {
      "definition": "Brand- en rookwerende scheidingen die verspreiding van brand en rook moeten vertragen.",
      "operational": "Gebruik objectinformatie als hypothese en toets de feitelijke werking aan waarnemingen."
    },
    "WBDBO": {
      "definition": "Weerstand tegen BrandDoorslag en BrandOverslag.",
      "operational": "Gebruik de waarde als beslisinformatie, niet als absolute garantie over het gedrag tijdens het incident."
    },
    "Brandweerlift": {
      "definition": "Lift met voorzieningen voor gebruik door de brandweer tijdens brand.",
      "operational": "Blijf de bruikbaarheid tijdens de gehele inzet beoordelen op basis van techniek én waarnemingen."
    },
    "Smokestopper": {
      "definition": "Middel om rookuitstroom via een deuropening te beperken.",
      "operational": "Ondersteunt deurmanagement; controleer altijd of het beoogde effect daadwerkelijk wordt bereikt."
    },
    "Offensief binnen": {
      "definition": "Binneninzet gericht op actieve brandbestrijding in het brandcompartiment.",
      "operational": "Alleen passend wanneer slagkracht, route en terugtrekmogelijkheid voldoende zijn."
    },
    "Defensief binnen": {
      "definition": "Binneninzet vanuit een relatief veiliger deel met nadruk op begrenzen, beschermen of redding onder dekking.",
      "operational": "Kan passend zijn wanneer directe offensieve brandbestrijding nog niet verantwoord of uitvoerbaar is."
    },
    "Rookgaskoeling": {
      "definition": "Gerichte waterapplicatie om hete rookgassen en thermische belasting te beïnvloeden.",
      "operational": "Techniek, hoeveelheid en frequentie moeten passen bij het rookbeeld; beoordeel steeds het effect."
    },
    "RSTV": {
      "definition": "Rook, Stroming, Temperatuur en Vlammen als signalen voor brandontwikkeling.",
      "operational": "Lees veranderingen gedurende de hele inzet en koppel ze aan openingen, wind, verdieping en vluchtwegen."
    },
    "CAN": {
      "definition": "Korte terugmelding van Condities, Acties en Nodig.",
      "operational": "Gebruik CAN om het beeld van de bevelvoerder actueel te houden."
    },
    "FABCM": {
      "definition": "Factfinding, Analyse, Besluitvorming, Communicatie en Monitoring.",
      "operational": "Gebruik dit als denkstructuur voor heroverweging en effectcontrole."
    },
    "Kwadrantenmodel": {
      "definition": "Denkmodel voor offensief/defensief en binnen/buiten.",
      "operational": "Herbeoordeel de gekozen positie wanneer het incidentbeeld verandert."
    },
    "Droge stijgleiding": {
      "definition": "Vaste leiding in het gebouw die door de brandweer wordt gevoed voor watertransport op hoogte.",
      "operational": "Beschouw de voorziening pas als operationeel beschikbaar wanneer voldoende druk en debiet daadwerkelijk zijn vastgesteld."
    },
    "Wokkeltrappenhuis": {
      "definition": "Twee onafhankelijke trappen die in één schachtconstructie zijn vervlochten en brandwerend gescheiden zijn.",
      "operational": "Maak expliciet welke trap inzetroute is en welke zo veel mogelijk voor ontvluchting/ontruiming beschikbaar blijft."
    },
    "Overdrukinstallatie": {
      "definition": "Installatie die met drukverschil rookinstroom naar een trappenhuis of voorportaal probeert te beperken.",
      "operational": "Beoordeel toevoer, afvoer en werkelijke drukverhoudingen; controleer het effect."
    }
  },
  "systemDefinitions": {
    "Kenmerkenschema": "Combineer mens-, gebouw-, brand-, omgevings- en interventiekenmerken om inzetdoel en randvoorwaarden te bepalen.",
    "RSTV": "Lees rook, stroming, temperatuur en vlammen als dynamische signalen.",
    "Kwadrantenmodel": "Gebruik het model om de tactische positie bewust te kiezen en zo nodig te heroverwegen.",
    "CAN": "Gebruik Condities, Acties en Nodig voor compacte operationele terugmeldingen.",
    "FABCM": "Gebruik Factfinding, Analyse, Besluitvorming, Communicatie en Monitoring om de inzet bestuurbaar te houden.",
    "Deurcontrole": "Beoordeel warmte, rook en druk vóór openen; open gecontroleerd en zo beperkt mogelijk.",
    "Anti-ventilatie": "Beperk ongewenste luchttoevoer door openingen en deuren bewust te beheersen.",
    "Rookgaskoeling": "Pas water gericht toe op basis van rook- en warmtecondities en controleer het effect.",
    "Smokestopper": "Beperk rookuitstroom door een deuropening en controleer of de rookverspreiding daadwerkelijk afneemt.",
    "LD op hoogte": "Organiseer betrouwbare lage-drukwatervoorziening tot aan de inzetlocatie.",
    "Droge stijgleiding binnen": "Voed en controleer de droge stijgleiding; voldoende druk en debiet moeten feitelijk beschikbaar zijn.",
    "Hoogtetas": "Materiaalset voor het aansluiten en gebruiken van voorzieningen op hoogte.",
    "Transporttas": "Systeem 3 voor watertransport op hoogte via transportslang/transporttas.",
    "Verdeelstuk buitenom": "Systeem 4 buitenom voor alternatieve verticale watervoorziening.",
    "O-bundel": "Compact slangsysteem voor LD-inzet op hoogte.",
    "Klepel / straalpijp": "Stem straalpijpinstelling en koelend vermogen af op het brandbeeld.",
    "Laag voortbewegen": "Beperk thermische belasting en blijf tijdens het oprukken het rook- en warmtebeeld lezen."
  },
  "debriefSections": [
    {
      "title": "Beeldvorming",
      "question": "Wat veranderde tijdens de inzet en heb je dat tijdig herkend?",
      "points": [
        "Op welke momenten veranderde volgens jou het scenario?",
        "Welke concrete waarneming was bepalend?",
        "Gebruik de scenario-uitleg als referentie, niet als automatische beslisregel."
      ]
    },
    {
      "title": "Tactiek",
      "question": "Bleef je tactiek passen bij het actuele incidentbeeld?",
      "points": [
        "Welke tactiek koos je aanvankelijk?",
        "Welke nieuwe informatie kreeg je?",
        "Wat veranderde je vervolgens?",
        "Herclassificeren heeft pas betekenis wanneer prioriteiten, opdrachten of capaciteit mee veranderen."
      ]
    },
    {
      "title": "Redding & ontruiming",
      "question": "Hoe veranderde de verhouding tussen redding, brandbestrijding en ontruiming?",
      "points": [
        "Reddingsdruk afwegen tegen interventievoorwaarden",
        "Spontane ontruiming organiseren zonder inzet- en vluchtstromen onnodig te mengen",
        "Bij geveluitbreiding gebouwbreed kijken naar bedreigde bewoners en beschikbare tijd"
      ]
    },
    {
      "title": "Bluswater & voorzieningen",
      "question": "Waren slagkracht, back-up en gebouwvoorzieningen passend bij het actuele brandbeeld?",
      "points": [
        "Benodigd blusvermogen bepalen op brandontwikkeling, wind en stroming",
        "Liftbruikbaarheid tijdens de inzet blijven toetsen",
        "Niet afhankelijk blijven van één voorziening zonder alternatief"
      ]
    },
    {
      "title": "Rook & vluchtwegen",
      "question": "Welke signalen wezen erop dat rook- en luchtstroming niet meer alleen door de brandruimte werden bepaald?",
      "points": [
        "Wind, openingen en flowpath",
        "CO zonder zichtbare rook verklaren en blijven meten",
        "Trappenhuisbescherming en deurmanagement als zelfstandige taken"
      ]
    },
    {
      "title": "Organisatie & continuïteit",
      "question": "Welke voorziening of organisatievorm werd kwetsbaar en had je al een alternatief georganiseerd?",
      "points": [
        "Bruggenhoofd",
        "Communicatie",
        "Lift en verticale logistiek",
        "Ademlucht, aflossing en materiaal",
        "Bewust heroverwegen bij langdurige inzet"
      ]
    }
  ],
  "closingQuestions": [
    "Welke beslissing zou je hetzelfde nemen, welke zou je anders nemen en welke informatie had je eerder willen hebben?",
    "Wat ga je na deze casus bij een echte hoogbouwbrand eerder herkennen, eerder vragen of eerder organiseren?"
  ]
};
