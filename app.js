require('dotenv').config();
const { Client, Intents, Collection } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

const env = process.env;

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandsFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    client.commands.set(command.data.name, command);
};

client.once('ready', () => {
    console.log('client ready!');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
        await command.execute(interaction);
    }
    catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error executing command', ephemeral: true });
    }

})

client.login(env.DISCORD_TOKEN);