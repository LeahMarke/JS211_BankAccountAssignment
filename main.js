"use strict";
// BankAccount class - This class represents a bank account.

//
class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
  }
  // This method does not take any input, and returns the current balance on the account. The balance is computed by summing up the amounts in the transactions array.
  balance() {
    let sum = 0;
    for (const value of arr) {
      sum += value;
    }
    console.log(sum);
  }
  //This method takes in a single input, the deposit amount. This method should create a new transaction representing the deposit, and add it to the transactions array.You should not be able to deposit a negative amount
  deposit(dep) {
    if (dep > 0) {
      this.transactions.push(dep);
    } else {
      console.log("Minimum deposit = $1");
    }
  }
  //This method takes in the payee and amount, creates a new transaction with the payee and amount, and adds the transaction to the transaction array.You should not be able to charge an amount that would make your balance dip below 0
  charge(payee, amount) {
    this.transactions.push(amount);
  }
}

// This class represents a single transaction in a bank account.

class Transaction {
  constructor(amount, payee) {
    this.amount = amount;
    this.payee = payee;
    // set date to current date automatically
    this.date = new Date();
    // Positive amounts are money going into the account (deposit, refund). Negative amounts are money coming out of the account (a charge or debit).
  }
  method() {
    console.log(`${this.date}: ${this.payee} ${this.amount}`);
  }
}
const payee1Transaction1 = new Transaction(25, "Bill");
console.log(payee1Transaction1);

// TESTS
describe("#testing account creation", function () {
  it("should create a new account correctly", function () {
    let acct1 = new BankAccount("xx4432", "James Doe");
    assert.equal(acct1.owner, "James Doe");
    assert.equal(acct1.accountNumber, "xx4432");
    assert.equal(acct1.transactions.length, 0);
  });
});

describe("#Testing transaction creation", function () {
  it("Should create a transaction correctly for deposit", function () {
    let t1 = new Transaction(30, "Deposit");
    assert.equal(t1.amount, 30);
    assert.equal(t1.payee, "Deposit");
    assert.notEqual(t1.date, undefined);
    assert.notEqual(t1.date, null);
  });
});
