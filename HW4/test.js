var shit = require("shit.js");
function a(param1, param2) {
    if (param1 > param2 && param2 < param1 && param1 < param1) {
    }
    for (i = 0; i < 10 && i < 20; i++) {
    }
}

function Crazy(argument) {

    var date_bits = element.value.match(/^(\d{4})\-(\d{1,2})\-(\d{1,2})$/);
    var new_date = null;
    if (date_bits && date_bits.length == 4 && parseInt(date_bits[2]) > 0 && parseInt(date_bits[3]) > 0)
        new_date = new Date(parseInt(date_bits[1]), parseInt(date_bits[2]) - 1, parseInt(date_bits[3]));

    var secs = bytes / 3500;

    if (secs < 59) {
        return secs.toString().split(".")[0] + " seconds";
    }
    else if (secs > 59 && secs < 3600) {
        var mints = secs / 60;
        var remainder = parseInt(secs.toString().split(".")[0]) -
            (parseInt(mints.toString().split(".")[0]) * 60);
        var szmin;
        if (mints > 1) {
            szmin = "minutes";
        }
        else {
            szmin = "minute";
        }
        return mints.toString().split(".")[0] + " " + szmin + " " +
            remainder.toString() + " seconds";
    }
    else {
        var mints = secs / 60;
        var hours = mints / 60;
        var remainders = parseInt(secs.toString().split(".")[0]) -
            (parseInt(mints.toString().split(".")[0]) * 60);
        var remainderm = parseInt(mints.toString().split(".")[0]) -
            (parseInt(hours.toString().split(".")[0]) * 60);
        var szmin;
        if (remainderm > 1) {
            szmin = "minutes";
        }
        else {
            szmin = "minute";
        }
        var szhr;
        if (remainderm > 1) {
            szhr = "hours";
        }
        else {
            szhr = "hour";
            for (i = 0; i < cfield.value.length; i++) {
                var n = cfield.value.substr(i, 1);
                if (n != 'a' && n != 'b' && n != 'c' && n != 'd'
                    && n != 'e' && n != 'f' && n != 'g' && n != 'h'
                    && n != 'i' && n != 'j' && n != 'k' && n != 'l'
                    && n != 'm' && n != 'n' && n != 'o' && n != 'p'
                    && n != 'q' && n != 'r' && n != 's' && n != 't'
                    && n != 'u' && n != 'v' && n != 'w' && n != 'x'
                    && n != 'y' && n != 'z'
                    && n != 'A' && n != 'B' && n != 'C' && n != 'D'
                    && n != 'E' && n != 'F' && n != 'G' && n != 'H'
                    && n != 'I' && n != 'J' && n != 'K' && n != 'L'
                    && n != 'M' && n != 'N' && n != 'O' && n != 'P'
                    && n != 'Q' && n != 'R' && n != 'S' && n != 'T'
                    && n != 'U' && n != 'V' && n != 'W' && n != 'X'
                    && n != 'Y' && n != 'Z'
                    && n != '0' && n != '1' && n != '2' && n != '3'
                    && n != '4' && n != '5' && n != '6' && n != '7'
                    && n != '8' && n != '9'
                    && n != '_' && n != '@' && n != '-' && n != '.') {
                    window.alert("Only Alphanumeric are allowed.\nPlease re-enter the value.");
                    cfield.value = '';
                    cfield.focus();
                }
                cfield.value = cfield.value.toUpperCase();
            }
            return;
        }
        return hours.toString().split(".")[0] + " " + szhr + " " +
            mints.toString().split(".")[0] + " " + szmin;
    }
}