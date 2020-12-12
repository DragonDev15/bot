/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
const Discord = require('discord.js-light');
const client = new Discord.Client({
  cacheRoles: true,
  cacheOverwrites: true,
  cacheChannels: true,
  ws: {intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS']},
});
const fs = require('fs');
const config = require('./config.json')
require('dotenv').config();
client.config = config;
client.prefix = process.env.PREFIX

client.on('ready', async () => {
  console.log(`[NOTICE] ${client.user.tag} Shard ${client.shard.ids} now ready`);
  client.user.setActivity('with ' + client.guilds.cache.size + ' servers | Shard ' + client.shard.ids);
});

fs.readdir('./events/', (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    const eventName = file.split('.')[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith('.js')) return;
    const props = require(`./commands/${file}`);
    const commandName = file.split('.')[0];
    console.log(`[NOTICE] Loaded command ${commandName}`);
    client.commands.set(commandName, props);
  });
});


client.login(process.env.token);
