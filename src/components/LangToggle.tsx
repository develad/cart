interface toggleProps {
  changeDirection: () => void;
}

const LangToggle = ({ changeDirection }: toggleProps) => {
  return (
    <input
      type='checkbox'
      className='lang-switch'
      onChange={() => changeDirection()}
    />
  );
};

export default LangToggle;
