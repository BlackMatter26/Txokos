import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import MyEvents from '../components/MyEvents';
import EventDetails from '../components/EventDetails';
import SidePanel from '../components/SidePanel';
import EventForm from '../components/EventForm';


const mapStateToProps = ({ events, auth }) => ({
  eventsImHosting: events.eventsImHosting,
  listOfAttendees: events.listOfAttendees,
  seeEventDetails: events.seeEventDetails,
  listOfInvited: events.listOfInvited,
  user: auth.user,
  foodsToBring: events.foodsToBring,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

class HostViewContainer extends Component {
  constructor(props) {
    super(props);
    this.handleNewEventClick = this.handleNewEventClick.bind(this);
    this.handleEventCreatedClick = this.handleEventCreatedClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      createNewEvent: false,
      eventName: null,
      location: null,
      eventTime: null,
      maxAttend: null,
    };
  }

  componentDidMount() {
    this.props.loadEventsHosting(this.props.user[0].user_id);
  }

  handleNewEventClick() {
    this.setState({ createNewEvent: true });
  }

  handleEventCreatedClick() {
    this.props.createEvent(this.state);
    this.setState({ createNewEvent: false });
  }

  handleChange(event) {
    const newState = this.state;
    newState[event.target.id] = event.target.value;
    console.log(event.target.value);
    this.setState(newState);
  }

  render() {
    const createNewEvent = this.state.createNewEvent;
    let button;

    if (createNewEvent) {
      button = <EventForm handleClick={this.handleEventCreatedClick} formDetails={this.state} handleChange={this.handleChange} />;
    } else {
      button = (
        <div>
          <button type="submit" onClick={this.handleNewEventClick}>Create Event</button>
          <div className="hostViewOuterDiv">
            <MyEvents id="myEvents" eventsImHosting={this.props.eventsImHosting} listAttendees={this.props.listAttendees} listFood={this.props.listFood} />
            <SidePanel id="sidePanel" listOfAttendees={this.props.listOfAttendees} seeEventDetails={this.props.seeEventDetails} listFood={this.props.foodsToBring} />
          </div>
        </div>
      );
    }

    return (
      <div>
        <div>
          {button}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HostViewContainer);
