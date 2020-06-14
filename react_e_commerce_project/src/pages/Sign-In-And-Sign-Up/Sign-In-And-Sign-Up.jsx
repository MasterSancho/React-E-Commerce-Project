import React from 'react';
import SignIn from '../../components/Sign_In/Sign-In';
import SignUp from '../../components/Sign_Up/Sign-Up';

import './Sign-In-And-Sign-Up.scss';

const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUp;
