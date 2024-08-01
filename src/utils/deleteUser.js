export function deleteUser(users, userId) {
  function recursiveSearch(userList) {
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].id === userId) {
        userList.splice(i, 1);
        return true;
      }
      if (userList[i].workers.length > 0) {
        if (recursiveSearch(userList[i].workers)) {
          return true;
        }
      }
    }
    return false; 
  }

  return recursiveSearch(users);
}
