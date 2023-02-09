import Login from "../components/Login";
import Home from "../components/Home";
import Signup from "../components/Signup";
import { useEffect, useState } from "react";

export default function Main(props) {
	const [currentPage, setCurrentPage] = useState('login');
	const [pageInner, setPageInner] = useState('');

	useEffect(() => {
		switch (currentPage) {
			case 'home':
				setPageInner(
					<Home {...props} setCurrentPage={setCurrentPage} />
				);
				break;
			case 'signup':
				setPageInner(<Signup {...props} setCurrentPage={setCurrentPage} />);
				break;
			case 'login':
			default:
				setPageInner(
					<Login {...props} setCurrentPage={setCurrentPage} />
				);
				break;
		}
	}, [currentPage]);

	
	return pageInner;
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
