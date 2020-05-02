import React from 'react';
import Header from "../../Components/Header/Header";
import CreateTicketForm from "../../Components/Forms/CreateTicketForm";

export default class CreateTicket extends React.Component {

  render() {
    return (
      <div>
        <Header></Header>
        <section className="page-title">
          <h1>New Ticket</h1>
        </section>
        <section className="page-content">
          <CreateTicketForm></CreateTicketForm>
        </section>
      </div>
    );
  }
}