// Create privatized scope using a self-executing function
(function(){ //Creating a function
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),//Created variable resultsDIV equal to document.getElementById results
		searchInput = document.forms[0].search, // searchInput is equal to document.forms[0].search
		currentSearch = '' //Searching for ''
	;
	
	// Validates search query
	var validqte == function(query){ //Created variable validqte equal to function(query)
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) = " "){ //while loop with argument checking where a charter is at
			query = query.substring(1, query.length); //checking the substring and length of query
		};
		while(query.charAt(query.length-1) === ""){ //while loop with argument length-1 is equal to ""
			query = query.substring(0, query.length-1) //Query is equal to finding querys substring with argument of 0, and length-1
		
		// Check search length, must have 3 characters
		if(query.length < 3){ //If statement with argument if query.length is < 3
			alert("Your search query is too small, try again.); //If true alert the query is to small, try again
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus(); //Setting focus to searchInput
			return; //Return
		};
		
		search(query); //Search the query
	};
	
	// Finds search matches
	var search = function(query) //Variable search is equal to function(query)
		
		// split the user's search query string into an array
		var queryArray = query.join(" "); //Variable Array equal to query.join(" ") splitting the query into an array
		
		// array to store matched results from database.js
		var results = []; //Created array variable named results

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){ //for loop with arguments i=0, j=db.length, i<j, i++(increment i)
		
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|'); //Variable dbTitleEnd, each title ends with a "|"
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd); //Variable dbitem equal to db[i] lowercase.substring title
			
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){ //For loop looping through users search query words with the arguments
				var qitem = queryArray[ii].tolowercase(); //Variable qitem equal to saving a lowercase variable of the search keyword
				
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem); //Variable compare equal to dbitem.indexof(qitem) looking for the keyword
				if(compare !== -1){ //If statement with argument compare is not equal to -1
					results.push(db[i]); //Pushing db[i] into results array
				};
			;
		;
		
		results.sort(); //Sort the place of the array results and return array
		
		// Check that matches were found, and run output functions
		if(results.length = 0){ //If statement checking for matches
			noMatch(); //No match was found
		}else{ //Else statement
			showMatches(results); //Showing the results of the match
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){ //Variable noMatch is equal to a function
		var html = ''+ //Variable html equals ' '
			'<p>No Results found.</p>'+ //"No results found"
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'//"Try searching for 'JavaScript'. Just an idea." with a paragraph style
		;
		resultsDIV.innerHTML = html; //Modifying the html
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){ //Varaible showMatches equal to function(results)
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', //Variable html equal to "Results"
			title, //title
			url //Url
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].subString(0, titleEnd);
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){
		var query = searchInput.value;
		validqte(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	;

})();