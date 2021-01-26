const Discord = require('discord.js');
module.exports = {
  aliases: ['peepee'],
  name: 'pp',
  module: 'Fun',
  usage: 'pp [mention]',
  run: async (client, message, args) =>{
    const member = message.mentions.members.first() || message.member;
    let user;
    if (member)user = member.user;
    const ppEmbed = new Discord.MessageEmbed()
        .setTitle(`This is **${user.tag}'s** pp!`)
        .setDescription(`8${'='.repeat(Math.floor(Math.random() * 128))}D`)
        .setFooter(client.config.embedFooter)
        .setColor('RANDOM');
    return message.channel.send(ppEmbed);
  },
};
