
import React, { useState } from "react";
import SweetPagination from "sweetpagination";
import './pagination.css';


function Pagination() {
    const [currentPageData, setCurrentPageData] = useState(new Array(10).fill());
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
   <div className="pagination">

    <SweetPagination
      currentPageData={setCurrentPageData}
      dataPerPage={1}
      getData={items}
      navigation={true}
    />
  </div>
  )
}

export default Pagination