import React from 'react';

const Pagination = ({ prevPage, nextPage, currentPage }) => {
  return (
    <div className="pagination">
      {prevPage && <button onClick={prevPage}>Previous</button>}
      <span>Page {currentPage}</span>
      {nextPage && <button onClick={nextPage}>Next</button>}
    </div>
  );
};

export default Pagination;
