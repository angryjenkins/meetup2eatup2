//get client data
console.log('yelp module loaded.');

var yelp      = require("node-yelp");
var path      = require('path');

var userdata  = require('./app/data/userdata.js');
var listings  = require('./app/data/listings.js')

 module.exports=function(app){

app.get('/data/questions',function(req,res){
  res.json(userdata)
});

app.post('/data/questions',function(req,res){
  console.log('in yelp.js')
  userdata.push(req.body)
  
  res.json(true);
  console.log(req.body)
  
var x       ='steve'
var client  = yelp.createClient({
  oauth: {
    "consumer_key": "blnUGOa1xqRIq5Kvk2NIiw",
    "consumer_secret": "k-VIMJNVzfFn8yA0olc9P2Rk7Os",
    "token": "mntH_9Niv9kfvf03XW-mPDQUm2wkqiTx",
    "token_secret": "g-EzbDLsWt8bEAcTxhYFBQNqXuQ"
  },
  
  // Optional settings: 
  httpClient: {
    maxSockets: 25  // ~> Default is 10 
  }
});
 

var userLocation=userdata[userdata.length-1].location;
var userFood=userdata[userdata.length-1].food;

console.log(userFood, userLocation);

client.search({
  terms: "food",
  location: ""+userLocation+"",
  category_filter:""+userFood+"",
}).then(function (data) {
  var place=[];
  var businesses = data.businesses;
  var location = data.region;

  console.log(data.businesses.categories)

  // console.log(data.businesses[0].name)
  // console.log(data.businesses[1].name)
  // console.log(data.businesses[2].name)
  // console.log(data.businesses[3].name)
  // console.log(data.businesses[4].name)
  // console.log(data.businesses[5].name)
  // console.log(data.businesses[6].name)
  // console.log(data.businesses[7].name)
  // console.log(data.businesses[8].name)
  // console.log(data.businesses[9].name)
  // console.log(data.businesses[10].name)
  // console.log(data.businesses[11].name)
  //print out all resteraunts within

  var yelpResults = [];

  for(var i=0;i<data.businesses.length;i++){

    var listing = data.businesses[i];

    var business = {
      name: listing.name,
      rating: listing.rating,
      address: listing.location.display_address,
      lat: listing.location.coordinate.latitude,
      lng: listing.location.coordinate.longitude
    }

    yelpResults.push(listing);

  }

  listings.push(yelpResults);
  
  console.log(listings[listings.length-1]);
  console.log(data.region)
    // 
});
 
 
client.business("grand-place-bruxelles-2", {
  cc: "US"
}).then(function (data) {
  // ... 
});
});




}