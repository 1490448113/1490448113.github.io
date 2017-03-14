window.onload = function () {
	//change backgroud color
	"use strict";


	var oBtm1 = document.getElementById('btm1');
	var oStart = document.getElementById('subscribe');
	var oclock = document.getElementById('right1');
	var oBox = document.getElementById('box');
	oStart.onclick = function () {
		oclock.style.display = ('block');
		oBox.style.background = ('#009993');
	};

	var otitle = document.getElementById('title');
	otitle.onmouseover = function () {
		otitle.style.boxShadow = ('#fff 1 1 10px');
	};




	//CLock
	var oClock = document.getElementById("right1");
	var aSpan = oClock.getElementsByTagName("span");

	setInterval(getTimes, 1000);
	getTimes();

	function getTimes() {
		var oDate = new Date();
		var aDate = [oDate.getHours(), oDate.getMinutes(), oDate.getSeconds()];
		for (var i in aDate) aSpan[i].innerHTML = format(aDate[i]);
	}

	function format(a) {
		// 添加前导零
		return a.toString().replace(/^(\d)$/, "0$1");
	}


	var obtm1 = document.getElementById("btm1");
	var obtm2 = document.getElementById("btm2");
	var obtm3 = document.getElementById("btm3");
	var obtm4 = document.getElementById("btm4");
	var obtm5 = document.getElementById("btm5");
	var obtm6 = document.getElementById("btm6");

	obtm1.onclick = function () {
		obtm1.value = ' ';
	};
	obtm2.onclick = function () {
		obtm2.value = ' ';
	};
	obtm3.onclick = function () {
		obtm3.value = ' ';
	};
	obtm4.onclick = function () {
		obtm4.value = ' ';
	};

	obtm1.onkeyup = function () {
		this.value = this.value.replace(/[^\d]/, "");
	};
	obtm2.onkeyup = function () {
		this.value = this.value.replace(/[^\d]/, "");
	};
	obtm3.onkeyup = function () {
		this.value = this.value.replace(/[^\d]/, "");
	};

	obtm5.onclick = function () {
		obtm4.style.display = 'block';

		obtm4.value =parseInt(obtm1.value) + parseInt(obtm2.value) + parseInt(obtm3.value);
	};


	var otishi=document.getElementById('left2');
	otishi.onmouseover=function(){
		otishi.style.opacity="1"
	};
	otishi.onmouseout=function(){
		otishi.style.opacity="0.1"
	};







	//clock
	var oLi = document.getElementById("calendar").getElementsByTagName("li");
	var oMsg = document.getElementById("msg");
	var oP = oMsg.getElementsByTagName("p")[0];
	var oStrong = oMsg.getElementsByTagName("strong")[0];
	var oArray = [
		"元旦：1月1日至3日放假三天。",
		"春节：2月2日至8日放假7天。",
		"妇女节：3月8日妇女节，与我无关。",
		"清明节：4月3日至5日放假3天",
		"劳动节：4月30日至5月2日放假3天。",
		"端午节：6月4日至6日放假3天。",
		"小暑：7月7日小暑。不放假。",
		"七夕节：8月6日七夕节。不放假。",
		"中秋节：9月10日至12日放假3天。",
		"国庆节：10月1日至7日放假7天。",
		"立冬：11月8日立冬。不放假。",
		"艾滋病日:12月1日<br />         废除奴隶制国际日:12月2日。"
	];
	for (var i = 0; i < oLi.length; i++) {
		oLi[i].index = i;
		oLi[i].onmouseover = function () {
			for (var n = 0; n < oLi.length; n++) oLi[n].className = "";
			this.className = "current";
			oP.innerHTML = oArray[this.index];
			oStrong.innerHTML = this.index + 1;
		};
	}




	var oBox = document.getElementById("box");
	var oH2 = oBox.getElementsByTagName("h2")[0];
	var oA = oBox.getElementsByTagName("a")[0];
	var aBOxSpan = oBox.getElementsByTagName("span");
	var disX = 0;
	var disY = 0;
	var bDrag = false;
	var aPos = [{
		x: oBox.offsetLeft,
		y: oBox.offsetTop
	}]

	//鼠标按下, 激活拖拽
	oBox.onmousedown = function (event) {
		var event = event || window.event;
		bDrag = true;
		disX = event.clientX - oBox.offsetLeft;
		disY = event.clientY - oBox.offsetTop;

		var colors = setInterval(function () {
			document.getElementsByTagName('body')[0].style.background = 'rgb(' + ((oBox.offsetTop % 255)/5) + ',' + (155+(oBox.offsetLeft % 255)/5) + ',' + (178+((oBox.offsetTop - oBox.offsetLeft) % 255)/5) + ')';
			document.getElementById('kongbai').style.background = 'rgb(' + ((oBox.offsetTop % 255)/5) + ',' + (155+(oBox.offsetLeft % 255)/5) + ',' + (178+((oBox.offsetTop - oBox.offsetLeft) % 255)/5) + ')';
			document.getElementsByClassName('left')[0].style.background = 'rgb(' + ((oBox.offsetTop % 255)/5) + ',' + (155+(oBox.offsetLeft % 255)/5) + ',' + (178+((oBox.offsetTop - oBox.offsetLeft) % 255)/5) + ')';
		}, 5);

		aPos.push({
			x: oBox.offsetLeft,
			y: oBox.offsetTop
		})


		this.setCapture && this.setCapture();

		return false
	};


	//拖拽开始
	document.onmousemove = function (event) {
		if (!bDrag) return;
		var event = event || window.event;
		var iL = event.clientX - disX;
		var iT = event.clientY - disY;
		var maxL = document.documentElement.clientWidth - oBox.offsetWidth;
		var maxT = document.documentElement.clientHeight - oBox.offsetHeight;

		iL = iL < 0 ? 0 : iL;
		iL = iL > maxL ? maxL : iL;

		iT = iT < 0 ? 0 : iT;
		iT = iT > maxT ? maxT : iT;

		oBox.style.marginTop = oBox.style.marginLeft = 0;
		oBox.style.left = iL + "px";
		oBox.style.top = iT + "px";

		aPos.push({
			x: iL,
			y: iT
		})

		status();

		return false
	};

	//鼠标释放, 结束拖拽
	document.onmouseup = window.onblur = oH2.onlosecapture = function () {
		bDrag = false;
		oH2.releaseCapture && oH2.releaseCapture();
		status()
	};

	//回放拖动轨迹
	oA.onclick = function () {
		if (aPos.length == 1) return;
		var timer = setInterval(function () {
			var oPos = aPos.pop();
			oPos ? (oBox.style.left = oPos.x + "px", oBox.style.top = oPos.y + "px", status()) : clearInterval(timer)
		}, 20);

		this.focus = false; //去除链接虚线

		return false
	};

	//阻止冒泡
	oA.onmousedown = function (event) {
		(event || window.event).cancelBubble = true
	};

	//监听状态函数
	function status() {
		aBOxSpan[0].innerHTML = oBox.offsetTop;
		aBOxSpan[1].innerHTML = oBox.offsetLeft;
	}

	//初始调用
	status()
};
