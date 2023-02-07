import list from "@/lib/list";

export default function RandomiseButton({ category, selectedItem, setSelectedItem }) {
  const handleClick = () => {
    let workingList = list;
    if (category !== 'all') {
      workingList = list.filter((el) => {
        return el.categories.includes(category);
      });
    }

    const index = Math.floor(Math.random() * ((workingList.length - 1) - 0 + 1) + 0);

    setSelectedItem(workingList[index]);
  }

  return (
    <button onClick={handleClick}>
      Give me something to do
    </button>
  );
}