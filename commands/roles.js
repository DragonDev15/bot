/* eslint-disable max-len */
const Discord = require('discord.js');
exports.aliases = [];
exports.name = 'roles';
exports.module = 'Info';
exports.usage = 'roles <hoisted/pingable>';
exports.run = (client, message, args) => {
  if (args[0] === 'help' || !args[0]) {
    const embed = new Discord.MessageEmbed()
        .setTitle('Roles command help')
        .setFooter(client.config.embedFooter)
        .addFields(
            {name: `${client.prefix}roles hoisted`, value: '`Returns a list of hoisted roles, or just a value if there\'s too much`'},
            {name: `${client.prefix}roles pingable`, value: '`Returns a list of pingable roles, or just a value if there\'s too much`'},
        );
    message.channel.send(embed);
  } else if (args[0] === 'hoisted') {
    let hoisted = message.guild.roles.cache.filter((r) => r.hoist).map((r) => r.name);
    for (let i=0; i<hoisted.length; i++) {
      hoisted[i]='->'+hoisted[i];
    }
    if (hoisted.join('\n').length > 2000) {
      hoisted = message.guild.roles.cache.filter((r) => r.hoist).map((r) => r.name).size;
    } else {
      hoisted = hoisted.join('\n');
    }
    const embed = new Discord.MessageEmbed()
        .setTitle('Hoisted roles for ' + message.guild.name)
        .setDescription(hoisted)
        .setFooter(client.config.embedFooter)
        .setFooter('If you see a number, too many roles are hoisted.');
    message.channel.send(embed);
  } else if (args[0] === 'pingable') {
    let pingable = message.guild.roles.cache.filter((r) => r.mentionable).map((r) => r.name);
    for (let i=0; i<pingable.length; i++) {
      pingable[i]='->'+pingable[i];
    }
    if (pingable.join('\n').length > 2000) {
      pingable = message.guild.roles.cache.filter((r) => r.mentionable).map((r) => r.name).size;
    } else {
      pingable = pingable.join('\n');
    }
    const embed = new Discord.MessageEmbed()
        .setTitle('Pingable roles for ' + message.guild.name)
        .setDescription(pingable)
        .setFooter(client.config.embedFooter)
        .setFooter('If you see a number, too many roles are pingable.');
    message.channel.send(embed);
  }
};
