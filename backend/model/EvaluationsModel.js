import { Sequelize } from "sequelize";
import conn from "../connect";
import Users from "./UserModels.js";
import Teams from "./TeamsModel.js";
import Challenges from "./ChallengesModel.js";
const {DataTypes} = Sequelize;

const Evaluations   = conn.define('evaluations',{
    challenge_id :{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    team_id :{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    jury_member_id :{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    score :{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    feedback :{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    }
},{
    freezeTableName: true
});
Users.hasMany(Evaluations);
Teams.hasMany(Evaluations);
Challenges.hasMany(Evaluations);
Evaluations.belongsTo(Users, {foreignKey: 'jury_member_id'});
Evaluations.belongsTo(Teams, {foreignKey: 'team_id'});
Evaluations.belongsTo(Challenges, {foreignKey: 'challenge_id'});
conn.sync()
    .then(() => {
        console.log("La table 'users' a été créée avec succès dans la base de données.");
    })
    .catch(err => {
        console.error("Erreur lors de la création de la table 'users':", err);
    });
export default Evaluations  ;