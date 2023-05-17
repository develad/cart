import { useState, useEffect } from "react";
import { listItem } from "./types/listTypes";
import ListItems from "./components/ListItems";
import FormItems from "./components/FormItems";
import TrashBtn from "./components/TrashBtn";
import AllDone from "./components/AllDone";
import Modal from "./components/Modal";
import ToggleSwitch from "./components/ToggleSwitch";
import WhatsAppBtn from "./components/WhatsAppBtn";
import { useTranslation } from "react-i18next";

function App() {
  const [listItems, setListItems] = useState<listItem[]>(
    localStorage.items ? JSON.parse(localStorage.items) : []
  );

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLightMode, setIsLightMode] = useState<boolean>(false);
  const [direction, setDirection] = useState<"ltr" | "rtl">("rtl");

  const { i18n, t } = useTranslation();

  useEffect(() => {
    localStorage.items = JSON.stringify(listItems);
  }, [listItems]);

  const handlePress = (id: number, btnState: boolean) => {
    const arr = listItems.map((item) =>
      item.id === id ? { ...item, isChecked: btnState } : item
    );
    setListItems(arr);
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

  const changeDirection = () => {
    setDirection(direction === "ltr" ? "rtl" : "ltr");
    i18n.changeLanguage(direction === "ltr" ? "he" : "en");
  };

  return (
    <div
      className={`min-h-screen ${
        isLightMode ? "text-gray-950  bg-[wheat]" : "bg-zinc-800  text-white"
      } flex flex-col items-center justify-between relative`}
    >
      <ToggleSwitch isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
      <input
        type="checkbox"
        id="checkbox"
        className="toggle-switch top-4 left-[10%]"
        onChange={changeDirection}
      />
      <div className="mx-auto container px-4 pt-16 mb-[60px] pb-[60px] md:w-[600px] ">
        <h1 className="text-4xl text-center font-black ">{t("title")}</h1>
        <FormItems
          handleAddItem={handleAddItem}
          items={listItems}
          isLightMode={isLightMode}
          direction={direction}
        />
        <ListItems
          items={listItems}
          handlePress={handlePress}
          isLightMode={isLightMode}
          direction={direction}
        />
        {listItems.length !== 0 && (
          <>
            <TrashBtn
              setIsModalOpen={setIsModalOpen}
              isLightMode={isLightMode}
            />
            <WhatsAppBtn listItems={listItems} isLightMode={isLightMode} />
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
      <AllDone items={listItems} isLightMode={isLightMode} />
    </div>
  );
}

export default App;
