import { itemsProps } from "../types/listTypes";
import cat from "../assets/cat.gif";

const AllDone = ({ items }: itemsProps) => {
  const isDone =
    items &&
    items.length !== 0 &&
    items.every((item) => item.isChecked === true);

  return (
    <div className='fixed bottom-[-10px] right-0 w-full grid place-items-center '>
      {isDone ? (
        <div className='flex items-end justify-center pl-20 transition-opacity opacity-100'>
          <h1 className='text-2xl font-black pb-6 mx-2'>הכל הושלם</h1>
          <img
            src='https://i.pinimg.com/originals/43/15/38/431538fe336b95c2f004ba46df917fb4.gif'
            width='100px'
          />
        </div>
      ) : (
        <div className='flex items-end justify-center pl-20 transition-opacity opacity-0 pointer-events-none'>
          <h1 className='text-2xl font-black pb-6 mx-2'>הכל הושלם</h1>
          <img
            src={cat}
            width='100px'
          />
        </div>
      )}
    </div>
  );
};

export default AllDone;
