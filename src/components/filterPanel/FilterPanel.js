import React from "react";
import {Filter} from "./ui"


export const FilterPanel = () => {
  const label= {}
  const count= {}
  
  return (
    <ul>
      <Filter label={label} count ={count} />
    </ul>
  )
}