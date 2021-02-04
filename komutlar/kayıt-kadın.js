const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
if(!["791342787969679421", "791342695120896031"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) return message.channel.send(`Bu Komutu Kullanabilmek İçin Yetkin Bulunmuyor.`)
  
const kadin = message.guild.roles.cache.find(r => r.id === "791342801321328640")
const xx = message.guild.roles.cache.find(r => r.id === "791342801803280455")
const kayıtsız = message.guild.roles.cache.find(r => r.id === "791342804357873695")
const reglog = message.guild.channels.cache.find(c => c.id === "791342959374630913")
const genelchat = message.guild.channels.cache.find(g => g.id === "791342915032317952")

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(`Bir Kullanıcı Belirt.`)
if(!member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(`Bu Kullanıcı Sizle Üst/Aynı Pozisyondadır.`)
const x = message.guild.member(member)

let tag = "✩"
let isim = args[1]
let yas = Number(args[2])
if(!isim) return message.channel.send(`Bir İsim Belirt`)
if(!yas) return message.channel.send(`Bir Yaş Belirt`)

let bilgi = db.get(`yetkili.${member.id}`);  
db.add(`yetkili.${message.author.id}.kadin`,1 )
db.add(`yetkili.${message.author.id}.toplam`, 1)  
let toplami = db.fetch(`yetkili.${message.author.id}.toplam`)  

message.react('✅')
x.setNickname(`${tag} ${isim} | ${yas}`)
x.roles.add(kadin)
x.roles.add(xx)
x.roles.remove(kayıtsız)
//
x.setNickname(`${tag} ${isim} | ${yas}`)
x.roles.add(kadin)
x.roles.add(xx)
x.roles.remove(kayıtsız)


genelchat.send(`<@${member.id}>, Aramıza Hoş Geldin ! Umarım Keyifli Vakitler Geçirirsin.`)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kadın", "k", "woman", "girl", "kız"],
    permLevel: 0
};

exports.help = {
    name: "kadın"
}

