import {Filter} from "./model"
import { filterOptions } from "./filterOptions"

export function getFilters(){
  return filterOptions.map((option) => {
    return new Filter(option);
  })
}
console.log(filterOptions)