import React from 'react'
import { Person } from './DataProvider'

interface PersonProp{
    person: Person;
}

const DataDisplayer = (props: PersonProp) => {
  return (
    <li key={props.person.id}>
        <h2>{props.person.name}</h2>
        <h2>{props.person.age}</h2>
        <h2>{props.person.country}</h2>
    </li>
  )
}

export default DataDisplayer