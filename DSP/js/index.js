$('#head').load('./head.html #head',function(){
function pdtitle(){
switch($('title').html()){
  case '联系我们':
  $('#head li').eq(5).data('flag',true).find('a').css('color','yellow');
  break;
  case '首页' :
  $('#head li').eq(4).data('flag',true).find('a').css('color','yellow');
  break;
  case '移动端广告' :
  $('#head li').eq(2).data('flag',true).find('a').css('color','yellow');
  break;
  case 'DSP介绍' :
  $('#head li').eq(0).data('flag',true).find('a').css('color','yellow');
  break;
  case '视频广告' :
  $('#head li').eq(1).data('flag',true).find('a').css('color','yellow');
  break;
  case 'DSP_外包项目' :
  $('#head li').eq(3).data('flag',true).find('a').css('color','yellow');
  break;
}
}
pdtitle();
$("#head li a").wrapInner( '<span class="out"></span>' );
  $("#head li a").each(function() {
    $( '<span class="over">' +  $(this).text() + '</span>' ).appendTo( this );
  });
  $("#head li a").hover(function() {
    if(!$(this).parent().data('flag')){
      $(".out",this).stop().animate({'top':'67px'},300); 
      $(".over",this).stop().animate({'top':'0px'},300); 
    }
  }, function() {
    if(!$(this).parent().data('flag')){
      $(".out",this).stop().animate({'top':'0px'},300); 
      $(".over",this).stop().animate({'top':'-67px'}, 300); 
    }
  });
var head_date_year=new Date().getFullYear();
var head_date_mouth=new Date().getMonth()+1;
var head_date_date=new Date().getDate();
$('#head p span').html(head_date_year+' 年 '+head_date_mouth+' 月 '+head_date_date+' 日')
var  bottom_top=$('#head img').height()-14;
$(window).resize(function(){
bottom_top=$('#head img').height()-14;
})
$(window).scroll(resizeorscroll);
function resizeorscroll(){
bottom_top=$('#head img').height()-14;
// console.log($('#head img').height()-14)
// console.log('以后'+bottom_top)

if($(window).width()>1200&&$(window).scrollTop()<bottom_top){
// console.log(1)
$('#head .bottom,#head p,#head ul').removeAttr('style')
}
if($(window).width()>1200&&$(window).scrollTop()>=bottom_top){
// console.log(2)
$('#head .bottom,#head p,#head ul').removeAttr('style')
$('#head .bottom,#head p').css({
  position:'fixed',
  top:0,
  left:0,
  zIndex:3,
  backgroundColor:'#ba3a51',
  opacity: '1',
  filter: 'alpha(opacity=100)'
})
$('#head ul').css({
  position:'fixed',
  top:0,
  zIndex:'3',
  right:0
})
}
if($(window).width()<=1200&&$(window).scrollTop()<bottom_top){
// console.log(3)
$('#head .bottom,#head p,#head ul').removeAttr('style')
}
if($(window).width()<=1200&&$(window).scrollTop()>=bottom_top){
// console.log(4)
// bottom_top=bottom_top;
$('#head .bottom,#head p,#head ul').removeAttr('style')
$('#head .bottom,#head p').css({
  position:'fixed',
  top:0,
  left:0,
  zIndex:3,
  backgroundColor:'#ba3a51',
  opacity: '1',
  filter: 'alpha(opacity=100)'
})
$('#head ul').css({
  position:'fixed',
  top:0,
  zIndex:'3',
  left:'330px'
})
}
}
//首页
function fn_one() {
$(".index-one-top").show(800,function () {
$(".index-one-center").slideDown(400,function () {
  $(".index-one-foot").slideDown(300);
});
})
}
function fn_two() {
$(".index-two-top").show(1000,function () {
$(".index-two-center").fadeIn(700,function () {
  $(".index-two-foot").slideDown(800);
});
})
}
/*************************three******************************************/
var three=[
function () {
$(".index-three-top").slideDown(600,fn_three);
},
function () {
$(".index-three-center").slideDown(600,fn_three);
},
function () {
$(".index-three-foot span").eq(0).animate({height:"220px"},600,fn_three);
},
function () {
$(".index-three-foot span i").eq(0).animate({width:"196px"},300,fn_three);
},
function () {
$(".index-three-foot small").eq(0).fadeIn(300,fn_three);
},
function () {
$(".index-three-foot span").eq(1).animate({height:"220px"},400,fn_three);
},
function () {
$(".index-three-foot span i").eq(1).animate({width:"122px"},300,fn_three);
},
function () {
$(".index-three-foot small").eq(1).fadeIn(800,fn_three);
},
function () {
$(".index-three-foot span").eq(2).animate({height:"220px"},800,fn_three);
},
function () {
$(".index-three-foot span i").eq(2).animate({width:"122px"},800,fn_three);
},
function () {
$(".index-three-foot p").eq(0).animate({width:"200px",opacity:"1"},560,fn_three);
},
function () {
$(".index-three-foot p").eq(1).animate({width:"200px",opacity:"1"},560,fn_three);
},
function () {
$(".index-three-foot p").eq(2).animate({width:"160px",opacity:"1"},560)
}
];
$("#index-three").queue("kunkun",three)
var fn_three= function () {
$("#index-three").dequeue("kunkun")
}
/*************************four******************************************/
var four=[
function () {
$(".index-four-top").slideDown(700,fn_four);
},
function () {
$(".index-four-center").slideDown(700,fn_four);
},
function () {
$(".index-four-foot span").eq(0).animate({height:"344px"},600,fn_four);
},
function () {
$(".index-four-foot span").eq(1).animate({width:"286px"},600,fn_four);
},
function () {
$(".index-four-foot i").eq(0).show(400,fn_four);
}, 
function () {
$(".index-four-foot i").eq(1).show(400,fn_four);
},
function () {
$(".index-four-foot p").eq(0).fadeIn(460,fn_four);
},
function () {
$(".index-four-foot p").eq(1).fadeIn(460);
}
];
$("#index-four").queue("kunkun",four)
var fn_four= function () {
$("#index-four").dequeue("kunkun")
}
/*************************five******************************************/
var five=[
function () {
$(".index-five-top").slideDown(600,fn_five);
},
function () {
$(".index-five-center").slideDown(600,fn_five);
},
function () {
$(".index-five-foot img").animate({width:"775px",height:"364px"},3000);
}
];
$("#index-five").queue("kunkun",five)
var fn_five= function () {
$("#index-five").dequeue("kunkun")
}
/*************************six******************************************/
var six=[
function () {
$(".index-six-top").slideDown(600,fn_six);
},
function () {
$(".index-six-center").slideDown(600,fn_six);
},
function () {
$(".index-six-foot-i").animate({width:"250px"},600,fn_six);
},
function () {
$(".index-six-foot-left-span").animate({width:"300px"},600,fn_six);
},
function () {
$(".index-six-foot-right-span").animate({height:"304px"},600,fn_six);
},
function () {
$(".index-six-foot-right-span p").slideDown(400,fn_six);
},
function () {
$(".index-six-foot-right-span s").animate({width:"175px"},300,fn_six);
},
function () {
$(".index-six-foot-right-span a").slideDown(300,fn_six);
},
function () {
$(".index-six-foot-right-span i").eq(0).fadeIn(200,fn_six);
}, 
function () {
$(".index-six-foot-right-span i").eq(1).fadeIn(200);
}
];
$("#index-six").queue("kunkun",six)
var fn_six= function () {
$("#index-six").dequeue("kunkun")
}
$(document).ready(function () {
$(document).scroll(function () {
var top=$(document).scrollTop();
var kk1=kk2=kk3=kk4=kk5=kk6=true;
if (top>100&&top<=600) {
    fn_one();
}
if (top>=600&&top<=1200) {
  fn_two();
};
if (top>1200&&top<=1800) {
  fn_three();
}
if (top>1800&&top<=2400) {
  fn_four();
} 
if (top>2400&&top<=3000) {
  fn_five();
}
if (top>3000) {
  fn_six();
}
})
})
//DSP介绍

//移动端广告
$(document).ready(function() {
$.fn.shake = function(s) {
    var t = {
        rangeX: 2,
        rangeY: 2,
        rangeRot: 1,
        rumbleSpeed: 10,
        rumbleEvent: 'hover',
        posX: 'left',
        posY: 'top'
    },
    u = $.extend(t, s);
    return this.each(function() {
        var $obj = $(this),
        f,
        g = u.rangeX * 2,
        h = u.rangeY * 2,
        i = u.rangeRot * 2,
        j = u.rumbleSpeed,
        k = $obj.css('position'),
        l = u.posX,
        m = u.posY,
        n,
        o,
        p,
        q = {
            'position': k,
            '-webkit-transform': 'rotate(0deg)',
            '-moz-transform': 'rotate(0deg)',
            '-o-transform': 'rotate(0deg)',
            'transform': 'rotate(0deg)'
        };
        if (l === 'left') {
            n = parseInt($obj.css('left'), 10)
        }
        if (l === 'right') {
            n = parseInt($obj.css('right'), 10)
        }
        if (m === 'top') {
            o = parseInt($obj.css('top'), 10)
        }
        if (m === 'bottom') {
            o = parseInt($obj.css('bottom'), 10)
        }
        function rumbler(a) {
            var b = Math.random(),
            c = Math.floor(Math.random() * (g + 1)) - g / 2,
            d = Math.floor(Math.random() * (h + 1)) - h / 2,
            e = Math.floor(Math.random() * (i + 1)) - i / 2;
            if (a.css('display') === 'inline') {
                p = true;
                a.css('display', 'inline-block')
            }
            if (c === 0 && g !== 0) {
                c = b < .5 ? 1 : -1;
            }
            if (d === 0 && h !== 0) {
                d = b < .5 ? 1 : -1;
            }
            if (k === 'absolute') {
                a.css({
                    'position': 'absolute',
                    '-webkit-transform': 'rotate(' + e + 'deg)',
                    '-moz-transform': 'rotate(' + e + 'deg)',
                    '-o-transform': 'rotate(' + e + 'deg)',
                    'transform': 'rotate(' + e + 'deg)'
                });
                a.css(l, n + c + 'px');
                a.css(m, o + d + 'px')
            }
            if (k === 'fixed') {
                a.css({
                    'position': 'fixed',
                    '-webkit-transform': 'rotate(' + e + 'deg)',
                    '-moz-transform': 'rotate(' + e + 'deg)',
                    '-o-transform': 'rotate(' + e + 'deg)',
                    'transform': 'rotate(' + e + 'deg)'
                });
                a.css(l, n + c + 'px');
                a.css(m, o + d + 'px')
            }
            if (k === 'static' || k === 'relative') {
                a.css({
                    'position': 'relative',
                    '-webkit-transform': 'rotate(' + e + 'deg)',
                    '-moz-transform': 'rotate(' + e + 'deg)',
                    '-o-transform': 'rotate(' + e + 'deg)',
                    'transform': 'rotate(' + e + 'deg)'
                });
                a.css(l, c + 'px');
                a.css(m, d + 'px')
            }
        }
        if (u.rumbleEvent === 'hover') {
            $obj.hover(function() {
                var a = $(this);
                f = setInterval(function() {
                    rumbler(a)
                },
                j)
            },
            function() {
                var a = $(this);
                clearInterval(f);
                a.css(q);
                a.css(l, n + 'px');
                a.css(m, o + 'px');
                if (p === true) {
                    a.css('display', 'inline')
                }
            });
        }
        if (u.rumbleEvent === 'click') {
            $obj.toggle(function() {
                var a = $(this);
                f = setInterval(function() {
                    rumbler(a)
                },
                j)
            },
            function() {
                var a = $(this);
                clearInterval(f);
                a.css(q);
                a.css(l, n + 'px');
                a.css(m, o + 'px');
                if (p === true) {
                    a.css('display', 'inline')
                }
            });
        }
        if (u.rumbleEvent === 'mousedown') {
            $obj.bind({
                mousedown: function() {
                    var a = $(this);
                    f = setInterval(function() {
                        rumbler(a)
                    },
                    j)
                },
                mouseup: function() {
                    var a = $(this);
                    clearInterval(f);
                    a.css(q);
                    a.css(l, n + 'px');
                    a.css(m, o + 'px');
                    if (p === true) {
                        a.css('display', 'inline')
                    }
                },
                mouseout: function() {
                    var a = $(this);
                    clearInterval(f);
                    a.css(q);
                    a.css(l, n + 'px');
                    a.css(m, o + 'px');
                    if (p === true) {
                        a.css('display', 'inline')
                    }
                }
            });
        }
        if (u.rumbleEvent === 'constant') {
            var r = $(this);
            f = setInterval(function() {
                rumbler(r)
            },
            j);
        }
    });
}
$(".gtwo_ul li").shake()
// $(".gtwo_ul li").hover(function(){
//        $(this).addClass('gtwo_hover')
//    },function(){
//        $(this).removeClass('gtwo_hover')
//    })
var aLi = $('.gthree_ul li');
var aImg = $('.gthree_ul div');
var aSpan = $('.gthree_ul span');
aLi.each(function(index) {
    $(this).mouseover(function() {
        aSpan.eq(index).stop();
        aImg.eq(index).stop();
        aImg.eq(index).css({
            zIndex: 1
        }).animate({
            top: 37,
            height: 0
        },
        50, '',
        function() {
            $(this).hide();
            aSpan.eq(index).show().css({
                zIndex: 2
            }).animate({
                top: 0,
                height: 172
            },
            50)
        })
    })
    $(this).mouseout(function() {
        aSpan.eq(index).stop();
        aImg.eq(index).stop();
        aSpan.eq(index).css({
            zIndex: 1
        }).animate({
            top: 37,
            height: 0
        },
        50, '',
        function() {
            $(this).hide();
            aImg.eq(index).show().css({
                zIndex: 2
            }).animate({
                top: 0,
                height: 172
            },
            50)
        })
    })
})
$(document).scroll(function() {
    var gtop = $(document).scrollTop();
    if(gtop>250){
       var gone_dd = [function() {
    $(".gone_b").animate({
        left: "65px"
    },
    1000, gend)
},
function() {
    $(".gone_t").animate({
        opacity: "1"
    },
    100, gend)
},
function() {
    $(".gone_r1,.gone_z1,.gone_l1").animate({
        opacity: "1"
    },
    500, gend)
},
function() {
    $(".gone_r2,.gone_z2,.gone_l2").animate({
        opacity: "1"
    },
    1200, gend)
},
function() {
    $(".gone_r3,.gone_l3").animate({
        opacity: "1"
    },
    1500, gend)
}]
$("#gaoc").queue("gend", gone_dd);
var gend = function() {
    $("#gaoc").dequeue("gend")
};
gend();
    }
    if(gtop>600){
      var gone_vv = [function() {
    $(".gtwo_li1").animate({
        opacity:"1"
    },
    35, gvnd)
},
   function() {
    $(".gtwo_li2").animate({
        opacity:"1"
    },
    35, gvnd)
},
function() {
    $(".gtwo_li3").animate({
        opacity:"1"
    },
    35, gvnd)
},
function() {
    $(".gtwo_li4").animate({
        opacity:"1"
    },
    35, gvnd)
},
function() {
    $(".gtwo_li5").animate({
        opacity:"1"
    },
    35, gvnd)
},
function() {
    $(".gtwo_li6").animate({
        opacity:"1"
    },
    35, gvnd)
},
function() {
    $(".gtwo_li7").animate({
        opacity:"1"
    },
    35, gvnd)
},
function() {
    $(".gtwo_li8").animate({
        opacity:"1"
    },
    35, gvnd)
},
function() {
    $(".gtwo_li9").animate({
        opacity:"1"
    },
    35, gvnd)
},
function() {
    $(".gtwo_li10").animate({
        opacity:"1"
    },
    35, gvnd)
},
function() {
    $(".gtwo_li11").animate({
        opacity:"1"
    },
    35, gvnd)
},
function() {
    $(".gtwo_li12").animate({
        opacity:"1"
    },
    35, gvnd)
},
function() {
    $(".gtwo_li13").animate({
        opacity:"1"
    },
    35, gvnd)
},
function() {
    $(".gtwo_li14").animate({
        opacity:"1"
    },
    35, gvnd)
},
function() {
    $(".gtwo_li15").animate({
        opacity:"1"
    },
    15, gvnd)
},
function() {
    $(".gtwo_li16").animate({
        opacity:"1"
    },
    35, gvnd)
},
function() {
    $(".gtwo_li17").animate({
        opacity:"1"
    },
    35, gvnd)
},
function() {
    $(".gtwo_li18").animate({
        opacity:"1"
    },
    35, gvnd)
},
function() {
    $(".gtwo_li19").animate({
        opacity:"1"
    },
    35, gvnd)
},
function() {
    $(".gtwo_li20").animate({
        opacity:"1"
    },
    35, gvnd)
},
function() {
    $(".gtwo_li21").animate({
        opacity:"1"
    },
   35, gvnd)
},
function() {
    $(".gtwo_li22").animate({
        opacity:"1"
    },
    35, gvnd)
},
function() {
    $(".gtwo_li23").animate({
        opacity:"1"
    },
    35, gvnd)
},
function() {
    $(".gtwo_li24").animate({
        opacity:"1"
    },
    35, gvnd)
},
function() {
    $(".gtwo_li25").animate({
        opacity:"1"
    },
    35, gvnd)
},
function() {
    $(".gtwo_li26").animate({
        opacity:"1"
    },
    35, gvnd)
},
function() {
    $(".gtwo_li27").animate({
        opacity:"1"
    },
    35, gvnd)
},

]
$("#gaoc").queue("gvnd", gone_vv);
var gvnd = function() {
    $("#gaoc").dequeue("gvnd")
};
gvnd();
    
    };
    if(gtop>1150){
      var gone_jj = [function() {
    $(".gthree_li1,.gthree_li7,.gthree_li6,.gthree_li12").animate({
        opacity:"1"
    },
    700, gjnd)
},
   function() {
    $(".gthree_li2,.gthree_li5,.gthree_li8,.gthree_li11").animate({
        opacity:"1"
    },
    100, gjnd)
},
  function() {
    $(".gthree_li3,.gthree_li4,.gthree_li9,.gthree_li10").animate({
        opacity:"1"
    },
    700, gjnd)
},
]
$("#gaoc").queue("gjnd", gone_jj);
var gjnd = function() {
    $("#gaoc").dequeue("gjnd")
};
gjnd();
    
    };
    if (gtop >1675) {
        $(".gfour_l1").animate({
            left: "10px",
            opacity: "1"
        },
        1000)
         $(".gfour_l2").animate({
            top: "14px",
            opacity: "1"
        },
        1000)
         $(".gfour_l3").animate({
            left: "164px",
            opacity: "1"
        },
        1000)
    };
    if(gtop>2050){
       var gone_cc = [function() {
    $(".gfive_s16").animate({
        opacity:"1"
    },
    800, grnd)
},

       function() {
   $(".gfive_s12,.gfive_s13,.gfive_s14,.gfive_s15").animate({
        
        opacity:"1"
      },
    800, grnd)
},
       function() {
   $(".gfive_s25").animate({
        top:"18px",
        opacity:"1"
      },
    1000, grnd)
},
function() {
    $(".gfive_s27").animate({
        opacity:"1"
    },
    100, grnd)
},
function() {
   $(".gfive_s21").animate({
        opacity:"1"
    },
    300, grnd)
},
function() {
   $(".gfive_s22").animate({
        opacity:"1"
    },
    800, grnd)
},
function() {
   $(".gfive_s23").animate({
        opacity:"1"
    },
    1000, grnd)
},
function() {
   $(".gfive_z,.gfive_k,.gfive_w").animate({
        opacity:"1"
    },
    900, grnd)
},]
$("#gaoc").queue("grnd", gone_cc);
var grnd = function() {
    $("#gaoc").dequeue("grnd")
};
grnd();
    };
    if(gtop>2700){
        var gone_rr = [function() {
    $(".gsix_oo").animate({
        opacity:"1"
    },
    250, ghnd)
},
function() {
    $(".gsix_ooo").animate({
      top:"-18px",
        opacity:"1"
    },
    500, ghnd)
},
function() {
    $(".gsix_pp").animate({
      opacity:"1"
    },
    200, ghnd)
},
function() {
    $(".gsix_pp1").animate({
      opacity:"1"
    },
    200, ghnd)
},
function() {
    $(".gsix_ul1").animate({
      opacity:"1"
    },
    200, ghnd)
},
function() {
    $(".gsix_d").animate({
        width:"62px",
        height:"55px"
    },
    100, ghnd)
},
function() {
    $(".gsix_oo1").animate({
        opacity:"1"
    },
    250, ghnd)
},
function() {
    $(".gsix_ooo1").animate({
      top:"14px",
        opacity:"1"
    },
    250, ghnd)
},
function() {
    $(".gsix_pp2").animate({
      opacity:"1"
    },
    250, ghnd)
},
function() {
    $(".gsix_pp3").animate({
      opacity:"1"
    },
    250, ghnd)
},
function() {
    $(".gsix_pp4").animate({
      opacity:"1"
    },
    250, ghnd)
},
function() {
    $(".gsix_ul2").animate({
       opacity:"1"
    },
    250, ghnd)
},
function() {
    $(".gsix_d").animate({
        width:"352px",
        height:"153px"
    },
    500, ghnd)
},
function() {
    $(".gsix_oo2").animate({
        opacity:"1"
    },
    250, ghnd)
},
function() {
    $(".gsix_ooo2").animate({
      top:"0px",
        opacity:"1"
    },
    250, ghnd)
},
function() {
    $(".gsix_pp5").animate({
      opacity:"1"
    },
    250, ghnd)
},
function() {
    $(".gsix_pp6").animate({
      opacity:"1"
    },
    250, ghnd)
},
function() {
    $(".gsix_ul3").animate({
      opacity:"1"
    },
    250, ghnd)
},
function() {
    $(".gsix_d").animate({
        width:"632px",
        height:"223px"
    },
    250, ghnd)
},
function() {
    $(".gsix_oo3").animate({
        opacity:"1"
    },
    250, ghnd)
},
function() {
    $(".gsix_ooo3").animate({
      top:"23px",
        opacity:"1"
    },
    250, ghnd)
},
function() {
    $(".gsix_pp7").animate({
      opacity:"1"
    },
    250, ghnd)
},
function() {
    $(".gsix_li9").animate({
      opacity:"1"
    },
    500, ghnd)
},
function() {
    $(".gsix_d").animate({
        width:"692px",
        height:"243px"
    },
    1200, ghnd)
},
function() {
    $(".gsix_d").animate({
        width:"692px",
        height:"243px"
    },
    250, ghnd)
}]
$("#gaoc").queue("ghnd", gone_rr);
var ghnd = function() {
    $("#gaoc").dequeue("ghnd")
};
ghnd();
    };
})

$(".gfour_ul li").hover(function() {
    $(this).find("i").animate({
        opacity: "0"
    },
    100)
    $(this).addClass('gfour_hover')

},
function() {
    $(this).find("i").animate({
        opacity: "1"
    },
    100)
    $(this).removeClass('gfour_hover')
})
$(".gfive_s21").hover(function(){
  $(this).addClass("gfive_s211")
})

})
//视频广告
$('.video-first .logo').hide();
$('.video-first .picture-04').hide();
$('.video-first .picture-05,.video-first .picture-06,.video-first .picture-02,.video-first .picture-03').hide();
var q=[
function() {
$('.video-first .logo').fadeIn(1000,next);

},
function(){
$('.video-first .picture-01').animate({
  width:'144px',
  height:'122px'
},'fast',next);
},
function(){
$('.video-first .picture-04').fadeIn(1000,next)
},
function() {
$('.video-first .picture-02,.video-first .picture-03,.video-first .picture-05,.video-first .picture-06').fadeIn(1000,next);

},
function(){
$('.video-first .left .two .icon,.video-first .right .two .icon').each(function(){
  $(this).animate({
    width:'142px',
    height:'44px'
  },1000)
},next);
$('.video-first .left .one .icon,.video-first .right .one .icon').css({
  width:'142px',
  height:'44px',
  display:'none'
})
$('.video-first .left .one .icon').eq(0).fadeIn(500,function(){
  $('.video-first .left .one .icon').eq(1).fadeIn(300,function(){
    $('.video-first .left .one .icon').eq(2).fadeIn(100);
  })
});
$('.video-first .right .one .icon').eq(0).fadeIn(500,function(){
  $('.video-first .right .one .icon').eq(1).fadeIn(300,function(){
    $('.video-first .right .one .icon').eq(2).fadeIn(100);
  })
})
}
]
function next(){
$('.video-content').dequeue('myQueue');
}
$('.video-content').queue('myQueue',q);
next();
var time=time1=null;
var _this;
$('.video-big .one,.video-big .two,.video-big .three').hover(function(){
clearInterval(time);
$(this).children('i').show();
_this=this;
time=setInterval(chixu,1);
setTimeout(function(){
clearInterval(time);
},10)
},function(){
$(this).children('i').hide();
})
function chixu(){
$(_this).animate({marginLeft:"10px"},50);
$(_this).animate({"marginLeft":"20px"},50);
}
time1=setInterval(xianshi,3000)
function xianshi(){
if($('.photo-img03').css('display')=='none'){
$('.photo-img03').css('display','block');
}else{
$('.photo-img03').css('display','none');
}
if($('.photo-img06').css('display')=='none'){
$('.photo-img06').fadeIn('slow');
}else{
$('.photo-img06').fadeOut('slow');
}
if($('.photo-img07').css('display')=='none'){
$('.photo-img07').css('display','block');
}else{
$('.photo-img07').css('display','none');
}
}

//DSP_外包项目

var d = [
 function(){
    $(".sh_bdy1 p").fadeIn(1000,_fn)
 },function(){
    $(".sh_bdy1 .img5").fadeIn(600,_fn)
 },function(){
    $(".sh_bdy1 .img22").fadeIn(600,_fn)
 },function(){
    $(".sh_bdy1 .img19").fadeIn(600,_fn)
 },function(){
    $(".sh_bdy1 .img3").fadeIn(600,_fn)
 },function(){
    $(".sh_bdy1 .img16").fadeIn(600,_fn)
 },function(){
    $(".sh_bdy1 .img13").fadeIn(400,_fn)
 },function(){
    $(".sh_bdy1 .img12").fadeIn(100,_fn)
 },function(){
    $(".sh_bdy1 .img4").fadeIn(100,_fn)
 },function(){
    $(".sh_bdy1 .img23").fadeIn(400,_fn)
 },function(){
    $(".sh_bdy1 .img15").fadeIn(100,_fn)
 },function(){
    $(".sh_bdy1 .img14").fadeIn(100,_fn)
 },function(){
    $(".sh_bdy1 .img21").fadeIn(100,_fn)
 },function(){
    $(".sh_bdy1 .img20").fadeIn(400,_fn)
 },function(){
    $(".sh_bdy1 .img18").fadeIn(100,_fn)
 },function(){
    $(".sh_bdy1 .img11").fadeIn(400,_fn)
 },function(){
    $(".sh_bdy1 .img10").fadeIn(100,_fn)
 },function(){
    $(".sh_bdy1 .img2").fadeIn(100,_fn)
 },function(){
    $(".sh_bdy1 .img6").fadeIn(600)
    $(".sh_bdy1 .img7").fadeIn(600)
    $(".sh_bdy1 .img8").fadeIn(600,_fn)
 },function(){
    $(".sh_bdy1 .img1").fadeIn(600)
    $(".sh_bdy1 .img9").fadeIn(600)
    $(".sh_bdy1 .img17").fadeIn(600,_fn)
 },function(){
    $(".sh_bdy1 .img24").fadeIn(600,_fn)
 },function(){
    $(".sh_bdy1 img").fadeOut(100,_fn)
 },function(){
    $(".sh_bdy1 img").fadeIn(100,_fn)
 }
]
    $(".sh_bdy1").queue("item",d)
function _fn(){
    $(".sh_bdy1").dequeue("item")
}
_fn();
$(".sh_bdy1 img").hover(function(){
    $(this).stop().animate({marginTop:"-10px"},100)
},function(){
    $(this).stop().animate({marginTop:0},100)
})
//bdy2的一系列特效
    var f = [
      function(){
        $(".sh_bdy2 .p1").fadeIn(1000,_fn2)
      },function(){
        $(".sh_bdy2 .sh_link").fadeIn(600)
        $(".sh_bdy2 .imge11").fadeIn(600,_fn2)
      },function(){
        $(".sh_bdy2 .sh_link").animate({height:"50px"},1000)
        $(".sh_bdy2 .imge11").animate({marginTop:"40px"},1000,_fn2)
      },function(){
        $(".sh_bdy2 .p2").fadeIn(600,_fn2)
      },function(){
        $(".sh_bdy2 .sh_box1").fadeIn(200,_fn2)
      },function(){
        $(".sh_bdy2 .imge1").fadeIn(200,_fn2)
      },function(){
        $(".sh_bdy2 .imge2").fadeIn(200,_fn2)
      },function(){
        $(".sh_bdy2 .imge3").fadeIn(200,_fn2)
      },function(){
        $(".sh_bdy2 .imge4").fadeIn(200,_fn2)
      },function(){
        $(".sh_bdy2 .sh_link").animate({height:"130px"},1000)
        $(".sh_bdy2 .imge11").animate({marginTop:"120px"},1000,_fn2)
      },function(){
        $(".sh_bdy2 .p3").fadeIn(600,_fn2)
      },function(){
        $(".sh_bdy2 .sh_box2").fadeIn(200,_fn2)
      },function(){
        $(".sh_bdy2 .imge5").fadeIn(200,_fn2)
      },function(){
        $(".sh_bdy2 .imge6").fadeIn(200,_fn2)
      },function(){
        $(".sh_bdy2 .imge7").fadeIn(200,_fn2)
      },function(){
        $(".sh_bdy2 .imge8").fadeIn(200,_fn2)
      },function(){
        $(".sh_bdy2 .sh_link").animate({height:"280px"},1500)
        $(".sh_bdy2 .imge11").animate({marginTop:"270px"},1500,_fn2)
      },function(){
        $(".sh_bdy2 .sh_box3").fadeIn(200,_fn2)
      },function(){
        $(".sh_bdy2 .imge9").fadeIn(200,_fn2)
      },function(){
        $(".sh_bdy2 .sh_link").animate({height:"420px"},1500)
        $(".sh_bdy2 .imge11").animate({marginTop:"410px"},1500,_fn2)
      },function(){
        $(".sh_bdy2 .p4").fadeIn(600,_fn2)
      },function(){
        $(".sh_bdy2 .sh_box4").fadeIn(200,_fn2)
      },function(){
        $(".sh_bdy2 .imge10").fadeIn(200,_fn2)
      },function(){
        $(".sh_bdy2 .sh_link").animate({height:"580px"},1500)
        $(".sh_bdy2 .imge11").animate({marginTop:"570px"},1500,_fn2)
      }
    ]
 $(".sh_bdy2").queue("item2",f)
 function _fn2(){
    $(".sh_bdy2").dequeue("item2")
 }
 _fn2();
//bdy3的一系列特效
$(".sh_cen1").hover(function(){
    $(".image1").stop().animate({marginTop:"-71px"},200)
},function(){
    $(".image1").stop().animate({marginTop:"-5px"},200)
})
$(".sh_cen2").hover(function(){
    $(".image2").stop().animate({marginTop:"-84px"},200)
},function(){
    $(".image2").stop().animate({marginTop:"-10px"},200)
})
$(".sh_cen3").hover(function(){
    $(".image3").stop().animate({marginTop:"-75px"},200)
},function(){
    $(".image3").stop().animate({marginTop:"-5px"},200)
})
$(".sh_cen4").hover(function(){
    $(".image4").stop().animate({marginTop:"-82px"},200)
},function(){
    $(".image4").stop().animate({marginTop:"-7px"},200)
})
$(".sh_cen5").hover(function(){
    $(".image5").stop().animate({marginTop:"-74px"},200)
},function(){
    $(".image5").stop().animate({marginTop:"-5px"},200)
})
$(".sh_cen6").hover(function(){
    $(".image6").stop().animate({marginTop:"-68px"},200)
},function(){
    $(".image6").stop().animate({marginTop:"-4px"},200)
})
$(".sh_cen7").hover(function(){
    $(".image7").stop().animate({marginTop:"-79px"},200)
},function(){
    $(".image7").stop().animate({marginTop:"-6px"},200)
})
$(".sh_cen8").hover(function(){
    $(".image8").stop().animate({marginTop:"-99px"},200)
},function(){
    $(".image8").stop().animate({marginTop:"-12px"},200)
})
$(".sh_cen9").hover(function(){
    $(".image9").stop().animate({marginTop:"-56px"},200)
},function(){
    $(".image9").stop().animate({marginTop:"4px"},200)
})
$(".sh_cen10").hover(function(){
    $(".image10").stop().animate({marginTop:"-99px"},200)
},function(){
    $(".image10").stop().animate({marginTop:"-16px"},200)
})
$(".sh_cen11").hover(function(){
    $(".image11").stop().animate({marginTop:"-95px"},200)
},function(){
    $(".image11").stop().animate({marginTop:"-14px"},200)
})
$(".sh_cen12").hover(function(){
    $(".image12").stop().animate({marginTop:"-38px"},200)
},function(){
    $(".image12").stop().animate({marginTop:"4px"},200)
})

//联系我们
$('#contact_form :checkbox+label').bind('click',function(){
if(!$(this).prev().prop('checked')){
$(this).css('background-position','left')
}
else{
$(this).css('background-position','right')
}
})
$('#contact_form :radio+label').bind('click',function(){
$(':radio+label').css('background-position','right')
$(this).css('background-position','left')
})
$('#contact_form :text:lt(3)').focus(function(){
$(this).next().next().html('')
})
var contact_a=['2-4个汉字或英文字母，不区分大小写','请输入十一位数的手机号码','请输入您的邮箱，以便以后联系您']
$('#contact_form :text:lt(3)').each(function(i){
$('#contact_form :text').eq(i).change(function(){
if(test(i,$(':text').eq(i).val())){
$(this).parent().find('s').html('<img src="./imgs/success.jpg">') 
}
else{
$(this).parent().find('s').html('<img src="./imgs/error.jpg">')
}
})
$('#contact_form :text:lt(3)').eq(i).blur(function(){
if($('#contact_form :text').eq(i).val()==''){
  $(this).next().next().html(contact_a[i])
  $(this).parent().find('s').html('')
}
})
})
$('#contact_form :text').eq(3).focus(function(){
$(this).prev().prev().css('background-position','left')
$(this).prev().prev().prev().prop('checked',true)
})
$('#contact_form :text').eq(3).blur(function(){
if($(this).val()==''){
$(this).prev().prev().css('background-position','right')
$(this).prev().prev().prev().prop('checked',false)
}
})
$('#contact_form :checkbox').focus(function(){
$('#contact_form :checkbox').blur(function(){
if($('#contact_form :checkbox:checked').length==0){
  $(this).parent().find('s').html('<img src="./imgs/error.jpg">')
}
else{
  $(this).parent().find('s').html('<img src="./imgs/success.jpg">') 
}
})
})
$('#contact_form :radio').focus(function(){
$('#contact_form :radio').blur(function(){
if($('#contact_form :radio:checked').length==0){
  $(this).parent().find('s').html('<img src="./imgs/error.jpg">')
}
else{
  $(this).parent().find('s').html('<img src="./imgs/success.jpg">') 
}
})
})
$('#contact_form i').click(function(){
if(test(0,$(':text').eq(0).val())&&test(1,$(':text').eq(1).val())&&test(2,$(':text').eq(2).val())&&$(':checkbox:checked').length!=0&&$(':radio:checked').length!=0){

$('.contact_submit').eq(0).show(function(){
  $(this).click(function(){
    $(this).hide()
  })
})
}
else{
$('.contact_submit').eq(1).show(function(){
  $('#contact_form s:empty').html('<img src="./imgs/error.jpg">')
  $(this).click(function(){
    $(this).hide()
  })
})
}
})
function test(i,val){
  var re;
  switch(i){
    case 0:
      re = /^[a-zA-Z\u4e00-\u9fa5]{2,4}$/i;
      return re.test(val);
      break;
    case 1:
      re = /^[1][3578][0-9]{9}$/;
      return re.test(val);
      break;
    case 2:
      re = /^\w+@[0-9a-z]+\.[a-z]+$/;
      return re.test(val);
      break;
    case 3:
      if(val){
        return true;
      }
      else{
        return false;
      }
      break;
  }
}

})
$('#foots').load('./head.html #foot')



















