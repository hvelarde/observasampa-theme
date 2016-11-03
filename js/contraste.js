$(function(){
	var linkContraste = $("#linkAltoContraste");
	var body = $("body");
	linkContraste.click(function(event) {
		if(body.hasClass('contraste')){
			body.removeClass('contraste');
		}else{
			body.addClass('contraste');
		}
	});
});