const Discord = require('discord.js'),
MessageEmbed = require('discord.js')
Bot = require('discord.js')

module.exports.config = {
    name : "help",
    aliases: ["h", "help"]
}


module.exports.run = (bot, msg, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('#63000a')
    .setTitle(`Hilfemenü für ${msg.author.username}`)
    .setThumbnail(msg.author.avatarURL())
    .setDescription('Prefix is ``s!`` \n\n')
    .addField('> **Moderation** \n', '``ban``,``kick``, ``say``\n')
    .addField('> **Fun**\n', '``bite``, ``bully``, ``kiss``, ``slap``, ``wave``,\n ``stare``, ``pat``, ``poke``, ``punch``, ``girl``\n ``cry``, ``tickle``, ``hug``')
    .addField('> **Info Commands**\n', '``userinfo``, ``serverinfo``, ``botinfo``, ``avatar``\n')
    .addField('> **Discord Games** \n', '``8ball``, ``ping``, ``coinflip``\n')
    .addField('> **Links:**\n\n', '<:sasuke:746632993065533573> [Bot Invite](https://discord.com/api/oauth2/authorize?client_id=737363635005030606&permissiocns=8&scope=bot) | ')
    msg.channel.send(embed)
}
