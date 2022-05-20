const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { SnowflakeUtil } = require('discord.js');
require('dotenv').config();

const env = process.env;

const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('replies pong!'),
    new SlashCommandBuilder().setName('info').setDescription('Bot information'),
    new SlashCommandBuilder().setName('arianne').setDescription("Hmmm"),
    new SlashCommandBuilder().setName('nazarii').setDescription("Gay"),
    new SlashCommandBuilder().setName('user').setDescription('Replies user information')
]
    .map(command => command.toJSON());

const rest = new REST({ version: '9'}).setToken(env.DISCORD_TOKEN);

rest.put(Routes.applicationGuildCommands(env.APP_ID, env.GUILD_ID), {body: commands})
    .then(() =>console.log('Sucessfully regestered application commands'))
    .catch(console.error());