const cashInput = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");
const priceScreen = document.getElementById("price-screen");
const cashDrawerDisplay = document.getElementById("cash-drawer-display");

const price = 19.5;
priceScreen.textContent = `Total: $${price}`;

const getCash = () => {
  return cashInput.value;
};

const resetChange = () => {
  changeDue.textContent = "";
};

const displayCashDrawer = (cid) => {
  for (let i = 0; i < cid.length; i++) {
    cashDrawerDisplay.innerHTML += `
    <li>${cid[i][0]}: $${cid[i][1]}</li>
    `;
  }
};

const displayChange = (data) => {
  if (data.status === "INSUFFICIENT_FUNDS") {
    changeDue.innerHTML = `
      <p>Status: ${data.status}</p>
    `;
  }

  if (data.status === "CLOSED") {
    changeDue.innerHTML = `
      <p>Status: ${data.status}</p>
    `;

    for (let i = data.change.length - 1; i >= 0; i--) {
      if (data.change[i][1] === 0) {
        continue;
      }
      changeDue.innerHTML += `
    <p>${data.change[i][0]}: $${data.change[i][1]}</p>
    `;
    }
  }

  if (data.status === "OPEN") {
    console.log(data.change.length);
    if (data.change.length === 0) {
      changeDue.innerHTML += `
      <p>No change due - customer paid with exact cash</p>
    `;
      return;
    } else {
      changeDue.innerHTML = `
      <p>Status: ${data.status}</p>
    `;

      if (data.change.length === 1) {
        changeDue.innerHTML += `
      <p>${data.change[0][0]}: $${data.change[0][1]}</p>
      `;
        return;
      }

      for (let i = data.change.length - 1; i >= 0; i--) {
        changeDue.innerHTML += `
      <p>${data.change[i][0]}: $${data.change[i][1]}</p>
      `;
      }
    }
  }
};

purchaseBtn.addEventListener("click", () => {
  resetChange();
  cashDrawerDisplay.innerHTML = "";

  const data = checkCashRegister(price, getCash(), cid);

  console.log(data);
  displayChange(data);
  cashInput.value = "";
});

// currencies
const currencyUnits = [
  ["ONE HUNDRED", 100.0],
  ["TWENTY", 20.0],
  ["TEN", 10.0],
  ["FIVE", 5.0],
  ["ONE", 1.0],
  ["QUARTER", 0.25],
  ["DIME", 0.1],
  ["NICKEL", 0.05],
  ["PENNY", 0.01],
];

let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

/* // testing purposes
let cid = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]; */

function checkCashRegister(price, cash, cid) {
  // calc change and total cash on cid
  let change = cash - price;
  let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0);

  // 3 case scenarios
  // not enough
  if (totalCid < change) {
    displayCashDrawer(cid);
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // exact
  if (totalCid === change) {
    const oldCid = JSON.parse(JSON.stringify(cid));

    for (let index = 0; index < cid.length; index++) {
      cid[index][1] = 0;
    }

    displayCashDrawer(cid);

    return { status: "CLOSED", change: [...oldCid] };
  }

  let result = [];
  for (let i = 0; i < currencyUnits.length; i++) {
    let currName = currencyUnits[i][0];
    let currValue = currencyUnits[i][1];
    let currInCid = 0;

    for (let j = 0; j < cid.length; j++) {
      if (cid[j][0] === currName) {
        currInCid = cid[j][1];
        break;
      }
    }

    if (change >= currValue && currInCid > 0) {
      let count = 0;
      while (change >= currValue && currInCid > 0) {
        count++;
        change -= currValue;
        change = Math.round(change * 100) / 100;
        currInCid -= currValue;
        currInCid = Math.round(currInCid * 100) / 100;
      }
      result.push([currName, count * currValue]);
    }
  }

  // enough cash or not exact change
  if (change === 0) {
    displayCashDrawer(cid);
    return { status: "OPEN", change: result };
  } else {
    displayCashDrawer(cid);
    alert("Customer does not have enough money to purchase the item");
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
}

displayCashDrawer(cid);
