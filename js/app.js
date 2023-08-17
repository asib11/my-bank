document.getElementById("login-btn").addEventListener('click', ()=>{
    const emailField = document.getElementById("email");
    const email = emailField.value ;
    const passwordField = document.getElementById("password");
    const password = passwordField.value;

    if(email === 'asib@gmail.com' && password === "asib"){
        window.location.href = 'inside.html';
    }else{
        alert("invalid");
    }
});