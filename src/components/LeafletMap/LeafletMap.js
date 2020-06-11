import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';

class LeafletMap extends React.Component {
    state = {
      lat: 36.159839,
      lng: -86.777971,
      zoom: 20,
    };

  map = (
    <Map center={[this.state.lat, this.state.lng]} zoom={this.state.zoom}>
      <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
      <Marker position={[this.state.lat, this.state.lng]}>
        <Popup>
          A pretty CSS3 popup. <br/> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  )

  render() {
    return (
      <div className="LeafletMap">
        {console.log('this.map: ', this.map)}
        {ReactDOM.render(this.map, document.getElementById('map-container'))}
      </div>
    );
  }
}

export default LeafletMap;
