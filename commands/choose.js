/* eslint-disable max-len */
const Discord = require('discord.js');
module.exports = {
  aliases: ['pick'],
  name: 'choose',
  module: 'Fun',
  usage: 'choose <list of things seperated by semicolons>',
  run: (client, message, args) => {
    const VoteArgsA = args.join(' ');
    const VoteArgsB = VoteArgsA.split(';');
    if (VoteArgsA === 'help' || args.length === 0) {
      const HelpEmbed = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setAuthor('Choose arguments')
          .addFields(
              {name: `${client.prefix}choose help`, value: '`This message`', inline: false},
              {name: `${client.prefix}choose <options>`, value: '`Gives a random option`', inline: false},
              {name: 'Syntax guide (kinda)', value: 'Seperate choices by either `;` or `; `, Do not include `;` at the end', inline: false},
          )
          .setFooter(client.config.embedFooter);
      return message.channel.send(HelpEmbed);
    } else {
      const randomIndex = Math.floor(Math.random() * VoteArgsB.length);
      const ChooseEmbed = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setTitle(`There is a list of **${VoteArgsB.length}** items`)
          .setDescription(`and I chose **${VoteArgsB[randomIndex]}**`)
          .setFooter(client.config.embedFooter);
      message.channel.send(ChooseEmbed);
    }
  },
};
