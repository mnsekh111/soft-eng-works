var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');


////// FILL IN THE BLANKS

var token = "token " + "97f787c5394d6e4a8016831361f0050d9d526c33";
var userId = "mnsekh111";

 var urlRoot = "https://api.github.com";
// NCSU Enterprise endpoint:
// var urlRoot= "https://github.ncsu.edu/api/v3";

//getYourRepos(userId);
//listBranches(userId,"ase16");
createRepo();

function getYourRepos(userName)
{

	var options = {
		url: urlRoot + '/users/' + userName + "/repos",
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});

}

function listBranches(owner,repo)
{
	var options = {
		url: urlRoot +"/repos/"+owner+"/"+repo+"/"+"branches",
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});

}

function createRepo(){

	var options = {
		url: urlRoot +"/user/repos",
		method: 'POST',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		},
		json:{
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
	request(options, function (error, response, obj) 
	{
		console.log(obj);
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});

}


