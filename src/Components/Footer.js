import React from "react";

export default class Footer extends React.Component {
    render() {
        return (
          <div id={this.props.id}>
            <div class="float_center">
              <ul id="objectLists">
              </ul>
            </div>
          </div>
        );
    }
}