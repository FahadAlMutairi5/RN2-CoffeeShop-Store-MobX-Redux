import * as actionTypes from "./types";

import axios from "axios";

export const fetchCoffee = () => {
  return async dispatch => {
    try {
      const res = await axios.get("http://coffee.q8fawazo.me/api/?format=json");
      const Coffee = res.data;
      dispatch({ type: actionTypes.GET_COFFEESHOPS, payload: Coffee });
    } catch (err) {
      console.error(err);
    }
  };
};
export const setCoffeeShopsLoading = () => {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.COFFEESHOPS_LOADING});
    } catch (err) {
      console.error(err);
    }
  };
};