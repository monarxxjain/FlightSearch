import React, { useState } from 'react';

const TravelList = ({ travelData }) => {
  // Create a state object to track the details state for each offering
  const [detailsStates, setDetailsStates] = useState({});
  
  // Function to toggle details for a specific offering
  const toggleDetails = (offeringId) => {
    setDetailsStates((prevState) => ({
      ...prevState,
      [offeringId]: !prevState[offeringId]
    }));
  };

  return (
    <div className='flex gap-10 justify-center border-2 border-black rounded-md bg-gray-300 mx-4 p-4'>
      {travelData.map((offering) => (
        <div key={offering.id} className='flex flex-col gap-3'>
          <h2 className='text-2xl font-semibold'>
            {offering.Departure} to {offering.Arrival}
          </h2>
          <p>Price: {offering.ProductBrandOptions[0].ProductBrandOffering[0].Price.TotalPrice}</p>
          <button onClick={() => toggleDetails(offering.id)} className='w-fit bg-'>
            {detailsStates[offering.id] ? 'Hide Details' : 'Show Details'}
          </button>
          {detailsStates[offering.id] && (
            <div>
              {/* Render detailed information here */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TravelList;
