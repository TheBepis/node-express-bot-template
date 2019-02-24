const express = require('expr;ess')
const path = require('path');
const PORT = process.env.PORT || 5000;
const https = require("https");
const secToPing = 300000;
const discord = require("discord.js");
const bot = new discord.Client();
const token = "secret-key";

// Pings app to keep alive
setInterval(function() {
    https.get("http://<your app name>.herokuapp.com");
}, secToPing); // every 5 minutes (300000)

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