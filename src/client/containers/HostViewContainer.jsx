import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import MyEvents from '../components/MyEvents';
import EventDetails from '../components/EventDetails';

const mapStateToProps = ({ events }) => ({
  eventsImHosting: events.eventsImHosting
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

class HostViewContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadEventsHosting();
  }
  render() {
    return (
      <div className="hostViewOuterDiv">
        <MyEvents eventsImHosting={this.props.eventsImHosting} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostViewContainer);
 