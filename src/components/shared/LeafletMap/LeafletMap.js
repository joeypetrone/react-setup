import React from 'react';
import PropTypes from 'prop-types';
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';

import './LeafletMap.scss';

class LeafletMap extends React.Component {
  static propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }

  state = {
    zoom: 20,
  };

  render() {
    const { lat, lng } = this.props;

    return (
      <div className="LeafletMap m-3 text-center">
        <h1 className="mb-4">Leaflet Map</h1>
          {
          this.props.lat
            ? <Map
                 center={[lat, lng]}
                 zoom={this.state.zoom}
              >
              <TileLayer
                attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
              <Marker position={[lat, lng]}>
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
