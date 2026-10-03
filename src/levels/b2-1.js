// B2 lessons 37-42, written for this app.
LESSONS.push(
{
  id: 37, level: "B2", title: "Kommunikation", en: "Misunderstandings, politeness & reported speech",
  cando: ["Report what others said in a neutral, formal way", "Recognise Konjunktiv I in news and reports", "Clear up misunderstandings politely", "Choose between Konjunktiv I and II in reported speech"],
  vocab: `
das Missverständnis | Missverständnisse | misunderstanding | Das war wohl ein Missverständnis. = That was probably a misunderstanding.
missverstehen | | to misunderstand | Ich glaube, Sie haben mich missverstanden. = I think you misunderstood me.
die Höflichkeit | — | politeness | In Japan spielt Höflichkeit eine besonders große Rolle. = Politeness plays a particularly big role in Japan.
höflich | | polite
unhöflich | | rude, impolite | Es gilt als unhöflich, im Gespräch ständig aufs Handy zu schauen. = It's considered rude to keep looking at your phone during a conversation.
direkt | | direct, straightforward | Israelis gelten im Ausland oft als sehr direkt. = Abroad, Israelis are often considered very direct.
die Äußerung | Äußerungen | statement, remark
sich äußern | | to comment, give one's view | Der Minister wollte sich nicht dazu äußern. = The minister didn't want to comment on it.
behaupten | | to claim | Er behauptet, er habe nichts davon gewusst. = He claims he knew nothing about it.
die Behauptung | Behauptungen | claim, assertion
betonen | | to emphasise | Sie betonte, das Projekt sei nicht gefährdet. = She stressed that the project was not at risk.
erwähnen | | to mention | Er hat mit keinem Wort erwähnt, dass er kündigen will. = He didn't say a word about wanting to quit.
mitteilen | | to inform, notify | Man hat uns mitgeteilt, der Termin falle aus. = We were informed that the appointment is cancelled.
die Mitteilung | Mitteilungen | notice, announcement
die Aussage | Aussagen | statement | Seine Aussage widerspricht den Fakten. = His statement contradicts the facts.
zitieren | | to quote
das Gerücht | Gerüchte | rumour | Es gibt das Gerücht, die Firma werde verkauft. = There's a rumour that the company is going to be sold.
der Tonfall | Tonfälle | tone of voice | Nicht was er sagte, sondern sein Tonfall hat mich gestört. = It wasn't what he said but his tone that bothered me.
die Körpersprache | — | body language
der Blickkontakt | — | eye contact | In manchen Kulturen vermeidet man direkten Blickkontakt. = In some cultures people avoid direct eye contact.
unterbrechen | | to interrupt | Darf ich Sie kurz unterbrechen? = May I interrupt you for a moment?
nachfragen | | to ask (again), check back | Wenn du unsicher bist, frag lieber noch einmal nach. = If you're unsure, better check back.
sich ausdrücken | | to express oneself | Habe ich mich unklar ausgedrückt? = Did I express myself unclearly?
klarstellen | | to clarify, set straight | Ich möchte eins klarstellen: Das war keine Kritik. = I'd like to make one thing clear: that wasn't criticism.
ausweichend | | evasive | Er gab nur eine ausweichende Antwort. = He only gave an evasive answer.
taktvoll | | tactful
der Gesprächspartner | Gesprächspartner | conversation partner
die Ironie | — | irony | Leider hat er die Ironie nicht verstanden. = Unfortunately he didn't get the irony.
etwas ernst nehmen | | to take something seriously | Nimm seine Bemerkung nicht so ernst! = Don't take his remark so seriously.
angeblich | | allegedly, supposedly | Angeblich ist er schon unterwegs. = Supposedly he's already on his way.
laut (+ Dat.) | | according to | Laut dem Bericht sei die Zahl gestiegen. = According to the report, the number has risen.
der Vorwurf | Vorwürfe | accusation, reproach | Er wies alle Vorwürfe zurück. = He rejected all accusations.
zurückweisen | | to reject (a claim)
`,
  grammar: [
    { t: "Konjunktiv I: reported speech", html: `
<p>News, reports and formal writing use <b>Konjunktiv I</b> to show: "this is what <i>someone else</i> said, not my claim". Take the infinitive stem and add the endings. In practice you mostly need the <b>er/sie/es</b> form.</p>
<table><tr><th>Infinitive</th><th>er/sie/es (Konj. I)</th><th>Indicative</th></tr>
<tr><td>sein</td><td><b>sei</b></td><td>ist</td></tr>
<tr><td>haben</td><td>hab<b>e</b></td><td>hat</td></tr>
<tr><td>werden</td><td>werd<b>e</b></td><td>wird</td></tr>
<tr><td>können</td><td>könn<b>e</b></td><td>kann</td></tr>
<tr><td>fahren</td><td>fahr<b>e</b></td><td>fährt</td></tr></table>
<p><b>Past:</b> habe/sei + Partizip II: <i>Er sagt, er <b>habe</b> nichts <b>gewusst</b>. Sie sagt, sie <b>sei</b> spät <b>gekommen</b>.</i></p>
<p><b>Future:</b> werde + Infinitiv: <i>Sie sagt, sie <b>werde</b> morgen <b>anrufen</b>.</i></p>
<p class="tip">Hebrew and English just use the normal past ("he said he was ill"). German news would write <i>Er sagte, er <b>sei</b> krank.</i> You mainly need to <b>recognise</b> it and use it in formal writing.</p>` },
    { t: "Konjunktiv II as a substitute", html: `
<p>When the Konjunktiv I form looks exactly like the indicative (mostly in the plural and ich-form), switch to <b>Konjunktiv II</b> or <b>würde + Infinitiv</b> so the reader still sees it's reported.</p>
<table><tr><th>Konj. I</th><th>= Indicative?</th><th>Use instead</th></tr>
<tr><td>sie hab<b>en</b></td><td>yes</td><td>sie <b>hätten</b></td></tr>
<tr><td>sie komm<b>en</b></td><td>yes</td><td>sie <b>kämen</b> / <b>würden</b> kommen</td></tr>
<tr><td>sie kauf<b>en</b></td><td>yes</td><td>sie <b>würden</b> kaufen</td></tr>
<tr><td>er fahr<b>e</b></td><td>no (fährt)</td><td>keep: er fahre</td></tr></table>
<p><i>Die Kollegen sagen, sie <b>hätten</b> keine Zeit.</i></p>
<p class="tip">In everyday speech many Germans just use the indicative or Konjunktiv II: <i>Er hat gesagt, dass er krank ist / wäre.</i> Both are fine when talking.</p>` },
    { t: "Reporting questions and requests", html: `
<p><b>Yes/no questions</b> → <b>ob</b>; <b>W-questions</b> keep the W-word. The verb goes to the end.</p>
<p><i>"Hast du Zeit?" → Sie fragt, <b>ob</b> ich Zeit <b>habe</b>.</i><br><i>"Wann beginnt das Meeting?" → Er fragt, <b>wann</b> das Meeting <b>beginne</b>.</i></p>
<p><b>Commands and requests</b> → <b>sollen</b> (polite: <b>mögen</b>).</p>
<table><tr><th>Direct</th><th>Reported</th></tr>
<tr><td>Schicken Sie mir den Bericht!</td><td>Er sagt, ich <b>solle</b> ihm den Bericht schicken.</td></tr>
<tr><td>Bitte rufen Sie zurück.</td><td>Sie bittet, man <b>möge</b> zurückrufen.</td></tr></table>` }
  ],
  ex: [
    { type: "gap", q: "Der Sprecher sagt, die Firma ___ keine finanziellen Probleme. (haben, Konj. I)", a: ["habe"] },
    { type: "gap", q: "Sie behauptet, sie ___ an dem Tag krank gewesen. (sein, Konj. I)", a: ["sei"] },
    { type: "mc", q: "Der Minister erklärte, er ___ von dem Skandal nichts gewusst.", opts: ["habe", "sei", "werde"], a: 0, why: "wissen forms its past with haben → habe gewusst." },
    { type: "order", words: ["er sei", "Er", "sagt,", "zufrieden", "sehr"], a: "Er sagt, er sei sehr zufrieden" },
    { type: "mc", q: "Die Kollegen sagen, sie ___ keine Zeit.", opts: ["haben", "hätten", "habe"], a: 1, why: "Konjunktiv I 'sie haben' looks like the indicative, so use Konjunktiv II: hätten." },
    { type: "gap", q: "Die Kunden sagen, sie ___ das Produkt nicht mehr ___. (kaufen – würde + Inf.)", a: ["würden", "kaufen"] },
    { type: "gap", q: "Die Forscher erklären, sie ___ neue Daten. (haben)", a: ["hätten"] },
    { type: "mc", q: "Sie sagt, ihr Mann ___ morgen nach Berlin. (Konjunktiv I)", opts: ["fahre", "fährt", "führe"], a: 0, why: "'er fahre' is different from the indicative 'er fährt', so Konjunktiv I works." },
    { type: "gap", q: "Sie fragt, ___ ich morgen Zeit ___. (haben)", a: ["ob", "habe/hätte"] },
    { type: "mc", q: "Chef: Schicken Sie mir den Bericht! → Der Chef sagt, ich ___ ihm den Bericht schicken.", opts: ["solle", "könne", "werde"], a: 0, why: "Commands become sollen in reported speech." },
    { type: "order", words: ["wann", "Er", "fragt,", "beginne", "die", "Besprechung"], a: "Er fragt, wann die Besprechung beginne" },
    { type: "gap", q: "Der Kunde fragte, wie lange die Lieferung ___. (dauern, Konj. I)", a: ["dauere"] }
  ],
  speak: [
    { q: "Erzähl von einem Missverständnis, das du erlebt hast.", en: "Tell me about a misunderstanding you experienced.", accept: ["missverständnis", "dachte", "gemeint", "verstanden"], model: ["Ein Kollege dachte, ich hätte den Termin abgesagt, dabei hatte ich ihn nur verschoben."] },
    { q: "Sind Israelis direkter als Deutsche?", en: "Are Israelis more direct than Germans?", accept: ["direkt", "höflich", "meiner meinung", "ich finde", "glaube"], model: ["Ich finde, beide sind ziemlich direkt, aber bei uns unterbricht man sich im Gespräch viel häufiger."] },
    { q: "Was hat dein Chef in der letzten Besprechung gesagt?", en: "What did your boss say in the last meeting? (use reported speech)", accept: ["sagte", "sei", "habe", "werde", "meinte"], model: ["Er sagte, das Projekt sei im Zeitplan und wir müssten uns keine Sorgen machen."] },
    { q: "Wie reagierst du, wenn dich jemand missversteht?", en: "How do you react when someone misunderstands you?", accept: ["stelle", "kläre", "frage nach", "erkläre", "ruhig"], model: ["Ich stelle ruhig klar, was ich gemeint habe, und frage nach, ob es jetzt verständlich ist."] },
    { q: "Welches Gerücht hast du kürzlich gehört?", en: "What rumour have you heard recently?", accept: ["gerücht", "angeblich", "es heißt", "sei", "habe", "werde"], model: ["Angeblich zieht unsere Abteilung bald um, aber niemand hat es offiziell bestätigt."] }
  ],
  shadow: ["Er sagte, er habe die E-Mail nie bekommen.", "Laut der Pressesprecherin sei die Lage unter Kontrolle.", "Darf ich kurz nachfragen, wie Sie das gemeint haben?", "Ich glaube, da liegt ein kleines Missverständnis vor.", "Sie betonte, dass niemand die Schuld daran trage.", "Meine Kollegen meinten, sie hätten keine Zeit für ein weiteres Meeting."]
},
{
  id: 38, level: "B2", title: "Karriere", en: "Career, leadership & negotiations",
  cando: ["Talk about career goals, strengths and leadership", "Negotiate salary and conditions", "Turn clauses into noun phrases for a formal style", "Use common noun-verb combinations"],
  vocab: `
die Karriere | Karrieren | career | Sie hat in kurzer Zeit Karriere gemacht. = She made a career for herself in a short time.
die Führungskraft | Führungskräfte | manager, executive | Gute Führungskräfte hören zuerst zu. = Good managers listen first.
führen | | to lead, manage | Er führt ein Team von zwölf Leuten. = He leads a team of twelve people.
übernehmen | | to take over, take on
befördern | | to promote
die Verhandlung | Verhandlungen | negotiation
verhandeln | | to negotiate | Über das Gehalt müssen wir noch verhandeln. = We still have to negotiate the salary.
die Gehaltserhöhung | Gehaltserhöhungen | pay rise | Ich möchte über eine Gehaltserhöhung sprechen. = I'd like to talk about a pay rise.
das Gegenangebot | Gegenangebote | counter-offer
die Forderung | Forderungen | demand
die Bedingung | Bedingungen | condition | Unter dieser Bedingung bin ich einverstanden. = On that condition I agree.
die Kompetenz | Kompetenzen | competence, skill
der Werdegang | Werdegänge | career path, background | Erzählen Sie kurz von Ihrem beruflichen Werdegang. = Briefly tell us about your professional background.
sich selbstständig machen | | to start one's own business | Mit 35 hat er sich selbstständig gemacht. = At 35 he set up his own business.
ehrgeizig | | ambitious | Er ist ehrgeizig, aber fair. = He is ambitious but fair.
durchsetzungsfähig | | assertive
eine Entscheidung treffen | | to make a decision | Wir müssen bis Freitag eine Entscheidung treffen. = We have to make a decision by Friday.
infrage kommen | | to be an option | Diese Stelle kommt für mich nicht infrage. = This position isn't an option for me.
zur Verfügung stehen | | to be available | Für Rückfragen stehe ich Ihnen gern zur Verfügung. = I'm happy to answer any questions.
Kritik üben | | to criticise (formal) | Der Betriebsrat übte scharfe Kritik an den Plänen. = The works council sharply criticised the plans.
zum Abschluss bringen | | to bring to a conclusion
eine Rolle spielen | | to play a role | Das Gehalt spielt für mich nicht die wichtigste Rolle. = Salary isn't the most important thing for me.
Bescheid geben | | to let (someone) know | Geben Sie mir bitte bis Montag Bescheid. = Please let me know by Monday.
die Konkurrenz | — | competition, competitors
der Betriebsrat | Betriebsräte | works council | Der Betriebsrat vertritt die Interessen der Belegschaft. = The works council represents the interests of the workforce.
der Vorstand | Vorstände | (executive) board | Der Vorstand hat die Fusion einstimmig beschlossen. = The board approved the merger unanimously.
die Belegschaft | Belegschaften | workforce, staff
die Rückfrage | Rückfragen | (follow-up) question, query
die Gehaltsverhandlung | Gehaltsverhandlungen | salary negotiation | Vor der Gehaltsverhandlung sollte man den Marktwert seiner Stelle kennen. = Before a salary negotiation you should know the market value of your position.
die Aufstiegschance | Aufstiegschancen | chance of promotion | In kleinen Firmen sind die Aufstiegschancen oft begrenzt. = In small companies the chances of promotion are often limited.
die Führungsposition | Führungspositionen | leadership position | Frauen sind in Führungspositionen noch immer unterrepräsentiert. = Women are still underrepresented in leadership positions.
delegieren | | to delegate | Wer alles selbst machen will, kann schlecht delegieren. = If you want to do everything yourself, you're bad at delegating.
sich durchsetzen | | to assert oneself, prevail | Mit ihrem Vorschlag konnte sie sich am Ende durchsetzen. = In the end she managed to push her proposal through.
das Arbeitszeugnis | Arbeitszeugnisse | employer's reference
`,
  grammar: [
    { t: "Nominalisierung: clause → noun phrase", html: `
<p>Formal German (reports, emails, news) often replaces a whole subordinate clause with a <b>preposition + noun</b>. The result is shorter and more "official".</p>
<table><tr><th>Clause (verbal style)</th><th>Noun phrase (nominal style)</th></tr>
<tr><td><b>weil</b> er krank war</td><td><b>wegen</b> seiner Krankheit (+ Gen.)</td></tr>
<tr><td><b>obwohl</b> es regnete</td><td><b>trotz</b> des Regens (+ Gen.)</td></tr>
<tr><td><b>wenn</b> Sie Fragen haben</td><td><b>bei</b> Fragen (+ Dat.)</td></tr>
<tr><td><b>nachdem</b> sie befördert wurde</td><td><b>nach</b> ihrer Beförderung</td></tr>
<tr><td><b>bevor</b> die Verhandlung beginnt</td><td><b>vor</b> Beginn der Verhandlung</td></tr>
<tr><td><b>während</b> er studierte</td><td><b>während</b> seines Studiums</td></tr></table>
<p class="tip">Use nominal style in writing; in conversation, the clause usually sounds more natural.</p>` },
    { t: "How to build the noun", html: `
<p>Verbs and adjectives become nouns, the subject becomes a <b>genitive</b> or possessive, and adverbs become <b>adjectives</b>.</p>
<table><tr><th>From</th><th>Noun</th><th>Example</th></tr>
<tr><td>verb + <b>-ung</b></td><td>entscheiden → die Entscheid<b>ung</b></td><td>Der Chef entscheidet. → die Entscheidung <b>des</b> Chef<b>s</b></td></tr>
<tr><td>verb stem / infinitive</td><td>beginnen → der Beginn; verhandeln → <b>das</b> Verhandeln</td><td>vor Beginn des Gesprächs</td></tr>
<tr><td>adjective + <b>-heit/-keit</b></td><td>krank → die Krank<b>heit</b>, pünktlich → die Pünktlich<b>keit</b></td><td>wegen seiner Krankheit</td></tr>
<tr><td>adverb → adjective</td><td>schnell reagieren</td><td>seine schnell<b>e</b> Reaktion</td></tr></table>
<p class="tip">Most nouns in <b>-ung, -heit, -keit</b> are feminine: die Leistung, die Freiheit, die Möglichkeit.</p>` },
    { t: "Nomen-Verb-Verbindungen", html: `
<p>Many formal expressions combine a noun that carries the meaning with a "weak" verb. They often replace a simple verb.</p>
<table><tr><th>Noun-verb combination</th><th>Simple verb</th></tr>
<tr><td>eine Entscheidung <b>treffen</b></td><td>entscheiden</td></tr>
<tr><td>Kritik <b>üben</b> (an + Dat.)</td><td>kritisieren</td></tr>
<tr><td>zur Verfügung <b>stehen</b></td><td>verfügbar sein</td></tr>
<tr><td>zum Abschluss <b>bringen</b></td><td>abschließen</td></tr>
<tr><td>infrage <b>kommen</b></td><td>möglich sein</td></tr>
<tr><td>einen Vorschlag <b>machen</b></td><td>vorschlagen</td></tr></table>
<p class="tip">Learn them as fixed chunks: you can't swap the verb. It's "eine Entscheidung <b>treffen</b>", never "machen" (unlike English "make a decision").</p>` }
  ],
  ex: [
    { type: "mc", q: "Weil er krank war, fehlte er. → ___ seiner Krankheit fehlte er.", opts: ["Wegen", "Trotz", "Bei"], a: 0 },
    { type: "gap", q: "Obwohl sie viel Erfahrung hat, wurde sie nicht befördert. → ___ ihrer großen Erfahrung wurde sie nicht befördert.", a: ["Trotz"] },
    { type: "mc", q: "Wenn Sie Fragen haben, rufen Sie mich an. → ___ Fragen rufen Sie mich an.", opts: ["Bei", "Mit", "Wegen"], a: 0 },
    { type: "order", words: ["waren", "der", "Nach", "alle", "Verhandlung", "zufrieden"], a: "Nach der Verhandlung waren alle zufrieden" },
    { type: "gap", q: "Der Vorstand entscheidet. → die Entscheidung ___ Vorstands", a: ["des"] },
    { type: "mc", q: "pünktlich → die ___", opts: ["Pünktlichkeit", "Pünktlichheit", "Pünktlichung"], a: 0 },
    { type: "gap", q: "Er hat schnell reagiert. → seine ___ Reaktion", a: ["schnelle"] },
    { type: "mc", q: "bevor das Gespräch beginnt → vor ___ des Gesprächs", opts: ["Beginn", "Beginnen", "Begonnen"], a: 0 },
    { type: "gap", q: "Wir müssen bald eine Entscheidung ___. (to make)", a: ["treffen"] },
    { type: "mc", q: "Der Betriebsrat ___ scharfe Kritik an den neuen Regeln.", opts: ["übte", "machte", "stellte"], a: 0 },
    { type: "gap", q: "Für Rückfragen stehe ich Ihnen gern zur ___. (available)", a: ["Verfügung"] },
    { type: "mc", q: "Eine Stelle in Eilat ___ für mich leider nicht infrage.", opts: ["kommt", "steht", "geht"], a: 0 }
  ],
  speak: [
    { q: "Was ist dir bei einem Job wichtiger: das Gehalt oder die Verantwortung?", en: "What matters more to you in a job: salary or responsibility?", accept: ["gehalt", "verantwortung", "wichtiger", "rolle"], model: ["Für mich spielt die Verantwortung eine größere Rolle als das Gehalt, solange es fair ist."] },
    { q: "Was sind deine größten beruflichen Stärken?", en: "What are your greatest professional strengths?", accept: ["stärke", "bin", "kann"], model: ["Zu meinen Stärken gehört, dass ich auch unter Druck ruhig bleibe und klare Entscheidungen treffe."] },
    { q: "Wie bereitest du dich auf eine Gehaltsverhandlung vor?", en: "How do you prepare for a salary negotiation?", accept: ["vorbereitung", "bereite", "informiere", "argument"], model: ["Zur Vorbereitung informiere ich mich über die üblichen Gehälter in der Branche und sammle gute Argumente."] },
    { q: "Was macht eine gute Führungskraft aus?", en: "What makes a good manager?", accept: ["führungskraft", "gute", "sollte", "muss"], model: ["Eine gute Führungskraft übernimmt Verantwortung, gibt ehrliches Feedback und nimmt Rücksicht auf ihr Team."] },
    { q: "Würdest du dich gern selbstständig machen?", en: "Would you like to start your own business?", accept: ["selbstständig", "würde", "lieber", "nicht"], model: ["Langfristig würde ich mich gern selbstständig machen, aber im Moment fehlt mir dafür das Kapital."] }
  ],
  shadow: ["Wegen der schlechten Zahlen wurde meine Beförderung verschoben.", "Bei Rückfragen stehe ich Ihnen jederzeit zur Verfügung.", "Nach langen Verhandlungen haben wir endlich einen Kompromiss gefunden.", "Trotz ihrer Erfahrung musste sie hart um eine Gehaltserhöhung kämpfen.", "Wir sollten die Entscheidung erst nach dem Gespräch mit dem Team treffen.", "Eine gute Führungskraft übernimmt Verantwortung, auch für Fehler."]
},
{
  id: 39, level: "B2", title: "Wissenschaft und Technik", en: "Research, AI & inventions",
  cando: ["Discuss research, technology and artificial intelligence", "Say what can or must be done without using the passive", "Use sich lassen, sein + zu and -bar/-lich adjectives", "Weigh up the risks and benefits of technical progress"],
  vocab: `
die Wissenschaft | Wissenschaften | science
der Wissenschaftler | Wissenschaftler | scientist | Viele Wissenschaftler warnen vor den Folgen. = Many scientists warn of the consequences.
die Forschung | Forschungen | research | Israel investiert besonders viel in Forschung. = Israel invests particularly heavily in research.
forschen | | to do research
das Experiment | Experimente | experiment
die Erfindung | Erfindungen | invention | Der USB-Stick ist eine israelische Erfindung. = The USB stick is an Israeli invention.
erfinden | | to invent
die Entdeckung | Entdeckungen | discovery
entdecken | | to discover
die künstliche Intelligenz | — | artificial intelligence (KI) | Künstliche Intelligenz verändert viele Berufe. = Artificial intelligence is changing many professions.
der Algorithmus | Algorithmen | algorithm
die Daten | Pl. | data | Die Daten lassen sich automatisch auswerten. = The data can be analysed automatically.
auswerten | | to analyse, evaluate
die Entwicklung | Entwicklungen | development
entwickeln | | to develop | Das Team hat eine neue App entwickelt. = The team has developed a new app.
der Fortschritt | Fortschritte | progress
die Technologie | Technologien | technology
digital | | digital
die Digitalisierung | — | digitalisation | Die Digitalisierung der Schulen geht nur langsam voran. = The digitalisation of schools is progressing slowly.
das Gerät | Geräte | device, appliance
die Anwendung | Anwendungen | application, use
programmieren | | to program
die Erkenntnis | Erkenntnisse | finding, insight | Neue Erkenntnisse zeigen, dass Schlaf das Gedächtnis stärkt. = New findings show that sleep strengthens memory.
die Hypothese | Hypothesen | hypothesis
beweisen | | to prove | Das lässt sich leider nicht beweisen. = Unfortunately that can't be proven.
nachweisbar | | detectable, provable
machbar | | feasible | Ist das technisch überhaupt machbar? = Is that technically feasible at all?
vorhersehbar | | predictable
unvorstellbar | | unimaginable | Vor zwanzig Jahren war so etwas unvorstellbar. = Twenty years ago something like that was unimaginable.
der Datenschutz | — | data protection
das Risiko | Risiken | risk
ersetzen | | to replace | Kann KI eines Tages Ärzte ersetzen? = Can AI replace doctors one day?
die Innovation | Innovationen | innovation
ethisch | | ethical | Diese Frage ist vor allem ethisch schwierig. = This question is above all ethically difficult.
`,
  grammar: [
    { t: "sich lassen + infinitive", html: `
<p><b>sich lassen + Infinitiv</b> means "can be done". It replaces <i>kann ... werden</i> and sounds more elegant.</p>
<table><tr><th>Passive with können</th><th>sich lassen</th><th>man</th></tr>
<tr><td>Das Problem kann gelöst werden.</td><td>Das Problem <b>lässt sich</b> lösen.</td><td>Man kann das Problem lösen.</td></tr>
<tr><td>Die Daten können ausgewertet werden.</td><td>Die Daten <b>lassen sich</b> auswerten.</td><td>Man kann die Daten auswerten.</td></tr></table>
<p>Negative: <i>Das <b>lässt sich</b> nicht beweisen.</i> = It can't be proven.</p>
<p class="tip">Don't use the participle: <i>lässt sich lös<b>en</b></i>, not "gelöst".</p>` },
    { t: "Adjectives with -bar and -lich", html: `
<p><b>Verb stem + -bar</b> (sometimes <b>-lich</b>) = "can be ...-ed", like English "-able". Add <b>un-</b> for the negative.</p>
<table><tr><th>Meaning</th><th>Adjective</th></tr>
<tr><td>Man kann es machen.</td><td>mach<b>bar</b></td></tr>
<tr><td>Man kann es (nicht) vorhersehen.</td><td>vorherseh<b>bar</b> / <b>un</b>vorherseh<b>bar</b></td></tr>
<tr><td>Man kann es beweisen.</td><td>beweis<b>bar</b></td></tr>
<tr><td>Man kann es nicht lesen.</td><td><b>un</b>leser<b>lich</b></td></tr>
<tr><td>Man kann es kaufen (im Laden).</td><td>erhält<b>lich</b></td></tr></table>
<p><i>Das Ergebnis ist nicht vorhersehbar. Die neue Version ist ab Montag erhältlich.</i></p>` },
    { t: "sein + zu + infinitive", html: `
<p><b>sein + zu + Infinitiv</b> means "can be done" <b>or</b> "must be done". Context decides.</p>
<table><tr><th>sein + zu</th><th>Meaning</th></tr>
<tr><td>Der Fehler <b>ist</b> leicht <b>zu finden</b>.</td><td>kann leicht gefunden werden</td></tr>
<tr><td>Die Formulare <b>sind</b> bis Freitag <b>abzugeben</b>.</td><td>müssen abgegeben werden</td></tr>
<tr><td>Die Regeln <b>sind</b> unbedingt <b>zu beachten</b>.</td><td>müssen beachtet werden</td></tr></table>
<p>Separable verbs put <b>zu</b> in the middle: ab<b>zu</b>geben, aus<b>zu</b>werten.</p>
<p class="tip">Words like <i>leicht, kaum, nicht</i> usually signal "can"; deadlines and <i>unbedingt</i> signal "must". Official letters love this form.</p>` }
  ],
  ex: [
    { type: "gap", q: "Das Problem ___ sich leicht lösen.", a: ["lässt"] },
    { type: "mc", q: "Die Daten können schnell ausgewertet werden. =", opts: ["Die Daten lassen sich schnell auswerten.", "Die Daten lassen schnell auswerten.", "Die Daten lassen sich schnell ausgewertet."], a: 0 },
    { type: "order", words: ["lässt", "Diese", "sich", "Frage", "nicht einfach", "beantworten"], a: "Diese Frage lässt sich nicht einfach beantworten" },
    { type: "gap", q: "Mit KI ___ ___ viele Prozesse automatisieren. (sich lassen)", a: ["lassen", "sich"] },
    { type: "mc", q: "Etwas, das man machen kann, ist ___.", opts: ["machbar", "machlich", "gemacht"], a: 0 },
    { type: "gap", q: "Seine Handschrift kann man nicht lesen. Sie ist ___.", a: ["unleserlich"] },
    { type: "mc", q: "Das Ergebnis kann man nicht vorhersehen. → Das Ergebnis ist ___.", opts: ["unvorhersehbar", "unvorhersehlich", "unvorgesehen"], a: 0 },
    { type: "gap", q: "Diese Theorie kann man nicht beweisen. Sie ist nicht ___. (beweisen)", a: ["beweisbar"] },
    { type: "gap", q: "Die Anträge ___ bis Montag ___. (abgeben – sein + zu)", a: ["sind", "abzugeben"] },
    { type: "mc", q: "Der Fehler ist leicht zu finden. =", opts: ["Der Fehler kann leicht gefunden werden.", "Der Fehler muss leicht gefunden werden.", "Der Fehler wird leicht finden."], a: 0 },
    { type: "mc", q: "Die Sicherheitsregeln sind unbedingt zu beachten. =", opts: ["Die Regeln können beachtet werden.", "Die Regeln müssen beachtet werden.", "Man darf die Regeln beachten."], a: 1, why: "sein + zu can mean 'can' or 'must'; unbedingt shows it's an obligation." },
    { type: "order", words: ["kaum", "Dieses", "ist", "zu", "Ergebnis", "erklären"], a: "Dieses Ergebnis ist kaum zu erklären" }
  ],
  speak: [
    { q: "Welche Erfindung findest du am wichtigsten?", en: "Which invention do you think is the most important?", accept: ["erfindung", "wichtigste", "am wichtigsten", "finde"], model: ["Ich finde, das Internet ist die wichtigste Erfindung, weil sich damit Wissen weltweit teilen lässt."] },
    { q: "Kann künstliche Intelligenz Menschen bei der Arbeit ersetzen?", en: "Can artificial intelligence replace people at work?", accept: ["ersetzen", "ki", "intelligenz", "teilweise"], model: ["Manche Aufgaben lassen sich durch KI ersetzen, aber Kreativität und Empathie sind schwer zu automatisieren."] },
    { q: "Wie nutzt du KI im Alltag?", en: "How do you use AI in everyday life?", accept: ["nutze", "benutze", "verwende", "ki"], model: ["Ich nutze KI vor allem, um Texte zu übersetzen und E-Mails schneller zu formulieren."] },
    { q: "Welche Risiken siehst du bei der Digitalisierung?", en: "What risks do you see in digitalisation?", accept: ["risiko", "risiken", "datenschutz", "gefahr", "sehe"], model: ["Ich sehe vor allem Risiken beim Datenschutz, denn persönliche Daten sind kaum noch zu kontrollieren."] },
    { q: "Warum ist Israel in Forschung und Technik so stark?", en: "Why is Israel so strong in research and technology?", accept: ["weil", "forschung", "investiert"], model: ["Weil sehr viel in Forschung investiert wird und junge Leute oft bereit sind, Risiken einzugehen."] }
  ],
  shadow: ["Viele Aufgaben lassen sich heute mit künstlicher Intelligenz automatisieren.", "Ist das technisch überhaupt machbar?", "Die Ergebnisse sind vor der Veröffentlichung genau zu prüfen.", "Diese Entwicklung war vor zwanzig Jahren noch unvorstellbar.", "Persönliche Daten sind besonders gut zu schützen.", "Man kann den Fortschritt nicht aufhalten, aber man kann ihn gestalten."]
},
{
  id: 40, level: "B2", title: "Körper und Psyche", en: "Stress, mental health & sleep",
  cando: ["Talk about stress, sleep and mental health", "Describe symptoms, causes and coping strategies", "Understand and build extended participle attributes", "Give advice on staying balanced"],
  vocab: `
die Psyche | — | psyche, mind
psychisch | | mental, psychological | Psychische Erkrankungen sind keine Schwäche. = Mental illnesses are not a weakness.
die Erkrankung | Erkrankungen | illness, disease
belastend | | stressful, burdensome
die Überforderung | — | being overwhelmed
überfordert | | overwhelmed | Viele berufstätige Eltern fühlen sich überfordert. = Many working parents feel overwhelmed.
das Burn-out | Burn-outs | burnout
die Erschöpfung | — | exhaustion
erschöpft | | exhausted | Nach der Projektphase war ich völlig erschöpft. = After the project phase I was completely exhausted.
die Depression | Depressionen | depression
die Angststörung | Angststörungen | anxiety disorder
die Schlafstörung | Schlafstörungen | sleep disorder
durchschlafen | | to sleep through the night | Seit Wochen kann ich nicht mehr durchschlafen. = For weeks I haven't been able to sleep through the night.
der Schlafmangel | — | lack of sleep | Chronischer Schlafmangel schwächt das Immunsystem. = Chronic lack of sleep weakens the immune system.
die Erholung | — | recovery, rest
die Entspannung | — | relaxation
der Ausgleich | — | balance, counterbalance | Sport ist ein guter Ausgleich zur Arbeit. = Sport is a good counterbalance to work.
die Achtsamkeit | — | mindfulness
die Therapie | Therapien | therapy
der Psychologe | Psychologen | psychologist
die Psychotherapeutin | Psychotherapeutinnen | psychotherapist (female)
bewältigen | | to cope with, manage | Jeder bewältigt Stress auf seine eigene Weise. = Everyone copes with stress in their own way.
die Ursache | Ursachen | cause | Die Ursachen sind oft vielfältig. = The causes are often varied.
vorbeugen (+ Dat.) | | to prevent | Regelmäßige Pausen beugen einem Burn-out vor. = Regular breaks prevent burnout.
das Wohlbefinden | — | well-being
das Immunsystem | Immunsysteme | immune system
die Konzentration | — | concentration
reizbar | | irritable | Wenn ich zu wenig schlafe, werde ich schnell reizbar. = When I sleep too little I quickly get irritable.
ausgeglichen | | balanced, even-tempered
sich Sorgen machen | | to worry
`,
  grammar: [
    { t: "Partizip I as an adjective", html: `
<p><b>Partizip I</b> = infinitive + <b>-d</b>. Used before a noun it takes normal adjective endings. It describes something <b>active and happening right now</b> (English "-ing").</p>
<table><tr><th>Relative clause</th><th>Partizip I</th></tr>
<tr><td>die Zahl, die <b>steigt</b></td><td>die steigen<b>de</b> Zahl</td></tr>
<tr><td>ein Kind, das <b>schläft</b></td><td>ein schlafen<b>des</b> Kind</td></tr>
<tr><td>eine Situation, die <b>belastet</b></td><td>eine belasten<b>de</b> Situation</td></tr></table>
<p class="tip">Hebrew uses the same idea with the beinoni form (הילד הישן). In German, don't forget the adjective ending!</p>` },
    { t: "Partizip II as an adjective", html: `
<p><b>Partizip II</b> before a noun is usually <b>passive or completed</b> (English "-ed").</p>
<table><tr><th>Relative clause</th><th>Partizip II</th></tr>
<tr><td>die Studie, die veröffentlicht <b>wurde</b></td><td>die veröffentlicht<b>e</b> Studie</td></tr>
<tr><td>Patienten, die erschöpft <b>sind</b></td><td>erschöpft<b>e</b> Patienten</td></tr>
<tr><td>ein Medikament, das oft verschrieben <b>wird</b></td><td>ein oft verschrieben<b>es</b> Medikament</td></tr></table>
<p>Compare: <i>eine belasten<b>de</b> Arbeit</i> (the work causes stress) vs. <i>eine belastet<b>e</b> Mutter</i> (the mother is under stress).</p>` },
    { t: "Extended participle attributes", html: `
<p>In newspapers and reports, a whole relative clause can be packed <b>between the article and the noun</b>. All extra information goes in front of the participle.</p>
<table><tr><th>Relative clause</th><th>Extended attribute</th></tr>
<tr><td>die Zahl der Fälle, <b>die seit Jahren steigt</b></td><td>die <b>seit Jahren steigende</b> Zahl der Fälle</td></tr>
<tr><td>die Methode, <b>die von Experten empfohlen wird</b></td><td>die <b>von Experten empfohlene</b> Methode</td></tr>
<tr><td>Menschen, <b>die an Schlafstörungen leiden</b></td><td>die <b>an Schlafstörungen leidenden</b> Menschen</td></tr></table>
<p class="tip">Reading trick: see an article (die, der, ein...) followed by something that isn't a noun? Jump ahead to the noun, then go back and read the middle part as a relative clause.</p>` }
  ],
  ex: [
    { type: "gap", q: "die Zahl, die steigt → die ___ Zahl", a: ["steigende"] },
    { type: "mc", q: "ein Kind, das schläft → ein ___ Kind", opts: ["schlafendes", "geschlafenes", "schlafende"], a: 0 },
    { type: "gap", q: "Menschen, die unter Stress leiden → unter Stress ___ Menschen", a: ["leidende"] },
    { type: "mc", q: "Partizip I (steigend, wachsend) describes something that is ...", opts: ["active and happening now", "passive or already finished", "going to happen"], a: 0 },
    { type: "gap", q: "die Studie, die gestern veröffentlicht wurde → die gestern ___ Studie", a: ["veröffentlichte"] },
    { type: "mc", q: "Patienten, die erschöpft sind → ___ Patienten", opts: ["erschöpfte", "erschöpfende", "erschöpfend"], a: 0 },
    { type: "gap", q: "ein Medikament, das oft verschrieben wird → ein oft ___ Medikament", a: ["verschriebenes"] },
    { type: "mc", q: "eine belastende Situation is a situation that ...", opts: ["causes stress", "has been put under stress", "is no longer stressful"], a: 0 },
    { type: "order", words: ["Zahl der Patienten", "Die", "beunruhigt", "seit Jahren steigende", "die Ärzte"], a: "Die seit Jahren steigende Zahl der Patienten beunruhigt die Ärzte" },
    { type: "mc", q: "die von vielen Experten empfohlene Methode =", opts: ["die Methode, die von vielen Experten empfohlen wird", "die Methode, die viele Experten empfiehlt", "die Experten, die die Methode empfehlen"], a: 0 },
    { type: "gap", q: "Menschen, die an Schlafstörungen leiden → die an Schlafstörungen ___ Menschen", a: ["leidenden"] },
    { type: "mc", q: "Which phrase is correct?", opts: ["die unter Druck arbeitenden Mitarbeiter", "die arbeitenden unter Druck Mitarbeiter", "die unter Druck Mitarbeiter arbeitenden"], a: 0, why: "Everything that belongs to the participle stands between the article and the participle." }
  ],
  speak: [
    { q: "Was belastet dich im Moment am meisten?", en: "What is putting the most strain on you at the moment?", accept: ["belastet", "stresst", "stress", "am meisten"], model: ["Am meisten belastet mich die ständig wachsende Zahl an E-Mails im Job."] },
    { q: "Was machst du als Ausgleich zur Arbeit?", en: "What do you do to balance out work?", accept: ["ausgleich", "sport", "laufe", "gehe", "mache"], model: ["Als Ausgleich gehe ich zweimal pro Woche schwimmen und verbringe viel Zeit am Meer."] },
    { q: "Wie schläfst du normalerweise?", en: "How do you usually sleep?", accept: ["schlafe", "schlaf", "stunden", "durchschlafen"], model: ["Meistens schlafe ich gut, aber vor wichtigen Terminen kann ich oft nicht durchschlafen."] },
    { q: "Was kann man tun, um einem Burn-out vorzubeugen?", en: "What can you do to prevent burnout?", accept: ["sollte", "pausen", "vorbeugen", "grenzen", "man kann"], model: ["Man sollte regelmäßige Pausen machen und lernen, auch mal Nein zu sagen."] },
    { q: "Wird in Israel offen über psychische Gesundheit gesprochen?", en: "Do people in Israel talk openly about mental health?", accept: ["offen", "gesprochen", "tabu", "psychisch", "eindruck"], model: ["Ich habe den Eindruck, dass heute viel offener darüber gesprochen wird als früher, besonders unter jungen Leuten."] }
  ],
  shadow: ["Die seit Jahren steigende Zahl der Burn-out-Fälle ist alarmierend.", "Ich fühle mich in letzter Zeit ziemlich erschöpft und reizbar.", "Sport ist für mich der beste Ausgleich zum stressigen Arbeitsalltag.", "Die von Experten empfohlenen sieben Stunden Schlaf schaffe ich selten.", "Wer dauerhaft überfordert ist, sollte sich professionelle Hilfe holen.", "Kurze Pausen helfen mir, mich wieder besser zu konzentrieren."]
},
{
  id: 41, level: "B2", title: "Heimat und Identität", en: "Migration, belonging & living abroad",
  cando: ["Talk about home, roots and belonging", "Describe experiences of migration and living abroad", "Say how something is done and what results from it (indem, sodass)", "Say what someone does without or instead of something (ohne … zu, statt … zu)"],
  vocab: `
die Identität | Identitäten | identity
die Zugehörigkeit | — | belonging
sich zugehörig fühlen | | to feel one belongs | Nach zehn Jahren fühlt er sich in Berlin zugehörig. = After ten years he feels he belongs in Berlin.
die Einwanderung | — | immigration
einwandern | | to immigrate | Meine Großeltern sind 1951 aus dem Irak eingewandert. = My grandparents immigrated from Iraq in 1951.
auswandern | | to emigrate
die Aufenthaltserlaubnis | Aufenthaltserlaubnisse | residence permit
die Muttersprache | Muttersprachen | mother tongue
zweisprachig | | bilingual | Ihre Kinder wachsen zweisprachig auf. = Her children are growing up bilingual.
der Akzent | Akzente | accent | Man hört bei ihr kaum noch einen Akzent. = You can hardly hear an accent with her any more.
kulturell | | cultural
die Tradition | Traditionen | tradition
die Wurzeln | Pl. | roots | Ich habe meine Wurzeln nie vergessen. = I have never forgotten my roots.
die Fremde | — | foreign parts (literary) | In der Fremde lernt man sich selbst besser kennen. = Abroad you get to know yourself better.
fremd | | foreign, unfamiliar | Am Anfang fühlte sich alles fremd an. = At first everything felt strange.
die Gewohnheit | Gewohnheiten | habit
sich gewöhnen an (+ Akk.) | | to get used to | An das graue Wetter habe ich mich nie gewöhnt. = I never got used to the grey weather.
die Vielfalt | — | diversity
das Vorurteil | Vorurteile | prejudice
der Kulturschock | Kulturschocks | culture shock
die Gemeinschaft | Gemeinschaften | community
die Diaspora | Diasporen | diaspora
der Neuanfang | Neuanfänge | new beginning
weltoffen | | cosmopolitan, open-minded
verwurzelt | | rooted
der Einheimische | Einheimischen | local (person) | Am schnellsten lernt man die Sprache im Kontakt mit Einheimischen. = You learn the language fastest through contact with locals.
die Einbürgerung | Einbürgerungen | naturalisation | Für die Einbürgerung braucht man in Deutschland gute Sprachkenntnisse. = For naturalisation in Germany you need good language skills.
das Herkunftsland | Herkunftsländer | country of origin
der Migrationshintergrund | — | migrant background | Fast ein Drittel der Schüler hat einen Migrationshintergrund. = Almost a third of the pupils have a migrant background.
die Sehnsucht | Sehnsüchte | longing, yearning | Im Winter habe ich manchmal große Sehnsucht nach dem Meer. = In winter I sometimes really long for the sea.
Kontakte knüpfen | | to make contacts | In einem Verein kann man leicht neue Kontakte knüpfen. = In a club it's easy to make new contacts.
der Abschied | Abschiede | farewell, goodbye | Der Abschied von ihrer Familie fiel ihr schwer. = Saying goodbye to her family was hard for her.
die Anpassung | Anpassungen | adaptation, adjustment
die Bürokratie | — | bureaucracy | An die deutsche Bürokratie muss man sich erst gewöhnen. = It takes time to get used to German bureaucracy.
`,
  grammar: [
    { t: "indem (how) and sodass / so … dass (result)", html: `
<p><b>indem</b> answers "how? by what means?" (English "by ...-ing"). <b>sodass</b> and <b>so + adjective … dass</b> express a <b>result</b>. All send the verb to the end.</p>
<table><tr><th>Connector</th><th>Example</th></tr>
<tr><td><b>indem</b></td><td>Man lernt eine Sprache am besten, <b>indem</b> man jeden Tag spricht.</td></tr>
<tr><td><b>sodass</b></td><td>Ich habe lange in Wien gelebt, <b>sodass</b> ich mich dort zu Hause fühle.</td></tr>
<tr><td><b>so</b> … <b>dass</b></td><td>Der Umzug war <b>so</b> teuer, <b>dass</b> wir einen Kredit brauchten.</td></tr></table>
<p class="tip">Ask: "how?" → indem. "with what result?" → sodass. Want to stress an adjective? → so ... dass.</p>` },
    { t: "ohne … zu / ohne dass", html: `
<p>Something that does <b>not</b> happen. Same subject in both parts → <b>ohne … zu + Infinitiv</b>. Different subjects → <b>ohne dass</b> + full clause.</p>
<table><tr><th>Same subject</th><th>Different subjects</th></tr>
<tr><td>Er ist ausgewandert, <b>ohne</b> die Sprache <b>zu</b> können.</td><td>Sie ist weggezogen, <b>ohne dass</b> ihre Freunde es wussten.</td></tr>
<tr><td>Wir haben die Wohnung gemietet, <b>ohne</b> sie <b>zu</b> besichtigen.</td><td>Er hat gekündigt, <b>ohne dass</b> der Chef etwas ahnte.</td></tr></table>
<p class="tip">English "without + -ing" usually becomes ohne ... zu: "without knowing" = ohne zu wissen.</p>` },
    { t: "(an)statt … zu / statt dass", html: `
<p>An <b>alternative</b> action: "instead of ...-ing". Same rule as ohne: same subject → <b>(an)statt … zu</b>, different subjects → <b>(an)statt dass</b>.</p>
<p><i><b>Statt</b> Deutsch <b>zu</b> lernen, spricht er überall Englisch.</i><br><i><b>Anstatt dass</b> die Behörde hilft, schickt sie nur neue Formulare.</i></p>
<p>When the infinitive clause comes first, it counts as position 1, so the verb follows <b>immediately</b>:</p>
<table><tr><th>Position 1</th><th>2</th><th></th></tr>
<tr><td>Anstatt zu Hause zu bleiben,</td><td><b>ging</b></td><td>sie ins Ausland.</td></tr></table>` }
  ],
  ex: [
    { type: "mc", q: "Man integriert sich schneller, ___ man Kontakte zu Einheimischen sucht.", opts: ["indem", "sodass", "ohne dass"], a: 0 },
    { type: "mc", q: "Der Umzug war ___ teuer, dass wir einen Kredit brauchten.", opts: ["so", "sodass", "indem"], a: 0 },
    { type: "gap", q: "Sie hat jahrelang in Wien gelebt, ___ sie fast keinen Akzent mehr hat.", a: ["sodass"] },
    { type: "order", words: ["indem", "Ich", "Deutsch,", "lerne", "höre", "ich", "Podcasts"], a: "Ich lerne Deutsch, indem ich Podcasts höre" },
    { type: "gap", q: "Er ist ausgewandert, ___ die Sprache ___ ___. (können)", a: ["ohne", "zu", "können"] },
    { type: "mc", q: "Sie ist nach Berlin gezogen, ___ ihre Eltern davon wussten.", opts: ["ohne dass", "ohne zu", "statt zu"], a: 0, why: "Different subjects (sie / ihre Eltern) → ohne dass." },
    { type: "mc", q: "Wir haben die Wohnung gemietet, ___ sie vorher zu besichtigen.", opts: ["ohne", "ohne dass", "indem"], a: 0 },
    { type: "order", words: ["ohne", "Er", "unterschrieb", "ihn", "Vertrag,", "zu", "den", "lesen"], a: "Er unterschrieb den Vertrag, ohne ihn zu lesen" },
    { type: "gap", q: "___ sich ständig zu beschweren, sollte er lieber die Sprache lernen.", a: ["Statt/Anstatt"] },
    { type: "mc", q: "___ die Behörde hilft, schickt sie nur neue Formulare.", opts: ["Statt dass", "Statt zu", "Ohne zu"], a: 0 },
    { type: "gap", q: "Anstatt zu Hause zu bleiben, ___ sie ins Ausland. (gehen, Präteritum)", a: ["ging"] },
    { type: "order", words: ["nur zu", "Statt", "klagen,", "wir", "sollten", "ändern", "etwas"], a: "Statt nur zu klagen, sollten wir etwas ändern" }
  ],
  speak: [
    { q: "Was bedeutet Heimat für dich?", en: "What does 'home' mean to you?", accept: ["heimat", "bedeutet", "für mich"], model: ["Für mich bedeutet Heimat vor allem die Menschen, mit denen ich aufgewachsen bin."] },
    { q: "Könntest du dir vorstellen, im Ausland zu leben?", en: "Could you imagine living abroad?", accept: ["könnte", "vorstellen", "ausland"], model: ["Ja, ich könnte mir gut vorstellen, ein paar Jahre in Deutschland zu leben, ohne meine Wurzeln zu vergessen."] },
    { q: "Wie kann man sich in einem neuen Land am besten integrieren?", en: "How can you best integrate in a new country?", accept: ["indem", "integrieren", "sollte"], model: ["Man integriert sich am besten, indem man die Sprache lernt und Kontakte zu Einheimischen knüpft."] },
    { q: "Welche Sprachen spricht man in deiner Familie?", en: "Which languages are spoken in your family?", accept: ["spricht", "sprechen", "muttersprache", "hebräisch"], model: ["Bei uns spricht man Hebräisch, aber meine Großeltern sprechen untereinander noch Arabisch."] },
    { q: "Hattest du schon einmal einen Kulturschock?", en: "Have you ever had a culture shock?", accept: ["kulturschock", "überrascht", "ja", "nein"], model: ["Ja, in Deutschland war ich überrascht, dass am Sonntag fast alle Geschäfte geschlossen sind."] }
  ],
  shadow: ["Heimat ist für mich kein Ort, sondern ein Gefühl.", "Meine Großeltern sind in den Fünfzigerjahren nach Israel eingewandert.", "Man lernt eine Sprache am schnellsten, indem man sie jeden Tag benutzt.", "Er ist ausgewandert, ohne ein Wort Deutsch zu sprechen.", "Statt sich zu beschweren, sollte man lieber selbst aktiv werden.", "Die ersten Monate waren so schwer, dass ich oft Heimweh hatte."]
},
{
  id: 42, level: "B2", title: "Bildung", en: "Education systems & lifelong learning",
  cando: ["Compare the German and Israeli education systems", "Talk about further training and lifelong learning", "Pass on claims and rumours with sollen and wollen", "Express assumptions with modal verbs and Futur II"],
  vocab: `
die Bildung | — | education | Bildung ist der Schlüssel zu Chancengleichheit. = Education is the key to equal opportunities.
das Bildungssystem | Bildungssysteme | education system
die Gesamtschule | Gesamtschulen | comprehensive school
die Berufsausbildung | Berufsausbildungen | vocational training
der Auszubildende | Auszubildenden | apprentice, trainee (Azubi)
die Hochschule | Hochschulen | university, college
die Prüfungsangst | — | exam anxiety
lebenslanges Lernen | | lifelong learning
sich weiterbilden | | to continue one's education | Wer sich nicht weiterbildet, bleibt stehen. = Whoever doesn't keep learning stands still.
die Chancengleichheit | — | equal opportunities
der Lehrplan | Lehrpläne | curriculum
die Fähigkeit | Fähigkeiten | ability, skill
das Wissen | — | knowledge
vermitteln | | to impart, convey | Gute Lehrer vermitteln nicht nur Wissen, sondern auch Neugier. = Good teachers convey not only knowledge but also curiosity.
die Neugier | — | curiosity
der Fernunterricht | — | distance learning
das Stipendium | Stipendien | scholarship | Sie hat ein Stipendium für ein Jahr in Heidelberg bekommen. = She got a scholarship for a year in Heidelberg.
die Studiengebühren | Pl. | tuition fees | In Deutschland gibt es kaum Studiengebühren. = In Germany there are hardly any tuition fees.
der Bildungsweg | Bildungswege | educational path
nachholen | | to catch up on, make up for | Er hat sein Abitur auf dem zweiten Bildungsweg nachgeholt. = He got his Abitur later as an adult.
der Leistungsdruck | — | pressure to perform
begabt | | gifted, talented
fördern | | to support, encourage | Begabte Kinder sollten gezielt gefördert werden. = Gifted children should receive targeted support.
der Quereinsteiger | Quereinsteiger | career changer, lateral entrant
die Schulpflicht | — | compulsory schooling | In Deutschland gilt die Schulpflicht ab sechs Jahren. = In Germany schooling is compulsory from the age of six.
die Berufsschule | Berufsschulen | vocational school | Azubis gehen ein bis zwei Tage pro Woche in die Berufsschule. = Apprentices go to vocational school one or two days a week.
der Studiengang | Studiengänge | degree programme, course of study
das Semester | Semester | semester, term | Im ersten Semester hatte ich kaum Freizeit. = In my first semester I had hardly any free time.
die Klausur | Klausuren | (written) exam
durchfallen | | to fail (an exam) | Beim ersten Versuch ist er durch die Prüfung gefallen. = He failed the exam on his first attempt.
die Lehrkraft | Lehrkräfte | teacher (formal) | An vielen Schulen fehlen qualifizierte Lehrkräfte. = Many schools lack qualified teachers.
die Nachhilfe | — | private tutoring
die Volkshochschule | Volkshochschulen | adult education centre | Abends besucht sie einen Spanischkurs an der Volkshochschule. = In the evenings she takes a Spanish course at the adult education centre.
die Vermutung | Vermutungen | assumption, guess | Das ist nur eine Vermutung, beweisen kann ich es nicht. = That's just a guess; I can't prove it.
`,
  grammar: [
    { t: "sollen and wollen for claims", html: `
<p>Besides their normal meaning, <b>sollen</b> and <b>wollen</b> can pass on information you are not sure about.</p>
<table><tr><th>Verb</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>sollen</b></td><td>others say / it is reported</td><td>Das finnische Schulsystem <b>soll</b> sehr gut sein.</td></tr>
<tr><td><b>wollen</b></td><td>the subject claims (about himself)</td><td>Er <b>will</b> fünf Sprachen sprechen.</td></tr></table>
<p><b>Past:</b> modal + Partizip II + haben/sein: <i>Er <b>soll</b> in Harvard <b>studiert haben</b>. Sie <b>will</b> nie zu spät <b>gekommen sein</b>.</i></p>
<p class="tip">English needs whole phrases ("is said to", "claims to"). German does it with one verb, and with <b>wollen</b> you also sound a little sceptical.</p>` },
    { t: "Modal verbs for assumptions", html: `
<p>Modal verbs also express <b>how sure you are</b>.</p>
<table><tr><th>Modal</th><th>Certainty</th><th>Example</th></tr>
<tr><td><b>muss</b></td><td>almost certain</td><td>Das Licht ist an. Sie <b>muss</b> zu Hause sein.</td></tr>
<tr><td><b>dürfte</b></td><td>quite likely</td><td>Die Prüfung <b>dürfte</b> schwer sein.</td></tr>
<tr><td><b>kann / könnte</b></td><td>possible</td><td>Er <b>könnte</b> noch im Kurs sein.</td></tr>
<tr><td><b>kann nicht</b></td><td>impossible</td><td>Das <b>kann nicht</b> stimmen.</td></tr></table>
<p>About the past: modal + Partizip II + haben/sein: <i>Er hat eine Eins. Er <b>muss</b> viel <b>gelernt haben</b>.</i></p>` },
    { t: "Futur II for assumptions", html: `
<p><b>Futur II</b> = werden + Partizip II + haben/sein. Its main use in everyday German is an <b>assumption about the past</b>, often with <i>wohl</i> or <i>sicher</i>.</p>
<table><tr><th>Sentence</th><th>Meaning</th></tr>
<tr><td>Er <b>wird</b> den Bus <b>verpasst haben</b>.</td><td>He has probably missed the bus.</td></tr>
<tr><td>Sie <b>wird</b> wohl schon <b>eingeschlafen sein</b>.</td><td>She's probably already fallen asleep.</td></tr></table>
<p>It can also describe something <b>completed by a future time</b>: <i>Bis Juni <b>werde</b> ich den Kurs <b>abgeschlossen haben</b>.</i> = By June I will have finished the course.</p>
<p class="tip">Choose haben or sein exactly as in the Perfekt: verpasst <b>haben</b>, eingeschlafen <b>sein</b>.</p>` }
  ],
  ex: [
    { type: "mc", q: "People say he studied at Harvard. → Er ___ in Harvard studiert haben.", opts: ["soll", "will", "muss"], a: 0 },
    { type: "mc", q: "She claims she speaks five languages. → Sie ___ fünf Sprachen sprechen.", opts: ["will", "soll", "dürfte"], a: 0, why: "wollen = the subject claims something about themselves; sollen = others say it." },
    { type: "gap", q: "Das finnische Schulsystem ___ eines der besten der Welt sein. (people say)", a: ["soll"] },
    { type: "order", words: ["alle", "Er", "will", "Prüfungen ohne", "bestanden", "Lernen", "haben"], a: "Er will alle Prüfungen ohne Lernen bestanden haben" },
    { type: "mc", q: "Das Licht ist an. Sie ___ zu Hause sein. (I'm almost sure)", opts: ["muss", "könnte", "soll"], a: 0 },
    { type: "mc", q: "Die Prüfung ___ nicht leicht gewesen sein. (probably – my own estimate)", opts: ["dürfte", "will", "soll"], a: 0 },
    { type: "gap", q: "Er hat eine Eins bekommen. Er ___ viel gelernt ___. (müssen – assumption)", a: ["muss", "haben"] },
    { type: "mc", q: "Which is the weakest assumption?", opts: ["Sie muss krank sein.", "Sie dürfte krank sein.", "Sie könnte krank sein."], a: 2 },
    { type: "gap", q: "Er ist noch nicht da. Er ___ den Bus verpasst ___. (Futur II)", a: ["wird", "haben"] },
    { type: "gap", q: "Bis Ende des Jahres ___ ich die Weiterbildung ___ ___. (abschließen, Futur II)", a: ["werde", "abgeschlossen", "haben"] },
    { type: "mc", q: "Sie wird die Prüfung bestanden haben. means:", opts: ["She has probably passed the exam.", "She will pass the exam.", "She wants to pass the exam."], a: 0 },
    { type: "order", words: ["schon", "Die", "werden", "eingeschlafen", "Kinder", "sein"], a: "Die Kinder werden schon eingeschlafen sein" }
  ],
  speak: [
    { q: "Was sind die größten Unterschiede zwischen dem israelischen und dem deutschen Schulsystem?", en: "What are the biggest differences between the Israeli and German school systems?", accept: ["unterschied", "in israel", "in deutschland", "während"], model: ["In Deutschland werden Kinder schon nach der vierten Klasse auf verschiedene Schulen verteilt, während in Israel alle länger zusammen lernen."] },
    { q: "Hast du schon einmal eine Weiterbildung gemacht?", en: "Have you ever done further training?", accept: ["weiterbildung", "kurs", "habe"], model: ["Ja, letztes Jahr habe ich eine Weiterbildung im Projektmanagement gemacht, die meine Firma bezahlt hat."] },
    { q: "Was hast du über das deutsche Bildungssystem gehört?", en: "What have you heard about the German education system?", accept: ["soll", "sollen", "gehört", "angeblich"], model: ["Das Studium soll in Deutschland fast kostenlos sein, aber die Bürokratie soll ziemlich kompliziert sein."] },
    { q: "Warum bilden sich heute so viele Erwachsene weiter? Was vermutest du?", en: "Why do so many adults keep learning today? What do you think?", accept: ["dürfte", "könnte", "wird", "muss", "vermutlich", "wahrscheinlich"], model: ["Das dürfte vor allem am schnellen technischen Wandel liegen, der ständig neue Fähigkeiten verlangt."] },
    { q: "Was wirst du in fünf Jahren erreicht haben?", en: "What will you have achieved in five years?", accept: ["werde", "erreicht", "haben"], model: ["In fünf Jahren werde ich hoffentlich fließend Deutsch gelernt haben."] }
  ],
  shadow: ["Das Studium in Deutschland soll fast kostenlos sein.", "Er will das Abitur mit Auszeichnung bestanden haben.", "Sie geht nicht ans Telefon, sie dürfte noch im Kurs sein.", "Bis zum Sommer werde ich die Weiterbildung abgeschlossen haben.", "Lebenslanges Lernen ist heute in fast jedem Beruf notwendig.", "Er wird die E-Mail wohl übersehen haben."]
}
);
