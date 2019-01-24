import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import MyEvents from '../components/MyEvents';
import EventDetails from '../components/EventDetails';
import SidePanelAttendee from '../components/SidePanelAttendee';

const mapStateToProps = ({ events, auth }) => ({
  eventsImInvitedTo: events.eventsImInvitedTo,
  foodsToBring: events.foodsToBring,
  listOfAttendees: events.listOfAttendees,
  // update state of what the rsvp choice is
  // update state of what the food choice will be
  seeEventDetails: false,
  user: auth.user
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

class AttendeeViewContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadEventsInvited(this.props.user[0].user_id);
  }
  render() {
    return (
      <div className="AttendeeViewOuterDiv">
        <MyEvents id="myEvents" eventsImHosting={this.props.eventsImInvitedTo} />
        <SidePanelAttendee id="sidePanelAttendee" listOfAttendees={this.props.listOfAttendees} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttendeeViewContainer);
