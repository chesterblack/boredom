import Link from "next/link";

export default function Signup() {
	const handleSubmit = async (e) => {
		e.preventDefault();

		const username = e.target.querySelector('.username').value;
		const password = e.target.querySelector('.password').value;

		const data = {
			username: username,
			password: password,
		};

		fetch('http://localhost:3000/api/signup', {
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
					window.location.replace('/');
				} else {
					alert(response.error);
				}
			})
	}

	return (
		<>
			<h2>Sign up</h2>
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
				<span>Back to</span> <Link href="/">login</Link>
			</div>
		</>
	);
}
