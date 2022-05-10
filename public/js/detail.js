window.addEventListener('load', () => {

    let minusButton = document.getElementById('minus');
    let plusButton = document.getElementById('plus');
    let inputField = document.getElementById('quantity-input');

    inputField.addEventListener('keypress', function (e) {
        let key = e.keyCode;

        if( key == 101 || key == 45 || key == 43) {
            e.preventDefault();
        } else {
            e.target.style.borderColor = 'green';
            iconPrice.style.visibility = 'hidden';
            errorPrice.innerHTML = ''; 
        }
    
    })

    minusButton.addEventListener('click', event => {
    event.preventDefault();
    let currentValue = Number(inputField.value) || 0;
    inputField.value = currentValue - 1;
    });

    plusButton.addEventListener('click', event => {
    event.preventDefault();
    let currentValue = Number(inputField.value) || 0;
    inputField.value = currentValue + 1;
    });


});