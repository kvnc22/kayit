const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
module.exports = client => {
client.channels.get('712675958661971988').join()

  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
   var oyun = [
        prefix+"yardım",
        "Beyefendi - Kayıt Bot",
        "twitch.tv/mustibeyefendi",
        "☢️ Hata bulursanız mutlaka bildirin!",
        "🌈 Prefix | "+prefix, 
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/mustibeyefendi");
        }, 2 * 2500);
}
