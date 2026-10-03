// A2 lessons 13-18, written for this app.
LESSONS.push(
{
  id: 13, level: "A2", title: "Umzug und Nachbarn", en: "Moving, flat hunting & neighbours",
  cando: ["Talk about looking for a flat and moving house", "Say where things are in a room", "Say where you put things (stellen, legen, hängen)", "Talk about your neighbours and your building"],
  vocab: `
umziehen | | to move (house) | Wir sind letzten Monat nach Haifa umgezogen. = We moved to Haifa last month.
der Umzug | Umzüge | move, relocation | Der Umzug war sehr anstrengend. = The move was really tiring.
der Nachbar | Nachbarn | neighbour (m) | Unser Nachbar ist sehr nett. = Our neighbour is very nice.
die Nachbarin | Nachbarinnen | neighbour (f)
der Vermieter | Vermieter | landlord | Ich rufe morgen den Vermieter an. = I'll call the landlord tomorrow.
die Anzeige | Anzeigen | ad, listing | Ich habe eine Anzeige im Internet gesehen. = I saw an ad online.
die Besichtigung | Besichtigungen | (flat) viewing | Die Besichtigung ist am Samstag um zehn. = The viewing is on Saturday at ten.
die Kaution | Kautionen | deposit | Die Kaution beträgt drei Monatsmieten. = The deposit is three months' rent.
die Nebenkosten | Pl. | utilities, extra costs | Die Nebenkosten sind nicht in der Miete enthalten. = Utilities aren't included in the rent.
das Stockwerk | Stockwerke | floor, storey | Das Haus hat fünf Stockwerke. = The building has five floors.
der Aufzug | Aufzüge | lift, elevator
das Treppenhaus | Treppenhäuser | stairwell
der Keller | Keller | cellar, basement | Die Fahrräder stehen im Keller. = The bikes are in the basement.
der Flur | Flure | hallway | Der Spiegel hängt im Flur. = The mirror hangs in the hall.
die Wand | Wände | wall | Ich hänge das Bild an die Wand. = I'm hanging the picture on the wall.
der Boden | Böden | floor (ground) | Die Tasche liegt auf dem Boden. = The bag is on the floor.
das Regal | Regale | shelf, bookcase
der Teppich | Teppiche | rug, carpet | Der Teppich liegt unter dem Tisch. = The rug is under the table.
der Spiegel | Spiegel | mirror
das Bild | Bilder | picture
die Kiste | Kisten | box, crate | Die Kisten stehen noch im Flur. = The boxes are still in the hall.
der Karton | Kartons | cardboard box
der Müll | — | rubbish, garbage | Wer bringt heute den Müll raus? = Who's taking the rubbish out today?
der Lärm | — | noise | Der Lärm von oben stört mich. = The noise from upstairs bothers me.
der Schlüssel | Schlüssel | key | Ich habe meinen Schlüssel vergessen. = I forgot my key.
stellen | | to put (standing) | Stell die Kiste bitte in die Küche! = Please put the box in the kitchen!
stehen | | to stand, be (upright) | Das Regal steht neben dem Fenster. = The bookcase is next to the window.
legen | | to lay, put (flat) | Ich lege den Schlüssel auf den Tisch. = I put the key on the table.
liegen | | to lie, be (flat)
hängen | | to hang | Die Lampe hängt über dem Sofa. = The lamp hangs above the sofa.
stören | | to disturb, bother
ruhig | | quiet, calm | Unsere Straße ist sehr ruhig. = Our street is very quiet.
laut | | loud, noisy
möbliert | | furnished
zwischen | | between | Der Stuhl steht zwischen dem Bett und dem Schrank. = The chair is between the bed and the wardrobe.
`,
  grammar: [
    { t: "Two-way prepositions: wo? or wohin?", html: `
<p>Nine prepositions can take <b>Dativ</b> or <b>Akkusativ</b>: <b>in, an, auf, über, unter, vor, hinter, neben, zwischen</b>.</p>
<table><tr><th>Question</th><th>Meaning</th><th>Case</th><th>Example</th></tr>
<tr><td>Wo?</td><td>position, no movement</td><td>Dativ</td><td>Das Bild hängt an <b>der</b> Wand.</td></tr>
<tr><td>Wohin?</td><td>movement to a place</td><td>Akkusativ</td><td>Ich hänge das Bild an <b>die</b> Wand.</td></tr></table>
<table><tr><th></th><th>der</th><th>die</th><th>das</th><th>Plural</th></tr>
<tr><td>Wo? (Dativ)</td><td>auf <b>dem</b> Tisch</td><td>in <b>der</b> Küche</td><td>in <b>dem</b> (= im) Bad</td><td>in <b>den</b> Kisten</td></tr>
<tr><td>Wohin? (Akk.)</td><td>auf <b>den</b> Tisch</td><td>in <b>die</b> Küche</td><td>in <b>das</b> (= ins) Bad</td><td>in <b>die</b> Kisten</td></tr></table>
<p>Short forms: in dem → <b>im</b>, in das → <b>ins</b>, an dem → <b>am</b>, an das → <b>ans</b>.</p>
<p class="tip">English uses "in" vs "into". Hebrew uses איפה vs לאן — the same idea: לאן? = <b>wohin?</b> = Akkusativ.</p>` },
    { t: "stellen/stehen, legen/liegen, hängen", html: `
<p>German says <i>how</i> a thing is placed: standing up or lying flat. The action verb (put) takes Akkusativ, the position verb (be) takes Dativ.</p>
<table><tr><th>Action: wohin? + Akk.</th><th>Position: wo? + Dat.</th></tr>
<tr><td>Ich <b>stelle</b> die Flasche in den Kühlschrank.</td><td>Die Flasche <b>steht</b> im Kühlschrank.</td></tr>
<tr><td>Ich <b>lege</b> das Buch auf den Tisch.</td><td>Das Buch <b>liegt</b> auf dem Tisch.</td></tr>
<tr><td>Ich <b>hänge</b> den Spiegel an die Wand.</td><td>Der Spiegel <b>hängt</b> an der Wand.</td></tr></table>
<p>Perfekt: hat <b>gestellt</b> / hat <b>gestanden</b> · hat <b>gelegt</b> / hat <b>gelegen</b> · hat <b>gehängt</b> / hat <b>gehangen</b>.</p>
<p class="tip">Action verbs are regular (gestellt, gelegt). Position verbs are irregular (gestanden, gelegen).</p>` }
  ],
  ex: [
    { type: "gap", q: "Das Bild hängt an ___ Wand.", a: ["der"] },
    { type: "gap", q: "Ich hänge das Bild an ___ Wand.", a: ["die"] },
    { type: "mc", q: "Wo ist der Schlüssel? – Er liegt ___ Tisch.", opts: ["auf dem", "auf den", "auf das"], a: 0, why: "Wo? = position → Dativ." },
    { type: "mc", q: "Wohin gehst du? – Ich gehe ___ Keller.", opts: ["im", "in den", "in dem"], a: 1, why: "Wohin? = movement → Akkusativ: der Keller → in den Keller." },
    { type: "gap", q: "Die Kinder spielen ___ Garten. (in + dem)", a: ["im"] },
    { type: "order", words: ["unter", "Der", "liegt", "Tisch", "Teppich", "dem"], a: "Der Teppich liegt unter dem Tisch" },
    { type: "mc", q: "Ich ___ die Flasche in den Kühlschrank.", opts: ["stelle", "stehe"], a: 0 },
    { type: "mc", q: "Das Buch ___ auf dem Regal.", opts: ["legt", "liegt"], a: 1, why: "Position (wo?) → liegen. legen is the action of putting something down." },
    { type: "gap", q: "Wohin ___ du den Spiegel? – In den Flur. (hängen)", a: ["hängst"] },
    { type: "gap", q: "Ich habe die Kisten in den Keller ___. (stellen)", a: ["gestellt"] },
    { type: "mc", q: "Das Fahrrad hat den ganzen Tag im Flur ___.", opts: ["gestellt", "gestanden"], a: 1, why: "im Flur = Dativ, position → stehen → gestanden." },
    { type: "order", words: ["den", "Ich", "auf", "Schlüssel", "Tisch", "lege", "den"], a: "Ich lege den Schlüssel auf den Tisch" }
  ],
  speak: [
    { q: "Wo wohnst du und wie ist deine Wohnung?", en: "Where do you live and what's your flat like?", accept: ["wohne", "wohnung"], model: ["Ich wohne in Tel Aviv im vierten Stock. Die Wohnung ist hell, aber ein bisschen laut."] },
    { q: "Wie sind deine Nachbarn?", en: "What are your neighbours like?", accept: ["nachbar"], model: ["Meine Nachbarn sind nett und ruhig. Die Nachbarin von oben hilft uns manchmal."] },
    { q: "Was steht in deinem Wohnzimmer?", en: "What is in your living room?", accept: ["steht", "stehen", "hängt", "liegt"], model: ["Im Wohnzimmer steht ein großes Sofa, und an der Wand hängt ein Bild."] },
    { q: "Bist du schon einmal umgezogen?", en: "Have you ever moved house?", accept: ["umgezogen", "umzug"], model: ["Ja, ich bin vor zwei Jahren umgezogen. Der Umzug war sehr anstrengend."] },
    { q: "Wohin legst du normalerweise deinen Schlüssel?", en: "Where do you usually put your key?", accept: ["lege", "auf den", "in die", "in den"], model: ["Ich lege den Schlüssel immer auf den Tisch im Flur."] }
  ],
  shadow: ["Wir sind letzten Monat in eine neue Wohnung umgezogen.", "Die Kisten stehen noch im Flur.", "Stell die Kiste bitte in die Küche!", "Das Bild hängt jetzt an der Wand über dem Sofa.", "Unsere Nachbarn sind sehr nett und ruhig.", "Ich lege den Schlüssel immer auf den Tisch."]
},
{
  id: 14, level: "A2", title: "Schule und Ausbildung", en: "School, training & your CV",
  cando: ["Talk about your school days", "Describe your education and training", "Say what you could, had to and wanted to do in the past", "Use the Perfekt of verbs without ge-"],
  vocab: `
die Grundschule | Grundschulen | primary school | Ich war sechs Jahre in der Grundschule. = I was in primary school for six years.
das Gymnasium | Gymnasien | academic secondary school
der Schüler | Schüler | pupil (m) | Als Schüler hatte ich wenig Zeit. = As a pupil I had little time.
die Schülerin | Schülerinnen | pupil (f)
die Klasse | Klassen | class, grade | In der zehnten Klasse war ich in London. = In tenth grade I was in London.
das Fach | Fächer | (school) subject | Mein Lieblingsfach war Mathe. = My favourite subject was maths.
die Note | Noten | mark, grade | Ich hatte gute Noten in Englisch. = I had good marks in English.
die Prüfung | Prüfungen | exam | Die Prüfung war schwer. = The exam was hard.
das Abitur | — | school-leaving exam (≈ Bagrut)
die Ausbildung | Ausbildungen | vocational training | Sie macht eine Ausbildung als Köchin. = She's training to be a cook.
die Universität | Universitäten | university
das Studium | Studien | (university) studies | Nach dem Studium habe ich in Haifa gearbeitet. = After my studies I worked in Haifa.
der Abschluss | Abschlüsse | degree, qualification
das Zeugnis | Zeugnisse | report card, certificate
der Lebenslauf | Lebensläufe | CV, résumé | Ich schicke Ihnen gern meinen Lebenslauf. = I'll gladly send you my CV.
die Erfahrung | Erfahrungen | experience
das Praktikum | Praktika | internship | Ich habe ein Praktikum bei einer Firma gemacht. = I did an internship at a company.
der Kurs | Kurse | course
die Hausaufgabe | Hausaufgaben | homework | Hast du die Hausaufgaben gemacht? = Have you done the homework?
der Unterricht | — | lessons, teaching | Der Unterricht hat um acht begonnen. = Lessons started at eight.
die Mathematik | — | mathematics
die Geschichte | Geschichten | history; story
bestehen | | to pass (an exam) | Er hat die Prüfung bestanden. = He passed the exam.
wiederholen | | to repeat, revise
verstehen | | to understand | Ich habe die Frage nicht verstanden. = I didn't understand the question.
vergessen | | to forget
erklären | | to explain | Die Lehrerin hat alles gut erklärt. = The teacher explained everything well.
erzählen | | to tell (about) | Erzähl mal von deiner Schulzeit! = Tell me about your school days!
beginnen | | to begin
korrigieren | | to correct | Der Lehrer hat die Tests korrigiert. = The teacher corrected the tests.
passieren | | to happen | Was ist passiert? = What happened?
streng | | strict | Unser Mathelehrer war sehr streng. = Our maths teacher was very strict.
fleißig | | hard-working
faul | | lazy
schwierig | | difficult
damals | | back then | Damals wollte ich Tierarzt werden. = Back then I wanted to be a vet.
`,
  grammar: [
    { t: "Präteritum of sein and haben", html: `
<p>When you talk about the past, Germans normally use <b>war</b> and <b>hatte</b> instead of the Perfekt (ist gewesen, hat gehabt).</p>
<table><tr><th></th><th>sein</th><th>haben</th></tr>
<tr><td>ich</td><td>war</td><td>hatte</td></tr>
<tr><td>du</td><td>war<b>st</b></td><td>hatte<b>st</b></td></tr>
<tr><td>er / sie / es</td><td>war</td><td>hatte</td></tr>
<tr><td>wir</td><td>war<b>en</b></td><td>hatte<b>n</b></td></tr>
<tr><td>ihr</td><td>war<b>t</b></td><td>hatte<b>t</b></td></tr>
<tr><td>sie / Sie</td><td>war<b>en</b></td><td>hatte<b>n</b></td></tr></table>
<p class="tip">ich and er/sie/es have the same form and no ending: <i>Ich war krank. Er war krank.</i></p>` },
    { t: "Präteritum of modal verbs", html: `
<p>Modal verbs also use the Präteritum: stem + <b>-te</b> + ending. The umlaut disappears.</p>
<table><tr><th>Infinitive</th><th>ich / er</th><th>wir / sie</th></tr>
<tr><td>können</td><td>k<b>o</b>nn<b>te</b></td><td>konnten</td></tr>
<tr><td>müssen</td><td>m<b>u</b>ss<b>te</b></td><td>mussten</td></tr>
<tr><td>dürfen</td><td>d<b>u</b>rf<b>te</b></td><td>durften</td></tr>
<tr><td>wollen</td><td>woll<b>te</b></td><td>wollten</td></tr>
<tr><td>sollen</td><td>soll<b>te</b></td><td>sollten</td></tr>
<tr><td>mögen</td><td>m<b>och</b><b>te</b></td><td>mochten</td></tr></table>
<p>The second verb stays at the end as an infinitive: <i>Als Kind <b>musste</b> ich früh <b>aufstehen</b>.</i></p>` },
    { t: "Perfekt without ge-", html: `
<p>Two groups of verbs get <b>no ge-</b> in the Perfekt:</p>
<table><tr><th>Group</th><th>Infinitive</th><th>Perfekt</th></tr>
<tr><td rowspan="3">Inseparable prefix: be-, ver-, er-, ent-, emp-, ge-, zer-, miss-</td><td>bestehen</td><td>hat <b>bestanden</b></td></tr>
<tr><td>verstehen</td><td>hat <b>verstanden</b></td></tr>
<tr><td>erklären</td><td>hat <b>erklärt</b></td></tr>
<tr><td rowspan="2">Verbs ending in -ieren</td><td>studieren</td><td>hat <b>studiert</b></td></tr>
<tr><td>passieren</td><td>ist <b>passiert</b></td></tr></table>
<p class="tip">Compare separable verbs, which do get -ge- in the middle: an<b>ge</b>rufen, auf<b>ge</b>standen.</p>` }
  ],
  ex: [
    { type: "gap", q: "Als Kind ___ ich oft krank. (sein)", a: ["war"] },
    { type: "gap", q: "Wir ___ einen sehr strengen Lehrer. (haben)", a: ["hatten"] },
    { type: "mc", q: "___ du gestern in der Schule?", opts: ["Warst", "Wart", "War"], a: 0 },
    { type: "mc", q: "Meine Eltern ___ damals kein Auto.", opts: ["hatte", "hatten", "hattet"], a: 1 },
    { type: "gap", q: "Ich ___ als Kind nicht schwimmen. (können)", a: ["konnte"] },
    { type: "gap", q: "Wir ___ jeden Tag Hausaufgaben machen. (müssen)", a: ["mussten"] },
    { type: "mc", q: "Mit sechzehn ___ ich in Berlin studieren.", opts: ["wollte", "willte", "wolltete"], a: 0 },
    { type: "order", words: ["nicht", "Als", "durfte", "fernsehen", "lange", "ich", "Kind"], a: "Als Kind durfte ich nicht lange fernsehen" },
    { type: "gap", q: "Hast du den Text ___? (verstehen)", a: ["verstanden"] },
    { type: "mc", q: "Ich habe die Prüfung ___.", opts: ["gebestanden", "bestanden", "bestehen"], a: 1, why: "Verbs with be-, ver-, er- … take no ge- in the Perfekt." },
    { type: "gap", q: "Der Lehrer hat die Tests schon ___. (korrigieren)", a: ["korrigiert"] },
    { type: "order", words: ["passiert", "gestern", "ist", "Was"], a: "Was ist gestern passiert" }
  ],
  speak: [
    { q: "Wie war deine Schulzeit?", en: "What were your school days like?", accept: ["war", "schule"], model: ["Meine Schulzeit war schön, aber manche Lehrer waren sehr streng."] },
    { q: "Was war dein Lieblingsfach?", en: "What was your favourite subject?", accept: ["lieblingsfach", "fach", "mochte"], model: ["Mein Lieblingsfach war Geschichte.", "Ich mochte Englisch am liebsten."] },
    { q: "Was wolltest du als Kind werden?", en: "What did you want to be as a child?", accept: ["wollte"], model: ["Als Kind wollte ich im Zoo arbeiten."] },
    { q: "Was hast du nach der Schule gemacht?", en: "What did you do after school?", accept: ["habe", "bin", "war", "studium", "ausbildung"], model: ["Nach der Schule war ich in der Armee, und dann habe ich an der Universität studiert."] },
    { q: "Was musstest du als Schüler jeden Tag machen?", en: "What did you have to do every day as a pupil?", accept: ["musste"], model: ["Ich musste jeden Tag früh aufstehen und viele Hausaufgaben machen."] }
  ],
  shadow: ["Als Kind war ich nicht sehr fleißig.", "Mein Lieblingsfach war Geschichte, Mathe fand ich schwierig.", "Damals mussten wir jeden Tag viele Hausaufgaben machen.", "Ich konnte die Frage nicht beantworten, weil ich sie nicht verstanden habe.", "Nach dem Studium habe ich ein Praktikum gemacht.", "Zum Glück habe ich die Prüfung bestanden!"]
},
{
  id: 15, level: "A2", title: "Im Büro", en: "Office day, phone calls & emails",
  cando: ["Describe your tasks at work", "Give reasons with weil", "Report opinions and facts with dass", "Make and answer simple business phone calls"],
  vocab: `
telefonieren | | to talk on the phone | Sie telefoniert gerade mit einem Kunden. = She's on the phone with a client right now.
zurückrufen | | to call back | Kann ich Sie später zurückrufen? = Can I call you back later?
erreichen | | to reach | Ich kann Herrn Weber nicht erreichen. = I can't reach Mr Weber.
verbinden | | to put through, connect | Einen Moment, ich verbinde Sie. = One moment, I'll put you through.
ausrichten | | to pass on (a message) | Kann ich etwas ausrichten? = Can I take a message?
die Nachricht | Nachrichten | message | Ich hinterlasse eine Nachricht. = I'll leave a message.
der Anrufbeantworter | Anrufbeantworter | answering machine, voicemail
das Telefon | Telefone | telephone
das Handy | Handys | mobile phone | Mein Handy ist leer. = My phone battery is dead.
der Kunde | Kunden | customer, client (m)
die Kundin | Kundinnen | customer, client (f)
die Abteilung | Abteilungen | department | In welcher Abteilung arbeiten Sie? = Which department do you work in?
das Projekt | Projekte | project
die Aufgabe | Aufgaben | task | Heute habe ich viele Aufgaben. = I have a lot of tasks today.
der Drucker | Drucker | printer | Der Drucker funktioniert schon wieder nicht. = The printer isn't working again.
die Datei | Dateien | (computer) file | Ich schicke dir die Datei per E-Mail. = I'll send you the file by email.
der Anhang | Anhänge | attachment | Im Anhang finden Sie die Rechnung. = Please find the invoice attached.
der Betreff | Betreffe | subject line
die Unterlagen | Pl. | documents, papers
der Feierabend | Feierabende | end of the working day | Um fünf habe ich Feierabend. = I finish work at five.
die Überstunde | Überstunden | hour of overtime | Diese Woche habe ich viele Überstunden gemacht. = I did a lot of overtime this week.
der Schreibtisch | Schreibtische | desk
drucken | | to print
schicken | | to send | Schick mir bitte die Unterlagen. = Please send me the documents.
antworten | | to answer, reply | Ich antworte Ihnen morgen. = I'll reply to you tomorrow.
funktionieren | | to work, function
erledigen | | to get done, deal with | Das erledige ich sofort. = I'll take care of that right away.
vorbereiten | | to prepare | Ich muss noch die Präsentation vorbereiten. = I still have to prepare the presentation.
absagen | | to cancel | Leider muss ich den Termin absagen. = Unfortunately I have to cancel the appointment.
verschieben | | to postpone, reschedule
dringend | | urgent | Es ist leider dringend. = I'm afraid it's urgent.
sofort | | immediately
gerade | | right now, just | Er ist gerade in einer Besprechung. = He's in a meeting right now.
weil | | because | Ich komme später, weil ich noch eine Besprechung habe. = I'll be late because I still have a meeting.
dass | | that (conjunction) | Ich glaube, dass er krank ist. = I think (that) he's ill.
Mit freundlichen Grüßen | | Kind regards (formal letter/email)
`,
  grammar: [
    { t: "weil-clauses: verb at the end", html: `
<p><b>weil</b> (because) starts a subordinate clause. The conjugated verb goes to the <b>very end</b>, and there's always a comma before weil.</p>
<table><tr><th>Main clause</th><th>weil-clause</th></tr>
<tr><td>Ich bleibe länger,</td><td>weil ich viel Arbeit <b>habe</b>.</td></tr>
<tr><td>Er ruft nicht an,</td><td>weil sein Handy leer <b>ist</b>.</td></tr>
<tr><td>Ich komme später,</td><td>weil ich den Bericht vorbereiten <b>muss</b>.</td></tr>
<tr><td>Sie ist müde,</td><td>weil sie Überstunden gemacht <b>hat</b>.</td></tr></table>
<p>Separable verbs join together again at the end: <i>…, weil der Kurs um acht <b>anfängt</b>.</i></p>
<p class="tip">English and Hebrew (כי / בגלל ש) keep normal word order after "because". German doesn't — wait for the verb at the end!</p>` },
    { t: "dass-clauses", html: `
<p><b>dass</b> (that) works like weil: comma, then the verb at the end. Use it after verbs of thinking and saying.</p>
<table><tr><th>Main clause</th><th>dass-clause</th></tr>
<tr><td>Ich glaube,</td><td>dass der Drucker kaputt <b>ist</b>.</td></tr>
<tr><td>Ich weiß,</td><td>dass er heute nicht <b>kommt</b>.</td></tr>
<tr><td>Sie sagt,</td><td>dass sie die Datei geschickt <b>hat</b>.</td></tr>
<tr><td>Ich hoffe,</td><td>dass du morgen Zeit <b>hast</b>.</td></tr></table>
<p class="tip">In English you can drop "that" (I think he's ill). In German, if you use dass, the verb must go to the end.</p>` },
    { t: "On the phone", html: `
<table><tr><th>Situation</th><th>German</th></tr>
<tr><td>Answering at work</td><td>Firma Lang, Meier, guten Tag!</td></tr>
<tr><td>Asking for someone</td><td>Kann ich bitte mit Frau Koch sprechen?</td></tr>
<tr><td>Connecting</td><td>Einen Moment, ich <b>verbinde</b> Sie.</td></tr>
<tr><td>Person not there</td><td>Sie ist gerade nicht am Platz. Kann ich etwas <b>ausrichten</b>?</td></tr>
<tr><td>Leaving a message</td><td>Kann ich eine Nachricht hinterlassen? / Könnte sie mich bitte <b>zurückrufen</b>?</td></tr>
<tr><td>Not understanding</td><td>Können Sie das bitte wiederholen? / Etwas langsamer, bitte.</td></tr>
<tr><td>Ending</td><td>Vielen Dank, auf Wiederhören!</td></tr></table>
<p class="tip">On the phone you say <b>Auf Wiederhören</b> ("until we hear each other again"), not Auf Wiedersehen.</p>` }
  ],
  ex: [
    { type: "gap", q: "Ich rufe später an, weil ich gerade keine Zeit ___. (haben)", a: ["habe"] },
    { type: "mc", q: "Er kommt heute nicht, weil er ___.", opts: ["ist krank", "krank ist", "krank sein"], a: 1, why: "In a weil-clause the conjugated verb goes to the end." },
    { type: "gap", q: "Ich bleibe länger, weil ich den Bericht ___ ___. (vorbereiten müssen)", a: ["vorbereiten", "muss"] },
    { type: "order", words: ["krank", "weil", "bin", "ich", "Ich komme heute nicht,"], a: "Ich komme heute nicht, weil ich krank bin" },
    { type: "gap", q: "Ich glaube, ___ der Drucker kaputt ist.", a: ["dass"] },
    { type: "mc", q: "Ich weiß, dass er heute ___.", opts: ["kommt nicht", "nicht kommt", "nicht kommen"], a: 1 },
    { type: "gap", q: "Sie sagt, dass sie die Datei schon ___ ___. (schicken, Perfekt)", a: ["geschickt", "hat"] },
    { type: "order", words: ["zu", "dass", "lang", "Besprechung", "ist", "die", "Ich finde,"], a: "Ich finde, dass die Besprechung zu lang ist" },
    { type: "mc", q: "Herr Weber is not there. The secretary asks:", opts: ["Kann ich etwas ausrichten?", "Kann ich etwas verbinden?", "Bin ich gerade dran?"], a: 0 },
    { type: "gap", q: "Einen Moment bitte, ich ___ Sie. (verbinden)", a: ["verbinde"] },
    { type: "gap", q: "Kann ich Sie in zehn Minuten ___? (zurückrufen)", a: ["zurückrufen"] },
    { type: "mc", q: "You end a phone call. You say:", opts: ["Auf Wiedersehen!", "Auf Wiederhören!", "Gute Nacht!"], a: 1, why: "On the phone you don't see each other — you hear each other: Auf Wiederhören." }
  ],
  speak: [
    { q: "Was machst du normalerweise bei der Arbeit?", en: "What do you usually do at work?", accept: ["schreibe", "telefoniere", "arbeite", "bereite", "habe"], model: ["Ich schreibe viele E-Mails, telefoniere mit Kunden und bereite Besprechungen vor."] },
    { q: "Warum lernst du Deutsch?", en: "Why are you learning German?", accept: ["weil"], model: ["Ich lerne Deutsch, weil ich oft mit deutschen Kunden arbeite."] },
    { q: "Ist Homeoffice eine gute Idee? Was glaubst du?", en: "Is working from home a good idea? What do you think?", accept: ["dass", "glaube", "finde"], model: ["Ich glaube, dass Homeoffice gut ist, weil ich zu Hause ruhiger arbeiten kann."] },
    { q: "Wann hast du Feierabend?", en: "When do you finish work?", accept: ["feierabend", "uhr"], model: ["Normalerweise habe ich um sechs Uhr Feierabend."] },
    { q: "Du verstehst jemanden am Telefon nicht. Was sagst du?", en: "You don't understand someone on the phone. What do you say?", accept: ["wiederholen", "langsamer", "noch einmal", "nicht verstanden"], model: ["Entschuldigung, können Sie das bitte noch einmal wiederholen?"] }
  ],
  shadow: ["Guten Tag, kann ich bitte mit Frau Koch sprechen?", "Sie ist gerade nicht da. Kann ich etwas ausrichten?", "Ich komme heute später, weil mein Bus nicht gekommen ist.", "Ich glaube, dass der Drucker schon wieder kaputt ist.", "Im Anhang finden Sie die Unterlagen für das Projekt.", "Vielen Dank für Ihren Anruf und auf Wiederhören!"]
},
{
  id: 16, level: "A2", title: "Gesund leben", en: "Healthy living, sport & advice",
  cando: ["Talk about your lifestyle, diet and exercise", "Say how you feel using reflexive verbs", "Give advice with sollte", "Give tips and instructions with the imperative"],
  vocab: `
sich fühlen | | to feel | Ich fühle mich heute gut. = I feel good today.
sich ausruhen | | to rest | Du solltest dich ein bisschen ausruhen. = You should rest a bit.
sich bewegen | | to move, be active | Ich bewege mich zu wenig. = I don't move enough.
sich ernähren | | to eat (a diet) | Sie ernährt sich sehr gesund. = She eats very healthily.
sich entspannen | | to relax | Beim Yoga entspanne ich mich. = I relax doing yoga.
sich erholen | | to recover, get some rest | Hast du dich im Urlaub gut erholt? = Did you get a good rest on holiday?
sich verletzen | | to hurt oneself | Er hat sich beim Fußball verletzt. = He hurt himself playing football.
sich ärgern | | to be annoyed
sich freuen | | to be happy | Ich freue mich, dass es dir besser geht. = I'm happy you're feeling better.
abnehmen | | to lose weight | Ich möchte fünf Kilo abnehmen. = I'd like to lose five kilos.
zunehmen | | to gain weight
trainieren | | to train, work out | Ich trainiere dreimal pro Woche. = I work out three times a week.
joggen | | to jog
aufhören | | to stop, quit | Mein Vater hat mit dem Rauchen aufgehört. = My father has quit smoking.
die Ernährung | — | diet, nutrition
die Bewegung | Bewegungen | movement, exercise | Bewegung ist gut gegen Stress. = Exercise is good against stress.
die Gesundheit | — | health
der Stress | — | stress | Im Moment habe ich viel Stress. = I'm very stressed at the moment.
das Gewicht | Gewichte | weight
das Fitnessstudio | Fitnessstudios | gym | Ich gehe zweimal pro Woche ins Fitnessstudio. = I go to the gym twice a week.
der Spaziergang | Spaziergänge | walk | Nach dem Essen machen wir einen Spaziergang. = After dinner we go for a walk.
der Rat | Ratschläge | advice
der Tipp | Tipps | tip | Hast du einen Tipp für mich? = Do you have a tip for me?
das Vitamin | Vitamine | vitamin
der Zucker | — | sugar | Ich trinke Kaffee ohne Zucker. = I drink coffee without sugar.
das Salz | — | salt
die Diät | Diäten | (weight-loss) diet
die Treppe | Treppen | stairs | Nimm doch die Treppe und nicht den Aufzug! = Take the stairs, not the lift!
fit | | fit, in shape
schlank | | slim
dick | | fat, thick
regelmäßig | | regular(ly) | Man sollte regelmäßig Sport machen. = You should exercise regularly.
wichtig | | important
genug | | enough | Schläfst du genug? = Do you get enough sleep?
ungesund | | unhealthy | Zu viel Zucker ist ungesund. = Too much sugar is unhealthy.
vegetarisch | | vegetarian
`,
  grammar: [
    { t: "Reflexive verbs", html: `
<p>Some verbs need a <b>reflexive pronoun</b> that refers back to the subject: <i>sich fühlen, sich ausruhen, sich bewegen</i>.</p>
<table><tr><th>Subject</th><th>Pronoun</th><th>Example</th></tr>
<tr><td>ich</td><td><b>mich</b></td><td>Ich fühle <b>mich</b> gut.</td></tr>
<tr><td>du</td><td><b>dich</b></td><td>Ruhst du <b>dich</b> aus?</td></tr>
<tr><td>er / sie / es</td><td><b>sich</b></td><td>Sie ernährt <b>sich</b> gesund.</td></tr>
<tr><td>wir</td><td><b>uns</b></td><td>Wir bewegen <b>uns</b> zu wenig.</td></tr>
<tr><td>ihr</td><td><b>euch</b></td><td>Entspannt ihr <b>euch</b>?</td></tr>
<tr><td>sie / Sie</td><td><b>sich</b></td><td>Erholen Sie <b>sich</b> gut!</td></tr></table>
<p>The pronoun comes right after the verb (or after the subject if it's inverted). Perfekt uses <b>haben</b>: <i>Er hat sich verletzt.</i></p>
<p class="tip">Hebrew has the same idea in the hitpa'el pattern: להתלבש, להתרגש, להתרחץ. English often drops the "-self": "I feel" = ich fühle <b>mich</b>.</p>` },
    { t: "Advice with sollte", html: `
<p>To give friendly advice, use <b>sollte</b> (= should) + infinitive at the end.</p>
<table><tr><th></th><th>sollen → sollte</th></tr>
<tr><td>ich</td><td>sollte</td></tr>
<tr><td>du</td><td>solltest</td></tr>
<tr><td>er / sie / es</td><td>sollte</td></tr>
<tr><td>wir</td><td>sollten</td></tr>
<tr><td>ihr</td><td>solltet</td></tr>
<tr><td>sie / Sie</td><td>sollten</td></tr></table>
<p><i>Du <b>solltest</b> mehr Wasser <b>trinken</b>.</i> · <i>Sie <b>sollten</b> mit dem Rauchen <b>aufhören</b>.</i></p>
<p class="tip"><b>sollte</b> is softer than <b>musst</b>: Du musst … = you have to; Du solltest … = it would be a good idea.</p>` },
    { t: "The imperative", html: `
<p>For direct tips and instructions use the imperative.</p>
<table><tr><th>Form</th><th>How</th><th>Example</th></tr>
<tr><td>du</td><td>du-form without -st / du</td><td>du trinkst → <b>Trink</b> mehr Wasser!</td></tr>
<tr><td>du (e→i verbs)</td><td>keep the i</td><td>du nimmst → <b>Nimm</b> die Treppe!</td></tr>
<tr><td>ihr</td><td>ihr-form without ihr</td><td>ihr esst → <b>Esst</b> mehr Obst!</td></tr>
<tr><td>Sie</td><td>verb + Sie</td><td><b>Machen Sie</b> regelmäßig Sport!</td></tr></table>
<p>Reflexive: <i><b>Ruh dich</b> aus! · <b>Ruht euch</b> aus! · <b>Ruhen Sie sich</b> aus!</i></p>
<p class="tip">Add <b>doch</b> or <b>mal</b> to make it sound friendlier: <i>Geh doch mal spazieren!</i></p>` }
  ],
  ex: [
    { type: "gap", q: "Ich fühle ___ heute nicht so gut.", a: ["mich"] },
    { type: "gap", q: "Am Wochenende ruhen wir ___ aus.", a: ["uns"] },
    { type: "mc", q: "Hast du ___ beim Joggen verletzt?", opts: ["dich", "dir", "sich"], a: 0 },
    { type: "order", words: ["sich", "gesund", "Er", "sehr", "ernährt"], a: "Er ernährt sich sehr gesund" },
    { type: "gap", q: "Du ___ mehr Wasser trinken. (sollen, advice)", a: ["solltest"] },
    { type: "mc", q: "Ihr ___ nicht so viel Zucker essen.", opts: ["solltet", "sollte", "solltest"], a: 0 },
    { type: "gap", q: "Sie ___ mit dem Rauchen ___. (aufhören, advice)", a: ["sollten", "aufhören"] },
    { type: "order", words: ["mehr", "dich", "Du", "bewegen", "solltest"], a: "Du solltest dich mehr bewegen" },
    { type: "mc", q: "Imperative (du) of 'sich ausruhen':", opts: ["Ruh dich aus!", "Ruhst dich aus!", "Ausruh dich!"], a: 0 },
    { type: "gap", q: "___ Sie regelmäßig Sport! (machen)", a: ["Machen"] },
    { type: "gap", q: "___ doch die Treppe! (nehmen, du)", a: ["Nimm"] },
    { type: "mc", q: "Kinder, ___ mehr Obst!", opts: ["esst", "isst", "essen"], a: 0, why: "ihr-imperative = the ihr-form of the present without ihr: ihr esst → Esst!" }
  ],
  speak: [
    { q: "Wie fühlst du dich heute?", en: "How do you feel today?", accept: ["fühle mich", "gut", "müde"], model: ["Ich fühle mich heute gut, aber ein bisschen müde."] },
    { q: "Was machst du für deine Gesundheit?", en: "What do you do for your health?", accept: ["jogge", "trainiere", "gehe", "esse", "mache"], model: ["Ich jogge zweimal pro Woche am Strand und esse wenig Zucker."] },
    { q: "Wie entspannst du dich?", en: "How do you relax?", accept: ["entspanne", "ruhe", "mich"], model: ["Ich entspanne mich am besten bei einem langen Spaziergang."] },
    { q: "Dein Freund hat viel Stress. Was sollte er tun?", en: "Your friend is very stressed. What should he do?", accept: ["sollte", "solltest"], model: ["Er sollte mehr schlafen und sich am Wochenende ausruhen."] },
    { q: "Gib mir einen Tipp für ein gesundes Leben!", en: "Give me a tip for a healthy life!", accept: ["iss", "trink", "schlaf", "beweg", "mach", "geh", "nimm", "solltest"], model: ["Trink viel Wasser und geh jeden Tag spazieren!"] }
  ],
  shadow: ["Ich fühle mich heute nicht so gut.", "Du solltest dich ein bisschen ausruhen.", "Wir bewegen uns zu wenig, weil wir den ganzen Tag sitzen.", "Nimm doch die Treppe und nicht den Aufzug!", "Mein Vater hat letztes Jahr mit dem Rauchen aufgehört.", "Ich gehe regelmäßig ins Fitnessstudio und esse wenig Zucker."]
},
{
  id: 17, level: "A2", title: "Kleidung und Mode", en: "Clothes, fashion & adjective endings",
  cando: ["Describe clothes and say what you're wearing", "Shop for clothes: try on, exchange, ask about fit", "Use adjective endings after der/die/das and ein/eine", "Ask and answer with welch- and dies-"],
  vocab: `
der Mantel | Mäntel | coat | Im Winter brauche ich einen warmen Mantel. = In winter I need a warm coat.
die Bluse | Blusen | blouse
die Jeans | Jeans | jeans
der Anzug | Anzüge | suit | Zur Hochzeit trägt er einen dunklen Anzug. = He's wearing a dark suit to the wedding.
die Krawatte | Krawatten | tie
der Stiefel | Stiefel | boot
der Turnschuh | Turnschuhe | trainer, sneaker
die Mütze | Mützen | woolly hat, cap
der Hut | Hüte | hat
der Schal | Schals | scarf
die Handtasche | Handtaschen | handbag
die Brille | Brillen | glasses | Ohne Brille sehe ich fast nichts. = Without glasses I can hardly see anything.
der Gürtel | Gürtel | belt
die Socke | Socken | sock
die Baumwolle | — | cotton | Das T-Shirt ist aus Baumwolle. = The T-shirt is made of cotton.
die Mode | Moden | fashion | Mode ist mir nicht so wichtig. = Fashion isn't that important to me.
die Umkleidekabine | Umkleidekabinen | fitting room | Wo ist die Umkleidekabine? = Where is the fitting room?
anprobieren | | to try on | Kann ich die Jacke anprobieren? = Can I try on the jacket?
anziehen | | to put on (clothes) | Zieh eine warme Jacke an! = Put on a warm jacket!
ausziehen | | to take off (clothes)
sich umziehen | | to get changed | Ich ziehe mich schnell um. = I'll quickly get changed.
passen | | to fit | Die Hose passt mir nicht. = The trousers don't fit me.
jemandem stehen | | to suit somebody | Das Blau steht dir gut. = The blue suits you.
gefallen | | to please (= to like) | Wie gefällt dir der Mantel? = How do you like the coat?
umtauschen | | to exchange (goods) | Kann ich das Hemd umtauschen? = Can I exchange the shirt?
eng | | tight
bequem | | comfortable | Diese Schuhe sind sehr bequem. = These shoes are very comfortable.
elegant | | elegant
modern | | modern, fashionable
altmodisch | | old-fashioned
kariert | | checked
gestreift | | striped | Er trägt ein gestreiftes Hemd. = He's wearing a striped shirt.
braun | | brown
rosa | | pink
welcher / welche / welches | | which | Welche Farbe magst du? = Which colour do you like?
dieser / diese / dieses | | this, these | Dieser Mantel ist zu teuer. = This coat is too expensive.
`,
  grammar: [
    { t: "Adjective endings after der/die/das", html: `
<p>After the definite article the adjective ending is only <b>-e</b> or <b>-en</b>. The article already shows gender and case.</p>
<table><tr><th></th><th>der</th><th>die</th><th>das</th><th>Plural</th></tr>
<tr><td>Nom.</td><td>der neu<b>e</b> Mantel</td><td>die neu<b>e</b> Bluse</td><td>das neu<b>e</b> Hemd</td><td>die neu<b>en</b> Schuhe</td></tr>
<tr><td>Akk.</td><td>den neu<b>en</b> Mantel</td><td>die neu<b>e</b> Bluse</td><td>das neu<b>e</b> Hemd</td><td>die neu<b>en</b> Schuhe</td></tr>
<tr><td>Dat.</td><td>dem neu<b>en</b> Mantel</td><td>der neu<b>en</b> Bluse</td><td>dem neu<b>en</b> Hemd</td><td>den neu<b>en</b> Schuhen</td></tr></table>
<p class="tip">Only five boxes have <b>-e</b> (Nom. singular + Akk. die/das). Everything else is <b>-en</b>.</p>` },
    { t: "Adjective endings after ein/eine", html: `
<p>Where <b>ein</b> has no ending, the adjective shows the gender: <b>-er</b> (der) or <b>-es</b> (das).</p>
<table><tr><th></th><th>der</th><th>die</th><th>das</th><th>Plural (kein)</th></tr>
<tr><td>Nom.</td><td>ein warm<b>er</b> Mantel</td><td>eine warm<b>e</b> Jacke</td><td>ein warm<b>es</b> Kleid</td><td>keine warm<b>en</b> Socken</td></tr>
<tr><td>Akk.</td><td>einen warm<b>en</b> Mantel</td><td>eine warm<b>e</b> Jacke</td><td>ein warm<b>es</b> Kleid</td><td>keine warm<b>en</b> Socken</td></tr>
<tr><td>Dat.</td><td>einem warm<b>en</b> Mantel</td><td>einer warm<b>en</b> Jacke</td><td>einem warm<b>en</b> Kleid</td><td>keinen warm<b>en</b> Socken</td></tr></table>
<p>The same endings work after <b>mein, dein, kein</b> …: <i>Ich trage mein<b>en</b> neu<b>en</b> Mantel.</i></p>
<p class="tip">Hebrew puts the adjective after the noun and only adds gender/plural (מעיל חם). German puts it before and adds a case ending too.</p>` },
    { t: "welch- and dies-", html: `
<p><b>welch-</b> (which?) and <b>dies-</b> (this) take the same endings as der/die/das. Adjectives after them follow the der/die/das table.</p>
<table><tr><th></th><th>der</th><th>die</th><th>das</th><th>Plural</th></tr>
<tr><td>Nom.</td><td>welch<b>er</b> / dies<b>er</b></td><td>welch<b>e</b> / dies<b>e</b></td><td>welch<b>es</b> / dies<b>es</b></td><td>welch<b>e</b> / dies<b>e</b></td></tr>
<tr><td>Akk.</td><td>welch<b>en</b> / dies<b>en</b></td><td>welch<b>e</b> / dies<b>e</b></td><td>welch<b>es</b> / dies<b>es</b></td><td>welch<b>e</b> / dies<b>e</b></td></tr>
<tr><td>Dat.</td><td>welch<b>em</b> / dies<b>em</b></td><td>welch<b>er</b> / dies<b>er</b></td><td>welch<b>em</b> / dies<b>em</b></td><td>welch<b>en</b> / dies<b>en</b></td></tr></table>
<p><i>Welche Jacke gefällt dir? – <b>Diese</b> hier, die blau<b>e</b>.</i> · <i>Mit welch<b>em</b> Kleid gehst du zur Party?</i></p>` }
  ],
  ex: [
    { type: "gap", q: "Der ___ Mantel ist sehr warm. (neu)", a: ["neue"] },
    { type: "gap", q: "Ich nehme die ___ Bluse. (weiß)", a: ["weiße"] },
    { type: "mc", q: "Mit dem ___ Anzug gehe ich zur Hochzeit.", opts: ["schwarze", "schwarzen", "schwarzer"], a: 1, why: "Dativ after dem → -en." },
    { type: "order", words: ["eng", "roten", "zu", "Die", "sind", "Schuhe"], a: "Die roten Schuhe sind zu eng" },
    { type: "gap", q: "Ich suche einen ___ Mantel. (warm)", a: ["warmen"] },
    { type: "mc", q: "Das ist aber ein ___ Kleid!", opts: ["schönes", "schöne", "schönen"], a: 0, why: "ein doesn't show the gender, so the adjective does: das → -es." },
    { type: "gap", q: "Er trägt heute ein ___ Hemd. (gestreift)", a: ["gestreiftes"] },
    { type: "gap", q: "Sie kommt mit einer ___ Handtasche. (elegant)", a: ["eleganten"] },
    { type: "mc", q: "___ Jacke gefällt dir besser?", opts: ["Welche", "Welcher", "Welches"], a: 0 },
    { type: "gap", q: "___ Pullover ist mir zu teuer. (dies-)", a: ["Dieser"] },
    { type: "mc", q: "Ich probiere ___ Schuhe hier an.", opts: ["diese", "diesen", "dieses"], a: 0, why: "Plural Akkusativ → diese." },
    { type: "order", words: ["an", "Kleid", "heute", "du", "Welches", "ziehst"], a: "Welches Kleid ziehst du heute an" }
  ],
  speak: [
    { q: "Was trägst du heute?", en: "What are you wearing today?", accept: ["trage", "habe"], model: ["Heute trage ich eine blaue Jeans und ein weißes T-Shirt."] },
    { q: "Was ziehst du zu einer Hochzeit an?", en: "What do you wear to a wedding?", accept: ["ziehe", "trage", "anzug", "kleid"], model: ["Zu einer Hochzeit ziehe ich ein elegantes Hemd und eine dunkle Hose an."] },
    { q: "Ist dir Mode wichtig?", en: "Is fashion important to you?", accept: ["mode", "wichtig", "bequem"], model: ["Mode ist mir nicht so wichtig, ich trage am liebsten bequeme Sachen."] },
    { q: "Welche Farbe trägst du am liebsten?", en: "Which colour do you like wearing most?", accept: ["trage", "farbe", "blau", "grün", "rot", "schwarz", "weiß", "grau"], model: ["Am liebsten trage ich Blau, besonders ein dunkles Blau."] },
    { q: "Was hast du zuletzt gekauft?", en: "What did you buy last?", accept: ["gekauft"], model: ["Ich habe letzte Woche einen warmen Mantel für die Reise nach Deutschland gekauft."] }
  ],
  shadow: ["Kann ich diese Jacke mal anprobieren?", "Die Hose passt mir leider nicht, sie ist zu eng.", "Das blaue Hemd steht dir wirklich gut.", "Im Winter brauche ich einen warmen Mantel und einen dicken Schal.", "Welche Schuhe nimmst du, die braunen oder die schwarzen?", "Ich möchte dieses Kleid umtauschen, es ist zu groß."]
},
{
  id: 18, level: "A2", title: "Urlaub planen", en: "Planning a holiday: compare & choose",
  cando: ["Plan a trip and book accommodation", "Compare places and options (besser, am besten)", "Talk about conditions with wenn", "Say what you like most on holiday"],
  vocab: `
die Unterkunft | Unterkünfte | accommodation | Wir suchen eine günstige Unterkunft. = We're looking for cheap accommodation.
die Ferienwohnung | Ferienwohnungen | holiday flat | Die Ferienwohnung liegt direkt am Strand. = The holiday flat is right on the beach.
die Jugendherberge | Jugendherbergen | youth hostel
der Campingplatz | Campingplätze | campsite
das Doppelzimmer | Doppelzimmer | double room | Ich möchte ein Doppelzimmer für drei Nächte. = I'd like a double room for three nights.
das Einzelzimmer | Einzelzimmer | single room
die Übernachtung | Übernachtungen | overnight stay | Eine Übernachtung kostet 90 Euro. = One night costs 90 euros.
die Halbpension | — | half board
das Reisebüro | Reisebüros | travel agency
der Strand | Strände | beach | Am Strand ist es am schönsten. = The beach is the best place to be.
die Insel | Inseln | island
die Küste | Küsten | coast
das Ausland | — | abroad | Fahrt ihr im Sommer ins Ausland? = Are you going abroad in the summer?
die Sehenswürdigkeit | Sehenswürdigkeiten | sight, attraction
die Rundfahrt | Rundfahrten | sightseeing tour (by bus/boat)
der Ausflug | Ausflüge | day trip, excursion | Morgen machen wir einen Ausflug in die Berge. = Tomorrow we're taking a trip to the mountains.
das Gepäck | — | luggage
die Abfahrt | Abfahrten | departure
die Ankunft | Ankünfte | arrival
die Saison | Saisons | (tourist) season | In der Hauptsaison ist alles teurer. = In high season everything is more expensive.
wandern | | to hike | Wenn das Wetter gut ist, wandern wir. = If the weather is good, we'll go hiking.
übernachten | | to stay overnight
reservieren | | to reserve
planen | | to plan
vergleichen | | to compare | Ich vergleiche die Preise im Internet. = I compare prices online.
sich entscheiden | | to decide | Wir können uns nicht entscheiden. = We can't decide.
besichtigen | | to visit, see (sights) | Morgen besichtigen wir den Dom. = Tomorrow we're visiting the cathedral.
günstig | | good value, cheap
voll | | full, crowded
leer | | empty
erholsam | | relaxing, restful
spannend | | exciting
als | | than | Der Zug ist schneller als der Bus. = The train is faster than the bus.
gut – besser – am besten | | good – better – best | Welcher Strand gefällt dir am besten? = Which beach do you like best?
viel – mehr – am meisten | | much – more – most
wenn | | if, when(ever) | Wenn es regnet, gehen wir ins Museum. = If it rains, we'll go to the museum.
`,
  grammar: [
    { t: "Comparative", html: `
<p>To compare two things, add <b>-er</b> to the adjective and use <b>als</b> (than).</p>
<table><tr><th>Adjective</th><th>Comparative</th><th>Example</th></tr>
<tr><td>schnell</td><td>schnell<b>er</b></td><td>Der Zug ist schneller <b>als</b> der Bus.</td></tr>
<tr><td>günstig</td><td>günstig<b>er</b></td><td>Die Ferienwohnung ist günstiger als das Hotel.</td></tr>
<tr><td>warm / alt / groß / jung</td><td>w<b>ä</b>rmer / <b>ä</b>lter / gr<b>ö</b>ßer / j<b>ü</b>nger</td><td>Tel Aviv ist wärmer als Berlin.</td></tr>
<tr><td>teuer</td><td>teu<b>rer</b></td><td>Im Sommer ist alles teurer.</td></tr></table>
<p>Irregular: <b>gut → besser</b>, <b>viel → mehr</b>, <b>gern → lieber</b>, <b>hoch → höher</b>.</p>
<p>Equal: <b>so … wie</b>: <i>Der Zug ist so teuer wie der Flug.</i></p>
<p class="tip">Never say "mehr schön". German always uses -er, even for long words: interessant<b>er</b>, bequem<b>er</b>.</p>` },
    { t: "Superlative", html: `
<p>For "the most", use <b>am … -sten</b> after a verb, or <b>der/die/das … -ste</b> before a noun.</p>
<table><tr><th>Adjective</th><th>am …</th><th>before a noun</th></tr>
<tr><td>schön</td><td>am schön<b>sten</b></td><td>der schön<b>ste</b> Strand</td></tr>
<tr><td>teuer</td><td>am teuer<b>sten</b></td><td>das teuer<b>ste</b> Hotel</td></tr>
<tr><td>heiß / alt (s, ß, t, z + -esten)</td><td>am heiß<b>esten</b> / am ält<b>esten</b></td><td>der heiß<b>este</b> Monat</td></tr>
<tr><td>gut / viel / gern</td><td>am <b>besten</b> / am <b>meisten</b> / am <b>liebsten</b></td><td>die <b>beste</b> Idee</td></tr></table>
<p><i>Im August ist es <b>am heißesten</b>.</i> · <i>Das ist <b>die schönste</b> Insel.</i></p>` },
    { t: "wenn-clauses", html: `
<p><b>wenn</b> = if / when(ever). Like weil, it sends the verb to the <b>end</b>.</p>
<table><tr><th>Order</th><th>Example</th></tr>
<tr><td>Main clause first</td><td>Wir gehen an den Strand, wenn das Wetter schön <b>ist</b>.</td></tr>
<tr><td>wenn-clause first</td><td>Wenn das Wetter schön <b>ist</b>, <b>gehen</b> wir an den Strand.</td></tr></table>
<p>If the wenn-clause comes first, it counts as position 1 — so the main clause <b>starts with the verb</b>: verb, comma, verb.</p>
<p class="tip">Hebrew אם and כש both become <b>wenn</b> for the present and future: <i>Wenn ich Urlaub habe, …</i> = כשיש לי חופש…</p>` }
  ],
  ex: [
    { type: "gap", q: "Der Zug ist ___ ___ der Bus. (schnell)", a: ["schneller", "als"] },
    { type: "gap", q: "Im Sommer ist es in Tel Aviv ___ als in Berlin. (warm)", a: ["wärmer"] },
    { type: "mc", q: "Die Ferienwohnung ist ___ als das Hotel.", opts: ["günstiger", "günstigerer", "mehr günstig"], a: 0 },
    { type: "mc", q: "Ich fahre ___ ans Meer als in die Berge.", opts: ["lieber", "gerner", "mehr gern"], a: 0, why: "gern – lieber – am liebsten is irregular." },
    { type: "gap", q: "Im August ist es am ___. (heiß)", a: ["heißesten"] },
    { type: "mc", q: "Das ist das ___ Hotel in der Stadt.", opts: ["teuerste", "teuersten", "am teuersten"], a: 0 },
    { type: "gap", q: "Was hat dir im Urlaub am ___ gefallen? (gut)", a: ["besten"] },
    { type: "order", words: ["am", "Im", "ist", "hier", "schönsten", "es", "Frühling"], a: "Im Frühling ist es hier am schönsten" },
    { type: "gap", q: "Wenn das Wetter schön ___, gehen wir an den Strand. (sein)", a: ["ist"] },
    { type: "mc", q: "Wenn ich Urlaub habe, ___.", opts: ["ich schlafe lange", "schlafe ich lange", "ich lange schlafe"], a: 1, why: "The wenn-clause is position 1, so the verb of the main clause comes next." },
    { type: "gap", q: "Wir bleiben im Hotel, wenn es morgen ___. (regnen)", a: ["regnet"] },
    { type: "order", words: ["besuche", "Wenn", "ich", "Zeit", "habe,", "ich", "meine", "Eltern"], a: "Wenn ich Zeit habe, besuche ich meine Eltern" }
  ],
  speak: [
    { q: "Wohin fährst du am liebsten in den Urlaub?", en: "Where do you like to go on holiday most?", accept: ["am liebsten", "fahre", "fliege"], model: ["Am liebsten fahre ich ans Meer, zum Beispiel nach Griechenland."] },
    { q: "Was ist besser: ein Hotel oder eine Ferienwohnung?", en: "What's better: a hotel or a holiday flat?", accept: ["besser", "lieber", "als"], model: ["Ich finde eine Ferienwohnung besser, weil sie größer und günstiger als ein Hotel ist."] },
    { q: "Was machst du, wenn es im Urlaub regnet?", en: "What do you do if it rains on holiday?", accept: ["wenn", "museum", "lese", "gehe"], model: ["Wenn es regnet, gehe ich ins Museum oder lese ein Buch."] },
    { q: "Wie planst du deinen Urlaub?", en: "How do you plan your holiday?", accept: ["vergleiche", "buche", "plane", "suche", "internet", "reisebüro"], model: ["Ich vergleiche die Preise im Internet und buche alles sehr früh."] },
    { q: "Welche Stadt hat dir bis jetzt am besten gefallen?", en: "Which city have you liked best so far?", accept: ["am besten", "gefallen", "gefällt"], model: ["Bis jetzt hat mir Wien am besten gefallen."] }
  ],
  shadow: ["Die Ferienwohnung ist größer und günstiger als das Hotel.", "Im August ist es an der Küste am heißesten.", "Wenn das Wetter schön ist, machen wir einen Ausflug.", "Ich möchte ein Doppelzimmer für drei Nächte reservieren.", "Am liebsten fahre ich ans Meer, aber mein Partner wandert lieber.", "Wir können uns nicht entscheiden: Insel oder Berge?"]
}
);
