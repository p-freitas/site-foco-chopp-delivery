$(document).ready(function () {
    $('#chopeiras div').css({})

    var x = 0;

    $('#chopeiras div').hide();

    $('.icones-chopp img').css({
        cursor: 'pointer'
    }).click(function () {
        if ($('#chopeiras div:eq(' + $(this).index() + ')').is(':hidden')) {
            $('#chopeiras div:eq(' + x + ')').fadeOut();
            x = $(this).index() - 1;
            $('#chopeiras div:eq(' + x + ')').fadeIn();

        }
    })
})
