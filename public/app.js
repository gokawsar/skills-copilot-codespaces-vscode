// Greeting functionality
document.getElementById('greetBtn').addEventListener('click', async () => {
    const nameInput = document.getElementById('nameInput');
    const resultDiv = document.getElementById('greetingResult');
    const name = nameInput.value.trim();

    if (!name) {
        resultDiv.textContent = 'Please enter a name!';
        resultDiv.className = 'result error';
        return;
    }

    try {
        const response = await fetch(`/api/greet/${encodeURIComponent(name)}`);
        const data = await response.json();
        
        resultDiv.textContent = data.message;
        resultDiv.className = 'result success';
    } catch (error) {
        resultDiv.textContent = 'Error connecting to server';
        resultDiv.className = 'result error';
    }
});

// Allow Enter key for greeting
document.getElementById('nameInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('greetBtn').click();
    }
});

// Factorial calculation functionality
document.getElementById('calcBtn').addEventListener('click', async () => {
    const numberInput = document.getElementById('numberInput');
    const resultDiv = document.getElementById('factorialResult');
    const number = numberInput.value;

    if (number === '') {
        resultDiv.textContent = 'Please enter a number!';
        resultDiv.className = 'result error';
        return;
    }

    try {
        const response = await fetch(`/api/factorial/${number}`);
        const data = await response.json();
        
        if (data.error) {
            resultDiv.textContent = data.error;
            resultDiv.className = 'result error';
        } else {
            resultDiv.textContent = `The factorial of ${data.number} is ${data.factorial}`;
            resultDiv.className = 'result success';
        }
    } catch (error) {
        resultDiv.textContent = 'Error connecting to server';
        resultDiv.className = 'result error';
    }
});

// Allow Enter key for factorial calculation
document.getElementById('numberInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('calcBtn').click();
    }
});
