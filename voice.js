const { Client } = require('discord.js-selfbot-v13');
const client = new Client(); // All partials are loaded automatically

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})
const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {
    
    setInterval(async () => {
        client.channels.fetch('1344784289920979034') 
            .then((channel) => { 
                const VoiceConnection = joinVoiceChannel({
                    channelId: channel.id, 
                    guildId: channel.guild.id, 
                    adapterCreator: channel.guild.voiceAdapterCreator,
                    selfDeaf: false
                });
            }).catch((error) => { 
                return; 
            });
    }, 1000)
}); 
const express = require("express");
const app = express();
app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});
client.login(process.env.token);
