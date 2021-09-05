const discord  =  require("discord.js")
module.exports = {
  name: "help",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  run: async (client,message,args) => { 
    
    const embed = new discord.MessageEmbed()
    .setColor("")
    .setTitle(`Hey this is ${message.guild.me.displayName}! A Music bot which aims to Provide High Quality Music.`)
 .setAuthor(`${message.guild.me.displayName} - Help Menu`, message.guild.me.user.avatarURL())
.setDescription(`


**• Music**
\`clear join leave loop move nowplaying pause play previous queue remove resume search skip seek stop volume\`

**• Filters**
\`bass bassboost deepbass earrape nightcore pitch pop reset soft speed television vaporwave\`

**• Info**
\`about ping lava uptime invite\`

**• EXCLUSIVE**
\`radio\`

**• Functions**
\`24/7 prefix\`
`)
 .setThumbnail(client.user.displayAvatarURL())
.setFooter("Developed by Nik")
message.channel.send(embed)
  }
}
