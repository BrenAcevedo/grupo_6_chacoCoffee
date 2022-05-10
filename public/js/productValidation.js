window.addEventListener('load', () => {

    let productForm = document.forms.productForm;
    let elements = productForm.elements;

    let name = elements.name;
    let errorName = document.querySelector('#errorProductName');
    let price = elements.price;
    let errorPrice = document.querySelector('#errorPrice');
    let description = elements.description;
    let errorDescription = document.querySelector('#errorDescription');
    let variety = elements.variety;
    let errorVariety = document.querySelector('#errorVariety');
    let smell = elements.smell;
    let errorSmell = document.querySelector('#errorSmell');
    let origin = elements.origin;
    let errorOrigin = document.querySelector('#errorOrigin');
    let detail = elements.detail;
    let errorDetail = document.querySelector('#errorDetail');
    let weight = elements.weight;
    let errorWeight = document.querySelector('#errorWeight');
    let stock = elements.stock;
    let errorStock = document.querySelector('#errorStock');
    let information = elements.information;
    let errorInformation = document.querySelector('#errorInformation');
    let packaging = elements.packaging;
    let errorPackaging = document.querySelector('#errorPackaging');
    let image = elements.image;
    let errorImage = document.querySelector('#errorProduct');    
    
    
    

    let iconName = document.querySelector('#iconProductName');
    let iconPrice =  document.querySelector('#iconPrice');
    let iconDescription =  document.querySelector('#iconDescription');
    let iconVariety =  document.querySelector('#iconVariety');
    let iconSmell =  document.querySelector('#iconSmell');
    let iconOrigin =  document.querySelector('#iconOrigin');
    let iconDetail =  document.querySelector('#iconDetail');
    let iconWeight =  document.querySelector('#iconWeight');
    let iconStock =  document.querySelector('#iconStock');
    let iconInformation =  document.querySelector('#iconInformation');
    let iconPackaging =  document.querySelector('#iconPackaging');
    let iconProduct =  document.querySelector('#iconProduct');





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
            errorName.innerHTML = 'Tienes que escribir el nombre del producto'; 
        } 
    
    })

    name.addEventListener('keyup', function (e) {
        if (e.target.value.length < 9) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'red';
            iconName.style.visibility = 'visible';
            errorName.innerHTML = 'Debes escribir al menos 9 caracteres'; 
        } else {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'green';
            iconName.style.visibility = 'hidden';
            errorName.innerHTML = ''; 
        }
    
       
    })

    price.addEventListener('focus', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'blue';
        }
    
    })

    price.addEventListener('blur', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'red';
            iconPrice.style.visibility = 'visible';
            errorPrice.innerHTML = 'Tienes que escribir el precio del producto'; 
        } 
    
    })

    price.addEventListener('keypress', function (e) {
        let key = e.keyCode;

        if( key == 101 || key == 45 || key == 43) {
            e.preventDefault();
        } else {
            e.target.style.borderColor = 'green';
            iconPrice.style.visibility = 'hidden';
            errorPrice.innerHTML = ''; 
        }
    
    })

    description.addEventListener('focus', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'blue';
        }
    
    })

    description.addEventListener('blur', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'red';
            iconDescription.style.visibility = 'visible';
            errorDescription.innerHTML = 'Tienes que escribir la descripción del producto'; 
        } 
    
    })

    description.addEventListener('keyup', function (e) {
        if (e.target.value.length < 30) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'red';
            iconDescription.style.visibility = 'visible';
            errorDescription.innerHTML = 'Debes escribir al menos 30 caracteres'; 
        } else {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'green';
            iconDescription.style.visibility = 'hidden';
            errorDescription.innerHTML = ''; 
        }
    
       
    })

   
   variety.addEventListener('focus', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'blue';
        }
    
    })

   variety.addEventListener('blur', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'red';
            iconVariety.style.visibility = 'visible';
            errorVariety.innerHTML = 'Tienes que escribir la variedad del producto'; 
        } 
    
    })

   variety.addEventListener('keyup', function (e) {
        if (e.target.value.length > 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'green';
            iconVariety.style.visibility = 'hidden';
            errorVariety.innerHTML = ''; 
        }    
    })

    smell.addEventListener('focus', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'blue';
        }
    
    })

   smell.addEventListener('blur', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'red';
            iconSmell.style.visibility = 'visible';
            errorSmell.innerHTML = 'Tienes que escribir el aspecto olfativo del producto'; 
        } 
    
    })

   smell.addEventListener('keyup', function (e) {
        if (e.target.value.length > 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'green';
            iconSmell.style.visibility = 'hidden';
            errorSmell.innerHTML = ''; 
        }    
    })

    origin.addEventListener('focus', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'blue';
        }
    
    })

   origin.addEventListener('blur', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'red';
            iconOrigin.style.visibility = 'visible';
            errorOrigin.innerHTML = 'Tienes que escribir el origen del producto'; 
        } 
    
    })

   origin.addEventListener('keyup', function (e) {
        if (e.target.value.length > 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'green';
            iconOrigin.style.visibility = 'hidden';
            errorOrigin.innerHTML = ''; 
        }    
    })

    detail.addEventListener('focus', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'blue';
        }
    
    })

   detail.addEventListener('blur', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'red';
            iconDetail.style.visibility = 'visible';
            errorDetail.innerHTML = 'Tienes que escribir la reseña del producto'; 
        } 
    
    })

   detail.addEventListener('keyup', function (e) {
        if (e.target.value.length > 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'green';
            iconDetail.style.visibility = 'hidden';
            errorDetail.innerHTML = ''; 
        }    
    })

    weight.addEventListener('focus', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'blue';
        }
    
    })

   weight.addEventListener('blur', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'red';
            iconWeight.style.visibility = 'visible';
            errorWeight.innerHTML = 'Tienes que seleccionar el peso del producto'; 
        } 
    
    })

    weight.addEventListener('change', function (e) {
        if (e.target.value.length >= 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'green';
            iconWeight.style.visibility = 'hidden';
            errorWeight.innerHTML = ''; 
        }    
    })

    stock.addEventListener('focus', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'blue';
        }
    
    })

    stock.addEventListener('blur', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'red';
            iconStock.style.visibility = 'visible';
            errorStock.innerHTML = 'Tienes que escribir el stock del producto'; 
        } 
    
    })

    stock.addEventListener('keypress', function (e) {
        let key = e.keyCode;

        if( key == 101 || key == 45 || key == 43) {
            e.preventDefault();
        } else {
            e.target.style.borderColor = 'green';
            iconStock.style.visibility = 'hidden';
            errorStock.innerHTML = ''; 
        }
    
    })

    information.addEventListener('focus', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'blue';
        }
    
    })

   information.addEventListener('blur', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'red';
            iconInformation.style.visibility = 'visible';
            errorInformation.innerHTML = 'Tienes que agregar la información del producto'; 
        } 
    
    })

   information.addEventListener('keyup', function (e) {
        if (e.target.value.length > 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'green';
            iconInformation.style.visibility = 'hidden';
            errorInformation.innerHTML = ''; 
        }    
    })

    packaging.addEventListener('focus', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'blue';
        }
    
    })

   packaging.addEventListener('blur', function (e) {
        if (e.target.value.length == 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'red';
            iconPackaging.style.visibility = 'visible';
            errorPackaging.innerHTML = 'Tienes que agregar información del packaging'; 
        } 
    
    })

   packaging.addEventListener('keyup', function (e) {
        if (e.target.value.length > 0) {
            e.target.style.outline = 'unset';
            e.target.style.borderColor = 'green';
            iconPackaging.style.visibility = 'hidden';
            errorPackaging.innerHTML = ''; 
        }    
    })

    image.addEventListener('change', function (e) {
        let files = e.target.files;
        let file = files[0];

        if (file.type != 'image/png' && file.type != 'image/jpeg') {
            e.target.style.borderColor = 'red';
            iconProduct.style.visibility = 'visible';
            errorProduct.innerHTML = 'Tienes que subir una imágen: jpg, png'; 
        } else {
            e.target.style.borderColor = 'green';
            iconProduct.style.visibility = 'hidden';
            errorProduct.innerHTML = ''; 
            let reader = new FileReader();
            reader.onload = function (e) {
                document.querySelector('#preview').src = e.target.result
            }
            reader.readAsDataURL(file);
        }
        
    })
   

});
