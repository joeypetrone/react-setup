import React from 'react';
import PropTypes from 'prop-types';

import './PropertyCard.scss';
import LeafletMap from '../LeafletMap/LeafletMap';

class PropertyCard extends React.Component {
  static propTypes = {
    property: PropTypes.object.isRequired,
  }

  viewSingleProperty = (e) => {
    e.preventDefault();
    const { property } = this.props;
    console.log('Lat/Long', property.lat, property.lng);
  }

  render() {
    const { property } = this.props;

    return (
      <div className="PropertyCard col-3 m-2">
        <div className="card">
          <img className="card-img-top" src="https://www.visitmusiccity.com/sites/www/files/styles/large/public/2019-03/Map.jpg?itok=BR8CB1t9" alt="nashville map" />
          <div className="card-body">
            <h5 className="card-title">{property.name}</h5>
            <p className="card-text">Lat/Lng: {property.lat} {property.lng}</p>
            <button className="btn btn-primary" onClick={this.viewSingleProperty}>View</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PropertyCard;
