$(document).ready(function(){

	$(document).on('click', '.song-row', function(){
		var songName = $(this).data('song_name').split(" ").join("+").toLowerCase();
		window.location.href = '/api/song-lyrics/' + songName;
	});

});