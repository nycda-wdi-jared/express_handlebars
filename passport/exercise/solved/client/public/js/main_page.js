$(document).ready(function(){

	/*
		This commented out code is being handled in the handlebars file
	*/

	// $.ajax({
	// 	method: 'GET',
	// 	url: '/api/signed-in'
	// }).then(function(res){
	// 	if(res.message){
	// 		if(res.message === "signed-in"){
	// 			var aProfile = $('<a>',{
	// 				type: 'button',
	// 				href: '/profile/' + res.user_id,
	// 				text: 'Profile'
	// 			});
	// 			aProfile.addClass('btn btn-success sign-buttons');
	// 			var aLogout = $('<a>',{
	// 				type: 'button',
	// 				text: 'Logout',
	// 				id: 'main-page-logout-button'
	// 			});
	// 			aLogout.addClass('btn btn-danger sign-buttons');

	// 			$('#direct-buttons').append(aProfile).append(aLogout);

	// 			$('#sign-up-button').attr('disabled', true);
	// 			$('#sign-in-button').attr('disabled', true);
	// 		}
	// 	} else {
	// 		$('#sign-up-button').attr('disabled', false);
	// 		$('#sign-in-button').attr('disabled', false);
	// 	}
	// });

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
		var message = $("#post-form-ta").val();

		if(message !== ""){
			var data = {
				message: $("#post-form-ta").val(),
				userID: $(this).data('id')
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
		$.ajax({
			method: 'GET',
			url: '/api/all-users-posts'
		}).then((usersPosts) => {
			//console.log(usersPosts)
			$('#user-messages-div').remove();
			var messagesDiv = $('<div id="user-messages-div">');
			messagesDiv.addClass('well text-center');

			var messagesHeader = $('<h3>');
			messagesHeader.text("Messages");
			messagesDiv.append(messagesHeader);

			var messagesOl = $('<ul id="messages-ul">'); 
			var messageLi;
			usersPosts.forEach((userPost) => {
				messageLi = $('<li>');
				messageLi.text(userPost.name + ": " + userPost.message + " - " + userPost.createdAt);
				messagesOl.append(messageLi)
			});
			messagesDiv.append(messagesOl)
			$('#messages-div').append(messagesDiv);
		});
	}
	appendUserMessages();

});