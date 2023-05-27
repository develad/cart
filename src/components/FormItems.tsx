import { useState, useEffect, useRef } from "react";
import { handleAddItemProps } from "../types/listTypes";
import { useTranslation } from "react-i18next";

function FormItems({
  handleAddItem,
  handleEditItem,
  handleDeleteItem,
  items,
  isLightMode,
  isEditing,
  editItem,
  direction,
}: handleAddItemProps) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { t } = useTranslation();
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
      dir={direction}
      onSubmit={handleSubmit}
      className={`w-11/12  h-60 ${
        isLightMode
          ? "bg-green-400 border-gray-950"
          : "bg-gray-700 border-white"
      } rounded-2xl p-4 flex flex-col justify-between mt-4 mb-8 mx-auto border-4`}
    >
      <label htmlFor="name" className="font-bold text-lg">
        {t("product")}
      </label>
      <input
        type="text"
        id="name"
        placeholder={(!isEditing && t("productPlaceholder")) || ""}
        onChange={(e) => setName(e.target.value)}
        className="rounded py-1 px-2 text-black outline-yellow-300 text-lg"
        value={name}
        ref={textRef}
        required
        disabled={isEditing && !editItem}
      />
      <label htmlFor="quantity" className="font-bold text-lg">
        {t("quantity")}
      </label>
      <input
        type="number"
        id="quantity"
        placeholder="לדוגמה: 3"
        onChange={(e) => setQuantity(e.currentTarget.valueAsNumber)}
        className="rounded py-1 px-2 text-black outline-yellow-300 text-lg"
        value={quantity}
        min="1"
        max="9999999"
        required
        disabled={isEditing && !editItem}
      />
      {!isEditing ? (
        <button
          type="submit"
          className={`rounded ${
            isLightMode ? "bg-yellow-400" : "bg-cyan-400"
          } font-bold p-2 mt-4 text-lg disabled:opacity-50`}
          disabled={name.trim().length === 0}
        >
          {t("addBtn")}
        </button>
      ) : (
        <div className="flex justify-between gap-4 w-full mt-4">
          <button
            type="submit"
            className={`rounded w-1/2  ${
              isLightMode ? "bg-yellow-400" : "bg-cyan-400"
            } font-bold p-2 mt-4 text-lg disabled:opacity-50`}
            disabled={name.trim().length === 0}
          >
            {t("formEditBtn")}
          </button>
          <button
            type="button"
            className={`rounded w-1/2 bg-red-400
             font-bold p-2 mt-4 text-lg disabled:opacity-50`}
            disabled={name.trim().length === 0}
            onClick={handleDeleteItem}
          >
            {t("formDeleteBtn")}
          </button>
        </div>
      )}
    </form>
  );
}

export default FormItems;
