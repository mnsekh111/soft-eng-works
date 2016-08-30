/**
 * Created by mns on 9/6/16.
 */
var config = require("./config.json");
var Forecast = require('forecast.io');
var options = {APIKey: config.FORECAST_IO_API_KEY};
var forecast = new Forecast(options);
var http = require("http");

exports.getForecast = function (callback) {
    http.get(config.URL_IP, function (response) {
        var ipdata = "";
        var ipjson = null;
        response.setEncoding("utf-8");
        if (response.statusCode != 200) {
            return null;
        }

        response.on('data', function (chunck) {
            ipdata = ipdata + chunck;
        });

        response.on('end', function () {
            ipjson = JSON.parse(ipdata);
            forecast.get(ipjson.lat, ipjson.lon, null, function (err, res, weather) {
                if (err) {
                    return;
                }
                if (callback){
                    console.log(weather)
                    callback(weather);
                }
            })
        })
    });
}

// getForecast(function (data) {
//     console.log(data)
// })