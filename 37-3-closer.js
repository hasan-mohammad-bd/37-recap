//closer
const bank = (owner) => {
  balance = 0;
  return (amount) => {
    balance += amount;
    return balance;
  };
};

const MofijBank = bank("Mofij");
console.log(MofijBank(100));
console.log(MofijBank(300));
console.log(MofijBank.balance); //here mofijBank.balance can't be accessed
console.log(MofijBank(200));

//old ways and adding withdraw functionality.
//closer
const bank2 = (owner) => {
  balance = 0;
  return {
    deposit: (amount) => {
      balance += amount;
      return balance;
    },
    withdraw: (amount) => {
      balance -= amount;
      return balance;
    },
  };
};

const MofijBank2 = bank2("Mofij");
console.log(MofijBank2.deposit(100));
console.log(MofijBank2.deposit(300));
console.log(MofijBank2.deposit.balance); //here mofijBank.balance can't be accessed
console.log(MofijBank2.deposit(200));
console.log(MofijBank2.withdraw(200));

//closer: if a function(2) called id called from another function(1), with function(2), function(1) can be modified, but can't be accessed the function(1) parameter value.