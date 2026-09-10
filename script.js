// Starting demo balance
let balance = 10000;

function updateDisplay() {
  document.getElementById("userBalance").innerText = "₹" + balance.toLocaleString("en-IN");
}

function handleInvest(price, dailyReturn) {
  if (balance >= price) {
    balance -= price;
    updateDisplay();
    alert("✅ Invest Successful!\nCost: ₹" + price + "\nExpected Return: ₹" + dailyReturn);
  } else {
    let required = price - balance;
    alert("❌ Low Balance!\nAapko ₹" + required + " aur recharge karne ki zaroorat hai.");
  }
}
