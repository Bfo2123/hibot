const { Command } = require('discord.js-commando');
const Discord = require("discord.js");

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'flight',
            group: 'admin',
            memberName: 'announce',
            description: 'Announce flights.',
            examples: ['Just use the command'],
            args: [
                {
                    key: 'schannel',
                    prompt: 'What channel would you like to post that in?',
                    type: 'string'
                },
                {
                    key: 'flightcode',
                    prompt: 'What is the code of the flight?',
                    type: 'string'
                },
                {
                    key: 'flighttime',
                    prompt: 'What will be the time for the flight?',
                    type: 'string'
                },
                {
                    key: 'flightairport',
                    prompt: 'What will be the time for the flight?',
                    type: 'string'
                },
                {
                    key: 'slock',
                    prompt: 'When will the server be locked??',
                    type: 'string'
                }
            ]
        });
    }
    run(msg, { schannel, flightcode, flighttime, flightairport, slock}) {
        msg.delete();
        const sender = msg.author.username
        const senderimg = msg.author.displayAvatarURL()
	    const guild = msg.guild
        const time = new Date().getFullYear()
        let mychannel = schannel.split('#').join('')
        mychannel = mychannel.split('<').join('')
        mychannel = mychannel.split('>').join('')
        //const myping = '<@' + ping + '>' 
	    if (msg.member.hasPermission('ADMINISTRATOR')) {
	    	const Embed = new Discord.MessageEmbed()
			    .setColor('#272a2e')
			    .setAuthor(sender, senderimg)
	    	    .setTitle('Flight')
	    	    //.setURL(attachment)
	    	    //.setDescription('')
	    	    .addFields(
                    { name: `Flight Code`, value: `${flightcode}`, inline: true},
                    {name: `Time`, value: `${flighttime}`, inline: true},
                    {name: `Airport`, value: `${flightairport}, inline: true`},
                    {name: `Server Lock`, value: `${slock}`}
	    	    ) 
	    	    //.setTimestamp();
	    	    .setFooter(`${guild.name} • ${time}`, `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}`);

            //return guild.channels.cache.find(ch => ch.name === `${mychannel}`).send(Embed);
            return this.client.channels.cache.get(mychannel).send(Embed);
        };
    };
};

//.get() with an id
//<client>.channels.cache.get('1234567890').send('Hello world.');

//.find() with a function to find one by name, good for server-specific channels
//<guild>.channels.cache.find(ch => ch.name === 'general').send('Hello world.');