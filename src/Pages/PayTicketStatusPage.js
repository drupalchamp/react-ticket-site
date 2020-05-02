import React from 'react';
import Header from "../Components/Header/Header";

export default class PayTicketStatusPage extends React.Component {

  render() {
    return (
      <div>
        <Header isAuthed={this.props.isAuthed} ></Header>
        <section className="page-title">
          
        </section>
        <section className="page-content">
          <div className="page-top-msg space-up">
            <span className="icon glyphicon glyphicon-ok-sign"></span>
            Thank you. Your payment has been received.
            </div>
          <div className="page-top-area">
            <div className="page-top-group">
              <span className="page-top-label">TICKET NUMBER</span>
              <span className="page-top-data"> : 000005</span>
            </div>
            <div className="page-top-group">
              <span className="page-top-label">TICKET PRICE</span>
              <span className="page-top-data"> : $19.00</span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}