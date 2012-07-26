var express = require('express');
var app = express.createServer();

//Serving Static files
app.use(express.static('/public'));
app.listen(3333); //Remember to change port when deploying on c9 and Azure

//For writing RESTful APIs
app.get('/api', function(req, res) {
	res.send('Ok');
});


//TODO handle audio upload
app.get('/api/audio', function(req, res) {
	res.send('Ok');
});

app.get('/api/audio/merge', function(req, res) {

	var startTime = new Date().getTime();
	//TODO Handle Merging of multiple audio clips
	
	//FFMPEG Command to join multiple audio clips

	success();

	function success () {
		res.send('Ok ' + (newDate().getTime() - startTime));
	}

});


app.get('/api/audio/overlay', function(req, res) {

	var startTime = new Date().getTime();
	
	// Run FFMPEG Command to merge new audio and video
	// ffmpeg -i source.mkv -i voice_over.mp3 \
	// 	-vcodec copy \
	// 	-acodec copy \
	// 	destination.mkv \
	// 	-newaudio
	success();

	function success () {
		res.send('Ok ' + (newDate().getTime() - startTime));
	}

});

app.get('/api/video/pull/:url', function (req, res) {
	console.log(req.param.url);
	res.send(req.param.url);
	// Youtube DL
});