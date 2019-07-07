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
    let selector = document.createElement("select"); //select（提示框按钮）
    selector.style.align = "center";
    selector.style.marginLeft = "250px";
    selector.style.marginBottom = "10px";
    selector.setAttribute("id", "selector");
    let values=[1.0,1.2,1.5,1.6,1.7,2.0];
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
        let sp = selector.options[index].value;
         let speeder = parseFloat(sp);
        videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(speeder);
     };
    button.style.color = "black";

    let x = document.getElementById("video-toolbar");
    x.appendChild(selector);
    x.appendChild(button);
})();