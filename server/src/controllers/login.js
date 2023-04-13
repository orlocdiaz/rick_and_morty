const users = require("../utils/users.js");

const login = (req, res) => {
  const { email, password } = req.query;
  const user = users.filter(
    (user) => user.email === email && user.password === password
  );
  if (user.length) {
    res.status(200).json({ access: true });
  } else {
    res.status(200).json({ access: false });
  }
};

module.exports = login;
