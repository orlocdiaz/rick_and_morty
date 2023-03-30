import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png"
        alt="Rick and Morty"
        className={styles.homeImg}
      />
      <img
        src="https://i.gifer.com/WS2c.gif"
        alt="Rick Dance"
        className={styles.rickDance}
      />
      <img
        src="https://media.tenor.com/No8WhPJHe7kAAAAi/cartoon-mad.gif"
        alt="Rick and Morty"
        className={styles.mortyFace}
      />
      {/*       <img
        src="https://media0.giphy.com/media/3o7aCQNE8LAwzhucRW/giphy.gif?cid=ecf05e47b2wlg9ltx7ukzp0b163ls685o7gei4t7x2bzwxuk&rid=giphy.gif&ct=s"
        alt="Rick and Morty"
        className={styles.butt}
      />

      <div className={styles.buttTxt}>
        Ooh wee! In this website you can look for all your favorite "Rick and
        Morty" characters.
      </div> */}
      {/*       <img
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmQ3NmU3ZWQxOWQyNTBlNmQ3OTBlMWNiNWI1MWQzYmVkOGM2YTc2MyZjdD1z/oMlEpt6SwlTEDrRhmS/giphy.gif"
        className={styles.cat}
      /> */}
    </div>
  );
};

export default Home;
