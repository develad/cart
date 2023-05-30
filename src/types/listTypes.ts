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
  isLightMode: boolean;
}
interface handleItemPressProp {
  items: listItem[];
  handlePress: (id: number, btnState: boolean) => void;
  isLightMode: boolean;
  isEditing: boolean;
  editItem: listItem | null;
  direction: "ltr" | "rtl";
}

interface handleAddItemProps {
  handleAddItem: (name: string, quantity: number) => void;
  handleEditItem: (name: string, quantity: number) => void;
  handleDeleteItem: () => void;
  items: listItem[];
  isLightMode: boolean;
  isEditing: boolean;
  editItem: listItem | null;
  direction: "ltr" | "rtl";
}

interface handlePressProp {
  handlePress: (id: number, btnState: boolean) => void;
  item: listItem;
  isLightMode: boolean;
  isEditing: boolean;
  editItem: listItem | null;
  direction: "ltr" | "rtl";
}

export type {
  listItem,
  itemsProps,
  itemProp,
  handleAddItemProps,
  handlePressProp,
  handleItemPressProp,
};
