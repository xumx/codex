//Parse.initialize("ABYja2SjqXUsZsZFAojcPaaLlzGH48Uc1Lqvf2Fh", "C10LCWNl7ERIyIGfhHJ4sWVEkKclgfP1Sq2LQfWu");

var player;

var videoController = function($scope) {
		$scope.timeMarkers = [];

		$scope.init = function() {

			$(document).bind('keypress','space', function() {
				$scope.timeMarkers.push(player.getCurrentTime());
			});

			$('#mark').click(function () {
				$scope.timeMarkers.push(player.getCurrentTime());
			});

			setInterval(function() {
				$scope.videotime = player.getCurrentTime().toFixed(2);
				$scope.$digest();
			}, 1000);
		};
	};

function onYouTubePlayerReady(playerId) {
	console.log(playerId);

	player = document.getElementById("myytplayer");
	angular.element(document.getElementById('main')).scope().init();

	$('#loadvideo').click(function(e) {
		e.preventDefault();
		player.loadVideoById("J0xbjIE8cPM");
	});

	$('#playvideo').click(function(e) {
		e.preventDefault();
		player.playVideo();
	});

	$('#pausevideo').click(function(e) {
		e.preventDefault();
		player.pauseVideo();
	});

}


$('#submit').click(function() {
	var video_url = $('#url').val();
	var Lesson = Parse.Object.extend("lesson");
	var lesson = new Lesson();

	lesson.save({
		video_url: video_url,
		language: "bananalish"
	}, {
		success: function(object) {

		}
	});
});