import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignin, inverted, ...othrProps}) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignin ? 'google-sign-in' : ''} custom-button`} {...othrProps}>
        {children}
    </button>
);

export default CustomButton;