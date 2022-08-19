document
    .getElementById("withdraw-calc-btn")
    .addEventListener("click", function(event) {
        let inputFieldValue = getInputField("withdraw-calc-field");
        let balanceValue = getElement("balance-current");
        let inputToBalnceSub = balanceValue - inputFieldValue;
        setTotalAmountValue("withdraw-current", inputFieldValue);
        setTotalAmountValue("balance-current", inputToBalnceSub);
    });