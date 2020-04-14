import {
  TOGGLE_BUTTON,
  FETCH_BREEDS_SUCCESS,
  FETCH_FAIL,
  FETCH_BREEDS_INIT,
  FETCH_BREED
} from './types';
import axios from 'axios';
import {createAlert} from './createAlert'
//import future types into object above from types file


//below is where the logic of your action would happen before passing to the reducer

export const toggleButtonAction = () => {
  return {
    type: TOGGLE_BUTTON
  }
};


const fetchBreedsInit = () => {
  return {
    type: FETCH_BREEDS_INIT
  }
}


export const getbreeds = (cat) => async dispatch => {

  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    dispatch(fetchBreedsInit())
    const url = cat ? `https://breedscat.herokuapp.com/api/v1/breeds?name=${cat}` : 'https://­breedscat.herokuapp.c­om/api/v1/breeds';
    const res = await axios.get(url, config);
    console.log(res)
    dispatch({
      type: FETCH_BREEDS_SUCCESS,
      payload: res.data
    });
  } catch (err) {

    dispatch({
      type: FETCH_FAIL,
      payload: err
    });
  }
}

export const getbreedById = id => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    dispatch(fetchBreedsInit());
    const res = await axios.get(`https://­breedscat.herokuapp.c­om/api/v1/breeds/${id}`, config);
    dispatch({
      type: FETCH_BREED,
      payload: res.data
    });
  } catch (error) {
    dispatch(createAlert('Something went wrong', "danger"))

    dispatch({
      type: FETCH_FAIL,
      payload: error
    });
  }
};

