import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "he",
  fallbackLng: "he",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    he: {
      translation: {
        title: "🍪 עגלת קניות",
        product: "מוצר",
        quantity: "כמות",
        productPlaceholder: "לדוגמה: חלב 🥛",
        quantityPlaceholder: "לדוגמה: 3",
        addBtn: "הוספה לרשימה",
        modalText: "למחוק את הרשימה?",
        closeBtn: "סגור",
        deleteBtn: "מחק",
        allDone: "הכל הושלם",
      },
    },
    en: {
      translation: {
        title: "Shopping Cart 🍪",
        product: "Product",
        quantity: "Quantity",
        productPlaceholder: "e.g: Milk 🥛",
        quantityPlaceholder: "e.g: 3",
        addBtn: "Add to List",
        modalText: "?Delete the list",
        closeBtn: "Close",
        deleteBtn: "Delete",
        allDone: "All Done!",
      },
    },
  },
});

export default i18n;
