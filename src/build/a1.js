// "Bauen" chains for A1, written for this app (original sentences).
// BUILD[lesson][grammar index] = { tip, steps } or null when the topic has no chain.
// Each step: en (prompt), de (model answer, recorded), alt (other accepted answers),
// nw (a new word the prompt needs), why (the reason, shown when the answer is wrong).
// Chains grow: each step reuses the last one and adds a piece.
const BUILD = {};
BUILD[1] = [
  null,
  { tip: "A German verb changes its ending to match who does it: ich wohn<b>e</b>, du wohn<b>st</b>, sie wohn<b>t</b>, wir wohn<b>en</b>. Keep the front, swap the ending.", steps: [
    { en: "I live in Berlin.", de: "Ich wohne in Berlin." },
    { en: "You live in Berlin. (du)", de: "Du wohnst in Berlin." },
    { en: "She lives in Berlin too.", de: "Sie wohnt auch in Berlin.", alt: ["Sie wohnt in Berlin auch."], nw: "auch = also, too" },
    { en: "We come from Israel.", de: "Wir kommen aus Israel." },
    { en: "I'm from Israel and I speak Hebrew.", de: "Ich bin aus Israel und ich spreche Hebräisch.", alt: ["Ich bin aus Israel und spreche Hebräisch.", "Ich komme aus Israel und ich spreche Hebräisch.", "Ich komme aus Israel und spreche Hebräisch."] },
    { en: "You're Anna and you come from Berlin. (du)", de: "Du bist Anna und du kommst aus Berlin.", alt: ["Du bist Anna und kommst aus Berlin."], why: "sein is irregular: du bist." },
    { en: "She is called Anna and she speaks German and English.", de: "Sie heißt Anna und sie spricht Deutsch und Englisch.", alt: ["Sie heißt Anna und spricht Deutsch und Englisch."], why: "sprechen changes its vowel for er/sie: sie spricht." }
  ] },
  { tip: "With a question word, the verb comes right after it, then the person: <b>Wo wohnst du?</b>", steps: [
    { en: "Where do you live? (du)", de: "Wo wohnst du?" },
    { en: "Where does she live?", de: "Wo wohnt sie?" },
    { en: "Where are you from? (du)", de: "Woher kommst du?", why: "Where from = woher, one word." },
    { en: "What's your name? (du)", de: "Wie heißt du?", why: "German asks how you are called: Wie heißt du?" },
    { en: "What's your name? (Sie)", de: "Wie heißen Sie?" },
    { en: "Who is that?", de: "Wer ist das?" },
    { en: "Where do you come from, and where do you live now? (Sie)", de: "Woher kommen Sie und wo wohnen Sie jetzt?", nw: "jetzt = now" }
  ] }
];
BUILD[2] = [
  { tip: "haben = to have: ich ha<b>be</b>, du <b>hast</b>, er <b>hat</b>, wir haben. In du hast and er hat the b disappears.", steps: [
    { en: "I have two children.", de: "Ich habe zwei Kinder." },
    { en: "You have two sisters. (du)", de: "Du hast zwei Schwestern." },
    { en: "He has a son.", de: "Er hat einen Sohn.", nw: "a son (as the thing you have) = einen Sohn" },
    { en: "We have a daughter.", de: "Wir haben eine Tochter." },
    { en: "They have two children and they're young.", de: "Sie haben zwei Kinder und sie sind jung.", alt: ["Sie haben zwei Kinder und sind jung."] },
    { en: "I have a brother and a sister.", de: "Ich habe einen Bruder und eine Schwester." }
  ] },
  { tip: "mein = my, dein = your (du), Ihr = your (Sie). With die-words and plurals add <b>-e</b>: mein Vater, mein<b>e</b> Mutter, mein<b>e</b> Eltern.", steps: [
    { en: "This is my father.", de: "Das ist mein Vater." },
    { en: "This is my mother.", de: "Das ist meine Mutter.", why: "Mutter is a die-word, so meine." },
    { en: "These are my parents.", de: "Das sind meine Eltern.", why: "Plural: das sind, and meine." },
    { en: "Your brother is tall. (du)", de: "Dein Bruder ist groß." },
    { en: "Your daughter is young. (Sie)", de: "Ihre Tochter ist jung." },
    { en: "My friend (a woman) speaks German.", de: "Meine Freundin spricht Deutsch." },
    { en: "My sister is married and my brother is single.", de: "Meine Schwester ist verheiratet und mein Bruder ist ledig." }
  ] },
  { tip: "For a yes/no question, start with the verb: Du wohnst in Berlin → <b>Wohnst du</b> in Berlin?", steps: [
    { en: "Do you live in Berlin? (du)", de: "Wohnst du in Berlin?", why: "German has no 'do': the verb itself goes first." },
    { en: "Do you have children? (du)", de: "Hast du Kinder?" },
    { en: "Are you married? (du)", de: "Bist du verheiratet?" },
    { en: "Do you speak German? (Sie)", de: "Sprechen Sie Deutsch?" },
    { en: "Are you learning German? (du)", de: "Lernst du Deutsch?" },
    { en: "Is your brother married? (du)", de: "Ist dein Bruder verheiratet?" },
    { en: "Does your mother speak English? (du)", de: "Spricht deine Mutter Englisch?" }
  ] },
  null
];
BUILD[3] = [
  { tip: "Every noun is der, die or das. Learn the article with the word, and 'the' follows it: <b>der</b> Balkon, <b>die</b> Küche, <b>das</b> Zimmer.", steps: [
    { en: "The kitchen is small.", de: "Die Küche ist klein." },
    { en: "The room is bright.", de: "Das Zimmer ist hell." },
    { en: "The balcony is very nice.", de: "Der Balkon ist sehr schön." },
    { en: "The rent is very expensive.", de: "Die Miete ist sehr teuer." },
    { en: "The bed is here and the wardrobe is there.", de: "Das Bett ist hier und der Schrank ist dort." },
    { en: "The apartment is new, but the kitchen is old.", de: "Die Wohnung ist neu, aber die Küche ist alt." },
    { en: "The house is big, but the garden is small.", de: "Das Haus ist groß, aber der Garten ist klein." }
  ] },
  { tip: "ein/eine = a. kein/keine = no, not a. They follow the gender: der → ein, die → ein<b>e</b>, das → ein.", steps: [
    { en: "That's a lamp.", de: "Das ist eine Lampe." },
    { en: "That's not a lamp.", de: "Das ist keine Lampe.", why: "'not a' = kein, with -e for die-words." },
    { en: "That's a chair.", de: "Das ist ein Stuhl." },
    { en: "That's not a chair, that's a table.", de: "Das ist kein Stuhl, das ist ein Tisch." },
    { en: "Is that a sofa?", de: "Ist das ein Sofa?" },
    { en: "No, that's not a sofa, that's a bed.", de: "Nein, das ist kein Sofa, das ist ein Bett." },
    { en: "The apartment has a bathroom, but no kitchen.", de: "Die Wohnung hat ein Bad, aber keine Küche." }
  ] },
  { tip: "'It' follows the noun's gender: der Tisch → <b>er</b>, die Lampe → <b>sie</b>, das Bett → <b>es</b>. Plurals → <b>sie</b>.", steps: [
    { en: "Where is the table? It's here.", de: "Wo ist der Tisch? Er ist hier.", why: "der Tisch → er, even though it's a thing." },
    { en: "Where is the lamp? It's there.", de: "Wo ist die Lampe? Sie ist dort." },
    { en: "The bed is new. It's very nice.", de: "Das Bett ist neu. Es ist sehr schön." },
    { en: "The rooms are small.", de: "Die Zimmer sind klein." },
    { en: "The fridge is old, but it's big.", de: "Der Kühlschrank ist alt, aber er ist groß." },
    { en: "The chairs are new and they're cheap.", de: "Die Stühle sind neu und sie sind billig.", alt: ["Die Stühle sind neu und billig."] },
    { en: "The windows are big. They're very bright.", de: "Die Fenster sind groß. Sie sind sehr hell." }
  ] }
];
BUILD[4] = [
  { tip: "The thing you eat, drink or have is the object. Only der changes: der → <b>den</b>, ein → <b>einen</b>, kein → <b>keinen</b>.", steps: [
    { en: "I'll have a coffee.", de: "Ich nehme einen Kaffee.", why: "der Kaffee is the object here, so einen." },
    { en: "I'll have a coffee and a water.", de: "Ich nehme einen Kaffee und ein Wasser.", why: "das Wasser doesn't change: ein." },
    { en: "I'm not hungry. (I have no hunger.)", de: "Ich habe keinen Hunger." },
    { en: "I'm hungry, but I'm not thirsty.", de: "Ich habe Hunger, aber ich habe keinen Durst.", alt: ["Ich habe Hunger, aber keinen Durst."] },
    { en: "Are you cooking the fish? (du)", de: "Kochst du den Fisch?" },
    { en: "I'll take the cheese and the bread.", de: "Ich nehme den Käse und das Brot." },
    { en: "We don't have any rice, but we have potatoes.", de: "Wir haben keinen Reis, aber wir haben Kartoffeln.", alt: ["Wir haben keinen Reis, aber Kartoffeln."] }
  ] },
  { tip: "mögen = to like: ich <b>mag</b>, du <b>magst</b>. möchten = would like: ich <b>möchte</b>. A second verb goes to the end: Ich möchte Tee <b>trinken</b>.", steps: [
    { en: "I'd like a tea.", de: "Ich möchte einen Tee." },
    { en: "I'd like to drink a tea.", de: "Ich möchte einen Tee trinken.", why: "The second verb goes to the very end." },
    { en: "I like fish.", de: "Ich mag Fisch." },
    { en: "Do you like cheese? (du)", de: "Magst du Käse?" },
    { en: "He eats fish, but she eats meat.", de: "Er isst Fisch, aber sie isst Fleisch.", why: "essen changes: er isst, sie isst." },
    { en: "What would you like to eat? (du)", de: "Was möchtest du essen?" },
    { en: "I'd like to eat the cake now.", de: "Ich möchte jetzt den Kuchen essen.", alt: ["Ich möchte den Kuchen jetzt essen."] }
  ] },
  { tip: "In a café: <b>Ich möchte</b> … or <b>Ich nehme</b> …, add <b>bitte</b>, and finish with <b>Die Rechnung, bitte!</b>", steps: [
    { en: "A coffee, please.", de: "Einen Kaffee, bitte.", why: "You're ordering it, so it's the object: einen Kaffee." },
    { en: "I'd like a tea, please.", de: "Ich möchte einen Tee, bitte.", alt: ["Ich möchte bitte einen Tee."] },
    { en: "I'll have the fish.", de: "Ich nehme den Fisch." },
    { en: "Another water, please.", de: "Noch ein Wasser, bitte.", nw: "noch ein = another, one more" },
    { en: "What would you like? (Sie)", de: "Was möchten Sie?" },
    { en: "We'd like two beers, please.", de: "Wir möchten zwei Bier, bitte.", alt: ["Wir möchten bitte zwei Bier."] },
    { en: "I'll have a cake and a coffee, please.", de: "Ich nehme einen Kuchen und einen Kaffee, bitte.", alt: ["Ich möchte einen Kuchen und einen Kaffee, bitte.", "Ich nehme bitte einen Kuchen und einen Kaffee."] },
    { en: "The bill, please.", de: "Die Rechnung, bitte.", alt: ["Zahlen, bitte."] }
  ] }
];
BUILD[5] = [
  { tip: "The verb agrees with the thing: one thing <b>kostet</b>, more things <b>kosten</b>.", steps: [
    { en: "What does the jacket cost?", de: "Was kostet die Jacke?", alt: ["Wie viel kostet die Jacke?"] },
    { en: "What do the shoes cost?", de: "Was kosten die Schuhe?", alt: ["Wie viel kosten die Schuhe?"] },
    { en: "The jacket costs fifty euros.", de: "Die Jacke kostet fünfzig Euro.", why: "Euro has no plural in prices: fünfzig Euro." },
    { en: "The shoes cost a hundred euros.", de: "Die Schuhe kosten hundert Euro.", alt: ["Die Schuhe kosten einhundert Euro."] },
    { en: "The skirt is expensive, but the dress is cheap.", de: "Der Rock ist teuer, aber das Kleid ist billig." },
    { en: "What do the trousers cost?", de: "Was kostet die Hose?", alt: ["Wie viel kostet die Hose?"], why: "die Hose is one thing in German, so kostet." }
  ] },
  { tip: "<b>kein</b> replaces 'a' or no article: Ich brauche keine Jacke. <b>nicht</b> negates the rest, often near the end: Die Jacke ist nicht teuer.", steps: [
    { en: "The jacket isn't expensive.", de: "Die Jacke ist nicht teuer." },
    { en: "I don't need a jacket.", de: "Ich brauche keine Jacke.", why: "'not a' = kein, not nicht ein." },
    { en: "I don't need a sweater.", de: "Ich brauche keinen Pullover.", why: "der Pullover as the object: keinen." },
    { en: "We don't have any milk.", de: "Wir haben keine Milch." },
    { en: "I'm not buying the jacket.", de: "Ich kaufe die Jacke nicht.", why: "With 'the', use nicht, at the end." },
    { en: "The shoes aren't black, they're blue.", de: "Die Schuhe sind nicht schwarz, sie sind blau." },
    { en: "I don't need a shirt, but I need trousers.", de: "Ich brauche kein Hemd, aber ich brauche eine Hose.", alt: ["Ich brauche kein Hemd, aber eine Hose."] }
  ] },
  { tip: "When 'it' is the object: der → <b>ihn</b>, die → <b>sie</b>, das → <b>es</b>, plural → <b>sie</b>.", steps: [
    { en: "The sweater is nice. I'll take it.", de: "Der Pullover ist schön. Ich nehme ihn.", why: "der Pullover as the object → ihn." },
    { en: "The jacket is cheap. I'll buy it.", de: "Die Jacke ist billig. Ich kaufe sie." },
    { en: "The dress is red. I'll buy it.", de: "Das Kleid ist rot. Ich kaufe es." },
    { en: "The shoes? I need them.", de: "Die Schuhe? Ich brauche sie." },
    { en: "Where is the cheese? I'm looking for it.", de: "Wo ist der Käse? Ich suche ihn." },
    { en: "Do you need the shirt? (du)", de: "Brauchst du das Hemd?" },
    { en: "No, I don't need it.", de: "Nein, ich brauche es nicht." }
  ] }
];
BUILD[6] = [
  { tip: "<b>um</b> + a time (um acht Uhr), <b>am</b> + a day or part of the day (am Montag, am Abend), but <b>in der Nacht</b>. <b>halb</b> counts toward the next hour: halb acht = 7:30.", steps: [
    { en: "I work on Monday.", de: "Ich arbeite am Montag." },
    { en: "I have breakfast at seven o'clock.", de: "Ich frühstücke um sieben Uhr.", alt: ["Ich frühstücke um sieben."] },
    { en: "I work in the evening.", de: "Ich arbeite am Abend." },
    { en: "I have breakfast at half past seven.", de: "Ich frühstücke um halb acht.", why: "halb acht = half way to eight = 7:30." },
    { en: "I shower at a quarter to seven.", de: "Ich dusche um Viertel vor sieben." },
    { en: "I never work at night.", de: "Ich arbeite nie in der Nacht.", why: "am Abend, but in der Nacht." },
    { en: "I work on Monday at a quarter past eight.", de: "Ich arbeite am Montag um Viertel nach acht." }
  ] },
  { tip: "The verb is always the <b>second</b> element. Start with a time and the person jumps behind the verb: Heute <b>arbeite ich</b>.", steps: [
    { en: "I work today.", de: "Ich arbeite heute." },
    { en: "Today I work.", de: "Heute arbeite ich.", why: "Heute takes the first place, so the verb stays second and ich moves behind it." },
    { en: "On Monday I work.", de: "Am Montag arbeite ich." },
    { en: "In the evening I cook.", de: "Am Abend koche ich." },
    { en: "At seven o'clock I have breakfast.", de: "Um sieben Uhr frühstücke ich.", alt: ["Um sieben frühstücke ich."] },
    { en: "Tomorrow my brother is working.", de: "Morgen arbeitet mein Bruder." },
    { en: "At the weekend my parents often cook.", de: "Am Wochenende kochen meine Eltern oft.", alt: ["Am Wochenende kochen oft meine Eltern."] }
  ] },
  { tip: "Verbs like <b>auf</b>stehen split: the main part goes to position 2, the prefix flies to the end: Ich <b>stehe</b> um sieben <b>auf</b>.", steps: [
    { en: "I get up.", de: "Ich stehe auf." },
    { en: "I get up early.", de: "Ich stehe früh auf.", why: "auf goes to the very end." },
    { en: "I get up at seven.", de: "Ich stehe um sieben auf.", alt: ["Ich stehe um sieben Uhr auf."] },
    { en: "On Monday I get up at six.", de: "Am Montag stehe ich um sechs auf.", alt: ["Am Montag stehe ich um sechs Uhr auf."] },
    { en: "I'll call you. (du)", de: "Ich rufe dich an.", nw: "you (as the object) = dich" },
    { en: "Today I'm going shopping.", de: "Heute kaufe ich ein." },
    { en: "In the evening I watch TV.", de: "Am Abend sehe ich fern." },
    { en: "When do you get up? (du)", de: "Wann stehst du auf?", nw: "wann = when" }
  ] }
];
BUILD[7] = [
  { tip: "Some verbs change their vowel, but only for <b>du</b> and <b>er/sie</b>: ich lese → du l<b>ie</b>st; ich fahre → du f<b>ä</b>hrst; ich treffe → er tr<b>i</b>fft.", steps: [
    { en: "I read. You read. (du)", de: "Ich lese. Du liest." },
    { en: "She's reading a book.", de: "Sie liest ein Buch." },
    { en: "I'm going to Berlin.", de: "Ich fahre nach Berlin.", nw: "nach = to (a city or country)" },
    { en: "He's going to Berlin.", de: "Er fährt nach Berlin.", why: "fahren: er fährt." },
    { en: "Do you see the park? (du)", de: "Siehst du den Park?" },
    { en: "Are you meeting Anna today? (du)", de: "Triffst du heute Anna?", alt: ["Triffst du Anna heute?"] },
    { en: "My son is sleeping, but my daughter is reading.", de: "Mein Sohn schläft, aber meine Tochter liest." }
  ] },
  { tip: "Like doing something? Put <b>gern</b> after the verb: Ich lese gern. Prefer: <b>lieber</b>. Like most: <b>am liebsten</b>.", steps: [
    { en: "I like reading.", de: "Ich lese gern.", why: "German doesn't use 'like' here: you read gladly." },
    { en: "I like playing football.", de: "Ich spiele gern Fußball." },
    { en: "I prefer playing guitar.", de: "Ich spiele lieber Gitarre." },
    { en: "I like swimming best.", de: "Ich schwimme am liebsten." },
    { en: "I don't like dancing.", de: "Ich tanze nicht gern." },
    { en: "Do you like travelling? (du)", de: "Reist du gern?" },
    { en: "I like reading, but I prefer swimming.", de: "Ich lese gern, aber ich schwimme lieber." },
    { en: "What do you like doing most? (du)", de: "Was machst du am liebsten?" }
  ] },
  { tip: "können + a second verb, which goes to the very end: Ich <b>kann</b> gut <b>schwimmen</b>.", steps: [
    { en: "I can swim.", de: "Ich kann schwimmen." },
    { en: "I can swim well.", de: "Ich kann gut schwimmen.", why: "schwimmen goes to the very end." },
    { en: "Can you play guitar? (du)", de: "Kannst du Gitarre spielen?" },
    { en: "She can sing very well.", de: "Sie kann sehr gut singen." },
    { en: "We can play football together.", de: "Wir können zusammen Fußball spielen." },
    { en: "Today I can't come.", de: "Heute kann ich nicht kommen." },
    { en: "On Saturday we can go to the cinema together.", de: "Am Samstag können wir zusammen ins Kino gehen.", nw: "ins Kino = to the cinema" }
  ] }
];
BUILD[8] = [
  { tip: "After <b>mit, zu, in, bei, von, aus</b>: der/das → <b>dem</b>, die → <b>der</b>. Short forms: zu dem = <b>zum</b>, zu der = <b>zur</b>, in dem = <b>im</b>.", steps: [
    { en: "I'm going by bus.", de: "Ich fahre mit dem Bus.", why: "mit + der Bus → mit dem Bus." },
    { en: "I'm going by tram.", de: "Ich fahre mit der Straßenbahn.", why: "mit + die Straßenbahn → mit der Straßenbahn." },
    { en: "I'm going by car.", de: "Ich fahre mit dem Auto." },
    { en: "How do I get to the station?", de: "Wie komme ich zum Bahnhof?" },
    { en: "How do I get to the post office?", de: "Wie komme ich zur Post?", why: "die Post → zu der → zur." },
    { en: "I'm in the park.", de: "Ich bin im Park." },
    { en: "I'm going to the pharmacy by bus.", de: "Ich fahre mit dem Bus zur Apotheke." }
  ] },
  { tip: "Polite instructions: verb first, then <b>Sie</b>: <b>Gehen Sie</b> geradeaus.", steps: [
    { en: "Go straight ahead.", de: "Gehen Sie geradeaus." },
    { en: "Go left.", de: "Gehen Sie links.", alt: ["Gehen Sie nach links."] },
    { en: "Take the bus.", de: "Nehmen Sie den Bus." },
    { en: "Get off at the station.", de: "Steigen Sie am Bahnhof aus.", why: "aussteigen splits: Steigen Sie … aus." },
    { en: "Change at the station.", de: "Steigen Sie am Bahnhof um." },
    { en: "Go straight ahead, then right.", de: "Gehen Sie geradeaus und dann rechts.", alt: ["Gehen Sie geradeaus, dann rechts.", "Gehen Sie geradeaus und dann nach rechts."], nw: "dann = then" },
    { en: "Take the tram and get off at the hospital.", de: "Nehmen Sie die Straßenbahn und steigen Sie am Krankenhaus aus." }
  ] },
  { tip: "<b>Wo?</b> = where you are: Ich bin <b>im</b> Kino. <b>Wohin?</b> = where you're going: Ich gehe <b>ins</b> Kino.", steps: [
    { en: "Where are you? (du)", de: "Wo bist du?" },
    { en: "I'm at the cinema.", de: "Ich bin im Kino." },
    { en: "Where are you going? (du)", de: "Wohin gehst du?", why: "Going somewhere: wohin, not wo." },
    { en: "I'm going to the cinema.", de: "Ich gehe ins Kino.", why: "Movement: ins (in das), not im." },
    { en: "I'm going to the museum.", de: "Ich gehe ins Museum." },
    { en: "I'm in the museum.", de: "Ich bin im Museum." },
    { en: "Where are you going on Saturday? (du)", de: "Wohin gehst du am Samstag?" },
    { en: "On Saturday I'm going to the museum with my brother.", de: "Am Samstag gehe ich mit meinem Bruder ins Museum.", nw: "with my brother = mit meinem Bruder" }
  ] }
];
BUILD[9] = [
  { tip: "Say your job without 'a': Ich bin Lehrer. Women add <b>-in</b>: Lehrer<b>in</b>, Ärzt<b>in</b>.", steps: [
    { en: "I'm a teacher.", de: "Ich bin Lehrer.", alt: ["Ich bin Lehrerin."], why: "No 'a' with jobs: Ich bin Lehrer." },
    { en: "She's a doctor.", de: "Sie ist Ärztin." },
    { en: "He's an engineer.", de: "Er ist Ingenieur." },
    { en: "My mother is a teacher.", de: "Meine Mutter ist Lehrerin." },
    { en: "I work as an engineer.", de: "Ich arbeite als Ingenieur.", alt: ["Ich arbeite als Ingenieurin."], nw: "als = as" },
    { en: "My sister is a student and works in an office.", de: "Meine Schwester ist Studentin und arbeitet in einem Büro.", nw: "in an office = in einem Büro" },
    { en: "What do you do for a living? (Sie)", de: "Was sind Sie von Beruf?", alt: ["Was machen Sie beruflich?"], nw: "von Beruf = by profession" }
  ] },
  { tip: "<b>müssen</b> = have to, <b>wollen</b> = want to. Like können, the second verb goes to the end. No ending for ich and er: ich muss, er will.", steps: [
    { en: "I have to work.", de: "Ich muss arbeiten." },
    { en: "I have to work today.", de: "Ich muss heute arbeiten." },
    { en: "I want to sleep.", de: "Ich will schlafen." },
    { en: "Today I have to write an email.", de: "Heute muss ich eine E-Mail schreiben." },
    { en: "She wants to study in Berlin.", de: "Sie will in Berlin studieren." },
    { en: "Do you have to work tomorrow? (du)", de: "Musst du morgen arbeiten?" },
    { en: "I don't want to work on Sunday.", de: "Ich will am Sonntag nicht arbeiten." },
    { en: "Tomorrow I have to get up early.", de: "Morgen muss ich früh aufstehen.", why: "With a modal verb, aufstehen stays in one piece at the end." }
  ] }
];
BUILD[10] = [
  { tip: "<b>Ich habe Kopfschmerzen.</b> Or: <b>Mir tut</b> der Kopf <b>weh</b> (one thing), <b>Mir tun</b> die Füße <b>weh</b> (more).", steps: [
    { en: "I have a headache.", de: "Ich habe Kopfschmerzen." },
    { en: "I have a stomach ache.", de: "Ich habe Bauchschmerzen." },
    { en: "My back hurts.", de: "Mir tut der Rücken weh.", alt: ["Der Rücken tut mir weh.", "Mein Rücken tut mir weh.", "Mein Rücken tut weh."] },
    { en: "My feet hurt.", de: "Mir tun die Füße weh.", alt: ["Die Füße tun mir weh.", "Meine Füße tun mir weh.", "Meine Füße tun weh."], why: "Plural: tun, not tut." },
    { en: "I'm sick and I have a fever.", de: "Ich bin krank und ich habe Fieber.", alt: ["Ich bin krank und habe Fieber."] },
    { en: "What hurts? (du)", de: "Was tut dir weh?" },
    { en: "I'm tired and my head hurts.", de: "Ich bin müde und mir tut der Kopf weh.", alt: ["Ich bin müde und der Kopf tut mir weh.", "Ich bin müde und ich habe Kopfschmerzen.", "Ich bin müde und habe Kopfschmerzen."] }
  ] },
  { tip: "Telling a friend to do something: take the du-form and drop <b>-st</b> and du: du trinkst → <b>Trink!</b> For ihr, just drop ihr: <b>Trinkt!</b>", steps: [
    { en: "Drink water! (du)", de: "Trink Wasser!", alt: ["Trinke Wasser!"] },
    { en: "Stay in bed! (du)", de: "Bleib im Bett!", alt: ["Bleibe im Bett!"] },
    { en: "Take a tablet! (du)", de: "Nimm eine Tablette!", why: "du nimmst → Nimm!" },
    { en: "Stay at home! (ihr)", de: "Bleibt zu Hause!", nw: "zu Hause = at home" },
    { en: "Drink tea and stay in bed! (du)", de: "Trink Tee und bleib im Bett!", alt: ["Trinke Tee und bleibe im Bett!"] },
    { en: "Help me! (du)", de: "Hilf mir!", nw: "me (with helfen) = mir" },
    { en: "Don't smoke! (du)", de: "Rauch nicht!", alt: ["Rauche nicht!"] }
  ] },
  { tip: "<b>sollen</b> = should (someone says so), <b>dürfen</b> = may, be allowed. Second verb at the end. <b>Man darf nicht</b> = you're not allowed.", steps: [
    { en: "I should drink a lot of water.", de: "Ich soll viel Wasser trinken.", nw: "viel = a lot" },
    { en: "The doctor says I should stay in bed.", de: "Der Arzt sagt, ich soll im Bett bleiben.", nw: "sagt = says" },
    { en: "You should take a tablet. (du)", de: "Du sollst eine Tablette nehmen." },
    { en: "May I smoke here?", de: "Darf ich hier rauchen?" },
    { en: "You're not allowed to smoke here.", de: "Hier darf man nicht rauchen.", alt: ["Man darf hier nicht rauchen."], nw: "man = one, people in general" },
    { en: "I'm not allowed to eat meat.", de: "Ich darf kein Fleisch essen.", why: "No meat: kein Fleisch, not nicht." },
    { en: "Should I stay at home tomorrow?", de: "Soll ich morgen zu Hause bleiben?" }
  ] }
];
BUILD[11] = [
  { tip: "Weather uses <b>es</b>: Es regnet. Es ist kalt. And <b>im</b> with seasons and months: im Sommer, im Mai.", steps: [
    { en: "It's raining.", de: "Es regnet." },
    { en: "It's cold today.", de: "Heute ist es kalt.", alt: ["Es ist heute kalt."] },
    { en: "The sun is shining.", de: "Die Sonne scheint." },
    { en: "In summer it's hot.", de: "Im Sommer ist es heiß.", alt: ["Es ist im Sommer heiß."] },
    { en: "In winter it often snows.", de: "Im Winter schneit es oft.", alt: ["Es schneit im Winter oft."], nw: "schneien = to snow" },
    { en: "What's the weather like?", de: "Wie ist das Wetter?" },
    { en: "Today the sun is shining, but it's cold.", de: "Heute scheint die Sonne, aber es ist kalt." }
  ] },
  { tip: "For the past, spoken German uses <b>haben</b> in position 2 and the past participle at the very end: Ich <b>habe</b> Fisch <b>gegessen</b>.", steps: [
    { en: "I booked a ticket.", de: "Ich habe ein Ticket gebucht." },
    { en: "Yesterday I booked a ticket.", de: "Gestern habe ich ein Ticket gebucht." },
    { en: "I ate fish.", de: "Ich habe Fisch gegessen.", why: "gegessen goes to the very end." },
    { en: "Yesterday we ate fish.", de: "Gestern haben wir Fisch gegessen." },
    { en: "What did you do at the weekend? (du)", de: "Was hast du am Wochenende gemacht?" },
    { en: "I visited my parents.", de: "Ich habe meine Eltern besucht.", why: "besuchen gets no ge-: besucht." },
    { en: "Did you pack the suitcase? (du)", de: "Hast du den Koffer gepackt?" },
    { en: "At the weekend I visited my parents and read a book.", de: "Am Wochenende habe ich meine Eltern besucht und ein Buch gelesen." }
  ] }
];
BUILD[12] = [
  { tip: "Going from A to B uses <b>sein</b>, not haben: Ich <b>bin</b> nach Berlin <b>gefahren</b>. Also bleiben: ich bin geblieben.", steps: [
    { en: "I went to Berlin.", de: "Ich bin nach Berlin gefahren.", why: "fahren is movement, so sein: ich bin gefahren." },
    { en: "I flew to Berlin.", de: "Ich bin nach Berlin geflogen." },
    { en: "Yesterday I flew to Berlin.", de: "Gestern bin ich nach Berlin geflogen." },
    { en: "We stayed at home.", de: "Wir sind zu Hause geblieben." },
    { en: "I got up early.", de: "Ich bin früh aufgestanden." },
    { en: "Did you go to the cinema? (du)", de: "Bist du ins Kino gegangen?" },
    { en: "Yesterday I got up early and went to work.", de: "Gestern bin ich früh aufgestanden und zur Arbeit gegangen.", alt: ["Gestern bin ich früh aufgestanden und bin zur Arbeit gegangen."], nw: "zur Arbeit = to work" },
    { en: "At the weekend we flew to Berlin and visited my brother.", de: "Am Wochenende sind wir nach Berlin geflogen und haben meinen Bruder besucht.", why: "fliegen takes sein, besuchen takes haben." }
  ] },
  null,
  { tip: "For sein and haben, use the short past: ich <b>war</b>, du <b>warst</b>; ich <b>hatte</b>, du <b>hattest</b>.", steps: [
    { en: "I was at home.", de: "Ich war zu Hause." },
    { en: "Where were you yesterday? (du)", de: "Wo warst du gestern?" },
    { en: "I had no time.", de: "Ich hatte keine Zeit." },
    { en: "Yesterday I was ill.", de: "Gestern war ich krank." },
    { en: "We had a party.", de: "Wir hatten eine Party." },
    { en: "Were you at the party? (du)", de: "Warst du auf der Party?", nw: "auf der Party = at the party" },
    { en: "Yesterday I was tired and had no time.", de: "Gestern war ich müde und hatte keine Zeit.", alt: ["Gestern war ich müde und ich hatte keine Zeit."] },
    { en: "The party was nice and we had a lot of guests.", de: "Die Party war schön und wir hatten viele Gäste.", nw: "viele = many" }
  ] }
];
