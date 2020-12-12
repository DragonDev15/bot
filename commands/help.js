/* eslint-disable max-len */
const Discord = require('discord.js');
exports.aliases = ['h'];
exports.name = 'help';
exports.module = 'Info';
exports.usage = 'help [command name]';
exports.run = (client, message, args) =>{
  if (!args[0]) {
    const embed = new Discord.MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL({size: 512}))
        .setFooter(client.config.embedFooter)
        .setDescription(`Commands: \`${client.commands.filter((g) => !g.secret).map((g) => g.name).join(', ')}\``);
    message.channel.send(embed);
  } else if (client.commands.get(args[0]) || client.commands.find((g) => g.aliases.includes(g.name))) {
    const command = client.commands.get(args[0]) || client.commands.find((g) => g.aliases.includes(args[0]));
    const embed = new Discord.MessageEmbed()
        .setTitle(`${command.name} command`)
        .setDescription(`Aliases: ${command.aliases.join(', ')}
Usage: ${command.usage}
Module: ${command.module}
`)
        .setFooter('[] - Optional; <> - Required ' + client.config.embedFooter)
        .setAuthor(client.user.tag, client.user.displayAvatarURL({size: 512}));
    message.channel.send(embed);
  } else {
    const embed = new Discord.MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL({size: 512}))
        .setTitle('No command found')
        .setFooter(client.config.embedFooter);
    message.channel.send(embed);
  }
};
