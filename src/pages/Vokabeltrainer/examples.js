const examples = [
  {
    value: 'hello',
    german: 'hallo',
    english: 'hello',
    GERdefinition: 'ein Grußwort',
    ENdefinition: 'an expression of greeting',
    GERexample: 'Hallo, wie geht es dir?',
    ENexample: 'Hello, how are you?',
    ENsimilars: ['hi', 'hey', 'greetings', 'salutations', 'hullo', 'hiya', 'howdy', 'yo', 'sup', 'what\'s up'],
    GERsimilars: ['servus', 'grüß dich', 'guten tag', 'moin', 'hi', 'hey', 'hallochen', 'tagchen', 'was geht', 'wie geht\'s']
  },
  {
    value: 'world',
    german: 'Welt',
    english: 'world',
    GERdefinition: 'die Gesamtheit aller Dinge',
    ENdefinition: 'the whole of all things',
    GERexample: 'Die Welt dreht sich.',
    ENexample: 'The world is turning.',
    ENsimilars: ['planet', 'earth', 'globe', 'universe', 'cosmos', 'existence', 'domain', 'realm', 'sphere', 'orbit'],
    GERsimilars: ['Erde', 'Universum', 'Kosmos', 'Existenz', 'Realität', 'Reich', 'Bereich', 'Bühne', 'Lebensraum', 'Umgebung']
  },
  {
    value: 'cat',
    german: 'Katze',
    english: 'cat',
    GERdefinition: 'ein vierbeiniges Haustier',
    ENdefinition: 'a four-legged pet',
    GERexample: 'Meine Katze schläft auf dem Sofa.',
    ENexample: 'My cat is sleeping on the couch.',
    ENsimilars: ['kitten', 'feline', 'tabby', 'pussy', 'tomcat', 'lion', 'tiger', 'leopard', 'jaguar', 'panther'],
    GERsimilars: ['Kater', 'Felidae', 'Stubentiger', 'Löwe', 'Tiger', 'Leopard', 'Jaguar', 'Panther', 'Gepard', 'Katzenartige']
  },
  {
    value: 'dog',
    german: 'Hund',
    english: 'dog',
    GERdefinition: 'ein Haustier mit vier Beinen',
    ENdefinition: 'a four-legged pet',
    GERexample: 'Mein Hund spielt im Park.',
    ENexample: 'My dog is playing in the park.',
    GERsimilars: ['Wolf', 'Fuchs', 'Kojote', 'Dingo', 'Schakal', 'Husky', 'Alaskan Malamute', 'Akita', 'Boxer', 'Labrador'],
    ENsimilars: ['puppy', 'canine', 'mutt', 'hound', 'pooch', 'fido', 'pup', 'terrier', 'bulldog', 'rottweiler']
  },
  {
    value: 'banana',
    german: 'Banane',
    english: 'banana',
    GERdefinition: 'eine lange gelbe Frucht',
    ENdefinition: 'a long yellow fruit',
    GERexample: 'Ich esse gerne Bananen zum Frühstück.',
    ENexample: 'I like to eat bananas for breakfast.',
    ENsimilars: ['plantain', 'mango', 'papaya', 'pineapple', 'kiwi', 'coconut', 'avocado', 'orange', 'grapefruit', 'lemon'],
    GERsimilars: ['Apfel', 'Pfirsich', 'Mango', 'Papaya', 'Birne', 'Kiwi', 'Trauben', 'Erdbeeren', 'Himbeeren', 'Blaubeeren']
  },
  {
    value: 'car',
    german: 'Auto',
    english: 'car',
    GERdefinition: 'ein motorisiertes Fahrzeug',
    ENdefinition: 'a motorized vehicle',
    GERexample: 'Ich fahre jeden Tag mit dem Auto zur Arbeit.',
    ENexample: 'I drive to work every day in my car.',
    ENsimilars: ['automobile', 'vehicle', 'truck', 'sedan', 'coupe', 'convertible', 'SUV', 'minivan', 'pickup', 'roadster'],
    GERsimilars: ['Fahrzeug', 'Wagen', 'Automobil', 'Kraftfahrzeug', 'Personenkraftwagen', 'PKW', 'Kombi', 'Limousine', 'Sportwagen', 'Cabrio']
  },
  {
    value: 'computer',
    german: 'Computer',
    english: 'computer',
    GERdefinition: 'ein elektronisches Gerät zum Verarbeiten von Daten',
    ENdefinition: 'an electronic device for processing data',
    GERexample: 'Ich arbeite den ganzen Tag am Computer.',
    ENexample: 'I work on the computer all day.',
    ENsimilars: ['laptop', 'desktop', 'machine', 'device', 'terminal', 'mainframe', 'PC', 'workstation', 'server', 'electronic'],
    GERsimilars: ['Rechner', 'Laptop', 'PC', 'Maschine', 'Elektronik', 'Datenverarbeitung', 'Informationstechnologie', 'Netzwerk', 'Server', 'Arbeitsplatz']
  },
  {
    value: 'book',
    german: 'Buch',
    english: 'book',
    GERdefinition: 'ein gebundenes Schriftwerk',
    ENdefinition: 'a bound written work',
    GERexample: 'Ich lese gerne Bücher in meiner Freizeit.',
    ENexample: 'I like to read books in my free time.',
    ENsimilars: ['novel', 'textbook', 'magazine', 'journal', 'paperback', 'hardcover', 'volume', 'manuscript', 'publication', 'manual'],
    GERsimilars: ['Werk', 'Schrift', 'Broschüre', 'Band', 'Text', 'Abhandlung', 'Druckschrift', 'Publikation', 'Kompendium', 'Lektüre']
  },
  {
    value: 'sun',
    german: 'Sonne',
    english: 'sun',
    GERdefinition: 'eine leuchtende Himmelskörper',
    ENdefinition: 'a luminous celestial body',
    GERexample: 'Die Sonne scheint heute sehr hell.',
    ENexample: 'The sun is shining very brightly today.',
    ENsimilars: ['star', 'light', 'radiance', 'shine', 'daystar', 'sunshine', 'glow', 'luminary', 'ball of fire', 'fire'],
    GERsimilars: ['Leuchten', 'Licht', 'Strahlung', 'Schein', 'Himmelslicht', 'Sonnenschein', 'Glühen', 'Leuchtkörper', 'Stern', 'Feuerball']
  },
  {
    value: 'tree',
    german: 'Baum',
    english: 'tree',
    GERdefinition: 'eine mehrjährige Pflanze',
    ENdefinition: 'a perennial plant',
    GERexample: 'Der Baum im Garten hat viele Blätter.',
    ENexample: 'The tree in the garden has many leaves.',
    GERsimilars: ['Wald', 'Forst', 'Strauch', 'Birke', 'Eiche', 'Kiefer', 'Laubbaum', 'Nadelbaum', 'Stamm', 'Zweig'],
    ENsimilars: ['forest', 'wood', 'bush', 'plant', 'branch', 'leaf', 'oak', 'pine', 'maple', 'birch']
  },
  {
    value: 'design',
    german: 'Design',
    english: 'design',
    GERdefinition: 'Die Kunst und Technik der Gestaltung von Objekten, Umgebungen und Erlebnissen.',
    ENdefinition: 'The art and technique of designing objects, environments, and experiences.',
    GERexample: 'Das neue Produkt wurde von einem bekannten Designer entworfen.',
    ENexample: 'The new product was designed by a well-known designer.',
    ENsimilars: ['concept', 'plan', 'layout', 'blueprint', 'pattern', 'model', 'style', 'format', 'scheme', 'structure'],
    GERsimilars: ['Gestaltung', 'Entwurf', 'Planung', 'Formgebung', 'Stil', 'Grafikdesign', 'Webdesign', 'Kommunikationsdesign', 'Produktdesign', 'Innenarchitektur']
  },
  {
    value: 'designer',
    german: 'Designer',
    english: 'designer',
    GERdefinition: 'Eine Person, die sich mit der Gestaltung von Objekten, Umgebungen und Erlebnissen beschäftigt.',
    ENdefinition: 'A person who plans the look or workings of something prior to it being made, by preparing drawings or plans.',
    GERexample: 'Meine Schwester ist eine erfolgreiche Designerin und arbeitet für eine bekannte Modemarke.',
    ENexample: 'My sister is a successful designer working for a well-known fashion brand.',
    ENsimilars: ['architect', 'planner', 'artist', 'stylist', 'engineer', 'creator', 'inventor', 'developer', 'producer', 'craftsman'],
    GERsimilars: ['Grafiker', 'Künstler', 'Gestalter', 'Planer', 'Architekt', 'Ingenieur', 'Entwickler', 'Produzent', 'Handwerker', 'Kreativer']
  },
  {
    value: 'bunny',
    german: 'Hase',
    english: 'bunny',
    GERdefinition: 'Ein kleines Säugetier mit langen Ohren und einem weichen Schwanz.',
    ENdefinition: 'A small mammal with long ears and a short tail.',
    GERexample: 'Die Kinder hatten viel Spaß beim Streicheln der süßen kleinen Hasen.',
    ENexample: 'The kids had a lot of fun petting the cute little bunnies.',
    ENsimilars: ['rabbit', 'hare', 'cottontail', 'lapin', 'coney', 'bun', 'rodent', 'mammal', 'pet', 'burrow'],
    GERsimilars: ['Kaninchen', 'Langohr', 'Fellnase', 'Häschen', 'Pfotenwärmer', 'Mümmler', 'Nager', 'Stummelschwanz', 'Wildtier', 'Hoppel']
  },
  {
    value: 'easter',
    german: 'Ostern',
    english: 'Easter',
    GERdefinition: 'Ein christlicher Feiertag, der die Auferstehung Jesu Christi feiert und am ersten Sonntag nach dem ersten Frühlingsvollmond gefeiert wird.',
    ENdefinition: 'A Christian festival celebrating the resurrection of Jesus Christ, held on the first Sunday after the first full moon after the vernal equinox.',
    GERexample: 'Zu Ostern werden traditionell bunte Eier versteckt und gesucht.',
    ENexample: 'Traditionally, colorful eggs are hidden and searched for during Easter.',
    ENsimilars: ['Resurrection Day', 'Pascha', 'spring festival', 'religious holiday', 'holy day', 'feast day', 'festivity', 'celebration', 'commemoration', 'observance'],
    GERsimilars: ['Auferstehungsfest', 'Passah', 'Fest der Auferstehung', 'Frühlingsfest', 'kirchlicher Feiertag', 'Gedenktag', 'Hochfest', 'Feierlichkeit', 'Osterfeier', 'Karwoche']
  },
  {
    value: 'window',
    german: 'Fenster',
    english: 'window',
    GERdefinition: 'Ein durchsichtiges Material in einer Wand oder Tür, das Licht hereinlässt und den Blick nach draußen ermöglicht.',
    ENdefinition: 'An opening in the wall or roof of a building or vehicle, fitted with glass or other transparent material in a frame to admit light or air and allow people to see out.',
    GERexample: 'Ich habe den ganzen Tag am Fenster gesessen und auf den Schnee gewartet.',
    ENexample: 'I sat by the window all day waiting for the snow to come.',
    ENsimilars: ['pane', 'opening', 'skylight', 'porthole', 'casement', 'transom', 'picture window', 'bay window', 'double-hung window', 'stained glass'],
    GERsimilars: ['Glas', 'Fensterglas', 'Sprossenfenster', 'Doppelfenster', 'Schwingfenster', 'Oberlicht', 'Buntglasfenster', 'Kippfenster', 'Fensterflügel', 'Vorfenster']
  },
  {
    value: 'well',
    german: 'gut',
    english: 'well',
    GERdefinition: 'in guter Verfassung sein',
    ENdefinition: 'to be in good physical or mental condition',
    GERexample: 'Ich fühle mich heute gut.',
    ENexample: 'I feel well today.',
    GERsimilars: ['gesund', 'fit', 'wohl', 'befriedigend', 'vorteilhaft', 'tadellos', 'einwandfrei', 'ordentlich', 'akzeptabel', 'zufriedenstellend'],
    ENsimilars: ['healthy', 'fit', 'fine', 'satisfactory', 'advantageous', 'flawless', 'perfect', 'proper', 'acceptable', 'adequate']
  },
  {
    value: 'door',
    german: 'Tür',
    english: 'door',
    GERdefinition: 'Ein bewegliches Objekt, das den Eingang zu einem Raum oder Gebäude ermöglicht und öffnen und schließen kann.',
    ENdefinition: 'A movable barrier used to open and close the entrance to a building, room, or vehicle.',
    GERexample: 'Ich stand vor der Tür und wartete auf eine Antwort.',
    ENexample: 'I stood in front of the door waiting for a response.',
    GERsimilars: ['Eingang', 'Portal', 'Durchgang', 'Ausgang', 'Pforte', 'Haupteingang', 'Hintertür', 'Klappe', 'Schleuse', 'Tor'],
    ENsimilars: ['gateway', 'entrance', 'portal', 'opening', 'access', 'exit', 'barrier', 'turnstile', 'hatch', 'trapdoor']
  },
  {
    value: 'whale',
    german: 'Wal',
    english: 'whale',
    GERdefinition: 'ein großes Meerestier',
    ENdefinition: 'a large marine mammal',
    GERexample: 'Der Blauwal ist das größte Tier auf der Erde.',
    ENexample: 'The blue whale is the largest animal on Earth.',
    ENsimilars: ['dolphin', 'orca', 'porpoise', 'sperm whale', 'humpback whale', 'blue whale', 'gray whale', 'beluga whale', 'narwhal', 'bowhead whale'],
    GERsimilars: ['Delfin', 'Orca', 'Schweinswal', 'Pottwal', 'Buckelwal', 'Blauwal', 'Grauwal', 'Belugawal', 'Narwal', 'Grönlandwal']
  },
  {
    value: 'seed',
    german: 'Samen',
    english: 'seed',
    GERdefinition: 'die Fortpflanzungsstruktur von Pflanzen',
    ENdefinition: 'the reproductive structure of plants',
    GERexample: 'Ich pflanze Samen in meinen Garten.',
    ENexample: 'I am planting seeds in my garden.',
    ENsimilars: ['germ', 'spore', 'grain', 'kernel', 'pip', 'stone', 'nut', 'ovule', 'bud', 'sprout'],
    GERsimilars: ['Keim', 'Korn', 'Saatgut', 'Pollen', 'Spore', 'Frucht', 'Samenkorn', 'Zellkern', 'Eizelle', 'Knospe']
  },
  {
    value: 'head',
    german: 'Kopf',
    english: 'head',
    GERdefinition: 'der obere Teil des Körpers, auf dem das Gesicht und die Haare sitzen',
    ENdefinition: 'the upper part of the body on which the face and hair sit',
    GERexample: 'Ich habe Kopfschmerzen.',
    ENexample: 'I have a headache.',
    ENsimilars: ['skull', 'cranium', 'noggin', 'bean', 'pate', 'poll', 'dome', 'crown', 'top', 'scalp'],
    GERsimilars: ['Hirn', 'Gehirn', 'Schädel', 'Oberstübchen', 'Denkzentrale', 'Denkapparat', 'Gedächtnis', 'Intellekt', 'Verstand', 'Kopfkino']
  },
  {
    value: 'sad',
    german: 'traurig',
    english: 'sad',
    GERdefinition: 'niedergedrückt oder unglücklich sein',
    ENdefinition: 'feeling unhappy or down',
    GERexample: 'Ich fühle mich heute sehr traurig.',
    ENexample: 'I am feeling very sad today.',
    ENsimilars: ['unhappy', 'miserable', 'depressed', 'gloomy', 'downhearted', 'blue', 'melancholy', 'despondent', 'disheartened', 'crestfallen'],
    GERsimilars: ['betrübt', 'bedrückt', 'melancholisch', 'deprimiert', 'niedergeschlagen', 'trauernd', 'untröstlich', 'bekümmert', 'gedrückt', 'schmerzerfüllt']
  },
  {
    value: 'zoo',
    german: 'Zoo',
    english: 'zoo',
    GERdefinition: 'ein Ort, an dem lebende Tiere in einer Umgebung ähnlich wie ihrer natürlichen Umgebung gezeigt werden',
    ENdefinition: 'a place where living animals are exhibited in an environment similar to their natural habitat',
    GERexample: 'Ich gehe am Wochenende in den Zoo.',
    ENexample: 'I am going to the zoo this weekend.',
    ENsimilars: ['wildlife park', 'animal park', 'safari park', 'aquarium', 'aviary', 'menagerie', 'terrarium', 'wild park', 'zoological garden', 'conservatory'],
    GERsimilars: ['Tierpark', 'Safari-Park', 'Wildpark', 'Aquarium', 'Vivarium', 'Tiergarten', 'Wildgehege', 'Tierwelt', 'Tierreservat', 'Naturschutzgebiet']
  },
  {
    value: 'computer scientist',
    german: 'Informatiker',
    english: 'computer scientist',
    GERdefinition: 'Eine Person, die sich mit der Erforschung und Entwicklung von Computersystemen und -anwendungen befasst.',
    ENdefinition: 'A person who studies or works with computers, especially one who designs or writes programs.',
    GERexample: 'Ich bin ein Informatiker und arbeite an einem neuen Softwareprojekt.',
    ENexample: 'I am a computer scientist working on a new software project.',
    ENsimilars: ['software engineer', 'programmer', 'developer', 'IT specialist', 'computer engineer', 'data scientist', 'web developer', 'systems analyst', 'network administrator', 'cybersecurity analyst'],
    GERsimilars: ['Softwareentwickler', 'Programmierer', 'IT-Spezialist', 'Datenwissenschaftler', 'Webentwickler', 'Systemanalytiker', 'Netzwerkadministrator', 'Cybersicherheitsanalytiker']
  },
  {
    value: 'television',
    german: 'Fernseher',
    english: 'television',
    GERdefinition: 'ein Gerät zum Empfang von Fernsehsendungen',
    ENdefinition: 'an electronic device used for viewing television broadcasts',
    GERexample: 'Ich schaue gerne fern auf meinem Fernseher.',
    ENexample: 'I like to watch TV on my television.',
    ENsimilars: ['monitor', 'screen', 'display', 'projector', 'cable box', 'smart TV', 'streaming device', 'DVD player'],
    GERsimilars: ['Computermonitor', 'Beamer', 'Tablet', 'Smartphone', 'Laptop', 'Radiogerät', 'Satellitenreceiver']
  },
  {
    value: 'chair',
    german: 'Stuhl',
    english: 'chair',
    GERdefinition: 'ein Möbelstück zum Sitzen',
    ENdefinition: 'a piece of furniture for sitting',
    GERexample: 'Ich setze mich auf den Stuhl, um am Schreibtisch zu arbeiten.',
    ENexample: 'I sit on the chair to work at my desk.',
    ENsimilars: ['sofa', 'bench', 'stool', 'ottoman', 'recliner', 'rocking chair', 'office chair', 'bean bag chair'],
    GERsimilars: ['Sofa', 'Bank', 'Hocker', 'Sessel', 'Schaukelstuhl', 'Bürostuhl', 'Hängesitz', 'Liegestuhl']
  },
  {
    value: 'pencil',
    german: 'Bleistift',
    english: 'pencil',
    GERdefinition: 'ein Schreibgerät zum Zeichnen und Schreiben',
    ENdefinition: 'a writing and drawing instrument',
    GERexample: 'Ich benutze meinen Bleistift, um meine Hausaufgaben zu erledigen.',
    ENexample: 'I use my pencil to do my homework.',
    ENsimilars: ['pen', 'marker', 'crayon', 'chalk', 'charcoal', 'highlighter', 'stylus', 'sharpie'],
    GERsimilars: ['Kugelschreiber', 'Filzstift', 'Tintenroller', 'Füller', 'Radiergummi', 'Textmarker', 'Kreide', 'Kohlestift']
  },
  {
    value: 'shoe',
    german: 'Schuh',
    english: 'shoe',
    GERdefinition: 'ein Kleidungsstück, das den Fuß bedeckt und schützt',
    ENdefinition: 'an item of clothing that covers and protects the foot',
    GERexample: 'Ich ziehe meine Schuhe an, bevor ich das Haus verlasse.',
    ENexample: 'I put on my shoes before leaving the house.',
    ENsimilars: ['sneaker', 'boot', 'sandal', 'slipper', 'loafer', 'oxford', 'flip-flop', 'wedge'],
    GERsimilars: ['Turnschuhe', 'Stiefel', 'Sandalen', 'Hausschuhe', 'Mokassins', 'Halbschuhe', 'Zehentrenner', 'Keilsandaletten']
  },
  {
    value: 'snake',
    german: 'Schlange',
    english: 'snake',
    GERdefinition: 'ein langes, schuppiges, beinloses Reptil',
    ENdefinition: 'a long, scaly, legless reptile',
    GERexample: 'Ich habe Angst vor Schlangen.',
    ENexample: 'I am afraid of snakes.',
    ENsimilars: ['lizard', 'gecko', 'iguana', 'crocodile', 'alligator', 'turtle', 'tortoise', 'worm', 'slug'],
    GERsimilars: ['Echse', 'Gecko', 'Krokodil', 'Schildkröte', 'Wurm', 'Schnecke', 'Kröte', 'Frosch']
  },
  {
    value: 'dictionary',
    german: 'Wörterbuch',
    english: 'dictionary',
    GERdefinition: 'ein Nachschlagewerk mit alphabetisch geordneten Wörtern und ihren Bedeutungen',
    ENdefinition: 'a reference work with words listed alphabetically and their meanings',
    GERexample: 'Ich benutze mein Wörterbuch, um neue Wörter zu lernen.',
    ENexample: 'I use my dictionary to learn new words.',
    ENsimilars: ['thesaurus', 'encyclopedia', 'glossary', 'lexicon', 'atlas', 'almanac', 'directory', 'index'],
    GERsimilars: ['Thesaurus', 'Enzyklopädie', 'Glossar', 'Lexikon', 'Atlas', 'Verzeichnis', 'Index']
  },
  {
    value: 'priest',
    german: 'Priester',
    english: 'priest',
    GERdefinition: 'ein Geistlicher, der in einer religiösen Gemeinschaft tätig ist',
    ENdefinition: 'a religious leader who serves in a religious community',
    GERexample: 'Der Priester hat die Messe geleitet.',
    ENexample: 'The priest led the Mass.',
    ENsimilars: ['minister', 'pastor', 'clergyman', 'preacher', 'rabbi', 'imam', 'monk', 'nun'],
    GERsimilars: ['Pfarrer', 'Geistlicher', 'Theologe', 'Rabbiner', 'Imam', 'Mönch', 'Nonne']
  },
  {
    value: 'wall',
    german: 'Wand',
    english: 'wall',
    GERdefinition: 'eine vertikale Struktur aus Stein oder Ziegeln, die dazu dient, einen Raum zu umgeben oder zu teilen',
    ENdefinition: 'a vertical structure made of stone or bricks that serves to enclose or divide a space',
    GERexample: 'Die Mauer um das Schloss war sehr hoch.',
    ENexample: 'The wall around the castle was very tall.',
    ENsimilars: ['fence', 'barrier', 'partition', 'screen', 'divider', 'hedge', 'rampart', 'embankment'],
    GERsimilars: ['Zaun', 'Barriere', 'Trennwand', 'Bildschirm', 'Teiler', 'Hecke', 'Wall', 'Böschung']
  },
  {
    value: 'rhombus',
    german: 'Raute',
    english: 'rhombus',
    GERdefinition: 'ein Parallelogramm mit vier gleich langen Seiten',
    ENdefinition: 'a parallelogram with four equal sides',
    GERexample: 'Ein Würfel besteht aus sechs Quadraten und zwölf Rauten.',
    ENexample: 'A cube is made up of six squares and twelve rhombuses.',
    ENsimilars: ['parallelogram', 'diamond', 'kite', 'trapezium', 'quadrilateral'],
    GERsimilars: ['Parallelogramm', 'Diamant', 'Drachen', 'Trapez', 'Viereck']
  },
  {
    value: 'queue',
    german: 'Warteschlange',
    english: 'queue',
    GERdefinition: 'eine Reihe von Personen oder Dingen, die darauf warten, bedient zu werden',
    ENdefinition: 'a line of people or things waiting to be served',
    GERexample: 'Ich musste eine Stunde in der Schlange stehen, um meine Fahrkarte zu kaufen.',
    ENexample: 'I had to wait in line for an hour to buy my ticket.',
    ENsimilars: ['line', 'row', 'queueing', 'waiting', 'standby'],
    GERsimilars: ['Reihe', 'Schlange stehen', 'Warten', 'Warteschlange', 'Anstehen']
  },
  {
    value: 'quiet',
    german: 'ruhig',
    english: 'quiet',
    GERdefinition: 'ohne Lärm oder Störung',
    ENdefinition: 'without noise or disturbance',
    GERexample: 'Bitte sei leise, die anderen schlafen schon.',
    ENexample: 'Please be quiet, the others are already sleeping.',
    ENsimilars: ['silent', 'calm', 'peaceful', 'serene', 'tranquil'],
    GERsimilars: ['still', 'friedlich', 'gelassen', 'entspannt', 'ruhig und gelassen']
  },
  {
    value: 'quickscope',
    german: 'Schnellzielen',
    english: 'quickscope',
    GERdefinition: 'eine Technik beim Videospiel, bei der ein Spieler schnell mit einem Scharfschützengewehr zielt und schießt, um einen Gegner zu besiegen',
    ENdefinition: 'a technique in video games where a player quickly aims and shoots with a sniper rifle to defeat an opponent',
    GERexample: 'Ich habe den Feind mit einem perfekten Schnellzielen besiegt.',
    ENexample: 'I defeated the enemy with a perfect quickscope.',
    ENsimilars: ['headshot', 'sniper', 'first-person shooter', 'gaming'],
    GERsimilars: ['Scharfschütze', 'Ego-Shooter', 'Computerspiel', 'Gaming']
  },
  {
    value: 'Aphex Twin',
    german: 'Aphex Twin',
    english: 'Aphex Twin',
    GERdefinition: 'ein englischer Musiker und Produzent elektronischer Musik, bekannt für seine experimentelle Musik und seine Verwendung von Pseudonymen',
    ENdefinition: 'an English musician and producer of electronic music, known for his experimental music and use of pseudonyms',
    GERexample: 'Ich liebe Aphex Twins Musik, sie ist so anders als alles andere da draußen.',
    ENexample: 'I love Aphex Twins music, it is so different from anything else out there.',
    ENsimilars: ['ambient music', 'IDM', 'electronic dance music', 'experimental music'],
    GERsimilars: ['Ambient-Musik', 'IDM', 'Elektronische Tanzmusik', 'Experimentelle Musik']
  },
  {
    value: 'Death Grips',
    german: 'Death Grips',
    english: 'Death Grips',
    GERdefinition: 'eine experimentelle Hip-Hop-Band aus Kalifornien, bekannt für ihre aggressive Musik und ihre unberechenbaren Auftritte',
    ENdefinition: 'an experimental hip-hop band from California, known for their aggressive music and unpredictable performances',
    GERexample: 'Ich habe Death Grips einmal live gesehen, und es war eine der intensivsten Konzerterfahrungen meines Lebens.',
    ENexample: 'I saw Death Grips live once, and it was one of the most intense concert experiences of my life.',
    ENsimilars: ['industrial music', 'noise rap', 'punk rap', 'experimental hip-hop'],
    GERsimilars: ['Industriemusik', 'Noiserap', 'Punk-Rap', 'Experimenteller Hip-Hop']
  },
  {
    value: 'Sigma',
    german: 'Sigma',
    english: 'Sigma',
    GERdefinition: 'ein griechischer Buchstabe und Symbol in der Mathematik, der oft verwendet wird, um Summen und Reihen auszudrücken',
    ENdefinition: 'a Greek letter and symbol in mathematics that is often used to express sums and series',
    GERexample: 'Die Summe der ersten zehn natürlichen Zahlen kann mit dem Sigma-Symbol ausgedrückt werden.',
    ENexample: 'The sum of the first ten natural numbers can be expressed using the Sigma symbol.',
    ENsimilars: ['integral', 'calculus', 'mathematical notation', 'equation'],
    GERsimilars: ['Integral', 'Analysis', 'Mathematische Notation', 'Gleichung']
  },
  {
    value: 'swabian',
    german: 'Schwäbisch',
    english: 'Swabian',
    GERdefinition: 'eine Dialektgruppe des Deutschen, die in Schwaben und Teilen von Baden-Württemberg gesprochen wird',
    ENdefinition: 'a dialect group of the German language spoken in Swabia and parts of Baden-Württemberg',
    GERexample: 'Ich liebe den schwäbischen Dialekt, es ist so charmant und einzigartig.',
    ENexample: 'I love the Swabian dialect, it is so charming and unique.',
    ENsimilars: ['dialect', 'language', 'regional language', 'German'],
    GERsimilars: ['Dialekt', 'Sprache', 'Regionalsprache', 'Deutsch']
  },
  {
    value: 'sweat',
    german: 'Schweiß',
    english: 'sweat',
    GERdefinition: 'eine Flüssigkeit, die von den Schweißdrüsen der Haut abgesondert wird und dazu dient, den Körper zu kühlen und Giftstoffe auszuscheiden',
    ENdefinition: 'a fluid secreted by the sweat glands of the skin, which serves to cool the body and excrete toxins',
    GERexample: 'Ich habe nach dem Training viel Schweiß auf meinem T-Shirt.',
    ENexample: 'I have a lot of sweat on my shirt after working out.',
    ENsimilars: ['perspiration', 'sweat glands', 'body odor', 'dehydration'],
    GERsimilars: ['Schwitzen', 'Schweißdrüsen', 'Körpergeruch', 'Dehydrierung']
  }
  // add more words here...
];

module.exports = examples