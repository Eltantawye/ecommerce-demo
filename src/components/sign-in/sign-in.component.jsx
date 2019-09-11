import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.styles.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.setState({email:'',password:''})
    }

    handleChange = e => {
        const {name , value } = e.target;
        this.setState({
            [name] : value
        })
    }
    render() {
        return (
            <div className="sign-in">
                <h1>Sign In</h1>
                <span>Iam already have an account</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" 
                                name="email"
                                required
                                value={this.state.email}
                                handleChange={this.handleChange}
                                label="email"/>
                    <FormInput 
                            type="password"
                            name="password" 
                            required 
                            value={this.state.password}
                            handleChange={this.handleChange}
                            label="password" />
                            <div className="buttons">

                                    <CustomButton type="submit">
                                        Sign In
                                    </CustomButton>
                                    
                                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                                        Sign In with Google
                                    </CustomButton>
                            </div>
                </form>

            </div>
        );
    }
}

export default SignIn;