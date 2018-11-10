$(function(){
	var btMdots=$(".btMdots");
	btMdots.find(".dot").eq(0)
	.addClass("current")
	.siblings().removeClass("current");
	$(".images").find(".pic").eq(0)
	.show().siblings().hide();
	var len=$(".images").find(".pic").length-1;
	var leftBtn=$(".left");
	var rightBtn=$(".right");
	var i=0;
	var timer;
	//i--;
	leftBtn.click(function(){
		clearInterval(timer);
		if(i==0){
			i=3;
		}
			i--;
			Show();
			runTimer();
	})
	//i++
	rightBtn.click(function(){
		clearInterval(timer);
		if(i==len){
			i=-1;
		}
			i++;
			Show();
			runTimer();
	})
	var dotBtn=btMdots.find(".dot");
	dotBtn.hover(function(){
		//获取当前i的值，并显示，同时还要清除定时器
		i = $(this).index();
		Show();
		clearInterval(timer);
	},function(){
		//
		runTimer();
	});
	//显示页面
	function Show(){
			$(".images").find(".pic").eq(i)
			.fadeIn(1000).siblings().hide();
			btMdots.find(".dot").eq(i)
			.addClass("current")
			.siblings().removeClass("current");
			//run();
	}
	function runTimer(){
        timer=setInterval(function(){
			if(i==len){
				i=-1;
			};
			Show();
			i++;
			console.log(i)
		},2000)
	}
	runTimer();
})