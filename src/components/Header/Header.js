// ./src/pages/ThankYou.js
import React, { Component } from 'react';
import Workshop from '../Workshop/Workshop';
import Modal from '../Modal/Modal';
import './Header.css';
class ThankYou extends Component {
  render() {
    return(
      <div>
        <div className="row">
          <div className="col-md-8 col-md-offset-1">
            <h1>Lets Tango!</h1>
          </div>
          <div className="col-md-3">
            <div className="btn card-1 login-signup">Log In</div>
            <div className="btn card-1 login-signup">Sign Up</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 col-md-offset-1">
            <div className="row">
              <div className="btn card-1">English</div>
              <div className="btn card-1">Spanish</div>
            </div>
            <div className="row" style={{marginTop: 80}}>
              <div className="btn card-1 tango-info">Tango Instruction</div>
            </div>
            <div className="row">
              <div className="btn card-1 tango-info">Tango Travel</div>
            </div>
            <div className="row">
              <div className="btn card-1 tango-info">Tango Music</div>
            </div>
            <div className="row">
              <div className="btn card-1 tango-info">Performances</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-md-8 col-md-offset-2"><h2>Upcoming Workshops</h2></div>
            <Workshop date="October 21 & 22" dance ="Tango" workshop="Alex Krebs" location="Chelsea Studios"/>
            <Workshop date="October 28 & 29" dance ="Tango" workshop="Carolina Del River" location="Stepping Out"/>
            <Workshop date="November 3, 4, 5, 10" dance ="Tango" workshop="Gabriel Misse" location="Ripley Grier Studios"/>
          </div>
        </div>
      </div>
    )
  }
}
export default ThankYou;
