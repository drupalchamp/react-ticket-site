import React from 'react';
import Header from "../../Components/Header/Header";
import CreateTicketForm from "../../Components/Forms/CreateTicketForm";

export default class EditTicket extends React.Component {

  render() {
    return (
      <div>
        <Header></Header>
        <section className="page-title">
          <h1>Edit Ticket</h1>
        </section>
        <section className="page-content">
          <CreateTicketForm></CreateTicketForm>
        </section>
      </div>
    );
  }
}