import React from 'react';
import Header from "../Components/Header/Header";
import PasswordForm from "../Components/Forms/PasswordForm";

export default class PasswordPage extends React.Component {

  render() {
    return (
      <div>
        <Header></Header>
        <section className="page-title">
          
        </section>
        <section className="page-content">
          <PasswordForm></PasswordForm>
        </section>
      </div>
    );
  }
}