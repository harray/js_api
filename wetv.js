//国际版JSAPI分为几个接口
//1，登录／登出－发起登录操作：目前只支持拉起统一登录页面
function actionLogin(type) {
    TenvideoJSBridge.invoke('actionLogin', { 'type': type }, function (ret) {
        displayParams({ 'type': type }, ret);
    });
}
//2，查询接口：判断当前客户版本是否支持指定JS接口
function checkApi() {
    console.log("checkApi");
    TenvideoJSBridge.invoke('checkApi', { "apiList": ["getDeviceInfo", "actionLogin", "setMoreInfo"] }, function (ret) {
        displayParams({ "apiList": ["getDeviceInfo", "actionLogin", "setMoreInfo"] }, ret)
    });
}
//3，App信息：获取App相关信息
function getAppInfo() {
    TenvideoJSBridge.invoke('getAppInfo', null, function (ret) {
        displayParams({}, ret);
    });
}
//4，设备信息：获取设备信息
function getDeviceInfo() {
    TenvideoJSBridge.invoke('getDeviceInfo', null, function (ret) {
        displayParams({}, ret);
    });
}
//5，Cookie－获得当前用户主账号账号的cookie：目前“qq”，“wx”，“未登录”三种
function getMainCookie() {
    TenvideoJSBridge.invoke('getMainCookie', null, function (ret) {
        displayParams({}, ret);
    });
}

//6，用户信息－获得当前主登录账号的用户信息
function getMainUserInfo() {
    TenvideoJSBridge.invoke('getMainUserInfo', null, function (ret) {
        displayParams({}, ret);
    });
}
//7，查询网络状态－0-无网络 1-wifi 2-2g 3-3g 4-4g 5-其他网络
function getNetworkState() {
    TenvideoJSBridge.invoke('getNetworkState', null, function (ret) {
        displayParams({}, ret);
    });
}
//8，获取会员信息
function getPayVip() {
    TenvideoJSBridge.invoke('getPayVip', null, function (ret) {
        displayParams({}, ret);
    });
}
//9，登出
function logout() {
    TenvideoJSBridge.invoke('logout', null, function (ret) {
        displayParams({}, ret);
    });
}
//10，付费
function openPay() {
    TenvideoJSBridge.invoke('openPay', { "": "" }, function (ret) {
        displayParams({}, ret);
    });
}
//11，View跳转－在新窗口打开url操作
function openUrl(url) {
    TenvideoJSBridge.invoke('openUrl', { "url": url, "type": 1 }, function (ret) {
        displayParams({ "url": url, "type": 1 }, ret);
    });
}
//12，View跳转－Native页面跳转操作
function openView(url) {
    var openUrl = { "url": url };
    TenvideoJSBridge.invoke('openView', openUrl, function (ret) {
        displayParams(openUrl, ret);
    });
    setTimeout("isViewVisible()", 5000);
}
//13，刷新会员信息
function refreshVipInfo(url) {
    TenvideoJSBridge.invoke('refreshVipInfo', {}, function (ret) {
        displayParams({}, ret);
    });
}

//14，查询折扣信息
function getProductIDSDiscountInfo(url) {
    TenvideoJSBridge.invoke('getProductIDSDiscountInfo', {"fromapple":true,"offerid":"1450003448","productids":["com.tenvideoioshd.auto.1.3"]}, function (ret) {
        displayParams({}, ret);
    });
}

//15，查询商品信息
function getProductInfo(url) {
    TenvideoJSBridge.invoke('getProductInfo', {"useCache":true,"offerid":"1450003448","productids":["com.tenvideoioshd.auto.1.3"]}, function (ret) {
        displayParams({}, ret);
    });
}

//16.塞分享数据
function setMoreInfo() {
    TenvideoJSBridge.invoke('setMoreInfo',{
        "hasRefresh": true,
        "hasShare": true,
        "hasFollow": true,
        "actionInfo": {
            "title": "按钮标题",
            "font": "按钮标题字体(14.0)",
            "color": "标题颜色(#ff7e00)",
            "jump": "跳转URL"
        },
        "shareInfo": {
            "title": "zhubiaoti",
            "subTitle": "fubiaoti",
            "singleTitle": "pengyouquanbiaoti",
            "content": "weibocontent",
            "contentTail": "weibobiaoti",
            "imageUrl": "http://123",
            "url": "http://www.qq.com/",
            "style": "0",
            "picList": [
                {
                    "imgUrl": "http://i.gtimg.cn/qqlive/images/20140907/i1410085060_1.jpg",
                    "thumbUrl": "http://i.gtimg.cn/qqlive/images/20140907/i1410078602_1.jpg"
                }
            ],
            "coverId": "15位的字符串",
            "videoId": "11位的字符串"
        },
        "source": "5xxxx",
        "isShareImageOnly": true,
        "panelInfo": {
            "panelType": "0",
            "shareCode": "XXXXXXX"
        }
    }, function (ret) {
        displayParams({}, ret);
    });
}

//17.塞分享数据
function openToolsDialog(params) {
    TenvideoJSBridge.invoke('openToolsDialog', null, null);
}

//18.绑定手机号
function openBindPhonePannel(params) {
    TenvideoJSBridge.invoke('openBindPhonePannel', null, function (ret) {
        displayParams({}, ret);
    });
}

//19.发送验证码
function sendCode(params) {
    TenvideoJSBridge.invoke('sendMobileCode', {areacode:"+86",phone:"13566100279",scene:"resetpwd"}, function (ret) {
        displayParams({}, ret);
    });
}

//Helper
if (typeof TenvideoJSBridge == "object") {
    callback();
} else {
    if (document.addEventListener) {
        document.addEventListener("onTenvideoJSBridgeReady", callbackAfterListener, false);
    } else if (document.attachEvent) {
        document.attachEvent("onTenvideoJSBridgeReady", callbackAfterListener);
    }
}
function callbackAfterListener() {
    //alert("callbackAfterListener");
    callback();
}

function callback() {
    console.log(window.TenvideoJSBridge);
    TenvideoJSBridge.invoke("newToast", { "content": "jsapi is ok!" });
    //登录通知
    TenvideoJSBridge.on("onActionLoginFinish", function (ret) {
        document.getElementById('nativeInvoke').innerHTML = JSON.stringify(JSON.parse(ret), null, 4);
    });
    //登出通知
    TenvideoJSBridge.on("onActionLogoutFinish", function (ret) {
        document.getElementById('nativeInvoke').innerHTML = JSON.stringify(JSON.parse(ret), null, 4);
    });
    //登出通知
    TenvideoJSBridge.on("onIAPPaySuccess", function (ret) {
        document.getElementById('nativeInvoke').innerHTML = JSON.stringify(JSON.parse(ret), null, 4);
    });
}

//展示逻辑
function displayParams(params, callback) {
    let jret = JSON.parse(callback);
    document.getElementById("invokeParams").innerHTML = JSON.stringify(params, null, 4);
    document.getElementById("callbackResult").innerHTML = JSON.stringify(jret, null, 4);
}

