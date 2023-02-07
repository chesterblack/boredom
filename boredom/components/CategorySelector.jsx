export default function CategorySelector({ category, categories, setCategory }) {
  let options = [];

  categories.forEach(element => {
    options.push(<option key={`category-option-${element}`} value={element}>{element}</option>);
  })
  
  return (
    <div className="selector">
      <span>Category</span>
      <select
        onChange={(e) => {setCategory(e.target.value)}}
        value={category}
      >
        {options}
      </select>
    </div>
  );
}