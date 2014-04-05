<<<<<<< HEAD
//@codekit-prepend "bootstrap.js"
//@codekit-prepend "svg-support.js"
//@codekit-prepend "jquery.history.js";

if ($(window).innerWidth() < 610) {
    $('#mobile_player iframe').attr('src', 'http://player.streamguys.com/vpr/sgplayer/mobile.php');
}

var classicalSrc = "http://player.streamguys.com/vpr/sgplayer/player.php",
    classicalWidget = "http://composer.nprstations.org/widgets/iframe/searchlist.html?station=518028fee1c810b152ff9766&visible=searchlist",
    newsSrc = "http://player.streamguys.com/vpr/sgplayer/player.php",
    replaySrc = "http://player.streamguys.com/vpr/sgplayer/player.php",
    mobileSrc = "http://player.streamguys.com/vpr/sgplayer/mobile.php";

var updateClassical = function(id) {
    $('h1#navbar_title').text('Classical Player');
    History.pushState({state:2}, "Classical Player | VPR", "/apps/sandbox/classical");
    var classicalFrame = $(id + " div.sgplayer-standard iframe");
    if (classicalFrame.attr('src') === 'about:blank') {
        classicalFrame.attr('src', classicalSrc);
    }
    $(id + " #playlist_widget iframe").attr('src', classicalWidget);
};

var updateMusic = function(id) {
    $('h1#navbar_title').text('Music Player');
    History.pushState({state:3}, "Music Player | VPR", "/apps/sandbox/replay");
    var replayFrame = $(id + " div.sgplayer-standard iframe");
    if (replayFrame.attr('src') === 'about:blank') {
        replayFrame.attr('src', replaySrc);
    }
};

var updateNews = function(id) {
    $('h1#navbar_title').text('News Player');
    History.pushState({state:1}, "Audio Player | VPR", "/apps/sandbox");
    var newsFrame = $(id + " div.sgplayer-standard iframe");
    if (newsFrame.attr('src') === 'about:blank') {
        newsFrame.attr('src', newsSrc);
    }
};


$('#player_tabs a').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    if (id === '#classical') {
        updateClassical(id);
    } else if (id === '#replay') {
        updateMusic(id);
    } else if (id === '#news') {
        updateNews(id);
    }
    $(this).tab('show');
});
=======
//@codekit-prepend "svg-support.js"
>>>>>>> 1cbdc878c467955c752f87b008e4403eaa9abd87
