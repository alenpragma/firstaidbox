import React, { useState } from "react";

const Pagination = () => {
  let totalItems = 100;
  let itemsPerPage = 5;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination flex'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Change this to change the number of items per page

  // This is your example data array, you should replace this with your actual data
  const exampleData = Array.from({ length: 200 }, (_, i) => i + 1);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = exampleData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Pagination Example</h1>
      <ul className='list-group mb-4'>
        {currentItems.map((item) => (
          <li key={item} className='list-group-item'>
            {item}
          </li>
        ))}
      </ul>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={exampleData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
