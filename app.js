var mongo = require('mongodb').MongoClient;
var prompt = require('prompt-sync')();
var url = 'mongodb://localhost/restaurant_db';

mongo.connect(url, function(err, db){
	var collection = db.collection('restaurants');

//DISPLAY ALL
	// var allChoice = prompt("Type 'all' and press enter to display all");
	
//DISPLAY INDIVIDUAL BY NAME
	// var singleChoice = prompt("Enter a restaurant name");
	

//POST//
//--------
//VARIABLES
	// var addPropertyKey = prompt("enter a property key");
	// var addPropertyValue = prompt("enter a property value");
		
//METHOD
		// collection.insert({
		// 	"name" : addRestaurantName,
		// 	addPropertyKey : addPropertyValue
		// });



	

////////////////////////////////////////////////////////////
/////////////////HW PART 1//////////////////////////////////
////////////////////PUT///////////////////////////////////	
//VARIABLES
	// var restaurantName = prompt("Enter a restaurant to edit");
	// var yelpUrl = prompt('enter a yelp url');
	// var editKey = prompt("enter the property to update");
	// var editValue = prompt("enter the new property value");
		

//METHOD
// 	collection.update(
// //WHAT IS GETTING UPDATED		
// 	{"name" : restaurantName},
// //NEW PROPERTY VALUES	
// 	{"name" : restaurantName,
// 	 "yelp" : yelpUrl,
// 	editKey : editValue});


////////////////////////////////////////////////////////////
/////////////////HW PART 2//////////////////////////////////		
////////////////////Delete//////////////////////////////////

//VARIABLES	
	var toRemove = prompt("Enter a restaurant to remove");
	console.log(toRemove);
	
//METHOD
	collection.remove({ 'name' : toRemove });


////////////////////////////////////////////////////////////
/////////////////LOG DB ARRAY TO CHECK//////////////////////////////////	

		collection.find().toArray(function(err,doc){
			console.log(doc);
	});
	
});



	// if(allChoice === "all") {
	// collection.find().toArray(function(err, docs) {
	// 	console.log(docs);
		
	
