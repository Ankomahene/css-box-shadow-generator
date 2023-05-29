import { CSSProperties, useState } from 'react';
import { ChromePicker } from 'react-color';

const popover: CSSProperties = {
  position: 'absolute',
  zIndex: 2,
};
const cover: CSSProperties = {
  position: 'fixed',
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px',
};

interface ColorPickerProps {
  color: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (colorRes: any) => void;
}

export const ColorPicker = ({ color, onChange }: ColorPickerProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleClose = () => {
    setIsActive(false);
  };

  return (
    <div className="wrapper relative">
      <button
        className="w-full h-8 rounded-sm border-2 border-gray-400 text-black text-sm"
        onClick={handleClick}
        style={{ backgroundColor: color }}
      >
        {' '}
        {color}
      </button>

      {isActive ? (
        <div style={popover}>
          <div style={cover} onClick={handleClose} />
          <ChromePicker color={color} onChange={onChange} />
        </div>
      ) : null}
    </div>
  );
};
