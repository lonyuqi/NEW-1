$(function (){
	$("#h1").html(getTimeState())
	$("#num").html(h.data[0].NUM)
	var initWidth = parseInt($("#h1").css('margin-left'));
	var stopWidth = "-"+$("#h1").width();
	var width = parseInt($("#h1").css('margin-left'));
	setInterval(function () {
		if(width == parseInt(stopWidth)){
			width = initWidth;
		}
		width = width-1;
		$("#h1").css("margin-left",width)
	}, 30);
})