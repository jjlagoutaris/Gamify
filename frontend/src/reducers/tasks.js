/* eslint-disable import/no-anonymous-default-export */
export default (tasks = [], action) => {
  switch (action.type){
    case 'FETCH_ALL':
      return tasks;
    case 'CREATE':
      return tasks;
    default:
      return tasks;
  }
}