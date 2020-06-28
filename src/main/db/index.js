// const path = require('path')
import sequelize from './sequelize'

/** 动态加载打包后路劲异常 */
// function load (name) {
//   var model = sequelize.import(path.resolve(__dirname, 'models/' + name))
//   model.sync({force: false}).then((res) => {
//     console.log(`table ${name} is sync`)
//   })
//   return model
// }

import UserInfo from './models/UserInfo'

// 导出 Modal
export default {
  sequelize: sequelize,
  UserInfo: UserInfo(sequelize),
}
