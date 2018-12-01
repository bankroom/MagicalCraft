const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});






client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "🅼🅴🅼🅱🅴🆁🆂");
   member.addRole 🅼🅴🅼🅱🅴🆁🆂;
  
})

client.on ("guildMemberRemove", member => {
   
})
 
  












// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
