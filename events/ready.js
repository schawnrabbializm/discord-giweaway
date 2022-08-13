const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const settings = require("../settings.json");
var prefix = settings.prefix;

module.exports = async client => {
  var oyun = [prefix + "schâwn" + prefix + "Créated by schâwn"];

  setInterval(async () => {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], { type: "LISTENING" }); //WATCHING //PLAYING //LISTENING // STREAMING = BUNU YAPAMIYACAK KADAR 
  }, 18000);                                                    //                                  SALAK OLANINIZ VARMI CİDDEN NEYSE
  client.user.setStatus("online"); //online //dnd //idle                                           { type: "STREAMING", url: "https://www.twitch.tv/schawnrabbializm" }  
  console.log("The bot is logged in the bot is ready")                                             // DEGİS BUNLA OLSUN AMK DKJASHDJKASBCKJ                                           
};

