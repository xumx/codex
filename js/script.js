//Parse.initialize("ABYja2SjqXUsZsZFAojcPaaLlzGH48Uc1Lqvf2Fh", "C10LCWNl7ERIyIGfhHJ4sWVEkKclgfP1Sq2LQfWu");
var player;

//Document Ready
$(function() {

	$.jRecorder();

});



//Defining Marker Object
function Marker(id) {
	this.id = id;
	this.time = player.getCurrentTime();

	this.init = function() {
		console.log(id);

		//Assign Controlling Buttons
		$('#record-' + id).click(function() {
			$(this).button('loading');
			$.jRecorder.record(30); //record up to 30 sec and stops automatically
		});

		$('#stop-' + id).click(function() {
			$(this).prev().button('reset');
			$.jRecorder.stop();
		});

		$('#save-' + id).click(function() {
			alert('Saving is not done yet');
			$.jRecorder.sendData();
		});

	};
}

// Video Control
var videoController = function($scope) {
		$scope.timeMarkers = [];

		$scope.init = function() {
			var id = 0;

			function generateId() {
				return id++;
			}

			function newMarker() {
				m = new Marker(generateId());
				$scope.timeMarkers.push(m);
				$scope.$digest();
				m.init();
			}

			function deleteMarker(event) {

			}

			$(document).bind('keypress', 'space', newMarker);
			$('#mark').click(newMarker);
			//$('#deleteMarker').click(deleteMarker);

			setInterval(function() {
				$scope.videotime = Math.floor(player.getCurrentTime().toFixed(0)/60) + ":" + player.getCurrentTime().toFixed(0)%60;
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