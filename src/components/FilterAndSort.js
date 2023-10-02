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
    <div>
      <h2>Filter and Sort</h2>
      <div>
        <label>
          Filter by Price:
          <input
            type="text"
            name="price"
            value={filters.price}
            onChange={handleFilterChange}
          />
        </label>
      </div>
      <div>
        <label>
          Sort by:
          <select onChange={handleSortChange}>
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
