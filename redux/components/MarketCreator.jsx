import React from 'react';

const MarketCreator = props => {
  return (
    <div>
      <h4>Create New Market</h4>
      <div className='user-interface' style={styles['user-inteface']}>
        <h4>Location: </h4>
        <input id='text-box' style={styles['text-box']} onChange={props.handleChange}/>
        <button id='submit-btn' style={styles['submit-btn']} onClick={props.handleClick}>Add Market</button>
      </div>
    </div>
  );
};

const styles = {
  'text-box': {
    width: '200px',
    height: '26px',
    marginLeft: '0px'
  },

  '.user-interface': {
    display: 'flex',
    'flex-direction': 'row',
    'align-items': 'center'
  }
}

export default MarketCreator
