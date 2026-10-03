// A1 course content, written for this app. Topics follow the Goethe-Zertifikat A1 /
// CEFR A1 topic areas (personal info, family, home, food, shopping, daily routine,
// free time, town, work, health, travel, celebrations).
//
// Vocab line format:  German (nouns with article) | plural | English | example = translation
// Plural: "Pl." = plural-only noun, "—" = no plural in normal use.

const LESSONS = [
{
  id: 1, title: "Hallo!", en: "Greetings & introductions",
  cando: ["Greet people and say goodbye", "Say your name, where you come from and where you live", "Ask others the same questions", "Count from 0 to 20"],
  vocab: `
Hallo | | hello | Hallo, ich bin Or. = Hi, I'm Or.
Guten Morgen | | good morning
Guten Tag | | hello (formal, daytime)
Guten Abend | | good evening
Gute Nacht | | good night
Tschüss | | bye (informal)
Auf Wiedersehen | | goodbye (formal)
Wie geht's? | | how are you? (informal) | Hallo Anna, wie geht's? = Hi Anna, how are you?
Freut mich | | nice to meet you
Danke | | thank you | Danke, gut! = Fine, thanks!
Bitte | | please / you're welcome
Entschuldigung | | excuse me / sorry
ja | | yes
nein | | no
gut | | good, well
heißen | | to be called | Ich heiße Or. = My name is Or.
sein | | to be | Ich bin aus Israel. = I'm from Israel.
kommen | | to come | Ich komme aus Tel Aviv. = I come from Tel Aviv.
wohnen | | to live (reside) | Ich wohne in Berlin. = I live in Berlin.
sprechen | | to speak | Ich spreche Englisch und Hebräisch. = I speak English and Hebrew.
der Name | Namen | name | Mein Name ist Or. = My name is Or.
der Vorname | Vornamen | first name
der Familienname | Familiennamen | surname
das Land | Länder | country | Aus welchem Land kommst du? = Which country are you from?
die Stadt | Städte | city, town
die Sprache | Sprachen | language
der Herr | Herren | Mr., gentleman | Guten Tag, Herr Weber! = Hello, Mr. Weber!
die Frau | Frauen | Mrs., Ms., woman | Guten Abend, Frau Klein! = Good evening, Ms. Klein!
die Adresse | Adressen | address
die Telefonnummer | Telefonnummern | phone number | Wie ist deine Telefonnummer? = What's your phone number?
die Zahl | Zahlen | number
wer | | who | Wer ist das? = Who is that?
wie | | how | Wie heißt du? = What's your name?
woher | | where from | Woher kommst du? = Where are you from?
wo | | where | Wo wohnst du? = Where do you live?
was | | what | Was ist das? = What is that?
und | | and
null | | zero
eins | | one
zwei | | two
drei | | three
vier | | four
fünf | | five
sechs | | six
sieben | | seven
acht | | eight
neun | | nine
zehn | | ten
elf | | eleven
zwölf | | twelve
zwanzig | | twenty
`,
  grammar: [
    { t: "Pronunciation basics", html: `
<p>German is spelled almost exactly as it sounds. Learn these few rules and you can read any word aloud.</p>
<table><tr><th>Letters</th><th>Sound</th><th>Example</th></tr>
<tr><td>ä / ö / ü</td><td>"eh" / round-lipped "e" / round-lipped "i"</td><td>M<b>ä</b>dchen, sch<b>ö</b>n, f<b>ü</b>nf</td></tr>
<tr><td>ei</td><td>like English "eye"</td><td>dr<b>ei</b>, h<b>ei</b>ßen</td></tr>
<tr><td>ie</td><td>like English "ee"</td><td>v<b>ie</b>r, S<b>ie</b></td></tr>
<tr><td>eu / äu</td><td>like "oy"</td><td>n<b>eu</b>n, Fr<b>eu</b>nd</td></tr>
<tr><td>w</td><td>like English "v"</td><td><b>w</b>ie, <b>W</b>asser</td></tr>
<tr><td>v</td><td>usually like "f"</td><td><b>V</b>ater, <b>v</b>ier</td></tr>
<tr><td>z</td><td>like "ts"</td><td><b>z</b>wei, <b>Z</b>ahl</td></tr>
<tr><td>sch / sp / st</td><td>"sh" / "shp" / "sht" at the start</td><td><b>sch</b>ön, <b>Sp</b>rache, <b>St</b>adt</td></tr>
<tr><td>ch</td><td>soft hiss after e/i, throaty after a/o/u</td><td>i<b>ch</b>, a<b>ch</b>t</td></tr>
<tr><td>ß</td><td>sharp "s"</td><td>hei<b>ß</b>en</td></tr>
</table>
<p class="tip">Tap any word in the vocabulary list to hear it, then repeat it out loud.</p>` },
    { t: "Verbs in the present tense", html: `
<p>Regular verbs drop <b>-en</b> from the infinitive and add an ending that matches the person.</p>
<table><tr><th></th><th>wohnen</th><th>kommen</th><th>heißen</th></tr>
<tr><td>ich</td><td>wohn<b>e</b></td><td>komm<b>e</b></td><td>heiß<b>e</b></td></tr>
<tr><td>du</td><td>wohn<b>st</b></td><td>komm<b>st</b></td><td>heiß<b>t</b> *</td></tr>
<tr><td>er / sie / es</td><td>wohn<b>t</b></td><td>komm<b>t</b></td><td>heiß<b>t</b></td></tr>
<tr><td>wir</td><td>wohn<b>en</b></td><td>komm<b>en</b></td><td>heiß<b>en</b></td></tr>
<tr><td>ihr</td><td>wohn<b>t</b></td><td>komm<b>t</b></td><td>heiß<b>t</b></td></tr>
<tr><td>sie / Sie</td><td>wohn<b>en</b></td><td>komm<b>en</b></td><td>heiß<b>en</b></td></tr></table>
<p>* When the stem ends in s, ß or z, the du-form only adds <b>-t</b>.</p>
<p><b>sein</b> (to be) is irregular: ich <b>bin</b>, du <b>bist</b>, er/sie/es <b>ist</b>, wir <b>sind</b>, ihr <b>seid</b>, sie/Sie <b>sind</b>.</p>
<p class="tip"><b>du</b> is for friends, family and kids. <b>Sie</b> (capital S) is the polite "you" for strangers, officials and at work. Sie takes the same form as "they": Wie heißen Sie?</p>` },
    { t: "W-questions", html: `
<p>Question word first, verb second, then the subject.</p>
<table><tr><th>W-word</th><th>Verb</th><th>Subject</th><th></th></tr>
<tr><td>Wie</td><td>heißt</td><td>du?</td><td>What's your name?</td></tr>
<tr><td>Woher</td><td>kommen</td><td>Sie?</td><td>Where are you from?</td></tr>
<tr><td>Wo</td><td>wohnst</td><td>du?</td><td>Where do you live?</td></tr>
<tr><td>Was</td><td>sprichst</td><td>du?</td><td>What do you speak?</td></tr></table>
<p>Answer with the same verb: <i>Woher kommst du?</i> → <i>Ich komme aus Israel.</i></p>` }
  ],
  ex: [
    { type: "gap", q: "Ich ___ Or. (heißen)", a: ["heiße"] },
    { type: "gap", q: "Woher ___ du? (kommen)", a: ["kommst"] },
    { type: "gap", q: "Wir ___ in Berlin. (wohnen)", a: ["wohnen"] },
    { type: "mc", q: "Er ___ aus Spanien.", opts: ["kommt", "kommst", "komme"], a: 0 },
    { type: "mc", q: "___ heißen Sie?", opts: ["Wie", "Wo", "Woher"], a: 0 },
    { type: "mc", q: "Wir ___ aus Israel.", opts: ["sind", "seid", "ist"], a: 0 },
    { type: "mc", q: "You meet your new manager. You ask:", opts: ["Wie heißt du?", "Wie heißen Sie?", "Wer heißt du?"], a: 1, why: "Use the polite Sie with people you don't know well, especially at work." },
    { type: "order", words: ["kommst", "Woher", "du"], a: "Woher kommst du" },
    { type: "order", words: ["wohne", "in", "Ich", "Tel Aviv"], a: "Ich wohne in Tel Aviv" }
  ],
  speak: [
    { q: "Wie heißt du?", en: "What's your name?", accept: ["heiße", "name ist", "ich bin"], model: ["Ich heiße Or.", "Mein Name ist Or."] },
    { q: "Woher kommst du?", en: "Where are you from?", accept: ["komme aus", "bin aus"], model: ["Ich komme aus Israel."] },
    { q: "Wo wohnst du?", en: "Where do you live?", accept: ["wohne"], model: ["Ich wohne in Tel Aviv."] },
    { q: "Welche Sprachen sprichst du?", en: "Which languages do you speak?", accept: ["spreche"], model: ["Ich spreche Hebräisch, Englisch und ein bisschen Deutsch."] },
    { q: "Wie geht's?", en: "How are you?", accept: ["gut", "super", "schlecht", "es geht", "danke"], model: ["Danke, gut! Und dir?", "Es geht."] }
  ],
  shadow: ["Guten Tag, ich heiße Or.", "Ich komme aus Israel und wohne in Tel Aviv.", "Freut mich!", "Wie geht es Ihnen?", "Danke, gut. Und dir?", "Entschuldigung, wie heißen Sie?"]
},
{
  id: 2, title: "Familie", en: "Family, age & numbers to 100",
  cando: ["Talk about your family", "Say how old you are", "Ask yes/no questions", "Count to 100"],
  vocab: `
die Familie | Familien | family | Meine Familie ist groß. = My family is big.
die Mutter | Mütter | mother
der Vater | Väter | father
die Eltern | Pl. | parents | Meine Eltern wohnen in Haifa. = My parents live in Haifa.
der Bruder | Brüder | brother
die Schwester | Schwestern | sister
die Geschwister | Pl. | siblings | Hast du Geschwister? = Do you have siblings?
der Sohn | Söhne | son
die Tochter | Töchter | daughter
das Kind | Kinder | child
das Baby | Babys | baby
der Mann | Männer | man, husband
die Oma | Omas | grandma
der Opa | Opas | grandpa
die Großeltern | Pl. | grandparents
der Freund | Freunde | friend (m), boyfriend
die Freundin | Freundinnen | friend (f), girlfriend
das Jahr | Jahre | year | Ich bin 34 Jahre alt. = I'm 34 years old.
haben | | to have | Ich habe zwei Brüder. = I have two brothers.
lernen | | to learn | Ich lerne Deutsch. = I'm learning German.
alt | | old | Wie alt bist du? = How old are you?
jung | | young
groß | | big, tall
klein | | small, short
verheiratet | | married
ledig | | single
Deutsch | | German (language)
Englisch | | English (language)
Hebräisch | | Hebrew (language)
dreißig | | thirty
vierzig | | forty
fünfzig | | fifty
hundert | | hundred
`,
  grammar: [
    { t: "haben (to have)", html: `
<table><tr><th></th><th>haben</th></tr>
<tr><td>ich</td><td>habe</td></tr><tr><td>du</td><td><b>hast</b></td></tr><tr><td>er / sie / es</td><td><b>hat</b></td></tr>
<tr><td>wir</td><td>haben</td></tr><tr><td>ihr</td><td>habt</td></tr><tr><td>sie / Sie</td><td>haben</td></tr></table>
<p class="tip">Age uses <b>sein</b>, not haben: <i>Ich <b>bin</b> 34 (Jahre alt).</i></p>` },
    { t: "mein, dein, Ihr", html: `
<p>Possessives take an <b>-e</b> before feminine and plural nouns.</p>
<table><tr><th></th><th>der / das</th><th>die / plural</th></tr>
<tr><td>my</td><td>mein Vater, mein Kind</td><td>mein<b>e</b> Mutter, mein<b>e</b> Eltern</td></tr>
<tr><td>your (du)</td><td>dein Bruder</td><td>dein<b>e</b> Schwester</td></tr>
<tr><td>your (Sie)</td><td>Ihr Sohn</td><td>Ihr<b>e</b> Tochter</td></tr>
<tr><td>his</td><td>sein Opa</td><td>sein<b>e</b> Oma</td></tr>
<tr><td>her</td><td>ihr Mann</td><td>ihr<b>e</b> Familie</td></tr></table>` },
    { t: "Yes/no questions", html: `
<p>Put the verb first. No question word, no "do".</p>
<p><i><b>Hast</b> du Geschwister?</i> → <i>Ja, ich habe einen Bruder.</i> / <i>Nein, ich habe keine Geschwister.</i></p>
<p><i><b>Bist</b> du verheiratet?</i> → <i>Nein, ich bin ledig.</i></p>` },
    { t: "Numbers to 100", html: `
<p>13–19: number + <b>zehn</b>: dreizehn, vierzehn, fünfzehn, <b>sech</b>zehn, <b>sieb</b>zehn, achtzehn, neunzehn.</p>
<p>Tens: zwanzig, drei<b>ß</b>ig, vierzig, fünfzig, <b>sech</b>zig, <b>sieb</b>zig, achtzig, neunzig, hundert.</p>
<p>21–99 are said <b>backwards</b>: unit + und + tens. <i>21 = einundzwanzig</i> ("one-and-twenty"), <i>34 = vierunddreißig</i>, <i>99 = neunundneunzig</i>.</p>` }
  ],
  ex: [
    { type: "gap", q: "Ich ___ zwei Brüder. (haben)", a: ["habe"] },
    { type: "gap", q: "___ du Kinder? (haben)", a: ["Hast"] },
    { type: "gap", q: "Meine Schwester ___ in Haifa. (wohnen)", a: ["wohnt"] },
    { type: "mc", q: "Das ist ___ Mutter.", opts: ["mein", "meine"], a: 1 },
    { type: "mc", q: "Das ist ___ Vater.", opts: ["mein", "meine"], a: 0 },
    { type: "mc", q: "21 =", opts: ["zwanzigeins", "einundzwanzig", "zweiundzwanzig"], a: 1 },
    { type: "mc", q: "Er ___ 30 Jahre alt.", opts: ["hat", "ist", "sind"], a: 1, why: "German uses sein for age." },
    { type: "order", words: ["du", "Hast", "Geschwister"], a: "Hast du Geschwister" }
  ],
  speak: [
    { q: "Hast du Geschwister?", en: "Do you have siblings?", accept: ["habe", "keine", "bruder", "schwester", "geschwister"], model: ["Ja, ich habe einen Bruder und eine Schwester.", "Nein, ich habe keine Geschwister."] },
    { q: "Wie alt bist du?", en: "How old are you?", accept: ["bin", "jahre"], model: ["Ich bin 34 Jahre alt."] },
    { q: "Bist du verheiratet?", en: "Are you married?", accept: ["verheiratet", "ledig", "freund", "freundin", "ja", "nein"], model: ["Nein, ich bin ledig.", "Ja, ich bin verheiratet."] },
    { q: "Wo wohnen deine Eltern?", en: "Where do your parents live?", accept: ["wohnen", "eltern"], model: ["Meine Eltern wohnen in Haifa."] },
    { q: "Erzähl mal von deiner Familie.", en: "Tell me about your family.", accept: ["mein", "meine", "habe"], model: ["Meine Familie ist groß. Ich habe zwei Schwestern. Meine Mutter heißt Dana."] }
  ],
  shadow: ["Das ist meine Familie.", "Mein Bruder heißt David und ist dreißig Jahre alt.", "Hast du Kinder?", "Meine Eltern wohnen in Haifa.", "Ich habe eine Schwester und zwei Brüder.", "Ich lerne seit drei Monaten Deutsch."]
},
{
  id: 3, title: "Wohnen", en: "Home, rooms & furniture",
  cando: ["Describe your flat and rooms", "Name furniture with the right article", "Use ein / kein", "Replace nouns with er / sie / es"],
  vocab: `
die Wohnung | Wohnungen | apartment, flat | Meine Wohnung ist klein. = My flat is small.
das Haus | Häuser | house
das Zimmer | Zimmer | room | Die Wohnung hat drei Zimmer. = The flat has three rooms.
die Küche | Küchen | kitchen
das Bad | Bäder | bathroom
das Schlafzimmer | Schlafzimmer | bedroom
das Wohnzimmer | Wohnzimmer | living room
der Balkon | Balkone | balcony
der Garten | Gärten | garden
der Tisch | Tische | table
der Stuhl | Stühle | chair
das Bett | Betten | bed
der Schrank | Schränke | cupboard, wardrobe
das Sofa | Sofas | sofa
die Lampe | Lampen | lamp
das Fenster | Fenster | window
die Tür | Türen | door
der Kühlschrank | Kühlschränke | fridge
die Miete | Mieten | rent | Die Miete ist zu teuer. = The rent is too expensive.
hell | | bright
dunkel | | dark
schön | | beautiful, nice
teuer | | expensive
billig | | cheap
neu | | new
hier | | here
dort | | there
sehr | | very
aber | | but | Die Küche ist klein, aber hell. = The kitchen is small but bright.
`,
  grammar: [
    { t: "der, die, das", html: `
<p>Every German noun has a gender: masculine <span class="g-der">der</span>, feminine <span class="g-die">die</span> or neuter <span class="g-das">das</span>. It often has nothing to do with meaning, so <b>always learn the article with the noun</b>. The flashcards in this app drill exactly that.</p>
<p>Helpful patterns (not 100%, but they save you a lot):</p>
<table><tr><th>Ending / group</th><th>Usually</th><th>Examples</th></tr>
<tr><td>-ung, -heit, -keit, -ion, -schaft</td><td><span class="g-die">die</span></td><td>die Wohnung, die Rechnung</td></tr>
<tr><td>most nouns ending in -e</td><td><span class="g-die">die</span></td><td>die Küche, die Lampe</td></tr>
<tr><td>-chen, -lein</td><td><span class="g-das">das</span></td><td>das Brötchen, das Mädchen</td></tr>
<tr><td>days, months, seasons</td><td><span class="g-der">der</span></td><td>der Montag, der Mai, der Winter</td></tr>
<tr><td>male people and jobs</td><td><span class="g-der">der</span></td><td>der Vater, der Lehrer</td></tr></table>
<p>In compound nouns the <b>last</b> part decides: das Zimmer → das <b>Schlaf</b>zimmer; der Schrank → der <b>Kühl</b>schrank.</p>` },
    { t: "ein / eine and kein / keine", html: `
<table><tr><th></th><th>der</th><th>die</th><th>das</th><th>plural</th></tr>
<tr><td>a</td><td>ein Tisch</td><td>ein<b>e</b> Lampe</td><td>ein Bett</td><td>– Stühle</td></tr>
<tr><td>no / not a</td><td>kein Tisch</td><td>kein<b>e</b> Lampe</td><td>kein Bett</td><td>kein<b>e</b> Stühle</td></tr></table>
<p><i>Ist das ein Sofa? Nein, das ist <b>kein</b> Sofa, das ist ein Bett.</i></p>` },
    { t: "Plural and er / sie / es", html: `
<p>All plurals take <b>die</b>. The endings vary, so learn them with the word: -e (Tische), -en/-n (Türen, Lampen), -er (Häuser), umlaut (Gärten), -s (Sofas) or no change (Zimmer).</p>
<p>A noun is replaced by the pronoun of its gender, even for things:</p>
<p><i>Der Tisch ist neu. → <b>Er</b> ist schön.</i> · <i>Die Lampe ist alt. → <b>Sie</b> ist billig.</i> · <i>Das Bett ist groß. → <b>Es</b> ist bequem.</i></p>` }
  ],
  ex: [
    { type: "mc", q: "___ Küche ist groß.", opts: ["Der", "Die", "Das"], a: 1 },
    { type: "mc", q: "___ Zimmer ist hell.", opts: ["Der", "Die", "Das"], a: 2 },
    { type: "mc", q: "___ Stuhl ist neu.", opts: ["Der", "Die", "Das"], a: 0 },
    { type: "mc", q: "Das ist ___ Lampe.", opts: ["ein", "eine"], a: 1 },
    { type: "mc", q: "Ist das ein Sofa? Nein, das ist ___ Sofa.", opts: ["kein", "keine", "nicht"], a: 0 },
    { type: "mc", q: "Plural of das Zimmer:", opts: ["die Zimmer", "die Zimmern", "die Zimmers"], a: 0 },
    { type: "mc", q: "Die Wohnung ist neu. ___ ist sehr schön.", opts: ["Er", "Sie", "Es"], a: 1 },
    { type: "gap", q: "Der Schrank ist alt, aber ___ ist schön.", a: ["er"] }
  ],
  speak: [
    { q: "Wohnst du in einer Wohnung oder in einem Haus?", en: "Do you live in a flat or a house?", accept: ["wohnung", "haus", "wohne"], model: ["Ich wohne in einer Wohnung."] },
    { q: "Wie viele Zimmer hat deine Wohnung?", en: "How many rooms does your flat have?", accept: ["zimmer", "hat"], model: ["Meine Wohnung hat drei Zimmer."] },
    { q: "Wie ist deine Küche?", en: "What's your kitchen like?", accept: ["küche", "groß", "klein", "hell", "dunkel", "schön", "neu", "alt"], model: ["Meine Küche ist klein, aber hell."] },
    { q: "Was ist in deinem Zimmer?", en: "What's in your room?", accept: ["bett", "tisch", "schrank", "stuhl", "sofa", "lampe", "gibt"], model: ["In meinem Zimmer sind ein Bett, ein Tisch und ein Schrank."] },
    { q: "Ist deine Miete teuer?", en: "Is your rent expensive?", accept: ["teuer", "billig", "miete", "ja", "nein"], model: ["Ja, die Miete ist sehr teuer."] }
  ],
  shadow: ["Meine Wohnung hat drei Zimmer.", "Die Küche ist klein, aber hell.", "Das Sofa ist neu.", "Der Tisch ist alt, aber er ist schön.", "Die Miete ist leider sehr teuer.", "Wir haben keinen Balkon."]
},
{
  id: 4, title: "Essen und Trinken", en: "Food, drinks & ordering",
  cando: ["Talk about what you eat and drink", "Order in a café or restaurant", "Use the accusative (den / einen)", "Say what you like"],
  vocab: `
das Brot | Brote | bread
das Brötchen | Brötchen | bread roll
die Butter | — | butter
der Käse | — | cheese
die Wurst | Würste | sausage, cold cuts
das Ei | Eier | egg
der Apfel | Äpfel | apple
die Banane | Bananen | banana
die Tomate | Tomaten | tomato
die Kartoffel | Kartoffeln | potato
das Gemüse | — | vegetables
das Obst | — | fruit
das Fleisch | — | meat
der Fisch | Fische | fish
der Reis | — | rice
die Nudeln | Pl. | pasta, noodles
der Kuchen | Kuchen | cake
der Kaffee | — | coffee | Ich möchte einen Kaffee, bitte. = I'd like a coffee, please.
der Tee | Tees | tea
das Wasser | — | water
die Milch | — | milk
der Saft | Säfte | juice
das Bier | Biere | beer
der Wein | Weine | wine
das Frühstück | — | breakfast
das Mittagessen | — | lunch
das Abendessen | — | dinner
die Rechnung | Rechnungen | bill, check | Die Rechnung, bitte! = The bill, please!
der Hunger | — | hunger | Ich habe Hunger. = I'm hungry.
der Durst | — | thirst | Hast du Durst? = Are you thirsty?
essen | | to eat | Er isst gern Fisch. = He likes eating fish.
trinken | | to drink
möchten | | would like | Ich möchte ein Wasser. = I'd like a water.
mögen | | to like | Ich mag Käse. = I like cheese.
kochen | | to cook
nehmen | | to take | Ich nehme die Suppe. = I'll have the soup.
lecker | | tasty
gern | | gladly (+ verb = like doing) | Ich trinke gern Tee. = I like drinking tea.
`,
  grammar: [
    { t: "Accusative: den, einen, keinen", html: `
<p>The thing you eat, drink, buy or have is the <b>object</b> (accusative). Only <span class="g-der">masculine</span> changes:</p>
<table><tr><th></th><th>der</th><th>die</th><th>das</th><th>plural</th></tr>
<tr><td>subject</td><td>der / ein / kein Apfel</td><td>die / eine Banane</td><td>das / ein Ei</td><td>die Eier</td></tr>
<tr><td>object</td><td><b>den / einen / keinen</b> Apfel</td><td>die / eine Banane</td><td>das / ein Ei</td><td>die Eier</td></tr></table>
<p><i>Der Kaffee ist heiß.</i> (subject) → <i>Ich trinke <b>den</b> Kaffee.</i> (object)</p>` },
    { t: "essen, mögen, möchten", html: `
<table><tr><th></th><th>essen</th><th>mögen</th><th>möchten</th></tr>
<tr><td>ich</td><td>esse</td><td>mag</td><td>möchte</td></tr>
<tr><td>du</td><td><b>isst</b></td><td>magst</td><td>möchtest</td></tr>
<tr><td>er / sie / es</td><td><b>isst</b></td><td>mag</td><td>möchte</td></tr>
<tr><td>wir</td><td>essen</td><td>mögen</td><td>möchten</td></tr></table>
<p><b>mögen</b> = to like (in general). <b>möchten</b> = would like (polite wish, ordering).</p>` },
    { t: "Ordering", html: `
<p><i>Ich möchte einen Tee, bitte.</i> · <i>Ich nehme die Pizza.</i> · <i>Noch ein Wasser, bitte.</i> · <i>Die Rechnung, bitte!</i> / <i>Zahlen, bitte!</i></p>
<p>The waiter may ask: <i>Was möchten Sie?</i> · <i>Was darf es sein?</i> · <i>Zusammen oder getrennt?</i> (together or separately)</p>` }
  ],
  ex: [
    { type: "mc", q: "Ich möchte ___ Kaffee.", opts: ["ein", "einen", "eine"], a: 1 },
    { type: "mc", q: "Ich esse ___ Banane.", opts: ["ein", "einen", "eine"], a: 2 },
    { type: "mc", q: "Ich trinke ___ Saft.", opts: ["kein", "keinen", "keine"], a: 1 },
    { type: "gap", q: "Er ___ gern Fisch. (essen)", a: ["isst"] },
    { type: "gap", q: "___ du Käse? (mögen)", a: ["Magst"] },
    { type: "mc", q: "Ich habe keinen Hunger means…", opts: ["I'm not hungry", "I'm hungry", "I have no food"], a: 0 },
    { type: "mc", q: "Polite order:", opts: ["Ich mag einen Tee.", "Ich möchte einen Tee, bitte.", "Ich habe Tee."], a: 1 },
    { type: "order", words: ["möchte", "Ich", "einen", "Tee", "bitte"], a: "Ich möchte einen Tee bitte" }
  ],
  speak: [
    { q: "Was isst du zum Frühstück?", en: "What do you eat for breakfast?", accept: ["esse", "brot", "brötchen", "ei", "müsli", "kaffee", "frühstück"], model: ["Zum Frühstück esse ich ein Brötchen mit Käse."] },
    { q: "Was trinkst du gern?", en: "What do you like to drink?", accept: ["trinke"], model: ["Ich trinke gern Kaffee mit Milch."] },
    { q: "Guten Tag! Was möchten Sie?", en: "Hello! What would you like? (waiter)", accept: ["möchte", "nehme", "bitte"], model: ["Ich möchte einen Kaffee und ein Stück Kuchen, bitte."] },
    { q: "Magst du Fisch?", en: "Do you like fish?", accept: ["mag", "esse", "ja", "nein", "gern"], model: ["Ja, ich esse gern Fisch.", "Nein, ich mag keinen Fisch."] },
    { q: "Kochst du gern?", en: "Do you like cooking?", accept: ["koche", "gern", "nicht"], model: ["Ja, ich koche sehr gern."] }
  ],
  shadow: ["Ich möchte einen Kaffee mit Milch, bitte.", "Zum Frühstück esse ich ein Brötchen mit Käse.", "Ich trinke keinen Alkohol.", "Die Rechnung, bitte!", "Das schmeckt sehr lecker.", "Ich habe Hunger. Was gibt es zum Abendessen?"]
},
{
  id: 5, title: "Einkaufen", en: "Shopping, prices & clothes",
  cando: ["Ask for prices and pay", "Describe clothes and colours", "Choose between kein and nicht", "Say ihn / sie / es for things"],
  vocab: `
der Supermarkt | Supermärkte | supermarket
der Laden | Läden | shop
das Geschäft | Geschäfte | shop, business
der Markt | Märkte | market
kaufen | | to buy
kosten | | to cost | Was kostet das? = How much is that?
bezahlen | | to pay | Kann ich mit Karte bezahlen? = Can I pay by card?
brauchen | | to need | Ich brauche Milch. = I need milk.
suchen | | to look for | Ich suche eine Jacke. = I'm looking for a jacket.
tragen | | to wear, to carry
der Euro | Euro | euro
der Preis | Preise | price
die Kasse | Kassen | checkout, till
das Kilo | Kilo | kilo
die Flasche | Flaschen | bottle | eine Flasche Wasser = a bottle of water
die Packung | Packungen | packet
die Kleidung | — | clothing
die Hose | Hosen | trousers
das Hemd | Hemden | shirt
das T-Shirt | T-Shirts | T-shirt
der Pullover | Pullover | sweater
die Jacke | Jacken | jacket
der Rock | Röcke | skirt
das Kleid | Kleider | dress
der Schuh | Schuhe | shoe
die Größe | Größen | size
die Farbe | Farben | colour | Was ist deine Lieblingsfarbe? = What's your favourite colour?
rot | | red
blau | | blue
grün | | green
gelb | | yellow
schwarz | | black
weiß | | white
grau | | grey
`,
  grammar: [
    { t: "Was kostet / Was kosten?", html: `
<p>The verb agrees with the thing: <i>Was <b>kostet</b> der Pullover?</i> – <i>Er kostet 30 Euro.</i></p>
<p>Plural: <i>Was <b>kosten</b> die Schuhe?</i> – <i>Sie kosten 80 Euro.</i></p>
<p>Prices: 2,50 € = <i>zwei Euro fünfzig</i>.</p>` },
    { t: "kein or nicht?", html: `
<p><b>kein</b> replaces <i>ein</i> or "no article": <i>Ich brauche <b>keine</b> Jacke.</i> · <i>Ich habe <b>kein</b> Geld.</i></p>
<p><b>nicht</b> negates everything else: verbs, adjectives, nouns with der/die/das. <i>Die Jacke ist <b>nicht</b> teuer.</i> · <i>Ich kaufe die Jacke <b>nicht</b>.</i></p>` },
    { t: "ihn, sie, es (object pronouns)", html: `
<table><tr><th></th><th>der</th><th>die</th><th>das</th><th>plural</th></tr>
<tr><td>subject</td><td>er</td><td>sie</td><td>es</td><td>sie</td></tr>
<tr><td>object</td><td><b>ihn</b></td><td>sie</td><td>es</td><td>sie</td></tr></table>
<p><i>Der Pullover ist schön. Ich nehme <b>ihn</b>.</i> · <i>Die Schuhe? Ich kaufe <b>sie</b>.</i></p>` }
  ],
  ex: [
    { type: "mc", q: "Was ___ die Schuhe?", opts: ["kostet", "kosten"], a: 1 },
    { type: "mc", q: "Ich brauche ___ Jacke.", opts: ["keine", "nicht"], a: 0 },
    { type: "mc", q: "Die Hose ist ___ teuer.", opts: ["kein", "nicht"], a: 1 },
    { type: "mc", q: "Der Pullover ist schön. Ich nehme ___.", opts: ["ihn", "sie", "es"], a: 0 },
    { type: "mc", q: "Die Jacke ist super. Ich kaufe ___.", opts: ["ihn", "sie", "es"], a: 1 },
    { type: "gap", q: "Ich ___ eine Flasche Wasser. (brauchen)", a: ["brauche"] },
    { type: "mc", q: "Haben Sie das Hemd in ___ 40?", opts: ["Größe", "Farbe", "Preis"], a: 0 },
    { type: "order", words: ["kostet", "Was", "das", "Kleid"], a: "Was kostet das Kleid" }
  ],
  speak: [
    { q: "Was kostet ein Kilo Äpfel?", en: "How much is a kilo of apples?", accept: ["kostet", "euro", "cent"], model: ["Ein Kilo Äpfel kostet zwei Euro fünfzig."] },
    { q: "Was brauchst du heute?", en: "What do you need today?", accept: ["brauche"], model: ["Ich brauche Brot, Milch und Käse."] },
    { q: "Was ist deine Lieblingsfarbe?", en: "What's your favourite colour?", accept: ["rot", "blau", "grün", "gelb", "schwarz", "weiß", "grau", "farbe"], model: ["Meine Lieblingsfarbe ist Blau."] },
    { q: "Was trägst du heute?", en: "What are you wearing today?", accept: ["trage", "hose", "hemd", "t-shirt", "jacke", "kleid", "pullover", "schuhe", "rock"], model: ["Ich trage eine schwarze Hose und ein weißes T-Shirt."] },
    { q: "Kann ich Ihnen helfen?", en: "Can I help you? (shop assistant)", accept: ["suche", "brauche", "danke", "schaue", "ja"], model: ["Ja, ich suche eine Jacke.", "Nein danke, ich schaue nur."] }
  ],
  shadow: ["Was kostet die Jacke?", "Die Schuhe kosten neunundvierzig Euro.", "Ich suche einen Pullover in Größe M.", "Haben Sie die Hose auch in Schwarz?", "Kann ich mit Karte bezahlen?", "Der Pullover ist schön. Ich nehme ihn."]
},
{
  id: 6, title: "Mein Tag", en: "Daily routine, time & days",
  cando: ["Tell the time", "Describe your day", "Use separable verbs (aufstehen)", "Keep the verb in position 2"],
  vocab: `
aufstehen | | to get up | Ich stehe um sieben Uhr auf. = I get up at seven.
frühstücken | | to have breakfast
duschen | | to shower
arbeiten | | to work
anfangen | | to begin | Der Kurs fängt um neun an. = The course starts at nine.
einkaufen | | to go shopping
fernsehen | | to watch TV | Er sieht am Abend fern. = He watches TV in the evening.
anrufen | | to call (phone) | Ich rufe dich morgen an. = I'll call you tomorrow.
schlafen | | to sleep
gehen | | to go, walk
machen | | to do, make | Was machst du heute? = What are you doing today?
die Uhr | Uhren | clock, watch, o'clock | Es ist acht Uhr. = It's eight o'clock.
die Stunde | Stunden | hour
die Minute | Minuten | minute
der Morgen | Morgen | morning
der Mittag | Mittage | noon, midday
der Nachmittag | Nachmittage | afternoon
der Abend | Abende | evening
die Nacht | Nächte | night
der Tag | Tage | day
die Woche | Wochen | week
das Wochenende | Wochenenden | weekend
der Montag | Montage | Monday
der Dienstag | Dienstage | Tuesday
der Mittwoch | Mittwoche | Wednesday
der Donnerstag | Donnerstage | Thursday
der Freitag | Freitage | Friday
der Samstag | Samstage | Saturday
der Sonntag | Sonntage | Sunday
heute | | today
morgen | | tomorrow
immer | | always
oft | | often
manchmal | | sometimes
nie | | never
früh | | early
spät | | late | Wie spät ist es? = What time is it?
halb | | half (halb drei = 2:30)
das Viertel | Viertel | quarter | Viertel nach zwei = quarter past two
`,
  grammar: [
    { t: "Telling the time", html: `
<table><tr><th>Time</th><th>Everyday</th><th>Official</th></tr>
<tr><td>8:00</td><td>acht (Uhr)</td><td>acht Uhr</td></tr>
<tr><td>8:15</td><td>Viertel nach acht</td><td>acht Uhr fünfzehn</td></tr>
<tr><td>8:30</td><td><b>halb neun</b> (!)</td><td>acht Uhr dreißig</td></tr>
<tr><td>8:45</td><td>Viertel vor neun</td><td>acht Uhr fünfundvierzig</td></tr>
<tr><td>20:10</td><td>zehn nach acht</td><td>zwanzig Uhr zehn</td></tr></table>
<p class="tip"><b>halb</b> counts towards the next hour: halb neun = half <i>to</i> nine = 8:30.</p>
<p><b>um</b> + time, <b>am</b> + day/part of day: <i>um 8 Uhr</i>, <i>am Montag</i>, <i>am Abend</i>, but <i>in der Nacht</i>.</p>` },
    { t: "Verb in position 2", html: `
<p>In a statement the conjugated verb is always the <b>second element</b>. If something else starts the sentence, the subject moves behind the verb.</p>
<table><tr><th>1</th><th>2</th><th></th></tr>
<tr><td>Ich</td><td><b>arbeite</b></td><td>am Montag.</td></tr>
<tr><td>Am Montag</td><td><b>arbeite</b></td><td>ich.</td></tr>
<tr><td>Um 7 Uhr</td><td><b>frühstücke</b></td><td>ich.</td></tr></table>` },
    { t: "Separable verbs", html: `
<p>Verbs like <b>auf</b>stehen, <b>an</b>rufen, <b>ein</b>kaufen, <b>fern</b>sehen split in a sentence: the verb goes to position 2 and the prefix to the <b>end</b>.</p>
<p><i>Ich <b>stehe</b> um sieben Uhr <b>auf</b>.</i> · <i>Wann <b>rufst</b> du mich <b>an</b>?</i> · <i>Am Samstag <b>kaufe</b> ich <b>ein</b>.</i></p>` }
  ],
  ex: [
    { type: "mc", q: "Ich ___ um sieben Uhr ___.", opts: ["stehe … auf", "aufstehe … –", "auf … stehe"], a: 0 },
    { type: "mc", q: "halb neun =", opts: ["8:30", "9:30", "9:00"], a: 0 },
    { type: "mc", q: "Viertel vor zwölf =", opts: ["12:15", "11:45", "11:15"], a: 1 },
    { type: "mc", q: "___ Freitag", opts: ["am", "um", "im"], a: 0 },
    { type: "mc", q: "___ zehn Uhr", opts: ["am", "um", "im"], a: 1 },
    { type: "gap", q: "Er ___ am Abend ___. (fernsehen)", a: ["sieht", "fern"] },
    { type: "order", words: ["arbeite", "Am", "Montag", "ich"], a: "Am Montag arbeite ich" },
    { type: "order", words: ["auf", "Wann", "du", "stehst"], a: "Wann stehst du auf" }
  ],
  speak: [
    { q: "Wann stehst du auf?", en: "When do you get up?", accept: ["stehe", "auf", "uhr"], model: ["Ich stehe um halb sieben auf."] },
    { q: "Was machst du am Wochenende?", en: "What do you do at the weekend?", accept: ["wochenende", "ich"], model: ["Am Wochenende treffe ich Freunde und kaufe ein."] },
    { q: "Wie spät ist es?", en: "What time is it?", accept: ["es ist", "uhr", "halb", "viertel"], model: ["Es ist Viertel nach zwei."] },
    { q: "Wann frühstückst du?", en: "When do you have breakfast?", accept: ["frühstücke", "uhr"], model: ["Ich frühstücke um acht Uhr."] },
    { q: "Was machst du am Abend?", en: "What do you do in the evening?", accept: ["abend", "sehe", "koche", "lese", "gehe", "ich"], model: ["Am Abend koche ich und sehe ein bisschen fern."] }
  ],
  shadow: ["Ich stehe jeden Tag um halb sieben auf.", "Am Montag arbeite ich bis fünf Uhr.", "Am Abend sehe ich manchmal fern.", "Wie spät ist es? Es ist Viertel nach zwei.", "Ich rufe dich morgen an.", "Am Samstag kaufe ich immer ein."]
},
{
  id: 7, title: "Freizeit", en: "Hobbies & free time",
  cando: ["Talk about hobbies and what you like", "Say what you can do", "Use verbs with vowel change", "Make and answer invitations"],
  vocab: `
das Hobby | Hobbys | hobby
die Freizeit | — | free time
die Zeit | Zeiten | time | Hast du am Samstag Zeit? = Are you free on Saturday?
spielen | | to play
lesen | | to read | Er liest gern. = He likes reading.
schwimmen | | to swim
tanzen | | to dance
singen | | to sing
reisen | | to travel
fotografieren | | to take photos
laufen | | to run, walk
fahren | | to drive, ride, go (by vehicle) | Ich fahre gern Fahrrad. = I like cycling.
sehen | | to see, watch
treffen | | to meet | Ich treffe Freunde. = I'm meeting friends.
können | | can, to be able to | Ich kann gut schwimmen. = I can swim well.
das Buch | Bücher | book
der Film | Filme | film
das Kino | Kinos | cinema | Wir gehen ins Kino. = We're going to the cinema.
die Musik | — | music
der Sport | — | sport
der Fußball | Fußbälle | football
das Fahrrad | Fahrräder | bicycle
die Gitarre | Gitarren | guitar
das Konzert | Konzerte | concert
das Spiel | Spiele | game
das Museum | Museen | museum
der Park | Parks | park
lieber | | rather, prefer
am liebsten | | most of all
zusammen | | together
ein bisschen | | a little
`,
  grammar: [
    { t: "Verbs with a vowel change", html: `
<p>Some common verbs change their vowel in the <b>du</b> and <b>er/sie/es</b> forms only.</p>
<table><tr><th></th><th>e → i</th><th>e → ie</th><th>a → ä</th><th>au → äu</th></tr>
<tr><td>ich</td><td>spreche</td><td>lese</td><td>fahre</td><td>laufe</td></tr>
<tr><td>du</td><td>spr<b>i</b>chst</td><td>l<b>ie</b>st</td><td>f<b>ä</b>hrst</td><td>l<b>äu</b>fst</td></tr>
<tr><td>er/sie/es</td><td>spr<b>i</b>cht</td><td>l<b>ie</b>st</td><td>f<b>ä</b>hrt</td><td>l<b>äu</b>ft</td></tr>
<tr><td>wir</td><td>sprechen</td><td>lesen</td><td>fahren</td><td>laufen</td></tr></table>
<p>Also: essen → isst, treffen → trifft, nehmen → n<b>imm</b>t, sehen → sieht, schlafen → schläft.</p>` },
    { t: "gern, lieber, am liebsten", html: `
<p>Put <b>gern</b> after the verb to say you like doing something.</p>
<p><i>Ich spiele <b>gern</b> Tennis.</i> → <i>Ich spiele <b>lieber</b> Fußball.</i> → <i>Ich spiele <b>am liebsten</b> Gitarre.</i></p>
<p><i>Ich tanze <b>nicht gern</b>.</i> = I don't like dancing.</p>` },
    { t: "können + infinitive", html: `
<p>Modal verbs take a second verb in the infinitive at the <b>end</b> of the sentence.</p>
<table><tr><td>ich kann</td><td>wir können</td></tr><tr><td>du kannst</td><td>ihr könnt</td></tr><tr><td>er/sie/es kann</td><td>sie/Sie können</td></tr></table>
<p><i>Ich <b>kann</b> gut <b>schwimmen</b>.</i> · <i><b>Kannst</b> du Gitarre <b>spielen</b>?</i> · <i>Am Samstag <b>kann</b> ich leider nicht <b>kommen</b>.</i></p>` }
  ],
  ex: [
    { type: "gap", q: "Er ___ gern Bücher. (lesen)", a: ["liest"] },
    { type: "gap", q: "Du ___ sehr schnell. (fahren)", a: ["fährst"] },
    { type: "gap", q: "___ du Spanisch? (sprechen)", a: ["Sprichst"] },
    { type: "mc", q: "Sie ___ jeden Tag acht Stunden.", opts: ["schläft", "schlaft", "schlafen"], a: 0 },
    { type: "mc", q: "Ich kann gut ___.", opts: ["schwimmen", "schwimme", "schwimmt"], a: 0 },
    { type: "mc", q: "Ich spiele gern Tennis, aber ich spiele ___ Fußball.", opts: ["lieber", "gern", "liebsten"], a: 0 },
    { type: "order", words: ["Kannst", "du", "Gitarre", "spielen"], a: "Kannst du Gitarre spielen" },
    { type: "order", words: ["gehen", "Wir", "heute", "ins Kino"], a: "Wir gehen heute ins Kino" }
  ],
  speak: [
    { q: "Was machst du gern in deiner Freizeit?", en: "What do you like doing in your free time?", accept: ["gern", "ich"], model: ["In meiner Freizeit lese ich gern und fahre Fahrrad."] },
    { q: "Kannst du schwimmen?", en: "Can you swim?", accept: ["kann", "ja", "nein", "nicht"], model: ["Ja, ich kann gut schwimmen."] },
    { q: "Liest du gern?", en: "Do you like reading?", accept: ["lese", "bücher", "gern", "nicht"], model: ["Ja, ich lese sehr gern Romane."] },
    { q: "Machst du Sport?", en: "Do you do sport?", accept: ["spiele", "laufe", "schwimme", "sport", "fahre", "mache", "ja", "nein"], model: ["Ja, ich laufe zweimal pro Woche."] },
    { q: "Gehen wir am Samstag ins Kino?", en: "Shall we go to the cinema on Saturday?", accept: ["ja", "gern", "leider", "zeit", "idee", "kann"], model: ["Ja, gern! Um wie viel Uhr?", "Leider kann ich am Samstag nicht."] }
  ],
  shadow: ["In meiner Freizeit lese ich gern.", "Ich kann ein bisschen Gitarre spielen.", "Am Wochenende fahre ich oft Fahrrad.", "Hast du am Samstag Zeit?", "Wir gehen heute Abend ins Kino.", "Am liebsten treffe ich Freunde."]
},
{
  id: 8, title: "In der Stadt", en: "Places, directions & transport",
  cando: ["Ask for and give directions", "Talk about how you get around", "Use mit dem / zum / zur", "Understand Sie-imperatives"],
  vocab: `
der Bahnhof | Bahnhöfe | train station | Wie komme ich zum Bahnhof? = How do I get to the station?
die Haltestelle | Haltestellen | stop (bus, tram)
der Bus | Busse | bus
die U-Bahn | U-Bahnen | underground, subway
die Straßenbahn | Straßenbahnen | tram
der Zug | Züge | train
das Auto | Autos | car
die Straße | Straßen | street
der Platz | Plätze | square, place, seat
die Bank | Banken | bank
die Post | — | post office
die Apotheke | Apotheken | pharmacy
das Krankenhaus | Krankenhäuser | hospital
die Schule | Schulen | school
das Hotel | Hotels | hotel
das Restaurant | Restaurants | restaurant
die Kirche | Kirchen | church
der Flughafen | Flughäfen | airport
die Ampel | Ampeln | traffic light | An der Ampel links. = Left at the traffic lights.
die Fahrkarte | Fahrkarten | ticket (transport)
links | | left
rechts | | right
geradeaus | | straight ahead
weit | | far
nah | | near
zu Fuß | | on foot | Ich gehe zu Fuß. = I'm walking.
einsteigen | | to get on
aussteigen | | to get off
umsteigen | | to change (trains)
finden | | to find
`,
  grammar: [
    { t: "Dative after mit, zu, in, bei, von, aus", html: `
<p>After these prepositions the article changes (dative):</p>
<table><tr><th>der</th><th>die</th><th>das</th><th>plural</th></tr>
<tr><td>de<b>m</b></td><td>de<b>r</b></td><td>de<b>m</b></td><td>de<b>n</b> (+n)</td></tr>
<tr><td>eine<b>m</b></td><td>eine<b>r</b></td><td>eine<b>m</b></td><td>–</td></tr></table>
<p><i>Ich fahre mit <b>dem</b> Bus / mit <b>der</b> U-Bahn / mit <b>dem</b> Auto.</i></p>
<p>Short forms you'll hear all the time: zu dem → <b>zum</b>, zu der → <b>zur</b>, in dem → <b>im</b>, bei dem → <b>beim</b>, von dem → <b>vom</b>.</p>
<p><i>Wie komme ich <b>zum</b> Bahnhof / <b>zur</b> Post?</i> · <i>Ich bin <b>im</b> Park.</i></p>` },
    { t: "Giving directions (Sie-imperative)", html: `
<p>Polite instructions: verb first, then <b>Sie</b>.</p>
<p><i><b>Gehen Sie</b> geradeaus.</i> · <i><b>Nehmen Sie</b> den Bus Nummer 5.</i> · <i><b>Steigen Sie</b> am Marktplatz <b>aus</b>.</i> · <i>Dann <b>gehen Sie</b> links.</i></p>` },
    { t: "Wo? and wohin?", html: `
<p><b>Wo?</b> (where, location) → in + dative: <i>Ich bin <b>im</b> Kino.</i></p>
<p><b>Wohin?</b> (where to, movement) → in + accusative: <i>Ich gehe <b>ins</b> Kino.</i> (in das)</p>
<p>For A1, learn these as fixed pairs; the full rule comes at A2.</p>` }
  ],
  ex: [
    { type: "mc", q: "Ich fahre mit ___ Bus.", opts: ["dem", "den", "der"], a: 0 },
    { type: "mc", q: "Ich fahre mit ___ U-Bahn.", opts: ["dem", "die", "der"], a: 2 },
    { type: "mc", q: "Wie komme ich ___ Bahnhof?", opts: ["zum", "zur"], a: 0 },
    { type: "mc", q: "Ich gehe ___ Apotheke.", opts: ["zum", "zur"], a: 1 },
    { type: "mc", q: "Wir sind ___ Hotel.", opts: ["im", "in", "ins"], a: 0 },
    { type: "mc", q: "___ Sie geradeaus!", opts: ["Gehen", "Geht", "Gehst"], a: 0 },
    { type: "gap", q: "Sie ___ am Hauptbahnhof ___. (umsteigen)", a: ["steigen", "um"] },
    { type: "order", words: ["komme", "Wie", "ich", "zur Post"], a: "Wie komme ich zur Post" }
  ],
  speak: [
    { q: "Entschuldigung, wie komme ich zum Bahnhof?", en: "Excuse me, how do I get to the station?", accept: ["gehen sie", "geradeaus", "links", "rechts", "nehmen sie", "mit dem", "mit der", "weiß nicht"], model: ["Gehen Sie geradeaus und dann an der Ampel links."] },
    { q: "Wie fährst du zur Arbeit?", en: "How do you get to work?", accept: ["fahre", "mit dem", "mit der", "gehe", "zu fuß", "fahrrad"], model: ["Ich fahre mit der U-Bahn.", "Ich gehe zu Fuß."] },
    { q: "Wo ist hier eine Apotheke?", en: "Where's a pharmacy around here?", accept: ["apotheke", "links", "rechts", "geradeaus", "dort", "straße", "neben"], model: ["Die Apotheke ist dort, neben der Bank."] },
    { q: "Ist der Flughafen weit?", en: "Is the airport far?", accept: ["weit", "nah", "minuten", "nicht", "ja", "nein"], model: ["Nein, nur zwanzig Minuten mit dem Zug."] },
    { q: "Was gibt es in deiner Stadt?", en: "What is there in your town?", accept: ["gibt es", "einen", "eine", "ein", "park", "museum", "strand", "viele"], model: ["In meiner Stadt gibt es einen Park, ein Museum und viele Restaurants."] }
  ],
  shadow: ["Entschuldigung, wo ist der Bahnhof?", "Gehen Sie geradeaus und dann links.", "Ich fahre jeden Tag mit der U-Bahn.", "Die Apotheke ist neben der Bank.", "Ich brauche eine Fahrkarte nach München.", "Sie müssen am Hauptbahnhof umsteigen."]
},
{
  id: 9, title: "Arbeit", en: "Work & jobs",
  cando: ["Say what you do for work", "Talk about your workplace and colleagues", "Use müssen and wollen", "Name jobs in the male and female form"],
  vocab: `
der Beruf | Berufe | profession | Was sind Sie von Beruf? = What do you do (for work)?
die Arbeit | — | work, job
der Job | Jobs | job
die Firma | Firmen | company
das Büro | Büros | office
der Kollege | Kollegen | colleague (m)
die Kollegin | Kolleginnen | colleague (f)
der Chef | Chefs | boss (m)
die Chefin | Chefinnen | boss (f)
der Lehrer | Lehrer | teacher (m)
die Lehrerin | Lehrerinnen | teacher (f)
der Arzt | Ärzte | doctor (m)
die Ärztin | Ärztinnen | doctor (f)
der Ingenieur | Ingenieure | engineer
der Verkäufer | Verkäufer | salesperson (m)
der Student | Studenten | student (m)
die Studentin | Studentinnen | student (f)
der Computer | Computer | computer
die E-Mail | E-Mails | email
der Termin | Termine | appointment | Ich habe um zehn einen Termin. = I have an appointment at ten.
die Besprechung | Besprechungen | meeting
die Pause | Pausen | break
das Geld | — | money
müssen | | must, to have to | Ich muss heute lange arbeiten. = I have to work late today.
wollen | | to want | Ich will Deutsch lernen. = I want to learn German.
schreiben | | to write
verdienen | | to earn
studieren | | to study (at university)
`,
  grammar: [
    { t: "Jobs: no article, and the -in form", html: `
<p>Say your job without an article: <i>Ich bin <b>Lehrer</b>.</i> / <i>Ich bin <b>Lehrerin</b>.</i> · <i>Ich arbeite <b>als</b> Ingenieur.</i></p>
<p>Female forms add <b>-in</b> (sometimes with an umlaut): Lehrer → Lehrer<b>in</b>, Kollege → Kolleg<b>in</b>, Arzt → <b>Ä</b>rzt<b>in</b>. The -in form is always <span class="g-die">die</span>, plural -innen.</p>
<p>Where you work: <i>Ich arbeite <b>bei</b> Siemens</i> (company) · <i><b>in</b> einem Büro</i> · <i><b>im</b> Krankenhaus</i>.</p>` },
    { t: "müssen and wollen", html: `
<table><tr><th></th><th>müssen</th><th>wollen</th></tr>
<tr><td>ich</td><td><b>muss</b></td><td><b>will</b></td></tr>
<tr><td>du</td><td>musst</td><td>willst</td></tr>
<tr><td>er/sie/es</td><td><b>muss</b></td><td><b>will</b></td></tr>
<tr><td>wir</td><td>müssen</td><td>wollen</td></tr>
<tr><td>ihr</td><td>müsst</td><td>wollt</td></tr>
<tr><td>sie/Sie</td><td>müssen</td><td>wollen</td></tr></table>
<p>Like können, the second verb goes to the end: <i>Ich <b>muss</b> noch eine E-Mail <b>schreiben</b>.</i></p>
<p class="tip">ich and er/sie/es have no ending for all modal verbs: ich kann, er kann, ich muss, er muss.</p>` }
  ],
  ex: [
    { type: "mc", q: "Ich bin ___.", opts: ["Lehrerin", "die Lehrerin", "eine Lehrerin von Beruf"], a: 0 },
    { type: "mc", q: "Female form of Arzt:", opts: ["Ärztin", "Arztin", "Ärzterin"], a: 0 },
    { type: "gap", q: "Ich ___ heute bis 18 Uhr arbeiten. (müssen)", a: ["muss"] },
    { type: "gap", q: "Er ___ Deutsch lernen. (wollen)", a: ["will"] },
    { type: "mc", q: "Du ___ am Montag nicht arbeiten.", opts: ["musst", "muss", "müssen"], a: 0 },
    { type: "mc", q: "Ich arbeite ___ Verkäufer.", opts: ["als", "wie", "bei"], a: 0 },
    { type: "mc", q: "Sie arbeitet ___ Siemens.", opts: ["als", "bei", "zu"], a: 1 },
    { type: "order", words: ["muss", "Ich", "eine E-Mail", "schreiben"], a: "Ich muss eine E-Mail schreiben" }
  ],
  speak: [
    { q: "Was sind Sie von Beruf?", en: "What do you do for work?", accept: ["bin", "arbeite", "als", "student", "studentin"], model: ["Ich bin Softwareentwickler.", "Ich arbeite als Designerin."] },
    { q: "Wo arbeitest du?", en: "Where do you work?", accept: ["arbeite", "bei", "büro", "firma", "zu hause"], model: ["Ich arbeite bei einer kleinen Firma in Tel Aviv."] },
    { q: "Wie viele Stunden arbeitest du pro Woche?", en: "How many hours a week do you work?", accept: ["stunden", "arbeite"], model: ["Ich arbeite vierzig Stunden pro Woche."] },
    { q: "Was musst du heute noch machen?", en: "What do you still have to do today?", accept: ["muss"], model: ["Ich muss noch einkaufen und eine E-Mail schreiben."] },
    { q: "Warum lernst du Deutsch?", en: "Why are you learning German?", accept: ["will", "möchte", "weil", "arbeiten", "leben", "studieren", "reisen", "deutschland"], model: ["Ich will in Deutschland arbeiten.", "Ich möchte in Berlin leben."] }
  ],
  shadow: ["Was sind Sie von Beruf?", "Meine Kollegin ist sehr nett.", "Ich muss heute lange arbeiten.", "Am Freitag habe ich einen Termin bei der Chefin.", "Wir machen um zwölf Uhr Mittagspause.", "Ich will nächstes Jahr in Deutschland arbeiten."]
},
{
  id: 10, title: "Gesundheit", en: "Body, health & the doctor",
  cando: ["Name body parts", "Say what hurts and how you feel", "Make a doctor's appointment", "Understand advice (du-imperative, sollen, dürfen)"],
  vocab: `
der Körper | Körper | body
der Kopf | Köpfe | head
das Auge | Augen | eye
das Ohr | Ohren | ear
die Nase | Nasen | nose
der Mund | Münder | mouth
der Zahn | Zähne | tooth
der Hals | Hälse | throat, neck
der Arm | Arme | arm
die Hand | Hände | hand
der Bauch | Bäuche | belly, stomach
der Rücken | Rücken | back
das Bein | Beine | leg
der Fuß | Füße | foot
die Schmerzen | Pl. | pain | Ich habe Kopfschmerzen. = I have a headache.
das Fieber | — | fever
die Erkältung | Erkältungen | cold (illness)
die Tablette | Tabletten | pill
das Medikament | Medikamente | medicine
die Praxis | Praxen | doctor's practice
krank | | ill, sick
gesund | | healthy
müde | | tired
wehtun | | to hurt | Mir tut der Bauch weh. = My stomach hurts.
bleiben | | to stay | Bleib im Bett! = Stay in bed!
helfen | | to help
sollen | | should, to be supposed to
dürfen | | may, to be allowed to
rauchen | | to smoke
Gute Besserung! | | Get well soon!
`,
  grammar: [
    { t: "Saying what hurts", html: `
<p>Two easy patterns:</p>
<p><i>Ich habe <b>Kopf</b>schmerzen / <b>Bauch</b>schmerzen / <b>Hals</b>schmerzen.</i></p>
<p><i><b>Mir tut</b> der Rücken <b>weh</b>.</i> (one thing) · <i><b>Mir tun</b> die Füße <b>weh</b>.</i> (plural)</p>
<p>Asking: <i>Was fehlt Ihnen?</i> (doctor) · <i>Was tut dir weh?</i></p>` },
    { t: "Imperative with du and ihr", html: `
<p><b>du</b>: take the du-form and drop <b>-st</b> and the pronoun. <b>ihr</b>: the ihr-form without ihr.</p>
<table><tr><th>Verb</th><th>du</th><th>ihr</th><th>Sie</th></tr>
<tr><td>trinken</td><td><b>Trink</b> viel Wasser!</td><td>Trinkt!</td><td>Trinken Sie!</td></tr>
<tr><td>bleiben</td><td><b>Bleib</b> im Bett!</td><td>Bleibt!</td><td>Bleiben Sie!</td></tr>
<tr><td>nehmen</td><td><b>Nimm</b> eine Tablette!</td><td>Nehmt!</td><td>Nehmen Sie!</td></tr>
<tr><td>sein</td><td><b>Sei</b> ruhig!</td><td>Seid!</td><td>Seien Sie!</td></tr></table>
<p>Verbs with a→ä do not change in the imperative: du fährst → <b>Fahr</b>!</p>` },
    { t: "sollen and dürfen", html: `
<table><tr><th></th><th>sollen</th><th>dürfen</th></tr>
<tr><td>ich</td><td>soll</td><td>darf</td></tr><tr><td>du</td><td>sollst</td><td>darfst</td></tr><tr><td>er/sie/es</td><td>soll</td><td>darf</td></tr><tr><td>wir</td><td>sollen</td><td>dürfen</td></tr></table>
<p><i>Der Arzt sagt, ich <b>soll</b> viel Tee trinken.</i> · <i>Hier <b>darf</b> man nicht rauchen.</i></p>` }
  ],
  ex: [
    { type: "mc", q: "Mir ___ der Kopf weh.", opts: ["tut", "tun"], a: 0 },
    { type: "mc", q: "Mir ___ die Füße weh.", opts: ["tut", "tun"], a: 1 },
    { type: "mc", q: "du-imperative of nehmen: ___ eine Tablette!", opts: ["Nimm", "Nehm", "Nimmst"], a: 0 },
    { type: "mc", q: "___ viel Tee! (du, trinken)", opts: ["Trink", "Trinkst", "Trinken"], a: 0 },
    { type: "gap", q: "Du ___ hier nicht rauchen. (dürfen)", a: ["darfst"] },
    { type: "gap", q: "Der Arzt sagt, ich ___ im Bett bleiben. (sollen)", a: ["soll"] },
    { type: "mc", q: "Plural of der Fuß:", opts: ["die Füße", "die Fuße", "die Füßen"], a: 0 },
    { type: "order", words: ["habe", "Ich", "Fieber", "und Kopfschmerzen"], a: "Ich habe Fieber und Kopfschmerzen" }
  ],
  speak: [
    { q: "Guten Tag. Was fehlt Ihnen?", en: "Hello. What's the matter? (doctor)", accept: ["tut", "weh", "habe", "schmerzen", "fieber", "krank", "erkältung"], model: ["Ich habe Fieber und mir tut der Hals weh."] },
    { q: "Wie geht es dir heute?", en: "How are you today?", accept: ["gut", "nicht", "krank", "müde", "geht"], model: ["Nicht so gut, ich bin sehr müde."] },
    { q: "Was machst du, wenn du krank bist?", en: "What do you do when you're ill?", accept: ["bleibe", "trinke", "schlafe", "gehe", "nehme"], model: ["Ich bleibe im Bett und trinke viel Tee."] },
    { q: "Praxis Dr. Berg, guten Tag. Was kann ich für Sie tun?", en: "Dr. Berg's practice, hello. How can I help? (receptionist)", accept: ["termin", "möchte", "brauche", "krank"], model: ["Guten Tag, ich möchte einen Termin, bitte."] },
    { q: "Was ist gesund?", en: "What is healthy?", accept: ["gesund", "obst", "gemüse", "sport", "wasser", "schlafen"], model: ["Obst, Gemüse und viel Sport sind gesund."] }
  ],
  shadow: ["Ich habe seit gestern Fieber.", "Mir tut der Kopf weh.", "Ich möchte einen Termin beim Arzt, bitte.", "Nimm eine Tablette und bleib im Bett!", "Hier darf man nicht rauchen.", "Gute Besserung!"]
},
{
  id: 11, title: "Reisen und Wetter", en: "Travel, weather & the past (haben)",
  cando: ["Talk about the weather and seasons", "Talk about trips and holidays", "Say what you did, using the Perfekt with haben"],
  vocab: `
der Urlaub | Urlaube | holiday, vacation | Im Sommer mache ich Urlaub. = I'm going on holiday in summer.
die Reise | Reisen | trip, journey
die Ferien | Pl. | holidays (school, university)
das Wetter | — | weather | Wie ist das Wetter? = What's the weather like?
die Sonne | — | sun
der Regen | — | rain
der Schnee | — | snow
der Wind | Winde | wind
die Wolke | Wolken | cloud
der Frühling | Frühlinge | spring
der Sommer | Sommer | summer
der Herbst | Herbste | autumn
der Winter | Winter | winter
das Meer | Meere | sea
der Berg | Berge | mountain
der See | Seen | lake
der Koffer | Koffer | suitcase
der Reisepass | Reisepässe | passport
das Ticket | Tickets | ticket
warm | | warm
kalt | | cold
heiß | | hot
regnen | | to rain | Es regnet. = It's raining.
scheinen | | to shine | Die Sonne scheint. = The sun is shining.
buchen | | to book
besuchen | | to visit
fliegen | | to fly
packen | | to pack
gestern | | yesterday
`,
  grammar: [
    { t: "Talking about the weather", html: `
<p><i>Wie ist das Wetter?</i></p>
<p><i>Es regnet.</i> · <i>Es schneit.</i> · <i>Die Sonne scheint.</i> · <i>Es ist warm / kalt / heiß / windig / bewölkt.</i> · <i>Es sind 25 Grad.</i></p>
<p>Seasons and months take <b>im</b>: <i>im Sommer</i>, <i>im Winter</i>, <i>im Mai</i>.</p>` },
    { t: "Perfekt with haben", html: `
<p>Spoken German talks about the past with <b>haben</b> (in position 2) + the <b>past participle</b> (at the end).</p>
<p><i>Ich <b>habe</b> gestern Pizza <b>gegessen</b>.</i> · <i>Was <b>hast</b> du am Wochenende <b>gemacht</b>?</i></p>
<table><tr><th>Type</th><th>Pattern</th><th>Examples</th></tr>
<tr><td>regular</td><td><b>ge</b>…<b>t</b></td><td>machen → gemacht, kaufen → gekauft, buchen → gebucht</td></tr>
<tr><td>irregular</td><td><b>ge</b>…<b>en</b></td><td>essen → gegessen, trinken → getrunken, sehen → gesehen, lesen → gelesen, schlafen → geschlafen</td></tr>
<tr><td>separable</td><td>prefix + <b>ge</b></td><td>einkaufen → ein<b>ge</b>kauft, fernsehen → fern<b>ge</b>sehen</td></tr>
<tr><td>be-, ver-, -ieren</td><td>no ge-</td><td>besuchen → besucht, bezahlen → bezahlt, fotografieren → fotografiert</td></tr></table>` }
  ],
  ex: [
    { type: "mc", q: "Ich habe gestern einen Film ___.", opts: ["gesehen", "gesieht", "sehen"], a: 0 },
    { type: "mc", q: "Wir haben ein Hotel ___.", opts: ["gebucht", "gebuchen", "buchten"], a: 0 },
    { type: "mc", q: "Participle of besuchen:", opts: ["besucht", "gebesucht", "besuchen"], a: 0 },
    { type: "mc", q: "Participle of einkaufen:", opts: ["eingekauft", "geeinkauft", "einkaufte"], a: 0 },
    { type: "gap", q: "Ich ___ am Wochenende viel gelesen. (haben)", a: ["habe"] },
    { type: "gap", q: "___ du schon gegessen? (haben)", a: ["Hast"] },
    { type: "mc", q: "It's raining.", opts: ["Es regnet.", "Es ist Regen.", "Es regen."], a: 0 },
    { type: "order", words: ["habe", "Ich", "im Urlaub", "viel", "geschlafen"], a: "Ich habe im Urlaub viel geschlafen" }
  ],
  speak: [
    { q: "Wie ist das Wetter heute?", en: "What's the weather like today?", accept: ["es ist", "regnet", "sonne", "scheint", "kalt", "warm", "heiß", "schön", "grad"], model: ["Die Sonne scheint und es ist warm."] },
    { q: "Was hast du am Wochenende gemacht?", en: "What did you do at the weekend?", accept: ["habe", "gemacht", "gegessen", "gesehen", "gelesen", "gespielt", "gekauft", "getroffen", "bin"], model: ["Ich habe Freunde getroffen und einen Film gesehen."] },
    { q: "Wohin fährst du gern in den Urlaub?", en: "Where do you like to go on holiday?", accept: ["fahre", "fliege", "nach", "meer", "berge", "gern"], model: ["Im Sommer fahre ich gern ans Meer."] },
    { q: "Was ist deine Lieblingsjahreszeit?", en: "What's your favourite season?", accept: ["sommer", "winter", "frühling", "herbst"], model: ["Meine Lieblingsjahreszeit ist der Herbst."] },
    { q: "Was hast du gestern gegessen?", en: "What did you eat yesterday?", accept: ["habe", "gegessen"], model: ["Gestern habe ich Nudeln mit Tomaten gegessen."] }
  ],
  shadow: ["Wie ist das Wetter in Berlin? Es regnet schon wieder.", "Im Sommer fahre ich gern ans Meer.", "Ich habe gestern ein Hotel gebucht.", "Wir haben im Urlaub viel fotografiert.", "Hast du den Koffer schon gepackt?", "Letztes Jahr habe ich meine Freunde in Wien besucht."]
},
{
  id: 12, title: "Feste und Termine", en: "Celebrations, dates & the past (sein)",
  cando: ["Give and understand dates", "Invite someone and reply", "Use the Perfekt with sein", "Use war and hatte"],
  vocab: `
das Fest | Feste | celebration, festival
die Party | Partys | party
der Geburtstag | Geburtstage | birthday | Wann hast du Geburtstag? = When is your birthday?
die Hochzeit | Hochzeiten | wedding
das Geschenk | Geschenke | present, gift
die Blume | Blumen | flower
die Einladung | Einladungen | invitation
der Gast | Gäste | guest
der Monat | Monate | month
das Datum | Daten | date
einladen | | to invite | Ich lade dich zu meiner Party ein. = I'm inviting you to my party.
feiern | | to celebrate
schenken | | to give (as a present)
der Januar | — | January
der Februar | — | February
der März | — | March
der April | — | April
der Mai | — | May
der Juni | — | June
der Juli | — | July
der August | — | August
der September | — | September
der Oktober | — | October
der November | — | November
der Dezember | — | December
Herzlichen Glückwunsch! | | Congratulations! / Happy birthday!
Alles Gute! | | All the best!
Frohe Weihnachten! | | Merry Christmas!
`,
  grammar: [
    { t: "Perfekt with sein", html: `
<p>Verbs of <b>movement from A to B</b> or <b>change of state</b> use <b>sein</b>, plus bleiben and sein itself.</p>
<table><tr><th>Infinitive</th><th>Perfekt</th></tr>
<tr><td>gehen</td><td>ich <b>bin</b> gegangen</td></tr>
<tr><td>fahren</td><td>ich <b>bin</b> gefahren</td></tr>
<tr><td>kommen</td><td>ich <b>bin</b> gekommen</td></tr>
<tr><td>fliegen</td><td>ich <b>bin</b> geflogen</td></tr>
<tr><td>aufstehen</td><td>ich <b>bin</b> aufgestanden</td></tr>
<tr><td>bleiben</td><td>ich <b>bin</b> geblieben</td></tr></table>
<p><i>Am Wochenende <b>sind</b> wir nach Hamburg <b>gefahren</b>.</i></p>` },
    { t: "Dates and ordinal numbers", html: `
<p>Ordinals: 1.–19. add <b>-te</b>, from 20. add <b>-ste</b>. Irregular: <b>erste</b>, <b>dritte</b>, <b>siebte</b>, achte.</p>
<p>der erste, zweite, dritte, vierte … neunzehnte, zwanzig<b>ste</b>, einunddreißigste.</p>
<p><i>Heute ist <b>der</b> zweite Oktober.</i> (2.10.) · On a date: <i><b>am</b> zweit<b>en</b> Oktober</i> · <i>Mein Geburtstag ist <b>am</b> dritten März.</i></p>` },
    { t: "war and hatte", html: `
<p>For sein and haben, spoken German prefers the simple past:</p>
<table><tr><th></th><th>sein</th><th>haben</th></tr>
<tr><td>ich</td><td>war</td><td>hatte</td></tr><tr><td>du</td><td>warst</td><td>hattest</td></tr><tr><td>er/sie/es</td><td>war</td><td>hatte</td></tr><tr><td>wir</td><td>waren</td><td>hatten</td></tr><tr><td>ihr</td><td>wart</td><td>hattet</td></tr><tr><td>sie/Sie</td><td>waren</td><td>hatten</td></tr></table>
<p><i>Wo <b>warst</b> du gestern? – Ich <b>war</b> zu Hause. Ich <b>hatte</b> keine Zeit.</i></p>` }
  ],
  ex: [
    { type: "mc", q: "Ich ___ nach Berlin gefahren.", opts: ["bin", "habe"], a: 0 },
    { type: "mc", q: "Wir ___ Kuchen gegessen.", opts: ["sind", "haben"], a: 1 },
    { type: "mc", q: "Er ist um 7 Uhr ___.", opts: ["aufgestanden", "aufgesteht", "aufstehen"], a: 0 },
    { type: "mc", q: "Am ___ Mai", opts: ["ersten", "einsten", "eins"], a: 0 },
    { type: "mc", q: "Wo ___ du gestern?", opts: ["warst", "war", "bist"], a: 0 },
    { type: "gap", q: "Ich ___ gestern keine Zeit. (haben, past)", a: ["hatte"] },
    { type: "mc", q: "Your friend has a birthday. You say:", opts: ["Herzlichen Glückwunsch!", "Gute Besserung!", "Guten Appetit!"], a: 0 },
    { type: "order", words: ["bist", "Wann", "du", "gekommen"], a: "Wann bist du gekommen" }
  ],
  speak: [
    { q: "Wann hast du Geburtstag?", en: "When is your birthday?", accept: ["geburtstag", "am", "im"], model: ["Ich habe am dritten März Geburtstag."] },
    { q: "Wie hast du deinen letzten Geburtstag gefeiert?", en: "How did you celebrate your last birthday?", accept: ["habe", "gefeiert", "bin", "party", "essen"], model: ["Ich habe mit Freunden in einem Restaurant gefeiert."] },
    { q: "Was schenkst du deiner Mutter zum Geburtstag?", en: "What are you giving your mother for her birthday?", accept: ["schenke", "blumen", "buch", "geschenk"], model: ["Ich schenke ihr Blumen und ein Buch."] },
    { q: "Wo warst du gestern Abend?", en: "Where were you last night?", accept: ["war", "zu hause", "bin"], model: ["Ich war zu Hause.", "Ich war im Kino."] },
    { q: "Kommst du am Samstag zu meiner Party?", en: "Are you coming to my party on Saturday?", accept: ["ja", "gern", "komme", "leider", "kann"], model: ["Ja, gern! Was soll ich mitbringen?", "Leider kann ich nicht kommen."] }
  ],
  shadow: ["Herzlichen Glückwunsch zum Geburtstag!", "Ich lade dich zu meiner Party ein.", "Am Wochenende sind wir nach Hamburg gefahren.", "Gestern war ich den ganzen Tag zu Hause.", "Mein Geburtstag ist am dritten März.", "Wann bist du heute aufgestanden?"]
}
];
