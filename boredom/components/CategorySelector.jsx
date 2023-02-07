import list from "@/lib/list";

export default function CategorySelector({ category, setCategory }) {
  let categories = [
    'all',
  ];
  let options = [];

  list.forEach(element => {
    if (!categories.includes(element.category)) {
      categories.push(element.category);
    }
  });

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