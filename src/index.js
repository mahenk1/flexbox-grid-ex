import React, { Component } from 'react';
import { render } from 'react-dom';
import {Row, ColAuto} from "./Grid";
import './style.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Row>
          <ColAuto>test</ColAuto>
          <ColAuto>test</ColAuto>
          <ColAuto>test</ColAuto>
        </Row>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
