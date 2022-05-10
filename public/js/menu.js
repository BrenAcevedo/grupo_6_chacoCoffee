window.addEventListener('load', () => {

    let boton = document.querySelector('#boton-menu');
    let menuOn = document.querySelector('#menu');
    let menu2 = document.querySelector('#boton-menu2');

    boton.addEventListener('click', function(e) {
        menuOn.style.visibility = 'visible';
        menuOn.style.width = '60%';
        menuOn.style.height = '60vh';
        menu2.style.visibility = 'visible';
        boton.style.visibility = 'hidden';
    })

    menu2.addEventListener('click', function(e) {
        menuOn.style.visibility = 'hidden';
        menu2.style.visibility = 'hidden';
        boton.style.visibility = 'visible';
        menuOn.style.width = '0%';
        menuOn.style.height = '0vh';
    })

    

});