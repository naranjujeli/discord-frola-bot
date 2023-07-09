// Imports
require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

// Create Discord Client object
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent
  ] 
});

// Set message received event
client.on("messageCreate", message => {
  if (/hola.*/.test(message.content)) {
    message.channel.send('que pasa?');
  }
});

// When the client is ready
client.once('ready', c => {
  console.log(`All ready! Logged in as ${c.user.tag}`);
});

// Open connection
client.login(process.env.LOGIN_TOKEN);