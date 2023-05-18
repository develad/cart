import pencil from '../assets/pencil.svg';
import check from '../assets/check.svg';

interface editProps {
  handleEditList: ({
    shouldKeepEditing,
  }: {
    shouldKeepEditing?: boolean;
  }) => void;
  isLightMode: boolean;
  isEditing: boolean;
}

const EditBtn = ({ handleEditList, isLightMode, isEditing }: editProps) => {
  return (
    <div
      onClick={() => handleEditList({})}
      className={` w-[64px] h-[64px] rounded-2xl border-4 grid place-items-center fixed bottom-[150px] left-4 md:left-44 lg:left-[35rem] ${
        isEditing ? 'bg-violet-700 ' : 'bg-orange-400'
      } rounded-2xl p-2 border-4 ${
        isLightMode ? 'border-gray-950' : 'border-white'
      } hover:cursor-pointer z-10`}
    >
      <img src={isEditing ? check : pencil} />
    </div>
  );
};

export default EditBtn;
