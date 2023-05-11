import { useState, useEffect, useRef } from "react";
import { handleAddItemProps } from "../types/listTypes";

function FormItems({ handleAddItem, items }: handleAddItemProps) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const textRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddItem(name, quantity);
    setName("");
    setQuantity(1);
  };

  useEffect(() => {
    if (textRef.current) {
      textRef.current.focus();
    }
  }, [items.length]);

  return (
    <form
      dir='rtl'
      onSubmit={handleSubmit}
      className='w-full md:w-[500px] h-60 bg-gray-700 rounded-2xl p-4 flex flex-col justify-between mt-4 mb-8 mx-auto border-4 border-white'
    >
      <label
        htmlFor='name'
        className='font-bold text-lg'
      >
        מוצר
      </label>
      <input
        type='text'
        id='name'
        placeholder='לדוגמה: חלב 🥛'
        onChange={(e) => setName(e.target.value)}
        className='rounded py-1 px-2 text-black outline-yellow-300 text-lg'
        value={name}
        ref={textRef}
        required
      />
      <label
        htmlFor='quantity'
        className='font-bold text-lg'
      >
        כמות
      </label>
      <input
        type='number'
        id='quantity'
        placeholder='לדוגמה: 3'
        onChange={(e) => setQuantity(e.currentTarget.valueAsNumber)}
        className='rounded py-1 px-2 text-black outline-yellow-300 text-lg'
        value={quantity}
        min='1'
        required
      />
      <button
        type='submit'
        className='rounded bg-cyan-400 font-bold p-2 mt-4 text-lg disabled:opacity-50'
        disabled={name.trim().length === 0}
      >
        הוספה לרשימה
      </button>
    </form>
  );
}

export default FormItems;
