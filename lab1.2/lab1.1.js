class Account {
    constructor(acc = 10, balance = "good") {
        this.Acc_no = 0;
        this.Balance = "";
        this.Acc_no = acc;
        this.Balance = balance;
    }
    debitAmount() {
        return this.Balance;
    }
    creditAmount() {
        return this.Acc_no;
    }
    getBalance() {
        return this.Balance;
    }
}
class Current_Account extends Account {
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
}
class Saving_Account extends Account {
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
}
