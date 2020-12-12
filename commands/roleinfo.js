/* eslint-disable max-len */
const Discord = require('discord.js');
exports.aliases = ['ri', 'role-info'];
exports.module = 'Info';
exports.usage = 'roleinfo [role mention or ID]';
exports.name = 'roleinfo';
exports.run = (client, message, args) => {
  args = args.join(' ');
  const role = message.mentions.roles.first() || message.guild.roles.cache.find((r) => r.name.toLowerCase() === args.toLowerCase()) || message.guild.roles.cache.get(args) || message.guild.roles.cache.get(message.guild.id);
  if (!role) return message.channel.send('Huh, couldn\'t find a role');
  const array = role.permissions.toArray();
  for (let i=0; i<array.length; i++) {
    array[i]='<:arrow:746783288974115008>'+array[i];
  }
  const embed = new Discord.MessageEmbed()
      .setTitle(`Role info for ${role.name}`)
      .setDescription(`${array.join('\n')}`)
      .addFields(
          {name: 'Mentionable', value: role.mentionable ? ':warning: This role IS mentionable' : '<:tickno:730766875822260254> This role is not mentionable'},
          {name: 'Hoisted', value: role.hoist ? '<:tickyes:730766875470069821> Yes' : ' <:tickno:730766875822260254> No'},
          {name: 'ID', value: role.id},
          {name: 'Hex Colour', value: role.hexColor},
          {name: 'Role mention', value: role},
      )
      .setFooter(client.config.embedFooter)
      .setColor(role.hexColor);
  message.channel.send(embed);
};
