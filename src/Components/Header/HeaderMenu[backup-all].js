import React from 'react';

export default class HeaderMenu extends React.Component {

  render() {
    return (
      <div className="header-menu">
        <ul id="main-menu" className="menu">
          <li className="active menu-item"><a href="/" className="menu-link">Home</a></li>
          <li className="menu-item"><a href="/content/about" className="menu-link">About</a></li>
          <li className="menu-item menuparent"><a href="/tickets" className="menu-link menuparent">Ticket</a>
              {/*
              <ul>
                  <li className="menu-item"><a href="/node/add/ticket" className="menu-link">Create New Ticket</a></li>
                  <li className="menu-item"><a href="/tickets" className="menu-link">Search Ticket</a></li>
              </ul>
              */}
          </li>
          <li className="menu-item menuparent"><a href="/reports" className="menu-link menuparent"> Report</a>
              {/*
              <ul>
                  <li className="menu-item"><a href="/bulk-pending-tickets" className="menu-link">Bulk pending tickets</a></li>
                  <li className="menu-item"><a href="/graph-report" className="menu-link">Graph Report</a></li>
                  <li className="menu-item"><a href="/reports-by-day" className="menu-link">Report By Day</a></li>
                  <li className="menu-item"><a href="/reports-by-week" className="menu-link">Report By Week</a></li>
                  <li className="menu-item"><a href="/reports-by-month" className="menu-link">Report By Month</a></li>
                  <li className="menu-item"><a href="/reports-by-year" className="menu-link">Report By Year</a></li>
              </ul>
              */}
          </li>
          <li className="menu-item"><a href="/content/help" className="menu-link">Help</a></li>
          <li className="menu-item"><a href="/user/logout" className="menu-link">Login</a></li>
      </ul>
      </div>
    );
  }
}