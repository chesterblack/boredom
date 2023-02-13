import Result from "@/components/Result";
import RandomiseButton from "@/components/RandomiseButton";
import CategorySelector from "@/components/CategorySelector";

import { useState } from "react";
import AddNew from "./AddNew";

export default function Home({ user, currentList, setCurrentList }) {
	const [category, setCategory] = useState('all');
	const [selectedItem, setSelectedItem] = useState(false);

	let categories = [
		'all',
	];

  if (currentList) {
    console.log('has currentList');
    currentList.forEach(element => {
      element.categories.forEach(cat => {
        if (!categories.includes(cat)) {
          categories.push(cat);
        }
      });
    });
  } else {
    console.log('no currentList');
  }

  return (
    <>
      <div className="controls">
        <CategorySelector
          category={category}
          categories={categories}
          setCategory={setCategory}
          currentList={currentList}
        />
        <RandomiseButton
          category={category}
          setSelectedItem={setSelectedItem}
          currentList={currentList}
        />
      </div>

      <Result selectedItem={selectedItem} currentList={currentList} />

      <AddNew user={user} currentList={currentList} setCurrentList={setCurrentList} />
    </>
  )
}
