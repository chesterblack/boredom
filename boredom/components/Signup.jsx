import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function Signup({ setUser, setCurrentPage }) {
	let router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const username = e.target.querySelector('.username').value;
		const password = e.target.querySelector('.password').value;

		const data = {
			username: username,
			password: password,
		};

		fetch('/api/signup', {
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
					setUser(response.user);
					setCurrentPage('home');
				} else {
					alert(response.error);
				}
			})
	}

	const [inner, setInner] = useState(
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
				<span>Back to</span> <a onClick={() => {setCurrentPage('login')}}>login</a>
			</div>
		</>
	);

	return inner;
}
