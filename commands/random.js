/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
const Canvas = require('canvas');
const Discord = require('discord.js');
function randomHexColor() {
  const n = (Math.random() * 0xfffff * 1000000).toString(16);
  return n.slice(0, 6);
};
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
}
exports.aliases = ['rand'];
exports.name = 'random';
exports.module = 'Fun';
exports.usage = 'random <action> [min number] [max number]';
exports.run = (client, message, args) => {
  if (args[0] === 'help' || args.length === 0) {
    const HelpEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Random arguments')
        .setFooter(client.config.embedFooter)
        .addFields(
            {name: `${client.prefix}random color`, value: '`Gives a random color`', inline: false},
            {name: `${client.prefix}random colour`, value: '`Gives a random colour, for all of you brits`', inline: false},
            {name: `${client.prefix}random num <min> <max>`, value: '`Generates a number from min - max (if no max provided it is min + 10)`', inline: false},
        );
    return message.channel.send(HelpEmbed);
  } else if (args[0] === 'color' || args[0] === 'colour') {
    const randomColor = randomHexColor();
    const randomColor2 = '#'+randomColor;
    const doDont = ['do', 'don\'t'][Math.round(Math.random())];
    const rgb = hexToRgb(randomColor2);
    const canvas = Canvas.createCanvas(90, 90);
    const ctx = canvas.getContext('2d');
    ctx.rect(0, 0, 90, 90);
    ctx.fillStyle = randomColor2;
    ctx.fill();
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `${randomColor}.png`);
    const randomColorembed = new Discord.MessageEmbed()
        .setThumbnail(`attachment://${randomColor}.png`)
        .setColor(randomColor2)
        .setFooter(client.config.embedFooter)
        .setTitle('I give you ' + randomColor2)
        .setDescription(`Do you like it? \nI sure ${doDont}!`)
        .addFields({name: 'Red', value: rgb.r, inline: true}, {name: 'Green', value: rgb.g, inline: true}, {name: 'Blue', value: rgb.b, inline: true});
    message.channel.send({files: [attachment], embed: randomColorembed});
  } else if (args[0] === 'num') {
    let min = parseInt(args[1]);
    let max = parseInt(args[2]);
    if (!min)min = 0;
    if (!max)max = min + 10;
    const randomNumberEmbed = new Discord.MessageEmbed()
        .setFooter(client.config.embedFooter)
        .setColor('RANDOM')
        .setTitle(`Random number from ${min} to ${max}`)
        .setDescription(`**${Math.floor(Math.random() * (max - min) + min)}** is your number`);
    message.channel.send(randomNumberEmbed);
  }
};
