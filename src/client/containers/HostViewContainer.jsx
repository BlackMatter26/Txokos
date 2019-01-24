import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import MyEvents from '../components/MyEvents';
import EventDetails from '../components/EventDetails';
import SidePanel from '../components/SidePanel';

const mapStateToProps = ({ events, auth }) => ({
  eventsImHosting: events.eventsImHosting,
  listOfAttendees: events.listOfAttendees,
  seeEventDetails: events.seeEventDetails,
  listOfInvited: events.listOfInvited,
  user: auth.user

});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

class HostViewContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadEventsHosting(this.props.user[0].user_id);
  }
  render() {
    return (
      <div className="hostViewOuterDiv">
        <MyEvents id="myEvents" eventsImHosting={this.props.eventsImHosting} listAttendees={this.props.listAttendees} />
        <SidePanel id="sidePanel" listOfAttendees={this.props.listOfAttendees} seeEventDetails={this.props.seeEventDetails}/> 
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostViewContainer);
 