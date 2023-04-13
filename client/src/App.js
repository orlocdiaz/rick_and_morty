import React, { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import Home from "./components/Home/Home.jsx";
import Cards from "./components/Cards/Cards.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import axios from "axios";
import Favorites from "./components/Favorites/Favorites.jsx";
import Logout from "./components/Logout/Logout.jsx";

// import characters from "./data.js";

function App() {
  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [wrap, setWrap] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state && location.state.background;

  const cardsContainer = useRef(null);

  /*   function login(userData) {
    if (userData.password === Password && userData.email === Email) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("User not found");
    }
  } */

  async function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    try {
      await axios(URL + `?email=${email}&password=${password}`).then(
        ({ data }) => {
          const { access } = data;
          setAccess(data);
          access && navigate("/home");
        }
      );
    } catch (error) {
      alert(error.message);
    }
  }

  function logOut(userData) {
    console.log("Logout");
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  useEffect(() => {
    console.log(cardsContainer);
  }, [cardsContainer]);

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== parseInt(id))
    );
  };

  const scrollLeft = () => {
    cardsContainer.current.scrollLeft -= 400;
  };
  const scrollRight = () => {
    cardsContainer.current.scrollLeft += 400;
  };

  const wrapToggle = () => {
    setWrap(!wrap);
  };

  //!AXIOS
  async function onSearch(id) {
    try {
      await axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
        ({ data }) => {
          if (characters.find((character) => character.id === parseInt(id))) {
            return alert("This character is already on your list");
          } else {
            return setCharacters([data, ...characters]);
          }
        }
      );
      if (location.pathname !== "/characters") {
        navigate("/characters");
        cardsContainer.current.scrollTo({ behavior: "smooth", left: 0 });
      } else cardsContainer.current.scrollTo({ behavior: "smooth", left: 0 });
    } catch (error) {
      alert("Not found");
    }
  }

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      {location.pathname !== "/" && <Logout logOut={logOut} />}
      <Routes location={background || location}>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/characters"
          element={
            <Cards
              characters={characters}
              onClose={onClose}
              scrollLeft={scrollLeft}
              scrollRight={scrollRight}
              forwardedRef={cardsContainer}
              wrap={wrap}
              wrapToggle={wrapToggle}
            />
          }
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {location && (
        <Routes>
          <Route path="/characters/detail/:id" element={<Detail />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
