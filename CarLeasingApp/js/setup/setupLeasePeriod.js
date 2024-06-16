export function setupLeasePeriod() {
    const leasePeriodSelect = document.getElementById('leasePeriod');
    const leasePeriods = [
        { value: '12', text: '12' },
        { value: '24', text: '24' },
        { value: '36', text: '36' },
        { value: '48', text: '48' },
        { value: '60', text: '60' },
    ];

    leasePeriods.forEach(leasePeriod => {
        const option = document.createElement('option');
        option.value = leasePeriod.value;
        option.text = leasePeriod.text;
        leasePeriodSelect.appendChild(option);
    });

    return leasePeriodSelect;
}