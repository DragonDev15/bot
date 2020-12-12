/* eslint-disable max-len */
const Discord = require('discord.js');
const hammondresponses = [
  'And I like pygmy goats, because they\'re just lovely, and ducks.',
  'At home I drive an old Land Rover.',
  'I like to think that my arrogance, impetuosity, impatience, selfishness and greed are the qualities that make me the lovable chap I am.',
  'Failing my driving test first time; that was a disappointment on a geological scale.',
  'With the case of running, it really is a case of get out, set yourself a distance, run it, and then do it again the next day. It\'s tremendously simple.',
  'Now, personally, I like a car with some sort of character.',
  'If I can be cruel; I\'m not a big fan of the Audi R8, actually.',
  'I think a basic level of fitness can help the body cope with all manner of incidents.',
  'The easiest and simplest thing that any one can do to make their car safer, more gas efficient, whatever - check the tire pressure.',
  'I run a lot. I have this five-mile run that I try and do a few times a week. If I do more, I get shin splints and it drives me mad, so I have to balance it.',
  'Forty is brilliant and I love it. I\'m happier now than when I was 20.',
  'For somebody who has injured their brain, every single thing they say and think will be the subject of their own questioning.',
  'I\'m not reckless. I was never reckless.',
  'I would love to act. I probably won\'t make it to Hollywood at 42 years of age, but I\'d love to act.',
  'I don\'t particularly want to smear myself into a hillside.',
  'My grandfather on one side was trained as a cabinetmaker but eventually worked as a coachbuilder and then built cars. I inherited from him a love of cars, but with no technical ability whatsoever, sadly!',
  'I\'m a presenter.',
  'My first car was a 1976 Toyota Corolla Liftback in red, like the one in \'The Blues Brothers.\' I painted a Union Jack on the roof. I was absolutely in love with it until I destroyed it, which broke my heart!',
  'I mostly drive around in a Fiat 500 TwinAir, and that\'s a pretty small car!',
  'It\'s not just the kid who\'s spent every penny from his job to upgrade his car to tell the world he cares about sports cars, it\'s also the person driving around in a fuel-conscious hybrid electric car, because it\'s more a message to the world than an effective means of saving fuel, to be quite honest.',
  'I had post-traumatic amnesia, five-second memory, it happens as a result of brain injury.',
  'I damaged all the complicated bits of the brain to do with processing and emotional control. I was prey to every single emotion that swept over me and I couldn\'t deal with it. I had to re-learn things from scratch.',
  'No action hero is more closely associated with cars than James Bond.',
  'I\'ve been in a car three or four times when it filled with water and it\'s not a comfortable feeling.',
];
const clarksonresponses = [
  'Speed has never killed anyone. Suddenly becoming stationary, that\'s what gets you.',
  'How hard can it be?',
  'No, no, no. There\'s no such thing as cheap and cheerful. It\'s cheap and nasty & expensive and cheerful.',
  'Boredom forces you to ring people you haven’t seen for eighteen years and halfway through the conversation you remember why you left it so long. Boredom means you start to read not only mail-order catalogues but also the advertising inserts that fall on the floor. Boredom gives you half a mind to get a gun and go berserk in the local shopping centre, and you know where this is going. Eventually, boredom means you will take up golf.',
  'If you are clinically insane, by which I mean you wake up in the morning, and you think you are an onion, this is your car (About the BMW X3)',
  'These people go on to tell us that mobile phones will cook our children’s ears, that long-haul flights will fill our legs with thrombosis and that meat is murder. They want an end to all deaths – and it doesn’t stop there. They don’t even see why anyone should have to suffer from a spot of light bruising. Every week, as we filmed my television chat show, food would be spilt on the floor, and every week the recording would have to be stopped so it could be swept away. ‘What would happen,’ said the man from health and safety, ‘if a cameraman were to slip over?’ ‘Well,’ I would reply, ‘he’d probably have to stand up again.',
  'Racing cars which have been converted for road use never really work. It\'s like making a hard core adult film, and then editing it so that it can be shown in British hotels. You\'d just end up with a sort of half hour close up of some bloke\'s sweaty face.',
  'She can take a year to read something, whereas I like a book that becomes more important in my life that life itself. When I was in the middle of \'Red Storm Rising\' by Tom Clancy - which was not selected for the Man Booker shortlist - you could have taken my liver out and fed it to the dog. And I wouldn\'t have noticed.',
  'Hollywood movies are designed for 15-year-old youths from North Dakota who, intellectually speaking, are on equal terms with a British zoo animal.',
  '[A Bugatti Veyron is] quite the most stunning piece of automotive engineering ever created....At a stroke then, the Veyron has rendered everything I’ve ever said about any other car obsolete. It’s rewritten the rule book, moved the goalposts and in the process, given Mother Nature a bloody nose.',
  'Why is the forecast so bland? Why instead of \'stormy\' don\'t they just say the sea\'s \'a frothing maelstrom of terror and hopelessness\'?',
  'I wore a groove in the kitchen floor with endless trips to the fridge, hoping against hope that I had somehow missed a plateful of cold sausages on the previous 4,000 excursions. Then, for no obvious reason, I decided to buy a footstool.',
  'I took ten days off and by 11 o’clock on the first morning I had drunk fourteen cups of coffee, read all the newspapers and the Guardian and then… and then what? By lunchtime I was so bored that I decided to hang a few pictures. So I found a hammer, and later a man came to replaster the bits of wall I had demolished. Then I tried to fix the electric gates, which work only when there’s an omega in the month. So I went down the drive with a spanner, and later another man came to put them back together again. I was just about to start on the Aga, which had broken down on Christmas Eve, as they do, when my wife took me on one side by my earlobe and explained that builders do not, on the whole, spend their spare time writing, so writers should not build on their days off. It’s expensive and it can be dangerous, she said.',
  'We are going to have to stop penalising people for making that most human of gestures- mistake',
  'Lego, however, is always opened and then left lying around so adults have something to tread on when they are prowling around around the house at two in the morning, in bare feet, looking for the source of a noise.',
  'In the olden days it was easy to make a television work.You plugged an aerial cable into the back, then bashed the top with your fist until, eventually, Hughie Green stopped jumping up and down.',
  'Do they think that, if left to our own devices, we’d all park on zebra crossings for a year? If they do, it means they don’t trust us. And if they don’t trust us, then the relationship has broken down and it’s time for some civil unrest.',
  'Even NASA’s most respected engineers have admitted to me, in private, that designing and building a supersonic airliner was a greater technological challenge than putting a man on the moon.',
  'I came up with the best pastime in the history of man. What you do is find an aerosol tin of spray adhesive, such as you would use to stick posters to a wall. You then lie in wait and when a wasp flies by, you leap out and give it a squirt. Bingo. One minute it’s flying; the next it’s tumbling silently out of the sky with a confused look on its stupid little face.',
  'Maybe it’s an attention-span thing. Music is now the backdrop to our lives rather than an event in itself. We put on a CD while we’re doing something else. I can’t remember the last time I put on an album and listened to it in a chair with my eyes closed.',
  '(on iPhone) the battery is fine. It lasts for four days. Though this might have something to do with the fact that I\'m a man, and therefore only think to use a phone when I\'m on a cliff, clinging to a branch, in a howling gale. And only then as a last resort.',
  'Let\'s be perfectly clear, shall we. The fox is not a little orange puppy dog with doe eyes and a waggly tail. It\'s a disease-ridden wolf with the morals of a psychopath and the teeth of a great white shark.',
  'There are many ways to tell if someone is a bit thick. You can sit them in a room and ask them to push various bits of plastic into a wooden box. Or you can ask them to describe a cloud. Or you can carefully measure the distance between their eyes, the height of their forehead or the length of their arm.',
  'As I’ve said before, I never understand why people ski down a slope to a bar and then go on a lift so they can ski down the same slope again. That’s like walking to the pub on a Sunday, then going home and walking to the pub again. Madness.',
  'HAMOOOOOOOOND',
  'Well now look. The human being, and the human male in particular, is programmed to take risks. Had our ancestors spent their days sitting around in caves, not daring to go outside, we’d still be there now. Sure, we’re more civilised these days, what with our microwave ovens and our jet liners, but we’re still cavemen at heart. We still crave the rush of adrenaline, the endorphin highs and the buzz of a dopamine hit. And the only way we can unlock this medicine chest is by taking a risk. Telling us that speed kills and asking us to slow down is a bit like asking us to ignore gravity. We don’t drive fast because we’re in a hurry; we drive fast because it pushes the arousal buttons, makes us feel alive, makes us feel human. Dr Peter Marsh, from the Social Issues Research Centre in Oxford, says the recent rise in popularity of bungee jumping, parachuting and other extreme sports is simply man’s reaction to the safer, cotton-woolly society that’s being created.',
  'Porsche made more money last year from selling almost 190,000 cars than its parent company, Volkswagen, made from selling more than 4.5 million.',
  'Flirting is the oil that lubricates the engine of ingenuity and wit.',
  'I think it’s because, in our complicated lives, we yearn only for the simple. An evening in front of the telly. A nice sit-down. A game of cards. At a drinks party, I can find myself talking to a fascinating and beautiful woman who’s just written a book about something interesting and clever. But what I yearn for is to be in the pub with my mates.',
  'Make no mistake, Concorde was an extraordinary technological achievement. Almost certainly, one of the greatest.',
  'would like to see a fund set up that does nothing but pay for great public buildings, follies, laser shows, towers, fountains, airships, aqueducts. Big, expensive stuff designed solely to make us go ‘wow’. I even have a name for this fund. We could call it the lottery.',
];
const mayresponses = [
  'Pillock.',
  'Oh cock.',
  'I think you\'ve got something to say to me',
  'Fully rigged, ocean going, rate A1 pillock',
  'The Amazon lot are perfectly reasonable, level-headed people who just want to make TV programmes. I don\'t think they are the enemy of the BBC or the other way round. It\'s not a war; these things can coexist. We can have Amazon and Netflix and the BBC and BT Sport, and people can make choices. That\'s what modern life is all about.',
  'Top Gears popularity is a complete mystery to me. Maybe it\'s because it\'s still a car programme, but it\'s turned into a distorted world view from three men; a world view through the windscreen.',
  'I don\'t know what a gazillion is.',
  'Jeremy can\'t do anything. I\'ve never discovered anything he can do. I mean, he can drive a car round a track pretty well, but he wouldn\'t be able to light a fire.',
  'A lot of television assumes the viewer is a bit daft, and I don\'t think they are.',
  'When I get into a car - any car - I still find it amazing that I\'m allowed to drive it away.',
  'CLARKSOOOOOOOOOOOON',
  'Clarkson you infantile pillock',
  'I\'m in favour of the old roles being blurred. The old division at school where the boys did metalwork and woodwork and the girls did needlework and domestic science is awful, really - and I\'m glad it\'s gone.',
  'I don\'t play a lot of games. I play flight simulators, mostly.',
  'I think any carmaker that had a brain and was looking very long-term would think about \'Personalised Transport Solutions\' - which may not be a car.',
  'They\'re pretty accurate, the clocks in mobile phones.',
  'When it comes to watches, it\'s ironic that you can spend thousands on an exquisitely made mechanical watch, and yet it will be less accurate than a five-quid digital bought from a petrol station.',
  'I\'d quite like to film in Central Park. I think we have asked, but we\'re not allowed to.',
  'Jeremy Clarkson wants to become a farmer - he\'s bought a field - Hammond wants to open a supermarket, and I\'d like to spend my days owning a shoe shop.',
  'In Top Gear, everything goes wrong because you have Jeremy Clarkson, so any practical activity ends in a pile of bits.',
  'All cars have a natural gait, a speed at which they\'re happiest. The Corniche is perfect at around 65-70mph. I did a ton in it once, which was completely horrible. Apparently, it\'ll reach 120mph, but not with me in it.',
  'There\'s this perception that I\'ve got this huge collection of old cars. I don\'t.',
  'Deep down inside, I am lazy.',
  'It would be a shame if the BBC didn\'t exist.',
  'I\'m not soppy-romantic. I don\'t buy Valentine\'s cards or any of that cheesy crap.',
  'I\'ve never thought about marriage or children.',
  'The greatest luxury now in being reasonably well-off - overlooking the Ferrari and the aeroplane - is that I can always go for a curry without worrying if I can afford it.',
  'I always wanted to be a teacher.',
  'I can\'t see Jeremy Clarkson having very many serious problems in his working life in the long run.',
  'I hope we\'re not barred from Argentina - I\'d quite like to go back for another ham and cheese sandwich.',
  'I\'ve never wanted to be on television for the sake of it, I suppose because I\'m not one of life\'s natural presenters; I\'m not an actor.',
];
exports.aliases = [];
exports.name = 'quote';
exports.module = 'Fun';
exports.usage = 'quote <old top gear presenter\'s last name>';
exports.run = (client, message, args) => {
  const SayArgs = args.join(' ');
  if (SayArgs === 'help' || args.length === 0) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16); // randomizes colour, use this for every embed.
    const HelpEmbed = new Discord.MessageEmbed() // creates the embed
        .setColor('#' + randomColor) // various settings (including using the randColour)
        .setAuthor('Quote arguments')// author
        .addFields(
            {name: `${client.prefix}quote may`, value: '`Responds with a James May quote`', inline: false},
            {name: `${client.prefix}quote hammond`, value: '`Responds with a Richard Hammond quote`', inline: false},
            {name: `${client.prefix}quote clarkson`, value: '`Responds with a Jeremy Clarkson quote`', inline: false},
        );
    return message.channel.send(HelpEmbed);
  } else if (SayArgs === 'clarkson') {
    const randomIndex = Math.floor(Math.random() * clarksonresponses.length);
    const ClarksonEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription('**'+clarksonresponses[randomIndex]+'**')
        .setFooter(client.config.embedFooter)
        .setFooter('― Jeremy Clarkson');
    message.channel.send(ClarksonEmbed);
  } else if (SayArgs === 'may') {
    const randomIndex = Math.floor(Math.random() * mayresponses.length);
    const MayEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription('**'+mayresponses[randomIndex]+'**')
        .setFooter(client.config.embedFooter)
        .setFooter('― James May');
    message.channel.send(MayEmbed);
  } else if (SayArgs === 'hammond') {
    const randomIndex = Math.floor(Math.random() * hammondresponses.length);
    const HammondEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription('**'+hammondresponses[randomIndex]+'**')
        .setFooter(client.config.embedFooter)
        .setFooter('― Richard Hammond');
    message.channel.send(HammondEmbed);
  }
};
