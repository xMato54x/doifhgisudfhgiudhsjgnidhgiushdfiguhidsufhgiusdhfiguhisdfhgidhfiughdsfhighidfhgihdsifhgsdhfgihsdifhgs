const Discord = require("discord.js");
const client = new Discord.Client();




bot.on("ready", () => {
    console.log("Bot je aktiviran!");
    bot.generateInvite(["ADMINISTRATOR"]).then((invite) => {
        console.log("Invite link bota je: " + invite);

    bot.user.setStatus("dnd")
    
    bot.user.setGame("Balkanci | .help", "https://www.twitch.tv/thetony1134")
		})


   }) 
   
bot.on("message", (message) => {
    if(message.author.bot || !message.content.startsWith(config.prefix)) return;

    var args = message.content.substring(config.prefix.length).split(" ");

    switch(args[0].toLowerCase()) {			
        case "help":
            var helpEmbed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .addField("Balkanci Help", "**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nBalkanci | Official**\n\n**【:earth_africa:】Member Commands**\n.invitelink - prikazuje invite link servera\n.avatar - prikazuje vas avatar\n.serverpravila - prikazuje pravila servera\n.botinfo - prikazuje informacije o botu\n.serverinfo - prikazuje informacije o serevru\n.gayrate - koliko ste gay u %\n.majstori - prikazuje majstore ovoga servera\nafk - obavjest da ste AFK (NESTABILNA KOAMANDA)\n.botinvite - prikazuje invite link bota\n**【:fire:】Staff Commands**\n.ban - za bananje igraca\n.kick - za kickanje igraca\n.dmall - slanje poruke svima iz servera\n.say - bot nesto ispise u chat\.giveaway - obavjest da je poceo giveaway\n.musicevent - obavjest da je poceo music event.\n.takmicenje - obavjest da je pocelo takmicenje\n.giveaway - obavjest da je poceo giveaway\n\n**USKORO JOS KOMANDI**\n**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**")
            message.channel.send(helpEmbed);
            break;
        
        case "serverinfo":
            var srvInfoEmbed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .addField("【:fire:】Igraci", message.guild.memberCount)
				.addField("【:earth_africa: 】HeadOwner", "TheTony")
				.addField("【:comet:】Bot Developer", "xMato54x")
				.addField("【:crown:】InviteLink", "https://discord.gg/vSqwQNn")
            message.channel.sendEmbed(srvInfoEmbed);
            break;
        
        case "botinfo":
            var aboutEmbed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .addField("Bot Info", "**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nBalkanci | Official**\n\n【:pushpin:】Balkanci Bot\n【:boom:】Bot Developer - xMato54x\n【:sweat_drops:】Custom Bot\n【:comet:】Orginalni server | Balkanci : https://discord.gg/UgggZEV\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
            message.channel.sendEmbed(aboutEmbed);
            break;
			
        case "avatar":
            let user = message.mentions.users.first() || message.author;
			
			var avatarEmbed = new Discord.RichEmbed()
			.setAuthor(`${user.username}`)
			.setImage(user.displayAvatarURL)
			.setColor("RANDOM")
			message.channel.sendEmbed(avatarEmbed)
			break;
			
        case "invitelink":
            var invitelinkEmbed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .addField("Balkanci Invitelink", "**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nBalkanci | Official**\n\nhttps://discord.gg/vSqwQNn\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
            message.channel.sendEmbed(invitelinkEmbed);
            break;
			

        case "serverpravila":
            var pravilaEmbed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .addField("Balkanci pravila", "**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n                                                          :rotating_light:PRAVILA:rotating_light:**\n\n1.Reklamiranje dozvoljeno samo u #⌈📲⌋reklamiranje =WARN❗️\n2.Nema vrijeđanja drugih=MUTE🔇\n3.Nema nacionalizma=BAN⛔️\n4.Nema dm reklamiranja=BAN⛔️\n5.Nema moljenja za free rankove=WARN❗️\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
            message.channel.sendEmbed(pravilaEmbed);
            break;        

		 
        case "majstori":
            var majstorEmbed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .addField("Majstori", "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n**Balkanci | Official**\n\n【:pushpin:】TheTony - Owner\n【:boom:】xMato54x - Bot Developer\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
            message.channel.sendEmbed(majstorEmbed);
            break;
			
			
			
        case "botinvite":
            var botinviteEmbed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .addField("Bot invite", "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n**Balkanci | Official**\n\nBot InviteLink - \nhttps://discordapp.com/oauth2/authorize?client_id=524944532890976270&permissions=8&scope=bot\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
            message.channel.sendEmbed(botinviteEmbed);
            break;
			

		
		// Admin komande, od sad pa nadalje
		

        case "ban":
            if(message.member.hasPermission("BAN_MEMBERS")) {
                let banUser = message.mentions.members.first();
                let banReason = args.slice(2).join(" ");
                let serverOwner = message.guild.owner;
    
                if(!banUser) {
                    var banUserNotFound = new Discord.RichEmbed()
                        .setColor(0xff0000)
                        .setDescription("**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nBalkanci | Official**\n\nNe mogu naci tog korisnika\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬");
                    message.channel.sendEmbed(banUserNotFound);
                    return;
                }
    
                if(!banUser.bannable) {
                    var biggerRoleBanError = new Discord.RichEmbed()
                        .setColor(0xff0000)
                        .setDescription("**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nBalkanci | Official**\n\nNe mozes banati tog igraca\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬");
                    message.channel.sendEmbed(biggerRoleBanError);
                    return;
                }
    
                if(!banReason) {
                    banReason = "Nema razloga";
                }
    
                var banUserEmbed = new Discord.RichEmbed()
                    .setColor(0xff0000)
                    .setDescription(":x: Informacije bana :x:")
                    .addField("Banovani korisnik", `${banUser}`)
                    .addField("Banovan od strane", message.author)
                    .addField("Razlog", banReason)
                message.channel.sendEmbed(banUserEmbed);
                banUser.ban();
                setTimeout(function(){
                    message.delete();
                }, 500);
            } else {
                var noBanPerm = new Discord.RichEmbed()
                    .setColor(0xff0000)
                    .setDescription("**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nBalkanci | Official**\n\nNemas dozvolu za to\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬");
                message.channel.sendEmbed(noBanPerm);
            }
            break;

        case "kick":
            if(message.member.hasPermission("KICK_MEMBERS")) {
                let kickUser = message.mentions.members.first();
                let kickReason = args.slice(2).join(" ");
                let serverOwner = message.guild.owner;
    
                if(!kickUser) {
                    var kickUserNotFound = new Discord.RichEmbed()
                        .setColor(0xff0000)
                        .setDescription("**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nBalkanci | Official**\n\nNe mogu pronaci tog korisnika\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬");
                    message.channel.sendEmbed(kickUserNotFound);
                    return;
                }
    
                if(!kickUser.kickable) {
                    var biggerRoleKickError = new Discord.RichEmbed()
                        .setColor(0xff0000)
                        .setDescription("**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nBalkanci | Official**\n\nNemozes kickati tog korisnika\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬");
                    message.channel.sendEmbed(biggerRoleKickError);
                    return;
                }
    
                if(!kickReason) {
                    kickReason = "Nema razloga";
                }
    
                var kickUserEmbed = new Discord.RichEmbed()
                    .setColor(0x4C924C)
                    .setDescription(":link: Informacije kicka :link:")
                    .addField("Kickovani korisnik", `${kickUser}`)
                    .addField("Kickovan od strane", message.author)
                    .addField("Razlog", kickReason)
                message.channel.sendEmbed(kickUserEmbed);
                kickUser.kick();
                setTimeout(function(){
                    message.delete();
                }, 500);
            } else {
                var noKickPerm = new Discord.RichEmbed()
                .setColor(0xff0000)
                .setDescription("**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nBalkanci | Official**\n\nNemas dozvolu za to\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬");
                message.channel.sendEmbed(noKickPerm);
            }
            break;

            case "say":
            if(message.member.hasPermission("ADMINISTRATOR")) {
                let sayStringToType = args.join(" ").slice(3);
        
                if(!sayStringToType) {
                var noSayStringToType = new Discord.RichEmbed()
                    .setColor(0xff0000)
                    .setDescription("**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nBalkanci | Official**\n\nMoras napisati sto ce bot reci\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬");
                message.channel.sendEmbed(noSayStringToType);
                return;
                }
        
                if(message.content.includes("@everyone") || message.content.includes("@here")) {
                var everyoneAndHereDisabledOnSayCommand = new Discord.RichEmbed()
                    .setColor(0xff0000)
                    .setDescription("**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nBalkanci | Official**\n\nZabranjeno je taganje everyone ili here\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬");
                message.channel.sendEmbed(everyoneAndHereDisabledOnSayCommand);
                return;
                }
        
                message.channel.sendMessage(sayStringToType);
                setTimeout(function(){
                    message.delete();
                }, 500);
            } else {
                var noSayPerm = new Discord.RichEmbed()
                    .setColor(0xff0000)
                    .setDescription("**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nBalkanci | Official**\n\nTi nemas dozovlu za to\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬");
                message.channel.sendEmbed(noSayPerm);
            }
            break;
			
        case "giveaway":
            if(message.member.hasPermission("ADMINISTRATOR")) {
			const giveawayEmbed = new Discord.RichEmbed()
                .addField("Balkanci giveaway", "**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nBalkanci | Official**\n\nPOCEO JE NOVI GIVEAWAY\nSVI SE PRIJAVITE\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
                .setTimestamp();
            message.channel.sendEmbed(giveawayEmbed);
            
			            } else {
                var noGiveawayPerm = new Discord.RichEmbed()
                    .setColor(0xff0000)
                        .addField("Balkanci giveaway", "**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nBalkanci | Official**\n\nTi nemas dozovlu za to\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
                message.channel.sendEmbed(noGiveawayPerm);
						}	
			break;
				
        case "takmicenje":
            if(message.member.hasPermission("ADMINISTRATOR")) {
			const takmicenjeEmbed = new Discord.RichEmbed()
                .addField("Balkanci takmicenje", "**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nBalkanci | Official**\n\nZapocelo je novo takmicenje\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
                .setTimestamp();
            message.channel.sendEmbed(takmicenjeEmbed);
            
			            } else {
                var noTakmicenjePerm = new Discord.RichEmbed()
                    .setColor(0xff0000)
                        .addField("Balkanci takmicenje", "**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nBalkanci | Official**\n\nTi nemas dozovlu za to\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
                message.channel.sendEmbed(noTakmicenjePerm);
						}
			break;
				
        case "musicevent":
            if(message.member.hasPermission("ADMINISTRATOR")) {
			const musiceventEmbed = new Discord.RichEmbed()
                .addField("Balkanci giveaway", "**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nBalkanci | Official**\n\nZapoceo je novi music event\nSvi udjite u kanal za muziku\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
                .setTimestamp();
            message.channel.sendEmbed(musiceventEmbed);
            
			            } else {
                var nomusiceventPerm = new Discord.RichEmbed()
                    .setColor(0xff0000)
                        .addField("Balkanci giveaway", "**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nBalkanci | Official**\n\nTi nemas dozovlu za to\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
                message.channel.sendEmbed(nomusiceventPerm);
						}
			break;


  
  
			
        case "dmall":
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nBalkanci | Official**\n\nTi nemas dozovlu za to\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬");
 
let msg = args.join(' ');
 
if(!msg || msg.length <= 0) return message.channel.send("**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nBalkanci | Official**\n\nMoras napisati poruku\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬");
 
message.guild.members.forEach(member => {
   setTimeout(function(){ //TimeOut za komandu.
      if(member.id == bot.user.id) return;
        member.send(`${msg}
 
From  **-** **${message.guild.name}** ( *${message.author.tag}*)
 
Copyright © 2018. xMato54x`) //Poruka koja se šalje memberu u dm koju ste vi odredili.
   
}, 3000);
 
});
  message.channel.send(`Poruka je poslana u DM kod **${message.guild.memberCount}** membera!
Poruka:
${msg}`) //Poruka koja se šalje kao odgovor da je poruka poslana u dm kod membera.
break;

case "gayrate": 
if (!message.member.hasPermission("SPEAK"))	return
	message.channel.send("**Gayrate =  " + Math.floor(Math.random() * 100 + 1) + "%**")	
break;

    case "afk":  
	let reason = args.join(' ') ? args.join(' ') : 'Trenutno sam AFK. Vratit cu se sto prije';


        return message.reply(`Sada si AFK : ${reason}`)  
    
	
    break;


	

	};
	
});
	

 

			
		
    

bot.login(config.token);
