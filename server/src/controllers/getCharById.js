const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  const { id } = req.params;
  try {
    await axios.get(`${URL}${id}`).then(
      (response) => {
        const { id, name, gender, species, origin, image, status } =
          response.data;
        res.json({ id, name, gender, species, origin, image, status });
      }
      /*       () => {
        throw new Error("NO");
      } */
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = getCharById;
