document.getElementById('withdrawBtn').addEventListener('click', function () {
    // console.log('withdraw clicked')

    //1.get the inputField value
    const withdrawAmount = getInputFieldValueById('withdrawField');

    //2.get the display field value of withdraw
    const prevWithdrawTotal = getElementValueById('withdraw-total');

    //3.get the total balance display field value
    const prevBalance = getElementValueById('balance-total');

    //4.calculate the total withdraw balance
    const totalWithdraw = add(prevWithdrawTotal, withdrawAmount);

    //5.set the withdraw total to diplay withdraw field
    setTextElementById('withdraw-total', totalWithdraw);

    //6.calculate the total balance after withdraw
    const balanceByWithdraw = deduct(prevBalance, withdrawAmount);

    //7.set the total balance after withdraw
    setTextElementById('balance-total', balanceByWithdraw);
})