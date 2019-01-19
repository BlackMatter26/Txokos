import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../actions/actions';
import MyEvents from '../components/MyEvents';
import EventDetails from '../components/EventDetails';

const mapStateToProps = ({ events }) => ({
    eventsImHosting: events.eventsImHosting
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

const HostViewContainer = props => (
    <div className="hostViewOuterDiv">
      <MyEvents eventsImHosting={props.eventsImHosting}/>
      <EventDetails />
    </div>
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostViewContainer)
