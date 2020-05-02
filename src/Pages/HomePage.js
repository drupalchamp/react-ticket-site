import React from 'react';
import Header from "../Components/Header/Header";
import Card from "../Components/Card/Card";

export default class HomePage extends React.Component {

  render() {
    return (
      <div>
        <Header></Header>
        <section className="page-title">
          
        </section>
        <section className="page-content">
          <Card></Card>
        </section>
        {/* <pre>{JSON.stringify(this.props.tickets, null, 2) }</pre>         */}
      </div>
    );
  }
}