import React from 'react';
import "./grid.css";

export const Row = (props) =>{
  return <div className="grid-row">
    {props.children}
  </div>
}

export const ColAuto=(props)=>{
  return <div className="grid-column">
    {props.children}
  </div>
}