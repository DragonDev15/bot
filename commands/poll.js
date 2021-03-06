/* eslint-disable max-len */
const Discord = require('discord.js');
module.exports = {
  aliases: ['yesno'],
  name: 'poll',
  module: 'Fun',
  usage: 'poll <decision to be made>',
  run: (client, message, args) => {
    const pollArg = args.join(' ');
    if (pollArg.length === 0 || pollArg === 'help') {
      const HelpEmbed = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setAuthor('Poll arguments')
          .setFooter(client.config.embedFooter)
          .addFields(
              {name: `${client.prefix}poll help`, value: '`This message`', inline: false},
              {name: `${client.prefix}poll <thing>`, value: '`Creates a poll message`', inline: false},
          );
      return message.channel.send(HelpEmbed);
    }
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const PollEmbed = new Discord.MessageEmbed()
        .setColor('#' + randomColor)
        .setTitle(`**${message.member.user.tag}** would like to call a vote`)
        .setFooter(client.config.embedFooter)
        .setDescription(pollArg);
    message.channel.send(PollEmbed).then(function(message) {
      message.react('✔️').then(message.react('❌'));
    });
  },
};
