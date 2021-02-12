import React from 'react';
import PropTypes from 'prop-types';

import './SingleProperty.scss';
import LeafletMap from '../LeafletMap/LeafletMap';

class SingleProperty extends React.Component {
  static propTypes = {
    property: PropTypes.object.isRequired,
  }

  render() {
    const { property } = this.props;

    return (
      <div className="SingleProperty">
        <LeafletMap lat={property.lat} lng={property.lng}/>
      </div>
    );
  }
}

export default SingleProperty;
