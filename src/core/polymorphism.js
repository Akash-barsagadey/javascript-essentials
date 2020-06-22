class Department {
  display() {
    console.log("employees in");
  }
}

class ITDepartment extends Department {
  display() {
    console.log("employees in IT Department");
  }
}

class AccountingDepartment extends Department {
  display() {
    console.log("employees in Accounting Department");
  }
}

const obj = [new ITDepartment(), new AccountingDepartment()];

obj.forEach((msg) => {
  msg.display();
});

/* 
Output:
employees in IT Department
VM342:15 employees in Accounting Department */
