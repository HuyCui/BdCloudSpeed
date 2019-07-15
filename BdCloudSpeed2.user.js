// ==UserScript==
// @name         TestbdScript
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  a tool
// @match        http://*/*
// @grant        none
// @note         2019.07.15 修复关于cookie的bug
// @note         2019.07.15 增加多条记录
// @include  https://pan.baidu.com/play/*
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    
    function getLength(obj){
        let count = 0;
        for(let j = 0; j < obj.length; j++){
            let ch = obj.charAt(j);
            if(ch == '&'){
                count ++;
            }
        }
        return count;
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
        let titles = localStorage.getItem("localTitles");
        if(titles != null){
            title += "&\n"+titles;
        }
        let len = getLength(title);
        console.log(title);
        if(len >= 7){
            let strs=title.split("&");
            title = strs[0]+"&"+strs[1]+"&"+strs[2];
        }
        
        localStorage.setItem("localTitles", title);
        //localStorage.removeItem("localTitles");
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
        let titles = localStorage.getItem("localTitles");
        if(titles == null){
            alert("暂无记录");
        }else{
            alert(titles);
        }
     };
    logs.style.color = "black";

    let selector = document.createElement("select"); //select（提示框按钮）
    selector.style.align = "center";
    selector.style.marginLeft = "250px";
    selector.style.marginBottom = "10px";
    selector.setAttribute("id", "selector");
    let values=[0.8,1.0,1.2,1.25,1.3,1.4,1.5,1.6,1.7,2.0];
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
