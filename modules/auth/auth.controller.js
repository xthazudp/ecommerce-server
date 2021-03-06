const User = require('./../user/user.model');

async function createOrUpdateUser(req, res) {
  const { name, picture, email } = req.user;
  const user = await User.findOneAndUpdate(
    { email },
    { name, picture },
    { new: true }
  );
  if (user) {
    console.log('user updated', user);
    res.json(user);
  } else {
    const newUser = await new User({ email, name, picture }).save();
    console.log('user created', newUser);
    res.json(newUser);
  }
}

module.exports = {
  createOrUpdateUser,
};
