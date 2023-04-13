import axios from "axios";

const ADD_FAV = "ADD_FAV";
const REMOVE_FAV = "REMOVE_FAV";
const FILTER = "FILTER";
const ORDER = "ORDER";

const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      await axios.post(endpoint, character).then(({ data }) => {
        return dispatch({
          type: "ADD_FAV",
          payload: data,
        });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

const removeFav = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  return async (dispatch) => {
    try {
      await axios.delete(endpoint).then(({ data }) => {
        return dispatch({
          type: "REMOVE_FAV",
          payload: data,
        });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};

export {
  ADD_FAV,
  addFav,
  REMOVE_FAV,
  removeFav,
  FILTER,
  filterCards,
  ORDER,
  orderCards,
};
