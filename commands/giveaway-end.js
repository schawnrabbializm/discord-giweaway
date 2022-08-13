const ms = require('ms');
const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  if (!message.member.permissions.has('ADMINISTRATOR')) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)

    message.channel.send(embed);
    return;
  }

  if (!args[0]) {
    return message.channel.send('Bir çekiliş kimliği **belirtmelisin!**');
  }

  let giveaway =
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

  if (!giveaway) {
    return message.channel.send('Sunucuda böyle bir çekiliş **bulunmuyor!** `' + args.join(' ') + '`.');
  }

  client.giveawaysManager.edit(giveaway.messageID, {
    setEndTimestamp: Date.now()
  })
    .then(() => {
      message.channel.send('Çekiliş kısa sürede bitecek ' + (client.giveawaysManager.options.updateCountdownEvery / 1000) + ' saniye...').then(a => a.delete({ timeout: 10000 }));
    })
    .catch((e) => {
      if (e.startsWith(`Bu çekiliş kimliği ${giveaway.messageID} zaten bitti.`)) {
        message.channel.send('Bu çekiliş daha önceden sona ermiş!');
      } else {
        console.error(e);
        message.channel.send('Bir hata oluştu...');
      }
    });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çekiliş-sil'],
  permLevel: 0
};

exports.help = {
  name: 'çekiliş-bitir',
  description: 'çekiliş',
  usage: 'çekiliş-bitir'
};