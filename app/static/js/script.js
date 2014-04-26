//@codekit-prepend modernizr.js
//@codekit-prepend swfobject.js


var VPR = VPR || {};

VPR.update_interval = 10 * 60 * 1000;

VPR.update_billboard = function () {
    $.get('/billboard', function (data) {
        var billboard = $('#billboard'),
            billboard_length = billboard.attr('data-length'),
            data_length = data.length.toString(),
            new_billboard = $(data);

        if (billboard_length !== data_length) {
            billboard.replaceWith(new_billboard.hide().fadeIn());
            $('#billboard').attr('data-length', data_length);
        }
    });
};

VPR.update_callout = function () {
    $.get('/callout', function (data) {
        var callout = $('#callout'),
            callout_length = callout.attr('data-length'),
            data_length = data.length.toString(),
            new_callout = $(data);

        if (callout_length !== data_length) {
            callout.replaceWith(new_callout.hide().fadeIn());
            $('#callout').attr('data-length', data_length);
        }
    });
};

VPR.repositioned = false;

VPR.move_more_info = function() {
    if (Modernizr.mq('(max-width: 768px)')) {
        $('#more_info').insertAfter('#underwriter').hide().fadeIn();
        VPR.repositioned = true;
    } else if (VPR.repositioned && Modernizr.mq('(min-width: 769px)')) {
        $('#more_info').insertAfter('#player').hide().fadeIn();
        VPR.repositioned = false;
    }
};

VPR.update_schedule = function() {
    $.get('/replay-schedule', function (data) {
        var on_now = $('#on_now'),
            up_next = $('#up_next');

            on_now.replaceWith($(data).first().hide().fadeIn());
            up_next.replaceWith($(data).last().hide().fadeIn());
    });
};

VPR.init_updates = function () {
    var d = new Date(),
        m = d.getMinutes();

    VPR.update_billboard();
    VPR.update_callout();
    VPR.update_schedule();
    VPR.move_more_info();

    var my_interval = window.setInterval(function () {
        VPR.update_billboard();
        VPR.update_callout();
        VPR.move_more_info();
        if (m < (VPR.update_interval / (1000 * 60))) {
            VPR.update_schedule();
        }
    }, VPR.update_interval);
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
    VPR.init_updates();
    VPR.init_audio_support();
});
