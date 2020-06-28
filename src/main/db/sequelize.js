const Sequelize = require('sequelize')
// const DataTypes = require('sequelize/lib/data-types')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'test.db',
})

// 测试数据库连接
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

export default sequelize
