const inputElement = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultElement = document.getElementById('result');

checkButton.addEventListener('click', () => {
    const inputText = inputElement.value.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (!inputText) {
        alert('Please input a value');
        return;
    }

    const reversedText = inputText.split('').reverse().join('');
    if (inputText === reversedText) {
        resultElement.textContent = `${inputElement.value} is a palindrome`;
    } else {
        resultElement.textContent = `${inputElement.value} is not a palindrome`;
    }
});
