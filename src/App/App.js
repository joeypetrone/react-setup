import React from 'react';

import Home from '../components/pages/Home/Home';

import LeafletMap from '../components/shared/LeafletMap/LeafletMap';


class App extends React.Component {
  state = {
    zoom: 20,
  }

  componentDidMount() {
    this.setState({ lat: 36.159839, lng: -86.778971 });
  }

  render() {
    const { lat, lng } = this.state;

    return (
      <div className="App">
        <LeafletMap lat={lat} lng={lng}/>
        <Home />
     </div>
    );
  }
}

export default App;
