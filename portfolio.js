function hashHandler(){
    let hash = window.location.hash;
    $("section").addClass("hidden");
    if(hash === ""){
        $("#about").removeClass("hidden");
    }
    else {
        $(hash).removeClass("hidden");
    }
}

$(document).ready(()=>{
    hashHandler();
});

$(window).on('hashchange', ()=>{
    hashHandler();
});

let themeClicks = 0;
$('link[rel=stylesheet][href~="dark.css"]').attr('disabled', 'true');
$('link[rel=stylesheet][href~="color.css"]').attr('disabled', 'true');

$("#themeChange").click(()=>{
    let factor = themeClicks % 3;
    if(factor === 0){
        $('link[rel=stylesheet][href~="light.css"]').attr('disabled', 'true');
        $('link[rel=stylesheet][href~="color.css"]').attr('disabled', 'true');
        $('link[rel=stylesheet][href~="dark.css"]').removeAttr('disabled');
        $('#name').text("Dark");
    }
    else if(factor === 1){
        $('link[rel=stylesheet][href~="dark.css"]').attr('disabled', 'true');
        $('link[rel=stylesheet][href~="light.css"]').attr('disabled', 'true');
        $('link[rel=stylesheet][href~="color.css"]').removeAttr('disabled');
        $('#name').text("Color");
    }
    else{
        $('link[rel=stylesheet][href~="dark.css"]').attr('disabled', 'true');
        $('link[rel=stylesheet][href~="color.css"]').attr('disabled', 'true');
        $('link[rel=stylesheet][href~="light.css"]').removeAttr('disabled');
        $('#name').text("Light");
    }
    themeClicks++;
});

$(".navBTN").mouseover(function(){
    $(this).children(".icon").addClass("hidden");
    $(this).children(".icon-name").removeClass("hidden");
});

$(".navBTN").mouseout(function(){
    $(this).children(".icon-name").addClass("hidden");
    $(this).children(".icon").removeClass("hidden");
});
