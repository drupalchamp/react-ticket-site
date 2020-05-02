import React from 'react';
import Header from "../../Components/Header/Header";
import { Link } from 'react-router-dom';
import '../Page.css';

export default class BulkPendingTicket extends React.Component {

  render() {
    return (
      <div>
        <Header></Header>
        <section className="page-title">
          <h1>Bulk Pending Tickets</h1>
        </section>
        <section className="page-content">
          <div className="page-search-area">
            <div id="bulk_ticket" className="page-search-form">
              <div id="reg_no" className="form-group">
                <label className="form-label">Vehicle Reg. No.</label>
                <input className="form-input" type="text" name="field_ticket_no" placeholder="Vehicle Reg. Number"/>
              </div>
              
              <div className="form-group form-control-area">
              <button className="button btn btn-primary btn_main" type="submit" value="Search"><span className="icon glyphicon glyphicon-search" aria-hidden="true"></span>Search</button>
              <button className="button btn btn-primary btn_main btn_danger" type="reset" value="Reset"><span className="icon glyphicon glyphicon-trash" aria-hidden="true"></span>Reset</button>
            </div>
            </div>
          </div>
          <div className="page-top-msg space-up-large"><span className="icon glyphicon glyphicon-exclamation-sign"></span>Sorry! No ticket available for this searching criteria.</div>
          <p className="center"><Link className="button btn btn-primary btn_main btn_error" to="/tickets">Click here</Link> to go to search listing page.</p>
          {/*
          <div className="feed-area">
            <a className="button btn btn-primary btn_main btn_feed" href="/"><span className="icon glyphicon glyphicon-download-alt" aria-hidden="true"></span>Download CSV</a>
          </div>
          */}
        </section>
      </div>
    );
  }
}