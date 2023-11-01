import { getFilters } from "./api";
import React from "react";


export function Filter() {
  const filterOptions = getFilters();

  return (
    <div className="filter-items">
      {filterOptions.map(({label,count},index) => (
        <div key={index}>
          <span >{label}</span>
          <span >({count})</span>
        </div>
      ))}
    </div>
  );
}
// 

