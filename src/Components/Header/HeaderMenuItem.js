import React from 'react';
import { Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class HeaderMenuItem extends React.Component {
 

  handleLogout = (event) => {
    event.preventDefault();
    localStorage.setItem( 'isAuthed', false );
    localStorage.removeItem('isAuthed');
    this.props.history.push('/login');
    window.location.reload();
  }
  render() {
    return (
      <>
        <li className="active menu-item"><Link to="/dashboard">Home</Link></li>
        <li className="menu-item"><Link to="/about">About</Link></li>
        <li className="menu-item menuparent"><Link to="/tickets">Ticket</Link></li>
        <li className="menu-item menuparent"><Link to="/reports">Report</Link></li>
        <li className="menu-item"><Link to="/help">Help</Link></li>
        <li className="menu-item"><a href="/" className="menu-link" onClick={this.handleLogout}>Log out</a></li>

        {/*
          <li className="active menu-item"><a href="/dashboard" className="menu-link">Home</a></li>
          <li className="menu-item"><a href="/about" className="menu-link">About</a></li>
          <li className="menu-item menuparent"><a href="/tickets" className="menu-link menuparent">Ticket</a></li>
          <li className="menu-item menuparent"><a href="/reports" className="menu-link menuparent"> Report</a></li>
          <li className="menu-item"><a href="/help" className="menu-link">Help</a></li>
        */}
      </>
    );
  }
}

export default withRouter(HeaderMenuItem);