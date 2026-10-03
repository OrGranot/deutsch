// B2 lessons 43-48, written for this app.
LESSONS.push(
{
  id: 43, level: "B2", title: "Nachhaltigkeit", en: "Sustainability & the climate debate",
  cando: ["Discuss environmental problems and possible solutions", "Concede a point and still argue against it", "Structure an argument with thesis, reasons, counterargument and conclusion", "Talk about your own sustainable (and less sustainable) habits"],
  vocab: `
die Nachhaltigkeit | — | sustainability | Nachhaltigkeit ist längst mehr als ein Modewort. = Sustainability has long been more than a buzzword.
die Emission | Emissionen | emission
der Ausstoß | — | output (of CO2 etc.) | Der CO2-Ausstoß muss deutlich sinken. = CO2 emissions must fall significantly.
die Ressource | Ressourcen | resource | Wasser ist in Israel eine knappe Ressource. = Water is a scarce resource in Israel.
knapp | | scarce, tight
die Energiewende | — | energy transition
der Verbrauch | — | consumption, usage | Der Verbrauch an Plastik ist enorm gestiegen. = Plastic consumption has risen enormously.
verschwenden | | to waste | Wir verschwenden viel zu viele Lebensmittel. = We waste far too much food.
die Verschwendung | — | wastefulness, waste
die Mülltrennung | — | waste separation | In Deutschland nimmt man die Mülltrennung sehr ernst. = In Germany people take waste separation very seriously.
der Verzicht | Verzichte | doing without, renunciation | Klimaschutz bedeutet nicht nur Verzicht. = Climate protection doesn't only mean doing without.
verzichten auf | | to do without | Ich verzichte inzwischen weitgehend auf Fleisch. = I now largely do without meat.
die Maßnahme | Maßnahmen | measure | Die Regierung hat neue Maßnahmen beschlossen. = The government has passed new measures.
die Folge | Folgen | consequence | Die Folgen sind schon heute deutlich spürbar. = The consequences can already be clearly felt today.
spürbar | | noticeable, tangible
der Meeresspiegel | — | sea level
die Generation | Generationen | generation | Wir tragen Verantwortung für künftige Generationen. = We bear responsibility for future generations.
fordern | | to demand | Die Demonstrierenden fordern schnellere Maßnahmen. = The protesters demand faster measures.
umstritten | | controversial | Atomkraft bleibt ein umstrittenes Thema. = Nuclear power remains a controversial topic.
zwar … aber | | admittedly … but | Das ist zwar teurer, aber auf Dauer lohnt es sich. = It's admittedly more expensive, but it pays off in the long run.
dennoch | | nevertheless | Es war mühsam; dennoch haben wir durchgehalten. = It was tough; nevertheless we kept going.
selbst wenn | | even if | Selbst wenn alle mitmachen, reicht das allein nicht. = Even if everyone joins in, that alone isn't enough.
der Klimaschutz | — | climate protection | Beim Klimaschutz kommt es auf jedes Land an. = When it comes to climate protection, every country counts.
die Atomkraft | — | nuclear power
die Umweltverschmutzung | — | pollution | Die Umweltverschmutzung in den Städten schadet vor allem Kindern. = Pollution in cities harms children in particular.
klimaneutral | | climate-neutral | Die Stadt will bis 2035 klimaneutral werden. = The city wants to become climate-neutral by 2035.
der ökologische Fußabdruck | — | ecological footprint | Wer weniger fliegt, verkleinert seinen ökologischen Fußabdruck deutlich. = If you fly less, you significantly reduce your ecological footprint.
regional | | regional, local | Obst und Gemüse kaufe ich möglichst regional. = I buy fruit and vegetables locally whenever possible.
künftig | | future; in future | Künftig will die Firma ganz auf Plastik verzichten. = In future the company wants to do without plastic entirely.
mühsam | | laborious, tedious
das Argument | Argumente | argument (reason) | Das stärkste Argument für Solarenergie ist der Preis. = The strongest argument for solar energy is the price.
einwenden | | to object | Man könnte einwenden, dass auch Elektroautos Ressourcen verbrauchen. = One could object that electric cars also use up resources.
überwiegen | | to outweigh, predominate | Bei diesem Projekt überwiegen eindeutig die Vorteile. = In this project the advantages clearly outweigh the disadvantages.
`,
  grammar: [
    { t: "Concessive structures", html: `
<p>A <b>concession</b> admits a fact that seems to speak against your statement, and then keeps the statement anyway. German has several ways to do this, and each one has its own word order.</p>
<table><tr><th>Structure</th><th>Type</th><th>Example</th></tr>
<tr><td><b>obwohl</b></td><td>conjunction, verb at end</td><td>Ich fahre Rad, <b>obwohl</b> es <b>regnet</b>.</td></tr>
<tr><td><b>auch wenn</b></td><td>conjunction, verb at end</td><td><b>Auch wenn</b> es teurer <b>ist</b>, kaufe ich regional.</td></tr>
<tr><td><b>selbst wenn</b></td><td>"even if", often hypothetical</td><td><b>Selbst wenn</b> alle mitmachen <b>würden</b>, wäre das nicht genug.</td></tr>
<tr><td><b>trotzdem / dennoch</b></td><td>adverb, verb comes next</td><td>Es regnet. <b>Dennoch fahre</b> ich Rad.</td></tr>
<tr><td><b>zwar … aber</b></td><td>two main clauses</td><td>Das ist <b>zwar</b> teuer, <b>aber</b> es lohnt sich.</td></tr>
<tr><td><b>trotz</b> + Genitiv</td><td>preposition</td><td><b>Trotz</b> der hohen Kosten investiert die Stadt.</td></tr></table>
<p>When the concessive clause comes first, the main clause starts with the verb: <i>Obwohl es teuer ist, <b>lohnt</b> es sich.</i></p>
<p class="tip"><b>zwar … aber</b> is the classic B2 move in a discussion: first you show you have heard the other side, then you make your point. English "admittedly … but", Hebrew "נכון ש… אבל".</p>` },
    { t: "Building an argument", html: `
<p>A convincing argument in German usually follows a clear order. Each step has typical phrases.</p>
<table><tr><th>Step</th><th>Phrases</th></tr>
<tr><td>Thesis</td><td>Ich bin der Ansicht, dass … · Meiner Ansicht nach …</td></tr>
<tr><td>Reasons</td><td><b>Dafür spricht</b>, dass … · Ein wichtiges Argument ist … · <b>Hinzu kommt</b>, dass …</td></tr>
<tr><td>Example</td><td>Ein Beispiel dafür ist … · Das zeigt sich etwa daran, dass …</td></tr>
<tr><td>Counterargument</td><td><b>Dagegen spricht</b>, dass … · Man könnte einwenden, dass … · Zwar …, aber …</td></tr>
<tr><td>Weighing up</td><td><b>Einerseits</b> …, <b>andererseits</b> … · Zum einen …, zum anderen …</td></tr>
<tr><td>Conclusion</td><td><b>Alles in allem</b> … · Letztendlich überwiegen die Vorteile.</td></tr></table>
<p>Many of these phrases take position 1, so the verb follows directly: <i>Hinzu <b>kommt</b>, dass …</i> · <i>Andererseits <b>ist</b> es teuer.</i></p>
<p class="tip">Naming the counterargument yourself makes you sound more convincing, not less. Concede it, then weaken it with <b>dennoch</b> or <b>aber</b>.</p>` }
  ],
  ex: [
    { type: "gap", q: "Ich fahre mit dem Rad zur Arbeit, ___ es heute regnet. (although)", a: ["obwohl"] },
    { type: "gap", q: "Das Elektroauto ist ___ teuer, ___ es spart auf Dauer Geld.", a: ["zwar", "aber"] },
    { type: "mc", q: "Es regnet in Strömen. ___ fahre ich mit dem Fahrrad.", opts: ["Trotzdem", "Obwohl", "Selbst wenn"], a: 0, why: "Trotzdem is an adverb in position 1, so the verb follows directly. Obwohl and selbst wenn would send the verb to the end." },
    { type: "mc", q: "___ alle Länder sofort handeln würden, ginge die Erderwärmung zunächst weiter.", opts: ["Selbst wenn", "Dennoch", "Zwar"], a: 0, why: "selbst wenn introduces a hypothetical 'even if' clause with the verb at the end." },
    { type: "order", words: ["dennoch", "Wir", "geändert", "haben", "nichts an unserem Verhalten"], a: "Wir haben dennoch nichts an unserem Verhalten geändert" },
    { type: "mc", q: "You want to add a further reason:", opts: ["Hinzu kommt, dass …", "Alles in allem …", "Dagegen spricht, dass …"], a: 0 },
    { type: "gap", q: "___ spricht, dass Solaranlagen in Israel besonders effizient sind. (in favour of it)", a: ["Dafür"] },
    { type: "mc", q: "Which phrase rounds off an argument?", opts: ["Zum einen …", "Alles in allem lässt sich sagen, dass …", "Ein Beispiel dafür ist …"], a: 1 },
    { type: "gap", q: "___ hat die Maßnahme Vorteile, ___ verursacht sie hohe Kosten.", a: ["Einerseits", "andererseits"] },
    { type: "order", words: ["nach", "Meiner", "ist", "Ansicht", "Verzicht", "keine", "Lösung"], a: "Meiner Ansicht nach ist Verzicht keine Lösung" }
  ],
  speak: [
    { q: "Was tust du persönlich für die Umwelt?", en: "What do you personally do for the environment?", accept: ["ich", "verzichte", "fahre", "versuche", "trenne"], model: ["Ich versuche, weniger Fleisch zu essen, und fahre, wann immer es geht, mit dem Fahrrad zur Arbeit."] },
    { q: "Ist Klimaschutz vor allem Aufgabe der Politik oder jedes Einzelnen?", en: "Is climate protection mainly the job of politics or of each individual?", accept: ["politik", "einzeln", "beide", "meiner meinung", "ansicht", "zwar"], model: ["Zwar trägt jeder Einzelne Verantwortung, aber ohne klare politische Maßnahmen wird sich wenig ändern."] },
    { q: "Welche Folgen des Klimawandels spürt man in Israel?", en: "Which consequences of climate change can you feel in Israel?", accept: ["hitze", "dürre", "sommer", "wasser", "heiß", "folgen"], model: ["Die Sommer werden immer heißer und länger, und Wasser bleibt eine knappe Ressource."] },
    { q: "Worauf würdest du nicht verzichten, auch wenn es besser für die Umwelt wäre?", en: "What wouldn't you give up, even if it were better for the environment?", accept: ["verzichten", "nicht", "auch wenn"], model: ["Auch wenn Fliegen schlecht für das Klima ist, würde ich nicht darauf verzichten, Freunde in Europa zu besuchen."] },
    { q: "Sind erneuerbare Energien die Lösung?", en: "Are renewable energies the solution?", accept: ["erneuerbar", "lösung", "zwar", "dennoch", "teil"], model: ["Sie sind zwar nicht die einzige Lösung, dennoch sind sie meiner Ansicht nach ein entscheidender Teil davon."] }
  ],
  shadow: ["Das ist zwar teurer, aber auf Dauer lohnt es sich.", "Auch wenn ich mir Mühe gebe, verschwende ich immer noch zu viele Lebensmittel.", "Selbst wenn alle mitmachen würden, könnten wir den Klimawandel nicht sofort stoppen.", "Dafür spricht, dass die Folgen schon heute spürbar sind.", "Einerseits möchte ich weniger fliegen, andererseits reise ich unglaublich gern.", "Alles in allem halte ich diese Maßnahmen für dringend notwendig."]
},
{
  id: 44, level: "B2", title: "Medien und Wahrheit", en: "Fake news, social media & trust",
  cando: ["Discuss how far you trust news and social media", "Recognise and evaluate false reports and manipulation", "Use modal particles to sound natural and show your attitude", "Emphasise parts of a sentence through word order and focus words"],
  vocab: `
seriös | | reputable, serious
die Glaubwürdigkeit | — | credibility
verbreiten | | to spread | Gerüchte verbreiten sich im Netz rasend schnell. = Rumours spread incredibly fast online.
überprüfen | | to check, verify
der Faktencheck | Faktenchecks | fact check
manipulieren | | to manipulate
die Zensur | — | censorship
die Filterblase | Filterblasen | filter bubble
die Plattform | Plattformen | platform
die Berichterstattung | — | reporting, coverage | Die Berichterstattung über die Wahl war ziemlich einseitig. = The coverage of the election was rather one-sided.
einseitig | | one-sided
objektiv | | objective
die Öffentlichkeit | — | the public
hinterfragen | | to question, scrutinise | Auch Nachrichten von Freunden sollte man kritisch hinterfragen. = You should critically question news from friends too.
der Zweifel | Zweifel | doubt | Ich habe meine Zweifel an dieser Studie. = I have my doubts about this study.
skeptisch | | sceptical
eben | | (particle) simply, that's just how it is | Dann musst du eben früher aufstehen. = Then you'll just have to get up earlier.
halt | | (particle, colloquial) just, simply | Das ist halt so. = That's just the way it is.
mal | | (particle) just (softens requests) | Schau mal! = Have a look!
wohl | | (particle) probably, I suppose | Er hat die Nachricht wohl nicht gelesen. = He probably didn't read the message.
sogar | | even | Sogar erfahrene Journalisten fallen manchmal auf Fälschungen herein. = Even experienced journalists sometimes fall for fakes.
ausgerechnet | | of all (people / days / things) | Ausgerechnet heute ist das Internet ausgefallen. = Today of all days the internet went down.
kritisch | | critical
nachvollziehen | | to follow, retrace (reasoning) | Bei einem guten Artikel kann ich jede Quelle nachvollziehen. = With a good article I can trace every source.
die Desinformation | — | disinformation
die Verschwörungstheorie | Verschwörungstheorien | conspiracy theory | Im Netz verbreiten sich Verschwörungstheorien besonders schnell. = Conspiracy theories spread particularly fast online.
die Manipulation | Manipulationen | manipulation
auftauchen | | to appear, turn up | Plötzlich tauchte im Netz ein gefälschtes Video auf. = Suddenly a fake video appeared online.
der Kommentar | Kommentare | comment, commentary | Die Kommentare unter dem Artikel waren teilweise sehr aggressiv. = Some of the comments under the article were very aggressive.
die Reichweite | Reichweiten | reach (audience) | Influencer mit großer Reichweite tragen eine besondere Verantwortung. = Influencers with a large reach bear a special responsibility.
die Medienkompetenz | — | media literacy | Medienkompetenz sollte schon in der Schule vermittelt werden. = Media literacy should already be taught at school.
die Hassrede | — | hate speech
`,
  grammar: [
    { t: "Modal particles", html: `
<p>Modal particles are small, unstressed words that native speakers use constantly. They don't change the facts of a sentence, but they show the speaker's <b>attitude</b>. Without them, spoken German often sounds stiff.</p>
<table><tr><th>Particle</th><th>Meaning / attitude</th><th>Example</th></tr>
<tr><td><b>ja</b></td><td>surprise, or "as we both know"</td><td>Du bist <b>ja</b> ganz nass! · Das weißt du <b>ja</b>.</td></tr>
<tr><td><b>doch</b></td><td>reminder, mild reproach, urging</td><td>Das habe ich dir <b>doch</b> gesagt! · Komm <b>doch</b> mit!</td></tr>
<tr><td><b>eben / halt</b></td><td>resignation: can't be changed</td><td>Das ist <b>eben</b> so. · Dann warten wir <b>halt</b>.</td></tr>
<tr><td><b>mal</b></td><td>softens a request</td><td>Kannst du <b>mal</b> kurz helfen?</td></tr>
<tr><td><b>wohl</b></td><td>assumption: "probably"</td><td>Sie ist <b>wohl</b> schon weg.</td></tr></table>
<p>Particles stand in the middle of the sentence, after the verb and usually after pronouns: <i>Das habe ich dir <b>doch</b> gesagt.</i> They never take position 1.</p>
<p class="tip">Hebrew הרי (harei) works a lot like <b>ja / doch</b>: "after all, you know that". English often uses intonation or tags instead: <i>Das weißt du doch!</i> = "You know that, don't you!" <b>halt</b> is more colloquial and southern; <b>eben</b> works everywhere.</p>` },
    { t: "Emphasis in the sentence", html: `
<p>German word order is flexible, so you can highlight information by moving it to <b>position 1</b>. What comes first gets the attention, often as a contrast.</p>
<table><tr><th>Neutral</th><th>Emphasised</th></tr>
<tr><td>Ich habe diese Quelle nicht überprüft.</td><td><b>Diese Quelle</b> habe ich nicht überprüft (die anderen schon).</td></tr>
<tr><td>Ich habe erst gestern davon erfahren.</td><td><b>Erst gestern</b> habe ich davon erfahren.</td></tr></table>
<p><b>Focus words</b> point to one part of the sentence:</p>
<table><tr><th>Word</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>sogar</b></td><td>even</td><td><b>Sogar</b> seriöse Zeitungen haben es übernommen.</td></tr>
<tr><td><b>gerade</b></td><td>precisely, especially</td><td><b>Gerade</b> heute brauchen wir guten Journalismus.</td></tr>
<tr><td><b>ausgerechnet</b></td><td>of all things / people (annoyed)</td><td><b>Ausgerechnet</b> am Wahltag tauchte das Gerücht auf.</td></tr>
<tr><td><b>nur / erst</b></td><td>only / not until</td><td><b>Erst</b> nach dem Faktencheck war es klar.</td></tr></table>
<p class="tip">In speech you can also simply stress a word: <i>ICH habe das nicht geteilt</i> (someone else did).</p>` }
  ],
  ex: [
    { type: "mc", q: "Mach ___ bitte das Fenster auf.", opts: ["mal", "wohl", "etwa"], a: 0, why: "mal softens a request and makes it sound friendlier." },
    { type: "mc", q: "Du kennst ihn ___ – er war auf meiner Party!", opts: ["doch", "mal", "wohl"], a: 0, why: "doch reminds the listener of something they should know." },
    { type: "mc", q: "Er geht nicht ans Telefon. Er schläft ___ noch.", opts: ["wohl", "mal", "denn"], a: 0, why: "wohl expresses an assumption: 'probably'." },
    { type: "mc", q: "Was soll man machen? Das ist ___ so.", opts: ["halt", "mal", "denn"], a: 0, why: "halt expresses resignation: it can't be changed." },
    { type: "mc", q: "Du bist ___ ganz nass! Regnet es draußen?", opts: ["ja", "mal", "eben"], a: 0, why: "ja expresses surprise at something obvious." },
    { type: "order", words: ["habe", "Quelle", "Diese", "ich", "nicht", "überprüft"], a: "Diese Quelle habe ich nicht überprüft" },
    { type: "mc", q: "Which sentence stresses that even the journalist believed it?", opts: ["Sogar der Journalist hat die Falschmeldung geglaubt.", "Der Journalist hat die Falschmeldung geglaubt.", "Der Journalist hat die Falschmeldung wohl geglaubt."], a: 0 },
    { type: "gap", q: "___ heute, wo jeder alles teilen kann, brauchen wir guten Journalismus. (precisely)", a: ["Gerade"] },
    { type: "mc", q: "___ am Wahltag tauchte die Falschmeldung auf – Zufall?", opts: ["Ausgerechnet", "Wohl", "Halt"], a: 0, why: "ausgerechnet = 'of all days', and it shows annoyance or suspicion." },
    { type: "order", words: ["Erst gestern", "ich", "habe", "davon", "erfahren"], a: "Erst gestern habe ich davon erfahren" }
  ],
  speak: [
    { q: "Welchen Medien vertraust du am meisten?", en: "Which media do you trust most?", accept: ["vertraue", "seriös", "zeitung", "quelle", "nachrichten"], model: ["Ich vertraue vor allem seriösen Zeitungen, deren Quellen ich nachvollziehen kann."] },
    { q: "Wie erkennst du eine Falschmeldung?", en: "How do you recognise a false report?", accept: ["quelle", "überprüfe", "prüfe", "schlagzeile", "faktencheck"], model: ["Ich überprüfe zuerst die Quelle und schaue, ob seriöse Medien auch darüber berichten."] },
    { q: "Lebst du in einer Filterblase?", en: "Do you live in a filter bubble?", accept: ["filterblase", "wohl", "algorithmus", "wahrscheinlich", "bestimmt"], model: ["Wahrscheinlich schon, der Algorithmus zeigt mir ja meistens nur, was mich ohnehin interessiert."] },
    { q: "Sollten soziale Netzwerke Beiträge löschen dürfen?", en: "Should social networks be allowed to delete posts?", accept: ["löschen", "meinungsfreiheit", "zensur", "dürfen", "finde"], model: ["Bei klaren Falschmeldungen schon, aber man muss eben aufpassen, dass daraus keine Zensur wird."] },
    { q: "Hast du schon einmal etwas Falsches geteilt?", en: "Have you ever shared something false?", accept: ["geteilt", "ja", "nein", "einmal", "mal"], model: ["Ja, leider schon mal – das war halt eine Schlagzeile, die total glaubwürdig klang."] }
  ],
  shadow: ["Schau mal, diese Schlagzeile kann doch nicht stimmen!", "Das ist ja unglaublich, wie schnell sich Gerüchte verbreiten.", "Er hat die Quelle wohl gar nicht überprüft.", "Man muss eben jede Behauptung kritisch hinterfragen.", "Ausgerechnet seriöse Zeitungen haben die Falschmeldung übernommen.", "Diesem Algorithmus vertraue ich überhaupt nicht."]
},
{
  id: 45, level: "B2", title: "Wirtschaft", en: "Economy, start-ups & consumer behaviour",
  cando: ["Talk about the economy, companies and start-ups", "Describe consumer behaviour and your own spending habits", "Use common noun-verb combinations in formal speech and writing", "Explain the idea and risks behind a business plan"],
  vocab: `
wirtschaftlich | | economic
das Unternehmen | Unternehmen | company, enterprise | Sie hat mit 28 ihr eigenes Unternehmen gegründet. = She founded her own company at 28.
gründen | | to found, set up
der Gründer | Gründer | founder
das Start-up | Start-ups | start-up | Tel Aviv gilt als eine Hauptstadt der Start-ups. = Tel Aviv is considered one of the capitals of start-ups.
der Investor | Investoren | investor
investieren | | to invest
das Kapital | — | capital
der Umsatz | Umsätze | turnover, sales | Der Umsatz hat sich im letzten Jahr verdoppelt. = Turnover doubled last year.
der Gewinn | Gewinne | profit
der Verlust | Verluste | loss
die Nachfrage | — | demand | Die Nachfrage nach Elektroautos steigt stetig. = Demand for electric cars is rising steadily.
das Konsumverhalten | — | consumer behaviour | Die Pandemie hat unser Konsumverhalten dauerhaft verändert. = The pandemic changed our consumer behaviour for good.
die Inflation | — | inflation
die Lebenshaltungskosten | Pl. | cost of living | Die Lebenshaltungskosten in Tel Aviv sind enorm. = The cost of living in Tel Aviv is enormous.
die Zielgruppe | Zielgruppen | target group
die Branche | Branchen | sector, industry | In der Tech-Branche sind die Gehälter hoch. = Salaries are high in the tech sector.
zur Verfügung stellen | | to make available, provide
in Kauf nehmen | | to accept (a downside) | Für mehr Freiheit nehme ich ein unsicheres Einkommen in Kauf. = For more freedom I accept an uncertain income.
einen Antrag stellen | | to submit an application
Einfluss nehmen auf | | to influence | Werbung nimmt großen Einfluss auf unser Konsumverhalten. = Advertising has a big influence on our consumer behaviour.
in Anspruch nehmen | | to make use of, take up | Viele Gründer nehmen eine kostenlose Beratung in Anspruch. = Many founders make use of free advice.
zum Ausdruck bringen | | to express
in Frage stellen | | to call into question | Die neue Studie stellt das ganze Geschäftsmodell in Frage. = The new study calls the whole business model into question.
in Gang setzen | | to set in motion | Mit dem Geld der Investoren konnten wir die Produktion in Gang setzen. = With the investors' money we were able to get production going.
die Strategie | Strategien | strategy
die Beratung | Beratungen | advice, consultation
die Konjunktur | Konjunkturen | economic situation, business cycle | Die Konjunktur hat sich im Herbst deutlich abgeschwächt. = The economy weakened significantly in the autumn.
das Wachstum | — | growth | Das Unternehmen setzt auf schnelles Wachstum statt auf Gewinn. = The company is betting on rapid growth rather than profit.
der Wettbewerb | Wettbewerbe | competition | Der Wettbewerb in der Branche ist hart. = Competition in the industry is tough.
der Konzern | Konzerne | group, corporation | Das Start-up wurde von einem amerikanischen Konzern übernommen. = The start-up was taken over by an American corporation.
die Aktie | Aktien | share, stock
die Geschäftsidee | Geschäftsideen | business idea | Eine gute Geschäftsidee allein reicht nicht, man braucht auch Kapital. = A good business idea alone isn't enough; you also need capital.
rentabel | | profitable
`,
  grammar: [
    { t: "Nomen-Verb-Verbindungen", html: `
<p>Formal German (business, news, official letters) loves <b>noun-verb combinations</b>: a noun carries the meaning, and a fairly "empty" verb like <i>treffen, stellen, nehmen, kommen, bringen</i> makes it a verb. Often a simple verb means almost the same.</p>
<table><tr><th>Nomen-Verb-Verbindung</th><th>Simple verb</th><th>English</th></tr>
<tr><td>eine Entscheidung <b>treffen</b></td><td>entscheiden</td><td>to make a decision</td></tr>
<tr><td>eine Frage <b>stellen</b></td><td>fragen</td><td>to ask a question</td></tr>
<tr><td>einen Antrag <b>stellen</b></td><td>beantragen</td><td>to apply</td></tr>
<tr><td>Kritik <b>üben</b> an</td><td>kritisieren</td><td>to criticise</td></tr>
<tr><td>Einfluss <b>nehmen</b> auf</td><td>beeinflussen</td><td>to influence</td></tr>
<tr><td>in Anspruch <b>nehmen</b></td><td>nutzen</td><td>to make use of</td></tr>
<tr><td>in Kauf <b>nehmen</b></td><td>(notgedrungen) akzeptieren</td><td>to put up with</td></tr>
<tr><td>eine Rolle <b>spielen</b></td><td>wichtig sein</td><td>to play a role</td></tr></table>
<p>The verb part is conjugated and stands in position 2; the noun part goes to the <b>end</b>, like a separable prefix: <i>Wir <b>treffen</b> morgen eine <b>Entscheidung</b>.</i> · <i>Ein Kredit <b>kommt</b> nicht in <b>Frage</b>.</i></p>
<p class="tip">Learn them as fixed chunks. You can't swap the verb: it's <i>eine Entscheidung <b>treffen</b></i>, never "machen" (unlike English "make a decision").</p>` },
    { t: "Active and passive pairs", html: `
<p>Many combinations come in pairs. With <b>stellen / bringen / setzen</b> someone actively does something; with <b>stehen / kommen</b> something happens or is the case.</p>
<table><tr><th>Active (someone does it)</th><th>Passive-like (it happens / is so)</th></tr>
<tr><td>Die Firma <b>stellt</b> Laptops zur Verfügung.</td><td>Laptops <b>stehen</b> zur Verfügung.</td></tr>
<tr><td>Wir <b>bringen</b> das Projekt zum Abschluss.</td><td>Das Projekt <b>kommt</b> zum Abschluss.</td></tr>
<tr><td>Die Chefin <b>setzt</b> den Plan in Gang.</td><td>Der Plan <b>kommt</b> in Gang.</td></tr>
<tr><td>Sie <b>bringt</b> ihre Kritik zum Ausdruck.</td><td>Ihre Kritik <b>kommt</b> zum Ausdruck.</td></tr></table>
<p class="tip">Careful: <b>in Frage stellen</b> = to question, to doubt. <b>in Frage kommen</b> = to be a possible option. <i>Die Studie stellt das Ergebnis in Frage.</i> vs. <i>Dieser Kandidat kommt in Frage.</i></p>` }
  ],
  ex: [
    { type: "gap", q: "Wir müssen bis Freitag eine Entscheidung ___.", a: ["treffen"] },
    { type: "gap", q: "Der Investor ___ großen Einfluss ___ die Strategie. (nehmen)", a: ["nimmt", "auf"] },
    { type: "mc", q: "Viele Gründer nehmen eine kostenlose Beratung in ___.", opts: ["Anspruch", "Kauf", "Frage"], a: 0 },
    { type: "mc", q: "Für mehr Freiheit nehme ich ein niedrigeres Gehalt in ___.", opts: ["Kauf", "Anspruch", "Verfügung"], a: 0 },
    { type: "order", words: ["Kredit", "Ein", "für uns nicht", "kommt", "in", "Frage"], a: "Ein Kredit kommt für uns nicht in Frage" },
    { type: "mc", q: "Die Firma ___ allen Mitarbeitern einen Laptop zur Verfügung.", opts: ["stellt", "steht", "kommt"], a: 0, why: "stellen: someone actively makes something available. stehen: something is available." },
    { type: "mc", q: "Den Mitarbeitern ___ moderne Laptops zur Verfügung.", opts: ["stehen", "stellen", "bringen"], a: 0 },
    { type: "gap", q: "Das Projekt ist endlich in Gang ___. (kommen)", a: ["gekommen"] },
    { type: "mc", q: "Die neue Studie ___ die alten Ergebnisse in Frage.", opts: ["stellt", "kommt", "steht"], a: 0, why: "in Frage stellen = to doubt something; in Frage kommen = to be a possible option." },
    { type: "gap", q: "Wir wollen die Verhandlungen bis Ende des Monats zum Abschluss ___.", a: ["bringen"] }
  ],
  speak: [
    { q: "Würdest du gern ein eigenes Unternehmen gründen?", en: "Would you like to found your own company?", accept: ["gründen", "unternehmen", "start-up", "würde"], model: ["Ja, ich würde gern ein Start-up gründen, aber das Risiko würde ich nur mit einem erfahrenen Partner in Kauf nehmen."] },
    { q: "Wofür gibst du das meiste Geld aus?", en: "What do you spend most of your money on?", accept: ["miete", "geld", "gebe", "lebensmittel", "aus"], model: ["Den größten Teil meines Einkommens gebe ich für die Miete aus, weil die Lebenshaltungskosten hier extrem hoch sind."] },
    { q: "Welche Rolle spielt Werbung bei deinen Kaufentscheidungen?", en: "What role does advertising play in your buying decisions?", accept: ["rolle", "werbung", "einfluss"], model: ["Ich glaube, Werbung spielt eine größere Rolle, als ich zugeben möchte, denn sie nimmt unbewusst Einfluss auf mich."] },
    { q: "Wie triffst du große Entscheidungen, zum Beispiel beim Kauf eines Autos?", en: "How do you make big decisions, for example when buying a car?", accept: ["entscheidung", "vergleiche", "treffe", "informiere"], model: ["Bevor ich eine Entscheidung treffe, vergleiche ich Angebote und nehme mir Zeit, um alle Kosten durchzurechnen."] },
    { q: "Warum ist Israel bei Start-ups so erfolgreich?", en: "Why is Israel so successful with start-ups?", accept: ["rolle", "risik", "innovation", "kreativ", "weil", "mut", "kapital"], model: ["Meiner Meinung nach spielt die Bereitschaft, Risiken einzugehen, eine große Rolle, und es steht viel Kapital zur Verfügung."] }
  ],
  shadow: ["Bis Freitag müssen wir eine Entscheidung treffen.", "Ein Kredit kommt für uns im Moment nicht in Frage.", "Die Firma stellt allen Mitarbeitern ein Diensthandy zur Verfügung.", "Für mehr Freiheit nehme ich ein unsicheres Einkommen in Kauf.", "Der Preis spielt für die meisten Verbraucher die entscheidende Rolle.", "Die Nachfrage ist gestiegen, deshalb investieren wir in neue Produkte."]
},
{
  id: 46, level: "B2", title: "Kunst und Kultur", en: "Art, culture & cultural life",
  cando: ["Talk about exhibitions, theatre, music and your cultural interests", "Describe and interpret a work of art", "Use formal prepositions with the genitive", "Make general statements with wer … der and was … das"],
  vocab: `
die Kunst | Künste | art | Über Kunst lässt sich bekanntlich streiten. = As we know, art is a matter of taste.
die Künstlerin | Künstlerinnen | artist (female)
die Skulptur | Skulpturen | sculpture
die Inszenierung | Inszenierungen | production, staging | Die moderne Inszenierung hat die Kritiker gespalten. = The modern production divided the critics.
der Kritiker | Kritiker | critic
das Werk | Werke | work (of art or literature)
darstellen | | to depict, represent | Das Bild stellt eine Szene aus dem Alltag dar. = The picture depicts an everyday scene.
die Darstellung | Darstellungen | depiction, representation
interpretieren | | to interpret
anspruchsvoll | | demanding, sophisticated | Das Stück ist anspruchsvoll, aber lohnend. = The play is demanding but rewarding.
zeitgenössisch | | contemporary | Ich interessiere mich vor allem für zeitgenössische Kunst. = I'm mainly interested in contemporary art.
das Erbe | — | heritage | Das kulturelle Erbe muss geschützt werden. = Cultural heritage must be protected.
aufgrund | | due to, because of (+ Gen.) | Aufgrund des großen Andrangs wurde die Ausstellung verlängert. = Due to the huge demand, the exhibition was extended.
anlässlich | | on the occasion of (+ Gen.) | Anlässlich ihres 100. Geburtstags zeigt das Museum ihre Werke. = On the occasion of her 100th birthday the museum is showing her works.
hinsichtlich | | with regard to (+ Gen.)
innerhalb | | within (+ Gen.)
außerhalb | | outside (+ Gen.) | Außerhalb der Saison ist das Theater geschlossen. = Outside the season the theatre is closed.
mithilfe | | with the help of (+ Gen.)
das Bühnenbild | Bühnenbilder | stage design, set | Das schlichte Bühnenbild passte perfekt zum Stück. = The simple set suited the play perfectly.
der Andrang | — | crowd, rush (of people)
das Jubiläum | Jubiläen | anniversary, jubilee | Zum 50. Jubiläum gibt das Orchester ein Gratiskonzert. = For its 50th anniversary the orchestra is giving a free concert.
inszenieren | | to stage, direct | Die Oper wurde von einer jungen Regisseurin neu inszeniert. = The opera was given a new production by a young director.
beeindrucken | | to impress | Am meisten hat mich die Musik beeindruckt. = What impressed me most was the music.
wirken | | to seem, come across | Das Bild wirkt auf den ersten Blick ganz einfach. = At first glance the picture seems quite simple.
der Maler | Maler | painter
der Bildhauer | Bildhauer | sculptor
die Epoche | Epochen | era, period | Das Museum zeigt Werke aus verschiedenen Epochen. = The museum shows works from different periods.
der Stil | Stile | style | Ihr Stil ist sofort zu erkennen. = Her style is instantly recognisable.
abstrakt | | abstract | Mit abstrakter Malerei kann ich wenig anfangen. = I can't really relate to abstract painting.
das Meisterwerk | Meisterwerke | masterpiece
das Kulturangebot | Kulturangebote | range of cultural events | Das Kulturangebot in Tel Aviv ist riesig. = The range of cultural events in Tel Aviv is huge.
das Denkmal | Denkmäler | monument | Das Denkmal erinnert an die Opfer des Krieges. = The monument commemorates the victims of the war.
die Fotografie | Fotografien | photography; photograph
`,
  grammar: [
    { t: "Prepositions with the genitive", html: `
<p>Formal and written German uses a group of prepositions that take the <b>genitive</b>. You already know <i>wegen, trotz, während</i>. At B2 you need these too:</p>
<table><tr><th>Preposition</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>aufgrund</b></td><td>due to</td><td>aufgrund <b>des</b> schlecht<b>en</b> Wetter<b>s</b></td></tr>
<tr><td><b>anlässlich</b></td><td>on the occasion of</td><td>anlässlich <b>des</b> Jubiläum<b>s</b></td></tr>
<tr><td><b>hinsichtlich</b></td><td>with regard to</td><td>hinsichtlich <b>der</b> Kosten</td></tr>
<tr><td><b>innerhalb</b></td><td>within (time / place)</td><td>innerhalb <b>eines</b> Jahr<b>es</b></td></tr>
<tr><td><b>außerhalb</b></td><td>outside</td><td>außerhalb <b>der</b> Stadt</td></tr>
<tr><td><b>mithilfe</b></td><td>with the help of</td><td>mithilfe <b>einer</b> App</td></tr></table>
<p>Genitive reminder: masculine and neuter <b>des / eines</b> + noun with <b>-(e)s</b>; feminine and plural <b>der</b>. Adjectives after an article end in <b>-en</b>; without an article, plural adjectives end in <b>-er</b>: <i>mithilfe zahlreich<b>er</b> Spenden</i>.</p>
<p class="tip">When there is no article, use <b>von</b> + dative instead: <i>innerhalb <b>von</b> zwei Wochen</i>, <i>mithilfe <b>von</b> Freunden</i>. In everyday speech you will hear these prepositions much less than in news and letters.</p>` },
    { t: "Relative clauses with wer and was", html: `
<p><b>wer</b> means "whoever / anyone who". The main clause can pick it up with <b>der</b> (or dem, den …) in the case the main verb needs.</p>
<table><tr><th>Relative clause</th><th>Main clause</th></tr>
<tr><td><b>Wer</b> zu spät kommt,</td><td>(<b>der</b>) muss bis zur Pause warten.</td></tr>
<tr><td><b>Wer</b> Kunst liebt,</td><td><b>dem</b> wird diese Ausstellung gefallen. (gefallen + Dativ)</td></tr>
<tr><td><b>Wem</b> das Stück nicht gefällt,</td><td><b>der</b> kann gehen.</td></tr></table>
<p>If both parts are nominative, <b>der</b> can be left out. If the cases differ, you need it.</p>
<p><b>was</b> refers to something general, not to a specific noun:</p>
<table><tr><th>Use</th><th>Example</th></tr>
<tr><td>as a subject or object idea</td><td><b>Was</b> mich beeindruckt hat, (<b>das</b>) war das Bühnenbild.</td></tr>
<tr><td>after alles, etwas, nichts, vieles</td><td>Das ist alles, <b>was</b> ich weiß.</td></tr>
<tr><td>after a superlative used as a noun</td><td>Das ist das Beste, <b>was</b> ich je gesehen habe.</td></tr>
<tr><td>referring to a whole clause</td><td>Sie hat den Preis gewonnen, <b>was</b> niemanden überrascht hat.</td></tr></table>
<p class="tip">English: "Whoever …" / "What impressed me was …". Proverbs love this pattern: <i>Wer zuletzt lacht, lacht am besten.</i></p>` }
  ],
  ex: [
    { type: "mc", q: "___ des schlechten Wetters fand das Konzert in der Halle statt.", opts: ["Aufgrund", "Anlässlich", "Innerhalb"], a: 0 },
    { type: "gap", q: "Anlässlich ___ Jubiläums gibt es eine Sonderausstellung. (das)", a: ["des"] },
    { type: "gap", q: "Innerhalb ___ nächsten Woche müssen die Karten bezahlt werden. (die)", a: ["der"] },
    { type: "mc", q: "Mithilfe ___ Spenden wurde das alte Theater renoviert.", opts: ["zahlreicher", "zahlreiche", "zahlreichen"], a: 0, why: "Genitive plural without an article: the adjective ends in -er." },
    { type: "gap", q: "Hinsichtlich ___ Preise gibt es große Unterschiede zwischen den Theatern. (die, Plural)", a: ["der"] },
    { type: "order", words: ["der", "Außerhalb", "Saison", "ist", "Museum", "das", "geschlossen"], a: "Außerhalb der Saison ist das Museum geschlossen" },
    { type: "mc", q: "Wer Kunst liebt, ___ wird diese Ausstellung gefallen.", opts: ["dem", "der", "den"], a: 0, why: "gefallen takes the dative, so the main clause needs dem." },
    { type: "gap", q: "___ mich am meisten beeindruckt hat, war die Inszenierung.", a: ["Was"] },
    { type: "mc", q: "Wer die Karten online kauft, ___ spart zehn Prozent.", opts: ["der", "den", "dem"], a: 0, why: "Both clauses need the nominative, so it's der (and it could even be left out)." },
    { type: "mc", q: "Das ist alles, ___ ich über den Künstler weiß.", opts: ["was", "das", "der"], a: 0, why: "After alles, etwas, nichts the relative pronoun is was." },
    { type: "gap", q: "Die junge Künstlerin hat den Preis gewonnen, ___ alle überrascht hat.", a: ["was"] },
    { type: "order", words: ["nichts", "Wer", "riskiert,", "gewinnt", "nichts", "auch"], a: "Wer nichts riskiert, gewinnt auch nichts" }
  ],
  speak: [
    { q: "Welche Art von Kunst gefällt dir?", en: "What kind of art do you like?", accept: ["gefällt", "mag", "interessiere", "kunst", "musik"], model: ["Was mir am meisten gefällt, ist zeitgenössische Fotografie, weil sie den Alltag so ehrlich zeigt."] },
    { q: "Wann warst du zuletzt in einer Ausstellung oder im Theater?", en: "When were you last at an exhibition or the theatre?", accept: ["war", "ausstellung", "theater", "museum", "konzert"], model: ["Anlässlich des Geburtstags meiner Mutter waren wir vor zwei Monaten im Theater."] },
    { q: "Beschreib ein Kunstwerk, das dich beeindruckt hat.", en: "Describe a work of art that impressed you.", accept: ["beeindruckt", "bild", "gemälde", "darstellt", "zeigt"], model: ["Mich hat ein Gemälde beeindruckt, das eine leere Straße bei Nacht darstellt – es wirkt unglaublich einsam."] },
    { q: "Sollte der Staat Kultur finanziell unterstützen?", en: "Should the state support culture financially?", accept: ["staat", "unterstützen", "finde", "kultur", "ja", "nein"], model: ["Ja, denn wer Kultur nur dem Markt überlässt, der verliert einen Teil seines kulturellen Erbes."] },
    { q: "Wie ist das kulturelle Leben in deiner Stadt?", en: "What is cultural life like in your city?", accept: ["stadt", "kultur", "vielfalt", "gibt", "angebot"], model: ["Es gibt eine große Vielfalt an Konzerten und Galerien, aber außerhalb der Großstädte ist das Angebot deutlich kleiner."] }
  ],
  shadow: ["Aufgrund des großen Andrangs wurde die Ausstellung verlängert.", "Wer zeitgenössische Kunst mag, dem wird diese Galerie gefallen.", "Was mich am meisten beeindruckt hat, war das Bühnenbild.", "Innerhalb eines Jahres hat das Theater drei neue Stücke inszeniert.", "Das Publikum hat minutenlang applaudiert, was hier selten vorkommt.", "Mithilfe vieler Spenden konnte das alte Kino gerettet werden."]
},
{
  id: 47, level: "B2", title: "Zusammenleben und Werte", en: "Living together, values & regrets",
  cando: ["Discuss values, tolerance and social cohesion", "Talk about past mistakes and missed chances", "Say what someone should, could or would have had to do", "Describe impressions with als ob / als wenn"],
  vocab: `
der Wert | Werte | value | Welche Werte sind dir besonders wichtig? = Which values are especially important to you?
die Toleranz | — | tolerance
tolerant | | tolerant
der Respekt | — | respect | Respekt muss man sich verdienen. = Respect has to be earned.
respektieren | | to respect
gesellschaftlich | | social, societal
das Zusammenleben | — | living together, coexistence | Das Zusammenleben verschiedener Kulturen ist nicht immer einfach. = Different cultures living together isn't always easy.
der Zusammenhalt | — | cohesion, solidarity
die Gerechtigkeit | — | justice, fairness
gerecht | | fair, just
die Solidarität | — | solidarity
rücksichtsvoll | | considerate
die Ehrlichkeit | — | honesty
ehrlich | | honest
bereuen | | to regret | Ich bereue, dass ich mich nicht entschuldigt habe. = I regret that I didn't apologise.
die Reue | — | remorse
vorwerfen | | to reproach, accuse | Sie wirft mir vor, dass ich nie zuhöre. = She accuses me of never listening.
die Gelegenheit | Gelegenheiten | opportunity | Ich hätte die Gelegenheit nutzen sollen. = I should have taken the opportunity.
als ob | | as if | Er tut so, als ob nichts passiert wäre. = He acts as if nothing had happened.
als wenn | | as if (more colloquial)
der Mut | — | courage | Es braucht Mut, eigene Fehler offen zuzugeben. = It takes courage to admit your own mistakes openly.
gegenseitig | | mutual(ly) | Wir respektieren uns gegenseitig, auch wenn wir oft streiten. = We respect each other, even though we often argue.
die Menschenwürde | — | human dignity
die Diskriminierung | Diskriminierungen | discrimination
benachteiligen | | to disadvantage, discriminate against | Bei der Wohnungssuche werden Migranten oft benachteiligt. = Migrants are often at a disadvantage when looking for a flat.
die Ausgrenzung | — | exclusion, marginalisation
die Zivilcourage | — | moral courage (to intervene) | Als er der Frau in der U-Bahn half, zeigte er echte Zivilcourage. = When he helped the woman on the underground, he showed real moral courage.
das Vorbild | Vorbilder | role model | Eltern sind für ihre Kinder das wichtigste Vorbild. = Parents are their children's most important role model.
das Gewissen | — | conscience | Ich habe ein schlechtes Gewissen, weil ich mich nicht gemeldet habe. = I feel guilty because I didn't get in touch.
die Ausrede | Ausreden | excuse | Das ist doch nur eine Ausrede! = That's just an excuse!
verzeihen | | to forgive | Kannst du mir das noch einmal verzeihen? = Can you forgive me for that one more time?
gleichgültig | | indifferent | Vielen jungen Leuten ist Politik völlig gleichgültig. = Many young people are completely indifferent to politics.
im Großen und Ganzen | | on the whole | Im Großen und Ganzen bin ich mit meinem Leben zufrieden. = On the whole I'm happy with my life.
`,
  grammar: [
    { t: "Konjunktiv II in the past", html: `
<p>To talk about things that did <b>not</b> happen in the past (regrets, alternatives), use <b>hätte / wäre</b> + Partizip II.</p>
<table><tr><th>Reality</th><th>Konjunktiv II Vergangenheit</th></tr>
<tr><td>Ich wusste es nicht.</td><td>Wenn ich es gewusst <b>hätte</b>, <b>hätte</b> ich dir geholfen.</td></tr>
<tr><td>Wir sind spät losgefahren.</td><td>Wenn wir früher losgefahren <b>wären</b>, <b>hätten</b> wir den Zug erreicht.</td></tr>
<tr><td>Ich bin nicht lange geblieben.</td><td>Ich <b>wäre</b> gern länger geblieben.</td></tr></table>
<p>Choose <b>wäre</b> for verbs that form the Perfekt with <i>sein</i> (gehen, fahren, bleiben, passieren …), <b>hätte</b> for all others.</p>` },
    { t: "hätte … machen sollen / können / müssen", html: `
<p>With a modal verb, the past Konjunktiv II uses <b>hätte</b> + infinitive + modal verb in the <b>infinitive</b> (a "double infinitive"). There is no Partizip II!</p>
<table><tr><th>German</th><th>English</th></tr>
<tr><td>Ich <b>hätte</b> früher anrufen <b>sollen</b>.</td><td>I should have called earlier.</td></tr>
<tr><td>Wir <b>hätten</b> den Konflikt vermeiden <b>können</b>.</td><td>We could have avoided the conflict.</td></tr>
<tr><td>Du <b>hättest</b> dich entschuldigen <b>müssen</b>.</td><td>You would have had to apologise.</td></tr>
<tr><td>Das <b>hätte</b> er nicht sagen <b>dürfen</b>.</td><td>He shouldn't have said that.</td></tr></table>
<p>It is always <b>hätte</b>, even with verbs of motion: <i>Ich <b>hätte</b> mitkommen können.</i></p>
<p>In a subordinate clause, <b>hätte</b> jumps in front of the two infinitives: <i>Ich weiß, dass ich früher <b>hätte</b> anrufen sollen.</i></p>
<p class="tip">English "should have done" uses a participle; German doesn't. Think: <i>hätte</i> + two infinitives at the end.</p>` },
    { t: "als ob / als wenn + Konjunktiv II", html: `
<p><b>als ob</b> and <b>als wenn</b> ("as if") describe an impression that is not (or may not be) true. They take the Konjunktiv II, verb at the end.</p>
<table><tr><th>Time</th><th>Example</th></tr>
<tr><td>same time</td><td>Er redet, <b>als ob</b> er der Chef <b>wäre</b>. · Sie tut so, <b>als wenn</b> sie alles <b>wüsste</b>.</td></tr>
<tr><td>earlier</td><td>Er tut so, <b>als ob</b> nichts passiert <b>wäre</b>. · Du siehst aus, <b>als ob</b> du nicht geschlafen <b>hättest</b>.</td></tr>
<tr><td>with würde</td><td>Es sieht aus, <b>als ob</b> es gleich regnen <b>würde</b>.</td></tr></table>
<p>You can also drop <i>ob/wenn</i>: then the verb comes straight after <b>als</b>: <i>Er redet, <b>als wäre</b> er der Chef.</i></p>
<p class="tip">Typical frames: <i>so tun, als ob …</i> (to pretend) · <i>aussehen, als ob …</i> · <i>sich anfühlen, als ob …</i></p>` }
  ],
  ex: [
    { type: "gap", q: "Wenn ich das ___ ___, hätte ich dir sofort geholfen. (wissen)", a: ["gewusst", "hätte"] },
    { type: "mc", q: "Wenn wir früher losgefahren ___, hätten wir den Zug nicht verpasst.", opts: ["wären", "hätten", "würden"], a: 0, why: "losfahren forms its Perfekt with sein, so it's wären." },
    { type: "gap", q: "Ohne deine Hilfe ___ ich das nie geschafft. (haben)", a: ["hätte"] },
    { type: "order", words: ["gern", "Ich", "länger", "wäre", "geblieben"], a: "Ich wäre gern länger geblieben" },
    { type: "gap", q: "Du ___ mich vorher fragen ___. (should have)", a: ["hättest", "sollen"] },
    { type: "mc", q: "Ich ___ dir helfen können, aber du hast nichts gesagt.", opts: ["hätte", "wäre", "würde"], a: 0, why: "With a modal verb the past Konjunktiv II always uses hätte." },
    { type: "mc", q: "Ich weiß, dass ich dich früher ___.", opts: ["hätte anrufen sollen", "anrufen sollen hätte", "hätte sollen anrufen"], a: 0, why: "In a subordinate clause hätte stands before the double infinitive." },
    { type: "order", words: ["hätten", "Wir", "den", "Konflikt", "können", "vermeiden"], a: "Wir hätten den Konflikt vermeiden können" },
    { type: "mc", q: "Er tut so, als ob er nichts davon ___.", opts: ["wüsste", "gewusst", "wissen"], a: 0 },
    { type: "gap", q: "Sie sieht aus, als ___ sie die ganze Nacht nicht geschlafen hätte.", a: ["ob/wenn"] },
    { type: "mc", q: "Er redet, als ___ der Chef.", opts: ["wäre er", "er wäre", "ob er wäre"], a: 0, why: "Without ob/wenn, the verb comes directly after als." },
    { type: "order", words: ["tut", "Sie", "so,", "als", "nichts", "ob", "passiert", "wäre"], a: "Sie tut so, als ob nichts passiert wäre" }
  ],
  speak: [
    { q: "Welche Werte sind dir besonders wichtig?", en: "Which values are particularly important to you?", accept: ["wichtig", "ehrlichkeit", "respekt", "toleranz", "werte"], model: ["Am wichtigsten sind mir Ehrlichkeit und Respekt, auch gegenüber Menschen, die anders denken als ich."] },
    { q: "Gibt es etwas, das du anders hättest machen sollen?", en: "Is there something you should have done differently?", accept: ["hätte", "sollen", "können", "bereue"], model: ["Ich hätte nach dem Studium ein Jahr im Ausland verbringen sollen, aber damals fehlte mir der Mut."] },
    { q: "Wie ist das Zusammenleben in deiner Nachbarschaft?", en: "What is living together like in your neighbourhood?", accept: ["nachbar", "zusammenleben", "rücksicht", "gut", "schwierig"], model: ["Im Großen und Ganzen gut, auch wenn manche Nachbarn wenig Rücksicht nehmen, wenn sie nachts feiern."] },
    { q: "Kennst du jemanden, der so tut, als ob er alles wüsste?", en: "Do you know someone who acts as if they knew everything?", accept: ["als ob", "als wenn", "tut so", "als wäre"], model: ["Ja, ein Kollege redet immer so, als ob er der Experte für alles wäre."] },
    { q: "Was hält eine Gesellschaft zusammen?", en: "What holds a society together?", accept: ["zusammenhalt", "solidarität", "gesellschaft", "vertrauen", "respekt", "meiner meinung"], model: ["Meiner Meinung nach vor allem Solidarität und das Gefühl, dass es im Großen und Ganzen gerecht zugeht."] }
  ],
  shadow: ["Ich hätte dich früher anrufen sollen, entschuldige bitte.", "Wir hätten den Konflikt ganz leicht vermeiden können.", "Wenn ich das gewusst hätte, wäre ich natürlich gekommen.", "Er tut so, als ob nichts passiert wäre.", "Es sieht aus, als würde es gleich anfangen zu regnen.", "Ohne gegenseitigen Respekt funktioniert kein Zusammenleben."]
},
{
  id: 48, level: "B2", title: "Die Zukunft der Arbeit", en: "Automation, debating & presenting",
  cando: ["Discuss how automation and AI are changing work", "Use verbs with prepositions and their da- / wo- forms", "Structure a short presentation from introduction to conclusion", "Contradict politely and keep a discussion going"],
  vocab: `
die Automatisierung | — | automation | Die Automatisierung verändert ganze Branchen. = Automation is changing entire industries.
der Roboter | Roboter | robot
der Arbeitsmarkt | Arbeitsmärkte | labour market
die Fachkraft | Fachkräfte | skilled worker | In vielen Bereichen fehlen Fachkräfte. = Skilled workers are lacking in many fields.
sich anpassen an | | to adapt to | Wir müssen uns ständig an neue Technologien anpassen. = We constantly have to adapt to new technologies.
achten auf | | to pay attention to | Achte darauf, dass du genug Pausen machst. = Make sure you take enough breaks.
sich verlassen auf | | to rely on | Kann man sich darauf verlassen, dass die KI recht hat? = Can you rely on the AI being right?
rechnen mit | | to expect, reckon with | Experten rechnen damit, dass sich jeder dritte Job verändert. = Experts expect every third job to change.
hinweisen auf | | to point out | Ich möchte darauf hinweisen, dass die Zahlen vorläufig sind. = I'd like to point out that the figures are provisional.
die Präsentation | Präsentationen | presentation
das Fazit | Fazite | conclusion, bottom line | Mein Fazit fällt gemischt aus. = My conclusion is mixed.
der Einwand | Einwände | objection
das Gegenargument | Gegenargumente | counterargument
zusammenfassen | | to summarise | Lassen Sie mich kurz zusammenfassen. = Let me briefly summarise.
zunächst | | first (of all), initially | Zunächst möchte ich kurz das Thema vorstellen. = First I'd like to briefly introduce the topic.
abschließend | | in conclusion, finally | Abschließend lässt sich sagen, dass Weiterbildung entscheidend ist. = In conclusion, one can say that further training is crucial.
im Hinblick auf | | with regard to
Da bin ich anderer Meinung. | | I see that differently.
Darf ich kurz unterbrechen? | | May I interrupt for a moment?
der Vortrag | Vorträge | talk, presentation | Mein Vortrag dauert etwa zwanzig Minuten. = My talk lasts about twenty minutes.
die Folie | Folien | slide | Zu viele Folien lenken vom Inhalt ab. = Too many slides distract from the content.
sich gliedern in | | to be divided into | Der Bericht gliedert sich in vier Kapitel. = The report is divided into four chapters.
erstens | | firstly
ergänzen | | to add, supplement | Darf ich dazu noch kurz etwas ergänzen? = May I briefly add something to that?
allerdings | | however, though | Die Idee ist gut, allerdings fehlt uns das Budget. = The idea is good; however, we lack the budget.
die Schlussfolgerung | Schlussfolgerungen | conclusion (inference) | Aus den Zahlen lassen sich zwei Schlussfolgerungen ziehen. = Two conclusions can be drawn from the figures.
übersichtlich | | clear, well laid out
sich einstellen auf | | to prepare for, adjust to | Viele Branchen müssen sich auf große Veränderungen einstellen. = Many industries have to prepare for major changes.
die Routineaufgabe | Routineaufgaben | routine task | Routineaufgaben übernimmt bei uns inzwischen eine Software. = At our company, software now takes care of routine tasks.
ersetzbar | | replaceable | Kaum jemand ist so leicht ersetzbar, wie manche Chefs glauben. = Hardly anyone is as easily replaceable as some bosses think.
der Fachkräftemangel | — | shortage of skilled workers | Der Fachkräftemangel betrifft vor allem die Pflege und das Handwerk. = The shortage of skilled workers mainly affects care work and the trades.
die Umschulung | Umschulungen | retraining | Nach seiner Umschulung arbeitet er jetzt als Programmierer. = After retraining he now works as a programmer.
der Wandel | — | change, transformation | Der Wandel der Arbeitswelt geht schneller als erwartet. = The world of work is changing faster than expected.
`,
  grammar: [
    { t: "Prepositional verbs with da- and wo-", html: `
<p>Many verbs have a fixed preposition: <i>achten <b>auf</b>, sich ärgern <b>über</b>, rechnen <b>mit</b>, sich gewöhnen <b>an</b>, sich verlassen <b>auf</b></i>. When the "object" is a whole clause (dass…, ob…, zu + infinitive), the main clause contains a <b>da(r)- word</b> that points forward to it, a so-called correlate.</p>
<table><tr><th>Verb + preposition</th><th>With a noun</th><th>With a clause</th></tr>
<tr><td>achten auf</td><td>Ich achte <b>auf</b> die Zeit.</td><td>Ich achte <b>darauf</b>, dass ich pünktlich bin.</td></tr>
<tr><td>sich ärgern über</td><td>Er ärgert sich <b>über</b> den Fehler.</td><td>Er ärgert sich <b>darüber</b>, dass niemand zuhört.</td></tr>
<tr><td>rechnen mit</td><td>Wir rechnen <b>mit</b> Veränderungen.</td><td>Wir rechnen <b>damit</b>, dass vieles automatisiert wird.</td></tr>
<tr><td>sich gewöhnen an</td><td>Ich gewöhne mich <b>an</b> das Homeoffice.</td><td>Ich habe mich <b>daran</b> gewöhnt, zu Hause zu arbeiten.</td></tr></table>
<p><b>da</b> + preposition, with an extra <b>r</b> before a vowel: da<b>mit</b>, da<b>für</b>, da<b>r</b>auf, da<b>r</b>über, da<b>r</b>an.</p>
<p>Questions about things use <b>wo(r)-</b>: <i><b>Worauf</b> achtest du?</i> · <i><b>Worüber</b> ärgerst du dich?</i> For people, use preposition + wen/wem: <i><b>Auf wen</b> kann ich mich verlassen?</i></p>
<p class="tip">English simply says "I make sure that …" or "I'm annoyed that …". German needs the little bridge word: <i>Ich ärgere mich <b>darüber</b>, dass …</i></p>` },
    { t: "Phrases for discussions and presentations", html: `
<table><tr><th>Purpose</th><th>Phrases</th></tr>
<tr><td>Introducing</td><td>In meinem Vortrag geht es um … · <b>Zunächst</b> möchte ich kurz erklären, …</td></tr>
<tr><td>Structuring</td><td>Mein Vortrag gliedert sich in drei Teile. · Erstens … zweitens … · Damit komme ich zum nächsten Punkt.</td></tr>
<tr><td>Pointing out</td><td>Ich möchte <b>darauf hinweisen</b>, dass … · Besonders wichtig ist …</td></tr>
<tr><td>Agreeing</td><td>Da stimme ich Ihnen zu. · Dem kann ich nur zustimmen.</td></tr>
<tr><td>Contradicting politely</td><td>Ich verstehe Ihren <b>Standpunkt</b>, aber … · <b>Da bin ich anderer Meinung.</b> · Das sehe ich etwas anders, denn …</td></tr>
<tr><td>Interrupting / adding</td><td><b>Darf ich kurz unterbrechen?</b> · Dazu möchte ich etwas ergänzen.</td></tr>
<tr><td>Concluding</td><td>Damit komme ich zum Schluss. · Lassen Sie mich <b>zusammenfassen</b>: … · <b>Abschließend</b> lässt sich sagen, dass …</td></tr></table>
<p class="tip">In a German discussion it is fine to disagree directly, but softeners like <i>etwas</i>, <i>allerdings</i> and the Konjunktiv (<i>Ich würde sagen …</i>) keep it polite.</p>` }
  ],
  ex: [
    { type: "gap", q: "Ich ärgere mich ___, dass die Software so viele Fehler macht.", a: ["darüber"] },
    { type: "gap", q: "Experten rechnen ___, dass sich viele Berufe stark verändern.", a: ["damit"] },
    { type: "mc", q: "___ musst du bei einer Präsentation besonders achten?", opts: ["Worauf", "Darauf", "Auf was für"], a: 0, why: "A question about a thing with achten auf uses wo(r) + auf = worauf." },
    { type: "mc", q: "Man kann sich nicht ___ verlassen, dass die KI immer recht hat.", opts: ["darauf", "dafür", "daran"], a: 0, why: "sich verlassen auf → darauf." },
    { type: "order", words: ["habe", "Ich", "mich", "gewöhnt,", "daran", "im", "Homeoffice", "zu", "arbeiten"], a: "Ich habe mich daran gewöhnt, im Homeoffice zu arbeiten" },
    { type: "mc", q: "You want to disagree politely with a colleague:", opts: ["Das ist doch Quatsch.", "Da bin ich etwas anderer Meinung, denn …", "Nein, das ist falsch."], a: 1 },
    { type: "mc", q: "Which phrase explains the structure of a presentation?", opts: ["Mein Vortrag gliedert sich in drei Teile.", "Abschließend lässt sich sagen …", "Darf ich kurz unterbrechen?"], a: 0 },
    { type: "gap", q: "Lassen Sie mich die wichtigsten Punkte kurz ___. (summarise)", a: ["zusammenfassen"] },
    { type: "mc", q: "Ich verstehe Ihren ___, aber ich sehe das etwas anders.", opts: ["Standpunkt", "Abschluss", "Fazit"], a: 0 },
    { type: "order", words: ["komme", "Damit", "zum", "ich", "Schluss"], a: "Damit komme ich zum Schluss" }
  ],
  speak: [
    { q: "Wird künstliche Intelligenz deinen Beruf verändern?", en: "Will artificial intelligence change your job?", accept: ["verändern", "ki", "künstliche intelligenz", "rechne damit", "wird"], model: ["Ich rechne damit, dass KI viele Routineaufgaben übernimmt, aber kreative Arbeit wird wohl bleiben."] },
    { q: "Worüber ärgerst du dich bei der Arbeit?", en: "What annoys you at work?", accept: ["ärgere", "darüber", "nervt"], model: ["Ich ärgere mich darüber, dass Besprechungen oft viel länger dauern als nötig."] },
    { q: "Worauf achtest du, wenn du eine Präsentation hältst?", en: "What do you pay attention to when you give a presentation?", accept: ["achte", "darauf"], model: ["Ich achte vor allem darauf, dass meine Folien übersichtlich sind und ich möglichst frei spreche."] },
    { q: "Ist Homeoffice die Zukunft?", en: "Is working from home the future?", accept: ["homeoffice", "zukunft", "flexibel", "einerseits", "meiner meinung"], model: ["Einerseits ist Homeoffice sehr flexibel, andererseits fehlt mir manchmal der direkte Kontakt zu den Kollegen."] },
    { q: "Wie würdest du einem Kollegen höflich widersprechen?", en: "How would you politely contradict a colleague?", accept: ["anderer meinung", "verstehe", "sehe das", "widersprechen", "allerdings"], model: ["Ich würde sagen: Ich verstehe deinen Standpunkt, sehe das allerdings etwas anders."] }
  ],
  shadow: ["Ich ärgere mich darüber, dass wir so viel Zeit verlieren.", "Wir müssen uns darauf einstellen, dass sich der Arbeitsmarkt verändert.", "Mein Vortrag gliedert sich in drei Teile.", "Ich verstehe Ihren Standpunkt, sehe das aber etwas anders.", "Darf ich kurz unterbrechen? Dazu möchte ich etwas ergänzen.", "Abschließend lässt sich sagen, dass Weiterbildung wichtiger ist als je zuvor."]
}
);
