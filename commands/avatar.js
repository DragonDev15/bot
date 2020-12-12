/* eslint-disable max-len */
const Discord = require('discord.js');
exports.aliases = ['av', 'pfp'];
exports.name = 'avatar';
exports.module = 'Info';
exports.usage = 'avatar [mention]';
exports.run = async (client, message, args) => {
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
};
