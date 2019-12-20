import React from "react";

export default class Header extends React.Component {
    render() {
        return (
          <div id={this.props.id}>
            我是頭
          </div>
        );
    }
}