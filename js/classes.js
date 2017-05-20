"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CheckingAccount = (function () {
    function CheckingAccount(name, birthday) {
        this.accountHolderName = name;
        this.balance = 1000;
        this.accountHolderBirthDate = new Date(birthday);
        this.accountType = 1;
    }
    CheckingAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        if (this.balance >= amount && amount > 0) {
            this.balance -= amount;
            var transaction = {
                success: true,
                amount: (-1 * amount),
                resultBalance: this.balance,
                transactionDate: new Date(),
                description: description,
                errorMessage: ""
            };
        }
        else {
            var transaction = {
                success: false,
                amount: amount,
                resultBalance: this.balance,
                transactionDate: new Date(),
                description: description,
                errorMessage: "Not enough funds"
            };
            if (amount >= 0) {
                transaction.errorMessage = "Please enter a positive value for amount";
            }
        }
        this.accountHistory.push(transaction);
        return transaction;
    };
    ;
    CheckingAccount.prototype.depositMoney = function (amount, description) {
        if (amount >= 0) {
            this.balance += amount;
            var transaction = {
                success: true,
                amount: amount,
                resultBalance: this.balance,
                transactionDate: new Date(),
                description: description,
                errorMessage: ""
            };
        }
        else {
            var transaction = {
                success: false,
                amount: amount,
                resultBalance: this.balance,
                transactionDate: new Date(),
                description: description,
                errorMessage: "Please enter a valid amount"
            };
        }
        this.accountHistory.push(transaction);
        return transaction;
    };
    ;
    CheckingAccount.prototype.advanceDate = function (numberOfDays) {
        var today = new Date();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();
        today.setDate(today.getDate() + numberOfDays);
        var numberOfMonths = ((today.getMonth() + 1 - month) + ((today.getFullYear() - year) * 12));
        this.balance = this.balance * (1 + (Math.pow((0.01 / 12), numberOfMonths)));
    };
    ;
    return CheckingAccount;
}());
exports.CheckingAccount = CheckingAccount;
var SavingsAccount = (function () {
    function SavingsAccount(name, birthday) {
        this.accountHolderName = name;
        this.balance = 10000;
        this.accountHolderBirthDate = new Date(birthday);
        this.accountType = 2;
    }
    SavingsAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        if (amount >= 0 &&
            this.balance >= amount) {
            if (transactionOrigin != 3) {
                if (this.accountHistory.length < 6) {
                    this.balance -= amount;
                    var transaction = {
                        success: true,
                        amount: (-1 * amount),
                        resultBalance: this.balance,
                        transactionDate: new Date(),
                        description: description,
                        errorMessage: ""
                    };
                    this.accountHistory.push(transaction);
                    return transaction;
                }
                else {
                    var transaction = {
                        success: false,
                        amount: (-1 * amount),
                        resultBalance: this.balance,
                        transactionDate: new Date(),
                        description: description,
                        errorMessage: "Maximum number of transatctions already reached."
                    };
                    return transaction;
                }
            }
            else {
                this.balance -= amount;
                var transaction = {
                    success: true,
                    amount: (-1 * amount),
                    resultBalance: this.balance,
                    transactionDate: new Date(),
                    description: description,
                    errorMessage: ""
                };
                return transaction;
            }
        }
        else {
            var transaction = {
                success: false,
                amount: (-1 * amount),
                resultBalance: this.balance,
                transactionDate: new Date(),
                description: description,
                errorMessage: "Transaction failed"
            };
            return transaction;
        }
    };
    ;
    SavingsAccount.prototype.depositMoney = function (amount, description) {
        if (amount >= 0) {
            this.balance += amount;
            var transaction = {
                success: true,
                amount: amount,
                resultBalance: this.balance,
                transactionDate: new Date(),
                description: description,
                errorMessage: ""
            };
        }
        else {
            var transaction = {
                success: false,
                amount: amount,
                resultBalance: this.balance,
                transactionDate: new Date(),
                description: description,
                errorMessage: "Please enter a valid amount"
            };
        }
        return transaction;
    };
    ;
    SavingsAccount.prototype.advanceDate = function (numberOfDays) {
        var today = new Date();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();
        today.setDate(today.getDate() + numberOfDays);
        var numberOfMonths = ((today.getMonth() + 1 - month) + ((today.getFullYear() - year) * 12));
        this.balance = this.balance * (1 + (Math.pow((0.02 / 12), numberOfMonths)));
    };
    ;
    return SavingsAccount;
}());
exports.SavingsAccount = SavingsAccount;
var RetirementAccount = (function () {
    function RetirementAccount(name, birthday) {
        this.accountHolderName = name;
        this.balance = 100000;
        this.accountHolderBirthDate = new Date(birthday);
        this.accountType = 3;
    }
    RetirementAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        var today = new Date();
        if (amount >= 0 &&
            this.balance >= amount) {
            if (transactionOrigin != 3) {
                if (this.accountHistory.length < 6) {
                    if (today.getFullYear() - this.accountHolderBirthDate.getFullYear() < 60) {
                        this.balance -= (amount * 1.1);
                    }
                    else {
                        this.balance -= amount;
                    }
                    var transaction = {
                        success: true,
                        amount: (-1 * amount),
                        resultBalance: this.balance,
                        transactionDate: new Date(),
                        description: description,
                        errorMessage: ""
                    };
                    this.accountHistory.push(transaction);
                    return transaction;
                }
                else {
                    var transaction = {
                        success: false,
                        amount: (-1 * amount),
                        resultBalance: this.balance,
                        transactionDate: new Date(),
                        description: description,
                        errorMessage: "Maximum number of transatctions already reached."
                    };
                    return transaction;
                }
            }
            else {
                if (today.getFullYear() - this.accountHolderBirthDate.getFullYear() < 60) {
                    this.balance -= (amount * 1.1);
                }
                else {
                    this.balance -= amount;
                }
                var transaction = {
                    success: true,
                    amount: (-1 * amount),
                    resultBalance: this.balance,
                    transactionDate: new Date(),
                    description: description,
                    errorMessage: ""
                };
                return transaction;
            }
        }
        else {
            var transaction = {
                success: false,
                amount: (-1 * amount),
                resultBalance: this.balance,
                transactionDate: new Date(),
                description: description,
                errorMessage: "Transaction failed"
            };
            return transaction;
        }
    };
    ;
    RetirementAccount.prototype.depositMoney = function (amount, description) {
        if (amount >= 0) {
            this.balance += amount;
            var transaction = {
                success: true,
                amount: amount,
                resultBalance: this.balance,
                transactionDate: new Date(),
                description: description,
                errorMessage: ""
            };
        }
        else {
            var transaction = {
                success: false,
                amount: amount,
                resultBalance: this.balance,
                transactionDate: new Date(),
                description: description,
                errorMessage: "Please enter a valid amount"
            };
        }
        return transaction;
    };
    ;
    RetirementAccount.prototype.advanceDate = function (numberOfDays) {
        var today = new Date();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();
        today.setDate(today.getDate() + numberOfDays);
        var numberOfMonths = ((today.getMonth() + 1 - month) + ((today.getFullYear() - year) * 12));
        this.balance = this.balance * (1 + (Math.pow((0.03 / 12), numberOfMonths)));
    };
    ;
    return RetirementAccount;
}());
exports.RetirementAccount = RetirementAccount;
//# sourceMappingURL=classes.js.map