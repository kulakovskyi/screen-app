document.addEventListener("DOMContentLoaded", function (event) {

	var scale = 0.15

	var t_h1 = document.getElementById('h1')
	var t_h2 = document.getElementById('h2')
	var t_h3 = document.getElementById('h3')
	var t_h4 = document.getElementById('h4')
	var t_h5 = document.getElementById('h5')
	var t_h6 = document.getElementById('h6')

	var t_w1 = document.getElementById('w1')
	var t_w2 = document.getElementById('w2')
	var t_w3 = document.getElementById('w3')
	var t_w4 = document.getElementById('w4')
	var t_w5 = document.getElementById('w5')
	var t_w6 = document.getElementById('w6')

	var t_cw = document.getElementById('cw')
	var t_wiw = document.getElementById('wiw')
	var t_wow = document.getElementById('wow')
	var t_ch = document.getElementById('ch')
	var t_wih = document.getElementById('wih')
	var t_woh = document.getElementById('woh')

	var t_w = document.getElementById('w')
	var t_wa = document.getElementById('wa')
	var t_h = document.getElementById('h')
	var t_ha = document.getElementById('ha')

	var device = document.getElementById('device')
	var viewport = document.getElementById('viewport')

	var calculate = function () {

		var w = window.screen.width;
		var wa = window.screen.availWidth;
		var h = window.screen.height;
		var ha = window.screen.availHeight;

		t_w.innerText = w;
		t_wa.innerText = wa;
		t_h.innerText = h;
		t_ha.innerText = ha;

		console.log(w, wa, h, ha);

		var cw = document.documentElement.clientWidth;
		var wiw = window.innerWidth;
		var wow = window.outerWidth;
		var ch = document.documentElement.clientHeight;
		var wih = window.innerHeight;
		var woh = window.outerHeight;

		t_cw.innerText = cw
		t_wiw.innerText = wiw
		t_wow.innerText = wow
		t_ch.innerText = ch
		t_wih.innerText = wih
		t_woh.innerText = woh

		console.log(cw, wiw, wow, ch, wih, woh);

		var w1 = document.body.clientWidth;
		var w2 = document.body.offsetWidth;
		var w3 = document.body.scrollWidth;
		var w4 = document.documentElement.clientWidth;
		var w5 = document.documentElement.offsetWidth;
		var w6 = document.documentElement.scrollWidth;

		t_w1.innerText = w1
		t_w2.innerText = w2
		t_w3.innerText = w3
		t_w4.innerText = w4
		t_w5.innerText = w5
		t_w6.innerText = w6

		console.log(w1, w2, w3, w4, w5, w6);

		var h1 = document.body.clientHeight;
		var h2 = document.body.offsetHeight;
		var h3 = document.body.scrollHeight;
		var h4 = document.documentElement.clientHeight;
		var h5 = document.documentElement.offsetHeight;
		var h6 = document.documentElement.scrollHeight;

		t_h1.innerText = h1
		t_h2.innerText = h2
		t_h3.innerText = h3
		t_h4.innerText = h4
		t_h5.innerText = h5
		t_h6.innerText = h6

		console.log(h1, h2, h3, h4, h5, h6);

		///////////////////////

		var maxw = Math.max(w, wa, cw, wow, wiw, w1, w2, w3, w4, w5, w6)

		device.style.width = maxw * scale + 'px'
		device.style.height = h * scale + 'px'

		viewport.style.width = w1 * scale + 'px'
		viewport.style.height = h4 * scale + 'px'



		var ios = document.getElementById('ios')
		ios.innerText = /iP(ad|od|hone)/i.test(window.navigator.userAgent) && /WebKit/i.test(window.navigator.userAgent) && !(/(CriOS|FxiOS|OPiOS|mercury)/i.test(window.navigator.userAgent))

		var ios = document.getElementById('ua')
		ios.innerText = navigator.userAgent

	}

	calculate()

	window.addEventListener("resize", function (e) {
		calculate()
	})

})