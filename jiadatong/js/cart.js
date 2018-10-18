if(!window.localStorage){
    alert("浏览器不支持localstorage,版本较低,请更换高版本浏览器");
}else{
	storage=window.localStorage;
	storage.setItem('charts','{"itemid":"001","item":"面","price":10,"num":1}.{"itemid":"002","item":"米","price":15,"num":2}');
	chartHtml();
}

//
//addItems("003","sd",1,88);
//addItems("004","99",4,22);




//delItems();





//添加商品函数
function addItems(Id,Item,Price,Num){
	var charts=[];
//	取出商品信息还原成json格式
	var box=getItems();
	console.log(box);
//	json里添加商品数据
	var items={
		"itemid":Id,
		"item":Item,
		"price":Price,
		"num":Num
	}
	$.each(box, function(i,v) {
		if(v.itemid==items.itemid){
			v.itemid=Id;
			v.item=Item;
			v.price=Price;
			v.num=Num;
		}
		
	});
	box.push(items);
//	json数据转换为string,并存入localstrage
	$.each(box,function(i,v){
		charts.push(JSON.stringify(v));
//		console.log(charts)
	});
//		console.log(charts);
		charts=unique(charts);
		storage.setItem('charts',charts.join('.'));
}

//获取购物车内原有商品函数
function getItems(){
	var str=storage.getItem("charts");
	var newBox=[];
	str=str.split(".");
	$.each(str, function(i,v) {
		newBox.push(JSON.parse(v));
	});
	return newBox;
	console.log(newBox);
}

//删除购物车内所有商品
function delItems(){
	localStorage.removeItem('charts');
}

//数组去重函数
function unique(arr){
 var res = [];
 for(var i=0; i<arr.length; i++){
  if(res.indexOf(arr[i]) == -1){
   res.push(arr[i]);
  }
 }
 return res;
}




$(".plus").on("click",function(){
	var this_id=$(this).parent().children(".itemid").html();
	var this_item=$(this).parent().parent().children(".title").html();
	var this_price=parseFloat($(this).parent().parent().children(".price").children("span").html());
	var this_num=$(this).parent().children(".num").html();
	
//	num = num.
	var box=getItems();
	console.log(box);
	console.log(this_price);
	this_num++;
	$(this).parent().children(".num").html(this_num);
	$.each(box, function(i,v) {
		if(v.itemid==this_id){
			console.log(v);
			this_num=v.num+1;
			console.log(this_num);
		}
		return this_num;
	});
	console.log(this_num);
	console.log(this_id,this_item,this_price,this_num)
	addItems(this_id,this_item,this_price,this_num);
	addItems("004","99",4,22);
	chartHtml();
})








//购物车内容加载
function chartHtml(){
	$(".list-content>ul").html("");
	var chart=getItems();
	unique(chart);
	console.log(chart);
	$.each(chart, function(i,v) {
		$(".list-content>ul").append('<li class="food"><span class="name">'+v.item+'</span><span class="price">&yen;'+v.price+'</span><p class="computer"><span class="minus">&nbsp;</span><span class="num">'+v.num+'</span><span class="plus">&nbsp;</span></p></li>');
	});
}


'<li class="food"><span class="name">新鲜三及第汤</span><span class="price">￥9.90</span><p class="computer"><span class="minus">&nbsp;</span><span class="num">0</span><span class="plus">&nbsp;</span></p></li>'











// 点击加号购物车内容增加
//var num=Number($(".top-right-num").html());
//console.log(num);
//$(".plus").on("click",function(){
//	num=0;
//	var this_num=$(this).parent().children(".num").html();
//	this_num++;
//	$(this).parent().children(".num").html(this_num);
//	$.each($("#wrapper .num"),function(i,v){
//			// console.log(Number(v.html()));
//			// console.log(v.html());
//			num=num+Number($(this).html());
//		});
//	if(num>0){
//		$(".empty").addClass("disapear");
//		$(".has").removeClass("disapear");
//	};
//	$(".top-right-num").html(num);
//	$(".total-num").html('商品数：'+num);
//	$(".accounts").html('结算('+num+')');
//	num=0;
//});

//$(".minus").on("click",function(){
//	num=0;
//	var this_num=$(this).parent().children(".num").html();
//	this_num--;
//	if(this_num<=0){
//		this_num=0;
//	}
//	$(this).parent().children(".num").html(this_num);
//	$.each($("#wrapper .num"),function(i,v){
//			num=num+Number($(this).html());
//		});
//	console.log(num);
//	$(".top-right-num").html(num);
//	$(".total-num").html('商品数：'+num);
//	$(".accounts").html('结算('+num+')');
//	// console.log(num);
//	if(num<=0){
//		$(".has").addClass("disapear");
//		$(".empty").removeClass("disapear");
//		num=0;
//	};
//});