/* eslint-disable max-len */
const Discord = require('discord.js');
exports.aliases = [];
exports.name = 'rate';
exports.run = (client, message, args) => {
  const rateArgs = args.join(' ');
  if (rateArgs === 'help' || args.length === 0) {
    const HelpEmbed = new Discord.MessageEmbed()
        .setFooter(client.config.embedFooter)
        .setColor('RANDOM')
        .setAuthor('Rate arguments')
        .addFields(
            {name: `${client.prefix}rate <thing>`, value: '`Rates the thing.`', inline: false},
        );
    return message.channel.send(HelpEmbed);
  } else {
    const randomIndex = Math.floor(Math.random() * 10);
    const rateEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(rateArgs)
        .setDescription(`I rate ` + rateArgs + ' **' + randomIndex + '/10**');
    message.channel.send(rateEmbed);
  }
};
