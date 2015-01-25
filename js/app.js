$(function() {

    //386
    _386 = {
        speedFactor: 0.5
    };

    //email
    var email = 'm####ai####lto:j##oe##ddo###89@gma###il###.c###om##';

    while(email.indexOf('#') !== -1) {
        email = email.replace("#", "");
    }

    $('#email').attr('href', email)
});