/* eslint-disable max-len */
const Discord = require('discord.js');
module.exports ={
  aliases: ['serverinfo', 'server-info'],
  name: 'si',
  module: 'Info',
  usage: 'si',
  run: async (client, message, args) =>{
    const infoEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Server Information for ' + message.guild.name, message.guild.iconURL())
        .setThumbnail(message.guild.iconURL({dynamic: true}))
        .addFields(
            {name: 'Member Count', value: `${message.guild.memberCount}`, inline: false},
            {name: 'Guild Owner', value: `<@${message.guild.ownerID}> / <@!${message.guild.ownerID}>`, inline: false},
            {name: 'Highest Role', value: `${message.guild.roles.highest}`, inline: false},
            {name: 'Guild Region', value: `${message.guild.region}`},
            {name: 'Date of creation', value: `${message.guild.createdAt}`, inline: false},
            {name: 'Name and Name Acronym', value: `Name: ${message.guild.name} || Acronym: ${message.guild.nameAcronym}`, inline: true},
            {name: 'Guild\'s ID', value: `${message.guild.id}`, inline: false},
        )
        .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL()); // footer
    return message.channel.send(infoEmbed);
  },
};
