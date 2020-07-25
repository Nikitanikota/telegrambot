require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, {polling: true});

// ---------- LOGGIN FEATURES ----------
var fs = require('fs');
var util = require('util');
const { abort } = require('process');
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'a'});
var log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};
// ---------- LOGGIN FEATURES END ----------

// ---------- FAST ANSWERS END ----------
bot.on('message', (msg) => {  
	let text = msg.text
	if (text =="/start") {
		console.log("works")
		var BotStart = true
		var stage = 1
		var stageq = 1
	}
	var textl = text.length
	if (BotStart == true) {
		bot.sendMessage(msg.chat.id, "Welcome")
		while (stage == 1) {

			if (textl > 10) {
				console.log("work")
			}
			if (stageq == 1) {

				bot.sendMessage(msg.chat.id, "Welcome2")
				console.log("stageq1");

			} 
			var stageq = 0


		}

	}
});