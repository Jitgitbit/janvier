import React, { Component } from "react";

export default class ItemTeam extends Component {
  render() {
    return (
      <div className="item team">
        <img className="image" src={this.props.src} />
        {this.props.children}
      </div>
    )
  }
};