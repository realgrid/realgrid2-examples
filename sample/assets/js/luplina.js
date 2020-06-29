var la = {
    pageStart:function(){
        la.initDockButtons();
    },
    initDockButtons:function(){
        var adocks = $(".dock-button.aside");
        var bdocks = $(".dock-button.bside");
        $.each(adocks,function(idx, item){
            $(item).click(function(){
                if($(this).hasClass("active")){
                    $(".la-aside").css("display","none");
                    $(this).removeClass("active");
                }else{
                    $.each(adocks,function(idx, item){
                        $(item).removeClass("active");
                    });
                    $(this).addClass("active");

                    if($(".la-aside").is(":hidden")) $(".la-aside").css("display","table-cell");
                }
            });
        });
        $.each(bdocks,function(idx, item){
            $(item).click(function(){
                if($(this).hasClass("active")){
                    $(".la-bside").css("display","none");
                    $(this).removeClass("active");
                }else{
                    $.each(bdocks,function(idx, item){
                        $(item).removeClass("active");
                    });
                    $(this).addClass("active");

                    if($(".la-bside").is(":hidden")) $(".la-bside").css("display","table-cell");
                }
            });
        });
    }
};

$(document.body).ready(function(){
    la.pageStart();
});