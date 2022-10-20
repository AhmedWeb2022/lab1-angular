class Account {
  Acc_no: number = 0;
  Balance: string = "";
  constructor(acc = 10, balance = "good") {
    this.Acc_no = acc;
    this.Balance = balance;
  }
  debitAmount(): string {
    return this.Balance;
  }
  creditAmount() {
    return this.Acc_no;
  }
  getBalance() {
    return this.Balance;
  }
}
interface Acccount {
  date_os_oppining: string;
  addCustomer();
  removeCustomer();
}

class Current_Account extends Account implements Acccount {
  date_os_oppining: string;
  interest_rate: number;
  addCustomer() {
    throw new Error("Method not implemented.");
  }
  removeCustomer() {
    throw new Error("Method not implemented.");
  }
}
class Saving_Account extends Account implements Acccount {
  date_os_oppining: string;
  Min_Balance: number;
  addCustomer() {
    throw new Error("Method not implemented.");
  }
  removeCustomer() {
    throw new Error("Method not implemented.");
  }
}
