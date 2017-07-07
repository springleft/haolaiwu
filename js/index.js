window.onload=function(){
	var oOl=document.getElementById('ol');
	var aBtn=oOl.getElementsByTagName('li');
	var oUl=document.getElementById('ul');
	 var iNow=0;
	for(var i=0; i<aBtn.length; i++){
		(function (index){
			aBtn[i].onclick=function (){
				iNow=index;
				tab();
			};
		})(i);
	}
	function tab(){
		for(var i=0; i<aBtn.length; i++){
			aBtn[i].className='';
		}
		aBtn[iNow].className='change';
		move(oUl,{left:-iNow*oUl.children[0].offsetWidth});
	}
      function Next(){
		iNow++;
		if(iNow==aBtn.length){
			iNow=0;
		}
		tab();
	};
	var timer=setInterval(Next,3000)
    // oUl.onmouseover=function(){
    // 	clearInterval(timer);
    // }
    // oUl.onmouseout=function(){
    // timer=setInterval(Next,1000)
    // }
 // 搜索框
 var oInput=document.getElementById('input');
 oInput.onfocus=function(){
 	oInput.value=''
 }
 oInput.onblur=function(){
 	oInput.value='请输入区域名称、屋苑名称、房源名称'
 }

    var oTab=document.getElementById('tab');
    var aLi=oTab.getElementsByTagName('li');
 
    for(var i=0; i<aLi.length; i++){
			aLi[i].onclick=function (){
					for(var i=0; i<aLi.length; i++){
						aLi[i].className='';
					}
					this.className='on';
			};
		}

	var speed=100
	var demo=document.getElementById("demo");
	var demo2=document.getElementById("demo2");
	var demo1=document.getElementById("demo1");
	demo2.innerHTML=demo1.innerHTML
	function Marquee(){
	    if(demo2.offsetTop-demo.scrollTop<=0)
	        demo.scrollTop-=demo1.offsetHeight
	    else{
	        demo.scrollTop++
	    }
	}
	var MyMar=setInterval(Marquee,speed)
	demo.onmouseover=function() {clearInterval(MyMar)}
	demo.onmouseout=function() {MyMar=setInterval(Marquee,speed)}
    // 侧边栏
    var oSlide=document.getElementById('slide');
     var oF=document.getElementById('first');
     var oS=document.getElementById('second');
     var oTr=document.getElementById('tree');
    var oTop=document.getElementById('top');
	
	window.onscroll=function (){
		scrT=document.body.scrollTop||document.documentElement.scrollTop;
		if(scrT>700){
			oSlide.style.display='block';
		}else{
			oSlide.style.display='none';
		}
	};
	
	oTop.onclick=function (){
		document.documentElement.scrollTop = document.body.scrollTop =0;
	};
	oF.onclick=function (){
		document.documentElement.scrollTop = document.body.scrollTop =1720;
	};
	oS.onclick=function (){
		document.documentElement.scrollTop = document.body.scrollTop =2250;
	};
	oTr.onclick=function (){
		document.documentElement.scrollTop = document.body.scrollTop =3000;
	};

	
}