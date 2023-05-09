import { useState, useEffect } from "react";
import { listItem } from "./types/listTypes";
import ListItems from "./components/ListItems";
import FormItems from "./components/FormItems";
import TrashBtn from "./components/TrashBtn";
import AllDone from "./components/AllDone";

function App() {
  const [listItems, setListItems] = useState<listItem[]>(
    localStorage.items ? JSON.parse(localStorage.items) : [],
  );

  useEffect(() => {
    localStorage.items = JSON.stringify(listItems);
  }, [listItems]);

  const handlePress = (id: number, btnState: boolean) => {
    const arr = listItems.map((item) =>
      item.id === id ? { ...item, isChecked: btnState } : item,
    );
    setListItems(arr);
  };

  const handleAddItem = (name: string, quantity: number) => {
    const itemIndex = listItems.findIndex(
      (itemName) =>
        itemName.name.trim().toLowerCase() === name.trim().toLowerCase(),
    );
    if (itemIndex === -1) {
      setListItems((prev) => [
        {
          id: Date.now(),
          name,
          quantity,
          isChecked: false,
        },
        ...prev,
      ]);
    } else {
      const newArr = listItems.map((item, index) => {
        if (index !== itemIndex) {
          return item;
        } else {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }
      });
      setListItems(newArr);
    }
  };

  const handleClear = () => {
    if (window.confirm("למחוק את הרשימה?")) {
      setListItems([]);
    }
  };

  return (
    <div className='min-h-screen bg-zinc-800  text-white '>
      <div className='mx-auto container p-8  md:w-[600px]'>
        <h1 className='text-4xl text-center font-black '>🍪 עגלת קניות</h1>
        <FormItems handleAddItem={handleAddItem} />
        <ListItems
          items={listItems}
          handlePress={handlePress}
        />
        {listItems.length !== 0 && <TrashBtn handleClear={handleClear} />}
      </div>
      <AllDone items={listItems} />
    </div>
  );
}

export default App;
