export default function Result({ selectedItem }) {
  let categoryList = [];
  let inner = <></>;
  
  if (selectedItem) {
    selectedItem.categories.forEach(category => {
      categoryList.push(<span key={`category-tag-${category}`} className="tag">{category}</span>);
    });

    if (selectedItem.name) {
      inner = <>
        <h2>{selectedItem.name}</h2>
        {categoryList}
      </>;
    }
  }
  
  return inner;
}