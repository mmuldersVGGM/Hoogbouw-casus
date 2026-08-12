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
      "title": "Deurmanagement en rookstopper",
      "situation": "De ploeg bereikt de gang op verdieping 14. Er is rook in de gang maar nog zicht. De voordeur van de brandwoning is dicht; achter de deur is warmte voelbaar.",
      "choices": [
        {
          "id": "A",
          "text": "Rookstopper plaatsen en deur gecontroleerd openen zodra blusmiddel inzetgereed is.",
          "consequence": "Rookuitstroom naar de gang wordt beperkt; ploeg behoudt controle over de opening.",
          "rationale": "Sterke keuze; deurmanagement +1, vluchtweg beschermd.",
          "label": "Sterk",
          "quality": 1
        },
        {
          "id": "B",
          "text": "Deur kort openen voor snelle observatie en direct weer sluiten; rookstopper pas daarna plaatsen.",
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
      "operational": "Denk aan deuren gesloten houden, rookstopper, CO-monitoring en trappenhuisbescherming."
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
    "Rookstopper": {
      "definition": "Middel om rookuitstroom via een deuropening te beperken terwijl inzet mogelijk blijft.",
      "operational": "Helpt de gang/voorportaal en daarmee vluchtweg rookarmer te houden. In deze fictieve casus is de rookstopper beschikbaar binnen de lage-druksystemen."
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
      frame: `Rookverspreiding is in het VRR-handboek een zelfstandig tactisch probleem. Bij scenario 1 en 2 wordt expliciet benoemd dat het voorportaal rookvrij moet blijven en dat een rookstopper bij het brandcompartiment en richting lift kan worden geplaatst. Het openen van een deur kan een flowpath creëren. Deurcontrole en het vaststellen van stroming/overdruk horen daarom bij de inzet.`,
      A: `De rookstopper wordt geplaatst voordat de deuropening structureel wordt gebruikt en het blusmiddel staat inzetgereed. Daarmee blijft de opening beheersbaar en wordt rookuitstroom naar gang en voorportaal beperkt. Dit beschermt zowel de terugtrekroute van de ploeg als de vluchtweg voor bewoners.`,
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
      frame: `VRR behandelt compartimentering en trappenhuisbescherming als zelfstandige taken. Teams monitoren CO in het hele trappenhuis, houden deuren gesloten, plaatsen zo nodig rookstoppers, rapporteren per verdieping aan het bruggenhoofd en geleiden vluchtende bewoners naar het veilige trappenhuis. CO boven of onder de brand kan een aanwijzing zijn voor stack-effect. Ventilatie hoort gecontroleerd te gebeuren, bij voorkeur vanuit brand- of rookruimte rechtstreeks naar buiten.`,
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

