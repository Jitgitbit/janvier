import React, { Component } from "react";

export default class ComponentTitleTitle extends Component {
  render() {
    return <div className="component-title title">{ this.props.content }</div>;
  }
};