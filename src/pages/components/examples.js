const examples = [
    {
      value: 'VERYLONGEXAMPLEFORTESTINGPURPOSES',
      german: 'SEHRLANGESBEISPIELFUERTESTGRUENDE',
      english: 'VERYLONGEXAMPLEFORTESTINGPURPOSES',
      GERdefinition: 'Dings damit teste ich lol das ist meine definition',
      ENdefinition: 'hehe i am testing the definition, is it working????',
      GERexample: 'HALLO JÜRGEN VERYLONGEXAMPLESSCHMIDT',
      ENexample: 'Hello JÜRGEN LONGEXAMPLEGUYSHIREHAMBROCKTOM'
    },
    {
      value: 'hello',
      german: 'hallo',
      english: 'hello',
      GERdefinition: 'ein Grußwort',
      ENdefinition: 'an expression of greeting',
      GERexample: 'Hallo, wie geht es dir?',
      ENexample: 'Hello, how are you?'
    },
    {
      value: 'world',
      german: 'Welt',
      english: 'world',
      GERdefinition: 'die Gesamtheit aller Dinge',
      ENdefinition: 'the whole of all things',
      GERexample: 'Die Welt dreht sich.',
      ENexample: 'The world is turning.'
    },
    {
      value: 'cat',
      german: 'Katze',
      english: 'cat',
      GERdefinition: 'ein vierbeiniges Haustier',
      ENdefinition: 'a four-legged pet',
      GERexample: 'Meine Katze schläft auf dem Sofa.',
      ENexample: 'My cat is sleeping on the couch.'
    },
    {
      value: 'dog',
      german: 'Hund',
      english: 'dog',
      GERdefinition: 'ein Haustier mit vier Beinen',
      ENdefinition: 'a four-legged pet',
      GERexample: 'Mein Hund spielt im Park.',
      ENexample: 'My dog is playing in the park.'
    },
    {
      value: 'banana',
      german: 'Banane',
      english: 'banana',
      GERdefinition: 'eine lange gelbe Frucht',
      ENdefinition: 'a long yellow fruit',
      GERexample: 'Ich esse gerne Bananen zum Frühstück.',
      ENexample: 'I like to eat bananas for breakfast.'
    },
    {
      value: 'car',
      german: 'Auto',
      english: 'car',
      GERdefinition: 'ein motorisiertes Fahrzeug',
      ENdefinition: 'a motorized vehicle',
      GERexample: 'Ich fahre jeden Tag mit dem Auto zur Arbeit.',
      ENexample: 'I drive to work every day in my car.'
    },
    {
      value: 'computer',
      german: 'Computer',
      english: 'computer',
      GERdefinition: 'ein elektronisches Gerät zum Verarbeiten von Daten',
      ENdefinition: 'an electronic device for processing data',
      GERexample: 'Ich arbeite den ganzen Tag am Computer.',
      ENexample: 'I work on the computer all day.'
    },
    {
      value: 'book',
      german: 'Buch',
      english: 'book',
      GERdefinition: 'ein gebundenes Schriftwerk',
      ENdefinition: 'a bound written work',
      GERexample: 'Ich lese gerne Bücher in meiner Freizeit.',
      ENexample: 'I like to read books in my free time.'
    },
    {
      value: 'sun',
      german: 'Sonne',
      english: 'sun',
      GERdefinition: 'eine leuchtende Himmelskörper',
      ENdefinition: 'a luminous celestial body',
      GERexample: 'Die Sonne scheint heute sehr hell.',
      ENexample: 'The sun is shining very brightly today.'
    },
    {
      value: 'tree',
      german: 'Baum',
      english: 'tree',
      GERdefinition: 'eine mehrjährige Pflanze',
      ENdefinition: 'a perennial plant',
      GERexample: 'Der Baum im Garten hat viele Blätter.',
      ENexample: 'The tree in the garden has many leaves.'
    },
    {
      value: 'design',
      german: 'Design',
      english: 'design',
      GERdefinition: 'Die Kunst und Technik der Gestaltung von Objekten, Umgebungen und Erlebnissen.',
      ENdefinition: 'The art and technique of designing objects, environments, and experiences.',
      GERexample: 'Das neue Produkt wurde von einem bekannten Designer entworfen.',
      ENexample: 'The new product was designed by a well-known designer.'
    },
    {
      value: 'designer',
      german: 'Designer',
      english: 'designer',
      GERdefinition: 'Eine Person, die sich mit der Gestaltung von Objekten, Umgebungen und Erlebnissen beschäftigt.',
      ENdefinition: 'A person who plans the look or workings of something prior to it being made, by preparing drawings or plans.',
      GERexample: 'Meine Schwester ist eine erfolgreiche Designerin und arbeitet für eine bekannte Modemarke.',
      ENexample: 'My sister is a successful designer working for a well-known fashion brand.'
    },
    {
      value: 'bunny',
      german: 'Hase',
      english: 'bunny',
      GERdefinition: 'Ein kleines Säugetier mit langen Ohren und einem weichen Schwanz.',
      ENdefinition: 'A small mammal with long ears and a short tail.',
      GERexample: 'Die Kinder hatten viel Spaß beim Streicheln der süßen kleinen Hasen.',
      ENexample: 'The kids had a lot of fun petting the cute little bunnies.'
    },
    {
      value: 'easter',
      german: 'Ostern',
      english: 'Easter',
      GERdefinition: 'Ein christlicher Feiertag, der die Auferstehung Jesu Christi feiert und am ersten Sonntag nach dem ersten Frühlingsvollmond gefeiert wird.',
      ENdefinition: 'A Christian festival celebrating the resurrection of Jesus Christ, held on the first Sunday after the first full moon after the vernal equinox.',
      GERexample: 'Zu Ostern werden traditionell bunte Eier versteckt und gesucht.',
      ENexample: 'Traditionally, colorful eggs are hidden and searched for during Easter.'
    },
    {
      value: 'window',
      german: 'Fenster',
      english: 'window',
      GERdefinition: 'Ein durchsichtiges Material in einer Wand oder Tür, das Licht hereinlässt und den Blick nach draußen ermöglicht.',
      ENdefinition: 'An opening in the wall or roof of a building or vehicle, fitted with glass or other transparent material in a frame to admit light or air and allow people to see out.',
      GERexample: 'Ich habe den ganzen Tag am Fenster gesessen und auf den Schnee gewartet.',
      ENexample: 'I sat by the window all day waiting for the snow to come.'
    },
    {
      value: 'well',
      german: 'gut',
      english: 'well',
      GERdefinition: 'in guter Verfassung sein',
      ENdefinition: 'to be in good physical or mental condition',
      GERexample: 'Ich fühle mich heute gut.',
      ENexample: 'I feel well today.'
    },
    {
      value: 'whale',
      german: 'Wal',
      english: 'whale',
      GERdefinition: 'ein großes Meerestier',
      ENdefinition: 'a large marine mammal',
      GERexample: 'Der Blauwal ist das größte Tier auf der Erde.',
      ENexample: 'The blue whale is the largest animal on Earth.'
    },
    {
      value: 'seed',
      german: 'Samen',
      english: 'seed',
      GERdefinition: 'die Fortpflanzungsstruktur von Pflanzen',
      ENdefinition: 'the reproductive structure of plants',
      GERexample: 'Ich pflanze Samen in meinen Garten.',
      ENexample: 'I am planting seeds in my garden.'
    },
    {
      value: 'head',
      german: 'Kopf',
      english: 'head',
      GERdefinition: 'der obere Teil des Körpers, auf dem das Gesicht und die Haare sitzen',
      ENdefinition: 'the upper part of the body on which the face and hair sit',
      GERexample: 'Ich habe Kopfschmerzen.',
      ENexample: 'I have a headache.'
    },
    {
      value: 'sad',
      german: 'traurig',
      english: 'sad',
      GERdefinition: 'niedergedrückt oder unglücklich sein',
      ENdefinition: 'feeling unhappy or down',
      GERexample: 'Ich fühle mich heute sehr traurig.',
      ENexample: 'I am feeling very sad today.'
    },
    {
      value: 'zoo',
      german: 'Zoo',
      english: 'zoo',
      GERdefinition: 'ein Ort, an dem lebende Tiere in einer Umgebung ähnlich wie ihrer natürlichen Umgebung gezeigt werden',
      ENdefinition: 'a place where living animals are exhibited in an environment similar to their natural habitat',
      GERexample: 'Ich gehe am Wochenende in den Zoo.',
      ENexample: 'I am going to the zoo this weekend.'
    },
    {
      value: 'computer scientist',
      german: 'Informatiker',
      english: 'computer scientist',
      GERdefinition: 'Eine Person, die sich mit der Erforschung und Entwicklung von Computersystemen und -anwendungen befasst.',
      ENdefinition: 'A person who studies or works with computers, especially one who designs or writes programs.',
      GERexample: 'Ich bin ein Informatiker und arbeite an einem neuen Softwareprojekt.',
      ENexample: 'I am a computer scientist working on a new software project.'
    },
    // add more words here...
  ];

  module.exports = examples