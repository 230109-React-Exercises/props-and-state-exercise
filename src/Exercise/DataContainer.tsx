import React from 'react'
import { DUMMY_DATA } from './DataProvider'
import DataDis from './DataDis';

/**
 * This is the parent component that will be providing data to the child components
 * It's sole responsibility is to contain the child components and provide them data
 */

export const DataContainer = () => {

  // DUMMY_DATA is an array of people
  // Look at the DataProvider.tsx to see more info
  let data = DUMMY_DATA;

  return (
    <>
      <ul>
        {
          data.map(person => {
            return(
              <DataDis person={person}/>
            );
          })
        }
      </ul>
    </>
  )
}
