import Result from "@/components/Result";
import RandomiseButton from "@/components/RandomiseButton";
import CategorySelector from "@/components/CategorySelector";

import { useEffect, useState } from "react"

export default function Home({ allLists }) {
	const [category, setCategory] = useState('all');
	const [selectedItem, setSelectedItem] = useState(false);
	const [list, setList] = useState(false);
	const [userID, setUserID] = useState('1');
	
	useEffect(() => {
		let filteredLists = allLists.data.filter((el) => {
			return el.user_id === userID;
		});

		if (filteredLists.length > 0) {
			let currentList = filteredLists[0];
			setList(currentList.list);
		} else {
			alert("Couldn't find user with id: " + userID);
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

	return (
		<>
			<input
				type="number"
				min={1}
				value={userID}
				onChange={
					(e) => {
						setUserID(e.target.value);
						setSelectedItem(false);
					}
				}
			/>
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
  
