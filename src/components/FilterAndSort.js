import React, { useState } from 'react';

const FilterAndSort = ({ travelData, onFilter, onSort }) => {
  const [filters, setFilters] = useState({
    price: '',
    departureTime: '',
    airlineBrand: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    onFilter({ ...filters, [name]: value });
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    onSort(value);
  };

  return (
    <div className='flex flex-col gap-3 p-4'>
      <h2 className='text-3xl'>Filter and Sort</h2>
      <div>
        <label className='flex'>
          Filter by Price:
          <input
            type="text"
            name="price"
            value={filters.price}
            onChange={handleFilterChange}
            className='flex border-black border ms-3 rounded hover:bg-gray-300 px-2'
          />
        </label>
      </div>
      <div>
        <label className='flex'>
          Sort by:
          <select onChange={handleSortChange} className='flex border-black border ms-3 rounded hover:bg-gray-300'>
            <option value="">None</option>
            <option value="price">Price</option>
            <option value="departureTime">Departure Time</option>
            <option value="airlineBrand">Airline Brand</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default FilterAndSort;
