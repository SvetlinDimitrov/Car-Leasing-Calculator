import {setup} from "../setup";
import {businessComponents} from "./businessComponents.js";

export function updateDownPayment() {
    const downPaymentValue = setup.carValueInput.value * setup.downPaymentInput.value / 100;
    businessComponents.downPayment.textContent = `${downPaymentValue.toFixed(2)}`;
}
setup.carValueInput.addEventListener('input', updateDownPayment);
setup.carValueFromTextInput.addEventListener('change', updateDownPayment);
setup.downPaymentInput.addEventListener('input', updateDownPayment);
setup.downPaymentFromTextInput.addEventListener('change', updateDownPayment);


