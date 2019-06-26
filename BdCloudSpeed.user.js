// ==UserScript==
// @name         BdCloudSpeed
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  baidu cloud tool
// @author       horizonhui
// @match        http://*/*
// @grant        none
// @include  https://pan.baidu.com/play/*
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var button = document.createElement("input"); //创建一个input对象（提示框按钮）
    var speed = document.createElement("input");
    speed.setAttribute("type", "text");
    speed.setAttribute("id", "videoSpeeder");
    speed.style.width = "60px";
    speed.style.align = "center";
    speed.style.marginLeft = "250px";
    speed.style.marginBottom = "10px";
    button.setAttribute("type", "button");
    button.setAttribute("value", "加速");
    button.style.width = "60px";
    button.style.align = "center";
    button.style.marginLeft = "10px";
    button.style.marginBottom = "10px";
    button.style.background = "#b46300";
    button.onclick = function () {                          //绑定点击事件
         var sp = document.getElementById('videoSpeeder').value;
         var speeder = parseFloat(sp);
        videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(speeder);
     };
    button.style.color = "white";
    var x = document.getElementById("video-toolbar");
    x.appendChild(speed);
    x.appendChild(button);
})();