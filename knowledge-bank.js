window.KNOWLEDGE_BANK = {
  version: '2026-09-08',
  intro: 'De kennisbank bundelt de inhoudelijke onderleggers van deze hoogbouwcasus. Algemene kennis, regionale uitwerkingen en bron-specifieke voorbeelden worden bewust van elkaar onderscheiden. Een gebouwvoorziening is pas operationeel beschikbaar wanneer de daadwerkelijke werking is vastgesteld.',
  cards: [
    {
      id:'coanda', title:'Coandă-effect', category:'Brandfenomenen',
      definition:'Rook en hete gassen kunnen langs een gevel omhoog worden geleid en daardoor hoger gelegen openingen, verdiepingen of luchtinlaten bedreigen.',
      core:['Beoordeel bij de buitenverkenning niet alleen de brandruimte, maar ook de rook- en vlambeweging langs de gevel.','Gevelvorm, balkons, terugliggende delen, openingen en luchtinlaten kunnen het stromingsbeeld beïnvloeden.','Coandă-effect is een verklaring voor stroming langs de gevel, niet automatisch bewijs van branduitbreiding.'],
      sections:[
        {title:'Operationeel', text:'Kijk boven de brand naar open ramen, balkons, luchtinlaten en veranderingen in rook- of vlambeweging. Combineer buitenwaarnemingen met informatie van binnen.'},
        {title:'Bron-specifieke uitwerking', text:'De oorspronkelijke bronpresentatie gebruikt onder andere Notenhout Nijmegen, Tours Mermoz en Grenfell als voorbeelden. Een genoemd voorbeeld met een balkon van 60 cm is geen universele ontwerp- of inzetregel.'}
      ],
      related:['Gevelbrand en verticale branduitbreiding','Wind Driven Fire','Stack-effect','Rookverspreiding'],
      sources:['Bron: Hoogbouwpresentatie 2020','VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024'],
      media:'Coandă-effect', video:'https://youtu.be/wF3YgP4Ag04?si=14DGjZZjriKNb1zj'
    },
    {
      id:'stack', title:'Stack-effect', category:'Brandfenomenen',
      definition:'Door temperatuur- en drukverschillen kan in een hoog gebouw een verticale luchtstroming ontstaan via onder andere trappenhuizen, liftschachten en technische schachten.',
      core:['Rook en CO kunnen ver van de brandverdieping worden aangetroffen.','Controleer daarom niet alleen boven, maar ook onder de brand.','Openingen, deuren en temperatuurverschillen kunnen het druk- en stromingsbeeld veranderen.'],
      sections:[
        {title:'Operationeel', text:'Gebruik onverwachte rook- of CO-metingen als aanwijzing en toets de hypothese met vervolgwaarnemingen. Beperk onnodige openingen en blijf deuren en drukverhoudingen beoordelen.'},
        {title:'VRR-uitwerking', text:'Het VRR-handboek beschrijft positieve opwaartse en negatieve neerwaartse stack, het gesloten houden van deuren en terughoudendheid met eigen ventilatie wanneer de stromingsroute niet voldoende bekend is.'}
      ],
      related:['Reverse stack-effect','Rookverspreiding','Flowpath','Overdrukinstallatie'],
      sources:['Bron: Hoogbouwpresentatie 2020','VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024'],
      media:'Stack-effect', video:'https://youtu.be/CoTqobi4J40?si=yPRLE63CCivy4dAg'
    },
    {
      id:'reverse-stack', title:'Reverse stack-effect', category:'Brandfenomenen', aliases:['Reverse stack'],
      definition:'Omgekeerde verticale luchtstroming waarbij rook en verbrandingsproducten ook naar lager gelegen delen van een gebouw kunnen worden verplaatst.',
      core:['Ga er niet vanuit dat rook zich uitsluitend omhoog verplaatst.','Controleer boven én onder de brandverdieping en besteed aandacht aan schachten en CO.','Gebruik reverse stack-effect als hypothese en niet als diagnose op basis van één waarneming.'],
      sections:[{title:'Operationeel', text:'Combineer rookbeeld, temperatuur, openingen, drukverschillen en metingen. Nieuwe deurstanden of andere openingen kunnen het stromingsbeeld wijzigen.'}],
      related:['Stack-effect','Rookverspreiding','Flowpath'],
      sources:['Bron: Hoogbouwpresentatie 2020','VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024'],
      media:'Reverse stack', video:'https://youtu.be/CoTqobi4J40?si=yPRLE63CCivy4dAg'
    },
    {
      id:'wdf', title:'Wind Driven Fire', category:'Brandfenomenen',
      definition:'Winddruk op een gevelopening kan lucht, brand en hete rookgassen krachtig door een compartiment sturen.',
      core:['Het buitenbeeld kan misleidend zijn; weinig rook uit een windbelaste opening sluit een zware binnenbrand niet uit.','Een geopende deur kan een krachtige flowpath creëren.','Beoordeel wind, openingen, stroming, koelend vermogen en ploegpositie vóór toetreding.'],
      sections:[
        {title:'Operationeel', text:'Koppel buitenwaarnemingen aan wat de ploeg binnen meldt. Beperk onbedoelde luchttoevoer, voorkom een ongunstige flowpath en zorg dat de beschikbare slagkracht past bij het verwachte brandvermogen.'},
        {title:'Bron-specifieke uitwerking', text:'Het VRR-handboek noemt onder andere fognails, Cobra en een floor-below nozzle als mogelijke voorbeelden van externe beïnvloeding. Dit zijn geen automatisch voorgeschreven VGGM-methoden.'}
      ],
      related:['Flowpath','Deurcontrole & antiventilatie','Transitional attack / externe interventie','Gevelbrand en verticale branduitbreiding'],
      sources:['Bron: Hoogbouwpresentatie 2020','ARO 22103 Hoogbouw, versie 4.0','VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024'],
      media:'Wind Driven Fire', video:'https://youtu.be/5gOrR9IoB8Y?si=wDkTGTgQttDiKKJn'
    },
    {
      id:'flowpath', title:'Flowpath', category:'Brandfenomenen',
      definition:'De route tussen luchttoevoer en uitstroom waarlangs lucht, rook, hete gassen en brandinvloed zich bewegen.',
      core:['Iedere geopende deur of raam kan het stromingsbeeld veranderen.','Een aanvals- of vluchtroute kan onderdeel worden van de flowpath.','De handeling van de brandweer kan zelf het stromingsbeeld veranderen.'],
      sections:[{title:'Operationeel', text:'Breng brandlocatie, vermoedelijke inlaat en uitlaat in beeld. Bepaal vóór het openen van een deur welk effect dat kan hebben en controleer het werkelijke effect direct daarna.'}],
      related:['Wind Driven Fire','Deurcontrole & antiventilatie','Rookverspreiding','Repressieve ventilatie bij hoogbouw'],
      sources:['Bron: Hoogbouwpresentatie 2020','VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024'],
      media:'Flowpath', video:'https://youtu.be/IbMCRldLu5M?si=liYGTdUR6RRFgZ2J'
    },
    {
      id:'rookverspreiding', title:'Rookverspreiding', category:'Brandfenomenen',
      definition:'Verspreiding van rook en verbrandingsproducten via onder andere deuren, trappenhuizen, liftschachten, technische schachten, leidingschachten, doorvoeringen en lekkages.',
      core:['Rook of CO op een andere verdieping betekent niet automatisch dat daar ook brand is.','Geen zichtbare rook betekent niet automatisch dat een ruimte of route niet is beïnvloed.','Rook in een vlucht- of trappenhuis kan een zelfstandige inzettaak vormen.','Ventileren is geen automatische oplossing.'],
      sections:[{title:'Operationeel', text:'Controleer trappenhuizen, schachten, boven- en onderliggende verdiepingen en waar relevant CO. Bescherm vluchtwegen actief en herhaal controles omdat deurbewegingen, overdruk en bewonersstromen de situatie kunnen veranderen.'}],
      related:['Stack-effect','Reverse stack-effect','Flowpath','Compartimentering & WBDBO','Repressieve ventilatie bij hoogbouw'],
      sources:['Bron: Hoogbouwpresentatie 2020','ARO 22103 Hoogbouw, versie 4.0','VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024']
    },
    {
      id:'hoogbouw', title:'Hoogbouw', category:'Gebouw & voorzieningen',
      definition:'Een gebouwsituatie waarin hoogte gevolgen heeft voor bereikbaarheid, aanvalsdiepte, verticale verplaatsing, logistiek, rookverspreiding, evacuatie en afhankelijkheid van gebouwvoorzieningen.',
      core:['Hoogbouw is niet alleen een brand die zich hoog boven straatniveau bevindt.','Met de hoogte neemt de afhankelijkheid van interne routes en gebouwvoorzieningen toe.','Een voorziening die volgens het gebouwconcept aanwezig hoort te zijn, is pas operationeel beschikbaar nadat de daadwerkelijke werking is vastgesteld.'],
      sections:[
        {title:'Hoogtecategorieën uit het VRR-handboek', text:'Tot 20 m gelden andere voorzieningen dan bij 20–70 m. Vanaf 20–70 m spelen onder andere brandweerlift en droge blusleiding een grotere rol. Boven 70 m beschrijft het VRR-handboek aanvullende voorzieningen zoals meerdere brandweerliften, overdruk, eigen bluswatervoorziening, sprinkler en commandoruimte. Boven 200 m komen aanvullende ontwerpvisies en ontruimingsliften in beeld.'},
        {title:'Drie kritieke voorwaarden volgens VRR >70 m', text:'Bluswater, brandweerliften en communicatie. Controleer deze vroeg en blijf ze monitoren.'}
      ],
      related:['Complexiteit van brandbestrijding in hoogbouw','Operationele voorbereiding & objectinformatie','Brandweerlift','Bluswater op hoogte / droge blusleiding','Communicatie bij hoogbouw'],
      sources:['VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024']
    },
    {
      id:'compartimentering-wbdbo', title:'Compartimentering & WBDBO', category:'Gebouw & voorzieningen', aliases:['Compartimentering','WBDBO'],
      definition:'Compartimentering verdeelt een gebouw in delen die brand- en rookverspreiding moeten beperken. WBDBO staat voor Weerstand tegen BrandDoorslag en BrandOverslag en geeft een ontwerpwaarde voor weerstand tussen ruimten of gebouwdelen.',
      core:['Een brandscheiding op een tekening is een verwachting; het incident bepaalt of de scheiding operationeel nog functioneert.','Een WBDBO van bijvoorbeeld 60 minuten betekent niet dat de brandweer vanaf aankomst nog 60 minuten heeft.','Open deuren, beschadigingen, doorvoeringen en eigen brandweerhandelingen kunnen de werking beïnvloeden.'],
      sections:[{title:'Operationeel', text:'Controleer deuren, wanden, vloeren, doorvoeringen, rook buiten het verwachte compartiment en de bruikbaarheid van trappenhuizen. Gebruik tekeningen om hypotheses te vormen en toets die aan waarnemingen.'}],
      related:['Rookverspreiding','Deurcontrole & antiventilatie','Inzettrappenhuis & evacuatietrappenhuis','Bruggenhoofd'],
      sources:['Bron: Hoogbouwpresentatie 2020','ARO 22103 Hoogbouw, versie 4.0','VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024'],
      media:'Compartimentering'
    },
    {
      id:'brandweerlift', title:'Brandweerlift', category:'Gebouw & voorzieningen',
      definition:'Een lift die is voorzien voor gebruik door de brandweer en die de verticale verplaatsing van personeel en materiaal tijdens een incident kan ondersteunen.',
      core:['Gebruik de aangewezen brandweerlift en ga niet automatisch naar de brandverdieping.','Controleer rook in de schacht, waterbelasting, storingen en de actuele werking gedurende de inzet.','“Hij doet het nog” betekent niet automatisch “we kunnen erop blijven vertrouwen”.','Een brandweerlift is niet automatisch een ontruimingslift.'],
      sections:[
        {title:'Operationeel', text:'Neem ademlucht mee, organiseer bediening en communicatie en plan een alternatief bij uitval. Houd rekening met rook- of branduitbreiding via schacht of liftmachinekamer en met water in de liftschacht.'},
        {title:'ARO-aandachtspunten', text:'De ARO-kaart noemt onder andere een aangewezen lift, een bediener met portofoon, controle van de schacht en het stoppen met gebruik wanneer de lift of schacht niet meer betrouwbaar bruikbaar is.'}
      ],
      related:['Ontruimingslift','Logistiek & aflossing bij hoogbouw','Rookverspreiding','Stack-effect','Communicatie bij hoogbouw'],
      sources:['ARO 22103 Hoogbouw, versie 4.0','ARO 12001 Sprinklerinstallatie, versie 2026_1','VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024']
    },
    {
      id:'bluswater-hoogte', title:'Bluswater op hoogte / droge blusleiding', category:'Gebouw & voorzieningen', aliases:['Droge stijgleiding','Bluswater op hoogte'],
      definition:'De droge blusleiding is een vaste leiding in het gebouw die door de brandweer wordt gevoed om bluswater op hoogte beschikbaar te krijgen. De tactisch relevante vraag is of op de gekozen plaats daadwerkelijk voldoende bluscapaciteit beschikbaar is.',
      core:['Aanwezigheid van een droge blusleiding betekent niet automatisch dat voldoende druk en debiet beschikbaar zijn.','Controleer vulpunt, afnamepunt, afsluiters, druk en het werkelijke effect aan de straalpijp.','Onderzoek een storing én organiseer tijdig een alternatief wanneer wachten de inzet afhankelijk maakt.','De beschikbare bluswatercapaciteit bepaalt mede welke tactiek uitvoerbaar is.'],
      sections:[{title:'Operationeel', text:'Kies het afnamepunt op basis van route, rook, compartimentering en inzetdoel. Bij onvoldoende opbrengst controleer je systematisch pomp, toevoer, afsluiters, ongewenst openstaande afnamepunten, lekkage en verbindingen.'}],
      related:['Koelend vermogen & veiligheidsstraal','LD-systemen bij hoogbouw','Bruggenhoofd','Offensief binnen & defensief binnen'],
      sources:['ARO 22103 Hoogbouw, versie 4.0','VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024'],
      media:'Droge stijgleiding'
    },
    {
      id:'overdruk', title:'Overdrukinstallatie / overdruktrappenhuis', category:'Gebouw & voorzieningen', aliases:['Overdrukinstallatie'],
      definition:'Een gebouwinstallatie die met drukverschil rookinstroom naar een beschermd gebied, bijvoorbeeld een trappenhuis of voorportaal, probeert te beperken.',
      core:['Stel vast waar de overdruk daadwerkelijk wordt opgebouwd.','Een werkende installatie garandeert geen rookvrij trappenhuis.','Deuren, bewonersstromen en brandweerhandelingen kunnen de drukverhoudingen beïnvloeden.','Verwar gebouw-overdruk niet met repressieve ventilatie door de brandweer.'],
      sections:[{title:'Operationeel', text:'Controleer rook, CO, deurstanden, bewonersbeweging en bruikbaarheid van de route. Een uitbollende rookstopper kan iets over drukverschil zeggen, maar de richting moet worden geïnterpreteerd in samenhang met het gebouwconcept en andere waarnemingen.'}],
      related:['Rookverspreiding','Inzettrappenhuis & evacuatietrappenhuis','Rookstopper','Repressieve ventilatie bij hoogbouw'],
      sources:['VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024'],
      media:'Overdrukinstallatie'
    },
    {
      id:'commandoruimte', title:'Commandoruimte / BMC / gebouwinformatie', category:'Gebouw & voorzieningen', aliases:['Commandoruimte','BMC','BMI'],
      definition:'De commandoruimte is een centrale plaats waar informatie en bediening van gebouwvoorzieningen kunnen samenkomen. De BMC toont meldingen en zones van de brandmeldinstallatie; dit is slechts één informatiebron binnen het totale incidentbeeld.',
      core:['De commandoruimte geeft systeeminformatie; inzetploegen geven de werkelijkheid uit het gebouw terug.','Een actieve melding, sprinkler, lift of overdrukinstallatie bewijst niet dat het gewenste effect daadwerkelijk wordt bereikt.','Tijd is onderdeel van gebouwinformatie: eerste melding, sprinkleractivatie, ontruiming en storingen vormen samen een tijdlijn.'],
      sections:[{title:'Operationeel', text:'Gebruik informatie over BMI/BMC, sprinkler, liften, overdruk, bluswater, noodstroom, communicatie, tekeningen en storingen. Combineer dit met BHV/gebouwdeskundige en eigen waarnemingen.'}],
      related:['Operationele voorbereiding & objectinformatie','Brandweerlift','Sprinklerinstallatie','Communicatie bij hoogbouw'],
      sources:['VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024','ARO 12001 Sprinklerinstallatie, versie 2026_1']
    },
    {
      id:'trappenhuizen', title:'Inzettrappenhuis & evacuatietrappenhuis', category:'Gebouw & voorzieningen', aliases:['Wokkeltrappenhuis','Inzettrappenhuis','Evacuatietrappenhuis'],
      definition:'Trappenhuizen kunnen tijdens een incident verschillende operationele functies krijgen: één route voor brandweerinzet en waar mogelijk een andere route voor ontvluchting en ontruiming.',
      core:['De keuze van het trappenhuis is ook een keuze over rookbeheersing en ontruiming.','Een inzettrappenhuis blijft nodig voor aanvoer, terugtrekking, aflossing en logistiek en is dus niet “opofferbaar”.','Slangen door brand- of rookwerende deuren kunnen sluiting verhinderen en de compartimentering verzwakken.'],
      sections:[
        {title:'Wokkeltrappenhuis', text:'Bij twee in elkaar gevlochten maar gescheiden trappen moet duidelijk worden vastgesteld welke route waar uitkomt, welke functie iedere trap krijgt en waar bluswaterafnamepunten zich bevinden.'},
        {title:'Wanneer slechts één route bruikbaar is', text:'Organiseer bewonersstromen, brandweerbewegingen, slangen, deuren, rookbeheersing en prioriteiten bewust in dezelfde route.'}
      ],
      related:['Ontruiming bij hoogbouw','Rookverspreiding','Overdrukinstallatie / overdruktrappenhuis','Bruggenhoofd','Bluswater op hoogte / droge blusleiding'],
      sources:['ARO 22103 Hoogbouw, versie 4.0','VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024'],
      media:'Wokkeltrappenhuis'
    },
    {
      id:'bruggenhoofd', title:'Bruggenhoofd', category:'Organisatie & commandovoering',
      definition:'Een vooruitgeschoven, beschermde operationele basis voor commandovoering, personeel, logistiek, communicatie en voorbereiding van de inzet op hoogte.',
      core:['Kies een rookvrije, beschermde en operationeel bruikbare locatie en blijf de omstandigheden controleren.','Een bruggenhoofd verbindt commandovoering, personeelsregistratie, ademlucht, aflossing, materialen en communicatie.','De beste locatie is niet alleen een rekensom in verdiepingen; bescherming en bruikbaarheid zijn bepalend.'],
      sections:[
        {title:'Bronverschil', text:'De ARO-kaart hanteert bij hoogbouw minimaal één verdieping onder de brand, met een beschermde uitzondering op de brandverdieping. Het VRR-handboek werkt in uitgewerkte scenario’s veelal met -2. Dit zijn bron-specifieke uitwerkingen.'},
        {title:'Materiaal volgens ARO', text:'Voorbeelden zijn ademlucht, slangen, verlichting, reserveaccu’s en gereedschap. De daadwerkelijke voorraad hangt af van incidentduur, logistieke afstand en tactiek.'}
      ],
      related:['Logistiek & aflossing bij hoogbouw','Communicatie bij hoogbouw','Inzettrappenhuis & evacuatietrappenhuis','Bluswater op hoogte / droge blusleiding'],
      sources:['ARO 12003 Bruggenhoofd, versie 4.0','VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024'],
      media:'Bruggenhoofd', pdf:'assets/custom/bruggenhoofd_aandachtskaart.pdf'
    },
    {
      id:'ontruiming', title:'Ontruiming bij hoogbouw', category:'Mens & ontruiming',
      definition:'Het georganiseerd verplaatsen van bewoners of gebruikers uit bedreigde delen van een hoog gebouw, waarbij brandontwikkeling, rook, vluchtwegen, zelfredzaamheid, capaciteit en tijd samen de aanpak bepalen.',
      core:['Breng bij aankomst niet alleen de brand, maar ook de beweging van bewoners in beeld.','Ontruim scenario- en risicogestuurd, niet automatisch het hele gebouw.','Bescherm vluchtwegen gedurende het hele proces.','Ontruiming is een proces in de tijd, geen eenmalige opdracht.'],
      sections:[
        {title:'Vormen', text:'Spontane ontruiming kan al vóór aankomst zijn begonnen. Afhankelijk van het incident kunnen gerichte, gefaseerde of totale ontruiming aan de orde zijn.'},
        {title:'Niet-zelfredzaamheid en registratie', text:'Organiseer voor niet-zelfredzame personen aparte capaciteit. Gebruik aanwezigheidsregistratie van BHV of gebouworganisatie als informatiebron: wie is vermoedelijk aanwezig, wie is buiten, wie wordt vermist en welke delen zijn gecontroleerd. Beschouw registratie niet als absolute zekerheid.'}
      ],
      related:['Ontruimingslift','Inzettrappenhuis & evacuatietrappenhuis','Rookverspreiding','Scenario-gestuurd optreden'],
      sources:['ARO 22103 Hoogbouw, versie 4.0','VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024']
    },
    {
      id:'sprinkler', title:'Sprinklerinstallatie', category:'Gebouw & voorzieningen',
      definition:'Een automatische blusinstallatie waarbij door hitte lokaal sprinklerkoppen openen om een beginnende brand te beheersen of te blussen.',
      core:['Sprinkler actief betekent niet automatisch brand uit.','Laat een werkende sprinkler niet voortijdig uitschakelen.','Controleer niet alleen de brand, maar ook pomp, watervoorraad en afsluiters.','Houd rekening met tijd, uitval en gevolgen voor andere gebouwvoorzieningen.'],
      sections:[
        {title:'Operationeel', text:'Gebruik sprinkler- en brandmeldinformatie om de locatie te ondersteunen, maar verifieer de situatie. Let op afgeschermde brandhaarden en zorg voor voldoende eigen koelend vermogen.'},
        {title:'Continuïteit', text:'Bewaking van pomp, watervoorraad, afsluiters en brandstof kan noodzakelijk zijn. Water in een brandweerliftschacht kan de liftfunctie beïnvloeden. Na uitschakelen of beschadiging is de gebouwveiligheid verminderd totdat het systeem is hersteld.'}
      ],
      related:['Commandoruimte / BMC / gebouwinformatie','Brandweerlift','Koelend vermogen & veiligheidsstraal','Operationele voorbereiding & objectinformatie'],
      sources:['ARO 12001 Sprinklerinstallatie, versie 2026_1']
    },
    {
      id:'vricol', title:'VRICOL (Verkenning, Redding, Interventie, Compartimentering, Ontruiming en Logistiek)', category:'Organisatie & commandovoering', aliases:['VRICOL'],
      definition:'Een inzetprocedure uit het VRR-handboek voor brandbestrijding in hoogbouw hoger dan 70 meter. In deze kennisbank wordt het uitsluitend gebruikt als bron en denkkader.',
      core:['Verkenning bepaalt het scenario; het scenario bepaalt de prioriteiten.','De letters vormen geen vaste uitvoeringsvolgorde.','Nieuwe informatie kan scenario, prioriteiten, opdrachten en capaciteitsverdeling veranderen.','VRICOL (Verkenning, Redding, Interventie, Compartimentering, Ontruiming en Logistiek) kijkt verder dan alleen de brand.'],
      sections:[
        {title:'Zes taakgebieden', text:'Verkenning: het actuele beeld bepalen. Redding: direct bedreigde personen. Interventie: brandbestrijding. Compartimentering: brand- en rookgrenzen en vluchtwegen beschermen. Ontruiming: bewoners uit bedreigde delen verplaatsen. Logistiek: de inzet op hoogte duurzaam ondersteunen.'},
        {title:'Regionale status', text:'De beschreven taakverdeling en prioritering uit het VRR-handboek zijn niet automatisch een VGGM-inzetprocedure.'}
      ],
      related:['Scenario-gestuurd optreden','Bruggenhoofd','Ontruiming bij hoogbouw','Logistiek & aflossing bij hoogbouw'],
      sources:['VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024']
    },
    {
      id:'scenario', title:'Scenario-gestuurd optreden', category:'Organisatie & commandovoering',
      definition:'Werken vanuit een voorlopig incidentbeeld dat op basis van nieuwe informatie steeds opnieuw wordt getoetst en zo nodig aangepast.',
      core:['Een scenario is geen vast label en geen recept.','Het incident kan verslechteren, stabiliseren of verbeteren.','Nieuwe rook, branduitbreiding, systeemuitval of verandering in bewonersbeweging kan aanleiding zijn om opnieuw te classificeren.'],
      sections:[
        {title:'Cyclus', text:'BEELD → SCENARIO → PRIORITEITEN → INZET → EFFECT → HERBEOORDELEN.'},
        {title:'Vier scenario’s uit VRR', text:'1. Brand beheersbaar binnen compartiment. 2. Brand niet beheerst maar nog binnen compartiment. 3. Brand/rook buiten compartiment en vluchtwegen bedreigd. 4. Uitbreidende gevelbrand/meerdere verdiepingen bedreigd. Dit is een VRR-denkkader en geen vaste VGGM-procedure.'}
      ],
      related:['VRICOL (Verkenning, Redding, Interventie, Compartimentering, Ontruiming en Logistiek)','FABCM','Kenmerkenschema','Gevelbrand en verticale branduitbreiding'],
      sources:['VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024']
    },
    {
      id:'logistiek', title:'Logistiek & aflossing bij hoogbouw', category:'Organisatie & commandovoering',
      definition:'Het organiseren van personeel, ademlucht, blusmiddelen, gereedschap, slachtoffers, materiaalstromen en aflossing over een lange verticale inzetroute.',
      core:['Hoogte kost tijd en energie vóórdat de daadwerkelijke brandbestrijding begint.','Logistiek bepaalt mede welke tactiek uitvoerbaar blijft.','Organiseer aflossing voordat ploegen zijn uitgeput; ademluchtvoorraad alleen vertelt niet hoeveel fysieke reserve een ploeg nog heeft.','Denk vóór de verticale verplaatsing na over wat boven nodig kan zijn.'],
      sections:[
        {title:'Logistieke keten', text:'BUITEN → BEGANE GROND → LIFT/TRAPPENHUIS → BRUGGENHOOFD → INZETGEBIED.'},
        {title:'Continuïteit', text:'Plan reserve-ademlucht, materialen, relief en informatieoverdracht. Een ontbrekend hulpmiddel betekent bij hoogbouw vaak opnieuw de volledige logistieke route afleggen. Houd rekening met uitval van lift of primaire watervoorziening.'}
      ],
      related:['Bruggenhoofd','Brandweerlift','Communicatie bij hoogbouw','LD-systemen bij hoogbouw'],
      sources:['Bron: Hoogbouwpresentatie 2020','ARO 22103 Hoogbouw, versie 4.0','VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024']
    },
    {
      id:'communicatie', title:'Communicatie bij hoogbouw', category:'Organisatie & commandovoering',
      definition:'De informatie-uitwisseling tussen inzetploegen, bruggenhoofd, commandoruimte en leiding die nodig is om een inzet op grote verticale afstand bestuurbaar te houden.',
      core:['Test communicatie waar daadwerkelijk wordt ingezet; ontvangst bij de entree bewijst niets over de brandverdieping.','Bevestig kritieke boodschappen.','Een communicatiestoring is een incidentrisico en kan tactische gevolgen hebben.','Aflossing omvat ook informatieoverdracht.'],
      sections:[{title:'Operationeel', text:'Meld veranderingen in brand, rook, slachtoffers, water, liften, systemen, routes, materiaal en personeelsbehoefte. Gebruik waar nodig een tussenpost, bruggenhoofd of gebouwintercom als extra schakel.'}],
      related:['CAN','Bruggenhoofd','Brandweerlift','FABCM'],
      sources:['VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024']
    },
    {
      id:'voorbereiding', title:'Operationele voorbereiding & objectinformatie', category:'Gebouw & voorzieningen', aliases:['ROI','GEO'],
      definition:'Vooraf en tijdens het incident verzamelde gebouwinformatie waarmee gericht hypotheses kunnen worden gevormd over toegang, routes, voorzieningen, risico’s en inzetmogelijkheden.',
      core:['Objectinformatie vertelt hoe het gebouw bedoeld is te functioneren; de inzet stelt vast hoe het tijdens het incident daadwerkelijk functioneert.','Tekeningen, ROI/GEO, bereikbaarheidskaarten en BHV-informatie ondersteunen de verkenning maar vervangen haar niet.','Bereid ook de vraag voor: wat doen we als een kritieke voorziening uitvalt?'],
      sections:[
        {title:'Te kennen onderwerpen', text:'Hoogte, gebruik, compartimentering, gevel, brandweeringangen, opstelmogelijkheden, trappenhuizen, liften, schachten, bluswater, sprinkler, overdruk, noodstroom, communicatie, commandoruimte en bijzondere gebouwkenmerken.'},
        {title:'Oriëntatie en toegang', text:'Gebruik waar passend een eenduidige A-B-C-D-oriëntatie vanaf de adreszijde met de klok mee. Denk vroeg aan toegangsgereedschap: bij een lange verticale route kost vergeten materiaal veel tijd.'}
      ],
      related:['Hoogbouw','Commandoruimte / BMC / gebouwinformatie','Complexiteit van brandbestrijding in hoogbouw','Logistiek & aflossing bij hoogbouw'],
      sources:['Bron: Hoogbouwpresentatie 2020','ARO 22103 Hoogbouw, versie 4.0']
    },
    {
      id:'off-def', title:'Offensief binnen & defensief binnen', category:'Tactiek', aliases:['Offensief binnen','Defensief binnen','Kwadrantenmodel'],
      definition:'Offensief binnen richt zich op directe inzet in het bedreigde gebied voor brandbestrijding of redding. Defensief binnen richt zich vanuit een meer beschermde interne positie op begrenzen, beschermen en voorwaarden creëren.',
      core:['Defensief binnen is een actieve tactiek en niet “niets doen”.','Een tactiek kan tijdens de inzet in beide richtingen veranderen.','De beslissing offensief binnen begint vóór het openen van de deur naar het brandgebied.','Tactiek moet passen bij inzetdoel, slagkracht, route, terugtrekmogelijkheid en actuele omstandigheden.'],
      sections:[{title:'Kwadrantenmodel', text:'Het kwadrantenmodel onderscheidt offensief binnen, offensief buiten, defensief binnen en defensief buiten. Gebruik het als tactisch denkkader en herbeoordeel zodra het incidentbeeld verandert.'}],
      related:['Scenario-gestuurd optreden','Deurcontrole & antiventilatie','Koelend vermogen & veiligheidsstraal','Transitional attack / externe interventie'],
      sources:['Basisprincipes van brandbestrijding, Brandweeracademie/IFV, 2020','VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024'],
      media:'Offensief binnen'
    },
    {
      id:'deur-antivent', title:'Deurcontrole & antiventilatie', category:'Tactiek', aliases:['Deurcontrole','Anti-ventilatie','Antiventilatie'],
      definition:'Antiventilatie is het beperken van ongewenste luchttoevoer naar de brand. Deurcontrole is een praktische manier om openingen bewust te beheren tijdens verkenning en inzet.',
      core:['Antiventilatie is het principe; deurcontrole is een mogelijke uitvoering.','Een deur openen is een tactische handeling en geen neutrale observatie.','Een slang door een brand- of rookwerende deur kan de werking van de scheiding verminderen.','Directe reddingsnood kan maken dat snelheid zwaarder weegt; blijf het effect beoordelen.'],
      sections:[{title:'Stromingsketen', text:'OPENING → LUCHTTOEVOER → FLOWPATH → BRAND/ROOK → EFFECT OP PLOEG EN VLUCHTWEG.'}],
      related:['Flowpath','Wind Driven Fire','Compartimentering & WBDBO','Rookstopper','Repressieve ventilatie bij hoogbouw'],
      sources:['Basisprincipes van brandbestrijding, Brandweeracademie/IFV, 2020','ARO 22103 Hoogbouw, versie 4.0','VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024'],
      media:'Deurcontrole'
    },
    {
      id:'rookstopper', title:'Rookstopper', category:'Tactiek', aliases:['Smokestopper'],
      definition:'Een tijdelijk hulpmiddel in een deuropening om rookuitwisseling te beperken terwijl passage mogelijk blijft.',
      core:['Een rookstopper is niet rookdicht en herstelt geen WBDBO.','Het hulpmiddel ondersteunt deur- en rookmanagement maar vervangt geen intacte compartimentering.','Beoordeel altijd of de ruimte of vluchtweg daadwerkelijk bruikbaar blijft.'],
      sections:[{title:'Operationeel', text:'Plaatsing kan volgens bron en gebouwconcept verschillen, bijvoorbeeld bij de toegang tot het brandcompartiment of de overgang naar een beschermd trappenhuis. Interpretatie van uitbolling of stroming vraagt kennis van overdruk en overige openingen.'}],
      related:['Deurcontrole & antiventilatie','Overdrukinstallatie / overdruktrappenhuis','Rookverspreiding','Compartimentering & WBDBO'],
      sources:['VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024'],
      media:'Smokestopper'
    },
    {
      id:'ventilatie', title:'Repressieve ventilatie bij hoogbouw', category:'Tactiek',
      definition:'Het bewust beïnvloeden van rook en hete gassen tijdens of na de brandbestrijding met natuurlijke of mechanische ventilatie.',
      core:['Ventileren verandert het stromingsbeeld.','Ken inlaat én uitlaat voordat je een luchtstroom probeert te sturen.','Houd rekening met stack-effect, wind, overdrukinstallaties, deuren en compartimentering.','Controleer altijd het werkelijke effect en stop of pas aan bij ongewenste verspreiding.'],
      sections:[{title:'Besliskader', text:'INLAAT → FLOWPATH → UITLAAT, beïnvloed door WIND – STACK – OVERDRUK – BRAND. Bij een rokerig trappenhuis moet eerst worden vastgesteld waarom rook binnentreedt; ventilatie is niet automatisch de oplossing.'}],
      related:['Flowpath','Stack-effect','Overdrukinstallatie / overdruktrappenhuis','Deurcontrole & antiventilatie','Rookverspreiding'],
      sources:['VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024']
    },
    {
      id:'transitional', title:'Transitional attack / externe interventie', category:'Tactiek', aliases:['Transitional attack','Floor-below nozzle'],
      definition:'Eerst de brand van buiten of vanuit een meer beschermde positie beïnvloeden of koelen en daarna opnieuw beoordelen of een volgende tactische stap mogelijk is.',
      core:['Eerst effect op de brand → daarna opnieuw beoordelen → vervolgens eventueel binnentreden.','Externe koeling is geen einddoel op zichzelf.','Een externe interventie kan ook openingen, windinvloed, stoom en rookverplaatsing veranderen; controleer het effect.'],
      sections:[
        {title:'Floor-below nozzle', text:'Een mogelijke methode waarbij vanaf een lager gelegen verdieping via een gevelopening water op de brand wordt gebracht. Toepasbaarheid hangt af van gevel, toegang, wind, brandlocatie en beschikbaar materieel.'},
        {title:'Bron-specifieke uitwerking', text:'Het VRR-handboek noemt ook fognails en Cobra als voorbeelden. Dit zijn voorbeelden uit de bron en geen automatisch voorgeschreven VGGM-methoden.'}
      ],
      related:['Wind Driven Fire','Koelend vermogen & veiligheidsstraal','Offensief binnen & defensief binnen','Gevelbrand en verticale branduitbreiding'],
      sources:['Bron: Hoogbouwpresentatie 2020','VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024'],
      media:'Transitional attack', video:'https://youtu.be/Qmw2DT4betA?si=vTfjhR5Ga34ASpRZ'
    },
    {
      id:'koelend', title:'Koelend vermogen & veiligheidsstraal', category:'Tactiek',
      definition:'De beschikbare hoeveelheid en effectiviteit van bluswater moeten passen bij het verwachte brandvermogen, de afstand, de bereikbaarheid en de gekozen tactiek.',
      core:['Niet alleen de hoeveelheid water telt, maar ook of het water de brand daadwerkelijk bereikt en effect heeft.','Hoogte, leidinglengte, drukverlies, afsluiters en gebouwvoorzieningen kunnen de beschikbare straalcapaciteit beïnvloeden.','Een veiligheidsstraal heeft alleen waarde wanneer voldoende capaciteit, personeel en watervoorziening beschikbaar zijn.'],
      sections:[{title:'Effect beoordelen', text:'WATERBESCHIKBAARHEID → STRAALCAPACITEIT → BEREIK → EFFECT → TACTIEK. Kijk naar afname van vlamactiviteit, hitte en straling en naar verbetering van toegang of stabiliteit.'}],
      related:['Bluswater op hoogte / droge blusleiding','Basisprincipes van brandbestrijding','LD-systemen bij hoogbouw','Rookgaskoeling'],
      sources:['Basisprincipes van brandbestrijding, Brandweeracademie/IFV, 2020','ARO 22103 Hoogbouw, versie 4.0']
    },
    {
      id:'rookgaskoeling', title:'Rookgaskoeling', category:'Tactiek',
      definition:'Gerichte koeling van hete rook- en brandgassen om de thermische belasting te verlagen en omstandigheden beter beheersbaar te maken.',
      core:['Rookgaskoeling is niet hetzelfde als het blussen van de brandhaard.','Pas de techniek toe op basis van waargenomen brandgedrag en controleer het effect.','Bij sterke WDF of flowpath kan rookgaskoeling alleen onvoldoende zijn.','Rookgaskoeling vervangt geen deurcontrole, antiventilatie of voldoende aanvalsvermogen.'],
      sections:[{title:'BPBB-bron', text:'Het BPBB-document uit 2020 noemt voor effectieve rookgaskoeling als toepassingsgebied ruimten tot 70 m² en maximaal 4 m hoog. Neem deze waarden op als bron-specifieke grens uit dat document, niet als losstaande universele natuurkundige regel.'}],
      related:['RSTV','Koelend vermogen & veiligheidsstraal','Deurcontrole & antiventilatie','Wind Driven Fire'],
      sources:['Basisprincipes van brandbestrijding, Brandweeracademie/IFV, 2020'],
      media:'Rookgaskoeling'
    },
    {
      id:'rstv', title:'RSTV', category:'Waarnemen & besluiten',
      definition:'Rook, Stroming, Temperatuur en Vlammen vormen samen een systematische manier om brandgedrag waar te nemen en veranderingen te herkennen.',
      core:['RSTV is geen eenmalige scan: na een handeling kijk je opnieuw.','Combineer waarnemingen van buiten, brandverdieping, trappenhuis en andere verdiepingen.','Eén kenmerk is zelden voldoende om een fenomeen zoals WDF vast te stellen.'],
      sections:[{title:'Vier kenmerken', text:'Rook: kleur, dichtheid, hoeveelheid en verandering. Stroming: richting, snelheid, in- en uitstroom. Temperatuur: thermische belasting en veranderingen na koeling. Vlammen: locatie, intensiteit, verspreiding en effect van de inzet.'}],
      related:['Kenmerkenschema','CAN','Rookgaskoeling','Wind Driven Fire'],
      sources:['Basisprincipes van brandbestrijding, Brandweeracademie/IFV, 2020']
    },
    {
      id:'can', title:'CAN', category:'Waarnemen & besluiten',
      definition:'Een compact communicatiemodel waarmee een ploeg terugkoppelt wat de condities zijn, welke acties worden uitgevoerd en wat er nodig is.',
      core:['C — Condities: wat treffen we aan?','A — Acties: wat doen we?','N — Nodig: wat hebben we nodig?','Een urgente veiligheidsmelding gaat altijd vóór de structuur.'],
      sections:[{title:'Gebruik', text:'C — CONDITIES → A — ACTIES → N — NODIG. Gebruik CAN voor actuele terugmeldingen en veranderingen. De informatie kan aanleiding zijn om scenario en prioriteiten opnieuw te beoordelen.'}],
      related:['Communicatie bij hoogbouw','FABCM','RSTV','Bruggenhoofd'],
      sources:['Basisprincipes van brandbestrijding, Brandweeracademie/IFV, 2020']
    },
    {
      id:'fabcm', title:'FABCM', category:'Waarnemen & besluiten',
      definition:'Een besliscyclus waarmee feiten worden verzameld, geanalyseerd, omgezet in besluiten, gecommuniceerd en vervolgens gemonitord op effect.',
      core:['F — Feiten verzamelen','A — Analyseren','B — Beslissen','C — Communiceren','M — Monitoren'],
      sections:[{title:'Cyclus', text:'FEITEN VERZAMELEN → ANALYSEREN → BESLISSEN → COMMUNICEREN → MONITOREN → NIEUWE FEITEN. Maak onderscheid tussen feit en interpretatie en zoek actief naar informatie die het huidige beeld kan tegenspreken.'}],
      related:['CAN','Scenario-gestuurd optreden','Kenmerkenschema','Communicatie bij hoogbouw'],
      sources:['Basisprincipes van brandbestrijding, Brandweeracademie/IFV, 2020']
    },
    {
      id:'kenmerkenschema', title:'Kenmerkenschema', category:'Waarnemen & besluiten',
      definition:'Een denkkader waarin brand, gebouw, mens, omgeving en interventie in samenhang worden beoordeeld om tot een actueel incidentbeeld en tactische keuze te komen.',
      core:['Brand: locatie, intensiteit, fase, rook, ventilatie en uitbreiding.','Gebouw: hoogte, compartimentering, routes, liften, bluswater, sprinkler, overdruk, schachten en gevel.','Mens: zelfredzaamheid, gedrag, aantallen en bewonersbeweging.','Omgeving: wind, toegang en opstelmogelijkheden.','Interventie: tactiek, mensen, water, materieel, logistiek en aflossing.'],
      sections:[{title:'Samenhang', text:'BRAND + GEBOUW + MENS + OMGEVING + INTERVENTIE → ACTUEEL BEELD → TACTISCHE KEUZE. De brandweerinzet zelf is één van de factoren die het incident verandert.'}],
      related:['RSTV','FABCM','Scenario-gestuurd optreden','Operationele voorbereiding & objectinformatie'],
      sources:['Basisprincipes van brandbestrijding, Brandweeracademie/IFV, 2020'],
      media:'Kenmerkenschema'
    },
    {
      id:'bpbb', title:'Basisprincipes van brandbestrijding', category:'Basisprincipes', aliases:['Basisprincipes','BPBB'],
      definition:'Generiek toepasbare basisprincipes voor gebouwbrandbestrijding. Het BPBB-document is geen kant-en-klaar recept, maar biedt ingrediënten voor een veilige en effectieve inzet.',
      core:['1. Neem meer tijd — stop en denk na.','2. Doe een volledige buitenverkenning met als doel de brandruimte van buiten te vinden en de brand waar mogelijk van buiten te blussen. Pas antiventilatie toe.','3. Stel drie vragen: Waar zit de brand? Is de brand bereikbaar? Is er voldoende koelend vermogen?','5. Schat het potentiële brandvermogen in en neem voldoende koelend vermogen mee.'],
      sections:[
        {title:'Principe 4', text:'Als het gaat om een klein gebouw zoals een woning, of een gebouw met kleine ruimten, en er voldoende koelend vermogen is, dan is onder voorwaarden een offensieve binneninzet in het algemeen veilig mogelijk. Denk in termen van RSTV-branddriehoek, pas deurcontrole toe, gebruik waar mogelijk antiventilatie, beïnvloed een uitslaande brand zo mogelijk eerst van buiten en breng zo snel mogelijk water op de brand. Het BPBB-document noemt voor rookgaskoeling ruimten tot 70 m² en maximaal 4 m hoog en adviseert de kortste route en een korte inzetdiepte, met ruimte voor een langere inzetdiepte wanneer veilig voortbewegen mogelijk is.'},
        {title:'Drie kernvragen', text:'LOCATIE → BEREIKBAARHEID → KOELEND VERMOGEN.'}
      ],
      related:['RSTV','Deurcontrole & antiventilatie','Koelend vermogen & veiligheidsstraal','Rookgaskoeling','Offensief binnen & defensief binnen'],
      sources:['Basisprincipes van brandbestrijding, Brandweeracademie/IFV, 2020'],
      media:'Basisprincipes'
    },
    {
      id:'ld-systemen', title:'LD-systemen bij hoogbouw', category:'Bluswater & logistiek', aliases:['LD op hoogte','Snelle lijn','Snelle toevoer','O-bundel','Hoogtetas','Transporttas','Verdeelstuk buitenom'],
      definition:'Een LD-systeem is een logistieke oplossing om voldoende bluscapaciteit op de gewenste plaats beschikbaar te krijgen; het is geen tactiek op zichzelf.',
      core:['Bepaal eerst het benodigde koelend vermogen en kies daarna het systeem.','Beoordeel niet alleen opbouwtijd, maar ook capaciteit, personeelsbelasting en continuïteit.','Houd rekening met trappenhuizen, bewonersstromen, deuren en compartimentering.','Controleer uiteindelijk aan de straalpijp of daadwerkelijk voldoende bluscapaciteit beschikbaar is.'],
      sections:[
        {title:'Keuzevolgorde', text:'KOELEND VERMOGEN NODIG → GEBOUWVOORZIENING? → ROUTE BEPALEN → LD-SYSTEEM KIEZEN → OPBOUWEN → CAPACITEIT CONTROLEREN → CONTINUÏTEIT BEWAKEN.'},
        {title:'Systemen in de huidige webapp', text:'Snelle lijn, snelle toevoer, O-bundel, hoogtetas, transporttas, binnenom opbouwen en buitenom opbouwen kunnen als verschillende logistieke oplossingen worden bekeken. Exacte configuraties, slanglengtes en werkwijzen moeten aansluiten op de actuele VGGM-documentatie.'},
        {title:'Operationeel', text:'De kortste slangroute is niet automatisch de beste operationele route. Denk ook aan personeelsbelasting, doorgangen, deurwerking, ontruimingsstromen en een alternatief wanneer lift of primaire watervoorziening uitvalt.'}
      ],
      related:['Koelend vermogen & veiligheidsstraal','Bluswater op hoogte / droge blusleiding','Logistiek & aflossing bij hoogbouw'],
      sources:['BPBB Train-de-trainer 2026 – LD en watertransport op hoogte'],
      media:'LD op hoogte'
    },
    {
      id:'ontruimingslift', title:'Ontruimingslift', category:'Mens & ontruiming',
      definition:'Een lift die specifiek is ontworpen en ingericht om personen tijdens een incident te ondersteunen bij ontvluchting of ontruiming.',
      core:['Een brandweerlift is niet automatisch een ontruimingslift.','Controleer welk type lift aanwezig is en waarvoor deze volgens het gebouwconcept bedoeld is.','Gebruik de lift als onderdeel van een georganiseerde ontruimingsstrategie.','Organiseer voor niet-zelfredzame personen ook een alternatief wanneer de lift uitvalt.'],
      sections:[{title:'Operationeel', text:'Beoordeel bediening, bediende verdiepingen, rook, water, stroomvoorziening en actuele werking. Organiseer wie de lift gebruikt, welke verdiepingen prioriteit hebben, begeleiding, wachtruimte en opvang beneden.'}],
      related:['Ontruiming bij hoogbouw','Brandweerlift','Inzettrappenhuis & evacuatietrappenhuis','Commandoruimte / BMC / gebouwinformatie'],
      sources:['VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024']
    },
    {
      id:'complexiteit', title:'Complexiteit van brandbestrijding in hoogbouw', category:'Hoogbouw algemeen',
      definition:'Bij hoogbouw vergroten afstand, hoogte, gebouwcomplexiteit, bewonersaantallen en afhankelijkheid van voorzieningen elkaar. Daardoor zijn meer tijd, personeel en organisatie nodig om dezelfde brandweertaken uit te voeren.',
      core:['Aankomst bij het gebouw is nog niet hetzelfde als aankomst bij de brand.','Personeel kan al aanzienlijk belast zijn voordat de daadwerkelijke brandbestrijding begint.','Met toenemende hoogte worden buitenaanvalsmogelijkheden beperkter en neemt de afhankelijkheid van interne routes toe.','Logistiek bepaalt mede welke tactiek uitvoerbaar blijft.'],
      sections:[
        {title:'Stapeling van factoren', text:'HOOGTE + AFSTAND + MENSEN + ROOK + VOORZIENINGEN + LOGISTIEK → MEER TIJD EN ORGANISATIE NODIG → TACTISCHE GRENZEN.'},
        {title:'Gevarengebied buiten', text:'Bij brand, hitteschade of gevelbetrokkenheid kunnen vallend glas, geveldelen of bouwdelen een risico op maaiveld vormen. Pas waar nodig toegangen, opstelplaatsen en logistieke routes aan.'}
      ],
      related:['Hoogbouw','Logistiek & aflossing bij hoogbouw','Ontruiming bij hoogbouw','Rookverspreiding','Gevelbrand en verticale branduitbreiding'],
      sources:['Bron: Hoogbouwpresentatie 2020','ARO 22103 Hoogbouw, versie 4.0']
    },
    {
      id:'gevelbrand', title:'Gevelbrand en verticale branduitbreiding', category:'Brandfenomenen',
      definition:'Brand kan zich via of langs de gevel naar hoger gelegen delen van het gebouw uitbreiden. Gevelopeningen, gevelconstructie, materialen, geometrie en wind kunnen het verloop beïnvloeden.',
      core:['Kijk bij een uitslaande brand altijd naar wat zich boven de brand bevindt.','Een intacte interne brandscheiding sluit uitbreiding buitenom niet uit.','Beoordeel zowel het zichtbare brandbeeld als de mogelijke opbouw van de gevel.','Coandă-effect, Wind Driven Fire en gevelbrand kunnen elkaar beïnvloeden, maar zijn verschillende fenomenen.'],
      sections:[
        {title:'Verticale verkenning', text:'BRANDRUIMTE → GEVELOPENING → GEVEL → BOVENLIGGENDE VERDIEPING → VERDERE UITBREIDING. Beoordeel ook luchtinlaten, balkons, terugliggende gevels en mogelijke brandbare gevelonderdelen.'},
        {title:'Ook naar beneden kijken', text:'Bij gevelbetrokkenheid kunnen glas of geveldelen vallen. Beoordeel daarom naast de verticale branduitbreiding ook het gevarengebied op straatniveau.'},
        {title:'Casuïstiek uit de oorspronkelijke bronpresentatie', text:'Notenhout Nijmegen en Grenfell Tower worden gebruikt om te laten zien waarom gevel, hoger gelegen verdiepingen en de buitenzijde deel van de beeldvorming moeten blijven.'}
      ],
      related:['Coandă-effect','Wind Driven Fire','Compartimentering & WBDBO','Scenario-gestuurd optreden','Ontruiming bij hoogbouw'],
      sources:['Bron: Hoogbouwpresentatie 2020','VRR Handboek Brandbestrijding Hoogbouw hoger dan 70 meter, versie 1.0, 2024']
    }
  ]
};
