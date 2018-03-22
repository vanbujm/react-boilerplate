import User, { userDefinition } from './User';
import UserLogin, { userLoginDefinition } from './UserLogin';
import UserClaim, { userClaimDefinition } from './UserClaim';
import UserProfile, { userProfileDefinition } from './UserProfile';
import Dog, { dogDefinition } from './Dog';

// Add your defintion functions here
export const modelDefinitionFunctions = [
  User,
  UserLogin,
  UserClaim,
  UserProfile,
  Dog,
];

// Add associations here
export function addAssociations(db) {
  db.User.hasMany(db.UserLogin, {
    foreignKey: 'userId',
    as: 'logins',
    onUpdate: 'cascade',
    onDelete: 'cascade',
  });

  db.User.hasMany(db.UserClaim, {
    foreignKey: 'userId',
    as: 'claims',
    onUpdate: 'cascade',
    onDelete: 'cascade',
  });

  db.User.hasOne(db.UserProfile, {
    foreignKey: 'userId',
    as: 'profile',
    onUpdate: 'cascade',
    onDelete: 'cascade',
  });
}

export const allDefinitions = [
  userDefinition,
  userLoginDefinition,
  userClaimDefinition,
  userProfileDefinition,
  dogDefinition,
];

export default {
  allDefinitions,
  modelDefinitionFunctions,
};
