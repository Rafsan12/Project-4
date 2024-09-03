const depositInput =  document.querySelector("#deposit-input")
const depositBtn = document.querySelector("#deposit-btn");
const totalBalance = document.querySelector("#total-balance");

const transactionHistoryBtn =  document.querySelector("#transaction-history-btn")

depositBtn.addEventListener("click", () =>{
    // console.log("click")
    const depositAmount = parseFloat(depositInput.value);
    // console.log(parseFloat(depositAmount));
    const currentBalance = parseFloat(totalBalance.textContent);

    const newBalance =  depositAmount + currentBalance;
    // console.log(newBalance);
    totalBalance.textContent = newBalance.toFixed(2);
    depositInput.value = "";

    const transaction = {
        date: new Date().toLocaleString(), // Capture the current date and time
        type: "Deposit",
        amount: depositAmount.toFixed(2),
        balanceAfterTransaction: newBalance.toFixed(2),
    };
    transactions.push(transaction);
    
  

});

const withdrawInput =  document.querySelector("#withdraw-input")
const withdrawBtn = document.querySelector("#withdraw-btn");

withdrawBtn.addEventListener("click", () =>{
    // console.log("click")
    const withdrawAmount = parseFloat(withdrawInput.value);
    // console.log(parseFloat(depositAmount));
    const currentBalance = parseFloat(totalBalance.textContent);

    if (!isNaN(withdrawAmount) && withdrawAmount > 0 && withdrawAmount <= currentBalance) {
   
        const newBalance = currentBalance - withdrawAmount; 

      
        totalBalance.textContent = newBalance.toFixed(2);

        
        withdrawInput.value = "";

        const transaction = {
            date: new Date().toLocaleString(), // Capture the current date and time
            type: "Withdraw",
            amount: withdrawAmount.toFixed(2),
            balanceAfterTransaction: newBalance.toFixed(2),
        };
        transactions.push(transaction);
    } else if (withdrawAmount > currentBalance) {
        alert("Insufficient Balance. Please enter an amount less than or equal to the current balance.");
    } else {
        alert("Please enter a valid withdrawal amount.");
    }

    
  

});

const transactionHistoryDisplay = document.querySelector("#transaction-history");

const transactions = []; 

function updateTransactionHistory() {
    transactionHistoryDisplay.innerHTML = ""; // Clear the table body
    transactions.forEach(transaction => {
        const transactionRow = document.createElement("tr");

        const dateCell = document.createElement("td");
        dateCell.textContent = transaction.date;
        transactionRow.appendChild(dateCell);

        const typeCell = document.createElement("td");
        typeCell.textContent = transaction.type;
        transactionRow.appendChild(typeCell);

        const amountCell = document.createElement("td");
        amountCell.textContent = `${transaction.amount}`;
        transactionRow.appendChild(amountCell);

        const balanceCell = document.createElement("td");
        balanceCell.textContent = `${transaction.balanceAfterTransaction}`;
        transactionRow.appendChild(balanceCell);

        transactionHistoryDisplay.appendChild(transactionRow);
    });
}

transactionHistoryBtn.addEventListener("click", () => {
    // console.log("Transaction History Clicked");
    updateTransactionHistory();
});