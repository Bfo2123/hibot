const Discord = require("discord.js");
const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const config = require("./config.json");

const client = new CommandoClient({
  commandPrefix: '.',
  owner: '424235491064414208',
  disableEveryone: true,
  unknownCommandResponse: false
});


//Registers the commands and groups
client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['admin', 'Admin']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({
      groups: false,
      unknownCommand: false
  })
    .registerCommandsIn(path.join(__dirname, 'commands'));


//Bot log's in
client.login(config.token)