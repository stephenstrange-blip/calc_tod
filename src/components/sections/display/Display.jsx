import './display.css'
import React, { Component } from 'react';


function Display({ value, operator }) {
  console.log(`Length of values transferred to the display function: ${value.length}`)
  if (value.length === 2)
    return (
      <div className='display' key={1}>{value[0] + ' ' + operator + ' ' + value[1]}</div>
    )
  else
    return (
      <div className='display' key={1}>{value[0] + ' ' + operator + ' ' + value[1] + ' = ' + value[2]}</div>
    )
}



export default Display