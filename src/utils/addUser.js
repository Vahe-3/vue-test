export function addUser(users, userId, newUser) {
  function recursiveSearch(userList) {
    for (let user of userList) {
      if (user.id === userId) {
        user.workers.push(newUser);
        return true;
      }
      if (user.workers.length > 0) {
        if (recursiveSearch(user.workers)) {
          return true;
        }
      }
    }
    return false;
  }

  return recursiveSearch(users);
}
