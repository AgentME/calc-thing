import React, { Component } from 'react';
import Output from './Output';

export default class Calculator extends Component {
  state = {
    output: null
  };

  render() {
    return (
      <div className="Calculator">
        <div>
          <input type="text" ref="first" />
        </div>
        <div>
          <input type="text" ref="second" />
        </div>
        <div>
          <button onClick={() => this._add()}>+</button>
        </div>
        <div>
          <Output value={this.state.output} />
        </div>
      </div>
    );
  }

  _add() {
    this.setState({
      output: Number(this.refs.first.value) + Number(this.refs.second.value)
    });
  }
}
