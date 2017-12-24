$(document).ready(function(){
	var href = window.location.href;
	var animal_class = href.substring(href.lastIndexOf("/") + 1, href.length);

	$.ajax({
		method: 'GET',
		url: `/api/animal/class/${animal_class}`
	}).then((res) => {
		var animalImage, randomNum, url;
		var num;
		for(var i = 0; i < res.length; i++){
			num = 0;
			url = 'http://api.giphy.com/v1/gifs/search?q=' + res[i].name.split(" ").join("+").toLowerCase() + '&api_key=dc6zaTOxFJmzC&limit=30';
			$.ajax({
				method: 'GET',
				url: url
			}).then((giphyRes) => {
				randomNum = Math.floor(Math.random() * 30)
				animalImage = $('<img>',{
					src: giphyRes.data[randomNum].images.fixed_height.url
				});
				$('.animal-' + num).append(animalImage);
				num++;
			})
		}
	})
})