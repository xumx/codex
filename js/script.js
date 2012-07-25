Parse.initialize("ABYja2SjqXUsZsZFAojcPaaLlzGH48Uc1Lqvf2Fh", "C10LCWNl7ERIyIGfhHJ4sWVEkKclgfP1Sq2LQfWu");


$('#submit').click(function () {
    var video_url = $('#url').val();
    var Lesson = Parse.Object.extend("lesson");
    var lesson = new Lesson();

    lesson.save({video_url:video_url,language:"bananalish"}, {
    success: function(object) {
        alert("yay! it worked");
    }
    });
});


