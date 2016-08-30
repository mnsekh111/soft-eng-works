var config = require("./config.json");
var fs = require("fs");
var Botkit = require('botkit');
var weather = require("./weather.js");

//console.log(config.FORECAST_IO_API_KEY + " " + config.WEATHER_BOT_API_TOKEN)

var controller = Botkit.slackbot({
    debug: false

});

// connect the bot to a stream of messages
controller.spawn({
    token: config.WEATHER_BOT_API_TOKEN,
}).startRTM()

// give the bot something to listen for.
//controller.hears('string or regex',['direct_message','direct_mention','mention'],function(bot,message) {
controller.hears('weather', ['mention', 'direct_mention'], function (bot, message) {
    console.log("shit")
    weather.getForecast(function (data) {
        bot.reply(message,JSON.stringify(data.currently));
    });

});


