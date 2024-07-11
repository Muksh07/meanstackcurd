const User = require('../Models/user');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'kuchhbhilikhdobhai';

async function handlerAddUser(req, res) 
{
    const body = req.body;
    try {
      const hashedPassword = await bcrypt.hash(body.Password, 10);
      const result = await User.create({
        Name: body.Name,
        Email: body.Email,
        Password: hashedPassword,
        Gender: body.Gender
      });
      return res.json({ msg: 'success', id: result._id });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: 'Error creating user', error });
    }
  }

async function handlerGetAllUSers(req, res)
{
    const dbusers = await User.find({});
    return res.json(dbusers);
}

async function handlerLoginUser(req, res) 
{
    const { Email, Password } = req.body;
    try {
      const user = await User.findOne({ Email });
  
      if (!user) {
        return res.status(400).json({ msg: 'User not found' });
      }
  
      const isPasswordValid = await bcrypt.compare(Password, user.Password);
  
      if (!isPasswordValid) {
        return res.status(400).json({ msg: 'Invalid password' });
      }
  
      const token = jwt.sign({ id: user._id, email: user.Email }, JWT_SECRET, { expiresIn: '1h' });
  
      return res.json({ msg: 'Login successful', token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: 'Error during login', error });
    }
  }

module.exports = {
    handlerAddUser,
    handlerGetAllUSers,
    handlerLoginUser
}