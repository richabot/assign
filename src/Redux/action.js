import {
 
  FILTEREDDATA,
  GET_BOOKS_FAILURE,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  
  UPDATE_BOOK_ERROR,
  UPDATE_BOOK_REQUEST,
  UPDATE_BOOK_SUCCESS,
} from "./actionTypes";
import axios from "axios";

//parent function
export const getBooks = (params) => (dispatch) => {
  dispatch({ type: GET_BOOKS_REQUEST });
  return axios
    .get(`https://teknorix.jobsoid.com/api/v1/jobs`, params)
    .then((r) => dispatch({ type: GET_BOOKS_SUCCESS, payload: r.data }))
    .catch((err) => dispatch({ type: GET_BOOKS_FAILURE, payload: err }));
};


export const getfilter=(payload)=>(dispatch)=>(
  
  dispatch({type:FILTEREDDATA,payload})
  )

export const addBooksRequest = () => ({ type: UPDATE_BOOK_REQUEST });
export const addBooksSuccess = (payload) => ({
  type: UPDATE_BOOK_SUCCESS,
  payload,
});
export const addBooksError = (payload) => ({
  type: UPDATE_BOOK_ERROR,
  payload,
});

export const addBooksAPI = (params) => (dispatch) => {
  // console.log(params)
  dispatch(addBooksRequest());
  axios
    .patch(`https://teknorix.jobsoid.com/api/v1/jobs/${params.id}`, {
      author: params.author,
      book_name: params.book,
    })
    .then((r) => dispatch(addBooksSuccess(r.data)))
    .catch((err) => dispatch(addBooksError(err)));
};

//sorting function
// export const increasingBooks = () => ({ type: INCREASING_BOOKS });
// export const decreasingBooks = () => ({ type: DECREASING_BOOKS });
