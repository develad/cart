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
        prodcut: "מוצר",
        quantity: "כמות",
        productPlaceholder: "לדוגמה: חלב 🥛",
      },
    },
    en: {
      translation: {
        title: "Shopping Cart 🍪",
        product: "Product",
        quantity: "Quantity",
        productPlaceholder: "e.g: Milk 🥛",
      },
    },
  },
});

export default i18n;
