import React from 'react';
import './Header.css';
import HeaderMenu from "./HeaderMenu";
import { Link } from 'react-router-dom';

const SITE_NAME = "Ticket System";

//This component load Header Area and Menu
//Header Menu is loded only if user is Authed
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthed: localStorage.getItem( 'isAuthed' ) || false,
    };
  }
  render() {
    return (
      <div id="whole-header-area">
        <div className="header-area">
          <div className="site-branding-area">
            <Link className="name navbar-brand" to={ this.state.isAuthed ? "/dashboard" : "/" } title="Home" rel="home">{SITE_NAME}</Link>
          </div>
          <div className="header-right">
            { 
              this.state.isAuthed ? <HeaderMenu/> : 
              <div className="header-action">
                <Link to="/pay-ticket-online" className="button btn btn-primary btn_main btn_header">Click to pay for your ticket</Link>
              </div>  
            }
          </div>
        </div>	
      </div>
    );
  }
}