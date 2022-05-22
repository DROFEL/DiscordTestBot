const path = require('path');
const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { SnowflakeUtil } = require('discord.js');
require('dotenv').config();

const env = process.env;

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}


const rest = new REST({ version: '9'}).setToken(env.DISCORD_TOKEN);

rest.put(Routes.applicationGuildCommands(env.APP_ID, env.GUILD_ID), {body: commands})
    .then(() =>console.log('Sucessfully regestered application commands'))
    .catch(console.error());