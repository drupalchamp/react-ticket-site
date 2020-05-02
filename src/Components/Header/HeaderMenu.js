import React from 'react';
import HeaderMenuItem from "./HeaderMenuItem";

export default class HeaderMenu extends React.Component {

  render() {
    return (
      <div className="header-menu">
        <ul id="main-menu" className="menu">
          <HeaderMenuItem/>
        </ul>
      </div>
    );
  }
}