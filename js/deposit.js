document.getElementById('depositBtn').addEventListener('click', function () {
    // console.log('deposit clicked')

    //1.get input field value
    const newDepositAmount = getInputFieldValueById('depositField');

    //2.get display field value
    const prevDepositTotal = getElementValueById('deposit-total');

    //3.get balance field value
    const prevBalance = getElementValueById('balance-total');

    // 4.calculate new deposit value
    const newDepositTotal = add(newDepositAmount, prevDepositTotal);
    // console.log(newDepositTotal);

    //5.set the diposit display field value
    setTextElementById('deposit-total', newDepositTotal);

    //6.calculate new balance display field value

    const newBalanceTotalByDepo = add(prevBalance, newDepositAmount);

    //7.set the total balance
    setTextElementById('balance-total', newBalanceTotalByDepo);
})