export default async function fetchList(userID) {
	return await fetch(`/api/lists?user_id=${userID}`, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
		}
	})
		.then(response => response.json())
		.then((response) => {
			if (response.data !== null) {
				return response.data.list;
			} else {
				return false;
			}
		})
}
