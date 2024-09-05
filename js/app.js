const formSubmit = document.getElementById('form-submit');
const discountPercentage = 0.20;

const calculate = (e) => {
    e.preventDefault();
    const type = document.getElementById('type');
    const plan = parseFloat(type.value);
    var years = parseInt(document.getElementById('years').value);
    if (isNaN(years) || years <= 0) {
        alert('Please enter a valid number of years!');
        return;
    }
    let subtotal = plan * years;
    let discount = 0;
    if(years > 1) {
        discount = subtotal * discountPercentage;
    }
    let total = subtotal - discount;
    
    document.getElementById('cost').value = '$' + total.toFixed(2);
}

formSubmit.onclick = calculate;

