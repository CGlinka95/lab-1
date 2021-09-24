const formToCheck = document.querySelector('#check-types')
const checkInput = document.querySelector('#field-to-check')
const displayField = document.querySelector('.calculation')
const warning = document.querySelector('.warning')

console.log(formToCheck, checkInput, warning)

formToCheck.addEventListener('submit', function(e){
    e.preventDefault();
    let fieldValue = Number(checkInput.value.trim());

    if(isNaN(fieldValue)){
        warning.classList.remove('hide')
        warning.querySelector('span').textContent = "Try entering a round number..."
    }
    else{
        // make calculation and update the display
        displayField.textContent = fieldValue * 10
    }
})

checkInput.addEventListener('focus', function(){
    warning.classList.add('hide')
    checkInput.value = ''
})
    
