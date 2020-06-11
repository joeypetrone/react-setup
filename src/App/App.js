/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable quote-props */
import React from 'react';
import LeafletMap from '../components/LeafletMap/LeafletMap';

class App extends React.Component {
  state = {
    foundPin: [],
  }

  componentDidMount() {
    const foundPin = [36.159839, -86.777971];

    this.setState({ foundPin });
  }

  render() {
    return (
      <LeafletMap foundPin={this.state.foundPin}/>
    );
  }
}

export default App;
