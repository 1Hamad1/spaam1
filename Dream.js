const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("498233231922036756")
setInterval(function() {
channel.send(`youtube`);
}, 25)
})
 
 
client.login('TOKEN');