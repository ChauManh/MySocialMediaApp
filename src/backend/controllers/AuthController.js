const { signUpService, signInService } = require('../services/UserService');

class AuthController {
  async create(req, res) {
    const { fullname, username, email, password } = req.body;

    try {
      const result = await signUpService({ fullname, username, email, password });
      return res.status(result.EC === 0 ? 201 : 400).json(result);
    } catch (error) {
      console.error('Error in create:', error);
      return res.status(500).json({ EC: 3, EM: 'Server error' });
    }
  }

  async userSignIn(req, res) {
    const { username, password } = req.body;

    try {
      const result = await signInService(username, password);
      return res.status(result.EC === 0 ? 200 : 400).json(result);
    } catch (error) {
      console.error('Error in userSignIn:', error);
      return res.status(500).json({ EC: 3, EM: 'Server error' });
    }
  }
}

module.exports = new AuthController();
