import React from 'react';
import './Loader.css';
import SyncLoader from "react-spinners/SyncLoader";

export default class Loader extends React.Component {
  render() {
    return (
      <section className="loader-area space-up-large center">
        <SyncLoader
          size={10}
          color={"#00b7e1"}
        />
      </section>
    );
  }
}