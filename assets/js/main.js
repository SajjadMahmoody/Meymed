$(window).resize(function () {
	if (window.innerWidth < 500) {
		$("#search").remove();

	}
});


$("#orgicon").on("click", function () {
	$("#boxtitle").text("سازمانی");
	$("#boxtitle").text("سازمانی");
	$("#change").attr("src", "./../assets/media/images/emojione_hospital.svg");

});
$("#priceicon").on("click", function () {
	$("#boxtitle").text("استعلام قیمت");
	$("#change").attr("src", "./../assets/media/images/Callforprice-icon.svg");
});
$("#demoicon").on("click", function () {
	$("#boxtitle").text("درخواست دمو");
	$("#change").attr("src", "./../assets/media/images/Request a demo-icon.svg");
});
$("#serviceicon").on("click", function () {
	$("#boxtitle").text("درخواست خدمات ");
	$("#change").attr("src", "./../assets/media/images/Service request-icon.svg");


});
$("#repearicon").on("click", function () {
	$("#boxtitle").text("درخواست تعمیرات ");
	$("#change").attr("src", "./../assets/media/images/Request for repairs-icon.svg");
});

//Filter 
var $box = $(".isotope-box").isotope({
	itemSelector: ".isotope-item"

});
$(".isotope-toolbar").on("click", "button", function () {
	var filterValue = $(this).attr("data-type");
	$(".isotope-toolbar").find(".active").removeClass("active");
	$(this).addClass("active");
	if (filterValue !== "*") {
		filterValue = '[data-type="' + filterValue + '"]';
	}
	console.log(filterValue);
	$box.isotope({ filter: filterValue });
});

var footerCarouselSwiper = new Swiper('.mySwiper', {
	effect: 'slide',
	slidesPerView: 6,
	loop: true,
	noSwiping: false,
	allowSlidePrev: false,
	allowSlideNext: false,
	keyboard: false,
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 15,
			noSwiping: true,
			allowSlidePrev: true,
			allowSlideNext: true
		},
		640: {
			slidesPerView: 4,
			spaceBetween: 15,
			noSwiping: true,
			allowSlidePrev: true,
			allowSlideNext: true
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 15,
			noSwiping: true,
			allowSlidePrev: true,
			allowSlideNext: true
		},

		992: {
			slidesPerView: 6,
			spaceBetween: 17,
			noSwiping: false,
			allowSlidePrev: false,
			allowSlideNext: false
		},
		1200: {
			slidesPerView: 6,
			spaceBetween: 10,
			noSwiping: false,
			allowSlidePrev: false,
			allowSlideNext: false
		}

	}
});


var productSwiper = new Swiper('.productSwiper', {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	effect: 'slide',
	slidesPerView: 2,
	spaceBetween: 10,
	loop: true,
	noSwiping: false,
	allowSlidePrev: false,
	allowSlideNext: false,
	speed: 600,
	autoplay: false,
	keyboard: false,
	breakpoints: {
		320: {
			slidesPerView: 1,
			noSwiping: true,
			allowSlidePrev: true,
			allowSlideNext: true
		},
		480: {
			slidesPerView: 2,
			noSwiping: true,
			allowSlidePrev: true,
			allowSlideNext: true
		},

		992: {
			slidesPerView: 4,
			noSwiping: false,
			allowSlidePrev: true,
			allowSlideNext: true
		}


	}
});

/* counter down */
$(function () {

	var targetDate = new Date(Date.UTC(2017, 3, 01));
	var now = new Date();

	window.days = daysBetween(now, targetDate);
	var secondsLeft = secondsDifference(now, targetDate);
	window.hours = Math.floor(secondsLeft / 60 / 60);
	secondsLeft = secondsLeft - (window.hours * 60 * 60);
	window.minutes = Math.floor(secondsLeft / 60);
	secondsLeft = secondsLeft - (window.minutes * 60);
	console.log(secondsLeft);
	window.seconds = Math.floor(secondsLeft);

	startCountdown();
});
var interval;

function daysBetween(date1, date2) {
	//Get 1 day in milliseconds
	var one_day = 1000 * 60 * 60 * 24;

	// Convert both dates to milliseconds
	var date1_ms = date1.getTime();
	var date2_ms = date2.getTime();

	// Calculate the difference in milliseconds
	var difference_ms = date2_ms - date1_ms;

	// Convert back to days and return
	return Math.round(difference_ms / one_day);
}

function secondsDifference(date1, date2) {
	//Get 1 day in milliseconds
	var one_day = 1000 * 60 * 60 * 24;

	// Convert both dates to milliseconds
	var date1_ms = date1.getTime();
	var date2_ms = date2.getTime();
	var difference_ms = date2_ms - date1_ms;
	var difference = difference_ms / one_day;
	var offset = difference - Math.floor(difference);
	return offset * (60 * 60 * 24);
}



function startCountdown() {
	$('#input-container').hide();
	$('#countdown-container').show();

	displayValue('#js-days', window.days);
	displayValue('#js-hours', window.hours);
	displayValue('#js-minutes', window.minutes);
	displayValue('#js-seconds', window.seconds);

	interval = setInterval(function () {
		if (window.seconds > 0) {
			window.seconds--;
			displayValue('#js-seconds', window.seconds);
		} else {
			// Seconds is zero - check the minutes
			if (window.minutes > 0) {
				window.minutes--;
				window.seconds = 59;
				updateValues('minutes');
			} else {
				// Minutes is zero, check the hours
				if (window.hours > 0) {
					window.hours--;
					window.minutes = 59;
					window.seconds = 59;
					updateValues('hours');
				} else {
					// Hours is zero
					window.days--;
					window.hours = 23;
					window.minutes = 59;
					window.seconds = 59;
					updateValues('days');
				}
				// $('#js-countdown').addClass('remove');
				// $('#js-next-container').addClass('bigger');
			}
		}
	}, 1000);
}


function updateValues(context) {
	if (context === 'days') {
		displayValue('#js-days', window.days);
		displayValue('#js-hours', window.hours);
		displayValue('#js-minutes', window.minutes);
		displayValue('#js-seconds', window.seconds);
	} else if (context === 'hours') {
		displayValue('#js-hours', window.hours);
		displayValue('#js-minutes', window.minutes);
		displayValue('#js-seconds', window.seconds);
	} else if (context === 'minutes') {
		displayValue('#js-minutes', window.minutes);
		displayValue('#js-seconds', window.seconds);
	}
}

function displayValue(target, value) {
	var newDigit = $('<span></span>');
	$(newDigit).text(pad(value))
		.addClass('new');
	$(target).prepend(newDigit);
	$(target).find('.current').addClass('old').removeClass('current');
	setTimeout(function () {
		$(target).find('.old').remove();
		$(target).find('.new').addClass('current').removeClass('new');
	}, 900);
}

function pad(number) {
	return ("0" + number).slice(-2);
}