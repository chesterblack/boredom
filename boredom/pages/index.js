import Login from "./login";
import Home from "./home";
import Signup from "./signup";

export default function Main({ allLists, user, setUser, updatedDatabase, setUpdatedDatabase }) {
	let page = user.username ?
		<Home
			allLists={allLists}
			user={user}
			setUser={setUser}
			updatedDatabase={updatedDatabase}
			setUpdatedDatabase={setUpdatedDatabase}
		/> :
		<Login
			user={user}
			setUser={setUser}
			updatedDatabase={updatedDatabase}
			setUpdatedDatabase={setUpdatedDatabase}
		/>;

	return (
		<>
			{page}
		</>
	)
}

export async function getServerSideProps(context) {
	let res = await fetch(`${process.env.BASE_URL}/api/lists`, {
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
