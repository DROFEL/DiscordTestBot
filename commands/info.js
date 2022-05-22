const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Server information'),
	async execute(interaction) {
		await interaction.reply(`Server name: ${interaction.guild.name}\nCalled by: ${interaction.member.displayName}\nJoined: ${interaction.member.joinedAt}`);
	},
};