var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');


////// FILL IN THE BLANKS

var token = "token " + "d61d4af56d9713426a6fdb7092fd09b69c67bd00";
var userId = "smnatara";

// var urlRoot = "https://api.github.com";
// NCSU Enterprise endpoint:
var urlRoot = "https://github.ncsu.edu/api/v3";

//getYourRepos(userId);
listBranches(userId, "HW1");
//createRepo();

/**
 * Module to get all repositories for the authenticated user
 * @param userName
 */
function getYourRepos(userName) {

    var options = {
        url: urlRoot + '/user/repos',
        method: 'GET',
        headers: {
            "User-Agent": "EnableIssues",
            "content-type": "application/json",
            "Authorization": token
        }
    };

    // Send a http request to url and specify a callback that will be called upon its return.
    request(options, function (error, response, body) {
        var obj = JSON.parse(body);
        for (var i = 0; i < obj.length; i++) {
            var name = obj[i].name;
            console.log(name);
        }
    });

}

/**
 * Module to list branches in a given repo under an owner
 * @param owner
 * @param repo
 */
function listBranches(owner, repo) {
    var options = {
        url: urlRoot + "/repos/" + owner + "/" + repo + "/" + "branches",
        method: 'GET',
        headers: {
            "User-Agent": "EnableIssues",
            "content-type": "application/json",
            "Authorization": token
        }
    };

    // Send a http request to url and specify a callback that will be called upon its return.
    request(options, function (error, response, body) {
        var obj = JSON.parse(body);
        console.log("Branches in " + repo);
        //console.log( obj );
        for (var i = 0; i < obj.length; i++) {
            var name = obj[i].name;
            console.log("\t -->" + name);
        }
    });
}

function createRepo() {

    var options = {
        url: urlRoot + "/user/repos",
        method: 'POST',
        headers: {
            "User-Agent": "EnableIssues",
            "content-type": "application/json",
            "Authorization": token
        },
        json: {
            "name": "SE-Repo-Create",
            "description": "Created using Github RESP Call",
            "homepage": "https://github.com",
            "private": false,
            "has_issues": true,
            "has_wiki": true,
            "has_downloads": true
        }
    };

    // Send a http request to url and specify a callback that will be called upon its return.
    request(options, function (error, response, obj) {
        console.log(obj);
        for (var i = 0; i < obj.length; i++) {
            var name = obj[i].name;
            console.log(name);
        }
    });

}


