export function setupCarValue() {
    const carValueInput = document.getElementById('carValue');
    const carValueFromTextInput = document.getElementById('carValueFromText');

    carValueInput.min = 10000;
    carValueInput.max = 20000;
    carValueFromTextInput.value = carValueInput.min;
    carValueInput.value = carValueInput.min;

    carValueInput.addEventListener('input', () => {
        carValueFromTextInput.value = carValueInput.value;
    });

    carValueFromTextInput.addEventListener('change', () => {
        let carValueFromTextNumber = Number(carValueFromTextInput.value);

        if (carValueFromTextNumber < carValueInput.min) {
            carValueFromTextInput.value = carValueInput.min;
        } else if (carValueFromTextNumber > carValueInput.max) {
            carValueFromTextInput.value = carValueInput.max;
        }

        carValueInput.value = carValueFromTextInput.value;
    });

    return { carValueInput, carValueFromTextInput };
}