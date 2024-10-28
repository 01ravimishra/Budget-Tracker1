const expenseForm = document.getElementById('expense-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const totalExpensesDisplay = document.getElementById('total-expenses');
const expenseList = document.getElementById('expense-list');

let totalExpenses = 0;
let expenses = [];

expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);
    
    if (amount > 0) {
        expenses.push({ description, amount });
        totalExpenses += amount;
        
        updateUI();
        
        descriptionInput.value = '';
        amountInput.value = '';
    }
});

function updateUI() {
    totalExpensesDisplay.textContent = totalExpenses.toFixed(2);
    expenseList.innerHTML = '';

    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.textContent = `${expense.description}: $${expense.amount.toFixed(2)}`;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            totalExpenses -= expense.amount;
            expenses.splice(index, 1);
            updateUI();
        });

        li.appendChild(deleteButton);
        expenseList.appendChild(li);
    });
}
