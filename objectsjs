/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    //a withdral method under the savingsAccount object
    withdraw: function removeMoney(amount) {    
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // making a method named printAccountSummary under the savingAccount object
    printAccountSummary: function printAccountSummary(){
        return "Welcome!\nYour balance is currently $"+savingsAccount.balance+' and your interest rate is '+savingsAccount.interestRatePercent+'%.';
    }
};

console.log(savingsAccount.printAccountSummary());
