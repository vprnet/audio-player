/**
 * @depend modernizr.js
 * @depend swfobject.js
 */

if (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)) {
    document.getElementById('recommended_format').innerHTML = 'AAC+';
} else if (typeof swfobject !== 'undefined' && swfobject.hasFlashPlayerVersion("1")) {
    document.getElementById('recommended_format').innerHTML = 'Flash';
}

var VPR = VPR || {};

VPR.update_billboard = function () {
    $.get('/billboard', function (data) {
        var billboard = $('#billboard'),
            new_billboard = $(data);

        billboard.replaceWith(new_billboard.hide().fadeIn());
    });
}

VPR.init_billboard = function () {
    var my_interval = window.setInterval(function () {
        VPR.update_billboard();
    }, 5000);
}

$(document).ready(function () {
    VPR.init_billboard();
});
