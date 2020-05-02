import React from 'react';
import Header from "../../Components/Header/Header";
import Table from "../../Components/Table/Table";
import Loader from "../../Components/Loader/Loader"

import '../Page.css';

export default class SearchTicket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: null,
      search: false,
    };
  }

  //Function to handle search action
  handleSearch = (event) => {
    event.preventDefault();
    const ticketNo = event.target.elements.field_ticket_no.value;
    const plateNo = event.target.elements.field_plate_no.value;
    const date = event.target.elements.field_date.value;
    const status = event.target.elements.field_status.value;

    //console.log(ticketNo, plateNo, date, status);
    var all_tickets = this.props.tickets;

    var items =[];
    for(var i in all_tickets) {
      //console.log(date, );
      if( 
        (ticketNo === '' || all_tickets[i].title.toUpperCase() === ticketNo.toUpperCase()) &&
        (plateNo ==='' || all_tickets[i].field_plate_no.toUpperCase() === plateNo.toUpperCase()) &&
        (date ==='' || all_tickets[i].field_date === date) &&
        (status ==='All' || all_tickets[i].field_payment_status.toUpperCase() === status.toUpperCase()) )
          items.push(all_tickets[i]);      
    }
    //console.log(items);
    this.setState({tickets: items, search: true});
  }

  //Function to handle search reset action
  handleReset = (event) =>{
    this.setState({search: false});
  }
  
  render() {
    //console.log(JSON.stringify(this.state.ticket_data, null, 2));    
    return (
      <div>
        <Header></Header>
        <section className="page-title">
          <h1>Search Tickets</h1>
        </section>
        <section className="page-content">
          <div className="page-search-area">
            <div id="search_ticket" className="page-search-form">
            <form className="form" onSubmit={this.handleSearch}>
              <div id="ticket_no" className="form-group">
                <label className="form-label">Ticket No.</label>
                <input className="form-input" type="text" name="field_ticket_no" placeholder="Ticket Number"/>
              </div>
              <div id="plate_no" className="form-group">
                <label className="form-label">Plate No.</label>
                <input className="form-input" type="text" name="field_plate_no" placeholder="Plate No."/>
              </div>
              <div id="booking" className="form-group">
                <label className="form-label">Booking</label>
                <input className="form-input form-date" type="date" placeholder="Booking Date" name="field_date"></input>
              </div>
              <div id="status" className="form-group">
                <label className="form-label">Status</label>
                <select className="form-input form-select" name="field_status" defaultValue={'All'}>
                  <option value="All">- Any -</option>
                  <option value="Paid">Paid</option>
                  <option value="Unpaid">Unpaid</option>
                  <option value="Canceled">Canceled</option>
                </select>
              </div>
              <div className="form-group form-control-area">
                <button className="button btn btn-primary btn_main" type="submit" value="Search"><span className="icon glyphicon glyphicon-search" aria-hidden="true"></span>Search</button>
                <button className="button btn btn-primary btn_main btn_danger" type="reset" value="Reset" onClick={this.handleReset}><span className="icon glyphicon glyphicon-trash" aria-hidden="true"></span>Reset</button>
              </div>
            </form>
            </div>
          </div>
          { this.props.loading ? <Loader/> : <Table tickets={this.state.search ? this.state.tickets : this.props.tickets}/> } 
        </section>
        
        {/* <pre>{JSON.stringify(this.props.tickets, null, 2) }</pre>; */}
      </div>
    );
  }
}