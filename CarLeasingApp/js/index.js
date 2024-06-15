import { setupCarType } from './setup/setupCarType.js';
import { setupLeasePeriod } from './setup/setupLeasePeriod.js';
import { setupCarValue } from './setup/setupCarValue.js';
import { setupDownPayment } from './setup/setupDownPayment.js';

const setup = {
    carTypeSelect: setupCarType(),
    leasePeriodSelect: setupLeasePeriod(),
    ...setupCarValue(),
    ...setupDownPayment()
};
