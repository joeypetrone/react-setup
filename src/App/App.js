import React from 'react';

import './App.scss';
import LeafletMap from '../components/LeafletMap/LeafletMap';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div id="map-container"></div>
        <LeafletMap />
      </div>
    );
  }
}

export default App;
