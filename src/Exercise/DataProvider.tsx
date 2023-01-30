import React from 'react'
/**
 * This is the data provider component
 * It's sole responsibility is to provide data in props to another component
 * 
 */

enum COUNTRIES {
  USA = "United States of America",
  UK = "United Kingdom",
  EU = "European Union" 
}

export class Person{
  id: number;
  name: string;
  age: number;
  country: COUNTRIES;

  constructor(id: number, name: string, age: number, country: COUNTRIES){
    this.id = id;
    this.name = name;
    this.age = age;
    this.country = country;
  }
}

export const DUMMY_DATA = [
  new Person(1, "John Dow", 33, COUNTRIES.USA),
  new Person(2, "Jane Dow", 63, COUNTRIES.UK),
  new Person(3, "Mike Low", 26, COUNTRIES.EU),
  new Person(4, "Jimmy Schmidt", 26, COUNTRIES.USA),
  new Person(5, "James Joel", 26, COUNTRIES.USA),
]

