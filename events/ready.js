const Discord = require('discord.js');

module.exports = (client) => {
    console.log(`Ready als ${client.user.tag}`)
    client.user.setPresence({
        status: 'dnd',
        activity: {
            name: 't!help | V.1.1.1 ',
            type: 'STREAMING',
            url: 'https://www.twitch.tv/monstercat'
        }
    })
};