import React from 'react';
import Header from "../Components/Header/Header";

export default class No404Page extends React.Component {

  render() {
    console.log(window.location.href);
    var isAuthed = localStorage.getItem( 'isAuthed' ) || false;
    return (
      <div>
        <Header isAuthed={this.props.isAuthed}></Header>
        { ((window.location.href === 'http://localhost:3000/login') && !isAuthed) || ((window.location.href === 'http://localhost:3000/dashboard') && isAuthed) ? '' : 
          <>
            <section className="page-title">
              <h1>404</h1>
            </section>
            <section className="page-content">
              <div className="page-text">           
                <div className="page-top-msg space-up-large"><span className="icon glyphicon glyphicon-exclamation-sign"></span>Oops! Page not found.</div>
                <p className="center">Sorry, but the page you are looking for is not found. </p>
                <p className="center"><a className="button btn btn-primary btn_main btn_error" href="/">Click here</a> to go back to the Homepage</p>
              </div>
            </section>
          </>
        }
      </div>
    );
  }


}