window.SCENARIO = {
  "meta": {
    "title": "Hoogbouwcasus – woningbrand op hoogte",
    "subtitle": "Interactieve oefencasus voor bevelvoerder en manschappen",
    "status": "Concept • fictief gebouw • niet vastgesteld beleid",
    "building": "Fictief woongebouw van circa 76 meter / 21 bouwlagen",
    "principles": [
      "Keuzes zijn bewust plausibel en geven niet vooraf prijs wat verwacht wordt.",
      "Na iedere keuze volgt eerst het operationele gevolg; de uitleg is daarna optioneel te openen.",
      "VRICOL wordt uitsluitend gebruikt als didactisch vergelijkingsmodel.",
      "Beslissingen binnen liggen bij de manschappen, mits veilig en verantwoord en gedeeld/getoetst met de bevelvoerder.",
      "Alle nare uitkomsten zijn mogelijk wanneer keuzes en omstandigheden daar logisch toe leiden."
    ]
  },
  "nodes": [
    {
      "id": 1,
      "title": "Aankomst en eerste verdeling",
      "situation": "14:32. Lichte grijze rook uit een raam op verdieping 14. Beheerder meldt dat de brandweerliften beschikbaar zijn. Een bewoner zegt dat mogelijk nog iemand in de brandwoning aanwezig is. Wind is voelbaar aan de brandgevel.",
      "choices": [
        {
          "id": "A",
          "text": "Aanvalsploeg direct met blus- en toetredingsmateriaal naar verdieping 12; chauffeur verzamelt beneden objectinformatie.",
          "consequence": "Ploeg wint tijd richting mogelijke redding, maar gaat omhoog voordat het inzettrappenhuis, de stijgleiding en windinvloed voldoende zijn bevestigd.",
          "rationale": "Verdedigbaar vanuit reddingsdruk, maar kwetsbaar. Laat situatiebeeld -1 en tijd +0; bij latere verkeerde trapkeuze ontstaat extra tijdverlies.",
          "label": "Verdedigbaar maar kwetsbaar",
          "quality": -1
        },
        {
          "id": "B",
          "text": "Eerste ploeg naar verdieping 12 voor verkenning; tweede ploeg blijft beneden totdat stijgleiding en inzettrappenhuis zijn bevestigd.",
          "consequence": "Er ontstaat snel beeld op hoogte én beneden blijft capaciteit beschikbaar voor objectinformatie en water.",
          "rationale": "Meest robuuste start. Situatiebeeld +1 zonder veel tijdverlies.",
          "label": "Sterk",
          "quality": 1
        },
        {
          "id": "C",
          "text": "Eerst bluswatervoorziening en objectinformatie volledig organiseren; daarna pas verticaal verplaatsen.",
          "consequence": "Water en objectkennis worden sterk georganiseerd, maar de mogelijke redding en snelle verkenning worden uitgesteld.",
          "rationale": "Veilig maar mogelijk te traag. Tijd +2; bij werkelijk slachtoffer kan dit later negatief wegen.",
          "label": "Verdedigbaar, met aandachtspunten",
          "quality": 0
        }
      ],
      "role": "Bevelvoerder",
      "roleNote": "Eerste inzetkader en taakverdeling."
    },
    {
      "id": 2,
      "title": "Gebruik van de brandweerlift",
      "situation": "De lift is beschikbaar. Op het paneel is geen storing zichtbaar. De melding blijft “woningbrand, mogelijk persoon binnen”.",
      "choices": [
        {
          "id": "A",
          "text": "Lift gebruiken tot verdieping 12 en de lift onder brandweerbeheer houden.",
          "consequence": "Ploeg bereikt de inzetverdieping met beperkte fysieke belasting.",
          "rationale": "Past bij de bronlijn: lift gebruiken, onder beheer van de brandweer en stoppen op -2.",
          "label": "Sterk",
          "quality": 1
        },
        {
          "id": "B",
          "text": "Lift gebruiken tot verdieping 13 om één verdieping loopafstand te besparen.",
          "consequence": "Ploeg komt dichter bij de brand, maar ook dichter bij rook, water en mogelijke bedreiging van de lift.",
          "rationale": "Ongunstig. Liftgebruik te dicht op de brand verhoogt risico en verkleint herstelruimte.",
          "label": "Ongunstig in dit scenario",
          "quality": -2
        },
        {
          "id": "C",
          "text": "Lift niet gebruiken; hele ploeg gaat met materiaal via het trappenhuis.",
          "consequence": "De ploeg blijft onafhankelijk van lifttechniek, maar verliest veel tijd en energie vóór de inzet.",
          "rationale": "Kan bij liftuitval nodig zijn, maar bij een betrouwbare brandweerlift is dit inefficiënt; ploegbelasting +2, tijd +2.",
          "label": "Verdedigbaar, met aandachtspunten",
          "quality": 0
        }
      ],
      "role": "Bevelvoerder",
      "roleNote": "Toegangsstrategie. Manschappen blijven verantwoordelijk voor veilige uitvoering en terugmelding."
    },
    {
      "id": 3,
      "title": "Keuze van het inzettrappenhuis op -2",
      "situation": "Op verdieping 12 zijn twee trappenhuizen. In trappenhuis A zie je direct een afnamepunt. In trappenhuis B niet. Beide lijken rookvrij.",
      "choices": [
        {
          "id": "A",
          "text": "Trappenhuis A als inzettrappenhuis kiezen; B zo veel mogelijk beschikbaar houden voor ontvluchting.",
          "consequence": "Afnamepunt en route naar de brand zijn logisch gekoppeld; vluchtfunctie kan van inzet worden gescheiden.",
          "rationale": "Sterke keuze. Past bij wokkeltrappenhuis-/afnamepuntlogica uit VRR.",
          "label": "Sterk",
          "quality": 1
        },
        {
          "id": "B",
          "text": "Trappenhuis B kiezen omdat dit aan de rustige zijde van het gebouw ligt.",
          "consequence": "Op verdieping 13 blijkt pas het afnamepunt te zitten; omloop en slangvoering worden lastiger.",
          "rationale": "Plausibel vanuit rook/wind, maar onvoldoende gekoppeld aan bluswater. Tijd +1; logistiek -1.",
          "label": "Verdedigbaar, met aandachtspunten",
          "quality": 0
        },
        {
          "id": "C",
          "text": "Beide trappenhuizen tegelijk gebruiken: één ploeg per trap.",
          "consequence": "Verkenning gaat sneller, maar de scheiding tussen inzet- en vluchttrappenhuis verdwijnt en beide trappen worden belast.",
          "rationale": "Kwetsbaar. Vluchtwegbescherming -1; later spontane ontruiming wordt lastiger.",
          "label": "Verdedigbaar maar kwetsbaar",
          "quality": -1
        }
      ],
      "role": "Manschappen",
      "roleNote": "Beslissing binnen: veilig en verantwoord handelen, keuze direct delen/toetsen met bevelvoerder."
    },
    {
      "id": 4,
      "title": "Positie van het bruggenhoofd",
      "situation": "Op verdieping 12 is een ruim voorportaal bij de lift. CO-meter geeft 0 ppm. Op verdieping 13 ruik je lichte rook bij de deur naar de gang.",
      "choices": [
        {
          "id": "A",
          "text": "Bruggenhoofd op 12 inrichten en daar CO continu bewaken.",
          "consequence": "Veilige, bereikbare basis op -2 met koppeling naar lift, logistiek en aanval.",
          "rationale": "Sterke keuze; bruggenhoofd operationeel +1.",
          "label": "Sterk",
          "quality": 1
        },
        {
          "id": "B",
          "text": "Bruggenhoofd op 13 inrichten om dichter bij de ploeg te zitten.",
          "consequence": "Kortere aanvoerroute, maar de locatie ligt dichter bij rook en mogelijke brand-/rookverspreiding.",
          "rationale": "Risicovol. Bij verslechtering kan het bruggenhoofd snel bedreigd raken.",
          "label": "Verdedigbaar maar kwetsbaar",
          "quality": -1
        },
        {
          "id": "C",
          "text": "Nog geen bruggenhoofd; eerst contact met brandwoning en slachtofferinformatie bevestigen.",
          "consequence": "Meer directe focus op brand/slachtoffer, maar commandovoering en back-up op hoogte blijven achter.",
          "rationale": "Kwetsbaar bij scenario 2/3. Bruggenhoofd blijft 0 en logistiek loopt later achter.",
          "label": "Verdedigbaar maar kwetsbaar",
          "quality": -1
        }
      ],
      "role": "Bevelvoerder",
      "roleNote": "Organisatie van leiding en back-up op hoogte."
    },
    {
      "id": 5,
      "title": "Deurmanagement en smokestopper",
      "situation": "De ploeg bereikt de gang op verdieping 14. Er is rook in de gang maar nog zicht. De voordeur van de brandwoning is dicht; achter de deur is warmte voelbaar.",
      "choices": [
        {
          "id": "A",
          "text": "Smokestopper plaatsen en deur gecontroleerd openen zodra blusmiddel inzetgereed is.",
          "consequence": "Rookuitstroom naar de gang wordt beperkt; ploeg behoudt controle over de opening.",
          "rationale": "Sterke keuze; deurmanagement +1, vluchtweg beschermd.",
          "label": "Sterk",
          "quality": 1
        },
        {
          "id": "B",
          "text": "Deur kort openen voor snelle observatie en direct weer sluiten; smokestopper pas daarna plaatsen.",
          "consequence": "Snelle informatie, maar een korte opening kan bij wind/druk al een duidelijke flowpath veroorzaken.",
          "rationale": "Verdedigbaar als verkenningsactie, maar kwetsbaar; wind_flowpath +1.",
          "label": "Verdedigbaar maar kwetsbaar",
          "quality": -1
        },
        {
          "id": "C",
          "text": "Deur volledig openen voor zicht en snelle toetreding.",
          "consequence": "Rook en hete gassen stromen de gang in; het voorportaal wordt merkbaar rokeriger.",
          "rationale": "Ongunstig; deurmanagement -2, rook_co +2. Dit gevolg werkt later door.",
          "label": "Ongunstig in dit scenario",
          "quality": -2
        }
      ],
      "role": "Manschappen",
      "roleNote": "Beslissing binnen: deurmanagement op basis van actuele omstandigheden; delen/toetsen met bevelvoerder."
    },
    {
      "id": 6,
      "title": "Wind Driven Fire herkennen",
      "situation": "Buiten meldt de chauffeur: wind staat rechtstreeks op het geopende raam van de brandwoning. Binnen ziet de ploeg weinig rook uit de raamzijde wegtrekken; bij de deuropening neemt hitte sterk toe.",
      "choices": [
        {
          "id": "A",
          "text": "Ploeg terug achter de deur, extra koelend vermogen/back-up gereed en toetreding opnieuw beoordelen.",
          "consequence": "De flowpath wordt beperkt en de ploeg herpositioneert vóór een mogelijke windgedreven aanval.",
          "rationale": "Sterke keuze bij aanwijzingen voor Wind Driven Fire.",
          "label": "Sterk",
          "quality": 1
        },
        {
          "id": "B",
          "text": "Binnenaanval voortzetten omdat het brandcompartiment nog bereikbaar is.",
          "consequence": "Bij het verder openen van de deur neemt de hete stroming richting gang sterk toe; ploeg moet terugtrekken.",
          "rationale": "Ongunstig. Kans op nare uitkomst stijgt sterk, zeker als deurmanagement eerder slecht was.",
          "label": "Ongunstig in dit scenario",
          "quality": -2
        },
        {
          "id": "C",
          "text": "Van buiten proberen de brand vanaf een redvoertuig te bereiken terwijl binnenploeg positie houdt.",
          "consequence": "Externe koeling kan relevant zijn, maar hoogte/bereik en coördinatie zijn onzeker; binnenploeg blijft ondertussen aan risico blootgesteld.",
          "rationale": "Plausibel, maar niet vanzelfsprekend haalbaar. Alleen gunstig als bereik en communicatie bevestigd zijn.",
          "label": "Verdedigbaar, met aandachtspunten",
          "quality": 0
        }
      ],
      "role": "Manschappen",
      "roleNote": "Herkenning en directe veilige reactie binnen; terugmelden en tactische betekenis toetsen met bevelvoerder."
    },
    {
      "id": 7,
      "title": "Blusstrategie en water",
      "situation": "De brand lijkt ontwikkeld. De stijgleiding is beschikbaar; de tweede TS is gereed. De oude VGGM-lesstof bespreekt HD/LD; de VRR-lijn benadrukt voldoende koelend vermogen en back-up.",
      "choices": [
        {
          "id": "A",
          "text": "Twee LD-aanvalsmogelijkheden opbouwen via stijgleiding voordat opnieuw wordt toegetreden.",
          "consequence": "Meer slagkracht en back-up, maar kost extra minuten.",
          "rationale": "Robuuste keuze bij ontwikkelde brand; bluswater +2, tijd +1.",
          "label": "Afweging",
          "quality": 0
        },
        {
          "id": "B",
          "text": "Met één snel beschikbare lijn toetreden en tweede lijn tijdens inzet laten opbouwen.",
          "consequence": "Sneller aan de brand, maar eerste ploeg start met minder reserve.",
          "rationale": "Verdedigbaar bij beheersbaar beeld; riskanter bij scenario 2/3 of WDF.",
          "label": "Verdedigbaar, met aandachtspunten",
          "quality": 0
        },
        {
          "id": "C",
          "text": "Kiezen voor een lichtere/sneller hanteerbare oplossing omdat de brandwoning klein is.",
          "consequence": "Ploeg is snel inzetbaar, maar koelend vermogen kan onvoldoende zijn voor een ontwikkelde/windgedreven brand.",
          "rationale": "Ongunstig als brandontwikkeling hoger is dan gedacht; bluswater -1.",
          "label": "Ongunstig in dit scenario",
          "quality": -2
        }
      ],
      "role": "Bevelvoerder",
      "roleNote": "Tactische randvoorwaarden en blusvermogen."
    },
    {
      "id": 8,
      "title": "Scenarioherkenning",
      "situation": "Sprinkler is geactiveerd maar de brand is niet onder controle. Rook blijft grotendeels binnen woning en gang; trappenhuizen zijn nog rookarm.",
      "choices": [
        {
          "id": "A",
          "text": "Beeld behandelen als scenario 1: snelle offensieve binneninzet.",
          "consequence": "De inzet gaat snel, maar onderschat dat sprinkler de brand niet beheerst.",
          "rationale": "Te optimistisch: scenario feitelijk richting 2.",
          "label": "Afweging",
          "quality": 0
        },
        {
          "id": "B",
          "text": "Beeld behandelen als scenario 2: defensief binnen organiseren, daarna offensief binnen.",
          "consequence": "Bruggenhoofd, twee stralen en trappenhuisbescherming worden leidend.",
          "rationale": "Beste aansluiting op het actuele beeld.",
          "label": "Afweging",
          "quality": 0
        },
        {
          "id": "C",
          "text": "Direct uitgaan van scenario 3 en prioriteit volledig naar ontruiming verschuiven.",
          "consequence": "Veel capaciteit gaat naar ontruiming terwijl vluchtwegen nog bruikbaar zijn en brand nog compartimentsgebonden lijkt.",
          "rationale": "Voorzichtig, maar mogelijk disproportioneel; brandbestrijding kan vertragen.",
          "label": "Verdedigbaar, met aandachtspunten",
          "quality": 0
        }
      ],
      "role": "Bevelvoerder",
      "roleNote": "Scenarioherkenning. VRICOL wordt uitsluitend als didactisch vergelijkingsmodel gebruikt."
    },
    {
      "id": 9,
      "title": "Mogelijk slachtoffer in de brandwoning",
      "situation": "Een buurvrouw meldt nu dat de bewoner mogelijk al vóór de brand naar buiten is gegaan. Zekerheid ontbreekt. Brand is nog niet onder controle.",
      "choices": [
        {
          "id": "A",
          "text": "Redding direct laten voorgaan op verdere opbouw van interventiemaatregelen.",
          "consequence": "Ploeg gaat eerder de bedreigde ruimte in met onvolledig ingerichte back-up.",
          "rationale": "Menselijk begrijpelijk, maar bij scenario 2/3 volgens VRR pas nadat interventiemaatregelen zijn getroffen.",
          "label": "Afweging",
          "quality": 0
        },
        {
          "id": "B",
          "text": "Eerst interventievoorwaarden afronden; daarna gerichte zoek-/reddingsactie combineren met aanval.",
          "consequence": "Enkele minuten later toetreding, maar met meer controle en slagkracht.",
          "rationale": "Sterke keuze bij scenario 2.",
          "label": "Sterk",
          "quality": 1
        },
        {
          "id": "C",
          "text": "Geen reddingsactie meer plannen omdat slachtofferinformatie onzeker is.",
          "consequence": "Capaciteit blijft op brandbestrijding, maar er blijft een reële kans op een gemiste persoon.",
          "rationale": "Te stellig. Onzekerheid is geen bevestiging van afwezigheid.",
          "label": "Afweging",
          "quality": 0
        }
      ],
      "role": "Bevelvoerder",
      "roleNote": "Afweging reddingsdruk versus inzetvoorwaarden, gevoed door terugmeldingen van binnen."
    },
    {
      "id": 10,
      "title": "Rookmelding in het trappenhuis",
      "situation": "Een ploeg meldt lichte rook/CO op verdieping 15 in het trappenhuis dat voor de brandweerinzet wordt gebruikt. Het andere trappenhuis is nog rookvrij.",
      "choices": [
        {
          "id": "A",
          "text": "Trappenhuisbescherming expliciet organiseren; deuren/portalen controleren en CO boven en onder brand monitoren.",
          "consequence": "Rookverspreiding wordt als zelfstandig probleem aangepakt.",
          "rationale": "Sterke VRICOL-keuze: Compartimentering krijgt prioriteit.",
          "label": "Sterk",
          "quality": 1
        },
        {
          "id": "B",
          "text": "Brandaanval versnellen; bron wegnemen zal het rookprobleem vanzelf oplossen.",
          "consequence": "Mogelijk sneller brandmeester, maar rookverspreiding kan ondertussen vluchtwegen aantasten.",
          "rationale": "Te eenzijdig; rook is een zelfstandig tactisch probleem.",
          "label": "Afweging",
          "quality": 0
        },
        {
          "id": "C",
          "text": "Beide trappenhuizen openen om rook sneller kwijt te raken.",
          "consequence": "Luchtstromen worden onvoorspelbaarder en mogelijk wordt stack/flowpath versterkt.",
          "rationale": "Ongunstig; ventilatie zonder gecontroleerde aan- en afvoer is riskant.",
          "label": "Ongunstig in dit scenario",
          "quality": -2
        }
      ],
      "role": "Manschappen",
      "roleNote": "Waarneming binnen en directe veilige maatregelen; terugmelden zodat bevelvoerder inzet kan organiseren."
    },
    {
      "id": 11,
      "title": "Spontane ontruiming",
      "situation": "Bewoners van verdieping 16 en 17 komen zelfstandig naar beneden. Zij gebruiken deels het inzettrappenhuis omdat dit voor hen het dichtstbij is.",
      "choices": [
        {
          "id": "A",
          "text": "Bewoners via inzettrappenhuis laten doorlopen; brandweer past bewegingen hierop aan.",
          "consequence": "Directe doorstroming, maar inzet en vlucht mengen en het trappenhuis wordt drukker.",
          "rationale": "Kwetsbaar. Kan bij laag rookniveau tijdelijk, maar belemmert inzet en bescherming.",
          "label": "Verdedigbaar maar kwetsbaar",
          "quality": -1
        },
        {
          "id": "B",
          "text": "Trappenhuisbescherming laat bewoners gecontroleerd oversteken naar het rookvrije trappenhuis.",
          "consequence": "Vlucht en inzet worden gescheiden; vraagt extra personeel en goede communicatie.",
          "rationale": "Sterke keuze als route aantoonbaar veilig is.",
          "label": "Sterk",
          "quality": 1
        },
        {
          "id": "C",
          "text": "Bewoners terug naar hun woningen sturen totdat brand onder controle is.",
          "consequence": "Beweging stopt, maar je stuurt mensen terug zonder volledige zekerheid over rook-/brandontwikkeling.",
          "rationale": "Risicovol en te absoluut; bronmateriaal benadrukt juist dat spontane ontruiming moet worden meegenomen.",
          "label": "Te absoluut",
          "quality": -2
        }
      ],
      "role": "Bevelvoerder",
      "roleNote": "Coördinatie van spontane ontruiming en scheiding van inzet-/vluchtfunctie."
    },
    {
      "id": 12,
      "title": "Stack-effect: onverwachte CO",
      "situation": "CO wordt nu gemeten op verdieping 18, terwijl daar geen zichtbare rook is. Buiten is het duidelijk koeler dan binnen. Beneden staat een reguliere toegangsdeur langdurig open voor materiaaltransport.",
      "choices": [
        {
          "id": "A",
          "text": "Toegangsdeur sluiten/gebruik beperken, transport via gecontroleerde toegang organiseren en CO-trend blijven monitoren.",
          "consequence": "Verticale luchtstroom wordt minder gevoed; rook/CO-verspreiding kan afnemen.",
          "rationale": "Sterke keuze bij aanwijzingen voor positief stack-effect.",
          "label": "Sterk",
          "quality": 1
        },
        {
          "id": "B",
          "text": "Extra ventilator beneden plaatsen om de rook naar boven te drukken.",
          "consequence": "Drukverhoudingen worden verder beïnvloed zonder volledig inzicht in afvoerroute.",
          "rationale": "Ongunstig; eigen ventilatie alleen gecontroleerd toepassen.",
          "label": "Ongunstig in dit scenario",
          "quality": -2
        },
        {
          "id": "C",
          "text": "CO-melding als meetafwijking behandelen omdat er geen zichtbare rook is.",
          "consequence": "De oorzaak blijft onbenoemd; vluchtweg kan ongemerkt verslechteren.",
          "rationale": "Ongunstig; CO boven/onder brand is juist een signaal om stack-effect mee te nemen.",
          "label": "Ongunstig in dit scenario",
          "quality": -2
        }
      ],
      "role": "Manschappen",
      "roleNote": "Waarneming binnen en beheersing van openingen; delen/toetsen met bevelvoerder."
    },
    {
      "id": 13,
      "title": "Communicatie verslechtert",
      "situation": "C2000-contact tussen verdieping 14 en buiten valt geregeld weg. Intercom tussen verdiepingen en commandoruimte functioneert.",
      "choices": [
        {
          "id": "A",
          "text": "Intercomfunctie actief inzetten en vaste terugmeldroute via commandoruimte/bruggenhoofd organiseren.",
          "consequence": "Communicatie wordt redundanter en beter gestructureerd.",
          "rationale": "Sterke keuze; sluit aan op VRR.",
          "label": "Sterk",
          "quality": 1
        },
        {
          "id": "B",
          "text": "Doorgaan met C2000 en alleen bij volledig wegvallen overschakelen.",
          "consequence": "Ploegen blijven met haperende verbinding werken; cruciale meldingen kunnen vertragen.",
          "rationale": "Kwetsbaar; communicatie is één van de drie kritieke randvoorwaarden.",
          "label": "Verdedigbaar maar kwetsbaar",
          "quality": -1
        },
        {
          "id": "C",
          "text": "Een manschap als fysieke boodschapper tussen bruggenhoofd en begane grond inzetten.",
          "consequence": "Kan informatie overbrengen, maar kost veel tijd en capaciteit en verhoogt fysieke belasting.",
          "rationale": "Noodoplossing, niet eerste keuze zolang intercom beschikbaar is.",
          "label": "Afweging",
          "quality": 0
        }
      ],
      "role": "Manschappen",
      "roleNote": "Binnen passende communicatieroute kiezen en onmiddellijk delen met bevelvoerder."
    },
    {
      "id": 14,
      "title": "Water in de liftschacht",
      "situation": "Op verdieping 12 wordt water zichtbaar dat richting de brandweerliftschacht loopt. De lift functioneert nog normaal.",
      "choices": [
        {
          "id": "A",
          "text": "Lift direct buiten gebruik nemen voor brandweertransport en alternatieve logistiek organiseren.",
          "consequence": "Verticaal transport vertraagt, maar risico op onverwachte liftuitval wordt beperkt.",
          "rationale": "Sterke keuze: zichtbare waterinstroom maakt lift onbetrouwbaar.",
          "label": "Sterk",
          "quality": 1
        },
        {
          "id": "B",
          "text": "Lift blijven gebruiken zolang er geen storing op het paneel staat.",
          "consequence": "Logistiek blijft snel, maar de lift kan zonder waarschuwing uitvallen.",
          "rationale": "Ongunstig; wachten op storing is te laat.",
          "label": "Ongunstig in dit scenario",
          "quality": -2
        },
        {
          "id": "C",
          "text": "Lift alleen nog voor materiaal gebruiken, niet voor mensen.",
          "consequence": "Mensenrisico wordt verminderd, maar vastlopend materiaal kan de schacht/lift alsnog blokkeren en logistiek afhankelijk houden.",
          "rationale": "Nog steeds kwetsbaar; bronlijn adviseert niet gebruiken bij bedreiging door water.",
          "label": "Verdedigbaar maar kwetsbaar",
          "quality": -1
        }
      ],
      "role": "Manschappen",
      "roleNote": "Veilige beslissing bij veranderde liftcondities; melden en laten toetsen door bevelvoerder."
    },
    {
      "id": 15,
      "title": "Logistieke achterstand",
      "situation": "Na circa 25 minuten zijn meerdere ademluchtcilinders gebruikt. Ploegen melden vermoeidheid. Het bruggenhoofd vraagt reserveflessen, drinken en aflossing.",
      "choices": [
        {
          "id": "A",
          "text": "Logistieke hub opschalen, schoon/vuil scheiden en aflossing/ademlucht vooraf positioneren.",
          "consequence": "Inzet kan gecontroleerd worden voortgezet; ploegbelasting stabiliseert.",
          "rationale": "Sterke keuze; Logistiek is een volwaardige VRICOL-taak.",
          "label": "Sterk",
          "quality": 1
        },
        {
          "id": "B",
          "text": "Eerst brandmeester maken; logistiek pas daarna herstellen.",
          "consequence": "Korte termijn meer mensen aan de aanval, maar risico op plotseling tekort of uitgeputte ploegen.",
          "rationale": "Kwetsbaar; logistiek probleem kan de inzet abrupt stoppen.",
          "label": "Verdedigbaar maar kwetsbaar",
          "quality": -1
        },
        {
          "id": "C",
          "text": "Minder materiaal naar boven sturen om belasting van het trappenhuis te verminderen.",
          "consequence": "Transportdruk daalt, maar essentiële ademlucht/back-up kan ontbreken.",
          "rationale": "Alleen passend als strikt op noodzakelijke middelen wordt gestuurd; niet als bezuiniging op essentiële ondersteuning.",
          "label": "Afweging",
          "quality": 0
        }
      ],
      "role": "Bevelvoerder",
      "roleNote": "Logistiek en continuïteit van de inzet."
    },
    {
      "id": 16,
      "title": "Verslechtering naar scenario 3",
      "situation": "Rook treedt nu buiten het oorspronkelijke compartiment. Een deur naar de gang sluit niet goed. CO stijgt in het inzettrappenhuis. Brand is nog niet volledig onder controle.",
      "choices": [
        {
          "id": "A",
          "text": "Scenario herclassificeren naar 3; vluchtwegbeveiliging en ontruiming voorrang geven, interventie herordenen.",
          "consequence": "De inzet verschuift zichtbaar van brandhaard naar bescherming vluchtwegen en bewoners.",
          "rationale": "Sterke keuze; past bij VRR commanders intent scenario 3.",
          "label": "Sterk",
          "quality": 1
        },
        {
          "id": "B",
          "text": "Huidige aanval ongewijzigd voortzetten omdat er al voortgang is geboekt.",
          "consequence": "Brandbestrijding blijft gefocust, maar vluchtweg kan verder verslechteren.",
          "rationale": "Ongunstig: scenarioverandering wordt genegeerd.",
          "label": "Ongunstig in dit scenario",
          "quality": -2
        },
        {
          "id": "C",
          "text": "Alle binnenploegen terugtrekken en volledig defensief buiten gaan.",
          "consequence": "Eigen veiligheid neemt toe, maar redding/ontruiming en beschermbare vluchtwegen worden mogelijk te vroeg opgegeven.",
          "rationale": "Kan nodig zijn bij onhoudbare omstandigheden, maar op basis van dit beeld nog te absoluut.",
          "label": "Te absoluut",
          "quality": -2
        }
      ],
      "role": "Bevelvoerder",
      "roleNote": "Tactische herclassificatie op basis van actuele binnen- en buiteninformatie."
    },
    {
      "id": 17,
      "title": "Geveluitbreiding / scenario 4-kans",
      "situation": "Buiten ziet men vlammen langs de gevel omhoog trekken. Rook bereikt ramen van hogere verdiepingen. De brand is vanaf straatniveau niet effectief bereikbaar.",
      "choices": [
        {
          "id": "A",
          "text": "Scenario 4 aannemen: totale ontruiming starten, verdiepingen boven brand eerst, trappenhuizen beschermen.",
          "consequence": "Capaciteit verschuift naar het veilig wegbrengen van bewoners; brandbestrijding wordt secundair.",
          "rationale": "Sterke keuze als gevelbrand uitbreidt.",
          "label": "Sterk",
          "quality": 1
        },
        {
          "id": "B",
          "text": "Eerst proberen de gevelbrand te stoppen vanuit de brandverdieping; ontruiming gefaseerd houden.",
          "consequence": "Mogelijk brandremmend effect, maar kost tijd terwijl meerdere verdiepingen tegelijk bedreigd kunnen worden.",
          "rationale": "Risicovol; in VRR scenario 4 gaat totale ontruiming vóór interventie.",
          "label": "Verdedigbaar maar kwetsbaar",
          "quality": -1
        },
        {
          "id": "C",
          "text": "Ontruiming beperken tot brandverdieping en twee erboven om paniek te voorkomen.",
          "consequence": "Minder belasting in trappenhuizen, maar bewoners hogerop kunnen door verdere geveluitbreiding verrast worden.",
          "rationale": "Ongunstig bij daadwerkelijk uitbreidende gevelbrand.",
          "label": "Ongunstig in dit scenario",
          "quality": -2
        }
      ],
      "role": "Bevelvoerder",
      "roleNote": "Keuze bij mogelijke geveluitbreiding en ontruimingsstrategie."
    },
    {
      "id": 18,
      "title": "Laatste heroverweging",
      "situation": "De inzet duurt 35+ minuten. Afhankelijk van eerdere keuzes zijn vluchtwegen, logistiek en liftstatus verschillend. De brand kan inmiddels onder controle zijn óf de situatie kan verder zijn geëscaleerd.",
      "choices": [
        {
          "id": "A",
          "text": "Expliciet heroverwegingsmoment: scenario, constructieve/WBDBO-informatie, vluchtwegen, personeelsbelasting en ontruiming opnieuw beoordelen.",
          "consequence": "De commandovoering maakt de resterende risico’s zichtbaar en past inzet waar nodig aan.",
          "rationale": "Sterke afsluitende beslisstap; tijdsbewustzijn als besluitondersteuning.",
          "label": "Sterk",
          "quality": 1
        },
        {
          "id": "B",
          "text": "Doorgaan volgens het bestaande plan zolang er geen nieuwe noodmelding komt.",
          "consequence": "Rust in de operatie, maar sluipende risico’s kunnen onopgemerkt blijven.",
          "rationale": "Kwetsbaar bij langlopende hoogbouwinzet.",
          "label": "Verdedigbaar maar kwetsbaar",
          "quality": -1
        },
        {
          "id": "C",
          "text": "Automatisch alle binneninzet beëindigen omdat de inzet lang duurt.",
          "consequence": "Veiligheid wordt zeer conservatief benaderd, maar tijd alleen is geen voldoende reden zonder actuele risicobeoordeling.",
          "rationale": "Te absoluut; tijdlijn ondersteunt heroverweging, niet automatisch terugtrekken.",
          "label": "Te absoluut",
          "quality": -2
        }
      ],
      "role": "Bevelvoerder",
      "roleNote": "Expliciete heroverweging van de totale inzet."
    }
  ],
  "glossary": {
    "Stack-effect": {
      "definition": "Verticale luchtstroming door temperatuurverschil tussen binnen- en buitenlucht. In een warmer gebouw is een opwaartse stroming waarschijnlijker; in een sterk gekoeld gebouw kan de richting omkeren. Openingen kunnen daardoor rook/CO over meerdere verdiepingen transporteren.",
      "operational": "Let op deuren, seizoen/temperatuur, rook/CO boven én onder de brand en onverwachte flowpaths."
    },
    "Reverse stack": {
      "definition": "Omgekeerde stack-richting, bijvoorbeeld wanneer het gebouw binnen koeler is dan buiten.",
      "operational": "Rook/CO kan juist omlaag worden verplaatst; neem dit mee in ontruimingsrichting en ventilatie."
    },
    "Coandă-effect": {
      "definition": "Rook en hete gassen kunnen langs de gevel omhoog bewegen en de gevel als het ware volgen.",
      "operational": "Kijk bij buitenverkenning altijd naar verdiepingen boven de brand en naar luchtinlaten/gevelopeningen."
    },
    "Wind Driven Fire": {
      "definition": "Winddruk op een opening kan de brand en hete rookgassen krachtig door het compartiment richting gang/trappenhuis sturen.",
      "operational": "Beoordeel windrichting vroeg, beheers openingen en treed pas toe met voldoende koelend vermogen en back-up."
    },
    "Flowpath": {
      "definition": "Lucht-/rookstroom tussen toevoer- en afvoeropeningen door druk- en temperatuurverschillen.",
      "operational": "Een geopende deur of raam kan het stromingspad veranderen en de ploeg of vluchtweg bedreigen."
    },
    "Wokkeltrappenhuis": {
      "definition": "Twee onafhankelijke trappen die in één schachtconstructie zijn vervlochten en brandwerend van elkaar zijn gescheiden.",
      "operational": "Bepaal expliciet welk trappenhuis voor inzet en welk voor ontvluchting/ontruiming wordt gebruikt."
    },
    "Bruggenhoofd": {
      "definition": "Veilige operationele uitvalsbasis nabij de brand, in de VRR-lijn standaard op -2.",
      "operational": "Hier komen leiding, logistiek, communicatie, back-up en materiaal samen."
    },
    "VRICOL": {
      "definition": "Verkenning, Redding, Interventie, Compartimentering, Ontruiming, Logistiek.",
      "operational": "In deze webcasus gebruiken we VRICOL alleen als didactisch vergelijkingsmodel. Het helpt na te gaan welke processen aandacht kregen; het wordt hier niet als VGGM-inzetprocedure gepresenteerd."
    },
    "Compartimentering": {
      "definition": "Maatregelen om brand- en rookverspreiding te beperken en met name trappenhuizen te beschermen.",
      "operational": "Denk aan deuren gesloten houden, smokestopper, CO-monitoring en trappenhuisbescherming."
    },
    "WBDBO": {
      "definition": "Weerstand tegen branddoorslag en brandoverslag; een maat voor hoe lang een scheiding in een test brand kan tegenhouden.",
      "operational": "Gebruik als beslisinformatie, niet als garantie; aansluitingen en doorvoeren kunnen eerder falen."
    },
    "Brandweerlift": {
      "definition": "Lift met aangepaste bediening en voorzieningen voor brandweergebruik.",
      "operational": "Controleer rook/water, houd onder brandweerbeheer en stop in beginsel twee etages onder de brand."
    },
    "Ontruimingslift": {
      "definition": "Lift die is ontworpen om personen te ondersteunen bij ontvluchting/ontruiming.",
      "operational": "Niet iedere brandweerlift is een ontruimingslift."
    },
    "Overdrukinstallatie": {
      "definition": "Installatie die door drukverschil rook uit trappenhuis/voorportaal moet houden.",
      "operational": "Openstaande deuren en eigen ventilatie kunnen het ontworpen drukconcept beïnvloeden."
    },
    "Smokestopper": {
      "definition": "Middel om rookuitstroom via een deuropening te beperken terwijl inzet mogelijk blijft.",
      "operational": "Helpt de gang/voorportaal en daarmee vluchtweg rookarmer te houden. In deze fictieve casus is de Smokestopper beschikbaar binnen de lage-druksystemen. Het VRR-handboek gebruikt hiervoor de term ‘rookstopper’; in deze webcasus gebruiken we de bij VGGM bekende term Smokestopper."
    },
    "Commandoruimte": {
      "definition": "Centrale ruimte voor informatie en bediening van brandveiligheidssystemen.",
      "operational": "Gebruik voor status van BMI, sprinkler, liften, overdruk, noodstroom en interne communicatie."
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
      "definition": "Tijdelijke brandbeïnvloeding/koeling van buitenaf voorafgaand aan een binneninzet.",
      "operational": "Alleen relevant als bereik, effect en coördinatie duidelijk zijn; de oude VGGM-presentatie bespreekt dit als tactische optie."
    },
    "Floor-below nozzle": {
      "definition": "Middel/techniek om van een onderliggende verdieping water in een hoger gelegen brandruimte te brengen.",
      "operational": "Kan bij beperkte bereikbaarheid of windgedreven brand als optie worden overwogen; regionale beschikbaarheid moet worden bevestigd."
    }
  },
  "combinationRules": [
    {
      "if": [
        "5C",
        "6B"
      ],
      "text": "De combinatie van ongunstig deurmanagement en windgedreven brand versterkt rook en temperatuur in gang en voorportaal. Een ploeg moet terug achter de scheiding; de vluchtweg wordt duidelijk slechter."
    },
    {
      "ifAny": [
        "3B",
        "3C"
      ],
      "and": "15B",
      "text": "De eerdere trappenhuiskeuze en late logistiek stapelen zich op. Materiaalaanvoer loopt achter en de inzet komt tijdelijk zonder volledige back-up te zitten."
    },
    {
      "if": [
        "4C",
        "8B"
      ],
      "text": "De tactische keuze is op zichzelf verdedigbaar, maar zonder ingericht bruggenhoofd ontstaat onduidelijkheid in leiding en back-up op hoogte."
    },
    {
      "if": [
        "4C",
        "16A"
      ],
      "text": "Nu het incident naar een zwaarder scenario verschuift, wordt het ontbreken van een bruggenhoofd een duidelijke organisatorische zwakte."
    },
    {
      "if": [
        "5C",
        "12B"
      ],
      "text": "De combinatie van slecht deurmanagement en open entree versterkt de verticale rook/CO-verspreiding. Ook hogere verdiepingen en het tweede trappenhuis raken bedreigd."
    },
    {
      "if": [
        "5C",
        "12C"
      ],
      "text": "De combinatie van slecht deurmanagement en onvoldoende reactie op onverwachte CO maakt de rookverspreiding ernstiger. Het tweede trappenhuis komt onder druk."
    },
    {
      "if": [
        "14B"
      ],
      "text": "De lift blijft in gebruik terwijl water de schacht bedreigt. Later valt de lift uit tijdens een transportbeweging. Verticale logistiek moet acuut worden omgeschakeld."
    },
    {
      "ifAny": [
        "17B",
        "17C"
      ],
      "requiresDelay": true,
      "text": "De ontruiming is bij de geveluitbreiding te laat of te beperkt gestart. Bewoners op hogere verdiepingen raken door rook afgesneden; de inzet verslechtert ernstig."
    }
  ],
  "robustChain": [
    "3A",
    "4A",
    "5A",
    "6A",
    "10A",
    "13A",
    "15A"
  ]
};

// Verdiepende nabespreking: brongebaseerde duiding uit het VRR-handboek 2024.
// VRICOL wordt in deze VGGM-casus uitsluitend als didactisch vergelijkingsmodel gebruikt.
(() => {
  const D = {
    1: {
      frame: `Bij hoogbouw hoger dan 70 meter benoemt het VRR-handboek drie kritieke randvoorwaarden voor effectief optreden: bluswater, brandweerliften en communicatie. Daarnaast is de commandoruimte een belangrijke bron voor de status van onder meer BMI, sprinkler, liften, overdruk, noodstroom, blusleiding en interne communicatie. Tegelijk maakt het handboek onderscheid tussen een beheersbare brand en een verder ontwikkelde brand. Bij een beheersbaar scenario kan tijdwinst voor een mogelijke redding zwaar wegen. De afweging is daarom niet “eerst alles weten” versus “blind naar boven”, maar hoeveel informatie je beneden nodig hebt voordat verticale verkenning verantwoord kan starten.`,
      A: `Deze keuze geeft prioriteit aan snelheid richting een mogelijk slachtoffer. Dat is begrijpelijk, maar de ploeg beweegt omhoog voordat inzettrappenhuis, stijgleiding en windinvloed voldoende zijn bevestigd. In hoogbouw kan een verkeerde keuze beneden later veel tijd kosten op hoogte. Sterk aan deze optie is dat de verkenning direct begint; kwetsbaar is dat de ploeg mogelijk materiaal of route moet corrigeren nadat zij al boven is.`,
      B: `Dit verdeelt de informatie-inwinning over twee niveaus. De eerste ploeg bouwt snel een beeld op hoogte op, terwijl beneden capaciteit overblijft om water, trappenhuis en objectinformatie te bevestigen. Daarmee worden tijd en voorbereiding parallel georganiseerd. Dat past goed bij de gedachte dat de inzetvoorwaarden belangrijk zijn, zonder de verticale verkenning onnodig stil te zetten.`,
      C: `Deze keuze levert vroeg een sterk objectbeeld op. Je bevestigt water, liften, gebouwsystemen en route voordat de ploeg vertrekt. Dat verkleint de kans op improviseren op hoogte. Het nadeel is tijd: zolang niemand omhoog is, blijft de feitelijke situatie rond brand en mogelijke vermissing onbekend. Bij een werkelijk slachtoffer kan die vertraging zwaar wegen. Het is dus verdedigbaar, maar alleen zolang de voorbereiding doelgericht en kort blijft.`
    },
    2: {
      frame: `Het VRR-handboek noemt een functionerende brandweerlift randvoorwaardelijk voor effectieve en veilige brandweerinzet in hoge gebouwen. Voor gebruik wordt de liftschacht gecontroleerd op rook en water, het liftbeheer wordt bij de brandweer geborgd en de lift stopt standaard twee etages onder de vermoedelijke brandverdieping. Als water zichtbaar de schacht instroomt of de lift door rook, vuur of water wordt bedreigd, geldt: niet gebruiken. Bij liftuitval neemt de traplooptijd en fysieke belasting sterk toe; het handboek gebruikt als praktisch aandachtspunt boven de tiende verdieping circa 30 seconden per te overbruggen verdieping.`,
      A: `Dit sluit rechtstreeks aan op de VRR-lijn: brand op 14 betekent uitstappen op 12. De ploeg houdt fysieke reserve over, kan op -2 de inzet organiseren en blijft buiten de meest waarschijnlijke rook- en waterinvloed. Het vasthouden van de lift onder brandweerbeheer voorkomt bovendien dat de lift zelfstandig een ongunstige positie inneemt.`,
      B: `De winst is één verdieping minder lopen, maar daarvoor lever je veiligheidsmarge in. Je komt dichter bij mogelijke rookverspreiding, wateroverlast en verstoring van de liftomgeving. De standaard -2 is juist bedoeld om ruimte te houden voor beoordeling en organisatie voordat de ploeg de brandverdieping nadert.`,
      C: `De trap is het noodzakelijke alternatief als de lift onveilig of onbetrouwbaar is. Als de lift echter aantoonbaar bruikbaar is, kost volledig traplopen onnodig tijd en energie. Die fysieke belasting werkt later door in ademluchtverbruik, inzetduur, materiaaltransport en aflossing. De keuze kan dus veilig lijken, maar vermindert de beschikbare slagkracht wanneer die boven nodig is.`
    },
    3: {
      frame: `Een wokkeltrappenhuis bestaat uit twee brandwerend gescheiden trappen die in één constructie zijn vervlochten. Het VRR-handboek benadrukt dat de brandweer scherp afspreekt welke trap voor de inzet wordt gebruikt, zodat de andere trap beschikbaar kan blijven voor ontruiming. Niet bij ieder trappenhuis zit op iedere positie een afnamepunt van de blusleiding. Daarom wordt twee verdiepingen onder de brand expliciet bepaald vanuit welk trappenhuis wordt gewerkt. Het andere trappenhuis moet op de brandverdieping zo veel mogelijk dicht en rookvrij blijven.`,
      A: `Deze keuze koppelt de inzetroute direct aan de bluswatervoorziening én houdt de tweede vluchtweg beschikbaar. Dat is precies de combinatie die het VRR-handboek bij wokkeltrappenhuizen wil borgen. Door de keuze terug te melden aan de bevelvoerder ontstaat bovendien een gedeeld beeld van inzettrap en vluchttrap.`,
      B: `Een kortere route naar de woning is aantrekkelijk, maar als het afnamepunt pas hoger of aan de andere zijde wordt gevonden, ontstaat extra omloop en lastiger slangmanagement. De routekeuze wordt dan vooral door afstand bepaald en te weinig door bluswater en vluchtwegbescherming.`,
      C: `Tijdelijk beide trappen gebruiken kan informatie opleveren, maar belast meteen beide vluchtwegen en maakt de scheiding tussen inzet en ontvluchting minder duidelijk. Dat wordt vooral kwetsbaar zodra bewoners spontaan gaan vluchten. Het VRR-handboek benadrukt juist dat spontane ontruiming al vóór aankomst van de brandweer op gang kan zijn.`
    },
    4: {
      frame: `Bij hoge gebouwen wordt een bruggenhoofd ingericht als operationele uitvalsbasis nabij de brand. In de VRR-systematiek ligt dit standaard op de inzetverdieping: brandverdieping -2. Daar komen leiding, communicatie, materiaal, back-up en logistiek samen. De veiligheid in het trappenhuis en de overdruk worden bewaakt. Het bruggenhoofd vormt de schakel tussen de ploegen op hoogte en de commandopost beneden.`,
      A: `Verdieping 12 is rookvrij, CO is 0 ppm en de locatie ligt bij lift en inzettrappenhuis. Daarmee is dit een logische plek om leiding, logistiek en back-up te organiseren zonder direct in de rookinvloed te zitten. Continu CO monitoren blijft nodig, omdat stack-effect of rookverspreiding de toestand later kan veranderen.`,
      B: `Dichter bij de brand lijkt logistiek sneller, maar op verdieping 13 is al lichte rook waarneembaar. Daarmee wordt de basis zelf gevoeliger voor verslechtering. Een bruggenhoofd moet juist stabiel genoeg zijn om te blijven functioneren als de situatie op de brandverdieping slechter wordt.`,
      C: `De focus op slachtoffer en brand is begrijpelijk, maar zonder vaste uitvalsbasis blijft de organisatie op hoogte achter. Dat hoeft in een zeer klein beheersbaar incident niet direct fout te gaan, maar bij scenario 2 of 3 worden communicatie, back-up en materiaalstromen snel complexer. Dan wordt een ontbrekend bruggenhoofd een operationele zwakte.`
    },
    5: {
      frame: `Rookverspreiding is in het VRR-handboek een zelfstandig tactisch probleem. Bij scenario 1 en 2 wordt expliciet benoemd dat het voorportaal rookvrij moet blijven en dat een smokestopper bij het brandcompartiment en richting lift kan worden geplaatst. Het openen van een deur kan een flowpath creëren. Deurcontrole en het vaststellen van stroming/overdruk horen daarom bij de inzet.`,
      A: `De smokestopper wordt geplaatst voordat de deuropening structureel wordt gebruikt en het blusmiddel staat inzetgereed. Daarmee blijft de opening beheersbaar en wordt rookuitstroom naar gang en voorportaal beperkt. Dit beschermt zowel de terugtrekroute van de ploeg als de vluchtweg voor bewoners.`,
      B: `Een korte observatieopening kan waardevolle informatie opleveren, maar ook een druk- of windgedreven stroming starten. Vooral bij een geopende gevel aan de brandzijde kan zelfs een korte deuropening het stromingspad veranderen. De keuze is dus verdedigbaar als de ploeg echt controle houdt en direct weer sluit, maar kent meer risico dan eerst afschermen en voorbereiden.`,
      C: `Een volledig geopende deur vergroot de verbinding tussen brandruimte en gang. Daardoor kunnen rook en hete gassen naar het voorportaal en trappenhuis bewegen. Dit kan de vluchtweg aantasten en de latere inzet veel ingewikkelder maken. De schade van deze keuze hoeft niet direct volledig zichtbaar te zijn; bij wind of stack-effect kan het gevolg later sterk toenemen.`
    },
    6: {
      frame: `VRR waarschuwt expliciet voor Wind Driven Fire. Winddruk op een gevelopening kan de brand aanwakkeren en hete rookgassen versneld door het compartiment sturen. Het gevaar wordt groter wanneer de brandweer zelf een flowpath creëert door een deur te openen. Het handboek adviseert daarom maximale slagkracht gereed te hebben en, afhankelijk van mogelijkheden, alternatieve koeltechnieken of inzetposities te overwegen.`,
      A: `Terug achter de deur creëert opnieuw een begrenzing en geeft tijd om koelend vermogen en back-up te organiseren. De ploeg gebruikt de verandering in hitte en de melding over wind als nieuwe informatie en heroverweegt de toetreding. Dit is precies het soort dynamische risicobeoordeling dat bij windgedreven brand nodig is.`,
      B: `Dat de ruimte bereikbaar is, zegt niet dat de stromingscondities veilig zijn. Door de deur verder te openen kan wind de hete gassen juist richting gang en ploeg drukken. Als eerder deurmanagement al ongunstig was, stapelen de effecten zich op en kan een gedwongen terugtrekking volgen.`,
      C: `Een externe koelactie kan in specifieke omstandigheden relevant zijn, maar alleen als bereik, effect en communicatie helder zijn. Zonder die bevestiging blijft de binnenploeg in een risicovolle positie wachten op een maatregel waarvan de werking onzeker is. De keuze kan dus passend worden, maar is geen automatische oplossing.`
    },
    7: {
      frame: `Bij scenario 2 beschrijft VRR een defensieve binneninzet die wordt opgebouwd naar een offensieve binneninzet. De interventiemaatregelen worden eerst georganiseerd; daarna kan de aanval plaatsvinden. Het handboek benoemt een back-upvoorziening met een tweede straal. Bij windinvloed of ontwikkelde brand is voldoende koelend vermogen extra belangrijk.`,
      A: `Twee inzetmogelijkheden geven slagkracht en redundantie. Dat kost opbouwtijd, maar verkleint de kans dat de eerste ploeg tijdens een ontwikkelde brand zonder voldoende koelend vermogen of back-up komt te staan. De keuze past vooral wanneer het beeld niet meer bij een klein beheersbaar incident past.`,
      B: `Eén lijn levert sneller effect op. Als het brandbeeld werkelijk beheersbaar is, kan dat verdedigbaar zijn. Maar bij scenario 2, een mislukte sprinklerwerking of windgedreven brand is de veiligheidsmarge kleiner en moet de tweede lijn daadwerkelijk snel volgen.`,
      C: `De omvang van de woning zegt weinig over het benodigde koelend vermogen als de brand ontwikkeld of windgedreven is. Een lichte oplossing kan snel hanteerbaar zijn, maar onvoldoende capaciteit hebben om de warmtestroom te beheersen. Dan verandert tijdwinst in een tactisch nadeel.`
    },
    8: {
      frame: `VRR onderscheidt vier hoogbouwscenario’s. Scenario 1 gaat uit van een door voorzieningen beheersbare brand. Scenario 2 geldt wanneer de brand niet door de sprinkler wordt beheerst maar nog binnen het compartiment blijft; de commanders intent legt dan de nadruk op rookverspreiding voorkomen, interventiemaatregelen opbouwen, daarna brand bestrijden/redden en de omliggende verdiepingen controleren op rook en CO. Scenario 3 betekent uitbreiding of rookverspreiding buiten het oorspronkelijke compartiment. Scenario 4 is gevelbrand met uitbreiding en vraagt directe totaalontruiming.`,
      A: `Sprinkleractivatie alleen is onvoldoende om scenario 1 aan te nemen. In de casus is de brand niet onder controle en is al rook in de gang. Daarmee ontbreekt een belangrijk criterium voor een beheersbare brand. Een te optimistische classificatie kan ertoe leiden dat interventie begint voordat bescherming en back-up voldoende zijn georganiseerd.`,
      B: `Dit past het best bij het actuele beeld: voorzieningen werken, maar de brand is niet door de sprinkler beheerst en rook blijft nog grotendeels binnen woning/gang. In de VRR-logica verschuift de aanpak dan naar defensief binnen organiseren, rookverspreiding beperken en pas daarna offensief optreden.`,
      C: `Scenario 3 kan later nodig worden, maar op dit moment zijn de trappenhuizen nog rookarm en lijkt de brand nog compartimentsgebonden. Volledige prioriteitsverschuiving naar ontruiming kan daardoor de aanval onnodig vertragen. Het is een veilige reflex, maar mogelijk niet proportioneel aan het actuele beeld.`
    },
    9: {
      frame: `Bij VRR is snelle redding vóór een volledig opgebouwd bruggenhoofd alleen gekoppeld aan het beheersbare scenario 1. Bij scenario 2 en 3 komt redding pas aan de orde nadat het bruggenhoofd is ingericht en de interventiemaatregelen gereed zijn. De gedachte daarachter is dat een reddingsploeg in een ontwikkelde brand anders zelf zonder voldoende bescherming en slagkracht binnengaat.`,
      A: `De reddingsdruk is menselijk en operationeel begrijpelijk. Maar als het incident al richting scenario 2 gaat, wordt de ploeg blootgesteld aan een ontwikkelde brand zonder volledig ingerichte interventievoorwaarden. Het risico is dat de redding zelf vastloopt en extra capaciteit nodig heeft.`,
      B: `De toetreding start iets later, maar gebeurt met beter georganiseerde slagkracht en terugtrekmogelijkheid. Daarmee wordt redding gekoppeld aan de brandbestrijding in plaats van daarvan losgemaakt. Dit past bij de bronlijn voor scenario 2.`,
      C: `Onzekere slachtofferinformatie betekent niet dat er geen slachtoffer is. De keuze verwijdert de reddingsopgave terwijl de onzekerheid feitelijk blijft bestaan. Een betere aanpak is onzekerheid actief blijven onderzoeken en de zoekactie koppelen aan de veilig opgebouwde interventie.`
    },
    10: {
      frame: `VRR behandelt compartimentering en trappenhuisbescherming als zelfstandige taken. Teams monitoren CO in het hele trappenhuis, houden deuren gesloten, plaatsen zo nodig smokestoppers, rapporteren per verdieping aan het bruggenhoofd en geleiden vluchtende bewoners naar het veilige trappenhuis. CO boven of onder de brand kan een aanwijzing zijn voor stack-effect. Ventilatie hoort gecontroleerd te gebeuren, bij voorkeur vanuit brand- of rookruimte rechtstreeks naar buiten.`,
      A: `De rookmelding wordt niet alleen als gevolg van de brand gezien, maar als tactisch probleem dat de vluchtweg kan aantasten. Door deuren, portalen, overdruk en CO boven én onder de brand te controleren, wordt gezocht naar de oorzaak en de verspreidingsroute. Dat past goed bij de VRR-taak Compartimentering.`,
      B: `De bron wegnemen kan uiteindelijk rookproductie stoppen, maar bestaande rookverspreiding kan intussen doorgaan of zelfs toenemen. Bewoners bevinden zich mogelijk al in het trappenhuis. Daardoor is alleen sneller aanvallen onvoldoende als bescherming van de vluchtweg ondertussen verslechtert.`,
      C: `Beide trappenhuizen openen maakt de drukverhoudingen moeilijker voorspelbaar. Bij stack-effect kan een opening juist onderdeel worden van een verticale flowpath. Ongecontroleerd ventileren kan daarom de rook naar nieuwe verdiepingen of vluchtwegen verplaatsen.`
    },
    11: {
      frame: `Het VRR-handboek waarschuwt dat spontane ontruiming al vóór aankomst van de brandweer kan zijn begonnen. Veel verplaatsing in het trappenhuis beïnvloedt zowel repressief optreden als overdruk. Trappenhuisbeschermingsteams vangen vluchtende bewoners op in het inzettrappenhuis en geleiden hen naar het veilige trappenhuis. Bij scenario 4 start een totaalontruiming op en boven de brandverdieping.`,
      A: `De bewoners blijven in beweging, maar brandweerlogistiek en vluchtstromen worden gemengd. Dat kan tijdelijk werkbaar zijn bij een rookvrij trappenhuis, maar maakt slangvoering, materiaaltransport en bescherming lastiger. Het risico groeit zodra rook of drukcondities veranderen.`,
      B: `Deze optie gebruikt de scheiding tussen inzet- en vluchttrappenhuis zoals bedoeld. De bewoners worden niet teruggestuurd, maar naar een aantoonbaar veilige route geleid. Daarvoor zijn wel personeel en communicatie nodig; de route moet werkelijk rookvrij en bruikbaar zijn.`,
      C: `Bewoners terugsturen lijkt de trap snel leeg te maken, maar veronderstelt dat hun woning of verdieping veiliger is dan de route naar beneden. Die zekerheid is er niet. De bron benadrukt juist dat spontane vlucht een realiteit is waarmee de inzet rekening moet houden.`
    },
    12: {
      frame: `Stack-effect ontstaat door temperatuurverschillen tussen binnen en buiten. Bij een warmer gebouw kan een opwaartse stroming ontstaan; bij omgekeerde temperatuurverhoudingen kan de richting omkeren. Het VRR-handboek beschrijft dat een geopende deur of raam op een andere hoogte een flowpath kan vormen waardoor rook en CO op onverwachte verdiepingen verschijnen. Daarom wordt CO boven en onder de brand gemonitord.`,
      A: `De open toegangsdeur beneden kan de verticale luchtstroming voeden. Door die opening te beheersen en de CO-trend te blijven volgen, pakt de ploeg een mogelijke oorzaak van de verspreiding aan zonder blind te ventileren. Dit is een sterke reactie op een meetwaarde die niet bij het zichtbeeld lijkt te passen.`,
      B: `Een extra ventilator verandert de drukverhoudingen terwijl de afvoerroute niet volledig bekend is. Daarmee kan de brandweer zelf een sterkere flowpath creëren. Ventilatie is pas zinvol wanneer toevoer, afvoer en effect beheerst zijn.`,
      C: `Afwezigheid van zichtbare rook sluit CO-verspreiding niet uit. Juist onverwachte CO boven of onder de brand wordt in het handboek genoemd als aanwijzing voor stack-effect. De meting negeren kan ertoe leiden dat een vluchtweg ongemerkt verslechtert.`
    },
    13: {
      frame: `Goede communicatie is in het VRR-handboek één van de drie kritieke randvoorwaarden voor hoogbouwinzet. De commandoruimte en interne communicatiemiddelen kunnen belangrijk worden wanneer reguliere portofoonverbindingen op hoogte onvoldoende zijn. Het bruggenhoofd vormt daarbij een vaste schakel tussen ploegen en commandopost.`,
      A: `Door de intercom actief te benutten voordat C2000 volledig wegvalt, ontstaat redundantie. Een vaste terugmeldroute via bruggenhoofd en commandoruimte verkleint de kans dat belangrijke informatie versnipperd raakt. De organisatie past zich aan voordat communicatie een acuut probleem wordt.`,
      B: `Zolang C2000 nog af en toe werkt, lijkt doorgaan eenvoudig. Maar de kritieke melding kan juist in een uitvalmoment vallen. Hoogbouw vraagt daarom om tijdig organiseren van een alternatief, niet pas nadat de primaire verbinding volledig weg is.`,
      C: `Een fysieke boodschapper kan in uiterste nood functioneren, maar kost tijd, menskracht en energie. Bij een werkende intercom is dat een zware oplossing voor een probleem dat technisch eenvoudiger kan worden opgevangen.`
    },
    14: {
      frame: `VRR is zeer expliciet over water in of richting de liftschacht. Voor gebruik moet de schacht op rook en water worden gecontroleerd. Wordt de lift bedreigd door water, rook of vuur, dan wordt hij niet gebruikt. Wanneer zichtbaar water de schacht instroomt, is de lift niet langer betrouwbaar en kan hij ieder moment uitvallen.`,
      A: `De keuze accepteert direct het verlies van transportsnelheid, maar voorkomt dat mensen of essentiële logistiek afhankelijk blijven van een voorziening die aantoonbaar onbetrouwbaar wordt. Het nadeel is groot, maar voorspelbaar; dat is beter beheersbaar dan onverwachte liftuitval.`,
      B: `Een storingsvrij paneel bewijst niet dat de lift veilig blijft functioneren. Het zichtbare water is al de relevante waarschuwing. Wachten op een foutmelding betekent wachten tot het technische falen zich daadwerkelijk manifesteert.`,
      C: `Geen personen vervoeren verlaagt het directe letselrisico, maar materieel kan alsnog vastlopen en de logistieke keten blijft afhankelijk van de bedreigde lift. De bronlijn is daarom strenger: bij bedreiging door water niet gebruiken.`
    },
    15: {
      frame: `Logistiek is binnen VRICOL een zelfstandige taak. Hoogbouw vraagt langdurig verticaal transport van ademlucht, slangen, gereedschap en aflossing. De fysieke belasting neemt sterk toe wanneer liften uitvallen of materiaal via trappen moet worden verplaatst. Trappenhuisbeschermingsteams leveren onder meer ademlucht naar het bruggenhoofd; het handboek rekent bovendien expliciet met materiaalgewichten.`,
      A: `De logistiek wordt georganiseerd vóórdat tekorten acuut worden. Reserve-ademlucht, aflossing en noodzakelijke middelen worden dichter bij het bruggenhoofd gebracht en schoon/vuil wordt gescheiden. Daarmee blijft de interventie continu en wordt voorkomen dat vermoeide ploegen langer doorwerken dan verantwoord.`,
      B: `Alle capaciteit op de brandaanval kan op korte termijn aantrekkelijk lijken, maar een plots tekort aan ademlucht of aflossing kan de inzet abrupt stoppen. Logistiek is daarom geen activiteit voor “na brandmeester”, maar een continu proces dat de aanval mogelijk maakt.`,
      C: `Minder gewicht naar boven sturen kan verstandig zijn als scherp wordt geselecteerd op noodzakelijke middelen. Het wordt problematisch als essentiële ademlucht, back-up of materiaal wordt weggelaten. De vraag is dus niet “minder”, maar “wat moet aantoonbaar beschikbaar zijn waar en wanneer?”.`
    },
    16: {
      frame: `Scenario 3 betekent dat rook en/of brand buiten het oorspronkelijke compartiment komt. In de VRR-uitwerking krijgen bescherming van vluchtwegen en ontruiming dan nadrukkelijk meer gewicht. Interventie vindt plaats nadat maatregelen tegen rookverspreiding en voor ontruiming zijn getroffen. CO boven en onder de brand en het gesloten houden van deuren worden actief gemonitord.`,
      A: `De ploeg erkent dat het incident kwalitatief veranderd is. Door de inzet te herordenen worden vluchtwegbeveiliging en ontruiming niet langer als bijzaak behandeld. De brand wordt nog steeds bestreden, maar pas binnen een organisatie die rekening houdt met de verspreiding buiten het compartiment.`,
      B: `Voortgang bij de brandhaard kan verleiden om het bestaande plan vast te houden. Maar het actuele risico ligt nu ook buiten de woning. Als rook in gang of trappenhuis toeneemt, kan het succes van de brandaanval tegelijk gepaard gaan met verslechterende vluchtmogelijkheden.`,
      C: `Volledig defensief buiten kan noodzakelijk worden als de binnencondities onhoudbaar zijn. Het bronbeeld in deze casus geeft daar nog niet automatisch aanleiding toe. Een te vroege volledige terugtrekking kan beschermbare vluchtwegen en reddingsmogelijkheden opgeven terwijl een heringerichte binnenorganisatie nog mogelijk is.`
    },
    17: {
      frame: `Bij scenario 4 gaat het om gevelbrand met uitbreiding. VRR gaat ervan uit dat effectieve interventie op de gevelbrand niet meer vanzelfsprekend mogelijk is en dat geen tijd verloren mag gaan met het starten van totale ontruiming. De ontruiming begint op en boven de brandverdieping. De deuren van vluchttrappenhuizen moeten zo veel mogelijk gesloten blijven om rookverspreiding te beperken.`,
      A: `De keuze volgt de prioriteitsverschuiving van scenario 4: bewoners en vluchtwegen eerst. De brandbestrijding wordt niet volledig vergeten, maar is niet langer de activiteit die de ontruiming mag vertragen. Vooral hogere verdiepingen kunnen door verticale geveluitbreiding snel bedreigd raken.`,
      B: `Als de gevelbrand vanuit de brandverdieping werkelijk effectief kan worden beïnvloed, lijkt eerst blussen aantrekkelijk. Het risico is echter dat kostbare minuten verstrijken terwijl meerdere verdiepingen tegelijk bedreigd worden. Daarom legt VRR bij scenario 4 de eerste prioriteit bij totale ontruiming.`,
      C: `Beperkte ontruiming vermindert drukte in de trappenhuizen, maar past niet bij een gevelbrand die verder omhoog uitbreidt. Bewoners boven de gekozen zone kunnen dan te laat worden bereikt. De beperking is alleen verdedigbaar als de uitbreiding aantoonbaar is gestopt; dat is hier niet het geval.`
    },
    18: {
      frame: `De VRR-uitwerking gebruikt tijdlijnen, WBDBO-informatie en de toestand van voorzieningen als besluitondersteuning. Die waarden zijn geen automatische aftelklok tot terugtrekken. De feitelijke toestand van vluchtwegen, compartimentering, constructie, personeel, water, liften en ontruiming moet opnieuw worden beoordeeld. Bij langlopende inzetten kunnen eerdere aannames inmiddels onjuist zijn geworden.`,
      A: `Een expliciet heroverwegingsmoment maakt zichtbaar wat nog klopt en wat niet. WBDBO, vluchtwegstatus, scenario, personeelsbelasting, liftstatus en ontruiming worden opnieuw samengebracht. Daarmee wordt voorkomen dat de organisatie op automatische piloot doorgaat terwijl het incident is veranderd.`,
      B: `Een stabiel plan geeft rust, maar hoogbouw kent sluipende veranderingen: water in schachten, CO op andere verdiepingen, vermoeidheid, rook in vluchtwegen en veranderende gevelbrand. Zonder gepland heroverwegen worden die signalen sneller los van elkaar beoordeeld.`,
      C: `Langdurigheid alleen maakt een binneninzet niet automatisch onverantwoord. Tijd is wel een belangrijke waarschuwing omdat brandwerendheid, ademlucht, constructie en logistiek niet onbeperkt zijn. De passende reactie is daarom opnieuw beoordelen en zo nodig aanpassen, niet automatisch stoppen.`
    }
  };

  window.SCENARIO.nodes.forEach(node => {
    const d = D[node.id];
    if (!d) return;
    node.sourceFrame = d.frame;
    node.choices.forEach(choice => {
      choice.deepDive = d[choice.id] || choice.rationale;
    });
  });
})();



// Uitgebreide casuspresentatie voor de inhoudelijk gereviewde keuzemomenten 1 t/m 3.
// Deze laag zorgt dat de webapp dezelfde rijkdom toont als de mondelinge/tekstuele nabespreking.
(() => {
  const N = window.SCENARIO.nodes;
  const byId = id => N.find(n => n.id === id);

  Object.assign(byId(1), {
    situationDetail: {
      time: "14:32 uur",
      intro: [
        "Je bent bevelvoerder van de eerste TS bij woongebouw Rivierstaete, 76 meter hoog en 21 bouwlagen.",
        "De melding is: woningbrand op de 14e verdieping, mogelijk nog één persoon in de woning."
      ],
      observations: [
        "Bij aankomst zie je lichte grijze rook uit één geopend raam op de 14e verdieping.",
        "De wind is aan deze zijde van het gebouw duidelijk voelbaar.",
        "De beheerder meldt dat beide brandweerliften beschikbaar zijn.",
        "De sprinklerinstallatie is aangesproken, maar het is nog niet bekend of de sprinkler de brand daadwerkelijk onder controle heeft.",
        "Er zijn twee trappenhuizen en in de commandoruimte is informatie over de installaties beschikbaar.",
        "Een bewoner die naar buiten komt zegt dat de bewoner van het brandende appartement mogelijk nog binnen is.",
        "Je hebt je eigen TS; een tweede TS is onderweg en het redvoertuig arriveert vrijwel gelijktijdig."
      ],
      prompt: "Wat wordt jouw eerste inzet?"
    }
  });

  Object.assign(byId(2), {
    situationDetail: {
      time: "14:35 uur",
      intro: ["De eerste ploeg kan nu naar boven."],
      observations: [
        "Brand op verdieping 14.",
        "Sprinkler geactiveerd; effect nog onbekend.",
        "Brandweerlift functioneert en er is geen rook- of watermelding in de liftschacht.",
        "Interne bluswatervoorziening is beschikbaar.",
        "Er zijn twee trappenhuizen.",
        "Mogelijke persoon nog in de woning.",
        "Buiten is nog steeds rook zichtbaar uit het geopende raam."
      ],
      prompt: "De brandweerlift staat klaar. Wat laat je de ploeg doen?"
    }
  });

  Object.assign(byId(3), {
    situationDetail: {
      time: "14:37 uur — verdieping 12",
      intro: [
        "De manschappen stappen uit de lift.",
        "Voor hen zijn twee trappenhuizen zichtbaar. Het betreft een wokkeltrappenhuis: twee afzonderlijke, brandwerend gescheiden trappen die in dezelfde trappenhuisconstructie door het gebouw lopen."
      ],
      groups: [
        { title: "Trappenhuis A", items: [
          "rookvrij;",
          "direct in het voorportaal een afnamepunt van de blusleiding;",
          "de route voelt iets langer richting de vermoedelijke brandwoning."
        ]},
        { title: "Trappenhuis B", items: [
          "eveneens rookvrij;",
          "geen afnamepunt zichtbaar op verdieping 12;",
          "ligt volgens de verdiepingstekening iets gunstiger ten opzichte van de brandwoning."
        ]}
      ],
      after: [
        "De bevelvoerder is beneden/in de commandoruimte nog bezig met aanvullende objectinformatie.",
        "Dit is nu nadrukkelijk een beslissing die de manschappen op hoogte zelf mogen nemen, mits veilig en verantwoord en de keuze wordt teruggekoppeld/getoetst bij de bevelvoerder."
      ],
      prompt: "Wat doet de ploeg?"
    }
  });

  const n1=byId(1), n2=byId(2), n3=byId(3);
  const c=(n,id)=>n.choices.find(x=>x.id===id);

  Object.assign(c(n1,'C'), {
    consequenceDetail: {
      time: "14:35 uur — ongeveer 3 minuten na aankomst",
      paragraphs: [
        "De chauffeur bevestigt dat de interne bluswatervoorziening beschikbaar is. De gebouwbeheerder toont in de commandoruimte de actuele status van de belangrijkste voorzieningen.",
        "Je hebt daarmee al vroeg een behoorlijk betrouwbaar beeld van de gebouwvoorzieningen. De eerste ploeg staat echter nog steeds beneden.",
        "De bewoner die eerder meldde dat mogelijk iemand binnen is, blijft bij zijn verhaal, maar weet het niet zeker. Er is ondertussen nog steeds rook zichtbaar uit het raam op verdieping 14. De tweede TS arriveert."
      ],
      bullets: [
        "sprinkler op verdieping 14 geactiveerd;",
        "beide brandweerliften functioneren normaal;",
        "overdrukvoorziening geeft geen storing;",
        "twee trappenhuizen aanwezig;",
        "interne bluswaterinstallatie lijkt operationeel."
      ]
    },
    debrief: {
      sections: [
        { title: "Waarom is deze keuze verdedigbaar?", paragraphs: [
          "Vanuit het VRR-handboek is de aandacht voor de gebouwvoorzieningen logisch. Bij hoogbouw hoger dan 70 meter benoemt VRR drie cruciale randvoorwaarden voor effectief brandweeroptreden: een werkende bluswatervoorziening, werkende brandweerliften en goede communicatie.",
          "Je voorkomt hiermee dat een ploeg eerst twaalf verdiepingen omhoog gaat en daar pas ontdekt dat bijvoorbeeld de stijgleiding niet functioneert of het verkeerde trappenhuis is gekozen.",
          "Ook het vroeg gebruiken van de commandoruimte past bij de VRR-benadering. Daar kan informatie beschikbaar zijn over BMI, automatische blusinstallatie, ontruimingsalarminstallatie, brandweerliften, overdruk, noodstroom, blusleiding en interne communicatie."
        ]},
        { title: "Maar waar zit het nadeel?", paragraphs: [
          "Tijd. Het VRR-handboek maakt onderscheid tussen een beheersbare brand en een ontwikkelde brand. Bij een beheersbaar scenario kan een snelle redding onder voorwaarden zwaar wegen voordat de volledige inzetorganisatie is opgebouwd.",
          "Je hebt nu ongeveer drie minuten gebruikt om beneden een vrijwel compleet beeld te krijgen. Dat is organisatorisch sterk, maar als de bewoner werkelijk nog in de brandwoning zit, zijn dat ook drie minuten waarin nog niemand richting de brandverdieping is gegaan."
        ]}
      ],
      assessment: "Verdedigbaar, maar mogelijk te afwachtend.",
      strengths: ["bluswater vroeg bevestigd", "liftstatus bekend", "commandoruimte benut", "inzettrappenhuis kan bewust worden gekozen", "minder kans op improviseren op hoogte"],
      risks: ["verticale verkenning komt laat op gang", "mogelijke redding wordt uitgesteld", "informatie beneden vertelt nog niet hoe de situatie op verdieping 14 werkelijk is", "nog onbekend of sprinkler de brand beheerst"],
      stateEffects: ["tijd +2", "situatiebeeld beneden +2", "situatiebeeld op hoogte 0"]
    }
  });

  Object.assign(c(n2,'A'), {
    consequenceDetail: {
      time: "14:37 uur",
      paragraphs: [
        "De ploeg bereikt verdieping 12 zonder bijzonderheden. Er is geen rook in de lifthal en er is geen water zichtbaar rond de lift.",
        "De fysieke belasting van de ploeg is beperkt gebleven. Ze hebben hun materiaal nog volledig beschikbaar en zijn nog niet vermoeid door twaalf verdiepingen traplopen.",
        "De lift blijft onder brandweerbeheer en wordt niet automatisch teruggestuurd."
      ],
      bullets: ["lift normaal gefunctioneerd;", "verdieping 12 rookvrij;", "CO-meter: 0 ppm;", "twee trappenhuizen zichtbaar;", "in één van de voorportalen is direct een afnamepunt van de blusleiding te zien."]
    },
    debrief: {
      sections: [
        { title: "Waarom is deze keuze sterk volgens het VRR-handboek?", paragraphs: [
          "Dit sluit vrijwel één-op-één aan bij de VRR-lijn. Een functionerende brandweerlift is bedoeld om mensen en middelen tijdig op hoogte te krijgen en wordt als belangrijke randvoorwaarde voor een effectieve en veilige inzet beschouwd.",
          "Voor gebruik wordt gecontroleerd op rook en water, het liftbeheer wordt bij de brandweer geborgd en de lift stopt standaard twee etages onder de vermoedelijke brandetage. Bij brand op verdieping 14 betekent dat verdieping 12.",
          "De afstand van twee verdiepingen creëert ook ruimte om vóór de brandverdieping zaken te organiseren zoals trappenhuiskeuze, bluswater, bruggenhoofd, communicatie en een eerste beoordeling van rook en CO."
        ]},
        { title: "Waarom is verdieping 13 minder sterk?", paragraphs: [
          "Eén verdieping hoger scheelt weinig looptijd, maar je levert veiligheidsmarge in. Je zit dichter bij mogelijke rookverspreiding, lekkend bluswater en omstandigheden rond het brandcompartiment. De standaard -2 creëert juist herstel- en organisatieruimte."
        ]},
        { title: "Waarom niet gewoon de trap?", paragraphs: [
          "De trap blijft noodzakelijk als de lift niet veilig kan worden gebruikt. Bij een goed functionerende brandweerlift zou volledig traplopen echter een belangrijk voordeel van het gebouw ongebruikt laten. Dat kost tijd en fysieke reserve, wat later doorwerkt in ademlucht, materiaaltransport en aflossing."
        ]}
      ],
      assessment: "Sterke keuze.",
      stateEffects: ["liftstatus: bruikbaar", "ploegbelasting: laag", "tijd: beperkt opgelopen", "verticale inzetpositie: -2"]
    }
  });

  Object.assign(c(n3,'A'), {
    consequenceDetail: {
      time: "14:38 uur — verdieping 12",
      paragraphs: [
        "De ploeg bevestigt het afnamepunt van de blusleiding in het voorportaal van trappenhuis A. Daardoor kan de slangvoering vanaf de inzetverdieping logisch worden opgebouwd.",
        "De bevelvoerder bevestigt de keuze over de portofoon.",
        "Trappenhuis B wordt voorlopig niet gebruikt voor de brandweerinzet. Daarmee ontstaat vanaf dit moment een duidelijke scheiding tussen inzet en ontvluchting/ontruiming.",
        "De ploeg gaat nog niet direct naar verdieping 14, maar controleert eerst de relatie tussen het afnamepunt en de route richting brandverdieping."
      ],
      bullets: ["trappenhuis A: inzet;", "trappenhuis B: zoveel mogelijk behouden voor bewonersstromen en ontruiming."]
    },
    debrief: {
      sections: [
        { title: "Waarom sluit dit sterk aan op het VRR-handboek?", paragraphs: [
          "Het VRR-handboek legt bij een wokkeltrappenhuis expliciet uit dat de brandweer tijdens de inzet scherp moet afspreken welk trappenhuis wordt gebruikt, zodat de andere trap beschikbaar kan blijven voor ontruiming.",
          "Bij een wokkeltrappenhuis lopen twee onafhankelijke trappen in één trappenhuisconstructie. Omdat de trappen in elkaar zijn gevlochten, kom je na één verdieping aan de andere zijde van de lift uit.",
          "VRR schrijft daarom dat je op de inzetverdieping moet kijken in welk trappenhuis het afnamepunt van de blusleiding zit. Als je op -2 een afnamepunt aantreft, kom je via datzelfde trapverloop op de brandverdieping weer uit bij het relevante voorportaal/afnamepunt.",
          "Dat voorkomt dat je op de brandverdieping nog moet omlopen naar het andere trappenhuis. Zo'n omloop kan betekenen dat je door een onveilig of door rook beïnvloed gebied moet bewegen."
        ], bullets: [
          "inzetverdieping standaard brandverdieping -2;",
          "zoek daar het trappenhuis met het afnamepunt;",
          "ga via dat trappenhuis omhoog;",
          "voorkom dat je op de brandverdieping nog moet omlopen naar het andere trappenhuis."
        ]},
        { title: "Waarom is keuze B toch niet onzinnig?", paragraphs: [
          "Trappenhuis B lijkt qua looproute gunstiger richting de woning. Dat is operationeel een begrijpelijke gedachte: een kortere route kan tijd besparen en minder slanglengte vragen.",
          "Bij hoogbouw wordt die winst minder belangrijk wanneer je daarmee de relatie met de bluswatervoorziening verliest. De routekeuze moet daarom niet alleen worden gebaseerd op de kortste weg naar de woning, maar op de combinatie van veilige route, afnamepunt, brandverdieping, bruikbaarheid als inzetroute en behoud van de andere vluchtweg."
        ]},
        { title: "Waarom is keuze C kwetsbaarder?", paragraphs: [
          "Het splitsen van de ploeg levert sneller informatie op over beide trappenhuizen, maar je gebruikt daarmee direct beide trappenhuizen voor de brandweerinzet.",
          "Dat is precies wat je bij twee onafhankelijke vluchtwegen zo lang mogelijk wilt vermijden. Het andere trappenhuis moet zo veel mogelijk onbelemmerd beschikbaar blijven voor ontruiming.",
          "Daarnaast wordt de ploeg tijdelijk uit elkaar gehaald terwijl de daadwerkelijke omstandigheden boven nog niet bekend zijn. Dat hoeft niet per definitie onveilig te zijn, maar levert hier weinig extra op omdat trappenhuis A al rookvrij is, een afnamepunt heeft en een bruikbare inzetroute biedt."
        ]}
      ],
      assessment: "Sterke en goed uitlegbare keuze.",
      stateEffects: ["bluswater: gunstig georganiseerd", "vluchtweg: rookvrij / beschermd", "situatiebeeld: +1", "logistiek: +1", "trappenhuis A: inzet", "trappenhuis B: beschikbaar voor ontvluchting"],
      closing: "Didactisch belangrijk: dit is een beslissing van de manschappen op hoogte. De kracht zit niet alleen in de keuze zelf, maar ook in het feit dat deze direct is teruggekoppeld en door de bevelvoerder is bevestigd."
    }
  });

  Object.assign(c(n1,'A'), {
    consequenceDetail: {
      time: "14:33 uur — verticale verkenning start direct",
      paragraphs: [
        "De aanvalsploeg vertrekt vrijwel direct met blus- en toetredingsmateriaal richting verdieping 12. Beneden verzamelt de chauffeur samen met de beheerder de gebouwinformatie.",
        "De inzet wint tijd richting de mogelijke vermissing, maar de ploeg gaat omhoog terwijl het inzettrappenhuis, de exacte koppeling met de stijgleiding en de invloed van de wind nog niet volledig zijn bevestigd."
      ]
    },
    debrief: {
      sections: [
        { title: "Waarom is deze keuze begrijpelijk?", paragraphs: [
          "De melding bevat een mogelijke persoon in de brandwoning. Vanuit reddingsdruk is het logisch dat je geen minuten wilt verliezen aan een volledig uitgewerkt objectbeeld voordat iemand richting de brand gaat.",
          "De keuze gebruikt de beschikbare capaciteit parallel: de ploeg beweegt omhoog terwijl beneden informatie wordt verzameld."
        ]},
        { title: "Waar zit de kwetsbaarheid?", paragraphs: [
          "Hoogbouw is sterk afhankelijk van de juiste combinatie van lift, inzettrappenhuis, stijgleiding, communicatie en rookvrije terugtrekroute. Als één van die onderdelen boven anders blijkt dan aangenomen, moet de ploeg corrigeren nadat zij al op hoogte is.",
          "De wind aan de brandgevel is bovendien nog niet tactisch gekoppeld aan de binneninzet. Bij een later geopende deur kan dat relevant worden voor flowpath en Wind Driven Fire."
        ]}
      ],
      assessment: "Verdedigbaar vanuit reddingsdruk, maar kwetsbaarder georganiseerd.",
      strengths: ["snelle verticale verkenning", "tijdwinst richting mogelijke redding", "beneden blijft informatie-inwinning doorgaan"],
      risks: ["inzettrappenhuis nog niet bevestigd", "bluswaterroute nog niet volledig bevestigd", "windinvloed nog onvoldoende gekoppeld aan inzet"],
      stateEffects: ["situatiebeeld: -1", "tijd: nauwelijks extra vertraging", "latere verkeerde trapkeuze kan extra tijd kosten"]
    }
  });

  Object.assign(c(n1,'B'), {
    consequenceDetail: {
      time: "14:33 uur — informatie wordt parallel opgebouwd",
      paragraphs: [
        "De eerste ploeg gaat naar verdieping 12 voor een gerichte verkenning. Beneden blijft voldoende capaciteit beschikbaar om met de beheerder de stijgleiding, gebouwvoorzieningen en het inzettrappenhuis te bevestigen.",
        "Daardoor ontstaat vrijwel gelijktijdig een beeld op hoogte en een betrouwbaarder objectbeeld beneden."
      ]
    },
    debrief: {
      sections: [
        { title: "Waarom is dit een robuuste start?", paragraphs: [
          "Deze keuze voorkomt dat voorbereiding en verticale verkenning na elkaar plaatsvinden. Ze lopen parallel. Dat is belangrijk omdat hoogbouw zowel tijdkritisch als informatie-intensief is.",
          "De ploeg kan op -2 actuele omstandigheden melden, terwijl beneden de kritieke voorzieningen en route worden bevestigd. Daardoor ontstaat snel een gedeeld beeld zonder de inzet volledig stil te zetten."
        ]},
        { title: "Wat blijft aandacht vragen?", paragraphs: [
          "Ook bij deze keuze mag de ploeg op hoogte niet automatisch doorstoten. De informatie uit de commandoruimte moet worden gekoppeld aan wat daadwerkelijk op verdieping 12 en hoger wordt waargenomen."
        ]}
      ],
      assessment: "Sterke, evenwichtige start.",
      strengths: ["tijd en voorbereiding lopen parallel", "snel situatiebeeld op hoogte", "beneden blijft capaciteit voor water en objectinformatie"],
      risks: ["vereist strakke terugmelding tussen ploeg en bevelvoerder"],
      stateEffects: ["situatiebeeld: +1", "tijdverlies: beperkt", "verticale verkenning: vroeg gestart"]
    }
  });

  Object.assign(c(n2,'B'), {
    consequenceDetail: {
      time: "14:36 uur — uitstappen op verdieping 13",
      paragraphs: [
        "De ploeg wint één verdieping loopafstand en staat sneller dichter bij de brand. Tegelijk ligt de uitstapplaats dichter bij mogelijke rookverspreiding, wateroverlast en verstoring rond de brandverdieping.",
        "De ploeg heeft minder afstand om een veilige inzetbasis en terugtrekroute te organiseren voordat zij de brandverdieping nadert."
      ]
    },
    debrief: {
      sections: [
        { title: "Waarom lijkt deze keuze aantrekkelijk?", paragraphs: [
          "De gedachte is eenvoudig: één verdieping minder lopen betekent iets sneller bij de brand en minder fysieke belasting. Bij een mogelijke vermissing klinkt dat logisch."
        ]},
        { title: "Waarom wijkt dit af van de VRR-lijn?", paragraphs: [
          "VRR hanteert standaard brandverdieping -2 voor het uitstappen met de brandweerlift. Die afstand is niet willekeurig; zij geeft ruimte voor beoordeling, trappenhuiskeuze, bluswateropbouw en organisatie buiten de directe invloed van de brandverdieping.",
          "Door op -1 uit te stappen, lever je voor geringe tijdwinst een deel van die veiligheids- en herstelmarge in."
        ]}
      ],
      assessment: "Ongunstig in dit scenario.",
      strengths: ["iets kortere looproute"],
      risks: ["minder veiligheidsmarge", "dichter bij rook en water", "minder ruimte voor organisatie op hoogte"],
      stateEffects: ["verticale inzetpositie: -1", "risico liftomgeving: verhoogd"]
    }
  });

  Object.assign(c(n2,'C'), {
    consequenceDetail: {
      time: "14:35 uur — ploeg kiest de trap",
      paragraphs: [
        "De ploeg blijft volledig onafhankelijk van de lift, maar moet twaalf verdiepingen stijgen met de noodzakelijke middelen.",
        "De inzet loopt daardoor vertraging op en de fysieke belasting ontstaat voordat de feitelijke brandbestrijding begint."
      ]
    },
    debrief: {
      sections: [
        { title: "Wanneer is dit wel logisch?", paragraphs: [
          "De trap is het noodzakelijke alternatief wanneer de brandweerlift door rook, water, vuur of technisch falen niet betrouwbaar is. Dan moet de inzet daarop worden aangepast."
        ]},
        { title: "Waarom is het hier minder sterk?", paragraphs: [
          "In deze situatie is de lift gecontroleerd en bruikbaar. Door hem niet te gebruiken, wordt beschikbare gebouwtechniek niet benut en neemt ploegbelasting vroeg toe.",
          "VRR benoemt bij liftuitval boven de tiende verdieping expliciet extra traplooptijd en de noodzaak rekening te houden met personele capaciteit en materiaalgewicht."
        ]}
      ],
      assessment: "Veilig mogelijk, maar inefficiënt zolang de lift betrouwbaar is.",
      strengths: ["onafhankelijk van lifttechniek"],
      risks: ["tijdverlies", "hogere fysieke belasting", "meer ademlucht- en logistieke druk later in de inzet"],
      stateEffects: ["ploegbelasting: +2", "tijd: +2"]
    }
  });

  Object.assign(c(n3,'B'), {
    consequenceDetail: {
      time: "14:38 uur — route via trappenhuis B",
      paragraphs: [
        "De ploeg kiest de op het eerste gezicht kortere route richting de woning. Op verdieping 13 blijkt het afnamepunt echter niet logisch aan te sluiten op de gekozen route.",
        "De ploeg moet extra zoeken en omlopen. De slangvoering wordt lastiger en de eerder veronderstelde tijdwinst verdwijnt."
      ]
    },
    debrief: {
      sections: [
        { title: "Waarom is deze keuze niet onlogisch?", paragraphs: [
          "Een kortere en rustige route naar de brandwoning kan aantrekkelijk zijn. Zeker onder tijdsdruk is het logisch dat een ploeg afstand en bereikbaarheid meeweegt."
        ]},
        { title: "Waarom is de keuze toch kwetsbaar?", paragraphs: [
          "Bij een wokkeltrappenhuis moet de route ook worden gekoppeld aan het afnamepunt van de blusleiding en aan het behouden van een tweede vluchtweg. Alleen de kortste looproute kiezen is daarom onvoldoende.",
          "Als de wateraansluiting pas hoger of aan de andere zijde logisch wordt, ontstaat omloop en complexere slangvoering op een plek waar rookinvloed kan toenemen."
        ]}
      ],
      assessment: "Verdedigbaar gedacht, maar onvoldoende gekoppeld aan de bluswatervoorziening.",
      strengths: ["kortere route lijkt aanvankelijk aantrekkelijk"],
      risks: ["extra omloop", "lastiger slangmanagement", "minder duidelijke scheiding tussen inzetlogica en vluchtweglogica"],
      stateEffects: ["tijd: +1", "logistiek: -1"]
    }
  });

  Object.assign(c(n3,'C'), {
    consequenceDetail: {
      time: "14:38 uur — beide trappenhuizen worden verkend",
      paragraphs: [
        "De ploeg verdeelt zich kort over beide trappenhuizen. Daardoor komt sneller informatie beschikbaar over beide routes.",
        "Tegelijk worden vanaf dit moment beide trappenhuizen onderdeel van de brandweerinzet. De scheiding tussen inzetroute en vlucht-/ontruimingsroute wordt minder duidelijk."
      ]
    },
    debrief: {
      sections: [
        { title: "Wat levert deze keuze op?", paragraphs: [
          "Je krijgt snel informatie over beide routes. In een onduidelijk gebouw kan dat op zichzelf waardevol zijn."
        ]},
        { title: "Waarom is dit hier kwetsbaarder?", paragraphs: [
          "VRR benadrukt juist dat bij een wokkeltrappenhuis scherp wordt afgesproken welk trappenhuis voor de brandweerinzet wordt gebruikt, zodat het andere beschikbaar blijft voor ontruiming.",
          "Spontane ontruiming kan al vóór aankomst van de brandweer zijn begonnen. Door beide trappenhuizen vroeg te belasten, wordt latere scheiding van bewonersstromen, materiaaltransport en brandweerinzet lastiger.",
          "Bovendien wordt de ploeg tijdelijk gesplitst terwijl één rookvrije route met een zichtbaar afnamepunt al een duidelijke inzetmogelijkheid biedt."
        ]}
      ],
      assessment: "Informatief, maar operationeel kwetsbaarder.",
      strengths: ["snelle vergelijking van beide routes"],
      risks: ["beide vluchtwegen worden belast", "ploeg tijdelijk gesplitst", "spontane ontruiming wordt lastiger te organiseren"],
      stateEffects: ["vluchtwegbescherming: -1", "later spontane ontruiming: complexer"]
    }
  });

})();

// V4: volledige verdiepende uitwerking voor keuzemomenten 4 t/m 18.
(() => {
  const S=window.SCENARIO;
  const byId=id=>S.nodes.find(n=>n.id===id);
  const c=(n,id)=>n.choices.find(x=>x.id===id);
  Object.assign(byId(4), {sourceFrame: "In VRR is het bruggenhoofd geen losse verzamelplek maar een georganiseerde operationele basis. Het handboek noemt een operationeel leidinggevende, een logistieke functionaris en een intercombedienaar als functies rond het bruggenhoofd. De scenario-uitwerkingen plaatsen het bruggenhoofd standaard op -2 of op een andere aantoonbaar logische en veilige locatie.\n\nBij scenario 1 wordt het bruggenhoofd als back-up ingericht; bij scenario 2 en 3 wordt het onderdeel van de noodzakelijke interventievoorbereiding. In scenario 2 wordt expliciet twee keer genoemd: bruggenhoofd op -2 en twee LD-stralen gereed voordat de offensieve binneninzet wordt opgebouwd.\n\nVRR koppelt ook materiaal aan het bruggenhoofd: aanvullende blusmaterialen, ademlucht (vuistregel één schone fles per ingezette functionaris), wervelplank/bergingsbrancard, drinkwater/isotone drank, objecttekeningen, smokestoppers, vluchtmaskers, accuventilatoren en CO-meters. De plek moet dus niet alleen dichter bij de brand zijn, maar vooral bruikbaar blijven als veilige commandovoerings- en logistieke basis.\n\nIn scenario 2 en 3 wordt CO continu gemeten op de plaats van het bruggenhoofd.\n\nHet bruggenhoofd is ook een schakel in de communicatie tussen binnen, commandoruimte en buitenorganisatie.\n\nBronbasis: Brandweer Rotterdam-Rijnmond, Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, V1.0 (2024), p. 13 en scenario-uitwerking p. 19-23.", situationDetail: {"time": "14:39 uur — verdieping 12", "intro": ["Op verdieping 12 is direct bij de brandweerlift en het gekozen inzettrappenhuis een ruim voorportaal. De ploeg heeft hier nog geen rook of warmtebelasting waargenomen."], "observations": ["CO-meter: 0 ppm;", "brandweerlift functioneert normaal;", "afnamepunt van de blusleiding ligt in de directe nabijheid;", "op verdieping 13 is lichte rooklucht merkbaar bij de deur naar de gang;", "de mogelijke vermissing is nog niet opgehelderd."], "after": ["De tweede TS heeft beneden aanvullend materiaal gereed. De vraag is nu niet alleen hoe dicht je bij de brand wilt zitten, maar waar leiding, back-up, communicatie en logistiek veilig georganiseerd kunnen blijven."], "prompt": "Waar richt je het bruggenhoofd in?"}});
  Object.assign(c(byId(4),'A'), {
    consequenceDetail: {time: "14:39 uur — verdieping 12 — gevolg van keuze A", paragraphs: ["Je kiest voor de rookvrije verdieping -2. Daarmee blijven lift, logistiek en leiding op één veilige basis gekoppeld terwijl CO continu kan worden bewaakt."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Sluit het sterkst aan bij het VRR-basismodel: -2, CO-bewaking, veilige koppeling met lift en logistiek.", "In VRR is het bruggenhoofd geen losse verzamelplek maar een georganiseerde operationele basis. Het handboek noemt een operationeel leidinggevende, een logistieke functionaris en een intercombedienaar als functies rond het bruggenhoofd. De scenario-uitwerkingen plaatsen het bruggenhoofd standaard op -2 of op een andere aantoonbaar logische en veilige locatie.", "Bij scenario 1 wordt het bruggenhoofd als back-up ingericht; bij scenario 2 en 3 wordt het onderdeel van de noodzakelijke interventievoorbereiding. In scenario 2 wordt expliciet twee keer genoemd: bruggenhoofd op -2 en twee LD-stralen gereed voordat de offensieve binneninzet wordt opgebouwd."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["VRR koppelt ook materiaal aan het bruggenhoofd: aanvullende blusmaterialen, ademlucht (vuistregel één schone fles per ingezette functionaris), wervelplank/bergingsbrancard, drinkwater/isotone drank, objecttekeningen, smokestoppers, vluchtmaskers, accuventilatoren en CO-meters. De plek moet dus niet alleen dichter bij de brand zijn, maar vooral bruikbaar blijven als veilige commandovoerings- en logistieke basis.", "In scenario 2 en 3 wordt CO continu gemeten op de plaats van het bruggenhoofd.", "Het bruggenhoofd is ook een schakel in de communicatie tussen binnen, commandoruimte en buitenorganisatie."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["Je kiest voor de rookvrije verdieping -2. Daarmee blijven lift, logistiek en leiding op één veilige basis gekoppeld terwijl CO continu kan worden bewaakt."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze B: Dichterbij is niet automatisch beter. De rooklucht op -1 is juist een signaal dat het bruggenhoofd daar sneller bedreigd kan raken.", "Keuze C: Kan vanuit reddingsdruk aantrekkelijk lijken, maar bij scenario 2/3 maakt VRR het bruggenhoofd juist voorwaardelijk voor een beheersbare inzet."]}], assessment: c(byId(4),'A').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(4),'A').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(4),'A').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["bruggenhoofd: operationeel", "CO-bewaking: actief", "logistieke basis: stabiel"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(c(byId(4),'B'), {
    consequenceDetail: {time: "14:39 uur — verdieping 12 — gevolg van keuze B", paragraphs: ["Het bruggenhoofd komt dichter bij de brand. De logistieke looproute wordt korter, maar de lichte rooklucht op -1 betekent dat de basis al dichter tegen de beïnvloede zone ligt."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Dichterbij is niet automatisch beter. De rooklucht op -1 is juist een signaal dat het bruggenhoofd daar sneller bedreigd kan raken.", "In VRR is het bruggenhoofd geen losse verzamelplek maar een georganiseerde operationele basis. Het handboek noemt een operationeel leidinggevende, een logistieke functionaris en een intercombedienaar als functies rond het bruggenhoofd. De scenario-uitwerkingen plaatsen het bruggenhoofd standaard op -2 of op een andere aantoonbaar logische en veilige locatie.", "Bij scenario 1 wordt het bruggenhoofd als back-up ingericht; bij scenario 2 en 3 wordt het onderdeel van de noodzakelijke interventievoorbereiding. In scenario 2 wordt expliciet twee keer genoemd: bruggenhoofd op -2 en twee LD-stralen gereed voordat de offensieve binneninzet wordt opgebouwd."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["VRR koppelt ook materiaal aan het bruggenhoofd: aanvullende blusmaterialen, ademlucht (vuistregel één schone fles per ingezette functionaris), wervelplank/bergingsbrancard, drinkwater/isotone drank, objecttekeningen, smokestoppers, vluchtmaskers, accuventilatoren en CO-meters. De plek moet dus niet alleen dichter bij de brand zijn, maar vooral bruikbaar blijven als veilige commandovoerings- en logistieke basis.", "In scenario 2 en 3 wordt CO continu gemeten op de plaats van het bruggenhoofd.", "Het bruggenhoofd is ook een schakel in de communicatie tussen binnen, commandoruimte en buitenorganisatie."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["Het bruggenhoofd komt dichter bij de brand. De logistieke looproute wordt korter, maar de lichte rooklucht op -1 betekent dat de basis al dichter tegen de beïnvloede zone ligt."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Sluit het sterkst aan bij het VRR-basismodel: -2, CO-bewaking, veilige koppeling met lift en logistiek.", "Keuze C: Kan vanuit reddingsdruk aantrekkelijk lijken, maar bij scenario 2/3 maakt VRR het bruggenhoofd juist voorwaardelijk voor een beheersbare inzet."]}], assessment: c(byId(4),'B').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(4),'B').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(4),'B').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["bruggenhoofd: dichter bij rookzone", "herstelruimte: kleiner"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(c(byId(4),'C'), {
    consequenceDetail: {time: "14:39 uur — verdieping 12 — gevolg van keuze C", paragraphs: ["De ploeg beweegt door zonder vaste operationele basis op hoogte. Daardoor blijven leiding, back-up en materiaalaanvoer voorlopig verspreid georganiseerd."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Kan vanuit reddingsdruk aantrekkelijk lijken, maar bij scenario 2/3 maakt VRR het bruggenhoofd juist voorwaardelijk voor een beheersbare inzet.", "In VRR is het bruggenhoofd geen losse verzamelplek maar een georganiseerde operationele basis. Het handboek noemt een operationeel leidinggevende, een logistieke functionaris en een intercombedienaar als functies rond het bruggenhoofd. De scenario-uitwerkingen plaatsen het bruggenhoofd standaard op -2 of op een andere aantoonbaar logische en veilige locatie.", "Bij scenario 1 wordt het bruggenhoofd als back-up ingericht; bij scenario 2 en 3 wordt het onderdeel van de noodzakelijke interventievoorbereiding. In scenario 2 wordt expliciet twee keer genoemd: bruggenhoofd op -2 en twee LD-stralen gereed voordat de offensieve binneninzet wordt opgebouwd."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["VRR koppelt ook materiaal aan het bruggenhoofd: aanvullende blusmaterialen, ademlucht (vuistregel één schone fles per ingezette functionaris), wervelplank/bergingsbrancard, drinkwater/isotone drank, objecttekeningen, smokestoppers, vluchtmaskers, accuventilatoren en CO-meters. De plek moet dus niet alleen dichter bij de brand zijn, maar vooral bruikbaar blijven als veilige commandovoerings- en logistieke basis.", "In scenario 2 en 3 wordt CO continu gemeten op de plaats van het bruggenhoofd.", "Het bruggenhoofd is ook een schakel in de communicatie tussen binnen, commandoruimte en buitenorganisatie."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De ploeg beweegt door zonder vaste operationele basis op hoogte. Daardoor blijven leiding, back-up en materiaalaanvoer voorlopig verspreid georganiseerd."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Sluit het sterkst aan bij het VRR-basismodel: -2, CO-bewaking, veilige koppeling met lift en logistiek.", "Keuze B: Dichterbij is niet automatisch beter. De rooklucht op -1 is juist een signaal dat het bruggenhoofd daar sneller bedreigd kan raken."]}], assessment: c(byId(4),'C').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(4),'C').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(4),'C').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["bruggenhoofd: niet ingericht", "logistiek: kwetsbaarder", "leiding op hoogte: minder geborgd"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(byId(5), {sourceFrame: "Rookvrije vluchtwegen zijn een van de centrale thema’s van het VRR-handboek. Bij zowel scenario 1 als scenario 2 wordt beschreven dat het doorbreken van de compartimentsgrens door een deur te openen altijd tot enige rookverspreiding buiten de ontstaansruimte kan leiden. Daarom moet het voorportaal rookvrij blijven en wordt een smokestopper geplaatst bij de toegang tot het brandcompartiment en bij het voorportaal richting lift.\n\nDe CAN-bijlage geeft een belangrijk praktisch voorbeeld: een deur die voor toegang wordt geforceerd kan er helemaal uit komen te liggen. Die nieuwe ventilatieopening kan vervolgens voor een zeer grote branduitbreiding zorgen. De acties van de ploeg veranderen dus zelf de condities en moeten in de terugmelding worden meegenomen.\n\nHet VRR-materiaaloverzicht koppelt de smokestopper expliciet aan verkenning/compartimentering. Bij trappenhuisbescherming wordt bovendien beschreven dat moet worden onderzocht waar de overdruk zich bevindt; afhankelijk van het drukconcept kan de smokestopper zelfs tegengesteld bollen. Dit onderstreept dat een smokestopper geen los “doek in de deur” is, maar onderdeel is van deur- en drukmanagement.\n\nVoorbeeld VRR scenario 1: smokestopper bij brandcompartiment én voorportaal richting lift.\n\nVoorbeeld VRR CAN: geforceerde deur valt eruit en wordt een ventilatieopening die forse branduitbreiding kan veroorzaken.\n\nBronbasis: Brandweer Rotterdam-Rijnmond, Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, V1.0 (2024), p. 18-21, p. 38-39 en bijlage CAN p. 42.", situationDetail: {"time": "14:42 uur — verdieping 14", "intro": ["De ploeg bereikt via het inzettrappenhuis de brandverdieping. In de gang hangt rook, maar er is nog bruikbaar zicht. De voordeur van de brandwoning is gesloten en achter de deur is duidelijke warmte voelbaar."], "observations": ["brandwoning nog niet betreden;", "rook in de gang, maar gang is nog begaanbaar;", "smokestopper beschikbaar;", "blusmiddel wordt opgebouwd;", "wind staat op de brandgevel."], "after": ["Wat de ploeg nu met de deur doet, verandert zelf de lucht- en rookstroming. Dit is een beslissing van de manschappen op basis van de actuele omstandigheden, met terugmelding naar de bevelvoerder."], "prompt": "Hoe benadert de ploeg de deur van de brandwoning?"}});
  Object.assign(c(byId(5),'A'), {
    consequenceDetail: {time: "14:42 uur — verdieping 14 — gevolg van keuze A", paragraphs: ["De smokestopper wordt geplaatst voordat de deur gecontroleerd wordt geopend. De straal is inzetgereed en de ploeg houdt de opening zo klein en kort mogelijk."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Past rechtstreeks bij de VRR-scenario’s: opening gecontroleerd houden, smokestopper gebruiken en pas openen wanneer de inzet daadwerkelijk gereed is.", "Rookvrije vluchtwegen zijn een van de centrale thema’s van het VRR-handboek. Bij zowel scenario 1 als scenario 2 wordt beschreven dat het doorbreken van de compartimentsgrens door een deur te openen altijd tot enige rookverspreiding buiten de ontstaansruimte kan leiden. Daarom moet het voorportaal rookvrij blijven en wordt een smokestopper geplaatst bij de toegang tot het brandcompartiment en bij het voorportaal richting lift.", "De CAN-bijlage geeft een belangrijk praktisch voorbeeld: een deur die voor toegang wordt geforceerd kan er helemaal uit komen te liggen. Die nieuwe ventilatieopening kan vervolgens voor een zeer grote branduitbreiding zorgen. De acties van de ploeg veranderen dus zelf de condities en moeten in de terugmelding worden meegenomen."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["Het VRR-materiaaloverzicht koppelt de smokestopper expliciet aan verkenning/compartimentering. Bij trappenhuisbescherming wordt bovendien beschreven dat moet worden onderzocht waar de overdruk zich bevindt; afhankelijk van het drukconcept kan de smokestopper zelfs tegengesteld bollen. Dit onderstreept dat een smokestopper geen los “doek in de deur” is, maar onderdeel is van deur- en drukmanagement.", "Voorbeeld VRR scenario 1: smokestopper bij brandcompartiment én voorportaal richting lift.", "Voorbeeld VRR CAN: geforceerde deur valt eruit en wordt een ventilatieopening die forse branduitbreiding kan veroorzaken."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De smokestopper wordt geplaatst voordat de deur gecontroleerd wordt geopend. De straal is inzetgereed en de ploeg houdt de opening zo klein en kort mogelijk."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze B: Kan bruikbare informatie geven, maar de bron maakt duidelijk dat zelfs kort openen de stroming en rookverspreiding kan veranderen.", "Keuze C: Is in deze omstandigheden ongunstig: het maakt van de deur bewust een grote stromingsopening en brengt gang/voorportaal en daarmee de vluchtweg in gevaar."]}], assessment: c(byId(5),'A').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(5),'A').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(5),'A').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["deurmanagement: beheerst", "vluchtweg: beter beschermd", "flowpath-risico: beperkt"], closing: "Rolafspraak: binnen ligt de beslissing bij de manschappen zolang die veilig en verantwoord is; relevante waarnemingen en afwijkingen worden gedeeld/getoetst met de bevelvoerder."}
  });
  Object.assign(c(byId(5),'B'), {
    consequenceDetail: {time: "14:42 uur — verdieping 14 — gevolg van keuze B", paragraphs: ["De deur wordt kort geopend om informatie te winnen. Er komt direct een rookpuls de gang in voordat de deur weer dichtgaat en de smokestopper wordt aangebracht."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Kan bruikbare informatie geven, maar de bron maakt duidelijk dat zelfs kort openen de stroming en rookverspreiding kan veranderen.", "Rookvrije vluchtwegen zijn een van de centrale thema’s van het VRR-handboek. Bij zowel scenario 1 als scenario 2 wordt beschreven dat het doorbreken van de compartimentsgrens door een deur te openen altijd tot enige rookverspreiding buiten de ontstaansruimte kan leiden. Daarom moet het voorportaal rookvrij blijven en wordt een smokestopper geplaatst bij de toegang tot het brandcompartiment en bij het voorportaal richting lift.", "De CAN-bijlage geeft een belangrijk praktisch voorbeeld: een deur die voor toegang wordt geforceerd kan er helemaal uit komen te liggen. Die nieuwe ventilatieopening kan vervolgens voor een zeer grote branduitbreiding zorgen. De acties van de ploeg veranderen dus zelf de condities en moeten in de terugmelding worden meegenomen."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["Het VRR-materiaaloverzicht koppelt de smokestopper expliciet aan verkenning/compartimentering. Bij trappenhuisbescherming wordt bovendien beschreven dat moet worden onderzocht waar de overdruk zich bevindt; afhankelijk van het drukconcept kan de smokestopper zelfs tegengesteld bollen. Dit onderstreept dat een smokestopper geen los “doek in de deur” is, maar onderdeel is van deur- en drukmanagement.", "Voorbeeld VRR scenario 1: smokestopper bij brandcompartiment én voorportaal richting lift.", "Voorbeeld VRR CAN: geforceerde deur valt eruit en wordt een ventilatieopening die forse branduitbreiding kan veroorzaken."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De deur wordt kort geopend om informatie te winnen. Er komt direct een rookpuls de gang in voordat de deur weer dichtgaat en de smokestopper wordt aangebracht."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Past rechtstreeks bij de VRR-scenario’s: opening gecontroleerd houden, smokestopper gebruiken en pas openen wanneer de inzet daadwerkelijk gereed is.", "Keuze C: Is in deze omstandigheden ongunstig: het maakt van de deur bewust een grote stromingsopening en brengt gang/voorportaal en daarmee de vluchtweg in gevaar."]}], assessment: c(byId(5),'B').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(5),'B').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(5),'B').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["deurmanagement: tijdelijk open", "wind/flowpath: verhoogd", "rookbelasting gang: +1"], closing: "Rolafspraak: binnen ligt de beslissing bij de manschappen zolang die veilig en verantwoord is; relevante waarnemingen en afwijkingen worden gedeeld/getoetst met de bevelvoerder."}
  });
  Object.assign(c(byId(5),'C'), {
    consequenceDetail: {time: "14:42 uur — verdieping 14 — gevolg van keuze C", paragraphs: ["De deur wordt volledig geopend. De gang vult merkbaar sneller met rook en hete gassen en het voorportaal begint mee te worden belast."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Is in deze omstandigheden ongunstig: het maakt van de deur bewust een grote stromingsopening en brengt gang/voorportaal en daarmee de vluchtweg in gevaar.", "Rookvrije vluchtwegen zijn een van de centrale thema’s van het VRR-handboek. Bij zowel scenario 1 als scenario 2 wordt beschreven dat het doorbreken van de compartimentsgrens door een deur te openen altijd tot enige rookverspreiding buiten de ontstaansruimte kan leiden. Daarom moet het voorportaal rookvrij blijven en wordt een smokestopper geplaatst bij de toegang tot het brandcompartiment en bij het voorportaal richting lift.", "De CAN-bijlage geeft een belangrijk praktisch voorbeeld: een deur die voor toegang wordt geforceerd kan er helemaal uit komen te liggen. Die nieuwe ventilatieopening kan vervolgens voor een zeer grote branduitbreiding zorgen. De acties van de ploeg veranderen dus zelf de condities en moeten in de terugmelding worden meegenomen."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["Het VRR-materiaaloverzicht koppelt de smokestopper expliciet aan verkenning/compartimentering. Bij trappenhuisbescherming wordt bovendien beschreven dat moet worden onderzocht waar de overdruk zich bevindt; afhankelijk van het drukconcept kan de smokestopper zelfs tegengesteld bollen. Dit onderstreept dat een smokestopper geen los “doek in de deur” is, maar onderdeel is van deur- en drukmanagement.", "Voorbeeld VRR scenario 1: smokestopper bij brandcompartiment én voorportaal richting lift.", "Voorbeeld VRR CAN: geforceerde deur valt eruit en wordt een ventilatieopening die forse branduitbreiding kan veroorzaken."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De deur wordt volledig geopend. De gang vult merkbaar sneller met rook en hete gassen en het voorportaal begint mee te worden belast."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Past rechtstreeks bij de VRR-scenario’s: opening gecontroleerd houden, smokestopper gebruiken en pas openen wanneer de inzet daadwerkelijk gereed is.", "Keuze B: Kan bruikbare informatie geven, maar de bron maakt duidelijk dat zelfs kort openen de stroming en rookverspreiding kan veranderen."]}], assessment: c(byId(5),'C').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(5),'C').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(5),'C').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["deurmanagement: ongunstig", "rook/CO: +2", "vluchtweg: bedreigd"], closing: "Rolafspraak: binnen ligt de beslissing bij de manschappen zolang die veilig en verantwoord is; relevante waarnemingen en afwijkingen worden gedeeld/getoetst met de bevelvoerder."}
  });
  Object.assign(byId(6), {sourceFrame: "VRR benoemt winddruk, ventilatie en stack-effect als factoren die onverwachte complicaties kunnen veroorzaken. Wind op de gevel kan de brand aanwakkeren of de brand en hete gassen versneld inpandig verplaatsen. Het kritieke moment is het creëren van een flowpath, bijvoorbeeld door het openen van een deur.\n\nDe bron geeft daarom een duidelijke handelingsrichting: zorg eerst dat maximale slagkracht gereed is en overweeg middelen zoals fognails, Cobra of floor-below nozzles. Dit zijn voorbeelden uit het VRR-handboek van mogelijkheden om de brand te beïnvloeden zonder de ploeg direct in de gevaarlijkste stroming te plaatsen. Welke middelen regionaal beschikbaar zijn, is een aparte VGGM-keuze.\n\nOok het Coandă-effect is relevant voor de buitenverkenning: rook kan langs de gevel omhoog “plakken” en bovenliggende verdiepingen of luchtinlaten bedreigen. Het buitenbeeld moet daarom niet uitsluitend naar het brandraam kijken, maar ook naar rookgedrag boven de brand.\n\nVRR waarschuwt expliciet voor een flowpath die ontstaat door een deur te openen terwijl winddruk op de gevel staat.\n\nDe voorbeelden fognail, Cobra en floor-below nozzle worden in de bron genoemd als te overwegen opties bij deze complicatie.\n\nCoandă: blijf boven de brand kijken naar rook langs de gevel en bedreigde openingen/luchtinlaten.\n\nBronbasis: Brandweer Rotterdam-Rijnmond, Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, V1.0 (2024), p. 9.", situationDetail: {"time": "14:44 uur — bij de brandwoning", "intro": ["Buiten komt een aanvullende melding: de wind staat rechtstreeks op het geopende raam van de brandwoning. Binnen merkt de ploeg dat de hitte bij de deuropening sterk toeneemt."], "observations": ["winddruk op de brandgevel;", "geopend raam in de brandwoning;", "weinig zichtbare uitstroom van rook aan de raamzijde;", "toenemende hitte bij de deuropening;", "mogelijke flowpath tussen raam en gang."], "after": ["De ploeg moet nu bepalen of het binnenbeeld past bij een windgedreven brand en welke directe veilige reactie nodig is."], "prompt": "Wat doet de ploeg?"}});
  Object.assign(c(byId(6),'A'), {
    consequenceDetail: {time: "14:44 uur — bij de brandwoning — gevolg van keuze A", paragraphs: ["De ploeg verbreekt de directe blootstelling aan de stroming, gaat terug achter de scheiding en laat extra koelend vermogen en back-up gereedmaken voordat opnieuw wordt beoordeeld."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Sluit het beste aan bij de bron: flowpath beperken, maximale slagkracht/back-up gereedmaken en daarna opnieuw toetreden.", "VRR benoemt winddruk, ventilatie en stack-effect als factoren die onverwachte complicaties kunnen veroorzaken. Wind op de gevel kan de brand aanwakkeren of de brand en hete gassen versneld inpandig verplaatsen. Het kritieke moment is het creëren van een flowpath, bijvoorbeeld door het openen van een deur.", "De bron geeft daarom een duidelijke handelingsrichting: zorg eerst dat maximale slagkracht gereed is en overweeg middelen zoals fognails, Cobra of floor-below nozzles. Dit zijn voorbeelden uit het VRR-handboek van mogelijkheden om de brand te beïnvloeden zonder de ploeg direct in de gevaarlijkste stroming te plaatsen. Welke middelen regionaal beschikbaar zijn, is een aparte VGGM-keuze.", "Ook het Coandă-effect is relevant voor de buitenverkenning: rook kan langs de gevel omhoog “plakken” en bovenliggende verdiepingen of luchtinlaten bedreigen. Het buitenbeeld moet daarom niet uitsluitend naar het brandraam kijken, maar ook naar rookgedrag boven de brand."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["VRR waarschuwt expliciet voor een flowpath die ontstaat door een deur te openen terwijl winddruk op de gevel staat.", "De voorbeelden fognail, Cobra en floor-below nozzle worden in de bron genoemd als te overwegen opties bij deze complicatie.", "Coandă: blijf boven de brand kijken naar rook langs de gevel en bedreigde openingen/luchtinlaten."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De ploeg verbreekt de directe blootstelling aan de stroming, gaat terug achter de scheiding en laat extra koelend vermogen en back-up gereedmaken voordat opnieuw wordt beoordeeld."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze B: Negeert de combinatie van winddruk en deuropening die VRR juist als specifieke hoogbouwcomplicatie benoemt.", "Keuze C: Kan als brandbeïnvloeding denkbaar zijn, maar is alleen sterk als bereik en effect aantoonbaar zijn en de binnenploeg niet tijdens de poging blootgesteld blijft."]}], assessment: c(byId(6),'A').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(6),'A').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(6),'A').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["WDF-risico: herkend", "flowpath: beperkt", "back-up: versterkt"], closing: "Rolafspraak: binnen ligt de beslissing bij de manschappen zolang die veilig en verantwoord is; relevante waarnemingen en afwijkingen worden gedeeld/getoetst met de bevelvoerder."}
  });
  Object.assign(c(byId(6),'B'), {
    consequenceDetail: {time: "14:44 uur — bij de brandwoning — gevolg van keuze B", paragraphs: ["De ploeg probeert door te zetten. Bij verder openen van de deur neemt de hete stroming richting gang snel toe en de ploeg wordt gedwongen positie prijs te geven."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Negeert de combinatie van winddruk en deuropening die VRR juist als specifieke hoogbouwcomplicatie benoemt.", "VRR benoemt winddruk, ventilatie en stack-effect als factoren die onverwachte complicaties kunnen veroorzaken. Wind op de gevel kan de brand aanwakkeren of de brand en hete gassen versneld inpandig verplaatsen. Het kritieke moment is het creëren van een flowpath, bijvoorbeeld door het openen van een deur.", "De bron geeft daarom een duidelijke handelingsrichting: zorg eerst dat maximale slagkracht gereed is en overweeg middelen zoals fognails, Cobra of floor-below nozzles. Dit zijn voorbeelden uit het VRR-handboek van mogelijkheden om de brand te beïnvloeden zonder de ploeg direct in de gevaarlijkste stroming te plaatsen. Welke middelen regionaal beschikbaar zijn, is een aparte VGGM-keuze.", "Ook het Coandă-effect is relevant voor de buitenverkenning: rook kan langs de gevel omhoog “plakken” en bovenliggende verdiepingen of luchtinlaten bedreigen. Het buitenbeeld moet daarom niet uitsluitend naar het brandraam kijken, maar ook naar rookgedrag boven de brand."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["VRR waarschuwt expliciet voor een flowpath die ontstaat door een deur te openen terwijl winddruk op de gevel staat.", "De voorbeelden fognail, Cobra en floor-below nozzle worden in de bron genoemd als te overwegen opties bij deze complicatie.", "Coandă: blijf boven de brand kijken naar rook langs de gevel en bedreigde openingen/luchtinlaten."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De ploeg probeert door te zetten. Bij verder openen van de deur neemt de hete stroming richting gang snel toe en de ploeg wordt gedwongen positie prijs te geven."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Sluit het beste aan bij de bron: flowpath beperken, maximale slagkracht/back-up gereedmaken en daarna opnieuw toetreden.", "Keuze C: Kan als brandbeïnvloeding denkbaar zijn, maar is alleen sterk als bereik en effect aantoonbaar zijn en de binnenploeg niet tijdens de poging blootgesteld blijft."]}], assessment: c(byId(6),'B').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(6),'B').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(6),'B').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["ploegbelasting: sterk verhoogd", "vluchtweg: verslechtert", "gedwongen terugtrekking: mogelijk"], closing: "Rolafspraak: binnen ligt de beslissing bij de manschappen zolang die veilig en verantwoord is; relevante waarnemingen en afwijkingen worden gedeeld/getoetst met de bevelvoerder."}
  });
  Object.assign(c(byId(6),'C'), {
    consequenceDetail: {time: "14:44 uur — bij de brandwoning — gevolg van keuze C", paragraphs: ["Er wordt tijd gebruikt om externe brandbeïnvloeding te organiseren. Zolang bereik en effect niet zeker zijn, blijft de binnenploeg echter wachten in een nog steeds potentieel bedreigde positie."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Kan als brandbeïnvloeding denkbaar zijn, maar is alleen sterk als bereik en effect aantoonbaar zijn en de binnenploeg niet tijdens de poging blootgesteld blijft.", "VRR benoemt winddruk, ventilatie en stack-effect als factoren die onverwachte complicaties kunnen veroorzaken. Wind op de gevel kan de brand aanwakkeren of de brand en hete gassen versneld inpandig verplaatsen. Het kritieke moment is het creëren van een flowpath, bijvoorbeeld door het openen van een deur.", "De bron geeft daarom een duidelijke handelingsrichting: zorg eerst dat maximale slagkracht gereed is en overweeg middelen zoals fognails, Cobra of floor-below nozzles. Dit zijn voorbeelden uit het VRR-handboek van mogelijkheden om de brand te beïnvloeden zonder de ploeg direct in de gevaarlijkste stroming te plaatsen. Welke middelen regionaal beschikbaar zijn, is een aparte VGGM-keuze.", "Ook het Coandă-effect is relevant voor de buitenverkenning: rook kan langs de gevel omhoog “plakken” en bovenliggende verdiepingen of luchtinlaten bedreigen. Het buitenbeeld moet daarom niet uitsluitend naar het brandraam kijken, maar ook naar rookgedrag boven de brand."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["VRR waarschuwt expliciet voor een flowpath die ontstaat door een deur te openen terwijl winddruk op de gevel staat.", "De voorbeelden fognail, Cobra en floor-below nozzle worden in de bron genoemd als te overwegen opties bij deze complicatie.", "Coandă: blijf boven de brand kijken naar rook langs de gevel en bedreigde openingen/luchtinlaten."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["Er wordt tijd gebruikt om externe brandbeïnvloeding te organiseren. Zolang bereik en effect niet zeker zijn, blijft de binnenploeg echter wachten in een nog steeds potentieel bedreigde positie."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Sluit het beste aan bij de bron: flowpath beperken, maximale slagkracht/back-up gereedmaken en daarna opnieuw toetreden.", "Keuze B: Negeert de combinatie van winddruk en deuropening die VRR juist als specifieke hoogbouwcomplicatie benoemt."]}], assessment: c(byId(6),'C').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(6),'C').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(6),'C').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["tijd: +1", "externe optie: onzeker", "binnenploeg: blootstelling blijft"], closing: "Rolafspraak: binnen ligt de beslissing bij de manschappen zolang die veilig en verantwoord is; relevante waarnemingen en afwijkingen worden gedeeld/getoetst met de bevelvoerder."}
  });
  Object.assign(byId(7), {sourceFrame: "VRR behandelt de interne bluswatervoorziening als één van de drie kritieke randvoorwaarden. Voor gebouwen boven 70 meter gaat de bron uit van een blusleiding met eigen pomp en eigen watervoorraad, genoemd met een capaciteit van 1200 l/min. Bij uitval van de interne pomp kan de brandweer volgens het handboek geen voldoende hoeveelheid water met voldoende werkdruk op hoogte krijgen. Bij een ontwikkelde brand resteert dan feitelijk alleen klein blusmaterieel en zal minimaal het betrokken compartiment kunnen uitbranden.\n\nIn scenario 2 is de sprinkler afwezig, niet geactiveerd of gefaald en kan de brand binnen korte tijd ontwikkeld raken. De interventietaak bestaat dan niet alleen uit water leveren, maar expliciet uit het opbouwen van twee LD-stralen en het inrichten van het bruggenhoofd op -2. Pas daarna wordt van defensief binnen naar offensief binnen gewerkt.\n\nDe CAN-bijlage gebruikt precies het verschil in benodigde slagkracht als voorbeeld: misschien is een hogedrukstraal voldoende, maar een grotere ruimte kan een lagedrukstraal noodzakelijk maken. Een manschap kan op basis van de condities terugmelden dat hoge druk onvoldoende is; een bevelvoerder kan vervolgens opdracht geven om terug te trekken en lage druk af te leggen. Dit sluit aan bij het uitgangspunt dat beslissingen binnen door de manschappen op actuele condities kunnen worden genomen en gedeeld/getoetst met de bevelvoerder.\n\nVoorbeeld VRR: sprinkler geactiveerd betekent niet automatisch dat de brand volledig beheerst is; continuïteit kan uitvallen.\n\nVoorbeeld CAN: grootte van het compartiment bepaalt mede of het beschikbare koelend vermogen passend is.\n\nVoorbeeld CAN: manschap meldt onvoldoende hoge druk; bevelvoerder kan laten terugtrekken om LD op te bouwen.\n\nBronbasis: Brandweer Rotterdam-Rijnmond, Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, V1.0 (2024), p. 7-8, scenario 2 p. 20-21 en bijlage CAN p. 42.", situationDetail: {"time": "14:46 uur — inzetvoorbereiding op hoogte", "intro": ["De brand blijkt verder ontwikkeld dan bij aankomst werd gehoopt. De interne bluswatervoorziening functioneert en de tweede TS kan aanvullende capaciteit leveren."], "observations": ["stijgleiding beschikbaar;", "sprinkler heeft de brand niet onder controle gebracht;", "windinvloed blijft relevant;", "eerste ploeg vraagt om voldoende koelend vermogen en back-up;", "tijd richting een eventuele redding blijft meewegen."], "after": ["De keuze gaat niet alleen over HD of LD, maar over de vraag hoeveel slagkracht en reserve nodig is voordat opnieuw wordt toegetreden."], "prompt": "Welke blusstrategie bouw je op?"}});
  Object.assign(c(byId(7),'A'), {
    consequenceDetail: {time: "14:46 uur — inzetvoorbereiding op hoogte — gevolg van keuze A", paragraphs: ["Twee LD-aanvalsmogelijkheden worden via de stijgleiding opgebouwd. Dat kost extra tijd, maar de eerste ploeg krijgt aantoonbaar meer koelend vermogen en een echte back-upmogelijkheid."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Sluit rechtstreeks aan bij de uitgewerkte VRR-interventie voor scenario 2: twee LD-stralen en back-up vóór offensief binnen.", "VRR behandelt de interne bluswatervoorziening als één van de drie kritieke randvoorwaarden. Voor gebouwen boven 70 meter gaat de bron uit van een blusleiding met eigen pomp en eigen watervoorraad, genoemd met een capaciteit van 1200 l/min. Bij uitval van de interne pomp kan de brandweer volgens het handboek geen voldoende hoeveelheid water met voldoende werkdruk op hoogte krijgen. Bij een ontwikkelde brand resteert dan feitelijk alleen klein blusmaterieel en zal minimaal het betrokken compartiment kunnen uitbranden.", "In scenario 2 is de sprinkler afwezig, niet geactiveerd of gefaald en kan de brand binnen korte tijd ontwikkeld raken. De interventietaak bestaat dan niet alleen uit water leveren, maar expliciet uit het opbouwen van twee LD-stralen en het inrichten van het bruggenhoofd op -2. Pas daarna wordt van defensief binnen naar offensief binnen gewerkt.", "De CAN-bijlage gebruikt precies het verschil in benodigde slagkracht als voorbeeld: misschien is een hogedrukstraal voldoende, maar een grotere ruimte kan een lagedrukstraal noodzakelijk maken. Een manschap kan op basis van de condities terugmelden dat hoge druk onvoldoende is; een bevelvoerder kan vervolgens opdracht geven om terug te trekken en lage druk af te leggen. Dit sluit aan bij het uitgangspunt dat beslissingen binnen door de manschappen op actuele condities kunnen worden genomen en gedeeld/getoetst met de bevelvoerder."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["Voorbeeld VRR: sprinkler geactiveerd betekent niet automatisch dat de brand volledig beheerst is; continuïteit kan uitvallen.", "Voorbeeld CAN: grootte van het compartiment bepaalt mede of het beschikbare koelend vermogen passend is.", "Voorbeeld CAN: manschap meldt onvoldoende hoge druk; bevelvoerder kan laten terugtrekken om LD op te bouwen."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["Twee LD-aanvalsmogelijkheden worden via de stijgleiding opgebouwd. Dat kost extra tijd, maar de eerste ploeg krijgt aantoonbaar meer koelend vermogen en een echte back-upmogelijkheid."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze B: Kan bij een aantoonbaar beheersbare brand tijd winnen, maar is kwetsbaar als het incident feitelijk scenario 2, WDF of groter compartiment betreft.", "Keuze C: Baseert de waterkeuze vooral op woninggrootte en niet op brandcondities, wind, ontwikkeling en benodigde flow. Dat is strijdig met de bronredenering."]}], assessment: c(byId(7),'A').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(7),'A').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(7),'A').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["bluswater: +2", "back-up: gereed", "tijd: +1"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(c(byId(7),'B'), {
    consequenceDetail: {time: "14:46 uur — inzetvoorbereiding op hoogte — gevolg van keuze B", paragraphs: ["De eerste lijn gaat eerder naar voren. De tweede lijn wordt tijdens de aanval opgebouwd, waardoor de ploeg sneller aan de brand kan zijn maar tijdelijk minder reserve heeft."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Kan bij een aantoonbaar beheersbare brand tijd winnen, maar is kwetsbaar als het incident feitelijk scenario 2, WDF of groter compartiment betreft.", "VRR behandelt de interne bluswatervoorziening als één van de drie kritieke randvoorwaarden. Voor gebouwen boven 70 meter gaat de bron uit van een blusleiding met eigen pomp en eigen watervoorraad, genoemd met een capaciteit van 1200 l/min. Bij uitval van de interne pomp kan de brandweer volgens het handboek geen voldoende hoeveelheid water met voldoende werkdruk op hoogte krijgen. Bij een ontwikkelde brand resteert dan feitelijk alleen klein blusmaterieel en zal minimaal het betrokken compartiment kunnen uitbranden.", "In scenario 2 is de sprinkler afwezig, niet geactiveerd of gefaald en kan de brand binnen korte tijd ontwikkeld raken. De interventietaak bestaat dan niet alleen uit water leveren, maar expliciet uit het opbouwen van twee LD-stralen en het inrichten van het bruggenhoofd op -2. Pas daarna wordt van defensief binnen naar offensief binnen gewerkt.", "De CAN-bijlage gebruikt precies het verschil in benodigde slagkracht als voorbeeld: misschien is een hogedrukstraal voldoende, maar een grotere ruimte kan een lagedrukstraal noodzakelijk maken. Een manschap kan op basis van de condities terugmelden dat hoge druk onvoldoende is; een bevelvoerder kan vervolgens opdracht geven om terug te trekken en lage druk af te leggen. Dit sluit aan bij het uitgangspunt dat beslissingen binnen door de manschappen op actuele condities kunnen worden genomen en gedeeld/getoetst met de bevelvoerder."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["Voorbeeld VRR: sprinkler geactiveerd betekent niet automatisch dat de brand volledig beheerst is; continuïteit kan uitvallen.", "Voorbeeld CAN: grootte van het compartiment bepaalt mede of het beschikbare koelend vermogen passend is.", "Voorbeeld CAN: manschap meldt onvoldoende hoge druk; bevelvoerder kan laten terugtrekken om LD op te bouwen."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De eerste lijn gaat eerder naar voren. De tweede lijn wordt tijdens de aanval opgebouwd, waardoor de ploeg sneller aan de brand kan zijn maar tijdelijk minder reserve heeft."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Sluit rechtstreeks aan bij de uitgewerkte VRR-interventie voor scenario 2: twee LD-stralen en back-up vóór offensief binnen.", "Keuze C: Baseert de waterkeuze vooral op woninggrootte en niet op brandcondities, wind, ontwikkeling en benodigde flow. Dat is strijdig met de bronredenering."]}], assessment: c(byId(7),'B').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(7),'B').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(7),'B').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["tijd: gunstiger", "back-up: later beschikbaar", "kwetsbaar bij WDF/ontwikkelde brand"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(c(byId(7),'C'), {
    consequenceDetail: {time: "14:46 uur — inzetvoorbereiding op hoogte — gevolg van keuze C", paragraphs: ["De lichtere oplossing is snel inzetbaar, maar bij de ontwikkelde en mogelijk windgedreven brand blijkt het beschikbare koelend vermogen krapper dan het brandbeeld vraagt."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Baseert de waterkeuze vooral op woninggrootte en niet op brandcondities, wind, ontwikkeling en benodigde flow. Dat is strijdig met de bronredenering.", "VRR behandelt de interne bluswatervoorziening als één van de drie kritieke randvoorwaarden. Voor gebouwen boven 70 meter gaat de bron uit van een blusleiding met eigen pomp en eigen watervoorraad, genoemd met een capaciteit van 1200 l/min. Bij uitval van de interne pomp kan de brandweer volgens het handboek geen voldoende hoeveelheid water met voldoende werkdruk op hoogte krijgen. Bij een ontwikkelde brand resteert dan feitelijk alleen klein blusmaterieel en zal minimaal het betrokken compartiment kunnen uitbranden.", "In scenario 2 is de sprinkler afwezig, niet geactiveerd of gefaald en kan de brand binnen korte tijd ontwikkeld raken. De interventietaak bestaat dan niet alleen uit water leveren, maar expliciet uit het opbouwen van twee LD-stralen en het inrichten van het bruggenhoofd op -2. Pas daarna wordt van defensief binnen naar offensief binnen gewerkt.", "De CAN-bijlage gebruikt precies het verschil in benodigde slagkracht als voorbeeld: misschien is een hogedrukstraal voldoende, maar een grotere ruimte kan een lagedrukstraal noodzakelijk maken. Een manschap kan op basis van de condities terugmelden dat hoge druk onvoldoende is; een bevelvoerder kan vervolgens opdracht geven om terug te trekken en lage druk af te leggen. Dit sluit aan bij het uitgangspunt dat beslissingen binnen door de manschappen op actuele condities kunnen worden genomen en gedeeld/getoetst met de bevelvoerder."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["Voorbeeld VRR: sprinkler geactiveerd betekent niet automatisch dat de brand volledig beheerst is; continuïteit kan uitvallen.", "Voorbeeld CAN: grootte van het compartiment bepaalt mede of het beschikbare koelend vermogen passend is.", "Voorbeeld CAN: manschap meldt onvoldoende hoge druk; bevelvoerder kan laten terugtrekken om LD op te bouwen."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De lichtere oplossing is snel inzetbaar, maar bij de ontwikkelde en mogelijk windgedreven brand blijkt het beschikbare koelend vermogen krapper dan het brandbeeld vraagt."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Sluit rechtstreeks aan bij de uitgewerkte VRR-interventie voor scenario 2: twee LD-stralen en back-up vóór offensief binnen.", "Keuze B: Kan bij een aantoonbaar beheersbare brand tijd winnen, maar is kwetsbaar als het incident feitelijk scenario 2, WDF of groter compartiment betreft."]}], assessment: c(byId(7),'C').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(7),'C').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(7),'C').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["bluswater/koelend vermogen: -1", "tijd: snel", "risico op onvoldoende slagkracht: verhoogd"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(byId(8), {sourceFrame: "VRR gebruikt vier scenario’s als richtingaanwijzer. De algemene commanders intent voor hoogbouwbrand is eerst de vluchtmogelijkheden voor bewoners én brandweer beschermen door rookverspreiding tegen te gaan en het trappenhuis te beschermen; daarna, indien mogelijk, de brand bestrijden.\n\nScenario 1 veronderstelt dat de brandveiligheidsvoorzieningen inclusief sprinkler werken en dat brand en rook zich tot de ontstaansruimte beperken. VRR noemt als voorbeeld ook een kleine, zeker beheersbare brand die met een klein blusmiddel kan worden bestreden, bijvoorbeeld wanneer de melder/bewoner dat aangeeft en directe snelle verkenning mogelijk is doordat men de sleutel van de voordeur heeft. Alleen in scenario 1 is snelle redding vóór opbouw van het bruggenhoofd toegestaan.\n\nScenario 2 geldt wanneer geen sprinkler aanwezig is, deze niet is geactiveerd of faalt. De brand blijft nog binnen het compartiment maar kan zich snel ontwikkelen. Het kwadrant is defensief binnen ter voorbereiding op offensief binnen: rook beperken, interventiemaatregelen opbouwen, daarna brandbestrijding/redding en controle van -1 tot +2 op rook en CO.\n\nScenario 3 begint wanneer brand en/of rook buiten het compartiment komt en vluchtwegen worden bedreigd. Dan verschuift de primaire inzet naar rookverspreiding voorkomen en vluchtwegen veiligstellen. Scenario 4 is de gevelbrand met uitbreiding: de bron geeft dan prioriteit aan zo snel mogelijk volledig ontruimen, te beginnen op en boven de brand.\n\nBronbasis: Brandweer Rotterdam-Rijnmond, Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, V1.0 (2024), p. 17-26.", situationDetail: {"time": "14:48 uur — herbeoordeling brandbeeld", "intro": ["De sprinkler is geactiveerd, maar de brand is niet onder controle. Rook blijft hoofdzakelijk beperkt tot de woning en de gang. De trappenhuizen zijn op dit moment nog rookarm."], "observations": ["brand niet beheerst door sprinkler;", "brand en rook nog grotendeels compartimentsgebonden;", "vluchttrappenhuizen nog bruikbaar;", "bruggenhoofd en bluswater kunnen worden georganiseerd;", "mogelijke bewoner nog niet met zekerheid gelokaliseerd."], "after": ["De bevelvoerder moet het actuele beeld vertalen naar een scenario en daarmee naar een volgorde van aandacht. VRICOL wordt in deze casus alleen gebruikt als didactisch vergelijkingsmodel."], "prompt": "Welk scenario past nu het beste bij het actuele beeld?"}});
  Object.assign(c(byId(8),'A'), {
    consequenceDetail: {time: "14:48 uur — herbeoordeling brandbeeld — gevolg van keuze A", paragraphs: ["De inzet wordt als een relatief beheersbare compartimentsbrand behandeld. Daardoor wordt sneller offensief gewerkt terwijl de sprinkler de brand aantoonbaar niet heeft beheerst."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Past niet meer goed: de sprinkler beheerst de brand aantoonbaar niet, terwijl scenario 1 juist op werkende/beheersende voorzieningen rust.", "VRR gebruikt vier scenario’s als richtingaanwijzer. De algemene commanders intent voor hoogbouwbrand is eerst de vluchtmogelijkheden voor bewoners én brandweer beschermen door rookverspreiding tegen te gaan en het trappenhuis te beschermen; daarna, indien mogelijk, de brand bestrijden.", "Scenario 1 veronderstelt dat de brandveiligheidsvoorzieningen inclusief sprinkler werken en dat brand en rook zich tot de ontstaansruimte beperken. VRR noemt als voorbeeld ook een kleine, zeker beheersbare brand die met een klein blusmiddel kan worden bestreden, bijvoorbeeld wanneer de melder/bewoner dat aangeeft en directe snelle verkenning mogelijk is doordat men de sleutel van de voordeur heeft. Alleen in scenario 1 is snelle redding vóór opbouw van het bruggenhoofd toegestaan."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["Scenario 2 geldt wanneer geen sprinkler aanwezig is, deze niet is geactiveerd of faalt. De brand blijft nog binnen het compartiment maar kan zich snel ontwikkelen. Het kwadrant is defensief binnen ter voorbereiding op offensief binnen: rook beperken, interventiemaatregelen opbouwen, daarna brandbestrijding/redding en controle van -1 tot +2 op rook en CO.", "Scenario 3 begint wanneer brand en/of rook buiten het compartiment komt en vluchtwegen worden bedreigd. Dan verschuift de primaire inzet naar rookverspreiding voorkomen en vluchtwegen veiligstellen. Scenario 4 is de gevelbrand met uitbreiding: de bron geeft dan prioriteit aan zo snel mogelijk volledig ontruimen, te beginnen op en boven de brand."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De inzet wordt als een relatief beheersbare compartimentsbrand behandeld. Daardoor wordt sneller offensief gewerkt terwijl de sprinkler de brand aantoonbaar niet heeft beheerst."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze B: Is de beste match met het actuele bronbeeld: compartimentsbrand, sprinkler onvoldoende, vluchtwegen nog bruikbaar.", "Keuze C: Kan later nodig worden, maar scenario 3 veronderstelt een duidelijkere uitbreiding van brand/rook buiten het compartiment en bedreiging van vluchtwegen."]}], assessment: c(byId(8),'A').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(8),'A').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(8),'A').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["scenario-inschatting: te licht", "tijd richting aanval: snel", "rookverspreidingsrisico: onderschat"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(c(byId(8),'B'), {
    consequenceDetail: {time: "14:48 uur — herbeoordeling brandbeeld — gevolg van keuze B", paragraphs: ["De inzet wordt georganiseerd alsof de brand zich binnen het compartiment heeft ontwikkeld zonder effectieve sprinklerbeheersing. Bruggenhoofd, twee stralen en bescherming van voorportaal/trappenhuis worden leidend voordat offensief wordt doorgestoten."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Is de beste match met het actuele bronbeeld: compartimentsbrand, sprinkler onvoldoende, vluchtwegen nog bruikbaar.", "VRR gebruikt vier scenario’s als richtingaanwijzer. De algemene commanders intent voor hoogbouwbrand is eerst de vluchtmogelijkheden voor bewoners én brandweer beschermen door rookverspreiding tegen te gaan en het trappenhuis te beschermen; daarna, indien mogelijk, de brand bestrijden.", "Scenario 1 veronderstelt dat de brandveiligheidsvoorzieningen inclusief sprinkler werken en dat brand en rook zich tot de ontstaansruimte beperken. VRR noemt als voorbeeld ook een kleine, zeker beheersbare brand die met een klein blusmiddel kan worden bestreden, bijvoorbeeld wanneer de melder/bewoner dat aangeeft en directe snelle verkenning mogelijk is doordat men de sleutel van de voordeur heeft. Alleen in scenario 1 is snelle redding vóór opbouw van het bruggenhoofd toegestaan."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["Scenario 2 geldt wanneer geen sprinkler aanwezig is, deze niet is geactiveerd of faalt. De brand blijft nog binnen het compartiment maar kan zich snel ontwikkelen. Het kwadrant is defensief binnen ter voorbereiding op offensief binnen: rook beperken, interventiemaatregelen opbouwen, daarna brandbestrijding/redding en controle van -1 tot +2 op rook en CO.", "Scenario 3 begint wanneer brand en/of rook buiten het compartiment komt en vluchtwegen worden bedreigd. Dan verschuift de primaire inzet naar rookverspreiding voorkomen en vluchtwegen veiligstellen. Scenario 4 is de gevelbrand met uitbreiding: de bron geeft dan prioriteit aan zo snel mogelijk volledig ontruimen, te beginnen op en boven de brand."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De inzet wordt georganiseerd alsof de brand zich binnen het compartiment heeft ontwikkeld zonder effectieve sprinklerbeheersing. Bruggenhoofd, twee stralen en bescherming van voorportaal/trappenhuis worden leidend voordat offensief wordt doorgestoten."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Past niet meer goed: de sprinkler beheerst de brand aantoonbaar niet, terwijl scenario 1 juist op werkende/beheersende voorzieningen rust.", "Keuze C: Kan later nodig worden, maar scenario 3 veronderstelt een duidelijkere uitbreiding van brand/rook buiten het compartiment en bedreiging van vluchtwegen."]}], assessment: c(byId(8),'B').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(8),'B').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(8),'B').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["scenario: 2", "interventievoorwaarden: opgebouwd", "vluchtwegbeveiliging: actief"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(c(byId(8),'C'), {
    consequenceDetail: {time: "14:48 uur — herbeoordeling brandbeeld — gevolg van keuze C", paragraphs: ["Veel capaciteit verschuift vroeg naar ontruiming, terwijl trappenhuizen nog bruikbaar zijn en de brand nog hoofdzakelijk compartimentsgebonden is. De brandbestrijding vertraagt daardoor."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Kan later nodig worden, maar scenario 3 veronderstelt een duidelijkere uitbreiding van brand/rook buiten het compartiment en bedreiging van vluchtwegen.", "VRR gebruikt vier scenario’s als richtingaanwijzer. De algemene commanders intent voor hoogbouwbrand is eerst de vluchtmogelijkheden voor bewoners én brandweer beschermen door rookverspreiding tegen te gaan en het trappenhuis te beschermen; daarna, indien mogelijk, de brand bestrijden.", "Scenario 1 veronderstelt dat de brandveiligheidsvoorzieningen inclusief sprinkler werken en dat brand en rook zich tot de ontstaansruimte beperken. VRR noemt als voorbeeld ook een kleine, zeker beheersbare brand die met een klein blusmiddel kan worden bestreden, bijvoorbeeld wanneer de melder/bewoner dat aangeeft en directe snelle verkenning mogelijk is doordat men de sleutel van de voordeur heeft. Alleen in scenario 1 is snelle redding vóór opbouw van het bruggenhoofd toegestaan."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["Scenario 2 geldt wanneer geen sprinkler aanwezig is, deze niet is geactiveerd of faalt. De brand blijft nog binnen het compartiment maar kan zich snel ontwikkelen. Het kwadrant is defensief binnen ter voorbereiding op offensief binnen: rook beperken, interventiemaatregelen opbouwen, daarna brandbestrijding/redding en controle van -1 tot +2 op rook en CO.", "Scenario 3 begint wanneer brand en/of rook buiten het compartiment komt en vluchtwegen worden bedreigd. Dan verschuift de primaire inzet naar rookverspreiding voorkomen en vluchtwegen veiligstellen. Scenario 4 is de gevelbrand met uitbreiding: de bron geeft dan prioriteit aan zo snel mogelijk volledig ontruimen, te beginnen op en boven de brand."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["Veel capaciteit verschuift vroeg naar ontruiming, terwijl trappenhuizen nog bruikbaar zijn en de brand nog hoofdzakelijk compartimentsgebonden is. De brandbestrijding vertraagt daardoor."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Past niet meer goed: de sprinkler beheerst de brand aantoonbaar niet, terwijl scenario 1 juist op werkende/beheersende voorzieningen rust.", "Keuze B: Is de beste match met het actuele bronbeeld: compartimentsbrand, sprinkler onvoldoende, vluchtwegen nog bruikbaar."]}], assessment: c(byId(8),'C').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(8),'C').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(8),'C').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["scenario-inschatting: zwaar", "ontruiming: vroeg opgeschaald", "tijd richting brandbestrijding: +2"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(byId(9), {sourceFrame: "De VRR-scenario’s maken een duidelijk onderscheid in het moment waarop een redding kan worden uitgevoerd. Alleen in scenario 1 kan de eerste eenheid een snelle redding uitvoeren vóór het bruggenhoofd is opgebouwd. Daarvoor noemt de bron voorwaarden: de redding mag niet leiden tot verdere rookverspreiding, de interventie moet in principe met een klein blusmiddel mogelijk zijn en de liftboy houdt de lift op de inzetverdieping -2.\n\nBij scenario 2, 3 en 4 komt redding pas aan de orde nadat het bruggenhoofd en de andere noodzakelijke taken zijn ingevuld. In scenario 2 staat expliciet dat redding plaatsvindt nadat de interventiemaatregelen zijn getroffen. In scenario 3 geldt bovendien dat redding nooit extra rookverspreiding in het trappenhuis mag veroorzaken.\n\nDit betekent niet dat slachtofferinformatie onbelangrijk wordt. De bron koppelt de snelle reddingsmogelijkheid juist aan de zekerheid dat het om een kleine beheersbare brand gaat. Onzekere informatie (“mogelijk al buiten”) is daarom geen bronbasis om de reddingstaak volledig te schrappen; zij moet worden meegewogen in het scenario en de risico’s van toetreding.\n\nVRR-voorbeeld scenario 1: kleine beheersbare brand, melder/bewoner bevestigt dit, sleutel beschikbaar en snelle verkenning mogelijk.\n\nScenario 2: redding pas nadat interventiemaatregelen zijn getroffen.\n\nScenario 3: redding binnen mogelijkheden, maar niet als daardoor rook in het trappenhuis wordt verspreid.\n\nBronbasis: Brandweer Rotterdam-Rijnmond, Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, V1.0 (2024), p. 18-23 en p. 26.", situationDetail: {"time": "14:50 uur — nieuwe slachtofferinformatie", "intro": ["Een buurvrouw meldt dat de bewoner mogelijk al vóór de brand naar buiten is gegaan. Ze kan dit niet bevestigen. De brand is nog niet onder controle."], "observations": ["mogelijke vermissing blijft onzeker;", "geen bevestiging dat de bewoner buiten is;", "interventiemaatregelen zijn nog in opbouw;", "brandcondities vragen om voldoende koelend vermogen en back-up."], "after": ["De druk om snel naar binnen te gaan blijft groot, maar onzekerheid over een slachtoffer verandert niets aan de actuele brandcondities."], "prompt": "Hoe weeg je redding en interventievoorwaarden tegen elkaar af?"}});
  Object.assign(c(byId(9),'A'), {
    consequenceDetail: {time: "14:50 uur — nieuwe slachtofferinformatie — gevolg van keuze A", paragraphs: ["De ploeg gaat eerder richting mogelijke redding voordat alle interventiemaatregelen gereed zijn. Daarmee wordt tijd gewonnen voor het slachtoffer, maar neemt de marge voor de ploeg af."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Past alleen bij een overtuigend scenario-1-beeld. In deze casus is de brand niet beheerst, waardoor de bron eerst interventievoorwaarden verlangt.", "De VRR-scenario’s maken een duidelijk onderscheid in het moment waarop een redding kan worden uitgevoerd. Alleen in scenario 1 kan de eerste eenheid een snelle redding uitvoeren vóór het bruggenhoofd is opgebouwd. Daarvoor noemt de bron voorwaarden: de redding mag niet leiden tot verdere rookverspreiding, de interventie moet in principe met een klein blusmiddel mogelijk zijn en de liftboy houdt de lift op de inzetverdieping -2.", "Bij scenario 2, 3 en 4 komt redding pas aan de orde nadat het bruggenhoofd en de andere noodzakelijke taken zijn ingevuld. In scenario 2 staat expliciet dat redding plaatsvindt nadat de interventiemaatregelen zijn getroffen. In scenario 3 geldt bovendien dat redding nooit extra rookverspreiding in het trappenhuis mag veroorzaken.", "Dit betekent niet dat slachtofferinformatie onbelangrijk wordt. De bron koppelt de snelle reddingsmogelijkheid juist aan de zekerheid dat het om een kleine beheersbare brand gaat. Onzekere informatie (“mogelijk al buiten”) is daarom geen bronbasis om de reddingstaak volledig te schrappen; zij moet worden meegewogen in het scenario en de risico’s van toetreding."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["VRR-voorbeeld scenario 1: kleine beheersbare brand, melder/bewoner bevestigt dit, sleutel beschikbaar en snelle verkenning mogelijk.", "Scenario 2: redding pas nadat interventiemaatregelen zijn getroffen.", "Scenario 3: redding binnen mogelijkheden, maar niet als daardoor rook in het trappenhuis wordt verspreid."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De ploeg gaat eerder richting mogelijke redding voordat alle interventiemaatregelen gereed zijn. Daarmee wordt tijd gewonnen voor het slachtoffer, maar neemt de marge voor de ploeg af."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze B: Sluit bij scenario 2 aan op de VRR-volgorde: veilige interventievoorwaarden, daarna redding/aanval.", "Keuze C: Is te absoluut. De bron gebruikt onzekerheid niet als bewijs dat er niemand meer binnen is; verkenning en scenario blijven leidend."]}], assessment: c(byId(9),'A').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(9),'A').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(9),'A').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["reddingsdruk: voorrang", "back-up: onvolledig", "ploegrisico: verhoogd"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(c(byId(9),'B'), {
    consequenceDetail: {time: "14:50 uur — nieuwe slachtofferinformatie — gevolg van keuze B", paragraphs: ["De interventievoorwaarden worden eerst afgerond. Daarna wordt de zoek-/reddingsactie gecombineerd met de aanval, waardoor de ploeg enkele minuten later maar met meer slagkracht naar binnen gaat."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Sluit bij scenario 2 aan op de VRR-volgorde: veilige interventievoorwaarden, daarna redding/aanval.", "De VRR-scenario’s maken een duidelijk onderscheid in het moment waarop een redding kan worden uitgevoerd. Alleen in scenario 1 kan de eerste eenheid een snelle redding uitvoeren vóór het bruggenhoofd is opgebouwd. Daarvoor noemt de bron voorwaarden: de redding mag niet leiden tot verdere rookverspreiding, de interventie moet in principe met een klein blusmiddel mogelijk zijn en de liftboy houdt de lift op de inzetverdieping -2.", "Bij scenario 2, 3 en 4 komt redding pas aan de orde nadat het bruggenhoofd en de andere noodzakelijke taken zijn ingevuld. In scenario 2 staat expliciet dat redding plaatsvindt nadat de interventiemaatregelen zijn getroffen. In scenario 3 geldt bovendien dat redding nooit extra rookverspreiding in het trappenhuis mag veroorzaken.", "Dit betekent niet dat slachtofferinformatie onbelangrijk wordt. De bron koppelt de snelle reddingsmogelijkheid juist aan de zekerheid dat het om een kleine beheersbare brand gaat. Onzekere informatie (“mogelijk al buiten”) is daarom geen bronbasis om de reddingstaak volledig te schrappen; zij moet worden meegewogen in het scenario en de risico’s van toetreding."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["VRR-voorbeeld scenario 1: kleine beheersbare brand, melder/bewoner bevestigt dit, sleutel beschikbaar en snelle verkenning mogelijk.", "Scenario 2: redding pas nadat interventiemaatregelen zijn getroffen.", "Scenario 3: redding binnen mogelijkheden, maar niet als daardoor rook in het trappenhuis wordt verspreid."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De interventievoorwaarden worden eerst afgerond. Daarna wordt de zoek-/reddingsactie gecombineerd met de aanval, waardoor de ploeg enkele minuten later maar met meer slagkracht naar binnen gaat."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Past alleen bij een overtuigend scenario-1-beeld. In deze casus is de brand niet beheerst, waardoor de bron eerst interventievoorwaarden verlangt.", "Keuze C: Is te absoluut. De bron gebruikt onzekerheid niet als bewijs dat er niemand meer binnen is; verkenning en scenario blijven leidend."]}], assessment: c(byId(9),'B').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(9),'B').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(9),'B').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["back-up: gereed", "redding: gericht", "slagkracht: beter geborgd"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(c(byId(9),'C'), {
    consequenceDetail: {time: "14:50 uur — nieuwe slachtofferinformatie — gevolg van keuze C", paragraphs: ["De onzekerheid over de bewoner wordt geïnterpreteerd als reden om niet meer gericht te zoeken. De brandbestrijding houdt capaciteit, maar de mogelijkheid van een achtergebleven persoon blijft bestaan."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Is te absoluut. De bron gebruikt onzekerheid niet als bewijs dat er niemand meer binnen is; verkenning en scenario blijven leidend.", "De VRR-scenario’s maken een duidelijk onderscheid in het moment waarop een redding kan worden uitgevoerd. Alleen in scenario 1 kan de eerste eenheid een snelle redding uitvoeren vóór het bruggenhoofd is opgebouwd. Daarvoor noemt de bron voorwaarden: de redding mag niet leiden tot verdere rookverspreiding, de interventie moet in principe met een klein blusmiddel mogelijk zijn en de liftboy houdt de lift op de inzetverdieping -2.", "Bij scenario 2, 3 en 4 komt redding pas aan de orde nadat het bruggenhoofd en de andere noodzakelijke taken zijn ingevuld. In scenario 2 staat expliciet dat redding plaatsvindt nadat de interventiemaatregelen zijn getroffen. In scenario 3 geldt bovendien dat redding nooit extra rookverspreiding in het trappenhuis mag veroorzaken.", "Dit betekent niet dat slachtofferinformatie onbelangrijk wordt. De bron koppelt de snelle reddingsmogelijkheid juist aan de zekerheid dat het om een kleine beheersbare brand gaat. Onzekere informatie (“mogelijk al buiten”) is daarom geen bronbasis om de reddingstaak volledig te schrappen; zij moet worden meegewogen in het scenario en de risico’s van toetreding."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["VRR-voorbeeld scenario 1: kleine beheersbare brand, melder/bewoner bevestigt dit, sleutel beschikbaar en snelle verkenning mogelijk.", "Scenario 2: redding pas nadat interventiemaatregelen zijn getroffen.", "Scenario 3: redding binnen mogelijkheden, maar niet als daardoor rook in het trappenhuis wordt verspreid."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De onzekerheid over de bewoner wordt geïnterpreteerd als reden om niet meer gericht te zoeken. De brandbestrijding houdt capaciteit, maar de mogelijkheid van een achtergebleven persoon blijft bestaan."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Past alleen bij een overtuigend scenario-1-beeld. In deze casus is de brand niet beheerst, waardoor de bron eerst interventievoorwaarden verlangt.", "Keuze B: Sluit bij scenario 2 aan op de VRR-volgorde: veilige interventievoorwaarden, daarna redding/aanval."]}], assessment: c(byId(9),'C').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(9),'C').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(9),'C').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["reddingsactie: niet gepland", "onzeker slachtoffer: blijft open", "risico gemiste persoon: verhoogd"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(byId(10), {sourceFrame: "Bescherming van het trappenhuis staat centraal in de VRR-inzetprocedure omdat hoogbouwslachtoffers vaak door rookinhalatie in trappenhuizen vallen. Compartimentering wordt daarom een eigen taak en niet slechts een gevolg van brandbestrijding.\n\nHet trappenhuisbeschermingsteam bestaat in de bron standaard uit twee ploegen van twee personen onder dezelfde bevelvoerder. Bij een wokkeltrappenhuis neemt ieder team een ander trappenhuis. Taken zijn onder andere: CO over het hele trappenhuis monitoren, obstakels verwijderen, zo nodig smokestoppers plaatsen, trappenhuizen/doorgangen/liften doorzoeken op ingesloten bewoners, per etage terugrapporteren en vluchtende bewoners vanuit het inzettrappenhuis naar het veilige trappenhuis geleiden.\n\nPer team noemt VRR een maximaal werkgebied van vijf etages beneden en vijf etages boven de brandetage. Dat maakt de taak begrensd en organiseert de terugmelding structureel.\n\nVentilatie wordt niet als snelle standaardoplossing gezien. VRR waarschuwt dat repressieve ventilatie ongewenste rookverspreiding kan veroorzaken als het gebouwsysteem niet volledig wordt begrepen. Eigen ventilatie alleen wanneer rechtstreeks naar buiten kan worden afgevoerd en de toevoer eveneens eenvoudig via buitenlucht is te organiseren.\n\nBronbasis: Brandweer Rotterdam-Rijnmond, Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, V1.0 (2024), p. 9, p. 23-27 en p. 12-13.", situationDetail: {"time": "14:53 uur — melding uit het inzettrappenhuis", "intro": ["Een ploeg meldt lichte rook en meetbare CO op verdieping 15 in het trappenhuis dat voor de brandweerinzet wordt gebruikt. Het tweede trappenhuis is nog rookvrij."], "observations": ["rook/CO boven de brandverdieping;", "inzettrappenhuis begint te worden beïnvloed;", "tweede trappenhuis nog rookvrij;", "deuren en voorportalen zijn bepalend voor verdere verspreiding;", "bewoners kunnen zich al spontaan in de trappenhuizen bevinden."], "after": ["Rookverspreiding is daarmee een zelfstandig probleem geworden. De ploeg binnen kan direct veilige maatregelen nemen en moet de verandering terugmelden zodat de bevelvoerder de inzet kan organiseren."], "prompt": "Wat krijgt nu prioriteit?"}});
  Object.assign(c(byId(10),'A'), {
    consequenceDetail: {time: "14:53 uur — melding uit het inzettrappenhuis — gevolg van keuze A", paragraphs: ["De rook/CO-melding wordt als zelfstandig tactisch probleem behandeld. Deuren en portalen worden gecontroleerd en CO wordt boven en onder de brand gevolgd."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Volgt de VRR-bron het meest direct: rook in het trappenhuis wordt als zelfstandige inzettaak behandeld en niet “meegenomen als de brand uit is”.", "Bescherming van het trappenhuis staat centraal in de VRR-inzetprocedure omdat hoogbouwslachtoffers vaak door rookinhalatie in trappenhuizen vallen. Compartimentering wordt daarom een eigen taak en niet slechts een gevolg van brandbestrijding.", "Het trappenhuisbeschermingsteam bestaat in de bron standaard uit twee ploegen van twee personen onder dezelfde bevelvoerder. Bij een wokkeltrappenhuis neemt ieder team een ander trappenhuis. Taken zijn onder andere: CO over het hele trappenhuis monitoren, obstakels verwijderen, zo nodig smokestoppers plaatsen, trappenhuizen/doorgangen/liften doorzoeken op ingesloten bewoners, per etage terugrapporteren en vluchtende bewoners vanuit het inzettrappenhuis naar het veilige trappenhuis geleiden."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["Per team noemt VRR een maximaal werkgebied van vijf etages beneden en vijf etages boven de brandetage. Dat maakt de taak begrensd en organiseert de terugmelding structureel.", "Ventilatie wordt niet als snelle standaardoplossing gezien. VRR waarschuwt dat repressieve ventilatie ongewenste rookverspreiding kan veroorzaken als het gebouwsysteem niet volledig wordt begrepen. Eigen ventilatie alleen wanneer rechtstreeks naar buiten kan worden afgevoerd en de toevoer eveneens eenvoudig via buitenlucht is te organiseren."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De rook/CO-melding wordt als zelfstandig tactisch probleem behandeld. Deuren en portalen worden gecontroleerd en CO wordt boven en onder de brand gevolgd."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze B: Kan de bron van rook uiteindelijk wegnemen, maar laat gedurende de aanval een cruciale vluchtweg verder verslechteren.", "Keuze C: Botst met de ventilatiewaarschuwing: zonder gecontroleerde aan- en afvoer kunnen stack en flowpath juist sterker worden."]}], assessment: c(byId(10),'A').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(10),'A').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(10),'A').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["compartimentering: actief", "CO-monitoring: uitgebreid", "vluchtweg: beschermd"], closing: "Rolafspraak: binnen ligt de beslissing bij de manschappen zolang die veilig en verantwoord is; relevante waarnemingen en afwijkingen worden gedeeld/getoetst met de bevelvoerder."}
  });
  Object.assign(c(byId(10),'B'), {
    consequenceDetail: {time: "14:53 uur — melding uit het inzettrappenhuis — gevolg van keuze B", paragraphs: ["De nadruk blijft op de brandhaard. Zolang de aanval niet direct effect heeft, kan rook ondertussen verder in het trappenhuis migreren."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Kan de bron van rook uiteindelijk wegnemen, maar laat gedurende de aanval een cruciale vluchtweg verder verslechteren.", "Bescherming van het trappenhuis staat centraal in de VRR-inzetprocedure omdat hoogbouwslachtoffers vaak door rookinhalatie in trappenhuizen vallen. Compartimentering wordt daarom een eigen taak en niet slechts een gevolg van brandbestrijding.", "Het trappenhuisbeschermingsteam bestaat in de bron standaard uit twee ploegen van twee personen onder dezelfde bevelvoerder. Bij een wokkeltrappenhuis neemt ieder team een ander trappenhuis. Taken zijn onder andere: CO over het hele trappenhuis monitoren, obstakels verwijderen, zo nodig smokestoppers plaatsen, trappenhuizen/doorgangen/liften doorzoeken op ingesloten bewoners, per etage terugrapporteren en vluchtende bewoners vanuit het inzettrappenhuis naar het veilige trappenhuis geleiden."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["Per team noemt VRR een maximaal werkgebied van vijf etages beneden en vijf etages boven de brandetage. Dat maakt de taak begrensd en organiseert de terugmelding structureel.", "Ventilatie wordt niet als snelle standaardoplossing gezien. VRR waarschuwt dat repressieve ventilatie ongewenste rookverspreiding kan veroorzaken als het gebouwsysteem niet volledig wordt begrepen. Eigen ventilatie alleen wanneer rechtstreeks naar buiten kan worden afgevoerd en de toevoer eveneens eenvoudig via buitenlucht is te organiseren."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De nadruk blijft op de brandhaard. Zolang de aanval niet direct effect heeft, kan rook ondertussen verder in het trappenhuis migreren."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Volgt de VRR-bron het meest direct: rook in het trappenhuis wordt als zelfstandige inzettaak behandeld en niet “meegenomen als de brand uit is”.", "Keuze C: Botst met de ventilatiewaarschuwing: zonder gecontroleerde aan- en afvoer kunnen stack en flowpath juist sterker worden."]}], assessment: c(byId(10),'B').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(10),'B').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(10),'B').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["interventie: versneld", "rookprobleem: onvoldoende zelfstandig beheerst", "vluchtweg: kwetsbaarder"], closing: "Rolafspraak: binnen ligt de beslissing bij de manschappen zolang die veilig en verantwoord is; relevante waarnemingen en afwijkingen worden gedeeld/getoetst met de bevelvoerder."}
  });
  Object.assign(c(byId(10),'C'), {
    consequenceDetail: {time: "14:53 uur — melding uit het inzettrappenhuis — gevolg van keuze C", paragraphs: ["Door beide trappenhuizen te openen worden drukverhoudingen en luchtstromen minder voorspelbaar. Een rookvrij trappenhuis kan daardoor juist worden beïnvloed."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Botst met de ventilatiewaarschuwing: zonder gecontroleerde aan- en afvoer kunnen stack en flowpath juist sterker worden.", "Bescherming van het trappenhuis staat centraal in de VRR-inzetprocedure omdat hoogbouwslachtoffers vaak door rookinhalatie in trappenhuizen vallen. Compartimentering wordt daarom een eigen taak en niet slechts een gevolg van brandbestrijding.", "Het trappenhuisbeschermingsteam bestaat in de bron standaard uit twee ploegen van twee personen onder dezelfde bevelvoerder. Bij een wokkeltrappenhuis neemt ieder team een ander trappenhuis. Taken zijn onder andere: CO over het hele trappenhuis monitoren, obstakels verwijderen, zo nodig smokestoppers plaatsen, trappenhuizen/doorgangen/liften doorzoeken op ingesloten bewoners, per etage terugrapporteren en vluchtende bewoners vanuit het inzettrappenhuis naar het veilige trappenhuis geleiden."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["Per team noemt VRR een maximaal werkgebied van vijf etages beneden en vijf etages boven de brandetage. Dat maakt de taak begrensd en organiseert de terugmelding structureel.", "Ventilatie wordt niet als snelle standaardoplossing gezien. VRR waarschuwt dat repressieve ventilatie ongewenste rookverspreiding kan veroorzaken als het gebouwsysteem niet volledig wordt begrepen. Eigen ventilatie alleen wanneer rechtstreeks naar buiten kan worden afgevoerd en de toevoer eveneens eenvoudig via buitenlucht is te organiseren."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["Door beide trappenhuizen te openen worden drukverhoudingen en luchtstromen minder voorspelbaar. Een rookvrij trappenhuis kan daardoor juist worden beïnvloed."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Volgt de VRR-bron het meest direct: rook in het trappenhuis wordt als zelfstandige inzettaak behandeld en niet “meegenomen als de brand uit is”.", "Keuze B: Kan de bron van rook uiteindelijk wegnemen, maar laat gedurende de aanval een cruciale vluchtweg verder verslechteren."]}], assessment: c(byId(10),'C').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(10),'C').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(10),'C').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["flowpath/stack: verhoogd", "tweede vluchtweg: bedreigd", "rookverspreiding: +2"], closing: "Rolafspraak: binnen ligt de beslissing bij de manschappen zolang die veilig en verantwoord is; relevante waarnemingen en afwijkingen worden gedeeld/getoetst met de bevelvoerder."}
  });
  Object.assign(byId(11), {sourceFrame: "VRR benoemt spontane ontruiming al vóór de scenario’s als specifiek aandachtspunt. Mensen kunnen vóór aankomst van de brandweer al via het ontruimingsalarm of op eigen initiatief in beweging zijn. Daardoor kan het trappenhuis al druk zijn en wordt zowel het repressieve optreden als de werking van overdruk beïnvloed.\n\nIn de compartimenteringstaak wordt deze realiteit concreet gemaakt. Het trappenhuisbeschermingsteam vangt vluchtende bewoners op in het trappenhuis dat voor de brandweerinzet wordt gebruikt en leidt hen naar het veilige trappenhuis. Daarmee wordt niet verondersteld dat bewoners zich netjes aan de inzetstructuur houden; de brandweer organiseert een veilige overgang.\n\nVoor scenario 2 noemt VRR ontruiming van het gebied -1 tot +2 ten opzichte van de brandverdieping. Niet-zelfredzame bewoners kunnen, als de situatie het toelaat, eerst naar de inzetverdieping -2 worden gebracht en daarna onder beheer met de brandweerlift naar beneden. Bij scenario 3 kan een extra peloton nodig zijn voor totaalontruiming. Bij scenario 4 volgt direct totale ontruiming, startend op en boven de brand.\n\nHet handboek maakt dus verschil tussen spontaan vluchtende bewoners, gefaseerde ontruiming en totale ontruiming. Een generieke opdracht “iedereen terug naar de woning” past niet bij die gedifferentieerde benadering.\n\nSpontane beweging kan de overdruk in het trappenhuis beïnvloeden doordat deuren vaker/open langer gebruikt worden.\n\nBij compartimentering worden vluchtenden actief van inzettrappenhuis naar veilig trappenhuis geleid.\n\nNiet-zelfredzamen vragen aparte capaciteit; hun verplaatsing moet de primaire inzet niet ongecontroleerd ontregelen.\n\nBronbasis: Brandweer Rotterdam-Rijnmond, Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, V1.0 (2024), p. 9, p. 21-27.", situationDetail: {"time": "14:56 uur — bewoners komen in beweging", "intro": ["Bewoners van verdieping 16 en 17 komen zelfstandig naar beneden. Een deel gebruikt het inzettrappenhuis omdat dit voor hen de meest voor de hand liggende route is."], "observations": ["spontane ontruiming is al gaande;", "brandweer en bewoners gebruiken deels dezelfde verticale route;", "het tweede trappenhuis is nog rookvrij;", "meer personen in het trappenhuis beïnvloeden doorstroming en mogelijk het drukconcept."], "after": ["De brandweer moet de bestaande bewonersstroom nu meenemen in de inzet in plaats van uit te gaan van een leeg trappenhuis."], "prompt": "Hoe organiseer je deze spontane ontruiming?"}});
  Object.assign(c(byId(11),'A'), {
    consequenceDetail: {time: "14:56 uur — bewoners komen in beweging — gevolg van keuze A", paragraphs: ["Bewoners blijven het inzettrappenhuis gebruiken. De brandweer maakt ruimte, maar materiaaltransport, ploegen en bewonersstromen lopen door elkaar."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Kan tijdelijk werkbaar zijn als het inzettrappenhuis aantoonbaar rookveilig is, maar mengt inzet en ontruiming en vergroot deurbewegingen/drukverstoring.", "VRR benoemt spontane ontruiming al vóór de scenario’s als specifiek aandachtspunt. Mensen kunnen vóór aankomst van de brandweer al via het ontruimingsalarm of op eigen initiatief in beweging zijn. Daardoor kan het trappenhuis al druk zijn en wordt zowel het repressieve optreden als de werking van overdruk beïnvloed.", "In de compartimenteringstaak wordt deze realiteit concreet gemaakt. Het trappenhuisbeschermingsteam vangt vluchtende bewoners op in het trappenhuis dat voor de brandweerinzet wordt gebruikt en leidt hen naar het veilige trappenhuis. Daarmee wordt niet verondersteld dat bewoners zich netjes aan de inzetstructuur houden; de brandweer organiseert een veilige overgang.", "Voor scenario 2 noemt VRR ontruiming van het gebied -1 tot +2 ten opzichte van de brandverdieping. Niet-zelfredzame bewoners kunnen, als de situatie het toelaat, eerst naar de inzetverdieping -2 worden gebracht en daarna onder beheer met de brandweerlift naar beneden. Bij scenario 3 kan een extra peloton nodig zijn voor totaalontruiming. Bij scenario 4 volgt direct totale ontruiming, startend op en boven de brand."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["Het handboek maakt dus verschil tussen spontaan vluchtende bewoners, gefaseerde ontruiming en totale ontruiming. Een generieke opdracht “iedereen terug naar de woning” past niet bij die gedifferentieerde benadering.", "Spontane beweging kan de overdruk in het trappenhuis beïnvloeden doordat deuren vaker/open langer gebruikt worden.", "Bij compartimentering worden vluchtenden actief van inzettrappenhuis naar veilig trappenhuis geleid.", "Niet-zelfredzamen vragen aparte capaciteit; hun verplaatsing moet de primaire inzet niet ongecontroleerd ontregelen."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["Bewoners blijven het inzettrappenhuis gebruiken. De brandweer maakt ruimte, maar materiaaltransport, ploegen en bewonersstromen lopen door elkaar."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze B: Sluit direct aan bij de VRR-taak van trappenhuisbescherming: bewoners opvangen en naar het veilige trappenhuis geleiden.", "Keuze C: Is te absoluut en kan mensen terugsturen naar een gebied waarvan de toekomstige rook-/brandontwikkeling niet zeker is."]}], assessment: c(byId(11),'A').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(11),'A').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(11),'A').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["inzet/vlucht: gemengd", "doorstroming: kwetsbaar", "trappenhuisbelasting: hoger"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(c(byId(11),'B'), {
    consequenceDetail: {time: "14:56 uur — bewoners komen in beweging — gevolg van keuze B", paragraphs: ["Bewoners worden op een gecontroleerd punt naar het rookvrije trappenhuis geleid. Dat kost personeel en communicatie, maar inzet en vlucht worden weer gescheiden."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Sluit direct aan bij de VRR-taak van trappenhuisbescherming: bewoners opvangen en naar het veilige trappenhuis geleiden.", "VRR benoemt spontane ontruiming al vóór de scenario’s als specifiek aandachtspunt. Mensen kunnen vóór aankomst van de brandweer al via het ontruimingsalarm of op eigen initiatief in beweging zijn. Daardoor kan het trappenhuis al druk zijn en wordt zowel het repressieve optreden als de werking van overdruk beïnvloed.", "In de compartimenteringstaak wordt deze realiteit concreet gemaakt. Het trappenhuisbeschermingsteam vangt vluchtende bewoners op in het trappenhuis dat voor de brandweerinzet wordt gebruikt en leidt hen naar het veilige trappenhuis. Daarmee wordt niet verondersteld dat bewoners zich netjes aan de inzetstructuur houden; de brandweer organiseert een veilige overgang.", "Voor scenario 2 noemt VRR ontruiming van het gebied -1 tot +2 ten opzichte van de brandverdieping. Niet-zelfredzame bewoners kunnen, als de situatie het toelaat, eerst naar de inzetverdieping -2 worden gebracht en daarna onder beheer met de brandweerlift naar beneden. Bij scenario 3 kan een extra peloton nodig zijn voor totaalontruiming. Bij scenario 4 volgt direct totale ontruiming, startend op en boven de brand."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["Het handboek maakt dus verschil tussen spontaan vluchtende bewoners, gefaseerde ontruiming en totale ontruiming. Een generieke opdracht “iedereen terug naar de woning” past niet bij die gedifferentieerde benadering.", "Spontane beweging kan de overdruk in het trappenhuis beïnvloeden doordat deuren vaker/open langer gebruikt worden.", "Bij compartimentering worden vluchtenden actief van inzettrappenhuis naar veilig trappenhuis geleid.", "Niet-zelfredzamen vragen aparte capaciteit; hun verplaatsing moet de primaire inzet niet ongecontroleerd ontregelen."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["Bewoners worden op een gecontroleerd punt naar het rookvrije trappenhuis geleid. Dat kost personeel en communicatie, maar inzet en vlucht worden weer gescheiden."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Kan tijdelijk werkbaar zijn als het inzettrappenhuis aantoonbaar rookveilig is, maar mengt inzet en ontruiming en vergroot deurbewegingen/drukverstoring.", "Keuze C: Is te absoluut en kan mensen terugsturen naar een gebied waarvan de toekomstige rook-/brandontwikkeling niet zeker is."]}], assessment: c(byId(11),'B').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(11),'B').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(11),'B').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["vluchtweg: gescheiden", "trappenhuisbescherming: actief", "personeelsvraag: +1"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(c(byId(11),'C'), {
    consequenceDetail: {time: "14:56 uur — bewoners komen in beweging — gevolg van keuze C", paragraphs: ["De bewonersstroom stopt tijdelijk doordat mensen terug naar hun woning worden gestuurd. Daarmee wordt echter aangenomen dat hun woning en route later veilig blijven."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Is te absoluut en kan mensen terugsturen naar een gebied waarvan de toekomstige rook-/brandontwikkeling niet zeker is.", "VRR benoemt spontane ontruiming al vóór de scenario’s als specifiek aandachtspunt. Mensen kunnen vóór aankomst van de brandweer al via het ontruimingsalarm of op eigen initiatief in beweging zijn. Daardoor kan het trappenhuis al druk zijn en wordt zowel het repressieve optreden als de werking van overdruk beïnvloed.", "In de compartimenteringstaak wordt deze realiteit concreet gemaakt. Het trappenhuisbeschermingsteam vangt vluchtende bewoners op in het trappenhuis dat voor de brandweerinzet wordt gebruikt en leidt hen naar het veilige trappenhuis. Daarmee wordt niet verondersteld dat bewoners zich netjes aan de inzetstructuur houden; de brandweer organiseert een veilige overgang.", "Voor scenario 2 noemt VRR ontruiming van het gebied -1 tot +2 ten opzichte van de brandverdieping. Niet-zelfredzame bewoners kunnen, als de situatie het toelaat, eerst naar de inzetverdieping -2 worden gebracht en daarna onder beheer met de brandweerlift naar beneden. Bij scenario 3 kan een extra peloton nodig zijn voor totaalontruiming. Bij scenario 4 volgt direct totale ontruiming, startend op en boven de brand."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["Het handboek maakt dus verschil tussen spontaan vluchtende bewoners, gefaseerde ontruiming en totale ontruiming. Een generieke opdracht “iedereen terug naar de woning” past niet bij die gedifferentieerde benadering.", "Spontane beweging kan de overdruk in het trappenhuis beïnvloeden doordat deuren vaker/open langer gebruikt worden.", "Bij compartimentering worden vluchtenden actief van inzettrappenhuis naar veilig trappenhuis geleid.", "Niet-zelfredzamen vragen aparte capaciteit; hun verplaatsing moet de primaire inzet niet ongecontroleerd ontregelen."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De bewonersstroom stopt tijdelijk doordat mensen terug naar hun woning worden gestuurd. Daarmee wordt echter aangenomen dat hun woning en route later veilig blijven."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Kan tijdelijk werkbaar zijn als het inzettrappenhuis aantoonbaar rookveilig is, maar mengt inzet en ontruiming en vergroot deurbewegingen/drukverstoring.", "Keuze B: Sluit direct aan bij de VRR-taak van trappenhuisbescherming: bewoners opvangen en naar het veilige trappenhuis geleiden."]}], assessment: c(byId(11),'C').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(11),'C').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(11),'C').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["bewonersbeweging: gestopt", "blootstelling bewoners: onzeker", "besluit: te absoluut"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(byId(12), {sourceFrame: "VRR legt stack-effect uit met de vergelijking van een hete luchtballon. In de winter is de binnenlucht doorgaans warmer dan buiten en ontstaat een opwaartse luchtstroom; in de zomer kan een gekoeld gebouw juist een neerwaartse stroming hebben. De neutrale lijn ligt niet per definitie halverwege het gebouw en is afhankelijk van meerdere bouwfysische factoren.\n\nHet handboek koppelt dit direct aan handelingsgedrag: toegangsdeuren op de begane grond zoveel mogelijk dicht houden, bij voorkeur de tourniquet gebruiken en deuren voor materiaaltransport zo kort mogelijk openhouden. Als beneden een deur openstaat en boven bijvoorbeeld een raam of balkondeur, kan een flowpath door meerdere verdiepingen ontstaan.\n\nVRR noemt expliciet dat rook en CO daardoor op onverwachte plekken kunnen verschijnen. Juist CO zonder zichtbare rook boven of onder de brand wordt in scenario-uitwerkingen gebruikt als aanwijzing voor mogelijk stack-effect. Dat maakt een CO-meting op verdieping 18 operationeel relevant en niet gemakkelijk weg te zetten als meetfout.\n\nOok hier waarschuwt de bron voor eigen ventilatie zonder volledig systeeminzicht. Alleen ventileren wanneer rechtstreeks naar buiten wordt afgevoerd en de toevoer via de buitenlucht eenvoudig en beheersbaar is.\n\nBronbasis: Brandweer Rotterdam-Rijnmond, Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, V1.0 (2024), p. 9 en p. 12-13; scenario-uitwerkingen p. 19-23.", situationDetail: {"time": "15:00 uur — onverwachte CO op verdieping 18", "intro": ["Op verdieping 18 wordt CO gemeten terwijl daar geen zichtbare rook hangt. Buiten is het duidelijk koeler dan binnen. Beneden staat een reguliere toegangsdeur langdurig open voor materiaaltransport."], "observations": ["CO op meerdere verdiepingen mogelijk zonder zichtbare rook;", "binnen warmer dan buiten;", "open buitendeur op begane grond;", "verticale schacht- en trappenhuiswerking kan luchtstromen versterken;", "de tweede vluchtweg moet bewaakt blijven."], "after": ["De meting vraagt om een verklaring. Een open deur op een ander niveau kan in een hoog gebouw onderdeel worden van dezelfde verticale luchtstroom."], "prompt": "Wat doet de ploeg met deze aanwijzing?"}});
  Object.assign(c(byId(12),'A'), {
    consequenceDetail: {time: "15:00 uur — onverwachte CO op verdieping 18 — gevolg van keuze A", paragraphs: ["De open buitendeur wordt niet langer als neutrale logistieke opening gezien. Toegang wordt gecontroleerd en de CO-trend wordt verder gevolgd om te zien of de verticale stroming afneemt."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Past rechtstreeks bij de bron: beperk de open entree, gebruik gecontroleerde toegang en blijf CO als indicator volgen.", "VRR legt stack-effect uit met de vergelijking van een hete luchtballon. In de winter is de binnenlucht doorgaans warmer dan buiten en ontstaat een opwaartse luchtstroom; in de zomer kan een gekoeld gebouw juist een neerwaartse stroming hebben. De neutrale lijn ligt niet per definitie halverwege het gebouw en is afhankelijk van meerdere bouwfysische factoren.", "Het handboek koppelt dit direct aan handelingsgedrag: toegangsdeuren op de begane grond zoveel mogelijk dicht houden, bij voorkeur de tourniquet gebruiken en deuren voor materiaaltransport zo kort mogelijk openhouden. Als beneden een deur openstaat en boven bijvoorbeeld een raam of balkondeur, kan een flowpath door meerdere verdiepingen ontstaan."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["VRR noemt expliciet dat rook en CO daardoor op onverwachte plekken kunnen verschijnen. Juist CO zonder zichtbare rook boven of onder de brand wordt in scenario-uitwerkingen gebruikt als aanwijzing voor mogelijk stack-effect. Dat maakt een CO-meting op verdieping 18 operationeel relevant en niet gemakkelijk weg te zetten als meetfout.", "Ook hier waarschuwt de bron voor eigen ventilatie zonder volledig systeeminzicht. Alleen ventileren wanneer rechtstreeks naar buiten wordt afgevoerd en de toevoer via de buitenlucht eenvoudig en beheersbaar is."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De open buitendeur wordt niet langer als neutrale logistieke opening gezien. Toegang wordt gecontroleerd en de CO-trend wordt verder gevolgd om te zien of de verticale stroming afneemt."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze B: Voegt druk toe zonder gecontroleerde afvoer en kan het probleem vergroten; dit is precies het type ventilatie-ingreep waarvoor VRR waarschuwt.", "Keuze C: Negeert een bronindicator: CO boven of onder de brand is volgens de scenario’s juist aanleiding om stack-effect te onderzoeken."]}], assessment: c(byId(12),'A').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(12),'A').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(12),'A').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["stack-voeding: beperkt", "CO-monitoring: actief", "toegang: gecontroleerd"], closing: "Rolafspraak: binnen ligt de beslissing bij de manschappen zolang die veilig en verantwoord is; relevante waarnemingen en afwijkingen worden gedeeld/getoetst met de bevelvoerder."}
  });
  Object.assign(c(byId(12),'B'), {
    consequenceDetail: {time: "15:00 uur — onverwachte CO op verdieping 18 — gevolg van keuze B", paragraphs: ["Een extra ventilator verandert de drukverhoudingen zonder dat de afvoerroute volledig bekend is. De verticale stroming kan daardoor juist worden versterkt."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Voegt druk toe zonder gecontroleerde afvoer en kan het probleem vergroten; dit is precies het type ventilatie-ingreep waarvoor VRR waarschuwt.", "VRR legt stack-effect uit met de vergelijking van een hete luchtballon. In de winter is de binnenlucht doorgaans warmer dan buiten en ontstaat een opwaartse luchtstroom; in de zomer kan een gekoeld gebouw juist een neerwaartse stroming hebben. De neutrale lijn ligt niet per definitie halverwege het gebouw en is afhankelijk van meerdere bouwfysische factoren.", "Het handboek koppelt dit direct aan handelingsgedrag: toegangsdeuren op de begane grond zoveel mogelijk dicht houden, bij voorkeur de tourniquet gebruiken en deuren voor materiaaltransport zo kort mogelijk openhouden. Als beneden een deur openstaat en boven bijvoorbeeld een raam of balkondeur, kan een flowpath door meerdere verdiepingen ontstaan."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["VRR noemt expliciet dat rook en CO daardoor op onverwachte plekken kunnen verschijnen. Juist CO zonder zichtbare rook boven of onder de brand wordt in scenario-uitwerkingen gebruikt als aanwijzing voor mogelijk stack-effect. Dat maakt een CO-meting op verdieping 18 operationeel relevant en niet gemakkelijk weg te zetten als meetfout.", "Ook hier waarschuwt de bron voor eigen ventilatie zonder volledig systeeminzicht. Alleen ventileren wanneer rechtstreeks naar buiten wordt afgevoerd en de toevoer via de buitenlucht eenvoudig en beheersbaar is."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["Een extra ventilator verandert de drukverhoudingen zonder dat de afvoerroute volledig bekend is. De verticale stroming kan daardoor juist worden versterkt."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Past rechtstreeks bij de bron: beperk de open entree, gebruik gecontroleerde toegang en blijf CO als indicator volgen.", "Keuze C: Negeert een bronindicator: CO boven of onder de brand is volgens de scenario’s juist aanleiding om stack-effect te onderzoeken."]}], assessment: c(byId(12),'B').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(12),'B').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(12),'B').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["drukregime: extra beïnvloed", "flowpath: onzeker", "CO-verspreiding: risico +2"], closing: "Rolafspraak: binnen ligt de beslissing bij de manschappen zolang die veilig en verantwoord is; relevante waarnemingen en afwijkingen worden gedeeld/getoetst met de bevelvoerder."}
  });
  Object.assign(c(byId(12),'C'), {
    consequenceDetail: {time: "15:00 uur — onverwachte CO op verdieping 18 — gevolg van keuze C", paragraphs: ["De CO-meting wordt niet vertaald naar een tactische hypothese. Daardoor blijft een mogelijke verticale verspreidingsroute open en kan de vluchtweg ongemerkt verder verslechteren."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Negeert een bronindicator: CO boven of onder de brand is volgens de scenario’s juist aanleiding om stack-effect te onderzoeken.", "VRR legt stack-effect uit met de vergelijking van een hete luchtballon. In de winter is de binnenlucht doorgaans warmer dan buiten en ontstaat een opwaartse luchtstroom; in de zomer kan een gekoeld gebouw juist een neerwaartse stroming hebben. De neutrale lijn ligt niet per definitie halverwege het gebouw en is afhankelijk van meerdere bouwfysische factoren.", "Het handboek koppelt dit direct aan handelingsgedrag: toegangsdeuren op de begane grond zoveel mogelijk dicht houden, bij voorkeur de tourniquet gebruiken en deuren voor materiaaltransport zo kort mogelijk openhouden. Als beneden een deur openstaat en boven bijvoorbeeld een raam of balkondeur, kan een flowpath door meerdere verdiepingen ontstaan."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["VRR noemt expliciet dat rook en CO daardoor op onverwachte plekken kunnen verschijnen. Juist CO zonder zichtbare rook boven of onder de brand wordt in scenario-uitwerkingen gebruikt als aanwijzing voor mogelijk stack-effect. Dat maakt een CO-meting op verdieping 18 operationeel relevant en niet gemakkelijk weg te zetten als meetfout.", "Ook hier waarschuwt de bron voor eigen ventilatie zonder volledig systeeminzicht. Alleen ventileren wanneer rechtstreeks naar buiten wordt afgevoerd en de toevoer via de buitenlucht eenvoudig en beheersbaar is."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De CO-meting wordt niet vertaald naar een tactische hypothese. Daardoor blijft een mogelijke verticale verspreidingsroute open en kan de vluchtweg ongemerkt verder verslechteren."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Past rechtstreeks bij de bron: beperk de open entree, gebruik gecontroleerde toegang en blijf CO als indicator volgen.", "Keuze B: Voegt druk toe zonder gecontroleerde afvoer en kan het probleem vergroten; dit is precies het type ventilatie-ingreep waarvoor VRR waarschuwt."]}], assessment: c(byId(12),'C').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(12),'C').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(12),'C').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["stack-effect: niet herkend", "CO-signaal: genegeerd", "vluchtweg: ongemerkt bedreigd"], closing: "Rolafspraak: binnen ligt de beslissing bij de manschappen zolang die veilig en verantwoord is; relevante waarnemingen en afwijkingen worden gedeeld/getoetst met de bevelvoerder."}
  });
  Object.assign(byId(13), {sourceFrame: "Goede communicatie is volgens VRR één van de drie kritieke randvoorwaarden voor hoogbouwoptreden. Door hoogte en constructie is de werking van C2000 én mobiele telefonie niet gegarandeerd. De bron verwacht daarom dat gebouwen boven 70 meter over een intern intercomsysteem beschikken waarmee vanaf verdiepingen rechtstreeks met de commandoruimte kan worden gecommuniceerd.\n\nVRR beschrijft een specifieke intercomfunctie. De bemensing van het redvoertuig neemt deze rol in principe op zich: één persoon beneden en één boven. In de scenario’s worden 115 en 116 genoemd als bedienaren in commandoruimte en op het bruggenhoofd.\n\nHet verbindingsschema maakt zichtbaar dat de communicatie wordt gelaagd: commandoruimte, bruggenhoofd, aanvalsploegen, trappenhuisbescherming, ontruiming en logistiek hebben eigen lijnen/netten. Didactisch gaat het daarom niet om “welk kanaalnummer”, maar om redundantie, vaste terugmeldroutes en voorkomen dat kritieke informatie afhankelijk blijft van één haperende radioverbinding.\n\nBronbasis: Brandweer Rotterdam-Rijnmond, Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, V1.0 (2024), p. 8, p. 10, p. 19-25 en bijlage 3 p. 45-47.", situationDetail: {"time": "15:03 uur — verbinding wordt onbetrouwbaar", "intro": ["C2000-contact tussen verdieping 14 en buiten valt geregeld weg. Berichten komen vertraagd of onvolledig door. De intercom tussen verdiepingen en commandoruimte functioneert wel."], "observations": ["C2000 niet betrouwbaar genoeg voor exclusief gebruik;", "intercom beschikbaar;", "bruggenhoofd en commandoruimte kunnen als vaste schakels dienen;", "meerdere teams zijn inmiddels op verschillende hoogtes actief."], "after": ["Communicatie is niet alleen een technisch hulpmiddel maar een voorwaarde om wijzigingen in rook, water, liftstatus en ontruiming tijdig te delen."], "prompt": "Hoe borg je de verbinding nu?"}});
  Object.assign(c(byId(13),'A'), {
    consequenceDetail: {time: "15:03 uur — verbinding wordt onbetrouwbaar — gevolg van keuze A", paragraphs: ["De intercom wordt als redundante verbinding ingezet en er komt een vaste route van binnenploeg via bruggenhoofd/commandoruimte naar buiten."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Benut de voorziening waarvoor het gebouw en het VRR-inzetmodel expliciet zijn ingericht en creëert een vaste route voor terugmeldingen.", "Goede communicatie is volgens VRR één van de drie kritieke randvoorwaarden voor hoogbouwoptreden. Door hoogte en constructie is de werking van C2000 én mobiele telefonie niet gegarandeerd. De bron verwacht daarom dat gebouwen boven 70 meter over een intern intercomsysteem beschikken waarmee vanaf verdiepingen rechtstreeks met de commandoruimte kan worden gecommuniceerd."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["VRR beschrijft een specifieke intercomfunctie. De bemensing van het redvoertuig neemt deze rol in principe op zich: één persoon beneden en één boven. In de scenario’s worden 115 en 116 genoemd als bedienaren in commandoruimte en op het bruggenhoofd.", "Het verbindingsschema maakt zichtbaar dat de communicatie wordt gelaagd: commandoruimte, bruggenhoofd, aanvalsploegen, trappenhuisbescherming, ontruiming en logistiek hebben eigen lijnen/netten. Didactisch gaat het daarom niet om “welk kanaalnummer”, maar om redundantie, vaste terugmeldroutes en voorkomen dat kritieke informatie afhankelijk blijft van één haperende radioverbinding."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De intercom wordt als redundante verbinding ingezet en er komt een vaste route van binnenploeg via bruggenhoofd/commandoruimte naar buiten."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze B: Laat een van de drie kritieke randvoorwaarden bewust instabiel, terwijl een werkend alternatief al beschikbaar is.", "Keuze C: Kan een noodmaatregel zijn als techniek uitvalt, maar gebruikt veel fysieke capaciteit en tijd; de bron biedt juist een intercomoplossing om dit te voorkomen."]}], assessment: c(byId(13),'A').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(13),'A').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(13),'A').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["communicatie: redundanter", "terugmeldroute: vast", "informatiecontinuïteit: beter"], closing: "Rolafspraak: binnen ligt de beslissing bij de manschappen zolang die veilig en verantwoord is; relevante waarnemingen en afwijkingen worden gedeeld/getoetst met de bevelvoerder."}
  });
  Object.assign(c(byId(13),'B'), {
    consequenceDetail: {time: "15:03 uur — verbinding wordt onbetrouwbaar — gevolg van keuze B", paragraphs: ["Ploegen blijven werken met een verbinding die af en toe wegvalt. Belangrijke veranderingen kunnen daardoor te laat of onvolledig bij de bevelvoerder komen."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Laat een van de drie kritieke randvoorwaarden bewust instabiel, terwijl een werkend alternatief al beschikbaar is.", "Goede communicatie is volgens VRR één van de drie kritieke randvoorwaarden voor hoogbouwoptreden. Door hoogte en constructie is de werking van C2000 én mobiele telefonie niet gegarandeerd. De bron verwacht daarom dat gebouwen boven 70 meter over een intern intercomsysteem beschikken waarmee vanaf verdiepingen rechtstreeks met de commandoruimte kan worden gecommuniceerd."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["VRR beschrijft een specifieke intercomfunctie. De bemensing van het redvoertuig neemt deze rol in principe op zich: één persoon beneden en één boven. In de scenario’s worden 115 en 116 genoemd als bedienaren in commandoruimte en op het bruggenhoofd.", "Het verbindingsschema maakt zichtbaar dat de communicatie wordt gelaagd: commandoruimte, bruggenhoofd, aanvalsploegen, trappenhuisbescherming, ontruiming en logistiek hebben eigen lijnen/netten. Didactisch gaat het daarom niet om “welk kanaalnummer”, maar om redundantie, vaste terugmeldroutes en voorkomen dat kritieke informatie afhankelijk blijft van één haperende radioverbinding."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["Ploegen blijven werken met een verbinding die af en toe wegvalt. Belangrijke veranderingen kunnen daardoor te laat of onvolledig bij de bevelvoerder komen."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Benut de voorziening waarvoor het gebouw en het VRR-inzetmodel expliciet zijn ingericht en creëert een vaste route voor terugmeldingen.", "Keuze C: Kan een noodmaatregel zijn als techniek uitvalt, maar gebruikt veel fysieke capaciteit en tijd; de bron biedt juist een intercomoplossing om dit te voorkomen."]}], assessment: c(byId(13),'B').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(13),'B').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(13),'B').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["communicatie: beperkt", "vertraging kritieke meldingen: mogelijk", "commandovoering: kwetsbaarder"], closing: "Rolafspraak: binnen ligt de beslissing bij de manschappen zolang die veilig en verantwoord is; relevante waarnemingen en afwijkingen worden gedeeld/getoetst met de bevelvoerder."}
  });
  Object.assign(c(byId(13),'C'), {
    consequenceDetail: {time: "15:03 uur — verbinding wordt onbetrouwbaar — gevolg van keuze C", paragraphs: ["Een manschap wordt aan de operationele inzet onttrokken om fysiek berichten over te brengen. Informatie komt wel door, maar traag en tegen hoge personele kosten."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Kan een noodmaatregel zijn als techniek uitvalt, maar gebruikt veel fysieke capaciteit en tijd; de bron biedt juist een intercomoplossing om dit te voorkomen.", "Goede communicatie is volgens VRR één van de drie kritieke randvoorwaarden voor hoogbouwoptreden. Door hoogte en constructie is de werking van C2000 én mobiele telefonie niet gegarandeerd. De bron verwacht daarom dat gebouwen boven 70 meter over een intern intercomsysteem beschikken waarmee vanaf verdiepingen rechtstreeks met de commandoruimte kan worden gecommuniceerd."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["VRR beschrijft een specifieke intercomfunctie. De bemensing van het redvoertuig neemt deze rol in principe op zich: één persoon beneden en één boven. In de scenario’s worden 115 en 116 genoemd als bedienaren in commandoruimte en op het bruggenhoofd.", "Het verbindingsschema maakt zichtbaar dat de communicatie wordt gelaagd: commandoruimte, bruggenhoofd, aanvalsploegen, trappenhuisbescherming, ontruiming en logistiek hebben eigen lijnen/netten. Didactisch gaat het daarom niet om “welk kanaalnummer”, maar om redundantie, vaste terugmeldroutes en voorkomen dat kritieke informatie afhankelijk blijft van één haperende radioverbinding."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["Een manschap wordt aan de operationele inzet onttrokken om fysiek berichten over te brengen. Informatie komt wel door, maar traag en tegen hoge personele kosten."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Benut de voorziening waarvoor het gebouw en het VRR-inzetmodel expliciet zijn ingericht en creëert een vaste route voor terugmeldingen.", "Keuze B: Laat een van de drie kritieke randvoorwaarden bewust instabiel, terwijl een werkend alternatief al beschikbaar is."]}], assessment: c(byId(13),'C').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(13),'C').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(13),'C').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["communicatie: mogelijk", "tijdverlies: hoog", "personele capaciteit: -1"], closing: "Rolafspraak: binnen ligt de beslissing bij de manschappen zolang die veilig en verantwoord is; relevante waarnemingen en afwijkingen worden gedeeld/getoetst met de bevelvoerder."}
  });
  Object.assign(byId(14), {sourceFrame: "VRR is hier zeer expliciet: controleer de liftschacht op rook en water; wordt de lift bedreigd door water, rook of vuur, dan niet gebruiken. Bij geactiveerde sprinklers is het risico op water in de schacht groter. Zichtbaar instromend water betekent volgens de bron dat de lift niet langer betrouwbaar is en elk moment kan uitvallen.\n\nDe bijlage over liftuitval is geschreven naar aanleiding van incidenten waarbij (brandweer)liften uitvielen. Bij brand in hoogbouw 70m+ met liftuitval adviseert VRR uit te gaan van minimaal scenario 3 vanwege de lange traplooptijd. Als ook sprinkler, bluswater, overdruk of ontruimingsinstallatie niet op orde zijn, wordt offensief optreden te risicovol.\n\nDe bron vertaalt liftuitval in concrete logistieke consequenties: boven de 10e verdieping circa 30 seconden per te overbruggen verdieping als rekenwaarde, personele capaciteit verdubbelen en gewicht per persoon halveren. Bovendien moet tijdig/direct totale ontruiming worden gestart als men op basis van de repressieve tijdlijn niet tijdig kan blussen en de vluchttrappenhuiscompartimentering onder druk komt.\n\nEen interessante bronnuance: de brandweerlift is primair bedoeld om hulpdiensten tijdig boven te brengen; hij is niet automatisch bedoeld voor bewoners-ontruiming. Dat betekent dat “alleen materiaal” nog steeds afhankelijkheid van een technisch onbetrouwbare installatie creëert.\n\nBronbasis: Brandweer Rotterdam-Rijnmond, Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, V1.0 (2024), p. 13 en bijlage 4 p. 48-49.", situationDetail: {"time": "15:06 uur — water bij de brandweerlift", "intro": ["Op verdieping 12 wordt water zichtbaar dat richting de brandweerliftschacht loopt. De lift reageert nog normaal en het paneel geeft geen storing."], "observations": ["zichtbare waterinstroom richting liftschacht;", "lift functioneert op dit moment nog;", "sprinkler en bluswater zijn actief;", "verticale logistiek is sterk afhankelijk van de lift;", "traptransport kost extra tijd en fysieke capaciteit."], "after": ["De ploeg op hoogte ziet de verandering als eerste. De vraag is of je wacht op een technische storing of de betrouwbaarheid al op basis van de omstandigheden herbeoordeelt."], "prompt": "Wat doe je met de brandweerlift?"}});
  Object.assign(c(byId(14),'A'), {
    consequenceDetail: {time: "15:06 uur — water bij de brandweerlift — gevolg van keuze A", paragraphs: ["De lift wordt direct als onbetrouwbaar beschouwd en uit het brandweertransport gehaald. De logistiek moet omschakelen naar trappen en aangepaste personele/materiële planning."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Is de duidelijke bronkeuze zodra zichtbare waterinstroom optreedt: niet wachten op een storingsmelding.", "VRR is hier zeer expliciet: controleer de liftschacht op rook en water; wordt de lift bedreigd door water, rook of vuur, dan niet gebruiken. Bij geactiveerde sprinklers is het risico op water in de schacht groter. Zichtbaar instromend water betekent volgens de bron dat de lift niet langer betrouwbaar is en elk moment kan uitvallen.", "De bijlage over liftuitval is geschreven naar aanleiding van incidenten waarbij (brandweer)liften uitvielen. Bij brand in hoogbouw 70m+ met liftuitval adviseert VRR uit te gaan van minimaal scenario 3 vanwege de lange traplooptijd. Als ook sprinkler, bluswater, overdruk of ontruimingsinstallatie niet op orde zijn, wordt offensief optreden te risicovol."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["De bron vertaalt liftuitval in concrete logistieke consequenties: boven de 10e verdieping circa 30 seconden per te overbruggen verdieping als rekenwaarde, personele capaciteit verdubbelen en gewicht per persoon halveren. Bovendien moet tijdig/direct totale ontruiming worden gestart als men op basis van de repressieve tijdlijn niet tijdig kan blussen en de vluchttrappenhuiscompartimentering onder druk komt.", "Een interessante bronnuance: de brandweerlift is primair bedoeld om hulpdiensten tijdig boven te brengen; hij is niet automatisch bedoeld voor bewoners-ontruiming. Dat betekent dat “alleen materiaal” nog steeds afhankelijkheid van een technisch onbetrouwbare installatie creëert."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De lift wordt direct als onbetrouwbaar beschouwd en uit het brandweertransport gehaald. De logistiek moet omschakelen naar trappen en aangepaste personele/materiële planning."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze B: Is expliciet in strijd met de VRR-waarschuwing; de lift kan uitvallen vóórdat het paneel een bruikbare waarschuwing geeft.", "Keuze C: Vermindert direct mensenrisico, maar houdt het incident logistiek afhankelijk van een installatie die volgens de bron niet meer betrouwbaar is."]}], assessment: c(byId(14),'A').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(14),'A').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(14),'A').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["liftstatus: buiten gebruik", "logistiek: omschakelen", "onverwachte liftuitval: voorkomen"], closing: "Rolafspraak: binnen ligt de beslissing bij de manschappen zolang die veilig en verantwoord is; relevante waarnemingen en afwijkingen worden gedeeld/getoetst met de bevelvoerder."}
  });
  Object.assign(c(byId(14),'B'), {
    consequenceDetail: {time: "15:06 uur — water bij de brandweerlift — gevolg van keuze B", paragraphs: ["De lift blijft gebruikt worden omdat de techniek nog geen storing meldt. De zichtbare waterinstroom blijft echter bestaan en kan de lift op elk moment laten uitvallen."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Is expliciet in strijd met de VRR-waarschuwing; de lift kan uitvallen vóórdat het paneel een bruikbare waarschuwing geeft.", "VRR is hier zeer expliciet: controleer de liftschacht op rook en water; wordt de lift bedreigd door water, rook of vuur, dan niet gebruiken. Bij geactiveerde sprinklers is het risico op water in de schacht groter. Zichtbaar instromend water betekent volgens de bron dat de lift niet langer betrouwbaar is en elk moment kan uitvallen.", "De bijlage over liftuitval is geschreven naar aanleiding van incidenten waarbij (brandweer)liften uitvielen. Bij brand in hoogbouw 70m+ met liftuitval adviseert VRR uit te gaan van minimaal scenario 3 vanwege de lange traplooptijd. Als ook sprinkler, bluswater, overdruk of ontruimingsinstallatie niet op orde zijn, wordt offensief optreden te risicovol."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["De bron vertaalt liftuitval in concrete logistieke consequenties: boven de 10e verdieping circa 30 seconden per te overbruggen verdieping als rekenwaarde, personele capaciteit verdubbelen en gewicht per persoon halveren. Bovendien moet tijdig/direct totale ontruiming worden gestart als men op basis van de repressieve tijdlijn niet tijdig kan blussen en de vluchttrappenhuiscompartimentering onder druk komt.", "Een interessante bronnuance: de brandweerlift is primair bedoeld om hulpdiensten tijdig boven te brengen; hij is niet automatisch bedoeld voor bewoners-ontruiming. Dat betekent dat “alleen materiaal” nog steeds afhankelijkheid van een technisch onbetrouwbare installatie creëert."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De lift blijft gebruikt worden omdat de techniek nog geen storing meldt. De zichtbare waterinstroom blijft echter bestaan en kan de lift op elk moment laten uitvallen."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Is de duidelijke bronkeuze zodra zichtbare waterinstroom optreedt: niet wachten op een storingsmelding.", "Keuze C: Vermindert direct mensenrisico, maar houdt het incident logistiek afhankelijk van een installatie die volgens de bron niet meer betrouwbaar is."]}], assessment: c(byId(14),'B').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(14),'B').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(14),'B').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["liftstatus: bedreigd", "afhankelijkheid lift: hoog", "plotselinge uitval: mogelijk"], closing: "Rolafspraak: binnen ligt de beslissing bij de manschappen zolang die veilig en verantwoord is; relevante waarnemingen en afwijkingen worden gedeeld/getoetst met de bevelvoerder."}
  });
  Object.assign(c(byId(14),'C'), {
    consequenceDetail: {time: "15:06 uur — water bij de brandweerlift — gevolg van keuze C", paragraphs: ["De lift blijft voor materiaal rijden. Daarmee blijft de logistieke keten afhankelijk van een schacht die zichtbaar door water wordt bedreigd."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Vermindert direct mensenrisico, maar houdt het incident logistiek afhankelijk van een installatie die volgens de bron niet meer betrouwbaar is.", "VRR is hier zeer expliciet: controleer de liftschacht op rook en water; wordt de lift bedreigd door water, rook of vuur, dan niet gebruiken. Bij geactiveerde sprinklers is het risico op water in de schacht groter. Zichtbaar instromend water betekent volgens de bron dat de lift niet langer betrouwbaar is en elk moment kan uitvallen.", "De bijlage over liftuitval is geschreven naar aanleiding van incidenten waarbij (brandweer)liften uitvielen. Bij brand in hoogbouw 70m+ met liftuitval adviseert VRR uit te gaan van minimaal scenario 3 vanwege de lange traplooptijd. Als ook sprinkler, bluswater, overdruk of ontruimingsinstallatie niet op orde zijn, wordt offensief optreden te risicovol."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["De bron vertaalt liftuitval in concrete logistieke consequenties: boven de 10e verdieping circa 30 seconden per te overbruggen verdieping als rekenwaarde, personele capaciteit verdubbelen en gewicht per persoon halveren. Bovendien moet tijdig/direct totale ontruiming worden gestart als men op basis van de repressieve tijdlijn niet tijdig kan blussen en de vluchttrappenhuiscompartimentering onder druk komt.", "Een interessante bronnuance: de brandweerlift is primair bedoeld om hulpdiensten tijdig boven te brengen; hij is niet automatisch bedoeld voor bewoners-ontruiming. Dat betekent dat “alleen materiaal” nog steeds afhankelijkheid van een technisch onbetrouwbare installatie creëert."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De lift blijft voor materiaal rijden. Daarmee blijft de logistieke keten afhankelijk van een schacht die zichtbaar door water wordt bedreigd."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Is de duidelijke bronkeuze zodra zichtbare waterinstroom optreedt: niet wachten op een storingsmelding.", "Keuze B: Is expliciet in strijd met de VRR-waarschuwing; de lift kan uitvallen vóórdat het paneel een bruikbare waarschuwing geeft."]}], assessment: c(byId(14),'C').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(14),'C').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(14),'C').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["mensentransport: gestopt", "materiaaltransport: nog afhankelijk van lift", "liftuitval: nog mogelijk"], closing: "Rolafspraak: binnen ligt de beslissing bij de manschappen zolang die veilig en verantwoord is; relevante waarnemingen en afwijkingen worden gedeeld/getoetst met de bevelvoerder."}
  });
  Object.assign(byId(15), {sourceFrame: "Logistiek is in VRICOL een zelfstandige taak, juist vanwege de lange aanvoerroute in hoogbouw. Het bruggenhoofd moet tijdig met middelen worden gevoed en de bron noemt als vuistregel één schone ademluchtcilinder per ingezette functionaris. Daarnaast: brancard/wervelplank, drinkwater of isotone drank, objecttekeningen, extra smokestoppers, vluchtmaskers, accuventilatoren en CO-meters.\n\nIn de scenario-uitwerkingen wordt op de begane grond een logistieke hub ingericht. Bij scenario 2/3 noemt VRR concreet: ademluchtcilinders, ventilatoren en accu’s, smokestoppers, vluchtmaskers, evac chairs, rehab chair en drinken. Ook het scheiden van schone en vuile goederen wordt expliciet genoemd.\n\nHet materiaalgedeelte van VRR maakt fysieke belasting zichtbaar door gewichten te benoemen. Voorbeelden: Rambo 18,3 kg, hoogbouwtas 12 kg, doorslijpschijf 10,5 kg, rescuezaag 10 kg, smokestopper 5 kg, O-bundel 11 kg (12,6 kg met straalpijp), en ademlucht/PBM waardoor de totale draaglast per persoon al snel zeer hoog wordt. Dat verklaart waarom “nog even door” geen neutrale keuze is: logistieke achterstand vertaalt zich in fysieke en tactische grenzen.\n\nBij liftuitval gaat VRR nog verder: personele capaciteit verdubbelen en het mee te nemen gewicht per persoon halveren. Daarmee is logistiek een veiligheidsproces, niet alleen bevoorrading.\n\nBronbasis: Brandweer Rotterdam-Rijnmond, Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, V1.0 (2024), p. 13, scenario 2-4 p. 21-25, hoofdstuk 9 p. 34-41 en fotocollage p. 50-53.", situationDetail: {"time": "15:10 uur — circa 25 minuten inzet", "intro": ["Meerdere ademluchtcilinders zijn gebruikt en ploegen melden oplopende vermoeidheid. Het bruggenhoofd vraagt om reserveflessen, drinken en aflossing."], "observations": ["ademluchtverbruik loopt op;", "personele belasting neemt toe;", "materiaal moet verticaal worden aangevoerd;", "schoon/vuil en terugkerende ploegen gaan meer ruimte vragen;", "de inzet kan nog langere tijd duren."], "after": ["Logistiek wordt nu een zelfstandig proces. Als het pas wordt georganiseerd wanneer iets op is, kan de operationele inzet abrupt stilvallen."], "prompt": "Hoe organiseer je de continuïteit?"}});
  Object.assign(c(byId(15),'A'), {
    consequenceDetail: {time: "15:10 uur — circa 25 minuten inzet — gevolg van keuze A", paragraphs: ["De logistieke functie wordt opgeschaald. Schone ademlucht, drinken en aflossing worden vooruit gepositioneerd en terugkerend materiaal/personen krijgen een eigen stroom."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Sluit aan bij VRR: logistiek vroeg als eigen proces organiseren, aflossing/ademlucht anticiperend positioneren en schoon/vuil scheiden.", "Logistiek is in VRICOL een zelfstandige taak, juist vanwege de lange aanvoerroute in hoogbouw. Het bruggenhoofd moet tijdig met middelen worden gevoed en de bron noemt als vuistregel één schone ademluchtcilinder per ingezette functionaris. Daarnaast: brancard/wervelplank, drinkwater of isotone drank, objecttekeningen, extra smokestoppers, vluchtmaskers, accuventilatoren en CO-meters.", "In de scenario-uitwerkingen wordt op de begane grond een logistieke hub ingericht. Bij scenario 2/3 noemt VRR concreet: ademluchtcilinders, ventilatoren en accu’s, smokestoppers, vluchtmaskers, evac chairs, rehab chair en drinken. Ook het scheiden van schone en vuile goederen wordt expliciet genoemd."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["Het materiaalgedeelte van VRR maakt fysieke belasting zichtbaar door gewichten te benoemen. Voorbeelden: Rambo 18,3 kg, hoogbouwtas 12 kg, doorslijpschijf 10,5 kg, rescuezaag 10 kg, smokestopper 5 kg, O-bundel 11 kg (12,6 kg met straalpijp), en ademlucht/PBM waardoor de totale draaglast per persoon al snel zeer hoog wordt. Dat verklaart waarom “nog even door” geen neutrale keuze is: logistieke achterstand vertaalt zich in fysieke en tactische grenzen.", "Bij liftuitval gaat VRR nog verder: personele capaciteit verdubbelen en het mee te nemen gewicht per persoon halveren. Daarmee is logistiek een veiligheidsproces, niet alleen bevoorrading."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De logistieke functie wordt opgeschaald. Schone ademlucht, drinken en aflossing worden vooruit gepositioneerd en terugkerend materiaal/personen krijgen een eigen stroom."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze B: Kan de aanval kort maximaliseren, maar negeert dat logistiek volgens de bron de continuïteit van de repressieve inzet bepaalt.", "Keuze C: Kan zinvol zijn als men echt prioriteert op noodzakelijke middelen, maar niet als hierdoor ademlucht, back-up of essentiële veiligheidsmiddelen ontbreken."]}], assessment: c(byId(15),'A').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(15),'A').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(15),'A').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["logistiek: voldoende", "ploegbelasting: stabiliseert", "continuïteit: geborgd"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(c(byId(15),'B'), {
    consequenceDetail: {time: "15:10 uur — circa 25 minuten inzet — gevolg van keuze B", paragraphs: ["De beschikbare capaciteit blijft maximaal bij de brandaanval. Het logistieke tekort wordt daarmee vooruitgeschoven tot het moment dat een ploeg of materiaal echt niet meer beschikbaar is."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Kan de aanval kort maximaliseren, maar negeert dat logistiek volgens de bron de continuïteit van de repressieve inzet bepaalt.", "Logistiek is in VRICOL een zelfstandige taak, juist vanwege de lange aanvoerroute in hoogbouw. Het bruggenhoofd moet tijdig met middelen worden gevoed en de bron noemt als vuistregel één schone ademluchtcilinder per ingezette functionaris. Daarnaast: brancard/wervelplank, drinkwater of isotone drank, objecttekeningen, extra smokestoppers, vluchtmaskers, accuventilatoren en CO-meters.", "In de scenario-uitwerkingen wordt op de begane grond een logistieke hub ingericht. Bij scenario 2/3 noemt VRR concreet: ademluchtcilinders, ventilatoren en accu’s, smokestoppers, vluchtmaskers, evac chairs, rehab chair en drinken. Ook het scheiden van schone en vuile goederen wordt expliciet genoemd."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["Het materiaalgedeelte van VRR maakt fysieke belasting zichtbaar door gewichten te benoemen. Voorbeelden: Rambo 18,3 kg, hoogbouwtas 12 kg, doorslijpschijf 10,5 kg, rescuezaag 10 kg, smokestopper 5 kg, O-bundel 11 kg (12,6 kg met straalpijp), en ademlucht/PBM waardoor de totale draaglast per persoon al snel zeer hoog wordt. Dat verklaart waarom “nog even door” geen neutrale keuze is: logistieke achterstand vertaalt zich in fysieke en tactische grenzen.", "Bij liftuitval gaat VRR nog verder: personele capaciteit verdubbelen en het mee te nemen gewicht per persoon halveren. Daarmee is logistiek een veiligheidsproces, niet alleen bevoorrading."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De beschikbare capaciteit blijft maximaal bij de brandaanval. Het logistieke tekort wordt daarmee vooruitgeschoven tot het moment dat een ploeg of materiaal echt niet meer beschikbaar is."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Sluit aan bij VRR: logistiek vroeg als eigen proces organiseren, aflossing/ademlucht anticiperend positioneren en schoon/vuil scheiden.", "Keuze C: Kan zinvol zijn als men echt prioriteert op noodzakelijke middelen, maar niet als hierdoor ademlucht, back-up of essentiële veiligheidsmiddelen ontbreken."]}], assessment: c(byId(15),'B').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(15),'B').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(15),'B').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["logistiek: achterstand", "ploegbelasting: stijgt", "risico abrupt inzetverlies: verhoogd"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(c(byId(15),'C'), {
    consequenceDetail: {time: "15:10 uur — circa 25 minuten inzet — gevolg van keuze C", paragraphs: ["Het materiaalvolume wordt beperkt. Dat kan transportdruk verminderen, maar vereist scherpe selectie zodat ademlucht, back-up en noodzakelijke middelen niet worden geraakt."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Kan zinvol zijn als men echt prioriteert op noodzakelijke middelen, maar niet als hierdoor ademlucht, back-up of essentiële veiligheidsmiddelen ontbreken.", "Logistiek is in VRICOL een zelfstandige taak, juist vanwege de lange aanvoerroute in hoogbouw. Het bruggenhoofd moet tijdig met middelen worden gevoed en de bron noemt als vuistregel één schone ademluchtcilinder per ingezette functionaris. Daarnaast: brancard/wervelplank, drinkwater of isotone drank, objecttekeningen, extra smokestoppers, vluchtmaskers, accuventilatoren en CO-meters.", "In de scenario-uitwerkingen wordt op de begane grond een logistieke hub ingericht. Bij scenario 2/3 noemt VRR concreet: ademluchtcilinders, ventilatoren en accu’s, smokestoppers, vluchtmaskers, evac chairs, rehab chair en drinken. Ook het scheiden van schone en vuile goederen wordt expliciet genoemd."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["Het materiaalgedeelte van VRR maakt fysieke belasting zichtbaar door gewichten te benoemen. Voorbeelden: Rambo 18,3 kg, hoogbouwtas 12 kg, doorslijpschijf 10,5 kg, rescuezaag 10 kg, smokestopper 5 kg, O-bundel 11 kg (12,6 kg met straalpijp), en ademlucht/PBM waardoor de totale draaglast per persoon al snel zeer hoog wordt. Dat verklaart waarom “nog even door” geen neutrale keuze is: logistieke achterstand vertaalt zich in fysieke en tactische grenzen.", "Bij liftuitval gaat VRR nog verder: personele capaciteit verdubbelen en het mee te nemen gewicht per persoon halveren. Daarmee is logistiek een veiligheidsproces, niet alleen bevoorrading."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["Het materiaalvolume wordt beperkt. Dat kan transportdruk verminderen, maar vereist scherpe selectie zodat ademlucht, back-up en noodzakelijke middelen niet worden geraakt."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Sluit aan bij VRR: logistiek vroeg als eigen proces organiseren, aflossing/ademlucht anticiperend positioneren en schoon/vuil scheiden.", "Keuze B: Kan de aanval kort maximaliseren, maar negeert dat logistiek volgens de bron de continuïteit van de repressieve inzet bepaalt."]}], assessment: c(byId(15),'C').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(15),'C').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(15),'C').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["logistieke druk: lager", "essentiële middelen: risico op tekort", "effect afhankelijk van selectie"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(byId(16), {sourceFrame: "Scenario 3 in VRR is precies gedefinieerd als brand en/of rook buiten de compartimentsgrenzen waarbij vluchtwegen worden bedreigd. De commanders intent verandert dan: eerst rookverspreiding voorkomen, vervolgens vluchtwegen veiligstellen, daarna starten met ontruiming rond de brandverdieping en pas daarna de brand bestrijden/redding uitvoeren binnen de mogelijkheden.\n\nDe verkenning bepaalt opnieuw het scenario, het bruggenhoofd blijft standaard op -2 met continue CO-meting. Interventie wordt voorbereid als defensief binnen of eventueel offensief buiten; VRR noemt fognail/Cobra als voorbeelden. Interventie vindt pas plaats nadat maatregelen tegen rookverspreiding en voor ontruiming zijn getroffen.\n\nCompartimentering beschermt trappenhuis en voorportaal, bewaakt de overdruk en monitort CO boven/onder de brand. Accuventilatoren worden gereed gezet, maar ventileren gebeurt na brandmeester alleen direct vanuit brand-/rookruimte naar buiten. Ontruiming begint rond de brand en kan, bij verslechtering, naar totaal worden opgeschaald.\n\nDe casuskeuze is daarmee niet “blussen of ontruimen”, maar de prioritering herschikken zodat de vluchtweg niet verloren gaat terwijl de interventie op verantwoorde wijze wordt voortgezet.\n\nBronbasis: Brandweer Rotterdam-Rijnmond, Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, V1.0 (2024), scenario 3 p. 22-24 en prioritering p. 26-27.", situationDetail: {"time": "15:14 uur — duidelijke verslechtering", "intro": ["Rook treedt nu buiten het oorspronkelijke compartiment. Een deur naar de gang sluit niet goed en de CO-waarde in het inzettrappenhuis loopt op. De brand is nog niet volledig onder controle."], "observations": ["rook buiten oorspronkelijke compartimentsgrens;", "vluchtweg wordt bedreigd;", "CO stijgt in inzettrappenhuis;", "deur/compartimentering functioneert niet volledig;", "interventie heeft nog niet geleid tot volledige controle."], "after": ["Het incidentbeeld is veranderd. De vraag is niet of de eerdere tactiek ooit logisch was, maar of die tactiek nog past bij de huidige omstandigheden."], "prompt": "Hoe herclassificeer je de inzet?"}});
  Object.assign(c(byId(16),'A'), {
    consequenceDetail: {time: "15:14 uur — duidelijke verslechtering — gevolg van keuze A", paragraphs: ["De bevelvoerder benoemt expliciet dat het incidentbeeld naar scenario 3 is verschoven. Capaciteit gaat eerst naar rook-/vluchtwegbeheersing en ontruiming; de interventie wordt daarop opnieuw ingericht."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Is vrijwel één-op-één de scenario-3-logica uit VRR: rook-/vluchtwegmaatregelen eerst en interventie herordenen.", "Scenario 3 in VRR is precies gedefinieerd als brand en/of rook buiten de compartimentsgrenzen waarbij vluchtwegen worden bedreigd. De commanders intent verandert dan: eerst rookverspreiding voorkomen, vervolgens vluchtwegen veiligstellen, daarna starten met ontruiming rond de brandverdieping en pas daarna de brand bestrijden/redding uitvoeren binnen de mogelijkheden.", "De verkenning bepaalt opnieuw het scenario, het bruggenhoofd blijft standaard op -2 met continue CO-meting. Interventie wordt voorbereid als defensief binnen of eventueel offensief buiten; VRR noemt fognail/Cobra als voorbeelden. Interventie vindt pas plaats nadat maatregelen tegen rookverspreiding en voor ontruiming zijn getroffen."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["Compartimentering beschermt trappenhuis en voorportaal, bewaakt de overdruk en monitort CO boven/onder de brand. Accuventilatoren worden gereed gezet, maar ventileren gebeurt na brandmeester alleen direct vanuit brand-/rookruimte naar buiten. Ontruiming begint rond de brand en kan, bij verslechtering, naar totaal worden opgeschaald.", "De casuskeuze is daarmee niet “blussen of ontruimen”, maar de prioritering herschikken zodat de vluchtweg niet verloren gaat terwijl de interventie op verantwoorde wijze wordt voortgezet."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De bevelvoerder benoemt expliciet dat het incidentbeeld naar scenario 3 is verschoven. Capaciteit gaat eerst naar rook-/vluchtwegbeheersing en ontruiming; de interventie wordt daarop opnieuw ingericht."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze B: Negeert het veranderde scenario en daarmee de bronprioriteit; eerdere vooruitgang aan de brand compenseert geen verloren vluchtweg.", "Keuze C: Kan bij onhoudbare omstandigheden noodzakelijk worden, maar VRR scenario 3 kent nog wel binnenopties zolang vluchtwegen en ploegveiligheid beheersbaar kunnen worden gemaakt."]}], assessment: c(byId(16),'A').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(16),'A').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(16),'A').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["scenario: 3", "vluchtwegbeveiliging: prioriteit", "ontruiming: opgeschaald"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(c(byId(16),'B'), {
    consequenceDetail: {time: "15:14 uur — duidelijke verslechtering — gevolg van keuze B", paragraphs: ["De aanval blijft ongewijzigd doorgaan. Daardoor wordt eerdere voortgang aan de brand zwaarder gewogen dan de nieuwe aanwijzingen dat de vluchtweg verslechtert."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Negeert het veranderde scenario en daarmee de bronprioriteit; eerdere vooruitgang aan de brand compenseert geen verloren vluchtweg.", "Scenario 3 in VRR is precies gedefinieerd als brand en/of rook buiten de compartimentsgrenzen waarbij vluchtwegen worden bedreigd. De commanders intent verandert dan: eerst rookverspreiding voorkomen, vervolgens vluchtwegen veiligstellen, daarna starten met ontruiming rond de brandverdieping en pas daarna de brand bestrijden/redding uitvoeren binnen de mogelijkheden.", "De verkenning bepaalt opnieuw het scenario, het bruggenhoofd blijft standaard op -2 met continue CO-meting. Interventie wordt voorbereid als defensief binnen of eventueel offensief buiten; VRR noemt fognail/Cobra als voorbeelden. Interventie vindt pas plaats nadat maatregelen tegen rookverspreiding en voor ontruiming zijn getroffen."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["Compartimentering beschermt trappenhuis en voorportaal, bewaakt de overdruk en monitort CO boven/onder de brand. Accuventilatoren worden gereed gezet, maar ventileren gebeurt na brandmeester alleen direct vanuit brand-/rookruimte naar buiten. Ontruiming begint rond de brand en kan, bij verslechtering, naar totaal worden opgeschaald.", "De casuskeuze is daarmee niet “blussen of ontruimen”, maar de prioritering herschikken zodat de vluchtweg niet verloren gaat terwijl de interventie op verantwoorde wijze wordt voortgezet."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De aanval blijft ongewijzigd doorgaan. Daardoor wordt eerdere voortgang aan de brand zwaarder gewogen dan de nieuwe aanwijzingen dat de vluchtweg verslechtert."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Is vrijwel één-op-één de scenario-3-logica uit VRR: rook-/vluchtwegmaatregelen eerst en interventie herordenen.", "Keuze C: Kan bij onhoudbare omstandigheden noodzakelijk worden, maar VRR scenario 3 kent nog wel binnenopties zolang vluchtwegen en ploegveiligheid beheersbaar kunnen worden gemaakt."]}], assessment: c(byId(16),'B').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(16),'B').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(16),'B').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["scenarioverandering: genegeerd", "vluchtweg: verslechtert verder", "interventie: ongewijzigd"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(c(byId(16),'C'), {
    consequenceDetail: {time: "15:14 uur — duidelijke verslechtering — gevolg van keuze C", paragraphs: ["Alle binnenploegen trekken terug. Daarmee wordt de eigen blootstelling sterk beperkt, maar worden ook nog beschermbare vluchtwegen en binnenopties direct opgegeven."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Kan bij onhoudbare omstandigheden noodzakelijk worden, maar VRR scenario 3 kent nog wel binnenopties zolang vluchtwegen en ploegveiligheid beheersbaar kunnen worden gemaakt.", "Scenario 3 in VRR is precies gedefinieerd als brand en/of rook buiten de compartimentsgrenzen waarbij vluchtwegen worden bedreigd. De commanders intent verandert dan: eerst rookverspreiding voorkomen, vervolgens vluchtwegen veiligstellen, daarna starten met ontruiming rond de brandverdieping en pas daarna de brand bestrijden/redding uitvoeren binnen de mogelijkheden.", "De verkenning bepaalt opnieuw het scenario, het bruggenhoofd blijft standaard op -2 met continue CO-meting. Interventie wordt voorbereid als defensief binnen of eventueel offensief buiten; VRR noemt fognail/Cobra als voorbeelden. Interventie vindt pas plaats nadat maatregelen tegen rookverspreiding en voor ontruiming zijn getroffen."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["Compartimentering beschermt trappenhuis en voorportaal, bewaakt de overdruk en monitort CO boven/onder de brand. Accuventilatoren worden gereed gezet, maar ventileren gebeurt na brandmeester alleen direct vanuit brand-/rookruimte naar buiten. Ontruiming begint rond de brand en kan, bij verslechtering, naar totaal worden opgeschaald.", "De casuskeuze is daarmee niet “blussen of ontruimen”, maar de prioritering herschikken zodat de vluchtweg niet verloren gaat terwijl de interventie op verantwoorde wijze wordt voortgezet."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["Alle binnenploegen trekken terug. Daarmee wordt de eigen blootstelling sterk beperkt, maar worden ook nog beschermbare vluchtwegen en binnenopties direct opgegeven."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Is vrijwel één-op-één de scenario-3-logica uit VRR: rook-/vluchtwegmaatregelen eerst en interventie herordenen.", "Keuze B: Negeert het veranderde scenario en daarmee de bronprioriteit; eerdere vooruitgang aan de brand compenseert geen verloren vluchtweg."]}], assessment: c(byId(16),'C').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(16),'C').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(16),'C').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["binneninzet: beëindigd", "eigen blootstelling: lager", "redding/ontruiming binnen: sterk beperkt"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(byId(17), {sourceFrame: "VRR scenario 4 gaat uit van een gevelbrand die op meerdere plaatsen naar binnen kan doorslaan en vanwege de hoogte niet vanaf straatniveau adequaat bereikbaar is. De commanders intent is duidelijk: zo snel mogelijk het gebouw volledig ontruimen, beginnen met de verdiepingen boven de brand en vluchtwegen zo goed mogelijk beschermen. Pas daarna wordt beoordeeld of een verantwoorde bluspoging mogelijk is.\n\nIn de taakverdeling start de eerste eenheid met buitenverkenning, bepaling van onveilig gebied en veilige toegang. Bij uitbreidende gevelbrand wordt het ontruimingsalarm zo snel mogelijk geactiveerd. Verkenning en ontruiming op de brandverdieping gaan zelfs vóór redding uit de brandruimte. Andere ploegen ondersteunen de ontruiming boven de brand; trappenhuisbescherming bewaakt beide trappenhuizen en verwijst vluchtenden.\n\nDe prioriteringstabel zet bij scenario 4 Ontruiming en Verkenning/Compartimentering vóór interventie; interventie is in eerste instantie niet als primaire taak opgenomen. In de toelichting staat dat geen tijd verloren mag gaan met een gevelbrand die door snelheid en hevigheid meerdere verdiepingen kan bedreigen.\n\nDit scenario illustreert ook de koppeling met Coandă: vlammen/rook die langs de gevel omhoog bewegen betekenen dat niet alleen de direct bovenliggende etages relevant zijn. De gehele bovenliggende zone kan door overslag, rookinlaat of meerdere doorslagen worden bedreigd.\n\nBronbasis: Brandweer Rotterdam-Rijnmond, Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, V1.0 (2024), scenario 4 p. 24-27 en Coandă p. 9.", situationDetail: {"time": "15:18 uur — geveluitbreiding zichtbaar", "intro": ["Buiten worden vlammen gezien die langs de gevel omhoog trekken. Rook bereikt ramen van hogere verdiepingen en de brand is vanaf straatniveau niet effectief bereikbaar."], "observations": ["gevelbrand breidt verticaal uit;", "meerdere hogere verdiepingen kunnen tegelijk worden bedreigd;", "rook kan via gevelopeningen of luchtinlaten naar binnen komen;", "straatniveau biedt onvoldoende bereik voor effectieve bestrijding;", "ontruiming kost tijd en capaciteit."], "after": ["De inzet staat nu voor een fundamentele prioriteitskeuze: eerst proberen de gevelbrand te beïnvloeden of de beschikbare tijd gebruiken om bewoners uit de bedreigde zone te krijgen."], "prompt": "Welke koers kies je?"}});
  Object.assign(c(byId(17),'A'), {
    consequenceDetail: {time: "15:18 uur — geveluitbreiding zichtbaar — gevolg van keuze A", paragraphs: ["De inzet schakelt over naar totale ontruiming. De verdiepingen op en boven de brand krijgen als eerste aandacht en beide trappenhuizen worden zo goed mogelijk beschermd voor bewonersstromen."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Volgt de VRR-commanders intent: totale ontruiming direct, start boven de brand, vluchtwegen beschermen.", "VRR scenario 4 gaat uit van een gevelbrand die op meerdere plaatsen naar binnen kan doorslaan en vanwege de hoogte niet vanaf straatniveau adequaat bereikbaar is. De commanders intent is duidelijk: zo snel mogelijk het gebouw volledig ontruimen, beginnen met de verdiepingen boven de brand en vluchtwegen zo goed mogelijk beschermen. Pas daarna wordt beoordeeld of een verantwoorde bluspoging mogelijk is.", "In de taakverdeling start de eerste eenheid met buitenverkenning, bepaling van onveilig gebied en veilige toegang. Bij uitbreidende gevelbrand wordt het ontruimingsalarm zo snel mogelijk geactiveerd. Verkenning en ontruiming op de brandverdieping gaan zelfs vóór redding uit de brandruimte. Andere ploegen ondersteunen de ontruiming boven de brand; trappenhuisbescherming bewaakt beide trappenhuizen en verwijst vluchtenden."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["De prioriteringstabel zet bij scenario 4 Ontruiming en Verkenning/Compartimentering vóór interventie; interventie is in eerste instantie niet als primaire taak opgenomen. In de toelichting staat dat geen tijd verloren mag gaan met een gevelbrand die door snelheid en hevigheid meerdere verdiepingen kan bedreigen.", "Dit scenario illustreert ook de koppeling met Coandă: vlammen/rook die langs de gevel omhoog bewegen betekenen dat niet alleen de direct bovenliggende etages relevant zijn. De gehele bovenliggende zone kan door overslag, rookinlaat of meerdere doorslagen worden bedreigd."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De inzet schakelt over naar totale ontruiming. De verdiepingen op en boven de brand krijgen als eerste aandacht en beide trappenhuizen worden zo goed mogelijk beschermd voor bewonersstromen."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze B: Geeft interventie voorrang op de bronprioriteit en kan de beperkte tijd voor bewoners op hogere verdiepingen verbruiken.", "Keuze C: Kan trappenhuisdruk beperken, maar is bij echte geveluitbreiding te klein van scope omdat meerdere hogere verdiepingen tegelijk kunnen worden bedreigd."]}], assessment: c(byId(17),'A').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(17),'A').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(17),'A').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["scenario: 4", "totale ontruiming: gestart", "interventie: secundair"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(c(byId(17),'B'), {
    consequenceDetail: {time: "15:18 uur — geveluitbreiding zichtbaar — gevolg van keuze B", paragraphs: ["Capaciteit blijft eerst gericht op het beïnvloeden van de gevelbrand vanuit de brandverdieping. Hierdoor start de totale ontruiming later terwijl meerdere hogere verdiepingen tegelijk bedreigd kunnen raken."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Geeft interventie voorrang op de bronprioriteit en kan de beperkte tijd voor bewoners op hogere verdiepingen verbruiken.", "VRR scenario 4 gaat uit van een gevelbrand die op meerdere plaatsen naar binnen kan doorslaan en vanwege de hoogte niet vanaf straatniveau adequaat bereikbaar is. De commanders intent is duidelijk: zo snel mogelijk het gebouw volledig ontruimen, beginnen met de verdiepingen boven de brand en vluchtwegen zo goed mogelijk beschermen. Pas daarna wordt beoordeeld of een verantwoorde bluspoging mogelijk is.", "In de taakverdeling start de eerste eenheid met buitenverkenning, bepaling van onveilig gebied en veilige toegang. Bij uitbreidende gevelbrand wordt het ontruimingsalarm zo snel mogelijk geactiveerd. Verkenning en ontruiming op de brandverdieping gaan zelfs vóór redding uit de brandruimte. Andere ploegen ondersteunen de ontruiming boven de brand; trappenhuisbescherming bewaakt beide trappenhuizen en verwijst vluchtenden."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["De prioriteringstabel zet bij scenario 4 Ontruiming en Verkenning/Compartimentering vóór interventie; interventie is in eerste instantie niet als primaire taak opgenomen. In de toelichting staat dat geen tijd verloren mag gaan met een gevelbrand die door snelheid en hevigheid meerdere verdiepingen kan bedreigen.", "Dit scenario illustreert ook de koppeling met Coandă: vlammen/rook die langs de gevel omhoog bewegen betekenen dat niet alleen de direct bovenliggende etages relevant zijn. De gehele bovenliggende zone kan door overslag, rookinlaat of meerdere doorslagen worden bedreigd."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["Capaciteit blijft eerst gericht op het beïnvloeden van de gevelbrand vanuit de brandverdieping. Hierdoor start de totale ontruiming later terwijl meerdere hogere verdiepingen tegelijk bedreigd kunnen raken."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Volgt de VRR-commanders intent: totale ontruiming direct, start boven de brand, vluchtwegen beschermen.", "Keuze C: Kan trappenhuisdruk beperken, maar is bij echte geveluitbreiding te klein van scope omdat meerdere hogere verdiepingen tegelijk kunnen worden bedreigd."]}], assessment: c(byId(17),'B').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(17),'B').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(17),'B').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["interventie: voorrang", "totale ontruiming: vertraagd", "hogere verdiepingen: toenemend risico"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(c(byId(17),'C'), {
    consequenceDetail: {time: "15:18 uur — geveluitbreiding zichtbaar — gevolg van keuze C", paragraphs: ["Alleen de brandverdieping en twee erboven worden ontruimd. De trappenhuisdruk blijft lager, maar bewoners hoger in het gebouw blijven aanwezig terwijl de gevelbrand verder kan klimmen."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Kan trappenhuisdruk beperken, maar is bij echte geveluitbreiding te klein van scope omdat meerdere hogere verdiepingen tegelijk kunnen worden bedreigd.", "VRR scenario 4 gaat uit van een gevelbrand die op meerdere plaatsen naar binnen kan doorslaan en vanwege de hoogte niet vanaf straatniveau adequaat bereikbaar is. De commanders intent is duidelijk: zo snel mogelijk het gebouw volledig ontruimen, beginnen met de verdiepingen boven de brand en vluchtwegen zo goed mogelijk beschermen. Pas daarna wordt beoordeeld of een verantwoorde bluspoging mogelijk is.", "In de taakverdeling start de eerste eenheid met buitenverkenning, bepaling van onveilig gebied en veilige toegang. Bij uitbreidende gevelbrand wordt het ontruimingsalarm zo snel mogelijk geactiveerd. Verkenning en ontruiming op de brandverdieping gaan zelfs vóór redding uit de brandruimte. Andere ploegen ondersteunen de ontruiming boven de brand; trappenhuisbescherming bewaakt beide trappenhuizen en verwijst vluchtenden."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["De prioriteringstabel zet bij scenario 4 Ontruiming en Verkenning/Compartimentering vóór interventie; interventie is in eerste instantie niet als primaire taak opgenomen. In de toelichting staat dat geen tijd verloren mag gaan met een gevelbrand die door snelheid en hevigheid meerdere verdiepingen kan bedreigen.", "Dit scenario illustreert ook de koppeling met Coandă: vlammen/rook die langs de gevel omhoog bewegen betekenen dat niet alleen de direct bovenliggende etages relevant zijn. De gehele bovenliggende zone kan door overslag, rookinlaat of meerdere doorslagen worden bedreigd."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["Alleen de brandverdieping en twee erboven worden ontruimd. De trappenhuisdruk blijft lager, maar bewoners hoger in het gebouw blijven aanwezig terwijl de gevelbrand verder kan klimmen."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Volgt de VRR-commanders intent: totale ontruiming direct, start boven de brand, vluchtwegen beschermen.", "Keuze B: Geeft interventie voorrang op de bronprioriteit en kan de beperkte tijd voor bewoners op hogere verdiepingen verbruiken."]}], assessment: c(byId(17),'C').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(17),'C').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(17),'C').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["ontruiming: te beperkt", "hogere bewoners: blijven", "geveluitbreiding: risico op inhalen ontruiming"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(byId(18), {sourceFrame: "VRR heeft een apart hoofdstuk over tijdlijnen omdat tijdsbewustzijn bij complexe hoogbouwincidenten onder druk staat. De tijdlijnen zijn geen automatische “stopklok”, maar beslisondersteuning. De operationeel leidinggevende/TOA valideert telkens of de theoretische risico’s daadwerkelijk aanwezig zijn en welke actie nodig is.\n\nDe bron koppelt drie onderwerpen aan de tijd: constructieve sterkte/WBDBO, de inzet van de brandweer en de tijd die bewoners nodig hebben om te ontvluchten. Voor gebouwen <70 m, 70-200 m en >200 m worden verschillende WBDBO-/ontruimingstijdlijnen weergegeven. Voor 70-200 m wordt in de figuur 105 minuten WBDBO van het trappenhuis gebruikt; voor >200 m 150 minuten. De bron rekent algemeen met ongeveer 30 minuten na melding voordat daadwerkelijke blussing aanvangt.\n\nBelangrijk is de nuance rond WBDBO. De waarde komt uit een gestandaardiseerde brandproef; de echte brand volgt niet exact dezelfde curve. Een scheiding kan langer standhouden, maar faalt in de praktijk vaak bij aansluitingen en doorvoeren. Wachten tot een scheiding bijna faalt kan betekenen dat er onvoldoende tijd resteert om bewoners te ontruimen, bijvoorbeeld wanneer brand/rook het trappenhuis al bereikt.\n\nVRR benoemt daarnaast biobased constructiematerialen als voorbeeld waarbij constructiedelen in de dooffase kunnen blijven branden of gloeien. Water op het vuur kan dan nodig blijven om sterkte-afname te stoppen of vertragen. Dit onderstreept dat “35 minuten voorbij” op zichzelf geen tactisch antwoord geeft: actuele brand-, constructie-, vluchtweg- en personeelsinformatie moet opnieuw worden gewogen.\n\nVoorbeeld VRR: een wand/vloer met 60 minuten testwaarde kan in de praktijk langer standhouden, maar aansluitingen en doorvoeren kunnen eerder falen.\n\nVoorbeeld VRR: bij biobased constructies kan de constructie in de dooffase blijven branden/gloeien, waardoor sterkte verder afneemt.\n\nDe tijdlijn helpt bepalen wanneer een besluit tot gedeeltelijke of totale ontruiming nog op tijd moet worden genomen.\n\nBronbasis: Brandweer Rotterdam-Rijnmond, Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, V1.0 (2024), p. 28-31.", situationDetail: {"time": "15:23 uur — 35+ minuten na start inzet", "intro": ["De inzet loopt inmiddels ruim een half uur. Afhankelijk van eerdere beslissingen zijn vluchtwegen, logistiek, liftstatus en personele belasting verschillend ontwikkeld."], "observations": ["brand kan onder controle zijn of opnieuw uitbreiden;", "WBDBO en constructieve informatie moeten in actuele context worden beoordeeld;", "vluchtwegen kunnen nog bruikbaar of juist bedreigd zijn;", "personele en logistieke belasting is toegenomen;", "ontruiming kan lokaal, uitgebreid of totaal zijn geworden."], "after": ["Tijd is hier geen automatische stopregel. Het is een aanleiding om expliciet opnieuw te bepalen welke risico’s nu werkelijk aanwezig zijn en of de gekozen inzet nog klopt."], "prompt": "Wat is je laatste expliciete beslisstap?"}});
  Object.assign(c(byId(18),'A'), {
    consequenceDetail: {time: "15:23 uur — 35+ minuten na start inzet — gevolg van keuze A", paragraphs: ["De commandovoering organiseert een expliciet heroverwegingsmoment. Scenario, WBDBO/constructieve informatie, vluchtwegen, personele belasting, lift/logistiek en ontruiming worden opnieuw naast elkaar gelegd."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Is precies de bedoeling van de VRR-tijdlijnen: expliciet heroverwegen en de actuele situatie valideren.", "VRR heeft een apart hoofdstuk over tijdlijnen omdat tijdsbewustzijn bij complexe hoogbouwincidenten onder druk staat. De tijdlijnen zijn geen automatische “stopklok”, maar beslisondersteuning. De operationeel leidinggevende/TOA valideert telkens of de theoretische risico’s daadwerkelijk aanwezig zijn en welke actie nodig is.", "De bron koppelt drie onderwerpen aan de tijd: constructieve sterkte/WBDBO, de inzet van de brandweer en de tijd die bewoners nodig hebben om te ontvluchten. Voor gebouwen <70 m, 70-200 m en >200 m worden verschillende WBDBO-/ontruimingstijdlijnen weergegeven. Voor 70-200 m wordt in de figuur 105 minuten WBDBO van het trappenhuis gebruikt; voor >200 m 150 minuten. De bron rekent algemeen met ongeveer 30 minuten na melding voordat daadwerkelijke blussing aanvangt.", "Belangrijk is de nuance rond WBDBO. De waarde komt uit een gestandaardiseerde brandproef; de echte brand volgt niet exact dezelfde curve. Een scheiding kan langer standhouden, maar faalt in de praktijk vaak bij aansluitingen en doorvoeren. Wachten tot een scheiding bijna faalt kan betekenen dat er onvoldoende tijd resteert om bewoners te ontruimen, bijvoorbeeld wanneer brand/rook het trappenhuis al bereikt."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["VRR benoemt daarnaast biobased constructiematerialen als voorbeeld waarbij constructiedelen in de dooffase kunnen blijven branden of gloeien. Water op het vuur kan dan nodig blijven om sterkte-afname te stoppen of vertragen. Dit onderstreept dat “35 minuten voorbij” op zichzelf geen tactisch antwoord geeft: actuele brand-, constructie-, vluchtweg- en personeelsinformatie moet opnieuw worden gewogen.", "Voorbeeld VRR: een wand/vloer met 60 minuten testwaarde kan in de praktijk langer standhouden, maar aansluitingen en doorvoeren kunnen eerder falen.", "Voorbeeld VRR: bij biobased constructies kan de constructie in de dooffase blijven branden/gloeien, waardoor sterkte verder afneemt.", "De tijdlijn helpt bepalen wanneer een besluit tot gedeeltelijke of totale ontruiming nog op tijd moet worden genomen."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De commandovoering organiseert een expliciet heroverwegingsmoment. Scenario, WBDBO/constructieve informatie, vluchtwegen, personele belasting, lift/logistiek en ontruiming worden opnieuw naast elkaar gelegd."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze B: Laat besluitvorming te veel afhangen van een nieuwe noodmelding en kan sluipende verslechtering van WBDBO, vluchtweg of logistiek missen.", "Keuze C: Maakt van tijd een harde stopregel, terwijl VRR tijd juist als toets-/heroverwegingsmoment gebruikt."]}], assessment: c(byId(18),'A').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(18),'A').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(18),'A').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["heroverweging: uitgevoerd", "actueel risicobeeld: vernieuwd", "inzetplan: zo nodig aangepast"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(c(byId(18),'B'), {
    consequenceDetail: {time: "15:23 uur — 35+ minuten na start inzet — gevolg van keuze B", paragraphs: ["De inzet loopt door volgens het bestaande plan. Zolang niemand een nieuwe noodmelding doet, worden sluipende veranderingen niet systematisch opnieuw beoordeeld."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Laat besluitvorming te veel afhangen van een nieuwe noodmelding en kan sluipende verslechtering van WBDBO, vluchtweg of logistiek missen.", "VRR heeft een apart hoofdstuk over tijdlijnen omdat tijdsbewustzijn bij complexe hoogbouwincidenten onder druk staat. De tijdlijnen zijn geen automatische “stopklok”, maar beslisondersteuning. De operationeel leidinggevende/TOA valideert telkens of de theoretische risico’s daadwerkelijk aanwezig zijn en welke actie nodig is.", "De bron koppelt drie onderwerpen aan de tijd: constructieve sterkte/WBDBO, de inzet van de brandweer en de tijd die bewoners nodig hebben om te ontvluchten. Voor gebouwen <70 m, 70-200 m en >200 m worden verschillende WBDBO-/ontruimingstijdlijnen weergegeven. Voor 70-200 m wordt in de figuur 105 minuten WBDBO van het trappenhuis gebruikt; voor >200 m 150 minuten. De bron rekent algemeen met ongeveer 30 minuten na melding voordat daadwerkelijke blussing aanvangt.", "Belangrijk is de nuance rond WBDBO. De waarde komt uit een gestandaardiseerde brandproef; de echte brand volgt niet exact dezelfde curve. Een scheiding kan langer standhouden, maar faalt in de praktijk vaak bij aansluitingen en doorvoeren. Wachten tot een scheiding bijna faalt kan betekenen dat er onvoldoende tijd resteert om bewoners te ontruimen, bijvoorbeeld wanneer brand/rook het trappenhuis al bereikt."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["VRR benoemt daarnaast biobased constructiematerialen als voorbeeld waarbij constructiedelen in de dooffase kunnen blijven branden of gloeien. Water op het vuur kan dan nodig blijven om sterkte-afname te stoppen of vertragen. Dit onderstreept dat “35 minuten voorbij” op zichzelf geen tactisch antwoord geeft: actuele brand-, constructie-, vluchtweg- en personeelsinformatie moet opnieuw worden gewogen.", "Voorbeeld VRR: een wand/vloer met 60 minuten testwaarde kan in de praktijk langer standhouden, maar aansluitingen en doorvoeren kunnen eerder falen.", "Voorbeeld VRR: bij biobased constructies kan de constructie in de dooffase blijven branden/gloeien, waardoor sterkte verder afneemt.", "De tijdlijn helpt bepalen wanneer een besluit tot gedeeltelijke of totale ontruiming nog op tijd moet worden genomen."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["De inzet loopt door volgens het bestaande plan. Zolang niemand een nieuwe noodmelding doet, worden sluipende veranderingen niet systematisch opnieuw beoordeeld."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Is precies de bedoeling van de VRR-tijdlijnen: expliciet heroverwegen en de actuele situatie valideren.", "Keuze C: Maakt van tijd een harde stopregel, terwijl VRR tijd juist als toets-/heroverwegingsmoment gebruikt."]}], assessment: c(byId(18),'B').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(18),'B').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(18),'B').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["heroverweging: uitgesteld", "sluipende risico’s: mogelijk gemist", "plan: ongewijzigd"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
  Object.assign(c(byId(18),'C'), {
    consequenceDetail: {time: "15:23 uur — 35+ minuten na start inzet — gevolg van keuze C", paragraphs: ["Alle binneninzet wordt op basis van verstreken tijd beëindigd. Daarmee wordt tijd als harde grens gebruikt zonder eerst te toetsen of de actuele omstandigheden dit verlangen."]},
    debrief: {sections: [{"title": "Waarom past dit bij de VRR-bron?", "paragraphs": ["Maakt van tijd een harde stopregel, terwijl VRR tijd juist als toets-/heroverwegingsmoment gebruikt.", "VRR heeft een apart hoofdstuk over tijdlijnen omdat tijdsbewustzijn bij complexe hoogbouwincidenten onder druk staat. De tijdlijnen zijn geen automatische “stopklok”, maar beslisondersteuning. De operationeel leidinggevende/TOA valideert telkens of de theoretische risico’s daadwerkelijk aanwezig zijn en welke actie nodig is.", "De bron koppelt drie onderwerpen aan de tijd: constructieve sterkte/WBDBO, de inzet van de brandweer en de tijd die bewoners nodig hebben om te ontvluchten. Voor gebouwen <70 m, 70-200 m en >200 m worden verschillende WBDBO-/ontruimingstijdlijnen weergegeven. Voor 70-200 m wordt in de figuur 105 minuten WBDBO van het trappenhuis gebruikt; voor >200 m 150 minuten. De bron rekent algemeen met ongeveer 30 minuten na melding voordat daadwerkelijke blussing aanvangt.", "Belangrijk is de nuance rond WBDBO. De waarde komt uit een gestandaardiseerde brandproef; de echte brand volgt niet exact dezelfde curve. Een scheiding kan langer standhouden, maar faalt in de praktijk vaak bij aansluitingen en doorvoeren. Wachten tot een scheiding bijna faalt kan betekenen dat er onvoldoende tijd resteert om bewoners te ontruimen, bijvoorbeeld wanneer brand/rook het trappenhuis al bereikt."]}, {"title": "Welke technische of tactische nuance geeft VRR mee?", "paragraphs": ["VRR benoemt daarnaast biobased constructiematerialen als voorbeeld waarbij constructiedelen in de dooffase kunnen blijven branden of gloeien. Water op het vuur kan dan nodig blijven om sterkte-afname te stoppen of vertragen. Dit onderstreept dat “35 minuten voorbij” op zichzelf geen tactisch antwoord geeft: actuele brand-, constructie-, vluchtweg- en personeelsinformatie moet opnieuw worden gewogen.", "Voorbeeld VRR: een wand/vloer met 60 minuten testwaarde kan in de praktijk langer standhouden, maar aansluitingen en doorvoeren kunnen eerder falen.", "Voorbeeld VRR: bij biobased constructies kan de constructie in de dooffase blijven branden/gloeien, waardoor sterkte verder afneemt.", "De tijdlijn helpt bepalen wanneer een besluit tot gedeeltelijke of totale ontruiming nog op tijd moet worden genomen."]}, {"title": "Wat betekent dit operationeel in deze casus?", "paragraphs": ["Alle binneninzet wordt op basis van verstreken tijd beëindigd. Daarmee wordt tijd als harde grens gebruikt zonder eerst te toetsen of de actuele omstandigheden dit verlangen."]}, {"title": "Hoe verhoudt dit zich tot de andere opties?", "paragraphs": ["Keuze A: Is precies de bedoeling van de VRR-tijdlijnen: expliciet heroverwegen en de actuele situatie valideren.", "Keuze B: Laat besluitvorming te veel afhangen van een nieuwe noodmelding en kan sluipende verslechtering van WBDBO, vluchtweg of logistiek missen."]}], assessment: c(byId(18),'C').label==='Sterk'?'Sterke en goed uitlegbare keuze.':(c(byId(18),'C').label==='Te absoluut'?'Te absolute keuze voor het beschikbare beeld.':(c(byId(18),'C').label.includes('Ongunstig')?'Ongunstige keuze in dit actuele scenario.':'Verdedigbare afweging met duidelijke aandachtspunten.')), stateEffects: ["binneninzet: automatisch beëindigd", "tijd als stopregel: te absoluut", "mogelijk veilige inzetkans: opgegeven"], closing: "Rolafspraak: de bevelvoerder gebruikt de actuele terugmeldingen om de tactische en organisatorische inzet te sturen."}
  });
})();


// VGGM/BPBB-laag toegevoegd in v6. Deze laag staat naast de VRR-bronduiding.
(() => {
  const S = window.SCENARIO;
  S.systemDefinitions = {
    "RSTV": {title:"RSTV", text:"Gebruik RSTV-signalen om het brandbeeld dynamisch te lezen: rook, stroming, temperatuur en vlammen. In deze casus worden die waarnemingen steeds gekoppeld aan wind, openingen, verdieping en vluchtwegen."},
    "Kenmerkenschema": {title:"Kenmerkenschema", text:"Gebruik kenmerken van brand, gebouw, mens, omgeving en interventie om het inzetdoel en de randvoorwaarden te bepalen. Bij hoogbouw wegen gebouwvoorzieningen, verticale verplaatsing, bewonersgedrag en rookverspreiding zwaar mee."},
    "Kwadrantenmodel": {title:"Kwadrantenmodel", text:"Gebruik het kwadrantenmodel om bewust te kiezen tussen offensief of defensief en binnen of buiten. De gekozen positie moet blijven passen bij het actuele brandbeeld en kan tijdens de inzet wijzigen."},
    "CAN": {title:"CAN-terugmelding", text:"Gebruik CAN voor een korte, bruikbare terugmelding vanuit de ploeg: condities/waarnemingen, acties die worden uitgevoerd en wat nodig is. In deze casus voedt CAN de besluitvorming van de bevelvoerder zonder dat manschappen voor iedere veilige handeling toestemming hoeven af te wachten."},
    "FABCM": {title:"FABCM", text:"FABCM ondersteunt commandovoering: Factfinding, Analyse, Besluitvorming, Communicatie en Monitoring. In deze casus wordt het vooral zichtbaar bij heroverwegingen: actief afwijkende feiten zoeken, betekenis geven, besluiten, opdrachten helder communiceren en controleren of het effect wordt bereikt."},
    "Deurcontrole": {title:"Deurcontrole", text:"Beoordeel vóór openen wat de deur, druk, warmte en rookstroming vertellen. Open zo beperkt en gecontroleerd mogelijk en koppel de uitkomst aan het inzetplan."},
    "Anti-ventilatie": {title:"Anti-ventilatie", text:"Beperk ongewenste luchttoevoer en rookafvoer door openingen beheerst te houden. Bij winddruk en stack-effect is het voorkomen van een ongecontroleerde flowpath extra belangrijk."},
    "Rookgaskoeling": {title:"Rookgaskoeling / straalpijptechniek", text:"Stem de straalpijptechniek af op het brand- en rookbeeld. Koeling is geen automatische handeling: doel, bereik, druppelverdeling, positie en beschikbare watercapaciteit moeten passen bij de situatie."},
    "Laag voortbewegen": {title:"Laag voortbewegen", text:"Bij hitte en slecht zicht beweegt de ploeg laag om onder de heetste rooklaag te blijven, het thermisch beeld beter te benutten en de terugweg beheersbaar te houden."},
    "Snelle toevoer": {title:"Snelle toevoer", text:"In deze fictieve casus is de snelle toevoer beschikbaar om de watervoorziening naar de gebouwinstallatie snel en eenduidig op te bouwen. De gebouwblusleiding blijft daarbij een kritieke schakel die gecontroleerd moet worden."},
    "Snelle aanval": {title:"Snelle aanval", text:"In deze fictieve casus is de snelle aanval beschikbaar voor een snelle opbouw van de LD-aanvalslijn vanaf het gekozen afnamepunt. Snelheid is alleen winst als voldoende koelend vermogen, back-up en een veilige route zijn geborgd."},
    "O-bundel": {title:"O-bundel", text:"De O-bundel ondersteunt een compacte slangopbouw op hoogte. In deze casus wordt hij gebruikt vanaf het gekozen afnamepunt en zo geplaatst dat de inzet- en vluchtroute zo min mogelijk wordt belast."},
    "Smokestopper": {title:"Smokestopper / Smoke Stopper", text:"De smokestopper is in deze casus beschikbaar. Hij ondersteunt deurmanagement en anti-ventilatie door rookuitstroom via de deuropening te beperken terwijl gecontroleerde inzet mogelijk blijft."},
    "Hoogtetas": {title:"Hoogtetas", text:"De hoogtetas bundelt materiaal dat op hoogte nodig kan zijn. In deze casus wordt hij onderdeel van de logistieke planning: wat moet direct mee, wat hoort op het bruggenhoofd en wat kan later worden aangevoerd?"}
  };
  const systemsByNode = {
    1:["Kenmerkenschema","RSTV","CAN"],
    2:["CAN"],
    3:["Kenmerkenschema","CAN","Snelle aanval","O-bundel"],
    4:["FABCM","CAN","Hoogtetas"],
    5:["Deurcontrole","Anti-ventilatie","Smokestopper","RSTV"],
    6:["RSTV","Anti-ventilatie","Rookgaskoeling","CAN"],
    7:["Kwadrantenmodel","Snelle toevoer","Snelle aanval","O-bundel","Rookgaskoeling"],
    8:["Kenmerkenschema","RSTV","Kwadrantenmodel","FABCM"],
    9:["Kenmerkenschema","Kwadrantenmodel","CAN"],
    10:["Anti-ventilatie","RSTV","CAN"],
    11:["CAN","FABCM"],
    12:["RSTV","Anti-ventilatie","CAN"],
    13:["CAN","FABCM"],
    14:["CAN","FABCM"],
    15:["Hoogtetas","FABCM","CAN"],
    16:["Kenmerkenschema","RSTV","Kwadrantenmodel","FABCM","CAN"],
    17:["Kenmerkenschema","RSTV","Kwadrantenmodel","FABCM"],
    18:["FABCM","Kenmerkenschema","RSTV","Kwadrantenmodel","CAN"]
  };
  S.nodes.forEach(n => n.systems = systemsByNode[n.id] || []);
  S.meta.principles.splice(3,0,"VGGM/BPBB-systemen worden als tweede didactische laag toegepast naast de VRR-bronduiding: RSTV, kenmerkenschema, kwadrantenmodel, CAN, FABCM en de beschikbare aanvalsmiddelen.");

  const n5=S.nodes.find(n=>n.id===5);
  n5.situationDetail.after = (n5.situationDetail.after||[]).concat(["De ploeg heeft een smokestopper en de benodigde LD-aanvalsmiddelen bij zich. Deuropening, luchttoevoer en rookstroming worden daarom onderdeel van de inzetbeslissing en niet alleen van de toetreding."]);
  const n6=S.nodes.find(n=>n.id===6);
  n6.situationDetail.after = (n6.situationDetail.after||[]).concat(["De manschappen koppelen hun RSTV-waarnemingen via een korte CAN-terugmelding aan de bevelvoerder: veranderende condities, huidige actie en behoefte aan extra koelend vermogen/back-up."]);
  const n7=S.nodes.find(n=>n.id===7);
  n7.situationDetail.after = (n7.situationDetail.after||[]).concat(["Voor deze fictieve VGGM-casus zijn snelle toevoer, snelle aanval en O-bundels beschikbaar. De keuze gaat daarom niet alleen over 'welke slang', maar over snelheid versus koelend vermogen, back-up en een beheersbare slangvoering op hoogte."]);
  n7.choices[0].text="Snelle toevoer naar de gebouwblusleiding borgen en vanaf het gekozen afnamepunt twee LD-aanvalsmogelijkheden opbouwen, met O-bundel/sneller aanvalssysteem voor de primaire lijn en een volwaardige back-up vóór hernieuwde toetreding.";
  n7.choices[1].text="Snelle toevoer borgen en met één snel opgebouwde LD-aanvalslijn/O-bundel toetreden; de tweede lijn wordt tijdens de inzet opgebouwd.";
  n7.choices[2].text="Kiezen voor de lichtste en snelst hanteerbare aanval, met minder nadruk op tweede lijn/back-up, omdat het om één appartement gaat.";
  const n15=S.nodes.find(n=>n.id===15);
  n15.situationDetail.after = (n15.situationDetail.after||[]).concat(["De hoogtetas en overige materialen worden nu bewust verdeeld tussen wat op het bruggenhoofd direct nodig is en wat beneden in de logistieke hub kan blijven. Daarmee wordt ook het mee te nemen gewicht onderdeel van de aflossingsplanning."]);
  const n18=S.nodes.find(n=>n.id===18);
  n18.situationDetail.after = (n18.situationDetail.after||[]).concat(["Dit moment wordt tevens gebruikt als FABCM-heroverweging: welke afwijkende feiten zijn erbij gekomen, wat betekenen die, welk besluit volgt, wie moet dat weten en welk effect moet daarna worden gemonitord?"]);
})();
