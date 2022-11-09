window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const defaultValue = {amount:200000, years:30, rate:0.05};
  const amountUI = document.getElementById("loan-amount");
  amountUI.value = defaultValue.amount;
  const yearsUI = document.getElementById("loan-years");
  yearsUI.value = defaultValue.years;
  const rateUI = document.getElementById("loan-rate");
  rateUI.value = defaultValue.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const curUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(curUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const periRate = values.rate/12;
  const totalPay = values.years*12;
  return ((values.amount*periRate)/(1-(1+periRate)**-totalPay)).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const spanValue = document.getElementById("monthly-payment");
  spanValue.textContent = monthly;
}
