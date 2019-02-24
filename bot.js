const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const discord = require("discord.js");
const bot = new discord.Client();
const token = "secret-key";

bot.on("ready", () => {
  console.log("BEEP BOOP!");
});
 
bot.on("message", (message) => {
  if (message.content.toLowerCase().includes("BOT")) {
    message.channel.send("BOT!");
  }
});

bot.login(token);

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Bot is listening on port: ${ PORT }`))