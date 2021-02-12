import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllProperties = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/properties.json`)
    .then((result) => {
      const allPropertiesObject = result.data;
      const properties = [];
      if (allPropertiesObject !== null) {
        Object.keys(allPropertiesObject).forEach((propertyId) => {
          const newProperty = allPropertiesObject[propertyId];
          newProperty.id = propertyId;
          properties.push(newProperty);
        });
      }
      resolve(properties);
    })
    .catch((err) => reject(err));
});

export default { getAllProperties };
