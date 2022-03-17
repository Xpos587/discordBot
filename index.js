const { Client, Intents } = require('discord.js');
const fs = require('fs');
require('dotenv').config();

const token = process.env.TOKEN;

const config = require('./config.json');
config.cfg.intents = new Intents(config.cfg.intents);
const client = new Client(config.cfg);

['eventsHandler', 'commandsHandler'].forEach(handler => {
    require(`./handlers/${handler}`);
});

client.on('ready', (client) => {
    console.log('Ready!');
});

client.on('messageCreate', (message, client) => {
    const { content } = message;
    if(content == 'ping') {
        message.reply('pong')
    }
});

client.login(token)