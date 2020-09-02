const Discord = require('discord.js');
const discord = require('discord.js')
const bot = new discord.Client();
const ayarlar = require('./ayarlar.json')
const fs = require('fs');
const { notDeepEqual } = require('assert');
const TOKEN = '';
const db = require('quick.db')


var prefix = ayarlar.default_prefix;



bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
fs.readdir('./commands', (err, files) => {
    if(err) console.log(err)

    let jsfile = files.filter(f => f.split('.').pop() === 'js')
    if(jsfile.length <= 0 ){
        return console.log('Ich kann das nicht');
    }

    jsfile.forEach((file, i) => {
        let pullmcd = require(`./commands/${file}`)
        bot.commands.set(pullmcd.config.name, pullmcd)
        pullmcd.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pullmcd.config.name)
        })
    })
});

bot.on('message', msg =>{
    let messageArray = msg.content.split(' ')
    let cmd = messageArray[0]
    let args = messageArray.slice(1)

    if(!msg.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot, msg, args)
});

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      bot.on(eventName, event.bind(null, bot));
    });
  });


  
bot.login(ayarlar.token)