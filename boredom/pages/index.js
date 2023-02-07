import Result from "@/components/Result";
import RandomiseButton from "@/components/RandomiseButton";
import CategorySelector from "@/components/CategorySelector";

import list from "@/lib/list";

import { useState } from "react"

export default function Home() {
	const [category, setCategory] = useState('all');
	const [selectedItem, setSelectedItem] = useState(false);

	let categories = [
		'all',
	];
	list.forEach(element => {
		element.categories.forEach(cat => {
			if (!categories.includes(cat)) {
				categories.push(cat);
			}
		});
	});

	return (
		<>
			<CategorySelector category={category} categories={categories} setCategory={setCategory} />
			<RandomiseButton category={category} setSelectedItem={setSelectedItem} />
			<Result selectedItem={selectedItem} />
		</>
	)
}
