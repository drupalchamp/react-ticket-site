import React from 'react';
import './Card.css';
import CardItem from "./CardItem";

export default class Card extends React.Component {
  render() {
    return (
      <section className="whole-card-area">
        <div className="card-area">
          <CardItem/>
        </div>	
      </section>
    );
  }
}