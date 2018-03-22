import DataType from 'sequelize';

export default {
  id: {
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  createdAt: DataType.DATE,
  updatedAt: DataType.DATE,
};
