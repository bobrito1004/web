var curTime = new Date().getTime();
var loadTime = (new Date()).getTime() - curTime;
var footer = document.getElementsByTagName("footer");
var el = document.createElement("div").appendChild(document.createElement('p').appendChild(document.createTextNode("Load time: " + loadTime + "ms")))
footer[0].appendChild(el)