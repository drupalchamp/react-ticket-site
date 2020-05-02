import React from 'react';
import { Link } from 'react-router-dom';

export default class CardItem extends React.Component {

  render() {
    var id = "row_" + this.props.id;
    return (
      <>
        <tr className={id}>
          <td className="table-column">
            {this.props.title !== null && this.props.title !== undefined ? this.props.title : '--'}
          </td>
          <td className="table-column">
            {this.props.field_plate_no !== null && this.props.field_plate_no !== undefined ? this.props.field_plate_no : '--'}
          </td>
          <td className="table-column">
            {this.props.field_date !== null && this.props.field_date !== undefined ? this.props.field_date : '--'}
          </td>
          <td className="table-column">
            {this.props.field_price !== null && this.props.field_price !== undefined ? '$'+this.props.field_price : '--'}
          </td>
          <td className="table-column center">
            { this.props.field_payment_status !== null && this.props.field_payment_status !== undefined ?
              ( this.props.field_payment_status.toLowerCase() === 'paid' ?
                <span className="table-btn success">{this.props.field_payment_status}</span> :
                ( this.props.field_payment_status.toLowerCase() === 'unpaid' ?
                  <span className="btn btn-primary btn_main table-btn danger"><Link to={"/ticket-pay"}>{this.props.field_payment_status}</Link></span> :
                  ( this.props.field_payment_status.toLowerCase() === 'canceled' ?
                    <span className="table-btn inactive">{this.props.field_payment_status}</span> :
                    this.props.field_payment_status
                  )
                )
              ) : '--'
            }
          
            
          </td>
          <td className="table-column center">
            <span className="btn btn-primary btn_main table-btn">
              <Link to={{
                pathname: '/ticket-edit' , tktId: this.props.title
              }}>View</Link>
            </span>
          </td>
        </tr>

        {/*
        <tr>
          <td className="table-column">000006</td>
          <td className="table-column">4815</td>
          <td className="table-column">10/04/2020</td>
          <td className="table-column">$20</td>
          <td className="table-column center">
            <span className="btn btn-primary btn_main table-btn danger"><a href="/ticket-pay">Unpaid</a></span>
          </td>
          <td className="table-column center">
            <span className="btn btn-primary btn_main table-btn"><a href="/ticket-edit">View</a></span>
          </td>
        </tr>
        */}
      </>
    );
  }
}