//@codekit-prepend modernizr.js
//@codekit-prepend swfobject.js


var VPR = VPR || {};

VPR.update_interval = 10 * 60 * 1000;

VPR.update_billboard = function () {
    $.get('/apps/audio-player/billboard', function (data) {
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
    $.get('/apps/audio-player/callout', function (data) {
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

VPR.update_schedule = function() {
    $.ajax({
        type: "GET",
        url: "http://www.vpr.net/xml/vpr-mix-stream/vprmix.xml",
        datatype: "xml",
        success: function(xml) {
            var xml_doc = $(xml),
                on_now_xml = xml_doc.find('PLAY[INDEX=0]'),
                up_next_xml = xml_doc.find('PLAY[INDEX=4]'),
                on_now_obj = {
                    'artist': on_now_xml.children('ARTIST').text(),
                    'title': on_now_xml.children('TITLE').text()
                },
                up_next_obj = {
                    'artist': up_next_xml.children('ARTIST').text(),
                    'title': up_next_xml.children('TITLE').text()
                },
                on_now = $('<span id="on_now" />'),
                up_next = $('<span id="up_next" />');

                on_now.text(on_now_obj.artist + ' - ' + on_now_obj.title);
                up_next.text(up_next_obj.artist + ' - ' + up_next_obj.title);

            $('#on_now').replaceWith(on_now.hide().fadeIn());
            $('#up_next').replaceWith(up_next.hide().fadeIn());
        }
    });
};

VPR.small_window = false;

VPR.move_more_info = function() {
    if (!VPR.small_window && Modernizr.mq('(max-width: 767px)')) {
        $('#more_info').insertAfter('#underwriter').hide().fadeIn();
        VPR.small_window = true;
    } else if (VPR.small_window && Modernizr.mq('(min-width: 768px)')) {
        $('#more_info').insertAfter('#player').hide().fadeIn();
        VPR.small_window = false;
    }
};

VPR.init_updates = function () {
    var d = new Date(),
        m = d.getMinutes();

    VPR.update_billboard();
    VPR.update_callout();
    VPR.update_schedule();
    VPR.move_more_info();

    var replay_interval = window.setInterval(function () {
        if (m < 3) {
            VPR.update_schedule();
        }
    }, 3 * 60 * 1000);

    var my_interval = window.setInterval(function () {
        VPR.update_billboard();
        VPR.update_callout();
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

$('a#old_player').click(function(event) {
    event.preventDefault();
    var href = $(this).attr("href");
    window.open(href, "audioPlayer", "resizable = 0, status = 0, toolbar = 0, location = 0, menubar = 0, directories = 0, scrollbars = 1, width = 500, height = 300");
    return false;
});

(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          }

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  };
	// smartresize
	jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

$(window).smartresize(VPR.move_more_info);

$(document).ready(function () {
    VPR.init_updates();
    VPR.init_audio_support();
});
