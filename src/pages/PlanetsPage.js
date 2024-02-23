

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import PlanetCard from '../components/PlanetCard';
// import Pagination from '../components/Pagination';
// import '../App.css';

// const PlanetsPage = () => {
//   const [planets, setPlanets] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [prevPage, setPrevPage] = useState(null);
//   const [nextPage, setNextPage] = useState(null);

//   useEffect(() => {
//     const fetchPlanets = async (page = 1) => {
//       try {
//         const response = await axios.get(`https://swapi.dev/api/planets/?page=${page}`);
        
//         if (response.data.results.length > 0) {
//           // If there are planets, update state
//           setPlanets(response.data.results);
//           setPrevPage(response.data.previous);
//           setNextPage(response.data.next);
//         } else {
//           // If no planets, show "Nothing Here"
//           setPlanets([]);
//           setPrevPage(null);
//           setNextPage(null);
//         }
//       } catch (error) {
//         console.error('Error fetching planets:', error);
//       }
//     };

//     fetchPlanets(currentPage);
//   }, [currentPage]);

//   const handlePrevPage = () => {
//     setCurrentPage((prev) => prev - 1);
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prev) => prev + 1);
//   };

//   return (
//     <div className="planets-page">
//       <h1>Star Wars Planets Directory</h1>
//       <div className="planet-cards">
//         {planets.map((planet) => (
//           <Link
//             key={planet.url}
//             to={{
//               pathname: `/residents/${encodeURIComponent(planet.name)}`,
//               state: { residents: planet.residents },
//             }}
//             className="planet-link"
//           >
//             <PlanetCard planet={planet} />
//           </Link>
//         ))}
//         {planets.length === 0 && <p>Nothing Here</p>}
//       </div>
//       <Pagination prevPage={handlePrevPage} nextPage={handleNextPage} currentPage={currentPage} />
//     </div>
//   );
// };

// export default PlanetsPage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PlanetCard from '../components/PlanetCard';
import Pagination from '../components/Pagination';
import '../App.css';

const PlanetsPage = () => {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanets = async (page = 1) => {
      try {
        setLoading(true);
        const response = await axios.get(`https://swapi.dev/api/planets/?page=${page}`);
        
        if (response.data.results.length > 0) {
          setPlanets(response.data.results);
          setPrevPage(response.data.previous);
          setNextPage(response.data.next);
        } else {
          setPlanets([]);
          setPrevPage(null);
          setNextPage(null);
        }
      } catch (error) {
        console.error('Error fetching planets:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets(currentPage);
  }, [currentPage]);

  const handlePrevPage = () => {
    if (prevPage) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (nextPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="planets-page">
      <h1>Star Wars Planets Directory</h1>
      <div className="planet-cards">
        {loading ? (
          <p>Loading...</p>
        ) : (
          planets.map((planet) => (
            <Link
              key={planet.url}
              to={{
                pathname: `/residents/${encodeURIComponent(planet.name)}`,
                state: { residents: planet.residents },
              }}
              className="planet-link"
            >
              <PlanetCard planet={planet} />
            </Link>
          ))
        )}
        {planets.length === 0 && !loading && <p>Nothing Here</p>}
      </div>
      <Pagination
        prevPage={handlePrevPage}
        nextPage={handleNextPage}
        currentPage={currentPage}
        prevPageExists={prevPage !== null}
        nextPageExists={nextPage !== null}
      />
    </div>
  );
};

export default PlanetsPage;

