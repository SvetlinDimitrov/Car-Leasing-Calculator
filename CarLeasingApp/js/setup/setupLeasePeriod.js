export function setupLeasePeriod() {
    const leasePeriodSelect = document.getElementById('leasePeriod');
    const leasePeriods = [
        { value: '', text: 'Select a period' },
        { value: '12', text: '12 months' },
        { value: '24', text: '24 months' },
        { value: '36', text: '36 months' },
        { value: '48', text: '48 months' },
        { value: '60', text: '60 months' },
    ];

    leasePeriods.forEach(leasePeriod => {
        const option = document.createElement('option');
        option.value = leasePeriod.value;
        option.text = leasePeriod.text;
        leasePeriodSelect.appendChild(option);
    });

    return leasePeriodSelect;
}