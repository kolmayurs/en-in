import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {click: 'Click to open!'}
      this.clickClose = this.clickClose.bind(this);
    }
    clickClose(){
      if(this.state.click === 'Click to open!'){
        this.setState({click: 'Click to close!'});
      }
      else{
        this.setState({click: 'Click to open!'});
      }
    }
  render() {

    return (
      <div className="main">
    <input onClick={this.clickClose} type="checkbox" id="card-toggle" value="selected" />
    <label id="card" className="card" htmlFor="card-toggle">
        <div className="front face">
          <img src="http://amelia.hicks.house/front.png" />
        </div>
        <div className="inner-top face">
          <div className="contents">
            <h2>Dear <span id="name">friend</span>,</h2>
            <p>Please join us in celebrating Amelia's 5th birthday!</p>
          </div>
        </div>
        <div className="inner-bottom face">
          <div className="details">
            <div className="time">
              <p>Monday, January 1st</p>
              <p>6 - 8 pm</p>
            </div>
            <div className="address">
              <p>Party Venue</p>
              <p>123 Main Street</p>
              <p>Somewhere, Ohio, 12345</p>
            </div>
            <div className="rsvp">
              <p>Please RSVP to Amelia's Mom</p>
              <p>(555) 555-5555</p>
            </div>
          </div>
        </div>
        <p id="notice" className="show">{this.state.click}</p>  
      </label>
  </div>
    );
  }
}

export default App;
