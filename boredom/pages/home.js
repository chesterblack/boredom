import Result from "@/components/Result";
import RandomiseButton from "@/components/RandomiseButton";
import CategorySelector from "@/components/CategorySelector";

import Link from 'next/link';
import { useEffect, useState } from "react";
import AddNew from "../components/AddNew";

export default function Home({ allLists, user, setUser, updatedDatabase, setUpdatedDatabase }) {
	const { _id, username } = user;
	let loggedIn = user.username !== false;

	const [category, setCategory] = useState('all');
	const [selectedItem, setSelectedItem] = useState(false);
	const [list, setList] = useState(false);

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
	
	useEffect(() => {
		console.log('updating');
		if (loggedIn) {
			let filteredLists = allLists.data.filter((el) => {
				return el.user_id === _id;
			});
	
			if (filteredLists.length > 0) {
				let currentList = filteredLists[0];
				setList(currentList.list);
			}
		}
	}, [updatedDatabase]);

	if (loggedIn) {
		return (
			<>
				<div className="controls">
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
				</div>

				<Result selectedItem={selectedItem} list={list} />

				<AddNew
					user={user}
					updatedDatabase={updatedDatabase}
					setUpdatedDatabase={setUpdatedDatabase}
				/>
			</>
		);
	} else {
		return <Link href="/login">Please login</Link>;
	}
}
