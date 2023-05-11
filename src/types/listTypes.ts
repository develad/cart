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

interface handleAddItemProps {
  handleAddItem: (name: string, quantity: number) => void;
  items: listItem[];
}

interface handlePressProp {
  handlePress: (id: number, btnState: boolean) => void;
  item: listItem;
}

export type {
  listItem,
  itemsProps,
  itemProp,
  handleAddItemProps,
  handlePressProp,
  handleItemPressProp,
};
