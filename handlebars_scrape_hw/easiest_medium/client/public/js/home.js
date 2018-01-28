$(document).ready(function(){
	$('#previous-button').hide();
	$.ajax({
		method: 'GET',
		url: '/api/scrape'
	}).then((res) => {
		appendTeamInfo(res[0]);

		var num = 0;

		$('#next-button').on('click', function(){
			num++;
			appendTeamInfo(res[num])

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
			appendTeamInfo(res[num])

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

	const appendTeamInfo = (index) => {
		$('#jq-team-div').remove();
		var teamDiv = $('<div id="jq-team-div">');
		teamDiv.css({display: 'inline-flex'})

		var teamYpg = $('<h4>', {
			text: index.team + " - " + index.ypg
		});
		teamYpg.css({color: 'red'})

		teamDiv.append(teamYpg)
		$('#nfl-team').append(teamDiv);
	}

	$('.team-tr').hover(function(){
		var team_color = $(this).data('team_color');
		$(`#${$(this).data('team_abbr')}-tr`).css('background-color', `#${team_color}`)
	});

	$('.team-tr').mouseleave(function(){
		$(`#${$(this).data('team_abbr')}-tr`).css('background-color', 'white')
	})

});