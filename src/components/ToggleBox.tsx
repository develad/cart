import { Dispatch, SetStateAction } from 'react';
import { ToggleSwitch } from '.';
import LangToggle from './LangToggle';

interface toggleProps {
  changeDirection: () => void;
  isLightMode: boolean;
  setIsLightMode: Dispatch<SetStateAction<boolean>>;
}
const ToggleBox = ({
  changeDirection,
  isLightMode,
  setIsLightMode,
}: toggleProps) => {
  return (
    <div className='flex items-center gap-8 pt-8'>
      <LangToggle changeDirection={changeDirection} />
      <ToggleSwitch
        isLightMode={isLightMode}
        setIsLightMode={setIsLightMode}
      />
    </div>
  );
};

export default ToggleBox;
