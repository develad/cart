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
  direction: "ltr" | "rtl";
}

interface handleAddItemProps {
  handleAddItem: (name: string, quantity: number) => void;
  items: listItem[];
  isLightMode: boolean;
  direction: "ltr" | "rtl";
}

interface handlePressProp {
  handlePress: (id: number, btnState: boolean) => void;
  item: listItem;
  isLightMode: boolean;
}

export type {
  listItem,
  itemsProps,
  itemProp,
  handleAddItemProps,
  handlePressProp,
  handleItemPressProp,
};
