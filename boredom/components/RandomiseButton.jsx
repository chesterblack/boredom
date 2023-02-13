export default function RandomiseButton({ category, setSelectedItem, currentList }) {
  const handleClick = () => {
    let workingList = currentList;
    if (category !== 'all') {
      workingList = currentList.filter((el) => {
        return el.categories.includes(category);
      });
    }

    const index = Math.floor(Math.random() * ((workingList.length - 1) - 0 + 1) + 0);

    setSelectedItem(workingList[index]);
  }

  return (
    <button className="randomise-button" onClick={handleClick}>
      Give me something to do
    </button>
  );
}