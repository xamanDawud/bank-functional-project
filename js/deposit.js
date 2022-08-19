document
    .getElementById("add-deposit-btn")
    .addEventListener("click", function(event) {
        let newDepositAmount = getInputField("add-deposit-field");
        let previousDepostAmount = getElement("deposit-number");
        let currentAmount = previousDepostAmount + newDepositAmount;
        setTotalAmountValue("deposit-number", currentAmount);

        // Balance Increment
        let previoustBalance = getElement("balance-current");
        let CurrentBalalnce = previoustBalance + newDepositAmount;
        setTotalAmountValue("balance-current", CurrentBalalnce);
    });

// document
//     .getElementById("add-deposit-btn")
//     .addEventListener("click", function(event) {
//         console.log("Hello Xaman");
//     });