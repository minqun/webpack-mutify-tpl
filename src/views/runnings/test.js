// import name from "@source/css/test";
// // 设置大小
// function getSize() {
//   let deviceW = $("body").width();
//   let deviceWidth = 780;
//   $("html").attr("fontSize", `${deviceW / deviceWidth * 100}px`);
// }
// getSize();
// window.onresize = getSize;

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  show() {
    console.log(this.data);
  }
}
class tree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    var node = new Node(data, null, null);
    if (!this.root) {
      this.root = node;
      return;
    }
    var current = this.root;
    var parent = null;
    while (current) {
      parent = current;
      if (data > parent.data) {
        current = current.left;
        // if (!current) {
        //   parent.left = node;
        //   return;
        // }
      } else {
        current = current.right;
        // if (!current) {
        //   parent.right = node;
        //   return;
        // }
      }
    }
  }
}
let t = new tree();
t.insert(4);
t.insert(2);
t.insert(3);
t.insert(1);
t.insert(5);
console.log(t);
