/**
 * @depend modernizr.js
 * @depend swfobject.js
 */

var VPR = VPR || {};

VPR.update_billboard = function () {
    $.get('/billboard', function (data) {
        var billboard = $('#billboard'),
            new_billboard = $(data);

        billboard.replaceWith(new_billboard.hide().fadeIn());
    });
};

VPR.init_billboard = function () {
    var my_interval = window.setInterval(function () {
        VPR.update_billboard();
    }, 5 * 60 * 1000);
};

VPR.init_audio_support = function () {
    var label = $('#recommended_format'),
        flash_support = swfobject.hasFlashPlayerVersion("1"),
        acc_support = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

    if (acc_support) {
        label.text('AAC+');
    } else if (flash_support) {
        label.text('Flash');
    }
};

$(document).ready(function () {
    VPR.init_billboard();
    VPR.init_audio_support();
});
