import {updateDownPayment} from "./business/downPayment.js";
import {updateInterestRate} from "./business/interestedRate.js";
import {calculateMonthlyInstallment} from "./business/monthlyInstallment.js";
import {calculateTotalLeasingCost} from "./business/totalLeasing.js";

updateDownPayment();
updateInterestRate();
calculateMonthlyInstallment()
calculateTotalLeasingCost();



