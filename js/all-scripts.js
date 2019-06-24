// <!-- toggle-menu -->
// $('html').click(function () {
//     $('#toggle-menu').hide();
// })

$('.toggle').click(function (e) {
    e.stopPropagation();
});

$('.toggle').click(function (e) {
    $('#toggle-menu').toggle();
});


// <!-- toggle-operations -->

$('.operations').click(function () {
    $('.panel').toggle('slow');
});


// <!-- // notifications -->

$('html').click(function () {
    $('.notifications').hide();
})

$('#notifications').click(function (e) {
    e.stopPropagation();
});

$('#notifications').click(function (e) {
    $('.notifications').toggle();
});

// <!-- // notes -->

$('html').click(function () {
    $('.notes').hide();
})

$('#my-notes').click(function (e) {
    e.stopPropagation();
});

$('#my-notes').click(function (e) {
    $('.notes').toggle();
});

// <!-- add class -->


$('#toggle-menu li ').on('click', function () {
    $('#toggle-menu li.current').removeClass('current');
    $(this).addClass('current');
});

// shrink menu bar
$(document).on("scroll", function () {

    if ($(document).scrollTop() > 100) {
        $(".navbar").addClass("shrink");
    } else {
        $(".navbar").removeClass("shrink");
    }

});



/*---LEFT BAR ACCORDION----*/
$(function() {
    $('#nav-accordion').dcAccordion({
        eventType: 'click',
        autoClose: true,
        saveState: true,
        disableLink: true,
        speed: 'slow',
        showCount: false,
        autoExpand: true,
//        cookie: 'dcjq-accordion-1',
        classExpand: 'dcjq-current-parent'
    });
});

var Script = function () {


//    sidebar dropdown menu auto scrolling

    jQuery('#sidebar .sub-menu > a').click(function () {
        var o = ($(this).offset());
        diff = 250 - o.top;
        if(diff>0)
            $("#sidebar").scrollTo("-="+Math.abs(diff),500);
        else
            $("#sidebar").scrollTo("+="+Math.abs(diff),500);
    });



//    sidebar toggle

    $(function() {
        function responsiveView() {
            var wSize = $(window).width();
            if (wSize <= 768) {
                $('#container').addClass('sidebar-close');
                $('#sidebar > ul').hide();
            }

            if (wSize > 768) {
                $('#container').removeClass('sidebar-close');
                $('#sidebar > ul').show();
            }
        }
        $(window).on('load', responsiveView);
        $(window).on('resize', responsiveView);
    });

    $('.nav-bars').click(function () {
        if ($('.sidebar-area > ul').is(":visible") === true) {
            $('.content-area').css({
                'margin-left': '200px'
            });
            $('.sidebar-area').css({
                'margin-left': '-210px'
            });
            $('.sidebar-area').addClass("show");
            $('.sidebar-area > ul').hide();
            $("#container").addClass("sidebar-closed");
        } else {
            $('.content-area').css({
                'margin-left': '260px'
            });
            $('.sidebar-area > ul').show();
            $('.sidebar-area').css({
                'margin-left': '0'
            });			
            $('.sidebar-area').removeClass("show");
            $("#container").removeClass("sidebar-closed");
        }
    });

// custom scrollbar
    $("#sidebar").niceScroll();

    //$("html").niceScroll({styler:"fb",cursorcolor:"#4ECDC4", cursorwidth: '6', cursorborderradius: '10px', background: '#404040', spacebarenabled:false,  cursorborder: '', zindex: '1000'});



// nice-scroll

$(".scroll").niceScroll();
$(".sidebar-area.main").niceScroll({styler:"fb",cursorcolor:"#4ECDC4", cursorwidth: '6', cursorborderradius: '10px', background: '#404040', spacebarenabled:false,  cursorborder: '', zindex: '1000'});


}();


$(document).on('click', '.filter-header a.collapse-arrow', function(e){
    var $this = $(this);
	if(!$this.hasClass('collapsed')) {
		//$this.parents('.panel').find('.panel-body').slideUp();
		//$this.addClass('panel-collapsed');
		$this.find('img').removeClass('downarrow').addClass('rightarrow');
		
	} else {
		//$this.parents('.panel').find('.panel-body').slideDown();
		//$this.removeClass('panel-collapsed');
		$this.find('img').removeClass('rightarrow').addClass('downarrow');
		
	}
})

