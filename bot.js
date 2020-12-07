const Discord = require('discord.js')

const { prefix } = require('./config.js')

const bot = new Discord.Client();

bot.once('ready', () => {
    console.log('Bot Lancer. l Create By Loki')
    bot.user.setActivity(process.env.STATUT)
});

bot.on('message', (message) => {
    if(message.content === '!creator') {
     message.channel.send(process.env.CREATOR);
	}
});

bot.login(process.env.TOKEN);