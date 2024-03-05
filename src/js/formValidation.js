const validateForm = (todoInput, dateInput, titleError, dateError)=>{
    let errors = {
        errorStatus: false,
        todoError: '',
        dateError: ''
    }
    if(!todoInput && !dateInput){
        errors = {
            errorStatus: true,
            todoError: 'Todo task is required🈚',
            dateError: 'Todo date is required 🈚'
        }
        titleError.style.visibility = 'visible';
        dateError.style.visibility = 'visible';
        titleError.textContent = errors.todoError;
        dateError.textContent = errors.dateError;
    } else if(!todoInput){
        errors = {
            errorStatus: true,
            todoError: 'Todo task is required🈚',
            dateError: ''
        }
        titleError.style.visibility = 'visible';
        dateError.style.visibility = 'hidden';
        titleError.textContent = errors.todoError;
        dateError.textContent = errors.dateError;
    } else if(!dateInput){
        errors = {
            errorStatus: true,
            todoError: '',
            dateError: 'Todo date is required 🈚'
        }
        titleError.style.visibility = 'hidden';
        dateError.style.visibility = 'visible';
        titleError.textContent = errors.todoError;
        dateError.textContent = errors.dateError;
    } else{
        errors = {
            errorStatus: false,
            todoError: '',
            dateError: ''
        }
        titleError.style.visibility = 'hidden';
        dateError.style.visibility = 'hidden';
        titleError.textContent = errors.todoError;
        dateError.textContent = errors.dateError;
    }
    const formErrorStatus = ()=>{
        return errors.errorStatus
    }
    return{formErrorStatus}
}

const validateDescription = (descInput, counterLabel, descError)=>{
    descInput.addEventListener('input', ()=>{
        counterLabel.textContent = `Typed character: ${descInput.value.length}`;
        if(descInput.value.length >= 100){
            counterLabel.style.color = 'red';
            descError.textContent = 'Descrption must be less than 100 character';
            descError.style.visibility = 'visible';
        } else {
            counterLabel.style.color = 'black';
            //descError.textContent = '';
            descError.style.visibility = 'hidden';
        } 
    })

    descInput.addEventListener('keydown', (e)=>{
        if(descInput.value.length >= 100 && e.key !== 'Backspace'){
            e.preventDefault();
        }
    })

}

export {validateForm, validateDescription}