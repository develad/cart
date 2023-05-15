import trash from '../assets/trash.svg';

interface trashProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLightMode: boolean;
}

const TrashBtn = ({ setIsModalOpen, isLightMode }: trashProps) => {
  return (
    <div
      onClick={() => setIsModalOpen(true)}
      className={` fixed bottom-[10px] left-4 md:left-44 lg:left-[35rem] grid place-items-center bg-red-400 rounded-2xl p-2 border-4 ${
        isLightMode ? 'border-gray-950' : 'border-white'
      } hover:cursor-pointer z-10`}
    >
      <img
        src={trash}
        height='40px'
        width='40px'
      />
    </div>
  );
};

export default TrashBtn;
