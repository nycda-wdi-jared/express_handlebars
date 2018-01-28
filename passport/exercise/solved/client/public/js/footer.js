$(document).ready(function(){

	$.ajax({
		method: 'GET',
		url: '/api/footer'
	}).then((res) => {
		console.log(res)
		if(res){
			if(res.message === 'signed-in'){
				$('#footerP').text("Welcome " + res.user)
			}
		}
	})

});