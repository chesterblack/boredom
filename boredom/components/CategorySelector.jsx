export default function CategorySelector({ category, categories, setCategory }) {
  let options = [];

  categories.forEach(element => {
    options.push(<option value={element}>{element}</option>);
  })
  
  return (
    <select
      onChange={(e) => {setCategory(e.target.value)}}
      defaultValue={category}
    >
      {options}
    </select>
  );
}