import React, { useState } from 'react';

const TravelList = ({ travelData }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      {travelData.map(
        (offering) => (
          <div key={offering.id}>
            <h2>
              {offering.Departure} to {offering.Arrival}
            </h2>
            <p>Price: {offering.ProductBrandOptions[0].ProductBrandOffering[0].Price.TotalPrice}</p>
            <button onClick={toggleDetails}>
              {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
            {showDetails && (
              <div>
                {/* Render detailed information here */}
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default TravelList;
