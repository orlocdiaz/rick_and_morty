import styles from "./Cards.module.css";
import Card from "../Card/Card.jsx";

export default function Cards({
  characters,
  onClose,
  scrollLeft,
  scrollRight,
  forwardedRef,
  wrap,
  wrapToggle,
}) {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Characters</h1>
      <div
        className={!wrap ? styles.container : styles.containerWrap}
        ref={forwardedRef}
      >
        {!characters.length ? (
          <div className={styles.noCards}>
            <h2 className={styles.lineOne}>Your characters list is empty.</h2>
          </div>
        ) : (
          <>
            <div className={styles.down} onClick={wrapToggle}>
              {wrap ? (
                <svg
                  transform="rotate(180)"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#d2fac8"
                  strokeWidth="0.8"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#d2fac8"
                  strokeWidth="0.8"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              )}
            </div>
            {!wrap && (
              <>
                <div
                  className={styles.scrollLeft}
                  onClick={() => scrollLeft(forwardedRef)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#d2fac8"
                    strokeWidth="0.8"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </div>
                <div
                  className={styles.scrollRight}
                  onClick={() => scrollRight(forwardedRef)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#d2fac8"
                    strokeWidth="0.8"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </div>
              </>
            )}
            {characters.map((character) => {
              const { id, name, status, species, gender, origin, image } =
                character;
              return (
                <Card
                  key={id}
                  id={id}
                  onClose={onClose}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  originName={origin.name}
                  image={image}
                  character={character}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
