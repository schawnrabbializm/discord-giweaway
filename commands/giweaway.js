const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
const settings = require('../settings.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = settings.prefix
exports.run = async (bot, msg, args) => {

  const çekiliş = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setFooter(`${msg.author.username} Başarıyla Çekiliş Komutunu Kullandı!`, msg.author.avatarURL)
    .setDescription('Komutlar/Commands', false)
    .addField('__Çekliş Başlat__', '`çekiliş-başlat #kanal süre kazanan_sayısı Ödül` \nBelirtilen Kanalda Çekiliş Başlatırsınız', false)
    .addField('__Çekiliş Yenile__', '  `çekiliş-yenile mesaj_id` \n Belirtilen İd deki Çekilişi Yeniler', true)
    .addField('__Çekiliş Liste__', ' `çekiliş-liste` \nSunucudaki Aktif Çekilişleri Listeler', true)
    .addField('__Çekiliş Bitir__', ' `çekiliş-bitir mesaj_id` \nBelirtilen İd deki Çekilişi Sonlandırır.', false)

  msg.channel.send(çekiliş)

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['çekiliş', 'giveaway', 'schawn'],
  kategori: 'yardım',
  permLevel: 0
};
exports.help = {
  name: 'çekiliş',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'çekiliş'
};