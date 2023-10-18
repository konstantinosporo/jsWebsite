
class User {
  constructor(userID, userName, userPassword,userType) {
    this.userID = userID;
    this.userName = userName;
    this.userPassword = userPassword;
    this.userType = userType;
  }
}

class Admin extends User {
  static counterAdmin=0;
  constructor(userName, userPassword){
    super(Admin.getNextAdminID(), userName, userPassword,0);
  }
  static getNextAdminID(){
    return ++Admin.counterAdmin;
  }
  static signUpAdmin(){
    const userName = document.querySelector("#Name").value;
    const userPassword = document.querySelector("#Password").value;

    const newAdmin = new Admin(userName,userPassword);
    alert(newAdmin.userName);
    
  }
}

class Customer extends User {
  static counterCustomer=0;
  constructor(userName, userPassword){
    super(Customer.getNextCustomerID(), userName, userPassword,1);
  }
  static getNextCustomerID(){
    return ++Customer.counterCustomer;
  }
  static signUpCustomer(){
    const userName = document.querySelector("#Name").value;
    const userPassword = document.querySelector("#Password").value;

    const newCustomer = new Customer(userName,userPassword);
    alert(newCustomer.userName);
    
  }
}

/* The methods for userSign ins /ups

function signin(userName, userPassword) {
  let x = 1;
}

function signup() {
  let y = 1;
}

*/



