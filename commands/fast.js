/* eslint-disable max-len */
const Discord = require('discord.js');
const Canvas = require('canvas');
const {words} = require('../words.json');
const recent = new Map();
exports.aliases = ['typing'];
exports.name = 'fast';
exports.module = 'Fun';
exports.usage = 'fast';
exports.run = async (client, message, args) => {
  const fastArgs = args.join(' ');
  if (fastArgs === 'help') {
    const HelpEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Fast arguments')
        .addFields(
            {name: `${client.prefix}fast help`, value: '`This message`', inline: false},
            {name: `${client.prefix}fast`, value: '`Quick typing challenge`', inline: false},
        );
    return message.channel.send(HelpEmbed);
  } else {
      const randomIndex = Math.floor(Math.random() * words.length);
      const filter = (response) => response.content.toLowerCase() === words[randomIndex];
      const canvas = Canvas.createCanvas(1100, 500);
      Canvas.registerFont('./font.ttf', {family: 'Montserrat'});
      const ctx = canvas.getContext('2d');
      ctx.rect(0, 0, 1100, 500);
      ctx.fillStyle = '#000000';
      ctx.fill();
      ctx.fillStyle = 'white';
      ctx.font = '150px "Montserrat"';
      ctx.fillText(`Fast Typing`, 20, 160);
      ctx.font = 'bold 100px Ariel';
      ctx.fillText(`${words[randomIndex]}`, 20, 320);
      ctx.font = '50px "Montserrat"';
      ctx.fillText(`You have 10 seconds.`, 20, 450);
      const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'image.png');
      message.channel.send(attachment).then((m) =>{
        message.channel.awaitMessages(filter, {max: 1, time: 10000, errors: ['time']}).then((collected) => {
          const win = collected.first().author;
          message.channel.send(`${win} won! It took them \`${(collected.first().createdTimestamp / 1000 - m.createdTimestamp / 1000).toFixed(2)}\` seconds`);
        }).catch((collected) => {
          message.channel.send(`Nobody was quick enough :timer:`);
        });
      });
  }
};
