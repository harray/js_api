/**
 * 
 */
//一，基础功能
//1，查询接口：判断当前客户版本是否支持指定JS接口
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
//2，App信息：获取App相关信息
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
//3，设备信息：获取设备信息
	function getDeviceInfo(){
		TenvideoJSBridge.invoke('getDeviceInfo', null, function(ret){			
//			var jret = JSON.parse(ret);
//			alert(JSON.stringify(jret.result));
			alert(ret);
			document.getElementById("apiResult").value = ret;
		});
	}
//4，More菜单：设置More菜单
	function setMoreInfo(){
		alert("set more info");
		var params = {"hasRefresh":true, "hasShare":true, "hasFollow":true};
	//			"shareInfo":"{\"title\":\"abc\", \"subTitle\":\"123456\", \"content\":\"123456\", \"imageUrl\":\"http:\/\/123\", \"imageData\":\"10101010100101\", \"url\":\"http://www.qq.com\", \"coverId\":\"\", \"videoId\":\"\" }", 
	//				"followInfo":"{\"videoType\":\"1\", \"title\":\"123456\", \"imageUrl\":\"http://123\", \"columnId":\"100000", \"coverId\":\"\", \"videoId\":\"\", \"programId\":\"200000\", \"dataKey\":\"\"}"} ;
		TenvideoJSBridge.invoke('setMoreInfo', params, function(ret){
			var jret = JSON.parse(ret);
			alert(JSON.stringify(jret.errCode));
		});
	}

//6，登录／登出－发起登录操作：目前“qq”，“wx”，“tv”三种
	function actionLogin(type){
		TenvideoJSBridge.invoke('actionLogin', {'type':type}, function(ret){
			alert("actionLogin:\n" + ret);
			var jret = JSON.parse(ret);
//			alert(JSON.stringify(jret.errCode));
		});
	}

//7，登录／登出－当前主登录状态：目前“qq”，“wx”，“未登录”三种
	function getMainLoginType(){
		TenvideoJSBridge.invoke('getMainLoginType', null, function(ret){
			alert(ret);
			var jret = JSON.parse(ret);
			alert(JSON.stringify(jret.result) + " " + JSON.stringify(jret.errCode));
		});
	}
//8，登录／登出－切换账号
	function switchLogin(type){
		TenvideoJSBridge.invoke('switchLoginState', {'userType':type}, function(ret){
			var jret = JSON.parse(ret);
			//printLog(ret);
			alert(ret);
		});
	}
//9，用户信息－获得当前用户不同类型账号的用户信息：目前“qq”，“wx”，“tv”三种
	function getUserInfo(type){
		TenvideoJSBridge.invoke('getUserInfo', {'type':type}, function(ret){
			alert(ret);
			var jret = JSON.parse(ret);
//			alert(JSON.stringify(jret.result));
//			alert(JSON.stringify("errCode:" + jret.errCode));
//			alert(JSON.stringify("errMsg:" + jret.errMsg));
		});
	}
//10，用户信息－获得当前主登录账号的用户信息：目前“qq”，“wx”，“未登录”三种
	function getMainUserInfo(){
		TenvideoJSBridge.invoke('getMainUserInfo', null, function(ret){
			alert(ret);
			var jret = JSON.parse(ret);
//			alert(JSON.stringify(jret.result));
		});
	}
//11，Cookie－获得当前用户不同类型账号的cookie：目前“qq”，“wx”，“tv”三种
	function getCookie(type){
		TenvideoJSBridge.invoke('getCookie', {'type':type}, function(ret){
			alert(ret);
			var jret = JSON.parse(ret);
//			alert(JSON.stringify("errCode:" + jret.errCode));
		});
	}
//12，Cookie－获得当前用户主账号账号的cookie：目前“qq”，“wx”，“未登录”三种
	function getMainCookie(){
		TenvideoJSBridge.invoke('getMainCookie', null, function(ret){
			alert(ret);
			var jret = JSON.parse(ret);
		});
	}
//13，View跳转－Native页面跳转操作
	function openView(url){
		var openUrl = {"url": url};
		TenvideoJSBridge.invoke('openView', openUrl, function(ret){
			var jret = JSON.parse(ret);
		});
	}
	function gotoHomepage(){
		TenvideoJSBridge.invoke("openView", {"url":"txvideo://v.qq.com/HomeActivity?tabIndex=0&channelId=100191&channelTitle=%e4%b8%ba%e4%bd%a0%e6%8e%a8%e8%8d%90","close":"1"});
	}
//14，View跳转－在新窗口打开url操作
	function openUrl(url) {
			TenvideoJSBridge.invoke('openUrl', {"url":url, "type":1}, function(ret){
		});
	}
//15，窗口关闭－关闭整个窗口
	function close(){
		TenvideoJSBridge.invoke('close', null, function(ret){
		});
	}
//16，页面控制－返回前页面
	function goBack(){
		TenvideoJSBridge.invoke('goBack', null, function(ret){
		});
	}
//17，页面控制－页面显示
	function showH5(){
		TenvideoJSBridge.showH5();
	}
//18，页面控制－页面隐藏
	function hideH5(){
		TenvideoJSBridge.hideH5();
	}
//19，页面控制－页面移除
	function closeH5(){
		TenvideoJSBridge.closeH5();
	}
//20，页面状态－页面曝光
	function onPageAppear(){
		TenvideoJSBridge.onPageAppear();
	}
//21，页面状态－页面消失
	function onPageDisappear(){
		TenvideoJSBridge.onPageDisappear();
	}
//22，弹提示－弹一个Native的弱提示框
	function toast(){
		var str = "1测试\"引号 空格和&and一二三四五六七八九十";
		var content =  {'content':str};
		TenvideoJSBridge.invoke('toast', content, function(ret){
		});
	}
//25，查询网络状态－0-无网络 1-wifi 2-2g 3-3g 4-4g 5-其他网络
	function getNetworkState(){
		TenvideoJSBridge.invoke('getNetworkState', null, function(ret){
			var jret = JSON.parse(ret);
			alert("getNetworkState: " + JSON.stringify(jret.result));
			//printLog(ret);
		});
	}
//26，获取渠道号－ChannelID
	function getMarketChannelID(){
		TenvideoJSBridge.invoke('getMarketChannelID', null, function(ret){
			var jret = JSON.parse(ret);
			alert("ChannelID: " + JSON.stringify(jret.result));
		});
	}
//27，是否是新安装用户－按天计算
	function getInstallUserState(type){
		TenvideoJSBridge.invoke('getMarketChannelID', type, function(ret){
			alert(ret);
			var jret = JSON.parse(ret);
		});
	}

//二，UI样式控制
//1，刷新标题接口

//三，扩展功能
//1，是否安装xxx app
	function isWXAppInstalled(){
		TenvideoJSBridge.invoke('isInstalled', {"pkgName":"weixin"}, function(ret){
			var jret = JSON.parse(ret);
			alert("微信isInstalled: " + JSON.stringify(jret.result));
		});
	}
	function isWXAppInstalled_iOS9(){
		TenvideoJSBridge.invoke('isInstalled', {"scheme":"weixin://"}, function(ret){
			var jret = JSON.parse(ret);
			alert("微信isInstalled: " + JSON.stringify(jret.result));
		});
	}
//2，打开xxx app
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
//3，获取地理位置
	function getLocation(){
		TenvideoJSBridge.invoke('getLocation', null, function(ret){
			alert(ret);
		});
	}
//7，下载第三方app
	function download() {
		TenvideoJSBridge.invoke('download3rdApp', null, function(ret){
			alert(ret);
		});
	}

//四，会员相关
//1，获取会员信息
	function getPayVip(){
		TenvideoJSBridge.invoke('getPayVip', null, function(ret){
			console.log(ret);
			var jret = JSON.parse(ret);
			alert(ret);
//			alert("getPayVip: " + JSON.stringify(jret.result));
		});
	}
//2，获取观影券数量
	function getTicketNum(){
		TenvideoJSBridge.invoke('getTicketNum', null, function(ret){
			console.log(ret); 
			var jret = JSON.parse(ret);
//			alert("getTicketNum: " + JSON.stringify(jret.result));
			alert(ret);
		});
	}
//3，显示站内信入口
	function showMessageBtn()
	{
		TenvideoJSBridge.invoke('showMessageButton', {'unReadNum':3, 'url':'http://www.qq.com', 'show':1}, function(ret){
			var jret = JSON.parse(ret);
			printLog(ret);
		});		
	}
//4，隐藏站内信入口
	function hideMessageBtn()
	{
		TenvideoJSBridge.invoke('showMessageButton', {'unReadNum':3, 'url':'http://www.qq.com', 'show':0}, function(ret){
			var jret = JSON.parse(ret);
			printLog(ret);
		});		
	}

//六，游戏相关
//1，点击图片放大
	function preViewPhotos() {
		TenvideoJSBridge.invoke('preViewPhotos', {'photopaths':['http://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/w/w7ju7urc1x4w3jc.jpg','http://i.gtimg.cn/qqlive/images/still/files/05/05sbd8687.jpg']}, function(ret){
			alert(ret);
		});
	}
//2，剪切板复制
	function copyToClipBoard(param){
		var copycontent = param + "://";
		TenvideoJSBridge.invoke('copyToClipBoard', {"content":copycontent}, function(ret){
			alert(ret);
		});
	}

//七，分享相关
//1，拉起操作面板
//	function openToolsDialog() {
//		TenvideoJSBridge.invoke('openToolsDialog', null, function(ret){
//			alert(ret);
//		});
//	}
	function openToolsDialog(){
		TenvideoJSBridge.invoke('openToolsDialog', {"icon":["refresh", "follow", "circle", "share"]}, function(ret){
			var jret = JSON.parse(ret);
//			alert(JSON.stringify(jret.result));
		});
	}
//8，分享本地图片
	function shareLocalImage(){
		TenvideoJSBridge.invoke('shareLocalImage', {'imageUrl':'http://p2.xyzs.com/app/13/32/100001495/3aa251f24edf30c4f10ea143c6af4782_i4.jpg'}, function(ret){
			var jret = JSON.parse(ret);
			printLog(ret);
		});
	}
//九，Push相关
//1,获取当前push通道开关－获取当前push通道开关的状态
	function getPushSwitch(){
		TenvideoJSBridge.invoke('getPushSwitch', null,function(ret){
			var jret = JSON.parse(ret);
			alert("" + JSON.stringify(jret));
		} );
	}
//2，引导用户打开push通道开关－push通道开关未开启时，拉起引导用户打开push通道开关的页面
	function openPushSwitch(){
		TenvideoJSBridge.invoke('openPushSwitch', {"enable" : true},function(ret){
			var jret = JSON.parse(ret);
			alert("" + JSON.stringify(jret));
		} );
	}
	function closePushSwitch(){
		TenvideoJSBridge.invoke('openPushSwitch', {"enable" : false},function(ret){
			var jret = JSON.parse(ret);
			alert("" + JSON.stringify(jret));
		} );
	}

//十，通知
//28，切换前后台通知－进入前台事件onAppEnterForeground
//29，切换前后台通知－退到后台事件onAppEnterBackground
//30，切换前后台通知－前台激活事件onAppDidBecomeActive
//31，切换前后台通知－后台挂起事件onAppWillResignActive
//32，登录通知onActionLoginFinish
//33，登出通知onActionLogoutFinish

//其他未整理部分
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
			//登录通知
         	TenvideoJSBridge.on("onActionLoginFinish", function(ret){  
			 alert("onActionLoginFinish: " + ret);
         	});
	    		//登出通知
         	TenvideoJSBridge.on("onActionLogoutFinish", function(ret){
 			 alert("onActionLogoutFinish: " + ret);
          	});
	    		//进入前台事件
         	TenvideoJSBridge.on("onAppEnterForeground", function(ret){
 			 alert("onAppEnterForeground: " + ret);
          	});
	    		//退到后台事件
	 	TenvideoJSBridge.on("onAppEnterBackground", function(ret){
 			 alert("onAppEnterBackground: " + ret);
          	});
	    		//前台激活事件
	 	TenvideoJSBridge.on("onAppDidBecomeActive", function(ret){
 			 alert("onAppDidBecomeActive: " + ret);
          	});
	    		//后台挂起事件
	 	TenvideoJSBridge.on("onAppWillResignActive", function(ret){
 			 alert("onAppWillResignActive: " + ret);
});
         	TenvideoJSBridge.on("onActionLogin", function(ret){
 			// alert("onActionLogin: " + ret);
          	});
         	TenvideoJSBridge.on("onActionFollow", function(ret){
// 			alert("onActionFollow: " + ret);
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




	

	
	function cacheVideo(){
		TenvideoJSBridge.invoke('downloadVideo', {"vid":"l0016v835sa", "definition":"hd"});
	}
	function downloadFile(){
		TenvideoJSBridge.invoke('downloadFile', {"url":"http://img5.douban.com/view/photo/photo/public/p2235250327.jpg"}, function(ret){
			var jret = JSON.parse(ret);
			alert("downloadFile: " + JSON.stringify(jret.result));
		});
	}
	function openLocalFile(){
		TenvideoJSBridge.invoke('openLocalFile');
	}
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
