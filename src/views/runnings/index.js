import name from "@source/css/index";
import * as utils from "@source/js/utils";
import "@source/js/index";
// import React from 'react'
// import ReactDom from 'react-dom'
// ReactDom.render(<h1> Hello, world! </h1>, document.getElementById('root'))
function getSize() {
  let deviceW = $("body").width();
  let deviceWidth = 780;
  $("html").attr("fontSize", `${deviceW / deviceWidth * 100}px`);
}
getSize();
window.onresize = getSize;
