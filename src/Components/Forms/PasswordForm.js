import React from 'react';
import './Form.css';

export default class PasswordForm extends React.Component {
  render() {
    return (
      <section className="whole-form-area form-center space-up-large">
        <h2 className="form-title">Reset your password</h2>
        <div className="form-area">
          <form className="form" id="user-password-form" action="#" method="post" acceptCharset="UTF-8">
            <div className="form-group">
              <label className="form-label required">Username or email address</label>
              <input className="form-input" type="text" name="user" maxLength={60} required="required"/>
            </div>
            <p>Password reset instructions will be sent to your registered email address.</p>
            <div className="form-group form-control-area">
              <button className="button btn btn-primary btn_main btn_dark left" type="submit" value="Log In">Submit</button>
            </div>
          </form>
        </div>	
      </section>
    );
  }
}