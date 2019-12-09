import name from "@source/css/demo";
import "@source/js/demo";
import * as utils from "@source/js/utils";
import config from "../../../page.config.js"

console.log("process.env.NODE_ENV :", config)
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
// import React from 'react'
// import ReactDom from 'react-dom'
// ReactDom.render(<h1> Hello, world! </h1>, document.getElementById('root'))
console.log(name, utils);