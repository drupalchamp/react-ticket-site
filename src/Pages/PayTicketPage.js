import React from 'react';
import Header from "../Components/Header/Header";
import PayTicketForm from "../Components/Forms/PayTicketForm";

export default class PayTicketPage extends React.Component {

  render() {
    return (
      <div>
        <Header></Header>
        <section className="page-title">
          
        </section>
        <section className="page-content">
          <PayTicketForm></PayTicketForm>
        </section>
      </div>
    );
  }
}