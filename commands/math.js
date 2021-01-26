/* eslint-disable max-len */
const Discord = require('discord.js');
const Canvas = require('canvas');
const operators = [{
  sign: '+',
  method: function(a, b) {
    return a + b;
  },
}, {
  sign: '-',
  method: function(a, b) {
    return a - b;
  },
}];
module.exports = {
  name: 'math',
  aliases: ['maths'],
  module: 'Fun',
  usage: 'math [difficulty]',
  run: async (client, message, args) => {
    const mathArgs = args.join(' ');
    let number = 0;
    let time = 0;
    let min = 0;
    if (mathArgs === 'help') {
      const HelpEmbed = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setAuthor('Math arguments')
          .addFields(
              {name: `math help`, value: '`This message`', inline: false},
              {name: `math <super-easy/easy/medium/hard/extreme/impossible>`, value: '`Random math question (leave blank for easy)`', inline: false},
          );
      return message.reply(HelpEmbed);
    } else {
      if (mathArgs === 'super-easy') {
        number = 15;
        time = 6000;
        min = 0;
      } else if (mathArgs === 'easy') {
        number = 30;
        time = 7500;
        min = 0;
      } else if (mathArgs === 'medium') {
        number = 50;
        time = 10000;
        min = 25;
      } else if (mathArgs === 'hard') {
        number = 100;
        time = 12500;
        min = 50;
      } else if (mathArgs === 'extreme') {
        number = 250;
        time = 15000;
        min = 100;
      } else if (mathArgs === 'impossible') {
        number = 700;
        time = 20000;
        min = 300;
      } else {
        number = 30;
        time = 7500;
        min = 0;
      }
    }
    const randomIndex = Math.floor(Math.random() * operators.length);
    const num1 = Math.floor(Math.random() * (number - min) + number);
    const num2 = Math.floor(Math.random() * (number - min) + number);
    const filter = (response) => response.content === operators[randomIndex].method(num1, num2).toString();
    const canvas = Canvas.createCanvas(1000, 500);
    Canvas.registerFont('./font.ttf', {family: 'Montserrat'});
    const ctx = canvas.getContext('2d');
    ctx.rect(0, 0, 1000, 500);
    ctx.fillStyle = '#000000';
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.font = '150px "Montserrat"';
    ctx.fillText(`Solve this`, 20, 150);
    ctx.font = 'bold 100px Ariel';
    ctx.fillText(`${num1} ${operators[randomIndex].sign} ${num2}`, 20, 325);
    ctx.font = '50px "Montserrat"';
    ctx.fillText(`You have ${time / 1000}s`, 20, 450);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'image.png');
    message.channel.send(attachment).then((m) => {
      message.channel.awaitMessages(filter, {max: 1, time: time, errors: ['time']}).then((collected) => {
        const win = collected.first().author;
        message.channel.send(`${win} won! It took them \`${(collected.first().createdTimestamp / 1000 - m.createdTimestamp / 1000).toFixed(2)}\` seconds`);
      }).catch((collected) => {
        message.channel.send(`Nobody calculated in time, correct awnser was \`${operators[randomIndex].method(num1, num2)}\` :timer:`);
      });
    });
  },
};
