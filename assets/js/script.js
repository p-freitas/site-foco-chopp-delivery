$(document).ready(function(){

    //Verifica se a Janela está no topo
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.voltar-ao-topo').fadeIn();
        } else {
            $('.voltar-ao-topo').fadeOut();
        }
    });

    //Onde a mágia acontece! rs
    $('.voltar-ao-topo').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});