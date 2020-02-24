import React from 'react';
import FormInput from '../form-input/form-input-component';
import CustomButton from '../custom-button/custom-button-component';
import {signInWithGoogle} from '../../firebase/firebase-utils';
import './sign-in-styls.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    HandleSubmit = event =>{
        event.preventDefault();
        this.setState({email: '', password: ''})
    };
    HandleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]:value})
    };
    render(){
        return(
            <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password </span>
            <form onSubmit={this.HandleSubmit}>
                <FormInput name="email" type="email" label="email" HandleChange={this.HandleChange} value={this.state.email} required />
                <FormInput name="password" type="password" label="password" HandleChange={this.HandleChange} value={this.state.password} required />

                <div className='buttons'>
                <CustomButton type='submit'> Sign in </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                  Sign in with Google
                </CustomButton>
              </div>
            </form>
            </div>
        )
    }
}
export default SignIn