require('dotenv').config();
const {Client, Intents} = require('discord.js');

const env = process.env;

const client = new Client({intents: [Intents.FLAGS.GUILDS]})

client.once('ready', () => {
    console.log('client ready!');
});

client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand())
        return;
    
    const { commandName } = interaction;

    switch(commandName) {
        case 'ping':
            await interaction.reply('Pong!');
            break;
        case 'info':
            await interaction.reply('Server name: ${interaction.guild.name}');
            break;
        case 'user':
            await interaction.reply('User Info!');
            break;
        case 'arianne':
            await interaction.reply("Hi Arianne thats George's bot");
            break;
        case 'nazarii':
            await interaction.reply("Nazar Gay");
            break;
    }
})

client.login(env.DISCORD_TOKEN);