// ./src/pages/ThankYou.js
import React, { Component } from 'react';
import './Workshop.css';
class ThankYou extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <div>
        <div className="col-md-12">
          <div className="col-md-8 col-md-offset-2">
            <div className="btn card-1 workshop">
              <div style={{color: "#F0AD4E"}}>{this.props.date}</div>
              <div style={{color: "#5BC0DE"}}>{this.props.workshop}</div>
              <div style={{color: "#D9534F"}}>{this.props.dance}</div>
              <div style={{color: "#8998B7"}}>{this.props.location}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ThankYou;
