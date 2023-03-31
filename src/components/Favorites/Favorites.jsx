import { useSelector, useDispatch } from "react-redux";
import styles from "./Favorites.module.css";
import CardFav from "../CardFav/CardFav";
import { orderCards, filterCards } from "../../redux/actions";
import React, { useState, useEffect } from "react";

const Favorites = () => {
  const allFavorites = useSelector((state) => state.allCharacters);
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);
  const [filterActive, setFilterActive] = useState(false);
  const [match, setMatch] = useState("All");

  const handleOrder = () => {
    aux ? dispatch(orderCards("D")) : dispatch(orderCards("A"));
    setAux(!aux);
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
    setFilterActive(false);
    setMatch(event.target.value);
  };
  useEffect(() => {
    for (let i = 0; i < favorites.length - 1; i++) {
      if (favorites[i].id < favorites[i + 1].id) {
        setAux(true);
      }
    }
    dispatch(filterCards("All"));
  }, []);

  return (
    <div className={styles.mainContainer}>
      <h1>Favorites</h1>
      <div className={styles.containerWrap}>
        {!allFavorites.length ? (
          <div className={styles.noCards}>
            <h2 className={styles.lineOne}>Your favorites list is empty.</h2>
          </div>
        ) : (
          <>
            {favorites.length ? (
              <div>
                <div className={styles.orderIcon} onClick={handleOrder}>
                  {!aux ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-sort-down-alt"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293V3.5zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-sort-down"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                    </svg>
                  )}
                </div>
                {match !== "All" ? (
                  <h2 className={styles.match}>{`Matches for "${match}"`}</h2>
                ) : (
                  <h2 className={styles.match}>{`${match} favorites`}</h2>
                )}
              </div>
            ) : (
              <div className={styles.noMatch}>
                <h2>{`No matches found for "${match}"`}</h2>
              </div>
            )}
            <div
              className={styles.filterIcon}
              onClick={() => {
                setFilterActive(!filterActive);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-filter"
                viewBox="0 0 16 16"
              >
                <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
              </svg>
            </div>
            <div className={filterActive ? styles.block : styles.none}>
              <div className={styles.arrow}></div>
              <div className={styles.filterMenu}>
                <option value="All" onClick={handleFilter}>
                  All
                </option>
                <option value="Male" onClick={handleFilter}>
                  Male
                </option>
                <option value="Female" onClick={handleFilter}>
                  Female
                </option>
                <option value="unknown" onClick={handleFilter}>
                  Unknown
                </option>
                <option value="Genderless" onClick={handleFilter}>
                  Genderless
                </option>
              </div>
            </div>

            {favorites.map(({ id, name, image, character }) => {
              return (
                <>
                  <CardFav
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                    character={character}
                  />
                </>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Favorites;
