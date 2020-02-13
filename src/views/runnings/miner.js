import name from "@source/css/miner";
import * as utils from "@source/js/utils";
import "@source/js/miner";

require("@source/images/worker/bg/bg.png")
require("@source/images/worker/bg/btn_bg.png")
require("@source/images/worker/bg/download_button.png")
require("@source/images/worker/bg/elevator.png")
require("@source/images/worker/bg/hb_bg.png")
require("@source/images/worker/bg/hb_2.png")
require("@source/images/worker/bg/button_2.png")
require("@source/images/worker/bg/logo.png")
require("@source/images/worker/bg/heightlign.png")
require("@source/images/worker/bg/up_su_button.png")
require("@source/images/worker/bg/up_mi_button.png")
require("@source/images/worker/bg/up_el_button.png")
require("@source/images/worker/bg/up_button_01.png")
require("@source/images/worker/bg/up_button_02.png")
require("@source/images/worker/bg/up_button_03.png")
require("@source/images/worker/bg/hb_bg_02.png")
require("@source/images/worker/bg/hb_p.png")
require("@source/images/worker/bg/lv.gif")
require("@source/images/worker/bg/miner.png")
require("@source/images/worker/bg/lv.01.png")
require("@source/images/worker/bg/lv.02.png")
require("@source/images/worker/bg/lv.03.png")
require("@source/images/worker/bg/lv.04.png")
require("@source/images/worker/bg/lv.05.png")
require("@source/images/worker/bg/lv.06.png")
require("@source/images/worker/bg/lv.07.png")
require("@source/images/worker/bg/lv.08.png")
require("@source/images/worker/bg/lv.09.png")
require("@source/images/worker/bg/lv.10.png")
require("@source/images/worker/bg/lv.11.png")
require("@source/images/worker/bg/lv.12.png")
require("@source/images/worker/bg/lv.13.png")
require("@source/images/worker/bg/lv.14.png")
require("@source/images/worker/bg/lv.15.png")
require("@source/images/worker/bg/miner2.png")
require("@source/images/worker/bg/more.png")
require("@source/images/worker/bg/finger.png")
require("@source/images/worker/bg/jiangong1.png")
require("@source/images/worker/bg/jiangong2.png")
require("@source/images/worker/bg/jiangong3.png")
require("@source/images/worker/bg/jiangong4.png")
require("@source/images/worker/bg/jiangong5.png")
require("@source/images/worker/bg/jiangong6.png")
require("@source/images/worker/bg/jiangong7.png")
require("@source/images/worker/bg/jiangong8.png")
require("@source/images/worker/bg/jiangong9.png")
require("@source/images/worker/bg/jiangong10.png")
require("@source/images/worker/bg/jiangong11.png")
require("@source/images/worker/bg/jiangong12.png")
require("@source/images/worker/bg/jiangong13.png")
require("@source/images/worker/bg/jiangong14.png")
require("@source/images/worker/bg/jiangong15.png")
require("@source/images/worker/bg/Elevator1.png")
require("@source/images/worker/bg/Elevator2.png")
require("@source/images/worker/bg/Elevator3.png")
require("@source/images/worker/bg/Elevator4.png")
require("@source/images/worker/bg/Elevator5.png")
require("@source/images/worker/bg/Elevator6.png")
require("@source/images/worker/bg/Elevator7.png")
require("@source/images/worker/bg/Elevator8.png")
require("@source/images/worker/bg/Elevator9.png")
require("@source/images/worker/bg/Elevator10.png")
require("@source/images/worker/bg/Elevator11.png")
require("@source/images/worker/bg/Elevator12.png")
require("@source/images/worker/bg/Elevator13.png")
require("@source/images/worker/bg/Elevator14.png")
require("@source/images/worker/bg/Elevator15.png")
require("@source/images/worker/bg/m1.gif")
require("@source/images/worker/bg/m2.gif")
require("@source/images/worker/bg/m2Q.gif")
require("@source/images/worker/bg/tuiche1.png")
require("@source/images/worker/bg/tuiche2.png")
require("@source/images/worker/bg/tuiche3.png")
require("@source/images/worker/bg/supervisor.png")
require("@source/images/worker/bg/winmoney_p.png")
require("@source/images/worker/bg/diamond.png")
require("@source/images/worker/bg/diamondText.png")
require("@source/images/worker/bg/quily.png")
require("@source/images/worker/bg/shengji.png")
require("@source/images/worker/bg/gold.png")
require("@source/images/worker/bg/coin.png")
require("@source/images/worker/bg/cir2.png")
require("@source/images/worker/bg/uplight.gif")
/** 绘制背景**/
var setMaxMoney = 10;
var moneyDefault = 0 // 金钱数量
var gameEnd = false;
var docEl = document.documentElement || document;
var startSecond = new Date().getTime();
var endSecond = new Date().getTime();
var timepz = (endSecond - startSecond) / 100000;
console.log(startSecond);
var setWidth = 720; // 设备尺寸
var cW = docEl.clientWidth > 720 ? 720 : docEl.clientWidth;
var cH = docEl.clientHeight;
var iv = cW / setWidth; // 比例
var upBtns = null; // 升级按钮
var timerInt1 = null;
var timerInt2 = null;
var timerInt3 = null;
var mainStep = 1; // 升级之后矿工速度
var assetDir = './src/sources/images/worker/'; // 图片路径配置
var startStep = 1; // 开始默认工种
var Miner2 = null; // 矿工2
var Miner3 = null; // 矿工3

var plft = 240 * iv; // 矿工移动位移
var prgt = 240 * iv; // 矿工移动位移
var gifBox2 = null; // 电梯工
var gifBox3 = null; // 监工
var num1 = -2; // 矿工1配置动画
var num2 = -2; // 矿工2配置动画
var num3 = -2; // 矿工3配置动画
var tweenDiamond = null; // 钻石动画
var tweenCoin = null; //金币动画
var tweenCoinAdd = null // 推车金币
var isSecSpeed = false;
var stepCache = {
    m1: 1, // 矿工
    m2: 1, // 电梯工
    m3: 1, // 工头
}
var timerShowHbType = {
    gold: null,
    diamond: null
}

function drawBackground(background, beachImg) {
    var context = background.getContext();
    var w = iv * beachImg.width;
    var h = iv * beachImg.height;
    context.drawImage(beachImg, 0, 0, w, h);
}

function groupMan(layer, images, type, num, step, x, y, callback) {
    var group = new Konva.Group({
        id: 'group' + type,
        x: 80 * iv * step + x,
        y: 560 * iv + y,

    });
    var txt = null;
    var btntxt = null;
    switch (type) {
        case 1:
            txt = 'miner';
            break;
        case 2:
            txt = 'el';
            break;
        case 3:
            txt = 'supervisor';
            break;
        case 4: // 推车矿工1
            txt = 'miner1';
            break;
        case 5: // 推车矿工2
            txt = 'miner2';
            break;
        case 6: // 推车矿工3
            txt = 'miner3';
            break;
        case 111: // 多个挖矿工
            txt = 'miner';
            break;
        default:
            txt = 'miner';
            break;
    };
    switch (type) {
        case 1:
            btntxt = 'up_mi_button';
            break;
        case 2:
            btntxt = 'up_el_button';
            break;
        case 3:
            btntxt = 'up_su_button';
            break;
        case 4:
            btntxt = 'up_mi_button';
            break;
        default:
            btntxt = 'up_mi_button';
            break;
    };
    // 人物
    var img = null;

    if (type == 2) {
        img = images[txt + stepCache['m' + type]]
    } else {
        img = images[txt];
    }
    var man = null
    if (type == 1) {
        img = setGif(layer, assetDir + 'bg/m2.gif');
        man = new Konva.Image({
            id: 'man1',
            image: img,
        })
    } else if (type == 111) {
        img = setGif(layer, assetDir + 'bg/m2.gif');
        man = new Konva.Image({
            id: 'man1',
            image: img,
            x: x,
            y: y,
        })
    } else if (type == 4 || type == 5 || type == 6) {
        img = setGif(layer, assetDir + 'bg/m1.gif');
        man = new Konva.Image({
            id: 'man' + type,
            image: img,
        })
    } else {
        man = new Konva.Image({
            id: 'man' + type,
            image: img,
            width: img.width * iv,
            height: img.height * iv,
        })

    }


    if (type == 2) {
        man.y(15 * iv);
        man.x(10 * iv);
    }
    if (type < 4) {
        var mbtn = new Konva.Image({
            y: -140 * iv,
            zIndex: 2,
            id: 'mbths',
            image: images[btntxt],
            width: images[btntxt].width * iv,
            height: images[btntxt].height * iv,
        })
        var upLight = new Konva.Image({
            y: type == 2 ? -50 * iv : -80 * iv,
            x: type == 3 ? -60 * iv : -50 * iv,
            zIndex: 2,
            opacity: 0,
            id: 'uplight' + type,
            image: setGif(layer, assetDir + 'bg/uplight.gif'),
        })

        var lv = stepCache['m' + type] > 9 ? stepCache['m' + type] : '0' + stepCache['m' + type];
        // lv
        var lvType = new Konva.Image({
            image: images['lv_' + lv],
            x: 0,
            y: -40 * iv,
            width: images['lv_' + lv].width * iv,
            height: images['lv_' + lv].height * iv
        })
        // 按钮
        mbtn.timerUp = null;
        mbtn.on('click touchstart', function () {
            startStep = type;
            console.log(type, group);
            if (stepCache['m' + startStep] == 15) {
                return false;
            }
            if (group.getChildren()[2]) {
                if (mbtn.timerUp) clearTimeout(mbtn.timerUp);
                group.getChildren()[2].opacity(1);
                mbtn.timerUp = setTimeout(function () {
                    group.getChildren()[2].opacity(0);
                }, 500)
            };

            if (callback) callback(function () {
                stepCache['m' + startStep] += 1;
                lv = stepCache['m' + type] > 9 ? stepCache['m' + type] : '0' + stepCache['m' + type];
                lvType.image(images['lv_' + lv]);
                if (type == 2) {
                    man.image(images[txt + stepCache['m' + type]])
                } else if (type == 3) {
                    man.image(images['su' + stepCache['m' + type]])
                }
                layer.draw();
            })


        })
        group.add(lvType);
        group.add(mbtn);
        group.add(upLight);
    } else {
        // 获得固定+100
        var textInfo = new Konva.Text({
            x: -26 * iv,
            y: 0,
            id: 'info',

            fontSize: 28 * iv,
            lineHeight: 1,
            // stroke: "#713029",
            fontVariant: 'small-caps',
            fill: "rgb(255,255,255)",
            stroke: "rgb(255,255,255)",
            strokeWidth: 0.5,
            opacity: 0,
            offset: {
                x: 0,
                y: 0,
            },
            fontStyle: 'italic',
            align: 'center',
            text: '+100',
        });
        group.add(textInfo);

    }

    group.add(man);


    return group;
}

//  升级按钮 
function upBtnFun(layer, upBtns, images, type) {
    var txt = '';
    switch (type) {
        case 1:
            txt = 'up_mi_button';
            break;
        case 2:
            txt = 'up_el_button';
            break;
        case 3:
            txt = 'up_su_button';
            break;
        default:
            txt = 'up_mi_button';
            break;
    };
    upBtns.image(images[txt]);
    layer.draw();



}
// 创建层元素
function bgLayerFun(layer, images, stage) {
    var groupHb = new Konva.Group({
        id: 'hbcode',
        x: 486 * iv,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        offset: {
            x: images.hb_bg.width * iv / 2,
            y: -images.hb_bg.height * iv / 2
        }
    });
    // 挖到钻石了-钻石文案
    var diamondText = new Konva.Image({
        image: images.diamondText,
        visible: false,
        x: 490 * iv,
        y: 90 * iv,
        scaleX: 0,
        scaleY: 0,
        offset: {
            x: images.diamondText.width * iv / 2,
            y: images.diamondText.height * iv / 2
        },
        width: images.diamondText.width * iv,
        height: images.diamondText.height * iv
    })
    //quily 默认文案
    var defaultText = new Konva.Image({
        image: images.defaultText,
        visible: false,
        x: 660 * iv,
        y: 70 * iv,
        offset: {
            x: images.defaultText.width * iv,
            y: 0
        },

        width: images.defaultText.width * iv,
        height: images.defaultText.height * iv
    })
    //赶快升级
    var shengji = new Konva.Image({
        image: images.shengji,
        visible: false,
        x: 640 * iv,
        y: 70 * iv,
        offset: {
            x: images.shengji.width * iv,
            y: 0
        },
        width: images.shengji.width * iv,
        height: images.shengji.height * iv
    })
    // 钻石
    var diamond = new Konva.Image({
        image: images.diamond,
        visible: false,
        scaleX: 0,
        scaleY: 0,
        x: 500 * iv,
        y: 220 * iv,
        offset: {
            x: images.diamond.width * iv / 2,
            y: images.diamond.height * iv / 2
        },
        width: images.diamond.width * iv,
        height: images.diamond.height * iv
    })
    // 金币
    var coin = new Konva.Image({
        image: images.coin,
        visible: true,
        scaleX: 0,
        scaleY: 0,
        x: 500 * iv,
        y: 220 * iv,
        offset: {
            x: images.coin.width * iv / 2,
            y: images.coin.height * iv / 2
        },
        width: images.coin.width * iv,
        height: images.coin.height * iv
    })
    // gold - 金币文案
    var gold = new Konva.Image({
        visible: false,
        image: images.gold,
        x: 490 * iv,
        scaleX: 0,
        scaleY: 0,
        y: 140 * iv,
        offset: {
            x: images.gold.width * iv / 2,
            y: images.gold.height * iv / 2
        },
        width: images.gold.width * iv,
        height: images.gold.height * iv
    })
    var hb = new Konva.Image({
        image: images.hb_bg,
        x: 0,
        y: 0,
        width: images.hb_bg.width * iv,
        height: images.hb_bg.height * iv,
    })
    var text = new Konva.Text({
        x: 374 * iv,
        y: 176 * iv,
        width: images.hb_bg.width * iv,
        offset: {
            x: 0,
            y: 0,
        },
        fontSize: 42 * iv,
        lineHeight: 1.5,
        fill: "#0D090C",
        fontStyle: 'bold',
        stroke: "#713029",
        strokeWidth: 0.5,
        align: 'center',
        text: '0.00'
    });
    groupHb.add(hb);

    var banner = new Konva.Image({
        image: images.winmoney_p,
        x: 0,
        y: 980 * iv,
        width: images.winmoney_p.width * iv,
        height: images.winmoney_p.height * iv
    })
    // 即刻下载btn
    var btn = new Konva.Image({
        image: images.download_btn,
        x: (cW - images.download_btn.width * iv) / 2,
        y: 1150 * iv,
        id: 'btn',
        width: images.download_btn.width * iv,
        height: images.download_btn.height * iv
    });
    // more
    var more = new Konva.Image({
        image: images.more,
        x: (cW - images.more.width * iv) / 2,
        y: 800 * iv,
        id: 'btn',
        width: images.more.width * iv,
        height: images.more.height * iv
    });
    var circle = new Konva.Image({
        id: 'circle',
        opacity: 1,
        // image: setGif(layer, assetDir + 'bg/finger.gif'),
        width: images.circle.width * iv * 0.8,
        height: images.circle.height * iv * 0.8,
        image: images.circle,
        offset: {
            x: images.circle.width * iv * 0.8 / 2,
            y: images.circle.height * iv * 0.8 / 2,
        },
        scaleX: 0.8,
        scaleY: 0.8,
        x: 150 * iv,
        y: 160 * iv,
        id: 'btn',

    });
    var finger = new Konva.Image({
        id: 'finger',
        opacity: 1,
        // image: setGif(layer, assetDir + 'bg/finger.gif'),
        width: images.finger.width * iv,
        height: images.finger.height * iv,
        image: images.finger,
        scaleX: 1,
        scaleY: 1,
        x: 150 * iv,
        y: 160 * iv,
        id: 'btn',

    });


    more.on('click touchstart', function () {
        console.log('点击更多')
        window.playableSDK.openAppStore();
    });
    // 立即下载
    btn.on('click touchstart', function () {
        console.log('点击立即下载')
        window.playableSDK.openAppStore();
    });

    layer.add(btn);
    layer.add(more);
    layer.add(banner);
    // 钻石动画
    var tweenDiamond = new Konva.Tween({
        node: diamond, //要进行动画的Konva对象
        scaleX: 1,
        scaleY: 1,
        y: 140 * iv,
        duration: 0.6, //持续时间
        easing: Konva.Easings.EaseInOut, //动画的动画效果

    });
    // tweenDiamond.play();
    // 金币动画
    var tweenCoin = new Konva.Tween({
        node: coin, //要进行动画的Konva对象
        scaleX: 1,
        scaleY: 1,
        y: 140 * iv,
        duration: 0.6, //持续时间
        easing: Konva.Easings.EaseInOut, //动画的动画效果
    });

    // tweenCoin.play();

    // 金币文字动画
    var tweenGoldText = new Konva.Tween({
        node: gold, //要进行动画的Konva对象
        scaleX: 1,
        scaleY: 1,
        y: 90 * iv,
        duration: 0.6, //持续时间
        easing: Konva.Easings.EaseInOut, //动画的动画效果

    });

    // 钻石文字动画
    var tweenDiamondText = new Konva.Tween({
        node: diamondText, //要进行动画的Konva对象
        scaleX: 1,
        scaleY: 1,
        y: 70 * iv,
        duration: 0.6, //持续时间
        easing: Konva.Easings.EaseInOut, //动画的动画效果

    });

    function func(fn) {
        // 移除推车数量
        // if (!Miner2) {
        //     Miner2 = groupMan(layer, images, 5, 100, 0, 220 * iv, 0);
        //     Miner2.x(cW - prgt);
        // }
        // if (!Miner3) {
        //     Miner3 = groupMan(layer, images, 6, 100, 0, 220 * iv, 0);
        //     Miner3.x(cW - prgt);
        // }
        fn()
        if (startStep == 1) {
            // if (stepCache['m' + startStep] == 15 && (('m' + startStep) == 'm1')) {
            //     // layer.add(Miner3);
            //     antMiFunc(layer, groupMi2, Miner2, Miner3, stepCache['m' + startStep]);
            // } else if (stepCache['m' + startStep] == 7 && (('m' + startStep) == 'm1')) {
            //     // layer.add(Miner2);
            //     antMiFunc(layer, groupMi2, Miner2, null, stepCache['m' + startStep]);
            // } else {
            //     antMiFunc(layer, groupMi2, null, null, stepCache['m' + startStep]);
            // }
            // 变速
            var arrays = layer.getChildren();
            antMiFunc(layer, groupMi2, null, null, stepCache['m' + startStep], moneyAdd);
            if (stepCache['m' + startStep] == 6 && (('m' + startStep) == 'm1')) {
                layer.add(groupMan(layer, images, 111, 100, 0, 300 * iv, 0));

            } else if (stepCache['m' + startStep] == 3 && (('m' + startStep) == 'm1')) {
                layer.add(groupMan(layer, images, 111, 100, 0, 280 * iv, 0));
            } else if (!isSecSpeed && stepCache['m' + startStep] > 4 && (('m' + startStep) == 'm1')) {
                arrays.forEach(function (target) {
                    if (target.attrs.id && (target.attrs.id == 'group111' || target.attrs.id && target.attrs.id == 'group1')) {
                        target.getChildren().forEach(function (man) {
                            if (man.attrs.id && man.attrs.id.indexOf('man') > -1) {
                                var img = setGif(layer, assetDir + 'bg/m2Q.gif');
                                man.image(img);
                            }
                        })

                    }
                })
                isSecSpeed = true;
            }
        }
        if (stepCache['m' + startStep] == 15) {
            console.log(startStep);
            if (startStep == 2) {
                gifBox2.show();
            } else if (startStep == 3) {
                gifBox3.show();
            }
            // 最大值展示max
            var arrays = layer.getChildren();
            arrays.forEach(function (target) {
                if (target.attrs.id && target.attrs.id.indexOf('group' + startStep) > -1) {
                    if (target.getChildren()[1]) {
                        if (stepCache['m' + startStep] == 15) {
                            target.getChildren().forEach(function (btn) {
                                if (btn.attrs.id && btn.attrs.id.indexOf('mbth') > -1) {
                                    btn.image(images['up_button_0' + startStep])
                                }
                            })
                        }
                    }
                }
            })

        }


    }
    // 设置加钱 -------------------- //tweenGoldText tweenDiamondText
    function moneyAdd() {
        if (gameEnd) {
            return;
        }

        var rank = stepCache['m1'] + stepCache['m2'] + stepCache['m3'];
        moneyDefault += rank * 3 * timepz;
        var tnum = cordAdd(0.01 * moneyDefault);
        text.text(tnum);
        if (tnum > 1 && tnum < 1.5 && rank == 3) { // 金币
            coin.show();
            tweenCoin.play();
            defaultText.hide();
            gold.show();
            tweenGoldText.play();
            shengji.hide();
        } else if (tnum > 4 && tnum < 4.5 && rank == 3) { // 钻石
            diamond.show();
            tweenDiamond.play();
            defaultText.hide();
            gold.hide();
            diamondText.show();
            tweenDiamondText.play();
            shengji.hide();
        } else if (tnum == setMaxMoney) {
            coin.hide();
            diamond.hide();
            shengji.hide();
            gold.hide();
            diamondText.hide();
            // 弹窗
            stage.add(winUp(images));
            gameEnd = true;

        } else if (((tnum >= 1.5 && tnum < 4) || tnum >= 4.5) && tnum != setMaxMoney && rank == 3) {
            coin.hide();
            diamond.hide();
            defaultText.hide();
            gold.hide();
            diamondText.hide();
            shengji.show();
        } else if (tnum > setMaxMoney / 2 && rank > 5 && rank <= 8) {
            if (!timerShowHbType.gold) {
                if (timerShowHbType.diamond) clearInterval(timerShowHbType.diamond)
                timerShowHbType.gold = setInterval(() => {
                    if (coin.isVisible()) {
                        // 钻石显示 // 钻石文案提醒
                        diamond.hide();
                        diamondText.hide();
                        // tweenDiamond.play();
                        // tweenDiamondText.play();
                        // 赶快升级员工挖矿
                        defaultText.hide();
                        // 展示金币文案  // 金币文案跳出动画
                        coin.hide();
                        tweenCoin.reset();
                        gold.hide();
                        tweenGoldText.reset();
                        // 升级提速
                        shengji.show();
                    } else {

                        // 钻石显示 // 钻石文案提醒
                        diamond.hide();
                        diamondText.hide();
                        // tweenDiamond.play();
                        // tweenDiamondText.play();
                        // 赶快升级员工挖矿
                        defaultText.hide();
                        // 展示金币文案  // 金币文案跳出动画
                        coin.show();
                        tweenCoin.play();
                        gold.show();
                        tweenGoldText.play();
                        // 升级提速
                        shengji.hide();
                    }
                }, 1000)
            }
        } else if (rank > 8) {
            if (!timerShowHbType.diamond) {
                if (timerShowHbType.gold) clearInterval(timerShowHbType.gold)
                timerShowHbType.diamond = setInterval(() => {
                    if (diamond.isVisible()) {
                        // 钻石显示 // 钻石文案提醒
                        diamond.hide();
                        diamondText.hide();
                        tweenDiamond.reset();
                        tweenDiamondText.reset();
                        // 赶快升级员工挖矿
                        defaultText.hide();
                        // 展示金币文案  // 金币文案跳出动画
                        coin.hide();
                        // tweenCoin.reset();
                        gold.hide();
                        // tweenGoldText.reset();
                        // 升级提速
                        shengji.show();
                    } else {

                        // 钻石显示 // 钻石文案提醒
                        diamond.show();
                        diamondText.show();
                        tweenDiamond.play();
                        tweenDiamondText.play();
                        // 赶快升级员工挖矿
                        defaultText.hide();
                        // 展示金币文案  // 金币文案跳出动画
                        coin.hide();
                        // tweenCoin.play();
                        gold.hide();
                        // tweenGoldText.play();
                        // 升级提速
                        shengji.hide();
                    }
                }, 1000)
            }
        }

    }

    // layer, images, type, num, lv, step, x, y, callback
    var groupMi = groupMan(layer, images, 1, 100, 0, 510 * iv, 0, func);
    var groupMi2 = groupMan(layer, images, 4, 100, 0, 220 * iv, 0);
    var groupEl = groupMan(layer, images, 2, 100, 0, 100 * iv, -300 * iv, func);
    var groupSu = groupMan(layer, images, 3, 100, 0, 100 * iv, 0, func);
    gifBox2 = loadGif(layer, assetDir + 'bg/lv.gif');
    layer.add(groupMi);
    layer.add(groupEl);
    layer.add(groupMi2);
    var tween = null;


    gifBox3 = loadGif(layer, assetDir + 'bg/lv.gif', 50 * iv, 500 * iv);
    groupMi2.x(cW - prgt);
    defaultText.show();
    antMiFunc(layer, groupMi2, null, null, stepCache['m' + startStep], moneyAdd)
    layer.add(groupSu);
    // layer.add(hb);
    // 手指按钮
    // finger.on('click touchstart', function () {

    //     groupEl.getChildren().forEach(function (item) {

    //         if (item.attrs.id == 'mbths') {
    //             item.eventListeners.click[0].handler();
    //         }
    //     });




    // })

    layer.add(circle);
    layer.add(finger);
    layer.add(groupHb);
    layer.add(diamond);
    layer.add(coin);
    layer.add(gold);
    layer.add(diamondText);
    layer.add(defaultText);
    layer.add(shengji);

    layer.add(text);

    var arr = layer.getChildren();
    // 矿工 获得金币或钻石数动画 +100
    arr.forEach(function (nodes) {
        if (nodes.attrs.id == 'group4' || nodes.attrs.id == 'group5' && nodes.getChildren()[0] && nodes.getChildren()[0].attrs.id && nodes.getChildren()[0].attrs.id == 'info') {
            if (!tweenCoinAdd) {
                tweenCoinAdd = new Konva.Tween({
                    node: nodes.getChildren()[0], //要进行动画的Konva对象
                    opacity: 1,
                    y: -40 * iv,
                    duration: 0.5, //持续时间
                    easing: Konva.Easings.EaseIn, //动画的动画效果
                    onFinish: function () {
                        tweenCoinAdd.reset();
                        //动画执行结束后，执行此方法
                    }
                });
            }
        }
    })
    var twfinger = false;
    var tweenFinder = new Konva.Tween({
        node: finger, //要进行动画的Konva对象
        scaleX: 0.8,
        scaleY: 0.8,
        duration: 2, //持续时间
        easing: Konva.Easings.EaseIn, //动画的动画效果
        onFinish: function () {
            twfinger = true;
            tweenFinder.reverse();
        },
        onReverse: function () {
            console.log('reset')
        }
    });
    var twfingertime = setInterval(function () {
        if (twfinger) {
            twfinger = false;
            tweenFinder.play();
        }
    }, 1500)
    tweenFinder.play();
    var tweenCircle = new Konva.Tween({
        node: circle, //要进行动画的Konva对象
        scaleX: 1,
        scaleY: 1,
        duration: 1, //持续时间
        easing: Konva.Easings.EaseIn, //动画的动画效果
        onFinish: function () {
            tweenCircle.reset();
            tweenCircle.play();
        }
    });
    tweenCircle.play();
    // 手指动画关闭
    setTimeout(function () {
        circle.hide();
        clearInterval(twfingertime);
        finger.hide()
    }, 3000)
    // 红包动画 - 跳动
    var hk = 1
    var animate = new Konva.Animation(function (frame) {
        // frame.timeDiff
        var t = groupHb.scaleX();
        if (t.toFixed(2) == 1) {
            hk = -1
        }
        if (t.toFixed(2) == 0.9) {
            hk = 1;
        }
        // text.y(text.y() + 0.1 * hk)
        groupHb.scaleY(groupHb.scaleY() + 0.001 * hk);

        groupHb.scaleX(t + 0.0025 * hk);


    }, layer);

    animate.start();
    // diamond
    // var anitDia = new Konva.Animation(function (frame) {
    //     // frame.timeDiff
    //     var t = groupHb.scaleX();
    //     if (t.toFixed(2) == 1) {
    //         hk = -1
    //     }
    //     if (t.toFixed(2) == 0.9) {
    //         hk = 1;
    //     }
    //     groupHb.scaleY(groupHb.scaleY() + 0.001 * hk);

    //     groupHb.scaleX(t + 0.0025 * hk);


    // }, layer);



}

function cordAdd(add) {
    return Number(add + 0.00).toFixed(2) > setMaxMoney ? setMaxMoney.toFixed(2) : Number(add + 0.00).toFixed(2);
}

// 矿工奔跑动画
function antMiFunc(layer, node1, node2, node3, step, fn) {
    var tim1 = function () {
        // 获取时间间隔
        endSecond = new Date().getTime();
        timepz = (endSecond - startSecond) / 100000;
        // console.log(timepz, 'pz')
        // console.log('间隔', endSecond - startSecond)
        var x1 = node1.x();
        if (x1 < plft) {
            num1 = 2;
            node1.getChildren()[1].scaleX(1);
            node1.getChildren()[1].x(-26 * iv);
            tweenCoinAdd.play();
        } else if (x1 >= cW - prgt) {
            num1 = -2;
            node1.getChildren()[1].scaleX(-1)
            node1.getChildren()[1].x(40 * iv);
        }
        node1.x(x1 + num1);
        if (setMaxMoney)
            fn();
        layer.draw()

    }
    var tim2 = function () {
        var x2 = node2.x();
        if (x2 < plft) {
            num2 = 2;
            node2.getChildren()[1].scaleX(1)
            node2.getChildren()[1].x(-26 * iv);
        } else if (x2 >= cW - prgt) {
            node2.getChildren()[1].scaleX(-1)
            node2.getChildren()[1].x(40 * iv);
            num2 = -2;
        }
        node2.x(x2 + num2);
        layer.draw()
    }
    var tim3 = function () {
        var x3 = node3.x();
        if (x3 < plft) {
            num3 = 2;
            node3.getChildren()[1].scaleX(1)
            node2.getChildren()[1].x(-26 * iv);
        } else if (x3 >= cW - prgt) {
            node3.getChildren()[1].scaleX(-1)
            node3.getChildren()[1].x(40 * iv);
            num3 = -2;
        }
        node3.x(x3 + num3);
        layer.draw()
    }
    if (!timerInt1) {
        timerInt1 = setInterval(tim1, 150 * (1 / step));
    } else {
        clearInterval(timerInt1);
        timerInt1 = setInterval(tim1, 150 * (1 / step));
    }
    if (node2) {
        if (!timerInt2) {
            timerInt2 = setInterval(tim2, 150 * (1 / step));
        } else {
            clearInterval(timerInt2);
            timerInt2 = setInterval(tim2, 150 * (1 / step));
        }
    }
    if (node3) {
        if (!timerInt3) {
            timerInt3 = setInterval(tim3, 150 * (1 / step));
        } else {
            clearInterval(timerInt3);
            timerInt3 = setInterval(tim3, 150 * (1 / step));
        }
    }



}
// 初始化
function initStage(images) {

    var stage = new Konva.Stage({
        container: 'game',
        width: cW,
        height: cH
    });

    var background = new Konva.Layer();
    var bgLayer = new Konva.Layer();
    // 背景元素层
    bgLayerFun(bgLayer, images, stage);
    stage.add(background);

    stage.add(bgLayer);
    drawBackground(
        background,
        images.bg,
    );
}


function loadImages(sources, callback) {
    setTimeout(function () {
        document.getElementById("mode-box").style.display = "block";
        var images = {};
        var loadedImages = 0;
        var numImages = 0;
        for (var src in sources) {
            numImages++;
        }
        for (var src in sources) {
            images[src] = new Image();
            images[src].onload = function () {
                document.getElementById("process").innerHTML = Math.floor(loadedImages / numImages * 100)
                if (++loadedImages >= numImages) {
                    callback(images);
                    document.getElementById("mode-box").style.display = "none";
                }
            };
            images[src].src = assetDir + sources[src];
        }
    }, 200)

}
// 加载光圈
function loadGif(layer, url, x = 50 * iv, y = 220 * iv) {
    // draw resulted canvas into the stage as Konva.Image
    var image = new Konva.Image({
        image: setGif(layer, url),
        visible: false,
        zIndex: 1,
        x: x,
        y: y
    });
    layer.add(image);
    return image;
}
// 加载gif - return img
function setGif(layer, url) {

    var canvas = document.createElement('canvas');
    // use external library to parse and draw gif animation
    function onDrawFrame(ctx, frame) {
        // update canvas size
        canvas.width = frame.width * iv;
        canvas.height = frame.height * iv;
        // update canvas that we are using for Konva.Image
        ctx.drawImage(frame.buffer, 0, 0, frame.width * iv, frame.height * iv);
        // redraw the layer
        layer.draw();
    }

    gifler(url).frames(canvas, onDrawFrame);

    // draw resulted canvas into the stage as Konva.Image

    return canvas;
}
// 窗口
function winUp(images) {
    var winLayer = new Konva.Layer({
        width: cW,
        height: cH,
        x: 0,
        y: 0
    });
    var winReact = new Konva.Rect({
        x: 0,
        y: 0,
        width: cW,
        height: cH,
        fill: "#000000",
        opacity: 0.8,

    })
    var text = new Konva.Text({
        x: 250 * iv,
        y: 350 * iv,
        width: images.hb_bg.width * iv,
        offset: {
            x: 0,
            y: 0,
        },
        fontSize: 80 * iv,
        lineHeight: 1.5,
        fill: "#da000c",
        fontStyle: 'bold',
        stroke: "#da000c",
        strokeWidth: 0.5,
        align: 'center',
        text: setMaxMoney.toFixed(2)
    });
    var logo = new Konva.Image({
        image: images.logo,
        x: (cW - images.logo.width * iv) / 2,
        id: 'logo',
        y: 960 * iv,
        width: images.logo.width * iv,
        height: images.logo.height * iv
    })
    var light = new Konva.Image({
        image: images.light,
        x: (cW - images.light.width * iv * 1.5) / 2 + 565 * iv,
        id: 'light',
        offset: {
            x: (images.light.width * iv * 1.5) / 2,
            y: (images.light.height * iv * 1.5) / 2
        },
        y: 100 * iv + 400 * iv,
        width: images.light.width * iv * 1.5,
        height: images.light.height * iv * 1.5
    })
    var winHb = new Konva.Image({
        image: images.hb_2,
        x: (cW - images.hb_2.width * iv) / 2,
        id: 'winhb',
        y: 235 * iv,
        width: images.hb_2.width * iv,
        height: images.hb_2.height * iv
    })
    var winBtn = new Konva.Image({
        image: images.button_2,
        x: (cW - images.button_2.width * iv * 0.9) / 2,
        id: 'winhb',
        y: 730 * iv,
        width: images.button_2.width * iv * 0.9,
        height: images.button_2.height * iv * 0.9
    })
    winBtn.on('click touchstart', function () {
        console.log('点击领取')
        window.location.href = window.dumpAddress;
    })

    winLayer.add(winReact);
    winLayer.add(logo);
    winLayer.add(light);
    winLayer.add(winHb);
    winLayer.add(text);
    winLayer.add(winBtn);

    function update(layer, frame) {
        var angularSpeed = 10;
        var angularDiff = (angularSpeed * frame.timeDiff) / 1000;
        var shapes = layer.getChildren();
        var shape = shapes[2];
        shape.rotate(angularDiff);
    }
    var anim = new Konva.Animation(function (frame) {
        update(winLayer, frame);
    }, winLayer);
    anim.start();
    return winLayer;
}


var sources = {
    logo: 'bg/logo.png',
    bg: 'bg/bg.png',
    hb_2: 'bg/hb_2.png',
    light: 'bg/heightlign.png',
    button_2: 'bg/button_2.png',
    download_btn: 'bg/download_button.png',
    hb_p: 'bg/hb_p.png',
    hb_bg: 'bg/hb_bg.png',
    up_button_01: 'bg/up_button_01.png',
    up_button_02: 'bg/up_button_02.png',
    up_button_03: 'bg/up_button_03.png',
    up_su_button: 'bg/up_su_button.png',
    up_mi_button: 'bg/up_mi_button.png',
    up_el_button: 'bg/up_el_button.png',
    winmoney_p: 'bg/winmoney_p.png',
    miner: 'bg/m2.gif',
    m2Q: 'bg/m2Q.gif',
    // miner2: 'bg/miner2.png',
    // miner3: 'bg/miner2.png',
    elevator: 'bg/elevator.png',
    supervisor: 'bg/supervisor.png',
    lv: 'bg/lv.gif',
    circle: 'bg/cir2.png',
    el1: 'bg/Elevator1.png',
    el2: 'bg/Elevator2.png',
    el3: 'bg/Elevator3.png',
    el4: 'bg/Elevator4.png',
    el5: 'bg/Elevator5.png',
    el6: 'bg/Elevator6.png',
    el7: 'bg/Elevator7.png',
    el8: 'bg/Elevator8.png',
    el9: 'bg/Elevator9.png',
    el10: 'bg/Elevator10.png',
    el11: 'bg/Elevator11.png',
    el12: 'bg/Elevator12.png',
    el13: 'bg/Elevator13.png',
    el14: 'bg/Elevator14.png',
    el15: 'bg/Elevator15.png',
    su1: 'bg/jiangong1.png',
    su2: 'bg/jiangong2.png',
    su3: 'bg/jiangong3.png',
    su4: 'bg/jiangong4.png',
    su5: 'bg/jiangong5.png',
    su6: 'bg/jiangong6.png',
    su7: 'bg/jiangong7.png',
    su8: 'bg/jiangong8.png',
    su9: 'bg/jiangong9.png',
    su10: 'bg/jiangong10.png',
    su11: 'bg/jiangong11.png',
    su12: 'bg/jiangong12.png',
    su13: 'bg/jiangong13.png',
    su14: 'bg/jiangong14.png',
    su15: 'bg/jiangong15.png',
    gold: 'bg/gold.png',
    coin: 'bg/coin.png',
    defaultText: 'bg/quily.png',
    diamondText: 'bg/diamondText.png',
    diamond: 'bg/diamond.png',
    shengji: 'bg/shengji.png',
    miner1: 'bg/m1.gif',
    miner2: 'bg/m1.gif',
    miner3: 'bg/m1.gif',
    finger: 'bg/finger.png',
    uplight: 'bg/uplight.gif',
    'lv_01': 'bg/lv.01.png',
    'lv_02': 'bg/lv.02.png',
    'lv_03': 'bg/lv.03.png',
    'lv_04': 'bg/lv.04.png',
    'lv_05': 'bg/lv.05.png',
    'lv_06': 'bg/lv.06.png',
    'lv_07': 'bg/lv.07.png',
    'lv_08': 'bg/lv.08.png',
    'lv_09': 'bg/lv.09.png',
    'lv_10': 'bg/lv.10.png',
    'lv_11': 'bg/lv.11.png',
    'lv_12': 'bg/lv.12.png',
    'lv_13': 'bg/lv.13.png',
    'lv_14': 'bg/lv.14.png',
    'lv_15': 'bg/lv.15.png',
    more: 'bg/more.png',
};
loadImages(sources, initStage);