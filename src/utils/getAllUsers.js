export function getAllUsers(users) {
	let allUsers = [];

	function recursiveSearch(userList) {
		 userList.forEach(user => {
			  allUsers.push(user);
			  if (user.workers && user.workers.length > 0) {
					recursiveSearch(user.workers);
			  }
		 });
	}

	recursiveSearch(users);
	return allUsers;
}