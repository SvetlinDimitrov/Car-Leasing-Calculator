import {setup} from "../setup";
import {businessComponents} from "./businessComponents.js";

export function updateInterestRate() {
    let rate = 0;
    if (setup.carTypeSelect.value === "brand new") {
        rate = 2.99;
    } else {
        rate = 3.7;
    }

    businessComponents.interestRate.textContent = `${rate}%`;

    // Create a new event
    const event = new Event('interestRateChanged');
    // Dispatch the event
    businessComponents.interestRate.dispatchEvent(event);
}

setup.carTypeSelect.addEventListener('change', updateInterestRate);
