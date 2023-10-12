import React from 'react';

const Pagination = ({ setPageNumber }) => {
  const loadMore = () => {
    setPageNumber((prevPageNumber) => {
      const newPageNumber = Math.min(Math.max(prevPageNumber + 1, 1), 42);
      return newPageNumber;
    });
  };

  return (
    <div className='text-center poppins'>
      <button type="button" className="btn btn-link" onClick={loadMore}>
        LOAD MORE
      </button>
    </div>
  );
};

export default Pagination;
