import React, { Component } from "react";

class Title extends Component {
  state = {
    subtitle: false
  };
  switchSubtitle = () => {
    this.setState({
      subtitle: !this.state.subtitle
    });
  };
  render() {
    console.log("props", this.props);
    console.log("state", this.state);
    const { color, text } = this.props;
    const { subtitle } = this.state;
    const buttonText = subtitle ? "Hide subtitle?" : "See subtitle?";
    return (
      <div>
        <h1 style={{ color: color }}>{text}</h1>
        {subtitle && <h2>Subtitle!</h2>}
        <button onClick={this.switchSubtitle}>{buttonText}</button>
      </div>
    );
  }
}
export default Title;