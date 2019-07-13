// ==UserScript==
// @name         BdCloudSpeed2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  baidu cloud tool
// @match        http://*/*
// @grant        none
// @include  https://pan.baidu.com/play/*
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function getCookie(name)
    {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg)){
            return unescape(arr[2]);
        }
        else{
            return null;
        }
    }

    let logs = document.createElement("input"); //创建一个input对象（提示框按钮）
    logs.setAttribute("type", "button");
    logs.setAttribute("value", "记录标题");
    logs.style.width = "60px";
    logs.style.align = "center";
    logs.style.marginLeft = "10px";
    logs.style.marginBottom = "10px";
    logs.style.background = "#B3D8FE";
    logs.onclick = function () {//绑定点击事件
        var title = document.getElementsByClassName("video-title-left")[0].innerText;
        var co="vedioscookie=";
        console.log(title);
        document.cookie = co+title;
     };
    logs.style.color = "black";

     let getter = document.createElement("input"); //创建一个input对象（提示框按钮）
    getter.setAttribute("type", "button");
    getter.setAttribute("value", "SHOW");
    getter.style.width = "60px";
    getter.style.align = "center";
    getter.style.marginLeft = "10px";
    getter.style.marginBottom = "10px";
    getter.style.background = "#B3D8FE";
    getter.onclick = function () {//绑定点击事件
        let title1 = getCookie("vedioscookie");
        alert(title1);
     };
    logs.style.color = "black";

    let selector = document.createElement("select"); //select（提示框按钮）
    selector.style.align = "center";
    selector.style.marginLeft = "250px";
    selector.style.marginBottom = "10px";
    selector.setAttribute("id", "selector");
    let values=[1.0,1.2,1.25,1.3,1.4,1.5,1.6,1.7,2.0];
    for(let i = 0; i < values.length; i++){
        selector.options.add(new Option(values[i],i));
    }


    let button = document.createElement("input"); //创建一个input对象（提示框按钮）
    button.setAttribute("type", "button");
    button.setAttribute("value", "加速");
    button.style.width = "60px";
    button.style.align = "center";
    button.style.marginLeft = "10px";
    button.style.marginBottom = "10px";
    button.style.background = "#B3D8FE";
    button.onclick = function () {//绑定点击事件
         //var sp = document.getElementById('videoSpeeder').value;
        let index = selector.selectedIndex;
        let sp = selector.options[index].text;
         let speeder = parseFloat(sp);
        //alert(sp);
        videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(speeder);
     };
    button.style.color = "black";

    let now = new Date();
    let end = new Date('2019-12-21 08:00:00');
    let span = end.getTime() - now.getTime();
    let result = '';
    let days = Math.floor(span / (24 * 3600 * 1000));
    days += 1;
    result += days+'天';
    let pra = document.createElement("span");
    pra.innerHTML = result;
    pra.style.color = 'red';

    let x = document.getElementById("video-toolbar");
    x.appendChild(selector);
    x.appendChild(button);
    x.appendChild(logs);
    x.appendChild(getter);
    x.appendChild(pra);
})();