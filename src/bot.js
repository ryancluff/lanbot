require("dotenv").config();

const { Client } = require('discord.js');
const client = new Client();

client.login(process.env.LANBOT_TOKEN);

client.on('message', (message) => {
    console.log(message.content);
});