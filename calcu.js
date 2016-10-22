var calcu = {
	firstnum:0, //第一次输入的数字
	status:0, //按钮状态
	secondnum:0, //第二次输入数字
	resnum:0, //计算结果
	reset:0 //计算完后再点击重置显示区域数字
};

function content(num) {
	calcu.reset ===1?document.getElementsByName('calcu-show')[0].value="0":document.getElementsByName('calcu-show')[0].value=document.getElementsByName('calcu-show')[0].value;
	calcu.reset =0;
	var initnum = document.getElementsByName('calcu-show')[0].value;
	initnum = initnum==="0"?"":initnum
	document.getElementsByName('calcu-show')[0].value =  initnum + num;
	calcu.status===0?calcu.firstnum = Number(document.getElementsByName('calcu-show')[0].value):calcu.secondnum = Number(document.getElementsByName('calcu-show')[0].value);
}

function fnclear() {
	document.getElementsByName('calcu-show')[0].value="0";
	calcu.reset = 1;
	calcu.status = 0;
	calcu.firstnum = 0;
	calcu.resnum = 0;
	calcu.secondnum = 0;
}

function command(status) {
	document.getElementsByName('calcu-show')[0].value = calcu.firstnum;
	calcu.secondnum = calcu.firstnum;
	calcu.status = status;
	calcu.reset = 1;
}

function fnres() {
	switch(calcu.status){
		case 1:calcu.resnum = calcu.firstnum + calcu.secondnum;break;
		case 2:calcu.resnum = calcu.firstnum - calcu.secondnum;break;
		case 3:calcu.resnum = calcu.firstnum * calcu.secondnum;break;
		case 4:calcu.secondnum===0?calcu.resnum = "错误":calcu.resnum = calcu.firstnum /calcu.secondnum;break;

	}
	document.getElementsByName('calcu-show')[0].value = calcu.resnum;	
	calcu.reset = 1;
	calcu.status = 0;
	calcu.firstnum = calcu.resnum;
	calcu.secondnum = 0;
}

