function countVowelsAndConsonants() {
    const string = document.getElementById("stringInput").value;
    let vowelCount = 0;
    let consonantCount = 0;
  
    for (let char of string.toLowerCase()) {
      if (/[aeiou]/.test(char)) {
        vowelCount++;
      } else if (/[a-z]/.test(char)) {
        consonantCount++;
      }
    }
  
    document.getElementById("stringResult").textContent = `Vowels: ${vowelCount}, Consonants: ${consonantCount}`;
  }
  
  function checkPalindrome() {
    const numbers = document.getElementById("numberInput").value;
    const reversedNumbers = numbers.split("").reverse().join("");
  
    if (numbers === reversedNumbers) {
      document.getElementById("palindromeResult").textContent = "It's a palindrome.";
    } else {
      document.getElementById("palindromeResult").textContent = "It's not a palindrome.";
    }
  }
  
  function calculateTip() {
    const subtotal = parseFloat(document.getElementById("subtotalInput").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentageInput").value);
  
    if (isNaN(subtotal) || isNaN(tipPercentage)) {
      document.getElementById("tipResult").textContent = "Please enter valid numbers.";
      return;
    }
  
    const tip = subtotal * (tipPercentage / 100);
    const total = subtotal + tip;
  
    document.getElementById("tipResult").textContent = `Tip: $${tip.toFixed(2)}, Total: $${total.toFixed(2)}`;
  }