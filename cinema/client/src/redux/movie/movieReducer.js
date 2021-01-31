import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_SUCESS,
  FETCH_MOVIES_FAIL,
} from "./movieTypes";

const initialState = {
  loading: false,
  error: "",
  movies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIES_SUCESS:
      return {
        loading: false,
        error: "",
        movies: action.payload,
      };
    case FETCH_MOVIES_FAIL:
      return {
        loading: false,
        error: action.payload,
        movies: [],
      };
    default:
      return state;
  }
};

export default movieReducer;
