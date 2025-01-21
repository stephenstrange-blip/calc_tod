import './display.css'
import React, { Component, useState } from 'react';

const arrOperators = [];
function Display({ value, operator }) {
  console.log(`Length of values transferred to the display function: ${value.length}`)
 
  arrOperators.push(operator);
  console.log(`history of operators used ${arrOperators}`)
  if (value.length === 2)
    return (
      <div className='display' key={1}>{value[0] + ' ' + operator + ' ' + value[1]}</div>
    )
  else if (operator === "=")
    return (
      <div className='display' key={1}>{value[0] + ' ' + arrOperators.at(-2) + ' ' + value[1] + ' = ' + value[2]}</div>
    )
  else return (
    <div className='display' key={1}>{value[0] + ' ' + operator + ' ' + value[1] + ' = ' + value[2]}</div>
  )
}



export default Display