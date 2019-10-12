import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_UYN5upCIIk5Eiid6SWViXLeS00KULhPlKB';

    const onToken = token =>{
        console.log(token);
        alert('successful payment')
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`your total price is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton