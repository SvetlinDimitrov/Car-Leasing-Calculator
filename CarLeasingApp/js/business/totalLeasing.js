import {setup} from "../setup";
import {businessComponents} from "./businessComponents.js";

export function calculateTotalLeasingCost() {
    const monthlyInstallmentValue = parseFloat(businessComponents.monthlyInstallment.textContent);
    const numberOfPayments = setup.leasePeriodSelect.value;
    const downPaymentValue = parseFloat(businessComponents.downPayment.textContent);

    const totalCostValue = (monthlyInstallmentValue * numberOfPayments) + downPaymentValue;

    businessComponents.totalLeasingCost.textContent = `${totalCostValue.toFixed(2)}`;
}
setup.leasePeriodSelect.addEventListener('change', calculateTotalLeasingCost);
setup.carValueInput.addEventListener('input', calculateTotalLeasingCost);
setup.carValueFromTextInput.addEventListener('change', calculateTotalLeasingCost);
setup.downPaymentInput.addEventListener('input', calculateTotalLeasingCost);
setup.downPaymentFromTextInput.addEventListener('change', calculateTotalLeasingCost);
businessComponents.interestRate.addEventListener('interestRateChanged', calculateTotalLeasingCost);