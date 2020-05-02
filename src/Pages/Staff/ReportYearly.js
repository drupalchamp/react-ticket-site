import React from 'react';
import Header from "../../Components/Header/Header";
import Table from "../../Components/Table/Table";
import Loader from "../../Components/Loader/Loader"

import '../Page.css';

export default class ReportYerly extends React.Component {

  render() {
    return (
      <div>
        <Header isAuthed={this.props.isAuthed} ></Header>
        <section className="page-title">
          <h1>Report By Year</h1>
        </section>
        <section className="page-content">
          <div className="page-search-area">
            <div id="report_by_year" className="page-search-form">
              <div id="ticket_no" className="form-group">
                <label className="form-label">Ticket No.</label>
                <input className="form-input" type="text" name="field_ticket_no" placeholder="Ticket Number"/>
              </div>
              <div id="booking" className="form-group">
                <label className="form-label">By Year</label>
                <input className="form-input form-date" type="date" placeholder="Booking Year" name="field_year"></input>
              </div>
              <div id="status" className="form-group">
                <label className="form-label">Status</label>
                <select className="form-input form-select" name="field_payment_status_value" defaultValue={'All'}>
                  <option value="All">- Any -</option>
                  <option value="Paid">Paid</option>
                  <option value="Unpaid">Unpaid</option>
                  <option value="Canceled">Canceled</option>
                </select>
              </div>
              <div className="form-group form-control-area">
              <button className="button btn btn-primary btn_main" type="submit" value="Search"><span className="icon glyphicon glyphicon-search" aria-hidden="true"></span>Search</button>
              <button className="button btn btn-primary btn_main btn_danger" type="reset" value="Reset"><span className="icon glyphicon glyphicon-trash" aria-hidden="true"></span>Reset</button>
            </div>
            </div>
          </div>
          { this.props.loading ? <Loader/> : <Table tickets={this.props.tickets}/> }
        </section>
      </div>
    );
  }
}