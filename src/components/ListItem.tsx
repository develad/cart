import { handlePressProp } from '../types/listTypes';

const ListItem: React.FC<handlePressProp> = ({
  item,
  isLightMode,
  editItem,
  handlePress,
}) => {
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    handlePress(item.id, e.target.checked);
  };

  console.log(editItem?.id);
  console.log(item.id);
  return (
    <li
      className={
        'mx-auto py-0.5 w-[100%] md:w-[85%]' +
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
        className={`mx-4 appearance-none checked:bg-emerald-400 rounded-full border-2 ${
          isLightMode ? 'border-gray-950' : 'border-white'
        } ${
          editItem?.id === item.id && 'checked:bg-orange-400'
        } cursor-pointer`}
        style={{ width: '30px', height: '30px' }}
      />
      <p className='font-black flex-1 '>
        {item.name} <span dir='ltr'>{item.quantity} x</span>
      </p>
    </li>
  );
};

export default ListItem;
