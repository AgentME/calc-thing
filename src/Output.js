import React, { Component } from 'react';

export default class Output extends Component {
  render() {
    return (
      <div className="Output">
        Output: {this.props.value}
      </div>
    );
  }
}
