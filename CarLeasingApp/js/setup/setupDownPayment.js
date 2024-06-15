export function setupDownPayment() {
    const downPaymentInput = document.getElementById('downPayment');
    const downPaymentFromTextInput = document.getElementById('downPaymentFromText');

    downPaymentInput.min = 10;
    downPaymentInput.max = 50;
    downPaymentInput.step = 5;
    downPaymentFromTextInput.value = downPaymentInput.min;
    downPaymentInput.value = downPaymentInput.min;

    downPaymentInput.addEventListener('input', () => {
        downPaymentFromTextInput.value = downPaymentInput.value;
    });

    downPaymentFromTextInput.addEventListener('change', () => {
        let downPaymentFromTextNumber = Number(downPaymentFromTextInput.value);

        if (downPaymentFromTextNumber < downPaymentInput.min) {
            downPaymentFromTextInput.value = downPaymentInput.min;
        } else if (downPaymentFromTextNumber > downPaymentInput.max) {
            downPaymentFromTextInput.value = downPaymentInput.max;
        } else if (downPaymentFromTextNumber % downPaymentInput.step !== 0) {
            downPaymentFromTextInput.value = Math.round(downPaymentFromTextNumber / downPaymentInput.step) * downPaymentInput.step;
        }

        downPaymentInput.value = downPaymentFromTextInput.value;
    });

    return { downPaymentInput, downPaymentFromTextInput };
}