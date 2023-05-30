import { useState, useEffect } from "react";
import { listItem } from "./types/listTypes";
import {
  ListItems,
  FormItems,
  TrashBtn,
  AllDone,
  Modal,
  WhatsAppBtn,
  EditBtn,
} from "./components";
import { useTranslation } from "react-i18next";
import ToggleBox from "./components/ToggleBox";

function App() {
  const [listItems, setListItems] = useState<listItem[]>(
    localStorage.items ? JSON.parse(localStorage.items) : []
  );

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLightMode, setIsLightMode] = useState<boolean>(
    localStorage.isLightMode ? JSON.parse(localStorage.isLightMode) : false
  );
  const [direction, setDirection] = useState<"ltr" | "rtl">(
    localStorage.direction ? JSON.parse(localStorage.direction) : "rtl"
  );

  const { i18n, t } = useTranslation();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editItem, setEditItem] = useState<listItem | null>(null);

  useEffect(() => {
    localStorage.items = JSON.stringify(listItems);
  }, [listItems]);

  useEffect(() => {
    localStorage.direction = JSON.stringify(direction);
    i18n.changeLanguage(direction === "rtl" ? "he" : "en");
  }, [direction]);

  useEffect(() => {
    localStorage.isLightMode = JSON.stringify(isLightMode);
  }, [isLightMode]);

  const handlePress = (id: number, btnState: boolean) => {
    if (isEditing) {
      for (const item of listItems)
        if (item.id === id) {
          setEditItem(item);
          return;
        }
    }

    const updatedList = listItems.map((item) =>
      item.id === id ? { ...item, isChecked: btnState } : item
    );
    setListItems(updatedList);
  };

  const handleAddItem = (name: string, quantity: number) => {
    const itemIndex = listItems.findIndex(
      (itemName) =>
        itemName.name.trim().toLowerCase() === name.trim().toLowerCase()
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

  const handleEditList = (shouldKeepEditing?: boolean) => {
    setIsEditing(
      shouldKeepEditing !== undefined ? shouldKeepEditing : !isEditing
    );
    setEditItem(null);
  };

  const handleEditItem = (name: string, quantity: number) => {
    const updatedList = listItems.map((item) =>
      item.id === editItem?.id
        ? { ...item, name: name, quantity: quantity }
        : item
    );
    setListItems(updatedList);
    setEditItem(null);
  };

  const handleDeleteItem = () => {
    const updatedList = listItems.filter((item) => item.id !== editItem?.id);
    setListItems(updatedList);
    setEditItem(null);
    if (updatedList.length === 0) setIsEditing(false);
  };

  const changeDirection = () => {
    setDirection(direction === "ltr" ? "rtl" : "ltr");
  };

  return (
    <div
      className={`min-h-screen ${
        isLightMode ? "text-gray-950  bg-[wheat]" : "bg-zinc-800  text-white"
      } flex flex-col items-center flex-1 relative`}
    >
      <ToggleBox
        changeDirection={changeDirection}
        isLightMode={isLightMode}
        setIsLightMode={setIsLightMode}
        direction={direction}
      />
      <div className="mx-auto container px-4 pt-4 mb-[60px] pb-[60px] md:w-[600px] ">
        <h1 className="text-4xl text-center font-black ">{t("title")}</h1>
        <FormItems
          handleAddItem={handleAddItem}
          handleEditItem={handleEditItem}
          handleDeleteItem={handleDeleteItem}
          items={listItems}
          isLightMode={isLightMode}
          isEditing={isEditing}
          editItem={editItem}
          direction={direction}
        />
        <ListItems
          items={listItems}
          handlePress={handlePress}
          isLightMode={isLightMode}
          isEditing={isEditing}
          editItem={editItem}
          direction={direction}
        />
        {listItems.length !== 0 && (
          <>
            <TrashBtn
              setIsModalOpen={setIsModalOpen}
              isLightMode={isLightMode}
            />
            <WhatsAppBtn listItems={listItems} isLightMode={isLightMode} />

            <EditBtn
              handleEditList={handleEditList}
              isLightMode={isLightMode}
              isEditing={isEditing}
            />
          </>
        )}
      </div>
      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          setListItems={setListItems}
          isLightMode={isLightMode}
          handleEditList={handleEditList}
          direction={direction}
        />
      )}
      <AllDone items={listItems} isLightMode={isLightMode} />
    </div>
  );
}

export default App;
