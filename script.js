$(document).ready(function () {
	$('.blob-container').each(function () {
		let rotate = getRandomArbitrary(0, 360);
		let time = getRandomArbitrary(0, 500);

		$(this).css({
			'transform': 'translate(-50%, -50%) rotate(' + rotate + 'deg)'
		});
		$(this).find('.blob').css({
			'animation-delay': time + 'ms'
		});
	})
	$(document).on('mousemove', function (e) {
		$('.mouse-blob').css({
			left: e.pageX - 15,
			top: e.pageY - 15
		});

	});
});


function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}