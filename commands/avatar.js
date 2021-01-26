/* eslint-disable max-len */
const Discord = require('discord.js');
module.exports = {
  aliases: ['av', 'pfp'],
  name: 'avatar',
  module: 'Info',
  usage: 'avatar [mention]',
  run: async (client, message, args) => {
    const member = message.mentions.members.first() || message.member;
    let user;
    if (member) user = member.user;
    const embed = new Discord.MessageEmbed()
        .setTitle(`This is **${user.tag}'s** avatar`)
        .setColor('RANDOM')
        .setImage(user.displayAvatarURL({
          size: 2048,
          dynamic: 'true',
        }))
        .setFooter(client.config.embedFooter);
    return message.channel.send(embed);
  },
};
