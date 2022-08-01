"use strict";

const assert = require("assert");
const { normalize } = require("path");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// BankAccount class - This class represents a bank account.

class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
  }
  // This method does not take any input, and returns the current balance on the account. The balance is computed by summing up the amounts in the transactions array.
  balance() {
    let sum = 0;
    for (let i = 0; i < this.transactions.length; i++) {
      sum += this.transactions[i].amount;
    }
    return sum;
  }
  //This method takes in a single input, the deposit amount. This method should create a new transaction representing the deposit, and add it to the transactions array.You should not be able to deposit a negative amount
  deposit(amt) {
    if (amt > 0) {
      let depositTransaction = new Transaction(amt, "Deposit");
      this.transactions.push(depositTransaction);
    }
  }
  //This method takes in the payee and amount, creates a new transaction with the payee and amount, and adds the transaction to the transaction array.You should not be able to charge an amount that would make your balance dip below 0
  charge(payee, amt) {
    let currentBalance = this.balance();
    if (amt <= currentBalance) {
      let chargeTransaction = new Transaction(-amt, payee);
      this.transactions.push(chargeTransaction);
    }
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
// const payee1Transaction1 = new Transaction(25, "Bill");
// console.log(payee1Transaction1);

// TESTS
if (typeof describe === "function") {
  describe("#testing account creation", () => {
    it("should create a new account correctly", () => {
      let acct1 = new BankAccount("xx4432", "James Doe");
      assert.equal(acct1.owner, "James Doe");
      assert.equal(acct1.accountNumber, "xx4432");
      assert.equal(acct1.transactions.length, 0);
      assert.equal(acct1.balance(), 0);
    });
  });
  describe("#testing account balance", () => {
    it("should create a new account correctly", () => {
      let acct1 = new BankAccount("xx4432", "James Doe");
      assert.equal(acct1.balance(), 0);
      acct1.deposit(100);
      assert.equal(acct1.balance(), 100);
      acct1.charge("Target", 10);
      assert.equal(acct1.balance(), 90);
    });
    it("should not allow negative deposit", () => {
      let acct1 = new BankAccount("xx4432", "James Doe");
      assert.equal(acct1.balance(), 0);
      acct1.deposit(100);
      assert.equal(acct1.balance(), 100);
      acct1.deposit(-30);
      assert.equal(acct1.balance(), 100);
    });
    it("should not allow charging to overdraft", () => {
      let acct1 = new BankAccount("xx4432", "James Doe");
      assert.equal(acct1.balance(), 0);
      acct1.charge("Target", 30);
      assert.equal(acct1.balance(), 0);
    });
    it("should allow a refund", () => {
      let acct1 = new BankAccount("xx4432", "James Doe");
      assert.equal(acct1.balance(), 0);
      acct1.charge("Target", -30);
      assert.equal(acct1.balance(), 30);
    });
  });

  describe("#Testing transaction creation", () => {
    it("Should create a transaction correctly for deposit", () => {
      let t1 = new Transaction(30, "Deposit");
      assert.equal(t1.amount, 30);
      assert.equal(t1.payee, "Deposit");
      assert.notEqual(t1.date, undefined);
      assert.notEqual(t1.date, null);
    });
  });
  it("Should create a transaction correctly for charge", () => {
    let t1 = new Transaction(-34.45, "Target");
    assert.equal(t1.amount, -34.45);
    assert.equal(t1.payee, "Target");
    assert.notEqual(t1.date, undefined);
    assert.notEqual(t1.date, null);
  });
}
