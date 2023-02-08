import '../styles/style.css';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
	const [user, setUser] = useState({
		username: false,
		_id: 0,
	});
	const [updatedDatabase, setUpdatedDatabase] = useState(0);

	const welcomeMessage = user.username ? <div className='username-welcome'>Hi there, <strong>{user.username}</strong></div> : '';

  	return (
		<>
			<h1>I'm <strong>Bored</strong></h1>
			{welcomeMessage}
			<main>
				<Component
					{...pageProps}
					user={user}
					setUser={setUser}
					updatedDatabase={updatedDatabase}
					setUpdatedDatabase={setUpdatedDatabase}
				/>
			</main>
		</>
	)
}
