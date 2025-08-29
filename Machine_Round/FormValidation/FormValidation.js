
const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');

form.addEventListener('submit',(e)=>{
    let message =[];
    if(name.value===''||name.value==null){
        message.push('Name is required');
    }
    if(password.value.length<=6){
        message.push('Password must be logner than 6 char');
    }
    if(password.value==='password'){
        message.push('matched');
    }

})