import {setupCarType} from './setupCarType.js';
import {setupLeasePeriod} from './setupLeasePeriod.js';
import {setupCarValue} from './setupCarValue.js';
import {setupDownPayment} from './setupDownPayment.js';

const setup = {
    /** @type {HTMLSelectElement} */
    carTypeSelect: setupCarType(),
    /** @type {HTMLSelectElement} */
    leasePeriodSelect: setupLeasePeriod(),
    /** @type {{carValueInput: HTMLInputElement, carValueFromTextInput: HTMLInputElement}} */
    ...setupCarValue(),
    /** @type {{downPaymentInput: HTMLInputElement, downPaymentFromTextInput: HTMLInputElement}} */
    ...setupDownPayment()
};

export {setup};


