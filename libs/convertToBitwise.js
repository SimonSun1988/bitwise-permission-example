
module.exports = async (permissions, memberPermissions) => {
  const result = {};

  Object.keys(permissions).forEach(groupName => {
    let value = 0;

    permissions[groupName].forEach((_, index) => {
      if (memberPermissions[groupName][index]) {
        value |= 1 << index;
      }
    });

    result[groupName] = value;
  });

  return result;
};