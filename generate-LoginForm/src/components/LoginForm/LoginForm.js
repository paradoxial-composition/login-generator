import React from 'react';
import axios from 'axios';
import {
    Form, Icon, Input, Button, Checkbox,
  } from 'antd';

class LoginForm extends React.Component {

  constructor(props) {
    super();
    this.state = {
        email: '',
        password: ''
    };
  
    this.handleForgetClick= this.handleForgetClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleClick = this.handleClick.bind(this);
    this.handleSignUpClick = this.handleSignUpClick.bind(this);
    // this.handleClickConfirm = this.handleClickConfirm.bind(this);


    console.log('reload ....')
  }


  handleSubmit (e) {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);

          try {
            const user = {
              email: this.state.email,
              password: this.state.password
            }
          } catch (e) {
            console.log("fields are undefined");
          }

          try {

          console.log("handleSubmit has passed, calling back end now");
          // axios.post(this.backendPath,  user )
          //  .then(res => {
          //     console.log(res);
          //     console.log(res.data);
      
          //     this.setState({
          //       email: '',
          //       password: '',
          //       
          //     });
          // TODO add toSignIn method
          //    })
          } catch (e) {
            console.log("backend connection failed.");
          }
        }
    });
  }


  handleSignUpClick (e) {
    e.preventDefault();
    //this.props.toRegisterForm();
	//emit event here
  }
  
  handleForgetClick (e) {
		e.preventDefault();
		//this.props.toForgetForm();
		//emit event here
  };
  
  // handleClickConfirm (e) {
  //   e.preventDefault();
  //   if( this.state.forgot) {
  //     this.setState({
  //       forgot: false
  //     });
  //   } 
  //   else {
  //     this.setState({
  //       forgot: true
  //     });
  //   }
          

    render() {
      const { getFieldDecorator } = this.props.form;

            //Login Form
            return (
              <Form id="form-login" name="form-login" onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                  {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" onChange={(event) => this.setState({email:event.target.value} )} />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" onChange={(event) => this.setState({password:event.target.value} )} />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(
                    <Checkbox>Remember me</Checkbox>
                  )}
                  <a className="login-form-forgot" href="#" onClick={this.handleForgetClick}>Forgot password</a>
                  <Button type="primary" htmlType="submit" className="login-form-button"
                  
                  >
                    Log in
                  </Button>
                </Form.Item>
                <Form.Item>
                  
                  <a className="login-form-forgot" href="#" onClick={this.handleSignUpClick}>Sign up</a>
                  
                </Form.Item>
              </Form>
            );
    }

}
 LoginForm.defaultProps = {
  backendPath: 'http://localhost:8081/login'
 }
  const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);
  export default WrappedLoginForm;
