import React, { useState } from 'react';
import TravelList from './components/TravelList';
import FilterAndSort from './components/FilterAndSort';
import MultiCitySearch from './components/MultiCitySearch';
import travelData from './travelData.json';

function App() {
  const [filteredData, setFilteredData] = useState(travelData.CatalogProductOfferingsResponse.CatalogProductOfferings.CatalogProductOffering);

// Function to handle filtering
const handleFilter = (filters) => {
  // Filter based on price
  let filteredResults = travelData.CatalogProductOfferingsResponse.CatalogProductOfferings.CatalogProductOffering;

  if (filters.price) {
    const minPrice = parseFloat(filters.price);
    filteredResults = filteredResults.filter((offering) => {
      const totalPrice = offering.ProductBrandOptions[0].ProductBrandOffering[0].Price.TotalPrice;
      return totalPrice >= minPrice;
    });
  }

  // Update the filteredData state
  setFilteredData(filteredResults);
};

// Function to handle sorting
const handleSort = (sortCriteria) => {
  // Sort based on criteria
  let sortedResults = [...filteredData];

  switch (sortCriteria) {
    case 'price':
      sortedResults.sort((a, b) => {
        const priceA = a.ProductBrandOptions[0].ProductBrandOffering[0].Price.TotalPrice;
        const priceB = b.ProductBrandOptions[0].ProductBrandOffering[0].Price.TotalPrice;
        return priceA - priceB;
      });
      break;
    case 'departureTime':
      sortedResults.sort((a, b) => {
        // Implement sorting by departure time logic here
        // You may need to extract and compare departure times
      });
      break;
    case 'airlineBrand':
      sortedResults.sort((a, b) => {
        // Implement sorting by airline brand logic here
        // You may need to compare airline brand names
      });
      break;
    default:
      // No sorting, use the default order
      break;
  }

  // Update the filteredData state
  setFilteredData(sortedResults);
};

  return (
    <div className="App">
      <h1>Travel List</h1>
      <FilterAndSort
        travelData={travelData}
        onFilter={handleFilter}
        onSort={handleSort}
      />
      <TravelList travelData={filteredData} />
      <MultiCitySearch />
    </div>
  );
}

export default App;
