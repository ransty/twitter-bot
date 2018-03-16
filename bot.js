var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

const http = require("http");
const url =
  "http://crystalmathlabs.com/tracker/api.php?type=update&player=ransty";

tweetIt();
setInterval(tweetIt, 60*5*1000);

function tweetIt() {
	var r = Math.floor(Math.random()*1000);
	var tweet = {
		status: 'random number ' + r + ' #randomgenerator'
	}
	
	http.get(url);
	T.post('statuses/update', tweet, tweeted);
	
	function tweeted(err, data, response) {
		if (err) {
			console.log('Something went wrong!');
		} else {
			console.log('It worked!');
		}//Fiz urself heroku
	}
}
