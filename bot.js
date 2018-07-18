const http = require("http");
const url =
  "http://crystalmathlabs.com/tracker/api.php?type=update&player=ransty";

tweetIt();
setInterval(tweetIt, 60*5*1000);

function tweetIt() {
	http.get(url);
}
