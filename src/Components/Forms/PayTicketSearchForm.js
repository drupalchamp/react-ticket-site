import React from 'react';
import './Form.css';

export default class PayTicketSearchForm extends React.Component {
  render() {
    return (
      <section className="whole-form-area form-center space-up-large">
        <h2 className="form-title">Pay Ticket Online</h2>
        <div className="form-area form-small">
          <form className="form" id="pay-ticket-search-form" action="#" method="post" acceptCharset="UTF-8">
            <div className="form-group">
              <label className="form-label">Enter Ticket Number</label>
              <input className="form-input" type="text" name="ticket_number" maxLength={60} required="required" />
            </div>
            <div className="form-group form-control-area">
              <button className="button btn btn-primary btn_main" type="submit" value="Search">
                <span className="icon glyphicon glyphicon-search" aria-hidden="true"></span>Search
              </button>
            </div>
          </form>
        </div>
        <a href="/ticket-pay">Skip Search</a>
      </section>
    );
  }
}