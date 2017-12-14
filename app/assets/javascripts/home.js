$(document).ready(function() {


    var IS_IE = (!!window.ActiveXObject || "ActiveXObject" in window) ? true : false;
    $('#fullDiv').fullpage({
        anchors: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
        menu: '#menu',css3:true,
        autoScrolling:true,
        scrollOverflow:true,
        afterLoad: function(anchorLink, index){

            if(index == 1 && !IS_IE)
            {
                $('.section1 .s1-bg').addClass('slide-bg');
            }
            if(index == 2 && !IS_IE)
            {
                $('.section2 .s2-bg-top').addClass('slide-bg');
                $('.section2 .s2-bg-btm').addClass('slide-bg');
            }
            if(index == 3 )
            {
                if(!IS_IE){$('.s3-bg').addClass('slide-bg');}
                $('.section3 .t1').addClass('anim-adv');
                $('.section3 .btm').addClass("anim-adv-btm");
                $('.section3 .ser1').addClass("anim-adv-ser1");
                $('.section3 .ser2').addClass("anim-adv-ser2");
                $('.section3 .ser3').addClass("anim-adv-ser3");
            }
            if(index == 4){
                if(!IS_IE){$('.s4-bg').addClass('slide-bg');}
                $('.s4-top-layout').addClass("anim-pro-shield");//bg
                $('.shield').addClass("anim-pro-title");//title
                $('.pro-service').addClass("anim-pro-subtitle");//subtitle
                $('.pro-more').addClass("anim-adv-ser1");
                $('.section4 .ser1').addClass("anim-adv-ser2");
                $('.section4 .ser2').addClass("anim-adv-ser3");
            }
            if(index == 5){
                $('.section5 .u-voice').addClass("anim-voice");
                $('.section5 .btm').addClass("anim-feed-btm");
                $('#slidehead').addClass("anim-adv-ser1");
                $('#slidepos').addClass("anim-adv-ser2");
                $('#slidetext').addClass("anim-adv-ser3");
                $('.quotel').addClass("anim-quotel");
                $('.quoter').addClass("anim-quoter");
                if($("#slidehead .item").length>1)
                {
                    initSlide();
                }
            }
            if(index == 6){
                $('#g-shifu').addClass("anim-shifu");
                $('#g-company').addClass("anim-company");
                //$('.section6 .fp-scroller').animate({"transform":"translate(0px,0px)"});
                //$('.section6 .fp-scroller').css("transform","translate(0px,0px)");
            }
        }
    });//full page end

    $(".s1-item span").click(function(){
        $(this).siblings('span').removeClass('selected');
        $(this).addClass('selected');
    });

    var $img = $(".s1-btn1 img");
    $img.hover(function() {
        $(this).attr("src",$(this).attr("src").replace("_out","_over"));
    },function() {
        $(this).attr("src",$(this).attr("src").replace("_over","_out"));
    });

    var arrSlide = [];
    var curIndex = 0;
    function initSlide()
    {
        var arrImg = $("#slidehead .item");
        var arrPos = $("#slidepos .item");
        var arrTxt = $("#slidetext .item");

        for (var i = 0; i < arrImg.length,i < arrPos.length,i < arrTxt.length; i++)
        {
            var item = {};
            item.src=arrImg[i].src;
            item.pos=arrPos[i].innerText;
            item.txt=arrTxt[i].innerText;
            arrSlide.push(item);
        }
        arrTxt =null;arrPos=null;arrTxt=null;
        $("#slidehead .item").not(":first").remove();
        $("#slidepos .item").not(":first").remove();
        $("#slidetext .item").not(":first").remove();
    }
    function doSlide(isRight)
    {
        //console.log("click idx=",curIndex)
        curIndex = isRight ? (curIndex+1) : (curIndex-1);
        if(curIndex<0)
        {
            curIndex = arrSlide.length+curIndex;
        }
        if (curIndex>arrSlide.length-1)
        {
            curIndex = 0;
        }
        $("#slidehead .item").animate({opacity: '0'},300,function(){
            $("#slidehead .item").attr("src",arrSlide[curIndex].src).animate({opacity: '1'},300);;
        });
        $("#slidepos .item").animate({opacity: '0'},300,function(){
            $(this).html(arrSlide[curIndex].pos).animate({opacity: '1'},300);
        });
        $("#slidetext .item").animate({opacity: '0'},300,function(){
            $(this).html(arrSlide[curIndex].txt).animate({opacity: '1'},300);
        });
    }

    var TIME_OUT_DONE = 1;
    $(".slideleft").click(function (){
        if(TIME_OUT_DONE)
        {
            TIME_OUT_DONE = 0;
            sildeTimeout();
            doSlide(false);
        }
    });
    $(".slideright").click(function (){
        if(TIME_OUT_DONE)
        {
            TIME_OUT_DONE = 0;
            sildeTimeout();
            doSlide(true);
        }
    });
    function sildeTimeout()
    {
        setTimeout(function(){TIME_OUT_DONE=1;},600);
    }
});//ready