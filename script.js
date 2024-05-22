document.addEventListener('DOMContentLoaded', () => {
    const temperatureInput = document.getElementById('temperature');
    const unitInput = document.getElementById('unit');
    const convertButton = document.getElementById('convert-button');
    const clearButton = document.getElementById('clr-button');
    const outputField1 = document.getElementById('output1');
    const outputField2 = document.getElementById('output2');

    function roundNumber(number) {
        return Math.round(number * 100) / 100;
    }

    function validateInput(input) {
        return !isNaN(input) && input.trim() !== '';
    }

    function convertTemperature() {
        const tempValue = temperatureInput.value;
        const unit = unitInput.value;

        if (!validateInput(tempValue)) {
            outputField1.value = 'Please enter a valid number';
            outputField2.value = '';
            return;
        }

        const temperature = parseFloat(tempValue);

        if (unit === 'celsius') {
            const fahrenheit = (temperature * 9/5) + 32;
            const kelvin = temperature + 273.15;
            outputField1.value = `${roundNumber(fahrenheit)} °F`;
            outputField2.value = `${roundNumber(kelvin)} K`;
        } else if (unit === 'fahrenheit') {
            const celsius = (temperature - 32) * 5/9;
            const kelvin = (temperature - 32) * 5/9 + 273.15;
            outputField1.value = `${roundNumber(celsius)} °C`;
            outputField2.value = `${roundNumber(kelvin)} K`;
        } else if (unit === 'kelvin') {
            const celsius = temperature - 273.15;
            const fahrenheit = (celsius * 9/5) + 32;
            outputField1.value = `${roundNumber(celsius)} °C`;
            outputField2.value = `${roundNumber(fahrenheit)} °F`;
        }
    }

    function clearFields() {
        temperatureInput.value = '';
        outputField1.value = '';
        outputField2.value = '';
    }

    convertButton.addEventListener('click', convertTemperature);
    clearButton.addEventListener('click', clearFields);
});
