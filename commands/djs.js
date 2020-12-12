/* eslint-disable max-len */
const Discord = require('discord.js');
const fetch = require('node-fetch');
exports.aliases = ['discord.js', 'djsdocs'];
exports.name = 'djs';
exports.module = 'Info';
exports.usage = 'djs <search query>';
exports.run = async (client, message, args) =>{
  let embed = await fetch(`https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(args.join(' '))}`).then((res) => res.json());
  if (!embed) {
    embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('No items found');
  }
  if (embed.status == 400) {
    embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('No query');
  }
  message.channel.send('I searched the docs for you, ' + message.author, {embed: embed.setFooter(client.config.embedFooter), allowedMentions: {users: [], roles: []}});
};
