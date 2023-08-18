// deposite
document.getElementById("deposit-btn").addEventListener('click',()=>{

    const depositField = document.getElementById("deposit-input");
    const deposit = document.getElementById("deposit");
    const previousDeposit = deposit.innerText;
    const depositTotal = Number(previousDeposit) + Number(depositField.value);
    deposit.innerText = depositTotal;
    depositField.value = '';

});
