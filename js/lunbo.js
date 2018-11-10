var i=0;
var timer;
var strangleLeft;
var strangleRight;
var btMdots;
var len;
var images=$(".images");
var len=images.find(".pic").length;
function LunBo(el,autoplay,speed){
	this.el=$(el),
	this.autoplay=autoplay,
	this.speed=speed,
	this.createEle=function(){
		strangleLeft=$('<div class="strangle left"></div>');
		strangleRight=$('<div class="strangle right"></div>');
		btMdots=$('<div class="btMdots"><ul><li class="dot"></li><li class="dot"></li><li class="dot"></li></ul>')
		strangleLeft.appendTo(this.el);
		strangleRight.appendTo(this.el);
		btMdots.appendTo(this.el);
		return this;
	},
	this.init=function(){
		btMdots.find(".dot").eq(0)
		.addClass("current")
		.siblings().removeClass("current");
		images.find(".pic").eq(0)
		.show().siblings().hide();
		return this;
	},
	//执行方法
	this.createEle();
	this.init();
	strangleLeft.on("click",function(){
		clearInterval(timer);
		if(i==0){
			i=len;
		}
			i--;
			Show();
			runTimer();
	});
	strangleRight.on("click",function(){
		clearInterval(timer);
		if(i==len-1){
			i=-1;
		};
			i++;
			Show();
			runTimer();
	});
	btMdots.on("mounseover",function(){
		i = $(this).index();
		Show();
		clearInterval(timer);
	});
	btMdots.on("mounseout",function(){
		runTimer();
	});
	function Show(){
		//console.log(images.find('.pic').eq(2))
		$(".images").find(".pic").eq(i)
		.fadeIn(speed).siblings().hide();
		//console.log('pic--'+images.find(".pic").eq(0))
		btMdots.find(".dot").eq(i)
		.addClass("current")
		.siblings().removeClass("current");
	};
	function runTimer(){
		timer=setInterval(function(){
			if(i==3){
				i=0;
			};
			Show();
			i++;
			//console.log(i)
		},autoplay);
	}
	runTimer();
	//外部调用
	return this;
}