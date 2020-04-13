import {
  TOGGLE_BUTTON,
  FETCH_BREEDS_SUCCESS,
  FETCH_BREEDS_FAIL,
  FETCH_CAT_BY_ID_SUCCESS,
  FETCH_BREEDS_INIT,
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



const fetchCatsFail = (errors) => {
  return {
    type: FETCH_BREEDS_FAIL,
    errors
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
    dispatch(createAlert('Something went wrong', "danger"))

    dispatch({
      type: FETCH_BREEDS_FAIL,
      payload: err
    });
  }
}

