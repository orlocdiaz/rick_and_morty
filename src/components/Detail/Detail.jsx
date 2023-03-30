import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Detail.module.css";
import axios from "axios";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});

  //!AXIOS
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
          setLoading(false);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const { name, status, species, gender, origin, image } = character;

  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.close} onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <div className={styles.nameTitle}>
          <h2>{name}</h2>
        </div>

        <div className={styles.dataContainer}>
          <div className={styles.detailsTxt}>
            <div className={styles.detKeyVal}>
              <p className={styles.detKey}>Species: </p>
              <p className={styles.detVal}>{species}</p>
            </div>
            <div className={styles.detKeyVal}>
              <p className={styles.detKey}>Gender: </p>
              <p className={styles.detVal}>{gender}</p>
            </div>
            <div className={styles.detKeyVal}>
              <p className={styles.detKey}>Status: </p>
              <p className={styles.detVal}>{status}</p>
            </div>
            <div className={styles.detKeyVal}>
              <p className={styles.detKey}>Origin: </p>
              <p className={styles.detVal}>{origin.name}</p>
            </div>
          </div>
          <div className={styles.detailsImg}>
            <img src={image} alt="Not found" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
