import name from "@source/css/index";
import * as utils from "@source/js/utils";
import "@source/js/index";
// import React from 'react'
// import ReactDom from 'react-dom'
// ReactDom.render(<h1> Hello, world! </h1>, document.getElementById('root'))
if (config.debug) {
    // 是否开启移动调试
    let script = document.createElement("script");
    script.src = "//cdn.jsdelivr.net/npm/eruda";
    document.body.appendChild(script);
    script.onload = () => {
        try {
            eruda.init();
        } catch (e) { console.log(e) };

    }

}

function setFontSize(designWidth, minWidth, maxWidth) {
    var htmlEl = document.documentElement,
        momentWith = 0;
    momentWith =
        htmlEl.clientWidth > maxWidth ? maxWidth : htmlEl.clientWidth;
    momentWith = momentWith < minWidth ? minWidth : momentWith;
    htmlEl.style.fontSize = (momentWith / designWidth) * 100 + 'px';
}
setFontSize(320, 200, 640);
window.addEventListener('resize', function() {
    setFontSize(320, 200, 640);
});