import { handlePressProp } from '../types/listTypes';

const ListItem: React.FC<handlePressProp> = ({
  item,
  isLightMode,
  editItem,
  handlePress,
  direction,
}) => {
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    handlePress(item.id, e.target.checked);
  };

  console.log(editItem);
  console.log(item.id);
  return (
    <li
      className={
        'mx-auto py-0.5 w-full md:w-[85%]' +
        `${
          item.isChecked
            ? ' flex items-center text-4xl mb-1 line-through opacity-50'
            : ' flex items-center text-4xl mb-1'
        }` +
        `${
          editItem?.id === item.id
            ? ' outline-yellow-500 outline-4 outline rounded-lg'
            : ''
        }`
      }
    >
      <input
        type='checkbox'
        checked={item.isChecked}
        onChange={handleChecked}
        className={`mx-4 appearance-none checked:bg-emerald-400 rounded-full border-2  ${
          isLightMode ? 'border-gray-950' : 'border-white'
        } ${editItem?.id === item.id && 'bg-orange-400'} cursor-pointer`}
        style={{ width: '30px', height: '30px' }}
      />
      <p
        className={`font-black flex-1 ${
          editItem && editItem?.id !== item.id && 'opacity-50'
        } `}
        dir='ltr'
      >
        {direction === 'rtl'
          ? `${item.quantity} x ${item.name}`
          : `${item.name} x ${item.quantity}`}
      </p>
    </li>
  );
};

export default ListItem;
