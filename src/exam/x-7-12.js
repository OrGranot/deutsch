// Level exam items, lessons 7-12, written for this app.
EXAM.push(
// ---------- Lesson 7: Freizeit ----------
{ id: "L7-g1", lesson: 7, skill: "grammar", topic: "Verbs with vowel change", type: "mc", q: "Mein Bruder ___ jeden Morgen im Park.", opts: ["läuft", "lauft", "laufen", "läufst"], a: 0, why: "laufen changes au → äu in the er/sie/es form: er läuft." },
{ id: "L7-g2", lesson: 7, skill: "grammar", topic: "gern, lieber, am liebsten", type: "mc", q: "Kaffee trinke ich gern, aber Tee trinke ich ___.", opts: ["lieber", "am lieber", "gerner", "mehr gern"], a: 0, why: "The comparative of gern is lieber (prefer)." },
{ id: "L7-g3", lesson: 7, skill: "grammar", topic: "können", type: "mc", q: "___ du Gitarre spielen?", opts: ["Kannst", "Kann", "Könnt", "Kannt"], a: 0, why: "können with du is kannst; the infinitive goes to the end." },
{ id: "L7-v1", lesson: 7, skill: "vocab", topic: "Hobbies and free time", type: "mc", q: "Am Samstag gehen wir ins ___ und sehen einen Film.", opts: ["Kino", "Konzert", "Buch", "Fahrrad"], a: 0 },
{ id: "L7-w1", lesson: 7, skill: "writing", topic: "Verbs with vowel change", type: "gap", q: "Am Samstag ___ Lena ihre Freundinnen. (treffen)", a: ["trifft"], why: "treffen changes e → i in the er/sie/es form: sie trifft." },
{ id: "L7-w2", lesson: 7, skill: "writing", topic: "gern + vowel-change verbs", type: "tr", en: "My sister likes reading books.", de: "Meine Schwester liest gern Bücher.", alt: ["Meine Schwester liest gerne Bücher.", "Bücher liest meine Schwester gern.", "Bücher liest meine Schwester gerne."], why: "lesen → sie liest; gern goes after the verb." },

// ---------- Lesson 8: In der Stadt ----------
{ id: "L8-g1", lesson: 8, skill: "grammar", topic: "Dative after mit", type: "mc", q: "Ich fahre jeden Tag mit ___ Straßenbahn.", opts: ["der", "die", "dem", "den"], a: 0, why: "mit takes the dative: die Straßenbahn → mit der Straßenbahn." },
{ id: "L8-g2", lesson: 8, skill: "grammar", topic: "Wo? / wohin? (im / ins)", type: "mc", q: "Heute Abend gehe ich ___ Kino.", opts: ["ins", "im", "in dem", "in"], a: 0, why: "Movement (wohin?) takes in + accusative: in das → ins Kino." },
{ id: "L8-g3", lesson: 8, skill: "grammar", topic: "Sie-imperative", type: "mc", q: "___ Sie bitte am Bahnhof um!", opts: ["Steigen", "Steigt", "Umsteigen", "Steig"], a: 0, why: "Sie-imperative: verb first, then Sie; the separable prefix (um) goes to the end." },
{ id: "L8-v1", lesson: 8, skill: "vocab", topic: "Directions and places", type: "mc", q: "Ich gehe nicht zu Fuß, der Flughafen ist zu ___.", opts: ["weit", "nah", "links", "geradeaus"], a: 0 },
{ id: "L8-w1", lesson: 8, skill: "writing", topic: "zum / zur", type: "gap", q: "Entschuldigung, wie komme ich ___ Post? (zu + die Post)", a: ["zur"], why: "zu + der (dative of die) contracts to zur." },
{ id: "L8-w2", lesson: 8, skill: "writing", topic: "Transport with mit + dative", type: "tr", en: "I'm taking the bus to the station.", de: "Ich fahre mit dem Bus zum Bahnhof.", alt: ["Ich fahre zum Bahnhof mit dem Bus.", "Ich nehme den Bus zum Bahnhof.", "Ich fahre mit dem Bus zu dem Bahnhof.", "Zum Bahnhof fahre ich mit dem Bus.", "Mit dem Bus fahre ich zum Bahnhof."], why: "mit dem Bus (dative), zum Bahnhof (zu + dem)." },

// ---------- Lesson 9: Arbeit ----------
{ id: "L9-g1", lesson: 9, skill: "grammar", topic: "Jobs: no article, -in form", type: "mc", q: "Meine Mutter ist ___.", opts: ["Ärztin", "eine Arzt", "Ärzte", "der Ärztin"], a: 0, why: "Jobs take no article, and the female form adds -in: Ärztin." },
{ id: "L9-g2", lesson: 9, skill: "grammar", topic: "müssen", type: "mc", q: "Du ___ morgen sehr früh aufstehen.", opts: ["musst", "muss", "müsst", "müssen"], a: 0, why: "müssen with du is musst (no umlaut in the singular)." },
{ id: "L9-g3", lesson: 9, skill: "grammar", topic: "wollen", type: "mc", q: "Mein Kollege ___ mehr Geld verdienen.", opts: ["will", "wollt", "willt", "wollen"], a: 0, why: "wollen with er/sie/es is will, with no ending." },
{ id: "L9-v1", lesson: 9, skill: "vocab", topic: "Work vocabulary", type: "mc", q: "Ich habe um zehn Uhr eine ___ mit meinem Chef.", opts: ["Besprechung", "Termin", "Computer", "Kollegin"], a: 0, why: "eine Besprechung = a meeting (der Termin would need einen)." },
{ id: "L9-w1", lesson: 9, skill: "writing", topic: "müssen", type: "gap", q: "Wann ___ ihr morgen im Büro sein? (müssen)", a: ["müsst"], why: "müssen with ihr is müsst." },
{ id: "L9-w2", lesson: 9, skill: "writing", topic: "Modal verb word order", type: "tr", en: "I have to write an email today.", de: "Ich muss heute eine E-Mail schreiben.", alt: ["Heute muss ich eine E-Mail schreiben."], why: "The modal is in position 2, the infinitive goes to the end." },

// ---------- Lesson 10: Gesundheit ----------
{ id: "L10-g1", lesson: 10, skill: "grammar", topic: "Saying what hurts (wehtun)", type: "mc", q: "Mir ___ die Augen weh.", opts: ["tun", "tut", "tue", "tust"], a: 0, why: "The subject is plural (die Augen), so the verb is tun: Mir tun die Augen weh." },
{ id: "L10-g2", lesson: 10, skill: "grammar", topic: "du-imperative", type: "mc", q: "___ das Medikament dreimal am Tag und trink viel Wasser!", opts: ["Nimm", "Nimmst", "Nehme", "Nehmen"], a: 0, why: "du-imperative: du nimmst minus -st → Nimm! (matches trink)." },
{ id: "L10-g3", lesson: 10, skill: "grammar", topic: "sollen", type: "mc", q: "Die Ärztin sagt, du ___ zwei Tage zu Hause bleiben.", opts: ["sollst", "soll", "sollt", "sollen"], a: 0, why: "sollen with du is sollst." },
{ id: "L10-v1", lesson: 10, skill: "vocab", topic: "Health vocabulary", type: "mc", q: "Mein Kind hat 39 Grad ___.", opts: ["Fieber", "Erkältung", "Schmerzen", "Medikament"], a: 0 },
{ id: "L10-w1", lesson: 10, skill: "writing", topic: "dürfen", type: "gap", q: "Du bist krank, du ___ heute nicht Fußball spielen. (dürfen)", a: ["darfst"], why: "dürfen with du is darfst." },
{ id: "L10-w2", lesson: 10, skill: "writing", topic: "Saying what hurts", type: "tr", en: "My back hurts.", de: "Mir tut der Rücken weh.", alt: ["Der Rücken tut mir weh.", "Mir tut mein Rücken weh.", "Mein Rücken tut mir weh.", "Mein Rücken tut weh.", "Ich habe Rückenschmerzen."], why: "Mir tut der Rücken weh: the body part is the subject, mir is dative." },

// ---------- Lesson 11: Reisen und Wetter ----------
{ id: "L11-g1", lesson: 11, skill: "grammar", topic: "Seasons with im", type: "mc", q: "___ Winter ist es in Berlin sehr kalt.", opts: ["Im", "In der", "Am", "Um"], a: 0, why: "Seasons and months take im: im Winter, im Mai." },
{ id: "L11-g2", lesson: 11, skill: "grammar", topic: "Participles without ge-", type: "mc", q: "Ich habe im Urlaub meine Tante ___.", opts: ["besucht", "gebesucht", "besuchen", "besuchte"], a: 0, why: "Verbs with be- take no ge- in the participle: besucht." },
{ id: "L11-g3", lesson: 11, skill: "grammar", topic: "Perfekt with haben (irregular)", type: "mc", q: "Hast du gestern Abend einen Film ___?", opts: ["gesehen", "gesieht", "gesehet", "sehen"], a: 0, why: "sehen is irregular: ge…en → gesehen." },
{ id: "L11-v1", lesson: 11, skill: "vocab", topic: "Travel vocabulary", type: "mc", q: "Ich habe schon alles in den ___ gepackt.", opts: ["Koffer", "Reisepass", "Berg", "Urlaub"], a: 0 },
{ id: "L11-w1", lesson: 11, skill: "writing", topic: "Perfekt with haben", type: "gap", q: "Am Sonntag ___ ich lange ___. (schlafen)", a: ["habe", "geschlafen"], why: "schlafen forms the Perfekt with haben: ich habe geschlafen." },
{ id: "L11-w2", lesson: 11, skill: "writing", topic: "Perfekt with haben", type: "tr", en: "Yesterday I bought a suitcase.", hint: "Perfekt", de: "Gestern habe ich einen Koffer gekauft.", alt: ["Ich habe gestern einen Koffer gekauft."], why: "haben in position 2, participle gekauft at the end." },

// ---------- Lesson 12: Feste und Termine ----------
{ id: "L12-g1", lesson: 12, skill: "grammar", topic: "Perfekt with sein", type: "mc", q: "Am Sonntag ___ wir nach Berlin geflogen.", opts: ["sind", "haben", "seid", "ist"], a: 0, why: "fliegen (movement from A to B) takes sein: wir sind geflogen." },
{ id: "L12-g2", lesson: 12, skill: "grammar", topic: "Dates and ordinal numbers", type: "mc", q: "Heute ist der ___ Juni.", opts: ["erste", "ersten", "einte", "eins"], a: 0, why: "After der (nominative) the ordinal ends in -e: der erste Juni." },
{ id: "L12-g3", lesson: 12, skill: "grammar", topic: "war and hatte", type: "mc", q: "Gestern ___ wir leider keine Zeit.", opts: ["hatten", "waren", "hattet", "hatte"], a: 0, why: "Zeit haben → simple past with wir: wir hatten." },
{ id: "L12-v1", lesson: 12, skill: "vocab", topic: "Celebrations vocabulary", type: "mc", q: "Zum Geburtstag ___ ich meiner Freundin Blumen.", opts: ["schenke", "feiere", "lade", "besuche"], a: 0 },
{ id: "L12-w1", lesson: 12, skill: "writing", topic: "Perfekt with sein", type: "gap", q: "Heute Morgen ___ ich um sechs Uhr ___. (aufstehen)", a: ["bin", "aufgestanden"], why: "aufstehen takes sein; separable: auf + ge + standen." },
{ id: "L12-w2", lesson: 12, skill: "writing", topic: "war (simple past of sein)", type: "tr", en: "Where were you on Saturday?", hint: "informal, one person", de: "Wo warst du am Samstag?", alt: ["Wo bist du am Samstag gewesen?"], why: "sein in the past with du: du warst." },

// ---------- Reading ----------
{ id: "L7-r1", lesson: 7, skill: "reading", topic: "Reading: free time plans", type: "mc",
  text: "Hallo Tom, hast du am Samstag Zeit? Am Nachmittag spiele ich mit Freunden Fußball im Park. Kommst du mit? Du spielst doch gern Fußball! Am Abend gehen wir dann zusammen ins Kino. Lisa kann leider nicht kommen, sie ist am Wochenende in Hamburg. Bis bald, Paul",
  q: "What is planned for Saturday evening?", opts: ["Going to the cinema together", "Playing football in the park", "Visiting Lisa in Hamburg", "A concert with Lisa"], a: 0 },
{ id: "L8-r1", lesson: 8, skill: "reading", topic: "Reading: directions", type: "mc",
  text: "Wie kommen Sie vom Bahnhof zum Hotel Sonne? Nehmen Sie am Bahnhof die Straßenbahn Nummer 4. Steigen Sie am Marktplatz aus. Gehen Sie dann geradeaus bis zur Ampel und dort links. Das Hotel ist neben der Kirche. Vom Marktplatz sind es nur fünf Minuten zu Fuß.",
  q: "Where do you get off the tram?", opts: ["At the market square", "At the station", "At the church", "At the hotel"], a: 0 },
{ id: "L10-r1", lesson: 10, skill: "reading", topic: "Reading: calling in sick", type: "mc",
  text: "Hallo Frau Weber, leider kann ich heute nicht ins Büro kommen. Ich bin krank: Ich habe Fieber und mir tut der Hals sehr weh. Die Ärztin sagt, ich soll drei Tage im Bett bleiben und viel Tee trinken. Ich darf nicht arbeiten. Am Donnerstag bin ich wieder im Büro. Viele Grüße, Max Klein",
  q: "What did the doctor tell Max?", opts: ["To stay in bed for three days", "To work from home", "To drink a lot of coffee", "To come to the office on Wednesday"], a: 0 },
{ id: "L12-r1", lesson: 12, skill: "reading", topic: "Reading: an invitation", type: "mc",
  text: "Liebe Anna, am 14. Juni habe ich Geburtstag und ich mache eine Party! Ich lade dich herzlich ein. Die Party ist am Samstag, 15. Juni, um 19 Uhr bei mir zu Hause. Du musst nichts mitbringen. Letztes Jahr warst du leider in Spanien, aber dieses Jahr kommst du hoffentlich! Bis bald, Lena",
  q: "When is the party?", opts: ["On Saturday, 15 June, at 7 p.m.", "On 14 June, Lena's birthday", "On Saturday, 15 June, at 9 p.m.", "On Sunday, 16 June, at 7 p.m."], a: 0 },

// ---------- Listening ----------
{ id: "L8-l1", lesson: 8, skill: "listening", topic: "Listening: directions", type: "mc", audio: "Gehen Sie geradeaus und dann an der Ampel links.", q: "What are the directions?", opts: ["Straight ahead, then left at the traffic lights", "Straight ahead, then right at the traffic lights", "Left at the traffic lights, then right", "Take the bus, then turn left"], a: 0 },
{ id: "L9-l1", lesson: 9, skill: "listening", topic: "Listening: workplace", type: "mc", audio: "Ich arbeite bei einer kleinen Firma in Tel Aviv.", q: "Where does the speaker work?", opts: ["At a small company in Tel Aviv", "At a big company in Tel Aviv", "At a small company in Berlin", "At a hospital in Tel Aviv"], a: 0 },
{ id: "L11-l1", lesson: 11, skill: "listening", topic: "Listening: past trips", type: "mc", audio: "Letztes Jahr habe ich meine Freunde in Wien besucht.", q: "What did the speaker do last year?", opts: ["Visited friends in Vienna", "Visited family in Vienna", "Visited friends in Berlin", "Booked a hotel in Vienna"], a: 0 },
{ id: "L10-l2", lesson: 10, skill: "listening", topic: "Dictation: wehtun", type: "dict", audio: "Ich habe Fieber und mir tut der Hals weh.", q: "Ich habe Fieber und mir ___ der Hals weh.", a: ["tut"] },
{ id: "L12-l1", lesson: 12, skill: "listening", topic: "Dictation: Perfekt with sein", type: "dict", audio: "Am Wochenende sind wir nach Hamburg gefahren.", q: "Am Wochenende ___ wir nach Hamburg gefahren.", a: ["sind"] }
);
