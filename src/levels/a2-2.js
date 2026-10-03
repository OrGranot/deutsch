// A2 lessons 19-24, written for this app.
LESSONS.push(
{
  id: 19, level: "A2", title: "Feste und Geschenke", en: "Celebrations, presents & two objects",
  cando: ["Say who gives what to whom", "Use Dativ pronouns like mir, dir, ihm", "Talk about presents, holidays and celebrations", "Thank people and congratulate them"],
  vocab: `
geben | | to give | Gibst du mir bitte das Salz? = Can you pass me the salt, please?
zeigen | | to show | Ich zeige dir die Fotos von der Feier. = I'll show you the photos from the party.
bringen | | to bring | Kannst du mir einen Kaffee bringen? = Can you bring me a coffee?
leihen | | to lend; to borrow | Er leiht seiner Schwester sein Auto. = He lends his sister his car.
empfehlen | | to recommend | Ich empfehle dir dieses Restaurant. = I recommend this restaurant to you.
wünschen | | to wish | Wir wünschen euch eine schöne Zeit! = We wish you a lovely time!
gratulieren | | to congratulate (+ Dativ) | Ich gratuliere dir zum Geburtstag! = Happy birthday to you!
danken | | to thank (+ Dativ) | Ich danke Ihnen für die Hilfe. = Thank you for your help.
auspacken | | to unwrap, to unpack | Pack das Geschenk doch aus! = Go on, open the present!
einpacken | | to wrap, to pack | Ich packe das Buch schön ein. = I'm wrapping the book nicely.
überraschen | | to surprise | Wir überraschen ihn mit einer Torte. = We're surprising him with a cake.
sich bedanken | | to say thank you | Sie bedankt sich für die Blumen. = She says thank you for the flowers.
die Überraschung | Überraschungen | surprise | Was für eine Überraschung! = What a surprise!
die Feier | Feiern | celebration, party | Die Feier beginnt um acht. = The party starts at eight.
der Feiertag | Feiertage | public holiday | Morgen ist ein Feiertag, die Geschäfte sind zu. = Tomorrow is a holiday, the shops are closed.
der Jahrestag | Jahrestage | anniversary | Heute ist unser zehnter Jahrestag. = Today is our tenth anniversary.
die Kerze | Kerzen | candle
die Karte | Karten | card | Ich schreibe ihr eine Karte. = I'm writing her a card.
der Gutschein | Gutscheine | voucher, gift card | Ich schenke meinem Bruder einen Gutschein. = I'm giving my brother a voucher.
das Päckchen | Päckchen | small parcel
der Strauß | Sträuße | bouquet | ein Strauß Rosen = a bunch of roses
die Torte | Torten | (layer) cake, gateau
der Sekt | Sekte | sparkling wine
der Gastgeber | Gastgeber | host
die Gastgeberin | Gastgeberinnen | hostess
die Stimmung | Stimmungen | atmosphere, mood | Die Stimmung war super. = The atmosphere was great.
anstoßen | | to clink glasses, to toast | Wir stoßen auf dich an! = Let's drink to you!
Prost! | | cheers!
persönlich | | personal(ly), in person | Ich gebe es ihr persönlich. = I'll give it to her in person.
selbst gemacht | | homemade | Die Torte ist selbst gemacht. = The cake is homemade.
der Geschmack | Geschmäcker | taste | Das ist nicht mein Geschmack. = That's not my taste.
die Idee | Ideen | idea | Hast du eine Idee für ein Geschenk? = Do you have an idea for a present?
der Schmuck | — | jewellery
`,
  grammar: [
    { t: "Verbs with a person and a thing", html: `
<p>Verbs like <b>geben, schenken, zeigen, bringen, leihen, erklären</b> often have two objects: the <b>person</b> who receives is in the <b>Dativ</b>, the <b>thing</b> is in the <b>Akkusativ</b>.</p>
<table><tr><th></th><th>Dativ (to whom?)</th><th>Akkusativ (what?)</th></tr>
<tr><td>der</td><td>de<b>m</b> Vater</td><td>de<b>n</b> Gutschein</td></tr>
<tr><td>die</td><td>de<b>r</b> Mutter</td><td>di<b>e</b> Karte</td></tr>
<tr><td>das</td><td>de<b>m</b> Kind</td><td>da<b>s</b> Päckchen</td></tr>
<tr><td>Plural</td><td>de<b>n</b> Gäste<b>n</b></td><td>di<b>e</b> Blumen</td></tr></table>
<p><i>Ich schenke <b>dem</b> Kind <b>ein</b> Buch.</i> · <i>Sie zeigt <b>der</b> Gastgeberin <b>die</b> Fotos.</i></p>
<p class="tip">Ask "to whom?" → Dativ. English sometimes says it with "to" (give the book <i>to</i> him); Hebrew uses "ל". German shows it with the ending instead.</p>` },
    { t: "Dativ pronouns", html: `
<table><tr><th>Nominativ</th><th>Akkusativ</th><th>Dativ</th></tr>
<tr><td>ich</td><td>mich</td><td><b>mir</b></td></tr>
<tr><td>du</td><td>dich</td><td><b>dir</b></td></tr>
<tr><td>er / es</td><td>ihn / es</td><td><b>ihm</b></td></tr>
<tr><td>sie</td><td>sie</td><td><b>ihr</b></td></tr>
<tr><td>wir</td><td>uns</td><td><b>uns</b></td></tr>
<tr><td>ihr</td><td>euch</td><td><b>euch</b></td></tr>
<tr><td>sie / Sie</td><td>sie / Sie</td><td><b>ihnen / Ihnen</b></td></tr></table>
<p>Some verbs always take the Dativ, even with only one object: <b>helfen, danken, gratulieren, gefallen, passen</b>.</p>
<p><i>Ich gratuliere <b>dir</b>!</i> · <i>Das Hemd gefällt <b>ihm</b>.</i> · <i>Wir danken <b>Ihnen</b>.</i></p>
<p class="tip"><i>Das gefällt mir</i> = literally "that pleases me". The thing is the subject, the person is in the Dativ.</p>` },
    { t: "Order of the two objects", html: `
<table><tr><th>Objects</th><th>Order</th><th>Example</th></tr>
<tr><td>two nouns</td><td>Dativ → Akkusativ</td><td>Ich gebe <b>dem Chef</b> <b>die Karte</b>.</td></tr>
<tr><td>Dativ pronoun + noun</td><td>pronoun first</td><td>Ich gebe <b>ihm</b> <b>die Karte</b>.</td></tr>
<tr><td>Akkusativ pronoun + noun</td><td>pronoun first</td><td>Ich gebe <b>sie</b> <b>dem Chef</b>.</td></tr>
<tr><td>two pronouns</td><td>Akkusativ → Dativ</td><td>Ich gebe <b>sie</b> <b>ihm</b>.</td></tr></table>
<p class="tip">Short words go first: pronouns come before nouns. Two pronouns? Remember "<b>es dir</b>": Ich zeige <b>es dir</b>.</p>` }
  ],
  ex: [
    { type: "gap", q: "Ich schenke ___ Mutter einen Strauß Blumen. (die)", a: ["der"] },
    { type: "gap", q: "Er gibt ___ Kind ein Stück Torte. (das)", a: ["dem"] },
    { type: "mc", q: "Wir zeigen ___ Gästen die Wohnung.", opts: ["den", "die", "dem"], a: 0, why: "Dativ plural is den, and the noun gets an extra -n: den Gästen." },
    { type: "mc", q: "Ich bringe dem Chef den Kaffee. Who receives something?", opts: ["dem Chef", "den Kaffee"], a: 0, why: "The person who receives is in the Dativ (dem)." },
    { type: "gap", q: "Das Kleid gefällt ___ sehr. (ich)", a: ["mir"] },
    { type: "gap", q: "Kannst du ___ bitte helfen? (wir)", a: ["uns"] },
    { type: "mc", q: "Ich gratuliere ___ zum Geburtstag, Anna!", opts: ["dich", "dir", "du"], a: 1, why: "gratulieren always takes the Dativ." },
    { type: "gap", q: "Wir danken ___ für die Einladung, Frau Weber. (Sie)", a: ["Ihnen"] },
    { type: "mc", q: "Gibst du mir das Buch? – Ja, ich gebe ___.", opts: ["es dir", "dir es", "dir ihn"], a: 0, why: "Two pronouns: Akkusativ (es) before Dativ (dir)." },
    { type: "order", words: ["Gutschein", "meinem", "Ich", "einen", "schenke", "Bruder"], a: "Ich schenke meinem Bruder einen Gutschein" },
    { type: "order", words: ["dir", "Ich", "morgen", "sie", "zeige"], a: "Ich zeige sie dir morgen" },
    { type: "gap", q: "Der Gutschein ist für Lea. Ich gebe ___ ___ morgen. (der Gutschein → it, Lea → her)", a: ["ihn", "ihr"] }
  ],
  speak: [
    { q: "Was schenkst du deiner Mutter zum Geburtstag?", en: "What do you give your mother for her birthday?", accept: ["schenke", "gutschein", "blumen", "geschenk"], model: ["Ich schenke ihr meistens Blumen oder einen Gutschein."] },
    { q: "Welches Geschenk hast du zuletzt bekommen?", en: "Which present did you get most recently?", accept: ["bekommen", "habe"], model: ["Von meiner Familie habe ich ein Buch bekommen."] },
    { q: "Welche Feiertage feierst du in Israel?", en: "Which holidays do you celebrate in Israel?", accept: ["feiere", "feiern", "pessach", "chanukka", "rosch haschana", "feiertag"], model: ["In Israel feiern wir Pessach und Chanukka mit der ganzen Familie."] },
    { q: "Gefällt dir Schmuck als Geschenk?", en: "Do you like jewellery as a present?", accept: ["gefällt", "gefallen", "mag"], model: ["Ja, Schmuck gefällt mir, aber ich schenke lieber etwas Persönliches.", "Nein, Schmuck gefällt mir nicht so."] },
    { q: "Wie bedankst du dich für ein Geschenk?", en: "How do you say thank you for a present?", accept: ["bedanke", "danke", "schreibe", "sage"], model: ["Ich bedanke mich persönlich und schreibe manchmal eine Karte."] }
  ],
  shadow: ["Ich schenke meiner Schwester einen Gutschein.", "Das ist eine schöne Überraschung, vielen Dank!", "Kannst du mir bitte das Salz geben?", "Der Pullover gefällt mir, aber er passt mir leider nicht.", "Wir gratulieren dir herzlich zum Geburtstag!", "Das Buch? Ich gebe es dir morgen."]
},
{
  id: 20, level: "A2", title: "Medien und Technik", en: "Phones, internet & indirect questions",
  cando: ["Talk about phones, the internet and apps", "Describe a technical problem", "Ask politely with indirect questions (ob, wo, wie)", "Use verbs with fixed prepositions (warten auf)"],
  vocab: `
der Bildschirm | Bildschirme | screen
das Passwort | Passwörter | password | Ich habe mein Passwort vergessen. = I've forgotten my password.
die App | Apps | app | Mit dieser App kann man Bustickets kaufen. = You can buy bus tickets with this app.
das Internet | — | internet | Gibt es hier Internet? = Is there internet here?
das WLAN | WLANs | Wi-Fi | Das WLAN ist heute sehr langsam. = The Wi-Fi is very slow today.
der Akku | Akkus | (rechargeable) battery | Mein Akku ist fast leer. = My battery is almost dead.
das Ladekabel | Ladekabel | charging cable
der Laptop | Laptops | laptop
das Netz | Netze | network, signal | Hier habe ich kein Netz. = I've got no signal here.
das Programm | Programme | program; TV channel
die Webseite | Webseiten | website
der Fehler | Fehler | mistake, error | Da ist ein Fehler im Programm. = There's an error in the program.
der Link | Links | link | Klicken Sie auf den Link. = Click on the link.
herunterladen | | to download | Ich lade die App herunter. = I'm downloading the app.
speichern | | to save (a file) | Hast du die Datei gespeichert? = Did you save the file?
löschen | | to delete
einschalten | | to switch on
ausschalten | | to switch off | Schalten Sie bitte Ihr Handy aus. = Please switch off your phone.
aufladen | | to charge | Ich muss mein Handy aufladen. = I need to charge my phone.
klicken | | to click
sich einloggen | | to log in | Ich kann mich nicht einloggen. = I can't log in.
kaputt | | broken
online | | online | Wie lange bist du jeden Tag online? = How long are you online every day?
warten auf | | to wait for (+ Akk.) | Ich warte auf deine Antwort. = I'm waiting for your answer.
sich interessieren für | | to be interested in (+ Akk.) | Interessierst du dich für Technik? = Are you interested in technology?
sich kümmern um | | to take care of (+ Akk.) | Ich kümmere mich um das Problem. = I'll take care of the problem.
fragen nach | | to ask about (+ Dat.) | Er fragt nach dem Weg. = He asks the way.
die Technik | — | technology; technique
das Problem | Probleme | problem
wissen | | to know (a fact) | Weißt du, wo mein Handy ist? = Do you know where my phone is?
`,
  grammar: [
    { t: "Indirect yes/no questions with ob", html: `
<p>A yes/no question becomes more polite when you put it inside a sentence with <b>ob</b> (= whether, if). The verb goes to the <b>end</b>.</p>
<table><tr><th>Direct</th><th>Indirect</th></tr>
<tr><td><b>Funktioniert</b> das WLAN?</td><td>Weißt du, <b>ob</b> das WLAN <b>funktioniert</b>?</td></tr>
<tr><td><b>Hast</b> du ein Ladekabel?</td><td>Ich frage mich, <b>ob</b> du ein Ladekabel <b>hast</b>.</td></tr>
<tr><td><b>Kommt</b> er heute?</td><td>Ich weiß nicht, <b>ob</b> er heute <b>kommt</b>.</td></tr></table>
<p>Typical starters: <i>Weißt du, … · Können Sie mir sagen, … · Ich weiß nicht, … · Ich möchte wissen, …</i></p>
<p class="tip">English "if" here is <b>ob</b>, not <b>wenn</b>. <b>wenn</b> is only for conditions and "whenever".</p>` },
    { t: "Indirect W-questions", html: `
<p>W-questions work the same way: the W-word stays at the start of the clause, the verb goes to the end.</p>
<table><tr><th>Direct</th><th>Indirect</th></tr>
<tr><td>Wo <b>ist</b> der Drucker?</td><td>Können Sie mir sagen, wo der Drucker <b>ist</b>?</td></tr>
<tr><td>Wie <b>funktioniert</b> die App?</td><td>Ich weiß nicht, wie die App <b>funktioniert</b>.</td></tr>
<tr><td>Wann <b>fängt</b> der Kurs <b>an</b>?</td><td>Weißt du, wann der Kurs <b>anfängt</b>?</td></tr></table>
<p class="tip">Separable verbs join together again at the end: <i>…, wann der Kurs <b>anfängt</b>.</i></p>` },
    { t: "Verbs with prepositions", html: `
<p>Many verbs come with a fixed preposition. Learn them as a pair, because the preposition is often different from English.</p>
<table><tr><th>Verb</th><th>Case</th><th>Example</th></tr>
<tr><td>warten <b>auf</b></td><td>Akk.</td><td>Ich warte auf den Techniker.</td></tr>
<tr><td>sich interessieren <b>für</b></td><td>Akk.</td><td>Sie interessiert sich für Apps.</td></tr>
<tr><td>sich kümmern <b>um</b></td><td>Akk.</td><td>Er kümmert sich um den Drucker.</td></tr>
<tr><td>sprechen <b>über</b></td><td>Akk.</td><td>Wir sprechen über das Problem.</td></tr>
<tr><td>fragen <b>nach</b></td><td>Dat.</td><td>Sie fragt nach dem Passwort.</td></tr></table>
<p class="tip">"Wait <i>for</i>" is warten <b>auf</b>, not für. "Interested <i>in</i>" is <b>für</b>, not in.</p>` }
  ],
  ex: [
    { type: "gap", q: "Weißt du, ___ das WLAN funktioniert?", a: ["ob"] },
    { type: "mc", q: "Ich weiß nicht, ob ___.", opts: ["er heute kommt", "kommt er heute", "er kommt heute"], a: 0, why: "After ob the verb goes to the end." },
    { type: "mc", q: "Ist das Handy kaputt? → Ich frage mich, ___ das Handy kaputt ist.", opts: ["ob", "wenn", "dass"], a: 0, why: "ob = whether. wenn is for conditions." },
    { type: "order", words: ["ob", "Akku", "du,", "ist", "der", "Weißt", "leer"], a: "Weißt du, ob der Akku leer ist" },
    { type: "gap", q: "Können Sie mir sagen, wo der Drucker ___? (sein)", a: ["ist"] },
    { type: "mc", q: "Wann fängt der Kurs an? → Weißt du, wann der Kurs ___?", opts: ["anfängt", "fängt an", "an fängt"], a: 0 },
    { type: "gap", q: "Wie heißt das Passwort? → Weißt du, wie das Passwort ___?", a: ["heißt"] },
    { type: "order", words: ["die", "nicht,", "wie", "Ich", "funktioniert", "weiß", "App"], a: "Ich weiß nicht, wie die App funktioniert" },
    { type: "gap", q: "Ich warte ___ deine Nachricht.", a: ["auf"] },
    { type: "gap", q: "Interessierst du dich ___ Technik?", a: ["für"] },
    { type: "mc", q: "Wer kümmert sich ___ den Drucker?", opts: ["um", "für", "auf"], a: 0 },
    { type: "mc", q: "Er fragt ___ dem Passwort.", opts: ["nach", "für", "über"], a: 0 }
  ],
  speak: [
    { q: "Welche Apps benutzt du jeden Tag?", en: "Which apps do you use every day?", accept: ["app", "benutze", "whatsapp"], model: ["Ich benutze jeden Tag WhatsApp und eine App für den Bus."] },
    { q: "Interessierst du dich für Technik?", en: "Are you interested in technology?", accept: ["interessiere", "technik"], model: ["Ja, ich interessiere mich sehr für Technik.", "Nein, ich interessiere mich nicht so für Technik."] },
    { q: "Was machst du, wenn dein Handy kaputt ist?", en: "What do you do when your phone is broken?", accept: ["bringe", "kaufe", "rufe", "frage", "repariere"], model: ["Ich bringe es in den Laden und frage, ob man es reparieren kann."] },
    { q: "Wie lange bist du jeden Tag online?", en: "How long are you online every day?", accept: ["stunde", "online", "immer", "viel"], model: ["Ich bin jeden Tag ungefähr drei Stunden online."] },
    { q: "Weißt du, wie dein WLAN-Passwort ist?", en: "Do you know what your Wi-Fi password is?", accept: ["weiß", "passwort"], model: ["Nein, ich weiß nicht, wie das Passwort ist. Es steht auf dem Router.", "Ja, das weiß ich."] }
  ],
  shadow: ["Weißt du, ob es hier WLAN gibt?", "Können Sie mir sagen, wo der Drucker ist?", "Mein Akku ist leer, ich muss mein Handy aufladen.", "Ich warte schon seit einer Stunde auf deine Nachricht.", "Ich interessiere mich sehr für neue Technik.", "Ich habe mein Passwort vergessen und kann mich nicht einloggen."]
},
{
  id: 21, level: "A2", title: "Kochen und Essen gehen", en: "Recipes, restaurants & complaints",
  cando: ["Read and explain a simple recipe", "Give instructions step by step (zuerst, dann, danach)", "Order in a restaurant and complain politely", "Describe food with adjectives (frisches Brot)"],
  vocab: `
das Rezept | Rezepte | recipe | Hast du ein gutes Rezept für Suppe? = Have you got a good soup recipe?
die Zutat | Zutaten | ingredient | Alle Zutaten sind frisch. = All the ingredients are fresh.
die Zwiebel | Zwiebeln | onion
der Knoblauch | — | garlic
der Pfeffer | — | pepper
das Öl | Öle | oil | Ich brate das Gemüse in heißem Öl. = I fry the vegetables in hot oil.
das Mehl | — | flour
die Sahne | — | cream
der Topf | Töpfe | pot, saucepan
die Pfanne | Pfannen | frying pan
der Ofen | Öfen | oven | Der Kuchen ist noch im Ofen. = The cake is still in the oven.
schneiden | | to cut | Zuerst schneidet man die Zwiebeln. = First you cut the onions.
schälen | | to peel
braten | | to fry
backen | | to bake | Freitags backe ich immer Challa. = On Fridays I always bake challah.
mischen | | to mix
umrühren | | to stir | Rühr die Suppe ab und zu um! = Stir the soup now and then!
probieren | | to taste, to try | Darf ich mal probieren? = May I have a taste?
die Speisekarte | Speisekarten | menu | Könnten wir bitte die Speisekarte haben? = Could we have the menu, please?
die Vorspeise | Vorspeisen | starter
das Hauptgericht | Hauptgerichte | main course
die Nachspeise | Nachspeisen | dessert
der Kellner | Kellner | waiter
bestellen | | to order | Wir möchten jetzt bestellen. = We'd like to order now.
sich beschweren | | to complain | Ich möchte mich beschweren, die Suppe ist kalt. = I'd like to complain, the soup is cold.
das Trinkgeld | Trinkgelder | tip | In Deutschland gibt man etwa zehn Prozent Trinkgeld. = In Germany you tip about ten percent.
zuerst | | first (of all)
danach | | after that, afterwards
zum Schluss | | finally, at the end | Zum Schluss kommt Salz dazu. = Finally add salt.
frisch | | fresh
scharf | | spicy; sharp | Das Essen ist mir zu scharf. = The food is too spicy for me.
salzig | | salty
süß | | sweet
`,
  grammar: [
    { t: "Step by step: zuerst, dann, danach, zum Schluss", html: `
<p>In recipes and instructions, the order words go in <b>position 1</b>. The verb stays in <b>position 2</b>, so the subject moves behind it.</p>
<table><tr><th>1</th><th>2 (verb)</th><th>subject</th><th>rest</th></tr>
<tr><td><b>Zuerst</b></td><td>schneidet</td><td>man</td><td>die Zwiebeln.</td></tr>
<tr><td><b>Dann</b></td><td>brät</td><td>man</td><td>sie in Öl.</td></tr>
<tr><td><b>Danach</b></td><td>rühre</td><td>ich</td><td>alles gut um.</td></tr>
<tr><td><b>Zum Schluss</b></td><td>kommen</td><td>Salz und Pfeffer</td><td>dazu.</td></tr></table>
<p>Recipes usually use <b>man</b> (= you, one) or the polite imperative: <i>Schneiden Sie die Zwiebeln.</i></p>
<p class="tip">No comma after the order word, unlike English "First, …": <i>Zuerst schäle ich die Kartoffeln.</i></p>` },
    { t: "Adjective endings without an article", html: `
<p>When there is no article (no der, ein, mein …), the <b>adjective</b> has to show the gender and case, so it takes the ending of the article: der → frisch<b>er</b>, das → frisch<b>es</b>, dem → frisch<b>em</b>.</p>
<table><tr><th></th><th>der (m)</th><th>die (f)</th><th>das (n)</th><th>Plural</th></tr>
<tr><td>Nom.</td><td>frisch<b>er</b> Fisch</td><td>frisch<b>e</b> Milch</td><td>frisch<b>es</b> Brot</td><td>frisch<b>e</b> Eier</td></tr>
<tr><td>Akk.</td><td>frisch<b>en</b> Fisch</td><td>frisch<b>e</b> Milch</td><td>frisch<b>es</b> Brot</td><td>frisch<b>e</b> Eier</td></tr>
<tr><td>Dat.</td><td>frisch<b>em</b> Fisch</td><td>frisch<b>er</b> Milch</td><td>frisch<b>em</b> Brot</td><td>frisch<b>en</b> Eiern</td></tr></table>
<p><i>Ich trinke gern kalt<b>es</b> Wasser.</i> · <i>Hier gibt es frisch<b>en</b> Fisch.</i> · <i>Brot mit warm<b>er</b> Butter.</i></p>
<p class="tip">This is typical for menus, food and drink, and plurals: <i>heißer Tee, rote Zwiebeln, mit scharfem Pfeffer</i>.</p>` }
  ],
  ex: [
    { type: "order", words: ["man", "Zwiebeln", "Zuerst", "die", "schneidet"], a: "Zuerst schneidet man die Zwiebeln" },
    { type: "order", words: ["das", "ich", "Dann", "Fleisch", "brate"], a: "Dann brate ich das Fleisch" },
    { type: "mc", q: "Which sentence is correct?", opts: ["Danach ich mische alles.", "Danach mische ich alles.", "Danach mische alles ich."], a: 1, why: "After danach the verb comes second, then the subject." },
    { type: "gap", q: "Zuerst ___ ich die Kartoffeln. (schälen)", a: ["schäle"] },
    { type: "gap", q: "Danach ___ man alles gut ___. (umrühren)", a: ["rührt", "um"] },
    { type: "mc", q: "Zum Schluss ___ wir den Kuchen 40 Minuten.", opts: ["backen", "backt", "bäckt"], a: 0 },
    { type: "gap", q: "Ich trinke gern ___ Wasser. (kalt)", a: ["kaltes"] },
    { type: "gap", q: "Hier gibt es heute ___ Fisch. (frisch)", a: ["frischen"] },
    { type: "gap", q: "Am besten schmeckt ___ Brot. (frisch)", a: ["frisches"] },
    { type: "mc", q: "Ich koche nur mit ___ Öl.", opts: ["gutem", "gutes", "guten"], a: 0, why: "mit + Dativ, das Öl → -em (like dem)." },
    { type: "mc", q: "Für das Rezept brauchen wir ___ Zwiebeln.", opts: ["rote", "roten", "roter"], a: 0 },
    { type: "gap", q: "Möchten Sie ___ Tee oder ___ Saft? (heiß / kalt)", a: ["heißen", "kalten"] }
  ],
  speak: [
    { q: "Was kochst du gern?", en: "What do you like to cook?", accept: ["koche", "mache", "backe"], model: ["Ich koche gern Pasta mit frischem Gemüse."] },
    { q: "Wie macht man dein Lieblingsessen? Erzähl die Schritte.", en: "How do you make your favourite dish? Tell the steps.", accept: ["zuerst", "dann", "danach", "zum schluss"], model: ["Zuerst schneide ich Zwiebeln, dann brate ich sie, danach kommen die Tomaten dazu."] },
    { q: "Wie oft gehst du ins Restaurant?", en: "How often do you go to a restaurant?", accept: ["restaurant", "gehe", "nie", "selten", "oft", "einmal"], model: ["Ich gehe ungefähr einmal im Monat ins Restaurant."] },
    { q: "Was bestellst du meistens?", en: "What do you usually order?", accept: ["bestelle", "nehme", "esse"], model: ["Meistens bestelle ich ein Hauptgericht mit Fisch."] },
    { q: "Was machst du, wenn das Essen kalt ist?", en: "What do you do if the food is cold?", accept: ["beschwere", "sage", "kellner", "frage"], model: ["Ich sage dem Kellner freundlich, dass das Essen kalt ist."] }
  ],
  shadow: ["Zuerst schneide ich die Zwiebeln und den Knoblauch.", "Dann brate ich alles mit etwas Öl in der Pfanne.", "Zum Schluss kommen Salz und Pfeffer dazu.", "Entschuldigung, könnten wir bitte die Speisekarte haben?", "Die Suppe ist leider kalt und viel zu salzig.", "Zum Frühstück esse ich gern frisches Brot mit Käse."]
},
{
  id: 22, level: "A2", title: "Ämter und Bank", en: "Offices, the bank & forms",
  cando: ["Register at an office and fill in forms", "Open a bank account and talk about payments", "Say what is forbidden vs. not necessary (darf nicht / muss nicht)", "Use darauf, dafür, worauf instead of repeating things"],
  vocab: `
das Amt | Ämter | (public) office, authority
das Bürgeramt | Bürgerämter | citizens' office (registration) | Ich habe morgen einen Termin beim Bürgeramt. = I have an appointment at the citizens' office tomorrow.
die Behörde | Behörden | authority, government office
sich anmelden | | to register | Nach dem Umzug muss man sich anmelden. = After moving you have to register.
sich abmelden | | to deregister
das Formular | Formulare | form | Füllen Sie bitte dieses Formular aus. = Please fill in this form.
ausfüllen | | to fill in
unterschreiben | | to sign | Bitte unterschreiben Sie hier unten. = Please sign down here.
die Unterschrift | Unterschriften | signature
der Ausweis | Ausweise | ID card | Haben Sie Ihren Ausweis dabei? = Do you have your ID with you?
die Bescheinigung | Bescheinigungen | certificate, written confirmation
der Antrag | Anträge | application (form)
beantragen | | to apply for | Ich möchte einen neuen Reisepass beantragen. = I'd like to apply for a new passport.
das Dokument | Dokumente | document
die Wartenummer | Wartenummern | queue ticket number | Ziehen Sie bitte eine Wartenummer. = Please take a number.
der Schalter | Schalter | counter (at an office/bank)
die Öffnungszeiten | Pl. | opening hours | Wie sind die Öffnungszeiten? = What are the opening hours?
das Konto | Konten | (bank) account
ein Konto eröffnen | | to open an account | Ich möchte ein Konto eröffnen. = I'd like to open an account.
überweisen | | to transfer (money) | Ich überweise dir das Geld morgen. = I'll transfer the money to you tomorrow.
die Überweisung | Überweisungen | bank transfer
abheben | | to withdraw (money) | Ich hebe 100 Euro ab. = I'm withdrawing 100 euros.
die Bankkarte | Bankkarten | bank card, debit card
der Geldautomat | Geldautomaten | cash machine, ATM
die Gebühr | Gebühren | fee | Kostet das Konto eine Gebühr? = Is there a fee for the account?
die Kreditkarte | Kreditkarten | credit card
die Steuer | Steuern | tax
der Vertrag | Verträge | contract | Lesen Sie den Vertrag genau. = Read the contract carefully.
vereinbaren | | to arrange, to agree on | Ich möchte einen Termin vereinbaren. = I'd like to make an appointment.
pünktlich | | on time, punctual
gültig | | valid | Mein Pass ist nicht mehr gültig. = My passport isn't valid any more.
erlaubt | | allowed
verboten | | forbidden | Parken ist hier verboten. = Parking is forbidden here.
`,
  grammar: [
    { t: "dürfen, müssen nicht, brauchen nicht zu", html: `
<p>Be careful: <b>nicht müssen</b> and <b>nicht dürfen</b> mean very different things.</p>
<table><tr><th>German</th><th>Meaning</th><th>Example</th></tr>
<tr><td>müssen</td><td>must, have to</td><td>Sie <b>müssen</b> das Formular unterschreiben.</td></tr>
<tr><td><b>nicht müssen</b></td><td>don't have to (not necessary)</td><td>Sie <b>müssen</b> keinen Termin vereinbaren.</td></tr>
<tr><td><b>nicht brauchen zu</b> + Inf.</td><td>don't need to (= nicht müssen)</td><td>Sie <b>brauchen nicht zu</b> warten.</td></tr>
<tr><td>dürfen</td><td>may, be allowed to</td><td>Hier <b>dürfen</b> Sie parken.</td></tr>
<tr><td><b>nicht dürfen</b></td><td>must not (forbidden)</td><td>Hier <b>darf</b> man <b>nicht</b> rauchen.</td></tr></table>
<p class="tip">English "you must not" = <b>du darfst nicht</b> (Hebrew: אסור). "You don't have to" = <b>du musst nicht</b> / <b>du brauchst nicht zu …</b> (Hebrew: לא חייב). With <b>brauchen</b> the infinitive needs <b>zu</b>.</p>` },
    { t: "da- and wo- compounds", html: `
<p>Many verbs have a fixed preposition (warten <b>auf</b>, sich interessieren <b>für</b>). When you refer back to a <b>thing</b>, don't say "auf es" — say <b>da + preposition</b>. To ask about a thing, use <b>wo + preposition</b>. Add <b>r</b> if the preposition starts with a vowel.</p>
<table><tr><th>Preposition</th><th>Answer (thing)</th><th>Question (thing)</th></tr>
<tr><td>auf</td><td>da<b>r</b>auf</td><td>wo<b>r</b>auf?</td></tr>
<tr><td>für</td><td>dafür</td><td>wofür?</td></tr>
<tr><td>über</td><td>da<b>r</b>über</td><td>wo<b>r</b>über?</td></tr>
<tr><td>an</td><td>da<b>r</b>an</td><td>wo<b>r</b>an?</td></tr>
<tr><td>mit</td><td>damit</td><td>womit?</td></tr></table>
<p><i>Worauf wartest du? – Auf die Bescheinigung. Ich warte schon lange <b>darauf</b>.</i></p>
<p class="tip">For <b>people</b> keep preposition + pronoun: <i>Auf <b>wen</b> wartest du? – Auf meinen Bruder. Ich warte auf <b>ihn</b>.</i></p>` }
  ],
  ex: [
    { type: "mc", q: "Hier ___ man nicht rauchen. (It's forbidden.)", opts: ["darf", "muss", "braucht"], a: 0 },
    { type: "mc", q: "Sie ___ keinen Termin vereinbaren, Sie können einfach kommen.", opts: ["müssen", "dürfen", "brauchen zu"], a: 0, why: "kein/nicht + müssen = not necessary. With dürfen it would mean it is forbidden." },
    { type: "gap", q: "Du ___ das Formular nicht heute ___ schicken. (brauchen)", a: ["brauchst", "zu"] },
    { type: "mc", q: "'You must not sign here.' =", opts: ["Sie dürfen hier nicht unterschreiben.", "Sie müssen hier nicht unterschreiben."], a: 0, why: "English 'must not' = forbidden = nicht dürfen." },
    { type: "gap", q: "Im Bürgeramt ___ man zuerst eine Wartenummer ziehen. (müssen)", a: ["muss"] },
    { type: "order", words: ["nicht", "warten", "brauchen", "zu", "Sie"], a: "Sie brauchen nicht zu warten" },
    { type: "gap", q: "Ich warte auf den Termin. – Ich warte auch ___.", a: ["darauf"] },
    { type: "gap", q: "___ wartest du? – Auf die Bescheinigung.", a: ["Worauf"] },
    { type: "mc", q: "Interessierst du dich für Steuern? – Nein, ich interessiere mich nicht ___.", opts: ["dafür", "für sie", "wofür"], a: 0 },
    { type: "mc", q: "Wartest du auf deinen Bruder? – Ja, ich warte auf ___.", opts: ["ihn", "darauf", "worauf"], a: 0, why: "For people use preposition + pronoun, not da-." },
    { type: "gap", q: "___ brauchen Sie das Formular? – Für die Anmeldung.", a: ["Wofür"] },
    { type: "gap", q: "Hast du an die Unterschrift gedacht? – Ja, ich habe ___ gedacht.", a: ["daran"] }
  ],
  speak: [
    { q: "Was darf man in einem Amt nicht machen?", en: "What mustn't you do in a government office?", accept: ["darf", "verboten"], model: ["Im Amt darf man nicht rauchen und nicht laut telefonieren."] },
    { q: "Hast du ein Konto bei einer Bank?", en: "Do you have a bank account?", accept: ["konto", "bank"], model: ["Ja, ich habe ein Konto bei einer Bank in Tel Aviv."] },
    { q: "Wie bezahlst du meistens – bar oder mit Karte?", en: "How do you usually pay – cash or card?", accept: ["bar", "karte", "bezahle"], model: ["Meistens bezahle ich mit Karte, nur selten bar."] },
    { q: "Was braucht man für einen neuen Reisepass?", en: "What do you need for a new passport?", accept: ["braucht", "ausweis", "foto", "formular", "antrag"], model: ["Man braucht ein Foto, den alten Pass und ein Formular."] },
    { q: "Worauf musst du oft warten?", en: "What do you often have to wait for?", accept: ["warte", "warten", "darauf"], model: ["Ich muss oft auf den Bus warten."] }
  ],
  shadow: ["Ich möchte bitte einen Termin beim Bürgeramt vereinbaren.", "Füllen Sie das Formular aus und unterschreiben Sie hier.", "Sie brauchen nicht zu warten, Sie sind sofort dran.", "Hier darf man leider nicht parken.", "Ich möchte ein Konto eröffnen. Kostet das eine Gebühr?", "Worauf warten Sie? – Auf meine Bescheinigung."]
},
{
  id: 23, level: "A2", title: "Natur und Umwelt", en: "Nature, environment & the future",
  cando: ["Talk about nature, weather and the environment", "Make predictions and promises with werden", "Give reasons and consequences with deshalb, trotzdem, sonst", "Say what you do to protect the environment"],
  vocab: `
die Natur | — | nature | Am Wochenende bin ich gern in der Natur. = At the weekend I like being out in nature.
die Umwelt | — | environment
der Wald | Wälder | forest, woods
der Fluss | Flüsse | river | Der Fluss ist leider sehr schmutzig. = Unfortunately the river is very dirty.
die Wiese | Wiesen | meadow
der Baum | Bäume | tree
das Tier | Tiere | animal | Im Wald leben viele Tiere. = Many animals live in the forest.
die Pflanze | Pflanzen | plant
der Vogel | Vögel | bird
die Luft | — | air | Hier ist die Luft sauber. = The air here is clean.
die Erde | — | earth, soil
das Klima | — | climate | Das Klima wird wärmer. = The climate is getting warmer.
die Hitze | — | heat
die Temperatur | Temperaturen | temperature
die Mülltonne | Mülltonnen | rubbish bin
trennen | | to separate | Wir trennen den Müll. = We separate our rubbish.
die Plastiktüte | Plastiktüten | plastic bag
die Energie | Energien | energy
der Strom | — | electricity | Die Klimaanlage braucht viel Strom. = The air conditioning uses a lot of electricity.
sparen | | to save | So sparen wir Energie. = That's how we save energy.
verbrauchen | | to use up, to consume
schützen | | to protect | Wir müssen die Natur schützen. = We have to protect nature.
der Umweltschutz | — | environmental protection
schmutzig | | dirty
sauber | | clean
umweltfreundlich | | environmentally friendly | Das Fahrrad ist umweltfreundlich. = The bike is environmentally friendly.
die Zukunft | — | future | In Zukunft werde ich weniger fliegen. = In future I'll fly less.
werden | | will (future); to become
wahrscheinlich | | probably | Morgen wird es wahrscheinlich regnen. = It will probably rain tomorrow.
deshalb | | that's why, therefore
trotzdem | | anyway, nevertheless
sonst | | otherwise, or else
`,
  grammar: [
    { t: "Futur I: werden + infinitive", html: `
<p>To talk about the future, predictions and promises, use <b>werden</b> in position 2 and the <b>infinitive at the end</b>.</p>
<table><tr><th></th><th>werden</th><th></th><th>infinitive</th></tr>
<tr><td>ich</td><td><b>werde</b></td><td>mehr Fahrrad</td><td>fahren.</td></tr>
<tr><td>du</td><td><b>wirst</b></td><td>das bestimmt</td><td>schaffen.</td></tr>
<tr><td>er / sie / es</td><td><b>wird</b></td><td>morgen wahrscheinlich</td><td>regnen.</td></tr>
<tr><td>wir</td><td><b>werden</b></td><td>Energie</td><td>sparen.</td></tr>
<tr><td>ihr</td><td><b>werdet</b></td><td>viele Tiere</td><td>sehen.</td></tr>
<tr><td>sie / Sie</td><td><b>werden</b></td><td>im Wald</td><td>wandern.</td></tr></table>
<p>For fixed plans, Germans often just use the present with a time word: <i>Morgen fahre ich nach Haifa.</i> Futur is typical for predictions (often with <b>wahrscheinlich</b>) and promises.</p>
<p class="tip"><b>werden</b> alone means "to become / get": <i>Es <b>wird</b> heiß.</i> = It's getting hot.</p>` },
    { t: "deshalb, trotzdem, sonst", html: `
<p>These words connect two main clauses. They take <b>position 1</b> in the second clause, so the <b>verb comes next</b> and the subject follows it.</p>
<table><tr><th>Word</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>deshalb</b></td><td>that's why (result)</td><td>Es ist heiß, <b>deshalb bleiben</b> wir zu Hause.</td></tr>
<tr><td><b>trotzdem</b></td><td>anyway (against expectation)</td><td>Es regnet, <b>trotzdem gehen</b> wir wandern.</td></tr>
<tr><td><b>sonst</b></td><td>otherwise (warning)</td><td>Nimm eine Tasche mit, <b>sonst musst</b> du eine Tüte kaufen.</td></tr></table>
<p class="tip">Compare: <i>…, <b>weil</b> es heiß <b>ist</b></i> (verb at the end) · <i>…, <b>und</b> wir <b>bleiben</b></i> (no change) · <i>…, <b>deshalb bleiben</b> wir</i> (verb straight after).</p>` }
  ],
  ex: [
    { type: "gap", q: "Morgen ___ es wahrscheinlich regnen. (werden)", a: ["wird"] },
    { type: "gap", q: "___ du nächstes Jahr wieder wandern? (werden)", a: ["Wirst"] },
    { type: "mc", q: "In Zukunft ___ wir mehr Strom sparen.", opts: ["werden", "wird", "werdet"], a: 0 },
    { type: "order", words: ["Müll", "werde", "trennen", "Ich", "den"], a: "Ich werde den Müll trennen" },
    { type: "mc", q: "Es ___ immer heißer. (It's getting hotter and hotter.)", opts: ["wird", "werdet", "ist"], a: 0, why: "werden alone = to become, to get." },
    { type: "order", words: ["werden", "Klima", "wärmer", "Das", "wird"], a: "Das Klima wird wärmer werden" },
    { type: "mc", q: "Es regnet. ___ gehen wir wandern.", opts: ["Trotzdem", "Deshalb", "Sonst"], a: 0, why: "We go even though it rains: trotzdem." },
    { type: "gap", q: "Der Fluss ist schmutzig. Deshalb ___ man hier nicht schwimmen. (dürfen)", a: ["darf"] },
    { type: "order", words: ["dem", "fahre", "Fahrrad", "Deshalb", "mit", "ich"], a: "Deshalb fahre ich mit dem Fahrrad" },
    { type: "mc", q: "Schalte das Licht aus, ___ verbrauchen wir zu viel Strom.", opts: ["sonst", "deshalb", "trotzdem"], a: 0 },
    { type: "mc", q: "Which sentence is correct?", opts: ["Es ist heiß, trotzdem ich laufe.", "Es ist heiß, trotzdem laufe ich.", "Es ist heiß, trotzdem laufe."], a: 1, why: "trotzdem takes position 1, so the verb comes straight after it." },
    { type: "gap", q: "Ich will die Umwelt schützen, deshalb ___ ich keine Plastiktüten. (kaufen)", a: ["kaufe"] }
  ],
  speak: [
    { q: "Was machst du für die Umwelt?", en: "What do you do for the environment?", accept: ["trenne", "spare", "fahre", "kaufe", "umwelt"], model: ["Ich trenne den Müll und fahre oft mit dem Fahrrad."] },
    { q: "Wie wird das Wetter morgen?", en: "What will the weather be like tomorrow?", accept: ["wird", "morgen"], model: ["Morgen wird es wahrscheinlich sonnig und sehr heiß."] },
    { q: "Bist du gern in der Natur?", en: "Do you like being out in nature?", accept: ["natur", "wandere", "gern", "wald"], model: ["Ja, am Wochenende wandere ich gern im Wald oder am Meer."] },
    { q: "Was wirst du nächstes Jahr machen?", en: "What will you do next year?", accept: ["werde"], model: ["Nächstes Jahr werde ich mehr Deutsch lernen und nach Deutschland reisen."] },
    { q: "Ist das Klima in Israel ein Problem?", en: "Is the climate in Israel a problem?", accept: ["hitze", "heiß", "klima", "problem", "deshalb", "trotzdem"], model: ["Ja, im Sommer ist die Hitze sehr stark, deshalb brauchen wir viel Strom."] }
  ],
  shadow: ["Morgen wird es wahrscheinlich den ganzen Tag regnen.", "Wir trennen den Müll, deshalb haben wir drei Mülltonnen.", "Es ist sehr heiß, trotzdem gehen wir wandern.", "Nimm eine Tasche mit, sonst musst du eine Plastiktüte kaufen.", "In Zukunft werden wir mehr Energie sparen.", "Am Wochenende wandern wir gern im Wald am Fluss."]
},
{
  id: 24, level: "A2", title: "Freunde und Gefühle", en: "Friends, feelings & wishes",
  cando: ["Talk about feelings and friendships", "Express wishes with hätte, wäre, würde", "Ask politely with könnten and würden", "Say what you look forward to and what annoys you"],
  vocab: `
das Gefühl | Gefühle | feeling | Ich habe ein gutes Gefühl. = I've got a good feeling.
glücklich | | happy | Mit ihm bin ich sehr glücklich. = I'm very happy with him.
traurig | | sad
wütend | | angry, furious
nervös | | nervous | Vor dem Termin war ich sehr nervös. = I was very nervous before the appointment.
enttäuscht | | disappointed
stolz | | proud | Ich bin stolz auf meine Tochter. = I'm proud of my daughter.
einsam | | lonely
überrascht | | surprised
die Angst | Ängste | fear | Mein Sohn hat Angst vor Hunden. = My son is afraid of dogs.
die Freude | — | joy, pleasure
die Liebe | — | love
sich freuen auf | | to look forward to (+ Akk.) | Ich freue mich auf den Urlaub. = I'm looking forward to the holiday.
sich freuen über | | to be glad about (+ Akk.) | Sie hat sich über die Blumen gefreut. = She was pleased with the flowers.
sich ärgern über | | to be annoyed about (+ Akk.) | Er ärgert sich über den Verkehr. = He's annoyed about the traffic.
sich verlieben | | to fall in love | Sie hat sich in einen Kollegen verliebt. = She fell in love with a colleague.
sich streiten | | to argue, to quarrel
sich versöhnen | | to make up (after a fight) | Wir haben uns schnell wieder versöhnt. = We quickly made up again.
vermissen | | to miss (someone) | Ich vermisse dich! = I miss you!
vertrauen | | to trust (+ Dativ) | Ich vertraue ihr. = I trust her.
lachen | | to laugh
weinen | | to cry
die Freundschaft | Freundschaften | friendship
der Bekannte | Bekannten | acquaintance (m) | Er ist ein Bekannter von mir. = He's an acquaintance of mine.
der Streit | — | argument, quarrel
die Beziehung | Beziehungen | relationship
der Wunsch | Wünsche | wish | Hast du einen Wunsch? = Do you have a wish?
hätte gern | | would like (to have) | Ich hätte gern mehr Zeit. = I'd like more time.
wäre | | would be | Das wäre toll! = That would be great!
würde | | would | Ich würde gern mitkommen. = I'd like to come along.
könnte | | could | Könntest du mir helfen? = Could you help me?
eigentlich | | actually, really
leider | | unfortunately | Ich kann leider nicht kommen. = Unfortunately I can't come.
zufrieden | | satisfied, content
`,
  grammar: [
    { t: "Wishes with Konjunktiv II", html: `
<p>To say what you would like or what would be nice, use the <b>Konjunktiv II</b>. For most verbs: <b>würde + infinitive</b>. For haben, sein and the modal verbs there is a short form.</p>
<table><tr><th></th><th>haben</th><th>sein</th><th>können</th><th>werden</th></tr>
<tr><td>ich</td><td>h<b>ä</b>tte</td><td>w<b>ä</b>re</td><td>k<b>ö</b>nnte</td><td>w<b>ü</b>rde</td></tr>
<tr><td>du</td><td>hättest</td><td>wärst</td><td>könntest</td><td>würdest</td></tr>
<tr><td>er / sie / es</td><td>hätte</td><td>wäre</td><td>könnte</td><td>würde</td></tr>
<tr><td>wir / sie / Sie</td><td>hätten</td><td>wären</td><td>könnten</td><td>würden</td></tr>
<tr><td>ihr</td><td>hättet</td><td>wärt</td><td>könntet</td><td>würdet</td></tr></table>
<p><i>Ich <b>hätte</b> gern mehr Freunde hier.</i> · <i>Ich <b>wäre</b> jetzt gern am Strand.</i> · <i>Ich <b>würde</b> gern in Berlin wohnen.</i></p>
<p class="tip">Like English "would": <i>I would like</i> = <i>ich würde gern / ich hätte gern / ich möchte</i>.</p>` },
    { t: "Polite requests", html: `
<p>The same forms make requests softer and more polite, at work, in shops and with people you don't know well.</p>
<table><tr><th>Direct</th><th>Polite</th></tr>
<tr><td>Hilf mir!</td><td><b>Könntest</b> du mir bitte helfen?</td></tr>
<tr><td>Sprechen Sie langsamer!</td><td><b>Würden</b> Sie bitte langsamer sprechen?</td></tr>
<tr><td>Hast du morgen Zeit?</td><td><b>Hättest</b> du morgen Zeit?</td></tr>
<tr><td>Geht das?</td><td><b>Wäre</b> das möglich?</td></tr></table>
<p class="tip"><b>bitte</b> + Konjunktiv II is the safest way to ask for anything in German.</p>` },
    { t: "sich freuen auf / über, sich ärgern über", html: `
<p>These verbs are reflexive (mich, dich, sich, uns, euch, sich) and have a fixed preposition with the Akkusativ.</p>
<table><tr><th>Verb</th><th>Use</th><th>Example</th></tr>
<tr><td>sich freuen <b>auf</b></td><td>something in the <b>future</b></td><td>Ich freue <b>mich auf</b> das Wochenende.</td></tr>
<tr><td>sich freuen <b>über</b></td><td>something that <b>happened / is here</b></td><td>Sie freut <b>sich über</b> das Geschenk.</td></tr>
<tr><td>sich ärgern <b>über</b></td><td>something annoying</td><td>Wir ärgern <b>uns über</b> den Lärm.</td></tr></table>
<p>With things you can use darauf / darüber and worauf / worüber: <i><b>Worauf</b> freust du dich? – Auf den Sommer. Ich freue mich schon <b>darauf</b>.</i></p>
<p class="tip">Tip: <b>auf</b> = looking ahead; <b>über</b> = about something you already have.</p>` }
  ],
  ex: [
    { type: "gap", q: "Ich ___ gern mehr Zeit für meine Freunde. (haben)", a: ["hätte"] },
    { type: "gap", q: "Wir ___ jetzt gern am Strand. (sein)", a: ["wären"] },
    { type: "mc", q: "Ich ___ gern eine Weltreise machen.", opts: ["würde", "wäre", "hätte"], a: 0, why: "würde + infinitive (machen) for most verbs." },
    { type: "order", words: ["gern", "Hund", "hätte", "einen", "Er"], a: "Er hätte gern einen Hund" },
    { type: "mc", q: "Which is the most polite?", opts: ["Hilf mir!", "Kannst du mir helfen?", "Könntest du mir bitte helfen?"], a: 2 },
    { type: "gap", q: "___ Sie bitte das Fenster schließen? (können)", a: ["Könnten"] },
    { type: "gap", q: "___ du morgen Zeit? (haben)", a: ["Hättest"] },
    { type: "order", words: ["sprechen", "Sie", "langsamer", "Würden", "bitte"], a: "Würden Sie bitte langsamer sprechen" },
    { type: "gap", q: "Ich freue mich schon ___ das Wochenende. (it's still to come)", a: ["auf"] },
    { type: "gap", q: "Sie freut ___ sehr über das Geschenk.", a: ["sich"] },
    { type: "mc", q: "Er ärgert sich ___ den Streit.", opts: ["über", "auf", "für"], a: 0 },
    { type: "mc", q: "Danke für die Blumen! Ich freue mich sehr ___.", opts: ["darüber", "darauf", "worüber"], a: 0, why: "You already have the flowers: sich freuen über → darüber." }
  ],
  speak: [
    { q: "Worauf freust du dich?", en: "What are you looking forward to?", accept: ["freue mich", "auf"], model: ["Ich freue mich auf den Urlaub im Sommer."] },
    { q: "Worüber ärgerst du dich oft?", en: "What often annoys you?", accept: ["ärgere mich", "über"], model: ["Ich ärgere mich oft über den Verkehr in Tel Aviv."] },
    { q: "Was würdest du gern mit deinen Freunden machen?", en: "What would you like to do with your friends?", accept: ["würde", "gern"], model: ["Ich würde gern mit meinen Freunden nach Berlin fahren."] },
    { q: "Was wäre dein größter Wunsch?", en: "What would your biggest wish be?", accept: ["hätte", "wäre", "würde", "wunsch"], model: ["Mein größter Wunsch wäre ein Jahr ohne Stress.", "Ich hätte gern mehr Zeit für meine Familie."] },
    { q: "Wen vermisst du?", en: "Who do you miss?", accept: ["vermisse"], model: ["Ich vermisse meine Freunde aus der Schule."] }
  ],
  shadow: ["Ich freue mich schon sehr auf das Wochenende mit dir.", "Ich habe mich sehr über deine Nachricht gefreut.", "Könntest du mir bitte kurz helfen?", "Ich hätte gern mehr Zeit für meine Freunde.", "Er ärgert sich jeden Morgen über den Verkehr.", "Wir haben uns gestritten, aber jetzt ist alles wieder gut."]
}
);
