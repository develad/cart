import { handleItemPressProp } from "../types/listTypes";
import ListItem from "./ListItem";

const ListItems: React.FC<handleItemPressProp> = ({
  items,
  isLightMode,
  handlePress,
  direction,
}) => {
  return (
    <ul dir={direction}>
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          isLightMode={isLightMode}
          handlePress={handlePress}
          direction={direction}
        />
      ))}
    </ul>
  );
};

export default ListItems;
