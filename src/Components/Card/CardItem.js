import React from 'react';
import { Link } from 'react-router-dom';


export default class CardItem extends React.Component {

  render() {
    return (
      <>
        <Link className="btn btn-primary btn_main card" to="/pay-ticket-online">
          <img alt="pay-ticket" src={require("../../images/ticket_icon.png")} /><span>Click to pay for your ticket</span>
        </Link>

        <Link className="btn btn-primary btn_main card" to="/login">
          <img alt="pay-ticket" src={require("../../images/login_icon.png")} /><span>Staff Login</span>
        </Link>

      </>
    );
  }
}