const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('holidays')
        .setDescription('Returns a list of holidays today!'),
    async execute(interaction) {

        let value = "not work9ing yet";
        value = await fetch('https://national-api-day.herokuapp.com/api/today', {method: 'GET'})
        .then(response => response.json())
        .then(data => {
            const { holidays } = data;
            return holidays.join('\n');
        })
        .catch(error => console.error(error))

        await interaction.reply(value);
    }
}