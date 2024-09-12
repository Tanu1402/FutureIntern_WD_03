document.getElementById('convertBtn').addEventListener('click', function() {
  const tempInput = document.getElementById('tempInput').value;
  const selectedUnit = document.getElementById('unit').value;
  const output = document.getElementById('output');

  // Input validation: Check if it's a number
  if (isNaN(tempInput) || tempInput === "") {
    output.textContent = "Please enter a valid number for temperature.";
    return;
  }

  const temp = parseFloat(tempInput);
  let convertedTemp = 0;

  // Conversion logic
  if (selectedUnit === 'Celsius') {
    convertedTemp = `Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)}°F, Kelvin: ${(temp + 273.15).toFixed(2)}K`;
  } else if (selectedUnit === 'Fahrenheit') {
    convertedTemp = `Celsius: ${((temp - 32) * 5/9).toFixed(2)}°C, Kelvin: ${(((temp - 32) * 5/9) + 273.15).toFixed(2)}K`;
  } else if (selectedUnit === 'Kelvin') {
    convertedTemp = `Celsius: ${(temp - 273.15).toFixed(2)}°C, Fahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)}°F`;
  }

  // Display result
  output.textContent = convertedTemp;
});
document.getElementById('resetBtn').addEventListener('click', function() {
  document.getElementById('tempInput').value = ""; // Clear the input field
  document.getElementById('unit').selectedIndex = 0; // Reset the dropdown to default (Celsius)
  document.getElementById('output').textContent = ""; // Clear the result display
});
document.getElementById('convertBtn').addEventListener('click', function() {
  const tempInput = document.getElementById('tempInput').value;
  const selectedUnit = document.getElementById('unit').value;
  const output = document.getElementById('output');

  // Input validation: Check if it's a number
  if (isNaN(tempInput) || tempInput === "") {
    output.textContent = "Please enter a valid number for temperature.";
    return;
  }

  const temp = parseFloat(tempInput);
  let convertedTemp = 0;

  // Conversion logic
  if (selectedUnit === 'Celsius') {
    convertedTemp = `Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)}°F, Kelvin: ${(temp + 273.15).toFixed(2)}K`;
  } else if (selectedUnit === 'Fahrenheit') {
    convertedTemp = `Celsius: ${((temp - 32) * 5/9).toFixed(2)}°C, Kelvin: ${(((temp - 32) * 5/9) + 273.15).toFixed(2)}K`;
  } else if (selectedUnit === 'Kelvin') {
    convertedTemp = `Celsius: ${(temp - 273.15).toFixed(2)}°C, Fahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)}°F`;
  }

  // Display result
  output.textContent = convertedTemp;
});
document.getElementById('resetBtn').addEventListener('click', function() {
  document.getElementById('tempInput').value = ""; // Clear the input field
  document.getElementById('unit').selectedIndex = 0; // Reset the dropdown to default (Celsius)
  document.getElementById('output').textContent = ""; // Clear the result display
});
