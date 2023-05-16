import { handleItemPressProp } from "../types/listTypes";
import ListItem from "./ListItem";

const ListItems: React.FC<handleItemPressProp> = ({
  items,
  isLightMode,
  handlePress,
  isEditing,
  editItem,
}) => {
  return (
    <ul dir="rtl">
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          isLightMode={isLightMode}
          handlePress={handlePress}
          isEditing={isEditing}
          editItem={editItem}
        />
      ))}
    </ul>
  );
};

export default ListItems;
