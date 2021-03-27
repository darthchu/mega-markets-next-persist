import React, { Component } from 'react';
import MarketCreator from '../components/MarketCreator.jsx'
import MarketsDisplay from '../components/MarketsDisplay.jsx'


const MarketsContainer = (props) => {
  return(
    <div className="innerbox">
      <MarketCreator handleClick={props.handleClick} handleChange={props.handleChange}/>
      <MarketsDisplay marketList={props.marketList}/>
    </div>
  );
}

export default MarketsContainer;
