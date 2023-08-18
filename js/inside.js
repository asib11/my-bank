// deposite
document.getElementById("deposit-btn").addEventListener('click',()=>{

    const depositField = document.getElementById("deposit-input");
    const depositFieldValue = depositField.value;
    depositField.value = '';
    if(isNaN(depositFieldValue)){
        alert('please provide a vaild number');
        return;
    }
    const deposit = document.getElementById("deposit");
    const previousDeposit = deposit.innerText;
    const depositTotal = Number(previousDeposit) + Number(depositFieldValue);
    deposit.innerText = depositTotal;

    const total = document.getElementById("total");
    const totalBalance = total.innerText;
    const newTotalBalance = Number(totalBalance)+ Number(depositFieldValue);
    total.innerText = newTotalBalance;

});
// withdraw
document.getElementById("withdraw-btn").addEventListener('click',()=>{

    const withdrawField = document.getElementById("withdraw-input");
    const withdrawFieldValue = withdrawField.value;
    const withdraw = document.getElementById("withdraw");
    const previousWithdraw = withdraw.innerText;
    withdrawField.value = '';
    if(isNaN(withdrawFieldValue)){
        alert('please provide a vaild number');
        return;
    }
    
    const total = document.getElementById("total");
    const totalBalance = total.innerText;
    if(totalBalance >= withdrawFieldValue){
        const withdrawTotal = Number(previousWithdraw) + Number(withdrawFieldValue);
        withdraw.innerText = withdrawTotal;
        const newTotalBalance = Number(totalBalance)- Number(withdrawFieldValue);
        total.innerText = newTotalBalance;
    }else{
        alert('insuffience balance');
    }
    
});

