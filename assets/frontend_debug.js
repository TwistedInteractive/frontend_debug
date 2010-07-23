jQuery(function($){
	$("body").append('<div id="frontend_debug_container"><iframe /><a href="#" id="frontend_debug_expand">+</a></div>');
	$("body").append('<a href="#" id="frontend_debug_show">debug</a>');
	// Hide iFrame:
	$("#frontend_debug_container").hide();
	
	// Attach functionality to the button:
	$("a#frontend_debug_show").hover(function(){
		$(this).animate({top: 0}, 250);
	}, function(){
		$(this).animate({top: -5}, 250);
	}).click(function(){		
		if(document.getElementById("frontend_debug_container").style.display == 'none')
		{
			var location = String(window.location).split('#')[0];
			location += location.split('?').length > 1 ? '&debug' : '?debug';
			$("#frontend_debug_container").show();
			frontend_debug_resize();			
			$("#frontend_debug_container iframe").attr("src", location);
		} else {
			$("#frontend_debug_container").hide();
		}
		return false;	
	});
	
	$("a#frontend_debug_expand").click(function(){
		if($(this).text()=='+') {
			$(this).text('-');
			$("#frontend_debug_container").css({width: $(window).width()-60});
			$("#frontend_debug_container iframe").css({width: $(window).width()-62});
		} else {
			$(this).text('+');
			$("#frontend_debug_container").css({width: $(window).width()/2});
			$("#frontend_debug_container iframe").css({width: ($(window).width()/2)-2});
		}
		return false;
	});
	
	$(window).resize(frontend_debug_resize);
});

function frontend_debug_resize()
{
	if(document.getElementById("frontend_debug_container").style.display != 'none')
	{
		$("#frontend_debug_container").css({top: 30, right: 10, height: $(window).height()-50, width: $(window).width()/2});
		$("#frontend_debug_container iframe").css({width: ($(window).width()/2)-2, height: $(window).height()-52});
	}
}