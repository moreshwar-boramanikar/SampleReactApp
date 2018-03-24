import React, { Component } from 'react';
import { DatePicker, Button } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{'margin':'25px 25px 25px 25px'}}>
		Button : <Button type="primary">Button</Button> <hr />
		DatePicker : <DatePicker />
      </div>
    );
  }
}

export default App;
