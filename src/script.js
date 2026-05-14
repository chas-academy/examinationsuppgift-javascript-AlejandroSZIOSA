const inputDescEl = document.getElementById("desc");
const inputAmountEl = document.getElementById("amount");

const incomeBtnEl = document.getElementById("incomeBtn");
const expenseBtnEl = document.getElementById("expenseBtn");

const incomeListEl = document.getElementById("incomeList");
const expenseListEl = document.getElementById("expenseList");

const totalAmountEl = document.getElementById("balance");

let incomes = [];
let expenses = [];

let totalAmountSaldo = 0;

incomeBtnEl.addEventListener("click", () => {
  const amount = inputAmountEl.value.trim();
  const description = inputDescEl.value.trim();

  const parsedAmount = Number(amount);

  if (!Number.isNaN(parsedAmount) && amount && description) {
    const transaction = {
      description,
      amount: parsedAmount,
    };
    incomes.push(transaction);
    calculateTotalAmount(parsedAmount, "income");
    renderLists();
    clearInputs();
  }
});

expenseBtnEl.addEventListener("click", () => {
  const description = inputDescEl.value.trim();
  const amount = inputAmountEl.value.trim();

  const parsedAmount = Number(amount);

  if (description && amount && !Number.isNaN(parsedAmount)) {
    const transaction = {
      description,
      amount: parsedAmount,
    };
    expenses.push(transaction);
    calculateTotalAmount(parsedAmount, "expense");
    renderLists();
    clearInputs();
  }
});

const calculateTotalAmount = (a, variant) => {
  if (variant === "income") {
    totalAmountSaldo += a;
    totalAmountEl.textContent = totalAmountSaldo;
  } else {
    totalAmountSaldo -= a;
    totalAmountEl.textContent = totalAmountSaldo;
  }
};

const clearInputs = () => {
  inputAmountEl.value = "";
  inputDescEl.value = "";
};

const renderLists = () => {
  incomeListEl.innerHTML = "";
  expenseListEl.innerHTML = "";
  incomes.forEach((i) => {
    const li = document.createElement("li");
    li.textContent = `${i.description} - ${i.amount} kr (Inkomst)`;
    incomeListEl.appendChild(li);
  });

  expenses.forEach((e) => {
    const li = document.createElement("li");
    li.textContent = `${e.description} - ${e.amount} kr (Utgift)`;
    expenseListEl.appendChild(li);
  });
};
