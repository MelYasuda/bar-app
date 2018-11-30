import React, { Component } from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
  return (
    <div className='row'>
      {props.kegList.map((keg, index) => (
        <Keg
          name={keg.name}
          photo={keg.photo}
          brand={keg.brand}
          price={keg.price}
          abv={keg.abv}
          pintsLeft={keg.pintsLeft}
          key={index}
        />
      ))}
    </div>
  );
}

export default KegList;

KegList.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  pintsLeft: PropTypes.number
};