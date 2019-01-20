import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import MyEvents from '../components/MyEvents';
import EventDetails from '../components/EventDetails';

const mapStateToProps = ({ events }) => ({
  eventsImInvitedTo: events.eventsImInvitedTo
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

class AttendeeViewContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadEventsInvited();
  }
  render() {
    return (
      <div className="AttendeeViewOuterDiv">
        <MyEvents eventsImHosting={this.props.eventsImInvitedTo} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttendeeViewContainer);
