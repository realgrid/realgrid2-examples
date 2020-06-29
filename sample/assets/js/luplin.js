var pageObj = {
    pageStart: function(){
        var sst = sessionStorage.getItem("theme");
        if(sst)  pageObj.changeTheme(sst);
        else    pageObj.changeTheme();
        jQuery(".button."+sst).addClass("active");
    },
    changeTheme:function(theme){
        var tm = theme;
        if(!tm)tm = "light";
        jQuery("link[id='theme']").attr('href', '/assets/plugins/realgrid/realgrid_'+tm+'.css');
        jQuery("link[id='form-style']").attr('href', '/assets/plugins/realgrid/realgrid_form_'+tm+'.css');
        jQuery(".button-bar").find(".button").each(function(){
            jQuery(this).removeClass("active");
        });
        jQuery(".button."+tm).addClass("active");
        sessionStorage.setItem("theme", tm);

    }
};


jQuery(document.body).ready(function(){
    pageObj.pageStart();
});