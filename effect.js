$(window).load(function () {
	$(".loading").fadeOut("fast");
	$(".container").fadeIn("fast");
});
$("document").ready(function () {
	var vw;
	$(window).resize(function () {
		vw = $(window).width() / 2;
		$("#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10,#b011,#b012,#b013,#b014,#b015,#b016").stop();
		$("#b11").animate({ top: 100, left: vw - 550 }, 500);
		$("#b22").animate({ top: 100, left: vw - 450 }, 500);
		$("#b33").animate({ top: 100, left: vw - 350 }, 500);
		$("#b44").animate({ top: 100, left: vw - 250 }, 500);
		$("#b55").animate({ top: 100, left: vw - 150 }, 500);
		$("#b66").animate({ top: 100, left: vw - 50 }, 500);
		$("#b77").animate({ top: 100, left: vw + 50 }, 500);
		$("#b88").animate({ top: 100, left: vw + 150 }, 500);
		$("#b99").animate({ top: 100, left: vw + 250 }, 500);
		$("#b101").animate({ top: 100, left: vw + 350 }, 500);
		$("#b111").animate({ top: 100, left: vw + 350 }, 500);
		$("#b112").animate({ top: 240, left: vw - 250 }, 500);
		$("#b113").animate({ top: 240, left: vw - 150 }, 500);
		$("#b114").animate({ top: 240, left: vw - 50 }, 500);
		$("#b115").animate({ top: 240, left: vw + 50 }, 500);
		$("#b116").animate({ top: 240, left: vw + 150 }, 500);
	});

	$("#turn_on").click(function () {
		$("#bulb_yellow").addClass("bulb-glow-yellow");
		$("#bulb_red").addClass("bulb-glow-red");
		$("#bulb_blue").addClass("bulb-glow-blue");
		$("#bulb_green").addClass("bulb-glow-green");
		$("#bulb_pink").addClass("bulb-glow-pink");
		$("#bulb_orange").addClass("bulb-glow-orange");
		$("body").addClass("peach");
		$(this)
			.fadeOut("slow")
			.delay(5000)
			.promise()
			.done(function () {
				$("#play").fadeIn("slow");
			});
	});
	$("#play").click(function () {
		var audio = $(".song")[0];
		audio.play();
		$("#bulb_yellow").addClass("bulb-glow-yellow-after");
		$("#bulb_red").addClass("bulb-glow-red-after");
		$("#bulb_blue").addClass("bulb-glow-blue-after");
		$("#bulb_green").addClass("bulb-glow-green-after");
		$("#bulb_pink").addClass("bulb-glow-pink-after");
		$("#bulb_orange").addClass("bulb-glow-orange-after");
		$("body").css("backgroud-color", "#FFF");
		$("body").addClass("peach-after");
		$(this)
			.fadeOut("slow")
			.delay(6000)
			.promise()
			.done(function () {
				$("#bannar_coming").fadeIn("slow");
			});
	});

	$("#bannar_coming").click(function () {
		$(".bannar").addClass("bannar-come");
		$(this)
			.fadeOut("slow")
			.delay(6000)
			.promise()
			.done(function () {
				$("#balloons_flying").fadeIn("slow");
			});
	});

	function loopOne() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$("#b1").animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$("#b2").animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$("#b3").animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$("#b4").animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$("#b5").animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$("#b6").animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$("#b7").animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopSeven();
		});
	}
	function loopEight() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$("#b8").animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopEight();
		});
	}
	function loopNine() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$("#b9").animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopNine();
		});
	}
	function loopTen() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$("#b10").animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopTen();
		});
	}
	function loopEleven() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$("#b011").animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopEleven();
		});
	}
	function loopTwelve() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$("#b012").animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopTwelve();
		});
	}
	function loopThirteen() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$("#b013").animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopThirteen();
		});
	}
	function loopFourteen() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$("#b014").animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopFourteen();
		});
	}
	function loopFifteen() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$("#b015").animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopFifteen();
		});
	}
	function loopSixteen() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$("#b016").animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopSixteen();
		});
	}

	$("#balloons_flying").click(function () {
		$(".balloon-border").animate({ top: -500 }, 8000);
		$("#b1,#b4,#b5,#b7,#b10,#b013,#b014,#b016").addClass("balloons-rotate-behaviour-one");
		$("#b2,#b3,#b6,#b8,#b9,#b011,#b012,#b015").addClass("balloons-rotate-behaviour-two");
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopEight();
		loopNine();
		loopTen();
		loopEleven();
		loopTwelve();
		loopThirteen();
		loopFourteen();
		loopFifteen();
		loopSixteen();

		$(this)
			.fadeOut("slow")
			.delay(5000)
			.promise()
			.done(function () {
				$("#cake_fadein").fadeIn("slow");
			});
	});

	$("#cake_fadein").click(function () {
		$(".cake").fadeIn("slow");
		$(this)
			.fadeOut("slow")
			.delay(3000)
			.promise()
			.done(function () {
				$("#light_candle").fadeIn("slow");
			});
	});

	$("#light_candle").click(function () {
		$(".fuego").fadeIn("slow");
		$(this)
			.fadeOut("slow")
			.promise()
			.done(function () {
				$("#wish_message").fadeIn("slow");
			});
	});

	const bannar = document.querySelector(".bannar");
	$("#wish_message").click(function () {
		vw = $(window).width() / 2;
		bannar.classList.add("bannar-out");
		$("#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10,#b011,#b012,#b013,#b014,#b015,#b016").stop();
		$("#b1").attr("id", "b11");
		$("#b2").attr("id", "b22");
		$("#b3").attr("id", "b33");
		$("#b4").attr("id", "b44");
		$("#b5").attr("id", "b55");
		$("#b6").attr("id", "b66");
		$("#b7").attr("id", "b77");
		$("#b8").attr("id", "b88");
		$("#b9").attr("id", "b99");
		$("#b10").attr("id", "b101");
		$("#b011").attr("id", "b111");
		$("#b012").attr("id", "b112");
		$("#b013").attr("id", "b113");
		$("#b014").attr("id", "b114");
		$("#b015").attr("id", "b115");
		$("#b016").attr("id", "b116");
		$("#b11").animate({ top: 100, left: vw - 550 }, 500);
		$("#b22").animate({ top: 100, left: vw - 450 }, 500);
		$("#b33").animate({ top: 100, left: vw - 350 }, 500);
		$("#b44").animate({ top: 100, left: vw - 250 }, 500);
		$("#b55").animate({ top: 100, left: vw - 150 }, 500);
		$("#b66").animate({ top: 100, left: vw - 50 }, 500);
		$("#b77").animate({ top: 100, left: vw + 50 }, 500);
		$("#b88").animate({ top: 100, left: vw + 150 }, 500);
		$("#b99").animate({ top: 100, left: vw + 250 }, 500);
		$("#b101").animate({ top: 100, left: vw + 350 }, 500);
		$("#b111").animate({ top: 100, left: vw + 450 }, 500);
		$("#b112").animate({ top: 240, left: vw - 250 }, 500);
		$("#b113").animate({ top: 240, left: vw - 150 }, 500);
		$("#b114").animate({ top: 240, left: vw - 50 }, 500);
		$("#b115").animate({ top: 240, left: vw + 50 }, 500);
		$("#b116").animate({ top: 240, left: vw + 150 }, 500);
		$(".balloons").css("opacity", "0.9");
		$(".balloons h2").fadeIn(3000);
		$(this)
			.fadeOut("slow")
			.delay(3000)
			.promise()
			.done(function () {
				$("#story").fadeIn("slow");
			});
	});

	$("#story").click(function () {
		$(this).fadeOut("slow");
		$(".cake")
			.fadeOut("fast")
			.promise()
			.done(function () {
				$(".message").fadeIn("slow");
			});
		$(".balloons").css("transition", "all 1s");
		$(".balloons").css("opacity", "0");
		var i;

		function msgLoop(i) {
			$("p:nth-child(" + i + ")")
				.fadeOut("slow")
				.delay(800)
				.promise()
				.done(function () {
					i = i + 1;
					$("p:nth-child(" + i + ")")
						.fadeIn("slow")
						.delay(1000);
					if (i == 50) {
						$("p:nth-child(55)")
							.fadeOut("slow")
							.promise()
							.done(function () {
								$(".cake").fadeIn("fast");
							});
					} else {
						msgLoop(i);
					}
				});
			// body...
		}

		msgLoop(0);
	});
});

//alert('hello');
