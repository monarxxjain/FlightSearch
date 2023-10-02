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
    <div className='flex flex-col gap-3'>
      <h2 className='text-3xl'>Multi-City Search</h2>
      {cities.map((city, index) => (
        <div key={index}>
          <input
            type="text"
            value={city}
            onChange={(e) => handleCityChange(index, e.target.value)}
            className='border-black border ms-3 rounded hover:bg-gray-300 px-2'
          />
          <button onClick={() => handleRemoveCity(index)} className='ms-4 border border-red-600 rounded px-2 hover:bg-red-600 hover:text-white transition-all'>Remove</button>
        </div>
      ))}
      <button onClick={handleAddCity} className='w-fit border border-black rounded bg-black text-white px-2 mx-3 hover:bg-white hover:text-black transition-all'>Add City</button>
    </div>
  );
};

export default MultiCitySearch;
