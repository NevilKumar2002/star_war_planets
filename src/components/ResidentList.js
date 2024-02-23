import React from 'react';
import ResidentCard from './ResidentCard';

const ResidentList = ({ residents }) => {
  return (
    <div className="resident-list">
      {/* <h3>Residents:</h3> */}
      <div className='residents-list-container'>
        {residents.map((resident) => (
          <ResidentCard key={resident.url} resident={resident} />
        ))}
      </div>
    </div>
  );
};

export default ResidentList;

// import React from 'react';
// import ResidentCard from './ResidentCard';

// const ResidentList = ({ residents }) => {
//     console.log('ResidentList', residents);
//   return (
//     <div className="resident-list">
//       <h3>Residents:</h3>
//       <ul>
//         {residents.map((resident) => (
//           <ResidentCard key={resident.url} resident={resident} />
//         ))}
        
//       </ul>
//     </div>
//   );
// };

// export default ResidentList;
