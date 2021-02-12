import React from 'react';

import './Home.scss';
import PropertyCard from '../../shared/PropertyCard/PropertyCard';
import propertyData from '../../../helpers/data/propertyData';

class Home extends React.Component {
  state = {
    properties: [],
  }

  getInfo = () => {
    propertyData.getAllProperties()
      .then((properties) => this.setState({ properties }))
      .catch((err) => console.error('unable to get all properties: ', err));
  }

  componentDidMount() {
    this.getInfo();
  }

  render() {
    const { properties } = this.state;
    const makePropertyCards = properties.map((property) => <PropertyCard key={property.id} property={property}/>);

    return (
      <div className="Home">
        <h1 className="text-center m-3">Properties</h1>
        <div className="row d-flex justify-content-center">
          {makePropertyCards}
        </div>
      </div>
    );
  }
}

export default Home;
