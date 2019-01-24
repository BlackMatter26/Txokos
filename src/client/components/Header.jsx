import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Link, Prompt,
} from 'react-router-dom';
import HostViewContainer from '../containers/HostViewContainer';
import AttendeeViewContainer from '../containers/AttendeeViewContainer';

class Header extends Component {
    renderContent() {
        switch(this.props.user){
            case null: //page hasn't loaded
                return;
            case false: //not logged in
                return (
                        <a href="/auth/google"><img src="https://developers.google.com/identity/images/btn_google_signin_light_normal_web.png"/></a>
                )
            default:
                return(
                    <Router>
          <div>
            <nav>
              <Link className="navLinks" to="/host">
                Host
              </Link>
              <Link className="navLinks" to="/attendee">
                Attendee
              </Link>
              <a className="navLinks" href="/api/logout">
                    Log out
              </a>
            </nav>
            <div>
              <Route path="/host" render={()=>(<HostViewContainer user={this.props.user}/>)} />

              <Route path="/attendee" exact render={()=> (<AttendeeViewContainer user={this.props.user}/>)} />
            </div>
          </div>
        </Router>
        )
    }
  }

  render() {
    return (
          <nav>
              <div className="nav-wrapper" />
              <ul>
                  {this.renderContent()}

                </ul>
            </nav>
    );
  }
}

export default Header;
