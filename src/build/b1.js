// "Bauen" chains for B1, written for this app (original sentences). Format: see a1.js.
BUILD[25] = [
  { tip: "A relative clause describes a noun: comma, <b>der/die/das</b> (gender from the noun, case from its role in the clause), verb at the end. Die Stadt, <b>die</b> ich mag, <b>ist</b> …", steps: [
    { en: "That's the village.", de: "Das ist das Dorf." },
    { en: "That's the village that I like.", de: "Das ist das Dorf, das ich mag.", why: "das Dorf → das, and the verb goes to the end." },
    { en: "That's the village where I grew up.", de: "Das ist das Dorf, in dem ich aufgewachsen bin.", alt: ["Das ist das Dorf, wo ich aufgewachsen bin."] },
    { en: "I have a neighbour who commutes every day.", de: "Ich habe einen Nachbarn, der jeden Tag pendelt.", why: "der Nachbar is the subject in the clause: der. Nachbar adds -n: einen Nachbarn." },
    { en: "The flat that we're renting is in a suburb.", de: "Die Wohnung, die wir mieten, liegt in einem Vorort.", alt: ["Die Wohnung, die wir mieten, ist in einem Vorort."], nw: "mieten = to rent" },
    { en: "The man who I met yesterday lives on a farm.", de: "Der Mann, den ich gestern getroffen habe, wohnt auf einem Bauernhof.", why: "In the clause the man is the object: den." },
    { en: "I'm looking for an area that is quiet and green.", de: "Ich suche eine Gegend, die ruhig und grün ist." }
  ] },
  { tip: "In the Dativ the relative pronouns are <b>dem, der, dem, denen</b>. A preposition goes in front: die Stadt, <b>in der</b> ich wohne.", steps: [
    { en: "The woman whom I helped lives on the third floor.", de: "Die Frau, der ich geholfen habe, wohnt im dritten Stock.", why: "helfen takes the Dativ: der (feminine)." },
    { en: "That's the town I live in.", de: "Das ist die Stadt, in der ich wohne.", alt: ["Das ist die Stadt, wo ich wohne."] },
    { en: "The friend I go hiking with has a car.", de: "Der Freund, mit dem ich wandern gehe, hat ein Auto." },
    { en: "The neighbours I talk to are very friendly.", de: "Die Nachbarn, mit denen ich spreche, sind sehr freundlich.", why: "Plural Dativ: denen.", nw: "freundlich = friendly" },
    { en: "The house the garden belongs to is old.", de: "Das Haus, zu dem der Garten gehört, ist alt." },
    { en: "The people I work with live in the city.", de: "Die Leute, mit denen ich arbeite, wohnen in der Stadt." }
  ] },
  { tip: "Pros and cons: <b>Ein Vorteil ist, dass …</b> · <b>Einerseits …, andererseits …</b> · <b>…, dafür …</b> (but in return).", steps: [
    { en: "One advantage is that the rents are low.", de: "Ein Vorteil ist, dass die Mieten niedrig sind.", nw: "niedrig = low" },
    { en: "One disadvantage is that the connections are bad.", de: "Ein Nachteil ist, dass die Verbindungen schlecht sind." },
    { en: "On the one hand it's quiet, on the other hand it's boring.", de: "Einerseits ist es ruhig, andererseits ist es langweilig.", why: "Both words take position 1, so the verb comes next.", nw: "langweilig = boring" },
    { en: "The flat is small, but in return it's central.", de: "Die Wohnung ist klein, dafür ist sie zentral.", nw: "zentral = central" },
    { en: "In the city there's more on offer, but also more traffic.", de: "In der Stadt gibt es mehr Angebote, aber auch mehr Verkehr.", alt: ["In der Stadt gibt es ein größeres Angebot, aber auch mehr Verkehr."], nw: "es gibt = there is / there are" },
    { en: "On the one hand I enjoy the peace, on the other hand I miss my friends.", de: "Einerseits genieße ich die Ruhe, andererseits vermisse ich meine Freunde." }
  ] }
];
BUILD[26] = [
  { tip: "After verbs like <b>versuchen, vergessen, hoffen, vorhaben</b>, a second verb comes as <b>zu</b> + infinitive at the end: Ich versuche, pünktlich <b>zu kommen</b>.", steps: [
    { en: "I'm trying to come on time.", de: "Ich versuche, pünktlich zu kommen." },
    { en: "I forgot to send the CV.", de: "Ich habe vergessen, den Lebenslauf zu schicken." },
    { en: "I'm planning to apply for the job.", de: "Ich habe vor, mich um die Stelle zu bewerben.", why: "vorhaben + zu; the reflexive pronoun stays: mich … zu bewerben." },
    { en: "I hope to hear from you soon. (Sie)", de: "Ich hoffe, bald von Ihnen zu hören." },
    { en: "It's important to be reliable.", de: "Es ist wichtig, zuverlässig zu sein." },
    { en: "Do you have time to introduce yourself? (Sie)", de: "Haben Sie Zeit, sich vorzustellen?", why: "With separable verbs, zu goes in the middle: vorzustellen." },
    { en: "I've started to learn German every day.", de: "Ich habe angefangen, jeden Tag Deutsch zu lernen." }
  ] },
  { tip: "Purpose: <b>um … zu</b> when the subject is the same; <b>damit</b> + verb at the end when it's different.", steps: [
    { en: "I'm learning German to work in Germany.", de: "Ich lerne Deutsch, um in Deutschland zu arbeiten." },
    { en: "I'm doing a further training course to earn more.", de: "Ich mache eine Weiterbildung, um mehr zu verdienen." },
    { en: "I speak slowly so that you understand me. (du)", de: "Ich spreche langsam, damit du mich verstehst.", why: "Different subjects (ich / du): damit, not um … zu." },
    { en: "I'm sending you my CV so that you can read it. (Sie)", de: "Ich schicke Ihnen meinen Lebenslauf, damit Sie ihn lesen können." },
    { en: "She works part-time to have more time for the children.", de: "Sie arbeitet Teilzeit, um mehr Zeit für die Kinder zu haben." },
    { en: "The company hires new staff so that the team gets bigger.", de: "Die Firma stellt neue Mitarbeiter ein, damit das Team größer wird.", nw: "der Mitarbeiter = employee" }
  ] }
];
BUILD[27] = [
  { tip: "Telling a story, Germans use the <b>Präteritum</b>: regular verbs add <b>-te</b> (spielte, wohnte), irregular ones change the stem (ging, kam, sah, fuhr).", steps: [
    { en: "We lived in a small village.", de: "Wir wohnten in einem kleinen Dorf." },
    { en: "We played in the playground every day.", de: "Wir spielten jeden Tag auf dem Spielplatz." },
    { en: "Then suddenly my grandmother came.", de: "Dann kam plötzlich meine Oma.", alt: ["Plötzlich kam meine Oma."] },
    { en: "She saw us and laughed.", de: "Sie sah uns und lachte." },
    { en: "In the summer we went to the sea.", de: "Im Sommer fuhren wir ans Meer.", why: "fahren → fuhr in the Präteritum." },
    { en: "I was shy and had only a few friends.", de: "Ich war schüchtern und hatte nur wenige Freunde." },
    { en: "As a child I climbed trees and wrote a diary.", de: "Als Kind kletterte ich auf Bäume und schrieb ein Tagebuch." }
  ] },
  { tip: "English 'when': <b>als</b> for one time or period in the past; <b>wenn</b> for repeated times (immer wenn) or the present/future. Both send the verb to the end.", steps: [
    { en: "When I was ten, we moved.", de: "Als ich zehn war, sind wir umgezogen.", alt: ["Als ich zehn war, zogen wir um."], why: "One period in the past: als." },
    { en: "Whenever we visited grandma, she baked a cake.", de: "Immer wenn wir Oma besuchten, backte sie einen Kuchen.", alt: ["Wenn wir Oma besuchten, backte sie einen Kuchen.", "Immer wenn wir Oma besucht haben, hat sie einen Kuchen gebacken."], why: "Repeated in the past: wenn." },
    { en: "When I came home, my mother was cooking.", de: "Als ich nach Hause kam, kochte meine Mutter." },
    { en: "When I'm in Berlin, I'll call you. (du)", de: "Wenn ich in Berlin bin, rufe ich dich an." },
    { en: "When I was a child, I was very curious.", de: "Als ich ein Kind war, war ich sehr neugierig.", alt: ["Als ich Kind war, war ich sehr neugierig."] },
    { en: "Whenever it rained, we stayed at home.", de: "Immer wenn es regnete, blieben wir zu Hause.", alt: ["Wenn es regnete, blieben wir zu Hause."] }
  ] },
  { tip: "'Had done' = <b>hatte / war + Partizip II</b>. After <b>nachdem</b> use it for the earlier event: Nachdem ich gegessen <b>hatte</b>, ging ich los.", steps: [
    { en: "I had eaten.", de: "Ich hatte gegessen." },
    { en: "We had gone home.", de: "Wir waren nach Hause gegangen.", why: "gehen takes sein: waren gegangen." },
    { en: "After I had eaten, I went to school.", de: "Nachdem ich gegessen hatte, ging ich in die Schule.", alt: ["Nachdem ich gegessen hatte, ging ich zur Schule."] },
    { en: "After we had moved, I was homesick.", de: "Nachdem wir umgezogen waren, hatte ich Heimweh." },
    { en: "After she had finished school, she travelled.", de: "Nachdem sie die Schule beendet hatte, reiste sie.", nw: "beenden = to finish" },
    { en: "I didn't know that he had already left.", de: "Ich wusste nicht, dass er schon gegangen war.", alt: ["Ich wusste nicht, dass er schon weggegangen war."] }
  ] }
];
BUILD[28] = [
  { tip: "The passive says what happens: <b>werden</b> + Partizip II at the end. Der Patient <b>wird untersucht</b>.", steps: [
    { en: "The patient is examined.", de: "Der Patient wird untersucht." },
    { en: "The blood pressure is measured.", de: "Der Blutdruck wird gemessen." },
    { en: "Here you get vaccinated.", de: "Hier wird man geimpft.", alt: ["Hier wird geimpft."], nw: "impfen = to vaccinate" },
    { en: "The medicine is prescribed by the doctor.", de: "Das Medikament wird vom Arzt verschrieben.", alt: ["Das Medikament wird von der Ärztin verschrieben."] },
    { en: "The patients are treated in the emergency room.", de: "Die Patienten werden in der Notaufnahme behandelt." },
    { en: "When is the operation done?", de: "Wann wird die Operation gemacht?", alt: ["Wann wird operiert?"] }
  ] },
  { tip: "Passive in the past: <b>wurde</b> + Partizip II. Ich <b>wurde</b> am Knie <b>operiert</b>.", steps: [
    { en: "I was operated on.", de: "Ich wurde operiert." },
    { en: "I was operated on my knee.", de: "Ich wurde am Knie operiert.", nw: "das Knie = knee" },
    { en: "The patient was treated immediately.", de: "Der Patient wurde sofort behandelt." },
    { en: "When were you vaccinated? (du)", de: "Wann wurdest du geimpft?" },
    { en: "We were looked after well in the hospital.", de: "Wir wurden im Krankenhaus gut versorgt.", nw: "versorgen = to look after" },
    { en: "After the accident he was taken to hospital.", de: "Nach dem Unfall wurde er ins Krankenhaus gebracht." }
  ] },
  { tip: "Name who did it with <b>von + Dativ</b>: <b>vom</b> Arzt, <b>von der</b> Ärztin.", steps: [
    { en: "I was examined by the doctor.", de: "Ich wurde von der Ärztin untersucht.", alt: ["Ich wurde vom Arzt untersucht."] },
    { en: "The prescription is issued by the family doctor.", de: "Das Rezept wird vom Hausarzt ausgestellt.", nw: "ausstellen = to issue" },
    { en: "The ambulance was called by a neighbour.", de: "Der Krankenwagen wurde von einem Nachbarn gerufen." },
    { en: "The patients are looked after by the nurses.", de: "Die Patienten werden von den Pflegekräften versorgt.", why: "Dativ plural: von den Pflegekräften." },
    { en: "The costs are paid by the health insurance.", de: "Die Kosten werden von der Krankenkasse bezahlt.", alt: ["Die Kosten werden von der Krankenkasse übernommen."], nw: "die Kosten = costs" }
  ] }
];
BUILD[29] = [
  { tip: "What didn't happen: <b>hätte / wäre</b> + Partizip II. Ich <b>hätte</b> den Zug fast <b>verpasst</b>. Choose hätte or wäre as in the Perfekt.", steps: [
    { en: "I missed the train.", de: "Ich habe den Zug verpasst." },
    { en: "I would have missed the train.", de: "Ich hätte den Zug verpasst." },
    { en: "We would have arrived on time.", de: "Wir wären pünktlich angekommen.", why: "ankommen takes sein, so wären." },
    { en: "I would have booked earlier.", de: "Ich hätte früher gebucht." },
    { en: "That would have been cheaper.", de: "Das wäre billiger gewesen.", alt: ["Das wäre günstiger gewesen."] },
    { en: "You should have told me that. (du)", de: "Du hättest mir das sagen sollen.", alt: ["Das hättest du mir sagen sollen."] }
  ] },
  { tip: "Unreal past condition: both parts with hätte / wäre. <b>Wenn wir früher losgefahren wären, hätten wir den Flug nicht verpasst.</b>", steps: [
    { en: "If we had left earlier…", de: "Wenn wir früher losgefahren wären", alt: ["Wenn wir früher losgefahren wären …"], nw: "losfahren = to set off" },
    { en: "If we had left earlier, we wouldn't have missed the flight.", de: "Wenn wir früher losgefahren wären, hätten wir den Flug nicht verpasst.", why: "After the wenn-clause the main clause starts with the verb: hätten wir." },
    { en: "If I had known that, I would have booked a hire car.", de: "Wenn ich das gewusst hätte, hätte ich einen Mietwagen gebucht." },
    { en: "If there hadn't been a traffic jam, we would have been there on time.", de: "Wenn es keinen Stau gegeben hätte, wären wir pünktlich da gewesen.", alt: ["Wenn kein Stau gewesen wäre, wären wir pünktlich gewesen."] },
    { en: "If the flight hadn't been cancelled, we'd be in Berlin now.", de: "Wenn der Flug nicht ausgefallen wäre, wären wir jetzt in Berlin." }
  ] },
  { tip: "Regret: <b>Hätte ich doch …!</b> · <b>Wäre ich doch …!</b> Complaining politely: <b>Ich möchte mich über … beschweren.</b> · <b>Leider funktioniert … nicht.</b>", steps: [
    { en: "If only I had known that!", de: "Hätte ich das bloß gewusst!", alt: ["Hätte ich das doch gewusst!"] },
    { en: "If only we had stayed at home!", de: "Wären wir doch zu Hause geblieben!", alt: ["Wären wir bloß zu Hause geblieben!"] },
    { en: "We should have booked earlier.", de: "Wir hätten früher buchen sollen." },
    { en: "I'd like to complain about the room.", de: "Ich möchte mich über das Zimmer beschweren." },
    { en: "Unfortunately the air conditioning isn't working.", de: "Leider funktioniert die Klimaanlage nicht." },
    { en: "I'd like to cancel the booking and get my money back.", de: "Ich möchte die Reservierung stornieren und mein Geld zurückbekommen.", alt: ["Ich möchte die Buchung stornieren und mein Geld zurückbekommen."], nw: "zurückbekommen = to get back" }
  ] }
];
BUILD[30] = [
  { tip: "The Genitiv says whose or of what: <b>des</b> (der/das, noun + -s), <b>der</b> (die and plural). Der Titel <b>der</b> Zeitung, das Programm <b>des</b> Senders.", steps: [
    { en: "the newspaper's headline", de: "die Schlagzeile der Zeitung" },
    { en: "the channel's programme", de: "das Programm des Senders", why: "der Sender → des Senders, with -s." },
    { en: "The government's opinion is clear.", de: "Die Meinung der Regierung ist klar." },
    { en: "The journalist's article was published.", de: "Der Artikel des Journalisten wurde veröffentlicht.", why: "der Journalist adds -en: des Journalisten." },
    { en: "The result of the election surprised many.", de: "Das Ergebnis der Wahl hat viele überrascht.", alt: ["Das Ergebnis der Wahl überraschte viele."] },
    { en: "That's the source of the report.", de: "Das ist die Quelle des Berichts.", alt: ["Das ist die Quelle des Berichtes."] }
  ] },
  { tip: "<b>wegen</b> (because of), <b>trotz</b> (despite), <b>während</b> (during), <b>statt</b> (instead of) + Genitiv.", steps: [
    { en: "Because of the strike, no buses are running.", de: "Wegen des Streiks fahren keine Busse.", nw: "der Streik = strike" },
    { en: "Despite the criticism, the article appeared.", de: "Trotz der Kritik erschien der Artikel.", alt: ["Trotz der Kritik ist der Artikel erschienen."], nw: "erscheinen = to appear" },
    { en: "During the programme the phone rang.", de: "Während der Sendung klingelte das Telefon.", alt: ["Während der Sendung hat das Telefon geklingelt."] },
    { en: "Instead of a newspaper I read the news online.", de: "Statt einer Zeitung lese ich die Nachrichten online." },
    { en: "Because of the bad weather, the event was cancelled.", de: "Wegen des schlechten Wetters wurde die Veranstaltung abgesagt." },
    { en: "During the election many fake news stories were shared.", de: "Während der Wahl wurden viele Falschmeldungen geteilt." }
  ] }
];
BUILD[31] = [
  { tip: "Some masculine nouns add <b>-(e)n</b> everywhere except the nominative singular: der Kunde → den Kunde<b>n</b>, dem Kunde<b>n</b>.", steps: [
    { en: "The customer is complaining.", de: "Der Kunde beschwert sich." },
    { en: "I'm helping the customer.", de: "Ich helfe dem Kunden.", why: "der Kunde → dem Kunden." },
    { en: "Do you know the student? (du)", de: "Kennst du den Studenten?" },
    { en: "I'm asking my colleague.", de: "Ich frage meinen Kollegen." },
    { en: "The bank gives the customer a loan.", de: "Die Bank gibt dem Kunden einen Kredit." },
    { en: "I talked to the neighbour about the money.", de: "Ich habe mit dem Nachbarn über das Geld gesprochen." }
  ] },
  { tip: "Adjectives as nouns keep adjective endings: der Angestellt<b>e</b>, ein Angestellt<b>er</b>, die Angestellt<b>en</b>.", steps: [
    { en: "She's an employee at a bank.", de: "Sie ist Angestellte bei einer Bank." },
    { en: "He's an employee.", de: "Er ist Angestellter.", why: "Like an adjective without an article: -er." },
    { en: "The employees are getting a bonus.", de: "Die Angestellten bekommen eine Prämie.", nw: "die Prämie = bonus" },
    { en: "I met an acquaintance.", de: "Ich habe einen Bekannten getroffen." },
    { en: "My relatives live in Israel.", de: "Meine Verwandten wohnen in Israel.", alt: ["Meine Verwandten leben in Israel."] },
    { en: "A friend of mine (a woman) works as an employee in a shop.", de: "Eine Bekannte von mir arbeitet als Angestellte in einem Laden." }
  ] }
];
BUILD[32] = [
  { tip: "<b>sowohl … als auch</b> = both … and. <b>nicht nur …, sondern auch</b> = not only … but also.", steps: [
    { en: "I speak both Hebrew and English.", de: "Ich spreche sowohl Hebräisch als auch Englisch." },
    { en: "Both my parents and my siblings live nearby.", de: "Sowohl meine Eltern als auch meine Geschwister wohnen in der Nähe.", nw: "in der Nähe = nearby" },
    { en: "He's not only my partner, but also my best friend.", de: "Er ist nicht nur mein Partner, sondern auch mein bester Freund." },
    { en: "Trust is important not only in marriage, but also in friendship.", de: "Vertrauen ist nicht nur in der Ehe wichtig, sondern auch in der Freundschaft." },
    { en: "We need both patience and understanding.", de: "Wir brauchen sowohl Geduld als auch Verständnis.", nw: "die Geduld = patience" }
  ] },
  { tip: "<b>entweder … oder</b> = either … or. <b>weder … noch</b> = neither … nor.", steps: [
    { en: "Either you come along, or you stay here. (du)", de: "Entweder kommst du mit, oder du bleibst hier.", why: "entweder takes position 1: entweder kommst du." },
    { en: "I have neither time nor desire.", de: "Ich habe weder Zeit noch Lust.", nw: "die Lust = desire, wanting to" },
    { en: "We'll either visit my mother-in-law or my brother-in-law.", de: "Wir besuchen entweder meine Schwiegermutter oder meinen Schwager." },
    { en: "He's neither jealous nor angry.", de: "Er ist weder eifersüchtig noch wütend." },
    { en: "Either we find a compromise, or we separate.", de: "Entweder finden wir einen Kompromiss, oder wir trennen uns." }
  ] }
];
BUILD[33] = [
  { tip: "With a verb's fixed preposition, the preposition goes before the relative pronoun: das Buch, <b>über das</b> wir sprechen.", steps: [
    { en: "That's the play we talked about.", de: "Das ist das Theaterstück, über das wir gesprochen haben.", nw: "das Theaterstück = play" },
    { en: "The artist I'm interested in is exhibiting in Berlin.", de: "Der Künstler, für den ich mich interessiere, stellt in Berlin aus.", nw: "ausstellen = to exhibit" },
    { en: "The friend I went to the opera with loved it.", de: "Die Freundin, mit der ich in die Oper gegangen bin, war begeistert.", nw: "begeistert = thrilled" },
    { en: "The concert I was looking forward to is sold out.", de: "Das Konzert, auf das ich mich gefreut habe, ist ausverkauft." },
    { en: "The actors I spoke with were very friendly.", de: "Die Schauspieler, mit denen ich gesprochen habe, waren sehr freundlich." }
  ] },
  { tip: "After <b>alles, nichts, etwas, das Beste</b> and to refer to a whole sentence, use <b>was</b>: Alles, <b>was</b> er sagt, stimmt.", steps: [
    { en: "Everything he says is true.", de: "Alles, was er sagt, stimmt." },
    { en: "That's the best I've ever seen.", de: "Das ist das Beste, was ich je gesehen habe." },
    { en: "There's nothing I don't like about the film.", de: "Es gibt nichts, was mir an dem Film nicht gefällt.", alt: ["Es gibt nichts, was mir am Film nicht gefällt."] },
    { en: "The play was sold out, which annoyed me.", de: "Das Stück war ausverkauft, was mich geärgert hat.", why: "was refers to the whole sentence." },
    { en: "Is there anything you can recommend? (du)", de: "Gibt es etwas, was du empfehlen kannst?", alt: ["Gibt es etwas, das du empfehlen kannst?"] }
  ] }
];
BUILD[34] = [
  { tip: "Predictions: <b>werden</b> + infinitive. With <b>wohl</b> or <b>vermutlich</b> it means 'probably'.", steps: [
    { en: "Temperatures will rise.", de: "Die Temperaturen werden steigen." },
    { en: "We will need more energy.", de: "Wir werden mehr Energie brauchen." },
    { en: "He's probably stuck in traffic.", de: "Er wird wohl im Stau stehen.", alt: ["Er steht vermutlich im Stau."] },
    { en: "In ten years there will be more electric cars.", de: "In zehn Jahren wird es mehr Elektroautos geben." },
    { en: "Many animals will probably die out.", de: "Viele Tiere werden vermutlich aussterben.", alt: ["Viele Tiere werden wahrscheinlich aussterben."] },
    { en: "I'll throw away less and repair more.", de: "Ich werde weniger wegwerfen und mehr reparieren." }
  ] },
  { tip: "What must / can be done: modal + Partizip II + <b>werden</b> at the end. Die Heizung <b>muss repariert werden</b>.", steps: [
    { en: "The heating must be repaired.", de: "Die Heizung muss repariert werden.", nw: "die Heizung = heating" },
    { en: "Rubbish must be separated.", de: "Müll muss getrennt werden." },
    { en: "Plastic can be recycled.", de: "Plastik kann recycelt werden." },
    { en: "Emissions should be reduced.", de: "Die Abgase sollten reduziert werden.", alt: ["Abgase sollten reduziert werden.", "Die Abgase sollen reduziert werden."] },
    { en: "More trees must be planted.", de: "Es müssen mehr Bäume gepflanzt werden.", alt: ["Mehr Bäume müssen gepflanzt werden."] },
    { en: "Packaging could be avoided.", de: "Verpackungen könnten vermieden werden.", alt: ["Verpackung könnte vermieden werden."] }
  ] }
];
BUILD[35] = [
  { tip: "<b>obwohl</b> (although) sends the verb to the end. <b>trotzdem</b> (nevertheless) takes position 1 in the second sentence.", steps: [
    { en: "Although I have little time, I volunteer.", de: "Obwohl ich wenig Zeit habe, arbeite ich ehrenamtlich.", why: "After the obwohl-clause the verb comes first: arbeite ich." },
    { en: "I have little time. I volunteer nevertheless.", de: "Ich habe wenig Zeit. Trotzdem arbeite ich ehrenamtlich.", alt: ["Ich habe wenig Zeit, trotzdem arbeite ich ehrenamtlich."] },
    { en: "I'm going to vote, although I'm not happy with any party.", de: "Ich gehe wählen, obwohl ich mit keiner Partei zufrieden bin." },
    { en: "Although she's new here, she gets involved in a club.", de: "Obwohl sie neu hier ist, engagiert sie sich in einem Verein." },
    { en: "The law is controversial. Parliament passed it nevertheless.", de: "Das Gesetz ist umstritten. Trotzdem hat das Parlament es beschlossen.", nw: "umstritten = controversial, beschließen = to pass (a law)" }
  ] },
  { tip: "<b>bevor, nachdem, seitdem, bis, während</b> all send the verb to the end of their clause.", steps: [
    { en: "Before you hand in the application, copy all documents. (du)", de: "Bevor du den Antrag abgibst, kopier alle Dokumente.", alt: ["Bevor du den Antrag abgibst, kopiere alle Dokumente."], nw: "abgeben = to hand in" },
    { en: "After we had voted, we went to a café.", de: "Nachdem wir gewählt hatten, sind wir ins Café gegangen.", alt: ["Nachdem wir gewählt hatten, gingen wir ins Café."] },
    { en: "Since I've been living here, I've felt at home.", de: "Seitdem ich hier wohne, fühle ich mich zu Hause.", alt: ["Seit ich hier wohne, fühle ich mich zu Hause.", "Seitdem ich hier lebe, fühle ich mich zu Hause."] },
    { en: "Wait until the results come. (du)", de: "Warte, bis die Ergebnisse kommen.", alt: ["Wart, bis die Ergebnisse kommen."] },
    { en: "While the politicians were discussing, people demonstrated outside.", de: "Während die Politiker diskutierten, demonstrierten die Leute draußen.", nw: "draußen = outside" }
  ] },
  { tip: "<b>je</b> + comparative (verb at the end), <b>desto</b> + comparative (verb right after): Je länger ich hier lebe, desto besser verstehe ich …", steps: [
    { en: "The longer I live here, the better I understand the society.", de: "Je länger ich hier lebe, desto besser verstehe ich die Gesellschaft." },
    { en: "The more I speak, the more confident I become.", de: "Je mehr ich spreche, desto sicherer werde ich.", nw: "sicher = confident, sure" },
    { en: "The more people vote, the better.", de: "Je mehr Menschen wählen, desto besser." },
    { en: "The earlier you apply, the faster you get an answer. (du)", de: "Je früher du dich bewirbst, desto schneller bekommst du eine Antwort." },
    { en: "The more I learn about the history, the more interesting it becomes.", de: "Je mehr ich über die Geschichte lerne, desto interessanter wird sie." }
  ] }
];
BUILD[36] = [
  { tip: "Participles can describe a noun with normal adjective endings: die steigend<b>en</b> Preise (rising), das reparier<b>te</b> Fahrrad (repaired).", steps: [
    { en: "the rising prices", de: "die steigenden Preise" },
    { en: "the finished project", de: "das abgeschlossene Projekt", alt: ["das fertige Projekt"], nw: "abschließen = to finish" },
    { en: "The rising prices worry many employees.", de: "Die steigenden Preise beunruhigen viele Angestellte.", nw: "beunruhigen = to worry" },
    { en: "I sent the finished report to the boss.", de: "Ich habe den fertigen Bericht an den Chef geschickt.", alt: ["Ich habe den abgeschlossenen Bericht an den Chef geschickt."] },
    { en: "The motivated team worked all night.", de: "Das motivierte Team hat die ganze Nacht gearbeitet.", alt: ["Das motivierte Team arbeitete die ganze Nacht."] },
    { en: "The agreed deadline is Friday.", de: "Die vereinbarte Frist ist Freitag.", alt: ["Die vereinbarte Frist ist am Freitag."] }
  ] },
  { tip: "Having something done: <b>lassen</b> + infinitive at the end. Ich <b>lasse</b> mein Fahrrad <b>reparieren</b>.", steps: [
    { en: "I'm having my bike repaired.", de: "Ich lasse mein Fahrrad reparieren." },
    { en: "She's having her hair cut.", de: "Sie lässt sich die Haare schneiden." },
    { en: "I had my car repaired.", de: "Ich habe mein Auto reparieren lassen.", why: "Perfekt with lassen: two infinitives at the end." },
    { en: "We're having the documents translated.", de: "Wir lassen die Dokumente übersetzen.", nw: "übersetzen = to translate" },
    { en: "The boss has the report checked.", de: "Der Chef lässt den Bericht prüfen.", alt: ["Die Chefin lässt den Bericht prüfen."], nw: "prüfen = to check" }
  ] },
  { tip: "<b>Meiner Meinung nach</b> takes position 1 (verb next). <b>Ich bin der Meinung, dass …</b> sends the verb to the end.", steps: [
    { en: "In my opinion, home office has many advantages.", de: "Meiner Meinung nach hat Homeoffice viele Vorteile.", why: "Meiner Meinung nach counts as position 1, so the verb comes next." },
    { en: "I'm of the opinion that teamwork is important.", de: "Ich bin der Meinung, dass Teamarbeit wichtig ist." },
    { en: "I agree with you. (du)", de: "Ich stimme dir zu.", alt: ["Da stimme ich dir zu."] },
    { en: "I see it differently.", de: "Ich sehe das anders.", alt: ["Das sehe ich anders."] },
    { en: "In my opinion, flexible working hours make employees more efficient.", de: "Meiner Meinung nach machen flexible Arbeitszeiten die Angestellten effizienter." },
    { en: "I don't think that we can reach the goal by Friday.", de: "Ich glaube nicht, dass wir das Ziel bis Freitag erreichen können." }
  ] }
];
