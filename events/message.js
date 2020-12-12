/* eslint-disable max-len */
const cooldowns = {cooldown: new Map(), commands: new Map()};
module.exports = async (client, message) => {
  if (message.channel.type === 'dm' && !message.author.bot) return message.channel.send('dont dm me please lad, i dont like dms');
  client.db.get(client, `${message.guild.id}_prefix`);
  if (message.author.bot) return;
  if (!message.channel.permissionsFor(message.guild.me).has('SEND_MESSAGES') || !message.channel.permissionsFor(message.guild.me).has('ATTACH_FILES') || !message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) return;
  if (message.content.startsWith('ab!recoverprefix') || message.content.startsWith('<@716061781172158464>') || message.content.startsWith('<@!716061781172158464>')) return message.channel.send(`\`${client.prefix}\` is this guild's prefix, now try ${client.prefix}help`);
  if (message.content.toLowerCase().indexOf(client.prefix) !== 0) return;
  const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command) || client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(command));
  if (!cmd) return;
  const blacklistCheck = await client.db.collection('blacklist').findOne({u_id: message.author.id});
  if (blacklistCheck) {
    return message.channel.send(`You are blacklisted from using Animal Bot because ${blacklistCheck.r}. You can appeal this in the support server. https://links.animalbot.xyz/discord`);
  }
  if (cooldowns.commands.has(message.author.id)) {
    if (cooldowns.cooldown.has(message.author.id)) return;
    message.channel.send('You are on cooldown. Please wait until it is over');
    cooldowns.cooldown.set(message.author.id, true);
    setInterval(() => {
      cooldowns.cooldown.delete(message.author.id);
    }, 2000);
    return;
  }
  cmd.run(client, message, args);
  client.uses++;
  cooldowns.commands.set(message.author.id, true);
  setTimeout(() => {
    cooldowns.commands.delete(message.author.id);
  }, 2000);
  if (!cmd.uses && !cmd.secret) {
    cmd.uses = 1;
  } else {
    cmd.uses++;
  };
};
