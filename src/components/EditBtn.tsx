import pencil from "../assets/pencil.svg";
import check from "../assets/check.svg";

interface editProps {
  handleEditList: () => void;
  isLightMode: boolean;
  isEditing: boolean;
}

const EditBtn = ({ handleEditList, isLightMode, isEditing }: editProps) => {
  return (
    <div
      onClick={handleEditList}
      className={` fixed bottom-[10px] left-4 md:left-20 lg:left-[30rem] grid place-items-center ${
        isEditing ? "bg-green-400 " : "bg-orange-400"
      } rounded-2xl p-2 border-4 ${
        isLightMode ? "border-gray-950" : "border-white"
      } hover:cursor-pointer z-10`}
    >
      <img src={isEditing ? check : pencil} height="40px" width="40px" />
    </div>
  );
};

export default EditBtn;
