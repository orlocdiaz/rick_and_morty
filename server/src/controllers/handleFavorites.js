let myFavorites = [];

const postFav = (req, res) => {
  const { body } = req;
  myFavorites.push(body);
  res.json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  myFavorites = myFavorites.filter((favorite) => favorite.id !== parseInt(id));
  res.json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
