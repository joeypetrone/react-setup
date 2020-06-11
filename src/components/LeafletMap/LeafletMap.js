import React from 'react';
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';

class LeafletMap extends React.Component {
  state = {
    lat: 36.159839,
    lng: -86.777971,
    zoom: 20,
  };

  render() {
    return (
      <div className="LeafletMap">
          {
          this.props.foundPin
            ? <Map
                 center={[this.state.lat, this.state.lng]}
                 zoom={this.state.zoom}
                 style={{ width: '100%', height: '900px' }}
              >
              <TileLayer
                attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
              <Marker position={this.props.foundPin}>
                <Popup>
                  <span>ADDRESS: Loading...</span>
                  <br/>
                  <span>BATTALION: <span role="img" aria-label="">🤷‍♀️</span></span><br/>
                </Popup>
              </Marker>
             </Map>
            : 'Data is loading...'
          }
      </div>
    );
  }
}

export default LeafletMap;
