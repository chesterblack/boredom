import { useState } from "react";

export default function AddNew({ user, currentList, setCurrentList }) {
	let [rawCategories, setRawCategories] = useState([]);
	const [name, setName] = useState('');
  const [message, setMessage] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		let categories = [];
		rawCategories.forEach(element => {
			categories.push(element.trim());
		});

		const data = {
			user_id: user._id,
			list: [{
				name: name,
				categories: categories,
			}]
		};

		fetch('/api/lists', {
			method: 'POST',
			headers: {
			  'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(response => response.json())
			.then((response) => {
				if (response.status === 200) {
          setCurrentList([...response.list]);
					setMessage(<div className="add-new-message"><strong>{name}</strong> has been added</div>);
				} else {
					setMessage(<div className="add-new-message">Something went wrong, sorry</div>);
				}
			})
	}

	return (
		<div className="add-new">
      <h2>Add new item</h2>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Name of activity</span>
					<input className="name" type="text" name="name" value={name} onChange={(e) => {
						setName(e.target.value);
					}} />
				</label>
				<label>
					<span>Categories (comma separated)</span>
					<input className="categories" type="text" name="categories" value={rawCategories} onChange={(e) => {
						setRawCategories(e.target.value.split(','));
					}} />
				</label>
				<button type="submit">Submit</button>
			</form>
			{message}
		</div>
	);
}