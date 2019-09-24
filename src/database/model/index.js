import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
const basename = path.basename(__filename);
import config from '../../config/config';

const db = {};
const mysqlConfig = config.mysql;

const sequelize = new Sequelize(
  mysqlConfig.databaseName,
  mysqlConfig.username,
  mysqlConfig.password,
  {
    host: mysqlConfig.host,
    dialect: mysqlConfig.dialect,
    timezone: mysqlConfig.timezone,
    operatorsAliases: mysqlConfig.operatorsAliases,
    define: {
      timestamps: false, // true by default
      quoteIdentifiers: false,
    },
    logging: false,
    pool: {
      max: 5,
      min: 0,
      idle: 20000,
      acquire: 20000,
    },
  },
);

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach(function(file) {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
