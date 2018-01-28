$(document).ready(function(){
	$('#previous-button').hide();
	$.ajax({
		method: 'GET',
		url: '/api/stats'
	}).then((res) => {
		var overallDiv = $('<div id="overall-div">');
		res.sort(function(a,b){
			return (a.ppg < b.ppg) ? 1 : ((b.ppg < a.ppg) ? -1 : 0);
		});
		appendNameCommentBox(overallDiv, res[0].id);
		appendTeamInfo(overallDiv, res[0]);
		appendComments(res[0].id);

		var num = 0;

		$('#next-button').on('click', function(){
			num++;
			appendTeamInfo(overallDiv, res[num]);
			appendNameCommentBox(overallDiv, res[num].id);
			appendComments(res[num].id);

			if(num < 1){
				$('#previous-button').hide();
			} else {
				$('#previous-button').show();
			}

			if(num == (res.length - 1)){
				$('#next-button').hide();
			} else {
				$('#next-button').show();
			}
		});

		$('#previous-button').on('click', function(){
			num--;
			appendTeamInfo(overallDiv, res[num]);
			appendNameCommentBox(overallDiv, res[num].id);
			appendComments(res[num].id);

			if(num < 1){
				$('#previous-button').hide();
			} else {
				$('#previous-button').show();
			}

			if(num == (res.length - 1)){
				$('#next-button').hide();
			} else {
				$('#next-button').show();
			}
		});

	});

	const appendTeamInfo = (overallDiv, index) => {
		$('#jq-team-div').remove();
		var teamDiv = $('<div id="jq-team-div">');
		teamDiv.css({display: 'inline-flex'})

		var teamYpg = $('<h4>', {
			text: index.team + " - " + index.ppg
		});
		teamYpg.css({color: 'red'})

		teamDiv.append(teamYpg);
		overallDiv.append(teamDiv);
		$('#nfl-team').append(overallDiv);
	}

	const appendNameCommentBox = (overallDiv, id) => {
		$('#name-comment-div').remove();
		var nameCommentDiv = $('<div id="name-comment-div">');

		var nameLabel = $('<label>');
		nameLabel.text("Name");
		var nameInput = $('<input>', {
			type: 'text',
			id: 'name-input'
		});

		var messageLabel = $('<label>');
		messageLabel.text('Message');
		var commentTA = $('<textarea>', {
			id: "comment-text-area",
			height: '150px',
			width: '215px'
		});

		var submitButton = $('<button>', {
			text: 'Add Comment',
			class: 'btn btn-info',
			id: 'add-comment-button'
		});
		submitButton.attr('data-id', id);

		nameCommentDiv.append(nameLabel).append("<br>").append(nameInput).append("<br>").append(messageLabel).append("<br>").append(commentTA).append("<br>").append(submitButton);
		$('#inputDiv').append(nameCommentDiv);
	}

	const appendComments = (id) => {
		$("#all-comments").remove()

		var allComments = $('<div id="all-comments">');
		allComments.css({borderStyle: 'solid', height: '300px'})

		var commentsHeader = $('<h4>');
		commentsHeader.text('Team Comments');
		commentsHeader.addClass("text-center")
		allComments.append(commentsHeader);

		$.ajax({
			method: 'GET',
			url: '/api/comments'
		}).then((comments) => {
			var userComments = [];
			for(var i = 0; i < comments.length; i++){
				if(comments[i].stat_id == id){
					userComments.push(comments[i]);
				}
			}
			var commentsOl = $('<ol id="comments-ol">');
			var commentLi;
			for(var i = 0; i < userComments.length; i++){
				commentLi = $('<li>');
				commentLi.text(userComments[i].name + ": " + userComments[i].message);
				commentsOl.append(commentLi);
			}
			allComments.append(commentsOl);
		})

		$('#comments-div').append(allComments);
	}

	$(document).on('click', '#add-comment-button', function(){
		var name = $('#name-input').val();
		var message = $('#comment-text-area').val();

		if(name !== "" && message !== ""){
			var inputs = {
				name: name,
				message: message,
				stat_id: $(this).data('id')
			}
			$.ajax({
				method: 'POST',
				url: '/api/message',
				dataType: 'json',
				data: JSON.stringify(inputs),
				contentType: 'application/json'
			}).then((res) => {
				console.log(res)
				var name = $('#name-input').val("");
				var message = $('#comment-text-area').val("");

				var commentLi = $('<li>');
				commentLi.text(res.name + ": " + res.message);
				$('#comments-ol').append(commentLi);
			});
		} else {
			alert("Please fill out both fields");
		}
	});

});