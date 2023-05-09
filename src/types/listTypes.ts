interface listItem {
  id: number;
  name: string;
  quantity: number;
  isChecked: boolean;
}

interface itemProp {
  item: listItem;
}
interface itemsProps {
  items: listItem[];
}
interface handleItemPressProp {
  items: listItem[];
  handlePress: (id: number, btnState: boolean) => void;
}

interface handleAddItemProp {
  handleAddItem: (name: string, quantity: number) => void;
}

interface handlePressProp {
  handlePress: (id: number, btnState: boolean) => void;
  item: listItem;
}

export type {
  listItem,
  itemsProps,
  itemProp,
  handleAddItemProp,
  handlePressProp,
  handleItemPressProp,
};
