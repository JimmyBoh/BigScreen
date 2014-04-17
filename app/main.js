/*jshint strict:false, browser:true */
(function (d) {
	var originalIcon = '';
	var favicon = null;
	var s = d.createElement('script');
	s.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js');
	d.getElementsByTagName('body')[0].appendChild(s);
	setTimeout(function () {
		favicon = $('link[rel=icon]');
		originalIcon = favicon.attr('href');
		$('.player-height, .html5-main-video').css('height', '890px');
		$('.player-width, #player, .html5-main-video').css('width', '1600px');
		$(d).on('visibilitychange', function () {
			if (d.hidden) {
				favicon.attr('href', 'http://www.html5rocks.com/favicon.ico');
				d.title = 'HTML5 Fundamentals';
				$('#movie_player')[0].pauseVideo();
			} else {
				favicon.attr('href', originalIcon);
				d.title = $('#eow-title').text();
			}
		});
	}, 1000);
})(document);