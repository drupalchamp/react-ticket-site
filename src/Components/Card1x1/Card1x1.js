import React from 'react';
import './Card1x1.css';
import Card1x1Item from "./Card1x1Item";

// This component renders Card1x1 items from json data

// It takes 3 parameters:
//   1. card_data (required) - takes json data to create cards.
//   2. cardType (optional)  - "small" to create small cards, by default is big cards.
//   3. title (optional)     - "YourTitleText" as a title for the whole section
// e.g( <Card1x1 card_data={ui_data.salesReport} cardType="small" title="Sales Report"></Card1x1> )
// e.g( <Card1x1 card_data={ui_data.dashboard}></Card1x1> )

export default class Card1x1 extends React.Component {
  render() {
    let { card_data } = this.props;
    let { cardType } = this.props;
    let { title } = this.props;
    return (
      <section className="whole-card1x1-area">

        {/* Conditional title */}
        { title !== null && title !== undefined ? <h2 className="section-title">{ title }</h2> : null }

        <div className="card1x1-area">
          <div className="row">
            {/* <Card1x1Item/> */}

            {/* Pass card data to display render each card */}
            { card_data !== null && card_data !== undefined && card_data.length > 0 
                ? card_data.map((item, index) => <Card1x1Item {...item} key={index} id={index} cardType={cardType}/>) 
                : <div>No data found.</div>
            }
          </div>
        </div>	
      </section>
    );
  }
}