window.addEventListener('load', () => {

    let userLogin = document.forms.userLogin;
    let elements = userLogin.elements;

    let email = elements.email;
    let errorEmail = document.querySelector('#errorEmail');
    
    let password = elements.password;
    let errorPassword = document.querySelector('#errorPassword');

    let iconEmail = document.querySelector('#iconEmail');
    let iconPassword = document.querySelector('#iconPassword');

    let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


    email.addEventListener('focus', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'blue';
        }
    
    })

    email.addEventListener('blur', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'red';
            iconEmail.style.visibility = 'visible';
            errorEmail.innerHTML = 'Tienes que escribir un correo electrónico'; 
        } 
    
    })

    email.addEventListener('keyup', function (e) {
        if ( !regexEmail.test(e.target.value)) {
            e.target.style.borderColor = 'red';
            iconEmail.style.visibility = 'visible';
            errorEmail.innerHTML = 'Debes escribir un formato de correo electrónico válido';  
            
        } else {
            e.target.style.borderColor = 'blue';
            iconEmail.style.visibility = 'hidden';
            errorEmail.innerHTML = ''; 
        }
       
    })

   
    password.addEventListener('focus', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'blue';
        }
    
    })

    password.addEventListener('blur', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'red';
            iconPassword.style.visibility = 'visible';
            errorPassword.innerHTML = 'Tienes que escribir una contraseña';  
        } 
    })

    password.addEventListener('keyup', function (e) {
        if(e.target.value.length > 0) {
            iconPassword.style.visibility = 'hidden';
            errorPassword.innerHTML = '';  
        }
    })
   
    userLogin.addEventListener('submit', function (e) {
        e.preventDefault();
        if ( !regexEmail.test(email.value)) {
            e.target.style.borderColor = 'red';
            iconEmail.style.visibility = 'visible';
            errorEmail.innerHTML = 'Debes escribir un formato de correo electrónico válido';  
        } else if (password.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'red';
            iconPassword.style.visibility = 'visible';
            errorPassword.innerHTML = 'Tienes que escribir una contraseña';  
        } else {
            userLogin.submit();
        }


    })
   

});
