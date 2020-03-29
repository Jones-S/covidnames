export default [
  {
    title: 'Vorbereitung',
    text: `Teilt die Spieler in zwei Teams möglichst gleicher Grösse und ähnlichem Können auf. 
    Für das Standardspiel braucht ihr mindestens vier Spieler (in zwei Teams).
    Jedes Team wählt einen Spieler zum Geheimdienstchef.
    Die anderen Spieler eines Teams sind die Ermittler.`
  },
  {
    title: 'Der Code',
    text: `In jeder Partie gibt es einen Code, der die Geheimidentitäten der Wortkarten festlegt.
    Die Geheimdienstchefs können die Lösung des zufällig ausgewählten Codes einsehen.
    Die Ermittler dürfen die Auflösung auf keinen Fall einsehen!<br>
    Blaue Felder zeigen die Wörter, die das blaue Ermittlerteam erraten muss (blaue Agenten).
    Rote Felder sind die Wörter, die das rote Ermittlerteam erraten muss (rote Agenten).
    Blasse Felder sind unbeteiligte Zuschauer und das schwarze Feld ist ein Attentäter, mit dem man niemals Kontakt aufnehmen darf!`
  },
  {
    title: 'Startteam',
    text: `Das Startteam muss 9 Wörter finden. Das andere Team 8. Das Startteam gibt den ersten Hinweis der Partie.`
  },
  {
    title: 'Kurzübersicht',
    text: `Jeder Geheimdienstchef kennt die Geheimidentitäten aller Agenten.
    Die Ermittlerteams wissen nicht, welche Wortkarten zu welchen Agenten gehören.
    Die Geheimdienstchefs geben ihren Teams abwechselnd Hinweise, die aus einem einzigen Wort bestehen.
    Ein Hinweis kann sich auf mehrere Wortkarten auf dem Tisch beziehen.
    Die Ermittler versuchen zu erraten, welche (Code-)Wörter ihr Geheimdienstchef gemeint hat. Sobald ein Ermittler eine Wortkarte berührt, enthüllt sich deren Geheimidentität.
    Ist es einer der Agenten des Teams, dürfen die Ermittler weiterraten.
    Andernfalls ist das andere Team am Zug.
    Das Team, das als erstes alle seine Agenten findet, gewinnt.`
  },
  {
    title: 'Spielablauf',
    text: `Hinweise geben:
    Wenn du der Geheimdienstchef bst, musst du dir einen Hinweis aus genau einem Wort ausdenken, der sich auf einige der Wortkarten bezieht, die dein Team finden soll.
    Sobald du glaubst, ein gutes Hinweiswort gefunden zu haben, sagst du es.
    Ausserdem sagst du eine Zahl, die deinen Teamkollegen angeben soll, auf wie viele Wortkarten sich der Hinweis bezieht.
    Beispiel: Zwei deiner Wortkarten sind NUSS und KRONE. Beides findet man an Bäumen, also sagst du «Baum: 2»—
    Du darfst zwar auch bloss einen Hinweis für eine einzige Wortkarte geben («Cashew: 1»), aber spannender ist es, mehr zu probieren. 
    Vier Wortkarten mit einem einzigen Hinweis zu beschreiben ist schon extrem gut.`
  },
  {
    title: 'Ein Wort!',
    level: 3,
    text: `Der Hinweis darf nur aus einem einzigen Wort bestehen.
    Du darfst keine zusätzlichen Tipps geben.
    Zum Beispiel darfst du nicht sagen: «Das ist jetzt sehr um die Ecke gedacht.»
    Hey, du spielst Covidnames! Alles ist hier sehr um die Ecke gedacht!
    Dein Hinweis darf mit keinem der Wörter auf sichtbaren ausliegenden Karten übereinstimmen.
    In den späteren Zügen werden einige der Karten abgedeckt sein, also kann ein Hinweis, der jetzt verboten ist. später erlaubt sein.`
  },
  {
    title: 'Kontakt aufnehmen:',
    text: `Nachdem der Geheimdienstchef einen Hinweis gegeben hat, versuchen die Ermittler in seinem Team herauszufinden, was er damit meint.
    Sie können untereinander offen beraten, allerdings muss der Geheimdienstchef dabei ein Pokerface aufsetzen.
    Ihre endgültige Entscheidung treffen sie erst, indem einer von ihnen eine der Wortkarten berührt.
    <ul>
    <li>Wenn der Ermittler eine 'Wortkarte berührt, die zu seinem Team gehört', wird diese aufgedeckt und das Team kann weiterraten.</li>
    <li>Wenn der Ermittler eine 'Wortkarte berührt, die ein unbeteiligter Zuschauer ist', wird diese aufgedeckt und der Zug ist beendet.</li>
    <li>Wenn der Ermittler eine 'Wortkarte berührt, die zum anderen Team gehört', wird diese aufgedeckt und der Zug ist beendet. (und das andere Team ist dem Sieg näher gekommen)</li>
    <li>Wenn der Ermittler 'den Attentäter berührt', wird dessen Wortkarte mit der Attentäter-Karte abgedeckt. Damit ist die Partie beendet!</li>
    </ul>
    Das Team, das den Attentäter kontaktiert hat, verliert.
    Tipp: Gib als Geheimdienstchef deinen Hinweis erst dann, wenn du sicher bist, dass er nicht zum Attentäter führen kann!`
  },
  {
    title: 'Anzahl der Rateversuche: ',
    level: 3,
    text: `Die Ermittler müssen immer mindestens 1 Rateversuch machen.
    Ein falscher Versuch beendet den Zug sofort, wenn die Ermittler jedoch eine Wortkarte ihres Teams richtig erraten, dürfen sie weiterraten.
    Man darf jederzeit mit dem Raten aufhören, normalerweise möchte man aber so viele Wörter finden, wie der Geheimdienstchef mit seiner Zahl angegeben hat.
    Manchmal möchte man vielleicht sogar ein mehr erraten als angegeben:
    <br><br>
    Beispiel: 
    Der erste Hinweis für das Team Rot war «Baum: 2». Die rote Ermittlerin würde auf ORANGE und NUSS tippen. 
    Zuerst zeigt sie auf ORANGE.<br>
    Leider war das ein unbeteiligter Zuschauer, also darf sie nicht auch noch auf NUSS zeigen.
    Team Blau ist am Zug und errät zwei Wörter korrekt.
    jetzt ist Team Rot dran.<br>
    Der rote Geheimdienstchef sagt «Fluss: 3».<br>
    Die rote Ermittlerin ist sich sehr sicher, dass STROM ein anderes Wort für Fluss sein kann und zeigt darauf.
    Die Wortkarte wird mit einer roten Agentenkarte abgedeckt, also darf sie weitermachen.
    Ein Fluss hat ein BETT, also berührt sie diese Wortkarte.
    Auch das war korrekt, also macht sie weiter.
    Beim dritten Wort zu Fluss ist sie sich unsicher.
    Sie wählt NUSS.<br>
    Mit Fluss hat das nichts zu tun.
    Sie rät nämlich ein Wort des vorherigen Hinweises.
    NUSS ist tatsächlich ein rotes Wort.
    Die Ermittlerin hat für den Hinweis "Fluss: 3" dreimal richtig geraten.
    Sie darf noch genau ein Mal raten.
    Sie könnte versuchen, das dritte Fluss-Wort zu finden oder sie könnte nach dem anderen Baum-Wort suchen.
    Sie könnte aber auch aufhören und Team Blau ist wieder an der Reihe.
    <br><br>
    Bei diesem Beispiel hat die rote Ermittlerin bis zu 4 Rateversuche, weil ihr Geheimdienstchef die Zahl 3 genannt hat.
    Wenn die Ermittler ansagen, dass sie nicht weiter raten wollen (oder wenn se falsch geraten haben), ist das andere Team an der Reihe.`
  },
  {
    title: 'Weiterer Spielverlauf:',
    text: `Die Geheimdienstchefs sind abwechselnd am Zug und geben Hinweise.
    In jedem Zug wird mindestens ein Wort abgedeckt, wodurch das Raten einfacher wird.`
  },
  {
    title: 'Spielende',
    text: `Das Spiel endet, sobald ein Team alle seine Wortkarten abgedeckt hat. Dieses Team gewinnt.
    Es kann vorkommen, dass ihr im Zug des anderen Teams gewinnt, falls dieses auf eure letzte Wortkarte tippt.
    Das Spiel kann vorzeitig enden, wenn die Ermittler Kontakt zum Attentäter aufnehmen.
    Dieses Ermittlerteam verliert

    Strafe für unerlaubte Hinweise:
    Wenn ein Geheimdienstchef einen nicht erlaubten Hinweis gibt, endet der Zug seines Teams sofort.
    Ausserdem darf der gegnerische Geheimdienstchef eines seiner Wörter mit einer Agentenkarte aufdecken, bevor er den nächsten Hinweis gibt.
    Wenn allerdings niemanden auffällt, dass ein Hinweis unerlaubt ist, passiert nichts.`
  },
  {
    title: 'Pokerface behalten: ',
    text: `Von dir als Geheimdienstchef wird erwartet, dass du keinerlei versteckte Tipps gibst.
    Wählt dein Ermittler ein Wort der korrekten Farbe, musst du so tun, als ob es eines der Wörter war, auf das du mit deinem Hinweis hindeuten wolltest, selbst wenn das nicht stimmt!
    Wenn du ein Ermittler bist, solltest du deine Aufmerksamkeit auf die Wortkarten richten, während du rätst.
    Vermeide dabei den Augenkontakt zu deinem Geheimdienstchef.
    Damit kann man nicht-verbale Hinweise ausschliessen.
    Wenn die gegebene Information sich strikt auf das bezieht, was man mit einem Wort und einer Zahl ausdrücken kann, ist das ganz im Sinne des Spiels.`
  },
  {
    title: 'Erlaubte Hinweise:',
    text: `Wir haben unterschiedliche Spielregeln getestet. 
    Manche Spielrunden halten sich strikt an die Regeln.
    Andere sehen das lockerer. 
    Probiert einfach aus, was zu eurer Spielrunde passt.`
  },
  {
    title: 'Strenge Regeln:',
    text: `Einige Hinweise sind nicht erlaubt, weil sie nicht dem Sinn des Spiels entsprechen.`
  },
  {
    title: false,
    text: `"Dein Hinweis muss mir den Wortbedeutungen zu tun haben!"
    Du darfst also keine Hinweise über die Buchstaben in einem Wort geben oder seine Lage auf dem Spielfeld.
    Enkel ist kein erlaubter Hinweis für SCHENKEL.
    Man darf BAR, BAU und BUS weder durch einen Hinweis wie "B:3" noch durch "Drei:3" verbinden.
    Allerdings...

    "Buchstaben und Zahlen sind erlaubte Hinweise, wenn sie sich auf Bedeutungen beziehen!"
    Also könnte man "U:2" als Hinweis für BAHN und BOOT benutzen. 
    Man darf "Zwei:3" als Hinweis für BEIN, POL und RAD verwenden.

    "Die Zahl hinter dem Hinweis darf nicht selber ein Hinweis sein!"
    "Sauer:8" ist kein erlaubter Hinweis für ZITRONE und OKTOPUS.

    "Man muss auf Deutsch spielen!"
    Ein Fremdwort ist nur dann erlaubt, wenn die Spieler es auch in einem deutschen Satz anwenden würden.
    zum Beispiel darf man Beach nicht als Hinweis für MEER und MUSCHEL verwenden. Beachparty wäre aber erlaubt.

    "Man darf keine Form eines Wortes nennen, das sichtbar auf dem Spielfeld liegt!"
    So lange BRUCH nicht von einer Karte abgedeckt ist, darf man Bruch, brechen, Abbruch o.ä. nicht sagen.

    "Man darf keinen Teil eines zusammengesetzten Worts auf dem Spielfeld nenn!"
    Solange BERGSTEIGER nicht von einer Karte abgedeckt ist, darf man Berg, Steiger oder steigen etc. nicht sagen.`
  },
  {
    title: 'Gleichklänge & Buchstabieren:',
    text: `Im Deutschen gibt es ein paar gleich klingende Wörter.
    Zum Beispiel klingt Saite wie Seite, allerdings haben die beiden Wörter eine unterschiedliche Bedeutung.

    "Gleich klingende Wörter mit unterschiedlicher Bedeutung und unterschiedlicher Schreibweise gelten als unterschiedliche Wörter".
    Also dürfte man keine Hinweise zur Leere geben, aber die LEHRE meinen.

    "Wörter, die absolut gleich geschrieben werden, gelten als dasselbe Wort, selbst wenn sie unterschiedliche Aussprachen oder Bedeutung haben".
    Zum Beispiel kann Abzug eine Entlüftung sein der der Hebel zum Auslösen eine Waffe, also ist Abzug ein erlaubter Hinweis sowohl für PISTOLE als auch LUFT.
    August z.B. darf, auch wenn es unterschiedlich betont wird, als Hinweis für Vornamen bzw. Clown oder für den Monat benutzt werden.

    "Man darf seinen Hinweis buchstabieren".
    Will man seinen Mitspielern zum Beispiel MÜHLE und KIEFER erklären, darf man mahlen auch m-a-h-l-e-n buchstabieren.
    Man darf den Hinweis M-a-h-l geben, selbst wenn MAL eine der Wortkarten auf dem Spielfeld ist.
    (Man dürfte aber nicht C-i-t-r-o-n-e benutzen, wenn ZITRONE auf dem Spielfeld liegt.)
    Citrone und Zitrone sind unterschiedliche Schreibformen desselben Worts.

    "Wenn jemand darum bittet, sollte man seinen Hinweis buchstabieren".
    Wer nicht gut in Rechtschreibung ist, kann den gegnerischen Geheimdienstchef um Hilfe bitten.

    TIPP: Buchstabieren ist nicht nur für gleich klingende Wörter geeignet.
    Es nützt auch dann, wenn es laut im Raum ist oder die Aussprache der Spieler stark mundartlich geprägt ist.`
  },
  {
    title: 'Bitte nicht zu streng:',
    text: `England war ursprünglich mal ein zusammengesetztes Wort, aber in unseren Zeiten steht es für sich, also wäre Ausland ein erlaubter Hinweis für ENGLAND.
    Sogar Land ist als Hinweis für ENGLAND zulässig.
    Und jemand, der behauptet, man dürfe Ton nur deshalb nicht sagen, weil WASHINGTON auf dem Spielfeld liegt, will wohl bloss Ärger machen.
    Wenn der gegnerische Geheimdienstchef ihn zulässt, ist der Hinweis auch erlaubt.
    bist du also unsicher, frag ihn (geflüstert, oder per WhatsApp ;) damit dich sonst keiner hört).`
  },
  {
    title: 'Dehnbare Regeln:',
    text: `Manchmal müsst ihr Bauchentscheidungen treffen, was nun erlaubt ist und was nicht.
    je nach Neigung wollen bestimmte Spieler das Spiel etwas anders spielen.`
  },
  {
    title: 'Zusammengesetzte Wörter:',
    text: `Deutsch ist weltweit berüchtigt wegen seiner zusammengesetzten Wörter.
    Es gibt zwei Möglichkeiten, solche im Deutschen zu bilden.
    Tischdecke ist ein Wort.
    Mehrzweck-Fräsvorsatz ist im Prinzip auch ein Wort, denn der Bindestrich dient bloss der besseren Lesbarkeit.
    Rinfleischetikettierungsüberwachungsaufgabenübertragungsgesetz war tatsächlich mal ein echtes (und scheussliches) Wort, das mit ein paar Bindestrichen wohl etwas leichter lesbar gewesen wäre.
    (Die Unsitte, zusammengesetzte Wörter im Deutschen mit - falschen- Leerzeichen zu unterbrechen, wollen wir hier nicht weiter diskutieren.)
    Genau genommen können also alle solche Wörter gelten, aber nur, wenn sie dem tatsächlichen Sprachgebrauch entsprechen.
    Es ist im Deutschen leicht, Komposita einfach zu erfinden: Tentakeltrabant wäre theoretisch ein toller Hinweis z.B. für OKTOPUS, MOND und AUTO, da es aber eine reine Wortschöpfung ist, die man in keinem Wörterbuch findet, darf man es nicht benutzen.
`
  },
  {
    title: 'Vorsilben',
    text: `Das gehört eigentlich zur vorigen Regel, sollte aber explizit erwähnt werden: Einfach ein Wort in sein Gegenteil zu verkehren, indem man eine Silbe wie Kein-, Nicht- oder Un- davor setzt sollte nur erlaubt sein, wenn dieses Wort umgangssprachlich gebräuchlich ist.
    Unlebendig ist also kein erlaubter Hinweis für TOD, untot dagegen wäre als Hinweis für SKELETT erlaubt.`
  },
  {
    title: 'Eigennamen',
    text: `Eigennamen sind immer erlaubt, so lange sie den übrigen Regeln folgen.
    Karl ist ein erlaubter Hinweis. 
    Allerdings möchte man vielleicht verdeutlichen, ob man Karl May oder Karl Marx meint.
    Eure Spielrunde kann beschliessen, dass Eigennamen oder Titel als erlaubter Hinweis gelten.
    Also könnte man Hinweise geben wie Die drei Musketiere.
    Wenn ihr Eigennamen aus mehreren Wörtern jedoch strikt verbieten wollt, solltet ihr zumindest Ausnahmen für Ortsbezeichnungen wie New York zulassen.
    Geheimdienstchefs dürfen keine Namen erfinden, nicht mal solche, die sich z.B. bei einer anschliessenden Internet-Recherche überraschenderweise als real erweisen sollten.
    Hirn-Am-Hang ist kein erlaubter Hinweis für CHINA und BERGSTEIGER.`
  },
  {
    title: 'Abkürzungen',
    text: `CIA ist genau genommen kein Wort, könnte aber ein prima Hinweis sein. 
    Beschliesst einfach, allgemeingültige Abkürzungen wie BRD, lol, DVD als Hinweise zuzulassen.
    Wörter wie Laser, Radar und Sonar sind natürlich sowieso erlaubt, obwohl sie ursprünglich Kurzwörter waren.
`
  },
  {
    title: 'Reime',
    text: `Reime sind nur dann erlaubt, wenn sie sich auch auf Bedeutungen beziehen.
    Butter ists ein erlaubter Hinweis für FUTTER, denn man kann Butter ja futtern.
    Butter ist kein erlaubter Hinweis für MUTTER, denn die Assoziation ergibt sich bloss über den Reim.
    (Sollte jemand in der Gruppe ein weibliches Elternteil besitzen, das für sein hausgemachtes Streichfett berühmt ist, wäre der Hinweis natürlich absolut zulässig.)
    Manche Leute erlauben gereimt Hinweise grundsätzlich.
    Wenn man das auch möchte, darf man jedoch beim geben des Hinweises nicht darauf hinweisen, dass es sich um einen Reim handelt.
    Die Ermittler müssen das selber rausfinden.
`
  },
  {
    title: 'Für Experten: NULL',
    text: `Es ist erlaubt die 0 als Zahlenangabe beim Hinweis zu benutzen.
    So würde "Geflügel:0" bedeuten: >>Keins eurer Wörter hat mit Geflügel zu tun.<<
    Wenn 0 als Zahl genannt wird, gilt die Regel für die Höchstzahl an Rateversuchen nicht.
    Die Ermittler dürfen dann beliebig viele Wörter raten.
    1 Rateversuch müssen sie auf jeden Fall unternehmen.
    Wenn ihr euch jetzt nicht vorstellen könnte, warum das nützlich sein könnte, keine Sorge: Ihr werdet es herausfinden.`
  },
  {
    title: 'Für Experten: UNBEGRENZT',
    text: `Manchmal bleiben auf früheren Runden haufenweise nicht erratene Begriffe älterer Hinweise übrig.
    Wenn du möchtest, dass dein Team mehr als einen davon errät, kannst du statt einer zahl einfach unbegrenzt sagen.
    Zum Beispiel "Federn:unbegrenzt".
    Nachtteil ist, dass deine Ermittler keine Ahnung haben, wie viele Wörter zu dem neuen Hinweis gehören. 
    Vorteil ist, dass sie so viele Wörter erraten können, wie sie wollen (und schaffen).`
  }
]