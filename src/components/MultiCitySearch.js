import React, { useState } from 'react';

const MultiCitySearch = () => {
  const [cities, setCities] = useState(['']);

  const handleAddCity = () => {
    setCities([...cities, '']);
  };

  const handleRemoveCity = (index) => {
    const updatedCities = [...cities];
    updatedCities.splice(index, 1);
    setCities(updatedCities);
  };

  const handleCityChange = (index, value) => {
    const updatedCities = [...cities];
    updatedCities[index] = value;
    setCities(updatedCities);
  };

  return (
    <div>
      <h2>Multi-City Search</h2>
      {cities.map((city, index) => (
        <div key={index}>
          <input
            type="text"
            value={city}
            onChange={(e) => handleCityChange(index, e.target.value)}
          />
          <button onClick={() => handleRemoveCity(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddCity}>Add City</button>
    </div>
  );
};

export default MultiCitySearch;
