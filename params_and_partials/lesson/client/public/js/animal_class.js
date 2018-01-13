$(document).ready(function(){
	var href = window.location.href;
	//console.log(href)
	//window.location.href is the url that you currently on
	var animal_class = href.substring(href.lastIndexOf("/") + 1, href.length);
	//console.log(animal_class)
	//also research substring and other string manipulation functions.
	//Create a separate file(s) to test out javascript on the side (will save you time)
	//and test out string methods like substring, lastIndexOf
	//and test out array method like map, filter, and forEach

	/*
		This message is in the main scope, so it will be hit once the page is loaded.
		Look for this route on the server side: /api/animal/class/:class
		I am using this so I can res.json data from the server to the client
		so I can do some jQuery stuff that the handlebars cant handle

		look at that console.log of animal_class, and see how it is going
		into the ajax route. When I am on the /animal/class/arachnida page,
		then this route would be /api/animal/class/arachnida, and arachnida
		is represented by req.params.class on the server side inside that route
	*/
	$.ajax({
		method: 'GET',
		url: `/api/animal/class/${animal_class}`
	}).then((res) => {
		//console.log(res)
		/*
			This is the data that is sent over from the server with res.json(animals) - line 64
		*/
		var animalImage, randomNum, url;
		var num;
		/*
			I am sending looping through this data and sending it into the giphy api
			Look at the ui and see how the information is being appended, and then look
			at the code and make the connections on how things function
			Look at your google inspect and review the elements, and make the connection
			on how what is going on in the jQuery is appending to the dom, and how it looks
			in the google inspect element
		*/
		for(var i = 0; i < res.length; i++){
			num = 0;
			url = 'http://api.giphy.com/v1/gifs/search?q=' + res[i].name.split(" ").join("+").toLowerCase() + '&api_key=dc6zaTOxFJmzC&limit=30';
			$.ajax({
				method: 'GET',
				url: url
			}).then((giphyRes) => {
				//console.log(giphyRes)
				randomNum = Math.floor(Math.random() * 30)
				//console.log(randomNum)
				animalImage = $('<img>',{
					src: giphyRes.data[randomNum].images.fixed_height.url
				});
				//console.log(num)
				//look for this class on the front end that I am also using
				//handlebars with do be dynamic -> animal-{{@index}}, that is how
				//this matches up with the handlebars
				$('.animal-' + num).append(animalImage);
				num++;
			})
		}
	})
})