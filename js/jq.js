$(function(){
	//图片轮播
	var ul=$('.tupian');
	var a=$('.num a') ;
	var divlb=$('.banner_img');
	var num=0;
	  //包装方法
	function lun(){
		 
		 if(num==3){
			 num=0;
			 }
			 else{num++;}
		 $(a).eq(num).addClass('ahover').siblings().removeClass();
		 ul.animate({'left':'-=810'},500,function(){
			 if(num==0){
				 ul.css('left',0);
				 }
			 });
		 }
	a.click(function(){
		$(this).addClass('ahover').siblings().removeClass();
		var index=$(this).index();
		ul.animate({'left':-810*index},500);
		num=index;
		});
	 time=setInterval(lun,1500);
		 divlb.hover(function(){
			 clearInterval(time);
			 },function(){
				 time=setInterval(lun,1500);
				 });
		 //显示隐藏二级菜单
	 	 $('.shopClass').mousemove(function(){
			 
		 $('.shopClass_show').slideDown();
		 }).mouseleave(function(){
			 $('.shopClass_show').stop().slideUp();
			 });
		  
	     
		//扩大镜
		 var zoom_sm=$('.img_sm');
		 var sm_li=$('.img_sm li');
		 var zoom_big=$('.img_big');
		 sm_li.click(function(){
			 $(this).children('img').addClass('img_active');
			 $(this).siblings().children('img').removeClass('img_active');
			var name=$(this).children('img').attr('src');
			zoom_big.children('img').attr('src',name);
			$('.xianshi img').attr('src',name);
			 });
			 
		$(document).mousemove(function(e){
			var s=zoom_big.offset();
			var x=e.pageX-s.left-$('.zhe').width()/2;
			var y=e.pageY-s.top-$('.zhe').height()/2;
			if(x<0){
				x=0}
			else if(x>zoom_big.width()-$('.zhe').width()){
				x=zoom_big.width()-$('.zhe').width()
				}
			if(y<0){
				y=0}
			else if(y>zoom_big.height()-$('.zhe').height()){
				y=zoom_big.height()-$('.zhe').height()
				}	
			var left=x/(zoom_big.width()-$('.zhe').width());
			var top=y/(zoom_big.height()-$('.zhe').height());
			$('.xianshi img').css({'left':-left*(150),'top':-top*(400)});
			$('.zhe').css({'left':x,'top':y});
			});	 
			zoom_big.hover(function(){
				$('.zhe').show();
				$('.xianshi').show();
				},function(){
					$('.zhe').hide();
					$('.xianshi').hide();
					});
		 
	});