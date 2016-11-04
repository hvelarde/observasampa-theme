$(function(){
	var linkContraste = $("#linkAltoContraste");
	var body = $("body");
	linkContraste.click(function(event) {
		if($.cookie('contraste') === null){
			$.cookie('contraste', 'on');
			body.addClass('contraste');
			event.preventDefault();
		}else{
			if($.cookie('contraste') == 'on'){
				$.cookie('contraste', 'off');
				body.removeClass('contraste');
				event.preventDefault();
			}else{
				$.cookie('contraste', 'on');
				body.addClass('contraste');
				event.preventDefault();
			}
		}
	});
	$(document).ready(function($) {
		if($.cookie('contraste') == 'on'){
			body.addClass('contraste');
			event.preventDefault();
		}	
	});
});