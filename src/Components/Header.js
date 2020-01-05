import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div id={this.props.id}>
        <h1> WebUML EditorV1.0</h1>
      </div>
    );
  }
}
