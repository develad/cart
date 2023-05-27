import { itemsProps } from "../types/listTypes";
import cat from "../assets/cat.gif";
import { useTranslation } from "react-i18next";

const AllDone = ({ items, isLightMode }: itemsProps) => {
  const { t } = useTranslation();

  const isDone =
    items &&
    items.length !== 0 &&
    items.every((item) => item.isChecked === true);

  return (
    <div className="fixed bottom-0 right-0  grid place-items-end mt-8">
      {isDone ? (
        <div
          className={`flex items-end justify-end transition-opacity opacity-100 ${
            isLightMode
              ? "bg-green-400 border-t-4 border-gray-950"
              : "bg-zinc-800"
          } w-screen pr-4 md:pr-44 lg:pr-[35rem]`}
        >
          <h1 className="text-[2rem] font-black pb-6 mr-4">{t("allDone")}</h1>
          <img src={cat} width="100px" />
        </div>
      ) : (
        <div className="flex items-end justify-end transition-opacity opacity-0  w-screen pr-4 md:pr-44 lg:pr-[35rem] pointer-events-none">
          <h1 className="text-[2rem] font-black pb-6 mr-4 text-center">
            הכל הושלם
          </h1>
          <img src={cat} width="100px" />
        </div>
      )}
    </div>
  );
};

export default AllDone;
