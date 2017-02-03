var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

var login = (req, res, next) => {
  for (let i = 0; i < users.length; i++) {

    if (req.body.name === users[i].name 
      && req.body.password === users[i].password) {
      req.session.currentUser = users[i];
      res.send({userFound: true});
      return;
    }

  }
  res.send({userFound: false});
}

var changeCreds = (req, res, next) => {
  if (req.session.currentUser) {

    for (let i = 0; i < users.length; i++) {

      if (req.session.currentUser.name === users[i].name && req.session.currentUser.password === users[i].password) {
        users[i].password = req.body.password;
        users[i].name = req.body.name
        res.send({updated: true});
        return
      }
    }
    res.send({updated: false});
  }
}

module.exports = {
  login: login,
  changeCreds: changeCreds
};