// B1 lessons 31-36, written for this app.
LESSONS.push(
{
  id: 31, level: "B1", title: "Geld und Konsum", en: "Money, banking & shopping habits",
  cando: ["Talk about your bank account, saving and spending", "Return or exchange something in a shop", "Use n-nouns like der Kunde correctly in all cases", "Use adjectives as nouns (der Bekannte, die Angestellte)"],
  vocab: `
das Bargeld | — | cash | Ich habe kaum noch Bargeld dabei. = I hardly carry any cash anymore.
ausgeben | | to spend (money) | Wie viel gibst du im Monat für Lebensmittel aus? = How much do you spend on groceries a month?
die Schulden | Pl. | debts | Er hat noch Schulden bei seiner Schwester. = He still owes his sister money.
der Kredit | Kredite | loan
die Zinsen | Pl. | interest (on money)
das Einkommen | Einkommen | income
der Kassenbon | Kassenbons | till receipt | Haben Sie den Kassenbon noch? = Do you still have the receipt?
der Rabatt | Rabatte | discount
zurückgeben | | to give back, to return
reklamieren | | to complain about (a faulty product)
die Garantie | Garantien | guarantee, warranty | Das Handy hat zwei Jahre Garantie. = The phone has a two-year warranty.
der Verbraucher | Verbraucher | consumer
der Konsum | — | consumption
sich leisten | | to afford | Ein neues Auto können wir uns gerade nicht leisten. = We can't afford a new car right now.
sparsam | | thrifty, economical
die Angestellte | Angestellten | employee (f) | Die Angestellte am Schalter war sehr freundlich. = The employee at the counter was very friendly.
bar | | (in) cash | Zahlen Sie bar oder mit Karte? = Are you paying cash or by card?
die Geheimzahl | Geheimzahlen | PIN (number) | Ich habe meine Geheimzahl vergessen. = I've forgotten my PIN.
der Kontoauszug | Kontoauszüge | bank statement
die Ersparnisse | Pl. | savings | Für das Auto haben wir fast alle Ersparnisse ausgegeben. = We spent almost all our savings on the car.
die Ausgaben | Pl. | expenses, spending | Ich schreibe alle meine Ausgaben in eine App. = I write all my expenses down in an app.
das Budget | Budgets | budget | Für den Urlaub haben wir ein Budget von 2000 Euro. = We have a budget of 2,000 euros for the holiday.
der Lohn | Löhne | wage(s), pay
die Rate | Raten | instalment | Wir bezahlen das Sofa in zwölf Raten. = We're paying for the sofa in twelve instalments.
das Taschengeld | — | pocket money | Wie viel Taschengeld bekommen deine Kinder? = How much pocket money do your children get?
die Währung | Währungen | currency
der Wechselkurs | Wechselkurse | exchange rate | Der Wechselkurs ist gerade günstig. = The exchange rate is good at the moment.
das Sonderangebot | Sonderangebote | special offer | Die Jacke war im Sonderangebot. = The jacket was on special offer.
das Schnäppchen | Schnäppchen | bargain | Für zwanzig Euro war das ein echtes Schnäppchen. = For twenty euros that was a real bargain.
die Ware | Waren | goods, merchandise
die Quittung | Quittungen | receipt (for a payment)
defekt | | faulty, broken | Der Drucker war schon beim Kauf defekt. = The printer was already faulty when I bought it.
sich lohnen | | to be worth it | Eine Reparatur lohnt sich bei dem alten Gerät nicht mehr. = A repair isn't worth it any more for the old device.
`,
  grammar: [
    { t: "n-Deklination", html: `
<p>A group of <b>masculine</b> nouns adds <b>-(e)n</b> in every case except the nominative singular. In English nothing changes, so this is easy to forget.</p>
<table><tr><th></th><th>Singular</th><th>Singular</th><th>Plural</th></tr>
<tr><td>Nom.</td><td>der Kunde</td><td>der Student</td><td>die Kunde<b>n</b></td></tr>
<tr><td>Akk.</td><td>den Kunde<b>n</b></td><td>den Student<b>en</b></td><td>die Kunde<b>n</b></td></tr>
<tr><td>Dat.</td><td>dem Kunde<b>n</b></td><td>dem Student<b>en</b></td><td>den Kunde<b>n</b></td></tr>
<tr><td>Gen.</td><td>des Kunde<b>n</b></td><td>des Student<b>en</b></td><td>der Kunde<b>n</b></td></tr></table>
<p>Which nouns? Masculine nouns ending in <b>-e</b> for people/animals (der Kunde, der Kollege, der Junge, der Neffe), nouns ending in <b>-ent, -ant, -ist, -at</b> (der Student, der Praktikant, der Polizist, der Automat), plus a few others: <b>der Herr, der Mensch, der Nachbar</b>.</p>
<p><i>Ich frage den Kunde<b>n</b>.</i> · <i>Sie hilft dem Nachbar<b>n</b>.</i> · <i>Wo ist der nächste Geldautomat? – Am Automat<b>en</b> vor der Bank.</i></p>
<p class="tip">You see it every day in letters: <i>Sehr geehrter Herr Weber</i> (nominative), but <i>Bitte rufen Sie Herr<b>n</b> Weber an.</i></p>` },
    { t: "Adjectives used as nouns", html: `
<p>Many words for people are really adjectives or participles: <i>bekannt</i> → <b>der Bekannte</b> (acquaintance), <i>angestellt</i> → <b>der/die Angestellte</b> (employee). They are written with a capital letter but keep <b>adjective endings</b>, so the ending changes with the article.</p>
<table><tr><th></th><th>with der/die</th><th>with ein/kein/mein</th><th>no article</th></tr>
<tr><td>masc.</td><td>der Bekannt<b>e</b></td><td>ein Bekannt<b>er</b></td><td>—</td></tr>
<tr><td>fem.</td><td>die Bekannt<b>e</b></td><td>eine Bekannt<b>e</b></td><td>—</td></tr>
<tr><td>plural</td><td>die Bekannt<b>en</b></td><td>meine Bekannt<b>en</b></td><td>viele Bekannt<b>e</b></td></tr>
<tr><td>dative</td><td>mit dem Bekannt<b>en</b></td><td>mit einem Bekannt<b>en</b></td><td>mit Bekannt<b>en</b></td></tr></table>
<p>Other common ones: der/die Deutsche, der/die Erwachsene, der/die Verwandte, der/die Jugendliche.</p>
<p>Neuter adjectives after <b>etwas, nichts, viel, wenig</b> work the same way: <i>etwas Neu<b>es</b></i>, <i>nichts Besonder<b>es</b></i>, <i>viel Gut<b>es</b></i>.</p>
<p class="tip">Tip: imagine the hidden noun. <i>ein Bekannter</i> = <i>ein bekannter (Mann)</i>. The ending is exactly what the adjective would have.</p>` }
  ],
  ex: [
    { type: "gap", q: "Die Verkäuferin berät den ___. (Kunde)", a: ["Kunden"] },
    { type: "mc", q: "Ich habe gestern mit unserem neuen ___ gesprochen.", opts: ["Nachbar", "Nachbarn", "Nachbars"], a: 1, why: "der Nachbar is an n-noun: dative singular = dem/unserem Nachbarn." },
    { type: "gap", q: "Können Sie bitte ___ Weber anrufen? (Herr)", a: ["Herrn"] },
    { type: "mc", q: "Wo ist hier ein ___?", opts: ["Geldautomat", "Geldautomaten"], a: 0, why: "Nominative singular: n-nouns have no extra ending here." },
    { type: "gap", q: "Die Bank hat dem ___ einen Kredit gegeben. (Student)", a: ["Studenten"] },
    { type: "order", words: ["Kollegen", "Ich", "um", "frage", "den", "Rat"], a: "Ich frage den Kollegen um Rat" },
    { type: "gap", q: "Ein ___ von mir arbeitet bei einer Bank. (bekannt)", a: ["Bekannter"] },
    { type: "mc", q: "Die ___ am Schalter war sehr freundlich.", opts: ["Angestellte", "Angestellter", "Angestellten"], a: 0 },
    { type: "gap", q: "Ich habe lange mit den ___ gesprochen. (angestellt)", a: ["Angestellten"] },
    { type: "mc", q: "Viele ___ bezahlen noch gern bar.", opts: ["Deutsche", "Deutschen", "Deutscher"], a: 0, why: "No article (viele) → strong ending: viele Deutsche." },
    { type: "gap", q: "Gibt es im Angebot etwas ___? (neu)", a: ["Neues"] },
    { type: "order", words: ["mir", "Ein", "hat", "Geld", "Verwandter", "geliehen"], a: "Ein Verwandter hat mir Geld geliehen" }
  ],
  speak: [
    { q: "Wofür gibst du am meisten Geld aus?", en: "What do you spend most money on?", accept: ["gebe", "aus", "für"], model: ["Ich gebe das meiste Geld für die Miete und für Lebensmittel aus."] },
    { q: "Sparst du Geld? Wofür?", en: "Do you save money? What for?", accept: ["spare", "sparen"], model: ["Ja, ich spare jeden Monat ein bisschen, weil ich nächstes Jahr nach Deutschland reisen möchte."] },
    { q: "Bezahlst du lieber bar oder mit Karte?", en: "Do you prefer to pay cash or by card?", accept: ["bar", "karte", "handy"], model: ["Ich bezahle fast immer mit Karte oder mit dem Handy, weil es schneller geht."] },
    { q: "Hast du schon einmal etwas umgetauscht oder reklamiert?", en: "Have you ever exchanged or complained about something?", accept: ["umgetauscht", "reklamiert", "zurückgegeben", "nie"], model: ["Ja, letzten Monat habe ich Kopfhörer zurückgegeben, weil sie kaputt waren."] },
    { q: "Was würdest du mit sehr viel Geld machen?", en: "What would you do with a lot of money?", accept: ["würde"], model: ["Ich würde eine Wohnung kaufen und mit meiner Familie eine lange Reise machen."] }
  ],
  shadow: ["Ich muss noch schnell Geld am Automaten abheben.", "Die Verkäuferin hat dem Kunden einen Rabatt gegeben.", "Ein Bekannter von mir arbeitet bei einer Bank.", "Wir sparen jeden Monat für eine größere Wohnung.", "Kann ich die Schuhe umtauschen? Ich habe den Kassenbon noch.", "Ein neues Auto können wir uns im Moment nicht leisten."]
},
{
  id: 32, level: "B1", title: "Beziehungen", en: "Partnership, family & conflict",
  cando: ["Talk about your relationships with partner and family", "Describe a conflict and how it was solved", "Link ideas with sowohl … als auch and nicht nur … sondern auch", "Express alternatives and double negatives with entweder … oder and weder … noch"],
  vocab: `
die Partnerschaft | Partnerschaften | partnership
der Partner | Partner | partner (m) | Mein Partner und ich wohnen seit zwei Jahren zusammen. = My partner and I have lived together for two years.
die Partnerin | Partnerinnen | partner (f)
sich trennen | | to split up, to separate | Nach fünf Jahren haben sie sich getrennt. = They split up after five years.
sich scheiden lassen | | to get divorced
geschieden | | divorced
die Ehe | Ehen | marriage | Ihre Ehe hält schon über dreißig Jahre. = Their marriage has lasted over thirty years.
der Ehemann | Ehemänner | husband
die Ehefrau | Ehefrauen | wife
der Verwandte | Verwandten | relative (m) | Am Wochenende besuchen wir Verwandte in Haifa. = At the weekend we're visiting relatives in Haifa.
die Schwiegermutter | Schwiegermütter | mother-in-law
der Enkel | Enkel | grandson, grandchild
der Neffe | Neffen | nephew | Mein Neffe ist gerade sechs geworden. = My nephew has just turned six.
die Nichte | Nichten | niece
das Vertrauen | — | trust | Ohne Vertrauen funktioniert keine Beziehung. = No relationship works without trust.
der Konflikt | Konflikte | conflict | Wir lösen Konflikte, indem wir offen darüber reden. = We solve conflicts by talking about them openly.
der Kompromiss | Kompromisse | compromise | Am Ende haben wir einen Kompromiss gefunden. = In the end we found a compromise.
die Eifersucht | — | jealousy
eifersüchtig | | jealous | Er wird schnell eifersüchtig, wenn sie mit anderen flirtet. = He gets jealous quickly when she flirts with others.
sich verstehen mit | | to get on with | Ich verstehe mich gut mit meinem Schwager. = I get on well with my brother-in-law.
das Verständnis | — | understanding | Danke für dein Verständnis! = Thanks for your understanding!
die Erziehung | — | upbringing, raising children
alleinerziehend | | single (parent) | Sie ist alleinerziehend und hat zwei Kinder. = She's a single mother with two children.
gemeinsam | | together, shared | Wir verbringen viel Zeit gemeinsam. = We spend a lot of time together.
treu | | faithful, loyal
sich entschuldigen | | to apologise | Er hat sich bei ihr entschuldigt. = He apologised to her.
die Rücksicht | — | consideration | Bitte nimm ein bisschen Rücksicht auf die anderen. = Please show a little consideration for the others.
verliebt | | in love | Die beiden sind total verliebt. = The two of them are totally in love.
die Trennung | Trennungen | separation, break-up | Nach der Trennung zog er in eine kleinere Wohnung. = After the break-up he moved into a smaller flat.
die Scheidung | Scheidungen | divorce
der Schwager | Schwager | brother-in-law
die Schwägerin | Schwägerinnen | sister-in-law | Meine Schwägerin ist gleichzeitig meine beste Freundin. = My sister-in-law is also my best friend.
die Patchworkfamilie | Patchworkfamilien | blended family | Wir sind eine Patchworkfamilie mit vier Kindern. = We're a blended family with four children.
`,
  grammar: [
    { t: "sowohl … als auch / nicht nur … sondern auch", html: `
<p>These two-part connectors join two words, phrases or sentences and stress that <b>both</b> are true.</p>
<table><tr><th>Connector</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>sowohl … als auch</b></td><td>both … and</td><td>Ich spreche <b>sowohl</b> Hebräisch <b>als auch</b> Englisch.</td></tr>
<tr><td><b>nicht nur … sondern auch</b></td><td>not only … but also</td><td>Er ist <b>nicht nur</b> mein Bruder, <b>sondern auch</b> mein bester Freund.</td></tr></table>
<p>Two subjects joined with <b>sowohl … als auch</b> normally take a <b>plural verb</b>: <i>Sowohl meine Mutter als auch mein Vater <b>wohnen</b> in Haifa.</i></p>
<p><b>nicht nur … sondern auch</b> usually has a comma before <i>sondern</i> and adds a stronger surprise: <i>Wir haben uns nicht nur gestritten, sondern auch versöhnt.</i></p>
<p class="tip">Hebrew has the same pattern: <b>sowohl … als auch</b> ≈ "gam … ve-gam" (גם… וגם).</p>` },
    { t: "entweder … oder / weder … noch", html: `
<table><tr><th>Connector</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>entweder … oder</b></td><td>either … or</td><td><b>Entweder</b> kommst du mit, <b>oder</b> du bleibst hier.</td></tr>
<tr><td><b>weder … noch</b></td><td>neither … nor</td><td>Ich habe <b>weder</b> Zeit <b>noch</b> Lust.</td></tr></table>
<p>With whole sentences, <b>entweder</b> usually takes position 1 (verb follows), or stands before the sentence (position 0): <i>Entweder <b>rufe</b> ich an …</i> / <i>Entweder ich <b>rufe</b> an …</i>. After <b>oder</b> normal word order follows.</p>
<p><b>weder … noch</b> is already negative. Never add <i>nicht</i> or <i>kein</i>: <i>Er ist weder eifersüchtig noch unfreundlich.</i> (not: <s>weder keine Zeit</s>)</p>
<p class="tip">Hebrew: <b>entweder … oder</b> = "o … o" (או… או), <b>weder … noch</b> = "lo … ve-lo" (לא… ולא).</p>` }
  ],
  ex: [
    { type: "gap", q: "Sowohl meine Mutter ___ auch mein Vater wohnen in Haifa.", a: ["als"] },
    { type: "gap", q: "Er ist nicht nur mein Bruder, ___ auch mein bester Freund.", a: ["sondern"] },
    { type: "mc", q: "Sowohl meine Schwester als auch mein Neffe ___ heute zu Besuch.", opts: ["kommt", "kommen"], a: 1, why: "Two subjects joined with sowohl … als auch normally take a plural verb." },
    { type: "mc", q: "Sie kümmert sich ___ um ihre Kinder, sondern auch um ihre Eltern.", opts: ["nicht nur", "sowohl", "weder"], a: 0 },
    { type: "order", words: ["uns", "Wir", "nur", "haben", "nicht", "gestritten,", "auch", "sondern", "versöhnt"], a: "Wir haben uns nicht nur gestritten, sondern auch versöhnt" },
    { type: "order", words: ["Respekt", "als auch", "Sowohl Vertrauen", "sind", "wichtig"], a: "Sowohl Vertrauen als auch Respekt sind wichtig" },
    { type: "gap", q: "Ich habe ___ Zeit noch Lust auf einen Streit.", a: ["weder"] },
    { type: "gap", q: "Entweder wir reden jetzt darüber, ___ wir lassen es.", a: ["oder"] },
    { type: "mc", q: "Er ist weder eifersüchtig ___ unfreundlich.", opts: ["noch", "oder", "nicht"], a: 0 },
    { type: "mc", q: "Which sentence is correct?", opts: ["Ich habe weder keine Zeit noch Geld.", "Ich habe weder Zeit noch Geld.", "Ich habe nicht weder Zeit noch Geld."], a: 1, why: "weder … noch is already negative – no extra nicht or kein." },
    { type: "mc", q: "___ ruft er heute an, oder er schreibt morgen.", opts: ["Entweder", "Weder", "Sowohl"], a: 0 },
    { type: "order", words: ["besuchen wir", "Entweder", "meine", "Schwiegermutter,", "sie", "oder", "zu", "kommt", "uns"], a: "Entweder besuchen wir meine Schwiegermutter, oder sie kommt zu uns" }
  ],
  speak: [
    { q: "Mit wem verstehst du dich in deiner Familie besonders gut?", en: "Who in your family do you get on with especially well?", accept: ["verstehe mich", "verstehe"], model: ["Ich verstehe mich besonders gut mit meiner Schwester, weil wir sowohl die gleichen Hobbys als auch den gleichen Humor haben."] },
    { q: "Was ist für dich in einer Beziehung am wichtigsten?", en: "What is most important to you in a relationship?", accept: ["wichtig", "vertrauen", "respekt", "ehrlich"], model: ["Für mich ist nicht nur Liebe wichtig, sondern auch Vertrauen und Respekt."] },
    { q: "Worüber streitest du dich manchmal mit deiner Familie?", en: "What do you sometimes argue about with your family?", accept: ["streite", "streiten", "über"], model: ["Manchmal streite ich mich mit meinem Bruder über Politik, aber wir versöhnen uns immer schnell."] },
    { q: "Wie verbringst du Zeit mit deiner Familie?", en: "How do you spend time with your family?", accept: ["verbringe", "verbringen", "gemeinsam", "zusammen"], model: ["Am Freitagabend essen wir gemeinsam bei meinen Eltern, und am Samstag verbringen wir oft Zeit am Strand."] },
    { q: "Was machst du nach einem Streit?", en: "What do you do after an argument?", accept: ["entschuldige", "rede", "versöhne", "warte", "kompromiss"], model: ["Entweder rede ich sofort darüber, oder ich warte einen Tag und entschuldige mich dann."] }
  ],
  shadow: ["Sowohl meine Eltern als auch meine Geschwister wohnen in der Nähe.", "Er ist nicht nur mein Partner, sondern auch mein bester Freund.", "Ich habe weder Zeit noch Lust auf einen Streit.", "Entweder rufst du sie an, oder du schreibst ihr eine Nachricht.", "Nach dem Streit haben wir uns schnell wieder versöhnt.", "In einer Beziehung sind Vertrauen und Respekt das Wichtigste."]
},
{
  id: 33, level: "B1", title: "Kultur erleben", en: "Exhibitions, theatre, concerts & reviews",
  cando: ["Talk about cultural events you have been to", "Recommend or criticise a show, book or exhibition", "Use relative clauses with prepositions (das Theater, in dem …)", "Use was and wo as relative words"],
  vocab: `
die Ausstellung | Ausstellungen | exhibition | Die Ausstellung läuft noch bis Ende Mai. = The exhibition runs until the end of May.
das Theater | Theater | theatre | Wir gehen heute Abend ins Theater. = We're going to the theatre tonight.
die Aufführung | Aufführungen | performance | Die Aufführung hat fast drei Stunden gedauert. = The performance lasted almost three hours.
die Vorstellung | Vorstellungen | show, performance | Die Vorstellung beginnt um acht. = The show starts at eight.
die Bühne | Bühnen | stage | Am Ende standen alle Schauspieler zusammen auf der Bühne. = At the end all the actors stood on stage together.
das Publikum | — | audience | Das Publikum war begeistert. = The audience was thrilled.
der Zuschauer | Zuschauer | spectator, viewer
der Schauspieler | Schauspieler | actor
die Schauspielerin | Schauspielerinnen | actress
der Künstler | Künstler | artist | Der Künstler, dessen Bilder hier hängen, kommt aus Haifa. = The artist whose pictures hang here comes from Haifa.
das Gemälde | Gemälde | painting | Vor diesem Gemälde stehen immer viele Leute. = There are always lots of people in front of this painting.
das Kunstwerk | Kunstwerke | work of art
die Oper | Opern | opera | Ich war noch nie in der Oper. = I've never been to the opera.
das Orchester | Orchester | orchestra
der Sänger | Sänger | singer
die Eintrittskarte | Eintrittskarten | admission ticket | Ich habe die Eintrittskarten online gekauft. = I bought the tickets online.
der Eintritt | — | admission | Am Sonntag ist der Eintritt frei. = Admission is free on Sundays.
ausverkauft | | sold out | Das Konzert war leider ausverkauft. = Unfortunately the concert was sold out.
die Kritik | Kritiken | review; criticism | Das Stück hat sehr gute Kritiken bekommen. = The play got very good reviews.
die Bewertung | Bewertungen | rating, review
beeindruckend | | impressive | Die Musik war wirklich beeindruckend. = The music was really impressive.
enttäuschend | | disappointing | Das Ende des Films fand ich enttäuschend. = I found the ending of the film disappointing.
die Handlung | Handlungen | plot | Die Handlung ist ein bisschen kompliziert. = The plot is a bit complicated.
der Regisseur | Regisseure | director (film, theatre)
die Premiere | Premieren | premiere, opening night
die Führung | Führungen | guided tour | Um 15 Uhr gibt es eine Führung auf Englisch. = There's a guided tour in English at 3 pm.
der Applaus | — | applause
klatschen | | to clap
die Veranstaltung | Veranstaltungen | event | Die Veranstaltung findet im Rathaus statt. = The event takes place in the town hall.
das Festival | Festivals | festival
die Galerie | Galerien | gallery
der Roman | Romane | novel
der Schriftsteller | Schriftsteller | writer, author | Welcher Schriftsteller hat diesen Roman geschrieben? = Which writer wrote this novel?
`,
  grammar: [
    { t: "Relative clauses with prepositions", html: `
<p>When the verb needs a preposition (<i>sprechen <b>über</b></i>, <i>sich interessieren <b>für</b></i>, <i>gehen <b>mit</b></i>), the preposition stands <b>right before</b> the relative pronoun. The preposition decides the case; the noun decides gender and number.</p>
<table><tr><th>Noun</th><th>Relative clause</th></tr>
<tr><td>der Film</td><td>, <b>über den</b> wir gesprochen haben (über + Akk.)</td></tr>
<tr><td>die Ausstellung</td><td>, <b>für die</b> ich mich interessiere (für + Akk.)</td></tr>
<tr><td>das Theater</td><td>, <b>in dem</b> wir gestern waren (in + Dat.)</td></tr>
<tr><td>die Freunde</td><td>, <b>mit denen</b> ich ins Theater gehe (mit + Dat.)</td></tr></table>
<p>Relative pronoun in the dative: <b>dem</b> (m/n), <b>der</b> (f), <b>denen</b> (plural). The verb goes to the end of the clause.</p>
<p class="tip">English can leave the preposition at the end: "the film we talked <i>about</i>". German never does: <i>der Film, <b>über den</b> wir gesprochen haben</i>. The relative pronoun can't be left out either.</p>` },
    { t: "Relative was and wo", html: `
<p>Use <b>was</b> (not das) as the relative pronoun after:</p>
<table><tr><th>After …</th><th>Example</th></tr>
<tr><td>alles, nichts, etwas, vieles</td><td>Alles, <b>was</b> er gesagt hat, stimmt.</td></tr>
<tr><td>a superlative used as a noun</td><td>Das ist das Beste, <b>was</b> ich je gesehen habe.</td></tr>
<tr><td>a whole sentence</td><td>Die Karten waren ausverkauft, <b>was</b> mich sehr geärgert hat.</td></tr></table>
<p>Use <b>wo</b> after places (and in spoken German also after times):</p>
<p><i>Berlin ist eine Stadt, <b>wo</b> man viel Kultur erleben kann.</i> (= in der man …)<br><i>Ich zeige dir das Café, <b>wo</b> ich immer lese.</i></p>
<p class="tip">With a preposition, <b>was</b> becomes <b>wo(r)- + preposition</b>: <i>Das ist alles, <b>worüber</b> wir gesprochen haben.</i></p>` }
  ],
  ex: [
    { type: "gap", q: "Das ist der Schauspieler, ___ ___ ich dir erzählt habe. (erzählen von)", a: ["von", "dem"] },
    { type: "mc", q: "Die Ausstellung, für ___ ich mich interessiere, endet im Mai.", opts: ["die", "der", "den"], a: 0 },
    { type: "mc", q: "Das Theater, in ___ wir gestern waren, ist sehr alt.", opts: ["das", "dem", "den"], a: 1, why: "in + location → dative: in dem." },
    { type: "gap", q: "Die Freunde, mit ___ ich ins Theater gehe, kommen aus Haifa.", a: ["denen"] },
    { type: "mc", q: "Der Roman, ___ wir lange gesprochen haben, war spannend.", opts: ["über den", "über dem", "den über"], a: 0 },
    { type: "order", words: ["ist", "Das", "Sängerin,", "die", "die", "auf", "ich", "freue", "mich"], a: "Das ist die Sängerin, auf die ich mich freue" },
    { type: "gap", q: "Alles, ___ der Regisseur über das Stück gesagt hat, stimmt.", a: ["was"] },
    { type: "mc", q: "Das ist das Beste, ___ ich je gesehen habe.", opts: ["das", "was", "wo"], a: 1, why: "After a superlative used as a noun (das Beste) use was." },
    { type: "mc", q: "Ich besuche die Stadt, ___ ich geboren bin.", opts: ["wo", "was", "die"], a: 0 },
    { type: "gap", q: "Es gibt nichts, ___ mir an der Aufführung nicht gefallen hat.", a: ["was"] },
    { type: "mc", q: "Die Vorstellung war ausverkauft, ___ mich sehr geärgert hat.", opts: ["was", "die", "das"], a: 0, why: "was refers back to the whole previous clause." },
    { type: "order", words: ["ist", "Berlin", "Stadt,", "eine", "man", "wo", "Kultur", "viel", "kann", "erleben"], a: "Berlin ist eine Stadt, wo man viel Kultur erleben kann" }
  ],
  speak: [
    { q: "Gehst du lieber ins Theater oder in eine Ausstellung?", en: "Do you prefer going to the theatre or to an exhibition?", accept: ["lieber", "theater", "ausstellung"], model: ["Ich gehe lieber in Ausstellungen, weil ich mich sehr für Malerei interessiere."] },
    { q: "Erzähl von einer Veranstaltung, die dir gut gefallen hat.", en: "Tell me about an event you really liked.", accept: ["gefallen", "war", "habe"], model: ["Letztes Jahr war ich auf einem Festival, auf das ich mich lange gefreut hatte, und die Stimmung war fantastisch."] },
    { q: "Welches Buch oder welchen Film kannst du empfehlen?", en: "Which book or film can you recommend?", accept: ["empfehle", "empfehlen"], model: ["Ich empfehle einen Roman, über den ich noch lange nachgedacht habe."] },
    { q: "Liest du Kritiken, bevor du Karten kaufst?", en: "Do you read reviews before you buy tickets?", accept: ["lese", "kritiken", "bewertungen", "nie"], model: ["Ja, ich lese immer ein paar Kritiken, aber am Ende entscheide ich selbst."] },
    { q: "Was ist das Beste, was du je erlebt hast?", en: "What is the best thing you've ever experienced?", accept: ["das beste", "was ich"], model: ["Das Beste, was ich je erlebt habe, war ein Konzert unter freiem Himmel in Jerusalem."] }
  ],
  shadow: ["Das ist das Theater, in dem wir letztes Jahr die Premiere gesehen haben.", "Die Ausstellung, für die ich mich interessiere, läuft noch bis Mai.", "Der Schauspieler, von dem alle sprechen, war wirklich beeindruckend.", "Alles, was der Regisseur gesagt hat, fand ich spannend.", "Tel Aviv ist eine Stadt, wo es jeden Abend Veranstaltungen gibt.", "Am Ende hat das Publikum lange geklatscht."]
},
{
  id: 34, level: "B1", title: "Zukunft und Umwelt", en: "The future, climate & environment",
  cando: ["Make predictions and assumptions with werden", "Talk about environmental problems and solutions", "Say what must or should be done using the passive with modal verbs", "Describe what you do for the environment"],
  vocab: `
der Klimawandel | — | climate change | Der Klimawandel betrifft uns alle. = Climate change affects us all.
die Erderwärmung | — | global warming
erneuerbar | | renewable | Wir brauchen mehr erneuerbare Energie. = We need more renewable energy.
die Solaranlage | Solaranlagen | solar power system | Auf unserem Dach gibt es eine Solaranlage. = There are solar panels on our roof.
Müll trennen | | to separate rubbish | In Deutschland wird der Müll genau getrennt. = In Germany the rubbish is carefully separated.
recyceln | | to recycle | Glas und Papier kann man gut recyceln. = Glass and paper are easy to recycle.
die Verpackung | Verpackungen | packaging | Viele Verpackungen sind aus Plastik. = A lot of packaging is made of plastic.
das Plastik | — | plastic
die Verschmutzung | — | pollution
schädlich | | harmful | Abgase sind schädlich für die Gesundheit. = Exhaust fumes are harmful to health.
die Dürre | Dürren | drought | Wegen der Dürre gibt es weniger Wasser. = Because of the drought there is less water.
die Überschwemmung | Überschwemmungen | flood
die Prognose | Prognosen | forecast, prediction
vermutlich | | presumably
steigen | | to rise | Die Preise für Strom steigen jedes Jahr. = Electricity prices rise every year.
sinken | | to fall, to sink
nachhaltig | | sustainable | Ich versuche, nachhaltiger zu leben. = I try to live more sustainably.
das Elektroauto | Elektroautos | electric car | Unser nächstes Auto wird ein Elektroauto sein. = Our next car will be an electric car.
reparieren | | to repair
wegwerfen | | to throw away | Kaputte Geräte sollte man nicht sofort wegwerfen. = You shouldn't throw away broken devices right away.
der Abfall | Abfälle | waste, rubbish
das Abgas | Abgase | exhaust fumes, emissions
der Treibhauseffekt | — | greenhouse effect
der Rohstoff | Rohstoffe | raw material | Viele Rohstoffe werden immer knapper. = Many raw materials are becoming scarcer and scarcer.
die Windkraft | — | wind power | Im Norden wird viel Strom aus Windkraft erzeugt. = In the north a lot of electricity is generated from wind power.
das Unwetter | Unwetter | severe weather, storm | Nach dem Unwetter waren viele Straßen gesperrt. = After the storm many roads were closed.
aussterben | | to die out, become extinct | Viele Tierarten werden vermutlich aussterben. = Many animal species will probably die out.
die öffentlichen Verkehrsmittel | Pl. | public transport | Ich fahre fast nur mit öffentlichen Verkehrsmitteln. = I almost only use public transport.
das Pfand | — | deposit (on bottles) | Auf diese Flasche gibt es 25 Cent Pfand. = There's a 25-cent deposit on this bottle.
vermeiden | | to avoid | Ich versuche, unnötigen Müll zu vermeiden. = I try to avoid unnecessary rubbish.
reduzieren | | to reduce
pflanzen | | to plant | In unserer Straße wurden zwanzig neue Bäume gepflanzt. = Twenty new trees were planted in our street.
die Lösung | Lösungen | solution
`,
  grammar: [
    { t: "Futur I: werden + infinitive", html: `
<p>Futur I = <b>werden</b> in position 2 + <b>infinitive</b> at the end.</p>
<table><tr><th>Person</th><th>werden</th><th></th><th>infinitive</th></tr>
<tr><td>ich</td><td><b>werde</b></td><td>mehr Rad</td><td>fahren</td></tr>
<tr><td>du</td><td><b>wirst</b></td><td>es</td><td>schaffen</td></tr>
<tr><td>er/sie/es</td><td><b>wird</b></td><td>wohl im Stau</td><td>stehen</td></tr>
<tr><td>wir / sie / Sie</td><td><b>werden</b></td><td>mehr Energie</td><td>brauchen</td></tr>
<tr><td>ihr</td><td><b>werdet</b></td><td>es</td><td>sehen</td></tr></table>
<p>Use it for:</p>
<p>• <b>predictions</b>: <i>Die Temperaturen werden weiter steigen.</i><br>• <b>promises and resolutions</b>: <i>Ich werde weniger Plastik kaufen.</i><br>• <b>assumptions about now</b>, often with <i>wohl, wahrscheinlich, sicher</i>: <i>Er ist nicht da. Er wird wohl im Stau stehen.</i> (= he's probably stuck in traffic)</p>
<p class="tip">For normal plans Germans usually use the <b>present tense + a time word</b>: <i>Morgen fahre ich nach Haifa.</i> Futur I sounds more like a prediction or a firm promise.</p>` },
    { t: "Passive with modal verbs", html: `
<p>To say what <b>must / should / can</b> be done, combine the modal verb with the passive infinitive: <b>Partizip II + werden</b> at the end.</p>
<table><tr><th>Active (man)</th><th>Passive with modal</th></tr>
<tr><td>Man muss die Heizung reparieren.</td><td>Die Heizung <b>muss</b> repariert <b>werden</b>.</td></tr>
<tr><td>Man soll Plastik reduzieren.</td><td>Plastik <b>soll</b> reduziert <b>werden</b>.</td></tr>
<tr><td>Man kann alte Handys recyceln.</td><td>Alte Handys <b>können</b> recycelt <b>werden</b>.</td></tr>
<tr><td>Man darf hier keinen Müll wegwerfen.</td><td>Hier <b>darf</b> kein Müll weggeworfen <b>werden</b>.</td></tr></table>
<p>In a subordinate clause the modal verb goes to the very end: <i>Ich finde, dass mehr Bäume gepflanzt <b>werden müssen</b>.</i></p>
<p class="tip">Use this form when the action matters more than the person doing it – very common in news, rules and discussions about the environment.</p>` }
  ],
  ex: [
    { type: "gap", q: "In Zukunft ___ die Temperaturen weiter ___. (steigen)", a: ["werden", "steigen"] },
    { type: "mc", q: "Ich ___ ab morgen mit dem Fahrrad zur Arbeit fahren.", opts: ["werde", "wird", "werden"], a: 0 },
    { type: "gap", q: "Keine Sorge, du ___ es bestimmt schaffen. (werden)", a: ["wirst"] },
    { type: "mc", q: "Er ist noch nicht da. Er ___ wohl im Stau stehen.", opts: ["wird", "ist", "hat"], a: 0, why: "werden + wohl expresses an assumption about the present." },
    { type: "gap", q: "Wahrscheinlich ___ es nächsten Sommer noch heißer ___. (sein)", a: ["wird", "sein"] },
    { type: "order", words: ["mehr", "Wir", "Energie", "werden", "erneuerbare", "brauchen"], a: "Wir werden mehr erneuerbare Energie brauchen" },
    { type: "gap", q: "Der Müll muss richtig ___ werden. (trennen)", a: ["getrennt"] },
    { type: "mc", q: "Die Heizung ist kaputt. Sie muss ___.", opts: ["repariert werden", "werden repariert", "reparieren werden"], a: 0 },
    { type: "gap", q: "Plastikverpackungen sollen ___ ___. (reduzieren)", a: ["reduziert", "werden"] },
    { type: "mc", q: "Ich finde, dass mehr Bäume gepflanzt ___.", opts: ["werden müssen", "müssen werden", "müssen"], a: 0, why: "In a dass-clause the modal verb goes to the very end." },
    { type: "gap", q: "Alte Handys können ___ ___. (recyceln)", a: ["recycelt", "werden"] },
    { type: "order", words: ["Müll", "Hier", "kein", "darf", "werden", "weggeworfen"], a: "Hier darf kein Müll weggeworfen werden" }
  ],
  speak: [
    { q: "Wie wird die Welt in dreißig Jahren aussehen?", en: "What will the world look like in thirty years?", accept: ["wird", "werden"], model: ["Ich glaube, es wird heißer werden, aber wir werden auch viel mehr erneuerbare Energie nutzen."] },
    { q: "Was tust du persönlich für die Umwelt?", en: "What do you personally do for the environment?", accept: ["trenne", "fahre", "spare", "kaufe", "benutze", "recycle"], model: ["Ich trenne den Müll, fahre oft mit dem Fahrrad und kaufe weniger Plastik."] },
    { q: "Was muss in deiner Stadt verbessert werden?", en: "What needs to be improved in your town?", accept: ["muss", "müssen", "sollte", "werden"], model: ["In meiner Stadt muss der öffentliche Verkehr verbessert werden, und es müssen mehr Bäume gepflanzt werden."] },
    { q: "Welche Umweltprobleme gibt es in Israel?", en: "What environmental problems are there in Israel?", accept: ["hitze", "wasser", "müll", "dürre", "verschmutzung", "problem"], model: ["In Israel ist die Hitze ein großes Problem, und Wasser ist sehr wertvoll."] },
    { q: "Was wirst du nächstes Jahr anders machen?", en: "What will you do differently next year?", accept: ["werde"], model: ["Nächstes Jahr werde ich weniger fliegen und öfter mit dem Zug fahren."] }
  ],
  shadow: ["In Zukunft werden die Sommer wahrscheinlich noch heißer werden.", "Ich werde ab jetzt weniger Plastik kaufen.", "Er ist noch nicht da, er wird wohl im Stau stehen.", "Der Müll muss richtig getrennt werden.", "Alte Geräte sollten repariert und nicht weggeworfen werden.", "Wir müssen die Natur für unsere Kinder schützen."]
},
{
  id: 35, level: "B1", title: "Gesellschaft und Politik", en: "Voting, volunteering & integration",
  cando: ["Talk about elections, rights and volunteering", "Describe integration in a new country", "Express contrast with obwohl and trotzdem", "Order events with bevor, nachdem, seitdem, bis, während and compare with je … desto"],
  vocab: `
die Gesellschaft | Gesellschaften | society | Die Gesellschaft hat sich in den letzten Jahren stark verändert. = Society has changed a lot in recent years.
der Politiker | Politiker | politician
die Partei | Parteien | (political) party | Für welche Partei hast du gestimmt? = Which party did you vote for?
wählen | | to vote; to choose | Ich gehe immer wählen. = I always go and vote.
die Stimme | Stimmen | vote; voice
der Bürger | Bürger | citizen | Alle Bürger sollten ihre Rechte kennen. = All citizens should know their rights.
die Demokratie | Demokratien | democracy
das Gesetz | Gesetze | law
das Recht | Rechte | right | Jeder hat das Recht auf eine eigene Meinung. = Everyone has the right to their own opinion.
die Pflicht | Pflichten | duty, obligation | Wählen ist ein Recht, aber auch eine Pflicht. = Voting is a right but also a duty.
die Staatsangehörigkeit | Staatsangehörigkeiten | citizenship, nationality | Sie hat die deutsche Staatsangehörigkeit beantragt. = She has applied for German citizenship.
die Integration | — | integration
sich integrieren | | to integrate | Sie hat sich schnell in Deutschland integriert. = She integrated quickly in Germany.
der Migrant | Migranten | migrant (m)
die Heimat | — | home, homeland | Israel ist meine Heimat. = Israel is my home.
die Herkunft | — | origin, background
das Ehrenamt | Ehrenämter | volunteer work, honorary post
ehrenamtlich | | voluntary, unpaid | Sie arbeitet ehrenamtlich in einem Altenheim. = She volunteers in a care home.
sich engagieren | | to get involved | Er engagiert sich seit Jahren für Flüchtlinge. = He has been helping refugees for years.
der Verein | Vereine | club, association | Mein Sohn spielt Fußball in einem Verein. = My son plays football in a club.
die Hilfsorganisation | Hilfsorganisationen | aid organisation
spenden | | to donate | Jedes Jahr spenden wir Geld an eine Hilfsorganisation. = Every year we donate money to an aid organisation.
die Spende | Spenden | donation
die Gleichberechtigung | — | equal rights, equality
die Meinungsfreiheit | — | freedom of speech
demonstrieren | | to demonstrate, to protest | Tausende Menschen haben gegen das Gesetz demonstriert. = Thousands of people protested against the law.
das Parlament | Parlamente | parliament | Das Parlament hat das Gesetz beschlossen. = Parliament passed the law.
der Kandidat | Kandidaten | candidate
der Wähler | Wähler | voter | Viele Wähler sind noch unentschlossen. = Many voters are still undecided.
die Mehrheit | Mehrheiten | majority | Die Partei hat die absolute Mehrheit verloren. = The party lost its absolute majority.
die Minderheit | Minderheiten | minority
der Flüchtling | Flüchtlinge | refugee
teilnehmen (an) | | to take part (in) | Sie nimmt regelmäßig an Demonstrationen teil. = She regularly takes part in demonstrations.
`,
  grammar: [
    { t: "obwohl vs. trotzdem", html: `
<p>Both express a contrast ("although" / "nevertheless"), but they work differently in the sentence.</p>
<table><tr><th></th><th>Type</th><th>Example</th></tr>
<tr><td><b>obwohl</b></td><td>subordinating – verb at the <b>end</b></td><td><b>Obwohl</b> ich wenig Zeit <b>habe</b>, arbeite ich ehrenamtlich.</td></tr>
<tr><td><b>trotzdem</b></td><td>adverb in a main clause – verb <b>right after</b> it</td><td>Ich habe wenig Zeit. <b>Trotzdem arbeite</b> ich ehrenamtlich.</td></tr></table>
<p><b>trotzdem</b> can also come after the verb: <i>Ich arbeite <b>trotzdem</b> ehrenamtlich.</i></p>
<p class="tip">Hebrew: <b>obwohl</b> ≈ "lamrot she…" (למרות ש…), <b>trotzdem</b> ≈ "u-ve-khol zot" (ובכל זאת). The obwohl-clause gives the obstacle; the trotzdem-sentence gives the surprising result.</p>` },
    { t: "Time clauses: bevor, nachdem, seitdem, bis, während", html: `
<p>All of these send the verb to the <b>end</b> of their clause.</p>
<table><tr><th>Word</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>bevor</b></td><td>before</td><td><b>Bevor</b> du den Antrag abgibst, kopier alle Dokumente.</td></tr>
<tr><td><b>nachdem</b></td><td>after</td><td><b>Nachdem</b> wir gewählt <b>hatten</b>, sind wir ins Café gegangen.</td></tr>
<tr><td><b>seitdem / seit</b></td><td>since</td><td><b>Seitdem</b> ich hier lebe, lerne ich jeden Tag Deutsch.</td></tr>
<tr><td><b>bis</b></td><td>until</td><td>Warte bitte, <b>bis</b> die Ergebnisse da sind.</td></tr>
<tr><td><b>während</b></td><td>while</td><td><b>Während</b> er spricht, machen wir Notizen.</td></tr></table>
<p><b>nachdem</b> needs a tense shift: the nachdem-action happened <b>earlier</b>. Main clause in Perfekt/Präteritum → nachdem-clause in <b>Plusquamperfekt</b>; main clause in Präsens → nachdem-clause in Perfekt.</p>
<p class="tip">Don't mix up the preposition <i>vor</i> / <i>nach</i> (+ noun: <i>nach der Wahl</i>) with the conjunction <i>bevor</i> / <i>nachdem</i> (+ clause: <i>nachdem die Wahl vorbei war</i>).</p>` },
    { t: "je … desto", html: `
<p><b>je</b> + comparative … , <b>desto</b> (or <b>umso</b>) + comparative … = "the more …, the more …".</p>
<table><tr><th>je-part (verb at end)</th><th>desto-part (verb right after the comparative)</th></tr>
<tr><td><b>Je</b> länger ich hier <b>lebe</b>,</td><td><b>desto</b> besser <b>verstehe</b> ich die Gesellschaft.</td></tr>
<tr><td><b>Je</b> mehr Menschen sich <b>engagieren</b>,</td><td><b>desto</b> stärker <b>ist</b> die Demokratie.</td></tr></table>
<p class="tip">Word order is the tricky part: the je-part is a subordinate clause (verb last), the desto-part starts with <i>desto + comparative</i>, then the verb, then the subject.</p>` }
  ],
  ex: [
    { type: "gap", q: "___ ich wenig Zeit habe, arbeite ich ehrenamtlich.", a: ["Obwohl"] },
    { type: "mc", q: "Ich habe wenig Zeit. ___ engagiere ich mich im Verein.", opts: ["Trotzdem", "Obwohl", "Weil"], a: 0 },
    { type: "mc", q: "Er ist sehr müde, ___ geht er wählen.", opts: ["trotzdem", "obwohl"], a: 0, why: "The verb follows directly (geht er), so you need trotzdem; obwohl would send the verb to the end." },
    { type: "order", words: ["regnet,", "Obwohl", "es", "viele", "gehen", "Leute", "wählen"], a: "Obwohl es regnet, gehen viele Leute wählen" },
    { type: "mc", q: "___ du den Antrag abgibst, musst du alle Dokumente kopieren.", opts: ["Bevor", "Nachdem", "Seitdem"], a: 0 },
    { type: "mc", q: "Nachdem wir gewählt ___, sind wir ins Café gegangen.", opts: ["hatten", "haben", "sind"], a: 0, why: "nachdem + the earlier action in the past → Plusquamperfekt." },
    { type: "gap", q: "___ ich in Deutschland lebe, interessiere ich mich mehr für Politik. (since)", a: ["Seitdem/Seit"] },
    { type: "gap", q: "Warte bitte, ___ die Ergebnisse da sind. (until)", a: ["bis"] },
    { type: "gap", q: "Je länger ich hier lebe, ___ besser verstehe ich die Gesellschaft.", a: ["desto/umso"] },
    { type: "mc", q: "Je mehr Menschen sich engagieren, ___", opts: ["desto besser ist es für alle.", "desto es ist besser für alle.", "desto ist es besser für alle."], a: 0 },
    { type: "gap", q: "Je ___ man spendet, desto mehr kann die Organisation helfen. (viel)", a: ["mehr"] },
    { type: "order", words: ["früher", "Je", "den", "du", "stellst,", "Antrag", "schneller", "desto", "du", "bekommst", "den", "Pass"], a: "Je früher du den Antrag stellst, desto schneller bekommst du den Pass" }
  ],
  speak: [
    { q: "Gehst du immer wählen? Warum oder warum nicht?", en: "Do you always vote? Why or why not?", accept: ["wähle", "wählen"], model: ["Ja, ich gehe immer wählen, obwohl ich manchmal keine Partei wirklich überzeugend finde."] },
    { q: "Engagierst du dich ehrenamtlich?", en: "Do you do any volunteering?", accept: ["ehrenamtlich", "engagiere", "helfe", "spende", "leider nicht"], model: ["Seitdem mein Sohn in die Schule geht, helfe ich ehrenamtlich im Elternverein."] },
    { q: "Was ist wichtig für eine gute Integration?", en: "What is important for good integration?", accept: ["sprache", "arbeit", "wichtig", "kontakt"], model: ["Je besser man die Sprache spricht, desto leichter findet man Arbeit und Freunde."] },
    { q: "Was machst du, bevor du eine wichtige Entscheidung triffst?", en: "What do you do before you make an important decision?", accept: ["bevor", "informiere", "spreche", "denke"], model: ["Bevor ich eine wichtige Entscheidung treffe, spreche ich mit meiner Familie."] },
    { q: "Welches Recht ist für dich am wichtigsten?", en: "Which right is most important to you?", accept: ["recht", "freiheit", "gleichberechtigung", "wichtigsten"], model: ["Für mich ist die Meinungsfreiheit am wichtigsten, weil es ohne sie keine echte Demokratie gibt."] }
  ],
  shadow: ["Obwohl ich wenig Zeit habe, engagiere ich mich in einem Verein.", "Ich habe wenig Zeit. Trotzdem helfe ich jeden Samstag mit.", "Bevor man den Antrag stellt, sollte man alle Dokumente kopieren.", "Nachdem die Wahl vorbei war, haben wir lange diskutiert.", "Seitdem ich hier lebe, interessiere ich mich mehr für Politik.", "Je besser man die Sprache spricht, desto leichter ist die Integration."]
},
{
  id: 36, level: "B1", title: "Arbeitswelt", en: "Home office, teamwork & giving opinions",
  cando: ["Discuss home office, teamwork and work-life balance", "Give, support and contrast opinions politely", "Use participles as adjectives (die steigenden Preise, die erledigte Aufgabe)", "Say what you have done for you with lassen"],
  vocab: `
das Homeoffice | — | working from home | Ich arbeite zweimal pro Woche im Homeoffice. = I work from home twice a week.
die Videokonferenz | Videokonferenzen | video call, video conference | Die Videokonferenz beginnt um zehn Uhr. = The video call starts at ten.
das Team | Teams | team | Unser Team ist über drei Länder verteilt. = Our team is spread over three countries.
die Teamarbeit | — | teamwork | Gute Teamarbeit braucht klare Absprachen. = Good teamwork needs clear agreements.
der Arbeitsplatz | Arbeitsplätze | workplace; job
die Arbeitszeit | Arbeitszeiten | working hours | Bei uns sind die Arbeitszeiten flexibel. = Our working hours are flexible.
flexibel | | flexible
stressig | | stressful | Kurz vor Ablauf einer Frist wird es immer stressig. = It always gets stressful just before a deadline.
die Work-Life-Balance | — | work-life balance
die Belastung | Belastungen | strain, workload
die Verantwortung | — | responsibility | Sie trägt die Verantwortung für das Projekt. = She is responsible for the project.
die Frist | Fristen | deadline | Die Frist endet am Freitag. = The deadline is on Friday.
sich konzentrieren | | to concentrate | Im Homeoffice kann ich mich besser konzentrieren. = I can concentrate better when working from home.
die Leistung | Leistungen | performance, achievement
die Weiterbildung | Weiterbildungen | further training | Die Firma bietet regelmäßig Weiterbildungen an. = The company regularly offers further training.
die Beförderung | Beförderungen | promotion
die Kündigung | Kündigungen | resignation, dismissal
die Ansicht | Ansichten | view, opinion
der Standpunkt | Standpunkte | point of view
überzeugen | | to convince | Das Argument hat mich überzeugt. = The argument convinced me.
überzeugt | | convinced
zustimmen | | to agree (+ dative) | Da stimme ich dir völlig zu. = I completely agree with you there.
widersprechen | | to contradict, to disagree (+ dative) | Da muss ich dir leider widersprechen. = I'm afraid I have to disagree with you there.
meiner Meinung nach | | in my opinion | Meiner Meinung nach ist Homeoffice effizienter. = In my opinion home office is more efficient.
effizient | | efficient
die Zusammenarbeit | — | cooperation, collaboration | Vielen Dank für die gute Zusammenarbeit! = Thank you for the good cooperation!
die Absprache | Absprachen | agreement, arrangement
die Überstunden | Pl. | overtime | Diese Woche habe ich zehn Überstunden gemacht. = This week I did ten hours of overtime.
der Vorgesetzte | Vorgesetzten | boss, superior | Ich muss das zuerst mit meinem Vorgesetzten besprechen. = I have to discuss that with my boss first.
das Betriebsklima | — | working atmosphere | Bei uns ist das Betriebsklima sehr angenehm. = The working atmosphere at our place is very pleasant.
das Ergebnis | Ergebnisse | result | Das Ergebnis des Projekts hat alle überzeugt. = The result of the project convinced everyone.
das Ziel | Ziele | goal, target
erreichbar | | reachable, available | Im Urlaub bin ich nicht erreichbar. = I'm not reachable on holiday.
`,
  grammar: [
    { t: "Participles as adjectives", html: `
<p>Both participles can stand before a noun and take normal <b>adjective endings</b>.</p>
<table><tr><th></th><th>Form</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>Partizip I</b></td><td>infinitive + <b>d</b></td><td>active, happening now (-ing)</td><td>die steigen<b>d</b>en Preise (prices that are rising)</td></tr>
<tr><td><b>Partizip II</b></td><td>ge-…-t / ge-…-en</td><td>passive or finished</td><td>die erledigt<b>en</b> Aufgaben (tasks that have been done)</td></tr></table>
<p><i>ein wachsen<b>des</b> Team</i> (a growing team) · <i>mit schreien<b>den</b> Kindern</i> (with screaming children)<br><i>ein gut bezahlt<b>er</b> Job</i> (a well-paid job) · <i>die geplant<b>e</b> Besprechung</i> (the planned meeting)</p>
<p class="tip">Quick test: can you say "which is …-ing"? → Partizip I. "which has been …-ed"? → Partizip II.</p>` },
    { t: "lassen: having something done", html: `
<p><b>etwas + infinitive + lassen</b> = you don't do it yourself, someone does it for you.</p>
<table><tr><th>Tense</th><th>Example</th></tr>
<tr><td>Präsens</td><td>Ich <b>lasse</b> mein Fahrrad reparieren.</td></tr>
<tr><td>du / er</td><td>Du <b>lässt</b> … / Sie <b>lässt</b> sich die Haare schneiden.</td></tr>
<tr><td>Perfekt</td><td>Ich <b>habe</b> mein Auto reparieren <b>lassen</b>. (not <s>gelassen</s>)</td></tr>
<tr><td>Modal</td><td>Wir <b>können</b> das Essen ins Büro liefern <b>lassen</b>.</td></tr></table>
<p><b>lassen</b> can also mean "let / allow": <i>Mein Chef lässt mich im Homeoffice arbeiten.</i></p>
<p class="tip">With a second infinitive, the Perfekt has two infinitives at the end: <i>Ich habe den Laptop prüfen lassen.</i> English "I had my laptop checked" uses a past participle – German does not.</p>` },
    { t: "Giving and reacting to opinions", html: `
<table><tr><th>Phrase</th><th>Word order</th></tr>
<tr><td><b>Meiner Meinung nach</b> hat Homeoffice viele Vorteile.</td><td>counts as position 1 → verb next</td></tr>
<tr><td><b>Ich bin der Meinung / der Ansicht, dass</b> Teamarbeit wichtig ist.</td><td>dass → verb at the end</td></tr>
<tr><td><b>Ich finde / denke / glaube, dass</b> …</td><td>dass → verb at the end</td></tr>
<tr><td><b>Einerseits</b> spart man Zeit, <b>andererseits</b> fehlt der Kontakt.</td><td>verb after each word</td></tr></table>
<p>Reacting: <i>Da stimme ich dir zu.</i> · <i>Da hast du recht.</i> · <i>Das sehe ich anders.</i> · <i>Da muss ich dir widersprechen.</i></p>
<p class="tip">Don't say <s>Ich bin einverstanden mit deiner Meinung</s> for "I agree" in a discussion – <i>Da stimme ich dir zu</i> sounds much more natural.</p>` }
  ],
  ex: [
    { type: "gap", q: "Die ___ Preise machen vielen Menschen Sorgen. (steigen)", a: ["steigenden"] },
    { type: "mc", q: "Ich habe die ___ Aufgaben von der Liste gestrichen.", opts: ["erledigten", "erledigenden", "erledigt"], a: 0, why: "The tasks have been done → Partizip II with an adjective ending." },
    { type: "mc", q: "Das ist ein gut ___ Job.", opts: ["bezahlter", "bezahlender", "bezahlt"], a: 0, why: "The job is paid (passive) → Partizip II; ein + masculine nominative → -er." },
    { type: "gap", q: "Mit zwei ___ Kindern ist Homeoffice nicht leicht. (schreien)", a: ["schreienden"] },
    { type: "gap", q: "Ich ___ mein Fahrrad in der Werkstatt reparieren. (lassen)", a: ["lasse"] },
    { type: "mc", q: "Sie hat sich die Haare schneiden ___.", opts: ["lassen", "gelassen", "lässt"], a: 0, why: "With another infinitive the Perfekt uses lassen, not gelassen." },
    { type: "gap", q: "___ du deinen Laptop von der IT prüfen? (lassen)", a: ["Lässt"] },
    { type: "order", words: ["das", "Wir", "Essen", "lassen", "Büro", "ins", "liefern"], a: "Wir lassen das Essen ins Büro liefern" },
    { type: "mc", q: "Meiner Meinung nach ___", opts: ["hat Homeoffice viele Vorteile.", "Homeoffice hat viele Vorteile.", "Homeoffice viele Vorteile hat."], a: 0, why: "Meiner Meinung nach takes position 1, so the verb comes next." },
    { type: "gap", q: "Ich bin der ___, dass Teamarbeit wichtig ist.", a: ["Ansicht/Meinung"] },
    { type: "mc", q: "Da stimme ich ___ zu.", opts: ["dir", "dich", "du"], a: 0, why: "zustimmen takes the dative." },
    { type: "order", words: ["bin", "Ich", "Meinung,", "der", "flexible", "dass", "sinnvoll", "Arbeitszeiten", "sind"], a: "Ich bin der Meinung, dass flexible Arbeitszeiten sinnvoll sind" }
  ],
  speak: [
    { q: "Arbeitest du lieber im Homeoffice oder im Büro?", en: "Do you prefer working from home or in the office?", accept: ["homeoffice", "büro", "lieber"], model: ["Meiner Meinung nach ist eine Mischung ideal: zwei Tage im Homeoffice und drei Tage im Büro."] },
    { q: "Was sind die Vor- und Nachteile von Homeoffice?", en: "What are the pros and cons of working from home?", accept: ["vorteil", "nachteil", "einerseits"], model: ["Einerseits spart man viel Zeit, andererseits fehlt der Kontakt zu den Kollegen."] },
    { q: "Wie ist deine Work-Life-Balance?", en: "How is your work-life balance?", accept: ["balance", "stress", "zeit", "finde", "überstunden"], model: ["Ich finde meine Work-Life-Balance okay, aber in stressigen Wochen mache ich zu viele Überstunden."] },
    { q: "Was lässt du machen, statt es selbst zu tun?", en: "What do you have done for you instead of doing it yourself?", accept: ["lasse"], model: ["Ich lasse mein Auto in der Werkstatt reparieren und lasse manchmal das Essen liefern."] },
    { q: "Bist du der Ansicht, dass man nur vier Tage pro Woche arbeiten sollte?", en: "Do you think people should work only four days a week?", accept: ["ansicht", "meinung", "finde", "glaube", "denke"], model: ["Ja, ich bin der Ansicht, dass eine Vier-Tage-Woche die Leistung sogar verbessern kann."] }
  ],
  shadow: ["Meiner Meinung nach hat Homeoffice viele Vorteile.", "Ich bin der Ansicht, dass flexible Arbeitszeiten wichtig sind.", "Die steigende Belastung im Team macht mir Sorgen.", "Ich habe die erledigten Aufgaben schon an alle geschickt.", "Wir lassen das Mittagessen heute einfach ins Büro liefern.", "Da stimme ich dir zu, aber wir müssen auch an die Kosten denken."]
}
);
