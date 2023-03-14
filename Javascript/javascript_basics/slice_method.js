var tweet = prompt("Compose your tweet: "); 
var tweetCount = tweet.length; 
var tweetSlice = tweet.slice(0, 180 - 1); 
alert(tweetSlice + "\n\nYou are " + (tweetCount - 180) + " characters over the limit. "); 