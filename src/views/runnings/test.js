import name from "@source/css/test";
import consolaGlobalInstance from "_consola@2.11.0@consola";


((mw, mh, rect) => {
    let i = 0;
    const colors = ["red", "yellow", "red", "yellow", "red", "yellow", "red", "yellow", "red", "yellow", "red", "yellow", "red", "yellow", "red", "yellow", "red", "yellow", "red", "yellow", "red", "yellow"];
    let dom = document.getElementById("step");
    let step = mw / rect;
    let left = 0;
    let top = 0;
    setInterval(() => {
        if (i < 5) {
            dom.style.background = `${colors[i]}`
            dom.style.webkitFilter = `blur(5px)`
            dom.style.mFilter = `blur(5px)`
            dom.style.filter = `blur(5px)`
        } else {
            dom.style.background = `${colors[i % 5]}`
            dom.style.webkitFilter = `blur(5px)`
            dom.style.mFilter = `blur(5px)`
            dom.style.filter = `blur(5px)`
        }

        if (i <= step && left < mh && top == 0) {
            top = 0;
            left = i * rect;
            dom.style.transform = `translateX(${left}px)`
            dom.style.webkitTransform = `translateX(${left}px)`
            dom.style.msTransform = `translateX(${left}px)`
        } else if (left == mw && top < mh) {
            top = (i - step) * rect
            dom.style.transform = `translate(${mw}px, ${top}px)`
            dom.style.webkitTransform = `translate(${mw}px, ${top}px)`
            dom.style.msTransform = `translate(${mw}px, ${top}px)`
        } else if (top == mh && -left < mw) {
            left = -(i - (step * 2)) * rect
            top = mh;
            dom.style.transform = `translate(${mw +left}px, ${mh}px)`
            dom.style.webkitTransform = `translate(${mw+left}px, ${mh}px)`
            dom.style.msTransform = `translate(${mw+left}px, ${mh}px)`
        } else if (-left == mw || left == 0 && -top < mh) {
            left = 0;
            top = -(i - (step * 3)) * rect;
            dom.style.transform = `translate(${0}px, ${mh + top}px)`
            dom.style.webkitTransform = `translate(${0}px, ${mh + top}px)`
            dom.style.msTransform = `translate(${0}px, ${mh + top}px)`
        } else {
            i = 1;
            top = 0;
            left = i * rect;
            dom.style.transform = `translateX(${left}px)`
            dom.style.webkitTransform = `translateX(${left}px)`
            dom.style.msTransform = `translateX(${left}px)`
        }
        i += 1;
    }, 1)
})
// (200, 200, 5);
function reverseSentence(sentence) {
    // 第一次翻转：每个字符
    const chars = sentence.split("").reverse();
    let result = "",
        last = []; // 保存上一个空格到当前空格之间的所有字符

    chars.forEach(ch => {
        // 遇到空格，说明之前的字符组成了单词
        // 进行第二次翻转：单词
        if (ch === " ") {
            result += last.reverse().join("");
            last.length = 0; // 清空上一个单词
        }

        last.push(ch);
    });

    result += last.reverse().join("");
    return result;
}

/**
 * 测试代码，输出：
 * student.a am I
 */
console.log(reverseSentence("I am a student."));
const MIN_INT_ABS = Math.pow(2, 31);
const MAX_INT = MIN_INT_ABS - 1;

/**
 * 在arr[left, right]中顺序查找最小值
 * @param {Array} arr
 * @param {Number} left
 * @param {Number} right
 */
function orderSearchMin(arr, left, right) {
    let min = arr[left];

    for (let i = left + 1; i <= right; ++i) {
        arr[i] < min && (min = arr[i]);
    }

    return min;
}

/**
 * 在旋转数组arr中用二分法查找最小值
 * @param {Array} arr
 */

function binSearchMin(arr) {
    if (!Array.isArray(arr) || !arr.length) {
        throw Error("Empty Array");
    }

    let left = 0,
        right = arr.length - 1,
        mid = null;

    while (left < right) {
        if (right === 1 + left) {
            return arr[right];
        }

        mid = Math.floor((left + right) / 2);

        if (arr[mid] === arr[left] && arr[mid] === arr[right]) {
            // 无法判断最小值位置
            return orderSearchMin(arr, left, right);
        }

        if (arr[mid] >= arr[left]) {
            // 最小值在右边
            left = mid;
        } else if (arr[mid] <= arr[right]) {
            // 最小值在左边
            right = mid;
        }
    }

    return arr[right];
}

function test(arg1, arg2) {
    console.log(arg1, arg2);
    console.log(this.a, this.b);
}
/**
 * 测试代码
 */
Function.prototype.bind2 = function(context) {
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }

    const that = this;
    // 保留之前的参数，为了下面的参数拼接
    const args = [...arguments].slice(1);

    return function F() {
        // 如果被new创建实例，不会被改变上下文！
        if (this instanceof F) {
            return new that(...args, ...arguments);
        }

        // args.concat(...arguments): 拼接之前和现在的参数
        // 注意：arguments是个类Array的Object, 用解构运算符..., 直接拿值拼接
        return that.apply(context, args.concat(...arguments));
    };
};

/**
 * 以下是测试代码
 */

function test(arg1, arg2) {
    console.log(arg1, arg2);
    console.log(this.a, this.b);
}

const test2 = test.bind2({
        a: "a",
        b: "b"
    },
    1
); // 参数 1

test2(2); // 参数 2
function outer() {
    inner();
}

function inner(a, b = 1) {
    console.log('String'.charCodeAt('index'));
}

outer(); // true



function Person() {

}
Person.prototype = {
    name: '123124'
}
Object.defineProperty(Person.prototype, 'constructor', {
    enumerable: false,
    value: Person,
})
const obj = {
    value: ""
};


function createFunction() {
    var result = new Array();

    for (var i = 0; i < 10; ++i) {
        result[i] = function() {
            return i;
        };
    }

    return result[0];
}
console.log(createFunction()())
if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
    throw new Error("当前浏览器对FileAPI的支持不完善");
}

function handleFileSelect(event) {
    const { files } = event.target;
    if (!files.length) {
        console.log("没有选择文件");
        return;
    }

    console.log("选中的文件信息是：", files);
}

document
    .querySelector("#files")
    .addEventListener("change", handleFileSelect, false);