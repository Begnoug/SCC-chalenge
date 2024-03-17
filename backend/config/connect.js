import { Sequelize } from "sequelize";
import { createConnection } from 'mysql';

const conn = createConnection({
    host: 'localhost',
    port:"3306",
    user: 'root',
    password: '',
    database: 'scc',   
});

conn.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données !');
        return;
      }
      console.log('Connexion à la base de données réussie');
});

module.exports=conn