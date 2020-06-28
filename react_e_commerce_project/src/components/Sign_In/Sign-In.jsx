import React from 'react';
import FormInput from '../Form_Input/Form-Input';
import CustomButton from '../Custom_Button/Custom-Button';

import { auth, signInWithGoogle } from '../../Firebase/firebase.util';

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer,
} from './Sign-In.style';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }

        this.setState({ email: '', password: '' });
    };

    handleChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <ButtonsBarContainer>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        );
    }
}

export default SignIn;
