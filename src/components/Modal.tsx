import { useTranslation } from "react-i18next";
import cat from "../assets/cat_2.gif";
import { listItem } from "../types/listTypes";

interface modalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setListItems: React.Dispatch<React.SetStateAction<listItem[]>>;
  isLightMode: boolean;
}

const Modal = ({ setIsModalOpen, setListItems, isLightMode }: modalProps) => {
  const handleClear = () => {
    setListItems([]);
    setIsModalOpen(false);
  };

  const { t } = useTranslation();

  return (
    <div
      dir="rtl"
      className="absolute top-0 left-0 right-0 bottom-0 bg-black/80 z-50 flex items-center justify-center min-h-screen"
    >
      <div
        className={`w-5/6 md:w-[500px] h-[500px] border-4 ${
          isLightMode
            ? "border-gray-950 bg-green-400"
            : "border-white bg-zinc-700"
        } rounded-3xl  flex flex-col items-center p-16`}
      >
        <p className="text-4xl font-black text-center mb-8">{t("modalText")}</p>
        <div className="flex items-center gap-4 md:gap-8 w-full mb-16">
          <button
            className={`rounded bg-red-400 font-bold p-2 flex-1 ${
              isLightMode ? "border-4 border-gray-950" : ""
            }`}
            onClick={handleClear}
          >
            {t("deleteBtn")}
          </button>
          <button
            className={`rounded bg-cyan-400 font-bold p-2 flex-1 ${
              isLightMode ? "border-4 border-gray-950" : ""
            }`}
            onClick={() => setIsModalOpen(false)}
          >
            {t("closeBtn")}
          </button>
        </div>
        <img src={cat} className="w-[150px] md:w-[250px]" />
      </div>
    </div>
  );
};

export default Modal;
