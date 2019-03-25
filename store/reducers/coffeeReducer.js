import * as actionTypes from "../actions/types";
import starbucks from "../../assets/images/starbucks.png";
import costa from "../../assets/images/costa.png";
import carribu from "../../assets/images/carribu.png";
import starbucks2 from "../../assets/images/starbucks.jpg";
import costa2 from "../../assets/images/costa.jpg";
import carribu2 from "../../assets/images/carribu.jpg";

const initialState = {
  coffeeshops: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  	case actionTypes.GET_COFFEESHOPS:
  	return {
        ...state,
        coffeeshops: action.payload,
        loading:false,
    };
    case actionTypes.COFFEESHOPS_LOADING:
  	return {
        ...state,
        loading:true,
    };
    default:
    return state;
  }
};
export default reducer;