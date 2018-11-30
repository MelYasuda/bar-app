import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Keg(props) {

  function handlePintSold(id) {
    props.onDecreaseKeg(id);
  }

  return (
    <div className='col-md-3' style={{ width: 18 + 'em' }}>
      <img className="card-img-top" src={props.photo} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <ul className="card-text">
          <li>Liquir brand: {props.brand}</li>
          <li>Liquir Name: {props.price}</li>
          <li>ABV: {props.abv}</li>
          <li>Pints left: {props.pintsLeft}</li>
        </ul>
        <button onClick={() => handlePintSold(props.index) } className="btn btn-primary">
          Pint sold
        </button>
      </div>
    </div>
  );
}

export default Keg;

Keg.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
};