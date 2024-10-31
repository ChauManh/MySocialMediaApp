const User = require('../models/User');
const bcrypt = require('bcrypt');

class AuthController {
  async create(req, res) {
    try {
      const { fullname, username, email, password } = req.body;

      const existingUser = await User.findOne({
        $or: [{ username }, { email }],
      });

      if (existingUser) {
        if (existingUser.username === username) {
          return res.status(400).json({ error: 'Username already exists' });
        }
        if (existingUser.email === email) {
          return res.status(400).json({ error: 'Email already used' });
        }
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ fullname, username, email, password: hashedPassword });

      await newUser.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async validate(req, res) {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({ username: username });
      if (!user) {
        return res.status(400).json({ error: 'Invalid username' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ error: 'Invalid password' });
      }

      res.status(200).json({ message: 'Login successful', user: { id: user._id, fullname: user.fullname } });
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = new AuthController();
