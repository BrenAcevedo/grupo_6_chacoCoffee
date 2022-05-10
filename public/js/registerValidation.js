window.addEventListener('load', () => {

    let userRegister = document.forms.userRegister;
    let elements = userRegister.elements;

    let name = elements.name;
    let errorName = document.querySelector('#errorName');
    let lastName = elements.lastName;
    let errorLastName = document.querySelector('#errorLastName');
    let email = elements.email;
    let errorEmail = document.querySelector('#errorEmail');
    let address = elements.address;
    let errorAddress = document.querySelector('#errorAddress');
    let password = elements.password;
    let errorPassword = document.querySelector('#errorPassword');
    let confirmPassword = elements.confirmPassword;
    let errorConfirmPassword = document.querySelector('#errorConfirmPassword');
    let avatar = elements.avatar;
    let errorAvatar = document.querySelector('#errorAvatar');
    let iconName = document.querySelector('#iconName');
    let iconLastName = document.querySelector('#iconLastName');
    let iconEmail = document.querySelector('#iconEmail');
    let iconAddress = document.querySelector('#iconAddress');
    let iconPassword = document.querySelector('#iconPassword');
    let iconConfirmPassword = document.querySelector('#iconConfirmPassword');
    let longitud = document.querySelector('#longitud');
    let longitudI = document.querySelector('#longitudI');
    let minuscula = document.querySelector('#minuscula');
    let minusculaI = document.querySelector('#minusculaI');
    let mayuscula = document.querySelector('#mayuscula');
    let mayusculaI = document.querySelector('#mayusculaI');
    let numero = document.querySelector('#numero');
    let numeroI = document.querySelector('#numeroI');
    let simbolo = document.querySelector('#simbolo');
    let simboloI = document.querySelector('#simboloI');


    let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let regexContainLowerCase = /^(?=.*[a-z])/;
    let regexContainUpperCase = /^(?=.*[A-Z])/;
    let regexContainNumbers = /(?=.*[0-9])/;
    let regexContainSymbols = /(?=.*[!@#\$%\^&\*])/;


    name.addEventListener('focus', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'blue';
        }
    
    })

    name.addEventListener('blur', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'red';
            iconName.style.visibility = 'visible';
            errorName.innerHTML = 'Tienes que escribir un nombre';
        }
    
    })

  
    name.addEventListener('keyup', function (e) {
       if (e.target.value.length < 2) {
            e.target.style.borderColor = 'red';
            iconName.style.visibility = 'visible';
            errorName.innerHTML = 'El nombre debe tener al menos 2 caracteres';
        } else {
            e.target.style.borderColor = 'green';
            iconName.style.visibility = 'hidden';
            errorName.innerHTML = '';
            
        }
        
    })


    lastName.addEventListener('focus', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'blue';
        }
    
    })

    lastName.addEventListener('blur', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'black';
            iconLastName.style.visibility = 'visible';
            errorLastName.innerHTML = 'Tienes que escribir un apellido';
        } 
    })
 

    lastName.addEventListener('keyup', function (e) {
        if (e.target.value.length < 2) {
            e.target.style.borderColor = 'red';
            iconLastName.style.visibility = 'visible';
            errorLastName.innerHTML = 'El apellido debe tener al menos 2 caracteres';  
        } else {
            e.target.style.borderColor = 'green';
            iconLastName.style.visibility = 'hidden';
            errorLastName.innerHTML = '';  
        }
        
    })

    email.addEventListener('focus', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'blue';
        }
    
    })

    email.addEventListener('blur', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'black';
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
            e.target.style.borderColor = 'green';
            iconEmail.style.visibility = 'hidden';
            errorEmail.innerHTML = ''; 
        }
       
    })

    address.addEventListener('focus', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'blue';
        }
    
    })

    address.addEventListener('blur', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'black';
            iconAddress.style.visibility = 'visible';
            errorAddress.innerHTML = 'Tienes que escribir un domicilio';  
        }
    
    })

    address.addEventListener('keyup', function (e) {
       if (e.target.value.length < 10) {
            e.target.style.borderColor = 'red';
            iconAddress.style.visibility = 'visible';
            errorAddress.innerHTML = 'El domicilio debe tener al menos 10 caracteres';  
            
        } else {
            e.target.style.borderColor = 'green';
            iconAddress.style.visibility = 'hidden';
            errorAddress.innerHTML = '';  
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
        } else {
            iconPassword.style.visibility = 'hidden';
            errorPassword.innerHTML = '';  
        }
    })

    password.addEventListener('keyup', function (e) {
        let num = 0

        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'red';
            iconPassword.style.visibility = 'visible';
            errorPassword.innerHTML = 'Tienes que escribir una contraseña';  
        } else {
            iconPassword.style.visibility = 'hidden';
            errorPassword.innerHTML = '';  
        }

        if ( e.target.value.length < 8 ) {
            longitud.style.color = 'red';
            longitudI.style.color = 'red';
            e.target.style.borderColor = 'red';
            // iconPassword.style.visibility = 'visible';
            // errorPassword.innerHTML = 'La contraseña debe tener al menos 8 caracteres';  
        } else {
            longitud.style.color = 'green';
            longitudI.style.color = 'green';
            num += 1;
        }
        
        if (!regexContainLowerCase.test(e.target.value)) {
            minuscula.style.color = 'red';
            minusculaI.style.color = 'red';
            e.target.style.borderColor = 'red';
            // iconPassword.style. visibility = 'visible';
            // errorPassword.innerHTML = 'La contraseña debe tener al menos una minúscula';  
        } else {
            minuscula.style.color = 'green';
            minusculaI.style.color = 'green';
            num += 1;
        }
        
        if (!regexContainUpperCase.test(e.target.value)) {
            mayuscula.style.color = 'red';
            mayusculaI.style.color = 'red';
            e.target.style.borderColor = 'red';
            // iconPassword.style.visibility = 'visible';
            // errorPassword.innerHTML = 'La contraseña debe tener al menos una mayúscula';  
        } else {
            mayuscula.style.color = 'green';
            mayusculaI.style.color = 'green';
            num += 1;
        }
        
        if (!regexContainNumbers.test(e.target.value)) {
            numero.style.color = 'red';
            numeroI.style.color = 'red';
            e.target.style.borderColor = 'red';
            // iconPassword.style. visibility = 'visible';
            // errorPassword.innerHTML = 'La contraseña debe tener al menos un número';  
        } else {
            numero.style.color = 'green';
            numeroI.style.color = 'green';
            num += 1;
        }
         
        if (!regexContainSymbols.test(e.target.value)) {
            simbolo.style.color = 'red';
            simboloI.style.color = 'red';
            e.target.style.borderColor = 'red';
            // iconPassword.style. visibility = 'visible';
            // errorPassword.innerHTML = 'La contraseña debe tener al menos un carácter especial';     
        } else {
            simbolo.style.color = 'green';
            simboloI.style.color = 'green';
            num += 1;
        }
       
        if (num == 5) {
            e.target.style.borderColor = 'green';
        }
        
       
       
    })

    confirmPassword.addEventListener('focus', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'blue';
        }
    
    })

    confirmPassword.addEventListener('blur', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'black';
            iconConfirmPassword.style.visibility = 'visible';
            errorConfirmPassword.innerHTML = 'Debes confirmar la contraseña'; 
        }
    })

    confirmPassword.addEventListener('keyup', function (e) {
        if ( e.target.value != password.value) {
            e.target.style.borderColor = 'red';
            iconConfirmPassword.style.visibility = 'visible';
            errorConfirmPassword.innerHTML = 'Las contraseñas no coinciden'; 
            
        } else {
            e.target.style.borderColor = 'green';
            iconConfirmPassword.style.visibility = 'hidden';
            errorConfirmPassword.innerHTML = ''; 
        }
       
    })

    avatar.addEventListener('change', function (e) {
        let files = e.target.files;
        let file = files[0];

        if (file.type != 'image/png' && file.type != 'image/jpeg') {
            e.target.style.borderColor = 'red';
            iconAvatar.style.visibility = 'visible';
            errorAvatar.innerHTML = 'Tienes que subir una imágen: jpg, png'; 
        } else {
            e.target.style.borderColor = 'green';
            iconAvatar.style.visibility = 'hidden';
            errorAvatar.innerHTML = ''; 
            let reader = new FileReader();
            reader.onload = function (e) {
                document.querySelector('#preview').src = e.target.result
            }
            reader.readAsDataURL(file);
        }
        
    })
      

});
;