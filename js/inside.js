// deposite
document.getElementById("deposit-btn").addEventListener('click',()=>{

    const depositField = document.getElementById("deposit-input");
    const deposit = document.getElementById("deposit");
    const previousDeposit = deposit.innerText;
    const depositTotal = Number(previousDeposit) + Number(depositField.value);
    deposit.innerText = depositTotal;
    depositField.value = '';

});
// withdraw
document.getElementById("withdraw-btn").addEventListener('click',()=>{

    const withdrawField = document.getElementById("withdraw-input");
    const withdraw = document.getElementById("withdraw");
    const previousWithdraw = withdraw.innerText;
    const withdrawTotal = Number(previousWithdraw) - Number(withdrawField.value);
    if(withdrawTotal>= 0){
        withdraw.innerText = withdrawTotal;
    }else{
        alert("insufficient balance")
    }
    withdrawField = '';
});