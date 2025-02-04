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
    ["PENNY", 0.01]
  ];

function checkCashRegister(price, cash, cid) {
  // calc change and total cash on cid 
  let change = cash - price;
  let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0);

  // 3 case scenarios
  // not enough
  if (totalCid < change) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // exact
  if (totalCid === change) {
    return { status: "CLOSED", change: [...cid] };
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
    return { status: "OPEN", change: result };
  } else {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
}
