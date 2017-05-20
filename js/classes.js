"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CheckingAccount = (function () {
    function CheckingAccount(name, birthday, initialBalance, accountType) {
        if (accountType === void 0) { accountType = 1; }
        this.accountHolderName = name;
        this.balance = initialBalance;
        this.accountHolderBirthDate = birthday;
        this.accountType = accountType;
    }
    CheckingAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
    };
    ;
    CheckingAccount.prototype.depositMoney = function (amount, description) {
    };
    ;
    CheckingAccount.prototype.advanceDate = function (numberOfDays) {
    };
    ;
    return CheckingAccount;
}());
exports.CheckingAccount = CheckingAccount;
var SavingsAccount = (function () {
    function SavingsAccount() {
    }
    SavingsAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
    };
    ;
    SavingsAccount.prototype.depositMoney = function (amount, description) {
    };
    ;
    SavingsAccount.prototype.advanceDate = function (numberOfDays) {
    };
    ;
    return SavingsAccount;
}());
exports.SavingsAccount = SavingsAccount;
var RetirementAccount = (function () {
    function RetirementAccount() {
    }
    RetirementAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
    };
    ;
    RetirementAccount.prototype.depositMoney = function (amount, description) {
    };
    ;
    RetirementAccount.prototype.advanceDate = function (numberOfDays) {
    };
    ;
    return RetirementAccount;
}());
exports.RetirementAccount = RetirementAccount;
//# sourceMappingURL=classes.js.map