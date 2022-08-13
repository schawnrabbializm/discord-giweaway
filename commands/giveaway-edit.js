const Discord = require('discord.js');
const db = require("quick.db")
const ms = require('ms');
exports.run = async (award, message, args) => {



  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send("Bu komutu kullanma izniniz yok.");
    return;
  }

  let gweep = args[0];
  let kazanan = args[1];
  let odul = args[2];
  let zaman = args[3];
  if (!gweep) return message.channel.send("Lütfen geçerli bir mesaj kimliği belirtin! (Kullanım: <ÇekilişID> <Kazanan> <Ödül> <Süre>)")
  if (!kazanan) return message.channel.send("Geçerli bir kazanan sayısı belirtmediniz! (Kullanım: <ÇekilişID> <Kazanan> <Ödül> <Süre>)")
  if (!odul) return message.channel.send("Ödül belirtmemişsiniz! (Kullanım: <ÇekilişID> <Kazanan> <Ödül> <Süre>)")
  if (!ms(zaman) && zaman) return message.channel.send("Geçerli bir saat biçimi kullanmadınız! (Kullanım: <ÇekilişeID> <Kazanan> <Ödül> <Süre>)")
  award.giveawaysManager.edit(gweep, {
    newWinnerCount: kazanan,
    newPrize: odul,
    addTime: ms(zaman)
  }).then(() => {
    message.channel.send("Başarılı! Çekiliş düzenlendi!");
  }).catch((err) => {
    message.channel.send("O çekilişi malesef bulamadım.");
  });
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'edit',
  description: '',
  usage: ''
};