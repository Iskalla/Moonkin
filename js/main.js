$( document ).ready(function() {
    var temp = document.location.hash;
    if (temp) {
        $(window).trigger( 'hashchange' );
    }
});

function navigate(id) {
    if (id == 'back-to-main') { 
         history.pushState("", document.title, window.location.pathname + window.location.search);
    }
    else {
        var hash = id.replace('-mitem', '')
        if(history.pushState) {
            history.pushState(null, null, '#' + hash);
        }
        else {
            history.pushState(null, null, '#' + hash);
            location.hash = '#' + hash;
        }
    }
    $(window).trigger( 'hashchange' );
}

$(window).on('hashchange', function() {
    var temp = document.location.hash;

    $('.page').removeClass('visible');
    $('.menu-item').removeClass('selected');
    $('.submenu-item').removeClass('selected');
    $('.submenu-item').removeClass('visible');

    if (temp) {
        $('.page' + temp).addClass('visible');
        $('.menu-item' + temp + '-mitem').addClass('selected');
        $('.submenu-item' + temp + '-mitem').addClass('selected');
        $('.' + temp.replace('#', '') + '-submenu').addClass('visible');
        $(temp + '-mitem').addClass('visible');
    }
    else {
        $('.page#main' + temp).addClass('visible');
    }
});

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;
};

function handleTouchMove(evt) {
    if ( ! xDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var xDiff = xDown - xUp;

    var navArray = ['', 'powerbi-mitem', 'simc-mitem', 'about-mitem']

    if ( xDiff > 300 ) {
        navigate('powerbi-mitem');
        xDown = null;
    } else if ( xDiff < -300 ) {
        navigate('powerbi-mitem');
        xDown = null;
    }
};