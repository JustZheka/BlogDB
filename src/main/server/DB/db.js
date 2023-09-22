import Sequelize from 'sequelize';

const sequelize = new Sequelize('Blog', 'Zheka', '12345678', {
    host: 'localhost',
    dialect: 'mariadb',
    define: {
        freeTableName: true,
    }
});

export default sequelize;