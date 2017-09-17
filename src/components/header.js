import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h2 >Recipe Box</h2>
        <i onClick={() => this.props.add()} className="material-icons">&#xE145;</i>
      </div>
    );
  }
}

export default Header;
