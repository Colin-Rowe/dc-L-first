    var d = new Date()
    var vYear = d.getFullYear()
    var vMon = d.getMonth() + 1
    var vDay = d.getDate()
    var h = d.getHours();
    var m = d.getMinutes();
    var se = d.getSeconds();
    s = vYear + "-" + (vMon < 10 ? "0" + vMon : vMon) + "-" + (vDay < 10 ? "0" + vDay : vDay);
	var click_time = (h < 10 ? "0" + h : h)+ ":" + (m < 10 ? "0" + m : m);


    var cname = '计划';
	window.weChatNumbers = ['15334716069'];//ye
	var tt = getst(); if (tt > 3 && tt < 16) {
	window.weChatNumbers = ['15334716069'];//b
	}
    var a = window.weChatNumbers;  		
	

		function setCookie(c_name, value, expiredays) {
			var exdate = new Date();
			exdate.setDate(exdate.getDate() + expiredays);
			document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
		}
		function getCookie(name) {
			var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
			if (arr = document.cookie.match(reg))
				return (arr[2]);
			else
				return null;
		}
		function delCookie(name) {
			var exp = new Date();
			exp.setTime(exp.getTime() - 1);
			var cval = getCookie(name);
			if (cval != null)
				document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
		}
		var stxlwx = ""; var wx_img = ""; var wx_img1 = "";

		if (getCookie("username") == null) {
			var  weChatNum = a[ parseInt( Math.random() * a.length ) ];			    
			stxlwx = weChatNum;
			wx_img = "<img src='img/" + weChatNum + ".png' />";
			setCookie('username', stxlwx, 7);
		}
		else {
			stxlwx = getCookie("username");
			weChatNum = stxlwx;
			wx_img = "<img src='img/" + weChatNum + ".png' />";
		}
		function isWeiXin() {
			var ua = window.navigator.userAgent.toLowerCase();
			if (ua.match(/MicroMessenger/i) == 'micromessenger') {
				return true;
			} else {
				return false;
			}
		}
        function getst(){
		var xhr = null;
		if(window.XMLHttpRequest){
			xhr = new window.XMLHttpRequest();
		}else{
			xhr = new ActiveObject("Microsoft")}xhr.open("GET","/",false);xhr.send(null);
			var date = xhr.getResponseHeader("Date");
			var t = new Date(date);return t.getHours();
		}



 