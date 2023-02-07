import Login from "./login";
import Home from "./home";
import Signup from "./signup";

export default function Main({ allLists, userID, setUserID, loggedIn, setLoggedIn }) {
	let page = loggedIn ?
		<Home
			allLists={allLists}
			userID={userID}
			setUserID={setUserID}
			loggedIn={loggedIn}
			setLoggedIn={setLoggedIn}
		/> :
		<Login
			userID={userID}
			setUserID={setUserID}
			loggedIn={loggedIn}
			setLoggedIn={setLoggedIn}
		/>;

	return (
		<>
			{page}
		</>
	)
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
