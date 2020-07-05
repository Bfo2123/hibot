const Discord = require("discord.js");
exports.run = (client, message, [title, ...msg]) => {
	const blank = '\u200b'
	const sender = message.author.username
    const senderimg = message.author.displayAvatarURL()
	const guildname = message.guild.name
	const guildid = message.guild.id
	const guildimg = message.guild.icon
	const ann = `${msg}`
	const result = ann.split(',').join(" ");
    //const guildicon = message.guild.icon
    const time = new Date().getFullYear()
	if (message.member.id = '606579794586632194') {
    	message.delete({number: 1})
		message.channel.send(`https://cdn.discordapp.com/icons/${guildid}/${guildimg}`)
	};
}