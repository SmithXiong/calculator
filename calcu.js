/*
* calcultor
* Author: xiong <xm864802180@163.com>
* Date:   Sat Oct 22 18:22:39 2016 +0800
*/
var calcu = {
	firstnum:0, //第一次输入的数字
	status:0, //按钮状态
	secondnum:0, //第二次输入数字
	minus:0, //正负数切换状态
	resnum:0, //计算结果
	reset:0, //计算完后再点击重置显示区域数字
	click:0 //按钮点击状态，防止重复点击
};

function content(num) {
	calcu.reset ===1?document.getElementsByName('calcu-show')[0].value="0":document.getElementsByName('calcu-show')[0].value=document.getElementsByName('calcu-show')[0].value;
	calcu.reset =0;
	var initnum = document.getElementsByName('calcu-show')[0].value;
	initnum = initnum==="0"?"":initnum
	calcu.minus === 1?document.getElementsByName('calcu-show')[0].value =  -(initnum + num):document.getElementsByName('calcu-show')[0].value =  initnum + num;
	calcu.status===0?calcu.firstnum = calcu.minus === 1?-(Number(initnum + num)):Math.abs(Number(initnum + num)):calcu.secondnum = calcu.minus === 1?-(Number(initnum + num)):Math.abs(Number(initnum + num));
}

function fnclear() {
	document.getElementsByName('calcu-show')[0].value="0";
	calcu.reset = 1;
	calcu.status = 0;
	calcu.firstnum = 0;
	calcu.resnum = 0;
	calcu.secondnum = 0;
}

function fnminus() {
	calcu.reset ===1?document.getElementsByName('calcu-show')[0].value="0":document.getElementsByName('calcu-show')[0].value=document.getElementsByName('calcu-show')[0].value;
	calcu.minus = calcu.minus===1?0:1;
	var num = Number(document.getElementsByName('calcu-show')[0].value);
	num>0?document.getElementsByName('calcu-show')[0].value = -num:document.getElementsByName('calcu-show')[0].value = Math.abs(num);
	calcu.status===0?num>0?calcu.firstnum = -num:calcu.firstnum = Math.abs(num):num>0?calcu.secondnum = -num:calcu.secondnum = Math.abs(num);
}

function fnpercent() {
	var num = Number(document.getElementsByName('calcu-show')[0].value);
	document.getElementsByName('calcu-show')[0].value = num/100;
	calcu.status===0?calcu.firstnum = num/100:calcu.secondnum = num/100;
}

function fndot() {
	var numStr = document.getElementsByName('calcu-show')[0].value.toString();
	if (numStr.indexOf('.')>-1){
		document.getElementsByName('calcu-show')[0].value = numStr;
	}else{
		document.getElementsByName('calcu-show')[0].value = numStr + '.'
	}
}

calcu.plus = function (num1,num2) {
	var len1,len2,m;
	try{
		len1 = num1.toString().split(".")[1].length;
	}
	catch(e){
		len1 = 0;
	}
	try{
		len2 = num2.toString().split(".")[1].length;
	}
	catch(e){
		len2 = 0;
	}
	m = Math.pow(10,Math.max(len1,len2));
	return (num1*m + num2*m)/m;
}

calcu.substr = function (num1,num2) {
	var len1,len2,m;
	try{
		len1 = num1.toString().split(".")[1].length;
	}
	catch(e){
		len1 = 0;
	}
	try{
		len2 = num2.toString().split(".")[1].length;
	}
	catch(e){
		len2 = 0;
	}
	m = Math.pow(10,Math.max(len1,len2));
	return (num1*m - num2*m)/m;
}

calcu.multi = function (num1,num2) {
	var len1,len2,m;
	try{
		len1 = num1.toString().split(".")[1].length;
	}
	catch(e){
		len1 = 0;
	}
	try{
		len2 = num2.toString().split(".")[1].length;
	}
	catch(e){
		len2 = 0;
	}
	m = Math.pow(10,Math.max(len1,len2));
	return (num1*m) * (num2*m)/m/m;
}

calcu.divided = function (num1,num2) {
	var len1,len2,m;
	try{
		len1 = num1.toString().split(".")[1].length;
	}
	catch(e){
		len1 = 0;
	}
	try{
		len2 = num2.toString().split(".")[1].length;
	}
	catch(e){
		len2 = 0;
	}
	m = Math.pow(10,Math.max(len1,len2));
	return (num1*m)/(num2*m);
}

function command(status) {
	calcu.click ===1?document.getElementsByName('calcu-show')[0].value = calcu.secondnum:document.getElementsByName('calcu-show')[0].value = calcu.firstnum;
	calcu.click ===1?calcu.secondnum = calcu.secondnum:calcu.secondnum = calcu.firstnum;
	calcu.status = status;
	calcu.reset = 1;
	calcu.minus = 0;
	calcu.click = 1;
}

function fnres() {
	switch(calcu.status){
		case 1:calcu.resnum = calcu.plus(calcu.firstnum,calcu.secondnum);break;
		case 2:calcu.resnum = calcu.substr(calcu.firstnum,calcu.secondnum);break;
		case 3:calcu.resnum = calcu.multi(calcu.firstnum,calcu.secondnum);break;
		case 4:calcu.secondnum===0?calcu.resnum = "错误":calcu.resnum = calcu.divided(calcu.firstnum,calcu.secondnum);break;
		default:calcu.resnum = document.getElementsByName('calcu-show')[0].value;
	}
	document.getElementsByName('calcu-show')[0].value = calcu.resnum;	
	calcu.reset = 1;
	calcu.status = 0;
	calcu.firstnum = calcu.resnum;
	calcu.secondnum = 0;
	calcu.click = 0;
}



