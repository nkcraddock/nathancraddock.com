/* Analytics */
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-21534702-1']);
_gaq.push(['_trackPageview']);
_gaq.push(['_setSiteSpeedSampleRate', 100]);

(function () {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

$('.track-page-view').click(function () {
    var url = $(this).attr('href');
    _gaq.push(['_trackPageview', url]);
});

// I ripped this off from http://wptheming.com/2012/01/tracking-outbound-links-with-google-analytics/ 
// Outbound Link Tracking with Google Analytics
// Requires jQuery 1.7 or higher (use .live if using a lower version)
$("a").on('click', function (e) {
    var url = $(this).attr("href");
    if (e.currentTarget.host != window.location.host) {
        _gaq.push(['_trackEvent', 'Outbound Links', e.currentTarget.host, url, 0]);
        if (e.metaKey || e.ctrlKey) {
            var newtab = true;
        }
        if (!newtab) {
            e.preventDefault();
            setTimeout('document.location = "' + url + '"', 100);
        }
    }
});


/* G +1 button */
(function () {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
