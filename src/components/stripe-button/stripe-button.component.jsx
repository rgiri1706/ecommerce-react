import { React } from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price;
    const publishKey = 'pk_test_51ItrAySDwCMTA1jpJokgjhrbzgxLbYdJ71vEvDgPaqLAFznjoNSwKzrYla15YXtyPhg44bdnwIooSaLoT2ZZWrLz00upnhxq05';

    const onToken = token => {
        alert('payment successfull');
    }

    return (
        <StripeCheckout
            label = 'Pay Now'
            name= 'Crown-Clothing'
            billingAddress
            shippingAddress
            description= {`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel= 'Pay Now'
            token={onToken}
            stripeKey={publishKey}
        />
    )
};

export default StripeCheckoutButton;