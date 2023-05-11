import { handlePressProp } from "../types/listTypes";

const ListItem: React.FC<handlePressProp> = ({ item, handlePress }) => {
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    handlePress(item.id, e.target.checked);
  };
  return (
    <li
      className={
        item.isChecked
          ? " flex items-center text-4xl my-2 line-through opacity-50 "
          : " flex items-center text-4xl my-2"
      }
    >
      <input
        type='checkbox'
        checked={item.isChecked}
        onChange={handleChecked}
        className='mx-4 appearance-none checked:bg-emerald-400 rounded-full border-2 border-white cursor-pointer'
        style={{ width: "30px", height: "30px" }}
      />
      <span
        dir='ltr'
        className='font-black flex-1'
      >
        {item.quantity} x {item.name}
      </span>
    </li>
  );
};

export default ListItem;
