/* eslint-disable max-len */
module.exports = async (client, message) => {
  if (message.author.bot) return;
  if (message.content.toLowerCase().indexOf(client.prefix) !== 0) return;
  const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command) || client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(command));
  if (!cmd) return;
  cmd.run(client, message, args);
};
