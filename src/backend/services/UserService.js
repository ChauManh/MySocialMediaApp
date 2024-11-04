const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const signUpService = async ({ fullname, username, email, password }) => {
  try {
    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      if (existingUser.username === username) {
        return {
          EC: 1,
          EM: 'Username already exists',
        };
      }
      if (existingUser.email === email) {
        return {
          EC: 2,
          EM: 'Email already used',
        };
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ fullname, username, email, password: hashedPassword });

    await newUser.save();
    return {
      EC: 0,
      EM: 'User created successfully',
    };
  } catch (err) {
    return {
      EC: 3,
      EM: 'Error occurred during sign-up',
      details: err.message,
    };
  }
};

const signInService = async (username, password) => {
  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      return {
        EC: 2,
        EM: 'Username/Password không hợp lệ',
      };
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return {
        EC: 1,
        EM: 'Username/Password không hợp lệ',
      };
    }

    const payload = {
      email: user.email,
      username: user.username,
    };

    const access_token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
    return {
      EC: 0,
      access_token,
      user: {
        email: user.email,
        username: user.username,
      },
    };
  } catch (err) {
    return {
      EC: 3,
      EM: 'Error occurred during sign-in',
      details: err.message,
    };
  }
};

module.exports = {
  signUpService,
  signInService,
};
