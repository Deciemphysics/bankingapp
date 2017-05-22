import {Account, Transaction} from './interfaces';
import {AccountType, TransactionOrigin} from "./enums";

class CheckingAccount implements Account {
        constructor(name: string, birthday: string){
            this.accountHolderName = name;
            this.balance = 1000;
            this.accountHolderBirthDate = new Date(birthday);
            this.accountType = 1;
        }
        accountHolderName: string;
        accountHolderBirthDate: Date;
        balance: number;
        accountType: AccountType;
        accountHistory : Transaction[] = [];
        withdrawMoney(amount: number, 
                    description: string, 
                    transactionOrigin: TransactionOrigin) : Transaction {

            if ( this.balance >= amount && amount > 0){
                this.balance -= amount;
                var transaction : Transaction = {
                    success: true,
                    amount: (-1 * amount),
                    resultBalance: this.balance,
                    transactionDate: new Date(),
                    description: description,
                    errorMessage: ""
                };
            } else {
                var transaction : Transaction = {
                    success: false,
                    amount: amount,
                    resultBalance: this.balance,
                    transactionDate: new Date(),
                    description: description,
                    errorMessage: "Not enough funds"
                }
                if ( amount >= 0){
                    transaction.errorMessage = "Please enter a positive value for amount";
                }
            }
                this.accountHistory.push(transaction);
                return transaction;
        };
        depositMoney(amount: number,
                    description: string) : Transaction {
            if ( amount >= 0 ){
                this.balance += amount;
                var transaction : Transaction = {
                    success: true,
                    amount: amount,
                    resultBalance: this.balance,
                    transactionDate: new Date(),
                    description: description,
                    errorMessage: ""
                };
            } else {
                var transaction : Transaction = {
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
        advanceDate(numberOfDays: number) {
            var today : Date = new Date();
            var month : number = today.getMonth() + 1;
            var year : number = today.getFullYear();
            today.setDate(today.getDate() + numberOfDays);
            var numberOfMonths : number = ((today.getMonth() + 1 - month) + ((today.getFullYear() - year)*12));
            this.balance = this.balance * ( 1 + ((0.01/12)**numberOfMonths));
        };
}

class SavingsAccount implements Account {
    constructor(name: string, birthday: string){
        this.accountHolderName = name;
        this.balance = 10000;
        this.accountHolderBirthDate = new Date(birthday);
        this.accountType = 2;
    }
    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number;
    accountType: AccountType;
    accountHistory : Transaction[] = [];
    withdrawMoney(amount: number, 
                  description: string, 
                  transactionOrigin: TransactionOrigin) : Transaction {
        if ( amount >= 0 &&
             this.balance >= amount ){
                if ( transactionOrigin != 3 ){
                    if ( this.accountHistory.length < 6 ){
                        this.balance -= amount;
                        var transaction : Transaction = {
                            success: true,
                            amount: (-1 * amount),
                            resultBalance: this.balance,
                            transactionDate: new Date(),
                            description: description,
                            errorMessage: ""
                        };
                        this.accountHistory.push(transaction);
                        return transaction;
                    } else {
                        var transaction : Transaction = {
                            success: false,
                            amount: (-1 * amount),
                            resultBalance: this.balance,
                            transactionDate: new Date(),
                            description: description,
                            errorMessage: "Maximum number of transatctions already reached."
                        };
                        return transaction;
                    }
                } else {
                    this.balance -= amount;
                    var transaction : Transaction = {
                        success: true,
                        amount: (-1 * amount),
                        resultBalance: this.balance,
                        transactionDate: new Date(),
                        description: description,
                        errorMessage: ""
                    };
                    return transaction;
                }
             
             } else {
                var transaction : Transaction = {
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
    depositMoney(amount: number,
                 description: string) : Transaction {
        if ( amount >= 0 ){
            this.balance += amount;
            var transaction : Transaction = {
                success: true,
                amount: amount,
                resultBalance: this.balance,
                transactionDate: new Date(),
                description: description,
                errorMessage: ""
            };
        } else {
            var transaction : Transaction = {
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
    advanceDate(numberOfDays: number) {
        var today : Date = new Date();
        var month : number = today.getMonth() + 1;
        var year : number = today.getFullYear();
        today.setDate(today.getDate() + numberOfDays);
        var numberOfMonths : number = ((today.getMonth() + 1 - month) + ((today.getFullYear() - year)*12));
        this.balance = this.balance * ( 1 + ((0.02/12)**numberOfMonths));
    };
}

class RetirementAccount implements Account {
    constructor(name: string, birthday: string){
        this.accountHolderName = name;
        this.balance = 100000;
        this.accountHolderBirthDate = new Date(birthday);
        this.accountType = 3;
    }
    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number;
    accountType: AccountType;
    withdrawMoney(amount: number, 
                  description: string, 
                  transactionOrigin: TransactionOrigin) : Transaction {
        var today: Date = new Date();
        if ( amount >= 0 &&
             this.balance >= amount ){
                if ( transactionOrigin != 3 ){
                    if ( this.accountHistory.length < 6 ){
                        if ( today.getFullYear() - this.accountHolderBirthDate.getFullYear() < 60){
                            this.balance -= (amount * 1.1);
                        } else {
                            this.balance -= amount;
                        }
                        var transaction : Transaction = {
                            success: true,
                            amount: (-1 * amount),
                            resultBalance: this.balance,
                            transactionDate: new Date(),
                            description: description,
                            errorMessage: ""
                        };
                        this.accountHistory.push(transaction);
                        return transaction;
                    } else {
                        var transaction : Transaction = {
                            success: false,
                            amount: (-1 * amount),
                            resultBalance: this.balance,
                            transactionDate: new Date(),
                            description: description,
                            errorMessage: "Maximum number of transatctions already reached."
                        };
                        return transaction;
                    }
                } else {
                    if ( today.getFullYear() - this.accountHolderBirthDate.getFullYear() < 60){
                        this.balance -= (amount * 1.1);
                    } else {
                        this.balance -= amount;
                    }
                    var transaction : Transaction = {
                        success: true,
                        amount: (-1 * amount),
                        resultBalance: this.balance,
                        transactionDate: new Date(),
                        description: description,
                        errorMessage: ""
                    };
                    return transaction;
                }
             
             } else {
                var transaction : Transaction = {
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
    depositMoney(amount: number,
                 description: string) : Transaction {
        if ( amount >= 0 ){
            this.balance += amount;
            var transaction : Transaction = {
                success: true,
                amount: amount,
                resultBalance: this.balance,
                transactionDate: new Date(),
                description: description,
                errorMessage: ""
            };
        } else {
            var transaction : Transaction = {
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
    accountHistory : Transaction[] = [];
    advanceDate(numberOfDays: number) {
        var today : Date = new Date();
        var month : number = today.getMonth() + 1;
        var year : number = today.getFullYear();
        today.setDate(today.getDate() + numberOfDays);
        var numberOfMonths : number = ((today.getMonth() + 1 - month) + ((today.getFullYear() - year)*12));
        this.balance = this.balance * ( 1 + ((0.03/12)**numberOfMonths));
    };
}
export { CheckingAccount, SavingsAccount, RetirementAccount };