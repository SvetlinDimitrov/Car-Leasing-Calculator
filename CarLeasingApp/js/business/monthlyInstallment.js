import {setup} from "../setup";
import {businessComponents} from "./businessComponents.js";

export function calculateMonthlyInstallment() {
    /*
    Formula P = [r*PV] / [1 - (1 + r)^-n]
    P = monthly payment
    r = monthly interest rate
    PV is the present value, or principal amount of the loan
    n is the total number of payments (loan term in months)

    This formula is used to calculate the monthly payment of an amortizing loan,
     which is a loan where the principal is paid off over a certain period of time through regular payments.
     */
    const principal = setup.carValueInput.value - (setup.carValueInput.value * setup.downPaymentInput.value / 100);
    const annualInterestRate = parseFloat(businessComponents.interestRate.textContent) / 100;
    const monthlyInterestRate = annualInterestRate / 12;
    const numberOfPayments = setup.leasePeriodSelect.value;

    const monthlyInstallmentValue = (monthlyInterestRate * principal) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    businessComponents.monthlyInstallment.textContent = `${monthlyInstallmentValue.toFixed(2)}`;
}
setup.leasePeriodSelect.addEventListener('change', calculateMonthlyInstallment);
setup.carValueInput.addEventListener('input', calculateMonthlyInstallment);
setup.carValueFromTextInput.addEventListener('change', calculateMonthlyInstallment);
setup.downPaymentInput.addEventListener('input', calculateMonthlyInstallment);
setup.downPaymentFromTextInput.addEventListener('change', calculateMonthlyInstallment);
businessComponents.interestRate.addEventListener('change', calculateMonthlyInstallment);