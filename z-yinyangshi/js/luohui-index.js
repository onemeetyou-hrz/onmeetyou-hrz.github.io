/**
 * Created by 慧子 on 2017/6/4.
 */

    window.onload=function () {

        //图片轮播区
        //获取对象
        var slideone = document.getElementById("slide_one");
        var liulph = slideone.children;
        var ulbtn = document.getElementById("slide_btn");
        var lisbtn = ulbtn.children;
        var index = 0;
        var imgwi = slideone.offsetWidth;
        var timerNew = null;
        var num = 0;

//注册事件
        for (var i = 0; i < lisbtn.length; i++) {
            lisbtn[i].setAttribute("index", i);
            lisbtn[i].onmouseover = function () {
                for (var j = 0; j < lisbtn.length; j++) {
                    lisbtn[j].style.backgroundColor = "";
                }
                this.style.backgroundColor = "#E37B63";
                index = this.getAttribute("index");
                var target = -imgwi / liulph.length * index;
                num = index;
                Animation.animate(slideone, {
                    "left": target,
                });
                for (var j = 0; j < newsEm.length; j++) {
                    newsEm[j].style.opacity = 0;
                }
            }
            lisbtn[i].onmouseout = function () {
                this.style.backgroundColor = "#E37B63";
            }
        }
        slideone.appendChild(liulph[0].cloneNode(true));
        console.log(slideone);
        slideone.onmouseenter = function () {
            clearInterval(timerNew);
        }
        slideone.onmouseleave = function () {
            timerNew = setInterval(function () {
                if (num == liulph.length) {
                    slideone.style.left = 0;
                    num = 1
                }
                var target = -imgwi / liulph.length * num;
                for (var j = 0; j < lisbtn.length; j++) {
                    lisbtn[j].style.backgroundColor = "";
                }
                if (num >= liulph.length - 1) {
                    lisbtn[0].style.backgroundColor = "#E37B63";
                } else {
                    lisbtn[num].style.backgroundColor = "#E37B63";
                }

                Animation.animate(slideone, {
                    "left": target,
                });
                num++;
            }, 2500)
        }

        timerNew = setInterval(function () {
            if (num == liulph.length) {
                slideone.style.left = 0;
                num = 1
            }
            var target = -imgwi / liulph.length * num;
            for (var j = 0; j < lisbtn.length; j++) {
                lisbtn[j].style.backgroundColor = "";
            }
            if (num >= liulph.length - 1) {
                lisbtn[0].style.backgroundColor = "#E37B63";
            } else {
                lisbtn[num].style.backgroundColor = "#E37B63";
            }

            Animation.animate(slideone, {
                "left": target,
            });
            num++;
        }, 2500)


        //文字轮播
        //获取对象
        var ulnews = document.getElementById("notice_ul");
        var ulnav = document.getElementById("ul_notice");
        var lisnews = ulnews.children;
        var newsEm = ulnews.getElementsByTagName("em");
        var count = 0;
        var ulsw = ulnav.offsetWidth;

//注册事件
        newsEm[0].style.opacity = 0.5;
        for (var k = 0; k < lisnews.length; k++) {
            lisnews[k].setAttribute("index", k);
            lisnews[k].onmouseover = function () {
                for (var j = 0; j < newsEm.length; j++) {
                    newsEm[j].style.opacity = 0;
                }
                count = this.getAttribute("index");
                var targets = -ulsw / 5 * count;

                Animation.animate(ulnav, {
                    "left": targets,
                });
                newsEm[count].style.opacity = 0.5;
            }
            lisnews[k].onmouseleave = function () {
                newsEm[this.getAttribute("index")].style.opacity = 0.5;
            }
        }

    //平安之旅 tab 切换

      var shi_god = document.getElementById("shi_god");
      var leading_actor = document.getElementById("leading_actor");
      var shi_god_container1 = document.getElementById("shi_god_container1");
      var shi_god_container2 = document.getElementById("shi_god_container2");
      shi_god.onclick = function () {
          shi_god_container1.style.display = "block";
          shi_god_container2.style.display = "none";
      };
     leading_actor.onclick = function () {
         shi_god_container1.style.display = "none";
         shi_god_container2.style.display = "block";
     }
    
    //    平安之旅 轮播
        var shi_god_tabs = document.getElementById("shi_god_tabs")
        var shi_god_as = shi_god_tabs.children;

        var shishenlist_hid = document.getElementById("shishenlist_hid");
        var shisheDivs = shishenlist_hid.children;

        var arrprev = document.getElementById("arrprev");
        var arrnext = document.getElementById("arrnext");

        var shiStep = shisheDivs[0].offsetWidth;

        for(var i=1;i<shisheDivs.length;i++){
            shisheDivs[i].style.left = -shiStep + "px";
        }


        var shiPic = 0;

        arrnext.onclick = function () {

            Animation.animate(shisheDivs[shiPic],{left:-shiStep});
            shiPic++;
            shiPic = shiPic>shisheDivs.length-1? 0 :shiPic;
            shisheDivs[shiPic].style.left = shiStep+"px";
            Animation.animate(shisheDivs[shiPic],{left:0});
            square()
        }
        arrprev.onclick = function () {
            Animation.animate(shisheDivs[shiPic],{left:shiStep});
            shiPic--;
            shiPic = shiPic<0? shisheDivs.length-1 :shiPic;
            shisheDivs[shiPic].style.left =-shiStep+"px";
            Animation.animate(shisheDivs[shiPic],{left:0});
            square()
        }

        for(var i=1;i<shi_god_as.length;i++){
            shi_god_as[i].index = i-1;
            shi_god_as[i].onmouseover = function () {
                var that = this.index;
                //console.log(that);
                //console.log(shiPic);
                if(that>shiPic){
                    Animation.animate(shisheDivs[shiPic],{left:shiStep})
                    shisheDivs[that].style.left = -shiStep +"px";
                    Animation.animate(shisheDivs[that],{left:0});
                }
                else if(that<shiPic){
                   Animation.animate(shisheDivs[shiPic],{left:-shiStep});
                    shisheDivs[that].style.left = shiStep+ "px";
                    Animation.animate(shisheDivs[that],{left:0});
                }
                shiPic = that;
                square();
            }
        }

        
        
        function square(){
            for(var i=1;i<shi_god_as.length;i++){
                shi_god_as[i].className = ""
            }
            shi_god_as[shiPic+1].className = " current";
        }
        

    //    轮播图结束


    }

    //试神背景图加载
    $(function () {
    var shishenlis = $("#shishenlist_hid").find("img");
        shishenlis.each(function (index,ele) {
            $(ele).attr("src","images/"+(200+index)+".png");
        });

    });

    //试神 tab切换动画
    $(function () {
       var ems = $("#peace_top").find("em");
        console.log(ems);
        ems.each(function (index,ele) {
            $(ele).css({
               "height":0,
                "bottom":0
            });

            //$("#shi_god").hover( function () {
            //    $(this).find("em").animate({
            //        "height":91
            //    },300);
            //}, function () {
            //    $(this).find("em").animate({
            //        "height":0
            //    },300);
            //});

            $("#shi_god").find("em").css({
                "height":91
            })

            $("#shi_god").on("click", function () {
                $(this).find("em").animate({
                    "height":91
                },300);
                $("#leading_actor").find("em").css({
                    "height":0,
                });
            })


            //
            //$("#leading_actor").hover( function () {
            //    $(this).find("em").animate({
            //        "height":91
            //    },300);
            //}, function () {
            //    $(this).find("em").animate({
            //        "height":0
            //    },300);
            //});

            $("#leading_actor").on("click", function () {
                $(this).find("em").animate({
                    "height":91
                },300);
                $("#shi_god").find("em").css({
                    "height":0,
                });
            })


        })

    })

//
