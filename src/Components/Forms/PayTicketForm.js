import React from 'react';
import './Form.css';

export default class PayTicketForm extends React.Component {
  render() {
    return (
      <section className="whole-form-area form-center space-up">
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
        <div className="form-area no-border">
          <form className="form" id="pay-ticket-online-form" action="#" method="post" acceptCharset="UTF-8">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label className="form-label required">First Name</label>
                  <input className="form-input" type="text" name="ticket_number" maxLength={60} required="required" />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label className="form-label required">Last Name</label>
                  <input className="form-input" type="text" name="ticket_number" maxLength={60} required="required" />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label className="form-label required">Email</label>
                  <input className="form-input" type="text" name="ticket_number" maxLength={60} required="required" />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label className="form-label required">Credit Card</label>
                  <input className="form-input" type="text" name="ticket_number" maxLength={60} required="required" placeholder="Card Number"/>
                </div>
              </div>
            </div>
            <div className="form-group form-control-area">
              <button className="button btn btn-primary btn_main" type="submit" value="PayNow">Pay Now</button>
            </div>
          </form>
        </div>
        <a href="/ticket-status">Skip Pay</a>
      </section>
    );
  }
}