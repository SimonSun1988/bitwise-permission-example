/**
   * Define all the permissions here
  {
    GROUP: [ACTION1, ACTION2, ACTION3, ...],
  }
**/

module.exports = {
  CUSTOMER: [
    'VIEW_PROFILE',
    'EDIT_PROFILE',
    'DELETE_PROFILE'
  ],
  STAFF: [
    'VIEW_PROFILE',
    'EDIT_PROFILE',
    'DELETE_PROFILE',
    'VIEW_CUSTOMER_LIST',
    'VIEW_CUSTOMER_PROFILE',
    'EDIT_CUSTOMER_PROFILE',
    'DELETE_CUSTOMER_PROFILE'
  ],
  USER: ['VIEW_PROFILE'],
};