import Link from "next/link";

export default function Login({ user, setUser }) {
	const handleSubmit = async(e) => {
		e.preventDefault();

		const username = e.target.querySelector('.username').value;
		const password = e.target.querySelector('.password').value;

		const data = {
			username: username,
			password: password,
		};

		fetch('/api/login', {
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
						setUser(response.user);
					} else {
						alert("Either this user doesn't exist, or you got the password wrong");
					}
				} else {
					alert("Something went wrong, sorry");
				}
			})
	}

	return (
		<>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Username</span>
					<input className="username" type="text" name="username" />
				</label>
				<label>
					<span>Password</span>
					<input className="password" type="password" name="password" />
				</label>
				<button type="submit">Submit</button>
			</form>
			<div className="signup-link">
				<span>No account?</span> <Link href="/signup">Signup</Link>
			</div>
		</>
	);
}
