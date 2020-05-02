import React from 'react';
import Header from "../../Components/Header/Header";
import Card1x1 from "../../Components/Card1x1/Card1x1";
import ui_data from "../../data/ui_data";


export default class Report extends React.Component {
  // Code to render staff's Report page
  render() {
    return (
      <div>
        <Header></Header>
        <section className="page-title">
          <h1>Report</h1>
        </section>
        <section className="page-content">
          {/* Passing json data to card1x1 component to render cards  */}
          <Card1x1 card_data={ui_data.report} ></Card1x1>
          <Card1x1 card_data={ui_data.salesReport} cardType="small" title="Sales Report"></Card1x1>
        </section>
      </div>
    );
  }
}