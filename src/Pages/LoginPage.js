import React from 'react';
import Header from "../Components/Header/Header";
import LoginForm from "../Components/Forms/LoginForm";

export default class LoginPage extends React.Component {
  render() {
    console.log(window.location.href);
    return (
      <div>
        <Header></Header>
        <section className="page-title">
          
        </section>
        <section className="page-content">
          <LoginForm></LoginForm>
          {/* <LoginForm loginHandler={this.props.loginHandler} ></LoginForm> */}
        </section>
        {/* <pre>{JSON.stringify(this.props.taxonomy, null, 2) }</pre> */}
      </div>
    );
  }


}