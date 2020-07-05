const Discord = require("discord.js");
exports.run = (client, message, user) => {
	const blank = '\u200b'
    const sender = message.author.username
    const senderimg = messager.author.displayAvatarURL()
    message.delete({number: 1})
	const Embed = new Discord.MessageEmbed()
	//Blank = \u200b
		.setColor('#0099ff')
		.setAuthor(sender, senderimg)
		.setTitle('User Info')
		.setURL('')
		//.setDescription('')
		//.setThumbnail('url')
		.addField('Name:', `${sender}`)
		.setFooter(`${guildname} • ${time}`, `${guildicon}`);

	message.channel.send(Embed)
};
