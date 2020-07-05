const { Command } = require('discord.js-commando');
const Discord = require("discord.js");

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'purge',
            group: 'admin',
            memberName: 'purge',
            description: 'Delete stuff.',
            examples: ['.purge (number)'],
        });
    }
    run(msg, args) {
        let number = parseInt(args)
        if (msg.member.hasPermission('MANAGE_MESSAGES'))
        if (isNaN(number)) {
            return msg.reply('that isn\'t a valid number!')
        } else if (number < 1 || number > 100) {
            return msg.reply('you need to input a number from 1-100, try again.')
        } 
        console.log(number + 1)
        msg.channel.bulkDelete(number + 1, true);
    };
};
