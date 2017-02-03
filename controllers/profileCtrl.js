var profiles = [{
  name: 'Preston McNeil',
  pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
  status: 'Everything is bigger in Texas'
}, {
  name: 'Ryan Rasmussen',
  pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
  status: 'RR Rules'
}, {
  name: 'Terri Ruff',
  pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
  status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
}, {
  name: 'Lindsey Mayer',
  pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
  status: 'OMG MITTENS DID THE CUTEST THING TODAY'
}];

// we want to create an endpoint for a request that will contain a req.session.currentUser object, equal to a user object from userCtrl
/*
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  }
*/

var getFriends = (req, res, next) => {
  if (req.session.currentUser) {

    let friends = [];
    for (let i = 0; i < req.session.currentUser.friends.length; i++) {

      for (let j = 0; j < profiles.length; j++) {
        if (profiles[j].name === req.session.currentUser.friends[i]) {
          friends.push(profiles[j]);
        }
      }
    }
    res.send({
      currentUser: req.session.currentUser,
      friends: friends
    })
    return;
  }
  res.send('current user unknown')
}

module.exports = {
  getFriends: getFriends
};