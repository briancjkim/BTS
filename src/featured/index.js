import React from 'react'
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';

const featured = () => {
  return (
    <div style={{ positoin: 'relative' }}>
      <Carrousel></Carrousel>
      <div className="artist_name">
        <div className="wrapper">BTS</div>
      </div>
      <TimeUntil></TimeUntil>
    </div>
  )
}

export default featured
