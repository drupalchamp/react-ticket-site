import React from 'react';
import Header from "../../Components/Header/Header";
import Graph from "../../Components/Graph/Graph"
import Loader from "../../Components/Loader/Loader"

export default class ReportGraph extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <section className="page-title">
          <h1>Graph Report</h1>
        </section>
        <section className="page-content">
          <div className="page-btn-area center">
            <button className="button btn btn-primary btn_main" value="By Day">By Day</button>
            <button className="button btn btn-primary btn_main" value="By Week">By Week</button>
            <button className="button btn btn-primary btn_main" value="By Month">By Month</button>
            <button className="button btn btn-primary btn_main" value="By Year">By Year</button>
          </div>
          { this.props.tickets ? <Graph statusData={this.getStatusCount()} /> : <Loader/>}
          {/* <pre>{JSON.stringify(this.props.tickets, null, 2) }</pre> */}
        </section>
      </div>
    );
  }

  getStatusCount(){
    var tickets = this.props.tickets;
    var status = {};
    var status_paid = 0;
    var status_unpaid = 0;
    var status_canceled = 0;

    for(var key in tickets){
      if(tickets[key].field_payment_status === 'Paid')
        status_paid++;
      else if(tickets[key].field_payment_status === 'Unpaid')
        status_unpaid++;
      else if(tickets[key].field_payment_status === 'Canceled')
        status_canceled++;
    }
    status['paid'] = status_paid;
    status['unpaid'] = status_unpaid;
    status['canceled'] = status_canceled;
    return status;
  }

}

