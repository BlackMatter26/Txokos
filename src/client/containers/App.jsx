import React, { Component } from 'react';
import HostViewContainer from './HostViewContainer';
import AttendeeViewContainer from './AttendeeViewContainer';
import { BrowserRouter as Router, Route, Link, Prompt } from 'react-router-dom';

const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>

export default class App extends Component {
  render() {
    return (
      <div>
        <div id="txokos">TXOKOS</div>
        <Router>
          <div >
            <Route path="/" component={Header}/>
          </div>
        </Router>
        <Router>
          <div>
            <a href="/auth/google">Sign in With Google</a>
            <nav>
              <Link className="navLinks" to="/host">
                Host
              </Link>
              <Link className="navLinks" to="/attendee">
                Attendee
              </Link>
            </nav>
            <div>
              <Route path="/host" component={HostViewContainer} />
              <Route path="/host/details" component={HostViewContainer} />

              <Route path="/attendee" exact component={AttendeeViewContainer} />
            </div>
          </div>
        </Router>
        <div className="landingPage" />
        <img src="https://images.earthtouchnews.com/media/1516126/pink_fairy_armadillo_nigiri_2015-11-19.jpg" />
      </div>
    );
  }
}
