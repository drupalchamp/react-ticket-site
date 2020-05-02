import React from 'react';
import { Link } from 'react-router-dom';

export default class Card1x1Item extends React.Component {

  // This component renders Card1x1 items from json data
  render() {
    var image_file = require("../../images/" + this.props.image);
    let { cardType } = this.props;
    var id = "card_id_" + this.props.id;
    return (
      <>
        {/* TODO: add id dynamically to div */}
        <div id={id} className={ cardType === "small" ? "col-6 col-md-3" : "col-md-4" } >
          <div className={ cardType === "small" ? "card-1x1 card-small" : "card-1x1" }>
            <div className="overlay-link">
              <Link to={this.props.link} >url</Link>
            </div>
            <div className="card-image">
              <img alt="pay-ticket" src={image_file} />
            </div>
            <div className="card-bottom">
              <span>{this.props.name}</span>
            </div>
          </div>
        </div>    


        {/* Sample data for testing */}
        {/*
        <div className="col-md-4">
          <div className="card-1x1">
            <div className="overlay-link">
              <a href="/ticket-add">data</a>
            </div>
            <div className="card-image">
              <img alt="pay-ticket" src={create_icon} />
            </div>
            <div className="card-bottom">
              <span>Create New Ticket</span>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card-1x1">
            <div className="overlay-link">
              <a href="/tickets">data</a>
            </div>
            <div className="card-image">
              <img alt="pay-ticket" src={search_icon} />
            </div>
            <div className="card-bottom">
              <span>Searct Ticket</span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card-1x1">
            <div className="overlay-link">
              <a href="/reports">data</a>
            </div>
            <div className="card-image">
              <img alt="pay-ticket" src={report_icon} />
            </div>
            <div className="card-bottom">
              <span>Report</span>
            </div>
          </div>
        </div>
        */}
      </>
    );
  }
}