const User = require("../models/users");

async function findUsers(req, res) {
    const users = await User.findAll();
    res.send(users);
  }

async function findUser(req, res) {
  const user = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.json(user);
}

async function newUser(req, res) {
  const { name, email, password, orderId } = req.body;
  console.log(req.body);
  const user = await User.create({
    name,
    email,
    password,
    orderId,
  });
  res.json(user);
}

async function editUser(req,res){
    const { name,email,password,orderId } = req.body;
    const user = await User.findOne({
      where: {
        id: req.params.id
      }
    });

    user.name = name;
    user.email = email;
    user.password = password;
    user.orderId = orderId;

    await user.save();
    res.json(user);
}

module.exports = {
    findUsers,
    findUser,
    newUser,
    editUser
}
