import { ChangeEventHandler } from 'react';

const sliderStyles =
  'slider bg-gradient-to-r from-blue-300 to-blue-200 rounded-md appearance-none h-3 w-full';
const valueStyles = 'text-blue-600 font-medium pr-2';
const boxStyles = 'my-6';
const textStyles = 'py-1';

interface ISliderProps {
  minValue: number;
  maxValue: number;
  value: number;
  label: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
export const Slider = ({
  minValue,
  maxValue,
  value,
  label,
  onChange,
}: ISliderProps) => {
  return (
    <div className={boxStyles}>
      <div className="flex items-center justify-between">
        <p className={textStyles}>{label}</p>
        <p className={valueStyles}>{value}px</p>
      </div>
      <input
        type="range"
        className={sliderStyles}
        min={minValue}
        max={maxValue}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
