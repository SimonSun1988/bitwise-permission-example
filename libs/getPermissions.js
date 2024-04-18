

module.exports = async (permissions, memberPermissions) => {
  try {
    const result = {};

    Object.keys(permissions).forEach(groupName => {
      const value = memberPermissions[groupName];
      const userPermissions = permissions[groupName].filter((_, index) => {
        return ( 2 ** index ) & value;
      });
      result[groupName] = userPermissions;
    });

    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
};