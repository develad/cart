import { handleItemPressProp } from "../types/listTypes";
import ListItem from "./ListItem";

const ListItems: React.FC<handleItemPressProp> = ({ items, handlePress }) => {
  return (
    <ul dir='rtl'>
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          handlePress={handlePress}
        />
      ))}
    </ul>
  );
};

export default ListItems;
