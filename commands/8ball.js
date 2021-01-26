/* eslint-disable max-len */
const Discord = require('discord.js');
module.exports = {
  aliases: ['8b'],
  name: '8ball',
  module: 'Fun',
  usage: '8ball <question>',
  run: (client, message, args) => {
    const BallArgs = args.join(' ');
    if (BallArgs === 'help' || args.length === 0) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16); // randomizes colour, use this for every embed.
      const HelpEmbed = new Discord.MessageEmbed() // creates the embed
          .setColor('#' + randomColor) // various settings (including using the randColour)
          .setAuthor('8ball arguments') // author
          .addFields({
            name: `${client.prefix}8ball help`,
            value: '`This message`',
            inline: false,
          }, {
            name: `${client.prefix}8ball <question>`,
            value: '`Gives an 8ball response to your question`',
            inline: false,
          })
          .setFooter(client.config.embedFooter);
      return message.channel.send(HelpEmbed);
    } else {
          const responses = [
      'As I see it, yes.',
      'Honestly, probably not',
      'I couldn\'t say',
      'My sources are down. Check later',
      'No, Thank god',
      'Yes, thankfully',
      'No.',
      'No - definitely.',
      'Maybe...',
      'Possibly, Possibly not',
      'Cannot say now.',
      'No, definitely.',
      'Don\'t count on it.',
      'It is uncertain.',
      'It is decidedly so.',
      'Most likely.',
      'My reply is no.',
      'My sources say no.',
      'Outlook not so good.',
      'Outlook good.',
      'Outlook terrible.',
      'Reply hazy, try again.',
      'Signs point to no.',
      'Signs point to yes.',
      'Very doubtful.',
      'As I see it, no.',
      'Without a doubt.',
      'Yes.',
      'Yes - definitely.',
      'You may rely on it.',
      'Most likely not',
    ];
      const ballEmbed = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setTitle(BallArgs + '?')
          .setDescription('**' + responses[randomIndex] + '**')
          .setFooter(client.config.embedFooter);
      message.channel.send(ballEmbed);
    }
  },
};
