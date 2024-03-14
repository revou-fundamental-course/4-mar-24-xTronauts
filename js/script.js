document.addEventListener('DOMContentLoaded', (event) => {
    const submitButton = document.getElementById('submit-button');
    const resetButton = document.getElementById('reset-button');
    const genderInputs = document.querySelectorAll('input[name="sex"]');
    const heightInput = document.querySelector('.form-item[name="height"]');
    const weightInput = document.querySelector('.form-item[name="weight"]');
    const ageInput = document.querySelector('.form-item[name="age"]');

    function calculateBMI(weight, height) {
        height = height / 100; // Convert height from cm to meters for BMI calculation
        let bmi = weight / (height * height);
        return bmi;
    }

    function getBMICategory(bmi) {
        if (bmi < 18.5) {
            return 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            return 'Normal (Ideal)';
        } else if (bmi >= 25 && bmi < 30) {
            return 'Overweight';
        } else {
            return 'Obese';
        }
    }

    submitButton.addEventListener('click', () => {
        // Check if gender is selected
        let genderSelected = false;
        for (const genderInput of genderInputs) {
            if (genderInput.checked) {
                genderSelected = true;
                break;
            }
        }

        // Check if height, weight, and age are filled
        if (!genderSelected || !heightInput.value || !weightInput.value || !ageInput.value) {
            alert('You need to fill all the information.');
        } else {
            // Proceed with calculation
            let bmi = calculateBMI(weightInput.value, heightInput.value);
            let category = getBMICategory(bmi);
            console.log(`BMI: ${bmi.toFixed(2)}, Category: ${category}`);
        }
    });

    resetButton.addEventListener('click', () => {
        // Reset all fields
        genderInputs.forEach(input => input.checked = false);
        heightInput.value = '';
        weightInput.value = '';
        ageInput.value = '';
    });
});