window.addEventListener('load', function () {
	// 1. 获取header顶部元素
	var header = document.querySelector('#header')
	// 2. 获取滚动条滚动的距离需要添加一个滚动条滚动的事件在事件里面去获取
	window.addEventListener('scroll', scroll);
	scroll();
	//防止突然刷新页面没有触发事件 无法生效背景色
	function scroll() {
		// 3. 在滚动条事件里面获取滚动的距离
		var scrollTop = document.documentElement.scrollTop;
		// var scrollTop = document.body.scrollTop;
		// 如果你的东西是属于html的使用 documentElement  如果属于body那就是body
		//console.log(scrollTop);
		// 4. 获取轮播图的高度来计算
		var slideHeight = document.querySelector('#slide').offsetHeight;
		// 5. 计算当前滚动里面的透明度值 距离/轮播图高度
		var opacity = scrollTop / slideHeight;
		// 6. 判断当前透明度是否大于1
		if (opacity > 1) { // 7. 如果透明度大于1就设置为1
			header.style.backgroundColor = 'rgba(222,24,27,1)';
		} else {
			header.style.backgroundColor = 'rgba(222,24,27,' + opacity + ')';
		} // 8. 如果透明度小于 就设置为当前计算的透明度
	}


	// 倒计时部分
	//倒计时JS
	// 1. 获取未来的时间  new Date()参数 
	// var futureTime = new Data(2018,8,25,22,00,00)
	//获取未来时间的毫秒数
	var futureTime = Math.floor(new Date(2018, 8, 25, 22, 00, 00).getTime() / 1000);
	// console.log(futureTime);
	//获取现在时间的毫秒数
	var nowTime = Math.floor(new Date().getTime() / 1000);
	// console.log(nowTime);
	//总时间=未来时间的毫秒数-当前时间的毫秒数
	var time = futureTime - nowTime;
	// console.log(time);
	var spans = document.querySelectorAll('.seckill-time span');
	// console.log(spans);

	setInterval(function () {
		time--;
		//判断一下
		if (time == 0) { //写死的一个时间  真正开发使用重新请求后台的时间
			time = 7200;
		}
		// console.log(time);

		var hour = Math.floor(time / 3600);
		// console.log(hour);小时数,会有小数所有要取整
		var minute = Math.floor(time % 3600 / 60);
		// console.log(minute);分钟数 %3600 剩余的/60 就是分钟数
		var second = Math.floor(time % 60);
		// console.log(second);%60 除不尽的就是秒数

		spans[0].innerHTML = Math.floor(hour / 10);
		spans[1].innerHTML = Math.floor(hour % 10); //小时部分的个位 小时 取模10 
		spans[3].innerHTML = Math.floor(minute / 10);
		spans[4].innerHTML = Math.floor(minute % 10);
		spans[6].innerHTML = Math.floor(second / 10);
		spans[7].innerHTML = Math.floor(second % 10);

	}, 1000)


	var mySwiper = new Swiper('#slide .swiper-container', {
		direction: 'horizontal', // 垂直切换选项
		loop: true, // 循环模式选项

		//如果需要分页器
		pagination: {
			el: '.swiper-pagination',
		},
		autoplay: {
			delay: 1000, //轮播图的延迟
			stopOnLastSlide: false, // 如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）
			disableOnInteraction: false //当用户滑动的时候禁止自动轮播图 不需要禁止就为false
		},
		loop : true,
		//如果需要滚动条
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	})
})