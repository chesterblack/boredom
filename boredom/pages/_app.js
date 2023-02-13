import '../styles/style.css';

import Login from "../components/Login";
import Home from "../components/Home";
import Signup from "../components/Signup";

import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
	const [user, setUser] = useState({
		username: false,
		_id: 0,
	});
	const [currentPage, setCurrentPage] = useState('login');
	const [currentList, setCurrentList] = useState([{
		name: "Example",
		categories: [
			"cat-1",
		]
	}]);
	const [pageInner, setPageInner] = useState('');

	const welcomeMessage = user.username ? <div className='username-welcome'>Hi there, <strong>{user.username}</strong></div> : '';

	const componentProps = {
		user: user,
		setUser: setUser,
		currentPage: currentPage,
		setCurrentPage: setCurrentPage,
		currentList: currentList,
		setCurrentList: setCurrentList,
	};

	useEffect(() => {
		switch (currentPage) {
			case 'home':
				setPageInner(
					<Home {...componentProps} />
				);
				break;
			case 'signup':
				setPageInner(
					<Signup {...componentProps} />
				);
				break;
			case 'login':
			default:
				setPageInner(
					<Login {...componentProps} />
				);
				break;
		}
	}, [currentPage, currentList])

  	return (
		<>
			<h1>I'm <strong>Bored</strong></h1>
			{welcomeMessage}
			<main>
				{pageInner}
			</main>
		</>
	)
}
