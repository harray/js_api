/**
 * 
 */

    if(typeof TenvideoJSBridge == "object"){
	        callback();
    } else {
	        if(document.addEventListener){
	            document.addEventListener("onTenvideoJSBridgeReady", callbackAfterListener, false);
	        } else if(document.attachEvent){
	            document.attachEvent("onTenvideoJSBridgeReady", callbackAfterListener);
	        }
    }
    
    function callbackAfterListener(){
    	//alert("callbackAfterListener");
    	callback();
    }
    
    function callback(){
 	console.log(window.TenvideoJSBridge);
        TenvideoJSBridge.invoke("newToast", {"content":"jsapi is ok!"});
        TenvideoJSBridge.on("openvideo", function(){
            TenvideoJSBridge.toast("openvideo");
         });
        TenvideoJSBridge.on("on_orientation_change", function(){
            TenvideoJSBridge.toast("orientation_change");
         });
        TenvideoJSBridge.on("onShareQQUser", function(){
      		// alert("onShareQQUser");
			shareInfo("shareQQUser");
         });
        TenvideoJSBridge.on("onShareQZone", function(){
      		// alert("onShareQZone");
			shareInfo("shareQzone");
         });
        TenvideoJSBridge.on("onShareSinaWeibo", function(){
      		// alert("onShareSinaWeibo");
			shareInfo("shareSinaWeibo");
         });
        TenvideoJSBridge.on("onShareTXWeibo", function(){
      		// alert("onShareTXWeibo");
			shareInfo("shareTxWeibo");
         });
        TenvideoJSBridge.on("onShareWeixinTimeline", function(){
      		// alert("onShareWeixinTimeline");
			//shareInfo("shareWeixinTimeline");
         });	
        TenvideoJSBridge.on("onShareWeixinUser", function(){
      		// alert("onShareWeixinUser");
			shareInfo("shareWeixinUser");
         });
        TenvideoJSBridge.on("onShareVideoCircle", function(){
      		// alert("onShareVideoCircle");
			shareInfo("shareVideoCircle");
         });
        TenvideoJSBridge.on("onRefresh", function(){
      		// alert("onRefresh");
      		refreshPage();
         });
        TenvideoJSBridge.on("onFollow", function(){
      		// alert("onFollow");
         });
         TenvideoJSBridge.on("onShareFinish", function(ret){
            var jret = JSON.parse(ret);
			// alert("onShareFinish " + JSON.stringify(jret.result));
         });
         TenvideoJSBridge.on("onShareWeixinTimelineFinish", function(){
       		// alert("onShareWeixinTimelineFinish");
 			//shareInfo("shareWeixinTimeline");
          });
         TenvideoJSBridge.on("onActionLoginFinish", function(ret){
			// alert("onActionLoginFinish: " + ret);
         });
         TenvideoJSBridge.on("onActionLogoutFinish", function(ret){
 			// alert("onActionLogoutFinish: " + ret);
          });
         TenvideoJSBridge.on("onActionLogin", function(ret){
 			// alert("onActionLogin: " + ret);
          });
         TenvideoJSBridge.on("onActionFollow", function(ret){
// 			alert("onActionFollow: " + ret);
          });
	  TenvideoJSBridge.on("onMessage", function(ret){
			alert("onMessage: " + ret);
          });
         TenvideoJSBridge.on("onActionFollowFinish", function(ret){
//  			alert("onActionFollowFinish: " + ret);
  			var jret = JSON.parse(ret);
			// alert("harray ActionFollowFinish: " + JSON.stringify(jret.errCode));
           });
    }

    function getPageInfo() {
		TenvideoJSBridge.invoke('getMainUserInfo', null, function(ret){
			var jret = JSON.parse(ret);
			var type = jret.result.type;
			if (type == 'wx') {
				var uin = jret.result.userInfo.openId;
				var nickname = jret.result.userInfo.nickname;
				var userImage = jret.result.userInfo.headImgUrl;
				
			} else if (type == 'qq') {
				var uin = jret.result.userInfo.uin;
				var nickname = jret.result.userInfo.nickname;
				var userImage = jret.result.userInfo.headImgUrl;
			} else {
				var uin = '';
				var nickname = '';
				var userImage = '';
				var type = '未登录~~~';
			}
			document.getElementById('mainLogin').value = type;
			document.getElementById('uin').value = uin;
			document.getElementById('name').value = nickname;
			document.getElementById('headImage').src = userImage;
		});
		TenvideoJSBridge.invoke('getPayVip', null, function(ret){
			var jret = JSON.parse(ret);
			var isVip = JSON.stringify(jret.result.vip);
			var vipLevel = JSON.stringify(jret.result.level);
			document.getElementById('isVip').value = isVip;
			document.getElementById('vipLevel').value = vipLevel;
		});
		TenvideoJSBridge.invoke('getLocation', null, function(ret){
			var jret = JSON.parse(ret);
			var location = jret.result.poiName;
			document.getElementById('location').value = location;
		});
	}

    function refreshPage(){
    	TenvideoJSBridge.invoke("refreshPage");
    }

	function shareInfo(event){
		TenvideoJSBridge.invoke(event,{"title":"harray胡咧咧主标题","subTitle":"harray 胡咧咧副标题", "imageUrl":"http://himg2.huanqiu.com/attachment2010/2014/0926/20140926104434966.jpg", "url":"https://movie.douban.com/subject/5154799?a=1", "coverId":"m5eim4jo5m5aybg", "videoId":"x0016hskj53"}, function(ret){
			var jret = JSON.parse(ret);
			alert(ret);
		});
    }
	
	function shareInfo(event, imgdata){
		var tmp = "harray胡咧咧主标题11";
		alert(imgdata);
		TenvideoJSBridge.invoke(event,{"title":tmp,"subTitle":"harray 胡咧咧副标题", "imgData": imgdata, "url":"https://movie.douban.com/subject/5154799?a=1", "coverId":"m5eim4jo5m5aybg", "videoId":"x0016hskj53"}, function(ret){
			var jret = JSON.parse(ret);
			alert(ret);
		});
    }

	function printHello(content){
	    document.getElementById("hello_div").innerHTML += "print hello from " + content + "<br/>";
	}

    function printLog(content){
	    document.getElementById("hello_div").innerHTML += content + "<br/>";
	}

	function clickToastBtn(){
	    TenvideoJSBridge.invoke("newToast", {'content':'invoke newtoast'});
	}

	function jumpInVideo(){
	    TenvideoJSBridge.jumpInVideo(1000*60*3);
	}

	function hideH5(){
		TenvideoJSBridge.hideH5();
	}

	function showH5(){
		TenvideoJSBridge.showH5();
	}

	function onBodyClick(){
		TenvideoJSBridge.invoke("newToast", {"content":"h5 onclick, hide h5"});
		TenvideoJSBridge.hideH5();
	}

	function testCallback(){
		TenvideoJSBridge.invoke("testCallback", {"content":"i am back!"}, function(msg){
			printLog(msg);
			TenvideoJSBridge.invoke("newToast", {"content":msg});
		});
	}
	function testException(){
		TenvideoJSBridge.invoke("testCallback", null, function(msg){
			printLog(msg);
			TenvideoJSBridge.invoke("newToast", {"content":msg});
		});
	}
	function gotoHomepage(){
		TenvideoJSBridge.invoke("openView", {"url":"txvideo://v.qq.com/HomeActivity?tabIndex=0&channelId=100191&channelTitle=%e4%b8%ba%e4%bd%a0%e6%8e%a8%e8%8d%90","close":"1"});
	}

	var isRain = false;
	function showBackground(){
		isRain = !isRain;
		if(isRain){
			document.body.style.backgroundImage="url(./img/rain.gif)";
			document.getElementById("btn_rain").innerHTML = 'stopRain';
		}else{
			document.body.style.backgroundImage="";
			document.getElementById("btn_rain").innerHTML = 'rain';
		}
	}

	function checkApi(){
		console.log("checkApi");
		TenvideoJSBridge.invoke('checkApi', {"apiList":["getDeviceInfo","actionLogin","harraytest"]}, function(ret){
			alert(ret);
			document.getElementById("apiResult").value = ret;
			//var jret = JSON.parse(ret);
			//alert(JSON.stringify(jret.errCode));
			//alert(ret.errMsg);
			//alert(ret.errCode + ": " + ret.errMsg + ": " + JSON.stringify(ret.result));
		});
	}
	
	function openUrl(url) {
			TenvideoJSBridge.invoke('openUrl', {"url":url, "type":1}, function(ret){
		});
	}

	function getLocation() {
		TenvideoJSBridge.invoke('getLocation', null, function(ret){
			alert(ret);
			document.getElementById("apiResult").value = ret;
		});
	}
	
	function preViewPhotos() {
		TenvideoJSBridge.invoke('preViewPhotos', {'photopaths':['http://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/w/w7ju7urc1x4w3jc.jpg','http://i.gtimg.cn/qqlive/images/still/files/05/05sbd8687.jpg']}, function(ret){
			alert(ret);
		});
	}

	function copyClipBoard(param){
		var copycontent = param + "://";
		TenvideoJSBridge.invoke('copyToClipBoard', {"content":copycontent}, function(ret){
			alert(ret);
		});
	}
	    
	function copyUA(){
		var ua = navigator.userAgent;
		TenvideoJSBridge.invoke('copyToClipBoard', {"content":ua}, function(ret){
			alert(ret);
		});
	}
	
	function openToolsDialog() {
		TenvideoJSBridge.invoke('openToolsDialog', null, function(ret){
			alert(ret);
		});
	}
	
	function download() {
		TenvideoJSBridge.invoke('download3rdApp', null, function(ret){
			alert(ret);
		});
	}
	
	function login(type){
		TenvideoJSBridge.invoke('actionLogin', {'type':type}, function(ret){
			alert("actionLogin:\n" + ret);
			var jret = JSON.parse(ret);
//			alert(JSON.stringify(jret.errCode));
		});
	}
	
	function getMainLogin() {
		TenvideoJSBridge.invoke('getMainLogin', null, function(ret){
			alert(ret);
			document.getElementById("apiResult").value = ret;
//			alert(ret);
//			var jret = JSON.parse(ret);
//			alert(JSON.stringify(jret.result));
		});
	}

	function getMainLoginInfo() {
		TenvideoJSBridge.invoke('getMainLogin', null, function(ret){
			// alert(ret);
			var jret = JSON.parse(ret);
			return JSON.stringify(jret.result);
//			alert(JSON.stringify(jret.result));
		});
	}

	function getUserInfo(type){
		TenvideoJSBridge.invoke('getUserInfo', {'type':type}, function(ret){
			alert(ret);
			var jret = JSON.parse(ret);
//			alert(JSON.stringify(jret.result));
//			alert(JSON.stringify("errCode:" + jret.errCode));
//			alert(JSON.stringify("errMsg:" + jret.errMsg));
		});
	}

	function getCookie(type){
		TenvideoJSBridge.invoke('getCookie', {'type':type}, function(ret){
			alert(ret);
			document.getElementById("apiResult").value = ret;
//			var jret = JSON.parse(ret);
//			alert(JSON.stringify("errCode:" + jret.errCode));
		});
	}
	
	function getMainCookie(type){
		TenvideoJSBridge.invoke('getMainCookie', null, function(ret){
			alert(ret);
			document.getElementById("apiResult").value = ret;
//			var jret = JSON.parse(ret);
//			alert(JSON.stringify(jret.result));
		});
	}

	function actionPlay(param){
		TenvideoJSBridge.invoke('actionPlay', param);
	}
	function getAppInfo(){
		TenvideoJSBridge.invoke('getAppInfo', null, function(ret){
			alert(ret);
			document.getElementById("apiResult").value = ret;						
//			var jret = JSON.parse(ret);
//			var buildVersion = JSON.stringify(jret.result.buildVersion);
//			var pkgName = JSON.stringify(jret.result.pkgName);
//			document.getElementById("buildVersion").value = buildVersion;
//			document.getElementById("pkgName").value = pkgName;
//			alert(JSON.stringify(jret.result));
//			alert(JSON.stringify(jret.errCode));
//			alert(ret.errMsg);
		});
	}
	function goBack(){
		TenvideoJSBridge.invoke('goBack', null, function(ret){
		});
	}
	function aclose(){
		TenvideoJSBridge.invoke('close', null, function(ret){
		});
	}
	function getDeviceInfo(){
		TenvideoJSBridge.invoke('getDeviceInfo', null, function(ret){			
//			var jret = JSON.parse(ret);
//			alert(JSON.stringify(jret.result));
			alert(ret);
			document.getElementById("apiResult").value = ret;
		});
	}
	function getMainLoginType(){
		TenvideoJSBridge.invoke('getMainLoginType', null, function(ret){
			alert(ret);
			var jret = JSON.parse(ret);
			alert(JSON.stringify(jret.result) + " " + JSON.stringify(jret.errCode));
		});
	}
	function getMainUserInfo(){
		TenvideoJSBridge.invoke('getMainUserInfo', null, function(ret){
			alert(ret);
			document.getElementById("apiResult").value = ret;
			//var jret = JSON.parse(ret);
//			alert(JSON.stringify(jret.result));
		});
	}
	function openToolsDialog(){
		TenvideoJSBridge.invoke('openToolsDialog', {"icon":["refresh", "follow", "circle", "share"]}, function(ret){
			var jret = JSON.parse(ret);
//			alert(JSON.stringify(jret.result));
		});
	}
	function isAppInstalled(){
		TenvideoJSBridge.invoke('isInstalled', {"pkgName":"weixin"}, function(ret){
			alert(ret);
			document.getElementById("apiResult").value = ret;
	//		alert(ret);
	//		document.getElementById("apiResult").value = ret;	
	//		var jret = JSON.parse(ret);
	//		alert("微信isInstalled: " + JSON.stringify(jret.result));
		});
	}
	function isAppInstalled1(){
		TenvideoJSBridge.invoke('isInstalled', {"scheme":"weixin://"}, function(ret){
			alert(ret);
			document.getElementById("apiResult").value = ret;
//			var jret = JSON.parse(ret);
//			alert("微信isInstalled: " + JSON.stringify(jret.result));
//			document.getElementById("apiResult").value = JSON.stringify(jret.result);
		});
	}
	function openView(url){
		var openUrl = {"url": url};
		TenvideoJSBridge.invoke('openView', openUrl, function(ret){
			var jret = JSON.parse(ret);
//			alert("微信isInstalled: " + JSON.stringify(jret.result));
		});
	}
	function setMoreInfo(){
		alert("set more info");
		var params = {"hasRefresh":true, "hasShare":true, "hasFollow":true};
	//			"shareInfo":"{\"title\":\"abc\", \"subTitle\":\"123456\", \"content\":\"123456\", \"imageUrl\":\"http:\/\/123\", \"imageData\":\"10101010100101\", \"url\":\"http://www.qq.com\", \"coverId\":\"\", \"videoId\":\"\" }", 
	//				"followInfo":"{\"videoType\":\"1\", \"title\":\"123456\", \"imageUrl\":\"http://123\", \"columnId":\"100000", \"coverId\":\"\", \"videoId\":\"\", \"programId\":\"200000\", \"dataKey\":\"\"}"} ;
		TenvideoJSBridge.invoke('setMoreInfo', params, function(ret){
			alert(ret);
			document.getElementById("apiResult").value = ret;	
	//		var jret = JSON.parse(ret);
	//		alert(JSON.stringify(jret.errCode));
		});
	}
	function launchAppPkgName(PkgName){
		TenvideoJSBridge.invoke('launch3rdApp', {"pkgName":PkgName}, function(ret){
			alert(ret);
		});
	}

	function launchAppScheme(PkgName){
		var schemeName = PkgName + "://";
		TenvideoJSBridge.invoke('launch3rdApp', {"pkgUrl":schemeName}, function(ret){
			alert(ret);
		});
	}
	
	function launchAppSchemeWithParam(PkgName){
		var schemeName = PkgName + "://harray";
		TenvideoJSBridge.invoke('launch3rdApp', {"pkgUrl":schemeName}, function(ret){
			alert(ret);
		});
	}
		
	function launchTencentVideo(){
		var schemeName = 'tenvideo2://?video_id=j0016lrk2f7&action=5&from=140_NEW2015062200121803&callback=weixin%3A%2F%2F&sender=%e5%be%ae%e4%bf%a1';
		TenvideoJSBridge.invoke('launch3rdApp', {"pkgUrl":schemeName}, function(ret){
			alert(ret);
		});
	}

	function shareFromH5(){
		TenvideoJSBridge.invoke('shareFromH5',{"title": "harray 胡咧咧标题", "content":"内容", "imageUrl":"", "url":"https://movie.douban.com/subject/5154799?a=1", "cid":"m5eim4jo5m5aybg", "vid":"x0016hskj53", "payType":""}, function(ret){
			alert(ret);
		});
	}
	
	function shareTo(){
		TenvideoJSBridge.invoke('shareTo',{"webShareTitle": "harray 胡咧咧标题", "webShareSubTitle":"webShareSubTitle", "webShareImageURL":"", "webShareURL":"https://movie.douban.com/subject/5154799?a=1"}, function(ret){
			alert(ret);
		});
	}
	
	function getVideoInfo(){
		TenvideoJSBridge.invoke('getVideoInfo',null, function(ret){
			alert(ret);
		});
	}
	
	function sendMessage(){
		TenvideoJSBridge.invoke('sendMessage',{'type': '123', 'data': {'test':'hehe'} }, function(ret){
			alert(ret);
		});
	}

	function showLayout(){
		TenvideoJSBridge.invoke('showLayout',{'url': 'http://m.v.qq.com/'}, function(ret){
			alert(ret);
		});
	}

	function closeLayout(){
		TenvideoJSBridge.invoke('closeLayout',null, function(ret){
			alert(ret);
		});
	}

	function openStarRank(){
		TenvideoJSBridge.invoke('openStarRank',null, function(ret){
			alert(ret);
		});
	}

	function hasTapBackground(){
		TenvideoJSBridge.invoke('hasTapBackground',null, function(ret){
			alert(ret);
		});
	}

	function showAppPage(){
		TenvideoJSBridge.invoke('showAppPage',{"mod": 1, "args": {"pt": "","idType" : 1,"starId":  216484,"starName": "harrayhu", "starFaceImg": ""}}, function(ret){
			alert(ret);
		});
	}
	function qqVip2WX() {
		TenvideoJSBridge.invoke('qqVip2WX', nil, function(ret){
			alert(ret);
		});
	}
	
	function cacheVideo(){
		TenvideoJSBridge.invoke('downloadVideo', {"vid":"l0016v835sa", "definition":"hd"});
	}
	function getNetworkState(){


		TenvideoJSBridge.invoke('getNetworkState', null, function(ret){
			var jret = JSON.parse(ret);
//			alert("getNetworkState: " + JSON.stringify(jret.result));
			printLog(ret);
		});
	}

	function downloadFile(){
		TenvideoJSBridge.invoke('downloadFile', {"url":"http://img5.douban.com/view/photo/photo/public/p2235250327.jpg"}, function(ret){
			var jret = JSON.parse(ret);
			alert("downloadFile: " + JSON.stringify(jret.result));
		});
	}
	function getPayVip(){
		TenvideoJSBridge.invoke('getPayVip', null, function(ret){
//			console.log(ret);
//			var jret = JSON.parse(ret);
			alert(ret);
			document.getElementById("apiResult").value = ret;
//			alert("getPayVip: " + JSON.stringify(jret.result));
		});
	}
	function getTicketNum(){
		TenvideoJSBridge.invoke('getTicketNum', null, function(ret){
			console.log(ret); 
			var jret = JSON.parse(ret);
//			alert("getTicketNum: " + JSON.stringify(jret.result));
			document.getElementById("apiResult").value = ret;
			alert(ret);
		});
	}

	function openLocalFile(){
		TenvideoJSBridge.invoke('openLocalFile');
	}

	function gotoDouban(){
		window.location = "http://www.douban.com/photos/album/92041422/";
	}
	
	//{"videoType":"1", "title":"123456", "imageUrl":"http://123", "columnId":"100000", "coverId":"", "videoId":"", "programId":"200000", "dataKey":"" } 
	function actionFollow(type) {
		var jsContent;
		if (type == 'lid') {
			jsContent = {"videoType":"10", "title":"lid", "imageUrl":"http://i.gtimg.cn/qqlive/images/20150413/i1428914692_1.jpg", "columnId":"7128","coverId":"", "videoId":"",  "dataKey":""};
		} else if (type == 'cid') {
			jsContent = {"videoType":"1", "title":"cid", "imageUrl":"http://i.gtimg.cn/qqlive/images/20150413/i1428914692_1.jpg", "coverId":"uuv2z9lhi1akhjq"};
		} else if (type == 'vid') {
			jsContent = {"videoType":"5", "title":"vid", "imageUrl":"http://i.gtimg.cn/qqlive/images/20150413/i1428914692_1.jpg", "columnId":"", "coverId":"", "videoId":"i0016chvz2s", "dataKey":""};
		} else if (type == 'gamepid') {
			jsContent = {"videoType":"6", "title":"pid", "imageUrl":"http://i.gtimg.cn/qqlive/images/20150413/i1428914692_1.jpg", "programId":"11670164"};
		} else if (type == 'sportpid') {
			jsContent = {"videoType":"4", "title":"pid", "imageUrl":"http://i.gtimg.cn/qqlive/images/20150413/i1428914692_1.jpg", "programId":"1280"};
		} else if (type == 'newpid') {
			jsContent = {"videoType":"9996", "title":"pid", "imageUrl":"http://i.gtimg.cn/qqlive/images/20150413/i1428914692_1.jpg", "programId":"278"};
		}
//		alert("begin to call actionFollow");
		TenvideoJSBridge.invoke('actionFollow', jsContent , function(ret){
			console.log(ret);
			var jret = JSON.parse(ret);
			alert("actionFollow: " + JSON.stringify(jret.errCode));
		});
	}
	
	function readAsbinaryString() {
		var file = document.getElementById("file").files[0];
		var reader = new FileReader();
		reader.readAsBinaryString(file);
//		reader.readAsDataURL(file); 
		reader.onload=function(f) {
			var tmpResult = this.result;
//			alert(tmpResult);
			shareInfo("shareQzone", tmpResult.toString());
		};
	}

	function onFileChanged(input){
		console.log(input.files);
		var reader = new FileReader();
		var imgURL;
		reader.onload = function (e) {
			imgURL = e.target.result;
			console.log(imgURL);
			document.getElementById("img1").width=300;
        	document.getElementById("img1").height=300;
			document.getElementById("img1").src=imgURL;
		};
		reader.readAsDataURL(input.files[0]);
	}
	
	function toast(){
		var str = "1测试\"引号 空格和&and一二三四五六七八九十";
		var content =  {'content':str};
		TenvideoJSBridge.invoke('toast', content, function(ret){
		});
	}
	
	function jsAlert() {
		alert(TenvideoJSBridge);
            
		
	}
	
	function switchLogin(type)
	{
		TenvideoJSBridge.invoke('switchLoginState', {'userType':type}, function(ret){
			var jret = JSON.parse(ret);
			printLog(ret);
		});
	}
	
	function showMessageBtn()
	{
		TenvideoJSBridge.invoke('showMessageButton', {'unReadNum':3, 'url':'http://www.qq.com', 'show':1}, function(ret){
			alert(ret);
			document.getElementById("apiResult").value = ret;			
			//var jret = JSON.parse(ret);
			//printLog(ret);
		});		
	}
		
	function hideMessageBtn()
	{
		TenvideoJSBridge.invoke('showMessageButton', {'unReadNum':3, 'url':'http://www.qq.com', 'show':0}, function(ret){
			var jret = JSON.parse(ret);
			printLog(ret);
		});		
	}
	
	function jumpWXBizProfile()
	{
		TenvideoJSBridge.invoke('jumpWXBizProfile', {'profileId':'cll_qq', 'extMsg':'user'}, function(ret){
			var jret = JSON.parse(ret);
			alert(JSON.stringify(jret));
		});		
	}
	
	function genTansPropertyTK()
	{
		TenvideoJSBridge.invoke('genTansPropertyTK', null, function(ret){
			var jret = JSON.parse(ret);
			alert(JSON.stringify(jret));
		});		
	}
	
	function hideJumpButton()
	{
		TenvideoJSBridge.invoke('hideJumpButton', {'hide':true}, function(ret){
			var jret = JSON.parse(ret);
			alert(JSON.stringify(jret));
		});		
	}
	function hideSkip(hideFlag){
		TenvideoJSBridge.invoke('hideJumpButton', {"hide":hideFlag}, function(ret){
		//	alert(ret);
		});
	}
	function connectTenvideoJSBridge(callback) {
	    if (window.TenvideoJSBridge) {
	        callback(TenvideoJSBridge)
	    } else {
	        document.addEventListener('onTenvideoJSBridgeReady', function() {
	            callback(TenvideoJSBridge)
	        }, false)
	    }
	}
	connectTenvideoJSBridge(function(bridge) {
		 // do nothing
      		hideSkip(true)
	})
	function shareLocalImage()
	{
		TenvideoJSBridge.invoke('shareLocalImage', {'imageUrl':'http://p2.xyzs.com/app/13/32/100001495/3aa251f24edf30c4f10ea143c6af4782_i4.jpg'}, function(ret){
			var jret = JSON.parse(ret);
			printLog(ret);
		});
	}
	function openPushSwitch(){
		TenvideoJSBridge.invoke('openPushSwitch', {"enable" : true},function(ret){
			var jret = JSON.parse(ret);
			alert("" + JSON.stringify(jret));
		} );
	}

	function getPushSwitch(){
		TenvideoJSBridge.invoke('getPushSwitch', null,function(ret){
			var jret = JSON.parse(ret);
			alert("" + JSON.stringify(jret));
		} );
	}
