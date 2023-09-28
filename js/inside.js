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
    const depositTotal = parseInt(previousDeposit) + parseInt(depositFieldValue);
    deposit.innerText = depositTotal;

    const total = document.getElementById("total");
    const totalBalance = total.innerText;
    const newTotalBalance = parseInt(totalBalance)+ parseInt(depositFieldValue);
    total.innerText = newTotalBalance;

});
// withdraw
document.getElementById("withdraw-btn").addEventListener('click',()=>{

    const withdrawField = document.getElementById("withdraw-input");
    const withdrawFieldValue = parseInt(withdrawField.value);
    const withdraw = document.getElementById("withdraw");
    const previousWithdraw = parseInt(withdraw.innerText);
    withdrawField.value = '';
    if(isNaN(withdrawFieldValue)){
        alert('please provide a vaild number');
        return;
    }
    
    const total = document.getElementById("total");
    const totalBalance = parseInt(total.innerText);
    if((totalBalance > withdrawFieldValue)||(totalBalance == withdrawFieldValue)){
        const withdrawTotal = previousWithdraw + withdrawFieldValue;
        withdraw.innerText = withdrawTotal;
        const newTotalBalance = totalBalance- withdrawFieldValue;
        total.innerText = newTotalBalance;
    }else if((totalBalance < withdrawFieldValue)){
        alert('insuffience balance');
    }
    
});

