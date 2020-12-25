const Discord = require('discord.js');
const client = new Discord.Client(); 
const { token } = require('./token.json')

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (message.content === '!Hi') {
        message.channel.send('Greetings, user')
    }
})


client.login(token);