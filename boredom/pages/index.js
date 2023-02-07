import Result from "@/components/Result";
import RandomiseButton from "@/components/RandomiseButton";
import CategorySelector from "@/components/CategorySelector";
import { useState } from "react"

export default function Home() {
	const [category, setCategory] = useState('all');
	const [selectedItem, setSelectedItem] = useState(false);

	return (
		<>
			<CategorySelector category={category} setCategory={setCategory} />
			<RandomiseButton category={category} setSelectedItem={setSelectedItem} />
			<Result selectedItem={selectedItem} />
		</>
	)
}
