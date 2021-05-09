const { MessageReaction } = require("discord.js");
const Discord = require('discord.js');
const { merge } = require("snekfetch");
const fs = require('fs');
const path = require('path');

module.exports = (bot,msg)=>{ 
  let rawdata = fs.readFileSync(path.resolve(__dirname, 'eastereggdata.json'));
  let data = JSON.parse(rawdata);
  var counter1 = data.counter1;
  var counter2 = data.counter2;
  var counter3 = data.counter3;

    const attachment = new Discord.MessageAttachment('./media/logo.png', 'logo.png');
    const exampleEmbed = new Discord.MessageEmbed()
     .setColor('#0099ff')
     .setTitle('Projectmysa')
     .setURL('https://www.instagram.com/projectmysa/')
     //.setAuthor('Sartaj', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
     .setDescription('ooooooo Hunting for easter eggs?\n Search answers to any of the following question. \nAll The Best!')
    .attachFiles(attachment)
     .setThumbnail('attachment://logo.png')
     .addFields(
       //{ name: '\u200B', value: '\u200B' },
       { name: "1. A 3 digit number:|Egs remaining:"+`${counter1}`, value: '```!sa easter 1 ***```', inline: false },
       { name: "2. My masters favourite videogame:|Egs remaining:"+`${counter2}`, value: '```!sa easter 2 ****```', inline: false},
       { name: "3. Date on which ProjectMysa was founded:|Egs remaining:"+`${counter3}`, value: '```!sa easter 3 DDMMYY```', inline: false },
       { name: '\u200B', value: '\u200B' },
       { name: 'For complete help list', value: "``!sa help``", inline: false }, 
     )
    .setFooter('Mysa- Project Mental Health', 'attachment://logo.png');
     msg.reply(exampleEmbed);
    }
    