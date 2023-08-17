document.getElementById("login-btn").addEventListener('click', ()=>{
    const emailField = document.getElementById("email");
    const email = emailField.value ;
    const passwordField = document.getElementById("password");
    const password = passwordField.value;

    if(email === 'asib@gmail.com' && password === "asib"){
        console.log('valid');
    }else{
        console.log("invalid");
    }
});