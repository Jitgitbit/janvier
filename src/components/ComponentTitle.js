import React, { Component } from "react";

export default class ComponentTitle extends Component {
  render() {
    return <div className="component-title ">{ this.props.content }</div>;
  }
};