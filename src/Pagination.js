
import Pagination from 'react-bootstrap/Pagination';
import React, { useState,useEffect } from 'react';


const PaginationBasic = ({results,setPage}) => {

    let active = 1;
    let items = [];
    for (let number = 1; number <= (results/200); number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }

    const pageChanged = (e)=> {
        setPage(e.target.text)
   }

return (
  <div>
    <Pagination size="sm" onClick={pageChanged} activePage={5}>{items}</Pagination>
  </div>
);
}

export default PaginationBasic