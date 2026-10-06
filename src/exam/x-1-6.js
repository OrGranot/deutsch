// Level exam items, lessons 1-6, written for this app.
EXAM.push(
// ---------- Lesson 1 ----------
{ id: "L1-g1", lesson: 1, skill: "grammar", topic: "Present tense: heißen", type: "mc", q: "Du ___ Lena, und ich heiße Or.", opts: ["heißt", "heißst", "heiße", "heißen"], a: 0, why: "When the stem ends in ß, the du-form only adds -t: du heißt." },
{ id: "L1-g2", lesson: 1, skill: "grammar", topic: "sein (to be)", type: "mc", q: "Anna und Tom, ___ ihr aus Berlin?", opts: ["seid", "sind", "bist", "ist"], a: 0, why: "sein is irregular: ihr seid." },
{ id: "L1-g3", lesson: 1, skill: "grammar", topic: "W-questions", type: "mc", q: "___ kommt Herr Weber? – Aus Wien.", opts: ["Woher", "Wo", "Wer", "Wie"], a: 0, why: "Woher asks where someone comes from; the answer starts with aus." },
{ id: "L1-v1", lesson: 1, skill: "vocab", topic: "Countries, cities, languages", type: "mc", q: "Ich wohne in Tel Aviv. Tel Aviv ist eine ___.", opts: ["Stadt", "Sprache", "Adresse", "Zahl"], a: 0 },
{ id: "L1-w1", lesson: 1, skill: "writing", topic: "Present tense: sein and regular verbs", type: "gap", q: "Ich ___ Or und ___ aus Israel. (sein, kommen)", a: ["bin", "komme"], why: "ich bin (sein is irregular); regular verbs take -e for ich: ich komme." },
{ id: "L1-w2", lesson: 1, skill: "writing", topic: "W-questions with Sie", type: "tr", en: "Where do you come from, Mr. Weber?", hint: "formal you", de: "Woher kommen Sie, Herr Weber?", alt: ["Herr Weber, woher kommen Sie?", "Wo kommen Sie her, Herr Weber?", "Herr Weber, wo kommen Sie her?", "Woher sind Sie, Herr Weber?", "Herr Weber, woher sind Sie?"], why: "W-word first, verb second, then the subject: Woher kommen Sie?" },

// ---------- Lesson 2 ----------
{ id: "L2-g1", lesson: 2, skill: "grammar", topic: "haben", type: "mc", q: "Mein Bruder ___ zwei Kinder.", opts: ["hat", "habt", "hast", "haben"], a: 0, why: "haben is irregular: er/sie/es hat." },
{ id: "L2-g2", lesson: 2, skill: "grammar", topic: "Possessives mein/dein/Ihr", type: "mc", q: "Wie heißt ___ Schwester?", opts: ["deine", "dein", "deiner", "du"], a: 0, why: "Possessives take -e before feminine nouns: deine Schwester." },
{ id: "L2-g3", lesson: 2, skill: "grammar", topic: "Age with sein", type: "mc", q: "Meine Oma ___ achtzig Jahre alt.", opts: ["ist", "hat", "habe", "bin"], a: 0, why: "Age uses sein, not haben: Sie ist 80 Jahre alt." },
{ id: "L2-v1", lesson: 2, skill: "vocab", topic: "Family vocabulary", type: "mc", q: "Mein Vater und meine Mutter sind meine ___.", opts: ["Eltern", "Geschwister", "Großeltern", "Kinder"], a: 0 },
{ id: "L2-w1", lesson: 2, skill: "writing", topic: "Numbers to 100", type: "gap", q: "Mein Opa ist ___ Jahre alt. (67)", a: ["siebenundsechzig"], why: "21–99 are said unit + und + tens: sieben-und-sechzig (note: sechzig, not sechszig)." },
{ id: "L2-w2", lesson: 2, skill: "writing", topic: "Yes/no questions", type: "tr", en: "Does your sister have children?", de: "Hat deine Schwester Kinder?", alt: ["Hat Ihre Schwester Kinder?", "Hat eure Schwester Kinder?"], why: "Yes/no questions put the verb first; no word for \"does\"." },

// ---------- Lesson 3 ----------
{ id: "L3-g1", lesson: 3, skill: "grammar", topic: "Noun gender (der/die/das)", type: "mc", q: "___ Kühlschrank ist neu.", opts: ["Der", "Die", "Das"], a: 0, why: "In compounds the last part decides: der Schrank → der Kühlschrank." },
{ id: "L3-g2", lesson: 3, skill: "grammar", topic: "ein / kein", type: "mc", q: "Ist das ein Stuhl? – Nein, das ist ___ Stuhl, das ist ein Tisch.", opts: ["kein", "keine", "keinen", "nicht"], a: 0, why: "kein negates ein; masculine subject: kein Stuhl." },
{ id: "L3-g3", lesson: 3, skill: "grammar", topic: "Pronouns er/sie/es for things", type: "mc", q: "Wie ist das Sofa? – ___ ist neu und sehr schön.", opts: ["Es", "Er", "Sie", "Ihn"], a: 0, why: "A noun is replaced by the pronoun of its gender: das Sofa → es." },
{ id: "L3-v1", lesson: 3, skill: "vocab", topic: "Home vocabulary", type: "mc", q: "Die ___ für meine Wohnung ist 900 Euro im Monat.", opts: ["Miete", "Küche", "Tür", "Lampe"], a: 0 },
{ id: "L3-w1", lesson: 3, skill: "writing", topic: "Noun plurals", type: "gap", q: "Die Wohnung hat zwei ___. (das Bad)", a: ["Bäder"], why: "das Bad → die Bäder (umlaut + -er)." },
{ id: "L3-w2", lesson: 3, skill: "writing", topic: "Pronouns er/sie/es for things", type: "tr", en: "The lamp is cheap, but it is beautiful.", de: "Die Lampe ist billig, aber sie ist schön.", alt: ["Die Lampe ist billig, aber schön."], why: "die Lampe → sie, even for a thing." },

// ---------- Lesson 4 ----------
{ id: "L4-g1", lesson: 4, skill: "grammar", topic: "Accusative: einen", type: "mc", q: "Ich esse ___ Apfel.", opts: ["einen", "ein", "eine", "einem"], a: 0, why: "The thing you eat is the object (accusative); masculine ein → einen." },
{ id: "L4-g2", lesson: 4, skill: "grammar", topic: "essen (e → i)", type: "mc", q: "Meine Tochter ___ sehr gern Nudeln.", opts: ["isst", "esst", "esse", "essen"], a: 0, why: "essen changes e → i for du and er/sie/es: sie isst." },
{ id: "L4-g3", lesson: 4, skill: "grammar", topic: "mögen vs. möchten (ordering)", type: "mc", q: "Was möchten Sie? – Ich ___ einen Tee und ein Brötchen, bitte.", opts: ["möchte", "mag", "möchtest", "mögen"], a: 0, why: "To order, use möchten (would like): ich möchte. mögen means to like in general." },
{ id: "L4-v1", lesson: 4, skill: "vocab", topic: "Food and drink vocabulary", type: "mc", q: "Ich habe ___. Ich möchte ein Wasser, bitte.", opts: ["Durst", "Hunger", "Rechnung", "Frühstück"], a: 0 },
{ id: "L4-w1", lesson: 4, skill: "writing", topic: "mögen", type: "gap", q: "Du ___ gern Käse, oder? (mögen)", a: ["magst"], why: "mögen is irregular: ich mag, du magst, er mag." },
{ id: "L4-w2", lesson: 4, skill: "writing", topic: "Accusative: keinen", type: "tr", en: "My son doesn't like fish.", de: "Mein Sohn mag keinen Fisch.", alt: ["Mein Sohn mag Fisch nicht.", "Mein Sohn isst nicht gern Fisch.", "Mein Sohn isst Fisch nicht gern."], why: "der Fisch as object → keinen Fisch." },

// ---------- Lesson 5 ----------
{ id: "L5-g1", lesson: 5, skill: "grammar", topic: "Was kostet / Was kosten?", type: "mc", q: "Was ___ die zwei T-Shirts?", opts: ["kosten", "kostet", "koste", "kostest"], a: 0, why: "The verb agrees with the thing; plural T-Shirts → kosten." },
{ id: "L5-g2", lesson: 5, skill: "grammar", topic: "kein vs. nicht", type: "mc", q: "Das Hemd ist schön, aber ___ billig.", opts: ["nicht", "kein", "keine"], a: 0, why: "Adjectives are negated with nicht; kein only replaces ein or no article." },
{ id: "L5-g3", lesson: 5, skill: "grammar", topic: "Object pronouns ihn/sie/es", type: "mc", q: "Der Rock ist schön. Ich kaufe ___.", opts: ["ihn", "er", "sie", "es"], a: 0, why: "der Rock as object → ihn." },
{ id: "L5-v1", lesson: 5, skill: "vocab", topic: "Shopping vocabulary", type: "mc", q: "Ich bezahle an der ___.", opts: ["Kasse", "Flasche", "Größe", "Farbe"], a: 0 },
{ id: "L5-w1", lesson: 5, skill: "writing", topic: "kein vs. nicht", type: "gap", q: "Wir brauchen heute ___ Milch. (kein)", a: ["keine"], why: "No article before Milch → negate with kein; feminine die Milch → keine." },
{ id: "L5-w2", lesson: 5, skill: "writing", topic: "Object pronouns ihn/sie/es", type: "tr", en: "The shoes are not expensive. I'm buying them.", de: "Die Schuhe sind nicht teuer. Ich kaufe sie.", alt: ["Die Schuhe sind nicht teuer. Ich nehme sie.", "Die Schuhe sind nicht teuer, ich kaufe sie.", "Die Schuhe sind nicht teuer, ich nehme sie."], why: "Plural object → sie; adjective negated with nicht." },

// ---------- Lesson 6 ----------
{ id: "L6-g1", lesson: 6, skill: "grammar", topic: "Telling the time (halb)", type: "mc", q: "7:30 – Es ist ___ acht.", opts: ["halb", "Viertel vor", "Viertel nach"], a: 0, why: "halb counts towards the next hour: halb acht = 7:30." },
{ id: "L6-g2", lesson: 6, skill: "grammar", topic: "Verb in position 2", type: "mc", q: "Am Donnerstag ___ bis sechs Uhr.", opts: ["arbeite ich", "ich arbeite", "arbeiten ich", "ich arbeiten"], a: 0, why: "The verb is always second; if a time starts the sentence, the subject comes after the verb." },
{ id: "L6-g3", lesson: 6, skill: "grammar", topic: "Separable verbs", type: "mc", q: "Mein Mann ___ am Wochenende spät auf.", opts: ["steht", "aufsteht", "stehe", "stehst"], a: 0, why: "Separable verbs split: the verb goes to position 2, the prefix auf to the end." },
{ id: "L6-v1", lesson: 6, skill: "vocab", topic: "Time words (früh, spät, nie)", type: "mc", q: "Ich stehe nie früh auf. Ich stehe immer ___ auf.", opts: ["spät", "früh", "oft", "heute"], a: 0 },
{ id: "L6-w1", lesson: 6, skill: "writing", topic: "Separable verbs", type: "gap", q: "Am Abend ___ wir oft ___. (fernsehen)", a: ["sehen", "fern"], why: "fernsehen splits: sehen in position 2, fern at the end." },
{ id: "L6-w2", lesson: 6, skill: "writing", topic: "Separable verbs + verb position 2", type: "tr", en: "I call my mother on Sunday.", de: "Ich rufe am Sonntag meine Mutter an.", alt: ["Am Sonntag rufe ich meine Mutter an.", "Ich rufe meine Mutter am Sonntag an."], why: "anrufen splits: rufe in position 2, an at the end." },

// ---------- Reading ----------
{ id: "L2-r1", lesson: 2, skill: "reading", topic: "Reading: family", type: "mc", text: "Hallo! Ich heiße Mira und bin 29 Jahre alt. Ich komme aus Haifa, aber ich wohne jetzt in Köln. Ich habe einen Bruder. Er heißt Tom und ist 25. Meine Eltern wohnen noch in Haifa. Ich bin nicht verheiratet, aber ich habe einen Freund. Er heißt Jonas.", q: "Which statement about Mira is true?", opts: ["She is older than her brother.", "She is married.", "She lives in Haifa.", "Her boyfriend is called Tom."], a: 0 },
{ id: "L3-r1", lesson: 3, skill: "reading", topic: "Reading: flat ad", type: "mc", text: "Schöne Wohnung in Berlin: zwei Zimmer, Küche, Bad und Balkon. Das Wohnzimmer ist groß und sehr hell. Die Küche ist klein, aber neu. Einen Garten gibt es leider nicht. Die Miete ist 850 Euro. Telefonnummer: 0176 2234 5590.", q: "What does the flat NOT have?", opts: ["a garden", "a balcony", "a kitchen", "a bathroom"], a: 0 },
{ id: "L5-r1", lesson: 5, skill: "reading", topic: "Reading: shopping message", type: "mc", text: "Hallo Ben, ich bin im Supermarkt. Milch haben wir noch, aber wir haben kein Brot und keine Eier. Ich kaufe auch Äpfel, ein Kilo kostet nur 1,99 Euro! Brauchst du noch etwas? Ich bezahle mit Karte, ich habe kein Geld dabei. Bis gleich! Lea", q: "What do Lea and Ben not have at home?", opts: ["bread and eggs", "milk and bread", "milk and eggs"], a: 0 },
{ id: "L6-r1", lesson: 6, skill: "reading", topic: "Reading: daily routine", type: "mc", text: "Mein Tag: Ich stehe um sechs Uhr auf und dusche. Um halb sieben frühstücke ich, meistens ein Brötchen und einen Kaffee. Ich arbeite von acht bis vier Uhr. Am Nachmittag kaufe ich ein. Am Abend koche ich und sehe ein bisschen fern. Am Wochenende stehe ich nie früh auf!", q: "When does the writer have breakfast?", opts: ["at 6:30", "at 6:00", "at 7:30", "at 8:00"], a: 0 },

// ---------- Listening ----------
{ id: "L2-l1", lesson: 2, skill: "listening", topic: "Listening: age and family", type: "mc", audio: "Mein Bruder heißt David und ist dreißig Jahre alt.", q: "How old is David?", opts: ["30", "13", "3", "40"], a: 0 },
{ id: "L5-l1", lesson: 5, skill: "listening", topic: "Listening: clothes and colours", type: "mc", audio: "Ich trage eine schwarze Hose und ein weißes T-Shirt.", q: "What colour is the T-shirt?", opts: ["white", "black", "grey", "blue"], a: 0 },
{ id: "L6-l1", lesson: 6, skill: "listening", topic: "Listening: time", type: "mc", audio: "Ich stehe jeden Tag um halb sieben auf.", q: "When does the speaker get up every day?", opts: ["6:30", "7:30", "7:00", "6:15"], a: 0 },
{ id: "L4-l1", lesson: 4, skill: "listening", topic: "Listening: accusative when ordering", type: "dict", audio: "Ich möchte einen Kaffee und ein Stück Kuchen, bitte.", q: "Ich möchte ___ Kaffee und ein Stück Kuchen, bitte.", a: ["einen"] },
{ id: "L1-l1", lesson: 1, skill: "listening", topic: "Listening: present tense", type: "dict", audio: "Ich komme aus Israel und wohne in Tel Aviv.", q: "Ich komme aus Israel und ___ in Tel Aviv.", a: ["wohne"] }
);
