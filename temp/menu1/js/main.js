/**
 * Created by denis on 03.11.2017.
 */
$(document).ready(function(){

    // Button menu ===========
    $("#button-menu").click(function(){
        if ($("#button-menu").attr("class") == "fa fa-bars"){
            $("#button-menu").removeClass("fa fa-bars").addClass("fa fa-close");
            $('.navegacion .menu').css({'left':'0px'});
            $('.navegacion').css({'width':'100%', 'background':'rgba(0,0,0,0.3)'});
        } else {
            $("#button-menu").removeClass("fa fa-close").addClass("fa fa-bars");
            $('.navegacion .menu').css({'left':'-280px'});
            $('.navegacion .submenu').css({'left':'-280px'});
            $('.navegacion').css({'width':'0%', 'background':'rgba(0,0,0,0.0)'});
        }

    });

    //Button submenu ==========
    $('.navegacion .menu > .item-submenu a').click(function(){
        /*parent() - вернет родителя заданного элемента*/
        var positionMenu = $(this).parent().attr('menu');
        /*console.log(positionMenu);*/ // Возвращает 1, 2 или др.
        $('.item-submenu[menu='+positionMenu+'] .submenu').css({'left':'0px'});
    });

    $('.navegacion .submenu li.goback').click(function(){
        $(this).parent().css({'left':'-280px'});
    });

});