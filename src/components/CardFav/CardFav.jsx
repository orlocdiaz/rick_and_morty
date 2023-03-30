import React, { useEffect, useState } from "react";
import styles from "./CardFav.module.css";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const CardFav = ({ id, name, image, character }) => {
  const location = useLocation();
  const [isFav, setIsFav] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav(character));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.idNum}>
          <h3>{("000" + id).slice(-3)}</h3>
        </div>
        <h2 className={styles.nameTitle}>{name}</h2>
        <hr />
        <div className={styles.imgContainer}>
          <img src={image} alt="Not Found" />
        </div>
        <hr />
        <div className={styles.btnsContainer}>
          <NavLink
            to={`/characters/detail/${id}`}
            state={{ background: location }}
            className={styles.link}
          >
            <div className={styles.seeDetails}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </div>
          </NavLink>

          <div onClick={handleFavorite} className={styles.favBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#b801019a"
              className="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default CardFav;
