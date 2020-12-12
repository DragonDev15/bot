/* eslint-disable max-len */
const Discord = require('discord.js');
exports.aliases = ['ussr'];
exports.name = 'communism';
exports.module = 'Fun';
exports.usage = 'communism [mention]';
exports.run = async (client, message, args) =>{
  const member = message.mentions.members.first() || message.member;
  let user;
  if (member)user = member.user;
  const AvatarURL = user.displayAvatarURL({size: 2048, format: 'png'});
  const HelpEmbed = new Discord.MessageEmbed()
      .setTitle(`This is **${user.tag}'s** communismified avatar`)
      .setColor('RANDOM')
      .setImage(`https://api.alexflipnote.dev/filter/communist?image=${AvatarURL}`)
      .setFooter(client.config.embedFooter);
  return message.channel.send(HelpEmbed);
};
