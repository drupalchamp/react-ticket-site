import React from 'react';
import Header from "../Components/Header/Header";
import PayTicketSearchForm from "../Components/Forms/PayTicketSearchForm";

export default class PayTicketSearchPage extends React.Component {

  render() {
    return (
      <div>
        <Header></Header>
        <section className="page-title">
          
        </section>
        <section className="page-content">
          <PayTicketSearchForm></PayTicketSearchForm>
        </section>
      </div>
    );
  }
}