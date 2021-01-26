/* eslint-disable max-len */
const Discord = require('discord.js');
const Canvas = require('canvas');
const {words} = require('../words.json');
module.exports = {
  aliases: [],
  name: 'phrase',
  module: 'Fun',
  usage: 'phrase',
  run: async (client, message, args) => {
    const phraseArgs = args.join(' ');
    if (phraseArgs === 'help') {
      const HelpEmbed = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setAuthor('Phrase arguments')
          .setFooter(client.config.embedFooter)
          .addFields(
              {name: `${client.prefix}phrase help`, value: '`This message`', inline: false},
              {name: `${client.prefix}phrase`, value: '`Quick typing challenge (words must be seperated by space)`', inline: false},
          );
      return message.reply(HelpEmbed);
    } else {
      const randomIndex = Math.floor(Math.random() * words.length);
      const randomindex = Math.floor(Math.random() * words.length);
      const filter = (response) => response.content.toLowerCase() === `${words[randomIndex]} ${words[randomindex]}`;
      const canvas = Canvas.createCanvas(1200, 600);
      Canvas.registerFont('./font.ttf', {family: 'Montserrat'});
      const ctx = canvas.getContext('2d');
      ctx.rect(0, 0, 1200, 750);
      ctx.fillStyle = '#000000';
      ctx.fill();
      ctx.fillStyle = 'white';
      ctx.font = '150px "Montserrat"';
      ctx.fillText(`Fast Phrase`, 20, 160);
      ctx.font = 'bold 100px Ariel';
      ctx.fillText(`1. ${words[randomIndex]}`, 20, 300);
      ctx.fillText(`2. ${words[randomindex]}`, 20, 450);
      ctx.font = '50px "Montserrat"';
      ctx.fillText(`You have 15 seconds.`, 20, 550);
      const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'image.png');
      message.channel.send('Format = `word1 word2`', attachment).then((m) =>{
        message.channel.awaitMessages(filter, {max: 1, time: 15000, errors: ['time']}).then((collected) => {
          const win = collected.first().author;
          message.channel.send(`${win} won! It took them \`${(collected.first().createdTimestamp / 1000 - m.createdTimestamp / 1000).toFixed(2)}\` seconds`);
        }).catch((collected) => {
          message.channel.send(`Nobody was quick enough :timer:`);
        });
      });
    }
  },
};
