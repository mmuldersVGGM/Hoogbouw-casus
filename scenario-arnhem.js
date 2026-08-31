window.SCENARIO = {
  "meta": {
    "title": "Hoogbouwcasus – Arnhem Building",
    "subtitle": "Interactieve oefencasus voor bevelvoerder en manschappen",
    "status": "Concept • didactische oefentoepassing • geen vastgesteld VGGM-inzetprotocol",
    "building": "Arnhem Building • Arnhem • categorie 20–70 m",
    "principles": [
      "Keuzes zijn bewust plausibel en geven niet vooraf prijs wat verwacht wordt.",
      "Na iedere keuze volgt eerst het operationele gevolg; de uitleg is daarna optioneel te openen.",
      "VRICOL (Verkenning, Redding, Interventie, Compartimentering, Ontruiming en Logistiek) wordt uitsluitend gebruikt als didactisch vergelijkingsmodel.",
      "Object- en broninformatie ondersteunt de beeldvorming, maar actuele waarnemingen bepalen of aannames nog kloppen.",
      "Een maatregel is pas geslaagd wanneer het waargenomen effect overeenkomt met het beoogde effect."
    ],
    "sourceNote": "Bronmateriaal wordt gebruikt als inhoudelijke onderlegger en verwijzing. De webcasus is een didactische oefentoepassing en geen vastgesteld VGGM-inzetprotocol.",
    "hero": "assets/arnhem/arnhem_frontaal.png"
  },
  "nodes": [
    {
      "id": 1,
      "title": "Aankomst & eerste beeldvorming",
      "role": "Bevelvoerder",
      "roleNote": "Bepaal welke informatie je bij aankomst nodig hebt.",
      "situation": "Je arriveert met de eerste TS bij Arnhem Building. Vanaf buiten is rook zichtbaar ter hoogte van de 7e verdieping. Een BHV’er meldt dat de ontruiming van de 7e verdieping loopt en dat één medewerker lijkt te ontbreken. De exacte brandlocatie, de locatie van de vermiste medewerker en de situatie op de hogere verdiepingen zijn nog onbekend. De eerste ploeg en de chauffeur/pompbediener wachten op jouw opdrachten.",
      "choices": [
        {
          "id": "A",
          "text": "Gericht doorvragen naar slachtofferlocatie, plattegrond, waarnemingen van de BHV op de 7e verdieping en de status van de 8e en 9e verdieping.",
          "consequence": "Je krijgt snel meer object- en slachtofferinformatie. Over de 8e en 9e verdieping blijkt de BHV geen betrouwbaar beeld te hebben.",
          "rationale": "Gerichte uitvraag benut informatie die al bij de BHV aanwezig kan zijn zonder de eigen verkenning te vervangen.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Gerichte uitvraag benut informatie die al bij de BHV aanwezig kan zijn zonder de eigen verkenning te vervangen."
        },
        {
          "id": "B",
          "text": "Alleen vragen waar de brand vermoedelijk zit en de ploeg direct naar boven sturen.",
          "consequence": "De verkenning op hoogte start snel, maar slachtofferlocatie, plattegrond en onbekende bezetting boven de brand blijven voorlopig buiten beeld.",
          "rationale": "Verdedigbaar vanuit snelheid, maar direct beschikbare informatie wordt niet benut.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Verdedigbaar vanuit snelheid, maar direct beschikbare informatie wordt niet benut."
        },
        {
          "id": "C",
          "text": "Zonder verdere uitvraag direct inzetten op de 7e verdieping.",
          "consequence": "De ploeg vertrekt met minimale objectinformatie en moet relevante informatie later alsnog ophalen of zelf ontdekken.",
          "rationale": "Bij hoogbouw en een vermissing is beschikbare objectinformatie te waardevol om zonder reden te negeren.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "Bij hoogbouw en een vermissing is beschikbare objectinformatie te waardevol om zonder reden te negeren."
        }
      ],
      "discussionQuestion": "Welke informatie heb je bij aankomst minimaal nodig om een veilige en gerichte inzet te kunnen starten?",
      "media": {
        "src": "assets/arnhem/arnhem_aankomst.png",
        "caption": "Arnhem Building bij aankomst",
        "source": "Aangeleverde afbeelding"
      },
      "systems": [
        "Kenmerkenschema",
        "RSTV"
      ]
    },
    {
      "id": 2,
      "title": "Beschikbare objectinformatie",
      "role": "Bevelvoerder",
      "roleNote": "Gebruik beschikbare objectinformatie als hulpmiddel en toets deze aan de werkelijkheid.",
      "situation": "Na gerichte navraag geeft de BHV een plattegrond van de 7e verdieping en kan hij de ruimte van de vermiste medewerker aanwijzen. De betekenis van de ingetekende bouwkundige voorzieningen kan hij niet toelichten.",
      "choices": [
        {
          "id": "A",
          "text": "De plattegrond gebruiken om trappenhuis, route naar 7.14, droge stijgleiding en brand- en rookwerende scheidingen te interpreteren.",
          "consequence": "Je bouwt een ruimtelijk beeld op. De feitelijke situatie moet boven nog steeds worden geverifieerd.",
          "rationale": "De tekening levert meerdere hypotheses op over route, water en compartimentering; waarnemingen bepalen of die kloppen.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "De tekening levert meerdere hypotheses op over route, water en compartimentering; waarnemingen bepalen of die kloppen."
        },
        {
          "id": "B",
          "text": "Alleen ruimte 7.14 markeren en de rest van de plattegrond later bekijken.",
          "consequence": "De slachtofferlocatie is duidelijk, maar bouwkundige en watertechnische informatie wordt nog niet benut.",
          "rationale": "De locatie is belangrijk, maar route en voorzieningen bepalen mede of een redding uitvoerbaar is.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "De locatie is belangrijk, maar route en voorzieningen bepalen mede of een redding uitvoerbaar is."
        },
        {
          "id": "C",
          "text": "De plattegrond niet meenemen; de ploeg zoekt boven zelf de route.",
          "consequence": "De ploeg moet in rook zelf ruimtenummers, route en voorzieningen reconstrueren.",
          "rationale": "Dit vergroot zoektijd en verlaagt het situatiebeeld zonder noodzaak.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "Dit vergroot zoektijd en verlaagt het situatiebeeld zonder noodzaak."
        }
      ],
      "discussionQuestion": "Welke informatie kun je uit een plattegrond en van de BHV halen, en welke informatie moet je altijd zelf verifiëren?",
      "media": {
        "src": "assets/arnhem/plattegrond_7e_volledig.png",
        "caption": "Plattegrond 7e verdieping",
        "source": "Oefenplattegrond Arnhem Building"
      },
      "systems": [
        "Kenmerkenschema",
        "Compartimentering"
      ]
    },
    {
      "id": 3,
      "title": "Eerste tactische keuze",
      "role": "Bevelvoerder",
      "roleNote": "Kies een inzetdoel op basis van het beeld dat je tot nu toe hebt opgebouwd.",
      "situation": "De eerste ploeg bereikt de 7e verdieping. De brand bevindt zich tussen het trappenhuis en de bekende locatie van de vermiste medewerker. De route richting het slachtoffer wordt daardoor door de brandsituatie bedreigd.",
      "choices": [
        {
          "id": "A",
          "text": "Offensief binnen: brandbestrijding met LD zodat de route richting het slachtoffer beheersbaar kan worden.",
          "consequence": "De ploeg richt zich op het lokaliseren en beheersen van de brand. Redding kan volgen zodra de route voldoende beheersbaar is.",
          "rationale": "Een logisch inzetdoel wanneer de brand de route bedreigt; betrouwbare watervoorziening blijft randvoorwaarde.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Een logisch inzetdoel wanneer de brand de route bedreigt; betrouwbare watervoorziening blijft randvoorwaarde."
        },
        {
          "id": "B",
          "text": "Defensief binnen: redding als primair doel, met LD als beschermende slagkracht.",
          "consequence": "De ploeg richt zich op het bereiken van het slachtoffer en moet onderweg de brandbedreiging kunnen beheersen.",
          "rationale": "Ook een reddingsgerichte tactiek vereist hier betrouwbare blus- en beschermingscapaciteit.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Ook een reddingsgerichte tactiek vereist hier betrouwbare blus- en beschermingscapaciteit."
        },
        {
          "id": "C",
          "text": "De redding starten zonder eerst een betrouwbare LD-watervoorziening te borgen.",
          "consequence": "De ploeg beschikt niet over voldoende capaciteit om de bedreigde route beheersbaar te houden en moet de inzet heroverwegen.",
          "rationale": "De brand ligt tussen trappenhuis en slachtoffer; bluswater is nodig voor zowel eigen bescherming als beïnvloeding van de brand.",
          "label": "Operationele duiding",
          "quality": -2,
          "deepDive": "De brand ligt tussen trappenhuis en slachtoffer; bluswater is nodig voor zowel eigen bescherming als beïnvloeding van de brand."
        }
      ],
      "discussionQuestion": "Welke factoren bepalen of je kiest voor offensief binnen of defensief binnen, en wanneer zou je die keuze heroverwegen?",
      "media": {
        "src": "assets/custom/kwadrantenmodel_user.jpg",
        "caption": "Kwadrantenmodel als tactisch denkkader",
        "source": "Aangeleverde afbeelding"
      },
      "systems": [
        "Kwadrantenmodel",
        "LD op hoogte",
        "Rookgaskoeling"
      ]
    },
    {
      "id": 4,
      "title": "Benodigde slagkracht",
      "role": "Bevelvoerder",
      "roleNote": "Bepaal welke capaciteit je nu en in de komende minuten nodig hebt.",
      "situation": "De eerste TS is bezig met de inzet op de 7e verdieping. Er is een vermissing gemeld en de verdiepingen boven de brand zijn nog niet volledig gecontroleerd. Naast de brandbestrijding kunnen daardoor meerdere taken gelijktijdig ontstaan.",
      "choices": [
        {
          "id": "A",
          "text": "Vroegtijdig opschalen en extra TS’en organiseren; bij verdere uitbreiding van taken verdere opschaling overwegen.",
          "consequence": "Extra capaciteit kan worden ingezet voor aanvullende taken, zoals controle en ontruiming van hogere verdiepingen en het bewaken van het trappenhuis.",
          "rationale": "Meerdere zelfstandige taken kunnen gelijktijdig ontstaan. Vroegtijdig capaciteit organiseren voorkomt dat alle taken bij één TS komen te liggen.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Meerdere zelfstandige taken kunnen gelijktijdig ontstaan. Vroegtijdig capaciteit organiseren voorkomt dat alle taken bij één TS komen te liggen."
        },
        {
          "id": "B",
          "text": "Eerst de resultaten van de eerste verkenning afwachten en daarna beoordelen of extra TS’en nodig zijn.",
          "consequence": "Je organiseert nog geen extra capaciteit. Wanneer meerdere taken gelijktijdig ontstaan, zijn aanvullende eenheden daardoor later beschikbaar.",
          "rationale": "Verdedigbaar, maar minder anticiperend.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Verdedigbaar, maar minder anticiperend."
        },
        {
          "id": "C",
          "text": "Niet opschalen zolang de brand zich vermoedelijk tot één ruimte beperkt.",
          "consequence": "Wanneer meerdere taken gelijktijdig ontstaan, kan de beschikbare capaciteit onvoldoende blijken.",
          "rationale": "De omvang van de brand is niet de enige maat voor de benodigde slagkracht bij hoogbouw.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "De omvang van de brand is niet de enige maat voor de benodigde slagkracht bij hoogbouw."
        }
      ],
      "discussionQuestion": "Welke ontwikkelingen en taken neem je mee in je besluit om wel of niet vroegtijdig op te schalen bij een hoogbouwbrand?",
      "media": {
        "src": "assets/vggm/logistiek_materiaal.jpeg",
        "caption": "Hoogbouw vraagt vroeg om taak- en capaciteitsorganisatie",
        "source": "VGGM lesmateriaal"
      },
      "systems": [
        "CAN",
        "FABCM"
      ]
    },
    {
      "id": 5,
      "title": "Probleem met de watervoorziening",
      "role": "Bevelvoerder",
      "roleNote": "Reageer op een onverwacht probleem in de watervoorziening.",
      "situation": "Tijdens het voeden van de droge stijgleiding meldt de chauffeur/pompbediener: ‘BV, ik krijg de stijgleiding niet goed op druk. Ik blijf veel water leveren, maar de druk bouwt onvoldoende op.’ De oorzaak is nog onbekend.",
      "choices": [
        {
          "id": "A",
          "text": "De storing laten onderzoeken en parallel een alternatieve watervoorziening opbouwen.",
          "consequence": "Beide oplossingsrichtingen lopen parallel. Zodra één van beide een betrouwbare LD-watervoorziening oplevert, kan de inzet worden heroverwogen.",
          "rationale": "Parallel werken beperkt tijdverlies en voorkomt afhankelijkheid van één oplossingsrichting.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Parallel werken beperkt tijdverlies en voorkomt afhankelijkheid van één oplossingsrichting."
        },
        {
          "id": "B",
          "text": "Alleen de oorzaak van de storing in de droge stijgleiding laten onderzoeken.",
          "consequence": "Na circa 10 minuten wordt de oorzaak gevonden en kan de storing worden verholpen. Tot dat moment is geen betrouwbare LD-watervoorziening beschikbaar.",
          "rationale": "Een mogelijke oplossing, maar zonder parallel alternatief blijft de inzet volledig afhankelijk van één spoor.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Een mogelijke oplossing, maar zonder parallel alternatief blijft de inzet volledig afhankelijk van één spoor."
        },
        {
          "id": "C",
          "text": "De ploeg ondanks de onvoldoende druk laten doorgaan en de watervoorziening later oplossen.",
          "consequence": "De ploeg beschikt niet over de benodigde blus- en beschermingscapaciteit voor de bedreigde route.",
          "rationale": "Een betrouwbare watervoorziening is een randvoorwaarde voor deze binneninzet. Zonder voldoende bluswater kan de ploeg de gekozen tactiek niet verantwoord uitvoeren.",
          "label": "Operationele duiding",
          "quality": -2,
          "deepDive": "Een betrouwbare watervoorziening is een randvoorwaarde voor deze binneninzet. Zonder voldoende bluswater kan de ploeg de gekozen tactiek niet verantwoord uitvoeren."
        }
      ],
      "discussionQuestion": "Wat betekent het wegvallen van de geplande watervoorziening voor je inzetdoel en voor de veiligheid van de ingezette ploeg?",
      "media": {
        "src": "assets/bpbb/droge_stijgleiding_binnen.png",
        "caption": "Werken met de droge stijgleiding en LD op hoogte",
        "source": "Train de trainer BPBB 2026"
      },
      "systems": [
        "Droge stijgleiding binnen",
        "Hoogtetas",
        "LD op hoogte"
      ]
    },
    {
      "id": 6,
      "title": "Onderzoek aan de stijgleiding",
      "role": "Manschappen",
      "roleNote": "Bepaal hoe je de oorzaak van het drukverlies laat onderzoeken.",
      "situation": "Bij controle van de droge stijgleiding blijkt het probleem niet direct bij de voeding beneden te zitten. Nader onderzoek in het gebouw is nodig om te bepalen waar het drukverlies ontstaat.",
      "choices": [
        {
          "id": "A",
          "text": "De verdiepingsaansluitingen systematisch controleren.",
          "consequence": "Na circa 10 minuten wordt op de 4e verdieping de oorzaak gevonden: een ontbrekend blinddeksel of een openstaande afsluiter. Na herstel kan de leiding weer op druk worden gebracht.",
          "rationale": "Systematische controle past bij het beeld dat water elders uit het systeem wegstroomt.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Systematische controle past bij het beeld dat water elders uit het systeem wegstroomt."
        },
        {
          "id": "B",
          "text": "Alleen beneden de voeding, pomp en koppelingen opnieuw controleren.",
          "consequence": "De chauffeur/pompbediener blijft hetzelfde drukverlies zien; de lekkage op de 4e verdieping blijft onopgemerkt bestaan.",
          "rationale": "De terugmelding geeft aanleiding om ook de rest van het systeem te controleren.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "De terugmelding geeft aanleiding om ook de rest van het systeem te controleren."
        },
        {
          "id": "C",
          "text": "De stijgleiding buiten gebruik verklaren zonder verdere controle.",
          "consequence": "Een mogelijk snel te herstellen gebouwvoorziening wordt niet verder benut.",
          "rationale": "Verdedigbaar wanneer een alternatief aantoonbaar sneller en betrouwbaarder beschikbaar is, maar niet als automatische reactie.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Verdedigbaar wanneer een alternatief aantoonbaar sneller en betrouwbaarder beschikbaar is, maar niet als automatische reactie."
        }
      ],
      "discussionQuestion": "Hoe organiseer je het oplossen van een technisch probleem zonder dat de rest van de inzet daarop stilvalt?",
      "media": {
        "src": "assets/vggm/stijgleiding_afnamepunt.jpg",
        "caption": "Afnamepunt droge stijgleiding",
        "source": "VGGM lesmateriaal"
      },
      "systems": [
        "Droge stijgleiding binnen",
        "Hoogtetas"
      ]
    },
    {
      "id": 7,
      "title": "Watervoorziening op hoogte",
      "role": "Bevelvoerder",
      "roleNote": "Bepaal hoe je een betrouwbare watervoorziening voor de inzet op hoogte organiseert.",
      "situation": "De inzetploeg beschikt nog niet over een betrouwbare LD-watervoorziening op de 7e verdieping. De storing in de droge stijgleiding wordt onderzocht. Je kunt wachten op herstel van de gebouwvoorziening of parallel een alternatieve watervoorziening opbouwen.",
      "choices": [
        {
          "id": "A",
          "text": "Systeem 3 met transportslang/transporttas laten opbouwen.",
          "consequence": "Na circa 9 minuten is via het trappenhuis een alternatieve LD-watervoorziening beschikbaar.",
          "rationale": "Een passende oplossing wanneer route, inzetdiepte en beschikbare middelen dit toelaten.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Een passende oplossing wanneer route, inzetdiepte en beschikbare middelen dit toelaten."
        },
        {
          "id": "B",
          "text": "Systeem 4 buitenom laten opbouwen.",
          "consequence": "Na circa 9 minuten is buitenom een alternatieve LD-watervoorziening beschikbaar.",
          "rationale": "Een passend alternatief wanneer buitenopbouw technisch mogelijk is en de gekozen zijde van het gebouw bereikbaar is.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Een passend alternatief wanneer buitenopbouw technisch mogelijk is en de gekozen zijde van het gebouw bereikbaar is."
        },
        {
          "id": "C",
          "text": "Geen alternatieve watervoorziening opbouwen en volledig wachten op herstel van de droge stijgleiding.",
          "consequence": "De inzet blijft gedurende ongeveer 10 minuten volledig afhankelijk van het onderzoek en herstel van de droge stijgleiding.",
          "rationale": "Verdedigbaar wanneer herstel aantoonbaar snel en betrouwbaar te verwachten is, maar minder robuust wanneer tijdkritische taken parallel doorlopen.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Verdedigbaar wanneer herstel aantoonbaar snel en betrouwbaar te verwachten is, maar minder robuust wanneer tijdkritische taken parallel doorlopen."
        }
      ],
      "discussionQuestion": "Welke factoren bepalen welk alternatief voor watertransport op hoogte in deze situatie het meest geschikt is?",
      "media": {
        "src": "assets/bpbb/transporttas_systeem3.png",
        "caption": "Systeem 3 – transporttas / transportslang",
        "source": "Train de trainer BPBB 2026"
      },
      "systems": [
        "Transporttas",
        "Verdeelstuk buitenom",
        "O-bundel",
        "LD op hoogte"
      ]
    },
    {
      "id": 8,
      "title": "Aanvullende verticale capaciteit",
      "role": "Bevelvoerder",
      "roleNote": "Bepaal of je aanvullende verticale capaciteit vroegtijdig wilt organiseren.",
      "situation": "Naast de gebouwvoorziening en de beschikbare slangsystemen kan een redvoertuig aanvullende verticale mogelijkheden bieden. Het redvoertuig is nog niet gealarmeerd en moet, wanneer je dit nodig acht, apart worden aangevraagd.",
      "choices": [
        {
          "id": "A",
          "text": "Het redvoertuig vroegtijdig alarmeren en laten voorbereiden als mogelijke alternatieve verticale waterroute.",
          "consequence": "Het redvoertuig is eerder beschikbaar wanneer een aanvullende verticale waterroute nodig blijkt.",
          "rationale": "Vroegtijdig organiseren creëert een extra optie zonder de uiteindelijke tactiek al vast te leggen.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Vroegtijdig organiseren creëert een extra optie zonder de uiteindelijke tactiek al vast te leggen."
        },
        {
          "id": "B",
          "text": "Het redvoertuig pas alarmeren wanneer duidelijk wordt dat de bestaande oplossingen onvoldoende of te laat beschikbaar zijn.",
          "consequence": "Alarmering en opbouw starten later, waardoor deze alternatieve route ook later beschikbaar komt.",
          "rationale": "Verdedigbaar, maar het tijdvoordeel van anticiperen gaat verloren.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Verdedigbaar, maar het tijdvoordeel van anticiperen gaat verloren."
        },
        {
          "id": "C",
          "text": "Geen redvoertuig alarmeren.",
          "consequence": "Deze aanvullende mogelijkheid is niet beschikbaar. De watervoorziening blijft afhankelijk van herstel van de droge stijgleiding of een van de alternatieve slangsystemen.",
          "rationale": "Verdedigbaar wanneer andere oplossingen bewust en tijdig zijn georganiseerd, maar het beperkt de beschikbare handelingsmogelijkheden.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Verdedigbaar wanneer andere oplossingen bewust en tijdig zijn georganiseerd, maar het beperkt de beschikbare handelingsmogelijkheden."
        }
      ],
      "discussionQuestion": "Welke middelen organiseer je al vroeg in de inzet, en welke kun je verantwoord pas aanvragen wanneer daar daadwerkelijk behoefte aan ontstaat?",
      "media": {
        "src": "assets/vggm/transitional_attack.png",
        "caption": "Redvoertuig als mogelijke aanvullende verticale inzetroute",
        "source": "VGGM lesmateriaal"
      },
      "systems": [
        "Verdeelstuk buitenom",
        "LD op hoogte"
      ]
    },
    {
      "id": 9,
      "title": "Rookontwikkeling in het trappenhuis",
      "role": "Manschappen",
      "roleNote": "Herken wat de veranderende rookverspreiding betekent voor de inzet.",
      "situation": "Het trappenhuis was bij aankomst op de 7e verdieping rookvrij. Tijdens de inzet wordt de deur tussen het trappenhuis en de brandverdieping regelmatig gebruikt. De ploeg merkt dat langzaam rook het trappenhuis begint binnen te trekken.",
      "choices": [
        {
          "id": "A",
          "text": "De rookinstroom direct melden en vragen om aanvullende rookbeheersingsmaatregelen.",
          "consequence": "De rookverspreiding wordt als zelfstandige taak onderkend en kan worden aangepakt voordat het trappenhuis verder verrookt.",
          "rationale": "Het trappenhuis is zowel inzet- en terugtrekroute voor de brandweer als mogelijke ontruimingsroute voor de verdiepingen boven de brand.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Het trappenhuis is zowel inzet- en terugtrekroute voor de brandweer als mogelijke ontruimingsroute voor de verdiepingen boven de brand."
        },
        {
          "id": "B",
          "text": "De deur tijdens passage zoveel mogelijk gesloten houden en de rookontwikkeling blijven bewaken.",
          "consequence": "De rookinstroom wordt beperkt, maar kan blijven optreden wanneer de deur tijdens de inzet regelmatig wordt gebruikt.",
          "rationale": "Goed deurmanagement beperkt rookverspreiding, maar kan bij aanhoudende rookinstroom onvoldoende zijn als enige maatregel.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Goed deurmanagement beperkt rookverspreiding, maar kan bij aanhoudende rookinstroom onvoldoende zijn als enige maatregel."
        },
        {
          "id": "C",
          "text": "De rookverspreiding accepteren zolang de aanval op de brand doorgaat.",
          "consequence": "Binnen enkele minuten neemt de rookbelasting in het trappenhuis duidelijk toe. De inzet- en terugtrekroute verslechtert en de ontruiming van hogere verdiepingen wordt bemoeilijkt.",
          "rationale": "Rook in het trappenhuis is een zelfstandig operationeel probleem.",
          "label": "Operationele duiding",
          "quality": -2,
          "deepDive": "Rook in het trappenhuis is een zelfstandig operationeel probleem."
        }
      ],
      "discussionQuestion": "Welke gevolgen heeft rookverspreiding naar het trappenhuis voor zowel de brandweerinzet als de aanwezige personen in het gebouw?",
      "media": {
        "src": "assets/vggm/rookverspreiding_trappenhuis.png",
        "caption": "Rookverspreiding richting trappenhuis",
        "source": "VGGM lesmateriaal"
      },
      "systems": [
        "Deurcontrole",
        "Anti-ventilatie",
        "Smokestopper"
      ]
    },
    {
      "id": 10,
      "title": "Rookbeheersing",
      "role": "Bevelvoerder",
      "roleNote": "Kies een maatregel en beoordeel daarna het effect.",
      "situation": "De rookinstroom in het trappenhuis neemt toe wanneer de verbinding met de 7e verdieping wordt gebruikt. Het trappenhuis is zowel inzet- en terugtrekroute voor de brandweer als mogelijke ontruimingsroute voor personen op hoger gelegen verdiepingen.",
      "choices": [
        {
          "id": "A",
          "text": "Een smokestopper bij de toegang tot de 7e verdieping inzetten en vervolgens het effect controleren.",
          "consequence": "Bij een effectieve plaatsing neemt de rookinstroom af en blijft het trappenhuis beter bruikbaar.",
          "rationale": "Een gerichte maatregel om rookverspreiding via de deuropening te beperken, waarbij het daadwerkelijke effect moet worden gecontroleerd.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Een gerichte maatregel om rookverspreiding via de deuropening te beperken, waarbij het daadwerkelijke effect moet worden gecontroleerd."
        },
        {
          "id": "B",
          "text": "Het trappenhuis gecontroleerd op overdruk brengen en vervolgens het effect beoordelen.",
          "consequence": "Wanneer toevoer, afvoer en drukverhoudingen goed zijn georganiseerd, kan de rookinstroom worden beperkt. Een verkeerd gekozen stromingsrichting kan de situatie juist verslechteren.",
          "rationale": "Overdruk kan effectief zijn, maar alleen wanneer vooraf wordt nagedacht over luchttoevoer, afvoer en het effect op de brand- en rookstroming.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Overdruk kan effectief zijn, maar alleen wanneer vooraf wordt nagedacht over luchttoevoer, afvoer en het effect op de brand- en rookstroming."
        },
        {
          "id": "C",
          "text": "Een ventilator plaatsen zonder vooraf de stromingsrichting en afvoer te beoordelen.",
          "consequence": "De rookstroming kan ongewenst veranderen en de rookverspreiding kan zelfs toenemen.",
          "rationale": "Ventilatie is geen automatische oplossing; het effect op de lucht- en rookstroming moet vooraf worden ingeschat en tijdens de inzet worden gecontroleerd.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "Ventilatie is geen automatische oplossing; het effect op de lucht- en rookstroming moet vooraf worden ingeschat en tijdens de inzet worden gecontroleerd."
        }
      ],
      "discussionQuestion": "Welke maatregel voor rookbeheersing kies je, en hoe controleer je vervolgens of die maatregel daadwerkelijk het gewenste effect heeft?",
      "media": {
        "src": "assets/custom/smokestopper_user.png",
        "caption": "Smokestopper als rookbeheersingsmiddel",
        "source": "Aangeleverde afbeelding"
      },
      "systems": [
        "Smokestopper",
        "Anti-ventilatie"
      ]
    },
    {
      "id": 11,
      "title": "Nieuwe informatie over de vermiste medewerker",
      "role": "Bevelvoerder",
      "roleNote": "Gebruik de nieuwe informatie zonder de nog gunstige omstandigheden rond het slachtoffer onnodig te verslechteren.",
      "situation": "Tijdens de inzet komt via de ploeg en/of de BHV aanvullende informatie beschikbaar. Er is contact met de vermiste medewerker. De persoon bevindt zich nog in de eerder aangewezen ruimte. De deur is gesloten en de ruimte is op dat moment nog rookvrij.",
      "choices": [
        {
          "id": "A",
          "text": "De redding voorbereiden, inclusief bescherming van het slachtoffer met een vluchtmasker, en de deur pas openen wanneer de route en het transport daadwerkelijk gereed zijn.",
          "consequence": "De rookvrije ruimte blijft zo lang mogelijk behouden en de ploeg heeft vooraf een plan voor het transport door de verrookte gang.",
          "rationale": "Een slachtoffer lokaliseren is niet hetzelfde als een redding organiseren.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Een slachtoffer lokaliseren is niet hetzelfde als een redding organiseren."
        },
        {
          "id": "B",
          "text": "De deur direct openen en proberen het slachtoffer zo snel mogelijk naar buiten te begeleiden.",
          "consequence": "Door de verbinding met de verrookte gang kan de rookvrije ruimte snel worden belast. Zonder voorbereid vluchtmasker en transportplan wordt de redding daardoor moeilijker.",
          "rationale": "De urgentie om te redden is begrijpelijk, maar deurmanagement, slachtofferbescherming en de route naar buiten bepalen mede of de redding uitvoerbaar blijft.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "De urgentie om te redden is begrijpelijk, maar deurmanagement, slachtofferbescherming en de route naar buiten bepalen mede of de redding uitvoerbaar blijft."
        },
        {
          "id": "C",
          "text": "De redding uitstellen en eerst de brand volledig onder controle brengen.",
          "consequence": "De brandbestrijding krijgt alle prioriteit. Het slachtoffer blijft langer in de ruimte terwijl de omstandigheden in en rond het compartiment kunnen veranderen.",
          "rationale": "Het verbeteren van de route kan zinvol zijn, maar volledig wachten benut niet de mogelijkheid om de redding parallel voor te bereiden zolang de slachtofferlocatie nog gunstige omstandigheden biedt.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Het verbeteren van de route kan zinvol zijn, maar volledig wachten benut niet de mogelijkheid om de redding parallel voor te bereiden zolang de slachtofferlocatie nog gunstige omstandigheden biedt."
        }
      ],
      "discussionQuestion": "Wat moet je organiseren vóórdat je de deur naar een nog rookvrije ruimte met een slachtoffer opent?",
      "media": {
        "src": "assets/arnhem/moment11_gang_rook.jpeg",
        "caption": "Gang op de brandverdieping onder rook",
        "source": "Aangeleverde afbeelding"
      },
      "systems": [
        "Deurcontrole",
        "Smokestopper"
      ]
    },
    {
      "id": 12,
      "title": "Plattegrond opnieuw beoordelen",
      "role": "Bevelvoerder",
      "roleNote": "Koppel de feitelijke brandontwikkeling aan de objectinformatie die je eerder hebt gekregen.",
      "situation": "De brand is nog beperkt tot één ruimte. Op de eerder verkregen plattegrond staan verschillende brand- en rookwerende scheidingen aangegeven. De BHV kan geen aanvullende uitleg over deze scheidingen geven. Je moet daarom bepalen welke betekenis je aan deze objectinformatie geeft in combinatie met het actuele brand- en rookbeeld.",
      "choices": [
        {
          "id": "A",
          "text": "De aangegeven scheidingen meenemen in de beeldvorming, maar de daadwerkelijke werking blijven toetsen aan het brand- en rookbeeld.",
          "consequence": "De tactiek wordt gevoed door zowel objectinformatie als waarnemingen.",
          "rationale": "Brand- en rookwerende scheidingen kunnen de ontwikkeling vertragen, maar de tekening alleen geeft geen zekerheid over hun actuele werking.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Brand- en rookwerende scheidingen kunnen de ontwikkeling vertragen, maar de tekening alleen geeft geen zekerheid over hun actuele werking."
        },
        {
          "id": "B",
          "text": "Er volledig op vertrouwen dat de brand binnen het aangegeven compartiment blijft.",
          "consequence": "De inzet wordt gebaseerd op de veronderstelde werking van de scheidingen, zonder te controleren of brand en rook zich daadwerkelijk overeenkomstig dat beeld ontwikkelen.",
          "rationale": "Preventieve voorzieningen ondersteunen de beeldvorming, maar vervangen waarneming en verkenning niet.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "Preventieve voorzieningen ondersteunen de beeldvorming, maar vervangen waarneming en verkenning niet."
        },
        {
          "id": "C",
          "text": "De aangegeven scheidingen negeren omdat de BHV ze niet kan uitleggen.",
          "consequence": "Een belangrijke bron van objectinformatie wordt niet benut.",
          "rationale": "Dat de BHV geen toelichting kan geven, maakt de beschikbare bouwkundige informatie niet waardeloos. De informatie kan nog steeds worden meegenomen en aan de praktijk worden getoetst.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "Dat de BHV geen toelichting kan geven, maakt de beschikbare bouwkundige informatie niet waardeloos. De informatie kan nog steeds worden meegenomen en aan de praktijk worden getoetst."
        }
      ],
      "discussionQuestion": "Hoe kun je bouwkundige brand- en rookwerende voorzieningen tactisch benutten zonder er blind op te vertrouwen?",
      "media": {
        "src": "assets/arnhem/plattegrond_7e_brandwerende_scheidingen.jpeg",
        "caption": "Brand- en rookwerende scheidingen op de oefenplattegrond",
        "source": "Aangeleverde plattegrond / didactische intekening"
      },
      "systems": [
        "Kenmerkenschema"
      ],
      "deepDive": "Een plattegrond geeft informatie over hoe het gebouw bedoeld is te functioneren bij brand. Brand- en rookwerende scheidingen kunnen tijd creëren voor brandbestrijding, redding en ontruiming. De feitelijke werking kan echter worden beïnvloed door openstaande deuren, beschadigingen, doorvoeringen of andere omstandigheden. Gebruik de tekening daarom om hypotheses te vormen en toets tijdens de inzet of het gebouw zich ook werkelijk zo gedraagt.",
      "mediaGallery": [
        {
          "src": "assets/arnhem/plattegrond_7e_volledig.png",
          "caption": "Plattegrond 7e verdieping",
          "source": "Oefenplattegrond Arnhem Building"
        }
      ]
    },
    {
      "id": 13,
      "title": "Oprukken op de brandverdieping",
      "role": "Manschappen",
      "roleNote": "Pas je techniek aan op de rook- en warmtecondities die de ploeg aantreft.",
      "situation": "De gang op de 7e verdieping is gevuld met dichte, warme rook. De brandhaard is vanuit het trappenhuis niet zichtbaar. Tijdens het oprukken nemen de thermische omstandigheden merkbaar toe.",
      "choices": [
        {
          "id": "A",
          "text": "De rook- en warmtecondities lezen, passende rookgaskoeling toepassen en na iedere toepassing het effect beoordelen.",
          "consequence": "Bij een effectieve toepassing kunnen de thermische omstandigheden beter beheersbaar worden en kan de ploeg gecontroleerd verder oprukken.",
          "rationale": "Rookgaskoeling is hier onderdeel van veilig en gecontroleerd oprukken en moet steeds worden afgestemd op het actuele rook- en warmtebeeld.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Rookgaskoeling is hier onderdeel van veilig en gecontroleerd oprukken en moet steeds worden afgestemd op het actuele rook- en warmtebeeld."
        },
        {
          "id": "B",
          "text": "Zo laag mogelijk snel oprukken en pas water gebruiken wanneer zichtbare vlammen worden waargenomen.",
          "consequence": "De ploeg wint aanvankelijk tijd, maar de hete rookgassen boven de ploeg worden niet beïnvloed.",
          "rationale": "Zichtbare vlammen zijn niet de enige indicatie voor thermische dreiging.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "Zichtbare vlammen zijn niet de enige indicatie voor thermische dreiging."
        },
        {
          "id": "C",
          "text": "Continu veel water in de rooklaag geven zonder tussentijds het effect te beoordelen.",
          "consequence": "Er wordt veel water gebruikt zonder dat duidelijk is of de rookgascondities verbeteren. Onnodige stoomvorming en verlies van situational awareness kunnen de inzet juist bemoeilijken.",
          "rationale": "De hoeveelheid water is niet op zichzelf bepalend; de toepassing moet passen bij het rookbeeld en het effect moet voortdurend worden beoordeeld.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "De hoeveelheid water is niet op zichzelf bepalend; de toepassing moet passen bij het rookbeeld en het effect moet voortdurend worden beoordeeld."
        }
      ],
      "discussionQuestion": "Waarop baseert een ploeg tijdens het oprukken de keuze wanneer en hoe rookgaskoeling wordt toegepast?",
      "media": {
        "src": "assets/vggm/straalpijp.gif",
        "caption": "Straalpijptechniek en rookgaskoeling",
        "source": "VGGM lesmateriaal"
      },
      "systems": [
        "Rookgaskoeling",
        "Klepel / straalpijp",
        "Laag voortbewegen"
      ],
      "deepDive": "Bij het oprukken door een verrookte gang moet de ploeg voortdurend rookbeeld, warmtebelasting en veranderingen na iedere handeling beoordelen. Rookgaskoeling is geen vaste handeling: techniek, hoeveelheid water en frequentie moeten passen bij de omstandigheden. Na iedere toepassing wordt het effect gelezen; als temperatuur, rookgedrag of stralingswarmte niet reageren zoals verwacht, is dat aanleiding om techniek, positie of tactiek te heroverwegen."
    },
    {
      "id": 14,
      "title": "Verdiepingen boven de brand",
      "role": "Bevelvoerder",
      "roleNote": "Bepaal hoe je omgaat met nog onbekende bezetting boven de brand.",
      "situation": "Wanneer gericht wordt nagevraagd of de 8e en 9e verdieping zijn ontruimd, geeft de BHV aan dat hij dat niet weet. De BHV-organisatie heeft zich tot nu toe alleen gericht op de 7e verdieping. Het is daardoor onbekend of zich op de 8e en 9e verdieping nog personen bevinden.",
      "choices": [
        {
          "id": "A",
          "text": "Extra ploegen opdracht geven de 8e en 9e verdieping te controleren en waar nodig te ontruimen, met een terugmelding per verdieping.",
          "consequence": "De bezetting van beide verdiepingen wordt actief in beeld gebracht en aanwezige personen kunnen gericht naar een bruikbare route worden begeleid.",
          "rationale": "Personen boven de brand vormen een zelfstandige inzetopgave, zeker wanneer rookverspreiding naar het trappenhuis mogelijk is.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Personen boven de brand vormen een zelfstandige inzetopgave, zeker wanneer rookverspreiding naar het trappenhuis mogelijk is."
        },
        {
          "id": "B",
          "text": "Eerst de 8e verdieping controleren en de 9e verdieping later laten volgen.",
          "consequence": "Over de 8e verdieping ontstaat een betrouwbaar beeld, maar de bezetting en omstandigheden op de 9e verdieping blijven voorlopig onbekend.",
          "rationale": "Bij beperkte capaciteit kan dit tijdelijk verdedigbaar zijn, mits deze prioritering bewust wordt gemaakt en de 9e verdieping aantoonbaar als openstaande taak blijft staan.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Bij beperkte capaciteit kan dit tijdelijk verdedigbaar zijn, mits deze prioritering bewust wordt gemaakt en de 9e verdieping aantoonbaar als openstaande taak blijft staan."
        },
        {
          "id": "C",
          "text": "Aannemen dat personen op de hogere verdiepingen zelfstandig naar buiten komen.",
          "consequence": "De daadwerkelijke bezetting van de 8e en 9e verdieping blijft onbekend en er is geen zekerheid dat alle aanwezigen zelfstandig kunnen ontruimen.",
          "rationale": "De BHV heeft geen beeld van deze verdiepingen. Zelfredzaamheid en succesvolle ontruiming kunnen daarom niet zonder verificatie worden aangenomen.",
          "label": "Operationele duiding",
          "quality": -2,
          "deepDive": "De BHV heeft geen beeld van deze verdiepingen. Zelfredzaamheid en succesvolle ontruiming kunnen daarom niet zonder verificatie worden aangenomen."
        }
      ],
      "discussionQuestion": "Wanneer is voor jou voldoende zeker dat de verdiepingen boven de brand veilig zijn, en wie organiseert die controle?",
      "media": {
        "src": "assets/arnhem/moment14.png",
        "caption": "Lift- en trapomgeving",
        "source": "Aangeleverde afbeelding"
      },
      "systems": [
        "CAN",
        "FABCM"
      ],
      "deepDive": "Bij hoogbouw stopt de beeldvorming niet op de brandverdieping. Wanneer de BHV geen betrouwbaar beeld heeft van hogere verdiepingen, blijft dat een openstaande informatie- en inzetopgave. Dat betekent niet automatisch dat iedere verdieping direct door de brandweer moet worden ontruimd; capaciteit, rookontwikkeling, zelfredzaamheid en beschikbare vluchtwegen bepalen de prioriteit. Bewust uitgestelde controles moeten zichtbaar blijven in het incidentbeeld."
    },
    {
      "id": 15,
      "title": "Meerdere taken tegelijk",
      "role": "Bevelvoerder",
      "roleNote": "Stel prioriteiten en beleg taken wanneer de beschikbare capaciteit niet alle processen tegelijk kan afdekken.",
      "situation": "Er lopen inmiddels meerdere processen tegelijk: brandbestrijding, redding, watervoorziening, rookbeheersing en controle van de verdiepingen boven de brand. Niet voor iedere taak is automatisch voldoende capaciteit beschikbaar. Taken die niet bewust worden belegd, kunnen blijven liggen terwijl de situatie verder verandert.",
      "choices": [
        {
          "id": "A",
          "text": "De lopende processen prioriteren, verantwoordelijkheden expliciet beleggen en aanvullende capaciteit organiseren voor taken die anders niet uitvoerbaar zijn.",
          "consequence": "Het wordt duidelijk welke taak prioriteit heeft, wie waarvoor verantwoordelijk is en waar aanvullende capaciteit nodig is.",
          "rationale": "Opschaling is geen doel op zich. Het gaat om voldoende capaciteit voor de zelfstandige processen die daadwerkelijk moeten worden uitgevoerd.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "Opschaling is geen doel op zich. Het gaat om voldoende capaciteit voor de zelfstandige processen die daadwerkelijk moeten worden uitgevoerd."
        },
        {
          "id": "B",
          "text": "Beschikbare ploegen meerdere taken tegelijk laten combineren om alle processen toch op te starten.",
          "consequence": "Meerdere taken worden tegelijk opgepakt, maar verantwoordelijkheden, voortgang en terugmeldingen worden minder overzichtelijk.",
          "rationale": "Kortstondig kan combineren noodzakelijk zijn, maar naarmate taken complexer of tijdkritischer worden neemt de kans toe dat processen onvoldoende aandacht krijgen.",
          "label": "Operationele duiding",
          "quality": -1,
          "deepDive": "Kortstondig kan combineren noodzakelijk zijn, maar naarmate taken complexer of tijdkritischer worden neemt de kans toe dat processen onvoldoende aandacht krijgen."
        },
        {
          "id": "C",
          "text": "Alle capaciteit op de brandverdieping houden totdat de brand uit is.",
          "consequence": "De brandbestrijding krijgt maximale capaciteit, maar andere openstaande processen blijven onbelegd en kunnen ondertussen verslechteren.",
          "rationale": "De brand is niet het enige operationele probleem.",
          "label": "Operationele duiding",
          "quality": -2,
          "deepDive": "De brand is niet het enige operationele probleem."
        }
      ],
      "discussionQuestion": "Hoe bepaal je welke processen direct capaciteit krijgen, welke parallel moeten lopen en welke tijdelijk kunnen wachten?",
      "media": {
        "src": "assets/arnhem/moment15.png",
        "caption": "Coördinatie en taakverdeling",
        "source": "Aangeleverde afbeelding"
      },
      "systems": [
        "CAN",
        "FABCM"
      ],
      "deepDive": "Bij hoogbouw kunnen brandbestrijding, redding, water, rookbeheersing, ontruiming en logistiek ieder eigen capaciteit vragen. Prioriteren betekent bepalen wat tijdkritisch is, wat parallel moet lopen en wat tijdelijk kan wachten. Daarna moet iedere belangrijke taak herkenbaar worden belegd. Extra opschalen is het gevolg van een concrete capaciteitsbehoefte, niet het doel op zichzelf."
    },
    {
      "id": 16,
      "title": "Capaciteit gericht inzetten",
      "role": "Bevelvoerder",
      "roleNote": "Geef beschikbare extra eenheden bewust een taak op basis van het actuele beeld.",
      "situation": "Door de eerdere opschaling komen aanvullende TS’en beschikbaar. Tegelijkertijd lopen nog meerdere processen: brandbestrijding en redding op de 7e verdieping, controle en mogelijke ontruiming van hogere verdiepingen en rookbeheersing in het trappenhuis. Bepaal op basis van het actuele incidentbeeld welke opdrachten de nieuwe eenheden krijgen.",
      "choices": [
        {
          "id": "A",
          "text": "De extra TS’en gericht verdelen over de nog openstaande zelfstandige taken, bijvoorbeeld controle/ontruiming van hogere verdiepingen en rookbeheersing van het trappenhuis.",
          "consequence": "Openstaande processen krijgen herkenbare eigen capaciteit en de ploeg op de brandverdieping hoeft niet meerdere zelfstandige taken tegelijk uit te voeren.",
          "rationale": "De taakverdeling sluit aan op het actuele incidentbeeld en maakt duidelijk wie waarvoor verantwoordelijk is.",
          "label": "Operationele duiding",
          "quality": 1,
          "deepDive": "De taakverdeling sluit aan op het actuele incidentbeeld en maakt duidelijk wie waarvoor verantwoordelijk is."
        },
        {
          "id": "B",
          "text": "Beide extra TS’en naar de 7e verdieping sturen voor extra aanvalskracht.",
          "consequence": "De capaciteit voor brandbestrijding en redding neemt toe, maar andere nog openstaande processen blijven beperkt of onbelegd.",
          "rationale": "Extra aanvalskracht kan noodzakelijk zijn wanneer het brandbeeld daarom vraagt, maar moet worden afgewogen tegen andere zelfstandige inzetopgaven.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Extra aanvalskracht kan noodzakelijk zijn wanneer het brandbeeld daarom vraagt, maar moet worden afgewogen tegen andere zelfstandige inzetopgaven."
        },
        {
          "id": "C",
          "text": "Eén extra TS als algemene reserve beschikbaar houden zonder deze direct aan een concrete taak te koppelen.",
          "consequence": "Er blijft reserve beschikbaar, maar tegelijkertijd worden aanwezige openstaande taken niet met die capaciteit ondersteund.",
          "rationale": "Reserve houden kan bewust zinvol zijn, maar alleen wanneer daar een concrete reden voor is en urgente openstaande taken voldoende zijn afgedekt.",
          "label": "Operationele duiding",
          "quality": 0,
          "deepDive": "Reserve houden kan bewust zinvol zijn, maar alleen wanneer daar een concrete reden voor is en urgente openstaande taken voldoende zijn afgedekt."
        }
      ],
      "discussionQuestion": "Hoe vertaal je het actuele incidentbeeld naar concrete opdrachten voor nieuw aangekomen eenheden?",
      "media": {
        "src": "assets/arnhem/moment16.png",
        "caption": "Extra eenheden bij de inzet",
        "source": "Aangeleverde afbeelding"
      },
      "systems": [
        "CAN",
        "FABCM",
        "Smokestopper"
      ],
      "deepDive": "Opschalen levert pas operationele meerwaarde op wanneer nieuw aangekomen eenheden een duidelijke opdracht krijgen. De actuele status van brandbestrijding, redding, water, rookbeheersing en ontruiming bepaalt waar capaciteit nodig is. Een goede opdracht maakt duidelijk wat het doel is, welk gebied of proces bij de eenheid hoort en welke terugmelding wordt verwacht."
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
        "BHV-informatie actief uitvragen",
        "Plattegrond als hypothese gebruiken, niet als zekerheid",
        "Onbekende bezetting van hogere verdiepingen zichtbaar houden",
        "Terugmeldingen koppelen aan het actuele incidentbeeld"
      ]
    },
    {
      "title": "Tactiek",
      "question": "Bleef je tactiek passen bij het actuele incidentbeeld?",
      "points": [
        "Welke zelfstandige processen ontstonden naast de brandbestrijding?",
        "Schaalde je op vanwege concrete taken of alleen omdat het incident groot voelde?"
      ]
    },
    {
      "title": "Redding & ontruiming",
      "question": "Welke personen werden bedreigd en hoe bepaalde je de prioriteiten?",
      "points": [
        "Een gelokaliseerd slachtoffer is nog geen georganiseerd reddingsplan",
        "Route, deurmanagement, vluchtmasker, bluswater en transport horen bij dezelfde reddingsopgave",
        "Onbekende bezetting boven de brand blijft een openstaande taak"
      ]
    },
    {
      "title": "Bluswater & voorzieningen",
      "question": "Waren de voorwaarden voor de gekozen inzet daadwerkelijk aanwezig?",
      "points": [
        "Storing herkennen en systematisch onderzoeken",
        "Parallel een alternatief organiseren",
        "Een voorziening op tekening is pas operationeel beschikbaar wanneer de werking in de praktijk is vastgesteld"
      ]
    },
    {
      "title": "Rook & vluchtwegen",
      "question": "Hoe heb je voorkomen dat rookverspreiding een tweede probleem werd?",
      "points": [
        "Rook in het trappenhuis als zelfstandig tactisch probleem herkennen",
        "Effect van smokestopper of overdruk controleren",
        "Maatregel beoordelen op effect, niet op uitvoering alleen"
      ]
    },
    {
      "title": "Organisatie & continuïteit",
      "question": "Waren taken, capaciteit, communicatie en heroverweging voldoende georganiseerd?",
      "points": [
        "Wie is waarvoor verantwoordelijk?",
        "Wat is het doel van de opdracht?",
        "Welke terugmelding wordt verwacht?"
      ]
    }
  ],
  "closingQuestions": [
    "Welke beslissing zou je hetzelfde nemen, welke zou je anders nemen en welke informatie had je eerder willen hebben?",
    "Wat ga je na deze casus bij een echte hoogbouwbrand eerder herkennen, eerder vragen of eerder organiseren?"
  ]
};
