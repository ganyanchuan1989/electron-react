
import { DataTypes } from 'sequelize'

export default function (sequelize) {
  const UserInfo = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'COM_USER',
      indexes: [
        // 在 name 上创建一个唯一索引
        {
          unique: true,
          fields: ['id'],
        },
      ],
      timestamps: false,
    }
  )

  // 查询根据用户名
  function findById (id) {
    return UserInfo.findOne({ where: { id } })
  }

  // 注入静态函数
  Object.assign(UserInfo, {
    findById,
  })

  UserInfo.sync({force: false}).then((res) => {
    console.log(`table UserInfo is sync`)
  })

  return UserInfo
}

/// ///////////////////
