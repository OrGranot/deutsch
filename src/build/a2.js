// "Bauen" chains for A2, written for this app (original sentences). Format: see a1.js.
BUILD[13] = [
  { tip: "<b>Wo?</b> (where something is) takes the Dativ: <b>an der</b> Wand. <b>Wohin?</b> (where something goes) takes the Akkusativ: <b>an die</b> Wand.", steps: [
    { en: "The picture is on the wall.", de: "Das Bild ist an der Wand.", alt: ["Das Bild hängt an der Wand."] },
    { en: "I'm hanging the picture on the wall.", de: "Ich hänge das Bild an die Wand.", why: "Movement to a place (wohin?): Akkusativ, an die Wand." },
    { en: "The keys are on the table.", de: "Die Schlüssel sind auf dem Tisch.", alt: ["Die Schlüssel liegen auf dem Tisch."] },
    { en: "I'm putting the keys on the table.", de: "Ich lege die Schlüssel auf den Tisch.", why: "Movement: auf den Tisch (Akkusativ)." },
    { en: "The boxes are in the cellar.", de: "Die Kisten sind im Keller.", alt: ["Die Kisten stehen im Keller."] },
    { en: "We're carrying the boxes into the cellar.", de: "Wir tragen die Kisten in den Keller.", why: "Movement: in den Keller (Akkusativ), not im Keller." },
    { en: "The shelf is standing between the window and the door.", de: "Das Regal steht zwischen dem Fenster und der Tür.", why: "No movement (wo?): zwischen + Dativ." }
  ] },
  { tip: "Putting something somewhere: <b>stellen</b> (upright), <b>legen</b> (flat), <b>hängen</b> + Akkusativ. Where it then is: <b>stehen</b>, <b>liegen</b>, <b>hängen</b> + Dativ.", steps: [
    { en: "I'm putting the bottle in the fridge.", de: "Ich stelle die Flasche in den Kühlschrank.", why: "A bottle stands upright: stellen, and in den (movement)." },
    { en: "The bottle is in the fridge.", de: "Die Flasche steht im Kühlschrank." },
    { en: "I'm putting the book on the shelf.", de: "Ich stelle das Buch ins Regal.", alt: ["Ich lege das Buch ins Regal.", "Ich stelle das Buch in das Regal.", "Ich lege das Buch auf das Regal."] },
    { en: "I'm putting the carpet on the floor.", de: "Ich lege den Teppich auf den Boden." },
    { en: "The carpet is lying on the floor.", de: "Der Teppich liegt auf dem Boden.", why: "Position (wo?): liegen + Dativ, auf dem Boden." },
    { en: "Where should I put the mirror?", de: "Wohin soll ich den Spiegel hängen?", alt: ["Wohin soll ich den Spiegel stellen?", "Wo soll ich den Spiegel hinhängen?"] },
    { en: "Hang the mirror in the hallway, next to the door. (du)", de: "Häng den Spiegel in den Flur, neben die Tür.", alt: ["Hänge den Spiegel in den Flur, neben die Tür."], why: "Both are movement, so both Akkusativ: in den Flur, neben die Tür." }
  ] }
];
BUILD[14] = [
  { tip: "For the past of sein and haben, Germans say <b>war</b> and <b>hatte</b>: ich war, du warst, wir waren; ich hatte, du hattest, wir hatten.", steps: [
    { en: "I was a student.", de: "Ich war Schüler.", alt: ["Ich war Schülerin."] },
    { en: "I was a lazy student.", de: "Ich war ein fauler Schüler.", alt: ["Ich war eine faule Schülerin."] },
    { en: "I had good grades in maths.", de: "Ich hatte gute Noten in Mathematik.", alt: ["Ich hatte gute Noten in Mathe."] },
    { en: "Back then we had a strict teacher.", de: "Damals hatten wir einen strengen Lehrer.", alt: ["Damals hatten wir eine strenge Lehrerin."], why: "Damals first, so the verb comes next: hatten wir." },
    { en: "Were you hard-working at school? (du)", de: "Warst du fleißig in der Schule?", alt: ["Warst du in der Schule fleißig?"] },
    { en: "The exam was difficult, but I had luck.", de: "Die Prüfung war schwierig, aber ich hatte Glück.", nw: "das Glück = luck" }
  ] },
  { tip: "Modal verbs in the past: stem + <b>-te</b>, and the umlaut goes: können → ich <b>konnte</b>, müssen → ich <b>musste</b>, wollen → ich <b>wollte</b>.", steps: [
    { en: "I had to learn a lot.", de: "Ich musste viel lernen.", why: "müssen → musste (no umlaut)." },
    { en: "I couldn't go to university.", de: "Ich konnte nicht studieren.", alt: ["Ich konnte nicht an die Universität gehen."] },
    { en: "I wanted to become a doctor.", de: "Ich wollte Arzt werden.", alt: ["Ich wollte Ärztin werden."], nw: "werden = to become" },
    { en: "We weren't allowed to use a phone in class.", de: "Wir durften im Unterricht kein Handy benutzen.", nw: "benutzen = to use" },
    { en: "Back then I had to repeat the exam.", de: "Damals musste ich die Prüfung wiederholen." },
    { en: "I wanted to do an apprenticeship, but I had to study.", de: "Ich wollte eine Ausbildung machen, aber ich musste studieren." }
  ] },
  { tip: "Verbs with <b>be-, ver-, er-</b> and verbs ending in <b>-ieren</b> get no ge- in the Perfekt: ich habe <b>verstanden</b>, ich habe <b>studiert</b>.", steps: [
    { en: "I understood.", de: "Ich habe verstanden.", alt: ["Ich habe es verstanden.", "Ich habe das verstanden."] },
    { en: "I passed the exam.", de: "Ich habe die Prüfung bestanden.", why: "bestehen has be-, so no ge-: bestanden." },
    { en: "The teacher explained the grammar.", de: "Der Lehrer hat die Grammatik erklärt.", alt: ["Die Lehrerin hat die Grammatik erklärt."] },
    { en: "I forgot my homework.", de: "Ich habe meine Hausaufgaben vergessen.", alt: ["Ich habe meine Hausaufgabe vergessen."] },
    { en: "I studied history in Tel Aviv.", de: "Ich habe in Tel Aviv Geschichte studiert.", alt: ["Ich habe Geschichte in Tel Aviv studiert."] },
    { en: "What happened?", de: "Was ist passiert?", why: "passieren takes sein: ist passiert." },
    { en: "She told me what happened.", de: "Sie hat mir erzählt, was passiert ist.", why: "In a was-clause the verb goes to the end: was passiert ist." }
  ] }
];
BUILD[15] = [
  { tip: "<b>weil</b> sends the verb to the very end: Ich bleibe länger, weil ich viel Arbeit <b>habe</b>.", steps: [
    { en: "I have a lot of work.", de: "Ich habe viel Arbeit." },
    { en: "I'm staying longer because I have a lot of work.", de: "Ich bleibe länger, weil ich viel Arbeit habe.", why: "After weil, habe goes to the end." },
    { en: "He isn't calling because his phone is dead.", de: "Er ruft nicht an, weil sein Handy leer ist.", why: "Verb at the end: weil sein Handy leer ist." },
    { en: "I'm coming later because the train is late.", de: "Ich komme später, weil der Zug Verspätung hat.", alt: ["Ich komme später, weil der Zug zu spät ist.", "Ich komme später, weil der Zug spät ist."], nw: "Verspätung haben = to be late (trains)" },
    { en: "I can't print because the printer doesn't work.", de: "Ich kann nicht drucken, weil der Drucker nicht funktioniert." },
    { en: "I have to postpone the meeting because a customer is coming.", de: "Ich muss die Besprechung verschieben, weil ein Kunde kommt." },
    { en: "I'm doing overtime because the project is urgent.", de: "Ich mache Überstunden, weil das Projekt dringend ist." }
  ] },
  { tip: "<b>dass</b> works like weil: comma, then the verb at the end. Ich glaube, dass der Drucker kaputt <b>ist</b>.", steps: [
    { en: "I think that the printer is broken.", de: "Ich glaube, dass der Drucker kaputt ist." },
    { en: "I know that he isn't coming today.", de: "Ich weiß, dass er heute nicht kommt.", why: "kommt goes to the end." },
    { en: "She says that she sent the file.", de: "Sie sagt, dass sie die Datei geschickt hat.", why: "In the dass-clause, hat goes after the participle: geschickt hat." },
    { en: "I hope that you're well. (du)", de: "Ich hoffe, dass es dir gut geht.", nw: "es geht dir gut = you're well" },
    { en: "Did you know that the meeting is today? (du)", de: "Wusstest du, dass die Besprechung heute ist?", alt: ["Hast du gewusst, dass die Besprechung heute ist?"], nw: "wusstest du = did you know" },
    { en: "I'm sorry that I didn't answer.", de: "Es tut mir leid, dass ich nicht geantwortet habe.", nw: "es tut mir leid = I'm sorry" }
  ] },
  { tip: "On the phone at work: <b>Kann ich bitte mit … sprechen?</b> · <b>Kann ich etwas ausrichten?</b> · <b>Ich rufe später zurück.</b>", steps: [
    { en: "Can I please speak to Ms Koch?", de: "Kann ich bitte mit Frau Koch sprechen?", alt: ["Kann ich bitte Frau Koch sprechen?"] },
    { en: "One moment, I'll put you through.", de: "Einen Moment, ich verbinde Sie.", alt: ["Einen Moment bitte, ich verbinde Sie."] },
    { en: "She's not at her desk right now.", de: "Sie ist gerade nicht am Platz." },
    { en: "Can I take a message?", de: "Kann ich etwas ausrichten?" },
    { en: "Could she call me back?", de: "Kann sie mich zurückrufen?", alt: ["Könnte sie mich zurückrufen?"], why: "zurückrufen stays together at the end after a modal verb." },
    { en: "I'll call back later.", de: "Ich rufe später zurück.", alt: ["Ich rufe später noch einmal an."] },
    { en: "Please tell her that I called.", de: "Bitte sagen Sie ihr, dass ich angerufen habe.", alt: ["Sagen Sie ihr bitte, dass ich angerufen habe."] }
  ] }
];
BUILD[16] = [
  { tip: "Reflexive verbs need <b>mich, dich, sich, uns, euch</b>: ich fühle <b>mich</b> gut, du ruhst <b>dich</b> aus.", steps: [
    { en: "I feel good.", de: "Ich fühle mich gut." },
    { en: "Do you feel good? (du)", de: "Fühlst du dich gut?" },
    { en: "She eats healthily.", de: "Sie ernährt sich gesund." },
    { en: "We don't move enough.", de: "Wir bewegen uns nicht genug.", alt: ["Wir bewegen uns zu wenig."] },
    { en: "At the weekend I rest.", de: "Am Wochenende ruhe ich mich aus.", why: "ausruhen splits: ruhe ich mich … aus." },
    { en: "I'm looking forward to the weekend.", de: "Ich freue mich auf das Wochenende.", alt: ["Ich freue mich aufs Wochenende."] },
    { en: "After work I want to relax.", de: "Nach der Arbeit will ich mich entspannen.", alt: ["Nach der Arbeit möchte ich mich entspannen."], why: "With a modal verb the pronoun stays near the front, the infinitive goes to the end." }
  ] },
  { tip: "Friendly advice: <b>du solltest</b> / <b>Sie sollten</b> + infinitive at the end. Du solltest mehr Wasser <b>trinken</b>.", steps: [
    { en: "You should drink more water. (du)", de: "Du solltest mehr Wasser trinken." },
    { en: "You should take the stairs. (du)", de: "Du solltest die Treppe nehmen." },
    { en: "You should stop smoking. (Sie)", de: "Sie sollten mit dem Rauchen aufhören.", alt: ["Sie sollten aufhören zu rauchen."] },
    { en: "We should exercise regularly.", de: "Wir sollten regelmäßig trainieren.", alt: ["Wir sollten regelmäßig Sport machen."] },
    { en: "You should eat less sugar and salt. (du)", de: "Du solltest weniger Zucker und Salz essen.", nw: "weniger = less" },
    { en: "If you're stressed, you should go for a walk. (du)", de: "Wenn du Stress hast, solltest du spazieren gehen.", alt: ["Wenn du gestresst bist, solltest du spazieren gehen.", "Wenn du Stress hast, solltest du einen Spaziergang machen."], why: "After the wenn-clause the verb comes first: solltest du." }
  ] },
  { tip: "Direct tips: du → <b>Trink!</b> <b>Nimm!</b> · ihr → <b>Esst!</b> · Sie → <b>Machen Sie!</b>", steps: [
    { en: "Drink more water! (du)", de: "Trink mehr Wasser!", alt: ["Trinke mehr Wasser!"] },
    { en: "Take the stairs! (du)", de: "Nimm die Treppe!" },
    { en: "Eat more fruit! (ihr)", de: "Esst mehr Obst!" },
    { en: "Take a break! (Sie)", de: "Machen Sie eine Pause!" },
    { en: "Rest! (du)", de: "Ruh dich aus!", alt: ["Ruhe dich aus!"], why: "Reflexive in the imperative: Ruh dich aus!" },
    { en: "Don't get annoyed! (du)", de: "Ärger dich nicht!", alt: ["Ärgere dich nicht!"] },
    { en: "Go jogging regularly and sleep enough! (du)", de: "Geh regelmäßig joggen und schlaf genug!", alt: ["Gehe regelmäßig joggen und schlafe genug!"] }
  ] }
];
BUILD[17] = [
  { tip: "After <b>der/die/das</b> the adjective ends in <b>-e</b> or <b>-en</b>: der neu<b>e</b> Mantel, den neu<b>en</b> Mantel, die neu<b>en</b> Schuhe.", steps: [
    { en: "The coat is new.", de: "Der Mantel ist neu." },
    { en: "The new coat is warm.", de: "Der neue Mantel ist warm." },
    { en: "I'm buying the new coat.", de: "Ich kaufe den neuen Mantel.", why: "den … -en: den neuen Mantel." },
    { en: "The black shoes are comfortable.", de: "Die schwarzen Schuhe sind bequem.", why: "Plural: always -en." },
    { en: "I'm trying on the elegant blouse.", de: "Ich probiere die elegante Bluse an." },
    { en: "Do you like the striped shirt? (du)", de: "Gefällt dir das gestreifte Hemd?", why: "gefallen: the thing is the subject, dir is the person." },
    { en: "The brown boots don't fit me.", de: "Die braunen Stiefel passen mir nicht." }
  ] },
  { tip: "Where <b>ein</b> has no ending, the adjective shows the gender: ein warm<b>er</b> Mantel, ein warm<b>es</b> Kleid. Otherwise -e / -en.", steps: [
    { en: "I need a warm coat.", de: "Ich brauche einen warmen Mantel.", why: "einen … -en in the Akkusativ." },
    { en: "That's a warm coat.", de: "Das ist ein warmer Mantel.", why: "ein has no ending, so the adjective shows der: -er." },
    { en: "She's wearing an elegant dress.", de: "Sie trägt ein elegantes Kleid." },
    { en: "I'm looking for a comfortable jacket.", de: "Ich suche eine bequeme Jacke." },
    { en: "He has a checked shirt and a modern suit.", de: "Er hat ein kariertes Hemd und einen modernen Anzug." },
    { en: "I don't have any warm socks.", de: "Ich habe keine warmen Socken." }
  ] },
  { tip: "<b>welch-</b> (which?) and <b>dies-</b> (this) take der/die/das endings: welch<b>er</b> Mantel? dies<b>en</b> Mantel.", steps: [
    { en: "Which coat do you like? (du)", de: "Welcher Mantel gefällt dir?" },
    { en: "This coat.", de: "Dieser Mantel." },
    { en: "Which jacket are you buying? (du)", de: "Welche Jacke kaufst du?" },
    { en: "I'm taking this jacket.", de: "Ich nehme diese Jacke." },
    { en: "Which shoes fit you? (du)", de: "Welche Schuhe passen dir?" },
    { en: "I'd like to try on this blue dress.", de: "Ich möchte dieses blaue Kleid anprobieren." },
    { en: "Can I exchange this sweater?", de: "Kann ich diesen Pullover umtauschen?", why: "Akkusativ der → diesen." }
  ] }
];
BUILD[18] = [
  { tip: "Comparing two things: adjective + <b>-er</b> + <b>als</b>. Short words often add an umlaut: warm → w<b>ä</b>rmer, groß → gr<b>ö</b>ßer.", steps: [
    { en: "The train is fast.", de: "Der Zug ist schnell." },
    { en: "The train is faster than the bus.", de: "Der Zug ist schneller als der Bus.", why: "than = als, not dann." },
    { en: "The holiday flat is cheaper than the hotel.", de: "Die Ferienwohnung ist günstiger als das Hotel.", alt: ["Die Ferienwohnung ist billiger als das Hotel."] },
    { en: "In Israel it's warmer than in Germany.", de: "In Israel ist es wärmer als in Deutschland." },
    { en: "I like the sea better than the mountains.", de: "Ich mag das Meer lieber als die Berge.", alt: ["Das Meer gefällt mir besser als die Berge."] },
    { en: "The island is smaller, but more beautiful.", de: "Die Insel ist kleiner, aber schöner." },
    { en: "A double room costs more than a single room.", de: "Ein Doppelzimmer kostet mehr als ein Einzelzimmer." }
  ] },
  { tip: "The most: <b>am … -sten</b> after a verb (am schönsten), <b>der/die/das … -ste</b> before a noun (der schönste Strand). gut → <b>am besten</b>.", steps: [
    { en: "The beach is the most beautiful in summer.", de: "Der Strand ist im Sommer am schönsten.", alt: ["Im Sommer ist der Strand am schönsten."] },
    { en: "That's the most beautiful beach.", de: "Das ist der schönste Strand." },
    { en: "The hotel is the most expensive.", de: "Das Hotel ist am teuersten." },
    { en: "We're taking the cheapest flat.", de: "Wir nehmen die günstigste Wohnung.", alt: ["Wir nehmen die billigste Wohnung."] },
    { en: "Which city do you like best? (du)", de: "Welche Stadt gefällt dir am besten?" },
    { en: "I like hiking most of all.", de: "Am liebsten wandere ich.", alt: ["Ich wandere am liebsten."] },
    { en: "July is the hottest month.", de: "Der Juli ist der heißeste Monat." }
  ] },
  { tip: "<b>wenn</b> (if, whenever) sends the verb to the end. If the wenn-clause comes first, the main verb follows straight after the comma: Wenn es regnet, <b>bleiben wir</b> …", steps: [
    { en: "We're going to the beach if the weather is nice.", de: "Wir gehen an den Strand, wenn das Wetter schön ist." },
    { en: "If the weather is nice, we're going to the beach.", de: "Wenn das Wetter schön ist, gehen wir an den Strand.", why: "After the wenn-clause, the verb comes first: gehen wir." },
    { en: "If it rains, we'll visit a museum.", de: "Wenn es regnet, besuchen wir ein Museum.", alt: ["Wenn es regnet, gehen wir ins Museum."] },
    { en: "If the hotel is full, we'll sleep at the campsite.", de: "Wenn das Hotel voll ist, schlafen wir auf dem Campingplatz.", alt: ["Wenn das Hotel voll ist, übernachten wir auf dem Campingplatz."] },
    { en: "If you have time, we can do an excursion. (du)", de: "Wenn du Zeit hast, können wir einen Ausflug machen." },
    { en: "When I'm on holiday, I sleep long.", de: "Wenn ich Urlaub habe, schlafe ich lange.", alt: ["Wenn ich im Urlaub bin, schlafe ich lange."], nw: "lange = long (time)" }
  ] }
];
BUILD[19] = [
  { tip: "With geben, schenken, zeigen…: the person who receives is <b>Dativ</b> (dem, der), the thing is <b>Akkusativ</b>. Ich schenke <b>der</b> Mutter <b>einen</b> Strauß.", steps: [
    { en: "I'm giving my mother a bouquet.", de: "Ich schenke meiner Mutter einen Strauß.", alt: ["Ich gebe meiner Mutter einen Strauß."], why: "The person gets the Dativ: meiner Mutter." },
    { en: "I'm giving my father a voucher.", de: "Ich schenke meinem Vater einen Gutschein.", alt: ["Ich gebe meinem Vater einen Gutschein."] },
    { en: "She's showing the guests the cake.", de: "Sie zeigt den Gästen die Torte.", why: "Dativ plural: den Gästen (with -n)." },
    { en: "Can you lend your brother the car? (du)", de: "Kannst du deinem Bruder das Auto leihen?" },
    { en: "We wish the hosts a nice evening.", de: "Wir wünschen den Gastgebern einen schönen Abend." },
    { en: "I'm bringing the host a bottle of sparkling wine.", de: "Ich bringe dem Gastgeber eine Flasche Sekt.", alt: ["Ich bringe der Gastgeberin eine Flasche Sekt."] }
  ] },
  { tip: "Dativ pronouns: <b>mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen</b>. helfen, danken, gratulieren, gefallen always take the Dativ.", steps: [
    { en: "Can you help me? (du)", de: "Kannst du mir helfen?" },
    { en: "I'm helping him.", de: "Ich helfe ihm." },
    { en: "I congratulate you on your birthday. (du)", de: "Ich gratuliere dir zum Geburtstag." },
    { en: "The present pleases her.", de: "Das Geschenk gefällt ihr.", alt: ["Ihr gefällt das Geschenk."] },
    { en: "We thank you for the invitation. (Sie)", de: "Wir danken Ihnen für die Einladung." },
    { en: "Does the cake taste good to you? (ihr)", de: "Schmeckt euch die Torte?", alt: ["Schmeckt euch der Kuchen?"] },
    { en: "I'm giving them a candle.", de: "Ich schenke ihnen eine Kerze." }
  ] },
  { tip: "Two nouns: <b>Dativ, then Akkusativ</b>. A pronoun comes before a noun. Two pronouns: <b>Akkusativ, then Dativ</b>: Ich gebe <b>sie ihm</b>.", steps: [
    { en: "I'm giving the boss the card.", de: "Ich gebe dem Chef die Karte." },
    { en: "I'm giving him the card.", de: "Ich gebe ihm die Karte.", why: "A pronoun comes before a noun: ihm die Karte." },
    { en: "I'm giving it to the boss.", de: "Ich gebe sie dem Chef.", why: "die Karte → sie, and the pronoun comes first." },
    { en: "I'm giving it to him.", de: "Ich gebe sie ihm.", why: "Two pronouns: Akkusativ (sie) before Dativ (ihm)." },
    { en: "Can you show me the photos? (du)", de: "Kannst du mir die Fotos zeigen?" },
    { en: "Can you show them to me? (du)", de: "Kannst du sie mir zeigen?" },
    { en: "I recommend this restaurant to you. (du)", de: "Ich empfehle dir dieses Restaurant." }
  ] }
];
BUILD[20] = [
  { tip: "A yes/no question inside a sentence uses <b>ob</b>, and the verb goes to the end: Weißt du, ob das WLAN <b>funktioniert</b>?", steps: [
    { en: "Is the Wi-Fi working?", de: "Funktioniert das WLAN?" },
    { en: "Do you know if the Wi-Fi is working? (du)", de: "Weißt du, ob das WLAN funktioniert?", why: "ob sends the verb to the end." },
    { en: "I don't know if he has a charger.", de: "Ich weiß nicht, ob er ein Ladekabel hat." },
    { en: "Can you tell me if the shop is open? (Sie)", de: "Können Sie mir sagen, ob der Laden geöffnet ist?", alt: ["Können Sie mir sagen, ob das Geschäft geöffnet ist?", "Können Sie mir sagen, ob der Laden offen ist?"], nw: "geöffnet / offen = open" },
    { en: "I'm wondering if I saved the file.", de: "Ich frage mich, ob ich die Datei gespeichert habe.", why: "Perfekt in an ob-clause: gespeichert habe at the end." },
    { en: "She asks if the app is free.", de: "Sie fragt, ob die App kostenlos ist.", nw: "kostenlos = free (of charge)" }
  ] },
  { tip: "Inside a sentence, the W-word stays at the start and the verb goes to the end: Ich weiß nicht, wo der Drucker <b>ist</b>.", steps: [
    { en: "Where is the printer?", de: "Wo ist der Drucker?" },
    { en: "Can you tell me where the printer is? (Sie)", de: "Können Sie mir sagen, wo der Drucker ist?" },
    { en: "I don't know how the app works.", de: "Ich weiß nicht, wie die App funktioniert." },
    { en: "Do you know when the course starts? (du)", de: "Weißt du, wann der Kurs anfängt?", alt: ["Weißt du, wann der Kurs beginnt?"], why: "anfangen stays together at the end: anfängt." },
    { en: "I forgot what my password is.", de: "Ich habe vergessen, was mein Passwort ist." },
    { en: "Tell me why the laptop is broken. (du)", de: "Sag mir, warum der Laptop kaputt ist.", alt: ["Sage mir, warum der Laptop kaputt ist."] }
  ] },
  { tip: "Many verbs come with a fixed preposition: <b>warten auf</b>, <b>sich interessieren für</b>, <b>sich kümmern um</b> (all + Akkusativ).", steps: [
    { en: "I'm waiting for the technician.", de: "Ich warte auf den Techniker.", nw: "der Techniker = technician" },
    { en: "I'm waiting for an email.", de: "Ich warte auf eine E-Mail." },
    { en: "She's interested in technology.", de: "Sie interessiert sich für Technik." },
    { en: "Are you interested in computers? (du)", de: "Interessierst du dich für Computer?" },
    { en: "Who's taking care of the problem?", de: "Wer kümmert sich um das Problem?" },
    { en: "I'll take care of it.", de: "Ich kümmere mich darum.", why: "um + it (a thing) = darum." },
    { en: "He asked about the password.", de: "Er hat nach dem Passwort gefragt.", why: "fragen nach takes the Dativ: nach dem Passwort." }
  ] }
];
BUILD[21] = [
  { tip: "In steps, the order word takes position 1, the verb stays 2nd: <b>Zuerst schneidet man</b> die Zwiebeln. <b>Dann brät man</b> sie.", steps: [
    { en: "First you cut the onions.", de: "Zuerst schneidet man die Zwiebeln.", why: "Zuerst first, then the verb, then man." },
    { en: "Then you fry them in oil.", de: "Dann brät man sie in Öl.", alt: ["Dann brät man sie im Öl."] },
    { en: "After that you add the garlic.", de: "Danach gibt man den Knoblauch dazu.", alt: ["Danach kommt der Knoblauch dazu."], nw: "dazugeben = to add" },
    { en: "Then I stir everything well.", de: "Dann rühre ich alles gut um." },
    { en: "Finally the cream goes in.", de: "Zum Schluss kommt die Sahne dazu.", alt: ["Zum Schluss kommt die Sahne hinein."] },
    { en: "First I peel the potatoes, then I cook them.", de: "Zuerst schäle ich die Kartoffeln, dann koche ich sie." }
  ] },
  { tip: "No article? The adjective takes the article's ending: der → frisch<b>er</b> Fisch, das → frisch<b>es</b> Brot, die → frisch<b>e</b> Milch.", steps: [
    { en: "Fresh fish is expensive.", de: "Frischer Fisch ist teuer." },
    { en: "I like fresh bread.", de: "Ich mag frisches Brot." },
    { en: "I eat spicy food.", de: "Ich esse scharfes Essen." },
    { en: "With cold milk, please.", de: "Mit kalter Milch, bitte.", why: "mit + Dativ, die → der → kalter." },
    { en: "I'll have a coffee with warm milk.", de: "Ich nehme einen Kaffee mit warmer Milch." },
    { en: "We need fresh vegetables and good oil.", de: "Wir brauchen frisches Gemüse und gutes Öl." }
  ] }
];
BUILD[22] = [
  { tip: "<b>nicht müssen</b> = don't have to. <b>nicht dürfen</b> = mustn't. <b>nicht brauchen zu</b> = needn't.", steps: [
    { en: "You must sign the form. (Sie)", de: "Sie müssen das Formular unterschreiben." },
    { en: "You don't have to make an appointment. (Sie)", de: "Sie müssen keinen Termin vereinbaren.", why: "don't have to = nicht müssen (here keinen)." },
    { en: "You mustn't park here. (Sie)", de: "Sie dürfen hier nicht parken.", why: "mustn't = nicht dürfen.", nw: "parken = to park" },
    { en: "You needn't bring your passport. (Sie)", de: "Sie brauchen Ihren Reisepass nicht mitzubringen.", alt: ["Sie müssen Ihren Reisepass nicht mitbringen.", "Sie brauchen den Reisepass nicht mitzubringen."], nw: "mitbringen = to bring along" },
    { en: "Do I have to pay a fee?", de: "Muss ich eine Gebühr bezahlen?" },
    { en: "No, you don't have to pay anything. (Sie)", de: "Nein, Sie müssen nichts bezahlen.", nw: "nichts = nothing" }
  ] },
  { tip: "Referring back to a thing with a preposition: <b>da(r) + preposition</b>: darauf, dafür, damit. Asking: <b>wo(r) + preposition</b>: worauf, wofür.", steps: [
    { en: "I'm waiting for the certificate.", de: "Ich warte auf die Bescheinigung." },
    { en: "I'm waiting for it.", de: "Ich warte darauf.", why: "auf + a thing = darauf." },
    { en: "What are you waiting for? (du)", de: "Worauf wartest du?" },
    { en: "What are you interested in? (du)", de: "Wofür interessierst du dich?" },
    { en: "I'm not interested in it.", de: "Ich interessiere mich nicht dafür." },
    { en: "What can I pay with?", de: "Womit kann ich bezahlen?" },
    { en: "Can I pay with it?", de: "Kann ich damit bezahlen?" }
  ] }
];
BUILD[23] = [
  { tip: "The future: <b>werden</b> in position 2, infinitive at the end: Ich <b>werde</b> mehr Fahrrad <b>fahren</b>.", steps: [
    { en: "I'll ride my bike more.", de: "Ich werde mehr Fahrrad fahren." },
    { en: "It will probably rain tomorrow.", de: "Morgen wird es wahrscheinlich regnen.", alt: ["Es wird morgen wahrscheinlich regnen."] },
    { en: "We will save energy.", de: "Wir werden Energie sparen." },
    { en: "You'll definitely manage it. (du)", de: "Du wirst das bestimmt schaffen.", alt: ["Du schaffst das bestimmt."], nw: "schaffen = to manage, bestimmt = definitely" },
    { en: "In the future we'll use less electricity.", de: "In Zukunft werden wir weniger Strom verbrauchen.", alt: ["In der Zukunft werden wir weniger Strom verbrauchen."] },
    { en: "Will the climate get warmer?", de: "Wird das Klima wärmer?", alt: ["Wird das Klima wärmer werden?"] }
  ] },
  { tip: "<b>deshalb</b> (so), <b>trotzdem</b> (anyway), <b>sonst</b> (otherwise) take position 1, so the verb comes next: …, <b>deshalb bleiben wir</b> zu Hause.", steps: [
    { en: "It's hot, so we're staying at home.", de: "Es ist heiß, deshalb bleiben wir zu Hause.", why: "deshalb takes position 1: deshalb bleiben wir." },
    { en: "It's raining. We're going for a walk anyway.", de: "Es regnet. Trotzdem gehen wir spazieren.", alt: ["Es regnet, trotzdem gehen wir spazieren."] },
    { en: "Separate the rubbish, otherwise it's bad for the environment. (du)", de: "Trenn den Müll, sonst ist es schlecht für die Umwelt.", alt: ["Trenne den Müll, sonst ist es schlecht für die Umwelt."] },
    { en: "The air is dirty, so I ride my bike.", de: "Die Luft ist schmutzig, deshalb fahre ich Fahrrad." },
    { en: "The train is expensive. I take it anyway.", de: "Der Zug ist teuer. Trotzdem nehme ich ihn.", alt: ["Der Zug ist teuer, trotzdem nehme ich ihn."] },
    { en: "We have to protect the forests, otherwise the animals will have no home.", de: "Wir müssen die Wälder schützen, sonst haben die Tiere kein Zuhause.", nw: "das Zuhause = home" }
  ] }
];
BUILD[24] = [
  { tip: "Wishes: <b>würde</b> + infinitive, or the short forms <b>hätte, wäre, könnte</b>. Ich <b>hätte</b> gern mehr Zeit.", steps: [
    { en: "I'd like to have more time.", de: "Ich hätte gern mehr Zeit." },
    { en: "That would be nice.", de: "Das wäre schön." },
    { en: "I would like to travel.", de: "Ich würde gern reisen." },
    { en: "I'd like to have more friends here.", de: "Ich hätte gern mehr Freunde hier." },
    { en: "It would be great if you could come. (du)", de: "Es wäre toll, wenn du kommen könntest.", nw: "toll = great" },
    { en: "Actually I'd rather stay at home.", de: "Eigentlich würde ich lieber zu Hause bleiben." }
  ] },
  { tip: "Polite requests: <b>Könntest du …?</b> <b>Würden Sie …?</b> <b>Hättest du …?</b>", steps: [
    { en: "Help me! (du)", de: "Hilf mir!" },
    { en: "Could you help me, please? (du)", de: "Könntest du mir bitte helfen?" },
    { en: "Would you speak more slowly, please? (Sie)", de: "Würden Sie bitte langsamer sprechen?", nw: "langsamer = more slowly" },
    { en: "Would you have time tomorrow? (du)", de: "Hättest du morgen Zeit?" },
    { en: "Could you call me back? (Sie)", de: "Könnten Sie mich zurückrufen?" },
    { en: "Would you be so kind and close the window? (Sie)", de: "Wären Sie so nett und würden das Fenster schließen?", alt: ["Wären Sie so nett, das Fenster zu schließen?", "Würden Sie bitte das Fenster schließen?"], nw: "schließen = to close" }
  ] },
  { tip: "<b>sich freuen auf</b> = look forward to (future). <b>sich freuen über</b> = be glad about (now/past). <b>sich ärgern über</b> = be annoyed about. All + Akkusativ.", steps: [
    { en: "I'm looking forward to the weekend.", de: "Ich freue mich auf das Wochenende.", alt: ["Ich freue mich aufs Wochenende."] },
    { en: "She's happy about the present.", de: "Sie freut sich über das Geschenk.", why: "The present is already here: freuen über." },
    { en: "I'm annoyed about the noise.", de: "Ich ärgere mich über den Lärm." },
    { en: "Are you looking forward to the holiday? (du)", de: "Freust du dich auf den Urlaub?" },
    { en: "We're glad about your visit. (du)", de: "Wir freuen uns über deinen Besuch.", nw: "der Besuch = visit" },
    { en: "What are you annoyed about? (du)", de: "Worüber ärgerst du dich?" },
    { en: "I'm looking forward to it.", de: "Ich freue mich darauf." }
  ] }
];
