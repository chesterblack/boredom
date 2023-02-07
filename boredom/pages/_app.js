import '../styles/style.css';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
	const [userID, setUserID] = useState("0");
	const [loggedIn, setLoggedIn] = useState(false);

  	return (
		<Component
			{...pageProps}
			userID={userID}
			setUserID={setUserID}
			loggedIn={loggedIn}
			setLoggedIn={setLoggedIn}
		/>
	)
}
