import Users from '../model/UserModels'; // Importez votre modèle Sequelize

class UserService {
  async getAllUsers() {
    try {
      const users = await Users.findAll();
      return users;
    } catch (error) {
      console.error('Erreur lors de la récupération de tous les utilisateurs :', error);
      throw error;
    }
  }
}

export default new UserService();