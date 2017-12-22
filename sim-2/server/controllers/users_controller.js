module.exports = {
  //   loginUser(req, res, next) {
  //     const { username } = req.session;
  //     const db = req.app.get("db");
  //     const { username, pw } = req.body;
  //     db
  //       .login_user([username, pw])
  //       .then(user => {
  //         return res.status(200).json(user);
  //       })
  //       .catch(() => res.status(500).send(console.log(`failed`)));
  //   },

  registerUser(req, res, next) {
    const db = req.app.get("db");
    const { username, pw } = req.body;
    db
      .create_user([username, pw])
      .then(user => {
        return res.status(200).json(user);
      })
      .catch(() => res.status(500).send(console.log(`failed`)));
  }
};
