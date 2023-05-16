import { useState, useEffect, useRef } from "react";
import { handleAddItemProps } from "../types/listTypes";

function FormItems({
  handleAddItem,
  handleEditItem,
  items,
  isLightMode,
  isEditing,
  editItem,
}: handleAddItemProps) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const textRef = useRef<HTMLInputElement>(null);

  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.focus();
    }
  }, [totalQuantity]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isEditing ? handleEditItem(name, quantity) : handleAddItem(name, quantity);
    setName("");
    setQuantity(1);
  };

  useEffect(() => {
    setName(editItem ? editItem.name : "");
    setQuantity(editItem ? editItem.quantity : 1);
  }, [editItem]);

  return (
    <form
      dir="rtl"
      onSubmit={handleSubmit}
      className={`w-11/12  h-60 ${
        isLightMode
          ? "bg-green-400 border-gray-950"
          : "bg-gray-700 border-white"
      } rounded-2xl p-4 flex flex-col justify-between mt-4 mb-8 mx-auto border-4`}
    >
      <label htmlFor="name" className="font-bold text-lg">
        מוצר
      </label>
      <input
        disabled={isEditing && !editItem}
        type="text"
        id="name"
        placeholder={isEditing ? "בחר פריט מהרשימה" : "לדוגמה: חלב 🥛"}
        onChange={(e) => setName(e.target.value)}
        className="rounded py-1 px-2 text-black outline-yellow-300 text-lg"
        value={name}
        ref={textRef}
        required
      />
      <label htmlFor="quantity" className="font-bold text-lg">
        כמות
      </label>
      <input
        type="number"
        id="quantity"
        placeholder={"לדוגמה: 3"}
        onChange={(e) => setQuantity(e.currentTarget.valueAsNumber)}
        className="rounded py-1 px-2 text-black outline-yellow-300 text-lg"
        value={isEditing && !editItem ? 0 : quantity}
        min="1"
        max="9999999"
        required
        disabled={isEditing && !editItem}
      />
      <button
        type="submit"
        className={`rounded ${
          isLightMode ? "bg-yellow-400" : "bg-cyan-400"
        } font-bold p-2 mt-4 text-lg disabled:opacity-50`}
        disabled={name.trim().length === 0}
      >
        {!isEditing ? "הוספה לרשימה" : "ערוך פריט"}
      </button>
    </form>
  );
}

export default FormItems;
