import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Header from '../components/Header';

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
});

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    console.log('APP.jsx props', this.props);
    return (
      <div>
        <a href="/" id="txokos">TXOKOS</a>
        <Header user={this.props.user} />
        <div className="landingPage" />
        <img src="https://images.earthtouchnews.com/media/1516126/pink_fairy_armadillo_nigiri_2015-11-19.jpg" />
      </div>
    );
  }
}

export default connect(mapStateToProps, actions)(App);
