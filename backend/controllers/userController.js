// usersController.js

import userService from '../services/userService';

// Méthode pour gérer la requête GET pour récupérer tous les utilisateurs
async function getAllUsers(req, res) {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error('Erreur lors de la récupération de tous les utilisateurs :', error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
}

export default {
  getAllUsers
};
