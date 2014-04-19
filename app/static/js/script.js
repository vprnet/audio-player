//@codekit-prepend "svg-support.js"
//@codekit-prepend "swfobject.js"

if (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)) {
    document.getElementById('recommended_format').innerHTML = 'AAC+';
} else if (swfobject.hasFlashPlayerVersion("1")) {
    document.getElementById('recommended_format').innerHTML = 'Flash';
}
