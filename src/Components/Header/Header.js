import React from 'react';
import './Header.css';
import HeaderMenu from "./HeaderMenu";

const SITE_NAME = "Ticket System";

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
            <a className="name navbar-brand" href={ this.props.isAuthed ? "/dashboard" : "/" } title="Home" rel="home">{SITE_NAME}</a>
          </div>
          
          <div className="header-right">
            {/*
            { 
              this.props.isAuthed ? <HeaderMenu/> : 
              <div className="header-action">
                <a href="/pay-ticket-online" className="button btn btn-primary btn_main btn_header">Click to pay for your ticket</a>
              </div>  
            }
          */}

            { 
              this.state.isAuthed ? <HeaderMenu/> : 
              <div className="header-action">
                <a href="/pay-ticket-online" className="button btn btn-primary btn_main btn_header">Click to pay for your ticket</a>
              </div>  
            }


            
          </div>
        </div>	
      </div>
    );
  }


}