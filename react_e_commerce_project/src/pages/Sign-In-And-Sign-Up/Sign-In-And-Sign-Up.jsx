import React from 'react';
import SignIn from '../../components/Sign_In/Sign-In';
import SignUp from '../../components/Sign_Up/Sign-Up';

import { SignInAndSignUpContainer } from './Sign-In-And-Sign-Up.style';

const SignInAndSignUp = () => (
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpContainer>
);

export default SignInAndSignUp;
