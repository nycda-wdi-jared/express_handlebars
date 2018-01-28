$(document).ready(function(){

	$(document).on('click', '#main-page-logout-button', function(){		
		$.ajax({
			method: 'DELETE',
			url: '/api/logout-user'
		}).then(function(res){
			window.location.href = "/"
		});
	});

	$('#post-form').on('submit', function(e){
		e.preventDefault();

		if(message !== ""){
			var data = {
				/* What data is going in here? */
			}
			$.ajax({
				method: 'POST',
				url: '/api/create-post',
				dataType: 'json',
				data: JSON.stringify(data),
				contentType: 'application/json'
			}).then((res) => {
				$("#post-form-ta").val("");
				appendUserMessages();
			})
		} else {
			alert("Please Enter Text")
		}

	});

	var appendUserMessages = () => {
		/*
			- Append all the posts to the main_page.handlebars to the "messages-div"
			- Be sure to remove the dynamic div so that every time a message is submitted,
			it will clear the div and append the most up to date information from the db
		*/
	}
	appendUserMessages();

});