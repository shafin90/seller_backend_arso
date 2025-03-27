const authService = require('../services/authServices');

async function register(req, res) {
  try {
    const seller = await authService.register(req.body);
    res.status(201).json({ message: 'Registration successful', seller });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function login(req, res) {
  try {
    const { token, seller } = await authService.login(req.body);
    res.json({ message: 'Login successful', token, seller });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

async function getProfile(req, res) {
  try {
    const seller = await authService.getProfile(req.params.id);
    res.json(seller);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateProfile(req, res) {
  try {
    const seller = await authService.updateProfile(req.params.id, req.body);
    res.json(seller);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { register, login, getProfile, updateProfile };