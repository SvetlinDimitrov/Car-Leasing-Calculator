export function setupCarType() {
    const carTypeSelect = document.getElementById('carType');
    const carTypes = [
        { value: '', text: 'Select a type' },
        { value: 'brand new', text: 'Brand New' },
        { value: 'used', text: 'Used' },
    ];

    carTypes.forEach(carType => {
        const option = document.createElement('option');
        option.value = carType.value;
        option.text = carType.text;
        carTypeSelect.appendChild(option);
    });

    return carTypeSelect;
}