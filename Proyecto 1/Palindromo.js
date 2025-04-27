
const inputElement = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultElement = document.getElementById('result');

checkButton.addEventListener('click', () => {
    const inputText = inputElement.value;
    if (!inputText) {
        alert('Por favor, ingresa una frase.');
        return;
    }
    else{
    const cleanedText = inputText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const isPalindrome = cleanedText === cleanedText.split('').reverse().join('');
    resultElement.textContent = isPalindrome ? `La frase "${inputText}" es un palíndromo` : `La frase "${inputText}" no es un palíndromo`;}
});