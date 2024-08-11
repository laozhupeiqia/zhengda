	// 图片显示影藏
	$(".image-container2").hide(1)
	$(".div1").hover(function(){
		$(".image-container").show(1000)
		$(".image-container2").hide(1000)
			})
$(".div2").hover(function(){
						$(".image-container2").show(1000)
						$(".image-container").hide(1000)
						})
					//新闻接口
					$(function(){
						$.ajax({
						method:"get",//请求方式
						url:"https://mock.apifox.cn/m1/2920899-0-default/xwzx",//引入接口
						dataType:"json",
						success:function(r){
							console.log(r);
							 $(".a1").html(r[0].xw1);
							  $(".a2").html(r[0].xw2);
							   $(".a3").html(r[0].xw3);
						},
					});
					});
					//股份相关接口
                 $(function(){
                 	$.ajax({
                 	method:"get",//请求方式
                 	url:"https://mock.apifox.cn/m1/2910810-0-default/gf",//引入接口
                 	dataType:"json",
                 	success:function(r){
                 		console.log(r);
                 		 $("#kg1").html(r[0].kg1);
                 		 $("#kg2").html(r[0].kg2);
                 		 $("#kg3").html(r[0].kg3);
                 		 $("#kg4").html(r[0].kg4);
                 		 $("#kg5").html(r[0].kg5);
                 		 $("#kg6").html(r[0].kg6);
                 		 $("#kg7").html(r[0].kg7);
                 		 $("#kg8").html(r[0].kg8);
                 	},
                 });
                 });
				//轮播图接口
						$(function(){
							$.ajax({
							method:"get",//请求方式
							url:"https://mock.apifox.cn/m1/2913672-0-default/lunbo",//引入接口
							dataType:"json",
							success:function(r){
								console.log(r); 
								var img1 = $('<img>');//新建一个img标签
								img1.attr('src',r[0].lb1);//添加图片地址
								$('#lb1').append(img1);	//找到标签插入图片
								
								var img2 = $('<img>');//新建一个img标签
								img2.attr('src',r[0].lb2);//添加图片地址
								$('#lb2').append(img2);	//找到标签插入图片
								
								var img3 = $('<img>');//新建一个img标签
								img3.attr('src',r[0].lb3);//添加图片地址
								$('#lb3').append(img3);	//找到标签插入图片
								
								var img4 = $('<img>');//新建一个img标签
								img4.attr('src',r[0].lb4);//添加图片地址
								$('#lb4').append(img4);	//找到标签插入图片
								
								var img5 = $('<img>');//新建一个img标签
								img5.attr('src',r[0].lb5);//添加图片地址
								$('#lb5').append(img5);	//找到标签插入图片
							},
						});
						});
						//历史部分数据接口
						$(function(){
							$.ajax({
							method:"get",//请求方式
							url:"https://mock.apifox.cn/m1/2910346-0-default/text2",//引入接口
							dataType:"json",
							success:function(r){
								console.log(r);
								$("#1").html(r[0].lishi1);
								$("#2").html(r[0].lishi2);
								$("#3").html(r[0].lishi3);
								$("#4").html(r[0].lishi4);
								$("#5").html(r[0].lishi5);
								$("#6").html(r[0].lishi6);
								$("#7").html(r[0].lishi7);
								$("#8").html(r[0].lishi8);
							},
						});
					});
 //轮播图                                                                            
 class Swiper {
 	constructor() {
 		this.w = $('.swiper-item').width();
 		this.num = 0;
 		this.len = $('.swiper .swiper-item').length - 1;
 		this.timer = null;
 	}
 	init() {
 		//设置定时器
 		this.setTime();
 		//滑上停止定时器
 		this.hover();
 		//点击指示
 		this.pointClick();
 		//点击左右箭头
 		this.lrClick();
 	}
 	setTime() {
 		this.timer = setInterval(() => {
 			this.num++;	
 			if (this.num > this.len) {
 				this.num = 0;
 			}
 			let cssTrx = -this.num * this.w;
 			$('.swiper-point-item .point').eq(this.num).addClass('active').siblings().removeClass('active');
 			$('.swiper').css({transform: `translateX(${cssTrx}px)`})
 		}, 3000)
 	}
 	hover() {
 		$('.swiper-contione').hover(() => {
 			clearInterval(this.timer)
 		}, () => {
 			this.setTime();
 		});
 	}
 	pointClick() {
 		let that = this;
 		$('.swiper-point-item .point').click(function() {
 			that.num = $(this).index();
 			let cssTrx = -that.num * that.w;
 			$(this).addClass('active').siblings().removeClass('active');
 			$('.swiper').css({
 				transform: `translateX(${cssTrx}px)`
 			})
 		})
 	}
 	lrClick() {
 		$('.swiper-left img').click(() => {
 			this.num--;
 			if (this.num < 0) {
 				this.num = this.len;
 			};
 			console.log(this.num)
 			let cssTrx = -this.num * this.w;
 			$('.swiper-point-item .point').eq(this.num).addClass('active').siblings().removeClass('active');
 			$('.swiper').css({
 				transform: `translateX(${cssTrx}px)`
 			})
 		});
 		
 		$('.swiper-right img').click(() => {
 			this.num++;
 			if (this.num > this.len) {
 				this.num = 0;
 			}
 			let cssTrx = -this.num * this.w;
 			$('.swiper-point-item .point').eq(this.num).addClass('active').siblings().removeClass('active');
 			$('.swiper').css({
 				transform: `translateX(${cssTrx}px)`
 			})
 		})
 	}
 }
 let sw = new Swiper();
 sw.init();