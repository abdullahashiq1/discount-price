const input = document.getElementById('input-field');
const displayAmount = document.getElementById('totalAmount');

document.querySelector('#btn-apply').addEventListener('click', function(){
    const btnError = document.getElementById('#btn-apply');
    let price = input.value;
    if(!isNaN(price)){
        const discountAmount = (20 /100) * price;
        const finalPrice = price - discountAmount;
        const fixed = finalPrice.toFixed(2);
        displayAmount.innerText = fixed;
        prompt('Your Discount price:', discountAmount)
    }
    else if(null){
        // btnError.textContent = 'Please enter number' 
        console.log('JS')
    }
    else{
        alert('Please enter a valid input')
    }   

    // error on btn when click no input  
    // console.log(btnError)
});

// coupon promo code
const promoPrice = document.getElementById('promo-price');
const promoCode = document.getElementById('promo-code');

const priceDisplay = document.getElementById('coupon-price');
const discountDisplay = document.getElementById('discount-price');
const alertError = document.querySelector('#alert');

document.getElementById('coupon-btn').addEventListener('click', function(){
    const promoPriceValue = promoPrice.value;
    const promoCodeValue = promoCode.value;

    if(!isNaN(promoPriceValue) && promoCodeValue === "DISC30"){
        const discountPrice = (30/100) * promoPriceValue;
        const finalPrice = promoPriceValue - discountPrice;
        const discountPriceFixed = discountPrice.toFixed(2);
        discountDisplay.innerText = discountPriceFixed;

        const finalPriceFixed = finalPrice.toFixed(2);
        priceDisplay.innerText = finalPriceFixed;
    }
    else{
        alertError.textContent = "Please enter correct coupon code or valid input";
    }
    
})

