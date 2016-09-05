var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');


var token = "token " + "d61d4af56d9713426a6fdb7092fd09b69c67bd00";
var userId = "smnatara";

// var urlRoot = "https://api.github.com";
// NCSU Enterprise endpoint:
var urlRoot = "https://github.ncsu.edu/api/v3";


/**
 * Module to get all repositories for the authenticated user
 * @param userName
 */
function getYourRepos(userName) {

    var options = {
        url: urlRoot + '/user/repos',
        method: 'GET',
        headers: {
            "User-Agent": "sekhar-webstorm-client",
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
            "User-Agent": "sekhar-webstorm-client",
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

/**
 * Module to create a repository. If the repository with the @name exists, then
 * it is deleted and created again.
 *
 * @param name
 * @param description
 * @param homepage
 * @param priv
 */

function createRepo(name, description, homepage, priv) {

    var options = {
        url: urlRoot + "/user/repos",
        method: 'POST',
        headers: {
            "User-Agent": "sekhar-webstorm-client",
            "content-type": "application/json",
            "Authorization": token
        },
        json: {
            "name": name,
            "description": description,
            "homepage": homepage,
            "private": priv,
            "has_issues": true,
            "has_wiki": true,
            "has_downloads": true
        }
    };

    // Send a http request to url and specify a callback that will be called upon its return.
    request(options, function (error, response, body) {
        if (typeof body === "object") {

            var errors = body["errors"];
            if (errors != null && errors.length > 0) {

                console.log("Error while creating a repository");
                errors.map(function (error) {
                    console.log(error["message"])
                });

                //function closure to send this function to deleteRepo()
                deleteRepo(userId, name, function () {
                    createRepo(name, description, homepage, priv)
                });
            } else {
                console.log("Repository created successfully");
                console.log(body);
            }
        }
    });

}

/**
 * Delete a repo (use this to test create Repo)
 * @param owner
 * @param name
 */
function deleteRepo(owner, name, next) {
    console.log("Deleting the repository " + name);
    var options = {
        url: urlRoot + "/repos/" + owner + "/" + name,
        method: 'DELETE',
        headers: {
            "User-Agent": "sekhar-webstorm-client",
            "content-type": "application/json",
            "Authorization": token
        }
    };

    // Send a http request to url and specify a callback that will be called upon its return.
    request(options, function (error, response, body) {
        if (error == null) {
            console.log("Repository deleted successfully");
            if (next != null) {
                next();
            }
        }
    });
}

/**
 * Module to create an issue to the given repository
 * @param owner
 * @param repo
 * @param title
 * @param body
 */
function createIssue(owner, repo, title, body) {
    var options = {
        url: urlRoot + "/repos/" + owner + "/" + repo + "/issues",
        method: 'POST',
        headers: {
            "User-Agent": "sekhar-webstorm-client",
            "content-type": "application/json",
            "Authorization": token
        },
        json: {
            "title": title,
            "body": body
        }
    };

    // Send a http request to url and specify a callback that will be called upon its return.
    request(options, function (error, response, body) {
        console.log("Issue created successfully");
        if (error == null) {
            if (typeof body === "object") {
                console.log(body)
            }
        }
    });
}

function enableWiki(owner, repo) {
    var options = {
        url: urlRoot + "/repos/" + owner + "/" + repo,
        method: 'PATCH',
        headers: {
            "User-Agent": "sekhar-webstorm-client",
            "content-type": "application/json",
            "Authorization": token
        },
        json: {
            "name":repo,
            "has_wiki": true
        }
    };

    // Send a http request to url and specify a callback that will be called upon its return.
    request(options, function (error, response, body) {
        console.log("Repo patched successfully");
        if (error == null) {
            if (typeof body === "object") {
                console.log(body)
            }
        }
    });
}

// --------------------------------------- test -----------------------------------

//getYourRepos(userId);
//listBranches(userId, "HW1");
//createRepo("SW_Sample", "Sample repo created for HW1", "www.google.com", true);
//createIssue(userId, "SW_Sample", "Sample Issue", "This is a sample issue");
enableWiki(userId,"SW_Sample");

