const User = require('../models/User');
const bcrypt = require('bcrypt');

class AuthController {
  async create(req, res) {
    const { email, password } = req.body;
    if (await User.findOne( { email } )) {
      return res.status(400).send({error: 'User aready exists'})
    }    
    const user = new User(req.body);  
    user.password = await bcrypt.hash(password, 10);
    await user.save();
    return res.send({ user })
  }

  async authenticate(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne( { email }).select('+password');
    if (!user) 
      return res.status(404).send({ message: 'user not found!' })
    if (! await bcrypt.compare(password, user.password))
      return res.status(401).send({ message: 'invalid password!'})
    return res.send(user)
  }
}

module.exports = new AuthController(); 
