export default function Login({ userID, setUserID, loggedIn, setLoggedIn }) {
	const handleSubmit = async(e) => {
		e.preventDefault();

		const username = e.target.querySelector('.username').value;
		const password = e.target.querySelector('.password').value;

		const data = {
			username: username,
			password: password,
		};

		fetch('http://localhost:3000/api/login', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(response => response.json())
			.then((response) => {
				if (response.status === 200) {
					if (response.passwordMatch) {
						setUserID(response.userID);
						setLoggedIn(true);
					}
				}
			})
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				<span>Username</span>
				<input className="username" type="text" name="username" />
			</label>
			<label>
				<span>Password</span>
				<input className="password" type="password" name="password" />
			</label>
			<button type="submit">submit</button>
		</form>
	);
}
