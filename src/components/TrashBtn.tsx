import trash from "../assets/trash.svg";

interface trashProps {
  handleClear: () => void;
}

const TrashBtn = ({ handleClear }: trashProps) => {
  return (
    <div
      onClick={handleClear}
      className=' fixed bottom-[10px] left-4 md:left-1/3 grid place-items-center bg-red-400 rounded-2xl p-2 border-4 border-white hover:cursor-pointer z-10'
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
