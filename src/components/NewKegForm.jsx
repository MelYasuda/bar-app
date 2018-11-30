import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function CreateForm(props) {
  let _brand = null;
  let _name = null;
  let _photo = null;
  let _abv = null;
  let _pintsLeft = null

  function handleFormSubmit(event){
    event.preventDefault();

    props.onCreateNewLiquior({brand: _brand.value, name: _name.value, photo: _photo.value, abv: _abv.value, pintsLeft: _pintsLeft.value});
    _brand.value = '';
    _name.value = '';
    _photo.value = '';
    _abv.value = '';
    _pintsLeft.value = ''
  }

  return(
    <div>
      <form onSubmit={handleFormSubmit}>
        Liquor Brand: <input type="text" ref={(input)=>{_brand=input } }/><br />
        Liquor Name: <input type="text" ref={(input)=>{ _name=input } } /><br />
        Photo URL: <input type="text" ref={(input)=>{ _photo=input }} /><br />
        ABV: <input type="text" ref={(input)=>{ _abv=input }} /><br />
        Pints Left: <input type="text" ref={(input) => _pintsLeft=input}/><br />
        <button className='btn btn-success' type='submit'>Create New Liquor!</button>
      </form>
    </div>
  );
}

export default CreateForm;