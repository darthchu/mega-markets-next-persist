import React from 'react';
import MarketDisplay from './MarketDisplay.jsx'

const MarketsDisplay = (props) => {
  
  const displays = [];
  for (let i = 0; i < props.marketList.length; i++) {
    displays.push(<MarketDisplay 
      marketId={props.marketList[i].marketId} 
      marketLocation={props.marketList[i].location} 
      marketCards={props.marketList[i].cards} 
      totalCards={props.marketList[i].totalCards}
      key={`Market Display ${i}`}
    />);
  }
  
  return(
    <div className="displayBox">
      <h4>Markets</h4>
      { displays }
    </div>
  );
};

export default MarketsDisplay;