$('#navUp').hide();
$(window).scroll(() => {
    if (window.scrollY < 150) {
        $('#navUp').hide();
    }
    else {
        $('#navUp').show();
    }
});

let themeClicks = 0;
$('link[rel=stylesheet][href~="assets/css/dark.css"]').attr('disabled', 'true');
$('link[rel=stylesheet][href~="assets/css/color.css"]').attr('disabled', 'true');

$("#themeChange").click(()=>{
    let factor = themeClicks % 3;
    if(factor === 0){
        $('link[rel=stylesheet][href~="assets/css/light.css"]').attr('disabled', 'true');
        $('link[rel=stylesheet][href~="assets/css/color.css"]').attr('disabled', 'true');
        $('link[rel=stylesheet][href~="assets/css/dark.css"]').removeAttr('disabled');
        $('#name').html(`<i class="fas fa-moon"></i>`);
    }
    else if(factor === 1){
        $('link[rel=stylesheet][href~="assets/css/dark.css"]').attr('disabled', 'true');
        $('link[rel=stylesheet][href~="assets/css/light.css"]').attr('disabled', 'true');
        $('link[rel=stylesheet][href~="assets/css/color.css"]').removeAttr('disabled');
        $('#name').html(`<i class="fas fa-palette"></i>`);
    }
    else{
        $('link[rel=stylesheet][href~="assets/css/dark.css"]').attr('disabled', 'true');
        $('link[rel=stylesheet][href~="assets/css/color.css"]').attr('disabled', 'true');
        $('link[rel=stylesheet][href~="assets/css/light.css"]').removeAttr('disabled');
        $('#name').html(`<i class="fas fa-sun"></i>`);
    }
    themeClicks++;
});
