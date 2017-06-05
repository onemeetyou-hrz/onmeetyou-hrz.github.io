/**
 * Created by chenlixin on 2017/6/4.
 */




    //banner 主体
$(function () {

    //logo
    $("#main-banner-logo").stop().show(1000);

    $(window).scroll(function () {
        if($(window).scrollTop()>200){
            $("#main-banner-logo").stop().hide(1000);

        } else{
            $("#main-banner-logo").stop().show(1000);
        }

    });

    $(window).scroll(function () {
        //    顶部固定导航栏的显示隐藏
        if($(window).scrollTop()>30){
            $("#topBar").slideDown(300);
        }
        else{
            $("#topBar").slideUp(300);
        }
    });

    //固定导航栏的hover效果
    $("#topBar-hoverItem").on("mouseenter", function () {
        $("#topBar-hover").show();
    });
    $("#topBar-hoverItem").on("mouseleave", function () {
        $("#topBar-hover").hide();
    });
    $("#topBar-hover").on("mouseenter", function () {
        $("#topBar-hover").show();
    })
    $("#topBar-hover").on("mouseleave", function () {
        $("#topBar-hover").hide();
    })

        //$("#topBar-hover").hide();


    // 底部固定导航栏 开始


    $("#errand").on("click", function () {
       $("#newYears_secret").slideUp(500);
        $("#conceal a").show(500);
    });
    $("#conceal a b").on("click", function () {
        $("#newYears_secret").slideDown(500);
        $("#conceal a").hide(500);
    })

    // 底部固定导航栏 结束



    //banner 主体 动画 人物跳转

    //$(".yinyanshiText").stop().show(1000);
    //
    //$(window).scroll(function () {
    //    if($(window).scrollTop()>200){
    //        $(".yinyanshiText").stop().hide(1000);
    //    } else{
    //        $(".yinyanshiText").stop().show(1000);
    //
    //    }
    //});
    $("#main-banner-arr").hide();
    $("#main-banner-arr").fadeIn(3000);


    play();  //页面打开就执行一次
    var flag = true;   //节流
    $("#main-banner-arr").on("click", function () {
        if(flag){
            flag = false;

            play();
        }
    })


    function play(){               //上下图片大盒子切换
        $("#top").animate({
            "zIndex":10,
            "opacity":1
        },1500).siblings().animate({
            "zIndex":0,
            "opacity":0
        },1500);

        $("#top img:first").animate({
            "left":100,                  //盒子内部图片动画
            "opacity":0
        },1500, function () {
            $("#top img:first").animate({
                "left":0,
                "opacity":1
            })
        });

        $("#top img:last").animate({
            "right":100,
            "opacity":0

        },1500, function () {
            $("#top img:last").animate({
                "right":0,
                "opacity":1
            })
        });

        $("#bot img:first").animate({
            "left":100,
            "opacity":0
        },1000, function () {
            $("#bot img:first").animate({
                "left":0,

            })
        });

        $("#bot img:last").animate({
            "right":100,
            "opacity":0

        },1000, function () {
            $("#bot img:last").animate({
                "right":0,

            })
        });

        setTimeout(function () {                        //动画完成后上下盒子互换id 那么下一次可继续执行动画
            $("#top").attr("id","bot").siblings().attr("id","top");
            flag = true;
        },1600)
    };

        $("#main-banner-bunny").on("click", function () {
            $("#main-banner-mess").show(500);
        })
        $("#close-mess").on("click", function () {
            $(this).parent().hide(500);
        });


    var xinfuArr=[
        "-1379px -51px","-1353px -51px"
    ];

    var xinfuem = $("#main-banner-mess-con").find("em");
    xinfuem.each(function (index,ele) {
        var xinfuindex = Math.floor((Math.random() * 2));
        $(ele).css({
            "background-position":xinfuArr[xinfuindex]
        });
    })

    var arrIBg = [
        "-1120px -1181px","-1040px -1102px","-1120px -1102px","-560px -1262px",
        "-480px -1262px","-400px -1262px","-320px -1262px","-240px -1262px",
        "-160px -1262px","-1200px -1102px",//中国区ios
        "-80px -1182px","0px -1182px","-1200px -1182px","0px -1102px",
        "-720px -1102px","-800px -1102px","-880px -1102px","-640px -1102px",
        "0px -1262px","-800px -1182px","-640px -1262px","-720px -1182px",
        "-640px -1182px","-560px -1182px","-960px -1102px","-560px -1102px",//网易双平台
        "-480px -1102px","-1040px -1182px","-160px -1102px","-320px -1102px",
        "-480px -1182px","-400px -1182px","-320px -1182px","-240px -1182px",
        "-80px -1262px"," -400px -1102px",//中国安卓联运
        "-80px -1102px","-160px -1182px","-1259px -1002px",//联运双平台
        "-240px -1102px","-880px -1182px","-960px -1182px"//国际区
    ];

        var nameImg = $("#main-banner-mess-con").find("i");
        nameImg.each(function (index,ele) {
           $(ele).css({
               "background-position":arrIBg[index]
           });
        });


    var nameArr=[
            "桂之馥","莲之净","雀之羽","春之樱","夏之蝉","夜之月","竹之幽","松之苍","兰之雅","云之遏",//中国区ios
            "谜之暗影","春樱共赏","两情相悦","风雨同行","孤高之心","遥远之忆","永生之谜","缥缈之旅",
            "携手同心","结伴同游","相伴相随","情比金坚","形影不离","同心一意","相知相依","心意相通",//网易双平台
            "樱之华","菊之逸","桃之华","雀之灵","秋之枫","冬之雪","暮之霞","梅之寒","风之清","雨之霁",//中国安卓联运
            "情深谊长","两心无间","亲密无间",//联运双平台
            "日本区","亚洲区","海外加速区"//国际区
        ];

        var spans =$("#main-banner-mess-con").find("span");
        spans.each(function (index,ele) {
            $(ele).text(nameArr[index]);
        });
});



$(function () {

    var zhujue_tabs = $("#zhujue_tabs");
    var zhujue_tabs_divs = zhujue_tabs.children();
//                            console.log(zhujue_tabs_divs);

    var zhujue_img = $("#zhujue_img");
    var  zhujue_img_divs = zhujue_img.children();
//                            console.log(zhujue_img_divs);
    zhujue_img_divs.each(function (index,ele) {
        $(ele).hide();
    });
    $(zhujue_img_divs[0]).show();

    var zhujue_dis = $("#zhujue_dis");
    var zhujue_dis_divs = zhujue_dis.children();
    zhujue_dis_divs.each(function (index,ele) {
        $(ele).hide();
    });
    $(zhujue_dis_divs[0]).show();
//                            console.log(zhujue_dis_divs);
    zhujue_tabs_divs.each(function (index,ele) {
        $(ele).on("click", function () {
            $(this).children().addClass("zhujue_tab_bgc");
            $(this).siblings().children().removeClass("zhujue_tab_bgc");

            $(zhujue_img_divs[index]).show().siblings().hide();
            $(zhujue_dis_divs[index]).show().siblings().hide();

        });
    });



});

/**
 * Created by yilan on 2017/6/4.
 */
/*
 * 为左边的公测区域添加js特效
 *
 * */
$(function () {

//为$("#arrow") 注册点击事件
    $("#closeBtn").on("click", function () {
        $("#smallCode").show();
        $("#downloadCode_container").hide();
        $("#downloadCode").css("backgroundColor", "transparent")
    });


//左边二维码自动播放动画
    var distance = $("#line").css("top");
    setInterval(function () {
        $("#line").animate({
            top: $("#erweiCode").height()
        }, 1000).animate({
            top: distance
        }, 1000);
        console.log(distance);
    }, 2000);
////右边列表的数据
//var data = [{
//    "width": 314,
//    "height": 206,
//    "backgroundPosition": -760 -4
//}, {
//    "width": 332,
//    "height": 360,
//    "backgroundPosition": -310 -4
//}, {
//    "width": 304,
//    "height": 185,
//    "backgroundPosition": -621 -667
//}, {
//    "width": 293,
//    "height": 188,
//    "backgroundPositionX": -328 -665
//}, {
//    "width": 328,
//    "height": 290,
//    "backgroundPosition": 0 -376
//}, {
//    "width": 308,
//    "height": 364,
//    "backgroundPosition": 0 -4
//}];
//var text = [];//文本内容的数据
//为右边的 游戏日历鼠标移入移出事件
    $("#indexSideBar a").stop(false,false).on("mouseenter", (function () {
        var aMarTop = $(this).css("top");
        $(this).animate({
            left: -10
        }, 500)
    })).stop(false,false).on("mouseleave", function () {
        $(this).animate({
            left: 0
        }, 300)
    });
//展开动画
//var $span = document.createElement("span");
//$($span).css({
//    "display":"block",
//    "width": 308,
//    "height": 364,
//    "background-positionX": "0px",
//    "background-positionY": "-4px",
//    "background":"url(../images/index_z_final.png) no-repeat ",
//    "position":"absolute",
//    top:0,
//    "z-index":66
//});
//$("#indexSideBar a:eq(5)").stop().hover(function(){
//    $(this).append($span);
//},function(){
//    $(this).removeChild($span)
//});
});



//   攻略区 开始

$(function () {
    var diandian = $("#diandian");

    var dianlis = diandian.find("li");
    //console.log(dianlis);

    var glLeft_pic = $("#glLeft_pic");
    var glpicLis = glLeft_pic.find("li");
    //console.log(glpicLis);
    var glStep = $(glpicLis[0]).width();

    //console.log(glStep);


    dianlis.each(function (index,ele) {
        $(ele).on("mouseenter", function () {
            $(this).addClass("getCurrent").siblings().removeClass("getCurrent");
            glLeft_pic.children("ul").animate({
                "left":-glStep*index
            },500);

        })

    });

    var strRightNav = $("#strRightNav");
    var strRightNavAs = strRightNav.find("a");
    //console.log(strRightNavAs);

    var strList = $("#strList");
    var strLisUls=strList.find("ul");
    var strLisStep = $(strLisUls[0]).width();
    console.log(strLisStep);
    //console.log(strLisUls);

    for(var i=1;i<strRightNavAs.length;i++){
        strRightNavAs[i].index = i;
        $(strRightNavAs[i]).on("mouseenter", function () {
            strList.animate({
                "left":-strLisStep*this.index
            });

            $(this).find("em").animate({
                "opacity":1,
                "margin-top":-5
            },1000);
            $(this).siblings().find("em").animate({
                "opacity":0,
                "margin-top":0
            },500);
            //console.log($(this).find("em"));
        });
    }

});



/**
 * Created by 贺润帐 on 2017/6/4.
 */
$(function () {
    //前去投稿
    var h_tr_tougao = document.getElementById("h-tr-tougao");
    var tr_top_right = document.getElementById("tr-top-right");
    $(h_tr_tougao).on('mouseenter', function () {
        $(tr_top_right).stop().animate({
            'left':'1200px',
        },500)
    });
    $(h_tr_tougao).on('mouseleave', function () {
        $(tr_top_right).stop().animate({
            'left':'1180px',
        },500)
    });

    //同人专区下部分
    var tr_concent_tr_bottom = $("#concent-tr-bottom");
    var lis = tr_concent_tr_bottom.find("li");
    //console.log(lis);
    var spans = $(".cover");
    //console.log(spans);
    lis.each(function (index,ele) {
        $(ele).on("mouseenter", function () {
            for(var i=0;i<spans.length;i++){
                $(spans[i]).hide();
            }
            $(spans[index]).show();
        });
        $(ele).on('mouseleave', function () {
            $(spans).hide();
        })
    })
    //同人专区上部分
    var tr_top_center = $(".tr-top-center");
    var tr_lis = tr_top_center.find("li");
    //console.log(tr_lis);
    var tr_con_item =  tr_concent_tr_bottom.children();
    //console.log(tr_con_item);
    //tr_lis.each(function (index,ele) {
    //    $(ele).on("mouseenter", function () {
    //        for(var i=0;i<tr_lis.length;i++){
    //            $(tr_lis[i]).find("i").slideUp(500)
    //        }
    //       $(this).find("i").animate({
    //           "top":41
    //       },500);
    //       //$(this).find("em").css({
    //       //    'left': 45,
    //       // 'top': 10
    //       //});
    //
    //        //$(tr_con_item[index]).show().siblings().hide();
    //
    //    });
    //});




    //var tr_as = tr_top_center.find("a");
    //var tr_is = tr_top_center.find("i");
    //var tr_em = tr_top_center.find("em");
    //var tr_divs = tr_concent_tr_bottom.find("div");
    //$(tr_is[0]).show();
    //$(tr_em[0]).css({
    //    'top':'-5px',
    //    'left':'40px'
    //});
    //tr_as.each(function (index,ele) {
    //    $(ele).on("mouseenter", function () {
    //
    //        //$(tr_is[index]).show();
    //    })
    //})


})







$(function() {
    //第一个视频
    var item1 = document.querySelector(".js_video1");
    var video1 = document.getElementsByClassName("video1")[0];
    var span_video1 = document.getElementById("span_video1");
    var div_video1 = document.getElementById("div_video1");
    item1.onclick=function() {
        div_video1.style.display="block";
        video1.play();
    };
    span_video1.onclick=function() {
        $(div_video1).hide();
        video1.pause();
    }
    //第二个视频
    var item2 = document.querySelector(".js_video2");
    var video2 = document.getElementsByClassName("video2")[0];
    var span_video2 = document.getElementById("span_video2");
    var div_video2 = document.getElementById("div_video2");
    item2.onclick=function() {
        div_video2.style.display="block";
        video2.play();
    };
    span_video2.onclick=function() {
        $(div_video2).hide();
        video2.pause();

    }
    //第三个视频
    var item3 = document.querySelector(".js_video3");
    var video3 = document.getElementsByClassName("video3")[0];
    var span_video3 = document.getElementById("span_video3");
    var div_video3 = document.getElementById("div_video3");
    item3.onclick=function() {
        div_video3.style.display="block";
        video3.play();
    };
    span_video3.onclick=function() {
        $(div_video3).hide();
        video3.pause();
    }
});

//当页面完全加载完毕的时候再开始执行，因为有图片
$(window).on('load', function () {
    //获取元素
    var imgWidth = $('.right-top').find('img:first').width();
    var imgHeight = $('.right-top').find('img:first').height();
    // //给返回顶部的logo注册移入和移出还有单击事件
    $('.qt').next().hover(function () {
        //不清除队列，并执行下一次动画
        $(this).stop().animate({
            top: 0
        }, 200);
        // $(window).animate(function () {
        // }, 200);
    }, function () {
        $(this).stop().animate({
            top: 18
        }, 200);
    }).on('click', function () {
        $(window).scrollTop('');
    });
});

