interface toggleProps {
  isLightMode: boolean;
  setIsLightMode: (value: React.SetStateAction<boolean>) => void;
}

const ToggleSwitch = ({ isLightMode, setIsLightMode }: toggleProps) => {
  return (
    <input
      type="checkbox"
      className="toggle-switch absolute top-4 left-[60%] -translate-x-1/2"
      checked={isLightMode}
      onChange={() => setIsLightMode(!isLightMode)}
    />
  );
};

export default ToggleSwitch;
