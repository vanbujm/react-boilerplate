import DataType from 'sequelize';

export const defaultModelAttributes = {
  id: {
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  createdAt: DataType.DATE,
  updatedAt: DataType.DATE,
};

export const defaultModelOptions = {
  freezeTableName: true,
  timestamps: true,
};

export default { defaultModelAttributes, defaultModelOptions };
