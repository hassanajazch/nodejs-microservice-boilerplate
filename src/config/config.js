require('dotenv').config();

const config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT || 3000,
    mysql: {
        username: process.env.SQL_DB_USERNAME,
        password: process.env.SQL_DB_PASSWORD,
        databaseName: process.env.MYSQL_DB_DATABASE_NAME,
        host: process.env.MYSQL_DB_HOST,
        dialect: 'mysql',
        timezone: '+06:00',
        operatorsAliases: false
    }
};

export default config;