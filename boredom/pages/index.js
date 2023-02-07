import Login from "./login";
import Home from "./home";

export default function Main({ allLists, userID, setUserID, loggedIn, setLoggedIn }) {
	if (loggedIn) {
		return (
			<Home
				allLists={allLists}
				userID={userID}
				setUserID={setUserID}
				loggedIn={loggedIn}
				setLoggedIn={setLoggedIn}
			/>
		);
	} else {
		return (
			<Login
				userID={userID}
				setUserID={setUserID}
				loggedIn={loggedIn}
				setLoggedIn={setLoggedIn}
			/>
		);
	}
}

export async function getServerSideProps(context) {
	let res = await fetch("http://localhost:3000/api/lists", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	let allLists = await res.json();

	return {
		props: { allLists },
	};
}
