export default function Result({ selectedItem }) {
  let categoryList = [];

  if (selectedItem) {
    selectedItem.categories.forEach(category => {
      categoryList.push(<span key={`category-tag-${category}`} className="tag">{category}</span>);
    });
  }
  
  return (
    <>
      <h2>{selectedItem.name}</h2>
      {categoryList}
    </>
  );
}