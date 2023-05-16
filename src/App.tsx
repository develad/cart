import { useState, useEffect } from 'react';
import { listItem } from './types/listTypes';
import ListItems from './components/ListItems';
import FormItems from './components/FormItems';
import TrashBtn from './components/TrashBtn';
import AllDone from './components/AllDone';
import Modal from './components/Modal';
import ToggleSwitch from './components/ToggleSwitch';
import WhatsAppBtn from './components/WhatsAppBtn';

function App() {
  const [listItems, setListItems] = useState<listItem[]>(
    localStorage.items ? JSON.parse(localStorage.items) : [],
  );

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLightMode, setIsLightMode] = useState<boolean>(false);

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

  return (
    <div
      className={`min-h-screen ${
        isLightMode ? 'text-gray-950  bg-[wheat]' : 'bg-zinc-800  text-white'
      } flex flex-col items-center justify-between relative`}
    >
      <ToggleSwitch
        isLightMode={isLightMode}
        setIsLightMode={setIsLightMode}
      />
      <div className='mx-auto container px-4 pt-16 mb-[60px] pb-[60px] md:w-[600px] '>
        <h1 className='text-4xl text-center font-black '>🍪 עגלת קניות</h1>
        <FormItems
          handleAddItem={handleAddItem}
          items={listItems}
          isLightMode={isLightMode}
        />
        <ListItems
          items={listItems}
          handlePress={handlePress}
          isLightMode={isLightMode}
        />
        {listItems.length !== 0 && (
          <>
            <TrashBtn
              setIsModalOpen={setIsModalOpen}
              isLightMode={isLightMode}
            />
            <WhatsAppBtn
              listItems={listItems}
              isLightMode={isLightMode}
            />
          </>
        )}
      </div>
      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          setListItems={setListItems}
          isLightMode={isLightMode}
        />
      )}
      <AllDone
        items={listItems}
        isLightMode={isLightMode}
      />
    </div>
  );
}

export default App;
