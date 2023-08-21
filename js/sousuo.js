<!--搜索框-->
$(function() {
	$("#myinput").click(function(){
		$(this).css("color","#000");//设置文本框文字颜色为黑色
		var txt_value=$(this).val();//得到当前文本框的值
		if(txt_value==this.defaultValue){
			$(this).val("");//如果符合条件，则清空文本框内容
		}
		$("#hot_1").css("display","block");
		event.stopPropagation();
	});
	$("body").click(function(){
		var txt_value=$("#myinput").val();
		if(txt_value==""){
			$("#myinput").val("请输入");
			$("#myinput").css("color","#cbcbcb");
		}
		$("#hot").hide();			   
		});
	$("#hot").click(function(){
			return false;		   
	});
});