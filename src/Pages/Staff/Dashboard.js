import React from 'react';
import Header from "../../Components/Header/Header";
import Card1x1 from "../../Components/Card1x1/Card1x1";
import ui_data from "../../data/ui_data";

export default class Dashboard extends React.Component {

  // Code to render staff's Dashboard page
  render() {
    return (
      <div>
        <Header isAuthed={this.props.isAuthed} ></Header>
        <section className="page-title">
          <h1>Dashboard</h1>
        </section>
        <section className="page-content">
          {/* Passing json data to card1x1 component to render cards  */}
          <Card1x1 card_data={ui_data.dashboard}></Card1x1>
        </section>
      </div>
    );
  }
}