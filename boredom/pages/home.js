import Result from "@/components/Result";
import RandomiseButton from "@/components/RandomiseButton";
import CategorySelector from "@/components/CategorySelector";

import Link from 'next/link';
import { useEffect, useState } from "react";

export default function Home({ allLists, userID, setUserID, loggedIn, setLoggedIn }) {
	const [category, setCategory] = useState('all');
	const [selectedItem, setSelectedItem] = useState(false);
	const [list, setList] = useState(false);
	
	useEffect(() => {
		if (loggedIn) {
			let filteredLists = allLists.data.filter((el) => {
				return el.user_id === userID;
			});
	
			if (filteredLists.length > 0) {
				let currentList = filteredLists[0];
				setList(currentList.list);
			} else {
				alert("No data found for this user");
			}
		}
	}, [userID]);

	let categories = [
		'all',
	];

	if (list) {
		list.forEach(element => {
			element.categories.forEach(cat => {
				if (!categories.includes(cat)) {
					categories.push(cat);
				}
			});
		});
	}

	if (loggedIn) {
		return (
			<>
				<CategorySelector
					category={category}
					categories={categories}
					setCategory={setCategory}
					list={list}
				/>
				<RandomiseButton
					category={category}
					setSelectedItem={setSelectedItem}
					list={list}
				/>
				<Result selectedItem={selectedItem} list={list} />
			</>
		)
	} else {
		return <Link href="/login">Please login</Link>
	}
}
