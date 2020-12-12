/* eslint-disable max-len */
const Discord = require('discord.js');
exports.aliases = ['8b'];
exports.name = '8ball';
exports.module = 'Fun';
exports.usage = '8ball <question>';
exports.run = (client, message, args) => {
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
    const ballEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(BallArgs + '?')
        .setDescription('**' + responses[randomIndex] + '**')
        .setFooter(client.config.embedFooter);
    message.channel.send(ballEmbed);
  }
};
