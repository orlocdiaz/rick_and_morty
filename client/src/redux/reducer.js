import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  filterGender: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    /*     case ADD_FAV:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        myFavorites: [
          ...[...state.allCharacters, action.payload].sort(function (a, b) {
            return a.id - b.id;
          }),
        ],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
        allCharacters: state.allCharacters.filter(
          (char) => char.id !== action.payload
        ),
      }; */
    case ADD_FAV:
      return {
        ...state,
        allCharacters: action.payload,
        myFavorites: action.payload,
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites:
          state.filterGender === "" || state.filterGender === "All"
            ? action.payload
            : action.payload.filter(
                (element) => element.gender === state.filterGender
              ),
        allCharacters: action.payload,
      };
    case FILTER:
      if (action.payload === "All") {
        return {
          ...state,
          myFavorites: state.allCharacters,
          filterGender: action.payload,
        };
      } else {
        return {
          ...state,
          myFavorites: state.allCharacters.filter(
            (char) => char.gender === action.payload
          ),
          filterGender: action.payload,
        };
      }
    case ORDER:
      if (action.payload === "A") {
        return {
          ...state,
          myFavorites: state.myFavorites.sort(function (a, b) {
            return a.id - b.id;
          }),
        };
      } else if (action.payload === "D") {
        return {
          ...state,
          myFavorites: state.myFavorites.sort(function (a, b) {
            return b.id - a.id;
          }),
        };
      }
      break;
    default:
      return { ...state };
  }
};

export default rootReducer;
