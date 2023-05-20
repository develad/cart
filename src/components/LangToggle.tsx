interface toggleProps {
  direction: 'ltr' | 'rtl';
  changeDirection: () => void;
}

const LangToggle = ({ direction, changeDirection }: toggleProps) => {
  return (
    <input
      type='checkbox'
      className='lang-switch'
      onChange={() => changeDirection()}
      checked={direction === 'rtl' ? false : true}
    />
  );
};

export default LangToggle;
