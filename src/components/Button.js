import React from 'react';

// Connect is the glue between the redux store and the components.
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// This is where you will import your actions.
import { increment, decrement } from '../actions/index.js';

class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.increment}>INCREMENT</button>
        <button onClick={this.props.decrement}>DECREMENT</button>
      </div>
    );
  }
}

// Map the actions
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ increment, decrement }, dispatch);
}

export default connect(null, mapDispatchToProps)(Button);
