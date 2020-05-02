import React from 'react';
import './Table.css';
import TableItem from "./TableItem";
import { Link } from 'react-router-dom';

export default class Card extends React.Component {
  render() {
    let { tickets } = this.props;
    return (
      <>
        { tickets !== null && tickets !== undefined && tickets.length > 0 ?
          <section className="whole-table-area">
            <div className="table-area">
              <table id="ticket-listing" className="table">
                <thead>
                  <tr>
                    <th className="table-field-title">Ticket Number</th>
                    <th className="table-field-title">Plate No.</th>
                    <th className="table-field-title">Created Date</th>
                    <th className="table-field-title">Price</th>
                    <th className="table-field-title center">Status</th>
                    <th className="table-field-title center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  { tickets.map((item, index) => <TableItem {...item} key={index} id={index} />) 
                      
                  }
                </tbody>
              </table>
            </div>
            <div className="feed-area">
              <button className="button btn btn-primary btn_main btn_feed"><span className="icon glyphicon glyphicon-download-alt" aria-hidden="true"></span>Download CSV</button>
            </div>
          </section>
        :
          <>
            <div className="page-top-msg space-up-large"><span className="icon glyphicon glyphicon-exclamation-sign"></span>Sorry! No ticket available for this searching criteria.</div>
            <p className="center"><Link className="button btn btn-primary btn_main btn_error" to="/dashboard">Click here</Link> to go to Homepage.</p>
          </>
        }
      </>
    );
  }
}