// "Bauen" chains for B2, written for this app (original sentences). Format: see a1.js.
BUILD[37] = [
  { tip: "Reported speech (Konjunktiv I): stem + <b>-e</b>. Er sagt, er <b>habe</b> keine Zeit. sein → <b>sei</b>.", steps: [
    { en: "He says he has no time.", de: "Er sagt, er habe keine Zeit.", alt: ["Er sagt, dass er keine Zeit habe."] },
    { en: "She says she is ill.", de: "Sie sagt, sie sei krank.", alt: ["Sie sagt, dass sie krank sei."] },
    { en: "The boss claims the project is finished.", de: "Der Chef behauptet, das Projekt sei abgeschlossen.", alt: ["Die Chefin behauptet, das Projekt sei abgeschlossen.", "Der Chef behauptet, das Projekt sei fertig."] },
    { en: "He mentioned that he would come later.", de: "Er erwähnte, er komme später.", alt: ["Er hat erwähnt, er komme später.", "Er erwähnte, dass er später komme."] },
    { en: "She says she didn't understand the email.", de: "Sie sagt, sie habe die E-Mail nicht verstanden.", why: "Past in reported speech: habe + Partizip II." },
    { en: "The spokesman stressed that there had been a misunderstanding.", de: "Der Sprecher betonte, es habe ein Missverständnis gegeben.", nw: "der Sprecher = spokesman" }
  ] },
  { tip: "When Konjunktiv I looks like the normal form (sie haben, ich komme), use Konjunktiv II or <b>würde</b>: Sie sagen, sie <b>hätten</b> keine Zeit.", steps: [
    { en: "They say they have no time.", de: "Sie sagen, sie hätten keine Zeit.", why: "sie haben would look like the indicative, so hätten." },
    { en: "My colleagues say they knew nothing about it.", de: "Meine Kollegen sagen, sie hätten nichts davon gewusst." },
    { en: "The customers claim they waited for an hour.", de: "Die Kunden behaupten, sie hätten eine Stunde gewartet." },
    { en: "They said they would come tomorrow.", de: "Sie sagten, sie würden morgen kommen.", alt: ["Sie haben gesagt, sie würden morgen kommen."] },
    { en: "I told him I had already sent the email.", de: "Ich habe ihm gesagt, ich hätte die E-Mail schon geschickt.", alt: ["Ich sagte ihm, ich hätte die E-Mail schon geschickt."] }
  ] },
  { tip: "Reported questions: <b>ob</b> or the W-word, verb at the end. Requests: <b>sollen</b>. Er fragt, ob ich Zeit <b>habe</b>. Sie sagt, ich <b>solle</b> warten.", steps: [
    { en: "She asks whether I have time.", de: "Sie fragt, ob ich Zeit habe." },
    { en: "He asks when the meeting starts.", de: "Er fragt, wann das Meeting beginne.", alt: ["Er fragt, wann das Meeting beginnt.", "Er fragt, wann die Besprechung beginnt."] },
    { en: "The manager asked why we hadn't called back.", de: "Der Manager fragte, warum wir nicht zurückgerufen hätten.", alt: ["Die Managerin fragte, warum wir nicht zurückgerufen hätten."] },
    { en: "She says I should wait.", de: "Sie sagt, ich solle warten.", alt: ["Sie sagt, ich soll warten."] },
    { en: "He asked me not to interrupt him.", de: "Er bat mich, ihn nicht zu unterbrechen.", alt: ["Er hat mich gebeten, ihn nicht zu unterbrechen."], nw: "bitten (bat) = to ask (a favour)" }
  ] }
];
BUILD[38] = [
  { tip: "Formal style turns a clause into <b>preposition + noun</b>: weil er krank war → <b>wegen seiner Krankheit</b>.", steps: [
    { en: "Because he was ill, the meeting was postponed.", de: "Weil er krank war, wurde das Meeting verschoben.", alt: ["Weil er krank war, wurde die Besprechung verschoben."] },
    { en: "Due to his illness, the meeting was postponed.", de: "Wegen seiner Krankheit wurde das Meeting verschoben.", alt: ["Wegen seiner Krankheit wurde die Besprechung verschoben.", "Aufgrund seiner Krankheit wurde das Meeting verschoben."] },
    { en: "After the negotiations were finished, we celebrated.", de: "Nachdem die Verhandlungen abgeschlossen waren, haben wir gefeiert.", alt: ["Nachdem die Verhandlungen abgeschlossen waren, feierten wir."] },
    { en: "After the end of the negotiations, we celebrated.", de: "Nach dem Abschluss der Verhandlungen haben wir gefeiert.", alt: ["Nach dem Ende der Verhandlungen haben wir gefeiert.", "Nach Abschluss der Verhandlungen feierten wir."] },
    { en: "Before the decision is made, we need more information.", de: "Vor der Entscheidung brauchen wir mehr Informationen." },
    { en: "In case of questions, I'm available.", de: "Bei Fragen stehe ich zur Verfügung.", alt: ["Bei Fragen stehe ich Ihnen zur Verfügung."] }
  ] },
  { tip: "Verb → noun (<b>-ung</b>, or the infinitive as das …), subject → <b>Genitiv</b>: Der Chef entscheidet → die Entscheidung <b>des Chefs</b>.", steps: [
    { en: "the boss's decision", de: "die Entscheidung des Chefs", alt: ["die Entscheidung der Chefin"] },
    { en: "the company's development", de: "die Entwicklung der Firma", alt: ["die Entwicklung des Unternehmens"] },
    { en: "The boss's decision surprised everyone.", de: "Die Entscheidung des Chefs hat alle überrascht.", alt: ["Die Entscheidung des Chefs überraschte alle."] },
    { en: "The negotiation of the salary took two hours.", de: "Die Verhandlung des Gehalts hat zwei Stunden gedauert.", alt: ["Die Verhandlung über das Gehalt dauerte zwei Stunden."], nw: "dauern = to take (time)" },
    { en: "The quick promotion of my colleague was deserved.", de: "Die schnelle Beförderung meiner Kollegin war verdient.", alt: ["Die schnelle Beförderung meines Kollegen war verdient."], nw: "verdient = deserved" }
  ] },
  { tip: "Formal noun + verb pairs: <b>eine Entscheidung treffen</b> (decide), <b>Kritik üben an</b> (criticise), <b>zur Verfügung stehen</b> (be available), <b>Bescheid geben</b> (let know).", steps: [
    { en: "We have to make a decision.", de: "Wir müssen eine Entscheidung treffen." },
    { en: "Please let me know by Friday. (Sie)", de: "Bitte geben Sie mir bis Freitag Bescheid.", alt: ["Geben Sie mir bitte bis Freitag Bescheid."] },
    { en: "The works council criticised the plan.", de: "Der Betriebsrat hat Kritik an dem Plan geübt.", alt: ["Der Betriebsrat übte Kritik am Plan.", "Der Betriebsrat hat Kritik am Plan geübt."] },
    { en: "Experience plays an important role.", de: "Erfahrung spielt eine wichtige Rolle.", alt: ["Die Erfahrung spielt eine wichtige Rolle."] },
    { en: "A pay rise is out of the question at the moment.", de: "Eine Gehaltserhöhung kommt im Moment nicht infrage.", alt: ["Eine Gehaltserhöhung kommt zurzeit nicht infrage."] },
    { en: "We want to bring the project to a close this month.", de: "Wir wollen das Projekt diesen Monat zum Abschluss bringen.", alt: ["Wir möchten das Projekt diesen Monat zum Abschluss bringen."] }
  ] }
];
BUILD[39] = [
  { tip: "<b>sich lassen</b> + infinitive = can be done: Das Problem <b>lässt sich lösen</b>.", steps: [
    { en: "The problem can be solved.", de: "Das Problem lässt sich lösen.", alt: ["Das Problem kann gelöst werden."] },
    { en: "That can't be proven.", de: "Das lässt sich nicht beweisen.", alt: ["Das kann nicht bewiesen werden."] },
    { en: "The data can be evaluated easily.", de: "Die Daten lassen sich leicht auswerten.", alt: ["Die Daten können leicht ausgewertet werden."] },
    { en: "The device can be programmed.", de: "Das Gerät lässt sich programmieren." },
    { en: "Not everything can be explained with algorithms.", de: "Nicht alles lässt sich mit Algorithmen erklären." }
  ] },
  { tip: "Verb stem + <b>-bar</b> (sometimes -lich) = can be …-ed: mach<b>bar</b>, les<b>bar</b>, un<b>vorhersehbar</b>.", steps: [
    { en: "The plan is feasible.", de: "Der Plan ist machbar." },
    { en: "The handwriting is unreadable.", de: "Die Schrift ist unleserlich.", alt: ["Die Schrift ist nicht lesbar.", "Die Handschrift ist unleserlich."] },
    { en: "The results are not verifiable.", de: "Die Ergebnisse sind nicht nachweisbar.", alt: ["Die Ergebnisse sind nicht überprüfbar."] },
    { en: "The effects of AI are unforeseeable.", de: "Die Folgen der künstlichen Intelligenz sind unvorhersehbar.", alt: ["Die Auswirkungen der künstlichen Intelligenz sind unvorhersehbar."] },
    { en: "This mistake was avoidable.", de: "Dieser Fehler war vermeidbar." }
  ] },
  { tip: "<b>sein + zu</b> + infinitive = can be done or must be done: Der Fehler <b>ist</b> leicht <b>zu finden</b>.", steps: [
    { en: "The mistake is easy to find.", de: "Der Fehler ist leicht zu finden." },
    { en: "The forms are to be handed in by Friday.", de: "Die Formulare sind bis Freitag abzugeben.", why: "Separable verb: zu goes in the middle, abzugeben." },
    { en: "The hypothesis is hard to prove.", de: "Die Hypothese ist schwer zu beweisen." },
    { en: "The instructions are to be followed exactly.", de: "Die Anweisungen sind genau zu befolgen.", nw: "befolgen = to follow (rules)" },
    { en: "This development can't be stopped.", de: "Diese Entwicklung ist nicht aufzuhalten.", nw: "aufhalten = to stop, hold up" }
  ] }
];
BUILD[40] = [
  { tip: "Partizip I = infinitive + <b>-d</b>, with adjective endings: die steigen<b>den</b> Zahlen (that are rising).", steps: [
    { en: "the rising number", de: "die steigende Zahl" },
    { en: "the rising numbers of sick days", de: "die steigenden Zahlen der Krankheitstage", nw: "der Krankheitstag = sick day" },
    { en: "a stressful job", de: "ein belastender Job", alt: ["eine belastende Arbeit"] },
    { en: "The increasing pressure makes many people ill.", de: "Der zunehmende Druck macht viele Menschen krank.", nw: "zunehmen = to increase, der Druck = pressure" },
    { en: "I'm looking for a relaxing activity.", de: "Ich suche eine entspannende Beschäftigung.", alt: ["Ich suche eine entspannende Aktivität."] }
  ] },
  { tip: "Partizip II before a noun = done / -ed, with adjective endings: die veröffentlicht<b>e</b> Studie, erschöpft<b>e</b> Patienten.", steps: [
    { en: "the published study", de: "die veröffentlichte Studie" },
    { en: "exhausted patients", de: "erschöpfte Patienten" },
    { en: "The recently published study shows clear results.", de: "Die kürzlich veröffentlichte Studie zeigt klare Ergebnisse.", nw: "kürzlich = recently" },
    { en: "Overwhelmed employees need support.", de: "Überforderte Angestellte brauchen Unterstützung.", alt: ["Überforderte Mitarbeiter brauchen Unterstützung."], nw: "die Unterstützung = support" },
    { en: "The therapy recommended by the doctor helped me.", de: "Die vom Arzt empfohlene Therapie hat mir geholfen.", alt: ["Die von der Ärztin empfohlene Therapie hat mir geholfen."] }
  ] },
  { tip: "A whole relative clause can go between article and noun: die Zahl, die seit Jahren steigt → <b>die seit Jahren steigende Zahl</b>.", steps: [
    { en: "the number that has been rising for years", de: "die seit Jahren steigende Zahl" },
    { en: "people who suffer from sleep disorders", de: "an Schlafstörungen leidende Menschen", alt: ["die an Schlafstörungen leidenden Menschen"], nw: "leiden an = to suffer from" },
    { en: "The number of burn-out cases, which has been rising for years, worries experts.", de: "Die seit Jahren steigende Zahl der Burn-out-Fälle beunruhigt Experten.", alt: ["Die seit Jahren steigende Zahl von Burn-out-Fällen beunruhigt Experten."] },
    { en: "The study, published last year, examined 2000 people.", de: "Die im letzten Jahr veröffentlichte Studie hat 2000 Menschen untersucht.", alt: ["Die letztes Jahr veröffentlichte Studie untersuchte 2000 Menschen.", "Die im letzten Jahr veröffentlichte Studie untersuchte 2000 Menschen."] },
    { en: "Doctors recommend a balance that is adapted to the person.", de: "Ärzte empfehlen einen an die Person angepassten Ausgleich.", nw: "anpassen an = to adapt to" }
  ] }
];
BUILD[41] = [
  { tip: "<b>indem</b> = by …-ing (how). <b>sodass</b> / <b>so … dass</b> = so that (result). Both send the verb to the end.", steps: [
    { en: "You learn a language best by speaking every day.", de: "Man lernt eine Sprache am besten, indem man jeden Tag spricht." },
    { en: "I improved my German by watching German series.", de: "Ich habe mein Deutsch verbessert, indem ich deutsche Serien geschaut habe.", alt: ["Ich habe mein Deutsch verbessert, indem ich deutsche Serien gesehen habe."], nw: "verbessern = to improve" },
    { en: "She feels at home by keeping her traditions.", de: "Sie fühlt sich zu Hause, indem sie ihre Traditionen pflegt.", nw: "pflegen = to keep up, cherish" },
    { en: "The culture shock was so great that I wanted to go back.", de: "Der Kulturschock war so groß, dass ich zurückwollte.", alt: ["Der Kulturschock war so groß, dass ich zurückgehen wollte."] },
    { en: "He speaks without an accent, so that nobody notices it.", de: "Er spricht ohne Akzent, sodass es niemand merkt.", nw: "merken = to notice" }
  ] },
  { tip: "Something that doesn't happen: same subject → <b>ohne … zu</b>; different subjects → <b>ohne dass</b> + verb at the end.", steps: [
    { en: "He emigrated without speaking the language.", de: "Er ist ausgewandert, ohne die Sprache zu können.", alt: ["Er ist ausgewandert, ohne die Sprache zu sprechen.", "Er wanderte aus, ohne die Sprache zu können."] },
    { en: "She left without saying goodbye.", de: "Sie ist gegangen, ohne sich zu verabschieden.", nw: "sich verabschieden = to say goodbye" },
    { en: "She moved away without her family knowing.", de: "Sie ist weggezogen, ohne dass ihre Familie es wusste.", alt: ["Sie zog weg, ohne dass ihre Familie es wusste."] },
    { en: "I signed the contract without reading it.", de: "Ich habe den Vertrag unterschrieben, ohne ihn zu lesen.", alt: ["Ich habe den Vertrag unterschrieben, ohne ihn gelesen zu haben."] },
    { en: "We integrated without anyone helping us.", de: "Wir haben uns integriert, ohne dass uns jemand geholfen hat.", alt: ["Wir haben uns integriert, ohne dass jemand uns geholfen hat."] }
  ] },
  { tip: "Instead of: same subject → <b>(an)statt … zu</b>; different subjects → <b>(an)statt dass</b>.", steps: [
    { en: "Instead of learning German, he speaks English everywhere.", de: "Statt Deutsch zu lernen, spricht er überall Englisch.", alt: ["Anstatt Deutsch zu lernen, spricht er überall Englisch."] },
    { en: "Instead of complaining, we should do something.", de: "Statt uns zu beschweren, sollten wir etwas tun.", alt: ["Anstatt uns zu beschweren, sollten wir etwas tun."] },
    { en: "Instead of the authority helping, it sends forms.", de: "Anstatt dass die Behörde hilft, schickt sie Formulare.", alt: ["Statt dass die Behörde hilft, schickt sie Formulare."] },
    { en: "I phone my mother instead of writing to her.", de: "Ich rufe meine Mutter an, statt ihr zu schreiben.", alt: ["Ich rufe meine Mutter an, anstatt ihr zu schreiben."] },
    { en: "Instead of judging others, we should get to know them.", de: "Statt andere zu verurteilen, sollten wir sie kennenlernen.", alt: ["Anstatt andere zu verurteilen, sollten wir sie kennenlernen."], nw: "verurteilen = to judge, condemn" }
  ] }
];
BUILD[42] = [
  { tip: "<b>sollen</b> = people say (a claim). <b>wollen</b> = the subject claims it: Er <b>will</b> alles gewusst haben.", steps: [
    { en: "The Finnish school system is said to be very good.", de: "Das finnische Schulsystem soll sehr gut sein." },
    { en: "The exam is said to be very difficult.", de: "Die Prüfung soll sehr schwierig sein." },
    { en: "He claims to speak five languages.", de: "Er will fünf Sprachen sprechen.", alt: ["Er will fünf Sprachen können."] },
    { en: "She claims to have studied all night.", de: "Sie will die ganze Nacht gelernt haben." },
    { en: "The teacher is said to have been very strict.", de: "Der Lehrer soll sehr streng gewesen sein.", alt: ["Die Lehrerin soll sehr streng gewesen sein."] }
  ] },
  { tip: "How sure: <b>muss</b> (almost certain), <b>dürfte</b> (quite likely), <b>kann / könnte</b> (possible), <b>kann nicht</b> (impossible).", steps: [
    { en: "The light is on. She must be at home.", de: "Das Licht ist an. Sie muss zu Hause sein." },
    { en: "The exam is likely to be hard.", de: "Die Prüfung dürfte schwer sein." },
    { en: "He could still be in the library.", de: "Er könnte noch in der Bibliothek sein.", nw: "die Bibliothek = library" },
    { en: "That can't be true.", de: "Das kann nicht stimmen.", alt: ["Das kann nicht wahr sein."] },
    { en: "She must have forgotten the appointment.", de: "Sie muss den Termin vergessen haben." },
    { en: "The course might be fully booked already.", de: "Der Kurs könnte schon ausgebucht sein.", alt: ["Der Kurs dürfte schon ausgebucht sein."], nw: "ausgebucht = fully booked" }
  ] },
  { tip: "Guessing about the past: <b>werden + Partizip II + haben/sein</b>, often with <b>wohl</b>: Er <b>wird</b> den Bus <b>verpasst haben</b>.", steps: [
    { en: "He has probably missed the bus.", de: "Er wird wohl den Bus verpasst haben.", alt: ["Er wird den Bus wohl verpasst haben.", "Er wird den Bus verpasst haben."] },
    { en: "She has probably passed the exam.", de: "Sie wird die Prüfung wohl bestanden haben.", alt: ["Sie wird wohl die Prüfung bestanden haben."] },
    { en: "They've probably already gone home.", de: "Sie werden wohl schon nach Hause gegangen sein.", why: "gehen takes sein: gegangen sein." },
    { en: "By then I'll have finished my training.", de: "Bis dahin werde ich meine Ausbildung abgeschlossen haben." },
    { en: "He'll surely have received the scholarship.", de: "Er wird das Stipendium sicher bekommen haben.", alt: ["Er wird sicher das Stipendium bekommen haben."] }
  ] }
];
BUILD[43] = [
  { tip: "Admitting a point, then holding your view: <b>zwar …, aber</b> · <b>Obwohl …</b> · <b>…, dennoch</b> · <b>Selbst wenn …</b>", steps: [
    { en: "Electric cars are expensive, but they're better for the climate.", de: "Elektroautos sind zwar teuer, aber sie sind besser für das Klima.", alt: ["Elektroautos sind zwar teuer, aber besser für das Klima.", "Zwar sind Elektroautos teuer, aber sie sind besser für das Klima."] },
    { en: "Although the measures are controversial, they're necessary.", de: "Obwohl die Maßnahmen umstritten sind, sind sie notwendig.", nw: "notwendig = necessary" },
    { en: "Resources are scarce. Nevertheless we waste a lot.", de: "Die Ressourcen sind knapp. Dennoch verschwenden wir viel.", alt: ["Die Ressourcen sind knapp, dennoch verschwenden wir viel."] },
    { en: "Even if it costs money, we have to act.", de: "Selbst wenn es Geld kostet, müssen wir handeln.", nw: "handeln = to act" },
    { en: "The effects are noticeable, but many still doubt it.", de: "Die Folgen sind zwar spürbar, aber viele zweifeln immer noch daran.", alt: ["Die Folgen sind spürbar, dennoch zweifeln viele noch daran."], nw: "zweifeln an = to doubt" }
  ] },
  { tip: "An argument: thesis (<b>Ich bin der Ansicht, dass …</b>), reasons (<b>Dafür spricht, dass …</b>), counter-argument (<b>Dagegen spricht …</b>), conclusion (<b>Alles in allem …</b>).", steps: [
    { en: "I'm of the view that we need the energy transition.", de: "Ich bin der Ansicht, dass wir die Energiewende brauchen." },
    { en: "In favour of it is the fact that sun and wind are free.", de: "Dafür spricht, dass Sonne und Wind kostenlos sind." },
    { en: "An important argument is that emissions will fall.", de: "Ein wichtiges Argument ist, dass die Emissionen sinken werden." },
    { en: "Against it is the fact that the costs are high.", de: "Dagegen spricht, dass die Kosten hoch sind." },
    { en: "All in all, the advantages outweigh the disadvantages.", de: "Alles in allem überwiegen die Vorteile.", alt: ["Alles in allem überwiegen die Vorteile die Nachteile."], nw: "überwiegen = to outweigh" }
  ] }
];
BUILD[44] = [
  { tip: "Modal particles add attitude: <b>doch</b> (come on / you know), <b>mal</b> (softens), <b>ja</b> (as we know), <b>eben / halt</b> (that's just how it is).", steps: [
    { en: "Just have a look at this. (du)", de: "Schau dir das mal an.", alt: ["Schau dir das doch mal an."] },
    { en: "Come along, then! (du)", de: "Komm doch mit!" },
    { en: "That's obviously fake news.", de: "Das ist ja eine Falschmeldung.", alt: ["Das ist doch eine Falschmeldung."] },
    { en: "That's just how social media is.", de: "So sind die sozialen Medien halt.", alt: ["So sind die sozialen Medien eben.", "Die sozialen Medien sind eben so."] },
    { en: "Check the source first, will you. (du)", de: "Überprüf doch erst mal die Quelle.", alt: ["Überprüfe doch erst mal die Quelle.", "Überprüf mal zuerst die Quelle."] },
    { en: "He's probably right.", de: "Er hat wohl recht.", alt: ["Er wird wohl recht haben."] }
  ] },
  { tip: "To stress something, move it to <b>position 1</b>; the verb stays second: <b>Diese Quelle</b> habe ich nicht überprüft.", steps: [
    { en: "I didn't check this source.", de: "Ich habe diese Quelle nicht überprüft." },
    { en: "This source I didn't check.", de: "Diese Quelle habe ich nicht überprüft.", why: "Diese Quelle takes position 1, the verb stays second." },
    { en: "I find the article one-sided.", de: "Ich finde den Artikel einseitig." },
    { en: "The article I find one-sided, not the video.", de: "Den Artikel finde ich einseitig, nicht das Video." },
    { en: "Of all people, my uncle believes conspiracy theories.", de: "Ausgerechnet mein Onkel glaubt an Verschwörungstheorien.", nw: "der Onkel = uncle" },
    { en: "Even the newspaper reported it.", de: "Sogar die Zeitung hat darüber berichtet.", alt: ["Sogar die Zeitung berichtete darüber."] }
  ] }
];
BUILD[45] = [
  { tip: "Business German loves noun + verb pairs: <b>einen Antrag stellen</b>, <b>in Anspruch nehmen</b>, <b>zur Verfügung stellen</b>, <b>in Kauf nehmen</b>.", steps: [
    { en: "We submitted an application for funding.", de: "Wir haben einen Antrag auf Förderung gestellt.", nw: "die Förderung = funding" },
    { en: "The company provides the capital.", de: "Die Firma stellt das Kapital zur Verfügung.", alt: ["Das Unternehmen stellt das Kapital zur Verfügung."] },
    { en: "The investor accepts the risk.", de: "Der Investor nimmt das Risiko in Kauf.", nw: "das Risiko = risk" },
    { en: "Many founders make use of advice.", de: "Viele Gründer nehmen eine Beratung in Anspruch.", nw: "die Beratung = advice, consulting" },
    { en: "The customers expressed their dissatisfaction.", de: "Die Kunden haben ihre Unzufriedenheit zum Ausdruck gebracht.", alt: ["Die Kunden brachten ihre Unzufriedenheit zum Ausdruck."] },
    { en: "The inflation calls the strategy into question.", de: "Die Inflation stellt die Strategie in Frage.", alt: ["Die Inflation stellt die Strategie infrage."] }
  ] },
  { tip: "Pairs: someone does it (<b>stellen, bringen, setzen</b>) vs. it happens (<b>stehen, kommen</b>): etwas zur Diskussion stellen → zur Diskussion stehen.", steps: [
    { en: "The board puts the plan up for discussion.", de: "Der Vorstand stellt den Plan zur Diskussion." },
    { en: "The plan is up for discussion.", de: "Der Plan steht zur Diskussion." },
    { en: "The founders set the project in motion.", de: "Die Gründer setzen das Projekt in Gang.", alt: ["Die Gründer haben das Projekt in Gang gesetzt."] },
    { en: "The project is getting going.", de: "Das Projekt kommt in Gang." },
    { en: "We are bringing the product onto the market.", de: "Wir bringen das Produkt auf den Markt." },
    { en: "The product comes onto the market next year.", de: "Das Produkt kommt nächstes Jahr auf den Markt." }
  ] }
];
BUILD[46] = [
  { tip: "Formal prepositions with the Genitiv: <b>aufgrund</b> (due to), <b>anlässlich</b> (on the occasion of), <b>innerhalb</b> (within), <b>mithilfe</b> (with the help of).", steps: [
    { en: "Due to the bad weather, the concert was cancelled.", de: "Aufgrund des schlechten Wetters wurde das Konzert abgesagt." },
    { en: "On the occasion of the anniversary there's an exhibition.", de: "Anlässlich des Jubiläums gibt es eine Ausstellung." },
    { en: "Within a week, all tickets were sold.", de: "Innerhalb einer Woche waren alle Karten verkauft.", alt: ["Innerhalb einer Woche wurden alle Karten verkauft."] },
    { en: "With the help of the city, the museum was renovated.", de: "Mithilfe der Stadt wurde das Museum renoviert.", nw: "renovieren = to renovate" },
    { en: "Outside the city there's a famous sculpture.", de: "Außerhalb der Stadt gibt es eine berühmte Skulptur.", nw: "berühmt = famous" }
  ] },
  { tip: "<b>wer</b> = whoever; <b>was</b> = whatever. The main clause can pick it up: <b>Wer</b> Kunst liebt, <b>der</b> sollte …", steps: [
    { en: "Whoever comes late has to wait.", de: "Wer zu spät kommt, muss warten.", alt: ["Wer zu spät kommt, der muss warten."] },
    { en: "Whoever loves art should visit this museum.", de: "Wer Kunst liebt, sollte dieses Museum besuchen.", alt: ["Wer Kunst liebt, der sollte dieses Museum besuchen."] },
    { en: "Whoever has questions can turn to the information desk.", de: "Wer Fragen hat, kann sich an die Information wenden.", nw: "sich wenden an = to turn to" },
    { en: "What the critic wrote surprised me.", de: "Was der Kritiker geschrieben hat, hat mich überrascht.", alt: ["Was der Kritiker schrieb, überraschte mich."] },
    { en: "Whoever has seen this production won't forget it.", de: "Wer diese Inszenierung gesehen hat, vergisst sie nicht.", alt: ["Wer diese Inszenierung gesehen hat, wird sie nicht vergessen."] }
  ] }
];
BUILD[47] = [
  { tip: "Things that didn't happen: <b>hätte / wäre + Partizip II</b>. Wenn ich es gewusst <b>hätte</b>, <b>hätte</b> ich dir geholfen.", steps: [
    { en: "I didn't know it.", de: "Ich wusste es nicht." },
    { en: "If I had known it, I would have helped you. (du)", de: "Wenn ich es gewusst hätte, hätte ich dir geholfen." },
    { en: "If you had been honest, we wouldn't have argued. (du)", de: "Wenn du ehrlich gewesen wärst, hätten wir uns nicht gestritten." },
    { en: "Without your help I would have given up. (du)", de: "Ohne deine Hilfe hätte ich aufgegeben.", nw: "aufgeben = to give up" },
    { en: "I regret that I didn't have the courage.", de: "Ich bereue, dass ich den Mut nicht hatte.", alt: ["Ich bereue, dass ich nicht den Mut hatte."] }
  ] },
  { tip: "With a modal verb: <b>hätte + infinitive + modal infinitive</b>, no Partizip II: Ich hätte früher anrufen <b>sollen</b>.", steps: [
    { en: "I should have called earlier.", de: "Ich hätte früher anrufen sollen." },
    { en: "You could have told me. (du)", de: "Du hättest es mir sagen können.", alt: ["Das hättest du mir sagen können."] },
    { en: "We should have been more tolerant.", de: "Wir hätten toleranter sein sollen." },
    { en: "She wouldn't have had to apologise.", de: "Sie hätte sich nicht entschuldigen müssen." },
    { en: "I would have liked to take the opportunity.", de: "Ich hätte die Gelegenheit gern genutzt.", nw: "nutzen = to use, take (a chance)" },
    { en: "He accuses me of not having helped him.", de: "Er wirft mir vor, dass ich ihm nicht geholfen habe.", alt: ["Er wirft mir vor, ihm nicht geholfen zu haben."] }
  ] },
  { tip: "<b>als ob / als wenn</b> + Konjunktiv II, verb at the end: Er redet, <b>als ob</b> er der Chef <b>wäre</b>.", steps: [
    { en: "He talks as if he were the boss.", de: "Er redet, als ob er der Chef wäre.", alt: ["Er spricht, als ob er der Chef wäre.", "Er redet, als wäre er der Chef."] },
    { en: "She acts as if she knew nothing.", de: "Sie tut so, als ob sie nichts wüsste.", alt: ["Sie tut so, als wüsste sie nichts.", "Sie tut so, als wenn sie nichts wüsste."] },
    { en: "It looks as if it's going to rain.", de: "Es sieht so aus, als ob es regnen würde.", alt: ["Es sieht aus, als ob es regnen würde.", "Es sieht so aus, als würde es regnen."] },
    { en: "You look as if you hadn't slept. (du)", de: "Du siehst aus, als ob du nicht geschlafen hättest.", alt: ["Du siehst aus, als hättest du nicht geschlafen."] },
    { en: "He behaved as if nothing had happened.", de: "Er verhielt sich, als ob nichts passiert wäre.", alt: ["Er hat sich verhalten, als ob nichts passiert wäre.", "Er tat so, als ob nichts passiert wäre."], nw: "sich verhalten = to behave" }
  ] }
];
BUILD[48] = [
  { tip: "When a verb's preposition introduces a whole clause, put <b>da(r) + preposition</b> before it: Ich achte <b>darauf</b>, dass …", steps: [
    { en: "I make sure that the slides are clear.", de: "Ich achte darauf, dass die Folien klar sind.", alt: ["Ich achte darauf, dass die Folien übersichtlich sind."] },
    { en: "We expect that robots will take over many jobs.", de: "Wir rechnen damit, dass Roboter viele Jobs übernehmen.", alt: ["Wir rechnen damit, dass Roboter viele Jobs übernehmen werden."] },
    { en: "I'm relying on you to send the report. (du)", de: "Ich verlasse mich darauf, dass du den Bericht schickst." },
    { en: "I have to get used to working from home.", de: "Ich muss mich daran gewöhnen, von zu Hause aus zu arbeiten.", alt: ["Ich muss mich daran gewöhnen, im Homeoffice zu arbeiten."] },
    { en: "What do we have to pay attention to?", de: "Worauf müssen wir achten?" },
    { en: "I'd like to point out that skilled workers are lacking.", de: "Ich möchte darauf hinweisen, dass Fachkräfte fehlen.", nw: "fehlen = to be lacking" }
  ] },
  { tip: "Presenting: <b>In meinem Vortrag geht es um …</b> · <b>Zunächst …</b> · <b>Damit komme ich zum nächsten Punkt.</b> · <b>Abschließend möchte ich …</b> Disagreeing: <b>Da bin ich anderer Meinung.</b>", steps: [
    { en: "My talk is about the future of work.", de: "In meinem Vortrag geht es um die Zukunft der Arbeit." },
    { en: "My talk is divided into three parts.", de: "Mein Vortrag gliedert sich in drei Teile." },
    { en: "First I'd like to briefly explain what automation means.", de: "Zunächst möchte ich kurz erklären, was Automatisierung bedeutet.", nw: "bedeuten = to mean" },
    { en: "That brings me to the next point.", de: "Damit komme ich zum nächsten Punkt." },
    { en: "May I interrupt briefly? I see that differently.", de: "Darf ich kurz unterbrechen? Da bin ich anderer Meinung.", alt: ["Darf ich kurz unterbrechen? Das sehe ich anders."] },
    { en: "In conclusion, I'd like to summarise the most important results.", de: "Abschließend möchte ich die wichtigsten Ergebnisse zusammenfassen." }
  ] }
];
