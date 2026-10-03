// B1 lessons 25-30, written for this app.
LESSONS.push(
{
  id: 25, level: "B1", title: "Stadt oder Land?", en: "City or countryside: where to live",
  cando: ["Compare life in the city and in the countryside", "Name advantages and disadvantages of a place", "Describe people and places with relative clauses", "Say where you would like to live and why"],
  vocab: `
das Dorf | Dörfer | village | Meine Tante lebt in einem kleinen Dorf im Norden. = My aunt lives in a small village in the north.
die Großstadt | Großstädte | big city | In der Großstadt ist immer etwas los. = There's always something going on in the big city.
der Vorort | Vororte | suburb
die Gegend | Gegenden | area, region | In welcher Gegend wohnst du? = Which area do you live in?
die Umgebung | Umgebungen | surroundings | Die Umgebung ist sehr grün. = The surroundings are very green.
die Landschaft | Landschaften | landscape
die Ruhe | — | peace and quiet | Auf dem Land hat man mehr Ruhe. = In the countryside you have more peace and quiet.
der Verkehr | — | traffic
die Nachbarschaft | Nachbarschaften | neighbourhood
das Angebot | Angebote | offer, range | Das kulturelle Angebot ist riesig. = The range of cultural activities is huge.
die Verbindung | Verbindungen | (transport) connection | Die Verbindung in die Stadt ist leider schlecht. = Unfortunately the connection into town is bad.
die Infrastruktur | Infrastrukturen | infrastructure
die Lebensqualität | — | quality of life
der Vorteil | Vorteile | advantage | Ein Vorteil ist, dass alles nah ist. = One advantage is that everything is close by.
der Nachteil | Nachteile | disadvantage
die Mietwohnung | Mietwohnungen | rented flat
das Grundstück | Grundstücke | plot of land
pendeln | | to commute | Viele Leute pendeln jeden Tag in die Stadt. = Many people commute into the city every day.
sich wohlfühlen | | to feel at home, feel good | Ich fühle mich in meiner Nachbarschaft wohl. = I feel at home in my neighbourhood.
sich gewöhnen an | | to get used to | Ich habe mich an den Lärm gewöhnt. = I've got used to the noise.
genießen | | to enjoy
ländlich | | rural
lebendig | | lively
anonym | | anonymous
überfüllt | | overcrowded | Morgens sind die Busse total überfüllt. = In the mornings the buses are completely overcrowded.
auf dem Land | | in the countryside | Meine Eltern wohnen auf dem Land. = My parents live in the countryside.
einerseits … andererseits | | on the one hand … on the other hand
der Stadtrand | Stadtränder | outskirts (of a town) | Wir wohnen am Stadtrand, direkt neben einem Park. = We live on the outskirts, right next to a park.
die Kleinstadt | Kleinstädte | small town | In einer Kleinstadt kennt jeder jeden. = In a small town everyone knows everyone.
das Hochhaus | Hochhäuser | high-rise building
der Bauernhof | Bauernhöfe | farm | Die Kinder dürfen auf dem Bauernhof die Tiere füttern. = The children are allowed to feed the animals on the farm.
der Einwohner | Einwohner | inhabitant, resident | Die Stadt hat etwa 50.000 Einwohner. = The town has about 50,000 inhabitants.
abgelegen | | remote, out of the way
`,
  grammar: [
    { t: "Relative clauses: Nominativ and Akkusativ", html: `
<p>A relative clause describes a noun, like English "who / which / that". It is separated by commas, starts with a relative pronoun, and the verb goes to the <b>end</b>.</p>
<p>The pronoun takes its <b>gender and number from the noun</b>, but its <b>case from its job inside the relative clause</b>.</p>
<table><tr><th></th><th>m</th><th>f</th><th>n</th><th>pl</th></tr>
<tr><td>Nominativ</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Akkusativ</td><td><b>den</b></td><td>die</td><td>das</td><td>die</td></tr></table>
<p><i>Der Nachbar, <b>der</b> über mir wohnt, ist nett.</i> (he lives there → subject → Nominativ)</p>
<p><i>Der Nachbar, <b>den</b> ich oft treffe, ist nett.</i> (I meet him → object → Akkusativ)</p>
<p class="tip">English can drop "that" (the flat we bought). German never drops the relative pronoun, and unlike Hebrew <b>ש</b>, it changes form: <i>die Wohnung, <b>die</b> wir gekauft haben</i>.</p>` },
    { t: "Relative clauses: Dativ and prepositions", html: `
<p>Use the Dativ form after dative verbs (helfen, danken, gefallen, gehören) and dative prepositions (mit, bei, von, zu, in + where?).</p>
<table><tr><th></th><th>m</th><th>f</th><th>n</th><th>pl</th></tr>
<tr><td>Dativ</td><td>dem</td><td>der</td><td>dem</td><td><b>denen</b></td></tr></table>
<p><i>Die Frau, <b>der</b> ich geholfen habe, wohnt im dritten Stock.</i></p>
<p>A preposition goes <b>in front of</b> the pronoun:</p>
<p><i>Das ist die Stadt, <b>in der</b> ich lebe.</i> · <i>Die Freunde, <b>mit denen</b> ich wohne, kommen aus Spanien.</i></p>
<p class="tip">Only the dative plural looks new: <b>denen</b>. Everything else looks like the article.</p>` },
    { t: "Talking about pros and cons", html: `
<table><tr><th>Phrase</th><th>Example</th></tr>
<tr><td>Ein Vorteil / Nachteil ist, dass …</td><td>Ein Vorteil ist, dass die Mieten niedrig sind.</td></tr>
<tr><td>Einerseits …, andererseits …</td><td>Einerseits ist es ruhig, andererseits ist es langweilig.</td></tr>
<tr><td>…, dafür …</td><td>Die Wohnung ist klein, dafür ist sie günstig.</td></tr>
<tr><td>Für mich ist wichtig, dass …</td><td>Für mich ist wichtig, dass ich schnell bei der Arbeit bin.</td></tr></table>
<p class="tip"><b>dafür</b> here means "but to make up for it". After einerseits, andererseits and dafür, the verb comes next (position 2).</p>` }
  ],
  ex: [
    { type: "gap", q: "Das ist der Nachbar, ___ über mir wohnt.", a: ["der"] },
    { type: "gap", q: "Die Wohnung, ___ wir gekauft haben, ist sehr hell.", a: ["die"] },
    { type: "mc", q: "Der Bus, ___ ich jeden Morgen nehme, ist immer überfüllt.", opts: ["der", "den", "dem"], a: 1, why: "Inside the relative clause the bus is the object of nehmen (ich nehme den Bus) → accusative den." },
    { type: "order", words: ["die", "Ich", "teuer", "eine", "ist", "suche", "nicht", "Wohnung", "so"], a: "Ich suche eine Wohnung, die nicht so teuer ist" },
    { type: "gap", q: "Die Frau, ___ ich beim Umzug geholfen habe, wohnt jetzt im dritten Stock. (helfen + Dativ)", a: ["der"] },
    { type: "mc", q: "Die Kinder, mit ___ mein Sohn spielt, wohnen nebenan.", opts: ["die", "denen", "dem"], a: 1, why: "mit takes the dative; plural dative relative pronoun = denen." },
    { type: "gap", q: "Das ist die Stadt, in ___ ich aufgewachsen bin.", a: ["der"] },
    { type: "order", words: ["dem", "Das", "wohnen", "ist", "in", "Dorf", "meine", "das", "Großeltern"], a: "Das ist das Dorf, in dem meine Großeltern wohnen" },
    { type: "mc", q: "___ ist das Leben in der Großstadt spannend, andererseits ist es teuer.", opts: ["Einerseits", "Entweder", "Sowohl"], a: 0 },
    { type: "gap", q: "Ein großer ___ ist, dass man auf dem Land mehr Ruhe hat. (advantage)", a: ["Vorteil"] },
    { type: "mc", q: "Die Wohnung ist klein, ___ ist sie sehr günstig.", opts: ["dafür", "deshalb", "denn"], a: 0, why: "dafür balances a disadvantage with an advantage: 'but on the other hand'." },
    { type: "gap", q: "Ein ___ ist, dass der Bus nur einmal pro Stunde fährt. (disadvantage)", a: ["Nachteil"] }
  ],
  speak: [
    { q: "Wohnst du lieber in der Stadt oder auf dem Land?", en: "Do you prefer living in the city or in the countryside?", accept: ["stadt", "land", "dorf", "vorort"], model: ["Ich wohne lieber in der Stadt, weil ich das kulturelle Angebot genieße."] },
    { q: "Was sind die Vorteile von deinem Wohnort?", en: "What are the advantages of where you live?", accept: ["vorteil", "gefällt", "mag", "nah"], model: ["Ein großer Vorteil ist, dass das Meer ganz nah ist."] },
    { q: "Was stört dich an deiner Gegend?", en: "What bothers you about your area?", accept: ["stört", "lärm", "verkehr", "teuer", "nachteil", "nichts"], model: ["Mich stört der Lärm, und der Verkehr ist morgens schrecklich."] },
    { q: "Beschreib einen Nachbarn, den du gut kennst.", en: "Describe a neighbour you know well.", accept: ["nachbar", "der ", "die ", "den "], model: ["Mein Nachbar, der unter mir wohnt, ist ein älterer Mann, den ich jeden Morgen sehe."] },
    { q: "Wo möchtest du in zehn Jahren leben?", en: "Where would you like to live in ten years?", accept: ["möchte", "würde", "leben", "wohnen"], model: ["Ich würde gern in einem Vorort leben, in dem es viel Natur gibt."] }
  ],
  shadow: ["Ich wohne in einer Gegend, die ruhig und trotzdem lebendig ist.", "Das ist der Nachbar, dem ich beim Umzug geholfen habe.", "Auf dem Land hat man mehr Ruhe, aber die Verbindungen sind schlecht.", "Einerseits liebe ich die Großstadt, andererseits vermisse ich die Natur.", "Die Wohnung, die wir gefunden haben, ist klein, dafür aber günstig.", "Viele Leute pendeln jeden Tag, weil die Mieten in der Stadt so hoch sind."]
},
{
  id: 26, level: "B1", title: "Bewerbung und Beruf", en: "Job applications & interviews",
  cando: ["Understand a job ad and talk about an application", "Present your experience, strengths and tasks in an interview", "Use zu + infinitive after verbs and expressions", "Express purpose with um … zu and damit"],
  vocab: `
die Bewerbung | Bewerbungen | application | Ich schicke meine Bewerbung per E-Mail. = I'm sending my application by email.
sich bewerben (um) | | to apply (for) | Er bewirbt sich um eine Stelle in München. = He's applying for a job in Munich.
die Stelle | Stellen | position, job
die Stellenanzeige | Stellenanzeigen | job ad | Ich habe die Stellenanzeige im Internet gefunden. = I found the job ad online.
das Anschreiben | Anschreiben | cover letter
das Vorstellungsgespräch | Vorstellungsgespräche | job interview | Morgen habe ich ein Vorstellungsgespräch. = Tomorrow I have a job interview.
der Arbeitgeber | Arbeitgeber | employer
der Arbeitnehmer | Arbeitnehmer | employee
die Kenntnisse | Pl. | knowledge, skills | Gute Deutschkenntnisse sind von Vorteil. = Good German skills are an advantage.
die Stärke | Stärken | strength | Meine Stärke ist, Probleme schnell zu lösen. = My strength is solving problems quickly.
die Schwäche | Schwächen | weakness
das Gehalt | Gehälter | salary | Welches Gehalt stellen Sie sich vor? = What salary do you have in mind?
die Vollzeit | — | full-time
die Teilzeit | — | part-time | Sie arbeitet seit einem Jahr in Teilzeit. = She has been working part-time for a year.
die Probezeit | Probezeiten | probation period
kündigen | | to quit, give notice | Er hat gekündigt, um sich selbstständig zu machen. = He quit to become self-employed.
einstellen | | to hire | Die Firma will zwei neue Leute einstellen. = The company wants to hire two new people.
sich vorstellen | | to introduce oneself; to imagine | Darf ich mich kurz vorstellen? = May I briefly introduce myself?
verantwortlich für | | responsible for | Ich bin für drei Projekte verantwortlich. = I'm responsible for three projects.
selbstständig | | self-employed; independent
zuverlässig | | reliable | Wir suchen eine zuverlässige Kollegin. = We're looking for a reliable colleague.
teamfähig | | good at working in a team
belastbar | | able to work under pressure
Sehr geehrte Damen und Herren | | Dear Sir or Madam
die Berufserfahrung | — | work experience | Ich habe fünf Jahre Berufserfahrung im Vertrieb. = I have five years of work experience in sales.
die Qualifikation | Qualifikationen | qualification
der Bewerber | Bewerber | applicant | Für die Stelle gab es über hundert Bewerber. = There were over a hundred applicants for the job.
die Voraussetzung | Voraussetzungen | requirement, prerequisite | Ein Führerschein ist Voraussetzung für diese Stelle. = A driving licence is a requirement for this job.
befristet | | fixed-term, temporary | Der Vertrag ist auf ein Jahr befristet. = The contract is limited to one year.
der Arbeitsvertrag | Arbeitsverträge | employment contract
motiviert | | motivated
die Personalabteilung | Personalabteilungen | HR department | Schicken Sie die Unterlagen bitte an die Personalabteilung. = Please send the documents to the HR department.
`,
  grammar: [
    { t: "Infinitive with zu", html: `
<p>Many verbs, nouns and adjectives are followed by a second verb as <b>zu + infinitive</b>. It goes to the <b>end</b>, usually after a comma.</p>
<table><tr><th>After …</th><th>Example</th></tr>
<tr><td>verbs: versuchen, vergessen, anfangen, aufhören, vorhaben, hoffen</td><td>Ich versuche, eine neue Stelle <b>zu finden</b>.</td></tr>
<tr><td>nouns: Lust / Zeit / Angst haben</td><td>Ich habe keine Zeit, das Anschreiben <b>zu lesen</b>.</td></tr>
<tr><td>es ist + adjective: wichtig, schwer, schön</td><td>Es ist wichtig, pünktlich <b>zu sein</b>.</td></tr></table>
<p>Separable verbs put <b>zu</b> between prefix and verb: an<b>zu</b>rufen, ein<b>zu</b>stellen, vor<b>zu</b>stellen.</p>
<p class="tip">No zu after modal verbs (können, müssen, wollen, möchten, dürfen, sollen): <i>Ich kann morgen kommen.</i> — never "kann … zu kommen".</p>` },
    { t: "um … zu vs. damit", html: `
<p>Both express a purpose: "in order to / so that".</p>
<table><tr><th></th><th>Rule</th><th>Example</th></tr>
<tr><td><b>um … zu</b></td><td>same subject in both parts</td><td>Ich lerne Deutsch, <b>um</b> in Berlin <b>zu</b> arbeiten.</td></tr>
<tr><td><b>damit</b></td><td>different subjects; verb at the end</td><td>Ich spreche langsam, <b>damit</b> du mich verstehst.</td></tr></table>
<p>With the same subject damit is possible too, but um … zu sounds more natural.</p>
<p class="tip">English just says "to": <i>I'm learning German to work in Berlin.</i> In German you need <b>um</b>: not "Ich lerne Deutsch zu arbeiten".</p>` }
  ],
  ex: [
    { type: "gap", q: "Ich habe vergessen, den Lebenslauf ___ ___. (schicken)", a: ["zu", "schicken"] },
    { type: "gap", q: "Vergiss nicht, mich nach dem Gespräch ___! (anrufen)", a: ["anzurufen"] },
    { type: "mc", q: "Es ist wichtig, beim Vorstellungsgespräch pünktlich ___.", opts: ["zu sein", "sein", "zu ist"], a: 0 },
    { type: "mc", q: "Which sentence is correct?", opts: ["Ich kann morgen zu kommen.", "Ich hoffe, morgen zu kommen.", "Ich möchte morgen zu kommen."], a: 1, why: "Modal verbs like können and möchten never take zu; hoffen does." },
    { type: "order", words: ["keine", "Ich", "arbeiten", "heute", "Lust", "zu", "habe"], a: "Ich habe heute keine Lust zu arbeiten" },
    { type: "gap", q: "Ich lerne Deutsch, ___ in Deutschland ___ arbeiten.", a: ["um", "zu"] },
    { type: "mc", q: "Ich erkläre dir alles, ___ du das Formular ausfüllen kannst.", opts: ["um", "damit"], a: 1, why: "Different subjects (ich / du) → damit." },
    { type: "mc", q: "Sie macht einen Kurs, ___ ihre Chancen zu verbessern.", opts: ["um", "damit"], a: 0, why: "Same subject (sie) and zu + infinitive → um … zu." },
    { type: "gap", q: "Er spart Geld, ___ seine Kinder später studieren können.", a: ["damit"] },
    { type: "order", words: ["um", "Ich", "zu", "einen", "rufe", "vereinbaren", "an", "Termin"], a: "Ich rufe an, um einen Termin zu vereinbaren" }
  ],
  speak: [
    { q: "Was bist du von Beruf und was sind deine Aufgaben?", en: "What's your job and what are your tasks?", accept: ["aufgabe", "arbeite", "verantwortlich", "bin"], model: ["Ich arbeite in der IT-Abteilung einer Firma und bin für die Planung von Projekten verantwortlich."] },
    { q: "Was sind deine Stärken?", en: "What are your strengths?", accept: ["stärke", "zuverlässig", "teamfähig", "belastbar", "kann"], model: ["Meine Stärke ist, dass ich sehr zuverlässig bin und gut im Team arbeite."] },
    { q: "Warum lernst du Deutsch?", en: "Why are you learning German?", accept: ["um", "damit", "weil"], model: ["Ich lerne Deutsch, um mit meinen Kollegen in Deutschland besser sprechen zu können."] },
    { q: "Was hast du in den nächsten Jahren vor?", en: "What are you planning to do in the next few years?", accept: ["habe vor", "plane", "möchte", "hoffe", "will"], model: ["Ich habe vor, mich um eine Stelle in Deutschland zu bewerben."] },
    { q: "Was ist dir bei einer Arbeitsstelle wichtig?", en: "What matters to you in a job?", accept: ["wichtig", "gehalt", "team", "flexibel"], model: ["Mir ist wichtig, ein gutes Team und flexible Arbeitszeiten zu haben."] }
  ],
  shadow: ["Ich habe vor, mich bei einer Firma in München zu bewerben.", "Vergiss nicht, deinen Lebenslauf und deine Zeugnisse mitzuschicken.", "Ich lerne Deutsch, um in Deutschland arbeiten zu können.", "Ich erkläre Ihnen alles, damit Sie sofort anfangen können.", "Zu meinen Aufgaben gehört es, Kunden zu beraten.", "Darf ich mich kurz vorstellen? Ich habe zehn Jahre Erfahrung in der IT."]
},
{
  id: 27, level: "B1", title: "Erinnerungen", en: "Childhood, memories & telling stories",
  cando: ["Talk about your childhood and youth", "Tell a story in the past using the Präteritum", "Choose between als and wenn", "Say what had happened before with nachdem"],
  vocab: `
die Erinnerung | Erinnerungen | memory | Ich habe schöne Erinnerungen an meine Kindheit. = I have lovely memories of my childhood.
die Kindheit | — | childhood
die Jugend | — | youth | In meiner Jugend war ich oft im Jugendzentrum. = In my youth I often went to the youth centre.
sich erinnern an | | to remember | Erinnerst du dich an unseren ersten Urlaub? = Do you remember our first holiday?
aufwachsen | | to grow up | Ich bin in einer kleinen Stadt im Norden aufgewachsen. = I grew up in a small town in the north.
erleben | | to experience | Auf dieser Reise erlebten wir viel. = We experienced a lot on that trip.
früher | | in the past, formerly | Früher spielten wir jeden Tag draußen. = In the past we played outside every day.
plötzlich | | suddenly | Plötzlich ging das Licht aus. = Suddenly the light went out.
schließlich | | finally, in the end
der Kindergarten | Kindergärten | nursery school, kindergarten
das Spielzeug | Spielzeuge | toy | Mein liebstes Spielzeug war ein rotes Auto. = My favourite toy was a red car.
das Abenteuer | Abenteuer | adventure | Für uns Kinder war jeder Ausflug ein Abenteuer. = For us children every outing was an adventure.
das Erlebnis | Erlebnisse | experience (an event)
der Streich | Streiche | prank | Wir spielten unseren Lehrern oft Streiche. = We often played pranks on our teachers.
das Heimweh | — | homesickness | Im ersten Jahr hatte ich oft Heimweh. = In the first year I was often homesick.
das Fotoalbum | Fotoalben | photo album
frech | | cheeky
schüchtern | | shy | Als Kind war ich sehr schüchtern. = As a child I was very shy.
neugierig | | curious
sich verändern | | to change | Die Stadt hat sich sehr verändert. = The town has changed a lot.
verbringen | | to spend (time) | Wir verbrachten die Sommer bei den Großeltern. = We spent the summers at our grandparents'.
die Schulzeit | — | school days | In meiner Schulzeit hatte ich viele Freunde. = In my school days I had lots of friends.
das Gedächtnis | Gedächtnisse | memory (ability to remember) | Mein Opa hat ein sehr gutes Gedächtnis. = My grandpa has a very good memory.
die Vergangenheit | — | the past
zurückdenken (an) | | to think back (to) | Ich denke gern an diese Zeit zurück. = I like to think back to that time.
der Spielplatz | Spielplätze | playground | Nach der Schule trafen wir uns immer auf dem Spielplatz. = After school we always met at the playground.
klettern | | to climb | Wir kletterten auf jeden Baum im Garten. = We climbed every tree in the garden.
die Puppe | Puppen | doll
das Tagebuch | Tagebücher | diary | Als Teenager schrieb ich jeden Abend Tagebuch. = As a teenager I wrote in my diary every evening.
die Klassenfahrt | Klassenfahrten | school trip
verwöhnen | | to spoil (a person) | Meine Oma hat uns immer sehr verwöhnt. = My grandma always spoiled us a lot.
der Geburtsort | Geburtsorte | place of birth
`,
  grammar: [
    { t: "Präteritum for telling stories", html: `
<p>In conversation Germans mostly use the Perfekt. In written stories, and when telling a longer story, you meet the <b>Präteritum</b>. With sein, haben and modal verbs it's normal in speech too (war, hatte, konnte, musste).</p>
<table><tr><th></th><th>machen (regular)</th><th>fahren (irregular)</th></tr>
<tr><td>ich</td><td>mach<b>te</b></td><td>fuhr</td></tr>
<tr><td>du</td><td>mach<b>test</b></td><td>fuhr<b>st</b></td></tr>
<tr><td>er / sie / es</td><td>mach<b>te</b></td><td>fuhr</td></tr>
<tr><td>wir</td><td>mach<b>ten</b></td><td>fuhr<b>en</b></td></tr>
<tr><td>ihr</td><td>mach<b>tet</b></td><td>fuhr<b>t</b></td></tr>
<tr><td>sie / Sie</td><td>mach<b>ten</b></td><td>fuhr<b>en</b></td></tr></table>
<p>Irregular verbs change their stem and have no -te: gehen → <b>ging</b>, kommen → <b>kam</b>, sehen → <b>sah</b>, geben → <b>gab</b>, finden → <b>fand</b>, bleiben → <b>blieb</b>. Mixed verbs change the stem <i>and</i> add -te: denken → <b>dachte</b>, bringen → <b>brachte</b>, wissen → <b>wusste</b>.</p>
<p class="tip">ich and er/sie/es are always identical in the Präteritum: ich ging, er ging.</p>` },
    { t: "als or wenn?", html: `
<p>English "when" has three German partners.</p>
<table><tr><th>Word</th><th>Use</th><th>Example</th></tr>
<tr><td><b>als</b></td><td>one event or one period in the past</td><td>Als ich zehn war, zogen wir um.</td></tr>
<tr><td><b>wenn</b></td><td>repeated in the past (immer wenn)</td><td>Immer wenn wir Oma besuchten, backte sie Kuchen.</td></tr>
<tr><td><b>wenn</b></td><td>present or future</td><td>Wenn ich Zeit habe, rufe ich dich an.</td></tr>
<tr><td><b>wann</b></td><td>questions only</td><td>Wann seid ihr umgezogen?</td></tr></table>
<p class="tip">Quick test: did it happen <b>once</b> in the past? → <b>als</b>. Otherwise → wenn. All three send the verb to the end (except in a direct question with wann).</p>` },
    { t: "Plusquamperfekt with nachdem", html: `
<p>The Plusquamperfekt is "had done": <b>hatte / war</b> + Partizip II. It shows that something happened <b>before</b> another past event.</p>
<p>After <b>nachdem</b> use the Plusquamperfekt; in the main clause use the Präteritum.</p>
<table><tr><th>nachdem-clause (earlier)</th><th>main clause (later)</th></tr>
<tr><td>Nachdem wir <b>gegessen hatten</b>,</td><td><b>gingen</b> wir spazieren.</td></tr>
<tr><td>Nachdem sie nach Berlin <b>umgezogen war</b>,</td><td><b>fand</b> sie schnell neue Freunde.</td></tr></table>
<p class="tip">hatte or war? Exactly as in the Perfekt: movement and change of state (gehen, umziehen, aufwachsen) take <b>war</b>.</p>` }
  ],
  ex: [
    { type: "gap", q: "Als Kind ___ ich jeden Sommer ans Meer. (fahren)", a: ["fuhr"] },
    { type: "gap", q: "Wir ___ damals in einem kleinen Haus am Stadtrand. (wohnen)", a: ["wohnten"] },
    { type: "mc", q: "Plötzlich ___ das Telefon.", opts: ["klingelte", "klingeltet", "klingelten"], a: 0 },
    { type: "gap", q: "Wir ___ uns sofort sympathisch. (finden)", a: ["fanden"] },
    { type: "mc", q: "___ ich zehn war, bekam ich mein erstes Fahrrad.", opts: ["Als", "Wenn", "Wann"], a: 0, why: "A single moment in the past → als." },
    { type: "mc", q: "Immer ___ wir bei Oma waren, backte sie Kuchen.", opts: ["als", "wenn", "wann"], a: 1, why: "Something that happened again and again in the past → (immer) wenn." },
    { type: "gap", q: "___ du morgen Zeit hast, ruf mich an!", a: ["Wenn/Falls"] },
    { type: "order", words: ["hatte", "Als", "klein", "ich", "war", "ich", "Angst", "vor", "Hunden"], a: "Als ich klein war, hatte ich Angst vor Hunden" },
    { type: "gap", q: "Nachdem wir gegessen ___, gingen wir spazieren.", a: ["hatten"] },
    { type: "gap", q: "Nachdem sie nach Berlin umgezogen ___, fand sie schnell neue Freunde.", a: ["war"] },
    { type: "mc", q: "Nachdem ich die Schule beendet ___, begann ich zu studieren.", opts: ["habe", "hatte", "hätte"], a: 1, why: "nachdem + Plusquamperfekt (hatte + Partizip II) when the main clause is in the past." },
    { type: "order", words: ["rief", "Nachdem", "angekommen", "er", "war", "er", "seine", "Mutter", "an"], a: "Nachdem er angekommen war, rief er seine Mutter an" }
  ],
  speak: [
    { q: "Wo bist du aufgewachsen?", en: "Where did you grow up?", accept: ["aufgewachsen", "wuchs"], model: ["Ich bin in Haifa aufgewachsen, nicht weit vom Meer."] },
    { q: "Wie warst du als Kind?", en: "What were you like as a child?", accept: ["war", "als kind"], model: ["Als Kind war ich ziemlich schüchtern, aber sehr neugierig."] },
    { q: "Was hast du als Kind gern gemacht?", en: "What did you like doing as a child?", accept: ["spielte", "habe", "als kind", "als ich", "gern"], model: ["Als ich klein war, spielte ich jeden Tag mit den Nachbarskindern draußen."] },
    { q: "Erzähl von einem Erlebnis, an das du dich gut erinnerst.", en: "Tell me about an experience you remember well.", accept: ["erinnere", "als", "damals", "war"], model: ["Ich erinnere mich gut an den Tag, als mein Bruder geboren wurde."] },
    { q: "Was hast du gemacht, nachdem du die Schule beendet hattest?", en: "What did you do after you had finished school?", accept: ["nachdem", "danach", "war", "ging", "machte", "habe"], model: ["Nachdem ich die Schule beendet hatte, war ich drei Jahre beim Militär."] }
  ],
  shadow: ["Als ich klein war, verbrachten wir jeden Sommer bei meinen Großeltern.", "Damals gab es noch keine Handys, und wir spielten den ganzen Tag draußen.", "Immer wenn es regnete, erzählte uns meine Oma Geschichten.", "Plötzlich ging die Tür auf, und unser Lehrer stand vor uns.", "Nachdem wir umgezogen waren, hatte ich lange Heimweh.", "Erinnerst du dich noch an unseren ersten Schultag?"]
},
{
  id: 28, level: "B1", title: "Beim Arzt und im Krankenhaus", en: "Health system, insurance & symptoms",
  cando: ["Describe symptoms and understand a doctor's questions", "Explain how health insurance and referrals work", "Say what is done in a hospital with the passive", "Say who did something with von + Dativ"],
  vocab: `
die Krankenversicherung | Krankenversicherungen | health insurance | In Deutschland muss jeder eine Krankenversicherung haben. = In Germany everyone has to have health insurance.
die Krankenkasse | Krankenkassen | (public) health insurance fund
die Gesundheitskarte | Gesundheitskarten | health insurance card | Bitte zeigen Sie Ihre Gesundheitskarte. = Please show your health insurance card.
der Hausarzt | Hausärzte | family doctor, GP | Zuerst geht man zum Hausarzt. = First you go to your GP.
der Facharzt | Fachärzte | specialist
die Krankmeldung | Krankmeldungen | sick note
die Notaufnahme | Notaufnahmen | emergency department | Er wurde sofort in die Notaufnahme gebracht. = He was taken straight to the emergency department.
der Krankenwagen | Krankenwagen | ambulance | Der Krankenwagen kam nach zehn Minuten. = The ambulance came after ten minutes.
die Untersuchung | Untersuchungen | examination | Die Untersuchung dauert nur ein paar Minuten. = The examination only takes a few minutes.
die Operation | Operationen | operation, surgery
die Spritze | Spritzen | injection
die Impfung | Impfungen | vaccination
das Symptom | Symptome | symptom
der Husten | — | cough
der Schnupfen | — | runny nose
die Verletzung | Verletzungen | injury
der Unfall | Unfälle | accident | Bei dem Unfall wurde niemand verletzt. = Nobody was hurt in the accident.
das Blut | — | blood | Mir wurde Blut abgenommen. = They took a blood sample from me.
der Blutdruck | — | blood pressure
die Pflegekraft | Pflegekräfte | nurse, care worker | Die Pflegekräfte arbeiten oft nachts. = The nurses often work nights.
der Patient | Patienten | patient
die Station | Stationen | (hospital) ward | Meine Mutter liegt auf Station 4. = My mother is on ward 4.
untersuchen | | to examine
operieren | | to operate (on) | Mein Knie wurde letztes Jahr operiert. = My knee was operated on last year.
behandeln | | to treat | Die Wunde wurde sofort behandelt. = The wound was treated immediately.
verschreiben | | to prescribe | Die Ärztin verschreibt mir ein Antibiotikum. = The doctor prescribes me an antibiotic.
husten | | to cough
messen | | to measure | Zuerst wird der Blutdruck gemessen. = First your blood pressure is measured.
schwindlig | | dizzy | Mir ist schwindlig. = I feel dizzy.
übel | | sick, nauseous | Mir ist übel. = I feel sick.
allergisch gegen | | allergic to | Ich bin allergisch gegen Penizillin. = I'm allergic to penicillin.
versichert | | insured | Sind Sie gesetzlich oder privat versichert? = Do you have public or private insurance?
`,
  grammar: [
    { t: "Passive: present tense", html: `
<p>The passive focuses on <b>what happens</b>, not on who does it. Form: <b>werden</b> + Partizip II at the end.</p>
<table><tr><th>Aktiv</th><th>Passiv</th></tr>
<tr><td>Die Ärztin untersucht <b>den Patienten</b>.</td><td><b>Der Patient wird</b> untersucht.</td></tr>
<tr><td>Man misst den Blutdruck.</td><td>Der Blutdruck <b>wird gemessen</b>.</td></tr></table>
<p>The accusative object of the active sentence becomes the subject (Nominativ): den Patienten → der Patient.</p>
<p>werden: ich werde, du wirst, er/sie/es <b>wird</b>, wir werden, ihr werdet, sie/Sie <b>werden</b>.</p>
<p class="tip">Passive without a subject is common on signs and in rules: <i>Hier wird nicht geraucht.</i> = No smoking here.</p>` },
    { t: "Passive: Präteritum", html: `
<p>For the past use <b>wurde</b> + Partizip II.</p>
<table><tr><th></th><th>wurde</th><th>Example</th></tr>
<tr><td>ich</td><td>wurde</td><td>Ich <b>wurde</b> am Knie <b>operiert</b>.</td></tr>
<tr><td>du</td><td>wurdest</td><td>Wann <b>wurdest</b> du <b>geimpft</b>?</td></tr>
<tr><td>er / sie / es</td><td>wurde</td><td>Der Patient <b>wurde</b> sofort <b>behandelt</b>.</td></tr>
<tr><td>wir</td><td>wurden</td><td>Wir <b>wurden</b> gut <b>versorgt</b>.</td></tr>
<tr><td>ihr</td><td>wurdet</td><td>Ihr <b>wurdet</b> nicht <b>informiert</b>.</td></tr>
<tr><td>sie / Sie</td><td>wurden</td><td>Die Kinder <b>wurden</b> <b>untersucht</b>.</td></tr></table>
<p class="tip">English "I was operated on" = <i>Ich <b>wurde</b> operiert</i>, not "Ich war operiert" (that describes a state, not the event).</p>` },
    { t: "Who did it? von + Dativ", html: `
<p>To name the person doing the action (English "by"), use <b>von + Dativ</b>.</p>
<table><tr><th>Noun</th><th>Passive with von</th></tr>
<tr><td>der Hausarzt</td><td>Das Rezept wird <b>vom</b> (von dem) Hausarzt ausgestellt.</td></tr>
<tr><td>die Ärztin</td><td>Ich wurde <b>von der</b> Ärztin untersucht.</td></tr>
<tr><td>das Team</td><td>Die Operation wurde <b>vom</b> Team vorbereitet.</td></tr>
<tr><td>die Pflegekräfte</td><td>Die Patienten werden <b>von den</b> Pflegekräften versorgt.</td></tr></table>
<p>For a means or cause you'll sometimes see <b>durch + Akkusativ</b>: <i>Die Grippe wird durch Viren übertragen.</i></p>
<p class="tip">Most passive sentences have no von at all: that's the point of the passive.</p>` }
  ],
  ex: [
    { type: "gap", q: "Der Blutdruck ___ jeden Morgen ___. (messen)", a: ["wird", "gemessen"] },
    { type: "gap", q: "Die Patienten ___ hier sehr gut ___. (behandeln)", a: ["werden", "behandelt"] },
    { type: "mc", q: "In der Praxis ___ zuerst die Gesundheitskarte gelesen.", opts: ["wird", "werden", "wirst"], a: 0 },
    { type: "order", words: ["nicht", "Hier", "geraucht", "wird"], a: "Hier wird nicht geraucht" },
    { type: "gap", q: "Letztes Jahr ___ ich am Knie ___. (operieren)", a: ["wurde", "operiert"] },
    { type: "mc", q: "Nach dem Unfall ___ der Verletzte sofort ins Krankenhaus gebracht.", opts: ["wurde", "wurden", "war"], a: 0 },
    { type: "gap", q: "Die Kinder ___ letzte Woche gegen Grippe ___. (impfen)", a: ["wurden", "geimpft"] },
    { type: "mc", q: "Die Ärztin untersuchte den Patienten. → Der Patient ___ untersucht.", opts: ["wurde", "wird", "hat"], a: 0, why: "Active Präteritum (untersuchte) → passive Präteritum (wurde untersucht)." },
    { type: "mc", q: "Das Rezept wird ___ Hausarzt ausgestellt.", opts: ["vom", "von den", "durch der"], a: 0 },
    { type: "gap", q: "Die Operation wurde ___ einem erfahrenen Chirurgen durchgeführt.", a: ["von"] },
    { type: "mc", q: "Ich wurde von ___ Ärztin gründlich untersucht.", opts: ["der", "die", "den"], a: 0, why: "von always takes the dative: die Ärztin → von der Ärztin." },
    { type: "order", words: ["von", "Ich", "einem", "wurde", "gebissen", "Hund"], a: "Ich wurde von einem Hund gebissen" }
  ],
  speak: [
    { q: "Wie funktioniert die Krankenversicherung in Israel?", en: "How does health insurance work in Israel?", accept: ["krankenkasse", "versichert", "versicherung"], model: ["In Israel ist jeder bei einer Krankenkasse versichert, und viele Kosten werden vom Staat übernommen."] },
    { q: "Was machst du, wenn du krank bist?", en: "What do you do when you're ill?", accept: ["hausarzt", "arzt", "ärztin", "bleibe", "krankmeldung"], model: ["Ich gehe zum Hausarzt und hole mir eine Krankmeldung für die Arbeit."] },
    { q: "Wurdest du schon einmal operiert?", en: "Have you ever had an operation?", accept: ["operiert", "wurde", "nie", "noch nicht"], model: ["Ja, vor fünf Jahren wurde ich am Knie operiert.", "Nein, ich wurde noch nie operiert."] },
    { q: "Was passiert bei einer Untersuchung?", en: "What happens during an examination?", accept: ["wird", "werden", "gemessen", "untersucht"], model: ["Zuerst wird der Blutdruck gemessen, dann wird Blut abgenommen."] },
    { q: "Welche Symptome hast du bei einer Erkältung?", en: "What symptoms do you have when you've got a cold?", accept: ["husten", "schnupfen", "fieber", "kopfschmerzen", "halsschmerzen", "habe"], model: ["Meistens habe ich Husten, Schnupfen und Halsschmerzen."] }
  ],
  shadow: ["Für den Facharzt brauchen Sie eine Überweisung vom Hausarzt.", "Zuerst wird der Blutdruck gemessen, dann kommt die Ärztin.", "Nach dem Unfall wurde er sofort in die Notaufnahme gebracht.", "Die Kosten werden von der Krankenkasse übernommen.", "Mir ist schwindlig, und ich habe seit drei Tagen Husten.", "Dieses Medikament bekommen Sie nur auf Rezept."]
},
{
  id: 29, level: "B1", title: "Pannen auf Reisen", en: "Travel problems & complaints",
  cando: ["Describe things that went wrong on a trip", "Complain politely at a hotel or service desk", "Say what would have happened with hätte / wäre", "Express regret about the past"],
  vocab: `
die Panne | Pannen | breakdown, mishap | Wir hatten unterwegs eine Panne. = We broke down on the way.
die Verspätung | Verspätungen | delay | Der Flug hatte drei Stunden Verspätung. = The flight was three hours late.
der Flug | Flüge | flight
der Anschluss | Anschlüsse | connection (train, flight) | Ich habe meinen Anschluss verpasst. = I missed my connection.
verpassen | | to miss (a train, a chance)
ausfallen | | to be cancelled | Der Zug fällt heute aus. = The train is cancelled today.
die Beschwerde | Beschwerden | complaint
sich beschweren (über) | | to complain (about) | Wir haben uns über den Lärm beschwert. = We complained about the noise.
die Entschädigung | Entschädigungen | compensation | Für die Verspätung bekommen Sie eine Entschädigung. = You'll get compensation for the delay.
erstatten | | to refund | Der Preis wird Ihnen erstattet. = The price will be refunded to you.
die Rezeption | Rezeptionen | reception desk | Fragen Sie bitte an der Rezeption. = Please ask at reception.
die Reservierung | Reservierungen | reservation
stornieren | | to cancel (a booking) | Ich musste das Zimmer stornieren. = I had to cancel the room.
die Klimaanlage | Klimaanlagen | air conditioning | Die Klimaanlage funktionierte nicht. = The air conditioning didn't work.
ärgerlich | | annoying
der Stau | Staus | traffic jam | Wir standen zwei Stunden im Stau. = We were stuck in a traffic jam for two hours.
die Autobahn | Autobahnen | motorway
die Werkstatt | Werkstätten | garage, repair shop
abschleppen | | to tow away | Das Auto musste abgeschleppt werden. = The car had to be towed away.
der Diebstahl | Diebstähle | theft | Ich möchte einen Diebstahl melden. = I'd like to report a theft.
stehlen | | to steal | Mir wurde das Handy gestohlen. = My phone was stolen.
verlieren | | to lose
das Fundbüro | Fundbüros | lost property office
Hätte ich das bloß gewusst! | | If only I had known!
der Bahnsteig | Bahnsteige | platform | Der Zug fährt heute von einem anderen Bahnsteig ab. = Today the train leaves from a different platform.
die Durchsage | Durchsagen | announcement | Ich habe die Durchsage leider nicht verstanden. = Unfortunately I didn't understand the announcement.
umbuchen | | to rebook, change a booking | Können Sie mich auf einen späteren Flug umbuchen? = Can you rebook me onto a later flight?
die Reiseversicherung | Reiseversicherungen | travel insurance
der Mietwagen | Mietwagen | hire car, rental car | Am Flughafen holten wir den Mietwagen ab. = We picked up the rental car at the airport.
die Tankstelle | Tankstellen | petrol station
der Reifen | Reifen | tyre | Mitten in der Nacht hatten wir einen platten Reifen. = In the middle of the night we had a flat tyre.
der Schaden | Schäden | damage
beschädigt | | damaged | Mein Koffer kam beschädigt an. = My suitcase arrived damaged.
`,
  grammar: [
    { t: "Konjunktiv II past: hätte / wäre + Partizip II", html: `
<p>To talk about things that <b>did not really happen</b> in the past, use <b>hätte</b> or <b>wäre</b> + Partizip II. Choose hätte or wäre exactly as haben or sein in the Perfekt.</p>
<table><tr><th>Real (Perfekt)</th><th>Unreal (Konjunktiv II past)</th></tr>
<tr><td>Ich <b>habe</b> den Zug <b>verpasst</b>.</td><td>Ich <b>hätte</b> den Zug fast <b>verpasst</b>.</td></tr>
<tr><td>Wir <b>sind</b> zu Hause <b>geblieben</b>.</td><td>Wir <b>wären</b> lieber zu Hause <b>geblieben</b>.</td></tr></table>
<table><tr><th></th><th>haben</th><th>sein</th></tr>
<tr><td>ich / er / sie / es</td><td>hätte</td><td>wäre</td></tr>
<tr><td>du</td><td>hättest</td><td>wär(e)st</td></tr>
<tr><td>wir / sie / Sie</td><td>hätten</td><td>wären</td></tr>
<tr><td>ihr</td><td>hättet</td><td>wär(e)t</td></tr></table>
<p class="tip">English "would have done" = hätte / wäre + Partizip II. In the past you don't need würde.</p>` },
    { t: "Unreal conditions in the past", html: `
<p>Both parts of the sentence use Konjunktiv II past. In the wenn-clause the verb goes to the end; the main clause then starts with the verb.</p>
<p><i>Wenn wir früher losgefahren <b>wären</b>, <b>hätten</b> wir den Flug nicht <b>verpasst</b>.</i></p>
<p><i>Wenn ich das <b>gewusst hätte</b>, <b>hätte</b> ich ein anderes Hotel <b>gebucht</b>.</i></p>
<p>You can drop <b>wenn</b> and start with the verb: <i><b>Hätte</b> ich das gewusst, <b>wäre</b> ich zu Hause geblieben.</i></p>
<p class="tip">Compare English: "If we had left earlier, we wouldn't have missed the flight." Two "had/would have" parts = two hätte/wäre parts.</p>` },
    { t: "Regret and complaints", html: `
<table><tr><th>To …</th><th>Phrase</th></tr>
<tr><td>express regret</td><td>Hätte ich doch / bloß … ! · Wäre ich doch … !</td></tr>
<tr><td>say what you should have done</td><td>Wir <b>hätten</b> früher buchen <b>sollen</b>.</td></tr>
<tr><td>complain politely</td><td>Ich möchte mich über … beschweren. · Leider funktioniert … nicht.</td></tr>
<tr><td>say what you expected</td><td>Ich <b>hätte erwartet</b>, dass das Zimmer sauber ist.</td></tr>
<tr><td>ask for a solution</td><td>Könnten Sie bitte … ? · Ich hätte gern eine Entschädigung.</td></tr></table>
<p class="tip">"should have done" = <b>hätte</b> + infinitive + <b>sollen</b>, with two infinitives at the end: <i>Ich hätte das Zimmer stornieren sollen.</i></p>` }
  ],
  ex: [
    { type: "gap", q: "Ich ___ den Zug fast verpasst. (haben, Konjunktiv II)", a: ["hätte"] },
    { type: "gap", q: "Bei dem Wetter ___ wir lieber zu Hause geblieben. (sein, Konjunktiv II)", a: ["wären"] },
    { type: "mc", q: "Ohne deine Hilfe ___ ich den Ausweis nie gefunden.", opts: ["hätte", "wäre", "würde"], a: 0 },
    { type: "mc", q: "Fast ___ wir zu spät zum Flughafen gekommen.", opts: ["hätten", "wären"], a: 1, why: "kommen forms the Perfekt with sein → wären." },
    { type: "gap", q: "Wenn wir früher losgefahren ___, ___ wir den Flug nicht verpasst.", a: ["wären", "hätten"] },
    { type: "mc", q: "Wenn ich das gewusst hätte, ___ ich ein anderes Hotel gebucht.", opts: ["hätte", "wäre", "habe"], a: 0 },
    { type: "gap", q: "Wenn der Zug nicht ausgefallen ___, wäre ich pünktlich gewesen.", a: ["wäre"] },
    { type: "order", words: ["gehabt", "Wenn", "Zeit", "ich", "hätte", "wäre", "ich", "mitgekommen"], a: "Wenn ich Zeit gehabt hätte, wäre ich mitgekommen" },
    { type: "mc", q: "Hätte ich ___ eine Reiseversicherung abgeschlossen!", opts: ["doch", "denn", "schon"], a: 0, why: "doch (or bloß / nur) turns a Konjunktiv II sentence into a regret." },
    { type: "gap", q: "Wir ___ das Zimmer früher stornieren sollen. (we should have)", a: ["hätten"] },
    { type: "mc", q: "At reception, a polite complaint:", opts: ["Das Zimmer ist Mist!", "Entschuldigung, ich möchte mich über die Klimaanlage beschweren.", "Sie müssen das sofort reparieren!"], a: 1 },
    { type: "order", words: ["erwartet", "Ich", "eine", "hätte", "Entschädigung"], a: "Ich hätte eine Entschädigung erwartet" }
  ],
  speak: [
    { q: "Hattest du schon einmal eine Panne auf einer Reise?", en: "Have you ever had a mishap on a trip?", accept: ["panne", "verspätung", "verpasst", "verloren", "nie"], model: ["Ja, einmal hatte unser Flug sechs Stunden Verspätung, und wir haben den Anschluss verpasst."] },
    { q: "Was hättest du in dieser Situation anders gemacht?", en: "What would you have done differently in that situation?", accept: ["hätte", "wäre"], model: ["Ich hätte einen früheren Flug buchen sollen.", "Wir wären besser mit dem Zug gefahren."] },
    { q: "Wie beschwerst du dich im Hotel?", en: "How do you complain in a hotel?", accept: ["beschweren", "beschwerde", "leider", "funktioniert"], model: ["Entschuldigung, ich möchte mich beschweren: Die Klimaanlage in meinem Zimmer funktioniert nicht."] },
    { q: "Was machst du, wenn dein Gepäck nicht ankommt?", en: "What do you do if your luggage doesn't arrive?", accept: ["schalter", "melde", "gepäck", "gehe"], model: ["Ich gehe sofort zum Schalter und melde, dass mein Gepäck fehlt."] },
    { q: "Wenn du mehr Zeit gehabt hättest, wohin wärst du im letzten Urlaub gefahren?", en: "If you'd had more time, where would you have gone on your last holiday?", accept: ["wäre", "hätte", "gefahren", "geflogen"], model: ["Wenn ich mehr Zeit gehabt hätte, wäre ich nach Norwegen gefahren."] }
  ],
  shadow: ["Wenn wir früher losgefahren wären, hätten wir den Flug nicht verpasst.", "Hätte ich das bloß gewusst, dann hätte ich ein anderes Hotel gebucht.", "Leider funktioniert die Klimaanlage in unserem Zimmer nicht.", "Ich möchte mich über den Lärm beschweren, wir konnten nicht schlafen.", "Der Zug ist ausgefallen, und wir standen zwei Stunden am Bahnsteig.", "Ehrlich gesagt hätte ich eine Entschädigung erwartet."]
},
{
  id: 30, level: "B1", title: "Nachrichten und Medien", en: "News & media",
  cando: ["Talk about how you get your news", "Give your opinion on media and sources", "Show possession with the genitive", "Use wegen, trotz, während and statt"],
  vocab: `
die Zeitung | Zeitungen | newspaper | Mein Vater liest jeden Morgen die Zeitung. = My father reads the paper every morning.
die Zeitschrift | Zeitschriften | magazine
der Artikel | Artikel | article | Ich habe einen interessanten Artikel über das Klima gelesen. = I read an interesting article about the climate.
die Schlagzeile | Schlagzeilen | headline
der Bericht | Berichte | report | Der Bericht über die Wahl war sehr ausführlich. = The report on the election was very detailed.
die Sendung | Sendungen | programme, broadcast | Die Sendung läuft jeden Sonntag. = The programme is on every Sunday.
das Fernsehen | — | television (the medium)
der Sender | Sender | channel, station
die Werbung | — | advertising | Die ganze Werbung nervt mich. = All the advertising gets on my nerves.
die Meinung | Meinungen | opinion | Meiner Meinung nach ist das übertrieben. = In my opinion that's exaggerated.
der Journalist | Journalisten | journalist
die Pressefreiheit | — | freedom of the press
die Quelle | Quellen | source | Man sollte immer die Quelle prüfen. = You should always check the source.
die Falschmeldung | Falschmeldungen | false report, fake news
das Ereignis | Ereignisse | event | Das war das wichtigste Ereignis des Jahres. = That was the most important event of the year.
die Politik | — | politics
die Regierung | Regierungen | government | Die Regierung plant neue Gesetze. = The government is planning new laws.
die Wahl | Wahlen | election; choice | Wann ist die nächste Wahl? = When is the next election?
die Wirtschaft | — | economy
die sozialen Medien | Pl. | social media | Viele junge Leute informieren sich über die sozialen Medien. = Many young people get their news through social media.
der Beitrag | Beiträge | post; contribution
veröffentlichen | | to publish | Die Studie wurde gestern veröffentlicht. = The study was published yesterday.
berichten (über) | | to report (on) | Alle Zeitungen berichten über den Streik. = All the papers are reporting on the strike.
sich informieren | | to inform oneself, get information
abonnieren | | to subscribe (to) | Ich habe eine Zeitschrift für Reisen abonniert. = I've subscribed to a travel magazine.
teilen | | to share | Sie teilt ständig Artikel mit ihren Freunden. = She's always sharing articles with her friends.
aktuell | | current, up to date | Die App zeigt immer die aktuellen Nachrichten. = The app always shows the latest news.
glaubwürdig | | credible, trustworthy
wegen | | because of (+ Gen.) | Wegen des Streiks fahren keine Busse. = Because of the strike there are no buses.
trotz | | despite (+ Gen.) | Trotz des Regens gingen wir spazieren. = Despite the rain we went for a walk.
während | | during (+ Gen.); while | Während des Spiels war es ganz still. = During the match it was completely quiet.
statt | | instead of (+ Gen.)
`,
  grammar: [
    { t: "The genitive: whose?", html: `
<p>The Genitiv shows possession or belonging, like English 's or "of". It comes <b>after</b> the noun it describes.</p>
<table><tr><th></th><th>Nominativ</th><th>Genitiv</th></tr>
<tr><td>m</td><td>der Sender</td><td>das Programm <b>des</b> Sender<b>s</b></td></tr>
<tr><td>f</td><td>die Zeitung</td><td>der Titel <b>der</b> Zeitung</td></tr>
<tr><td>n</td><td>das Land</td><td>die Regierung <b>des</b> Land<b>es</b></td></tr>
<tr><td>pl</td><td>die Leser</td><td>die Meinung <b>der</b> Leser</td></tr></table>
<p>ein / mein: <b>eines</b>, <b>einer</b>, <b>eines</b> · <b>meines</b>, <b>meiner</b>, <b>meines</b>, <b>meiner</b> (pl).</p>
<p>Masculine and neuter nouns add <b>-s</b>; short ones often <b>-es</b> (des Landes, des Tages). Nouns like der Journalist, der Kunde take <b>-n</b>: des Journalist<b>en</b>.</p>
<p class="tip">Names just add -s with no apostrophe: <i>Ors Handy</i>. In speech people often say <i>das Handy von Or</i>. Like Hebrew סמיכות, the owner comes second: <i>das Haus des Lehrers</i> ≈ בית המורה.</p>` },
    { t: "Prepositions with the genitive", html: `
<table><tr><th>Preposition</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>wegen</b></td><td>because of</td><td>Wegen <b>des</b> Streiks fahren keine Busse.</td></tr>
<tr><td><b>trotz</b></td><td>despite</td><td>Trotz <b>der</b> Kritik erschien der Artikel.</td></tr>
<tr><td><b>während</b></td><td>during</td><td>Während <b>der</b> Sendung klingelte das Telefon.</td></tr>
<tr><td><b>statt</b></td><td>instead of</td><td>Statt <b>einer</b> Zeitung lese ich Nachrichten online.</td></tr></table>
<p class="tip">In everyday speech you'll often hear the dative (<i>wegen dem Wetter</i>). In writing and in exams use the genitive. <b>während</b> is also a conjunction: <i>Während ich frühstücke, höre ich Nachrichten.</i> (verb at the end)</p>` }
  ],
  ex: [
    { type: "gap", q: "Das ist die Meinung ___ Journalisten. (der)", a: ["des"] },
    { type: "mc", q: "die Schlagzeile ___ Zeitung", opts: ["der", "des", "die"], a: 0 },
    { type: "gap", q: "Das Ende des ___ war spannend. (der Film)", a: ["Films/Filmes"] },
    { type: "mc", q: "Das ist das Auto ___ Eltern.", opts: ["der", "des", "den"], a: 0, why: "Plural genitive article = der." },
    { type: "gap", q: "Die Ergebnisse ___ Wahl kommen heute Abend.", a: ["der"] },
    { type: "order", words: ["meines", "Das", "Vaters", "ist", "Büro", "das"], a: "Das ist das Büro meines Vaters" },
    { type: "gap", q: "___ des schlechten Wetters fiel das Konzert aus. (because of)", a: ["Wegen"] },
    { type: "mc", q: "___ des Streiks kam sie pünktlich zur Arbeit.", opts: ["Trotz", "Wegen", "Statt"], a: 0 },
    { type: "gap", q: "___ der Sendung darf man im Studio nicht sprechen. (during)", a: ["Während"] },
    { type: "mc", q: "___ einer Zeitung lese ich lieber Nachrichten online.", opts: ["Statt", "Trotz", "Während"], a: 0 },
    { type: "mc", q: "Wegen ___ Regens blieben wir zu Hause.", opts: ["des", "dem", "den"], a: 0, why: "In written German wegen takes the genitive: der Regen → des Regens. In speech you may hear 'wegen dem Regen'." },
    { type: "order", words: ["Kritik", "Trotz", "veröffentlichte", "der", "Zeitung", "die", "Artikel", "den"], a: "Trotz der Kritik veröffentlichte die Zeitung den Artikel" }
  ],
  speak: [
    { q: "Wie informierst du dich über aktuelle Nachrichten?", en: "How do you keep up with the news?", accept: ["informiere", "lese", "höre", "nachrichten", "online", "zeitung"], model: ["Ich informiere mich meistens online und höre morgens Nachrichten im Radio."] },
    { q: "Welche Quellen findest du glaubwürdig?", en: "Which sources do you find credible?", accept: ["glaubwürdig", "finde", "vertraue"], model: ["Ich finde die Berichte der großen Zeitungen ziemlich glaubwürdig."] },
    { q: "Was hältst du von sozialen Medien?", en: "What do you think of social media?", accept: ["meiner meinung", "finde", "denke", "glaube", "halte"], model: ["Meiner Meinung nach sind soziale Medien praktisch, aber man muss immer die Quelle prüfen."] },
    { q: "Was machst du während der Fahrt zur Arbeit?", en: "What do you do on your way to work?", accept: ["während", "lese", "höre"], model: ["Während der Fahrt höre ich Podcasts oder lese die Schlagzeilen."] },
    { q: "Was war das wichtigste Ereignis dieser Woche?", en: "What was the most important event this week?", accept: ["ereignis", "wichtigste", "war"], model: ["Das wichtigste Ereignis der Woche war die Wahl in meinem Land."] }
  ],
  shadow: ["Wegen des Streiks fahren heute keine Busse.", "Trotz der Kritik hat die Zeitung den Artikel veröffentlicht.", "Während der Sendung darf man im Studio nicht sprechen.", "Statt einer Zeitung lese ich lieber Nachrichten auf dem Handy.", "Das ist die Meinung des Journalisten, nicht die der Redaktion.", "Man sollte immer prüfen, ob eine Quelle glaubwürdig ist."]
}
);
