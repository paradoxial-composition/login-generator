import React from 'react';

import './Login.css';

import LoginForm from 'LoginForm-gen';
import RegisterForm from 'RegisterForm-gen';
import ForgetForm from 'ForgetPasswordForm-gen';

import { Card } from 'antd';

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            showLogin: true,
            showRegister: false,
            showForget: false
        }

        this.toLoginForm = this.toLoginForm.bind(this);
        this.toForgetForm = this.toForgetForm.bind(this);
        this.toRegisterForm = this.toRegisterForm.bind(this);
    }

    toLoginForm () {
        // this.setState((prevState) => ({
        //     showLogin: !prevState.showLogin
        // }))
        this.setState({
            showLogin: true,
            showForget: false,
            showRegister: false,
        });
    }
    toForgetForm () {
        // this.setState((prevState) => ({
        //     showForget: !prevState.showForget
        // }))
        this.setState({
            showLogin: false,
            showForget: true,
            showRegister: false,
        });
    }

    toRegisterForm () {
        // this.setState((prevState) => ({
        //     showRegister: !prevState.showRegister
        // }))
        this.setState({
            showLogin: false,
            showForget: false,
            showRegister: true,
        });
    }

    render () {

        if ( this.state.showLogin ) {
            return (
                <div className="centered">
                    <Card style={{ width: 300 }}>
                        <LoginForm 
                            toRegisterForm={() => this.toRegisterForm()}
                            toForgetForm={() => this.toForgetForm()} />
                    </Card>
                </div>
            );
        }
        if ( this.state.showForget ) {
            return (
                <div className="centered">
                    <Card style={{ width: 300 }}>
                        <ForgetForm 
                            toLoginForm={() => this.toLoginForm()}/>
                    </Card>
                </div>
            );
        }
        if ( this.state.showRegister ) {
            return (
                <div className="centered">
                    <Card style={{ width: 300 }}>
                        <RegisterForm
                            toLoginForm={() => this.toLoginForm()} />
                    </Card>
                </div>
            );
        }
       
    }
} 
  
  export default Login;