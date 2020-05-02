import React from 'react';
import './Form.css';
import { withRouter, Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
    };
  }

  //Function to handle login action
  handleLogin = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const pass = event.target.elements.pass.value;
    //console.log(`name : ${name}, pass: ${pass}`);
    
    //TODO authorization from original data
    if(name === 'test' && pass === 'password'){
      localStorage.setItem( 'isAuthed', true );
      this.props.history.push('/dashboard');
      //this.forceUpdate();
      window.location.reload()
    }
    else
      this.setState({alert: 'Invalid Credentials'});
  }

  render() {
    return (
      <section className="whole-form-area form-center space-up-large">
        <h2 className="form-title">Staff Login</h2>
        <div className="form-area">
          <div className="form_alert">{this.state.alert}</div>
          <form className="form" id="user-login-form" onSubmit={this.handleLogin}>
            <div className="form-group">
              <label className="form-label required">Username</label>
              <input className="form-input" type="text" name="name" autoFocus="autofocus" maxLength={60} required="required"/>
            </div>
            <div className="form-group">
              <label className="form-label required">Password</label>
              <input className="form-input" type="password" name="pass" maxLength={60} required="required"/>
            </div>
            <div className="form-group form-control-area">
              <button className="button btn btn-primary btn_main btn_dark left" type="submit" value="Log In">
                <span className="icon glyphicon glyphicon-log-in" ></span>Log in
              </button>
              <Link to="/password" className="button btn btn-primary btn_main right">Reset your password</Link>
            </div>
          </form>
        </div>
        	username = test, pass = password
        {/* <a href="/dashboard">Skip Login</a> */}
        {/* <a href="/dashboard" onClick = {this.props.loginHandler}>Skip Login</a> */}
      </section>
    );
  }
}

export default withRouter(LoginForm);