import '../styles/style.css';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
	const [userID, setUserID] = useState("0");
	const [loggedIn, setLoggedIn] = useState(false);

  	return (
		<>
			<h1>I'm <strong>Bored</strong></h1>
			<main>
				<Component
					{...pageProps}
					userID={userID}
					setUserID={setUserID}
					loggedIn={loggedIn}
					setLoggedIn={setLoggedIn}
				/>
			</main>
		</>
	)
}
