import { useState } from "react";
import { handleAddItemProp } from "../types/listTypes";

function FormItems({ handleAddItem }: handleAddItemProp) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddItem(name, quantity);
    setName("");
    setQuantity(1);
  };
  return (
    <form
      dir='rtl'
      onSubmit={handleSubmit}
      className='w-full md:w-[500px] h-60 bg-gray-700 rounded-2xl p-4 flex flex-col justify-between my-4 mx-auto border-4 border-white'
    >
      <label
        htmlFor='name'
        className='font-bold'
      >
        מוצר
      </label>
      <input
        type='text'
        id='name'
        placeholder='לדוגמה: חלב 🥛'
        onChange={(e) => setName(e.target.value)}
        className='rounded py-1 px-2 text-black'
        value={name}
        required
      />
      <label
        htmlFor='quantity'
        className='font-bold'
      >
        כמות
      </label>
      <input
        type='number'
        id='quantity'
        placeholder='לדוגמה: 3'
        onChange={(e) => setQuantity(e.currentTarget.valueAsNumber)}
        className='rounded py-1 px-2 text-black'
        value={quantity}
        min='1'
      />
      <button
        type='submit'
        className='rounded bg-cyan-400 font-bold p-2 mt-4 disabled:opacity-50'
        disabled={name.trim().length === 0}
      >
        הוספה לרשימה
      </button>
    </form>
  );
}

export default FormItems;
