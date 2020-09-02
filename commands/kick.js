const Discord = require('discord.js');
const MessageEmbed = require('discord.js');

module.exports.config = {
    name:"kick",
    aliases: ['kick']
}

module.exports.run = (bot, msg, args) => {
    if(msg.author.bot) return;

    let mevila = new Discord.MessageEmbed() 
    .setTitle('Du musst eine Person erwöhnen.')
    .setColor('RED')

    let noperm = new Discord.MessageEmbed()
    .setTitle('Du hast keine Rechte den Befehl auszuführem')
    .setColor('RED')

    if (!msg.member.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])){ 
    return  msg.channel.send(noperm)}
    let target = msg.mentions.members.first();
    
    if(!target) 
    {return msg.channel.send(mevila)}

    if(target.id === msg.author.id) {
    return msg.channel.send(`**${msg.author.username}**, Du kannst dich nicht selber kicken`)}

    let embed = new Discord.MessageEmbed()
    .setTitle("Action: Kick")
    .setDescription(`Kicked: ${target} (${target.id})`)
    .setColor("#ff2050")
    .setFooter(`Gekicked by ${msg.author.username}`);

    msg.channel.send(embed) 
    
    target.kick(args[1]);

};