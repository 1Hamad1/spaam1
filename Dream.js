const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("473433339035123712")
setInterval(function() {
channel.send(`tt7da y robo ha?  :) `);
}, 25)
})
 
 
client.login('NTAyNTU2MTg5NjU4MTg1NzI5.DsrsKQ.LOxCjlrEfBwVw5AFnnEglzZeW1M');
