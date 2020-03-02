//variables

const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      resetBtn = document.getElementById('resetBtn'),
      sendEmailForm = document.getElementById('email-form');



//Event listeners

eventListener();


function eventListener() {
    //App init
    document.addEventListener('DOMContentLoaded',appInit);
    
    //Validate fields
    email.addEventListener('blur',validateFields);
    subject.addEventListener('blur',validateFields);
    message.addEventListener('blur',validateFields);
    
    sendEmailForm.addEventListener('submit',sendEmail);
    
    //reset the form
    resetBtn.addEventListener('click',resetForm);
}


//functions

//App initialisation
function appInit() {
    //disable the send button
    sendBtn.disabled = true;
}


//Send the email form
function sendEmail(e) {
    e.preventDefault();
    
    const spinner = document.querySelector('#spinner');
    
    spinner.style.display = 'block';
    
    const sendEmailImg = document.createElement('img');
    sendEmailImg.src = 'img/mail.gif';
    sendEmailImg.style.display = 'block';
    
    //hide the spinner after some time
    setTimeout(function () {
       spinner.style.display = 'none';
        
       document.querySelector('#loaders').appendChild(sendEmailImg);
        
        setTimeout(function() {
           sendEmailForm.reset(); 
           sendEmailImg.remove();
        }, 5000);
        
    }, 3000);
}

//Validate fields

function validateFields() {
    let errors;
    
    validateLength(this);
    
    if(this.type === 'email') {
        validateEmail(this);
    }
    
    //to check whether errors are present or not
    errors = document.querySelectorAll('error');
    
    //to make send button visible
    if(email.value !== '' && subject.value !== '' && message.value !== '') {
        if(errors.length === 0) {
            sendBtn.disabled = false;
        }
    }
}


function validateLength(field) {
    if(field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }
    else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}


function validateEmail(field) {
    const emailText = field.value;
    
    if(emailText.indexOf('@') !== -1) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }
    else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}


function resetForm() {
    sendEmailForm.reset();
}