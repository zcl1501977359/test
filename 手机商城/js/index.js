
window.onload = function () {
    //刷新置顶
    var zhiding= setTimeout(function(){scroll(0,0)},0);

    // header top
    var shop = document.getElementById('shop');
    var shopHidd = document.getElementById('shopHidd');
    shop.onmouseover = function () {
        shopHidd.style.display = 'block';
        shopHidd.style.opacity = 1;
    }
    shop.onmouseout = function () {
        shopHidd.style.opacity = 0;
        shopHidd.style.display = 'none';
    }
    shopHidd.onmouseover = function () {
        this.style.display = 'block';
        this.style.opacity = 1;
    }
    shopHidd.onmouseout = function(){
        this.style.opacity = 0;
        this.style.display = 'none';
    }
// header nav
    var nav = document.getElementsByClassName('nav')[0];
    var navHPhone = document.getElementsByClassName('nav-h-phone')[0];
    var iphone = document.getElementById('iphone');			//a标签
    var hiddBox = document.getElementsByClassName('hiddBox')[0];
    var phoneLi= document.getElementById('phoneLi');	   //a标签的父级li
    var shade = document.getElementsByClassName('shade')[0];
    function show(){
        var wH = window.innerHeight;
        phoneHidd.style.transition = 'height .5s ease';
        phoneHidd.style.height = wH + 'px';
        shade.style.height = wH - 320 +'px'
        nav.style.background = '#fff';
    }
    function hidd(){
        phoneHidd.style.transition = 'height .2s ease';
        phoneHidd.style.height = '0';
        nav.style.background = '#eee';
        if (document.body.scrollTop > 188) {
            nav.style.background = 'linear-gradient(#fff,#eee)';
        }
    }
    iphone.onmouseover = function(){
        show();
    }
    iphone.onmouseout = function(){
        hidd();
        phoneLi.onmouseover = function(){
            show()
        }
    }
    phoneLi.onmouseout = function(){
        hidd();
    }
    hiddBox.onmouseover = function(){
        show();
    }
    hiddBox.onmouseout = function(){
        hidd();
    }
    //nav shopcart
    var Nshop = document.getElementById('N-shop');
    var NshopHidd = document.getElementById('N-shopHidd');
    Nshop.onmouseover = function () {
        NshopHidd.style.display = 'block';
        NshopHidd.style.opacity = 1;
        NshopHidd.style.right = '45px';
        NshopHidd.style.top = '50px';
    }
    Nshop.onmouseout = function () {
        NshopHidd.style.opacity = 0;
        NshopHidd.style.display = 'none';
    }
    NshopHidd.onmouseover = function () {
        this.style.display = 'block';
        this.style.opacity = 1;
    }
    NshopHidd.onmouseout = function(){
        this.style.opacity = 0;
        this.style.display = 'none';
    }
    //nav置顶
    window.onscroll = function(e){
        var nav = document.getElementsByClassName('nav')[0];
        var perHidd = document.getElementsByClassName('per-hidd')[0];
        var h = document.body.scrollTop||document.documentElement.scrollTop;

        if (h > 188) {

            nav.classList.add('scroll');
            perHidd.style.display = 'block';

        }else if(h < 100){
            nav.classList.remove('scroll');
            perHidd.style.display = 'none';

        }
        //仿锚点置顶
        var anchor = document.getElementById('anchor');
        if (h > 600) {
            anchor.style.bottom = '20px';
        }else if(h < 600){
            anchor.style.bottom = '-50px';
        }
        anchor.onclick = function(){
            var speed = 0;//速度
            var timer = setInterval(function(){
                window.scrollTo(0,h);
                if ( h > 0 ) {
                    h -= speed;
                    speed += 10;
                }else{
                    h = 0;//强制纠偏
                    clearInterval(timer);
                }
            },10)
        }
    };
    // lunbo图
    (function(){
        //lunbo图偏移
        var lunbo = document.getElementsByClassName('lunbo')[0];
        lunbo.onmousemove = function(e){
            //找中心点
            var x = window.innerWidth/2;
            var y = (688-188)/2+188;
            var moveX = e.pageX;
            var moveY = e.pageY;
            this.style.transform = 'rotateX(' + parseInt((moveY - y)*0.05) + 'deg)' + 'rotateY(' + parseInt((moveX - x )*0.01) + 'deg)';
        }
        lunbo.onmouseout = function(){
            this.style.transform = 'rotateX(0deg)' + 'rotateY(0deg)';
        }
        //自动播放
        var bgs = document.querySelectorAll('.lunbo .lb-bg');
        var lis = document.querySelectorAll('.lunbo ul li');
        var Olunbo = new run(bgs,lis);
        Olunbo.play();
        for (var i = 0; i < lis.length; i++) {
            lis[i].i = i;
            lis[i].onmouseover = function(){
                Olunbo.stop(this.i)
            }
            lis[i].onmouseout = function(){
                Olunbo.play()
            }
        }

    })();
    //商品切换
    (function(){
        var imgBoxs = document.querySelectorAll('ul li .title .imgBox');
        var btns = document.querySelectorAll('ul li .btn');
        for (var i = 0; i < btns.length; i++) {
            btns[i].i = i;
            btns[i].onmouseover = function(){
                var inputs = this.getElementsByTagName('input');
                var imgs = imgBoxs[this.i].getElementsByTagName('img');
                for (var j = 0; j < inputs.length; j++) {
                    inputs[j].j = j;
                    inputs[j].onmouseover = function(){
                        for (var x = 0; x < inputs.length; x++) {
                            inputs[x].style.boxShadow = '0 0 0 1px #b2b2b2';
                            imgs[x].style.opacity = 0;
                        }
                        this.style.boxShadow = '0 0 0 3px #b2b2b2';
                        imgs[this.j].style.opacity = 1;
                    }
                }
            }
        }
    })();
    // 语言切换
    (function(){
        var lagu = document.querySelector('footer .copyRight .copyRight-r .language');
        var span = document.querySelectorAll('footer .copyRight .copyRight-r .language span');
        var CR = document.querySelector('footer .copyRight .copyRight-r');
        var i =  document.querySelector('footer .copyRight .copyRight-r .language span i');
        var count = 0;
        lagu.onclick = function(){

            if (count%2 == 0) {
                CR.style.overflow = 'visible';
                this.classList.add('click');
                i.style.transform = 'rotate(180deg)';
                span[0].style.borderBottom = '1px solid #ddd';
            }else{
                CR.style.overflow = 'hidden';
                this.classList.remove('click');
                i.style.transform = 'rotate(0deg)';
                span[0].style.borderBottom = 'none';
            }
            count++;
        }


    })();
}
function run(bgs,lis){
    var index = 0;//初始化下标
    this.play = function(){
        this.timer = setInterval(function(){
            bgs[index].style.opacity = 0;
            lis[index].className = '';
            index++;
            if (index == bgs.length){ index = 0};
            bgs[index].style.opacity = 1;
            lis[index].className = 'check';
        },1000);
        this.stop = function(m){
            clearInterval(this.timer);
            bgs[index].style.opacity = 0;
            lis[index].className = '';
            index = m;
            bgs[index].style.opacity = 1;
            lis[index].className = 'check';
        }
    }
}