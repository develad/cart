import cat from "../assets/cat_2.gif";
import { listItem } from "../types/listTypes";

interface modalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setListItems: React.Dispatch<React.SetStateAction<listItem[]>>;
}

const Modal = ({ setIsModalOpen, setListItems }: modalProps) => {
  const handleClear = () => {
    setListItems([]);
    setIsModalOpen(false);
  };

  return (
    <div
      dir='rtl'
      className='absolute top-0 left-0 right-0 bottom-0 bg-black/80 z-50 pt-32 overflow-hidden flex items-start justify-center min-h-screen'
    >
      <div className='w-5/6 md:w-[500px] h-[500px] border-4 border-white rounded-3xl bg-zinc-600 flex flex-col items-center p-16'>
        <p className='text-4xl font-black text-center mb-8'>למחוק את הרשימה?</p>
        <div className='flex items-center gap-4 md:gap-8 w-full mb-16'>
          <button
            className='rounded bg-red-400 font-bold p-2 flex-1'
            onClick={handleClear}
          >
            מחק
          </button>
          <button
            className='rounded bg-cyan-400 font-bold p-2 flex-1'
            onClick={() => setIsModalOpen(false)}
          >
            סגור
          </button>
        </div>
        <img
          src={cat}
          className='w-[150px] md:w-[250px]'
        />
      </div>
    </div>
  );
};

export default Modal;
