let themeClicks = 0;
$('link[rel=stylesheet][href~="dark.css"]').attr('disabled', 'true');
$('link[rel=stylesheet][href~="color.css"]').attr('disabled', 'true');

$("#themeChange").click(function(){
    let factor = themeClicks % 3;
    if(factor == 0){
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