import React from 'react';

const MarketDisplay = (props) => {
  return (
    <div className="marketBox" style={styles.container}>
      <p id='desc' styles={styles.desc}>Market ID: {props.marketId}</p>
      <p id='desc' styles={styles.desc}>Location: {props.marketLocation}</p>
      <p id='desc' styles={styles.desc}>Cards: {props.marketCards}</p>
      <p id='desc' styles={styles.desc}>% of total: {props.marketCards ? ((props.marketCards / props.totalCards) * 100).toFixed(2) : '0.00'}</p>
      <button styles={['text-box']} onClick={() => props.handleAddClick(props.marketId)}>Add Card</button>
      <button styles={['text-box']} onClick={() => props.handleDeleteClick(props.marketId)}>Delete Card</button>
    </div>
  )
};

const styles = {
  container: {
    border: '1px solid black',
    height: '100px',
    width: '200px',
    marginLeft: '0px'
  },
  'text-box': {
    width: '200px',
    height: '26px',
    marginLeft: '0px'
  }
}

export default MarketDisplay;
