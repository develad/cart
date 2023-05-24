interface toggleProps {
  isLightMode: boolean;
  setIsLightMode: (value: React.SetStateAction<boolean>) => void;
}

const ToggleSwitch = ({ isLightMode, setIsLightMode }: toggleProps) => {
  return (
    <input
      type='checkbox'
      className='toggle-switch'
      checked={isLightMode}
      onChange={() => setIsLightMode(!isLightMode)}
    />
  );
};

export default ToggleSwitch;
