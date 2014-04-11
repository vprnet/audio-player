//@codekit-prepend "svg-support.js"
//@codekit-prepend "swfobject.js"

if (swfobject.hasFlashPlayerVersion("1")) {
    document.getElementById('recommended_stream').innerHTML = 'Flash';
} else if (navigator.userAgent.indexOf('Safari')) {
    document.getElementById('recommended_stream').innerHTML = 'AAC+';
}
