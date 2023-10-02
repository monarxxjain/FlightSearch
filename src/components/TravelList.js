// import React, { useState } from 'react';

// const TravelList = ({ travelData }) => {
//   // Create a state object to track the details state for each offering
//   const [detailsStates, setDetailsStates] = useState({});
  
//   // Function to toggle details for a specific offering
//   const toggleDetails = (offeringId) => {
//     setDetailsStates((prevState) => ({
//       ...prevState,
//       [offeringId]: !prevState[offeringId]
//     }));
//   };

//   return (
//     <div className='flex flex-wrap gap-10 justify-center border-2 border-black rounded-md bg-gray-300 mx-4 p-4'>
//       {travelData.map((offering) => (
//         <div key={offering.id} className='flex flex-col gap-3'>
//           <h2 className='text-2xl font-semibold'>
//             {offering.Departure} to {offering.Arrival}
//           </h2>
//           <p>Price: {offering.ProductBrandOptions[0].ProductBrandOffering[0].Price.TotalPrice}</p>
//           <button onClick={() => toggleDetails(offering.id)} className={`w-fit bg-green-500 rounded px-2 ${detailsStates[offering.id] ? "bg-white border border-green-500 text-red-500" : ""}`}>
//             {detailsStates[offering.id] ? 'Hide Details' : 'Show Details'}
//           </button>
//           {detailsStates[offering.id] && (
//             <div className='border border-gray-400 p-4 rounded-md bg-white'>
//             <h3 className='text-xl font-semibold'>Detailed Information:</h3>
//             <p><strong>Departure:</strong> {offering.Departure}</p>
//             <p><strong>Arrival:</strong> {offering.Arrival}</p>
//             <p><strong>Base Price:</strong> {offering.ProductBrandOptions[0].ProductBrandOffering[0].Price.Base} AUD</p>
//             <p><strong>Total Taxes:</strong> {offering.ProductBrandOptions[0].ProductBrandOffering[0].Price.TotalTaxes} AUD</p>
//             <p><strong>Total Fees:</strong> {offering.ProductBrandOptions[0].ProductBrandOffering[0].Price.TotalFees} AUD</p>
//             <p><strong>Total Price:</strong> {offering.ProductBrandOptions[0].ProductBrandOffering[0].Price.TotalPrice} AUD</p>
//             {/* Add more details as needed */}
//           </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TravelList;



// import allData from '../travelData.json'


// import React, { useState } from 'react';

// const TravelList = ({ travelData }) => {
//   const [selectedDate, setSelectedDate] = useState('');
//   const [detailsStates, setDetailsStates] = useState({});
//   const ReferenceList = allData.CatalogProductOfferingsResponse.ReferenceList;

//   const toggleDetails = (offeringId) => {
//     setDetailsStates((prevState) => ({
//       ...prevState,
//       [offeringId]: !prevState[offeringId],
//     }));
//   };

//   const offeringsByDate = travelData.map((offering) => {
//     const referenceFlight = ReferenceList[0].Flight.find((flight) => flight.id === offering.ProductBrandOptions[0].flightRefs[0]);
//     const departureDate = referenceFlight ? referenceFlight.Departure.date : '';
//     const arrivalDate = referenceFlight ? referenceFlight.Arrival.date : '';
//     return {
//       ...offering,
//       departureDate,
//       arrivalDate
//     };
//   });

//   console.log(offeringsByDate)

//   return (
//     <div className='bg-gray-100 min-h-screen py-10'>
//       <div className='container mx-auto'>
//         <h1 className='text-3xl font-semibold mb-4'>Travel Offerings</h1>
//         <div className='mb-4'>
//           <label className='block text-sm font-medium text-gray-700'>Select Departure Date:</label>
//           <select
//             onChange={(e) => setSelectedDate(e.target.value)}
//             value={selectedDate}
//             className='p-3 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none'
//           >
//             <option value=''>-- Select Date --</option>
//             {ReferenceList[0].Flight.map((flight) => (
//               <option key={flight.id} value={flight.Departure.date}>
//                 {flight.Departure.date}
//               </option>
//             ))}
//           </select>
//         </div>
//         {offeringsByDate.map((offering) => {
//           // console.log(offering.flightName)
//           return (
//           <div key={offering.id} className='bg-white p-4 rounded shadow-lg mb-4'>
//             <h2 className='text-2xl font-semibold'>
//               {offering.Departure} to {offering.Arrival}
//             </h2>
//             <p className='text-lg font-medium mb-2'>
//               Price: {offering.ProductBrandOptions[0].ProductBrandOffering[0].Price.TotalPrice} AUD
//             </p>
//             {/* <p className='text-md font-medium mb-2'>
//               Brand: {offering.ProductBrandOptions[0].ProductBrandOffering[0].BrandInfo.Brand}
//             </p> */}
//             <p className='text-md font-medium mb-2'>
//               {offering.departureDate + " " }
//             </p>
//             <p className='text-md font-medium mb-2'>
//               Additional Brand Attributes:
//             </p>
//             {/* <ul className='list-disc list-inside'>
//               {offering.ProductBrandOptions[0].ProductBrandOffering[0].BrandInfo.AdditionalAttributes.map((attr, index) => (
//                 <li key={index}>{attr}</li>
//               ))}
//             </ul> */}
//             <button
//               onClick={() => toggleDetails(offering.id)}
//               className='bg-green-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-green-600 mt-4'
//             >
//               {detailsStates[offering.id] ? 'Hide Details' : 'Show Details'}
//             </button>
//             {detailsStates[offering.id] && (
//               <div className='mt-4 border-t border-gray-300 pt-4'>
//                 <h3 className='text-lg font-semibold'>Detailed Information:</h3>
//                 <div className='flex gap-10'><p><strong>Departure:</strong> {offering.Departure}</p><p><strong>Departure Date : </strong>{offering.departureDate}</p></div>
//                 <div className='flex gap-10'><p><strong>Arrival:</strong> {offering.Arrival}</p><p><strong>Arrival Date : </strong>{offering.arrivalDate}</p></div>
//                 <p><strong>Base Price:</strong> {offering.ProductBrandOptions[0].ProductBrandOffering[0].Price.Base} AUD</p>
//                 <p><strong>Total Taxes:</strong> {offering.ProductBrandOptions[0].ProductBrandOffering[0].Price.TotalTaxes} AUD</p>
//                 <p><strong>Total Fees:</strong> {offering.ProductBrandOptions[0].ProductBrandOffering[0].Price.TotalFees} AUD</p>
//                 {/* Add more details as needed */}
//               </div>
//             )}
//           </div>
//         )})}
//       </div>
//     </div>
//   );
// };

// export default TravelList;








// import React, { useState } from 'react';
// import allData from '../travelData.json';

// const TravelList = ({ travelData }) => {
//   const [selectedDate, setSelectedDate] = useState('');
//   const [detailsStates, setDetailsStates] = useState({});
//   const ReferenceList = allData.CatalogProductOfferingsResponse.ReferenceList;

//   const toggleDetails = (offeringId) => {
//     setDetailsStates((prevState) => ({
//       ...prevState,
//       [offeringId]: !prevState[offeringId],
//     }));
//   };

//   const offeringsByDate = travelData.map((offering) => {
//     const referenceFlight = ReferenceList[0].Flight.find((flight) => flight.id === offering.ProductBrandOptions[0].flightRefs[0]);
//     const departureDate = referenceFlight ? referenceFlight.Departure.date : '';
//     const arrivalDate = referenceFlight ? referenceFlight.Arrival.date : '';
//     const product = ReferenceList[1].Product.find((p) => p.id === offering.ProductBrandOptions[0].ProductBrandOffering[0].Product[0].productRef);
//     const termsAndConditions = ReferenceList[2].TermsAndConditions.filter((tc) => tc.id === offering.ProductBrandOptions[0].ProductBrandOffering[0].TermsAndConditions.termsAndConditionsRef);
//     // const brand = ReferenceList[3].Brand.find((b) => b.Identifier.value ===  product.ProductBrandOffering[0].Brand[0].brandRef);
//     return {
//       ...offering,
//       departureDate,
//       arrivalDate,
//       product,
//       termsAndConditions,
//       // brand,
//     };
//   });

//   console.log(offeringsByDate);

//   return (
//     <div className='bg-gray-100 min-h-screen py-10'>
//       <div className='container mx-auto'>
//         <h1 className='text-3xl font-semibold mb-4'>Travel Offerings</h1>
//         <div className='mb-4'>
//           <label className='block text-sm font-medium text-gray-700'>Select Departure Date:</label>
//           <select
//             onChange={(e) => setSelectedDate(e.target.value)}
//             value={selectedDate}
//             className='p-3 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none'
//           >
//             <option value=''>-- Select Date --</option>
//             {ReferenceList[0].Flight.map((flight) => (
//               <option key={flight.id} value={flight.Departure.date}>
//                 {flight.Departure.date}
//               </option>
//             ))}
//           </select>
//         </div>
//         {offeringsByDate.map((offering) => {
//           return (
//             <div key={offering.id} className='bg-white p-4 rounded shadow-lg mb-4'>
//               <h2 className='text-2xl font-semibold'>
//                 {offering.Departure} to {offering.Arrival}
//               </h2>
//               <p className='text-lg font-medium mb-2'>
//                 Price: {offering.ProductBrandOptions[0].ProductBrandOffering[0].Price.TotalPrice} AUD
//               </p>
//               <p className='text-md font-medium mb-2'>
//                 {offering.departureDate + ' '}
//               </p>
//               <p className='text-md font-medium mb-2'>
//                 Additional Brand Attributes:
//               </p>
//               <ul className='list-disc list-inside'>
//                 {/* {offering.ProductBrandOptions[0].ProductBrandOffering[0].BrandInfo.AdditionalAttributes.map((attr, index) => (
//                   <li key={index}>{attr}</li>
//                 ))} */}
//               </ul>
//               <button
//                 onClick={() => toggleDetails(offering.id)}
//                 className='bg-green-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-green-600 mt-4'
//               >
//                 {detailsStates[offering.id] ? 'Hide Details' : 'Show Details'}
//               </button>
//               {detailsStates[offering.id] && (
//                 <div className='mt-4 border-t border-gray-300 pt-4'>
//                   <h3 className='text-lg font-semibold'>Detailed Information:</h3>
//                   <div className='flex gap-10'>
//                     <p>
//                       <strong>Departure:</strong> {offering.Departure}
//                     </p>
//                     <p>
//                       <strong>Departure Date :</strong> {offering.departureDate}
//                     </p>
//                   </div>
//                   <div className='flex gap-10'>
//                     <p>
//                       <strong>Arrival:</strong> {offering.Arrival}
//                     </p>
//                     <p>
//                       <strong>Arrival Date :</strong> {offering.arrivalDate}
//                     </p>
//                   </div>
//                   <p>
//                     <strong>Base Price:</strong> {offering.ProductBrandOptions[0].ProductBrandOffering[0].Price.Base} AUD
//                   </p>
//                   <p>
//                     <strong>Total Taxes:</strong> {offering.ProductBrandOptions[0].ProductBrandOffering[0].Price.TotalTaxes} AUD
//                   </p>
//                   <p>
//                     <strong>Total Fees:</strong> {offering.ProductBrandOptions[0].ProductBrandOffering[0].Price.TotalFees} AUD
//                   </p>
//                   <p>
//                     <strong>Product:</strong> {offering.product.name}
//                   </p>
//                   <p>
//                     {/* <strong>Terms and Conditions URL:</strong> {offering.termsAndConditions.BaggageAllowance[0].url} */}
//                   </p>
//                   <p>
//                     {/* <strong>Brand Name:</strong> {offering.brand.name} */}
//                   </p>
//                   {/* Add more details as needed */}
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default TravelList;







import React, { useState } from 'react';
import allData from '../travelData.json';

const TravelList = ({ travelData }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [detailsStates, setDetailsStates] = useState({});
  const ReferenceList = allData.CatalogProductOfferingsResponse.ReferenceList;

  const toggleDetails = (offeringId) => {
    setDetailsStates((prevState) => ({
      ...prevState,
      [offeringId]: !prevState[offeringId],
    }));
  };

  const offeringsByDate = travelData.map((offering) => {
    const referenceFlight = ReferenceList[0].Flight.find((flight) => flight.id === offering.ProductBrandOptions[0].flightRefs[0]);
    const departureDate = referenceFlight ? referenceFlight.Departure.date : '';
    const arrivalDate = referenceFlight ? referenceFlight.Arrival.date : '';
    const product = ReferenceList[1].Product.find((p) => p.id === offering.ProductBrandOptions[0].ProductBrandOffering[0].Product[0].productRef);
    const termsAndConditions = ReferenceList[2].TermsAndConditions.filter((tc) => tc.id === offering.ProductBrandOptions[0].ProductBrandOffering[0].TermsAndConditions.termsAndConditionsRef);
    // const brand = ReferenceList[3].Brand.find((b) => b.id === product.ProductBrandOffering[0].Brand[0].brandRef); // Updated this line
    return {
      ...offering,
      departureDate,
      arrivalDate,
      product,
      termsAndConditions,
      // brand,
    };
  });

  // Filter offerings based on the selected departure date
  const filteredOfferings = selectedDate
    ? offeringsByDate.filter((offering) => offering.departureDate === selectedDate)
    : offeringsByDate;

  return (
    <div className='bg-gray-100 min-h-screen py-10'>
      <div className='container mx-auto'>
        <h1 className='text-3xl font-semibold mb-4'>Travel Offerings</h1>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>Select Departure Date:</label>
          <select
            onChange={(e) => setSelectedDate(e.target.value)}
            value={selectedDate}
            className='p-3 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none'
          >
            <option value=''>-- Select Date --</option>
            {ReferenceList[0].Flight.map((flight) => (
              <option key={flight.id} value={flight.Departure.date}>
                {flight.Departure.date}
              </option>
            ))}
          </select>
        </div>
        {filteredOfferings.map((offering) => {
          return (
            <div key={offering.id} className='bg-white p-4 rounded shadow-lg mb-4'>
              <h2 className='text-2xl font-semibold'>
                {offering.Departure} to {offering.Arrival}
              </h2>
              <p className='text-lg font-medium mb-2'>
                Price: {offering.ProductBrandOptions[0].ProductBrandOffering[0].Price.TotalPrice} AUD
              </p>
              <p className='text-md font-medium mb-2'>
                {offering.departureDate + ' '}
              </p>
              <p className='text-md font-medium mb-2'>
                Additional Brand Attributes:
              </p>
              <ul className='list-disc list-inside'>
                {/* {offering.ProductBrandOptions[0].ProductBrandOffering[0].BrandInfo.AdditionalAttributes.map((attr, index) => (
                  <li key={index}>{attr}</li>
                ))} */}
              </ul>
              <button
                onClick={() => toggleDetails(offering.id)}
                className='bg-green-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-green-600 mt-4'
              >
                {detailsStates[offering.id] ? 'Hide Details' : 'Show Details'}
              </button>
              {detailsStates[offering.id] && (
                <div className='mt-4 border-t border-gray-300 pt-4'>
                  <h3 className='text-lg font-semibold'>Detailed Information:</h3>
                  <div className='flex gap-10'>
                    <p>
                      <strong>Departure:</strong> {offering.Departure}
                    </p>
                    <p>
                      <strong>Departure Date :</strong> {offering.departureDate}
                    </p>
                  </div>
                  <div className='flex gap-10'>
                    <p>
                      <strong>Arrival:</strong> {offering.Arrival}
                    </p>
                    <p>
                      <strong>Arrival Date :</strong> {offering.arrivalDate}
                    </p>
                  </div>
                  <p>
                    <strong>Base Price:</strong> {offering.ProductBrandOptions[0].ProductBrandOffering[0].Price.Base} AUD
                  </p>
                  <p>
                    <strong>Total Taxes:</strong> {offering.ProductBrandOptions[0].ProductBrandOffering[0].Price.TotalTaxes} AUD
                  </p>
                  <p>
                    <strong>Total Fees:</strong> {offering.ProductBrandOptions[0].ProductBrandOffering[0].Price.TotalFees} AUD
                  </p>
                  <p>
                    <strong>Product:</strong> {offering.product.name}
                  </p>
                  <p>
                    <strong>Terms and Conditions URL:</strong> {offering.termsAndConditions.BaggageAllowance[0].url}
                  </p>
                  <p>
                    {/* <strong>Brand Name:</strong> {offering.brand.name} */}
                  </p>
                  {/* Add more details as needed */}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TravelList;

